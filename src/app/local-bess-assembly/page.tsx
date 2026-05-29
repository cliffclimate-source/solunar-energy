import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { localAssembly } from '@/content/pages/solutions';

export const metadata: Metadata = buildMetadata({
  title: localAssembly.seoTitle,
  description: localAssembly.metaDescription,
  path: localAssembly.slug,
});

export default function Page() {
  return <StandardPage content={localAssembly} />;
}
