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
    <section className="bg-mist">
      <Container className="py-16 text-center lg:py-24">
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
