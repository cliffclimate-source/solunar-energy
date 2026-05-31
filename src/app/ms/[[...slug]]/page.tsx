import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { msPages } from '@/content/i18n/ms';

type Params = { params: Promise<{ slug?: string[] }> };

function pathFromSlug(slug?: string[]): string {
  return slug && slug.length ? `/ms/${slug.join('/')}` : '/ms';
}

export function generateStaticParams() {
  return [{ slug: [] }, ...msPages.filter((p) => p.slug !== '/ms').map((p) => ({ slug: p.slug.replace('/ms/', '').split('/') }))];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const path = pathFromSlug(slug);
  const page = msPages.find((p) => p.slug === path);
  if (!page) return {};
  return buildMetadata({ title: page.seoTitle, description: page.metaDescription, path });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const page = msPages.find((p) => p.slug === pathFromSlug(slug));
  if (!page) notFound();
  return <StandardPage content={page} />;
}
