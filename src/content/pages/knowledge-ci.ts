import type { Article } from './knowledge-types';

/** Commercial & Industrial BESS cluster. */
export const ciArticles: Article[] = [
  {
    slug: 'commercial-industrial-bess-guide',
    title: 'Commercial & Industrial BESS in Malaysia: Complete Guide',
    seoTitle: 'Commercial & Industrial BESS in Malaysia: Complete Guide',
    metaDescription:
      'Learn how Commercial & Industrial BESS helps Malaysian businesses reduce electricity costs, manage maximum demand, support solar and improve energy reliability.',
    category: 'Commercial',
    excerpt: 'How C&I BESS helps Malaysian businesses cut cost, manage demand and add resilience.',
    definition:
      'Commercial & Industrial BESS (C&I BESS) refers to battery energy storage systems designed for businesses and industrial facilities — storing electricity and releasing it when the business needs power, connected to solar, the grid, or both.',
    sections: [
      {
        heading: 'Why Malaysian businesses are looking at BESS',
        paragraphs: [
          'Electricity bills are becoming a major operating cost. Production facilities experience demand spikes from machinery, chillers, compressors, pumps and motors; some companies want to expand but are limited by grid capacity; others have solar but cannot fully maximise its value. BESS gives businesses more control by using stored electricity strategically instead of only buying from the grid when demand happens.',
        ],
      },
      {
        heading: 'Where C&I BESS is deployed',
        paragraphs: ['C&I BESS is installed at sites such as:'],
        bullets: [
          'Factories and manufacturing plants',
          'Warehouses and logistics hubs',
          'Shopping malls and large retail',
          'Commercial buildings',
          'Cold storage facilities',
          'Data centres',
          'Industrial parks',
        ],
      },
      {
        heading: 'Main benefits of C&I BESS',
        paragraphs: [
          'The biggest benefit is maximum demand peak shaving: many bills charge not only for total energy but for the highest power demand in the period, and a BESS can discharge during peaks to reduce that charge. BESS also improves solar self-consumption by storing excess solar for later, supports power expansion without an immediate grid upgrade, optimises energy cost through intelligent charge/discharge, and improves power reliability for facilities where continuity matters.',
        ],
      },
      {
        heading: 'How C&I BESS works',
        paragraphs: [
          'A commercial or industrial BESS typically includes a battery system, PCS, EMS, transformer, switchgear, protection, cooling, fire safety and a cloud monitoring platform. The battery stores electricity, the PCS converts power between DC and AC, the EMS decides when to charge or discharge, and cloud O&M allows remote monitoring. The goal is not just to install batteries — it is to create an intelligent energy system that supports the business.',
        ],
      },
      {
        heading: 'Who should consider C&I BESS?',
        paragraphs: ['C&I BESS is suitable for businesses with:'],
        bullets: [
          'High maximum demand charges',
          'Large electricity bills',
          'Solar PV systems',
          'High daytime and evening power usage',
          'Frequent demand spikes',
          'Grid capacity limitations',
          'A need for power reliability',
          'Expansion plans, or ESG / net-zero targets',
        ],
      },
      {
        heading: 'Why system integration matters',
        paragraphs: [
          'A successful project depends on more than battery capacity. The system must be correctly sized, engineered, integrated, monitored and maintained — answering questions about load profile, maximum demand pattern, existing solar, grid capacity, target saving, discharge duration, safety standard, monitoring and O&M. This is why businesses need a BESS system integrator, not only a battery supplier.',
        ],
      },
    ],
    faq: [
      { question: 'What is Commercial & Industrial BESS?', answer: 'It is a battery energy storage system designed for factories, commercial buildings and industrial facilities.' },
      { question: 'How does BESS save money for businesses?', answer: 'BESS can reduce maximum demand charges, improve solar self-consumption and optimise energy usage.' },
      { question: 'Is BESS suitable for factories in Malaysia?', answer: 'Yes — for factories with high electricity bills, demand spikes, solar PV systems or power-expansion needs.' },
      { question: 'Can BESS work without solar?', answer: 'Yes. BESS can be used with grid electricity even without solar, especially for peak shaving and load management.' },
    ],
    related: [
      { label: 'Commercial & Industrial BESS', href: '/commercial-industrial-bess-malaysia' },
      { label: 'Maximum Demand Peak Shaving', href: '/peak-shaving-malaysia' },
    ],
  },
  {
    slug: 'how-bess-reduces-maximum-demand-charges',
    title: 'How BESS Reduces Maximum Demand Charges',
    seoTitle: 'How BESS Reduces Maximum Demand Charges for Businesses',
    metaDescription:
      'Learn how BESS reduces maximum demand charges by discharging stored energy during peak load periods and helping businesses lower electricity costs.',
    category: 'Commercial',
    excerpt: 'How discharging during peaks lowers the demand charge that inflates bills.',
    definition:
      'BESS reduces maximum demand charges by discharging stored energy during peak demand periods, lowering the power drawn from the grid and the highest demand recorded during the billing cycle.',
    sections: [
      {
        heading: 'What is maximum demand?',
        paragraphs: [
          'Maximum demand is the highest level of electricity demand recorded during a billing period, usually measured in kilowatts (kW). If a factory normally uses 1,000 kW but spikes to 1,500 kW when several machines start together, the bill may include charges based on the 1,500 kW peak — even if it only happens briefly. This is why maximum demand management is so important for C&I users.',
        ],
      },
      {
        heading: 'Why maximum demand charges matter',
        paragraphs: [
          'Demand charges are linked to the highest power draw, not just total consumption. A business may already use energy efficiently, but sudden spikes can still make the demand charge high. Common causes include:',
        ],
        bullets: [
          'Large motors starting',
          'Air-conditioning and chillers running together',
          'Compressors operating at peak load',
          'Production machinery starting at the same time',
          'Cold storage refrigeration cycles',
          'EV charging and data-centre cooling',
        ],
      },
      {
        heading: 'How BESS reduces maximum demand',
        paragraphs: [
          'During normal periods the BESS charges from solar or the grid. When demand approaches a peak, it discharges to support the site, so less power is drawn from the grid. For example: without BESS the site may draw 1,500 kW; with BESS discharging 300 kW, the grid only sees 1,200 kW. This is called peak shaving.',
        ],
      },
      {
        heading: 'Why BESS beats manual load control',
        paragraphs: [
          'Some businesses try to reduce demand by switching off equipment or staggering operations, but this can disrupt production and requires supervision. BESS provides an automated solution: with an EMS, it detects when demand approaches a threshold and discharges automatically, making demand management more consistent and reliable.',
        ],
      },
      {
        heading: 'BESS with solar for demand reduction',
        paragraphs: [
          'Solar reduces daytime consumption, but a cloudy moment or sudden load increase can still create a spike. When BESS is paired with solar, it stores excess solar energy and discharges during peaks. Solar reduces total energy imported; BESS reduces the peak demand drawn — together providing both energy and demand savings.',
        ],
      },
    ],
    faq: [
      { question: 'Can BESS reduce maximum demand charges?', answer: 'Yes. BESS can discharge during peak demand periods to reduce the power drawn from the grid.' },
      { question: 'What is peak shaving?', answer: 'Peak shaving means reducing demand peaks by using stored energy instead of drawing all power from the grid.' },
      { question: 'Is BESS useful if I already have solar?', answer: 'Yes. Solar reduces energy consumption, while BESS helps reduce demand peaks.' },
      { question: 'What data is needed to size BESS?', answer: 'Electricity bills, maximum demand history, load profile, solar data and operating schedule are usually required.' },
    ],
    related: [
      { label: 'Maximum Demand Peak Shaving', href: '/peak-shaving-malaysia' },
      { label: 'Commercial & Industrial BESS', href: '/commercial-industrial-bess-malaysia' },
    ],
  },
  {
    slug: 'maximum-demand-peak-shaving-business-savings',
    title: 'Maximum Demand Peak Shaving: How Businesses Can Save Money',
    seoTitle: 'Maximum Demand Peak Shaving: How Businesses Save Money',
    metaDescription:
      'Learn how maximum demand peak shaving works and how BESS helps factories, malls and commercial buildings reduce electricity costs in Malaysia.',
    category: 'Commercial',
    excerpt: 'How peak shaving works, with a worked example and the best-fit sites.',
    definition:
      'Maximum demand peak shaving means reducing the highest level of power drawn from the grid — when a business approaches a demand peak, the BESS discharges stored electricity so the grid sees a lower, cheaper peak.',
    sections: [
      {
        heading: 'Why businesses have demand peaks',
        paragraphs: [
          'Commercial and industrial sites often have demand peaks because many systems operate at once — a factory starting multiple machines, a mall running air-conditioning, lighting, escalators and tenants together, or a cold store cycling compressors. Common causes include machine start-up, production-line operation, HVAC and chillers, refrigeration, compressed air, pumps and motors, EV chargers, and data-centre cooling.',
        ],
      },
      {
        heading: 'How peak shaving saves money',
        paragraphs: [
          'Peak shaving saves money by reducing maximum demand charges. If a business lowers its recorded maximum demand, it may reduce the demand portion of the bill. BESS is ideal because it responds quickly — instead of manually switching equipment, the system discharges automatically when demand rises above a preset level.',
        ],
      },
      {
        heading: 'A worked example',
        paragraphs: [
          'Imagine a factory with a normal load of 900 kW that occasionally peaks at 1,300 kW. The BESS is designed to discharge 400 kW during the peak period. Without BESS the grid demand may reach 1,300 kW; with BESS it may only reach 900–1,000 kW. The business still operates normally, but the recorded peak demand is reduced — that is the financial logic behind peak shaving.',
        ],
      },
      {
        heading: 'EMS: the brain behind peak shaving',
        paragraphs: [
          'The EMS monitors the site load and controls the battery, deciding when to charge, when to discharge and how much power to release. Without intelligent EMS the battery may discharge too early, too late or at the wrong level. A strong EMS protects savings and improves performance.',
        ],
      },
      {
        heading: 'Which businesses benefit most',
        paragraphs: ['Peak shaving suits sites with high or irregular demand patterns, including:'],
        bullets: [
          'Manufacturing and food-processing plants',
          'Cold storage facilities',
          'Shopping malls and hotels',
          'Hospitals',
          'Office towers and data centres',
          'Logistics warehouses and industrial parks',
        ],
      },
    ],
    faq: [
      { question: 'What is maximum demand peak shaving?', answer: 'It is reducing peak grid demand by using stored energy during high-load periods.' },
      { question: 'How does BESS help with peak shaving?', answer: 'BESS discharges electricity when site demand rises, reducing the power drawn from the grid.' },
      { question: 'Can peak shaving reduce electricity bills?', answer: 'Yes. If maximum demand charges are significant, peak shaving can reduce monthly electricity costs.' },
      { question: 'Is peak shaving suitable for factories?', answer: 'Yes. Factories with machinery, motors, compressors or production peaks are often suitable.' },
    ],
    related: [
      { label: 'Maximum Demand Peak Shaving', href: '/peak-shaving-malaysia' },
      { label: 'Power Expansion with BESS', href: '/power-expansion-bess' },
    ],
  },
  {
    slug: 'bess-for-factories-malaysia',
    title: 'BESS for Factories: Lower Energy Cost and Improve Power Reliability',
    seoTitle: 'BESS for Factories: Lower Energy Cost and Improve Reliability',
    metaDescription:
      'Learn how BESS helps factories reduce electricity bills, manage maximum demand, support solar, expand power capacity and improve energy reliability.',
    category: 'Commercial',
    excerpt: 'Why factories are ideal BESS candidates — cost, demand, solar and expansion.',
    definition:
      'Factories are among the best candidates for BESS: they consume large amounts of electricity and face high demand spikes, so storing electricity and discharging it when needed reduces demand charges, improves solar use and supports expansion.',
    sections: [
      {
        heading: 'Why factories need better energy control',
        paragraphs: [
          'Factory load can change quickly with production schedules, machinery start-up and equipment cycles. Common challenges include high maximum demand charges, demand spikes during start-up, large bills, grid capacity limitations, expansion constraints, solar mismatch, power-quality concerns and pressure to improve ESG. BESS gives factories a flexible way to manage electricity.',
        ],
      },
      {
        heading: 'How BESS reduces factory energy cost',
        paragraphs: [
          'BESS reduces cost through maximum demand peak shaving, solar energy storage, load shifting, energy-usage optimisation and reduced reliance on the grid during peaks. For many factories, demand charges are a significant part of the bill, so reducing the peak can achieve meaningful savings.',
        ],
      },
      {
        heading: 'Maximum demand reduction for factories',
        paragraphs: ['BESS detects rising demand and discharges to support the load — especially useful for factories with:'],
        bullets: [
          'Large motors and injection-moulding machines',
          'Compressors and CNC machines',
          'Chillers and pumps',
          'Production lines',
          'Furnaces or heating equipment',
          'High start-up loads',
        ],
      },
      {
        heading: 'Solar + BESS and power expansion',
        paragraphs: [
          'Many factories install rooftop solar, but generation may not match load — peaks may occur during start-up, late afternoon or evening shifts. BESS stores excess solar for later, improving self-consumption. It also supports power expansion: when adding a new line would push peak demand beyond the grid limit, BESS can supply the extra power during peaks, reducing pressure on existing infrastructure while a longer-term upgrade is planned.',
        ],
      },
      {
        heading: 'Reliability and ESG',
        paragraphs: [
          'Power reliability matters for factories — outages cause downtime, defects, equipment damage and losses. BESS can support reliability as part of a broader strategy with UPS, generators and power-quality equipment. It also strengthens ESG: solar reduces emissions, and BESS improves the ability to use that solar energy effectively, supporting reporting required by customers, investors and international buyers.',
        ],
      },
    ],
    faq: [
      { question: 'Is BESS suitable for factories?', answer: 'Yes — for factories with high electricity bills, maximum demand charges, solar systems or expansion needs.' },
      { question: 'How does BESS reduce factory electricity cost?', answer: 'By lowering maximum demand, storing solar energy and optimising energy usage.' },
      { question: 'Can BESS support factory expansion?', answer: 'Yes. BESS can support additional load during peak periods and reduce pressure on existing grid capacity.' },
      { question: 'Can BESS improve power reliability?', answer: 'Yes — especially when integrated with the right electrical and control systems.' },
    ],
    related: [
      { label: 'Power Expansion with BESS', href: '/power-expansion-bess' },
      { label: 'Industries We Serve', href: '/industries' },
    ],
  },
  {
    slug: 'bess-for-shopping-malls-commercial-buildings',
    title: 'BESS for Shopping Malls and Commercial Buildings',
    seoTitle: 'BESS for Shopping Malls and Commercial Buildings',
    metaDescription:
      'Discover how BESS helps shopping malls and commercial buildings reduce electricity costs, manage peak demand, support solar and improve energy efficiency.',
    category: 'Commercial',
    excerpt: 'How malls and commercial towers cut demand charges and support EV charging.',
    definition:
      'Shopping malls and commercial buildings consume large amounts of electricity from air-conditioning, lighting, escalators, lifts and tenants — and BESS helps reduce energy cost, manage maximum demand and improve efficiency.',
    sections: [
      {
        heading: 'Why commercial buildings have high energy costs',
        paragraphs: ['Instead of heavy production machinery, commercial buildings have high loads from:'],
        bullets: [
          'Central air-conditioning and chillers',
          'Lighting',
          'Escalators and lifts',
          'Tenant operations',
          'Ventilation and water pumps',
          'Parking systems and EV chargers',
        ],
      },
      {
        heading: 'How BESS helps malls and towers',
        paragraphs: [
          'Malls have predictable demand patterns — rising when the mall opens and peaking during high customer hours as cooling, tenants and common facilities run together. BESS discharges during these high-demand periods to reduce grid demand and lower demand charges. For office towers, BESS smooths the working-hours peak from air-conditioning, lifts, lighting and equipment, and supports green-building and net-zero pathways.',
        ],
      },
      {
        heading: 'Solar + BESS for malls and buildings',
        paragraphs: [
          'Many malls and commercial buildings have large rooftops or car parks for solar, but generation may not match consumption — a mall may use strong electricity in the evening when solar has dropped. BESS stores daytime solar for later use, improving the value of the solar system.',
        ],
      },
      {
        heading: 'BESS for EV charging',
        paragraphs: [
          'As EV adoption grows, malls and buildings install more chargers, which create new demand and increase peak load. BESS can support EV charging during high-demand periods and reduce the impact on grid capacity — especially relevant for malls, hotels, office towers and mixed-use developments.',
        ],
      },
      {
        heading: 'Energy efficiency and ESG',
        paragraphs: ['BESS supports ESG goals for commercial property owners by helping to:'],
        bullets: [
          'Increase renewable energy usage',
          'Reduce reliance on grid power during peaks',
          'Improve energy management and data reporting',
          'Support green-building strategies',
          'Reduce carbon footprint when paired with solar',
          'Enhance asset value and tenant appeal',
        ],
      },
    ],
    faq: [
      { question: 'Can BESS reduce electricity bills for malls?', answer: 'Yes. BESS can reduce maximum demand charges and improve solar self-consumption.' },
      { question: 'Is BESS suitable for office buildings?', answer: 'Yes. Office buildings with high air-conditioning loads and peak demand can benefit.' },
      { question: 'Can BESS support EV chargers?', answer: 'Yes. BESS can help manage the additional demand created by EV charging stations.' },
      { question: 'Can BESS work with rooftop solar?', answer: 'Yes. BESS can store excess rooftop solar energy and release it when needed.' },
    ],
    related: [
      { label: 'Commercial & Industrial BESS', href: '/commercial-industrial-bess-malaysia' },
      { label: 'Industries We Serve', href: '/industries' },
    ],
  },
  {
    slug: 'bess-for-cold-storage-data-centres-high-load-facilities',
    title: 'BESS for Cold Storage, Data Centres and High-Load Facilities',
    seoTitle: 'BESS for Cold Storage, Data Centres and High-Load Facilities',
    metaDescription:
      'Learn how BESS supports cold storage, data centres and high-load facilities by reducing peak demand, improving reliability and supporting power expansion.',
    category: 'Commercial',
    excerpt: 'How energy-intensive sites cut peak demand and strengthen reliability.',
    definition:
      'Cold storage facilities, data centres and high-load operations need reliable, continuous electricity — and BESS helps reduce peak demand, improve energy flexibility, support backup strategies and manage future power expansion.',
    sections: [
      {
        heading: 'Why high-load facilities need BESS',
        paragraphs: ['High-load facilities operate with heavy, continuous demand. Examples include:'],
        bullets: [
          'Cold storage warehouses and food processing plants',
          'Data centres and semiconductor facilities',
          'Pharmaceutical plants and hospitals',
          'Logistics hubs',
          'Large manufacturing and industrial refrigeration sites',
        ],
      },
      {
        heading: 'BESS for cold storage',
        paragraphs: [
          'Cold storage relies heavily on refrigeration — compressors, chillers and cooling systems create large, recurring loads, with spikes when equipment cycles or works harder in hot weather and during loading. BESS reduces demand peaks, supports refrigeration load management, improves solar usage and supports operational reliability, which matters because temperature stability affects product quality.',
        ],
      },
      {
        heading: 'BESS for data centres',
        paragraphs: [
          'Data centres require stable, reliable electricity for servers, cooling, UPS and network infrastructure. BESS can reduce peak demand, support energy optimisation, improve renewable integration, assist with power-capacity management and support resilience planning. It is not necessarily a direct replacement for UPS or generators, but complements the broader power architecture.',
        ],
      },
      {
        heading: 'Power expansion and reliability',
        paragraphs: [
          'Grid capacity can limit high-load facilities that want to add cooling, servers or production equipment. BESS supplies power during peaks, reducing the urgency of grid upgrades and creating flexibility. For reliability, BESS provides stored energy and fast response, and can be integrated with UPS, generators, solar PV and energy-management systems to create a stronger resilience strategy.',
        ],
      },
      {
        heading: 'Key design considerations',
        paragraphs: ['BESS for high-load facilities must be carefully planned around:'],
        bullets: [
          'Load profile and maximum demand pattern',
          'Critical-load and backup-duration requirements',
          'Solar generation profile and grid capacity',
          'Existing UPS or generator systems',
          'Cooling and safety requirements',
          'Available space and operating schedule',
          'O&M capability',
        ],
      },
    ],
    faq: [
      { question: 'Is BESS suitable for cold storage?', answer: 'Yes. BESS can help cold storage facilities reduce maximum demand and support energy reliability.' },
      { question: 'Can BESS be used for data centres?', answer: 'Yes. BESS can support peak shaving, energy optimisation and renewable integration for data centres.' },
      { question: 'Can BESS replace UPS?', answer: 'Not always. BESS can complement UPS and backup systems, but the design depends on the facility’s reliability requirements.' },
      { question: 'Why do high-load facilities need BESS?', answer: 'They use large amounts of power and often face high demand charges, grid limitations and reliability concerns — BESS helps manage these.' },
    ],
    related: [
      { label: 'O&M for ESS Projects', href: '/bess-om-malaysia' },
      { label: 'Industries We Serve', href: '/industries' },
    ],
  },
];
