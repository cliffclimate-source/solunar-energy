import type { FaqItem } from '@/content/types';

export type ArticleCategory =
  | 'Fundamentals'
  | 'Technology'
  | 'Commercial'
  | 'Operations'
  | 'Solar + BESS'
  | 'Utility-Scale'
  | 'Incentives';

/** A knowledge-centre article. Sections may carry prose paragraphs, a bullet
 *  list, or both. */
export type Article = {
  slug: string;
  title: string;
  seoTitle: string;
  metaDescription: string;
  category: ArticleCategory;
  excerpt: string;
  /** Answer-first definition, rendered as the article lead. */
  definition: string;
  sections: { heading: string; paragraphs?: string[]; bullets?: string[] }[];
  keyPoints?: { lead: string; items: string[] };
  faq?: FaqItem[];
  related?: { label: string; href: string }[];
};
