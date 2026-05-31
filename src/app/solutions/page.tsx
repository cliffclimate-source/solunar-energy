import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, AlertCircle, Check } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import { PageHero } from '@/components/layout/PageHero';
import { Container, Section } from '@/components/ui/primitives';
import { Reveal } from '@/components/ui/Reveal';
import { CTABand } from '@/components/ui/CTABand';
import type { PageContent } from '@/content/types';
import { solutionsOverviewMeta, solutionSummaries } from '@/content/pages/solutions-overview';

const solutionsPage: PageContent = {
  ...solutionsOverviewMeta,
  heroActions: [{ label: 'Get a Free Assessment', href: '/contact' }],
  image: {
    src: '/images/utility-scale-ess.png',
    alt: 'Battery energy storage containers beside a solar farm in Malaysia',
    aspect: '4 / 3',
  },
  blocks: [],
  schema: { type: 'CollectionPage' },
};

export const metadata: Metadata = buildMetadata({
  title: solutionsOverviewMeta.seoTitle,
  description: solutionsOverviewMeta.metaDescription,
  path: solutionsOverviewMeta.slug,
});

export default function Page() {
  return (
    <>
      <PageHero content={solutionsPage} />

      <Section tone="paper">
        <Container>
          <div className="grid gap-8 lg:gap-10">
            {solutionSummaries.map((s, i) => (
              <Reveal key={s.href} delay={(i % 2) * 80}>
                <article className="group grid overflow-hidden rounded-2xl border border-line bg-paper transition-all duration-300 hover:border-ink/15 hover:shadow-card lg:grid-cols-[0.9fr_1.1fr]">
                  {/* Image — alternate sides on desktop for rhythm */}
                  <div
                    className={`relative aspect-[16/10] overflow-hidden bg-mist lg:aspect-auto ${
                      i % 2 === 1 ? 'lg:order-2' : ''
                    }`}
                  >
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(min-width: 1024px) 45vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-paper/85 px-3 py-1 font-mono text-[0.6rem] uppercase tracking-eyebrow text-ink ring-1 ring-line backdrop-blur">
                      {s.category}
                    </span>
                  </div>

                  {/* Problem + Solution */}
                  <div className="flex flex-col justify-center p-7 lg:p-10">
                    <h2 className="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                      {s.title}
                    </h2>

                    <div className="mt-5 space-y-4">
                      <div className="flex gap-3">
                        <AlertCircle
                          className="mt-0.5 h-5 w-5 shrink-0 text-accent"
                          strokeWidth={2}
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-[0.7rem] font-semibold uppercase tracking-eyebrow text-accent">
                            The challenge
                          </p>
                          <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">
                            {s.problem}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <Check
                          className="mt-0.5 h-5 w-5 shrink-0 text-accent-2"
                          strokeWidth={2.5}
                          aria-hidden="true"
                        />
                        <div>
                          <p className="text-[0.7rem] font-semibold uppercase tracking-eyebrow text-accent-2">
                            How Solunar helps
                          </p>
                          <p className="mt-1 text-[0.95rem] leading-relaxed text-ink">
                            {s.solution}
                          </p>
                        </div>
                      </div>
                    </div>

                    <Link
                      href={s.href}
                      className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-ink"
                    >
                      Explore {s.title}
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTABand
        heading="Not sure which solution fits your project?"
        text="Tell Solunar your site, load and goals — we’ll point you to the right Solar + BESS approach and model the numbers, free."
        actions={[
          { label: 'Get a Free Assessment', href: '/contact' },
          { label: 'For EPCC Companies', href: '/for-epcc' },
        ]}
        tone="ink"
      />
    </>
  );
}
