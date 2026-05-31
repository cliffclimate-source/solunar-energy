export const solutionsOverviewMeta = {
  slug: '/solutions',
  seoTitle: 'Solar + BESS Solutions Malaysia | Solunar Energy',
  metaDescription:
    'Explore Solunar’s full range of Solar + BESS solutions — commercial & industrial storage, utility-scale ESS, peak shaving, power expansion, O&M, safety and more — each matched to a real business problem.',
  navLabel: 'Solutions',
  eyebrow: 'Solutions',
  h1: 'Solar + BESS Solutions for Every Energy Challenge',
  lead: 'From cutting maximum-demand charges to building grid-scale storage farms, Solunar matches the right battery energy storage solution to your problem. Explore each solution below — the challenge it solves, and how we help.',
  primaryKeyword: 'Solar BESS solutions Malaysia',
};

export type SolutionSummary = {
  title: string;
  href: string;
  image: string;
  category: string;
  problem: string;
  solution: string;
};

export const solutionSummaries: SolutionSummary[] = [
  {
    title: 'Commercial & Industrial BESS',
    href: '/commercial-industrial-bess-malaysia',
    image: '/images/commercial-industrial-bess.png',
    category: 'C&I',
    problem:
      'Factories, malls and commercial buildings face rising maximum-demand charges, limited incoming power and pressure to use more solar — but solar alone can’t control when energy is used.',
    solution:
      'A right-sized BESS shaves demand peaks, stores excess solar, supports power expansion and improves resilience — designed around your actual load, tariff and growth plans.',
  },
  {
    title: 'Maximum Demand Peak Shaving',
    href: '/peak-shaving-malaysia',
    image: '/images/peak-shaving.png',
    category: 'C&I',
    problem:
      'A short spike when machines, chillers or compressors run together can set a high maximum demand — inflating the whole monthly bill, even when average usage is modest.',
    solution:
      'The EMS discharges the battery automatically during peaks so the grid sees a lower demand, reducing demand charges without disrupting operations. We model the savings from your real load data.',
  },
  {
    title: 'Power Expansion with BESS',
    href: '/power-expansion-bess',
    image: '/images/power-expansion.png',
    category: 'C&I',
    problem:
      'New production lines, cold rooms, EV charging or data loads need more power — but grid upgrades are slow, costly and uncertain, delaying growth.',
    solution:
      'A BESS supplies additional peak power on demand, letting you expand now while any longer-term grid upgrade is planned — and easing stress on existing infrastructure.',
  },
  {
    title: 'Utility-Scale ESS Farms',
    href: '/utility-scale-ess-malaysia',
    image: '/images/utility-scale-ess.png',
    category: 'Utility',
    problem:
      'Large solar and grid-connected projects must manage intermittency, grid compliance, safety at scale and long-term performance to satisfy developers, lenders and offtakers.',
    solution:
      'End-to-end utility-scale support: battery selection, PCS/EMS/SCADA, grid-compliance, fire safety, monitoring and O&M — engineered to be bankable for LSS, CRESS and grid-scale storage.',
  },
  {
    title: 'BYD Utility BESS · LSS / CRESS',
    href: '/byd-utility-bess',
    image: '/images/byd-utility-hero.png',
    category: 'Utility',
    problem:
      'Grid-scale solar and CRESS projects need a proven, safety-focused, total storage solution that banks and authorities will accept.',
    solution:
      'A complete BYD-powered utility-scale BESS solution — LFP safety, integrated PCS/EMS and grid support — tailored for LSS, CRESS and large grid-connected solar in Malaysia.',
  },
  {
    title: 'For Developers & Asset Owners',
    href: '/solar-bess-developers',
    image: '/images/solar-bess-developers.png',
    category: 'Developers',
    problem:
      'Solar-only projects face thinner margins and tougher financier requirements; adding storage is complex and risky to build in-house.',
    solution:
      'We provide the BESS technology and integration layer — feasibility, architecture, bankability support and O&M — turning solar assets into dispatchable, financeable Solar + BESS projects.',
  },
  {
    title: 'O&M for ESS Projects',
    href: '/bess-om-malaysia',
    image: '/images/bess-om.png',
    category: 'Operations',
    problem:
      'A battery asset that isn’t actively maintained drifts out of spec — cells imbalance, alarms go unactioned and warranties can be breached, eroding performance and value.',
    solution:
      'Proactive O&M: remote monitoring, battery-health tracking, PCS/EMS checks, thermal and fire-system inspection and reporting — protecting safety, performance and bankability for 10–15 years.',
  },
  {
    title: 'BESS Safety & Reliability',
    href: '/bess-safety',
    image: '/images/bess-safety.png',
    category: 'Operations',
    problem:
      'For owners, lenders and insurers, BESS safety isn’t a feature — it’s a condition of investment. Poorly handled safety blocks financing and creates real operational risk.',
    solution:
      'We build safety in from day one — chemistry, BMS, thermal management, fire detection and suppression, protection and emergency response — making projects safer, insurable and bankable.',
  },
  {
    title: 'Future Local Assembly',
    href: '/local-bess-assembly',
    image: '/images/local-assembly.png',
    category: 'Localisation',
    problem:
      'Reliance on fully imported systems means longer delivery, higher logistics cost, limited customisation and weaker local after-sales support.',
    solution:
      'Solunar is building towards local BESS assembly and support in Malaysia — faster delivery, stronger after-sales, local-content advantages and a more resilient regional supply chain.',
  },
];
