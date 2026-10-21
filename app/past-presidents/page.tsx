import type { Metadata } from 'next';
import { club } from '@/content/club';
import { pastPresidents } from '@/content/past-presidents';
import { PageMasthead } from '@/components/PageMasthead';
import { Reveal } from '@/components/Reveal';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Past Presidents',
  description: `Every president of ${club.name} since charter.`,
  alternates: { canonical: '/past-presidents' },
};

export default function PastPresidentsPage() {
  const years = [...pastPresidents].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <>
      <PageMasthead
        kicker={`${years.length} ${years.length === 1 ? 'term documented' : 'terms'}`}
        title="Succession."
        standfirst="Earlier years are not yet documented — this page will grow as the club confirms them."
      />

      <div className="wrap band">
        <ol className="mx-auto flex max-w-4xl flex-col gap-4">
          {years.map((president, index) => (
            <li key={president.year}>
              <Reveal delay={Math.min(index, 5) * 70}>
                <div
                  className={cn(
                    'sheet flex items-start gap-5',
                    index === 0 && 'border-accent/40',
                  )}
                >
                  <span
                    className={cn(
                      'flex h-14 w-14 shrink-0 items-center justify-center rounded-xl font-serif text-lg font-bold',
                      index === 0
                        ? 'bg-gradient-to-br from-accent to-accent-strong text-on-inverse'
                        : 'border border-rule-strong bg-ink/[0.04] text-accent/80',
                    )}
                  >
                    {president.year.slice(2, 4)}
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-3">
                      <div>
                        <p className="font-serif text-lg font-bold text-ink">{president.name}</p>
                        <p className="label mt-0.5 text-accent/80">
                          {president.year}
                          {president.theme ? ` · ${president.theme}` : ''}
                        </p>
                      </div>
                      {index === 0 ? (
                        <span className="rounded border border-accent/30 px-3 py-1 text-xs font-bold tracking-wide text-accent uppercase">
                          Most recent
                        </span>
                      ) : null}
                    </div>

                    {president.highlights && president.highlights.length > 0 ? (
                      <ul className="mt-3 space-y-1.5">
                        {president.highlights.map((highlight) => (
                          <li key={highlight} className="text-sm leading-relaxed text-ink-muted">
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="mt-3 text-sm text-ink-faint">—</p>
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
