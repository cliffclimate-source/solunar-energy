import { Container, Eyebrow } from '@/components/ui/primitives';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Figure } from '@/components/ui/Figure';
import { GridGlow } from '@/components/visuals/Decor';
import type { PageContent } from '@/content/types';

/**
 * Dark (ink) hero for standard pages: breadcrumb + eyebrow + H1 + answer-first
 * lead. When the page provides an image, the hero becomes a two-column layout
 * (text + product/context photo).
 */
export function PageHero({ content }: { content: PageContent }) {
  const hasImage = Boolean(content.image);
  return (
    <section className="relative isolate overflow-hidden bg-ink text-paper">
      <GridGlow />
      <Container className="relative pb-16 pt-32 sm:pb-20 sm:pt-36 lg:pb-24 lg:pt-44">
        <div
          className={
            hasImage ? 'grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16' : ''
          }
        >
          <div className={hasImage ? 'max-w-2xl' : 'max-w-3xl'}>
            <Breadcrumbs
              items={
                content.parent
                  ? [
                      { name: content.parent.name, path: content.parent.path },
                      { name: content.navLabel, path: content.slug },
                    ]
                  : [{ name: content.navLabel, path: content.slug }]
              }
            />
            <div className="mt-7">
              <Eyebrow className="text-accent-2">{content.eyebrow}</Eyebrow>
            </div>
            <h1 className="mt-5 font-display text-display font-semibold tracking-tight text-balance">
              {content.h1}
            </h1>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-paper/80 sm:text-xl">
              {content.lead}
            </p>
            {content.intro?.map((paragraph, i) => (
              <p key={i} className="mt-4 max-w-prose leading-relaxed text-paper/65">
                {paragraph}
              </p>
            ))}
            {content.heroActions && content.heroActions.length > 0 && (
              <div className="mt-9 flex flex-wrap gap-3">
                {content.heroActions.map((action, i) => (
                  <Button
                    key={`${action.href}-${i}`}
                    href={action.href}
                    size="lg"
                    variant={i === 0 ? 'primary' : 'outline'}
                    onDark
                    withArrow={i === 0}
                  >
                    {action.label}
                  </Button>
                ))}
              </div>
            )}
          </div>
          {content.image && (
            <div className="lg:pl-2">
              <Figure
                src={content.image.src}
                alt={content.image.alt}
                aspect={content.image.aspect ?? '4 / 3'}
                tone="dark"
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
              />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
