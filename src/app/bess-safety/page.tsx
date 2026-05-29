import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { bessSafety } from '@/content/pages/solutions';

export const metadata: Metadata = buildMetadata({
  title: bessSafety.seoTitle,
  description: bessSafety.metaDescription,
  path: bessSafety.slug,
});

export default function Page() {
  return <StandardPage content={bessSafety} />;
}
