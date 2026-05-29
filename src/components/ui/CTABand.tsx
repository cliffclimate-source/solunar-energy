import { Container } from '@/components/ui/primitives';
import { Button } from '@/components/ui/Button';
import type { Action } from '@/content/types';

/** Centered, light call-to-action band (Apple-style). */
export function CTABand({
  heading,
  text,
  actions,
}: {
  heading: string;
  text?: string;
  actions: Action[];
  /** Retained for compatibility; the band always renders light. */
  tone?: 'ink' | 'amber' | 'mist';
}) {
  return (
    <section className="relative overflow-hidden bg-mist">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-64 w-[42rem] -translate-x-1/2 rounded-full bg-accent/10 blur-[110px]" />
        <div className="absolute bottom-0 right-1/4 h-56 w-72 rounded-full bg-accent-2/10 blur-[90px]" />
      </div>
      <Container className="relative py-16 text-center lg:py-24">
        <h2 className="mx-auto max-w-3xl font-display text-display-sm font-semibold tracking-tight text-ink">
          {heading}
        </h2>
        {text && (
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-relaxed text-muted">{text}</p>
        )}
        {actions.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {actions.map((action, i) => (
              <Button
                key={`${action.href}-${i}`}
                href={action.href}
                size="lg"
                variant={i === 0 ? 'primary' : 'outline'}
                withArrow={i === 0}
              >
                {action.label}
              </Button>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
