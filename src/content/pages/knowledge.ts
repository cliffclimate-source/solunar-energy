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
  sections: { heading: string; paragraphs: string[] }[];
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
      'A BESS (Battery Energy Storage System) stores electrical energy in batteries and releases it on demand. Learn the components, how it differs from solar, and why it matters in Malaysia.',
    category: 'Fundamentals',
    excerpt: 'The components of a battery energy storage system and how it differs from solar.',
    definition:
      'A Battery Energy Storage System (BESS) is an integrated system that stores electrical energy in batteries and discharges it when needed, controlling when and how power is used across a site or grid.',
    sections: [
      {
        heading: 'What does a BESS actually do?',
        paragraphs: [
          'A BESS captures electricity — from the grid or from solar — when it is cheap, abundant or surplus, and releases it later when it is expensive, scarce or needed most. In other words, solar is about generation, while a BESS is about control.',
          'That control unlocks several jobs from one asset: maximum-demand peak shaving, load shifting, solar self-consumption, backup power, power expansion and grid support. The same battery can serve different roles depending on how the Energy Management System is configured.',
        ],
      },
      {
        heading: 'What are the main components of a BESS?',
        paragraphs: [
          'A BESS is far more than a battery. A complete system brings together the battery cells and racks, a Battery Management System (BMS), a Power Conversion System (PCS), an Energy Management System (EMS), thermal management and cooling, fire detection and suppression, protection and metering, monitoring, and an enclosure or container.',
          'The performance and safety of the whole system depend on how well these parts are integrated — which is why specialist integration matters as much as the battery brand.',
        ],
      },
      {
        heading: 'How is a BESS different from solar?',
        paragraphs: [
          'Solar PV generates energy when the sun is shining; a BESS stores and dispatches energy on demand, day or night. They are complementary: a Solar + BESS system generates clean energy and then controls exactly when that energy is used, which is far more valuable than generation alone.',
        ],
      },
      {
        heading: 'Why does BESS matter in Malaysia?',
        paragraphs: [
          "Malaysia's commercial and industrial users face rising maximum-demand charges, fast-growing solar adoption, grid-capacity constraints and a growing need for energy resilience. BESS addresses all four — which is why it is becoming a core infrastructure layer rather than an optional add-on.",
        ],
      },
    ],
    keyPoints: {
      lead: 'A BESS typically combines several components:',
      items: [
        'Battery cells and racks',
        'BMS (Battery Management System)',
        'PCS (Power Conversion System)',
        'EMS (Energy Management System)',
        'Thermal management & fire safety',
        'Monitoring & protection',
      ],
    },
    faq: [
      {
        question: 'Is a BESS the same as solar?',
        answer:
          'No. Solar generates energy; a BESS stores and controls it. They are often combined in a Solar + BESS system, but a battery adds control, safety and software that solar alone does not require.',
      },
      {
        question: 'How long does a BESS last?',
        answer:
          'Modern LFP systems are typically designed for many thousands of cycles over a 10–15 year horizon, with capacity gradually degrading. Actual life depends on chemistry, depth of discharge, temperature and how the system is operated and maintained.',
      },
      {
        question: 'Is a BESS safe?',
        answer:
          'A well-designed BESS uses a safety-focused chemistry (such as LFP), a robust BMS, thermal management and fire detection and suppression. Site safety depends on the full system design and integration, not the battery alone.',
      },
    ],
    related: [{ label: 'PCS, EMS & System Integration', href: '/pcs-ems-system-integration' }],
  },
  {
    slug: 'what-is-a-pcs',
    title: 'What Is a PCS and Why Is It Critical in Energy Storage?',
    seoTitle: 'What Is a PCS in a BESS? | Power Conversion System',
    metaDescription:
      'A PCS (Power Conversion System) converts energy between DC battery power and AC grid power and controls power flow. Learn why the PCS is critical to a BESS and its economics.',
    category: 'Technology',
    excerpt: 'The Power Conversion System and its impact on efficiency and economics.',
    definition:
      'A Power Conversion System (PCS) converts energy between the DC power of a battery and the AC power of the grid or load, and controls how that power flows in a battery energy storage system.',
    sections: [
      {
        heading: 'What does a PCS do in a BESS?',
        paragraphs: [
          'The PCS sits between the battery and the grid or load. It converts DC to AC when discharging, AC to DC when charging, and continuously manages the direction, magnitude and quality of power flow according to instructions from the EMS.',
          'Because it governs conversion and flow, the PCS effectively decides how quickly and how cleanly the battery can respond — making it central to both performance and grid compliance.',
        ],
      },
      {
        heading: 'Why does the PCS choice affect project economics?',
        paragraphs: [
          'The wrong PCS choice affects round-trip efficiency, response time, reliability and grid compatibility — all of which feed directly into a project’s savings and bankability. A few percentage points of efficiency, compounded over years of cycling, is real money.',
          'PCS selection also determines whether the system can deliver functions like ramp-rate control, reactive-power support and fast frequency response, which can be required for grid-connected and utility-scale projects.',
        ],
      },
      {
        heading: 'Is a PCS the same as a solar inverter?',
        paragraphs: [
          'They are related but not identical. A solar inverter converts DC from PV to AC in one direction; a PCS is bidirectional and built to charge and discharge a battery under active control. In some hybrid designs a single device handles both roles.',
        ],
      },
    ],
    faq: [
      {
        question: 'How is the right PCS sized?',
        answer:
          'PCS power rating is matched to the battery capacity, the discharge duration and the application — for example, peak shaving versus longer-duration shifting. Solunar sizes the PCS alongside the battery and EMS for the project objective.',
      },
      {
        question: 'Can the PCS work with solar and the grid together?',
        answer:
          'Yes. In a Solar + BESS system the PCS coordinates power between the battery, the solar PV, the grid and the site load, under the EMS control strategy.',
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
    sections: [
      {
        heading: 'What does the EMS control?',
        paragraphs: [
          'The EMS is the brain of the BESS. It continuously reads site load, battery state, solar generation and tariff information, then commands the PCS to charge or discharge to meet the chosen strategy — whether that is peak shaving, load shifting, self-consumption or backup readiness.',
          'A good EMS strategy is what turns a battery from a passive box of energy into an asset that actively reduces cost and supports the grid.',
        ],
      },
      {
        heading: 'How is an EMS different from a BMS?',
        paragraphs: [
          'A BMS (Battery Management System) protects and balances the battery cells — monitoring voltage, current and temperature at the cell and module level to keep the battery safe and healthy. The EMS works at the system and site level, deciding overall strategy. Both are essential, and they work together.',
        ],
      },
      {
        heading: 'How does the EMS enable peak shaving?',
        paragraphs: [
          'The EMS watches site demand against a target threshold. As demand approaches the threshold, it discharges the battery to hold the grid draw down, then recharges during low-demand periods or from surplus solar — reducing the maximum demand the utility records.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can the EMS optimise for tariffs?',
        answer:
          'Yes. A capable EMS can factor in tariff structure and time-of-use periods, charging when energy is cheap or solar is surplus and discharging when energy is expensive or demand peaks.',
      },
      {
        question: 'Does the EMS allow remote monitoring?',
        answer:
          'Typically yes — most EMS platforms expose real-time data and alarms for remote monitoring and diagnostics, which supports long-term O&M and performance optimisation.',
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
    sections: [
      {
        heading: 'How does chemistry affect a storage asset?',
        paragraphs: [
          'Chemistry sets the ground rules for a battery: how safely it behaves under stress and heat, how many cycles it can deliver, how it degrades over time, and how it performs across temperatures. For a stationary asset expected to operate safely for a decade or more, those properties matter more than peak energy density.',
        ],
      },
      {
        heading: 'Why is LFP popular for energy storage?',
        paragraphs: [
          'LFP (Lithium Iron Phosphate) is cobalt-free and positioned by manufacturers around thermal stability, safety and long cycle life — characteristics that suit stationary storage. It is used in solutions such as the BYD Battery-Box and EVE storage systems, and is a common choice for commercial and utility-scale BESS.',
        ],
      },
      {
        heading: 'Is choosing LFP enough on its own?',
        paragraphs: [
          'No. The right chemistry still has to be paired with a proper BMS, thermal management, fire detection and suppression, and full system integration to be safe and to perform on site. Chemistry is the foundation, not the whole building.',
        ],
      },
    ],
    faq: [
      {
        question: 'Why is LFP considered safer?',
        answer:
          'LFP is positioned around thermal and chemical stability and is cobalt-free, which manufacturers associate with a lower risk of thermal events compared with some other lithium chemistries. System-level safety design still applies.',
      },
      {
        question: 'Does LFP last longer?',
        answer:
          'LFP is generally positioned for long cycle life, which suits assets that charge and discharge daily for many years. Actual life depends on operating conditions, temperature and maintenance.',
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
    sections: [
      {
        heading: 'What are maximum demand charges?',
        paragraphs: [
          'For many commercial and industrial users, the electricity bill is driven not only by total energy consumed (kWh) but by the highest power drawn from the grid (kW) during the billing period. Even a short spike — several machines starting together — can set a high maximum demand and raise the whole monthly bill.',
        ],
      },
      {
        heading: 'How does BESS peak shaving work?',
        paragraphs: [
          'The EMS monitors site demand against a target. When demand rises toward the threshold, the battery discharges to supply part of the load, so the grid sees a lower peak. The battery then recharges during off-peak periods or from surplus solar. For example, if a site peaks at 1,800 kW and the BESS supplies 400 kW, the grid only records 1,400 kW.',
        ],
      },
      {
        heading: 'What do the savings depend on?',
        paragraphs: [
          'Savings depend on the load profile, the tariff structure, the battery size and the operating strategy. A site with sharp, predictable peaks benefits more than one with a flat profile. This is why Solunar models savings from your actual bill and interval data rather than quoting a fixed figure.',
        ],
      },
    ],
    faq: [
      {
        question: 'How much can peak shaving save?',
        answer:
          'It depends entirely on load profile, tariff structure, battery size and EMS strategy. Solunar reviews your electricity bill and interval load data to estimate savings, system size and payback per site.',
      },
      {
        question: 'Will peak shaving disrupt operations?',
        answer:
          'No. The EMS supports the load automatically during peaks and recharges off-peak, so production continues normally while the grid sees a lower demand peak.',
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
    sections: [
      {
        heading: 'What does BESS O&M add beyond solar?',
        paragraphs: [
          'Solar O&M focuses on panels, inverters and generation yield. BESS O&M adds the battery dimension: State of Charge and State of Health monitoring, thermal behaviour, charge/discharge control, EMS and firmware coordination, and degradation management — alongside the safety and fire systems.',
        ],
      },
      {
        heading: 'What gets monitored in a BESS?',
        paragraphs: [
          'Beyond generation, a BESS is watched for cell and module health, temperature and cooling performance, PCS and EMS status, alarms, and safety-system readiness. Remote monitoring lets issues be caught early before they affect performance or safety.',
        ],
      },
      {
        heading: 'What happens if BESS O&M is neglected?',
        paragraphs: [
          'Without active O&M, cells can imbalance, thermal performance can drift, alarms can go unactioned and warranty conditions can be breached — quietly eroding performance, safety and asset value. Proactive O&M protects all three.',
        ],
      },
    ],
    faq: [
      {
        question: 'Can a solar O&M team handle a BESS?',
        answer:
          'Not without additional capability. BESS O&M requires monitoring of battery health, temperature, software and safety systems that solar O&M does not cover, which is why a specialist storage partner is valuable.',
      },
      {
        question: 'What does Solunar cover in BESS O&M?',
        answer:
          'Remote monitoring, battery-health review, SoC/SoH tracking, PCS/EMS review, alarm monitoring, preventive maintenance, thermal and fire-system checks, firmware coordination, fault diagnosis, and warranty and spare-parts coordination.',
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
    sections: [
      {
        heading: 'Why is BESS different from solar EPCC?',
        paragraphs: [
          'Battery storage demands expertise that solar EPCC does not: battery chemistry and selection, PCS sizing, EMS control logic, fire and thermal safety, degradation planning and long-term O&M. Building all of that in-house takes time and carries risk — especially on the first few projects.',
        ],
      },
      {
        heading: 'What does a BESS integrator provide?',
        paragraphs: [
          'An integrator like Solunar supplies the technology and the integration layer: battery selection, PCS/EMS coordination, technical proposals and sizing, commissioning support and O&M planning — so the EPCC can bid for and deliver Solar + BESS work with confidence.',
        ],
      },
      {
        heading: 'Does an integrator compete with the EPCC?',
        paragraphs: [
          'No. A BESS integrator supports EPCCs rather than competing with them. The EPCC keeps the client relationship and site execution; the integrator works behind the scenes on the storage technology layer.',
        ],
      },
    ],
    faq: [
      {
        question: 'When should an EPCC bring in an integrator?',
        answer:
          'As early as the proposal stage, so battery sizing, PCS/EMS selection and O&M planning are correct before pricing is fixed — avoiding costly changes later.',
      },
      {
        question: 'Can we still use our own electrical team?',
        answer:
          'Yes. The integrator complements your team, providing the BESS-specific technology and integration support while your team handles civil, electrical and site execution.',
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
      'In a Solar + BESS system, the battery (such as a BYD solution) stores energy, the inverter or PCS (such as GoodWe) converts it, and the EMS decides when to charge and discharge — integrated into one coordinated system.',
    sections: [
      {
        heading: 'What role does each part play?',
        paragraphs: [
          'The battery stores energy and is protected by its BMS. The inverter or PCS converts and directs power between the battery, solar, grid and load. The EMS sets the strategy — when to charge, discharge or shave demand. Solar PV adds clean generation into the mix.',
        ],
      },
      {
        heading: 'Why is integration the real value?',
        paragraphs: [
          'No single component works alone. The battery, PCS/inverter, EMS, protection and monitoring must communicate and operate as one, or the system underperforms. Coordinating that integration — so everything dispatches, reports and stays safe together — is exactly the role of a system integrator like Solunar.',
        ],
      },
      {
        heading: 'Can different brands work together?',
        paragraphs: [
          'Yes, with proper integration. Solunar selects and integrates components — which may include BYD batteries, GoodWe inverters and a suitable EMS — so they operate together as one coordinated storage system, rather than being locked to a single brand.',
        ],
      },
    ],
    faq: [
      {
        question: 'Do I have to use one brand for everything?',
        answer:
          'No. A well-integrated BESS can combine a battery, PCS/inverter and EMS from suitable suppliers. Solunar recommends and integrates the combination that best fits the project.',
      },
    ],
    related: [
      { label: 'PCS, EMS & System Integration', href: '/pcs-ems-system-integration' },
      { label: 'Multi-Brand BESS Integration', href: '/multi-brand-bess-integration' },
    ],
  },
  {
    slug: 'how-to-choose-between-bess-solutions',
    title: 'How Do You Choose Between BYD, EVE and Other BESS Solutions?',
    seoTitle: 'How to Choose Between BYD, EVE and Other BESS',
    metaDescription:
      'Choosing a BESS solution depends on capacity, discharge duration, safety, space, budget, warranty and grid needs — not on one brand fitting every project.',
    category: 'Technology',
    excerpt: 'The project factors that decide which battery architecture fits.',
    definition:
      "Choosing between BYD, EVE and other BESS solutions depends on the project's capacity, discharge duration, safety requirements, space, budget, warranty expectations and grid needs — not on one brand fitting every site.",
    sections: [
      {
        heading: 'Is there a single best BESS brand?',
        paragraphs: [
          'No. A factory peak-shaving project has different needs from a utility-scale ESS farm, and a data-centre resilience project differs from a solar self-consumption site. The right choice falls out of the requirements, not brand loyalty.',
        ],
      },
      {
        heading: 'What factors drive the decision?',
        paragraphs: [
          'Key factors include project capacity and discharge duration, cycle requirements, safety needs, available space and cooling, warranty expectations, bankability, budget, delivery timeline, O&M requirements and grid interconnection. Weighing these together points to the most suitable battery, PCS and EMS configuration.',
        ],
      },
      {
        heading: 'How does Solunar approach the choice?',
        paragraphs: [
          'Solunar integrates multiple platforms and selects the most suitable configuration per project. Final configuration is subject to project design, brand approval, commercial terms and site requirements — so the system fits the job rather than the other way around.',
        ],
      },
    ],
    faq: [
      {
        question: 'Is one BESS brand always best?',
        answer:
          'No. Solunar selects and integrates the most suitable battery, PCS and EMS configuration for each project rather than forcing one technology on every site.',
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

  for (const section of article.sections) {
    blocks.push({ kind: 'prose', heading: section.heading, paragraphs: section.paragraphs });
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
