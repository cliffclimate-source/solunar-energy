import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/** Centered content column with consistent responsive gutters. */
export function Container({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={cn('mx-auto w-full max-w-container px-5 sm:px-6 lg:px-10', className)}>
      {children}
    </div>
  );
}

type Tone = 'paper' | 'mist' | 'ink';

/** Vertical-rhythm section with paper / mist / ink background tones. */
export function Section({
  children,
  tone = 'paper',
  bordered = false,
  className,
  id,
}: {
  children: ReactNode;
  tone?: Tone;
  bordered?: boolean;
  className?: string;
  id?: string;
}) {
  const toneClass =
    tone === 'ink' ? 'bg-ink text-paper' : tone === 'mist' ? 'bg-mist text-ink' : 'bg-paper text-ink';
  return (
    <section
      id={id}
      className={cn('py-16 sm:py-20 lg:py-28', toneClass, bordered && 'border-t border-line', className)}
    >
      {children}
    </section>
  );
}

/** Small, restrained section kicker (Apple-style). */
export function Eyebrow({ children, className }: { children: ReactNode; className?: string }) {
  return <span className={cn('eyebrow', className)}>{children}</span>;
}

/** Eyebrow + heading + optional description, left or centre aligned. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  level = 2,
  align = 'left',
  tone = 'light',
  className,
  id,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  level?: 2 | 3;
  align?: 'left' | 'center';
  tone?: 'light' | 'dark';
  className?: string;
  id?: string;
}) {
  const Heading = level === 3 ? 'h3' : 'h2';
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Heading
        id={id}
        className={cn(
          'font-display font-semibold tracking-tight text-balance',
          level === 2 ? 'text-display-sm' : 'text-2xl sm:text-[1.75rem]',
          tone === 'dark' ? 'text-paper' : 'text-ink',
        )}
      >
        {title}
      </Heading>
      {description && (
        <p
          className={cn(
            'max-w-prose text-[1.05rem] leading-relaxed',
            align === 'center' && 'mx-auto',
            tone === 'dark' ? 'text-paper/70' : 'text-muted',
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
