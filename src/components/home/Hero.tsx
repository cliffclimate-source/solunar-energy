import { Battery, Cpu, Network, Sun, Zap, type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Container } from '@/components/ui/primitives';
import { Button } from '@/components/ui/Button';
import { GridGlow } from '@/components/visuals/Decor';
import { homeHero } from '@/content/home';

type RailNode = {
  icon: LucideIcon;
  label: string;
  meta: string;
  bar?: number;
  accent?: boolean;
};

const railNodes: RailNode[] = [
  { icon: Sun, label: 'Solar generation', meta: 'PV array' },
  { icon: Zap, label: 'PCS', meta: 'DC ⇄ AC power flow' },
  { icon: Battery, label: 'Battery — LFP', meta: 'SoC 78%', bar: 78 },
  { icon: Cpu, label: 'EMS', meta: 'Charge / discharge logic', accent: true },
  { icon: Network, label: 'Grid & site load', meta: 'Peak shaving' },
];

/**
 * Technical "system architecture" visual standing in for hero photography.
 * TODO (pre-launch): swap for a real energy-infrastructure photograph with a
 * dark navy gradient overlay if preferred.
 */
function SystemRail() {
  return (
    <div className="relative rounded-2xl border border-paper/10 bg-ink-2/70 p-6 shadow-2xl backdrop-blur-sm sm:p-7">
      <div className="flex items-center justify-between">
        <span className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-accent-2">
          BESS System Architecture
        </span>
        <span className="flex items-center gap-1.5 font-mono text-[0.62rem] uppercase tracking-eyebrow text-paper/40">
          <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />
          Monitored
        </span>
      </div>
      <ol className="mt-6 space-y-0">
        {railNodes.map((node, i) => {
          const Icon = node.icon;
          const last = i === railNodes.length - 1;
          return (
            <li key={node.label} className="relative flex gap-4 pb-5 last:pb-0">
              {!last && (
                <span className="absolute left-[18px] top-10 h-[calc(100%-1.5rem)] w-px bg-paper/10" aria-hidden="true" />
              )}
              <span
                className={cn(
                  'relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border',
                  node.accent
                    ? 'border-accent/40 bg-accent/15 text-accent'
                    : 'border-paper/15 bg-paper/5 text-accent-2',
                )}
              >
                <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
              </span>
              <div className="flex-1 pt-1.5">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm font-medium text-paper">{node.label}</span>
                  <span className="font-mono text-[0.65rem] text-paper/45">{node.meta}</span>
                </div>
                {node.bar !== undefined && (
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-paper/10">
                    <div
                      className="h-full rounded-full bg-accent-2"
                      style={{ width: `${node.bar}%` }}
                    />
                  </div>
                )}
              </div>
            </li>
          );
        })}
      </ol>
      <p className="mt-5 border-t border-paper/10 pt-4 text-center font-mono text-[0.62rem] uppercase tracking-eyebrow text-paper/40">
        Integrated &amp; maintained by Solunar
      </p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <GridGlow />
      <Container className="relative pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-28 lg:pt-44">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div>
            <span className="eyebrow text-accent-2">{homeHero.eyebrow}</span>
            <h1 className="mt-6 font-display text-display font-semibold tracking-tight text-balance">
              {homeHero.h1}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper/80 sm:text-xl">
              {homeHero.lead}
            </p>
            <p className="mt-5 max-w-xl border-l-2 border-accent pl-4 text-[0.95rem] leading-relaxed text-paper/65">
              {homeHero.support}
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
          </div>
          <div className="lg:pl-4">
            <SystemRail />
          </div>
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-x-6 gap-y-8 border-t border-paper/10 pt-10 sm:grid-cols-4 lg:mt-20">
          {homeHero.stats.map((stat) => (
            <div key={stat.value} className="flex flex-col gap-1.5">
              <dt className="font-mono text-2xl font-medium tracking-tight text-paper sm:text-[1.6rem]">
                {stat.value}
              </dt>
              <dd className="text-sm leading-snug text-paper/55">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
