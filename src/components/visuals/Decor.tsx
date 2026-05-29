import { cn } from '@/lib/cn';

/**
 * Decorative technical grid + soft accent glow for dark (ink) hero sections.
 * Purely visual — marked aria-hidden.
 */
export function GridGlow({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 overflow-hidden', className)}>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgb(255 255 255 / 0.045) 1px, transparent 1px), linear-gradient(to bottom, rgb(255 255 255 / 0.045) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse 95% 85% at 72% 0%, black 18%, transparent 76%)',
          WebkitMaskImage: 'radial-gradient(ellipse 95% 85% at 72% 0%, black 18%, transparent 76%)',
        }}
      />
      <div className="absolute -right-24 -top-28 h-[30rem] w-[30rem] rounded-full bg-accent/[0.08] blur-[110px]" />
      <div className="absolute right-1/3 top-0 h-72 w-72 rounded-full bg-accent-2/[0.07] blur-[90px]" />
    </div>
  );
}
