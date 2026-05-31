/**
 * Sitewide configuration: brand identity, contact details, navigation and
 * footer structure. Values marked `TODO` are placeholders to replace before
 * launch (see README "Before launch" checklist).
 */

export const site = {
  name: 'Solunar Energy',
  legalName: 'Solunar Energy Sdn Bhd',
  shortName: 'Solunar',
  tagline: 'The Solar + BESS technology partner behind EPCC companies.',
  description:
    'Solunar Energy is a Solar + BESS distributor and system integrator in Malaysia, supporting EPCCs, developers and asset owners with battery storage, PCS, EMS and O&M.',
  // Production domain. Override per-environment with NEXT_PUBLIC_SITE_URL.
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://solunar.my',
  locale: 'en_MY',
  contact: {
    email: 'sales@solunar.my',
    phoneDisplay: '+60 16-668 9348',
    phoneHref: 'tel:+60166689348',
    whatsapp: '60166689348',
    whatsappHref:
      'https://wa.me/60166689348?text=Hi%20Solunar%2C%20I%27d%20like%20to%20discuss%20a%20Solar%20%2B%20BESS%20project.',
  },
  address: {
    streetAddress: 'Unit 304A, C3-09 Damansara, No. 99 Jalan Damansara',
    locality: 'Kuala Lumpur',
    region: 'Wilayah Persekutuan Kuala Lumpur',
    postalCode: '60000',
    country: 'MY',
  },
  companyNo: '1575507-K',
  areaServed: ['Malaysia', 'Southeast Asia'],
  social: {
    // TODO: add real social profile URLs.
    linkedin: '',
  },
} as const;

export type NavLink = { label: string; href: string; description?: string };
export type NavGroup = { label: string; items: NavLink[] };
export type NavEntry = NavLink | NavGroup;

export function isNavGroup(entry: NavEntry): entry is NavGroup {
  return (entry as NavGroup).items !== undefined;
}

export const primaryNav: NavEntry[] = [
  { label: 'About Us', href: '/about' },
  { label: 'For EPCC', href: '/for-epcc' },
  {
    label: 'Technology',
    items: [
      { label: 'BYD Battery Solutions', href: '/byd-battery-malaysia', description: 'Safety-focused LFP battery integration.' },
      { label: 'GoodWe Inverters & Batteries', href: '/goodwe-inverter-malaysia', description: 'Solar, hybrid and storage inverters.' },
      { label: 'EVE BESS Integration', href: '/eve-bess-integration', description: 'LFP storage with thermal and safety design.' },
      { label: 'Multi-Brand Integration', href: '/multi-brand-bess-integration', description: 'The right architecture for each project.' },
      { label: 'PCS, EMS & Architecture', href: '/pcs-ems-system-integration', description: 'Coordinating the full storage system.' },
    ],
  },
  { label: 'Products', href: '/products' },
  {
    label: 'Solutions',
    items: [
      { label: 'All Solutions — Overview', href: '/solutions', description: 'See every Solar + BESS solution on one page.' },
      { label: 'BYD Utility BESS · LSS6 / CRESS', href: '/byd-utility-bess', description: 'Total utility-scale BESS solution for LSS6, CRESS and grid-scale solar.' },
      { label: 'Commercial & Industrial BESS', href: '/commercial-industrial-bess-malaysia', description: 'Peak shaving, self-consumption, resilience.' },
      { label: 'Utility-Scale ESS Farms', href: '/utility-scale-ess-malaysia', description: 'Technology support for large storage assets.' },
      { label: 'O&M for ESS Projects', href: '/bess-om-malaysia', description: 'Long-term battery health and safety.' },
      { label: 'BESS Safety & Reliability', href: '/bess-safety', description: 'Thermal, fire and electrical safety review.' },
      { label: 'Maximum Demand Peak Shaving', href: '/peak-shaving-malaysia', description: 'Reduce maximum demand charges.' },
      { label: 'Power Expansion with BESS', href: '/power-expansion-bess', description: 'Add peak power while the grid catches up.' },
      { label: 'For Developers & Asset Owners', href: '/solar-bess-developers', description: 'Make Solar + BESS assets bankable.' },
      { label: 'Future Local Assembly', href: '/local-bess-assembly', description: 'Building towards localised BESS assembly.' },
    ],
  },
  { label: 'Industries', href: '/industries' },
  { label: 'Knowledge', href: '/knowledge-centre' },
];

export const footerNav: { title: string; links: NavLink[] }[] = [
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      { label: 'For EPCC', href: '/for-epcc' },
      { label: 'Industries We Serve', href: '/industries' },
    ],
  },
  {
    title: 'Technology',
    links: [
      { label: 'Products', href: '/products' },
      { label: 'BYD Battery Solutions', href: '/byd-battery-malaysia' },
      { label: 'GoodWe Inverters & Batteries', href: '/goodwe-inverter-malaysia' },
      { label: 'EVE BESS Integration', href: '/eve-bess-integration' },
      { label: 'Multi-Brand Integration', href: '/multi-brand-bess-integration' },
      { label: 'PCS, EMS & Architecture', href: '/pcs-ems-system-integration' },
    ],
  },
  {
    title: 'Solutions',
    links: [
      { label: 'All Solutions', href: '/solutions' },
      { label: 'BYD Utility BESS (LSS6/CRESS)', href: '/byd-utility-bess' },
      { label: 'Commercial & Industrial BESS', href: '/commercial-industrial-bess-malaysia' },
      { label: 'Utility-Scale ESS Farms', href: '/utility-scale-ess-malaysia' },
      { label: 'O&M for ESS Projects', href: '/bess-om-malaysia' },
      { label: 'BESS Safety & Reliability', href: '/bess-safety' },
      { label: 'Maximum Demand Peak Shaving', href: '/peak-shaving-malaysia' },
      { label: 'Power Expansion with BESS', href: '/power-expansion-bess' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Solar + BESS for Developers', href: '/solar-bess-developers' },
      { label: 'Future Local Assembly', href: '/local-bess-assembly' },
      { label: 'Knowledge Centre', href: '/knowledge-centre' },
      { label: 'Contact / Project Assessment', href: '/contact' },
    ],
  },
];
