import type { Metadata } from 'next';
import { site } from '@/lib/site';

const OG_IMAGE = {
  url: '/og-image.svg',
  width: 1200,
  height: 630,
  alt: 'Solunar Energy — Solar + BESS technology partner in Malaysia',
};

/**
 * Build per-page Metadata with canonical URL, Open Graph and Twitter cards.
 * Titles are absolute (the content file already includes the brand suffix),
 * so the root template is not applied.
 */
export function buildMetadata(opts: {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  publishedTime?: string;
}): Metadata {
  const canonical = opts.path === '/' ? '/' : opts.path;
  const url = opts.path === '/' ? site.url : `${site.url}${opts.path}`;
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
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: opts.title,
      description: opts.description,
      images: [OG_IMAGE.url],
    },
  };
}
