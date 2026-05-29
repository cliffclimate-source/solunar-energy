import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { powerExpansion } from '@/content/pages/power-expansion';

export const metadata: Metadata = buildMetadata({
  title: powerExpansion.seoTitle,
  description: powerExpansion.metaDescription,
  path: powerExpansion.slug,
});

export default function Page() {
  return <StandardPage content={powerExpansion} />;
}
