'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/cn';
import { JsonLd } from '@/components/seo/JsonLd';
import { faqPageLd } from '@/lib/schema';
import type { FaqItem } from '@/content/types';

/**
 * Accessible disclosure accordion. Each question is a heading-wrapped button
 * controlling a region. Also emits FAQPage JSON-LD for the questions.
 */
export function FAQAccordion({
  items,
  emitSchema = true,
}: {
  items: FaqItem[];
  emitSchema?: boolean;
}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="divide-y divide-line overflow-hidden rounded-2xl border border-line bg-paper">
      {emitSchema && <JsonLd data={faqPageLd(items)} />}
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={i}>
            <h3 className="m-0">
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                id={`faq-trigger-${i}`}
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left transition-colors hover:bg-mist/50 sm:px-6"
              >
                <span className="font-display text-base font-medium text-ink sm:text-lg">
                  {item.question}
                </span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 shrink-0 text-muted transition-transform duration-300',
                    isOpen && 'rotate-180',
                  )}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-trigger-${i}`}
              hidden={!isOpen}
              className="px-5 pb-6 sm:px-6"
            >
              <p className="max-w-prose text-[0.95rem] leading-relaxed text-muted">{item.answer}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
