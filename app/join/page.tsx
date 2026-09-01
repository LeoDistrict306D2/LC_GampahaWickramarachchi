import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { JoinForm } from '@/components/JoinForm';

export const metadata: Metadata = {
  title: 'Join',
  description: `Membership of ${club.name} is open to all students of the university.`,
  alternates: { canonical: '/join' },
};

const reasons = [
  {
    title: 'Supervised clinical practice',
    body: 'You will join a clinic rotation within your first term, always under faculty supervision. Practice before graduation, properly overseen.',
  },
  {
    title: 'Field documentation',
    body: 'Working on Parampara means sitting with practitioners, taking consent, and writing preparations up to a standard the faculty will archive.',
  },
  {
    title: 'Propagation and preparation',
    body: 'The campus garden supplies the clinics. Members learn a plant standing in the ground before they meet it dried in a jar.',
  },
  {
    title: 'Something to point at',
    body: 'A named contribution to a documented archive is worth more than another certificate of participation.',
  },
];

export default function JoinPage() {
  return (
    <>
      <PageMasthead
        kicker="Membership"
        title="Join the club."
        standfirst="Open to all students of the university. No prior experience is expected — supervision is built into everything we do."
      />

      <div className="wrap band grid gap-14 md:grid-cols-12">
        <section className="md:col-span-5" aria-labelledby="why">
          <p className="label" id="why">
            What membership involves
          </p>
          <ol className="mt-6 border-t border-rule">
            {reasons.map((reason, index) => (
              <li key={reason.title} className="border-b border-rule py-5">
                <div className="flex gap-5">
                  <span className="label mt-1 shrink-0" aria-hidden>
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h2 className="font-serif text-lg text-ink">{reason.title}</h2>
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
