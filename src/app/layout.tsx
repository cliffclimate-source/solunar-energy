import type { Metadata, Viewport } from 'next';
import { Inter, Quicksand } from 'next/font/google';
import { site } from '@/lib/site';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { FooterGate } from '@/components/layout/FooterGate';
import { WhatsAppButton } from '@/components/layout/WhatsAppButton';
import { JsonLd } from '@/components/seo/JsonLd';
import { organizationLd, localBusinessLd } from '@/lib/schema';
import './globals.css';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

// Brand wordmark typeface (monoline geometric) — matches the Solunar logo.
const logo = Quicksand({
  subsets: ['latin'],
  variable: '--font-logo',
  display: 'swap',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: 'BESS System Integrator Malaysia | Solunar Energy',
    template: '%s | Solunar Energy',
  },
  description: site.description,
  applicationName: site.legalName,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  robots: { index: true, follow: true },
  openGraph: {
    type: 'website',
    siteName: site.legalName,
    locale: site.locale,
    images: [
      {
        url: '/og/og-home.png',
        width: 1200,
        height: 630,
        alt: 'Solunar Energy — Solar + BESS technology partner in Malaysia',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og/og-home.png'],
  },
  icons: {
    icon: [{ url: '/favicon.svg', type: 'image/svg+xml' }],
  },
};

export const viewport: Viewport = {
  themeColor: '#0A1A2F',
  colorScheme: 'light',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${logo.variable}`}>
      <body>
        <JsonLd data={[organizationLd(), localBusinessLd()]} />
        <a
          href="#main"
          className="sr-only z-[100] rounded-full bg-ink px-5 py-2 text-sm font-medium text-paper focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <FooterGate>
          <Footer />
        </FooterGate>
        <WhatsAppButton />
      </body>
    </html>
  );
}
