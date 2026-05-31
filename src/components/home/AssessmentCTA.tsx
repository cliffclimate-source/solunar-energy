import Link from 'next/link';
import { ArrowRight, Check } from 'lucide-react';
import { Container, Eyebrow } from '@/components/ui/primitives';
import { Reveal } from '@/components/ui/Reveal';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { site } from '@/lib/site';
import { homeAssessment } from '@/content/home';

/**
 * Lead-magnet band: a free, no-obligation feasibility assessment offer with a
 * value bullet list, primary CTA, WhatsApp option and reassurance microcopy.
 */
export function AssessmentCTA() {
  return (
    <section className="relative overflow-hidden bg-ink">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-1/2 h-96 w-96 -translate-y-1/2 rounded-full bg-accent/20 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-accent-2/15 blur-[120px]"
      />
      <Container className="relative py-16 lg:py-24">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16">
            <div>
              <Eyebrow className="text-accent-2">{homeAssessment.eyebrow}</Eyebrow>
              <h2 className="mt-4 font-display text-display-sm font-semibold tracking-tight text-balance text-paper">
                {homeAssessment.heading}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-paper/80">{homeAssessment.text}</p>
              <ul className="mt-7 grid gap-3 sm:grid-cols-1">
                {homeAssessment.bullets.map((b) => (
                  <li key={b} className="flex gap-3">
                    <Check
                      className="mt-0.5 h-5 w-5 shrink-0 text-accent-2"
                      strokeWidth={2.5}
                      aria-hidden="true"
                    />
                    <span className="text-[0.95rem] text-paper/90">{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl border border-paper/15 bg-paper/[0.04] p-7 backdrop-blur-sm lg:p-8">
              <p className="font-display text-lg font-semibold text-paper">
                Start with a no-cost review
              </p>
              <p className="mt-2 text-sm leading-relaxed text-paper/65">
                Send your electricity bill, load profile or project brief — we&rsquo;ll handle the
                rest.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-ink transition-all duration-200 hover:bg-accent/90"
                >
                  Request My Free Assessment
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </Link>
                <a
                  href={site.contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-paper/25 px-6 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-paper/10"
                >
                  <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
                  WhatsApp Us
                </a>
              </div>
              <p className="mt-4 text-center text-xs text-paper/55">{homeAssessment.reassurance}</p>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
