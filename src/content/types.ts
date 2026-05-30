/**
 * Typed content model. Every marketing page is expressed as ordered content
 * blocks so that SEO/AIO structure (answer-first lead, lead-in before every
 * list, one H1, real heading hierarchy, tables, FAQ) is enforced centrally.
 */

export type FaqItem = { question: string; answer: string };

export type ListItem = string | { title: string; text: string };

export type Action = { label: string; href: string };

export type PageImage = {
  /** Path under /public (e.g. "/images/byd-battery.jpg"). Omit for placeholder. */
  src?: string;
  alt: string;
  /** AI-generation prompt for this slot (documented in public/images/README.md). */
  prompt?: string;
  aspect?: string;
};

export type Block =
  | {
      kind: 'prose';
      id?: string;
      heading?: string;
      level?: 2 | 3;
      paragraphs: string[];
    }
  | {
      kind: 'list';
      id?: string;
      heading?: string;
      level?: 2 | 3;
      lead: string;
      items: ListItem[];
      variant?: 'check' | 'cards' | 'inline' | 'bullet';
      columns?: 1 | 2 | 3;
      note?: string;
    }
  | {
      kind: 'table';
      id?: string;
      heading?: string;
      lead?: string;
      columns: string[];
      rows: string[][];
      caption?: string;
      note?: string;
    }
  | {
      kind: 'cards';
      id?: string;
      heading?: string;
      lead?: string;
      items: { title: string; text: string; icon?: string }[];
      columns?: 2 | 3;
    }
  | { kind: 'pullquote'; text: string; attribution?: string }
  | { kind: 'stats'; items: { value: string; label: string }[] }
  | {
      kind: 'steps';
      id?: string;
      heading?: string;
      lead?: string;
      items: { title: string; text?: string }[];
    }
  | { kind: 'note'; text: string }
  | { kind: 'image'; src?: string; alt: string; aspect?: string; caption?: string }
  | { kind: 'faq'; id?: string; heading?: string; items: FaqItem[] }
  | {
      kind: 'cta';
      heading: string;
      text?: string;
      actions: Action[];
      tone?: 'ink' | 'amber';
    };

export type PageSchema =
  | { type: 'WebPage' }
  | { type: 'AboutPage' }
  | { type: 'ContactPage' }
  | { type: 'CollectionPage' }
  | { type: 'Service'; serviceType: string; brands?: string[] };

export type PageContent = {
  slug: string;
  seoTitle: string;
  metaDescription: string;
  navLabel: string;
  parent?: { name: string; path: string };
  eyebrow: string;
  h1: string;
  lead: string;
  intro?: string[];
  heroActions?: Action[];
  image?: PageImage;
  blocks: Block[];
  primaryKeyword?: string;
  /** ISO date (YYYY-MM-DD) — when set, the hero shows the date and an Article JSON-LD is emitted. */
  datePublished?: string;
  schema: PageSchema;
};
