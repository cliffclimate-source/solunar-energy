import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { utilityScale } from '@/content/pages/solutions';

export const metadata: Metadata = buildMetadata({
  title: utilityScale.seoTitle,
  description: utilityScale.metaDescription,
  path: utilityScale.slug,
});

export default function Page() {
  return <StandardPage content={utilityScale} />;
}
