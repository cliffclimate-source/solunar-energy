const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

/**
 * Format an ISO date (YYYY-MM-DD) as "12 May 2026" without relying on
 * locale/timezone APIs — so output is deterministic across build environments.
 */
export function formatDate(iso?: string): string | undefined {
  if (!iso) return undefined;
  const [y, m, d] = iso.split('-').map(Number);
  if (!y || !m || !d || m < 1 || m > 12) return undefined;
  return `${d} ${MONTHS[m - 1]} ${y}`;
}
