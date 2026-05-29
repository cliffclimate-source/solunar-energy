import { Check, Info } from 'lucide-react';
import { cn } from '@/lib/cn';
import { Container, Section } from '@/components/ui/primitives';
import { Reveal } from '@/components/ui/Reveal';
import { ServiceCard } from '@/components/ui/Card';
import { ComparisonTable } from '@/components/ui/ComparisonTable';
import { FAQAccordion } from '@/components/ui/FAQAccordion';
import { CTABand } from '@/components/ui/CTABand';
import { Stat } from '@/components/ui/Stat';
import { Figure } from '@/components/ui/Figure';
import type { Block, ListItem } from '@/content/types';

type BlockOf<K extends Block['kind']> = Extract<Block, { kind: K }>;

function itemLabel(item: ListItem): string {
  return typeof item === 'string' ? item : item.title;
}

function BlockHeading({
  heading,
  level = 2,
}: {
  heading?: string;
  level?: 2 | 3;
}) {
  if (!heading) return null;
  const Tag = level === 3 ? 'h3' : 'h2';
  return (
    <Tag
      className={cn(
        'font-display font-semibold tracking-tight text-balance text-ink',
        level === 2 ? 'text-display-sm' : 'text-2xl',
      )}
    >
      {heading}
    </Tag>
  );
}

function SectionIntro({
  heading,
  lead,
  level,
}: {
  heading?: string;
  lead?: string;
  level?: 2 | 3;
}) {
  if (!heading && !lead) return null;
  return (
    <div className="max-w-2xl">
      <BlockHeading heading={heading} level={level} />
      {lead && <p className={cn('prose-body', heading && 'mt-4')}>{lead}</p>}
    </div>
  );
}

function Note({ text, className }: { text: string; className?: string }) {
  return (
    <p
      className={cn(
        'flex max-w-prose gap-3 rounded-xl border border-line bg-mist/70 px-4 py-3 text-sm italic leading-relaxed text-muted',
        className,
      )}
    >
      <Info className="mt-0.5 h-4 w-4 shrink-0 not-italic text-accent-2" aria-hidden="true" />
      <span>{text}</span>
    </p>
  );
}

function Prose({ block }: { block: BlockOf<'prose'> }) {
  return (
    <div className="max-w-prose">
      <BlockHeading heading={block.heading} level={block.level} />
      <div className={cn('space-y-4', block.heading && 'mt-5')}>
        {block.paragraphs.map((p, i) => (
          <p key={i} className="prose-body">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

function ListItems({ block }: { block: BlockOf<'list'> }) {
  const { items, variant = 'check', columns = 2 } = block;

  if (variant === 'inline') {
    return (
      <ul className="flex flex-wrap gap-2.5">
        {items.map((item, i) => (
          <li
            key={i}
            className="rounded-full border border-line bg-paper px-3.5 py-1.5 text-sm text-ink"
          >
            {itemLabel(item)}
          </li>
        ))}
      </ul>
    );
  }

  if (variant === 'cards') {
    return (
      <div className={cn('grid gap-4', columns >= 2 && 'sm:grid-cols-2', columns >= 3 && 'lg:grid-cols-3')}>
        {items.map((item, i) => {
          const title = typeof item === 'string' ? item : item.title;
          const text = typeof item === 'string' ? undefined : item.text;
          return (
            <div key={i} className="rounded-2xl border border-line bg-paper p-5">
              <h3 className="font-display text-base font-semibold text-ink">{title}</h3>
              {text && <p className="mt-2 text-sm leading-relaxed text-muted">{text}</p>}
            </div>
          );
        })}
      </div>
    );
  }

  // check / bullet
  return (
    <ul
      className={cn(
        'grid gap-x-10 gap-y-3.5',
        columns === 2 && 'sm:grid-cols-2',
        columns === 3 && 'sm:grid-cols-2 lg:grid-cols-3',
      )}
    >
      {items.map((item, i) => {
        const title = typeof item === 'string' ? item : item.title;
        const text = typeof item === 'string' ? undefined : item.text;
        return (
          <li key={i} className="flex gap-3">
            <Check className="mt-1 h-4 w-4 shrink-0 text-accent-2" aria-hidden="true" strokeWidth={2.5} />
            <span className="text-[0.95rem] leading-relaxed">
              <span className={cn(text ? 'font-medium text-ink' : 'text-muted')}>{title}</span>
              {text && <span className="text-muted"> — {text}</span>}
            </span>
          </li>
        );
      })}
    </ul>
  );
}

function ListBlock({ block }: { block: BlockOf<'list'> }) {
  // The lead-in sentence (block.lead) is always rendered above the list.
  return (
    <div>
      <SectionIntro heading={block.heading} lead={block.lead} level={block.level} />
      <div className="mt-8">
        <ListItems block={block} />
      </div>
      {block.note && <Note text={block.note} className="mt-6" />}
    </div>
  );
}

function TableBlock({ block }: { block: BlockOf<'table'> }) {
  const hasIntro = Boolean(block.heading) || Boolean(block.lead);
  return (
    <div>
      <SectionIntro heading={block.heading} lead={block.lead} />
      <div className={cn(hasIntro && 'mt-8')}>
        <ComparisonTable columns={block.columns} rows={block.rows} caption={block.caption} />
      </div>
      {block.note && <Note text={block.note} className="mt-6" />}
    </div>
  );
}

function CardsBlock({ block }: { block: BlockOf<'cards'> }) {
  const cols = block.columns ?? 3;
  return (
    <div>
      <SectionIntro heading={block.heading} lead={block.lead} />
      <div
        className={cn(
          'mt-10 grid gap-5',
          cols === 2 ? 'sm:grid-cols-2' : 'sm:grid-cols-2 lg:grid-cols-3',
        )}
      >
        {block.items.map((card, i) => (
          <ServiceCard key={i} icon={card.icon} title={card.title} index={i + 1}>
            {card.text}
          </ServiceCard>
        ))}
      </div>
    </div>
  );
}

function StepsBlock({ block }: { block: BlockOf<'steps'> }) {
  const hasIntro = Boolean(block.heading) || Boolean(block.lead);
  return (
    <div>
      <SectionIntro heading={block.heading} lead={block.lead} />
      <ol className={cn('grid gap-5 sm:grid-cols-2 lg:grid-cols-3', hasIntro && 'mt-10')}>
        {block.items.map((step, i) => (
          <li key={i} className="rounded-2xl border border-line bg-paper p-6">
            <span className="font-mono text-sm font-medium text-accent-2">
              {String(i + 1).padStart(2, '0')}
            </span>
            <h3 className="mt-3 font-display text-base font-semibold text-ink">{step.title}</h3>
            {step.text && <p className="mt-2 text-sm leading-relaxed text-muted">{step.text}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
}

function Pullquote({ block }: { block: BlockOf<'pullquote'> }) {
  return (
    <figure className="mx-auto max-w-3xl text-center">
      <span className="font-display text-5xl leading-none text-accent" aria-hidden="true">
        &ldquo;
      </span>
      <blockquote className="mt-1 font-display text-2xl font-medium leading-snug tracking-tight text-balance text-ink sm:text-[1.9rem]">
        {block.text}
      </blockquote>
      {block.attribution && (
        <figcaption className="mt-5 font-mono text-xs uppercase tracking-eyebrow text-muted">
          {block.attribution}
        </figcaption>
      )}
    </figure>
  );
}

function Stats({ block }: { block: BlockOf<'stats'> }) {
  return (
    <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
      {block.items.map((stat, i) => (
        <Stat key={i} value={stat.value} label={stat.label} />
      ))}
    </div>
  );
}

function Faq({ block }: { block: BlockOf<'faq'> }) {
  return (
    <div className="max-w-3xl">
      <BlockHeading heading={block.heading ?? 'Frequently Asked Questions'} />
      <div className="mt-8">
        <FAQAccordion items={block.items} />
      </div>
    </div>
  );
}

function renderInner(block: Exclude<Block, BlockOf<'cta'>>) {
  switch (block.kind) {
    case 'prose':
      return <Prose block={block} />;
    case 'list':
      return <ListBlock block={block} />;
    case 'table':
      return <TableBlock block={block} />;
    case 'cards':
      return <CardsBlock block={block} />;
    case 'steps':
      return <StepsBlock block={block} />;
    case 'pullquote':
      return <Pullquote block={block} />;
    case 'stats':
      return <Stats block={block} />;
    case 'note':
      return <Note text={block.text} />;
    case 'image':
      return (
        <Figure
          src={block.src}
          alt={block.alt}
          aspect={block.aspect ?? '16 / 9'}
          caption={block.caption}
          sizes="(min-width: 1024px) 75vw, 100vw"
        />
      );
    case 'faq':
      return <Faq block={block} />;
  }
}

/**
 * Renders a page's content blocks with an alternating paper/mist section
 * rhythm. CTA blocks render as full-width bands and don't affect the rhythm.
 */
export function Blocks({ blocks }: { blocks: Block[] }) {
  let toneIndex = 0;
  return (
    <>
      {blocks.map((block, i) => {
        if (block.kind === 'cta') {
          return (
            <CTABand
              key={i}
              heading={block.heading}
              text={block.text}
              actions={block.actions}
              tone={block.tone === 'amber' ? 'amber' : 'ink'}
            />
          );
        }
        const tone = toneIndex % 2 === 0 ? 'paper' : 'mist';
        toneIndex += 1;
        return (
          <Section key={i} tone={tone}>
            <Container>
              <Reveal>{renderInner(block)}</Reveal>
            </Container>
          </Section>
        );
      })}
    </>
  );
}
