import type { PageContent } from '@/content/types';

export const commercialIndustrial: PageContent = {
  slug: '/commercial-industrial-bess-malaysia',
  seoTitle: 'Commercial & Industrial BESS Malaysia | C&I Storage | Solunar',
  metaDescription:
    'Solunar supports C&I BESS in Malaysia for factories, cold storage, malls, hospitals and data centres — peak shaving, self-consumption and backup.',
  navLabel: 'Commercial & Industrial BESS',
  eyebrow: 'Solutions · C&I',
  h1: 'Commercial & Industrial BESS for Factories, Buildings and Industrial Users in Malaysia',
  lead: 'Commercial and industrial (C&I) BESS is battery storage deployed at factories, buildings and industrial sites to cut peak demand charges, support self-consumption and improve energy resilience — and Solunar Energy supports these projects across Malaysia.',
  heroActions: [{ label: 'Assess My C&I BESS Project', href: '/contact' }],
  image: {
    src: '/images/commercial-industrial-bess.png',
    alt: 'Commercial & industrial BESS cabinets beside a factory with rooftop solar in Malaysia',
    prompt:
      'Photorealistic commercial & industrial battery storage cabinets beside a Malaysian factory, rooftop solar panels visible, daytime, clean industrial, wide angle.',
    aspect: '4 / 3',
  },
  primaryKeyword: 'commercial BESS Malaysia',
  schema: { type: 'Service', serviceType: 'Commercial and industrial BESS support' },
  blocks: [
    {
      kind: 'prose',
      heading: 'The pressures facing C&I energy users',
      paragraphs: [
        'C&I customers face higher energy costs, peak demand charges, power constraints and ESG pressure. Battery storage gives these sites a way to control demand, store solar energy and improve resilience.',
      ],
    },
    {
      kind: 'list',
      variant: 'inline',
      heading: 'Where Solunar supports C&I projects',
      lead: 'Solunar supports EPCC partners and end users across many C&I site types:',
      items: [
        'Factories',
        'Cold storage',
        'Warehouses',
        'Shopping malls',
        'Hotels',
        'Hospitals',
        'Commercial buildings',
        'Industrial parks',
        'Data centres',
        'EV charging sites',
      ],
    },
    {
      kind: 'list',
      variant: 'check',
      columns: 2,
      heading: 'Typical C&I use cases',
      lead: 'Typical C&I BESS use cases include:',
      items: [
        'Maximum demand peak shaving',
        'Solar self-consumption',
        'Backup power',
        'Power expansion',
        'Load shifting',
        'Energy optimisation',
        'Diesel reduction',
        'ESG / carbon reduction',
      ],
    },
    {
      kind: 'cards',
      heading: 'The challenges C&I sites face',
      lead: 'Commercial and industrial sites in Malaysia share a common set of energy pressures:',
      columns: 2,
      items: [
        {
          icon: 'gauge',
          title: 'High maximum-demand charges',
          text: 'A single monthly demand spike can inflate the bill for the whole period, even when average consumption is modest.',
        },
        {
          icon: 'expansion',
          title: 'Power & expansion constraints',
          text: 'New machinery, cold rooms or EV charging can exceed the existing supply — and grid upgrades are slow and costly.',
        },
        {
          icon: 'battery',
          title: 'Rising energy cost & ESG pressure',
          text: 'Tariffs trend upward while customers, investors and group HQs push for measurable carbon reduction.',
        },
        {
          icon: 'safety',
          title: 'Outage & resilience risk',
          text: 'Unplanned outages disrupt production, cold chain and uptime — with direct cost and reputational impact.',
        },
      ],
    },
    {
      kind: 'steps',
      heading: 'How Solunar delivers your C&I BESS',
      lead: 'Solunar takes a C&I storage project from first enquiry to long-term operation:',
      items: [
        { title: 'Load & tariff review', text: 'We analyse your load profile, maximum demand and tariff to find where storage pays back.' },
        { title: 'System sizing & design', text: 'We size the battery, PCS and EMS to your peaks, available space and budget.' },
        { title: 'Integration & commissioning', text: 'We coordinate battery, PCS, EMS, protection and metering, then commission to specification.' },
        { title: 'Monitoring & O&M', text: 'We support remote monitoring, maintenance and long-term battery-health management.' },
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          question: 'How quickly can a C&I BESS pay back?',
          answer:
            'Payback depends on your maximum-demand charges, tariff, load profile, system size and operating strategy. Solunar models this per site rather than promising a fixed figure.',
        },
        {
          question: 'Can BESS work with our existing solar?',
          answer:
            'Yes. BESS pairs with existing or new rooftop solar to store excess generation, lift self-consumption and shave demand — coordinated through the EMS.',
        },
        {
          question: 'Do we need to upgrade our grid connection first?',
          answer:
            'Often not immediately. A BESS can supply additional peak power on demand, supporting expansion while any longer-term grid upgrade is planned.',
        },
      ],
    },
    {
      kind: 'cta',
      heading: 'Have a C&I site that could benefit from storage?',
      text: 'Solunar can assess peak shaving, self-consumption and resilience options for your commercial or industrial site.',
      actions: [
        { label: 'Assess My C&I BESS Project', href: '/contact' },
        { label: 'How Peak Shaving Works', href: '/peak-shaving-malaysia' },
      ],
    },
  ],
};

export const utilityScale: PageContent = {
  slug: '/utility-scale-ess-malaysia',
  seoTitle: 'Utility-Scale ESS Malaysia | Energy Storage Farms | Solunar',
  metaDescription:
    'Solunar supports utility-scale ESS farms in Malaysia — battery selection, PCS/transformer config, EMS/SCADA, fire safety and long-term O&M.',
  navLabel: 'Utility-Scale ESS Farms',
  eyebrow: 'Solutions · Utility-Scale',
  h1: 'Technology Support for Utility-Scale Energy Storage Assets in Malaysia',
  lead: 'Utility-scale ESS farms are large battery storage assets that require strong technical planning, equipment selection, integration, monitoring and long-term O&M — and Solunar Energy supports developers, asset owners and EPCCs delivering them in Malaysia and Southeast Asia.',
  heroActions: [{ label: 'Discuss Utility-Scale ESS Support', href: '/contact' }],
  image: {
    src: '/images/utility-scale-ess.png',
    alt: 'Rows of utility-scale BESS containers at a solar farm in Malaysia',
    prompt:
      'Photorealistic rows of utility-scale BESS containers at a large solar farm in Malaysia / Southeast Asia, transformers and switchgear, wide aerial perspective, clear blue sky.',
    aspect: '4 / 3',
  },
  primaryKeyword: 'utility-scale ESS Malaysia',
  schema: { type: 'Service', serviceType: 'Utility-scale ESS technology support' },
  blocks: [
    {
      kind: 'list',
      variant: 'inline',
      heading: "What Solunar's utility-scale support covers",
      lead: "Solunar's utility-scale support covers the full technical lifecycle of a storage asset:",
      items: [
        'Battery system selection',
        'PCS and transformer configuration',
        'EMS and SCADA coordination',
        'Fire safety planning',
        'Cooling system review',
        'Site layout support',
        'Performance monitoring',
        'O&M strategy',
        'Warranty coordination',
        'Spare parts planning',
        'Asset-owner reporting',
      ],
    },
    {
      kind: 'cta',
      heading: 'Developing a utility-scale ESS farm?',
      text: 'Solunar supports developers, asset owners and EPCCs with battery selection, integration, monitoring and long-term O&M.',
      actions: [
        { label: 'Discuss Utility-Scale ESS Support', href: '/contact' },
        { label: 'For Developers & Asset Owners', href: '/solar-bess-developers' },
      ],
    },
  ],
};

export const bessOm: PageContent = {
  slug: '/bess-om-malaysia',
  seoTitle: 'BESS O&M Malaysia | Energy Storage Maintenance | Solunar',
  metaDescription:
    'BESS O&M differs from solar O&M. Solunar monitors battery health, temperature, software and safety systems for commercial and utility-scale ESS.',
  navLabel: 'O&M for ESS Projects',
  eyebrow: 'Solutions · O&M',
  h1: 'O&M for Commercial and Utility-Scale ESS in Malaysia',
  lead: 'BESS O&M (operation and maintenance) is the ongoing monitoring, maintenance and safety management of a battery storage asset — and it differs from solar O&M because it must also track battery health, temperature, software controls and safety systems.',
  heroActions: [{ label: 'Request ESS O&M Support', href: '/contact' }],
  image: {
    src: '/images/bess-om.png',
    alt: 'Engineer inspecting a BESS container during O&M in Malaysia',
    prompt:
      'Photorealistic Malaysian Chinese engineer in PPE inspecting a BESS container with a tablet, checking battery racks and cooling, O&M context, daytime, professional.',
    aspect: '4 / 3',
  },
  primaryKeyword: 'BESS O&M Malaysia',
  schema: { type: 'Service', serviceType: 'BESS operation and maintenance (O&M)' },
  blocks: [
    {
      kind: 'prose',
      heading: 'How BESS O&M differs from solar O&M',
      paragraphs: [
        'While solar O&M focuses on panels, inverters and generation, ESS O&M adds battery health, thermal behaviour, charge-discharge control, software and degradation. Solunar supports O&M planning and technical coordination for ESS projects.',
      ],
    },
    {
      kind: 'table',
      heading: 'Solar O&M vs BESS O&M',
      lead: 'The table compares where solar PV O&M and BESS O&M focus their attention.',
      columns: ['O&M Focus', 'Solar PV', 'BESS'],
      rows: [
        ['Hardware', 'Panels, inverters', 'Battery, PCS, EMS, cooling, fire systems'],
        ['Monitoring', 'Generation, yield', 'SoC, SoH, temperature, alarms'],
        ['Software', 'Inverter firmware', 'EMS logic, firmware coordination'],
        ['Safety', 'Electrical', 'Thermal, fire suppression, emergency shutdown'],
      ],
      caption: 'Comparison of focus areas for solar PV O&M versus BESS O&M.',
    },
    {
      kind: 'list',
      variant: 'inline',
      heading: "Solunar's ESS O&M scope",
      lead: "Solunar's ESS O&M scope may include:",
      items: [
        'Remote monitoring',
        'Battery health review',
        'State of Charge and State of Health monitoring',
        'PCS / EMS review',
        'Alarm monitoring',
        'Preventive maintenance',
        'Thermal and fire-system checks',
        'Firmware coordination',
        'Fault diagnosis',
        'Warranty and spare-parts coordination',
        'Asset-owner reporting',
      ],
    },
    {
      kind: 'cta',
      heading: 'Keep your storage asset healthy for the long term.',
      text: 'Solunar supports O&M planning and technical coordination for commercial and utility-scale ESS projects.',
      actions: [
        { label: 'Request ESS O&M Support', href: '/contact' },
        { label: 'Review BESS Safety', href: '/bess-safety' },
      ],
    },
  ],
};

export const bessSafety: PageContent = {
  slug: '/bess-safety',
  seoTitle: 'BESS Safety Malaysia | Fire, Thermal & Reliability | Solunar',
  metaDescription:
    'Safety is the foundation of every BESS. Solunar helps review battery chemistry, BMS, thermal management, fire detection and suppression for Malaysian projects.',
  navLabel: 'BESS Safety & Reliability',
  eyebrow: 'Solutions · Safety',
  h1: 'Safety Is the Foundation of Every BESS Project',
  lead: 'BESS safety is the set of design and operational measures — battery chemistry, BMS, thermal management, fire detection and suppression — that prevent and contain hazards in a battery storage system.',
  heroActions: [{ label: 'Review My BESS Safety Requirements', href: '/contact' }],
  image: {
    src: '/images/bess-safety.png',
    alt: 'Fire detection and thermal management inside a BESS container',
    prompt:
      'Photorealistic interior of a BESS container showing fire detection sensors, suppression nozzles and thermal-management ducting, safety-focused, clean and well-lit.',
    aspect: '4 / 3',
  },
  primaryKeyword: 'BESS safety Malaysia',
  schema: { type: 'Service', serviceType: 'BESS safety and reliability review' },
  blocks: [
    {
      kind: 'list',
      variant: 'inline',
      heading: 'Key BESS safety areas',
      lead: 'Solunar helps EPCC partners and asset owners review the key safety areas of a storage system:',
      items: [
        'Battery chemistry',
        'BMS',
        'Thermal management',
        'Fire detection',
        'Fire suppression',
        'Electrical protection',
        'Cooling design',
        'Emergency shutdown',
        'Container layout',
        'Ventilation',
        'Monitoring and alarms',
        'O&M procedures',
        'Site access control',
        'Emergency response planning',
      ],
    },
    {
      kind: 'cta',
      heading: 'Make safety the foundation of your storage project.',
      text: 'Solunar helps review battery chemistry, BMS, thermal management and fire systems against your project requirements.',
      actions: [
        { label: 'Review My BESS Safety Requirements', href: '/contact' },
        { label: 'Understand BYD LFP Chemistry', href: '/byd-battery-malaysia' },
      ],
    },
  ],
};

export const peakShaving: PageContent = {
  slug: '/peak-shaving-malaysia',
  seoTitle: 'Maximum Demand Peak Shaving Malaysia | BESS | Solunar',
  metaDescription:
    'Reduce maximum demand charges with battery storage. Learn how BESS peak shaving works in Malaysia for factories and commercial buildings.',
  navLabel: 'Maximum Demand Peak Shaving',
  eyebrow: 'Solutions · Peak Shaving',
  h1: 'Reduce Maximum Demand Charges With Battery Storage in Malaysia',
  lead: 'Peak shaving is using a battery to discharge during high-load periods so a site draws less power from the grid at its peak — reducing maximum demand charges on the electricity bill.',
  heroActions: [{ label: 'Analyse My Peak Demand Savings', href: '/contact' }],
  image: {
    src: '/images/peak-shaving.png',
    alt: 'Battery storage cabinet supporting peak demand at a Malaysian factory',
    prompt:
      'Photorealistic Malaysian factory exterior with rooftop solar and a battery energy storage cabinet, daytime, illustrating peak-demand management, clean and modern.',
    aspect: '4 / 3',
  },
  primaryKeyword: 'maximum demand peak shaving Malaysia',
  schema: { type: 'Service', serviceType: 'Maximum demand peak shaving with BESS' },
  blocks: [
    {
      kind: 'prose',
      heading: 'What are maximum demand charges?',
      paragraphs: [
        'Maximum demand charges are based on the highest power drawn from the grid during a billing period, so even short demand spikes raise monthly costs for factories and commercial buildings.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How does BESS peak shaving work?',
      lead: 'Battery peak shaving follows a simple, repeatable cycle managed by the EMS:',
      items: [
        { title: 'EMS monitors load', text: 'The EMS continuously monitors site load.' },
        { title: 'Battery charges', text: 'The battery charges during suitable periods.' },
        { title: 'Load spikes', text: 'Site demand spikes during high-load periods.' },
        { title: 'Battery discharges', text: 'The battery discharges to support the spike.' },
        { title: 'Grid peak reduced', text: 'The grid demand peak is reduced.' },
        { title: 'Better cost control', text: 'The customer improves energy cost control.' },
      ],
    },
    {
      kind: 'note',
      text: 'Actual savings depend on site load profile, tariff, system size and operating strategy.',
    },
    {
      kind: 'faq',
      items: [
        {
          question: 'How much can peak shaving save?',
          answer:
            'Savings depend entirely on load profile, tariff structure, battery size and EMS strategy — Solunar models this per site rather than promising a fixed figure.',
        },
      ],
    },
    {
      kind: 'cta',
      heading: 'Want to know your peak demand savings potential?',
      text: 'Solunar models peak shaving per site against your real load profile and tariff — no fixed promises, just analysis.',
      actions: [
        { label: 'Analyse My Peak Demand Savings', href: '/contact' },
        { label: 'See Commercial & Industrial BESS', href: '/commercial-industrial-bess-malaysia' },
      ],
    },
  ],
};

export const powerExpansion: PageContent = {
  slug: '/power-expansion-bess',
  seoTitle: 'Power Expansion With BESS Malaysia | Solunar Energy',
  metaDescription:
    'Need more power but grid upgrades are slow? BESS can support added peak demand for factories, data centres and EV charging in Malaysia.',
  navLabel: 'Power Expansion with BESS',
  eyebrow: 'Solutions · Power Expansion',
  h1: 'Need More Power? BESS Can Support Growth in Malaysia',
  lead: 'When a site needs more power than its grid connection allows, a BESS can supply additional peak power on demand — supporting expansion while longer-term grid upgrades are planned.',
  heroActions: [{ label: 'Assess Power Expansion With BESS', href: '/contact' }],
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
      heading: 'Why use BESS for power expansion?',
      paragraphs: [
        'Factories, data centres, EV charging hubs and industrial facilities often need more power for expansion, but grid upgrades can take time. BESS can support added peak demand in the interim.',
      ],
    },
    {
      kind: 'list',
      variant: 'inline',
      heading: 'Power-expansion use cases',
      lead: 'Common power-expansion use cases include:',
      items: [
        'Production-line expansion',
        'New machinery',
        'Cold-room expansion',
        'EV charging load',
        'Data-centre load growth',
        'Temporary power support',
        'Peak-period support',
      ],
    },
    {
      kind: 'cta',
      heading: 'Growing faster than your grid connection?',
      text: 'Solunar can assess whether a BESS can support your added peak demand while longer-term grid upgrades are planned.',
      actions: [
        { label: 'Assess Power Expansion With BESS', href: '/contact' },
        { label: 'See Industries We Serve', href: '/industries' },
      ],
    },
  ],
};

export const solarBessDevelopers: PageContent = {
  slug: '/solar-bess-developers',
  seoTitle: 'Solar + BESS for Developers & Asset Owners | Malaysia',
  metaDescription:
    'Solunar supports developers and asset owners with Solar + BESS — technical config, equipment selection, bankability and O&M for storage assets.',
  navLabel: 'For Developers & Asset Owners',
  eyebrow: 'Solutions · Developers',
  h1: 'Storage Technology Support for Developers and Asset Owners in Malaysia',
  lead: 'For developers and asset owners, adding BESS to a renewable asset increases its value through flexibility, storage capability and grid support — and Solunar Energy provides the technology and integration layer to make it bankable.',
  heroActions: [{ label: 'Plan Your ESS Asset With Solunar', href: '/contact' }],
  image: {
    src: '/images/solar-bess-developers.png',
    alt: 'A large solar-plus-storage farm in Malaysia at golden hour',
    aspect: '4 / 3',
  },
  primaryKeyword: 'Solar BESS for developers Malaysia',
  schema: { type: 'Service', serviceType: 'Solar + BESS support for developers and asset owners' },
  blocks: [
    {
      kind: 'list',
      variant: 'inline',
      heading: 'Projects Solunar supports',
      lead: 'Solunar supports developers and asset owners across a range of storage projects:',
      items: [
        'Solar farm + ESS projects',
        'C&I storage assets',
        'Private PPA storage',
        'CRESS-related storage planning',
        'Industrial energy storage',
        'Standalone ESS farms',
        'Hybrid renewable projects',
      ],
    },
    {
      kind: 'list',
      variant: 'check',
      columns: 2,
      heading: 'What support includes',
      lead: 'Support includes the technical and commercial layers that make a storage asset bankable:',
      items: [
        'Technical configuration',
        'Equipment selection',
        'Commercial modelling support',
        'O&M strategy',
        'Warranty coordination',
        'Investor proposal support',
        'Bankability support',
      ],
    },
    {
      kind: 'cta',
      heading: 'Make your renewable asset more valuable and bankable.',
      text: 'Solunar provides the technology and integration layer behind Solar + BESS assets for developers and asset owners.',
      actions: [
        { label: 'Plan Your ESS Asset With Solunar', href: '/contact' },
        { label: 'Utility-Scale ESS Support', href: '/utility-scale-ess-malaysia' },
      ],
    },
  ],
};

export const localAssembly: PageContent = {
  slug: '/local-bess-assembly',
  seoTitle: 'Local BESS Assembly Malaysia | Solunar Localisation Strategy',
  metaDescription:
    'Solunar is building towards localised BESS assembly in Malaysia — faster delivery, better after-sales and stronger local technical capability.',
  navLabel: 'Future Local Assembly',
  eyebrow: 'Solutions · Localisation',
  h1: 'Building Towards Localised BESS Assembly and Support in Malaysia',
  lead: 'Solunar Energy is building towards a localised clean-energy technology platform for Malaysia and Southeast Asia, including future BESS assembly and local technical support.',
  heroActions: [{ label: 'Explore Local Assembly Partnership', href: '/contact' }],
  image: {
    src: '/images/local-assembly.png',
    alt: 'Technicians assembling battery energy storage cabinets on a factory floor in Malaysia',
    aspect: '4 / 3',
  },
  primaryKeyword: 'local BESS assembly Malaysia',
  schema: { type: 'Service', serviceType: 'Future local BESS assembly and support' },
  blocks: [
    {
      kind: 'list',
      variant: 'inline',
      heading: 'Future localisation opportunities',
      lead: 'Future opportunities may include a growing set of local capabilities:',
      items: [
        'BESS packaging',
        'Battery cabinet integration',
        'Containerised ESS assembly',
        'PCS / EMS configuration',
        'Factory acceptance testing',
        'System testing',
        'Local technical support',
        'Spare-parts management',
        'Regional deployment support',
      ],
    },
    {
      kind: 'list',
      variant: 'check',
      columns: 2,
      heading: 'Why localisation matters',
      lead: 'Localisation matters because it can deliver several advantages over time:',
      items: [
        'Shorten delivery timelines',
        'Improve after-sales response',
        'Lower logistics complexity',
        'Strengthen local technical capability',
        "Support Malaysia's energy-storage ecosystem",
        'Create potential local-content advantages in future projects',
      ],
      note: 'These are forward-looking opportunities. Solunar’s current engagement focuses on technology distribution, system integration and O&M support.',
    },
    {
      kind: 'cta',
      heading: 'Interested in localised BESS assembly in Malaysia?',
      text: "Talk to Solunar about partnering on the region's growing local clean-energy storage capability.",
      actions: [
        { label: 'Explore Local Assembly Partnership', href: '/contact' },
        { label: 'About Solunar Energy', href: '/about' },
      ],
    },
  ],
};
