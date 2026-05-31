import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { forEpcc } from '@/content/pages/positioning';

export const metadata: Metadata = buildMetadata({
  title: forEpcc.seoTitle,
  description: forEpcc.metaDescription,
  path: forEpcc.slug,
});

export default function Page() {
  return <StandardPage content={forEpcc} />;
}
