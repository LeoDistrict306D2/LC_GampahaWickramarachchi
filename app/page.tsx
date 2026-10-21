import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { board } from '@/content/board';
import { byDateDesc, sortExecutives, cn } from '@/lib/utils';
import { Photo } from '@/components/Photo';
import { Reveal } from '@/components/Reveal';
import { Determination } from '@/components/Determination';
import { SpecimenSheet, accessionFor } from '@/components/SpecimenSheet';
import { district } from '@/content/district';

/**
 * Home.
 *
 * Reads as the opening of a bound record: title page, plate, determination
 * table, method, then the specimen sheets themselves. Evidence before
 * personality — the board sits after the work, not before it.
 */
export default function HomePage() {
  const ordered = byDateDesc(projects);
  const featured = ordered.filter((project) => project.featured).slice(0, 3);
  const leadership = sortExecutives(board).slice(0, 6);
  const charterYear = club.charterDate ? new Date(club.charterDate).getFullYear() : null;

  return (
    <>
      {/* Title page ----------------------------------------------------- */}
      <section className="wrap pt-14 pb-10 md:pt-20 md:pb-14">
        <p className="label">
          {club.district}
          {charterYear ? ` · Chartered ${charterYear}` : ''}
        </p>

        <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.04] text-ink md:text-6xl">
          {club.tagline}
        </h1>

        <div className="mt-10 grid gap-8 border-t border-rule-strong pt-8 md:grid-cols-12">
          <p className="text-lg leading-relaxed text-ink-muted md:col-span-7">
            {club.description}
          </p>
          <div className="flex flex-wrap items-start gap-3 md:col-span-5 md:justify-end">
            <Link
              href="/projects"
              className="group inline-flex items-center gap-2 border border-accent bg-accent px-6 py-3 text-sm text-page transition-colors hover:bg-accent-strong"
            >
              Project records
              <ArrowRight
                aria-hidden
                size={15}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link
              href="/join"
              className="inline-flex items-center border border-rule-strong px-6 py-3 text-sm text-ink transition-colors hover:border-ink"
            >
              Join the club
            </Link>
          </div>
        </div>
      </section>

      <section className="wrap">
        <Photo
          image={club.heroImage}
          ratio="wide"
          priority
          sizes="100vw"
          plate="Pl. 1"
          kenBurns
        />
      </section>

      {/* Determination + method ----------------------------------------- */}
      <div className="wrap band grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <Determination stats={club.stats} label="Record to date" />
        </div>

        <section className="md:col-span-6 md:col-start-7" aria-labelledby="method">
          <h2 id="method" className="font-serif text-3xl text-ink md:text-4xl">
            Method
          </h2>
          <ol className="mt-7 border-t border-rule">
            {club.about.values.map((value, index) => (
              <li key={value.title} className="border-b border-rule py-5">
                <Reveal delay={index * 60}>
                  <div className="flex gap-5">
                    <span className="label mt-1 shrink-0" aria-hidden>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-serif text-xl text-ink">{value.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-ink-muted">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>
      </div>

      {/* Specimen sheets ------------------------------------------------- */}
      <section className="border-y border-rule-strong bg-panel" aria-labelledby="records">
        <div className="wrap band">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="label">Selected records</p>
              <h2 id="records" className="mt-3 font-serif text-3xl text-ink md:text-4xl">
                What the club runs
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-sm text-accent hover:text-accent-strong"
            >
              All {projects.length} records →
            </Link>
          </div>

          <div className="mt-10 flex flex-col gap-8">
            {featured.map((project) => (
              <SpecimenSheet
                key={project.id}
                project={project}
                accession={accessionFor(ordered.length, ordered.indexOf(project))}
                index={featured.indexOf(project)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Board ----------------------------------------------------------- */}
      <section className="wrap band" aria-labelledby="board-heading">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="label">Office bearers</p>
            <h2 id="board-heading" className="mt-3 font-serif text-3xl text-ink md:text-4xl">
              Who holds the record
            </h2>
            <p className="measure mt-4 text-ink-muted">
              The Executive Committee for {leadership[0]?.term ?? 'this year'}, installed at
              ASCEND &rsquo;26 on 12 September 2026.
            </p>
            <Link
              href="/board"
              className="mt-6 inline-block text-sm text-accent hover:text-accent-strong"
            >
              The full board →
            </Link>
          </div>

          <ul className="md:col-span-7 md:col-start-6">
            {leadership.map((member, index) => (
              <li
                key={member.id}
                className="flex flex-col gap-0.5 border-b border-rule py-4 first:border-t sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <Reveal delay={index * 40} className="contents">
                  <span className="font-serif text-lg text-ink">{member.name}</span>
                  <span className="label shrink-0 text-ink-faint">{member.position}</span>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* District ---------------------------------------------------------- */}
      <section className="border-y border-rule-strong bg-panel band" aria-labelledby="district-heading">
        <div className="wrap grid gap-10 md:grid-cols-12 md:items-center">
          <div className="md:col-span-5">
            <Image
              src={district.mapImage.src}
              alt={district.mapImage.alt}
              width={district.mapImage.width}
              height={district.mapImage.height}
              className="h-auto w-24 border border-rule-strong"
            />
            <p className="label mt-6">Part of a wider network</p>
            <h2 id="district-heading" className="mt-3 font-serif text-3xl text-ink md:text-4xl">
              {district.name}
            </h2>
            <p className="measure mt-4 text-ink-muted leading-relaxed">{district.description}</p>
            <a
              href={district.url}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex items-center gap-2 border border-accent px-6 py-3 text-sm text-accent transition-colors hover:bg-accent hover:text-page"
            >
              Explore the district ↗
            </a>
          </div>

          <div className="md:col-span-6 md:col-start-7">
            <div className="sheet">
              <p className="label">Leo clubs in the district</p>
              <ul className="determination mt-4 grid gap-x-6 gap-y-0 border-t border-rule sm:grid-cols-2">
                {district.clubs.map((name) => {
                  const isUs = name === 'Gampaha Wickramarachchi University of Indigenous Medicine FISSMS';
                  return (
                    <li
                      key={name}
                      className={cn(
                        'border-b border-rule py-2 text-sm',
                        isUs ? 'font-semibold text-accent-strong' : 'text-ink-muted',
                      )}
                    >
                      {isUs ? '• ' : ''}
                      {name}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Close ----------------------------------------------------------- */}
      <section className="bg-inverse text-on-inverse">
        <div className="wrap band flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl">Join the club.</h2>
            <p className="measure mt-3 text-on-inverse/70">
              Open to undergraduates of Gampaha Wickramarachchi University of Indigenous
              Medicine, particularly students connected with the Faculty of Indigenous Social
              Sciences and Management Studies.
            </p>
          </div>
          <Link
            href="/join"
            className="group inline-flex shrink-0 items-center gap-2 bg-page px-6 py-3 text-sm text-ink transition-colors hover:bg-accent hover:text-page"
          >
            Join the club
            <ArrowRight
              aria-hidden
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </section>
    </>
  );
}
