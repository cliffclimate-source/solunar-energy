import type { PageContent } from '@/content/types';

export const peakShaving: PageContent = {
  slug: '/peak-shaving-malaysia',
  seoTitle: 'Maximum Demand Peak Shaving Malaysia | BESS | Solunar',
  metaDescription:
    'Reduce maximum demand charges with battery storage. Solunar designs BESS peak shaving for factories, malls, cold storage and data centres in Malaysia.',
  navLabel: 'Maximum Demand Peak Shaving',
  eyebrow: 'Solutions · Peak Shaving',
  h1: 'Maximum Demand Peak Shaving with BESS',
  lead: 'Solunar helps commercial and industrial businesses reduce electricity cost by using a Battery Energy Storage System to discharge power during peak demand periods — lowering maximum-demand charges and improving energy cost efficiency.',
  intro: [
    'Store energy when demand is low, discharge it when demand is high, and reduce the peak your site draws from the grid. Cut peak demand. Optimise usage. Improve power flexibility.',
  ],
  heroActions: [{ label: 'Talk to Solunar about Peak Shaving', href: '/contact' }],
  image: {
    src: '/images/peak-shaving.png',
    alt: 'Battery storage cabinet supporting peak demand at a Malaysian factory',
    aspect: '4 / 3',
  },
  primaryKeyword: 'maximum demand peak shaving Malaysia',
  schema: { type: 'Service', serviceType: 'Maximum demand peak shaving with BESS' },
  blocks: [
    {
      kind: 'prose',
      heading: 'Your peak demand is increasing your electricity bill',
      paragraphs: [
        'For many commercial and industrial users, electricity cost is not only about how much energy is consumed — it is also driven by the highest level of power drawn from the grid during a billing period. This is called maximum demand.',
        'Maximum-demand charges can become a major cost for businesses with heavy electrical loads, especially when equipment runs simultaneously or machinery starts up during production.',
      ],
    },
    {
      kind: 'prose',
      heading: 'What is maximum demand?',
      paragraphs: [
        'Maximum demand is the highest amount of power your business draws from the grid during a measurement period. Even if that high demand lasts only a short time, it can still set your billed maximum demand.',
        'For example, a factory may normally operate at 1,000 kW. But when multiple machines, compressors, chillers or lines run together, demand may spike to 1,500 kW — and that 1,500 kW peak becomes the figure used for billing.',
      ],
    },
    {
      kind: 'cards',
      heading: 'Why maximum demand matters',
      lead: 'Reducing peak demand can be as important as reducing consumption. High maximum demand can cause:',
      columns: 2,
      items: [
        { icon: 'gauge', title: 'Higher monthly bills', text: 'Even short demand spikes can raise your billed maximum demand for the whole period.' },
        { icon: 'settings', title: 'Poor load management', text: 'Uncontrolled start-ups and simultaneous operation create unnecessary demand peaks.' },
        { icon: 'expansion', title: 'Limited power headroom', text: 'High maximum demand reduces the capacity available for future expansion.' },
        { icon: 'safety', title: 'Grid & infrastructure stress', text: 'Sudden spikes strain transformers, switchgear and electrical infrastructure.' },
      ],
    },
    {
      kind: 'list',
      variant: 'inline',
      heading: 'Common causes of demand spikes',
      lead: 'Maximum-demand spikes usually happen when large loads operate at the same time:',
      items: [
        'Chillers & HVAC systems',
        'Compressors & motors',
        'Production line start-up',
        'Cold storage & refrigeration',
        'EV charging',
        'Data-centre loads',
        'Poor load scheduling',
      ],
    },
    {
      kind: 'steps',
      heading: 'How peak shaving works',
      lead: 'The BESS discharges stored energy when your site demand is highest, so the grid sees a lower peak:',
      items: [
        { title: 'Monitor load demand', text: 'The EMS monitors your real-time electricity demand.' },
        { title: 'Identify peak periods', text: 'As demand approaches a preset threshold, the system responds automatically.' },
        { title: 'Discharge battery power', text: 'The BESS supports the load, reducing power drawn from the grid.' },
        { title: 'Recharge in low demand', text: 'The battery recharges during off-peak periods or from available solar.' },
        { title: 'Optimise continuously', text: 'The EMS tunes performance using load data, solar, tariff and operating patterns.' },
      ],
    },
    {
      kind: 'prose',
      heading: 'A simple example',
      paragraphs: [
        'Without BESS: a factory operates at 1,200 kW but rises to 1,800 kW during peak production — and the bill reflects the 1,800 kW maximum demand.',
        'With BESS: Solunar designs the system to discharge 400 kW during peaks. When demand hits 1,800 kW, the battery supplies 400 kW, so the grid only sees 1,400 kW — reducing maximum demand and demand-related charges.',
      ],
    },
    {
      kind: 'prose',
      heading: 'Why solar alone may not be enough',
      paragraphs: [
        'Solar PV reduces daytime consumption, but its output depends on weather and sunlight. Peaks can still occur when solar is low, clouds reduce output, equipment starts suddenly, demand peaks after sunset, or load exceeds solar output.',
        'That is why Solar + BESS is more powerful: solar generates clean energy, and the battery controls when that energy is used — for better savings and better energy management.',
      ],
    },
    {
      kind: 'cards',
      heading: "Solunar's peak shaving solution",
      lead: 'We do not simply sell batteries — we design around your actual load profile, bill, operating hours and expansion plan:',
      columns: 3,
      items: [
        { icon: 'gauge', title: 'Load profile analysis', text: 'We analyse your usage pattern and identify maximum-demand spikes.' },
        { icon: 'battery', title: 'BESS sizing', text: 'We determine the right battery power and capacity for your peak-shaving objective.' },
        { icon: 'pcs', title: 'PCS integration', text: 'We integrate the Power Conversion System for safe, efficient charge/discharge.' },
        { icon: 'ems', title: 'EMS control strategy', text: 'We design the Energy Management logic to shave peaks automatically.' },
        { icon: 'sun', title: 'Solar integration', text: 'We integrate existing or future solar PV to deepen savings.' },
        { icon: 'om', title: 'Monitoring & O&M', text: 'We provide monitoring, maintenance and performance optimisation after install.' },
      ],
    },
    {
      kind: 'list',
      variant: 'check',
      columns: 2,
      heading: 'Key benefits',
      lead: 'Maximum-demand peak shaving turns your energy system into a smarter business asset:',
      items: [
        'Reduce electricity bills by lowering peak grid draw',
        'Improve energy cost predictability',
        'Increase power headroom for expansion',
        'Improve solar ROI by storing and shifting energy',
        'Reduce grid dependency during high-load periods',
        'Support ESG goals and cleaner energy integration',
      ],
    },
    {
      kind: 'note',
      text: 'Actual savings depend on site load profile, tariff structure, battery size and operating strategy. Solunar models this per site rather than promising a fixed figure.',
    },
    {
      kind: 'faq',
      items: [
        {
          question: 'How much can peak shaving save?',
          answer:
            'Savings depend entirely on load profile, tariff structure, battery size and EMS strategy. Solunar reviews your bill and interval load data to estimate savings, system size and payback per site.',
        },
        {
          question: 'Will peak shaving affect my operations?',
          answer:
            'No. The EMS supports load automatically during peaks and recharges off-peak, so production continues normally while the grid sees a lower demand peak.',
        },
        {
          question: 'What data do you need to assess my site?',
          answer:
            'Typically your electricity bill and half-hourly (interval) load data, plus operating hours and any expansion plans. From this we size the BESS and model savings.',
        },
      ],
    },
    {
      kind: 'cta',
      heading: 'Want to reduce your maximum demand charges?',
      text: 'Solunar can review your electricity bill, load profile and BESS feasibility. Before your next demand spike becomes another expensive bill, talk to our team.',
      actions: [
        { label: 'Talk to Solunar about Peak Shaving', href: '/contact' },
        { label: 'See Power Expansion with BESS', href: '/power-expansion-bess' },
      ],
    },
  ],
};
