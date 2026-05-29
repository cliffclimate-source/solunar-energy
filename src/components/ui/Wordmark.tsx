import { cn } from '@/lib/cn';

/**
 * The amber "peak" that replaces the letter A in the SOLUNAR wordmark —
 * two strokes meeting at a rounded apex with a centred dot. Always amber,
 * regardless of background.
 */
function Peak({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 44 60"
      className={className}
      role="presentation"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M5 55 L22 8 L39 55"
        fill="none"
        strokeWidth={7.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="stroke-accent"
      />
      <circle cx="22" cy="41" r="4.6" className="fill-accent" />
    </svg>
  );
}

/** Standalone brand mark (the amber peak) for compact contexts. */
export function BrandMark({ className }: { className?: string }) {
  return <Peak className={cn('h-7 w-auto', className)} />;
}

/**
 * Solunar brand wordmark: "SOLUNAR" with the amber peak replacing the A.
 * The letters use currentColor, so the lockup adapts to light (ink) and dark
 * (paper) backgrounds while the peak stays amber.
 */
export function Wordmark({
  onDark = false,
  className,
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <span
      role="img"
      aria-label="Solunar"
      className={cn(
        'inline-flex select-none items-baseline font-logo text-[1.35rem] font-semibold uppercase leading-none tracking-[0.045em]',
        onDark ? 'text-paper' : 'text-ink',
        className,
      )}
    >
      <span>Solun</span>
      <Peak className="mx-[0.04em] h-[0.72em] w-auto translate-y-[0.04em]" />
      <span>r</span>
    </span>
  );
}
