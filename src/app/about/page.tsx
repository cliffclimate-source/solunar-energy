import type { Metadata } from 'next';
import { buildMetadata } from '@/lib/metadata';
import { PageHero } from '@/components/layout/PageHero';
import { Blocks } from '@/components/blocks/Blocks';
import { Leadership } from '@/components/about/Leadership';
import { JsonLd } from '@/components/seo/JsonLd';
import { personLd } from '@/lib/schema';
import { about } from '@/content/pages/positioning';

export const metadata: Metadata = buildMetadata({
  title: about.seoTitle,
  description: about.metaDescription,
  path: about.slug,
});

export default function Page() {
  return (
    <>
      <PageHero content={about} />
      <Leadership />
      <Blocks blocks={about.blocks} />
      <JsonLd
        data={personLd({
          name: 'Jimmy Yong',
          jobTitle: 'Chief Executive Officer',
          image: '/images/jimmy-yong.jpg',
          alumniOf: ['University of Hertfordshire', 'Louisiana State University', 'HELP University'],
        })}
      />
    </>
  );
}
