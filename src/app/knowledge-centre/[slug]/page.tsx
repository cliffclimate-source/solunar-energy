import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/metadata';
import { StandardPage } from '@/components/layout/StandardPage';
import { articles, getArticle, articleToPageContent, articleDates } from '@/content/pages/knowledge';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return buildMetadata({
    title: article.seoTitle,
    description: article.metaDescription,
    path: `/knowledge-centre/${article.slug}`,
    type: 'article',
    publishedTime: articleDates[article.slug],
  });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();
  return <StandardPage content={articleToPageContent(article)} />;
}
