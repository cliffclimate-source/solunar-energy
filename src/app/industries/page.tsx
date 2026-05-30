import type { Metadata } from 'next';
import Image from 'next/image';
import { buildMetadata } from '@/lib/metadata';
import { PageHero } from '@/components/layout/PageHero';
import { Container, Section } from '@/components/ui/primitives';
import { Reveal } from '@/components/ui/Reveal';
import { CTABand } from '@/components/ui/CTABand';
import type { PageContent } from '@/content/types';
import { industries, industriesMeta } from '@/content/pages/industries';

const industriesPage: PageContent = {
  ...industriesMeta,
  heroActions: [{ label: 'Assess My Project', href: '/contact' }],
  image: {
    src: '/images/industries.png',
    alt: 'High-load Malaysian industrial facilities served by Solar + BESS',
    aspect: '4 / 3',
  },
  blocks: [],
  schema: { type: 'CollectionPage' },
};

export const metadata: Metadata = buildMetadata({
  title: industriesMeta.seoTitle,
  description: industriesMeta.metaDescription,
  path: industriesMeta.slug,
});

export default function Page() {
  return (
    <>
      <PageHero content={industriesPage} />
      <Section tone="paper">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <Reveal key={industry.title} delay={(i % 3) * 60} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-paper transition-all duration-300 hover:-translate-y-0.5 hover:shadow-card">
                  <div className="relative aspect-[16/10] overflow-hidden bg-mist">
                    <Image
                      src={industry.image}
                      alt={`${industry.title} — Solar + BESS in Malaysia`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-display text-lg font-semibold text-ink">{industry.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{industry.text}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <Section tone="mist">
        <Container>
          <Reveal>
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-paper">
                <Image
                  src="/images/industries-band.png"
                  alt="High-load Malaysian industrial and commercial facilities with rooftop solar and battery storage"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="font-display text-display-sm font-semibold tracking-tight text-ink">
                  One storage partner across every high-load sector
                </h2>
                <p className="mt-4 prose-body">
                  From factories and cold storage to data centres, malls and EV charging hubs,
                  Solunar designs Solar + BESS around each sector&apos;s load profile, peak-demand
                  pattern and resilience needs — then integrates, monitors and maintains it for the
                  long term.
                </p>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>
      <CTABand
        heading="High energy costs or peak demand pressure? Solunar can help."
        text="Solunar supports Solar + BESS across Malaysia's most energy-intensive sectors — tell us about your site and load profile."
        actions={[
          { label: 'Assess My Project', href: '/contact' },
          { label: 'See Commercial & Industrial BESS', href: '/commercial-industrial-bess-malaysia' },
        ]}
      />
    </>
  );
}
