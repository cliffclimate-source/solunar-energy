/**
 * JSON-LD structured-data builders. Rendered via the <JsonLd> component.
 * Organization + LocalBusiness are sitewide; Service/FAQPage/BreadcrumbList
 * are emitted per page.
 */
import { site } from '@/lib/site';

type Json = Record<string, unknown>;

const ORG_ID = `${site.url}/#organization`;

const postalAddress = (): Json => ({
  '@type': 'PostalAddress',
  streetAddress: site.address.streetAddress,
  addressLocality: site.address.locality,
  addressRegion: site.address.region,
  postalCode: site.address.postalCode,
  addressCountry: site.address.country,
});

export function organizationLd(): Json {
  const sameAs = [site.social.linkedin].filter(Boolean);
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description: site.description,
    areaServed: site.areaServed,
    address: postalAddress(),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function localBusinessLd(): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${site.url}/#localbusiness`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    image: `${site.url}/og-image.svg`,
    description: site.description,
    email: site.contact.email,
    telephone: site.contact.phoneDisplay,
    areaServed: site.areaServed,
    address: postalAddress(),
    parentOrganization: { '@id': ORG_ID },
  };
}

export function serviceLd(opts: {
  name: string;
  serviceType: string;
  description: string;
  path: string;
  brands?: string[];
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: `${site.url}${opts.path}`,
    areaServed: site.areaServed,
    provider: { '@type': 'Organization', '@id': ORG_ID, name: site.name },
    ...(opts.brands && opts.brands.length
      ? { brand: opts.brands.map((b) => ({ '@type': 'Brand', name: b })) }
      : {}),
  };
}

export function faqPageLd(items: { question: string; answer: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((it) => ({
      '@type': 'Question',
      name: it.question,
      acceptedAnswer: { '@type': 'Answer', text: it.answer },
    })),
  };
}

export function breadcrumbLd(crumbs: { name: string; path: string }[]): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${site.url}${c.path === '/' ? '' : c.path}`,
    })),
  };
}

export function productLd(p: {
  name: string;
  description: string;
  image: string;
  category: string;
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: p.name,
    description: p.description,
    category: p.category,
    image: `${site.url}${p.image}`,
    brand: { '@type': 'Brand', name: site.name },
    manufacturer: { '@id': ORG_ID },
  };
}

export function personLd(p: {
  name: string;
  jobTitle: string;
  image?: string;
  alumniOf?: string[];
}): Json {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: p.name,
    jobTitle: p.jobTitle,
    worksFor: { '@id': ORG_ID, name: site.name },
    ...(p.image ? { image: `${site.url}${p.image}` } : {}),
    ...(p.alumniOf
      ? { alumniOf: p.alumniOf.map((a) => ({ '@type': 'CollegeOrUniversity', name: a })) }
      : {}),
  };
}
