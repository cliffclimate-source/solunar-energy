import type { PageContent } from '@/content/types';
import { about, whatWeDo, bessPartnerForEpcc, epccPartnerProgramme } from '@/content/pages/positioning';
import { bydBattery, goodweInverter, eveBess, multiBrand, pcsEms } from '@/content/pages/technology';
import {
  commercialIndustrial,
  utilityScale,
  bessOm,
  bessSafety,
  peakShaving,
  powerExpansion,
  solarBessDevelopers,
  localAssembly,
} from '@/content/pages/solutions';
import { industriesMeta } from '@/content/pages/industries';
import { knowledgeMeta, articles } from '@/content/pages/knowledge';
import { contactMeta } from '@/content/pages/contact';

/** Every page rendered through the shared StandardPage layout. */
export const standardPages: PageContent[] = [
  about,
  whatWeDo,
  bessPartnerForEpcc,
  epccPartnerProgramme,
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
  industriesMeta.slug,
  knowledgeMeta.slug,
  ...articles.map((a) => `/knowledge-centre/${a.slug}`),
  contactMeta.slug,
];
