import { Container } from '@/components/ui/primitives';
import { Button } from '@/components/ui/Button';
import { Figure } from '@/components/ui/Figure';
import { homeHero } from '@/content/home';

/** Light, centered homepage hero with Sigenergy-style energy glows. */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-12%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />
        <div className="absolute right-[6%] top-[16%] h-72 w-72 rounded-full bg-accent-2/10 blur-[110px]" />
      </div>
      <Container className="relative pb-14 pt-28 text-center sm:pt-32 lg:pb-20 lg:pt-40">
        <span className="eyebrow text-gradient">{homeHero.eyebrow}</span>
        <h1 className="mx-auto mt-4 max-w-4xl font-display text-display font-semibold tracking-tight text-ink">
          {homeHero.h1}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted sm:text-xl">
          {homeHero.lead}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {homeHero.actions.map((action, i) => (
            <Button
              key={action.href}
              href={action.href}
              size="lg"
              variant={i === 0 ? 'primary' : 'outline'}
              withArrow={i === 0}
            >
              {action.label}
            </Button>
          ))}
        </div>
        <div className="relative mx-auto mt-14 max-w-5xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-tr from-accent/15 via-transparent to-accent-2/15 blur-2xl"
          />
          <Figure
            src="/images/home-bess-containers.png"
            aspect="16 / 9"
            tone="light"
            priority
            alt="Battery energy storage system containers with solar at an industrial site in Malaysia"
            sizes="(min-width: 1024px) 70vw, 100vw"
          />
        </div>
      </Container>
    </section>
  );
}
