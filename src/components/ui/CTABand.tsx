import { cn } from '@/lib/cn';
import { Container } from '@/components/ui/primitives';
import { Button } from '@/components/ui/Button';
import type { Action } from '@/content/types';

/** Full-width call-to-action band, dark (ink) or solar-amber. */
export function CTABand({
  heading,
  text,
  actions,
  tone = 'ink',
}: {
  heading: string;
  text?: string;
  actions: Action[];
  tone?: 'ink' | 'amber';
}) {
  const amber = tone === 'amber';
  return (
    <section className={cn(amber ? 'bg-accent text-ink' : 'bg-ink text-paper')}>
      <Container className="py-16 lg:py-20">
        <div className="flex flex-col items-start gap-9 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h2
              className={cn(
                'font-display text-display-sm font-semibold tracking-tight text-balance',
                amber ? 'text-ink' : 'text-paper',
              )}
            >
              {heading}
            </h2>
            {text && (
              <p className={cn('mt-4 text-lg leading-relaxed', amber ? 'text-ink/80' : 'text-paper/70')}>
                {text}
              </p>
            )}
          </div>
          {actions.length > 0 && (
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap lg:shrink-0">
              {actions.map((action, i) => {
                if (amber) {
                  return (
                    <Button
                      key={`${action.href}-${i}`}
                      href={action.href}
                      size="lg"
                      variant={i === 0 ? 'secondary' : 'outline'}
                      className={i === 0 ? undefined : 'border-ink/25 text-ink hover:bg-ink/5'}
                      withArrow={i === 0}
                    >
                      {action.label}
                    </Button>
                  );
                }
                return (
                  <Button
                    key={`${action.href}-${i}`}
                    href={action.href}
                    size="lg"
                    variant={i === 0 ? 'primary' : 'outline'}
                    onDark
                    withArrow={i === 0}
                  >
                    {action.label}
                  </Button>
                );
              })}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
