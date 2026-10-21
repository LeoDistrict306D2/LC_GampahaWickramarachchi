import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { JoinForm } from '@/components/JoinForm';

export const metadata: Metadata = {
  title: 'Join',
  description: `Membership of ${club.name} is open to undergraduates of Gampaha Wickramarachchi University of Indigenous Medicine.`,
  alternates: { canonical: '/join' },
};

const reasons = [
  {
    title: 'Leadership development',
    body: 'Every member is given room to lead a project, with the club’s own officers having come up the same way.',
  },
  {
    title: 'Practical service experience',
    body: 'Teamwork and fellowship across eight active focus areas, from healthcare and education to environmental conservation.',
  },
  {
    title: 'Communication and organisation',
    body: 'Opportunities to participate in district and club projects, and to develop the organisational skills that run them.',
  },
  {
    title: 'Networking and impact',
    body: 'A named contribution to a club recognised among Leo District 306 D2’s Top 10 Leo Clubs in 2025/26.',
  },
];

export default function JoinPage() {
  return (
    <>
      <PageMasthead
        kicker="Membership"
        title="Join the club."
        standfirst="Open to undergraduates of Gampaha Wickramarachchi University of Indigenous Medicine, particularly students connected with the Faculty of Indigenous Social Sciences and Management Studies."
      />

      <div className="wrap band grid gap-14 md:grid-cols-12">
        <section className="md:col-span-5" aria-labelledby="why">
          <p className="label" id="why">
            What membership involves
          </p>
          <ol className="mt-6 flex flex-col gap-3">
            {reasons.map((reason, index) => (
              <li key={reason.title}>
                <div className="sheet flex gap-5">
                  <span className="label mt-1 shrink-0 text-accent/70" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2 className="font-serif text-lg font-semibold text-ink">{reason.title}</h2>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">{reason.body}</p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="md:col-span-6 md:col-start-7" aria-labelledby="enquiry">
          <p className="label" id="enquiry">
            Enquiry
          </p>
          <p className="measure mt-4 mb-8 text-ink-muted">
            Fill this in and it opens a pre-written email to the club secretary. We answer
            everything, usually within a week.
          </p>
          <JoinForm email={club.contact.email ?? ''} />
          {club.contact.email ? (
            <p className="mt-6 text-sm text-ink-faint">
              Or write directly to{' '}
              <a
                href={`mailto:${club.contact.email}`}
                className="text-ink-muted underline underline-offset-2 hover:text-accent"
              >
                {club.contact.email}
              </a>
              .
            </p>
          ) : null}
        </section>
      </div>
    </>
  );
}
