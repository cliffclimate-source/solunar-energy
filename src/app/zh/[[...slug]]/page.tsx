import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { zhPages } from '@/content/i18n/zh';

type Params = { params: Promise<{ slug?: string[] }> };

function pathFromSlug(slug?: string[]): string {
  return slug && slug.length ? `/zh/${slug.join('/')}` : '/zh';
}

export function generateStaticParams() {
  // '' (index) + each sub-path
  return [{ slug: [] }, ...zhPages.filter((p) => p.slug !== '/zh').map((p) => ({ slug: p.slug.replace('/zh/', '').split('/') }))];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const path = pathFromSlug(slug);
  const page = zhPages.find((p) => p.slug === path);
  if (!page) return {};
  return buildMetadata({ title: page.seoTitle, description: page.metaDescription, path });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const page = zhPages.find((p) => p.slug === pathFromSlug(slug));
  if (!page) notFound();
  return <StandardPage content={page} />;
}
