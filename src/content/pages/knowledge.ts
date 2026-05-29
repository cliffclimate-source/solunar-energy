import type { Block, FaqItem, PageContent } from '@/content/types';

export const knowledgeMeta = {
  slug: '/knowledge-centre',
  seoTitle: 'Solar + BESS Knowledge Centre Malaysia | Solunar Energy',
  metaDescription:
    "Guides on BESS, PCS, EMS, battery chemistry, peak shaving and O&M — Solunar's Solar + BESS knowledge hub for Malaysia.",
  navLabel: 'Knowledge Centre',
  eyebrow: 'Knowledge Centre',
  h1: 'Solar + BESS Knowledge Centre for Malaysia',
  lead: 'The Solunar Knowledge Centre explains how Solar + BESS works — covering BESS, PCS, EMS, battery chemistry, peak shaving, sizing and O&M for the Malaysian market.',
  primaryKeyword: 'what is BESS',
};

export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: 'Fundamentals' | 'Technology' | 'Commercial' | 'Operations';
  excerpt: string;
  definition: string;
  body?: string[];
  keyPoints?: { lead: string; items: string[] };
  faq?: FaqItem[];
  related?: { label: string; href: string }[];
};

export const articles: Article[] = [
  {
    slug: 'what-is-bess',
    title: 'What Is a BESS (Battery Energy Storage System)?',
    seoTitle: 'What Is a BESS? | Battery Energy Storage Explained',
    metaDescription:
      'A BESS (Battery Energy Storage System) stores electrical energy in batteries and controls when it is used. Here is how a BESS works and where it is applied in Malaysia.',
    category: 'Fundamentals',
    excerpt: 'The components of a battery energy storage system and how it differs from solar.',
    definition:
      'A Battery Energy Storage System (BESS) is an integrated system that stores electrical energy in batteries and discharges it when needed, controlling when and how power is used across a site or grid.',
    body: [
      'Unlike solar — which generates energy — a BESS is about control: storing energy and releasing it for peak shaving, load shifting, backup power and grid support.',
      'A complete BESS is more than a battery. It combines battery cells and racks, a BMS, a PCS, an EMS, and protection, cooling and monitoring systems.',
    ],
    keyPoints: {
      lead: 'A BESS typically combines several components:',
      items: [
        'Battery cells and racks',
        'BMS (Battery Management System)',
        'PCS (Power Conversion System)',
        'EMS (Energy Management System)',
        'Cooling and fire safety',
        'Monitoring and protection',
      ],
    },
    faq: [
      {
        question: 'Is a BESS the same as solar?',
        answer:
          'No. Solar generates energy; a BESS stores and controls it. They are often combined in a Solar + BESS system, but a battery adds control, safety and software that solar alone does not require.',
      },
    ],
    related: [{ label: 'PCS, EMS & System Integration', href: '/pcs-ems-system-integration' }],
  },
  {
    slug: 'what-is-a-pcs',
    title: 'What Is a PCS and Why Is It Critical in Energy Storage?',
    seoTitle: 'What Is a PCS in a BESS? | Power Conversion System',
    metaDescription:
      'A PCS (Power Conversion System) converts energy between DC battery power and AC grid power and controls power flow. Learn why the PCS is critical in a BESS.',
    category: 'Technology',
    excerpt: 'The Power Conversion System and its impact on efficiency and economics.',
    definition:
      'A Power Conversion System (PCS) converts energy between the DC power of a battery and the AC power of the grid or load, and controls how that power flows in a battery energy storage system.',
    body: [
      'The PCS sits between the battery and the grid or load. Because it manages conversion and power flow, the wrong PCS choice affects efficiency, response time, reliability and project economics.',
    ],
    faq: [
      {
        question: 'What does a PCS do in a BESS?',
        answer:
          'The PCS converts DC battery power to AC (and back) and controls power flow between the battery, grid and load. It directly affects round-trip efficiency, response time and the overall economics of a storage project.',
      },
    ],
    related: [{ label: 'PCS, EMS & System Integration', href: '/pcs-ems-system-integration' }],
  },
  {
    slug: 'what-is-an-ems',
    title: 'What Is an EMS in a Battery Energy Storage System?',
    seoTitle: 'What Is an EMS in a BESS? | Energy Management System',
    metaDescription:
      'An EMS (Energy Management System) is the control software of a BESS — deciding when to charge, discharge, shave peak demand and optimise savings. Here is how it works.',
    category: 'Technology',
    excerpt: 'The control software that turns a battery into useful peak shaving and backup.',
    definition:
      'An Energy Management System (EMS) is the control software of a battery energy storage system — it decides when to charge, discharge, shave peak demand, preserve battery life and optimise savings.',
    body: [
      'The EMS is the brain of the BESS. It monitors site load and battery state, then executes the operating strategy that turns a battery into useful peak shaving, load shifting or backup power.',
    ],
    faq: [
      {
        question: 'How is an EMS different from a BMS?',
        answer:
          'A BMS (Battery Management System) protects and balances the battery cells, while an EMS (Energy Management System) decides the overall charge and discharge strategy for the site. Both are needed for a safe, effective BESS.',
      },
    ],
    related: [{ label: 'PCS, EMS & System Integration', href: '/pcs-ems-system-integration' }],
  },
  {
    slug: 'why-battery-chemistry-matters',
    title: 'Why Battery Chemistry Matters in BESS',
    seoTitle: 'Why Battery Chemistry Matters in BESS | LFP Explained',
    metaDescription:
      'Battery chemistry determines a storage system’s safety, cycle life and performance. Learn why LFP chemistry is widely chosen for stationary energy storage.',
    category: 'Technology',
    excerpt: 'How LFP chemistry shapes safety, cycle life and suitability for storage.',
    definition:
      "Battery chemistry determines a storage system's safety, cycle life, performance and suitability — which is why LFP (Lithium Iron Phosphate) chemistry is widely chosen for stationary energy storage.",
    body: [
      'LFP chemistry, used in solutions such as the BYD Battery-Box and EVE storage systems, is positioned around safety, stability and long cycle life.',
      'The right chemistry must still be paired with a proper BMS, thermal management and full system integration to be safe on site.',
    ],
    faq: [
      {
        question: 'Why is LFP popular for energy storage?',
        answer:
          'LFP (Lithium Iron Phosphate) is cobalt-free and positioned by manufacturers around thermal stability, safety and long cycle life — characteristics that suit stationary storage assets expected to operate safely for many years.',
      },
    ],
    related: [{ label: 'BYD Battery Solutions', href: '/byd-battery-malaysia' }],
  },
  {
    slug: 'how-battery-storage-reduces-maximum-demand',
    title: 'How Does Battery Storage Reduce Maximum Demand Charges?',
    seoTitle: 'How Battery Storage Cuts Maximum Demand Charges',
    metaDescription:
      'Battery storage reduces maximum demand charges through peak shaving — discharging during high-load periods so a site draws less from the grid at its peak.',
    category: 'Commercial',
    excerpt: 'How peak shaving lowers the demand peak that drives monthly charges.',
    definition:
      'Battery storage reduces maximum demand charges through peak shaving — discharging the battery during high-load periods so the site draws less power from the grid at its peak.',
    body: [
      'Maximum demand charges are based on the highest power drawn during a billing period. By discharging at the right moments, a BESS lowers that peak.',
      'Actual savings depend on site load profile, tariff, system size and operating strategy.',
    ],
    faq: [
      {
        question: 'How much can peak shaving save?',
        answer:
          'Savings depend entirely on load profile, tariff structure, battery size and EMS strategy — Solunar models this per site rather than promising a fixed figure.',
      },
    ],
    related: [{ label: 'Maximum Demand Peak Shaving', href: '/peak-shaving-malaysia' }],
  },
  {
    slug: 'why-bess-om-differs-from-solar-om',
    title: 'Why Is BESS O&M Different From Solar O&M?',
    seoTitle: 'Why BESS O&M Is Different From Solar O&M',
    metaDescription:
      'BESS O&M differs from solar O&M because a battery asset must also be monitored for battery health, temperature, software control and safety systems.',
    category: 'Operations',
    excerpt: 'The extra monitoring a battery asset needs beyond solar generation.',
    definition:
      'BESS O&M differs from solar O&M because a battery asset must also be monitored for battery health, temperature, software control and safety systems — not just generation performance.',
    body: [
      'Solar O&M focuses on panels, inverters and yield. BESS O&M adds State of Charge and State of Health monitoring, thermal and fire-system checks, EMS and firmware coordination, and degradation management.',
    ],
    faq: [
      {
        question: 'Can a solar O&M team handle a BESS?',
        answer:
          'Not without additional capability. BESS O&M requires monitoring of battery health, temperature, software and safety systems that solar O&M does not cover, which is why a specialist storage partner is valuable.',
      },
    ],
    related: [{ label: 'O&M for ESS Projects', href: '/bess-om-malaysia' }],
  },
  {
    slug: 'why-epcc-companies-partner-with-a-bess-integrator',
    title: 'Why Should EPCC Companies Partner With a BESS System Integrator?',
    seoTitle: 'Why EPCCs Partner With a BESS System Integrator',
    metaDescription:
      'EPCC companies partner with a BESS system integrator to deliver battery storage without building in-house capability in chemistry, PCS, EMS, safety and O&M.',
    category: 'Commercial',
    excerpt: 'How a storage integrator lets EPCCs add BESS with less technical risk.',
    definition:
      'EPCC companies partner with a BESS system integrator to deliver battery storage projects without building full in-house capability in battery chemistry, PCS, EMS, safety and O&M.',
    body: [
      'Battery storage demands different expertise from solar EPCC. A BESS integrator like Solunar supplies the technology and integration layer, so EPCCs can keep the client relationship and site execution while reducing technical risk.',
    ],
    faq: [
      {
        question: 'Does a BESS integrator compete with EPCCs?',
        answer:
          'No. A BESS technology integrator like Solunar supports EPCCs rather than competing with them — the EPCC owns the client and site execution, while the integrator supplies the storage technology and integration layer.',
      },
    ],
    related: [{ label: 'We Support EPCCs', href: '/bess-partner-for-epcc' }],
  },
  {
    slug: 'how-byd-goodwe-and-ems-come-together',
    title: 'How Do BYD Battery, GoodWe Inverter and EMS Come Together in a BESS?',
    seoTitle: 'How BYD, GoodWe and an EMS Work Together in a BESS',
    metaDescription:
      'In a Solar + BESS system the battery stores energy, the inverter converts it and the EMS controls strategy. Learn how the components integrate into one system.',
    category: 'Technology',
    excerpt: 'How battery, inverter and control software integrate into one system.',
    definition:
      'In a Solar + BESS system, the battery (such as a BYD solution) stores energy, the inverter (such as GoodWe) converts it, and the EMS decides when to charge and discharge — integrated into one coordinated system.',
    body: [
      'No single component works alone. The battery, PCS/inverter, EMS, protection and monitoring must be integrated so they communicate and operate as one.',
      "Solunar's role is to coordinate that integration for EPCCs and asset owners.",
    ],
    faq: [
      {
        question: 'Can different brands work together in one BESS?',
        answer:
          'Yes, with proper integration. Solunar selects and integrates components — which may include BYD batteries, GoodWe inverters and a suitable EMS — so they operate together as one coordinated storage system.',
      },
    ],
    related: [{ label: 'PCS, EMS & System Integration', href: '/pcs-ems-system-integration' }],
  },
  {
    slug: 'how-to-choose-between-bess-solutions',
    title: 'How Do You Choose Between BYD, EVE and Other BESS Solutions?',
    seoTitle: 'How to Choose Between BYD, EVE and Other BESS',
    metaDescription:
      "Choosing a BESS solution depends on capacity, discharge duration, safety, space, budget, warranty and grid needs — not on one brand fitting every project.",
    category: 'Technology',
    excerpt: 'The project factors that decide which battery architecture fits.',
    definition:
      "Choosing between BYD, EVE and other BESS solutions depends on the project's capacity, discharge duration, safety requirements, space, budget, warranty expectations and grid needs — not on one brand fitting every site.",
    body: [
      'Solunar integrates multiple platforms and selects the most suitable configuration per project.',
      'Final configuration is subject to project design, brand approval, commercial terms and site requirements.',
    ],
    faq: [
      {
        question: 'Is one BESS brand always best?',
        answer:
          'No. A factory peak-shaving project has different needs from a utility-scale ESS farm. Solunar selects and integrates the most suitable battery, PCS and EMS configuration for each project rather than forcing one technology on every site.',
      },
    ],
    related: [{ label: 'Multi-Brand BESS Integration', href: '/multi-brand-bess-integration' }],
  },
];

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug);
}

/** Convert a knowledge article into a renderable PageContent. */
export function articleToPageContent(article: Article): PageContent {
  const blocks: Block[] = [];
  if (article.body && article.body.length) {
    blocks.push({ kind: 'prose', paragraphs: article.body });
  }
  if (article.keyPoints) {
    blocks.push({
      kind: 'list',
      variant: 'check',
      columns: 2,
      lead: article.keyPoints.lead,
      items: article.keyPoints.items,
    });
  }
  if (article.faq && article.faq.length) {
    blocks.push({ kind: 'faq', items: article.faq });
  }
  blocks.push({
    kind: 'cta',
    heading: 'Have a Solar + BESS project to discuss?',
    text: 'Solunar supports EPCC companies, developers and asset owners with technology, integration and O&M.',
    actions: [
      { label: 'Talk to Solunar', href: '/contact' },
      ...(article.related ?? []).slice(0, 2),
    ],
  });

  return {
    slug: `/knowledge-centre/${article.slug}`,
    seoTitle: article.seoTitle,
    metaDescription: article.metaDescription,
    navLabel: article.title,
    parent: { name: 'Knowledge Centre', path: '/knowledge-centre' },
    eyebrow: `Knowledge · ${article.category}`,
    h1: article.title,
    lead: article.definition,
    primaryKeyword: article.slug.replace(/-/g, ' '),
    schema: { type: 'WebPage' },
    blocks,
  };
}
