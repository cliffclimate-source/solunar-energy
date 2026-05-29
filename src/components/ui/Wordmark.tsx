import { cn } from '@/lib/cn';

/** Geometric brand mark: a solar disc above stacked storage layers. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={cn('h-7 w-7', className)}
      role="img"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="16" cy="10" r="6" className="fill-accent" />
      <rect x="5" y="19.6" width="22" height="3.4" rx="1.7" className="fill-accent-2" />
      <rect x="8" y="25.2" width="16" height="3.4" rx="1.7" className="fill-accent-2/65" />
    </svg>
  );
}

/** Full lockup: brand mark + "Solunar Energy" wordmark. */
export function Wordmark({
  className,
  onDark = false,
  showText = true,
}: {
  className?: string;
  onDark?: boolean;
  showText?: boolean;
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <BrandMark />
      {showText && (
        <span
          className={cn(
            'font-display text-[1.18rem] font-semibold leading-none tracking-[-0.02em]',
            onDark ? 'text-paper' : 'text-ink',
          )}
        >
          Solunar<span className="font-normal opacity-60"> Energy</span>
        </span>
      )}
    </span>
  );
}
