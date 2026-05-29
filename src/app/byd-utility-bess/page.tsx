import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { bydUtility } from '@/content/pages/byd-utility';

export const metadata: Metadata = buildMetadata({
  title: bydUtility.seoTitle,
  description: bydUtility.metaDescription,
  path: bydUtility.slug,
});

export default function Page() {
  return <StandardPage content={bydUtility} />;
}
