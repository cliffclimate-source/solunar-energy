import Image from 'next/image';
import { cn } from '@/lib/cn';
import { BrandMark } from '@/components/ui/Wordmark';

type FigureProps = {
  /** Image path (e.g. "/images/bess-container.jpg"). When omitted, a branded
   *  placeholder renders instead — so the layout is complete before photos
   *  are added. */
  src?: string;
  alt: string;
  aspect?: string; // CSS aspect-ratio, e.g. '4 / 3'
  tone?: 'light' | 'dark';
  priority?: boolean;
  sizes?: string;
  caption?: string;
  className?: string;
};

function Placeholder({ alt, tone }: { alt: string; tone: 'light' | 'dark' }) {
  return (
    <div
      className={cn(
        'flex h-full w-full flex-col items-center justify-center gap-3 p-6 text-center',
        tone === 'dark'
          ? 'bg-gradient-to-br from-ink-2 to-ink text-paper/70'
          : 'bg-gradient-to-br from-mist to-paper text-muted',
      )}
    >
      <BrandMark className="h-9 w-auto opacity-70" />
      <span className="max-w-[18rem] text-[0.8rem] leading-snug">{alt}</span>
      <span
        className={cn(
          'font-mono text-[0.6rem] uppercase tracking-eyebrow',
          tone === 'dark' ? 'text-paper/35' : 'text-muted/60',
        )}
      >
        Image placeholder
      </span>
    </div>
  );
}

/** Responsive image frame (next/image) with a graceful branded placeholder. */
export function Figure({
  src,
  alt,
  aspect = '4 / 3',
  tone = 'light',
  priority,
  sizes = '(min-width: 1024px) 42vw, 100vw',
  caption,
  className,
}: FigureProps) {
  return (
    <figure className={className}>
      <div
        className={cn(
          'relative w-full overflow-hidden rounded-2xl border',
          tone === 'dark' ? 'border-paper/10' : 'border-line',
        )}
        style={{ aspectRatio: aspect }}
      >
        {src ? (
          <Image src={src} alt={alt} fill priority={priority} sizes={sizes} className="object-cover" />
        ) : (
          <Placeholder alt={alt} tone={tone} />
        )}
      </div>
      {caption && (
        <figcaption className={cn('mt-3 text-xs', tone === 'dark' ? 'text-paper/50' : 'text-muted')}>
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
