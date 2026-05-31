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
  if (p === '/' || p === '/about' || p === '/what-we-do') return '/og/og-home.png';
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

/**
 * Build per-page Metadata with canonical URL, Open Graph and Twitter cards.
 * Titles are absolute (the content file already includes the brand suffix),
 * so the root template is not applied. The social thumbnail is auto-selected
 * from the path, or overridden via `ogImage`.
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
  return {
    title: { absolute: opts.title },
    description: opts.description,
    alternates: { canonical },
    openGraph: {
      title: opts.title,
      description: opts.description,
      url,
      siteName: site.legalName,
      locale: site.locale,
      type: opts.type ?? 'website',
      ...(opts.publishedTime ? { publishedTime: opts.publishedTime } : {}),
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
      images: [ogUrl],
    },
  };
}
