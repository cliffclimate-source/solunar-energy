import Image from 'next/image';
import { Container } from '@/components/ui/primitives';
import { Button } from '@/components/ui/Button';
import { homeHero } from '@/content/home';

/**
 * Full-bleed homepage hero: a cinematic Solar + BESS photograph fills the
 * background with the headline and CTAs overlaid on a dark scrim for legibility.
 */
export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink">
      {/* Background photograph */}
      <Image
        src="/images/hero-bg.png"
        alt="Battery energy storage containers beside a solar farm at twilight with a Malaysian city skyline"
        fill
        priority
        sizes="100vw"
        className="object-cover object-center"
      />

      {/* Scrims: darken bottom-left for text, add brand-tinted depth */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/40 to-transparent"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-1/4 top-1/3 h-[30rem] w-[30rem] rounded-full bg-accent/15 blur-[130px]"
      />

      <Container className="relative flex min-h-[92vh] flex-col justify-end pb-16 pt-32 sm:min-h-[90vh] sm:justify-center sm:pb-20 sm:pt-36 lg:min-h-[82vh]">
        <div className="max-w-3xl">
          <span className="eyebrow text-accent-2">{homeHero.eyebrow}</span>
          <h1 className="mt-4 font-display text-display font-semibold tracking-tight text-balance text-paper drop-shadow-sm">
            {homeHero.h1}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-paper/85 sm:text-xl">
            {homeHero.lead}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            {homeHero.actions.map((action, i) => (
              <Button
                key={action.href}
                href={action.href}
                size="lg"
                variant={i === 0 ? 'primary' : 'outline'}
                onDark
                withArrow={i === 0}
              >
                {action.label}
              </Button>
            ))}
          </div>

          {/* Trust strip */}
          <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-paper/15 pt-6">
            {homeHero.stats.map((stat) => (
              <div key={stat.value} className="flex items-baseline gap-2">
                <span className="font-display text-lg font-semibold text-paper">{stat.value}</span>
                <span className="text-xs leading-tight text-paper/60">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
