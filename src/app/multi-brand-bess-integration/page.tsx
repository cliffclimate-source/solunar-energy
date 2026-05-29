import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { multiBrand } from '@/content/pages/technology';

export const metadata: Metadata = buildMetadata({
  title: multiBrand.seoTitle,
  description: multiBrand.metaDescription,
  path: multiBrand.slug,
});

export default function Page() {
  return <StandardPage content={multiBrand} />;
}
