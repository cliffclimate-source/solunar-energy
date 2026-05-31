'use client';

import { usePathname } from 'next/navigation';
import { site } from '@/lib/site';
import { WhatsAppIcon } from '@/components/ui/WhatsAppIcon';

/** Floating WhatsApp click-to-chat button, shown site-wide (hidden on /studio). */
export function WhatsAppButton() {
  const pathname = usePathname();
  if (pathname?.startsWith('/studio')) return null;

  return (
    <a
      href={site.contact.whatsappHref}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Solunar on WhatsApp"
      className="floating-whatsapp group fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[#25D366] py-3 pl-3 pr-4 text-white shadow-lg shadow-black/25 ring-1 ring-black/5 transition-all duration-200 hover:scale-[1.03] hover:shadow-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:bottom-6 sm:right-6"
    >
      <WhatsAppIcon className="h-7 w-7 shrink-0" />
      <span className="hidden text-sm font-semibold sm:inline">WhatsApp Us</span>
    </a>
  );
}
