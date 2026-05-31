import type { Metadata } from 'next';
import { Check, Mail, MapPin, Phone } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import { PageHero } from '@/components/layout/PageHero';
import { Container, Section } from '@/components/ui/primitives';
import { ContactForm } from '@/components/forms/ContactForm';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
import { getSiteSettings } from '@/sanity/lib/settings';
import type { PageContent } from '@/content/types';
import { contactMeta, contactReasons, contactPromises } from '@/content/pages/contact';

const contactPage: PageContent = {
  ...contactMeta,
  image: {
    src: '/images/contact-hero.png',
    alt: 'A Solunar energy consultant discussing a Solar + BESS project with a client in Kuala Lumpur',
    aspect: '4 / 3',
  },
  blocks: [],
  schema: { type: 'ContactPage' },
};

export const metadata: Metadata = buildMetadata({
  title: contactMeta.seoTitle,
  description: contactMeta.metaDescription,
  path: contactMeta.slug,
});

export default async function Page() {
  const s = await getSiteSettings();
  return (
    <>
      <PageHero content={contactPage} />
      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              {/* Reassurance — what you get by reaching out */}
              <ul className="grid gap-4">
                {contactPromises.map((p) => (
                  <li key={p.title} className="flex gap-3">
                    <Check
                      className="mt-1 h-5 w-5 shrink-0 text-accent-2"
                      aria-hidden="true"
                      strokeWidth={2.5}
                    />
                    <div>
                      <p className="text-[0.95rem] font-semibold text-ink">{p.title}</p>
                      <p className="mt-0.5 text-sm leading-relaxed text-muted">{p.text}</p>
                    </div>
                  </li>
                ))}
              </ul>

              <p className="mt-10 prose-body max-w-md">Contact Solunar for:</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {contactReasons.map((reason) => (
                  <li key={reason} className="flex gap-3">
                    <Check
                      className="mt-0.5 h-4 w-4 shrink-0 text-accent-2"
                      aria-hidden="true"
                      strokeWidth={2.5}
                    />
                    <span className="text-[0.95rem] text-ink">{reason}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10 border-t border-line pt-8">
                <p className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-muted">
                  Reach Solunar directly
                </p>
                <ul className="mt-4 flex flex-col gap-3 text-[0.95rem] text-ink">
                  <li>
                    <a
                      href={`mailto:${s.email}`}
                      className="flex items-center gap-3 transition-colors hover:text-accent-2"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-accent-2" aria-hidden="true" />
                      {s.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={s.phoneHref}
                      className="flex items-center gap-3 transition-colors hover:text-accent-2"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-accent-2" aria-hidden="true" />
                      {s.phoneDisplay}
                    </a>
                  </li>
                  <li>
                    <a
                      href={s.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 transition-colors hover:text-[#25D366]"
                    >
                      <WhatsAppIcon className="h-4 w-4 shrink-0 text-[#25D366]" />
                      WhatsApp {s.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-start gap-3 text-muted">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-2" aria-hidden="true" />
                    <span>
                      {s.address.streetAddress}, {s.address.postalCode}{' '}
                      {s.address.locality}, Malaysia
                    </span>
                  </li>
                </ul>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </Section>
    </>
  );
}
