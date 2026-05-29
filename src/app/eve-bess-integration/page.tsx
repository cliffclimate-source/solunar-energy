import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { eveBess } from '@/content/pages/technology';

export const metadata: Metadata = buildMetadata({
  title: eveBess.seoTitle,
  description: eveBess.metaDescription,
  path: eveBess.slug,
});

export default function Page() {
  return <StandardPage content={eveBess} />;
}
