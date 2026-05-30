import { site } from '@/lib/site';
import { sanityFetch } from './client';

/** Contact/brand details, resolved from Sanity Site Settings when available. */
export type ResolvedSiteSettings = {
  brandName: string;
  legalName: string;
  companyNo: string;
  email: string;
  enquiryEmail: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  address: { streetAddress: string; locality: string; postalCode: string };
  linkedin: string;
};

/** Static defaults — the single source of truth until a CMS project is connected. */
const fallback: ResolvedSiteSettings = {
  brandName: site.name,
  legalName: site.legalName,
  companyNo: site.companyNo,
  email: site.contact.email,
  enquiryEmail: 'jimmy@solunar.my',
  phoneDisplay: site.contact.phoneDisplay,
  phoneHref: site.contact.phoneHref,
  whatsappHref: site.contact.whatsappHref,
  address: {
    streetAddress: site.address.streetAddress,
    locality: site.address.locality,
    postalCode: site.address.postalCode,
  },
  linkedin: site.social.linkedin,
};

type SettingsDoc = {
  companyName?: string;
  legalName?: string;
  companyNo?: string;
  email?: string;
  enquiryEmail?: string;
  phone?: string;
  addressStreet?: string;
  addressCity?: string;
  addressPostcode?: string;
  linkedin?: string;
};

const QUERY = `*[_type == "siteSettings"][0]{
  companyName, legalName, companyNo, email, enquiryEmail, phone,
  addressStreet, addressCity, addressPostcode, linkedin
}`;

const WA_TEXT =
  '?text=Hi%20Solunar%2C%20I%27d%20like%20to%20discuss%20a%20Solar%20%2B%20BESS%20project.';

/**
 * Returns brand/contact details, overlaying any Sanity "Site Settings"
 * document over the static defaults. Falls back entirely to static config when
 * Sanity is not configured or unreachable.
 */
export async function getSiteSettings(): Promise<ResolvedSiteSettings> {
  const doc = await sanityFetch<SettingsDoc>(QUERY);
  if (!doc) return fallback;

  const digits = (doc.phone ?? '').replace(/[^0-9]/g, '');
  return {
    brandName: doc.companyName || fallback.brandName,
    legalName: doc.legalName || fallback.legalName,
    companyNo: doc.companyNo || fallback.companyNo,
    email: doc.email || fallback.email,
    enquiryEmail: doc.enquiryEmail || fallback.enquiryEmail,
    phoneDisplay: doc.phone || fallback.phoneDisplay,
    phoneHref: digits ? `tel:+${digits}` : fallback.phoneHref,
    whatsappHref: digits ? `https://wa.me/${digits}${WA_TEXT}` : fallback.whatsappHref,
    address: {
      streetAddress: doc.addressStreet || fallback.address.streetAddress,
      locality: doc.addressCity || fallback.address.locality,
      postalCode: doc.addressPostcode || fallback.address.postalCode,
    },
    linkedin: doc.linkedin || fallback.linkedin,
  };
}
