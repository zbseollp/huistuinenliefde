export interface CategoryCard {
  title: string;
  image: string;
  imageAlt: string;
  links: { label: string; href: string }[];
}

export const heroCategories = [
  { label: 'HUIS', href: '/interieur/', image: '/images/hero/huis.jpg', imageAlt: 'Interieur en wooninrichting' },
  { label: 'TUIN', href: '/tuingerei/', image: '/images/hero/tuin.jpg', imageAlt: 'Tuin en tuingerei' },
  { label: 'FAMILIE', href: '/blog/', image: '/images/hero/familie.jpg', imageAlt: 'Familie en lifestyle' },
];

export const styleProducts = [
  {
    title: 'Boomstam bijzettafel',
    href: '/beste-boomstam-bijzettafel/',
    image: '/images/products/boomstam-bijzettafel.jpg',
    imageAlt: 'Boomstam bijzettafel in woonkamer',
  },
  {
    title: 'Mini naaimachine',
    href: '/beste-mini-naaimachine/',
    image: '/images/products/mini-naaimachine.jpg',
    imageAlt: 'Mini naaimachine voor thuis',
  },
  {
    title: 'Digitale wekker',
    href: '/beste-digitale-wekker/',
    image: '/images/products/digitale-wekker.jpg',
    imageAlt: 'Digitale wekker op nachtkastje',
  },
  {
    title: 'Zuinige elektrische kachel',
    href: '/beste-zuinige-elektrische-kachel/',
    image: '/images/products/zuinige-elektrische-kachel.jpg',
    imageAlt: 'Zuinige elektrische kachel',
  },
];

export const categorySections: CategoryCard[] = [
  {
    title: 'wooninrichting',
    image: '/images/categories/wooninrichting.jpg',
    imageAlt: 'Wooninrichting en interieur',
    links: [
      { label: 'Balkon parasol', href: '/beste-balkon-parasol/' },
      { label: 'Bijzettafel hout', href: '/beste-bijzettafel-hout/' },
      { label: 'Digitale wekker', href: '/beste-digitale-wekker/' },
      { label: 'Elektrische droogrek', href: '/beste-elektrische-droogrek/' },
      { label: 'Boomstam bijzettafel', href: '/beste-boomstam-bijzettafel/' },
      { label: 'Douchekop met slang', href: '/beste-douchekop-met-slang/' },
    ],
  },
  {
    title: 'Tuinmeubelen',
    image: '/images/categories/tuinmeubelen.jpg',
    imageAlt: 'Tuinmeubelen en tuinsets',
    links: [
      { label: 'Tuinset', href: '/beste-tuinset/' },
      { label: 'Tuinstoel', href: '/beste-tuinstoel/' },
      { label: 'Loungeset', href: '/beste-loungeset/' },
      { label: 'Rotan tuinstoel', href: '/beste-rotan-tuinstoel/' },
      { label: 'Kunststof tuinstoel', href: '/beste-kunststof-tuinstoel/' },
      { label: 'Verstelbare tuinstoel', href: '/beste-verstelbare-tuinstoel/' },
    ],
  },
  {
    title: 'Gereedschap',
    image: '/images/categories/gereedschap.jpg',
    imageAlt: 'Tuingereedschap en onderhoud',
    links: [
      { label: 'Robot grasmaaier', href: '/beste-robot-grasmaaier/' },
      { label: 'Snoeigereedschap', href: '/beste-snoeigereedschap/' },
      { label: 'Onkruidverwijderaar', href: '/beste-onkruidverwijderaar/' },
      { label: 'Heggenschaar op steel', href: '/beste-heggenschaar-op-steel/' },
      { label: 'Elektrische grasmaaier', href: '/beste-elektrische-grasmaaier/' },
      { label: 'Elektrische onkruidbrander', href: '/beste-elektrische-onkruidbrander/' },
    ],
  },
  {
    title: 'Bloempotten/PLANTENBAKKEN',
    image: '/images/categories/bloempotten.jpg',
    imageAlt: 'Bloempotten en plantenbakken',
    links: [
      { label: 'Bloempot', href: '/beste-bloempot/' },
      { label: 'Balkonbak', href: '/beste-balkonbak/' },
      { label: 'Plantenzak', href: '/beste-plantenzak/' },
      { label: 'Plantenmand', href: '/beste-plantenmand/' },
      { label: 'Terracotta bloempot', href: '/beste-terracotta-bloempot/' },
      { label: 'Hoge bloempot binnen', href: '/beste-hoge-bloempot-binnen/' },
    ],
  },
  {
    title: 'Tuindecoratie',
    image: '/images/categories/tuindecoratie.jpg',
    imageAlt: 'Tuindecoratie en accessoires',
    links: [
      { label: 'Tuinbeeld', href: '/beste-tuinbeeld/' },
      { label: 'Rozenboog', href: '/beste-rozenboog/' },
      { label: 'Tuinkussen', href: '/beste-tuinkussen/' },
      { label: 'Insectenhotel', href: '/beste-insectenhotel/' },
      { label: 'Uv lamp vijver', href: '/beste-uv-lamp-vijver/' },
      { label: 'Hanging basket', href: '/beste-hanging-basket/' },
    ],
  },
  {
    title: 'Bestratingsartikelen',
    image: '/images/categories/bestrating.jpg',
    imageAlt: 'Bestrating en tuinafscheiding',
    links: [
      { label: 'Hek', href: '/beste-hek/' },
      { label: 'Tuinhout', href: '/beste-tuinhout/' },
      { label: 'Schutting', href: '/beste-schutting/' },
      { label: 'Bestrating', href: '/beste-bestrating/' },
      { label: 'Schuttingpaal', href: '/beste-schuttingpaal/' },
      { label: 'Schuttingdeur', href: '/beste-schuttingdeur/' },
    ],
  },
];

export const footerCategories = [
  {
    title: 'Bloempotten',
    links: [
      { label: 'Bloempot', href: '/beste-bloempot/' },
      { label: 'Balkonbak', href: '/beste-balkonbak/' },
      { label: 'Verticale tuin', href: '/beste-verticale-tuin/' },
      { label: 'Bloempot buiten', href: '/beste-bloempot-buiten/' },
      { label: 'Bloempot binnen', href: '/beste-bloempot-binnen/' },
      { label: 'Bloempot op poten', href: '/beste-bloempot-op-poten/' },
      { label: 'Hoge bloempot binnen', href: '/beste-hoge-bloempot-binnen/' },
    ],
  },
  {
    title: 'Tuindecoratie',
    links: [
      { label: 'Tuinbeeld', href: '/beste-tuinbeeld/' },
      { label: 'Bestrating', href: '/beste-bestrating/' },
      { label: 'Kunstgras', href: '/beste-kunstgras/' },
      { label: 'Buitenmat', href: '/beste-buitenmat/' },
      { label: 'Rozenboog', href: '/beste-rozenboog/' },
      { label: 'Tuinkussen', href: '/beste-tuinkussen/' },
      { label: 'Tuinkleding', href: '/beste-tuinkleding/' },
    ],
  },
  {
    title: 'Tuinsets & tuinstoelen',
    links: [
      { label: 'Tuinset', href: '/beste-tuinset/' },
      { label: 'Tuinstoel', href: '/beste-tuinstoel/' },
      { label: 'Rotan tuinset', href: '/beste-rotan-tuinset/' },
      { label: 'Rotan tuinstoel', href: '/beste-rotan-tuinstoel/' },
      { label: 'Bamboe tuinset', href: '/beste-bamboe-tuinset/' },
      { label: 'Kunststof tuinstoel', href: '/beste-kunststof-tuinstoel/' },
      { label: 'Verstelbare tuinstoel', href: '/beste-verstelbare-tuinstoel/' },
    ],
  },
];
