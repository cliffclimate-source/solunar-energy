import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { PageHero } from '@/components/layout/PageHero';
import { Container, Section } from '@/components/ui/primitives';
import { Reveal } from '@/components/ui/Reveal';
import { IndustryCard } from '@/components/ui/Card';
import { CTABand } from '@/components/ui/CTABand';
import type { PageContent } from '@/content/types';
import { industries, industriesMeta } from '@/content/pages/industries';

const industriesPage: PageContent = {
  ...industriesMeta,
  heroActions: [{ label: 'Assess My Project', href: '/contact' }],
  image: {
    alt: 'High-load Malaysian industrial facilities served by Solar + BESS',
    prompt:
      'Photorealistic wide shot of a Malaysian industrial estate — factory, data centre and cold-storage buildings with rooftop solar and battery storage cabinets, daytime, clean and modern.',
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
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry, i) => (
              <Reveal key={industry.title} delay={(i % 3) * 60} className="h-full">
                <IndustryCard icon={industry.icon} title={industry.title}>
                  {industry.text}
                </IndustryCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <CTABand
        heading="High energy costs or peak demand pressure? Solunar can help."
        text="Solunar supports Solar + BESS across Malaysia's most energy-intensive sectors — tell us about your site and load profile."
        actions={[
          { label: 'Assess My Project', href: '/contact' },
          { label: 'See Commercial & Industrial BESS', href: '/commercial-industrial-bess-malaysia' },
        ]}
        tone="ink"
      />
    </>
  );
}
