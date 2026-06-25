#!/usr/bin/env python3
"""Scrape product comparison pages from the live site into HTML + Astro frontmatter."""

from __future__ import annotations

import hashlib
import html as html_lib
import re
import subprocess
import sys
import xml.etree.ElementTree as ET
from concurrent.futures import ThreadPoolExecutor, as_completed
from pathlib import Path
from urllib.parse import urlparse

ROOT = Path(__file__).resolve().parents[1]
PAGES_DIR = ROOT / "src/content/pages"
HTML_DIR = ROOT / "src/content/product-html"
PUBLIC_UPLOADS = ROOT / "public/wp-content/uploads"
PUBLIC_PRODUCTS = ROOT / "public/images/products"
SITE_URL = "https://huistuinenliefde.nl"
SITEMAP_URL = f"{SITE_URL}/zb_mp-sitemap.xml"


def yaml_quote(value: str) -> str:
    escaped = value.replace("\\", "\\\\").replace('"', '\\"')
    return f'"{escaped}"'


def sanitize(value: str, limit: int = 500) -> str:
    value = re.sub(r"\s+", " ", value or "").strip()
    return value[:limit]


def fetch_url(url: str) -> str:
    result = subprocess.run(
        ["curl", "-sfL", url],
        capture_output=True,
        text=True,
    )
    if result.returncode != 0:
        raise RuntimeError(f"Failed to fetch {url}: {result.stderr.strip()}")
    return result.stdout


def parse_sitemap() -> list[str]:
    xml = fetch_url(SITEMAP_URL)
    root = ET.fromstring(xml)
    ns = {"sm": "http://www.sitemaps.org/schemas/sitemap/0.9"}
    urls = []
    for loc in root.findall(".//sm:loc", ns):
        if loc.text:
            urls.append(loc.text.strip())
    if not urls:
        for loc in root.iter():
            if loc.tag.endswith("loc") and loc.text:
                urls.append(loc.text.strip())
    return urls


def download_file(url: str, dest: Path) -> bool:
    if dest.exists() and dest.stat().st_size > 0:
        return True
    dest.parent.mkdir(parents=True, exist_ok=True)
    result = subprocess.run(
        ["curl", "-sfL", url, "-o", str(dest)],
        capture_output=True,
        text=True,
    )
    return result.returncode == 0 and dest.exists() and dest.stat().st_size > 0


def local_image_url(url: str) -> str:
    if "/wp-content/uploads/" in url:
        rel = url.split("/wp-content/uploads/", 1)[1].split('"')[0].split("'")[0]
        dest = PUBLIC_UPLOADS / rel
        download_file(url if url.startswith("http") else f"{SITE_URL}{url}", dest)
        return f"/wp-content/uploads/{rel}"

    parsed = urlparse(url)
    if parsed.netloc:
        name = Path(parsed.path).name or "image.jpg"
        if not Path(name).suffix:
            name = f"{name}.jpg"
        digest = hashlib.md5(url.encode()).hexdigest()[:10]
        dest = PUBLIC_PRODUCTS / f"{digest}-{name}"
        download_file(url, dest)
        return f"/images/products/{dest.name}"

    return url


def rewrite_html(content: str) -> str:
    content = re.sub(r"<script[\s\S]*?</script>", "", content, flags=re.I)
    content = re.sub(r"<style[\s\S]*?</style>", "", content, flags=re.I)
    content = re.sub(r"<!--[\s\S]*?-->", "", content)

    def replace_attr(match: re.Match) -> str:
        attr = match.group(1)
        url = html_lib.unescape(match.group(2))
        if "/wp-content/uploads/" in url or "myfreeimagehost.com" in url:
            local = local_image_url(url)
            return f'{attr}="{local}"'
        if url.startswith(SITE_URL):
            local = re.sub(rf"^{re.escape(SITE_URL)}/?", "/", url)
            if not local.endswith("/") and "." not in local.split("/")[-1]:
                local = f"{local}/"
            return f'{attr}="{local}"'
        return match.group(0)

    content = re.sub(r'(src|href)="(https?://[^"]+)"', replace_attr, content)
    content = re.sub(
        rf"{re.escape(SITE_URL)}/([a-z0-9\-_/]+)/?",
        r"/\1/",
        content,
    )
    return content


def extract_html(html: str) -> tuple[str, str, str]:
    title_match = re.search(r'property="og:title" content="([^"]+)"', html)
    desc_match = re.search(r'name="description" content="([^"]+)"', html)
    title = sanitize(html_lib.unescape(title_match.group(1)) if title_match else "")
    description = sanitize(html_lib.unescape(desc_match.group(1)) if desc_match else title)

    footer_idx = html.find("<footer")
    marker_idx = html.find('data-elementor-type="wp-page"')
    if marker_idx < 0:
        start_idx = html.find("<body")
    else:
        start_idx = html.rfind("<div", max(0, marker_idx - 80), marker_idx)
        if start_idx < 0:
            start_idx = marker_idx
    chunk = html[start_idx : footer_idx if footer_idx > 0 else None]
    chunk = rewrite_html(chunk)
    return title, description, chunk.strip()


def write_page_files(slug: str, frontmatter: dict[str, str], body_html: str) -> None:
    HTML_DIR.mkdir(parents=True, exist_ok=True)
    PAGES_DIR.mkdir(parents=True, exist_ok=True)

    (HTML_DIR / f"{slug}.html").write_text(body_html, encoding="utf-8")

    lines = ["---"]
    for key, value in frontmatter.items():
        lines.append(f"{key}: {yaml_quote(value)}")
    lines.extend(["---", ""])
    (PAGES_DIR / f"{slug}.mdx").write_text("\n".join(lines), encoding="utf-8")


def migrate_url(url: str, skip_existing: bool) -> tuple[str, str]:
    slug = url.rstrip("/").rsplit("/", 1)[-1]
    html_path = HTML_DIR / f"{slug}.html"
    if skip_existing and html_path.exists():
        return slug, "skipped"

    html = fetch_url(url)
    title, description, body_html = extract_html(html)
    if not title or not body_html:
        return slug, "missing-content"

    write_page_files(
        slug,
        {
            "title": title,
            "description": description,
            "pageType": "product",
        },
        body_html,
    )
    return slug, "ok"


def main() -> int:
    skip_existing = "--force" not in sys.argv
    urls = parse_sitemap()
    product_urls = urls

    print(f"Found {len(product_urls)} product pages in sitemap")
    ok = skipped = failed = 0

    with ThreadPoolExecutor(max_workers=4) as pool:
        futures = {
            pool.submit(migrate_url, url, skip_existing): url for url in product_urls
        }
        for future in as_completed(futures):
            slug, status = future.result()
            if status == "ok":
                ok += 1
            elif status == "skipped":
                skipped += 1
            else:
                failed += 1
                print(f"  failed: {slug} ({status})")

    print(f"Done: {ok} migrated, {skipped} skipped, {failed} failed")
    return 0 if failed == 0 else 1


if __name__ == "__main__":
    raise SystemExit(main())
