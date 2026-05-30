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
    src: '/images/about-team.png',
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
      kind: 'image',
      src: '/images/about-detail.png',
      alt: 'Solar farm with battery storage containers and a city skyline at golden hour',
      aspect: '16 / 9',
      caption: 'Built for Malaysia’s energy transition — pairing solar generation with controllable battery storage.',
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
  image: {
    src: '/images/what-we-do.png',
    alt: 'Solar panels and a battery storage cabinet with an engineer at a Malaysian commercial site',
    aspect: '4 / 3',
  },
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
      kind: 'image',
      src: '/images/whatwedo-detail.png',
      alt: 'Technician wiring a power conversion system and energy management cabinet in a BESS room',
      aspect: '16 / 9',
      caption: 'The value is in the integration — coordinating battery, PCS, EMS, protection and monitoring as one system.',
    },
    {
      kind: 'prose',
      heading: 'Why integration — not just supply — is the real value',
      paragraphs: [
        'Buying a battery is the easy part. The value of a BESS comes from how the battery, PCS, EMS, protection, metering and site load are integrated so the system dispatches safely and performs as one.',
        'Solunar sits in that integration layer — selecting suitable technology, coordinating the system architecture and supporting it through commissioning and O&M — so EPCCs, developers and asset owners can deliver bankable storage without building deep in-house battery capability.',
      ],
    },
    {
      kind: 'steps',
      heading: 'How we engage',
      lead: 'A typical Solunar engagement moves through five stages:',
      items: [
        { title: 'Discovery', text: 'We review the project, load profile, site and commercial goals.' },
        { title: 'Proposal & sizing', text: 'We recommend the battery, PCS and EMS configuration with a technical proposal.' },
        { title: 'Design & integration', text: 'We coordinate the full system architecture and documentation.' },
        { title: 'Commissioning', text: 'We support installation, testing and commissioning to specification.' },
        { title: 'O&M & after-sales', text: 'We plan long-term monitoring, maintenance and warranty support.' },
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
  image: {
    src: '/images/bess-partner-epcc.png',
    alt: 'An EPCC contractor and a Solunar specialist collaborating at a solar-plus-storage site in Malaysia',
    aspect: '4 / 3',
  },
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
      kind: 'image',
      src: '/images/bess-partner-detail.png',
      alt: 'An EPCC contractor and a Solunar specialist shaking hands at a solar-plus-storage site',
      aspect: '16 / 9',
      caption: 'You keep the client and site execution; Solunar supplies the battery, PCS, EMS and integration behind you.',
    },
    {
      kind: 'cards',
      heading: 'What BESS adds beyond solar EPCC',
      lead: 'Solar EPCCs hold strong project and electrical capability; BESS adds requirements Solunar fills:',
      columns: 2,
      items: [
        { icon: 'battery', title: 'Battery chemistry & selection', text: 'Choosing the right cells, capacity and brand for safety, life and bankability.' },
        { icon: 'pcs', title: 'PCS & EMS controls', text: 'Power conversion and control logic that dispatch the battery correctly.' },
        { icon: 'safety', title: 'Fire & thermal safety', text: 'Thermal management, fire detection and suppression engineered for the energy on site.' },
        { icon: 'om', title: 'Degradation & O&M', text: 'Performance, degradation planning and long-term maintenance of the asset.' },
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          question: 'Will Solunar deal with our client directly?',
          answer:
            'No. You own the client relationship and site execution. Solunar works behind your team on the storage technology layer.',
        },
        {
          question: 'When should we bring Solunar in?',
          answer:
            'As early as the proposal stage, so battery sizing, PCS/EMS selection and O&M planning are correct before pricing is fixed.',
        },
      ],
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
  seoTitle: 'EPCC Partner Programme | Deliver Solar + BESS With Solunar',
  metaDescription:
    "Solunar's EPCC Partner Programme helps EPCC companies deliver Solar + BESS with confidence — BESS design, product access, multi-brand integration, proposal support and O&M.",
  navLabel: 'EPCC Partner Programme',
  eyebrow: 'EPCC Partner Programme',
  h1: 'Helping EPCCs Deliver Solar + BESS Projects With Confidence',
  lead: 'Solunar is built to support EPCC companies, not compete with them. We work behind the EPCC as a specialist BESS system integrator, battery solutions partner and technical support provider — helping you strengthen proposals, reduce execution risk and deliver bankable energy storage projects.',
  heroActions: [{ label: 'Become a Solunar EPCC Partner', href: '/contact' }],
  image: {
    src: '/images/epcc-programme.png',
    alt: 'Renewable-energy professionals in a Solunar EPCC partner programme session',
    aspect: '4 / 3',
  },
  primaryKeyword: 'solar EPCC BESS partner programme Malaysia',
  schema: { type: 'Service', serviceType: 'EPCC partner programme for Solar + BESS' },
  blocks: [
    {
      kind: 'prose',
      heading: 'Why this matters now',
      paragraphs: [
        'As Malaysia moves into a new phase of solar deployment, Battery Energy Storage Systems are becoming increasingly important for utility-scale solar, C&I solar, LSS6, CRESS, grid support, power expansion and maximum demand management.',
        'But BESS projects are more complex than conventional solar EPCC works. They require battery selection, PCS integration, EMS design, safety planning, protection coordination, thermal management, warranty alignment and long-term O&M planning. This is where Solunar comes in.',
      ],
    },
    {
      kind: 'list',
      variant: 'check',
      columns: 2,
      heading: 'The challenge for EPCCs',
      lead: 'Solar EPCCs are strong in PV design, procurement, installation and execution — but adding BESS raises the technical and commercial complexity significantly:',
      items: [
        'Choosing the right battery technology for the project',
        'Integrating batteries with PCS, EMS, SCADA, transformers and grid',
        'Understanding battery safety, fire protection and thermal management',
        'Preparing convincing proposals for developers, funds and banks',
        'Managing multiple brands across battery, inverter, PCS and EMS',
        'Ensuring performance, warranty and long-term serviceability',
        'Supporting peak shaving, power expansion and grid-stability use cases',
        'Avoiding unnecessary technical, commercial and after-sales risk',
      ],
    },
    {
      kind: 'image',
      src: '/images/epcc-partner-detail.png',
      alt: 'Renewable-energy professionals collaborating on Solar + BESS project plans in a partner session',
      aspect: '16 / 9',
      caption: 'You lead the client, execution and solar scope; Solunar supports the energy-storage layer behind you.',
    },
    {
      kind: 'prose',
      heading: 'We help EPCCs become more competitive — not replace them',
      paragraphs: [
        'Solunar is not positioned as a traditional solar EPCC contractor. Our focus is to support EPCC companies with specialist BESS knowledge, product access, integration capability and technical confidence.',
        'This lets EPCCs continue leading the client relationship, project execution and solar scope — while Solunar supports the energy-storage layer. Together, we help clients receive a more complete, future-ready Solar + BESS solution.',
      ],
    },
    {
      kind: 'cards',
      heading: 'Why EPCCs partner with Solunar',
      lead: 'Five ways the partnership strengthens your business:',
      columns: 2,
      items: [
        { icon: 'proposal', title: '1. Strengthen your proposal', text: 'Position BESS for peak shaving, power expansion, energy shifting, backup, grid support, CRESS and investment cases — clearly explaining the technical and financial value.' },
        { icon: 'safety', title: '2. Reduce technical risk', text: 'We review and structure the BESS architecture from the start — avoiding sizing errors, poor battery/inverter matching, EMS issues and warranty disputes.' },
        { icon: 'battery', title: '3. Access reliable products', text: 'Access proven BYD battery solutions, GoodWe inverters and batteries, and multi-brand options for different project sizes and applications.' },
        { icon: 'layers', title: '4. Multi-brand integration', text: 'Coordinate the technical interface across battery, PCS, EMS, SCADA, transformers, switchgear, inverters and grid — without being locked to one configuration.' },
        { icon: 'developers', title: '5. Support funds & banks', text: 'Prepare a more convincing technical and commercial story on safety, warranty, performance, degradation and O&M for developers, funds and lenders.' },
      ],
    },
    {
      kind: 'list',
      variant: 'inline',
      heading: 'What we provide to EPCC partners',
      lead: 'End-to-end support from early proposal to long-term operation:',
      items: [
        'BESS system design support',
        'Battery solution selection',
        'PCS and EMS integration',
        'Utility-scale and C&I BESS architecture',
        'Technical proposal support',
        'Safety and reliability planning',
        'Vendor and product coordination',
        'Commercial positioning for developers, funds and banks',
        'O&M support for BESS assets',
      ],
    },
    {
      kind: 'list',
      variant: 'inline',
      heading: 'Ideal EPCC partners',
      lead: 'The programme suits companies that want to expand into Solar + BESS without taking unnecessary technical risk:',
      items: [
        'Solar EPCC companies',
        'Electrical contractors',
        'Renewable energy project developers',
        'M&E contractors',
        'Utility-scale solar contractors',
        'C&I solar contractors',
        'Infrastructure project contractors',
        'Township energy infrastructure partners',
        'Companies bidding for LSS6, CRESS and corporate PPA projects',
      ],
    },
    {
      kind: 'steps',
      heading: 'How the EPCC Partner Programme works',
      lead: 'A clear five-step path from first discussion to long-term support:',
      items: [
        { title: 'Project discussion', text: 'You share the project requirement, client objective, site information, load profile, solar design or tender requirements.' },
        { title: 'BESS solution review', text: 'We review the use case and recommend the suitable configuration, system size, product option and integration approach.' },
        { title: 'Proposal support', text: 'We help you prepare a stronger technical and commercial proposal for the client, developer, fund or asset owner.' },
        { title: 'Product & integration coordination', text: 'We support product supply, vendor coordination, system architecture, PCS/EMS integration and commissioning planning.' },
        { title: 'Long-term support', text: 'After completion we can support O&M, monitoring, performance review, troubleshooting and future expansion.' },
      ],
    },
    {
      kind: 'faq',
      items: [
        {
          question: 'Who qualifies as an EPCC partner?',
          answer:
            'Solar EPCCs, electrical and M&E contractors, and renewable energy firms in Malaysia and Southeast Asia that want to deliver Solar + BESS projects — including those bidding for LSS6, CRESS and corporate PPA work.',
        },
        {
          question: 'Will Solunar deal with our client directly?',
          answer:
            'No. You lead the client relationship, project execution and solar scope. Solunar works behind your team on the energy-storage technology layer.',
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
      heading: 'Become a Solunar EPCC Partner.',
      text: 'Whether you are preparing for a C&I project, utility-scale solar farm, LSS6 submission, CRESS opportunity or township energy infrastructure project, our team is ready to support you.',
      actions: [
        { label: 'Partner With Solunar Today', href: '/contact' },
        { label: 'How We Support EPCCs', href: '/bess-partner-for-epcc' },
      ],
    },
  ],
};
