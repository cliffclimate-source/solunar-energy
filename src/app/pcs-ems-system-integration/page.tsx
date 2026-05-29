import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { pcsEms } from '@/content/pages/technology';

export const metadata: Metadata = buildMetadata({
  title: pcsEms.seoTitle,
  description: pcsEms.metaDescription,
  path: pcsEms.slug,
});

export default function Page() {
  return <StandardPage content={pcsEms} />;
}
