import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { bessPartnerForEpcc } from '@/content/pages/positioning';

export const metadata: Metadata = buildMetadata({
  title: bessPartnerForEpcc.seoTitle,
  description: bessPartnerForEpcc.metaDescription,
  path: bessPartnerForEpcc.slug,
});

export default function Page() {
  return <StandardPage content={bessPartnerForEpcc} />;
}
