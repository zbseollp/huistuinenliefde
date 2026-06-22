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
    href: '/beste-bijzettafel-hout/',
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
      { label: 'Balkon parasol', href: '/balkon-parasol/' },
      { label: 'Bijzettafel hout', href: '/beste-bijzettafel-hout/' },
      { label: 'Digitale wekker', href: '/beste-digitale-wekker/' },
      { label: 'Elektrische droogrek', href: '/beste-elektrische-droogrek/' },
      { label: 'Boomstam bijzettafel', href: '/beste-bijzettafel-hout/' },
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
      { label: 'Loungeset', href: '/beste-tuinset/' },
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
      { label: 'Elektrische onkruidbrander', href: '/beste-onkruidbrander-op-gas/' },
    ],
  },
  {
    title: 'Bloempotten/PLANTENBAKKEN',
    image: '/images/categories/bloempotten.jpg',
    imageAlt: 'Bloempotten en plantenbakken',
    links: [
      { label: 'Bloempot', href: '/bloempot/' },
      { label: 'Balkonbak', href: '/balkonbak/' },
      { label: 'Plantenzak', href: '/plantenzak/' },
      { label: 'Plantenmand', href: '/plantenmand/' },
      { label: 'Terracotta bloempot', href: '/terracotta-bloempot/' },
      { label: 'Hoge bloempot binnen', href: '/hoge-bloempot-binnen/' },
    ],
  },
  {
    title: 'Tuindecoratie',
    image: '/images/categories/tuindecoratie.jpg',
    imageAlt: 'Tuindecoratie en accessoires',
    links: [
      { label: 'Tuinbeeld', href: '/tuinbeeld/' },
      { label: 'Rozenboog', href: '/rozenboog/' },
      { label: 'Tuinkussen', href: '/tuinkussen/' },
      { label: 'Insectenhotel', href: '/insectenhotel/' },
      { label: 'Uv lamp vijver', href: '/uv-lamp-vijver/' },
      { label: 'Hanging basket', href: '/hanging-basket/' },
    ],
  },
  {
    title: 'Bestratingsartikelen',
    image: '/images/categories/bestrating.jpg',
    imageAlt: 'Bestrating en tuinafscheiding',
    links: [
      { label: 'Hek', href: '/hek/' },
      { label: 'Tuinhout', href: '/tuinhout/' },
      { label: 'Schutting', href: '/schutting/' },
      { label: 'Bestrating', href: '/bestrating/' },
      { label: 'Schuttingpaal', href: '/schuttingpaal/' },
      { label: 'Schuttingdeur', href: '/schuttingdeur/' },
    ],
  },
];

export const footerCategories = [
  {
    title: 'Bloempotten',
    links: [
      { label: 'Bloempot', href: '/bloempot/' },
      { label: 'Balkonbak', href: '/balkonbak/' },
      { label: 'Verticale tuin', href: '/verticale-tuin/' },
      { label: 'Bloempot buiten', href: '/bloempot-buiten/' },
      { label: 'Bloempot binnen', href: '/bloempot-binnen/' },
      { label: 'Bloempot op poten', href: '/bloempot-op-poten/' },
      { label: 'Hoge bloempot binnen', href: '/hoge-bloempot-binnen/' },
    ],
  },
  {
    title: 'Tuindecoratie',
    links: [
      { label: 'Tuinbeeld', href: '/tuinbeeld/' },
      { label: 'Bestrating', href: '/bestrating/' },
      { label: 'Kunstgras', href: '/kunstgras/' },
      { label: 'Buitenmat', href: '/buitenmat/' },
      { label: 'Rozenboog', href: '/rozenboog/' },
      { label: 'Tuinkussen', href: '/tuinkussen/' },
      { label: 'Tuinkleding', href: '/tuinkleding/' },
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
