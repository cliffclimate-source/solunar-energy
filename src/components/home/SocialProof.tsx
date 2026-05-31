import { Container, Eyebrow, Section } from '@/components/ui/primitives';
import { Reveal } from '@/components/ui/Reveal';
import { homeProof } from '@/content/home';

const h2 = 'font-display text-display-sm font-semibold tracking-tight text-balance';

/** Social proof: trusted-technology strip + representative testimonial cards. */
export function SocialProof() {
  return (
    <Section tone="mist">
      <Container>
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow>{homeProof.eyebrow}</Eyebrow>
            <h2 className={`mt-4 text-ink ${h2}`}>{homeProof.heading}</h2>
            <p className="mt-4 prose-body mx-auto">{homeProof.lead}</p>
          </div>
        </Reveal>

        {/* Technology trust strip */}
        <Reveal className="mt-10">
          <ul className="flex flex-wrap items-center justify-center gap-3">
            {homeProof.brands.map((brand) => (
              <li
                key={brand}
                className="rounded-full border border-line bg-paper px-5 py-2.5 font-logo text-sm font-bold uppercase tracking-wide text-ink/80"
              >
                {brand}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Testimonials */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {homeProof.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 70} className="h-full">
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-paper p-7">
                <span className="font-display text-4xl leading-none text-accent" aria-hidden="true">
                  &ldquo;
                </span>
                <blockquote className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-ink">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-5 border-t border-line pt-4">
                  <span className="block text-sm font-semibold text-ink">{t.name}</span>
                  <span className="mt-0.5 block text-xs text-muted">{t.role}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <p className="mt-6 text-center text-xs italic text-muted">{homeProof.note}</p>
      </Container>
    </Section>
  );
}
