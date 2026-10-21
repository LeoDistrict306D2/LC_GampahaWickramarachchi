'use client';

import type { Statistic } from '@/lib/types';
import { useCountUp } from '@/lib/hooks';
import { formatStatValue } from '@/lib/utils';
import { Reveal } from './Reveal';

/**
 * Impact figures as a grid of glass stat tiles with an animated count-up —
 * the pattern Leo Club of Polgasowita's "Legacy" section uses. Still named
 * `Determination`; the record it keeps hasn't changed, only the shape of
 * the tile.
 */
const formatNumber = (value: number) => value.toLocaleString('en-LK');

function Tile({ stat, index }: { stat: Statistic; index: number }) {
  const numeric = typeof stat.value === 'number';
  const ref = useCountUp(typeof stat.value === 'number' ? stat.value : 0, formatNumber, {
    enabled: numeric,
  });

  return (
    <Reveal delay={Math.min(index, 6) * 80}>
      <div className="rounded-xl border border-rule-strong bg-ink/[0.03] p-5 text-center">
        <dd className="font-serif text-3xl font-bold tabular-nums text-accent md:text-4xl">
          {stat.prefix}
          {/* Final value is in the markup, so the served HTML is already correct;
              the hook only overwrites it while animating. */}
          <span ref={ref}>{formatStatValue(stat.value)}</span>
          {stat.suffix}
        </dd>
        <dt className="label mt-2 text-ink-faint">{stat.label}</dt>
      </div>
    </Reveal>
  );
}

export function Determination({ stats, label }: { stats: Statistic[]; label: string }) {
  if (stats.length === 0) return null;

  return (
    <section aria-label={label}>
      <p className="label">{label}</p>
      <dl className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {stats.map((stat, index) => (
          <Tile key={stat.id} stat={stat} index={index} />
        ))}
      </dl>
    </section>
  );
}
