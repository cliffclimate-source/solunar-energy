import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Check } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import { Container, Eyebrow, Section } from '@/components/ui/primitives';
import { Reveal } from '@/components/ui/Reveal';
import { Button } from '@/components/ui/Button';
import { ComparisonTable } from '@/components/ui/ComparisonTable';
import { CTABand } from '@/components/ui/CTABand';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { Figure } from '@/components/ui/Figure';
import { getIcon } from '@/components/ui/icons';
import { Hero } from '@/components/home/Hero';
import { BrandStrip } from '@/components/home/BrandStrip';
import { GridGlow } from '@/components/visuals/Decor';
import {
  homeFaqs,
  homeFinalCta,
  homeMeta,
  homeOm,
  homePositioning,
  homeServices,
  homeSolarVsBess,
  homeTechnology,
} from '@/content/home';

export const metadata: Metadata = buildMetadata({
  title: homeMeta.seoTitle,
  description: homeMeta.metaDescription,
  path: '/',
});

const h2 = 'font-display text-display-sm font-semibold tracking-tight text-balance';

const malaysiaPoints = [
  'Kuala Lumpur–based team',
  'Malaysia & Southeast Asia coverage',
  'EPCC, developer & asset-owner focus',
  'Building towards local BESS assembly',
];

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Section 2 — Positioning */}
      <Section tone="paper">
        <Container>
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
              <div>
                <Eyebrow>{homePositioning.eyebrow}</Eyebrow>
                <h2 className={`mt-4 text-ink ${h2}`}>{homePositioning.heading}</h2>
                <div className="mt-6 space-y-4">
                  {homePositioning.paragraphs.map((p, i) => (
                    <p key={i} className="prose-body">
                      {p}
                    </p>
                  ))}
                </div>
                <blockquote className="mt-6 border-l-2 border-accent pl-5 font-display text-xl font-medium leading-snug tracking-tight text-balance text-ink sm:text-2xl">
                  {homePositioning.quote}
                </blockquote>
              </div>
              <Figure
                src="/images/home-positioning.png"
                alt="Solunar partnering with an EPCC contractor at a solar-plus-storage site in Malaysia"
                aspect="4 / 3"
                tone="light"
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Section 3 — What Solunar Provides + technologies */}
      <Section tone="mist">
        <Container>
          <Reveal>
            <div className="max-w-2xl">
              <Eyebrow>{homeServices.eyebrow}</Eyebrow>
              <h2 className={`mt-4 text-ink ${h2}`}>{homeServices.heading}</h2>
              <p className="mt-4 prose-body">{homeServices.lead}</p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {homeServices.cards.map((card, i) => {
              const Icon = getIcon(card.icon);
              return (
                <Reveal key={card.href} delay={(i % 3) * 60} className="h-full">
                  <Link
                    href={card.href}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-all duration-300 hover:-translate-y-0.5 hover:border-ink/15 hover:shadow-card"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                      <Image
                        src={card.image}
                        alt={card.title}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                      />
                      <span className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-paper/90 text-ink ring-1 ring-line backdrop-blur">
                        <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                      </span>
                      <span className="absolute right-3 top-3 rounded-full bg-ink/55 px-2 py-0.5 font-mono text-[0.62rem] text-paper/90 backdrop-blur">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex flex-1 flex-col p-6">
                      <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                        {card.title}
                      </h3>
                      <p className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-muted">
                        {card.text}
                      </p>
                      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-ink">
                        Learn more
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
          <Reveal className="mt-14">
            <div className="border-t border-line pt-10">
              <p className="text-center font-mono text-[0.65rem] uppercase tracking-eyebrow text-muted">
                Technologies we integrate
              </p>
              <div className="mt-6">
                <BrandStrip />
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Section 4 — Solar vs BESS */}
      <Section tone="paper">
        <Container>
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-16">
              <div className="max-w-2xl">
                <Eyebrow>{homeSolarVsBess.eyebrow}</Eyebrow>
                <h2 className={`mt-4 text-ink ${h2}`}>{homeSolarVsBess.heading}</h2>
                <p className="mt-4 prose-body">{homeSolarVsBess.lead}</p>
              </div>
              <Figure
                src="/images/home-solar-vs-bess.png"
                alt="Solar PV array on the left and a row of battery energy storage containers on the right"
                aspect="4 / 3"
                tone="light"
              />
            </div>
            <div className="mt-10">
              <ComparisonTable
                columns={homeSolarVsBess.columns}
                rows={homeSolarVsBess.rows}
                caption={homeSolarVsBess.caption}
              />
            </div>
          </Reveal>
        </Container>
      </Section>

      {/* Malaysia context band */}
      <Section tone="mist">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <div>
                <Eyebrow>Malaysia &amp; Southeast Asia</Eyebrow>
                <h2 className={`mt-4 text-ink ${h2}`}>Built for the Malaysian energy market</h2>
                <p className="mt-5 prose-body">
                  Solunar Energy is based in Kuala Lumpur and supports Solar + BESS projects across
                  Malaysia and Southeast Asia — for EPCC companies, developers and asset owners.
                </p>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {malaysiaPoints.map((point) => (
                    <li key={point} className="flex gap-3">
                      <Check
                        className="mt-0.5 h-4 w-4 shrink-0 text-accent-2"
                        aria-hidden="true"
                        strokeWidth={2.5}
                      />
                      <span className="text-[0.95rem] text-ink">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <Figure
                src="/images/home-malaysia.png"
                alt="Kuala Lumpur city skyline at golden hour with rooftop solar on commercial buildings"
                aspect="4 / 3"
                tone="light"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Sections 5–8 — Technology & integration (dark emphasis) */}
      <Section tone="ink" className="relative overflow-hidden">
        <GridGlow />
        <Container className="relative">
          <Reveal>
            <div className="max-w-2xl">
              <Eyebrow className="text-accent-2">{homeTechnology.eyebrow}</Eyebrow>
              <h2 className={`mt-4 text-paper ${h2}`}>{homeTechnology.heading}</h2>
            </div>
          </Reveal>
          <Reveal className="mt-12">
            <Figure
              src="/images/home-technology-integration.png"
              tone="dark"
              aspect="16 / 7"
              alt="Battery cabinets integrated with PCS skids and an EMS control screen in a BESS facility"
              caption="Battery, PCS and EMS integrated and monitored as one system."
              sizes="(min-width: 1024px) 80vw, 100vw"
            />
          </Reveal>
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {homeTechnology.items.map((item, i) => {
              const Icon = getIcon(item.icon);
              return (
                <Reveal key={item.href} delay={i * 60} className="h-full">
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col rounded-2xl border border-paper/10 bg-ink-2/60 p-7 transition-all duration-300 hover:border-paper/25 hover:bg-ink-2"
                  >
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent-2/10 text-accent-2 ring-1 ring-accent-2/20">
                      <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-display text-lg font-semibold text-paper">{item.title}</h3>
                    <div className="mt-3 space-y-3">
                      {item.paragraphs.map((p, j) => (
                        <p key={j} className="text-[0.92rem] leading-relaxed text-paper/65">
                          {p}
                        </p>
                      ))}
                    </div>
                    {item.note && (
                      <p className="mt-4 rounded-lg border border-paper/10 bg-paper/[0.03] px-3.5 py-2.5 text-xs italic leading-relaxed text-paper/55">
                        {item.note}
                      </p>
                    )}
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent">
                      Learn more
                      <ArrowRight
                        className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Section 9 — O&M */}
      <Section tone="mist">
        <Container>
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
            <Reveal>
              <div>
                <Eyebrow>{homeOm.eyebrow}</Eyebrow>
                <h2 className={`mt-4 text-ink ${h2}`}>{homeOm.heading}</h2>
                <div className="mt-6 space-y-4">
                  {homeOm.paragraphs.map((p, i) => (
                    <p key={i} className="prose-body">
                      {p}
                    </p>
                  ))}
                </div>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {homeOm.scope.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-line bg-paper px-3 py-1.5 text-xs text-ink"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                <Button href={homeOm.href} variant="outline" className="mt-7" withArrow>
                  Explore O&amp;M for ESS
                </Button>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <Figure
                src="/images/home-controlroom.png"
                alt="Energy control room monitoring battery storage state of charge and grid data"
                aspect="4 / 3"
                tone="light"
              />
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Why it matters — full-bleed image band */}
      <section className="relative overflow-hidden bg-ink">
        <Image
          src="/images/home-why.png"
          alt="Solar farm with battery storage at dusk and a city skyline in Malaysia"
          fill
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/75 to-ink/40" />
        <Container className="relative py-24 text-center lg:py-32">
          <span className="eyebrow text-accent-2">Why it matters</span>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-display-sm font-semibold tracking-tight text-balance text-paper">
            Energy storage is becoming critical infrastructure for Malaysia
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-paper/75">
            Rising maximum-demand charges, fast-growing solar, grid constraints and the need for
            resilience are turning BESS from optional to essential — for factories, developers and
            the grid alike.
          </p>
        </Container>
      </section>

      {/* Section 10 — Final CTA */}
      <CTABand
        heading={homeFinalCta.heading}
        text={homeFinalCta.text}
        actions={homeFinalCta.actions}
        tone="ink"
      />

      {/* Homepage FAQ */}
      <Section tone="paper">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <Reveal>
              <div className="max-w-sm">
                <Eyebrow>FAQ</Eyebrow>
                <h2 className={`mt-4 text-ink ${h2}`}>Frequently asked questions</h2>
                <p className="mt-4 prose-body">
                  Quick answers about what Solunar Energy is — and what it is not.
                </p>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <FAQAccordion items={homeFaqs} />
            </Reveal>
          </div>
        </Container>
      </Section>
    </>
  );
}
