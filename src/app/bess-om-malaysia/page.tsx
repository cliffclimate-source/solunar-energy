import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { bessOm } from '@/content/pages/solutions';

export const metadata: Metadata = buildMetadata({
  title: bessOm.seoTitle,
  description: bessOm.metaDescription,
  path: bessOm.slug,
});

export default function Page() {
  return <StandardPage content={bessOm} />;
}
