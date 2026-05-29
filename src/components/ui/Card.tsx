import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { getIcon } from '@/components/ui/icons';

const cardBase =
  'group relative flex h-full flex-col rounded-2xl border border-line bg-paper p-6 transition-all duration-300';

function IconBadge({ name }: { name?: string }) {
  const Icon = getIcon(name);
  return (
    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-ink ring-1 ring-line">
      <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.75} />
    </span>
  );
}

/** Service offering card: icon + title + copy, optional index + link. */
export function ServiceCard({
  icon,
  title,
  children,
  href,
  index,
}: {
  icon?: string;
  title: string;
  children: ReactNode;
  href?: string;
  index?: number;
}) {
  const body = (
    <>
      <div className="flex items-start justify-between">
        <IconBadge name={icon} />
        {index !== undefined && (
          <span className="font-mono text-xs text-muted/70">
            {String(index).padStart(2, '0')}
          </span>
        )}
      </div>
      <h3 className="mt-5 font-display text-lg font-semibold tracking-tight text-ink">{title}</h3>
      <p className="mt-2.5 text-[0.95rem] leading-relaxed text-muted">{children}</p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(cardBase, 'hover:-translate-y-0.5 hover:border-ink/15 hover:shadow-card')}>
        {body}
      </Link>
    );
  }
  return <div className={cn(cardBase, 'hover:border-ink/15 hover:shadow-card')}>{body}</div>;
}

/** Industry card: icon + title + one-line description. */
export function IndustryCard({
  icon,
  title,
  children,
}: {
  icon?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className={cn(cardBase, 'hover:border-ink/15 hover:shadow-card')}>
      <IconBadge name={icon} />
      <h3 className="mt-5 font-display text-base font-semibold tracking-tight text-ink">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{children}</p>
    </div>
  );
}
