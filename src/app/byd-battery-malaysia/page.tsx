import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { bydBattery } from '@/content/pages/technology';

export const metadata: Metadata = buildMetadata({
  title: bydBattery.seoTitle,
  description: bydBattery.metaDescription,
  path: bydBattery.slug,
});

export default function Page() {
  return <StandardPage content={bydBattery} />;
}
