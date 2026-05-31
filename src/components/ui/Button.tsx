import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
type Size = 'md' | 'lg';

const base =
  'group inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-2 disabled:cursor-not-allowed disabled:opacity-50';

function variantClasses(variant: Variant, onDark: boolean): string {
  switch (variant) {
    case 'primary':
      return 'bg-accent text-ink hover:bg-accent/90 shadow-sm';
    case 'secondary':
      return onDark ? 'bg-paper text-ink hover:bg-paper/90' : 'bg-ink text-paper hover:bg-ink-2';
    case 'outline':
      return onDark
        ? 'border border-paper/30 text-paper hover:border-paper/70 hover:bg-paper/10'
        : 'border border-line text-ink hover:border-ink/40 hover:bg-ink/[0.03]';
    case 'ghost':
      return onDark ? 'text-paper hover:bg-paper/10' : 'text-ink hover:bg-ink/[0.04]';
  }
}

const sizeClasses: Record<Size, string> = {
  md: 'h-10 px-5 text-sm',
  lg: 'h-12 px-7 text-[0.95rem]',
};

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  onDark?: boolean;
  withArrow?: boolean;
  className?: string;
};

function inner(children: ReactNode, withArrow: boolean) {
  return (
    <>
      {children}
      {withArrow && (
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );
}

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  onDark = false,
  withArrow = false,
  className,
  ...rest
}: CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: string;
  }) {
  const classes = cn(base, variantClasses(variant, onDark), sizeClasses[size], className);
  // onClick is typed for a button; reuse it on the link branches too.
  const onClick = rest.onClick as unknown as MouseEventHandler<HTMLElement> | undefined;

  if (href) {
    if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
      return (
        <a href={href} className={classes} onClick={onClick}>
          {inner(children, withArrow)}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {inner(children, withArrow)}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {inner(children, withArrow)}
    </button>
  );
}
