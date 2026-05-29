'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

/** Hides the site footer on the /studio (Sanity CMS) routes. */
export function FooterGate({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  if (pathname?.startsWith('/studio')) return null;
  return <>{children}</>;
}
