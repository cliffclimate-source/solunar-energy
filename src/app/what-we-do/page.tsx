import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { whatWeDo } from '@/content/pages/positioning';

export const metadata: Metadata = buildMetadata({
  title: whatWeDo.seoTitle,
  description: whatWeDo.metaDescription,
  path: whatWeDo.slug,
});

export default function Page() {
  return <StandardPage content={whatWeDo} />;
}
