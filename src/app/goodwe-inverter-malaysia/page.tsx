import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { goodweInverter } from '@/content/pages/technology';

export const metadata: Metadata = buildMetadata({
  title: goodweInverter.seoTitle,
  description: goodweInverter.metaDescription,
  path: goodweInverter.slug,
});

export default function Page() {
  return <StandardPage content={goodweInverter} />;
}
