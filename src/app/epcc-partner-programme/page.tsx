import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { epccPartnerProgramme } from '@/content/pages/positioning';

export const metadata: Metadata = buildMetadata({
  title: epccPartnerProgramme.seoTitle,
  description: epccPartnerProgramme.metaDescription,
  path: epccPartnerProgramme.slug,
});

export default function Page() {
  return <StandardPage content={epccPartnerProgramme} />;
}
