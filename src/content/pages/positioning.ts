import type { PageContent } from '@/content/types';

export const about: PageContent = {
  slug: '/about',
  seoTitle: 'About Solunar Energy | Solar + BESS Partner Malaysia',
  metaDescription:
    'Solunar Energy is a Malaysian Solar + BESS technology and integration platform helping EPCCs, developers and asset owners deliver bankable storage projects.',
  navLabel: 'About',
  eyebrow: 'About Solunar',
  h1: 'A Solar + BESS Technology Platform Built to Support EPCC Companies',
  lead: 'Solunar Energy is a Malaysian Solar + Battery Energy Storage technology distributor and system integration partner, created to help EPCC companies, developers and asset owners deliver better storage projects.',
  heroActions: [
    { label: 'Partner With Solunar', href: '/contact' },
    { label: 'What We Do', href: '/what-we-do' },
  ],
  image: {
    alt: "Solunar's Malaysian engineering team reviewing a Solar + BESS project in Kuala Lumpur",
    prompt:
      'Photorealistic team of Malaysian Chinese engineers (mixed gender, business-casual) reviewing battery storage project plans in a modern Kuala Lumpur office, large windows with city view, natural light, candid and professional.',
    aspect: '4 / 3',
  },
  primaryKeyword: 'Solar BESS partner Malaysia',
  schema: { type: 'AboutPage' },
  blocks: [
    {
      kind: 'prose',
      heading: 'Why Solunar Energy exists',
      paragraphs: [
        "Malaysia's solar market is becoming more competitive and margins are compressed. Customers now want more than panels — developers and asset owners want energy storage, and industrial clients want peak shaving, power expansion and energy resilience.",
        'Solunar Energy exists to support this shift, giving EPCC companies, developers and asset owners access to better technologies, stronger integration support and long-term operational capability.',
      ],
    },
    {
      kind: 'pullquote',
      text: 'Solunar helps EPCC companies, solar developers and energy asset owners deliver bankable Solar + BESS projects without building full battery storage capability in-house.',
    },
    {
      kind: 'list',
      variant: 'cards',
      columns: 2,
      heading: 'Our mission and vision',
      lead: 'Solunar Energy is guided by a clear mission and a long-term vision for the region.',
      items: [
        {
          title: 'Mission',
          text: 'To make Solar + BESS projects easier, safer and more commercially viable for EPCC companies, developers and asset owners.',
        },
        {
          title: 'Vision',
          text: 'To become a leading Solar + BESS technology integration and distribution platform in Malaysia and Southeast Asia.',
        },
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          question: 'When should an EPCC bring in Solunar?',
          answer:
            'As early as the proposal stage, so battery sizing, PCS/EMS selection and O&M planning are correct before pricing is fixed.',
        },
        {
          question: 'Does Solunar take over the client relationship?',
          answer:
            'No. The EPCC owns the client and site execution; Solunar supports the storage technology layer behind the scenes.',
        },
      ],
    },
    {
      kind: 'cta',
      heading: 'Planning a Solar + BESS project? Bring Solunar in early.',
      text: 'The earlier Solunar is involved, the better the battery sizing, PCS/EMS selection and O&M planning behind your proposal.',
      actions: [
        { label: 'Partner With Solunar', href: '/contact' },
        { label: 'Explore What We Do', href: '/what-we-do' },
      ],
    },
  ],
};

export const whatWeDo: PageContent = {
  slug: '/what-we-do',
  seoTitle: 'What We Do | BESS Distribution & Integration Malaysia',
  metaDescription:
    'Solunar provides BESS technology distribution, GoodWe and BYD integration, EVE BESS, PCS/EMS coordination and O&M for Solar + BESS projects in Malaysia.',
  navLabel: 'What We Do',
  eyebrow: 'What We Do',
  h1: 'BESS Technology Distribution, Integration and Long-Term Support',
  lead: 'Solunar Energy provides three things to the Solar + BESS market in Malaysia: technology distribution, system integration, and long-term O&M support.',
  primaryKeyword: 'BESS distribution and integration Malaysia',
  schema: { type: 'Service', serviceType: 'BESS technology distribution and system integration' },
  blocks: [
    {
      kind: 'cards',
      heading: 'Three capabilities for the Solar + BESS market',
      lead: 'Solunar Energy focuses on three core capabilities that EPCC companies, developers and asset owners can draw on.',
      columns: 3,
      items: [
        {
          icon: 'battery',
          title: 'Technology Distribution',
          text: 'Supply of BESS technology, GoodWe inverters and batteries, and selected battery solutions for suitable applications.',
        },
        {
          icon: 'integration',
          title: 'System Integration',
          text: 'Coordinating batteries, PCS, EMS, inverters and monitoring into one working storage system.',
        },
        {
          icon: 'om',
          title: 'Long-Term O&M Support',
          text: 'Monitoring, maintenance planning and after-sales support for commercial and utility-scale ESS assets.',
        },
      ],
    },
    {
      kind: 'list',
      variant: 'inline',
      heading: "Solunar's services",
      lead: "Solunar's services include the full Solar + BESS technology stack:",
      items: [
        'BESS technology supply',
        'GoodWe inverter and battery distribution',
        'Selected BYD battery solution integration',
        'EVE BESS integration',
        'PCS and EMS coordination',
        'System architecture support',
        'Technical proposal support',
        'O&M planning',
        'After-sales coordination',
        'Future local assembly strategy',
      ],
    },
    {
      kind: 'cta',
      heading: 'Want the full picture of how Solunar supports your projects?',
      text: 'Request the Solunar capability deck and a tailored conversation about your Solar + BESS pipeline.',
      actions: [
        { label: 'Request Solunar Capability Deck', href: '/contact' },
        { label: 'We Support EPCCs', href: '/bess-partner-for-epcc' },
      ],
    },
  ],
};

export const bessPartnerForEpcc: PageContent = {
  slug: '/bess-partner-for-epcc',
  seoTitle: 'BESS Partner for EPCC Companies | Solunar Energy Malaysia',
  metaDescription:
    "Solunar is not an EPCC and doesn't compete with EPCCs — we're the BESS technology partner behind them, supplying batteries, integration and O&M support.",
  navLabel: 'We Support EPCCs',
  eyebrow: 'For EPCC Companies',
  h1: "We're Not an EPCC. We're the BESS Technology Partner Behind the EPCC.",
  lead: 'Solunar Energy is designed to complement EPCC companies in Malaysia, not compete with them. EPCCs keep the client relationship and site execution; Solunar supplies the battery storage technology layer.',
  heroActions: [{ label: 'Work With Solunar as Your BESS Partner', href: '/contact' }],
  primaryKeyword: 'solar EPCC BESS partner',
  schema: { type: 'Service', serviceType: 'BESS technology partner for EPCC companies' },
  blocks: [
    {
      kind: 'prose',
      heading: 'Where Solunar fits alongside your EPCC team',
      paragraphs: [
        'Many EPCC companies already have strong project teams, client relationships, site execution capability and electrical installation experience.',
        'BESS adds requirements they may not hold in-house: battery systems, PCS, EMS, software controls, safety, thermal management, degradation and O&M.',
      ],
    },
    {
      kind: 'table',
      heading: 'EPCC vs Solunar: who does what',
      lead: 'The table below clarifies the division of roles between an EPCC company and Solunar Energy.',
      columns: ['Responsibility', 'EPCC Company', 'Solunar Energy'],
      rows: [
        ['Client relationship', '✅ Owns', 'Supports'],
        ['Site execution & civil/electrical works', '✅ Owns', '—'],
        ['Battery / PCS / EMS selection', 'Supported by Solunar', '✅ Leads'],
        ['BESS technical proposal & sizing', 'Supported by Solunar', '✅ Leads'],
        ['System integration', 'Supported by Solunar', '✅ Leads'],
        ['Long-term BESS O&M', 'Optional', '✅ Supports'],
      ],
      caption: 'Division of responsibilities between an EPCC company and Solunar Energy.',
    },
    {
      kind: 'pullquote',
      text: 'You own the client. We support the technology.',
    },
    {
      kind: 'cta',
      heading: 'Add a BESS technology backbone to your EPCC business.',
      text: 'You bring the project. Solunar brings the battery, PCS, EMS and integration expertise behind the scenes.',
      actions: [
        { label: 'Work With Solunar as Your BESS Partner', href: '/contact' },
        { label: 'See the EPCC Partner Programme', href: '/epcc-partner-programme' },
      ],
    },
  ],
};

export const epccPartnerProgramme: PageContent = {
  slug: '/epcc-partner-programme',
  seoTitle: 'EPCC Partner Programme | Add BESS With Solunar Malaysia',
  metaDescription:
    "Join Solunar's EPCC Partner Programme to enter the BESS market with battery sizing, PCS/EMS support, GoodWe and BYD integration, and proposal help.",
  navLabel: 'EPCC Partner Programme',
  eyebrow: 'EPCC Partner Programme',
  h1: 'Helping EPCC Companies Add BESS Without Building Everything In-House',
  lead: 'The Solunar EPCC Partner Programme helps solar contractors, electrical contractors and renewable energy companies in Malaysia enter the BESS market with reduced technical risk.',
  heroActions: [{ label: 'Become a Solunar EPCC Partner', href: '/contact' }],
  primaryKeyword: 'solar EPCC BESS partner programme Malaysia',
  schema: { type: 'Service', serviceType: 'EPCC partner programme for Solar + BESS' },
  blocks: [
    {
      kind: 'list',
      variant: 'inline',
      heading: 'What the programme covers',
      lead: 'Programme support covers the full path from first enquiry to long-term operation:',
      items: [
        'BESS project scoping',
        'Load profile review',
        'Battery sizing',
        'PCS selection',
        'EMS control strategy',
        'GoodWe product support',
        'Selected BYD battery integration',
        'EVE BESS integration',
        'Commercial proposal support',
        'O&M planning',
        'After-sales support',
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          question: 'Who qualifies as an EPCC partner?',
          answer:
            'Solar EPCCs, electrical contractors and renewable energy firms in Malaysia and Southeast Asia that want to deliver Solar + BESS projects.',
        },
        {
          question: 'What does it cost to join?',
          answer:
            'Engagement depends on project scope and partnership level — contact Solunar for a tailored discussion.',
        },
      ],
    },
    {
      kind: 'cta',
      heading: 'Enter the BESS market with a technology partner beside you.',
      text: 'Reduce the technical risk of your first Solar + BESS projects with Solunar behind your team.',
      actions: [
        { label: 'Become a Solunar EPCC Partner', href: '/contact' },
        { label: 'How We Support EPCCs', href: '/bess-partner-for-epcc' },
      ],
    },
  ],
};
