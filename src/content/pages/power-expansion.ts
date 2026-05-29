import type { PageContent } from '@/content/types';

export const powerExpansion: PageContent = {
  slug: '/power-expansion-bess',
  seoTitle: 'Power Expansion With BESS Malaysia | Solunar Energy',
  metaDescription:
    'Need more power but grid upgrades are slow? Solunar uses BESS, PCS and EMS to expand usable power capacity for factories, data centres and EV charging in Malaysia.',
  navLabel: 'Power Expansion with BESS',
  eyebrow: 'Solutions · Power Expansion',
  h1: 'Power Expansion with BESS',
  lead: 'Solunar helps businesses overcome power constraints by integrating Battery Energy Storage System (BESS), PCS, EMS and solar-ready infrastructure — supporting higher load demand, peak shaving, backup power and future expansion, without relying only on traditional grid upgrades.',
  intro: [
    'Whether you are planning new production lines, EV chargers, data-centre loads, cold storage, automation or high-power equipment, Solunar provides a practical way to increase usable power capacity. More power. Better control. Faster deployment.',
  ],
  heroActions: [{ label: 'Talk to Solunar about Power Expansion', href: '/contact' }],
  image: {
    src: '/images/power-expansion.png',
    alt: 'Factory and data centre with battery storage and EV charging supporting power expansion in Malaysia',
    aspect: '4 / 3',
  },
  primaryKeyword: 'power expansion BESS Malaysia',
  schema: { type: 'Service', serviceType: 'Power expansion with BESS' },
  blocks: [
    {
      kind: 'prose',
      heading: 'Your business needs more power — but the grid may not be ready',
      paragraphs: [
        "As Malaysia's industrial and commercial electricity demand grows, many factories, data centres, warehouses, logistics hubs and manufacturing plants face the same problem: they need more power, but the grid cannot always supply it fast enough.",
        'For many businesses, power limitation is no longer just a technical issue — it has become a growth bottleneck that delays new machinery, new lines and new revenue.',
      ],
    },
    {
      kind: 'cards',
      heading: 'Common power-expansion challenges',
      lead: 'Getting additional supply from the grid can be slow, costly and uncertain. The recurring obstacles are:',
      columns: 2,
      items: [
        {
          icon: 'integration',
          title: 'Limited grid capacity',
          text: 'Many sites already run close to their approved capacity; the existing infrastructure cannot support extra load immediately.',
        },
        {
          icon: 'gauge',
          title: 'Long waiting time for upgrades',
          text: 'Higher maximum demand or new incoming supply may need technical studies, transformer and cable upgrades, substation works and approvals.',
        },
        {
          icon: 'expansion',
          title: 'High infrastructure cost',
          text: 'Transformers, switchgear, cabling, substations and civil works carry heavy capital cost — with uncertain payback.',
        },
        {
          icon: 'manufacturing',
          title: 'Expansion gets delayed',
          text: 'Without power, new production lines, cold-room expansion, EV charging or automation simply wait.',
        },
      ],
    },
    {
      kind: 'prose',
      heading: 'Why traditional power expansion is no longer enough',
      paragraphs: [
        'The traditional fix is simple: apply for more grid capacity. But today that route is not always fast or flexible enough.',
        'The better question is no longer "how do I wait for more power?" — it is "how do I store, manage and release power intelligently when I need it most?" That is exactly what a BESS enables.',
      ],
    },
    {
      kind: 'cards',
      heading: 'How BESS supports power expansion',
      lead: 'Battery storage works as an intelligent energy buffer alongside your grid connection:',
      columns: 2,
      items: [
        {
          icon: 'expansion',
          title: 'More usable power, no immediate grid upgrade',
          text: 'If your supply limit is 2 MW but operations occasionally need 2.5 MW, the BESS can discharge the extra 500 kW during peaks — letting you run higher loads within the grid limit.',
        },
        {
          icon: 'manufacturing',
          title: 'Support new machinery & lines',
          text: 'Provide extra power during machine start-up, peak-load operation and production ramp-up for compressors, CNC, moulding, cold rooms and automation.',
        },
        {
          icon: 'gauge',
          title: 'Reduce maximum-demand charges',
          text: 'Discharging during peak periods lowers the highest recorded grid demand — peak shaving that cuts cost and frees headroom.',
        },
        {
          icon: 'safety',
          title: 'Protect existing infrastructure',
          text: 'Managing load flow and smoothing sudden spikes reduces stress on transformers, switchgear and distribution.',
        },
        {
          icon: 'settings',
          title: 'Faster to deploy than grid upgrades',
          text: 'An on-site BESS can often be deployed faster than utility-coordinated upgrades — a practical bridge while long-term enhancements are planned.',
        },
      ],
    },
    {
      kind: 'list',
      variant: 'cards',
      columns: 3,
      heading: 'Who needs power expansion with BESS?',
      lead: 'This solution suits businesses with growing electricity demand, including:',
      items: [
        { title: 'Manufacturing plants', text: 'Adding machines, production lines or automation.' },
        { title: 'Data centres', text: 'High reliability, peak support and energy scalability.' },
        { title: 'Logistics & cold storage', text: 'Large refrigeration loads, compressors and 24-hour operations.' },
        { title: 'EV charging hubs', text: 'High-power chargers where grid capacity is limited.' },
        { title: 'Commercial buildings & malls', text: 'Rising tenant demand, HVAC and electrification.' },
        { title: 'Industrial parks & developers', text: 'Flexible, reliable power infrastructure for tenants and LSS/CRESS projects.' },
      ],
    },
    {
      kind: 'cards',
      heading: "Solunar's total solution",
      lead: 'Solunar is not just a battery supplier — we deliver a complete, integrated BESS solution:',
      columns: 3,
      items: [
        { icon: 'battery', title: 'Battery Energy Storage', text: 'Commercial and utility-scale BESS for industrial and grid-connected applications.' },
        { icon: 'pcs', title: 'Power Conversion (PCS)', text: 'Controls charge/discharge between battery, grid, solar PV and load.' },
        { icon: 'ems', title: 'Energy Management (EMS)', text: 'Monitors and automates energy flow by load, tariff and solar generation.' },
        { icon: 'integration', title: 'System integration', text: 'Engineering across BESS, solar, switchgear, transformer and grid connection.' },
        { icon: 'om', title: 'Operation & maintenance', text: 'Monitoring, preventive maintenance and performance optimisation.' },
        { icon: 'sun', title: 'Solar-ready design', text: 'Works with existing or future solar PV for deeper savings and resilience.' },
      ],
    },
    {
      kind: 'prose',
      heading: 'Example: before and after BESS',
      paragraphs: [
        'Before: a factory has an approved grid capacity of 2 MW. New machines push peak demand to 2.5 MW — so expansion is delayed by slow, expensive grid upgrades.',
        'After: Solunar designs a BESS to discharge during peaks. The grid still supplies up to 2 MW while the battery covers the extra demand. The factory expands now — with more usable power, better cost control and less pressure on the grid connection.',
      ],
    },
    {
      kind: 'list',
      variant: 'check',
      columns: 2,
      heading: 'Business benefits',
      lead: 'Power expansion with BESS delivers value across operations and finance:',
      items: [
        'Expand operations faster, without waiting for full grid upgrades',
        'Reduce electricity cost through intelligent peak shaving',
        'Improve energy reliability and on-site flexibility',
        'Improve solar ROI through higher self-consumption',
        'Future-proof for electrification, EV charging and automation',
        'Strengthen ESG by reducing fossil-fuel backup reliance',
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          question: 'Can BESS really replace a grid upgrade?',
          answer:
            'BESS is a bridge and a complement, not always a permanent replacement. It can supply additional peak power on demand so you expand now, while any longer-term grid upgrade is planned. Solunar sizes the system to your actual peak shortfall.',
        },
        {
          question: 'How fast can a power-expansion BESS be deployed?',
          answer:
            'On-site BESS can often be commissioned faster than utility-coordinated upgrades, because it avoids substation and incoming-supply works. Timelines depend on system size, site readiness and approvals.',
        },
      ],
    },
    {
      kind: 'cta',
      heading: 'Need more power for your business expansion?',
      text: 'Before committing to costly grid upgrades or delaying your plans, talk to Solunar. We can assess your load profile, maximum-demand pattern, solar potential and BESS sizing.',
      actions: [
        { label: 'Talk to Solunar about Power Expansion', href: '/contact' },
        { label: 'See Maximum Demand Peak Shaving', href: '/peak-shaving-malaysia' },
      ],
    },
  ],
};
