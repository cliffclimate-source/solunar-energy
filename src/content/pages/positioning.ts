import type { PageContent } from '@/content/types';

export const about: PageContent = {
  slug: '/about',
  seoTitle: 'About Us | Solunar Energy — Solar + BESS Partner Malaysia',
  metaDescription:
    'Solunar Energy is a Malaysian Solar + BESS technology distributor and system integrator — supplying batteries, PCS/EMS integration and long-term O&M so EPCCs, developers and asset owners deliver bankable storage projects.',
  navLabel: 'About Us',
  eyebrow: 'About Solunar',
  h1: 'The Solar + BESS Technology Platform Behind Malaysia’s Storage Projects',
  lead: 'Solunar Energy is a Malaysian Solar + Battery Energy Storage technology distributor and system integration partner. We supply battery storage, coordinate PCS and EMS, and provide long-term O&M — helping EPCC companies, developers and asset owners deliver bankable storage without building deep battery capability in-house.',
  heroActions: [
    { label: 'Partner With Solunar', href: '/contact' },
    { label: 'For EPCC Companies', href: '/for-epcc' },
  ],
  image: {
    src: '/images/about-team.png',
    alt: "Solunar's Malaysian engineering team reviewing a Solar + BESS project in Kuala Lumpur",
    aspect: '4 / 3',
  },
  primaryKeyword: 'Solar BESS partner Malaysia',
  schema: { type: 'AboutPage' },
  blocks: [
    // --- Who we are / why we exist ---
    {
      kind: 'prose',
      heading: 'Why Solunar Energy exists',
      paragraphs: [
        "Malaysia's solar market is becoming more competitive and margins are compressed. Customers now want more than panels — developers and asset owners want energy storage, and industrial clients want peak shaving, power expansion and energy resilience.",
        'Solunar Energy exists to support this shift, giving EPCC companies, developers and asset owners access to better technologies, stronger integration support and long-term operational capability — without forcing them to build a full battery storage team in-house.',
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
    // --- What we do (3 capabilities) ---
    {
      kind: 'cards',
      heading: 'What we do: three capabilities for the Solar + BESS market',
      lead: 'Everything Solunar offers falls into three core capabilities that EPCC companies, developers and asset owners can draw on.',
      columns: 3,
      items: [
        {
          icon: 'battery',
          title: 'Technology Distribution',
          text: 'Supply of BESS technology, GoodWe inverters and batteries, and selected BYD and EVE battery solutions for suitable applications.',
        },
        {
          icon: 'integration',
          title: 'System Integration',
          text: 'Coordinating batteries, PCS, EMS, inverters, protection and monitoring into one safe, working storage system.',
        },
        {
          icon: 'om',
          title: 'Long-Term O&M Support',
          text: 'Monitoring, maintenance planning and after-sales support for commercial and utility-scale ESS assets across their life.',
        },
      ],
    },
    {
      kind: 'list',
      variant: 'inline',
      heading: 'Our services',
      lead: "Solunar's services span the full Solar + BESS technology stack:",
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
    // --- How we engage ---
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
    // --- Mission & vision ---
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
          question: 'What exactly does Solunar provide?',
          answer:
            'Three things: BESS technology distribution (including GoodWe, BYD and EVE), system integration of battery, PCS, EMS and protection, and long-term O&M for commercial and utility-scale ESS.',
        },
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
        { label: 'For EPCC Companies', href: '/for-epcc' },
      ],
    },
  ],
};

export const forEpcc: PageContent = {
  slug: '/for-epcc',
  seoTitle: 'For EPCC Companies | Win Solar + BESS Projects | Solunar',
  metaDescription:
    "Solunar is the BESS technology partner behind EPCC companies in Malaysia — not a competitor. Battery selection, PCS/EMS integration, proposal support and O&M so you win and deliver Solar + BESS with confidence.",
  navLabel: 'For EPCC',
  eyebrow: 'For EPCC Companies',
  h1: "Win More Solar + BESS Projects — We're the Partner Behind Your EPCC",
  lead: 'Solunar is not an EPCC and never competes with you. We are the specialist BESS technology partner behind the EPCC — supplying battery selection, PCS/EMS integration, proposal support and long-term O&M, so you can bid for and deliver bankable Solar + BESS projects without building deep storage capability in-house.',
  heroActions: [
    { label: 'Become a Solunar EPCC Partner', href: '/contact' },
    { label: 'Talk to Our Team', href: '/contact' },
  ],
  image: {
    src: '/images/bess-partner-epcc.png',
    alt: 'An EPCC contractor and a Solunar specialist collaborating at a solar-plus-storage site in Malaysia',
    aspect: '4 / 3',
  },
  primaryKeyword: 'solar EPCC BESS partner Malaysia',
  schema: { type: 'Service', serviceType: 'BESS technology partner for EPCC companies' },
  blocks: [
    // 1) The shift / why now — sets up the opportunity
    {
      kind: 'prose',
      heading: 'Your clients now want storage — not just solar',
      paragraphs: [
        'As Malaysia moves into a new phase of solar deployment, Battery Energy Storage Systems are becoming central to utility-scale solar, C&I solar, LSS, CRESS, grid support, power expansion and maximum-demand management. More and more tenders and clients now expect Solar + BESS, not solar alone.',
        'But BESS is a different discipline from solar EPCC. It demands battery chemistry and selection, PCS and EMS control logic, fire and thermal safety, protection coordination, warranty alignment, degradation planning and long-term O&M. Building all of that in-house is slow and risky — especially on your first few projects. That is exactly the gap Solunar fills.',
      ],
    },
    // 2) The challenge — agitate the pain
    {
      kind: 'list',
      variant: 'check',
      columns: 2,
      heading: 'The challenge BESS adds for EPCCs',
      lead: 'Solar EPCCs are strong in PV design, procurement, installation and execution — but storage raises the technical and commercial stakes:',
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
    // 3) The promise — we support, never compete
    {
      kind: 'prose',
      heading: "We make you more competitive — we don't replace you",
      paragraphs: [
        'Solunar is not positioned as a traditional solar EPCC contractor. Our role is to give EPCC companies specialist BESS knowledge, product access, integration capability and technical confidence — working quietly behind your team.',
        'You keep the client relationship, the solar scope and site execution. Solunar supplies the energy-storage technology layer. Together you deliver a more complete, future-ready Solar + BESS solution — and you look stronger to the client.',
      ],
    },
    {
      kind: 'pullquote',
      text: 'You bring the project. We bring the BESS technology backbone.',
    },
    // 4) Clear division of roles — removes the #1 fear ("will they take my client?")
    {
      kind: 'table',
      heading: 'EPCC vs Solunar: who does what',
      lead: 'A clear division of roles so you always stay in control of the client and the project.',
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
      kind: 'image',
      src: '/images/bess-partner-detail.png',
      alt: 'An EPCC contractor and a Solunar specialist shaking hands at a solar-plus-storage site',
      aspect: '16 / 9',
      caption: 'You keep the client and site execution; Solunar supplies the battery, PCS, EMS and integration behind you.',
    },
    // 5) Why partner — the core value props
    {
      kind: 'cards',
      heading: 'Why EPCCs partner with Solunar',
      lead: 'Five ways the partnership helps you win more work and deliver it with less risk:',
      columns: 2,
      items: [
        { icon: 'proposal', title: '1. Strengthen your proposal', text: 'Position BESS for peak shaving, power expansion, energy shifting, backup, grid support, CRESS and investment cases — with the technical and financial value spelled out for the client.' },
        { icon: 'safety', title: '2. Reduce technical risk', text: 'We structure the BESS architecture from the start — avoiding sizing errors, poor battery/inverter matching, EMS issues, safety gaps and warranty disputes.' },
        { icon: 'battery', title: '3. Access reliable products', text: 'Proven BYD battery solutions, GoodWe inverters and batteries, EVE BESS and multi-brand options for any project size or application.' },
        { icon: 'layers', title: '4. Multi-brand integration', text: 'We coordinate battery, PCS, EMS, SCADA, transformers, switchgear, inverters and grid — without locking you into one configuration.' },
        { icon: 'developers', title: '5. Win over funds & banks', text: 'A convincing technical and commercial story on safety, warranty, performance, degradation and O&M — the things lenders and investors check.' },
        { icon: 'om', title: '6. Long-term O&M backing', text: 'Monitoring, maintenance and after-sales support that protect performance and warranty — and keep your client happy for years.' },
      ],
    },
    // 6) What you get — concrete scope
    {
      kind: 'list',
      variant: 'inline',
      heading: 'What we provide to EPCC partners',
      lead: 'End-to-end support from first enquiry to long-term operation:',
      items: [
        'BESS system design support',
        'Battery solution selection',
        'PCS and EMS integration',
        'Utility-scale and C&I BESS architecture',
        'Technical proposal & sizing support',
        'Safety and reliability planning',
        'Vendor and product coordination',
        'Commercial positioning for developers, funds and banks',
        'Commissioning support',
        'O&M and after-sales for BESS assets',
      ],
    },
    // 7) The programme / how it works — process clarity
    {
      kind: 'steps',
      heading: 'How the EPCC partnership works',
      lead: 'A clear five-step path from first conversation to long-term support:',
      items: [
        { title: 'Project discussion', text: 'You share the requirement, client objective, site information, load profile, solar design or tender documents.' },
        { title: 'BESS solution review', text: 'We recommend the suitable configuration, system size, product option and integration approach.' },
        { title: 'Proposal support', text: 'We help you prepare a stronger technical and commercial proposal for the client, developer, fund or asset owner.' },
        { title: 'Product & integration coordination', text: 'We support product supply, vendor coordination, system architecture, PCS/EMS integration and commissioning planning.' },
        { title: 'Long-term support', text: 'After completion we support O&M, monitoring, performance review, troubleshooting and future expansion.' },
      ],
    },
    // 8) Who it's for — qualification
    {
      kind: 'list',
      variant: 'inline',
      heading: 'Ideal EPCC partners',
      lead: 'The partnership suits companies that want to expand into Solar + BESS without taking unnecessary technical risk:',
      items: [
        'Solar EPCC companies',
        'Electrical contractors',
        'Renewable energy project developers',
        'M&E contractors',
        'Utility-scale solar contractors',
        'C&I solar contractors',
        'Infrastructure project contractors',
        'Township energy infrastructure partners',
        'Companies bidding for LSS, CRESS and corporate PPA projects',
      ],
    },
    // 9) FAQ — handle objections
    {
      kind: 'faq',
      items: [
        {
          question: 'Will Solunar deal with our client directly?',
          answer:
            'No. You own the client relationship, the solar scope and site execution. Solunar works behind your team on the energy-storage technology layer only.',
        },
        {
          question: 'When should we bring Solunar in?',
          answer:
            'As early as the proposal or tender stage, so battery sizing, PCS/EMS selection and O&M planning are correct before pricing is fixed — avoiding costly changes later.',
        },
        {
          question: 'Who qualifies as an EPCC partner?',
          answer:
            'Solar EPCCs, electrical and M&E contractors, and renewable energy firms in Malaysia and Southeast Asia that want to deliver Solar + BESS — including those bidding for LSS, CRESS and corporate PPA work.',
        },
        {
          question: 'What does it cost to partner?',
          answer:
            'Engagement depends on project scope and partnership level — contact Solunar for a tailored discussion.',
        },
      ],
    },
    // 10) Close
    {
      kind: 'cta',
      heading: 'Add a BESS technology backbone to your EPCC business.',
      text: 'Whether you are preparing for a C&I project, utility-scale solar farm, LSS submission, CRESS opportunity or township energy project, our team is ready to support you behind the scenes.',
      actions: [
        { label: 'Become a Solunar EPCC Partner', href: '/contact' },
        { label: 'About Solunar', href: '/about' },
      ],
    },
  ],
};
