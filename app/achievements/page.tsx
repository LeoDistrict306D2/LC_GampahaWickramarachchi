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
          <ol className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {awards.map((award, index) => (
              <li key={award.id}>
                <Reveal delay={index * 60}>
                  <div className="sheet flex h-full flex-col">
                    <div className="flex items-start justify-between gap-3">
                      <span className="label text-accent/80">{award.year}</span>
                      {award.level ? (
                        <span className="rounded-full border border-rule-strong px-2.5 py-1 text-[0.65rem] font-semibold text-ink-muted uppercase">
                          {levelLabel[award.level] ?? award.level}
                        </span>
                      ) : null}
                    </div>
                    <h2 className="mt-3 font-serif text-lg leading-snug font-bold text-ink">{award.title}</h2>
                    {award.competition ? (
                      <p className="label mt-1.5 text-ink-faint">{award.competition}</p>
                    ) : null}
                    {award.description ? (
                      <p className="mt-3 text-sm leading-relaxed text-ink-muted">{award.description}</p>
                    ) : null}
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
