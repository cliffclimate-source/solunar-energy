import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { commercialIndustrial } from '@/content/pages/solutions';

export const metadata: Metadata = buildMetadata({
  title: commercialIndustrial.seoTitle,
  description: commercialIndustrial.metaDescription,
  path: commercialIndustrial.slug,
});

export default function Page() {
  return <StandardPage content={commercialIndustrial} />;
}
