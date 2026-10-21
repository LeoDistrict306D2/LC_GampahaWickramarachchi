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
        title="Leadership, service, fellowship, inspiration."
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
          <Photo
            image={{
              src: '/images/about/aurora-25.jpg',
              alt: 'Club members at AURORA ’25, Leo District 306 D2’s inaugural installation ceremony',
              width: 2000,
              height: 1222,
            }}
            ratio="plate"
            sizes="(min-width: 768px) 33vw, 100vw"
            plate="Pl. 2"
          />

          <div className="sheet mt-10">
            <dl className="determination">
              {[
                { term: 'Club number', value: club.clubNumber ?? '—' },
                { term: 'Chartered', value: club.charterDate?.slice(0, 4) ?? '—' },
                { term: 'Club type', value: club.clubType ?? '—' },
                { term: 'Region / Zone', value: [club.region, club.zone].filter(Boolean).join(' / ') || '—' },
                { term: 'District', value: club.district },
                { term: 'Multiple district', value: club.multipleDistrict },
              ].map((row) => (
                <div key={row.term} className="flex justify-between gap-4 border-b border-rule py-3 last:border-b-0">
                  <dt>{row.term}</dt>
                  <dd className="text-right">{row.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </aside>
      </div>

      <section className="relative overflow-hidden border-y border-rule bg-panel band">
        <div aria-hidden className="grid-pattern absolute inset-0 opacity-10" />
        <div className="wrap relative z-10 grid gap-6 md:grid-cols-2">
          <div className="sheet">
            <p className="label">Mission</p>
            <p className="mt-4 font-serif text-2xl leading-snug font-semibold text-ink">{club.about.mission}</p>
          </div>
          <div className="sheet">
            <p className="label">Vision</p>
            <p className="mt-4 font-serif text-2xl leading-snug font-semibold text-ink">{club.about.vision}</p>
          </div>
        </div>
      </section>

      <div className="wrap band md:max-w-2xl">
        <Determination stats={club.stats} label="Record to date" />
      </div>

      <section className="wrap band" aria-labelledby="focus-areas">
        <p className="label">Section E · Service focus areas</p>
        <h2 id="focus-areas" className="mt-3 font-serif text-3xl text-ink md:text-4xl">
          Where the club is active
        </h2>
        <ul className="mt-7 flex flex-wrap gap-2.5">
          {[
            'Nutritional health & food security',
            'Healthcare delivery',
            'Education initiatives',
            'Social affairs',
            'Child care programs',
            'Women empowerment',
            'Environmental conservation',
            'Infrastructure / community development',
          ].map((area) => (
            <li
              key={area}
              className="rounded-full border border-rule-strong bg-ink/[0.04] px-4 py-1.5 text-sm text-ink-muted transition-colors hover:border-accent/30 hover:text-accent"
            >
              {area}
            </li>
          ))}
        </ul>
        <p className="measure mt-5 text-sm leading-relaxed text-ink-faint">
          Also active in youth leadership and development, community awareness, environmental
          sustainability, support for vulnerable communities, disability inclusion, and
          educational empowerment.
        </p>
      </section>
    </>
  );
}
