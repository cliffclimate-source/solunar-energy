import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { cn } from '@/lib/cn';
import { JsonLd } from '@/components/seo/JsonLd';
import { breadcrumbLd } from '@/lib/schema';

export type Crumb = { name: string; path: string };

/** Accessible breadcrumb trail that also emits BreadcrumbList JSON-LD. */
export function Breadcrumbs({
  items,
  tone = 'dark',
}: {
  items: Crumb[];
  tone?: 'dark' | 'light';
}) {
  const crumbs: Crumb[] =
    items[0]?.path === '/' ? items : [{ name: 'Home', path: '/' }, ...items];

  const linkColor = tone === 'dark' ? 'text-paper/55 hover:text-paper' : 'text-muted hover:text-ink';
  const currentColor = tone === 'dark' ? 'text-paper/90' : 'text-ink';
  const sepColor = tone === 'dark' ? 'text-paper/30' : 'text-muted/50';

  return (
    <nav aria-label="Breadcrumb">
      <JsonLd data={breadcrumbLd(crumbs)} />
      <ol className="flex flex-wrap items-center gap-1.5 font-mono text-[0.72rem] uppercase tracking-[0.1em]">
        {crumbs.map((crumb, i) => {
          const last = i === crumbs.length - 1;
          return (
            <li key={crumb.path} className="flex items-center gap-1.5">
              {last ? (
                <span aria-current="page" className={currentColor}>
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.path} className={cn('transition-colors', linkColor)}>
                  {crumb.name}
                </Link>
              )}
              {!last && <ChevronRight className={cn('h-3 w-3', sepColor)} aria-hidden="true" />}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
