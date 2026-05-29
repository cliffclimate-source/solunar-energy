const partners: { name: string; role: string }[] = [
  { name: 'BYD', role: 'Safety-focused LFP batteries' },
  { name: 'GoodWe', role: 'Solar, hybrid & storage inverters' },
  { name: 'EVE', role: 'LFP BESS platform' },
];

/**
 * "Technologies we integrate" partner strip. Brand names render as styled
 * wordmark tiles (no third-party logo assets bundled). Drop official logo SVGs
 * into public/images/brands/ and swap the <span> for an <img> when available.
 */
export function BrandStrip() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {partners.map((partner) => (
        <div
          key={partner.name}
          className="flex flex-col items-center justify-center gap-1 rounded-2xl border border-line bg-paper px-6 py-8 text-center transition-colors hover:border-ink/15"
        >
          <span className="font-logo text-3xl font-bold uppercase tracking-wide text-ink">
            {partner.name}
          </span>
          <span className="mt-1 text-xs text-muted">{partner.role}</span>
        </div>
      ))}
    </div>
  );
}
