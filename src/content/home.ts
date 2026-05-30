import type { Action, FaqItem } from '@/content/types';

export const homeMeta = {
  slug: '/',
  seoTitle: 'BESS System Integrator Malaysia | Solunar Energy',
  metaDescription:
    'Solunar Energy is a Solar + BESS distributor and system integrator in Malaysia, supporting EPCCs, developers and asset owners with battery storage, PCS, EMS and O&M.',
  primaryKeyword: 'BESS system integrator Malaysia',
};

export const homeHero = {
  eyebrow: 'Solar + BESS Technology Partner · Malaysia',
  h1: 'The Solar + BESS Technology Partner Behind EPCC Companies in Malaysia',
  lead: 'Solunar Energy is a Solar and Battery Energy Storage System (BESS) distributor and system integration partner in Malaysia. We help EPCC companies, developers and asset owners deliver safer, smarter and more bankable energy storage projects — without building full battery storage capability in-house.',
  support:
    'We are not an EPCC contractor. We are the technology partner behind the EPCC — supplying battery storage, GoodWe inverters and batteries, selected BYD battery integration, EVE BESS integration, PCS and EMS coordination, system sizing, technical proposal support and O&M planning for commercial and utility-scale ESS projects across Malaysia and Southeast Asia.',
  actions: [
    { label: 'Partner With Solunar', href: '/contact' },
    { label: 'How We Support EPCCs', href: '/bess-partner-for-epcc' },
  ] as Action[],
  stats: [
    { value: 'BYD', label: 'Safety-focused LFP battery integration' },
    { value: 'GoodWe', label: 'Inverter & battery distribution' },
    { value: 'EVE', label: 'BESS platform integration' },
    { value: 'PCS · EMS', label: 'Full system coordination' },
  ],
};

export const homePositioning = {
  eyebrow: 'Positioning',
  heading: "We Don't Compete With EPCCs in Malaysia. We Help EPCCs Win.",
  paragraphs: [
    'Many solar EPCC companies in Malaysia are now being asked to deliver Solar + BESS projects, but battery storage demands different expertise from solar EPCC. It involves battery chemistry, PCS selection, EMS control logic, fire safety, thermal management, warranty structure, degradation planning and long-term O&M.',
    'Solunar Energy bridges that gap. We provide the technology, integration support and storage know-how so EPCC companies can focus on client relationships, project execution and site delivery.',
  ],
  quote: 'You bring the project. We bring the BESS technology backbone.',
};

export const homeServices = {
  eyebrow: 'What Solunar Provides',
  heading: 'Six core areas of Solar + BESS support',
  lead: 'Solunar Energy supports Solar + BESS projects across six core areas:',
  cards: [
    {
      icon: 'battery',
      title: 'BESS Technology Distribution',
      text: 'Supply and support of selected battery storage technologies for commercial, industrial and utility-scale projects.',
      href: '/what-we-do',
      image: '/images/multi-brand-integration.png',
    },
    {
      icon: 'inverter',
      title: 'GoodWe Inverter & Battery Distribution',
      text: 'Distribution of GoodWe solar inverters, hybrid inverters and energy storage battery solutions for suitable applications.',
      href: '/goodwe-inverter-malaysia',
      image: '/images/goodwe-inverter.png',
    },
    {
      icon: 'battery-charging',
      title: 'BYD Battery Solution Integration',
      text: 'Integration of selected BYD battery solutions where safety, reliability and long-term performance are critical.',
      href: '/byd-battery-malaysia',
      image: '/images/byd-battery.png',
    },
    {
      icon: 'layers',
      title: 'EVE BESS Integration',
      text: 'Integration of EVE BESS solutions depending on project requirements and technical configuration.',
      href: '/eve-bess-integration',
      image: '/images/eve-bess.png',
    },
    {
      icon: 'pcs',
      title: 'PCS & EMS Integration',
      text: 'Coordination of batteries, PCS, EMS, inverters, transformers and monitoring into one system.',
      href: '/pcs-ems-system-integration',
      image: '/images/pcs-ems.png',
    },
    {
      icon: 'om',
      title: 'O&M & After-Sales Support',
      text: 'Long-term monitoring, maintenance planning and technical troubleshooting for commercial and utility-scale ESS assets.',
      href: '/bess-om-malaysia',
      image: '/images/bess-om.png',
    },
  ],
};

export const homeSolarVsBess = {
  eyebrow: 'Solar vs BESS',
  heading: "Solar Generates Power. BESS Controls Power. Here's the Difference.",
  lead: 'A solar project is mainly about generation; a BESS project is about control, safety, software and long-term asset performance. The table below shows why EPCCs need a specialist storage partner.',
  columns: ['Aspect', 'Solar PV Project', 'BESS Project'],
  rows: [
    ['Primary function', 'Generate energy', 'Store and control energy'],
    ['Core expertise', 'Panels, inverters, mounting', 'Battery chemistry, PCS, EMS, BMS'],
    ['Key risks', 'Yield, shading, soiling', 'Thermal runaway, fire, degradation'],
    ['Software', 'Basic monitoring', 'EMS charge/discharge strategy, SCADA'],
    ['O&M focus', 'Generation performance', 'Battery health, temperature, safety, software'],
    ['Commercial driver', 'kWh produced', 'Peak shaving, load shifting, resilience'],
  ],
  caption: 'How a solar PV project differs from a BESS project across six dimensions.',
};

export const homeTechnology: {
  eyebrow: string;
  heading: string;
  items: { icon: string; title: string; href: string; paragraphs: string[]; note?: string }[];
} = {
  eyebrow: 'Technology',
  heading: 'The technology and integration behind bankable storage',
  items: [
    {
      icon: 'battery-charging',
      title: 'Why BYD Battery Technology Matters for BESS Projects',
      href: '/byd-battery-malaysia',
      paragraphs: [
        'BYD is one of the most recognised battery technology companies globally, with battery solutions known for safety-focused LFP chemistry, integrated design and large-scale manufacturing experience.',
        'For commercial and utility-scale BESS projects, BYD battery solutions matter because storage assets demand long-term safety, reliability and strong technical support.',
      ],
      note: 'Solunar supports selected BYD battery solution integration for projects where the technical and commercial configuration is suitable.',
    },
    {
      icon: 'inverter',
      title: 'GoodWe Inverters and Batteries for Solar + Storage in Malaysia',
      href: '/goodwe-inverter-malaysia',
      paragraphs: [
        'GoodWe is a global solar inverter and energy storage technology company serving residential and business markets. Solunar Energy distributes GoodWe inverter and battery solutions because inverters are the bridge between solar generation, battery storage and customer load.',
        'GoodWe supports solar inverter, hybrid inverter and energy storage inverter options, plus battery solutions suited to self-consumption, distributed energy and commercial applications.',
      ],
    },
    {
      icon: 'multi-brand',
      title: 'We Integrate Across Different BESS Brands',
      href: '/multi-brand-bess-integration',
      paragraphs: [
        'Every project is different — some need BYD, some GoodWe, some EVE BESS, others a different PCS, EMS or battery configuration. Solunar’s role is to help partners select and integrate the most suitable solution based on project size, load profile, discharge duration, voltage level, site constraints, safety requirements, budget, warranty expectations, O&M needs and grid interconnection.',
        'We are not locked to one technical pathway.',
      ],
    },
    {
      icon: 'pcs',
      title: 'The Real Value in a BESS Is the Integration',
      href: '/pcs-ems-system-integration',
      paragraphs: [
        'A battery is only one part of an energy storage system. To work properly, it must be integrated with the PCS, EMS, transformer, switchgear, fire protection, cooling, monitoring and site load profile. Solunar Energy helps EPCC partners coordinate the full system architecture so components communicate, operate and perform as one.',
        'The PCS converts and controls power flow between battery, grid and load; the EMS is the brain that decides when to charge, discharge and shave peak demand.',
      ],
    },
  ],
};

export const homeOm = {
  eyebrow: 'Operation & Maintenance',
  heading: "BESS Doesn't End at Installation — It Needs Long-Term O&M",
  href: '/bess-om-malaysia',
  paragraphs: [
    'Battery storage assets require continuous monitoring, preventive maintenance, safety checks, software updates, performance review and fault response.',
    'Solunar supports O&M planning and after-sales for commercial and utility-scale ESS projects, including remote monitoring coordination, battery health monitoring, PCS/EMS troubleshooting, thermal and fire-system inspection, warranty claim support and asset-owner reporting.',
  ],
  scope: [
    'Remote monitoring coordination',
    'Battery health monitoring',
    'PCS / EMS troubleshooting',
    'Thermal and fire-system inspection',
    'Warranty claim support',
    'Asset-owner reporting',
  ],
};

export const homeFinalCta = {
  heading: 'Have a Solar + BESS Project in Malaysia? Let Solunar Support You Behind the Scenes.',
  text: "Whether you're an EPCC company, solar developer or asset owner, Solunar Energy can support your project with battery technology, system integration, GoodWe inverter and battery solutions, selected BYD battery integration, EVE BESS integration, PCS/EMS coordination and long-term O&M planning.",
  actions: [
    { label: 'Talk to Solunar', href: '/contact' },
    { label: 'Become an EPCC Partner', href: '/epcc-partner-programme' },
  ] as Action[],
};

export const homeFaqs: FaqItem[] = [
  {
    question: 'Is Solunar Energy an EPCC company?',
    answer:
      'No. Solunar Energy is not an EPCC contractor and does not compete with EPCCs. Solunar is a Solar + BESS technology distributor and system integrator that supports EPCC companies, developers and asset owners with battery supply, integration, PCS/EMS coordination and O&M.',
  },
  {
    question: 'What does Solunar Energy actually supply?',
    answer:
      'Solunar supplies and integrates battery energy storage technology, distributes GoodWe inverters and batteries, integrates selected BYD battery solutions and EVE BESS, coordinates PCS and EMS, and provides O&M support for commercial and utility-scale projects.',
  },
  {
    question: 'Which battery brands does Solunar work with?',
    answer:
      'Solunar works across multiple BESS platforms, including BYD, GoodWe and EVE, and selects the most suitable configuration per project. Final configuration is subject to project design, brand approval and site requirements.',
  },
  {
    question: 'Where does Solunar Energy operate?',
    answer:
      'Solunar Energy is based in Malaysia and supports Solar + BESS projects across Malaysia and Southeast Asia.',
  },
];
