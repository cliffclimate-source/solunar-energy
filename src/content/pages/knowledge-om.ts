import type { Article } from './knowledge-types';

/** O&M, Safety & Bankability cluster. */
export const omArticles: Article[] = [
  {
    slug: 'bess-safety-developers-banks-epccs',
    title: 'BESS Safety: What Developers, Banks and EPCCs Need to Know',
    seoTitle: 'BESS Safety for Developers, Banks and EPCCs',
    metaDescription:
      'Understand the key safety, technical and bankability considerations for Battery Energy Storage Systems, including fire safety, thermal management, warranty, monitoring and O&M.',
    category: 'Operations',
    excerpt: 'Why BESS safety is a bankability issue, not only a technical one.',
    definition:
      'BESS safety is not only a technical issue — it is a bankability issue. A project must be designed with proper safety architecture, certified equipment, bankable warranties, thermal management, monitoring and professional O&M, or it can be hard to finance, insure or operate.',
    sections: [
      {
        heading: 'Why BESS safety matters to banks and investors',
        paragraphs: ['For financiers, BESS safety is directly linked to:'],
        bullets: [
          'Project bankability and insurance acceptance',
          'Asset performance and warranty enforceability',
          'Fire and operational risk',
          'Long-term cash-flow stability and debt-service confidence',
          'Reputation and ESG risk',
        ],
      },
      {
        heading: 'What developers and EPCCs must get right',
        paragraphs: ['A bankable BESS project should address five core areas: battery safety architecture (cell, module, rack, container and site-level protection); thermal management (heat is one of the most important risks); fire safety design (early detection, suppression, spacing, access and emergency response); warranty and degradation (aligned with the actual cycling profile, depth of discharge, C-rate and temperature); and O&M with remote monitoring throughout the lifecycle. Global references such as NFPA 855 and UL 9540A are widely used to evaluate energy-storage fire and thermal-runaway behaviour.'],
      },
      {
        heading: 'It is the full system, not the battery brand',
        paragraphs: ['Banks, funds and technical advisors assess the full system architecture — battery chemistry, PCS, EMS, BMS, fire protection, cooling, warranty terms, degradation assumptions and O&M strategy — not the battery brand alone. A BESS is only as safe as its weakest layer.'],
      },
      {
        heading: 'How Solunar approaches it',
        paragraphs: ['Solunar delivers integrated BESS solutions focused on safe system architecture, battery/PCS/EMS integration, fire-safety planning, thermal-management review, warranty and degradation alignment, cloud-based O&M, remote monitoring and lifecycle asset support — helping build projects that banks can finance, insurers can understand and asset owners can operate with confidence.'],
      },
    ],
    faq: [
      { question: 'Is BESS safety only a technical concern?', answer: 'No. It is directly linked to bankability, insurance, warranty and long-term asset performance.' },
      { question: 'What standards apply to BESS safety?', answer: 'Global references such as NFPA 855 and UL 9540A are widely used to evaluate energy-storage fire and thermal behaviour.' },
      { question: 'Does the battery brand guarantee safety?', answer: 'No. Safety depends on the full system — chemistry, BMS, PCS, EMS, cooling, fire protection, integration and O&M.' },
    ],
    related: [
      { label: 'BESS Safety & Reliability', href: '/bess-safety' },
      { label: 'O&M for ESS Projects', href: '/bess-om-malaysia' },
    ],
  },
  {
    slug: 'bess-fire-safety-thermal-management',
    title: 'BESS Fire Safety and Thermal Management Explained',
    seoTitle: 'BESS Fire Safety and Thermal Management Explained',
    metaDescription:
      'Learn how BESS fire safety and thermal management work, including thermal runaway prevention, cooling systems, fire detection and safe system design.',
    category: 'Operations',
    excerpt: 'Thermal runaway, cooling, detection and suppression — the layers of safe design.',
    definition:
      'BESS fire safety starts with good system design — the right battery chemistry, enclosure design, thermal management, BMS, fire detection, emergency shutdown, system spacing and O&M strategy, all built in from the beginning.',
    sections: [
      {
        heading: 'What is thermal runaway?',
        paragraphs: ['Thermal runaway is a condition where a battery cell overheats and triggers further heat generation. If not properly contained, it can spread from cell to cell, creating a fire-propagation risk. UL 9540A is a test method designed to meet fire-safety and building-code requirements for BESS by understanding how a system behaves under extreme conditions, including heat, gas release and fire propagation.'],
      },
      {
        heading: 'Why thermal management is critical',
        paragraphs: ['Battery performance is highly sensitive to temperature. Operating outside the ideal range can cause:'],
        bullets: [
          'Faster degradation and reduced usable capacity',
          'Lower efficiency',
          'Higher failure and fire risk',
          'More downtime',
          'Reduced warranty protection',
        ],
      },
      {
        heading: 'Key components of BESS fire safety',
        paragraphs: ['A safe BESS combines several layers: a Battery Management System (first layer of protection, monitoring voltage, current, temperature, SOC and SOH); a thermal management system (air or, increasingly, liquid cooling for better temperature uniformity); a fire detection system (smoke, heat and gas detection with alarm integration); a fire suppression strategy suited to the design and chemistry; emergency shutdown to isolate faults; and safe site layout with container spacing, access roads, drainage, boundary distance and emergency-response planning.'],
      },
      {
        heading: 'A common mistake: looking only at battery brand',
        paragraphs: ['A good battery brand is important but not enough. Fire safety depends on the full system — cell, module, rack and container design, BMS, PCS, EMS, cooling, fire system, installation quality, commissioning, O&M and remote monitoring. A BESS project is only as safe as its weakest layer. For Malaysia’s hot, humid climate, thermal management is especially important.'],
      },
    ],
    faq: [
      { question: 'What is thermal runaway?', answer: 'It is when a battery cell overheats and triggers further heat generation that can spread between cells if not contained.' },
      { question: 'What is UL 9540A?', answer: 'A test method used to evaluate fire and thermal-runaway behaviour of battery energy storage systems against fire-safety and building-code requirements.' },
      { question: 'Why is thermal management important in Malaysia?', answer: 'The hot, humid climate makes temperature control essential to protect battery safety, performance and lifespan.' },
    ],
    related: [
      { label: 'BESS Safety & Reliability', href: '/bess-safety' },
      { label: 'Why Battery Chemistry Matters in BESS', href: '/knowledge-centre/why-battery-chemistry-matters' },
    ],
  },
  {
    slug: 'bess-warranty-degradation-lifecycle-cost',
    title: 'BESS Warranty, Degradation and Lifecycle Cost',
    seoTitle: 'BESS Warranty, Degradation and Lifecycle Cost',
    metaDescription:
      'Understand BESS warranty terms, battery degradation, usable capacity, lifecycle cost and why proper operation is critical for project bankability.',
    category: 'Operations',
    excerpt: 'Why the real cost of BESS is lifecycle value, not the upfront price.',
    definition:
      'The real cost of a BESS is not only the purchase price — it is how much usable energy the system delivers safely and reliably over its full life, which depends on degradation, warranty terms and how it is operated.',
    sections: [
      {
        heading: 'What is battery degradation?',
        paragraphs: ['Battery degradation is the gradual reduction of capacity and performance over time. A BESS starts at a nameplate capacity, but usable capacity declines depending on:'],
        bullets: [
          'Number of cycles and depth of discharge',
          'C-rate and operating temperature',
          'Charging and discharging pattern',
          'Resting state of charge and battery chemistry',
          'Cooling performance, EMS strategy and maintenance quality',
        ],
      },
      {
        heading: 'Why warranty terms matter',
        paragraphs: ['A BESS warranty is not always simple. Developers and banks should review capacity-retention guarantee, cycle life, calendar life, availability and round-trip-efficiency guarantees, operating-temperature, depth-of-discharge and C-rate limits, exclusions, required maintenance, data-reporting obligations, the claim process, OEM financial strength and local support. A warranty is only useful if the system is operated within its conditions.'],
      },
      {
        heading: 'Nameplate vs usable capacity',
        paragraphs: ['A 10 MWh BESS does not always mean 10 MWh of usable commercial energy. Usable capacity depends on depth of discharge, reserve margin, degradation, EMS strategy, auxiliary load, thermal limitations, warranty restrictions and grid or site constraints — which is why system-level design matters, not just equipment supply.'],
      },
      {
        heading: 'Lifecycle cost over CAPEX',
        paragraphs: ['A bankable project evaluates total lifecycle cost — equipment, installation, PCS/EMS integration, cooling, fire safety, O&M, auxiliary power, degradation, replacement, downtime, warranty-compliance and end-of-life. Even a good battery performs poorly if operated wrongly (over-cycling, wrong temperatures, poor SOC management, weak EMS scheduling, delayed fault response). A proper EMS and Cloud O&M platform protects battery life and project returns.'],
      },
    ],
    faq: [
      { question: 'Is the cheapest BESS the best value?', answer: 'No. A cheaper BESS can cost more if it degrades faster, has unclear warranty terms, suffers downtime or needs early replacement.' },
      { question: 'Does a 10 MWh BESS deliver 10 MWh usable?', answer: 'Not always. Usable capacity depends on depth of discharge, reserve margin, degradation, EMS strategy and site constraints.' },
      { question: 'How is degradation assessed?', answer: 'Degradation assessment should consider the project’s actual usage profile and intended application, not generic assumptions.' },
    ],
    related: [
      { label: 'O&M for ESS Projects', href: '/bess-om-malaysia' },
      { label: 'BESS Safety & Reliability', href: '/bess-safety' },
    ],
  },
  {
    slug: 'om-for-battery-energy-storage-systems',
    title: 'O&M for Battery Energy Storage Systems',
    seoTitle: 'O&M for Battery Energy Storage Systems',
    metaDescription:
      'Discover why professional O&M is essential for BESS safety, performance, warranty protection and long-term project returns.',
    category: 'Operations',
    excerpt: 'Why BESS is not a set-and-forget asset, and what O&M must cover.',
    definition:
      'A BESS is a high-value, high-voltage, software-controlled asset that requires continuous monitoring, preventive maintenance and performance optimisation — O&M protects revenue, warranty, safety and long-term value.',
    sections: [
      {
        heading: 'Why BESS O&M differs from solar O&M',
        paragraphs: ['Solar O&M focuses on module cleaning, inverter checks, string performance and inspection. BESS O&M is more complex because it involves:'],
        bullets: [
          'Battery health, state of charge and state of health',
          'Thermal management',
          'PCS performance and EMS scheduling',
          'Fire safety systems and HVAC or liquid cooling',
          'Cybersecurity and firmware updates',
          'Warranty data records, alarm response and grid-dispatch requirements',
        ],
      },
      {
        heading: 'Key areas of BESS O&M',
        paragraphs: ['Comprehensive O&M covers battery monitoring (voltage, temperature, current, SOC, SOH, cell imbalance, abnormal trends); PCS and inverter maintenance (efficiency, fault logs, ventilation, communication); EMS optimisation (charge/discharge schedules for tariff savings, peak shaving, solar charging or dispatch); thermal-system maintenance; fire-safety inspection; data and warranty records; and both preventive and corrective maintenance.'],
      },
      {
        heading: 'Why O&M improves bankability',
        paragraphs: ['Banks and investors prefer assets with predictable performance and professional management. A proper O&M plan improves safety confidence, availability, warranty compliance, performance ratio, revenue predictability, insurance acceptance, asset valuation and refinancing potential.'],
      },
      {
        heading: 'Solunar O&M services',
        paragraphs: ['Solunar provides BESS O&M for commercial, industrial and utility-scale systems — remote monitoring, fault diagnostics, preventive and corrective maintenance coordination, EMS performance review, battery-health tracking, thermal-system monitoring, reporting for owners and banks, safety-system coordination and lifecycle performance support. Good O&M protects the battery; great O&M protects the investment.'],
      },
    ],
    faq: [
      { question: 'Is BESS a set-and-forget asset?', answer: 'No. It requires continuous monitoring, preventive maintenance and performance optimisation.' },
      { question: 'How is BESS O&M different from solar O&M?', answer: 'It adds battery health, thermal management, PCS/EMS, fire safety, firmware and warranty data on top of generation monitoring.' },
      { question: 'How does O&M improve bankability?', answer: 'It improves availability, warranty compliance, performance predictability and insurance acceptance — all valued by banks and investors.' },
    ],
    related: [
      { label: 'O&M for ESS Projects', href: '/bess-om-malaysia' },
      { label: 'Why Is BESS O&M Different From Solar O&M?', href: '/knowledge-centre/why-bess-om-differs-from-solar-om' },
    ],
  },
  {
    slug: 'cloud-om-utility-scale-ess',
    title: 'Cloud O&M for Utility-Scale ESS Projects',
    seoTitle: 'Cloud O&M for Utility-Scale ESS Projects',
    metaDescription:
      'Learn how Cloud O&M improves safety, availability, performance and bankability for utility-scale Battery Energy Storage Systems.',
    category: 'Operations',
    excerpt: 'Why utility-scale ESS needs utility-grade cloud monitoring and analytics.',
    definition:
      'Cloud O&M is a remote operations platform that lets asset owners and operators monitor BESS projects in real time — essential for utility-scale ESS with hundreds or thousands of modules, multiple PCS units and complex EMS controls.',
    sections: [
      {
        heading: 'Why utility-scale ESS needs cloud monitoring',
        paragraphs: ['Manual inspection alone is not enough for projects with many battery modules, multiple PCS units, complex EMS controls, grid-interface requirements and long-term performance obligations. Cloud-based monitoring, data analytics, alarm management and remote diagnostics are needed to operate safely and efficiently.'],
      },
      {
        heading: 'What Cloud O&M monitors',
        paragraphs: ['A strong platform connects to the BMS, PCS, EMS, meters, thermal-management system and safety equipment to monitor:'],
        bullets: [
          'Battery SOC and SOH',
          'Cell and rack temperature, voltage deviation, cell imbalance',
          'PCS status and charge/discharge power',
          'Round-trip efficiency and cooling performance',
          'Fire-alarm and communication status',
          'Fault logs, availability and energy throughput',
        ],
      },
      {
        heading: 'From reactive to predictive maintenance',
        paragraphs: ['Traditional O&M reacts after something goes wrong. Cloud O&M detects early signs before they become major failures — temperature drift indicating cooling imbalance, voltage deviation indicating cell inconsistency, repeated PCS alarms indicating component stress, abnormal SOC behaviour indicating control issues, or communication loss indicating network problems. Early detection reduces downtime and protects asset value.'],
      },
      {
        heading: 'Supporting banks, developers and owners',
        paragraphs: ['Cloud O&M gives banks better visibility over the financed asset, helps developers improve delivery and reputation, reduces post-commissioning disputes for EPCCs, and improves operational and financial control for owners. Solunar Cloud O&M supports real-time monitoring, alarm management, remote diagnostics, dashboards, battery-health tracking, EMS optimisation, reporting, fault prediction, multi-site management and investor reporting.'],
      },
    ],
    faq: [
      { question: 'What is Cloud O&M?', answer: 'A remote operations platform that lets owners and operators monitor BESS performance, safety and health in real time.' },
      { question: 'Why do utility-scale projects need it?', answer: 'They are too large and complex for manual inspection — cloud monitoring, analytics and remote diagnostics keep them safe and efficient.' },
      { question: 'Does Cloud O&M help with financing?', answer: 'Yes. It gives banks and investors visibility and transparency over the financed asset’s performance and safety.' },
    ],
    related: [
      { label: 'O&M for ESS Projects', href: '/bess-om-malaysia' },
      { label: 'Utility-Scale ESS Farms', href: '/utility-scale-ess-malaysia' },
    ],
  },
  {
    slug: 'how-remote-monitoring-improves-bess-performance',
    title: 'How Remote Monitoring Improves BESS Performance',
    seoTitle: 'How Remote Monitoring Improves BESS Performance',
    metaDescription:
      'Remote monitoring helps improve BESS performance, safety, uptime, battery life and warranty compliance through real-time data and early fault detection.',
    category: 'Operations',
    excerpt: 'You cannot optimise what you cannot see — the value of real-time data.',
    definition:
      'Remote monitoring lets operators see how a BESS is performing in real time, detect problems early and optimise the system continuously — improving availability, battery life, savings, warranty compliance and safety.',
    sections: [
      {
        heading: 'What remote monitoring can improve',
        paragraphs: ['Without remote monitoring, problems may only be discovered after revenue loss, downtime or battery damage. Remote monitoring improves:'],
        bullets: [
          'Battery availability — detecting abnormal conditions before shutdowns',
          'Battery life — tracking temperature, cycling and SOC patterns',
          'Energy savings — ensuring peak shaving and solar charging work',
          'Revenue performance — supporting dispatch accuracy and availability',
          'Warranty protection — maintaining the required operating data',
          'Safety — early-warning signals before problems escalate',
          'O&M efficiency — reducing unnecessary site visits',
        ],
      },
      {
        heading: 'Key data points to monitor',
        paragraphs: ['A good platform tracks SOC and SOH, cell and rack temperature, voltage deviation, current, power output, PCS status, cooling performance, fault alarms, fire-system status, energy throughput, round-trip efficiency, EMS command history, communication status and site availability.'],
      },
      {
        heading: 'Why it matters for Malaysia',
        paragraphs: ['As Malaysia moves into more solar-plus-storage, CRESS, LSS and C&I BESS projects, many systems will be installed across different states, factories, substations, solar farms and commercial buildings. Asset owners need centralised visibility — remote monitoring lets one operations team manage multiple BESS assets efficiently.'],
      },
      {
        heading: 'Solunar remote monitoring',
        paragraphs: ['Solunar supports BESS projects with remote monitoring and cloud-based O&M tools that help clients track performance, detect faults, reduce downtime, optimise charging and discharging, protect warranty, improve safety, support bank reporting, manage multi-site assets and improve long-term ROI — turning a BESS from a black box into a transparent, manageable asset.'],
      },
    ],
    faq: [
      { question: 'Why is remote monitoring important?', answer: 'You cannot optimise what you cannot see — it enables early fault detection, better performance and protected warranties.' },
      { question: 'What does remote monitoring track?', answer: 'SOC, SOH, temperature, voltage, power, PCS status, cooling, alarms, fire-system status, efficiency and availability.' },
      { question: 'Can one team manage multiple BESS sites?', answer: 'Yes. Centralised remote monitoring lets one operations team manage a portfolio of BESS assets efficiently.' },
    ],
    related: [
      { label: 'O&M for ESS Projects', href: '/bess-om-malaysia' },
      { label: 'PCS, EMS & Architecture', href: '/pcs-ems-system-integration' },
    ],
  },
];
