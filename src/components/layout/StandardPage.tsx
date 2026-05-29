import { PageHero } from '@/components/layout/PageHero';
import { Blocks } from '@/components/blocks/Blocks';
import { JsonLd } from '@/components/seo/JsonLd';
import { serviceLd } from '@/lib/schema';
import type { PageContent } from '@/content/types';

/**
 * Standard marketing page: dark hero + content blocks + (for service pages)
 * Service JSON-LD. BreadcrumbList and FAQPage JSON-LD are emitted by the
 * Breadcrumbs and FAQAccordion components respectively.
 */
export function StandardPage({ content }: { content: PageContent }) {
  return (
    <>
      <PageHero content={content} />
      {content.schema.type === 'Service' && (
        <JsonLd
          data={serviceLd({
            name: content.h1,
            serviceType: content.schema.serviceType,
            description: content.metaDescription,
            path: content.slug,
            brands: content.schema.brands,
          })}
        />
      )}
      <Blocks blocks={content.blocks} />
    </>
  );
}
