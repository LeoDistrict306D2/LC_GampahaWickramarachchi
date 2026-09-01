'use client';

import type { Statistic } from '@/lib/types';
import { useCountUp } from '@/lib/hooks';
import { formatStatValue } from '@/lib/utils';

/**
 * Impact figures set as a determination table — term and value in rows on a
 * mounting sheet, the way a specimen label records its measurements. Not a row
 * of stat cards.
 *
 * Module scope so the reference is stable and the count-up effect is not torn
 * down on every parent render.
 */
const formatNumber = (value: number) => value.toLocaleString('en-LK');

function Row({ stat }: { stat: Statistic }) {
  const numeric = typeof stat.value === 'number';
  const ref = useCountUp(typeof stat.value === 'number' ? stat.value : 0, formatNumber, {
    enabled: numeric,
  });

  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-rule py-4">
      <dt className="label text-ink-faint">{stat.label}</dt>
      <dd className="font-serif text-3xl tabular-nums text-ink">
        {stat.prefix}
        {/* Final value is in the markup, so the served HTML is already correct;
            the hook only overwrites it while animating. */}
        <span ref={ref}>{formatStatValue(stat.value)}</span>
        {stat.suffix}
      </dd>
    </div>
  );
}

export function Determination({ stats, label }: { stats: Statistic[]; label: string }) {
  if (stats.length === 0) return null;

  return (
    <section aria-label={label} className="sheet">
      <p className="label">{label}</p>
      <dl className="mt-4 border-t border-rule">
        {stats.map((stat) => (
          <Row key={stat.id} stat={stat} />
        ))}
      </dl>
    </section>
  );
}
