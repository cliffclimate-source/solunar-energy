'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { primaryNav, isNavGroup, type NavGroup } from '@/lib/site';
import { Wordmark } from '@/components/ui/Wordmark';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/primitives';

const navItemBase =
  'rounded-full px-3 py-2 text-[0.92rem] font-medium text-ink/70 transition-colors duration-200 hover:text-ink';

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  if (pathname?.startsWith('/studio')) return null;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line/70 bg-paper/80 backdrop-blur-xl">
      <Container className="flex h-14 items-center justify-between gap-4 lg:h-16">
        <Link href="/" aria-label="Solunar Energy — home" className="shrink-0">
          <Wordmark />
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {primaryNav.map((entry) =>
              isNavGroup(entry) ? (
                <NavDropdown key={entry.label} group={entry} />
              ) : (
                <li key={entry.label}>
                  <Link href={entry.href} className={navItemBase}>
                    {entry.label}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact" withArrow>
            Partner With Solunar
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/5 lg:hidden"
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
          aria-controls="mobile-nav"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {mobileOpen && <MobileDrawer />}
    </header>
  );
}

function NavDropdown({ group }: { group: NavGroup }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    function onDocClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, []);

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className={cn(navItemBase, 'inline-flex items-center gap-1')}
      >
        {group.label}
        <ChevronDown
          className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-180')}
          aria-hidden="true"
        />
      </button>
      <div
        className={cn(
          'absolute left-0 top-full pt-3 transition-all duration-200',
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-1 opacity-0',
        )}
      >
        <div className="w-80 rounded-2xl border border-line bg-paper/95 p-2 shadow-lift backdrop-blur-xl">
          <ul className="flex flex-col">
            {group.items.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-3 py-2.5 transition-colors hover:bg-mist"
                >
                  <span className="block text-sm font-medium text-ink">{item.label}</span>
                  {item.description && (
                    <span className="mt-0.5 block text-[0.8rem] leading-snug text-muted">
                      {item.description}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

function MobileDrawer() {
  return (
    <div id="mobile-nav" className="lg:hidden">
      <div className="fixed inset-x-0 bottom-0 top-14 z-40 overflow-y-auto overscroll-contain bg-paper">
        <Container className="flex flex-col py-4">
          {primaryNav.map((entry) =>
            isNavGroup(entry) ? (
              <details key={entry.label} className="group border-b border-line">
                <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-base font-medium text-ink [&::-webkit-details-marker]:hidden">
                  {entry.label}
                  <ChevronDown
                    className="h-4 w-4 text-muted transition-transform duration-200 group-open:rotate-180"
                    aria-hidden="true"
                  />
                </summary>
                <ul className="flex flex-col gap-0.5 pb-3">
                  {entry.items.map((item) => (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className="block rounded-lg px-3 py-2.5 text-sm text-muted transition-colors hover:bg-mist hover:text-ink"
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            ) : (
              <Link
                key={entry.label}
                href={entry.href}
                className="border-b border-line py-3.5 text-base font-medium text-ink"
              >
                {entry.label}
              </Link>
            ),
          )}
          <div className="pt-6">
            <Button href="/contact" size="lg" withArrow className="w-full">
              Partner With Solunar
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}
