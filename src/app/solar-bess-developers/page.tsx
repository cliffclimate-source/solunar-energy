import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { solarBessDevelopers } from '@/content/pages/solutions';

export const metadata: Metadata = buildMetadata({
  title: solarBessDevelopers.seoTitle,
  description: solarBessDevelopers.metaDescription,
  path: solarBessDevelopers.slug,
});

export default function Page() {
  return <StandardPage content={solarBessDevelopers} />;
}
