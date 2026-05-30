import type { Metadata } from 'next';
import Image from 'next/image';
import { Check, Info } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import { PageHero } from '@/components/layout/PageHero';
import { Container, Eyebrow, Section } from '@/components/ui/primitives';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { CTABand } from '@/components/ui/CTABand';
import { Figure } from '@/components/ui/Figure';
import { getIcon } from '@/components/ui/icons';
import { JsonLd } from '@/components/seo/JsonLd';
import { productLd } from '@/lib/schema';
import type { PageContent } from '@/content/types';
import {
  productsMeta,
  products,
  productsSoftware,
  productsSoftwareBenefits,
  productsNote,
} from '@/content/pages/products';

const productsPage: PageContent = {
  ...productsMeta,
  image: {
    src: '/images/products-hero.png',
    alt: 'Solunar battery energy storage product range',
    aspect: '4 / 3',
  },
  heroActions: [{ label: 'Request Product Details', href: '/contact' }],
  blocks: [],
  schema: { type: 'CollectionPage' },
};

export const metadata: Metadata = buildMetadata({
  title: productsMeta.seoTitle,
  description: productsMeta.metaDescription,
  path: productsMeta.slug,
});

export default function Page() {
  return (
    <>
      <PageHero content={productsPage} />
      <JsonLd
        data={products.map((p) =>
          productLd({ name: p.name, description: p.description, image: p.image, category: p.category }),
        )}
      />

      <Section tone="mist">
        <Container>
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div>
                <Eyebrow>Battery Energy Storage Systems</Eyebrow>
                <h2 className="mt-4 font-display text-display-sm font-semibold tracking-tight text-ink">
                  LFP storage, integrated and Solunar-branded
                </h2>
                <p className="mt-4 prose-body">
                  Solunar selects, integrates and rebrands proven LFP battery storage platforms —
                  supplying them under the Solunar brand with PCS/EMS integration, fire safety and
                  O&amp;M for Malaysian projects.
                </p>
              </div>
              <Figure
                src="/images/products-integration.png"
                alt="Solunar battery storage cabinets being integrated and tested in a facility"
                aspect="4 / 3"
                tone="light"
              />
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.map((p, i) => (
              <Reveal key={p.id} delay={(i % 3) * 60} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper">
                  <div className="relative aspect-[4/3] overflow-hidden bg-mist">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                    <span className="absolute right-3 top-3 rounded-full bg-ink/80 px-2.5 py-1 text-[0.68rem] font-medium text-paper backdrop-blur">
                      {p.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="font-display text-lg font-semibold text-ink">{p.name}</h3>
                    <p className="mt-1.5 text-sm text-muted">{p.tagline}</p>
                    <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-line pt-5">
                      {p.specs.map((s) => (
                        <div key={s.label}>
                          <dt className="text-[0.68rem] uppercase tracking-wide text-muted">{s.label}</dt>
                          <dd className="mt-0.5 text-sm font-medium text-ink">{s.value}</dd>
                        </div>
                      ))}
                    </dl>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {p.applications.map((a) => (
                        <span key={a} className="rounded-full bg-mist px-2.5 py-1 text-xs text-ink">
                          {a}
                        </span>
                      ))}
                    </div>
                    <div className="mt-auto pt-6">
                      <Button href={`/products/${p.id}`} variant="outline" withArrow className="w-full">
                        View details
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <Section tone="paper">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <Eyebrow>EMS &amp; Cloud O&amp;M</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm font-semibold tracking-tight text-ink">
                Software-driven control. Cloud-based asset management.
              </h2>
              <p className="mt-4 prose-body">
                A BESS is only as good as the software that controls, monitors, protects and
                optimises it over time. Every Solunar system pairs on-site energy management with
                cloud-based oversight — so EPCCs, developers, funds and asset owners can operate
                storage safely, efficiently and intelligently.
              </p>
            </div>
          </Reveal>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {productsSoftware.map((s, i) => {
              const Icon = getIcon(s.icon);
              return (
                <Reveal key={s.name} delay={i * 60} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6 lg:p-7">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-ink ring-1 ring-line">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-ink">{s.name}</h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{s.description}</p>
                    <ul className="mt-5 grid gap-2.5 border-t border-line pt-5">
                      {s.capabilities.map((c) => (
                        <li key={c} className="flex gap-2.5">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-accent-2"
                            aria-hidden="true"
                            strokeWidth={2.5}
                          />
                          <span className="text-sm leading-relaxed text-ink">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <Reveal className="mt-6">
            <div className="rounded-2xl border border-line bg-mist/60 p-6 text-center lg:p-7">
              <p className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-muted">
                Local control · Cloud oversight
              </p>
              <p className="mx-auto mt-3 max-w-2xl text-[0.95rem] leading-relaxed text-ink">
                The EMS makes fast, real-time decisions on site from live battery, solar, grid and
                load data. The cloud platform adds remote visibility, long-term analytics, alarms,
                reporting and portfolio oversight — together, a complete software layer for modern
                BESS projects.
              </p>
            </div>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {productsSoftwareBenefits.map((b, i) => {
              const Icon = getIcon(b.icon);
              return (
                <Reveal key={b.audience} delay={i * 60} className="h-full">
                  <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-6">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-mist text-ink ring-1 ring-line">
                        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <h3 className="font-display text-lg font-semibold text-ink">{b.audience}</h3>
                    </div>
                    <p className="mt-4 text-[0.95rem] leading-relaxed text-muted">{b.lead}</p>
                    <ul className="mt-4 grid gap-2.5">
                      {b.items.map((item) => (
                        <li key={item} className="flex gap-2.5">
                          <Check
                            className="mt-0.5 h-4 w-4 shrink-0 text-accent-2"
                            aria-hidden="true"
                            strokeWidth={2.5}
                          />
                          <span className="text-sm leading-relaxed text-ink">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              );
            })}
          </div>

          <p className="mt-10 flex max-w-3xl gap-3 rounded-xl border border-line bg-mist/70 px-4 py-3 text-sm italic leading-relaxed text-muted">
            <Info className="mt-0.5 h-4 w-4 shrink-0 not-italic text-accent" aria-hidden="true" />
            <span>{productsNote}</span>
          </p>
        </Container>
      </Section>

      <CTABand
        heading="Need the right storage product for your project?"
        text="Tell Solunar your capacity, power and site requirements — we'll recommend and integrate the right configuration."
        actions={[
          { label: 'Request Product Details', href: '/contact' },
          { label: 'How We Support EPCCs', href: '/bess-partner-for-epcc' },
        ]}
      />
    </>
  );
}
