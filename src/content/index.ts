import type { PageContent } from '@/content/types';
import { about, forEpcc } from '@/content/pages/positioning';
import { bydBattery, goodweInverter, eveBess, multiBrand, pcsEms } from '@/content/pages/technology';
import {
  commercialIndustrial,
  utilityScale,
  bessOm,
  bessSafety,
  solarBessDevelopers,
  localAssembly,
} from '@/content/pages/solutions';
import { powerExpansion } from '@/content/pages/power-expansion';
import { peakShaving } from '@/content/pages/peak-shaving';
import { industriesMeta } from '@/content/pages/industries';
import { knowledgeMeta, articles } from '@/content/pages/knowledge';
import { contactMeta } from '@/content/pages/contact';
import { products } from '@/content/pages/products';

/** Every page rendered through the shared StandardPage layout. */
export const standardPages: PageContent[] = [
  about,
  forEpcc,
  bydBattery,
  goodweInverter,
  eveBess,
  multiBrand,
  pcsEms,
  commercialIndustrial,
  utilityScale,
  bessOm,
  bessSafety,
  peakShaving,
  powerExpansion,
  solarBessDevelopers,
  localAssembly,
];

/** All crawlable paths for the sitemap. */
export const allPaths: string[] = [
  '/',
  ...standardPages.map((p) => p.slug),
  '/products',
  ...products.map((p) => `/products/${p.id}`),
  '/byd-utility-bess',
  industriesMeta.slug,
  knowledgeMeta.slug,
  ...articles.map((a) => `/knowledge-centre/${a.slug}`),
  contactMeta.slug,
];
