import { cn } from '@/lib/cn';

/** Numeric stat with monospaced numerals for an engineering feel. */
export function Stat({
  value,
  label,
  tone = 'light',
}: {
  value: string;
  label: string;
  tone?: 'light' | 'dark';
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span
        className={cn(
          'font-mono text-3xl font-medium tracking-tight sm:text-4xl',
          tone === 'dark' ? 'text-paper' : 'text-ink',
        )}
      >
        {value}
      </span>
      <span className={cn('text-sm leading-snug', tone === 'dark' ? 'text-paper/60' : 'text-muted')}>
        {label}
      </span>
    </div>
  );
}
