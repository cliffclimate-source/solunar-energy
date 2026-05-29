import type { Metadata } from 'next';
import { Check, Mail, MapPin, Phone } from 'lucide-react';
import { buildMetadata } from '@/lib/metadata';
import { PageHero } from '@/components/layout/PageHero';
import { Container, Section } from '@/components/ui/primitives';
import { ContactForm } from '@/components/forms/ContactForm';
import { site } from '@/lib/site';
import type { PageContent } from '@/content/types';
import { contactMeta, contactReasons } from '@/content/pages/contact';

const contactPage: PageContent = {
  ...contactMeta,
  blocks: [],
  schema: { type: 'ContactPage' },
};

export const metadata: Metadata = buildMetadata({
  title: contactMeta.seoTitle,
  description: contactMeta.metaDescription,
  path: contactMeta.slug,
});

export default function Page() {
  return (
    <>
      <PageHero content={contactPage} />
      <Section tone="paper">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
            <div>
              <p className="prose-body max-w-md">Contact Solunar for:</p>
              <ul className="mt-5 grid gap-3">
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
                      href={`mailto:${site.contact.email}`}
                      className="flex items-center gap-3 transition-colors hover:text-accent-2"
                    >
                      <Mail className="h-4 w-4 shrink-0 text-accent-2" aria-hidden="true" />
                      {site.contact.email}
                    </a>
                  </li>
                  <li>
                    <a
                      href={site.contact.phoneHref}
                      className="flex items-center gap-3 transition-colors hover:text-accent-2"
                    >
                      <Phone className="h-4 w-4 shrink-0 text-accent-2" aria-hidden="true" />
                      {site.contact.phoneDisplay}
                    </a>
                  </li>
                  <li className="flex items-center gap-3 text-muted">
                    <MapPin className="h-4 w-4 shrink-0 text-accent-2" aria-hidden="true" />
                    {site.address.locality}, Malaysia
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
