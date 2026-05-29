import { Container, Eyebrow } from '@/components/ui/primitives';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { Figure } from '@/components/ui/Figure';
import type { PageContent } from '@/content/types';

/**
 * Light, spacious page hero (Apple-style): breadcrumb + eyebrow + H1 +
 * answer-first lead. Becomes a two-column layout when the page has an image.
 */
export function PageHero({ content }: { content: PageContent }) {
  const hasImage = Boolean(content.image);
  return (
    <section className="relative overflow-hidden bg-paper">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-80 w-80 rounded-full bg-accent/[0.06] blur-[110px]"
      />
      <Container className="relative pb-12 pt-28 sm:pb-16 sm:pt-32 lg:pb-20 lg:pt-36">
        <div className={hasImage ? 'grid items-center gap-10 lg:grid-cols-2 lg:gap-16' : 'max-w-3xl'}>
          <div>
            <Breadcrumbs
              tone="light"
              items={
                content.parent
                  ? [
                      { name: content.parent.name, path: content.parent.path },
                      { name: content.navLabel, path: content.slug },
                    ]
                  : [{ name: content.navLabel, path: content.slug }]
              }
            />
            <div className="mt-6">
              <Eyebrow>{content.eyebrow}</Eyebrow>
            </div>
            <h1 className="mt-3 font-display text-display font-semibold tracking-tight text-ink">
              {content.h1}
            </h1>
            <p className="mt-5 max-w-prose text-lg leading-relaxed text-muted sm:text-xl">
              {content.lead}
            </p>
            {content.intro?.map((paragraph, i) => (
              <p key={i} className="mt-4 max-w-prose leading-relaxed text-muted">
                {paragraph}
              </p>
            ))}
            {content.heroActions && content.heroActions.length > 0 && (
              <div className="mt-8 flex flex-wrap gap-3">
                {content.heroActions.map((action, i) => (
                  <Button
                    key={`${action.href}-${i}`}
                    href={action.href}
                    size="lg"
                    variant={i === 0 ? 'primary' : 'outline'}
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
                tone="light"
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
