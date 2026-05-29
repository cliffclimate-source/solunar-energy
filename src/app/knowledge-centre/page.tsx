import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import { PageHero } from '@/components/layout/PageHero';
import { Container, Section } from '@/components/ui/primitives';
import { Reveal } from '@/components/ui/Reveal';
import { CTABand } from '@/components/ui/CTABand';
import type { PageContent } from '@/content/types';
import { articles, knowledgeMeta } from '@/content/pages/knowledge';

const knowledgePage: PageContent = {
  ...knowledgeMeta,
  image: {
    src: '/images/knowledge-centre.png',
    alt: 'LFP battery modules beside an energy-management dashboard',
    aspect: '4 / 3',
  },
  blocks: [],
  schema: { type: 'CollectionPage' },
};

export const metadata: Metadata = buildMetadata({
  title: knowledgeMeta.seoTitle,
  description: knowledgeMeta.metaDescription,
  path: knowledgeMeta.slug,
});

export default function Page() {
  return (
    <>
      <PageHero content={knowledgePage} />
      <Section tone="paper">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {articles.map((article, i) => (
              <Reveal key={article.slug} delay={(i % 3) * 60} className="h-full">
                <Link
                  href={`/knowledge-centre/${article.slug}`}
                  className="group flex h-full flex-col rounded-2xl border border-line bg-paper p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/15 hover:shadow-card"
                >
                  <span className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-accent-2">
                    {article.category}
                  </span>
                  <h2 className="mt-3 font-display text-base font-semibold leading-snug text-ink">
                    {article.title}
                  </h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{article.excerpt}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                    Read article
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <CTABand
        heading="Have a specific Solar + BESS question?"
        text="Solunar helps EPCC companies, developers and asset owners turn questions into bankable storage projects."
        actions={[
          { label: 'Talk to Solunar', href: '/contact' },
          { label: 'What We Do', href: '/what-we-do' },
        ]}
        tone="ink"
      />
    </>
  );
}
