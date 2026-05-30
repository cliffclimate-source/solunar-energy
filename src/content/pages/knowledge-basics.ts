import type { Article } from './knowledge-types';

/** BESS Basics cluster — foundational explainers for the Malaysian market. */
export const basicsArticles: Article[] = [
  {
    slug: 'what-is-bess-malaysia',
    title: 'What Is BESS and Why It Matters for Malaysia’s Energy Future',
    seoTitle: 'What Is BESS? Battery Energy Storage System in Malaysia',
    metaDescription:
      'Learn what BESS means, how battery energy storage systems work, and why BESS is important for Malaysia’s solar, industrial and utility-scale energy future.',
    category: 'Fundamentals',
    excerpt: 'What BESS means, how it works, and why it matters for Malaysia’s energy future.',
    definition:
      'BESS stands for Battery Energy Storage System — a system that stores electricity in batteries and releases it when needed, working like an energy bank for buildings, factories, solar plants and the grid.',
    sections: [
      {
        heading: 'What is BESS?',
        paragraphs: [
          'BESS stands for Battery Energy Storage System. It stores electricity in batteries and releases the stored energy when needed. For businesses, developers and power-plant owners, it is becoming one of the most important technologies in the clean-energy transition because it allows electricity to be stored, controlled and used more intelligently.',
          'In simple terms, a BESS works like an energy bank. When electricity is available it stores it; when electricity is expensive, insufficient or unstable, it discharges power to support the building, factory, solar plant or grid. For Malaysia, this matters because the country is moving towards higher renewable energy adoption, more solar generation and a stronger need for grid stability.',
        ],
      },
      {
        heading: 'Why BESS is important in Malaysia',
        paragraphs: [
          'Malaysia has strong solar potential, and many factories, commercial buildings and developers are already investing in solar PV. But solar has one limitation: it only generates electricity when sunlight is available.',
          'With battery storage, excess solar energy can be stored instead of wasted, then used later during peak demand, evening hours or when grid supply is limited. For commercial and industrial users, BESS can reduce electricity costs through maximum demand peak shaving. For solar developers, it can improve project bankability, increase energy flexibility and support large-scale solar integration.',
        ],
      },
      {
        heading: 'How BESS supports commercial and industrial businesses',
        paragraphs: [
          'For factories, warehouses, shopping malls, data centres and high-load facilities, energy cost is a major operating expense. BESS is no longer just a future technology — it is becoming a practical energy-management tool that can help businesses:',
        ],
        bullets: [
          'Reduce maximum demand charges',
          'Store cheaper or excess electricity',
          'Support solar self-consumption',
          'Improve power reliability',
          'Reduce dependency on grid upgrades',
          'Provide backup power in selected situations',
          'Move towards net zero',
        ],
      },
      {
        heading: 'How BESS supports solar projects',
        paragraphs: [
          'Solar production changes through the day — high during sunny hours and low during cloudy periods or at night. A BESS stores excess solar generation and releases it when required, improving energy utilisation and making solar power more flexible.',
          'For large-scale solar plants, BESS can also support grid stability, reduce intermittency and improve dispatchability — especially relevant for projects involving LSS, CRESS, corporate PPAs and future renewable energy infrastructure in Malaysia.',
        ],
      },
      {
        heading: 'Why BESS matters for the future of energy',
        paragraphs: [
          'The future energy system will not only be about generating electricity. It will be about controlling, storing and optimising energy. BESS connects solar generation, grid management, business energy savings and digital energy control.',
          'A well-designed BESS solution is not just a battery container. It includes battery modules, power conversion systems, energy-management software, cloud monitoring, protection systems, safety controls and long-term O&M — which is why choosing the right BESS integrator is important.',
        ],
      },
    ],
    faq: [
      { question: 'What does BESS stand for?', answer: 'BESS stands for Battery Energy Storage System. It stores electricity in batteries and releases it when needed.' },
      { question: 'Is BESS only for solar projects?', answer: 'No. BESS can be used with solar, grid electricity, commercial buildings, factories, data centres and utility-scale energy projects.' },
      { question: 'How does BESS help businesses save money?', answer: 'BESS can reduce maximum demand charges, increase solar self-consumption and help businesses manage electricity usage more efficiently.' },
      { question: 'Is BESS suitable for Malaysia?', answer: 'Yes. BESS is highly relevant for Malaysia because of the growth of solar power, commercial energy demand and the need for better energy flexibility.' },
    ],
    related: [
      { label: 'Commercial & Industrial BESS', href: '/commercial-industrial-bess-malaysia' },
      { label: 'What We Do', href: '/what-we-do' },
    ],
  },
  {
    slug: 'how-battery-energy-storage-systems-work',
    title: 'How Battery Energy Storage Systems Work',
    seoTitle: 'How Battery Energy Storage Systems Work | BESS Explained',
    metaDescription:
      'Understand how battery energy storage systems work, including charging, discharging, PCS, EMS, monitoring and solar integration for commercial and utility projects.',
    category: 'Fundamentals',
    excerpt: 'Charging, discharging, PCS, EMS, monitoring and solar integration — step by step.',
    definition:
      'A Battery Energy Storage System works by storing electricity in batteries and releasing it when required — managed by a Power Conversion System, an Energy Management System and cloud monitoring so energy is used at the right time and cost.',
    sections: [
      {
        heading: 'Step 1: Electricity is generated or supplied',
        paragraphs: [
          'Electricity can come from solar PV, the grid, a generator, a renewable power plant or a hybrid system. For solar projects, generation peaks during daylight — and a solar system may produce more than the site can use at certain times. Without storage, this energy may be exported, curtailed or underutilised. With BESS, the excess can be stored.',
        ],
      },
      {
        heading: 'Step 2: The battery stores energy',
        paragraphs: [
          'The battery is the core of the BESS, storing electrical energy in chemical form. Most modern commercial and utility-scale systems use lithium iron phosphate (LFP) chemistry, chosen for its safety profile, long cycle life and suitability for stationary storage. When charging, electricity flows into the battery until the system is instructed to discharge.',
        ],
      },
      {
        heading: 'Step 3: The PCS converts the electricity',
        paragraphs: [
          'A battery stores DC power, but most buildings, factories and grids use AC. The Power Conversion System (PCS) converts AC to DC when charging and DC to AC when discharging. It is one of the most important parts of a BESS because it controls how energy flows in and out of the battery.',
        ],
      },
      {
        heading: 'Step 4: The EMS controls the system',
        paragraphs: [
          'The Energy Management System (EMS) is the brain of the BESS. It decides when the battery charges, when it discharges and how the system responds to operating conditions — and can be programmed to:',
        ],
        bullets: [
          'Charge the battery when solar generation is high',
          'Discharge during peak demand periods',
          'Reduce maximum demand charges',
          'Avoid overloading the site’s electrical infrastructure',
          'Support backup-power strategy',
          'Optimise battery performance',
          'Detect faults and operating issues',
        ],
      },
      {
        heading: 'Step 5: The system discharges energy when needed',
        paragraphs: [
          'When the site needs power, the BESS discharges stored energy — during peak demand, evening hours, grid-constraint periods, solar fluctuations or high-tariff periods. For commercial and industrial users this is especially useful for maximum demand peak shaving: when a factory or building hits a demand spike, the BESS discharges to reduce the power drawn from the grid.',
        ],
      },
      {
        heading: 'Step 6: Cloud O&M monitors performance',
        paragraphs: [
          'Modern BESS projects require continuous monitoring. Through cloud O&M platforms, operators can remotely track state of charge, temperature, charge/discharge activity, PCS performance, fault alerts, energy savings, availability and battery degradation — detecting issues early and reducing site visits.',
        ],
      },
      {
        heading: 'Why system integration matters',
        paragraphs: [
          'A BESS is not just a battery — it is a complete electrical, software and safety system. The battery, PCS, EMS, transformer, protection and monitoring must work together. Poor integration can lead to underperformance, downtime, safety issues or lower returns, which is why system design and integration are critical.',
        ],
      },
    ],
    faq: [
      { question: 'What is the main function of a BESS?', answer: 'The main function of a BESS is to store electricity and release it when needed.' },
      { question: 'What is PCS in a BESS?', answer: 'PCS stands for Power Conversion System. It converts electricity between DC and AC.' },
      { question: 'What is EMS in a BESS?', answer: 'EMS stands for Energy Management System. It controls charging, discharging, optimisation and monitoring of the BESS.' },
      { question: 'Can BESS work with solar?', answer: 'Yes. BESS is commonly used with solar to store excess solar energy and improve energy utilisation.' },
    ],
    related: [
      { label: 'PCS, EMS & Architecture', href: '/pcs-ems-system-integration' },
      { label: 'Products', href: '/products' },
    ],
  },
  {
    slug: 'bess-vs-solar-businesses-need-both',
    title: 'BESS vs Solar: Why Businesses Need Both',
    seoTitle: 'BESS vs Solar: Why Businesses Need Solar + Battery Storage',
    metaDescription:
      'Solar reduces energy cost, but BESS adds control, flexibility and peak shaving. Learn why businesses in Malaysia need both solar and battery storage.',
    category: 'Fundamentals',
    excerpt: 'Solar generates power; BESS controls it. Why the two work best together.',
    definition:
      'Solar PV and BESS are different but complementary: solar generates electricity from sunlight, while BESS stores electricity and releases it when needed. Together they unlock deeper savings, flexibility and energy security.',
    sections: [
      {
        heading: 'What solar does well',
        paragraphs: [
          'Solar PV helps companies generate clean electricity, reduce grid consumption, lower bills, improve ESG performance and use available rooftop or land space. For factories, warehouses and commercial buildings with good daytime consumption, solar can be a strong investment — but it only generates power when sunlight is available.',
        ],
      },
      {
        heading: 'The limitation of solar alone',
        paragraphs: [
          'Solar generation is lower in the morning, peaks at midday and reduces in the evening, fluctuating with weather. This creates challenges:',
        ],
        bullets: [
          'Excess solar during low-load periods',
          'Insufficient solar during peak demand',
          'No solar generation at night',
          'Limited control over when solar energy is used',
          'Potential grid-export limitations',
          'Reduced value if the site cannot consume all generation',
        ],
      },
      {
        heading: 'What BESS adds to solar',
        paragraphs: [
          'BESS solves many of solar’s limitations by storing electricity and releasing it when needed. When solar generation exceeds demand, the BESS charges; when generation is low or demand is high, it discharges. This lets the business use more of its own solar energy instead of relying on the grid — and supports maximum demand peak shaving, which matters because demand charges can be a significant part of the bill.',
        ],
      },
      {
        heading: 'Solar saves energy; BESS manages power',
        paragraphs: [
          'A simple way to understand the difference: solar reduces energy consumption from the grid (kWh), while BESS manages when power is used and how demand peaks are handled (kW). That is why the combination of solar + BESS can be more powerful than solar alone.',
        ],
      },
      {
        heading: 'Why businesses need both',
        paragraphs: [
          'Energy cost is no longer only about how much electricity is used — it is also about when it is used and how demand is managed. Solar + BESS together can help businesses:',
        ],
        bullets: [
          'Increase solar self-consumption',
          'Reduce maximum demand charges',
          'Improve energy resilience',
          'Avoid or delay grid infrastructure upgrades',
          'Support power expansion',
          'Reduce exposure to rising electricity costs',
          'Improve ESG reporting',
          'Create a more future-ready energy system',
        ],
      },
    ],
    faq: [
      { question: 'Is BESS better than solar?', answer: 'BESS is not better than solar — it serves a different function. Solar generates electricity, while BESS stores and manages it.' },
      { question: 'Can I install BESS without solar?', answer: 'Yes. BESS can work with the grid even without solar, especially for peak shaving and power management.' },
      { question: 'Why combine solar with BESS?', answer: 'Combining solar with BESS allows businesses to store excess solar energy and use it when needed.' },
      { question: 'Does BESS help reduce maximum demand?', answer: 'Yes. BESS can discharge during demand peaks to reduce maximum demand charges.' },
    ],
    related: [
      { label: 'Maximum Demand Peak Shaving', href: '/peak-shaving-malaysia' },
      { label: 'Commercial & Industrial BESS', href: '/commercial-industrial-bess-malaysia' },
    ],
  },
  {
    slug: 'what-is-energy-storage-system',
    title: 'What Is an Energy Storage System?',
    seoTitle: 'What Is an Energy Storage System? ESS Explained for Businesses',
    metaDescription:
      'Learn what an energy storage system is, how ESS works, and why energy storage is important for solar, commercial buildings, factories and power projects.',
    category: 'Fundamentals',
    excerpt: 'What ESS means, the types of storage, and how it differs from BESS.',
    definition:
      'An Energy Storage System (ESS) stores energy and releases it when needed. In the power industry it usually refers to technologies that store electricity — the most common modern solution being a Battery Energy Storage System (BESS).',
    sections: [
      {
        heading: 'Why energy storage is needed',
        paragraphs: [
          'Electricity demand is not constant, and renewable sources such as solar are variable. This creates a mismatch between when energy is generated and when it is needed. Energy storage helps solve this — storing electricity during low demand, high solar generation or lower cost, then discharging during peak demand, low solar or when extra power is required.',
        ],
      },
      {
        heading: 'Types of energy storage systems',
        paragraphs: ['There are several energy-storage technologies. Common examples include:'],
        bullets: [
          'Battery energy storage',
          'Pumped hydro storage',
          'Thermal energy storage',
          'Compressed air energy storage',
          'Hydrogen storage',
          'Flywheel storage',
        ],
      },
      {
        heading: 'What is the difference between ESS and BESS?',
        paragraphs: [
          'ESS is the broader term — any type of energy storage system. BESS is a specific type of ESS that uses batteries to store electricity. In many commercial discussions the terms are used interchangeably, but technically BESS is one category under ESS. For commercial, industrial and utility-scale applications, battery-based ESS is one of the most practical and scalable options.',
        ],
      },
      {
        heading: 'How an energy storage system works',
        paragraphs: ['For a battery-based ESS, the process is straightforward:'],
        bullets: [
          'Electricity enters the system',
          'The battery stores the electricity',
          'The PCS converts electricity between AC and DC',
          'The EMS controls charging and discharging',
          'The system releases power when required',
          'Cloud monitoring tracks performance and faults',
        ],
      },
      {
        heading: 'ESS for commercial, solar and utility-scale use',
        paragraphs: [
          'For businesses, ESS can support maximum demand peak shaving, solar self-consumption, backup power, energy cost optimisation, power quality and load shifting. For solar developers, it stores excess solar energy, reduces intermittency and improves dispatch. At utility scale, it supports energy shifting, grid stability, frequency response and renewable smoothing — becoming a long-term energy infrastructure asset.',
        ],
      },
    ],
    faq: [
      { question: 'What does ESS mean?', answer: 'ESS stands for Energy Storage System.' },
      { question: 'Is ESS the same as BESS?', answer: 'BESS is a type of ESS. ESS is the broader term, while BESS specifically refers to battery energy storage.' },
      { question: 'Why do businesses need ESS?', answer: 'Businesses use ESS to reduce demand charges, improve energy control, support solar and manage power more efficiently.' },
      { question: 'Can ESS be used for solar farms?', answer: 'Yes. ESS can be used with solar farms to store excess energy and improve power dispatch.' },
    ],
    related: [
      { label: 'Utility-Scale ESS Farms', href: '/utility-scale-ess-malaysia' },
      { label: 'What We Do', href: '/what-we-do' },
    ],
  },
  {
    slug: 'bess-vs-ess-vs-battery-storage',
    title: 'Difference Between BESS, ESS and Battery Storage',
    seoTitle: 'BESS vs ESS vs Battery Storage: What Is the Difference?',
    metaDescription:
      'Understand the difference between BESS, ESS and battery storage, and how these terms apply to commercial, industrial and utility-scale energy projects.',
    category: 'Fundamentals',
    excerpt: 'ESS is the broad category; BESS is battery-based; battery storage is the battery part.',
    definition:
      'ESS means Energy Storage System (the broadest term), BESS means Battery Energy Storage System (a battery-based ESS), and battery storage usually refers to the battery-based part of a storage solution.',
    sections: [
      {
        heading: 'What is ESS?',
        paragraphs: [
          'ESS stands for Energy Storage System — the broadest term, referring to any system that stores energy and releases it when needed. It can include battery, pumped hydro, thermal, hydrogen, compressed-air or flywheel storage. In commercial and renewable discussions, ESS often refers to battery-based storage because batteries are common for commercial, industrial and utility-scale projects.',
        ],
      },
      {
        heading: 'What is BESS?',
        paragraphs: [
          'BESS stands for Battery Energy Storage System — a specific type of ESS that uses batteries. A complete BESS includes more than batteries:',
        ],
        bullets: [
          'Battery racks or containers',
          'Battery Management System',
          'Power Conversion System',
          'Energy Management System',
          'Transformer and switchgear',
          'Protection and cooling systems',
          'Fire safety system',
          'Cloud monitoring and O&M platform',
        ],
      },
      {
        heading: 'What is battery storage?',
        paragraphs: [
          'Battery storage is a general term for storing electricity in batteries — from small residential batteries to large utility-scale containers. It is less technical than BESS; when discussing commercial and industrial projects, banks, developers and engineers usually prefer BESS because it describes the full system.',
        ],
      },
      {
        heading: 'The main differences',
        paragraphs: [
          'The difference is scope. ESS is the broad category; BESS is a battery-based ESS. A pumped-hydro plant is an ESS but not a BESS; a lithium battery container with PCS and EMS is both. In short: all BESS projects are ESS projects, but not all ESS projects are BESS projects. Battery storage refers to the battery function, while BESS refers to the complete electrical, software, control, safety and monitoring system.',
        ],
      },
      {
        heading: 'Why the difference matters for businesses',
        paragraphs: [
          'A business may think it only needs "battery storage", but in reality it needs a complete BESS with load analysis, battery sizing, PCS selection, EMS control strategy, protection design, peak-shaving logic, cloud monitoring, O&M support and safety planning. Without these elements the system may not deliver the expected savings or reliability — which is why a system integrator matters.',
        ],
      },
    ],
    faq: [
      { question: 'Is BESS the same as ESS?', answer: 'BESS is a type of ESS. ESS is the broader term for energy storage systems.' },
      { question: 'Is battery storage the same as BESS?', answer: 'Not exactly. Battery storage refers to storing energy in batteries, while BESS refers to the complete system including PCS, EMS, safety and monitoring.' },
      { question: 'Which term should I use for a commercial project?', answer: 'For commercial and industrial projects, BESS is usually the more accurate term.' },
      { question: 'Does Solunar provide ESS or BESS?', answer: 'Solunar provides battery-based ESS solutions, commonly known as BESS.' },
    ],
    related: [
      { label: 'Multi-Brand BESS Integration', href: '/multi-brand-bess-integration' },
      { label: 'PCS, EMS & Architecture', href: '/pcs-ems-system-integration' },
    ],
  },
  {
    slug: 'key-components-of-bess',
    title: 'Key Components of a BESS: Battery, PCS, EMS and Transformer',
    seoTitle: 'Key Components of a BESS: Battery, PCS, EMS and Transformer',
    metaDescription:
      'Learn the key components of a battery energy storage system, including battery, PCS, EMS, transformer, switchgear, safety systems and cloud O&M.',
    category: 'Fundamentals',
    excerpt: 'The eight building blocks of a complete battery energy storage system.',
    definition:
      'A complete BESS is more than a battery. It combines a battery system, PCS, EMS, transformer, switchgear and protection, thermal management, fire safety and a cloud monitoring platform — all working together.',
    sections: [
      {
        heading: '1. Battery system',
        paragraphs: [
          'The battery is the heart of the BESS, storing energy and releasing it when required. In commercial and utility-scale projects it is arranged in racks, cabinets or containers, with a Battery Management System (BMS) monitoring voltage, temperature, state of charge, state of health and safety protection. Battery quality is critical because it affects performance, safety, warranty, degradation and long-term return.',
        ],
      },
      {
        heading: '2. Power Conversion System (PCS)',
        paragraphs: [
          'Batteries store DC power; most buildings, factories and grids use AC. The PCS converts between DC and AC during charging and discharging, and helps control power flow, voltage, frequency and system response. A well-selected PCS improves efficiency, stability and performance.',
        ],
      },
      {
        heading: '3. Energy Management System (EMS)',
        paragraphs: [
          'The EMS is the brain of the BESS, controlling the operating strategy — when the battery charges and discharges and how it responds to site demand, solar generation or grid conditions. It supports peak shaving, solar self-consumption, load shifting, fault diagnostics, real-time monitoring, scheduling and energy optimisation. Without a good EMS, a BESS may not deliver its expected value.',
        ],
      },
      {
        heading: '4. Transformer',
        paragraphs: [
          'The transformer adjusts voltage levels so the BESS can connect properly to the site or grid. For commercial and utility-scale projects, voltage matching is essential because the battery and PCS may operate at a different voltage from the building, factory or grid connection.',
        ],
      },
      {
        heading: '5. Switchgear and protection',
        paragraphs: ['Switchgear and protection equipment safely connect, isolate and protect the BESS, including:'],
        bullets: [
          'Circuit breakers and relays',
          'Fuses and isolators',
          'Protection panels',
          'Metering systems',
          'Earthing systems',
        ],
      },
      {
        heading: '6, 7 & 8: Thermal, fire safety and cloud O&M',
        paragraphs: [
          'Batteries must operate within a safe temperature range, so the thermal management system (air or liquid cooling) controls temperature and prevents overheating — especially important in Malaysia’s hot, humid climate. A complete BESS also includes fire detection, suppression, ventilation and emergency shutdown. Finally, a cloud O&M platform allows remote monitoring of state of charge, state of health, temperature, PCS operation, energy throughput, alarms and performance trends — helping owners maintain uptime and long-term performance.',
        ],
      },
    ],
    faq: [
      { question: 'What are the main components of a BESS?', answer: 'The main components are the battery system, PCS, EMS, transformer, switchgear, thermal management, fire safety system and monitoring platform.' },
      { question: 'What does PCS do in a BESS?', answer: 'PCS converts electricity between DC and AC so the battery can charge and discharge properly.' },
      { question: 'What does EMS do in a BESS?', answer: 'EMS controls the charging, discharging, optimisation and monitoring strategy of the BESS.' },
      { question: 'Why is a transformer needed in BESS?', answer: 'A transformer adjusts voltage levels so the BESS can connect safely to the site or grid.' },
    ],
    related: [
      { label: 'PCS, EMS & Architecture', href: '/pcs-ems-system-integration' },
      { label: 'BESS Safety & Reliability', href: '/bess-safety' },
    ],
  },
];
