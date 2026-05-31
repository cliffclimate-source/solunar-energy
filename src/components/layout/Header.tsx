'use client';

import Link from 'next/link';
import { createPortal } from 'react-dom';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, ChevronRight, Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import { primaryNav, isNavGroup, site, type NavGroup, type NavLink } from '@/lib/site';
import { Wordmark } from '@/components/ui/Wordmark';
import { Button } from '@/components/ui/Button';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';
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
    document.body.classList.toggle('menu-open', mobileOpen);
    return () => {
      document.body.style.overflow = '';
      document.body.classList.remove('menu-open');
    };
  }, [mobileOpen]);

  useEffect(() => {
    if (!mobileOpen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setMobileOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
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

      {mobileOpen && (
        <MobileDrawer pathname={pathname} onClose={() => setMobileOpen(false)} />
      )}
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

function MobileDrawer({
  pathname,
  onClose,
}: {
  pathname: string | null;
  onClose: () => void;
}) {
  // Portal to <body> so the fixed sheet escapes the header's backdrop-blur
  // containing block (backdrop-filter traps position:fixed descendants).
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname?.startsWith(href);

  if (!mounted) return null;

  return createPortal(
    <div id="mobile-nav" className="lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
      {/* Dimmed backdrop — tap to close */}
      <button
        type="button"
        aria-label="Close menu"
        onClick={onClose}
        className="mobile-fade fixed inset-0 top-14 z-40 cursor-default bg-ink/40 backdrop-blur-sm"
      />

      {/* Sliding sheet — anchored right, capped width on larger phones/tablets */}
      <div className="mobile-sheet fixed bottom-0 right-0 top-14 z-40 flex w-full max-w-sm flex-col bg-paper shadow-lift">
        <nav aria-label="Mobile" className="flex-1 overflow-y-auto overscroll-contain px-5 pb-4 pt-3">
          {primaryNav.map((entry) =>
            isNavGroup(entry) ? (
              <MobileGroup
                key={entry.label}
                group={entry}
                isActive={isActive}
                onNavigate={onClose}
              />
            ) : (
              <Link
                key={entry.label}
                href={entry.href}
                onClick={onClose}
                aria-current={isActive(entry.href) ? 'page' : undefined}
                className={cn(
                  'flex items-center justify-between border-b border-line py-4 text-[1.05rem] font-medium transition-colors',
                  isActive(entry.href) ? 'text-accent-2' : 'text-ink',
                )}
              >
                {entry.label}
                <ChevronRight className="h-4 w-4 text-muted/50" aria-hidden="true" />
              </Link>
            ),
          )}
        </nav>

        {/* Sticky CTA footer */}
        <div className="border-t border-line bg-paper px-5 pb-[calc(env(safe-area-inset-bottom)+1rem)] pt-4">
          <Button href="/contact" size="lg" withArrow className="w-full" onClick={onClose}>
            Partner With Solunar
          </Button>
          <a
            href={site.contact.whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="mt-3 flex w-full items-center justify-center gap-2 rounded-full border border-line py-3 text-sm font-medium text-ink transition-colors hover:bg-mist"
          >
            <WhatsAppIcon className="h-4 w-4 text-[#25D366]" />
            WhatsApp {site.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </div>,
    document.body,
  );
}

function MobileGroup({
  group,
  isActive,
  onNavigate,
}: {
  group: NavGroup;
  isActive: (href: string) => boolean | undefined;
  onNavigate: () => void;
}) {
  // Auto-expand the section that contains the current page.
  const containsActive = group.items.some((i) => isActive(i.href));
  const [open, setOpen] = useState(containsActive);

  return (
    <div className="border-b border-line">
      <button
        type="button"
        aria-expanded={open}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between py-4 text-[1.05rem] font-medium text-ink"
      >
        {group.label}
        <ChevronDown
          className={cn(
            'h-4 w-4 text-muted transition-transform duration-200',
            open && 'rotate-180',
          )}
          aria-hidden="true"
        />
      </button>
      <div
        className={cn(
          'grid transition-all duration-300 ease-out',
          open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0',
        )}
      >
        <ul className="overflow-hidden">
          {group.items.map((item: NavLink) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={onNavigate}
                aria-current={isActive(item.href) ? 'page' : undefined}
                className={cn(
                  'flex items-center gap-3 rounded-xl px-3 py-3 text-[0.95rem] transition-colors',
                  isActive(item.href)
                    ? 'bg-mist font-medium text-accent-2'
                    : 'text-muted hover:bg-mist hover:text-ink',
                )}
              >
                <span
                  className={cn(
                    'h-1.5 w-1.5 shrink-0 rounded-full',
                    isActive(item.href) ? 'bg-accent-2' : 'bg-line',
                  )}
                  aria-hidden="true"
                />
                {item.label}
              </Link>
            </li>
          ))}
          <li className="h-2" aria-hidden="true" />
        </ul>
      </div>
    </div>
  );
}
