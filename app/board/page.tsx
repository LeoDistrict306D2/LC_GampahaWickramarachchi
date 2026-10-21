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
        standfirst="The Executive Committee elected for the 2026/27 term, installed at ASCEND '26 on 12 September 2026."
      />

      <div className="wrap band">
        <ul className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {officers.map((member, index) => (
            <li key={member.id}>
              <Reveal delay={index * 70}>
                <div className="sheet !p-0 overflow-hidden">
                  {member.photo ? (
                    <Photo
                      image={member.photo}
                      ratio="portrait"
                      sizes="(min-width: 1024px) 24vw, 45vw"
                      rounded={false}
                      className="m-0"
                    />
                  ) : (
                    <div
                      aria-hidden
                      className="flex aspect-[3/4] items-center justify-center bg-gradient-to-br from-accent/15 to-ember/15 font-serif text-3xl font-bold text-accent"
                    >
                      {getInitials(member.name)}
                    </div>
                  )}
                  <div className="p-4">
                    <p className="font-serif text-lg leading-tight font-semibold text-ink">{member.name}</p>
                    <p className="label mt-1.5 text-ink-faint">{member.position}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        {rest.length > 0 ? (
          <section className="mt-16" aria-labelledby="directors">
            <p className="label" id="directors">
              Directors and officers
            </p>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {rest.map((member, index) => (
                <li key={member.id}>
                  <Reveal delay={index * 50}>
                    <div className="flex items-baseline justify-between gap-6 rounded-xl border border-rule-strong bg-ink/[0.03] px-5 py-4">
                      <span className="font-serif text-base font-semibold text-ink">{member.name}</span>
                      <span className="label shrink-0 text-ink-faint">{member.position}</span>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </div>
    </>
  );
}
