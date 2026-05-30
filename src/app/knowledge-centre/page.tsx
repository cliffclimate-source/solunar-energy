import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import { PageHero } from '@/components/layout/PageHero';
import { Container, Section } from '@/components/ui/primitives';
import { Reveal } from '@/components/ui/Reveal';
import { CTABand } from '@/components/ui/CTABand';
import type { PageContent } from '@/content/types';
import { articles, articleImages, articleDates, knowledgeMeta } from '@/content/pages/knowledge';
import { formatDate } from '@/lib/date';

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
            {articles.map((article, i) => {
              const dateLabel = formatDate(articleDates[article.slug]);
              return (
                <Reveal key={article.slug} delay={(i % 3) * 60} className="h-full">
                  <Link
                    href={`/knowledge-centre/${article.slug}`}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/15 hover:shadow-card"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                      <Image
                        src={articleImages[article.slug] ?? '/images/home-bess-containers.png'}
                        alt={article.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <span className="absolute left-3 top-3 rounded-full bg-paper/85 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-eyebrow text-ink ring-1 ring-line backdrop-blur">
                        {article.category}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      {dateLabel && (
                        <time
                          dateTime={articleDates[article.slug]}
                          className="font-mono text-[0.62rem] uppercase tracking-eyebrow text-muted"
                        >
                          {dateLabel}
                        </time>
                      )}
                      <h2 className="mt-1.5 font-display text-base font-semibold leading-snug text-ink">
                        {article.title}
                      </h2>
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
                        {article.excerpt}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                        Read article
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </span>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
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
