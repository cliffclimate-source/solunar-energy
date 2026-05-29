import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { allPaths } from '@/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return allPaths.map((path) => ({
    url: path === '/' ? site.url : `${site.url}${path}`,
    lastModified,
    changeFrequency: path === '/' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : path.startsWith('/knowledge-centre/') ? 0.6 : 0.8,
  }));
}
