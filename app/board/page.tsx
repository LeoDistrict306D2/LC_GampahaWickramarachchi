import type { Metadata } from 'next';
import { club } from '@/content/club';
import { board } from '@/content/board';
import { getInitials, sortExecutives } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';

export const metadata: Metadata = {
  title: 'Board',
  description: `The executive board of ${club.name}.`,
  alternates: { canonical: '/board' },
};

export default function BoardPage() {
  const members = sortExecutives(board);
  const officers = members.slice(0, 4);
  const rest = members.slice(4);
  const term = members[0]?.term ?? '';

  return (
    <>
      <PageMasthead
        kicker={term ? `Office bearers ${term}` : 'Office bearers'}
        title="Who holds the record."
        standfirst="The elected board and directors. Clinical activity is supervised by faculty; the board organises it."
      />

      <div className="wrap band">
        <ul className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {officers.map((member, index) => (
            <li key={member.id}>
              <Reveal delay={index * 50}>
                {member.photo ? (
                  <Photo image={member.photo} ratio="portrait" sizes="(min-width: 1024px) 24vw, 45vw" />
                ) : (
                  <div
                    aria-hidden
                    className="flex aspect-[3/4] items-center justify-center border border-rule-strong bg-panel font-serif text-3xl text-ink-faint"
                  >
                    {getInitials(member.name)}
                  </div>
                )}
                <p className="mt-3 font-serif text-lg leading-tight text-ink">{member.name}</p>
                <p className="label mt-1.5 text-ink-faint">{member.position}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        {rest.length > 0 ? (
          <section className="mt-16" aria-labelledby="directors">
            <p className="label" id="directors">
              Directors and officers
            </p>
            <ul className="mt-6 border-t border-rule-strong">
              {rest.map((member) => (
                <li
                  key={member.id}
                  className="flex flex-col gap-0.5 border-b border-rule py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
                >
                  <span className="font-serif text-lg text-ink">{member.name}</span>
                  <span className="label shrink-0 text-ink-faint">{member.position}</span>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </>
  );
}
