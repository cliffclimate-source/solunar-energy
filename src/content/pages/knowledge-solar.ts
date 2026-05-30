import type { Article } from './knowledge-types';

/** Solar + BESS cluster. */
export const solarArticles: Article[] = [
  {
    slug: 'solar-bess-malaysia-business-opportunity',
    title: 'Solar + BESS: The Next Big Opportunity for Malaysian Businesses',
    seoTitle: 'Solar + BESS: The Next Big Opportunity for Malaysian Businesses',
    metaDescription:
      'Discover why Solar + BESS is becoming the next major energy opportunity for Malaysian factories, commercial buildings and industrial users.',
    category: 'Solar + BESS',
    excerpt: 'Why the next step after solar is storage — and what it unlocks for business.',
    definition:
      'Solar + BESS combines solar PV generation with battery storage so businesses can store excess solar energy and use it when it creates the most value — reducing bills, managing demand and improving resilience.',
    sections: [
      {
        heading: 'Why solar alone is no longer enough',
        paragraphs: [
          'Solar only generates electricity when sunlight is available, so generation may not match demand. A factory may generate strong solar at midday but peak in the morning, late afternoon or evening; a mall may consume high electricity after solar output drops; a cold store may need power 24 hours. Without storage, solar energy must be used immediately, exported or underutilised. With BESS, excess solar can be stored and used later.',
        ],
      },
      {
        heading: 'What Solar + BESS means',
        paragraphs: [
          'The solar system generates electricity during the day; the BESS stores excess when generation exceeds consumption; later, the stored electricity is discharged when the site needs more power. Solar generates, BESS stores, the EMS controls, and the business saves.',
        ],
      },
      {
        heading: 'Benefits for Malaysian businesses',
        paragraphs: ['Solar + BESS delivers value across cost, flexibility and sustainability:'],
        bullets: [
          'Higher solar self-consumption',
          'Lower maximum demand charges',
          'Better energy cost control',
          'Support for power expansion',
          'Improved ESG and net-zero performance',
          'Reduced exposure to rising electricity costs',
        ],
      },
      {
        heading: 'Who should consider Solar + BESS?',
        paragraphs: ['It is suitable for sites with high bills, high maximum demand, existing solar, grid constraints or expansion plans, including:'],
        bullets: [
          'Factories and warehouses',
          'Shopping malls and commercial buildings',
          'Cold storage and data centres',
          'Industrial parks and logistics hubs',
          'Hospitals and hotels',
          'EV charging hubs',
        ],
      },
      {
        heading: 'A business strategy, not just engineering',
        paragraphs: [
          'Solar + BESS is a business strategy that helps companies reduce costs, improve flexibility and future-proof operations. As energy prices, ESG requirements and grid constraints become more important, businesses that adopt Solar + BESS early may gain a stronger competitive advantage.',
        ],
      },
    ],
    faq: [
      { question: 'What is Solar + BESS?', answer: 'Solar + BESS combines solar PV with a Battery Energy Storage System to store and use solar energy more intelligently.' },
      { question: 'Why should businesses combine solar with BESS?', answer: 'BESS helps businesses store excess solar energy, reduce peak demand and improve energy cost control.' },
      { question: 'Is Solar + BESS suitable for factories?', answer: 'Yes — for factories with high bills, demand spikes or expansion plans.' },
      { question: 'Can BESS be added to an existing solar system?', answer: 'Yes. In many cases BESS can be retrofitted to an existing solar PV system, subject to technical assessment.' },
    ],
    related: [
      { label: 'For Developers & Asset Owners', href: '/solar-bess-developers' },
      { label: 'Commercial & Industrial BESS', href: '/commercial-industrial-bess-malaysia' },
    ],
  },
  {
    slug: 'how-solar-and-battery-storage-work-together',
    title: 'How Solar and Battery Storage Work Together',
    seoTitle: 'How Solar and Battery Storage Work Together',
    metaDescription:
      'Learn how solar panels and battery storage work together to reduce electricity costs, improve solar self-consumption and support business energy needs.',
    category: 'Solar + BESS',
    excerpt: 'Generate, store, control — how a solar-plus-storage system operates.',
    definition:
      'Solar panels generate electricity from sunlight and battery storage stores it for later — so a business can store excess solar energy and use it when needed instead of only at the moment it is generated.',
    sections: [
      {
        heading: 'Step 1: Solar panels generate electricity',
        paragraphs: [
          'During the day, solar PV converts sunlight into electricity that can be used immediately. If daytime demand is high, most is consumed directly; if generation exceeds demand, there is excess solar that — without storage — may be exported, curtailed or underutilised.',
        ],
      },
      {
        heading: 'Step 2: Excess solar charges the battery',
        paragraphs: [
          'When generation exceeds immediate consumption, the excess charges the battery, and the BESS stores it for later. Instead of exporting at a lower value, the business can use the stored solar energy during peak demand or non-solar hours.',
        ],
      },
      {
        heading: 'Step 3: The EMS controls charging and discharging',
        paragraphs: ['The EMS is the brain of the system, and can be programmed to:'],
        bullets: [
          'Charge the battery using excess solar energy',
          'Discharge during maximum demand peaks',
          'Discharge during evening operating hours',
          'Maintain reserve energy for selected backup needs',
          'Avoid unnecessary battery cycling',
          'Optimise savings based on the site’s load profile',
        ],
      },
      {
        heading: 'Step 4: The battery discharges when needed',
        paragraphs: [
          'When the site needs electricity, the BESS discharges stored energy — when solar drops, demand increases, a peak approaches, the business operates in the evening, or grid power is expensive. The stored solar energy reduces grid consumption and manages demand.',
        ],
      },
      {
        heading: 'Solar reduces energy charges; BESS reduces demand peaks',
        paragraphs: [
          'Solar helps reduce total electricity imported (kWh), while BESS helps control when electricity is used and how much power is drawn at the peak (kW). For C&I users this matters because bills include both energy charges and maximum demand charges — together they create a stronger saving strategy. Proper battery sizing, based on the site’s real energy behaviour, is essential.',
        ],
      },
    ],
    faq: [
      { question: 'Can solar panels charge a battery?', answer: 'Yes. Excess electricity generated by solar panels can charge a battery energy storage system.' },
      { question: 'Can battery storage work without solar?', answer: 'Yes. Battery storage can also work with grid electricity, but combining it with solar improves renewable usage.' },
      { question: 'Does battery storage reduce electricity bills?', answer: 'Yes — when properly designed, it can reduce bills by improving solar usage and reducing peak demand.' },
      { question: 'What controls a Solar + BESS system?', answer: 'The Energy Management System controls charging, discharging and energy optimisation.' },
    ],
    related: [
      { label: 'PCS, EMS & Architecture', href: '/pcs-ems-system-integration' },
      { label: 'For Developers & Asset Owners', href: '/solar-bess-developers' },
    ],
  },
  {
    slug: 'why-solar-alone-not-enough-for-factories',
    title: 'Why Solar Alone May Not Be Enough for Factories',
    seoTitle: 'Why Solar Alone May Not Be Enough for Factories',
    metaDescription:
      'Solar helps factories reduce energy costs, but battery storage can improve savings, peak shaving, power reliability and solar self-consumption.',
    category: 'Solar + BESS',
    excerpt: 'Solar reduces kWh, but BESS manages kW — why factories need both.',
    definition:
      'Solar is a strong first step for factories, but complex load patterns, demand spikes, evening production and expansion needs mean solar alone may not fully solve a factory’s energy challenges — which is why many add BESS.',
    sections: [
      {
        heading: 'Solar is good, but it has limits',
        paragraphs: [
          'Solar output is highest around midday and lower in the morning, evening or cloudy weather. A factory may not need the most electricity when solar output is highest — it may need more during start-up, machine cycles, late shifts or high-demand operations. Without BESS, solar energy must be used immediately.',
        ],
      },
      {
        heading: 'Factories often have demand spikes',
        paragraphs: ['Factory equipment creates sudden increases in demand. When several systems run together, grid demand spikes — and solar may not reduce these peaks if they occur when solar output is low. Common contributors:'],
        bullets: [
          'Motors and compressors',
          'Chillers and pumps',
          'CNC and injection-moulding machines',
          'Production lines',
          'Furnaces and industrial ovens',
          'Refrigeration systems',
        ],
      },
      {
        heading: 'Solar reduces kWh, but BESS manages kW',
        paragraphs: [
          'Solar reduces energy consumption from the grid (kWh); BESS helps manage power demand (kW). A factory bill may include both energy charges and maximum demand charges — solar helps reduce energy charges while BESS helps reduce demand charges. That is why solar alone may not be enough if maximum demand is high.',
        ],
      },
      {
        heading: 'Excess solar and evening operations',
        paragraphs: [
          'Some factories generate more solar than they can use during lunch breaks, low-production periods or weekends; BESS stores the excess for later, improving self-consumption. Factories operating into the evening may still need significant power after solar drops — stored daytime solar gives them more flexibility.',
        ],
      },
      {
        heading: 'Solar alone may not support expansion',
        paragraphs: [
          'Adding a new production line, equipment or cooling increases demand. If grid supply is limited, the factory may need a costly upgrade. BESS can support expansion by providing additional power during peaks — improving flexibility and reducing pressure on the existing supply while a longer-term upgrade is planned.',
        ],
      },
    ],
    faq: [
      { question: 'Is solar alone enough for factories?', answer: 'Solar can reduce bills, but it may not fully manage demand spikes, evening loads or maximum demand charges.' },
      { question: 'Why should factories add BESS to solar?', answer: 'BESS stores excess solar energy and discharges during peak demand periods to improve savings and flexibility.' },
      { question: 'Can BESS reduce factory maximum demand?', answer: 'Yes. BESS can discharge during demand peaks to reduce power drawn from the grid.' },
      { question: 'Can BESS be added to existing factory solar?', answer: 'Yes, subject to technical assessment, BESS can often be added to an existing solar PV system.' },
    ],
    related: [
      { label: 'Power Expansion with BESS', href: '/power-expansion-bess' },
      { label: 'Maximum Demand Peak Shaving', href: '/peak-shaving-malaysia' },
    ],
  },
  {
    slug: 'solar-bess-roi-payback-calculation',
    title: 'Solar + BESS ROI: How to Calculate Payback',
    seoTitle: 'Solar + BESS ROI: How to Calculate Payback',
    metaDescription:
      'Learn how to calculate Solar + BESS ROI and payback for Malaysian businesses, including solar savings, demand reduction and energy storage benefits.',
    category: 'Solar + BESS',
    excerpt: 'The savings streams, a worked payback example, and the data you need.',
    definition:
      'Solar + BESS ROI measures whether the savings and benefits justify the investment, usually expressed as a payback period — and it depends on load profile, tariff, solar generation, demand charges, battery size and operating strategy.',
    sections: [
      {
        heading: 'Main sources of savings',
        paragraphs: ['Solar + BESS creates savings from several areas:'],
        bullets: [
          'Solar energy savings (reduced grid purchase)',
          'Maximum demand reduction (lower demand charges)',
          'Higher solar self-consumption (storing excess solar)',
          'Power expansion value (delaying grid upgrades)',
          'Reliability and resilience value (reduced operational risk)',
        ],
      },
      {
        heading: 'The payback formula',
        paragraphs: [
          'A simple calculation is: Payback Period = Total Project Cost ÷ Annual Net Savings. The more accurate version is: Annual Net Savings = Energy Savings + Demand Savings + Other Benefits − O&M Cost.',
        ],
      },
      {
        heading: 'How the example works',
        paragraphs: [
          'A worked example combines the project cost (RM) with the annual solar savings (RM), the annual maximum-demand savings (RM) and the annual O&M cost (RM). Annual net savings = solar savings + demand savings − O&M cost, and simple payback = total project cost ÷ annual net savings.',
          'The actual numbers depend entirely on your site, so Solunar models the RM figures per project rather than quoting a fixed price. Share your electricity bill and load profile and we will prepare a project-specific payback estimate.',
        ],
      },
      {
        heading: 'Data needed to calculate ROI',
        paragraphs: ['To calculate ROI properly, the following is needed:'],
        bullets: [
          '12 months of electricity bills and demand charges',
          'Half-hourly load profile',
          'Existing solar generation data and tariff category',
          'Operating hours and load pattern',
          'Battery size and discharge duration',
          'Project cost, O&M cost and financing cost',
          'Battery degradation assumptions and expansion plans',
        ],
      },
      {
        heading: 'Why bigger is not always better',
        paragraphs: [
          'A larger battery does not always create better ROI. An oversized battery increases project cost; if it is not fully used, payback weakens. A correctly sized BESS matches the site’s load pattern, solar profile and savings objective. The EMS also matters — poor control may discharge at the wrong time and reduce savings, so software and control strategy are as important as battery capacity.',
        ],
      },
    ],
    faq: [
      { question: 'How do you calculate Solar + BESS payback?', answer: 'Payback is calculated by dividing total project cost by annual net savings.' },
      { question: 'What savings should be included?', answer: 'Solar energy savings, maximum demand savings, self-consumption improvement and avoided operational costs may be included.' },
      { question: 'What data is needed for BESS ROI?', answer: 'Electricity bills, load profile, maximum demand data, solar generation data and project cost are needed.' },
      { question: 'Is a bigger BESS always better?', answer: 'No. The BESS should be sized based on real site demand and savings potential.' },
    ],
    related: [
      { label: 'Maximum Demand Peak Shaving', href: '/peak-shaving-malaysia' },
      { label: 'For Developers & Asset Owners', href: '/solar-bess-developers' },
    ],
  },
  {
    slug: 'power-expansion-with-bess-without-grid-upgrade',
    title: 'Power Expansion with BESS Without Major Grid Upgrade',
    seoTitle: 'Power Expansion with BESS Without Major Grid Upgrade',
    metaDescription:
      'Learn how BESS helps businesses support power expansion, manage peak load and reduce pressure on grid capacity without immediate major grid upgrades.',
    category: 'Solar + BESS',
    excerpt: 'How storage adds usable peak power while a grid upgrade is planned.',
    definition:
      'When a business needs more power than its grid connection allows, a BESS can supply additional peak power on demand — supporting expansion while a longer-term grid upgrade is planned.',
    sections: [
      {
        heading: 'Why power expansion is difficult',
        paragraphs: ['Business growth needs more electricity, but grid capacity may be limited by:'],
        bullets: [
          'Existing transformer and incoming-supply capacity',
          'Substation and cable constraints',
          'Approval timelines and utility upgrade requirements',
          'High infrastructure cost',
          'Site space limitations and project delay risk',
        ],
      },
      {
        heading: 'How BESS supports power expansion',
        paragraphs: [
          'BESS charges during lower-demand periods or from solar, then discharges when site demand exceeds the desired grid limit. This reduces the peak power drawn from the grid — helping the site manage additional load without always pulling the full amount from the grid.',
        ],
      },
      {
        heading: 'A worked example',
        paragraphs: [
          'A factory has 1,500 kW of grid capacity and wants to add equipment that pushes peak demand to 1,900 kW. Instead of immediately upgrading, it installs a BESS that discharges 400 kW during peaks — supporting the extra load while keeping grid demand closer to the existing capacity and reducing pressure on the electrical infrastructure.',
        ],
      },
      {
        heading: 'A peak support system',
        paragraphs: ['BESS is especially useful when the extra power is needed only during short peaks — common in:'],
        bullets: [
          'Factories with machine start-up peaks',
          'Cold storage with compressor cycles',
          'Commercial buildings with air-conditioning peaks',
          'EV charging sites with charging spikes',
          'Data centres in expansion phases',
          'Warehouses with operational load peaks',
        ],
      },
      {
        heading: 'Important limitations',
        paragraphs: [
          'BESS is not always a complete substitute for grid upgrades. If a business needs continuous additional power for long hours, a grid upgrade may still be required. BESS is most effective when the problem is peak demand, short-duration overload or timing mismatch — and the EMS must be configured to keep grid demand below the target level. A proper engineering study determines whether BESS can support the site’s expansion needs.',
        ],
      },
    ],
    faq: [
      { question: 'Can BESS replace a grid upgrade?', answer: 'Sometimes BESS can delay or reduce the need for a grid upgrade, especially when the issue is peak demand. It depends on the site’s load requirement.' },
      { question: 'How does BESS support additional power?', answer: 'BESS discharges stored energy during peak periods to reduce the power drawn from the grid.' },
      { question: 'Is BESS suitable for EV charging expansion?', answer: 'Yes. BESS can help manage peak demand from EV chargers and reduce pressure on the grid connection.' },
      { question: 'What data is needed for power expansion assessment?', answer: 'Current grid capacity, load profile, future equipment demand and peak duration are needed.' },
    ],
    related: [
      { label: 'Power Expansion with BESS', href: '/power-expansion-bess' },
      { label: 'Commercial & Industrial BESS', href: '/commercial-industrial-bess-malaysia' },
    ],
  },
  {
    slug: 'how-bess-helps-businesses-use-more-solar-energy',
    title: 'How BESS Helps Businesses Use More Solar Energy',
    seoTitle: 'How BESS Helps Businesses Use More Solar Energy',
    metaDescription:
      'Learn how BESS helps businesses increase solar self-consumption, store excess solar power and reduce reliance on grid electricity.',
    category: 'Solar + BESS',
    excerpt: 'Turning daytime-only solar into a flexible, higher-value energy asset.',
    definition:
      'BESS helps businesses use more of their own solar energy by storing excess solar generation and releasing it when needed — increasing solar self-consumption and reducing reliance on grid electricity.',
    sections: [
      {
        heading: 'What is solar self-consumption?',
        paragraphs: [
          'Solar self-consumption means using the solar electricity generated by your own system. If a factory generates 1,000 kWh and uses 800 kWh directly, self-consumption is 800 kWh. The higher the self-consumption, the more value the business captures — and BESS increases it by storing solar that cannot be used immediately.',
        ],
      },
      {
        heading: 'Why solar energy may be underused',
        paragraphs: ['A business may not fully use its solar because of timing mismatch — for example when:'],
        bullets: [
          'Solar generation is high during midday',
          'Business load is lower during lunch breaks',
          'The factory operates more in the evening',
          'Production slows during weekends',
          'Cloud movement causes generation fluctuation',
          'The solar system is larger than daytime load, or export is limited',
        ],
      },
      {
        heading: 'How BESS increases self-consumption',
        paragraphs: [
          'BESS stores excess solar during high-generation periods, then discharges later when solar output drops or demand increases. In practical terms, it turns solar power from a daytime-only resource into a more flexible energy asset.',
        ],
      },
      {
        heading: 'Worked examples',
        paragraphs: [
          'A factory generating strong solar from 11am–2pm but peaking at 4pm can store midday solar and discharge it at 4pm — using more solar and reducing grid demand during peak operations. A mall generating solar during the day but consuming into the evening can store daytime solar for evening use, improving the value of the PV system.',
        ],
      },
      {
        heading: 'Reduced grid reliance and peak shaving',
        paragraphs: [
          'Using more solar reduces reliance on grid electricity, lowering cost and supporting ESG reporting. BESS also discharges during maximum demand peaks to reduce demand charges — so it improves both energy savings and demand savings. The EMS balances these objectives based on the site’s data.',
        ],
      },
    ],
    faq: [
      { question: 'How does BESS increase solar self-consumption?', answer: 'BESS stores excess solar energy and releases it when the business needs power later.' },
      { question: 'Can BESS be added to an existing solar system?', answer: 'Yes — subject to technical review.' },
      { question: 'Does BESS help reduce grid electricity usage?', answer: 'Yes. By storing and using more solar energy, BESS can reduce reliance on grid electricity.' },
      { question: 'Is BESS useful if my business already has solar?', answer: 'Yes. BESS can improve solar utilisation, reduce maximum demand and increase energy flexibility.' },
    ],
    related: [
      { label: 'For Developers & Asset Owners', href: '/solar-bess-developers' },
      { label: 'Commercial & Industrial BESS', href: '/commercial-industrial-bess-malaysia' },
    ],
  },
];
