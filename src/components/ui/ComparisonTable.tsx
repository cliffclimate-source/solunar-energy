import { Check, Minus } from 'lucide-react';
import { cn } from '@/lib/cn';

/** Renders a single cell, converting content-file markers to real icons. */
function renderCell(value: string) {
  const v = value.trim();
  if (v === '—' || v === '-' || v === '') {
    return <Minus className="inline h-4 w-4 text-muted/50" aria-label="Not applicable" />;
  }
  if (v.startsWith('✅')) {
    const rest = v.replace(/^✅\s*/, '');
    return (
      <span className="inline-flex items-center gap-1.5 font-medium text-ink">
        <Check className="h-4 w-4 shrink-0 text-accent-2" aria-hidden="true" strokeWidth={2.5} />
        {rest}
      </span>
    );
  }
  return value;
}

/**
 * Responsive comparison table. Real <table> semantics on tablet/desktop;
 * stacks into labelled cards on mobile via data-label pseudo-content.
 */
export function ComparisonTable({
  columns,
  rows,
  caption,
}: {
  columns: string[];
  rows: string[][];
  caption?: string;
}) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-paper">
      <table className="w-full border-collapse text-left text-[0.92rem]">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead className="hidden sm:table-header-group">
          <tr className="border-b border-line bg-mist">
            {columns.map((col, i) => (
              <th
                key={i}
                scope="col"
                className={cn(
                  'px-5 py-3.5 align-bottom font-mono text-[0.68rem] font-medium uppercase tracking-eyebrow text-muted',
                  i === 0 && 'w-[28%]',
                )}
              >
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, ri) => (
            <tr
              key={ri}
              className="block border-b border-line p-4 last:border-b-0 sm:table-row sm:p-0 sm:odd:bg-paper sm:even:bg-mist/40"
            >
              {row.map((cell, ci) =>
                ci === 0 ? (
                  <th
                    key={ci}
                    scope="row"
                    className="block pb-2 text-left font-display text-base font-semibold text-ink sm:table-cell sm:px-5 sm:py-4 sm:align-top sm:text-[0.92rem] sm:font-medium"
                  >
                    {cell}
                  </th>
                ) : (
                  <td
                    key={ci}
                    data-label={columns[ci]}
                    className="flex items-center justify-between gap-4 border-t border-line/70 py-2 text-muted before:font-mono before:text-[0.62rem] before:uppercase before:tracking-eyebrow before:text-muted before:content-[attr(data-label)] sm:table-cell sm:border-0 sm:px-5 sm:py-4 sm:align-top sm:before:hidden"
                  >
                    <span className="text-right sm:text-left">{renderCell(cell)}</span>
                  </td>
                ),
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
