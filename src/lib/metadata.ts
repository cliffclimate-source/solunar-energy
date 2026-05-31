import type { Metadata } from 'next';
import { site } from '@/lib/site';

const OG_ALT = 'Solunar Energy — Solar + BESS technology partner in Malaysia';
const OG_DEFAULT = '/og/og-home.png';

/**
 * Pick a section-appropriate social thumbnail (1200×630 PNG) from the URL path.
 * PNG is required because WhatsApp/Facebook/LinkedIn do not render SVG previews.
 */
function ogImageForPath(path: string): string {
  const p = path.toLowerCase();
  if (p === '/' || p === '/about') return '/og/og-home.png';
  if (p === '/solutions') return '/og/og-utility.png';
  if (p === '/contact' || p.includes('epcc') || p.includes('partner')) return '/og/og-contact.png';
  if (p.includes('knowledge')) return '/og/og-knowledge.png';
  if (
    p.includes('utility') ||
    p.includes('byd-utility') ||
    p.includes('developers') ||
    p.includes('local-bess')
  )
    return '/og/og-utility.png';
  if (
    p.includes('byd-battery') ||
    p.includes('goodwe') ||
    p.includes('eve') ||
    p.includes('multi-brand') ||
    p.includes('pcs-ems') ||
    p.includes('product')
  )
    return '/og/og-technology.png';
  if (
    p.includes('commercial') ||
    p.includes('peak-shaving') ||
    p.includes('power-expansion') ||
    p.includes('bess-om') ||
    p.includes('bess-safety') ||
    p.includes('industries')
  )
    return '/og/og-commercial.png';
  return OG_DEFAULT;
}

type Social = { title: string; description: string };

/**
 * Click-optimised social copy per page (used only for Open Graph / Twitter cards
 * when a link is shared on WhatsApp, Facebook, LinkedIn, etc.). These are
 * deliberately more human and benefit-driven than the keyword-focused SEO
 * titles/descriptions used for search engines. Keyed by exact path; pages
 * without an entry (e.g. individual products/articles) fall back to their SEO
 * title + description, which already read well.
 */
const SOCIAL_COPY: Record<string, Social> = {
  '/': {
    title: "The Solar + BESS Partner Behind Malaysia's EPCCs",
    description:
      'We help EPCCs, developers and asset owners deliver safer, smarter, more bankable battery storage — without building it all in-house. See how Solunar fits in.',
  },
  '/about': {
    title: "Built to Power Malaysia's Energy Storage Future",
    description:
      'Meet Solunar — the Malaysian Solar + BESS distributor and integrator. Battery supply, PCS/EMS integration and long-term O&M behind bankable storage projects.',
  },
  '/solutions': {
    title: 'Solar + BESS Solutions for Every Energy Challenge',
    description:
      'Peak shaving, power expansion, utility-scale ESS, O&M, safety and more — see every Solunar Solar + BESS solution on one page, each matched to a real business problem.',
  },
  '/for-epcc': {
    title: 'Win More Solar + BESS Projects — Without the Technical Risk',
    description:
      'Solunar is the BESS partner behind the EPCC. You keep the client and site; we bring the battery, PCS, EMS, proposal support and O&M. See how the partnership works.',
  },
  '/byd-battery-malaysia': {
    title: 'BYD Battery Solutions for Safe, Bankable Storage',
    description:
      'Cobalt-free LFP chemistry built for safety and long cycle life. See how Solunar integrates BYD batteries into commercial and utility-scale BESS.',
  },
  '/goodwe-inverter-malaysia': {
    title: 'GoodWe Inverters & Batteries for Solar + Storage',
    description:
      'Solar, hybrid and storage inverters that bridge generation, batteries and load. Discover GoodWe solutions supplied and integrated by Solunar.',
  },
  '/eve-bess-integration': {
    title: 'EVE BESS Integration for Solar, C&I & Utility Projects',
    description:
      'LFP cells, thermal safety and cloud monitoring — integrated into one complete, bankable energy storage system. Explore EVE BESS with Solunar.',
  },
  '/multi-brand-bess-integration': {
    title: 'One Integrator. Any BESS Brand. One Working System.',
    description:
      'BYD, GoodWe, EVE, PCS and EMS — Solunar integrates the right mix for your project instead of locking you to one brand. See the approach.',
  },
  '/pcs-ems-system-integration': {
    title: 'PCS, EMS & Architecture — The Brains Behind a BESS',
    description:
      'A battery is only as good as its architecture. See how Solunar designs the PCS, EMS and system that make storage perform and pay back.',
  },
  '/products': {
    title: 'The Solunar BESS Range — C&I Cabinets to Containers',
    description:
      'LFP battery storage from commercial cabinets to utility-scale containers — integrated with PCS, EMS, fire safety and O&M. Browse the range.',
  },
  '/byd-utility-bess': {
    title: 'BYD Utility-Scale BESS for LSS, CRESS & Grid-Scale Solar',
    description:
      'Total utility-scale storage for large solar and grid-connected projects. See the BYD-powered BESS solution Solunar delivers in Malaysia.',
  },
  '/commercial-industrial-bess-malaysia': {
    title: 'Cut Your Maximum Demand Charges with C&I BESS',
    description:
      'Factories, malls and data centres: reduce peak demand, store solar and expand capacity with a battery system designed around your load. Learn how.',
  },
  '/utility-scale-ess-malaysia': {
    title: 'Bankable Utility-Scale Energy Storage for Malaysia',
    description:
      'For developers, EPCCs and funds: battery selection, grid compliance, safety and O&M for LSS, CRESS and grid-scale ESS. Explore the solution.',
  },
  '/bess-om-malaysia': {
    title: 'Protect Your BESS Investment with Professional O&M',
    description:
      'A battery asset is only valuable if it performs for 10–15 years. See how Solunar’s monitoring and O&M keep ESS safe, reliable and bankable.',
  },
  '/bess-safety': {
    title: 'BESS Safety & Reliability — The Foundation of Bankability',
    description:
      'Fire, thermal and electrical safety isn’t optional — it’s what makes a project financeable. See how Solunar builds safety in from day one.',
  },
  '/peak-shaving-malaysia': {
    title: 'Slash Maximum Demand Charges with Battery Peak Shaving',
    description:
      'Discharge stored energy during peaks and lower the demand charge that inflates your bill. See how BESS peak shaving saves money in Malaysia.',
  },
  '/power-expansion-bess': {
    title: 'Need More Power? Expand with BESS, Not Grid Upgrades',
    description:
      'Add usable peak power for new lines, EV charging or data loads while grid upgrades wait. See how BESS supports expansion in Malaysia.',
  },
  '/solar-bess-developers': {
    title: 'Solar + BESS for Developers — Make Projects Bankable',
    description:
      'Add storage without building it all in-house: feasibility, architecture, bankability and O&M support for solar developers and EPCCs.',
  },
  '/local-bess-assembly': {
    title: "Building Malaysia's Local BESS Assembly Capability",
    description:
      'Faster delivery, better after-sales, stronger local content. See Solunar’s roadmap to localised battery storage assembly and support.',
  },
  '/industries': {
    title: "BESS for Malaysia's High-Load Industries",
    description:
      'Manufacturing, cold storage, data centres, malls, EV charging and more — see how battery storage cuts cost and adds resilience in your sector.',
  },
  '/knowledge-centre': {
    title: 'Solar + BESS Knowledge Centre for Malaysia',
    description:
      'Clear, practical guides on BESS, PCS, EMS, peak shaving, safety, ROI and incentives — everything you need to understand energy storage.',
  },
  '/contact': {
    title: 'Talk to Solunar About Your Solar + BESS Project',
    description:
      'Tell us your load, site and goals — we’ll recommend and integrate the right battery storage solution. Get a project assessment.',
  },
};

/**
 * Build per-page Metadata with canonical URL, Open Graph and Twitter cards.
 * Titles are absolute (the content file already includes the brand suffix),
 * so the root template is not applied. The social thumbnail is auto-selected
 * from the path, or overridden via `ogImage`. Social title/description use the
 * click-optimised SOCIAL_COPY map when available, falling back to SEO copy.
 */
export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  publishedTime?: string;
  ogImage?: string;
}): Metadata {
  const canonical = opts.path === '/' ? '/' : opts.path;
  const url = opts.path === '/' ? site.url : `${site.url}${opts.path}`;
  const ogUrl = opts.ogImage ?? ogImageForPath(opts.path);
  const ogImage = {
    url: ogUrl,
    width: 1200,
    height: 630,
    alt: OG_ALT,
    type: 'image/png',
  };

  // Social copy: punchy, click-driven; falls back to SEO title/description.
  const social = SOCIAL_COPY[opts.path];
  const socialTitle = social ? `${social.title} | Solunar Energy` : opts.title;
  const socialDescription = social ? social.description : opts.description;

  return {
    title: { absolute: opts.title },
    description: opts.description,
    alternates: { canonical },
    openGraph: {
      title: socialTitle,
      description: socialDescription,
      url,
      siteName: site.legalName,
      locale: site.locale,
      type: opts.type ?? 'website',
      ...(opts.publishedTime ? { publishedTime: opts.publishedTime } : {}),
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description: socialDescription,
      images: [ogUrl],
    },
  };
}
