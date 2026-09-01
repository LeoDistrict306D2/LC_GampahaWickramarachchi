import type { Metadata } from 'next';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';
import { Determination } from '@/components/Determination';

export const metadata: Metadata = {
  title: 'About',
  description: club.about.mission,
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <>
      <PageMasthead
        kicker="About the club"
        title="Training, taken outside."
        standfirst={club.about.mission}
      />

      <div className="wrap band grid gap-12 md:grid-cols-12">
        <div className="md:col-span-7">
          {club.about.story.map((paragraph, index) => (
            <p key={index} className="measure mb-6 text-lg leading-relaxed text-ink-muted last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        <aside className="md:col-span-4 md:col-start-9">
          <Photo image={club.heroImage} ratio="plate" sizes="(min-width: 768px) 33vw, 100vw" plate="Pl. 2" />

          <dl className="determination mt-10 border-t border-rule-strong">
            {[
              { term: 'Chartered', value: club.charterDate?.slice(0, 4) ?? '—' },
              { term: 'District', value: club.district },
              { term: 'Multiple district', value: club.multipleDistrict },
              { term: 'Sponsor', value: club.sponsoringLionsClub ?? '—' },
            ].map((row) => (
              <div key={row.term} className="flex justify-between gap-4 border-b border-rule py-3">
                <dt>{row.term}</dt>
                <dd className="text-right">{row.value}</dd>
              </div>
            ))}
          </dl>
        </aside>
      </div>

      <section className="border-y border-rule-strong bg-panel band">
        <div className="wrap grid gap-10 md:grid-cols-2">
          <div>
            <p className="label">Mission</p>
            <p className="mt-4 font-serif text-2xl leading-snug text-ink">{club.about.mission}</p>
          </div>
          <div>
            <p className="label">Vision</p>
            <p className="mt-4 font-serif text-2xl leading-snug text-ink">{club.about.vision}</p>
          </div>
        </div>
      </section>

      <div className="wrap band md:max-w-2xl">
        <Determination stats={club.stats} label="Record to date" />
      </div>
    </>
  );
}
