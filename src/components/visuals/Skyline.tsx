import { cn } from '@/lib/cn';

/**
 * Stylised Kuala Lumpur skyline silhouette (twin towers + needle tower +
 * surrounding buildings). Single-colour via currentColor.
 */
export function KLSkyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 300"
      className={cn('w-full', className)}
      role="img"
      aria-label="Kuala Lumpur skyline"
      preserveAspectRatio="xMidYMax meet"
      fill="currentColor"
    >
      {/* surrounding buildings */}
      <rect x="20" y="200" width="58" height="100" />
      <rect x="88" y="232" width="46" height="68" />
      <rect x="150" y="168" width="66" height="132" />
      <rect x="360" y="210" width="58" height="90" />
      <rect x="430" y="176" width="84" height="124" />
      <rect x="820" y="198" width="58" height="102" />
      <rect x="888" y="156" width="92" height="144" />
      <rect x="992" y="220" width="48" height="80" />
      <rect x="1052" y="184" width="72" height="116" />
      <rect x="1134" y="236" width="46" height="64" />

      {/* KL Tower — needle with bulb + antenna */}
      <rect x="252" y="120" width="16" height="180" />
      <ellipse cx="260" cy="120" rx="26" ry="17" />
      <rect x="257" y="72" width="6" height="36" />

      {/* Petronas twin towers — tapered, with spires + skybridge */}
      <rect x="556" y="150" width="64" height="150" />
      <rect x="568" y="108" width="40" height="60" />
      <rect x="585" y="58" width="6" height="58" />
      <rect x="660" y="150" width="64" height="150" />
      <rect x="672" y="108" width="40" height="60" />
      <rect x="689" y="58" width="6" height="58" />
      <rect x="620" y="196" width="40" height="6" />
      <rect x="620" y="208" width="40" height="6" />
    </svg>
  );
}
