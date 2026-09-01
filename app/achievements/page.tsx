import type { Metadata } from 'next';
import { club } from '@/content/club';
import { achievements } from '@/content/achievements';
import { PageMasthead } from '@/components/PageMasthead';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Awards',
  description: `Recognition earned by ${club.name}.`,
  alternates: { canonical: '/achievements' },
};

const levelLabel: Record<string, string> = {
  winner: 'Winner',
  'runner-up': 'Runner-up',
  merit: 'Merit',
  recognition: 'Recognition',
};

export default function AchievementsPage() {
  const awards = [...achievements].sort((a, b) => b.year.localeCompare(a.year));

  return (
    <>
      <PageMasthead
        kicker={awards.length > 0 ? `${awards.length} awards` : 'Awards'}
        title="Recognition."
        standfirst="A by-product of the work rather than its aim, but part of the record all the same."
      />

      <div className="wrap band">
        {awards.length === 0 ? (
          <p className="measure text-ink-muted">No awards recorded yet.</p>
        ) : (
          <ol className="border-t border-rule-strong">
            {awards.map((award, index) => (
              <li key={award.id} className="border-b border-rule">
                <Reveal delay={index * 50}>
                  <div className="grid gap-3 py-6 md:grid-cols-12 md:gap-8">
                    <p className="label md:col-span-2 md:pt-1.5">{award.year}</p>
                    <div className="md:col-span-7">
                      <h2 className="font-serif text-xl text-ink">{award.title}</h2>
                      {award.competition ? (
                        <p className="label mt-1.5 text-ink-faint">{award.competition}</p>
                      ) : null}
                      {award.description ? (
                        <p className="measure mt-2.5 text-sm leading-relaxed text-ink-muted">
                          {award.description}
                        </p>
                      ) : null}
                    </div>
                    <div className="md:col-span-3 md:text-right">
                      {award.level ? (
                        <span className="inline-block border border-rule-strong px-3 py-1 text-xs text-ink-muted">
                          {levelLabel[award.level] ?? award.level}
                        </span>
                      ) : null}
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        )}
      </div>
    </>
  );
}
