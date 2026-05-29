import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { peakShaving } from '@/content/pages/solutions';

export const metadata: Metadata = buildMetadata({
  title: peakShaving.seoTitle,
  description: peakShaving.metaDescription,
  path: peakShaving.slug,
});

export default function Page() {
  return <StandardPage content={peakShaving} />;
}
