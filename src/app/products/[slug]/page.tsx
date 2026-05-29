import type { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { buildMetadata } from '@/lib/metadata';
import { Container, Eyebrow, Section } from '@/components/ui/primitives';
import { Breadcrumbs } from '@/components/layout/Breadcrumbs';
import { Button } from '@/components/ui/Button';
import { CTABand } from '@/components/ui/CTABand';
import { BrandMark } from '@/components/ui/Wordmark';
import { JsonLd } from '@/components/seo/JsonLd';
import { productLd } from '@/lib/schema';
import { products, getProduct } from '@/content/pages/products';

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return buildMetadata({
    title: `${product.name} | Solunar BESS Malaysia`,
    description: `${product.name}: ${product.tagline} LFP battery energy storage supplied and integrated by Solunar Energy in Malaysia.`,
    path: `/products/${product.id}`,
  });
}

export default async function Page({ params }: Params) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const overview = product.overview ?? [product.description];

  return (
    <>
      <Section tone="paper">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <Breadcrumbs
                tone="light"
                items={[
                  { name: 'Products', path: '/products' },
                  { name: product.name, path: `/products/${product.id}` },
                ]}
              />
              <div className="mt-6">
                <Eyebrow>{product.category}</Eyebrow>
              </div>
              <h1 className="mt-3 font-display text-display font-semibold tracking-tight text-ink">
                {product.name}
              </h1>
              <p className="mt-5 text-lg leading-relaxed text-muted">{product.tagline}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" size="lg" withArrow>
                  Request a quote
                </Button>
                <Button href="/products" size="lg" variant="outline">
                  All products
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-line bg-mist">
              <Image
                src={product.image}
                alt={product.name}
                fill
                priority
                sizes="(min-width: 1024px) 44vw, 100vw"
                className="object-cover"
              />
              <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-paper/90 px-3.5 py-2 shadow-sm ring-1 ring-line backdrop-blur">
                <BrandMark className="h-4 w-auto" />
                <span className="font-logo text-sm font-bold uppercase tracking-wide text-ink">
                  Solunar
                </span>
              </span>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="mist">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <Eyebrow>Overview</Eyebrow>
              <h2 className="mt-3 font-display text-display-sm font-semibold tracking-tight text-ink">
                About the {product.name}
              </h2>
              <div className="mt-5 space-y-4">
                {overview.map((paragraph, i) => (
                  <p key={i} className="prose-body">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-7 flex flex-wrap gap-2">
                {product.applications.map((a) => (
                  <span
                    key={a}
                    className="rounded-full border border-line bg-paper px-3 py-1.5 text-xs text-ink"
                  >
                    {a}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="rounded-2xl border border-line bg-paper p-6 lg:p-7">
                <p className="font-mono text-[0.65rem] uppercase tracking-eyebrow text-muted">
                  Specifications
                </p>
                <dl className="mt-4 divide-y divide-line">
                  {product.specs.map((s) => (
                    <div key={s.label} className="flex items-baseline justify-between gap-4 py-2.5">
                      <dt className="text-sm text-muted">{s.label}</dt>
                      <dd className="text-right text-sm font-medium text-ink">{s.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <JsonLd
        data={productLd({
          name: product.name,
          description: overview[0],
          image: product.image,
          category: product.category,
        })}
      />

      <CTABand
        heading={`Interested in the ${product.name}?`}
        text="Tell Solunar your capacity, power and site requirements and we'll confirm the right configuration."
        actions={[
          { label: 'Request a quote', href: '/contact' },
          { label: 'See all products', href: '/products' },
        ]}
      />
    </>
  );
}
