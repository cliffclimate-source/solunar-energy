import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';
import { site, footerNav } from '@/lib/site';
import { Container } from '@/components/ui/primitives';
import { Wordmark } from '@/components/ui/Wordmark';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-mist text-ink">
      <Container className="py-14 lg:py-16">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_2.75fr]">
          <div className="flex flex-col gap-5">
            <Wordmark />
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              Solunar Energy is a Solar + BESS technology distributor and system integration
              partner supporting EPCC companies, developers and asset owners in Malaysia and
              Southeast Asia.
            </p>
            <ul className="flex flex-col gap-2.5 text-sm text-muted">
              <li className="flex items-center gap-2.5">
                <MapPin className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                {site.address.locality}, Malaysia
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="flex items-center gap-2.5 transition-colors hover:text-ink"
                >
                  <Mail className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {site.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={site.contact.phoneHref}
                  className="flex items-center gap-2.5 transition-colors hover:text-ink"
                >
                  <Phone className="h-4 w-4 shrink-0 text-accent" aria-hidden="true" />
                  {site.contact.phoneDisplay}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {footerNav.map((col) => (
              <nav key={col.title} aria-label={col.title}>
                <p className="text-[0.8rem] font-semibold text-ink">{col.title}</p>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-muted transition-colors hover:text-ink"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. All rights reserved.
          </p>
          <p>Solunar supports EPCC companies — we don&rsquo;t replace them.</p>
        </div>
      </Container>
    </footer>
  );
}
