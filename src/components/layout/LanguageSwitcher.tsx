'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Check, Globe } from 'lucide-react';
import { cn } from '@/lib/cn';

type Locale = 'en' | 'zh' | 'ms';

const LANGS: { code: Locale; label: string; short: string }[] = [
  { code: 'en', label: 'English', short: 'EN' },
  { code: 'zh', label: '中文', short: '中文' },
  { code: 'ms', label: 'Bahasa Malaysia', short: 'BM' },
];

// Pages that exist in the localized (zh/ms) versions. Used to map equivalents
// and to decide where a language link should point.
const LOCALIZED_PATHS = [
  '',
  '/about',
  '/for-epcc',
  '/solutions',
  '/contact',
  // Solutions
  '/commercial-industrial-bess-malaysia',
  '/peak-shaving-malaysia',
  '/power-expansion-bess',
  '/utility-scale-ess-malaysia',
  '/bess-om-malaysia',
  '/bess-safety',
  '/solar-bess-developers',
  '/local-bess-assembly',
  // Technology
  '/byd-battery-malaysia',
  '/goodwe-inverter-malaysia',
  '/eve-bess-integration',
  '/multi-brand-bess-integration',
  '/pcs-ems-system-integration',
];

/** Detect the current locale and the English-equivalent base path. */
function parse(pathname: string): { locale: Locale; base: string } {
  if (pathname === '/zh' || pathname.startsWith('/zh/')) {
    return { locale: 'zh', base: pathname.replace(/^\/zh/, '') || '' };
  }
  if (pathname === '/ms' || pathname.startsWith('/ms/')) {
    return { locale: 'ms', base: pathname.replace(/^\/ms/, '') || '' };
  }
  return { locale: 'en', base: pathname === '/' ? '' : pathname };
}

/** Build the destination URL for a target locale from an English base path. */
function hrefFor(locale: Locale, base: string): string {
  // If the page isn't localized, point to that language's home instead of a 404.
  const supported = LOCALIZED_PATHS.includes(base);
  if (locale === 'en') return base === '' ? '/' : base;
  if (!supported) return `/${locale}`;
  return `/${locale}${base}`;
}

export function LanguageSwitcher({ variant = 'desktop' }: { variant?: 'desktop' | 'mobile' }) {
  const pathname = usePathname() || '/';
  const { locale, base } = parse(pathname);
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const current = LANGS.find((l) => l.code === locale) ?? LANGS[0];

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    return () => document.removeEventListener('mousedown', onDocClick);
  }, []);

  if (variant === 'mobile') {
    return (
      <div className="flex items-center gap-2">
        {LANGS.map((l) => (
          <Link
            key={l.code}
            href={hrefFor(l.code, base)}
            className={cn(
              'rounded-full border px-3 py-1.5 text-sm font-medium transition-colors',
              l.code === locale
                ? 'border-ink bg-ink text-paper'
                : 'border-line text-ink hover:bg-mist',
            )}
          >
            {l.label}
          </Link>
        ))}
      </div>
    );
  }

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="Change language"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-[0.92rem] font-medium text-ink/70 transition-colors hover:text-ink"
      >
        <Globe className="h-4 w-4" aria-hidden="true" />
        {current.short}
      </button>
      <div
        className={cn(
          'absolute right-0 top-full pt-2 transition-all duration-200',
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0',
        )}
      >
        <ul className="w-44 rounded-2xl border border-line bg-paper/95 p-2 shadow-lift backdrop-blur-xl">
          {LANGS.map((l) => (
            <li key={l.code}>
              <Link
                href={hrefFor(l.code, base)}
                onClick={() => setOpen(false)}
                className={cn(
                  'flex items-center justify-between rounded-xl px-3 py-2 text-sm transition-colors hover:bg-mist',
                  l.code === locale ? 'font-medium text-ink' : 'text-muted',
                )}
              >
                {l.label}
                {l.code === locale && <Check className="h-4 w-4 text-accent-2" aria-hidden="true" />}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
