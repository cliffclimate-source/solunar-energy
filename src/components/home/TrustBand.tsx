import { Container, Eyebrow, Section } from '@/components/ui/primitives';
import { Reveal } from '@/components/ui/Reveal';
import { getIcon } from '@/components/ui/icons';
import { homeTrust } from '@/content/home';

const h2 = 'font-display text-display-sm font-semibold tracking-tight text-balance';

/** Why-work-with-us band: stat row + trust pillars + how-we-work timeline. */
export function TrustBand() {
  return (
    <Section tone="paper">
      <Container>
        <Reveal>
          <div className="max-w-2xl">
            <Eyebrow>{homeTrust.eyebrow}</Eyebrow>
            <h2 className={`mt-4 text-ink ${h2}`}>{homeTrust.heading}</h2>
            <p className="mt-4 prose-body">{homeTrust.lead}</p>
          </div>
        </Reveal>

        {/* Stat row */}
        <Reveal className="mt-12">
          <dl className="grid gap-x-6 gap-y-8 rounded-2xl border border-line bg-mist/50 p-8 sm:grid-cols-2 lg:grid-cols-4">
            {homeTrust.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-1.5">
                <dt className="font-mono text-3xl font-medium tracking-tight text-ink sm:text-4xl">
                  {stat.value}
                </dt>
                <dd className="text-sm leading-snug text-muted">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Trust pillars */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {homeTrust.pillars.map((pillar, i) => {
            const Icon = getIcon(pillar.icon);
            return (
              <Reveal key={pillar.title} delay={i * 70} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-line bg-paper p-7">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent/10 text-accent ring-1 ring-accent/20">
                    <Icon className="h-5 w-5" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold text-ink">{pillar.title}</h3>
                  <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">{pillar.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* How we work — process timeline */}
        <Reveal className="mt-16">
          <div className="max-w-2xl">
            <Eyebrow>{homeTrust.process.eyebrow}</Eyebrow>
            <h2 className={`mt-4 text-ink ${h2}`}>{homeTrust.process.heading}</h2>
          </div>
        </Reveal>
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {homeTrust.process.steps.map((step, i) => (
            <Reveal key={step.title} delay={(i % 5) * 60} className="h-full">
              <li className="flex h-full flex-col">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-ink font-mono text-sm font-medium text-paper">
                    {i + 1}
                  </span>
                  {i < homeTrust.process.steps.length - 1 && (
                    <span className="hidden h-px flex-1 bg-line lg:block" aria-hidden="true" />
                  )}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{step.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
