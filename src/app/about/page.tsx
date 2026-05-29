import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { about } from '@/content/pages/positioning';

export const metadata: Metadata = buildMetadata({
  title: about.seoTitle,
  description: about.metaDescription,
  path: about.slug,
});

export default function Page() {
  return <StandardPage content={about} />;
}
