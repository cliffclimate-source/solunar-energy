export const productsMeta = {
  slug: '/products',
  seoTitle: 'Solunar BESS Products | Battery Storage Range Malaysia',
  metaDescription:
    'Explore the Solunar battery energy storage range — C&I cabinets, containerised ESS and distributed units with LFP chemistry, integrated PCS/EMS and fire safety, for Malaysia.',
  navLabel: 'Products',
  eyebrow: 'Products',
  h1: 'The Solunar Battery Energy Storage Range',
  lead: 'Solunar Energy supplies and integrates a range of LFP battery energy storage systems — from commercial & industrial cabinets to containerised utility-scale ESS — delivered and supported under the Solunar brand for the Malaysian market.',
  primaryKeyword: 'Solunar BESS products Malaysia',
};

export type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  tagline: string;
  description: string;
  overview?: string[];
  specs: { label: string; value: string }[];
  applications: string[];
};

export const products: Product[] = [
  {
    id: 'ci-cabinet-241',
    name: 'Solunar C&I Cabinet 241',
    category: 'Commercial & Industrial',
    image: '/images/product-ci-cabinet.png',
    tagline: 'Outdoor all-in-one commercial & industrial battery storage cabinet.',
    description:
      'A plug-and-play outdoor C&I storage cabinet with cobalt-free LFP chemistry and an integrated fire-suppression system, suited to factories and commercial sites.',
    overview: [
      'The Solunar C&I Cabinet 241 is an outdoor, all-in-one battery energy storage cabinet for commercial and industrial sites. It packages 241 kWh of cobalt-free LFP storage with power conversion, thermal management and a Novec 1230 plus water fire-suppression system inside one weatherproof enclosure.',
      'Built for plug-and-play deployment, it suits factories, warehouses, cold storage and commercial buildings that need maximum-demand peak shaving, solar self-consumption, backup power or extra capacity — without major civil works.',
      'Solunar supplies and integrates the cabinet under the Solunar brand, coordinating the PCS, EMS, protection and metering, and supporting commissioning and long-term O&M. Final configuration is subject to project design, brand approval and site requirements.',
    ],
    specs: [
      { label: 'Usable energy', value: '241 kWh (BOL)' },
      { label: 'Rated power', value: '60 / 120 kW' },
      { label: 'Chemistry', value: 'LFP (cobalt-free)' },
      { label: 'Fire suppression', value: 'Novec 1230 + water' },
      { label: 'Installation', value: 'Outdoor, plug-and-play' },
      { label: 'Form factor', value: 'All-in-one cabinet' },
    ],
    applications: ['Peak shaving', 'Backup power', 'Capacity expansion', 'Solar self-consumption'],
  },
  {
    id: 'ci-compact-120',
    name: 'Solunar C&I Compact 120',
    category: 'Commercial & Industrial',
    image: '/images/product-ci-compact.png',
    tagline: 'Compact all-in-one cabinet for smaller C&I sites.',
    description:
      'A space-saving all-in-one cabinet for smaller commercial and industrial loads, with layered fire safety and LFP chemistry.',
    specs: [
      { label: 'Usable energy', value: '120 kWh (BOL)' },
      { label: 'Rated power', value: '30 / 60 kW' },
      { label: 'Chemistry', value: 'LFP' },
      { label: 'Fire suppression', value: 'Gas detection + Novec 1230 + water' },
      { label: 'Form factor', value: 'Compact all-in-one' },
    ],
    applications: ['Small C&I storage', 'Peak shaving', 'Backup power'],
  },
  {
    id: 'container-1200',
    name: 'Solunar ESS Container 1.2 MWh',
    category: 'Utility-Scale',
    image: '/images/product-ess-container.png',
    tagline: '20-foot containerised energy storage system.',
    description:
      'A turnkey 20ft containerised ESS integrating battery, PCS, power distribution and fire & thermal management for large C&I and utility-scale projects.',
    specs: [
      { label: 'Usable energy', value: '1,204 kWh' },
      { label: 'Rated power', value: '1,000 kW' },
      { label: 'Chemistry', value: 'LFP' },
      { label: 'Charge/discharge', value: '1C' },
      { label: 'Integrated', value: 'Battery · PCS · PDU · fire & thermal' },
      { label: 'Form factor', value: '20ft container' },
    ],
    applications: ['Utility-scale ESS', 'Large C&I', 'Grid support'],
  },
  {
    id: 'container-2250',
    name: 'Solunar ESS Container 2.25 MWh',
    category: 'Utility-Scale',
    image: '/images/product-ess-container.png',
    tagline: 'High-capacity 0.5C containerised ESS for longer duration.',
    description:
      'A high-capacity containerised ESS optimised for longer-duration utility-scale storage, with LFP chemistry and integrated balance-of-system.',
    specs: [
      { label: 'Usable energy', value: 'Up to 2,250 kWh' },
      { label: 'Rated power', value: '360 – 1,000 kW' },
      { label: 'Chemistry', value: 'LFP' },
      { label: 'Charge/discharge', value: '0.5C' },
      { label: 'Form factor', value: '20ft container' },
    ],
    applications: ['Utility-scale ESS farms', 'Longer-duration storage'],
  },
  {
    id: 'distributed',
    name: 'Solunar Distributed Unit',
    category: 'Distributed / EV',
    image: '/images/product-distributed.png',
    tagline: 'Flexible storage for solar and DC EV charging.',
    description:
      'A flexible distributed storage unit with parallel-connection capability, suited to fixed C&I loads and solar-plus-storage-plus-EV-charging integration.',
    specs: [
      { label: 'Usable energy', value: '38 – 76 kWh (BOL)' },
      { label: 'Rated power', value: '30 / 60 kW' },
      { label: 'Chemistry', value: 'LFP' },
      { label: 'Charge/discharge', value: '1C' },
      { label: 'Features', value: 'Parallel-capable, flexible interfaces' },
    ],
    applications: ['Fixed C&I loads', 'Solar + storage + EV charging'],
  },
];

export const productsSoftware: {
  name: string;
  icon: string;
  description: string;
  capabilities: string[];
}[] = [
  {
    name: 'Solunar EMS',
    icon: 'ems',
    description:
      'The brain of the BESS. On-site energy management software that controls, monitors and optimises the storage system in real time — connecting the battery, PCS, solar, meter, grid and protection so the system runs to the project objective.',
    capabilities: [
      'Real-time monitoring of SoC, SoH, power, temperature and alarms',
      'Charge/discharge scheduling (rules- and time-based)',
      'Maximum demand peak shaving against a target threshold',
      'Solar energy shifting and self-consumption optimisation',
      'Time-of-use tariff and grid export control',
      'Fault diagnostics and alarm management',
      'System protection and safe operating-limit control',
    ],
  },
  {
    name: 'Solunar Cloud O&M',
    icon: 'om',
    description:
      'Cloud-based oversight for long-term asset performance. While the EMS controls the system on site, Cloud O&M gives owners and operators remote visibility, diagnostics and reporting from anywhere — supporting unattended operation across one site or a whole portfolio.',
    capabilities: [
      'Remote asset monitoring from anywhere',
      'Fault prediction and early-warning alerts',
      'Unattended operation with remote oversight',
      'Multi-site portfolio management',
      'Battery-health and degradation tracking',
      'Performance and energy-savings reporting',
      'Preventive-maintenance planning and downtime reduction',
    ],
  },
];

export const productsSoftwareBenefits: {
  audience: string;
  icon: string;
  lead: string;
  items: string[];
}[] = [
  {
    audience: 'For EPCCs',
    icon: 'partner',
    lead: 'Offer a managed energy-storage solution — not just hardware — and win more bankable projects:',
    items: [
      'Improve proposal quality and reduce technical uncertainty',
      'Offer stronger after-sales and long-term operational support',
      'Differentiate from competitors selling hardware only',
      'Build confidence with developers, funds and corporate clients',
    ],
  },
  {
    audience: 'For asset owners',
    icon: 'developers',
    lead: 'Make sure the BESS delivers value every day, across its whole life:',
    items: [
      'Improve energy savings and optimise system operation',
      'Reduce downtime and monitor asset health remotely',
      'Protect battery lifespan within safe operating limits',
      'Improve long-term investment confidence',
    ],
  },
];

export const productsNote =
  'Specifications are indicative and subject to final product configuration, brand approval, commercial terms and project requirements. Solunar supplies and integrates selected battery storage technologies under the Solunar brand.';

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}
