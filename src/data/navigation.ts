export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}

export const mainNavigation: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Interieur',
    href: '/interieur/',
    children: [
      { label: 'Wekker kind', href: '/beste-wekker-kind/' },
      { label: 'Bijzettafel hout', href: '/beste-bijzettafel-hout/' },
      { label: 'Digitale wekker', href: '/beste-digitale-wekker/' },
      { label: 'Mini naaimachine', href: '/beste-mini-naaimachine/' },
      { label: 'Elektrische droogrek', href: '/beste-elektrische-droogrek/' },
      { label: 'Wekker met projectie', href: '/beste-wekker-met-projectie/' },
      { label: 'Douchekop met slang', href: '/beste-douchekop-met-slang/' },
      { label: 'Zuinige elektrische kachel', href: '/beste-zuinige-elektrische-kachel/' },
      { label: 'Tussenstuk wasmachine droger', href: '/beste-tussenstuk-wasmachine-droger/' },
      { label: 'Elektrische kachel met thermostaat', href: '/beste-elektrische-kachel-met-thermostaat/' },
    ],
  },
  {
    label: 'Tuingerei',
    href: '/tuingerei/',
    children: [
      { label: 'Bladblazer', href: '/beste-bladblazer/' },
      { label: 'Grasmaaier', href: '/beste-grasmaaier/' },
      { label: 'Robot grasmaaier', href: '/beste-robot-grasmaaier/' },
      { label: 'Snoeigereedschap', href: '/beste-snoeigereedschap/' },
      { label: 'Onkruidverwijderaar', href: '/beste-onkruidverwijderaar/' },
      { label: 'Elektrische grasmaaier', href: '/beste-elektrische-grasmaaier/' },
      { label: 'Heggenschaar op steel', href: '/beste-heggenschaar-op-steel/' },
      { label: 'Onkruidbrander op gas', href: '/beste-onkruidbrander-op-gas/' },
      { label: 'Elektrische heggenschaar', href: '/beste-elektrische-heggenschaar/' },
      { label: 'Elektrische onkruidverwijderaar', href: '/beste-elektrische-onkruidverwijderaar/' },
    ],
  },
  {
    label: 'Tuinmeubelen',
    href: '/tuinmeubelen/',
    children: [
      { label: 'Tuinset', href: '/beste-tuinset/' },
      { label: 'Tuinkast', href: '/beste-tuinkast/' },
      { label: 'Tuinstoel', href: '/beste-tuinstoel/' },
      { label: 'Rotan tuinset', href: '/beste-rotan-tuinset/' },
      { label: 'Rotan tuinstoel', href: '/beste-rotan-tuinstoel/' },
      { label: 'Bamboe tuinset', href: '/beste-bamboe-tuinset/' },
      { label: 'Bijzettafel buiten', href: '/beste-bijzettafel-buiten/' },
      { label: 'Kunststof tuinstoel', href: '/beste-kunststof-tuinstoel/' },
      { label: 'Verstelbare tuinstoel', href: '/beste-verstelbare-tuinstoel/' },
      { label: 'Kussenhoes tuinstoel', href: '/beste-kussenhoes-tuinstoel/' },
    ],
  },
  { label: 'Contact', href: '/contact/' },
];

export const socialLinks = [
  { label: 'Youtube', href: 'https://youtube.com', icon: 'youtube' },
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
];
