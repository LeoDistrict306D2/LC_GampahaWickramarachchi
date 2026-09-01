import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { Photo } from './Photo';
import { Reveal } from './Reveal';

/**
 * A project presented as a herbarium mounting sheet.
 *
 * This is the site's signature form and the reason there are no cards here. A
 * specimen sheet is a bordered mount with the material on the left and a
 * printed determination label in the bottom-right corner carrying the
 * metadata — collector, locality, date, notes. A project record has exactly the
 * same shape, so it is set the same way.
 *
 * The accession number is derived from the project's position in the archive,
 * formatted the way a herbarium accession is.
 */
export function SpecimenSheet({
  project,
  accession,
  index = 0,
}: {
  project: Project;
  /** Accession number, e.g. "GW·047". */
  accession: string;
  index?: number;
}) {
  return (
    <Reveal delay={Math.min(index, 4) * 60}>
      <article className="sheet">
        <div className="grid gap-6 md:grid-cols-12 md:gap-8">
          {/* Mounted material */}
          <div className="md:col-span-7">
            <Link href={`/projects/${project.slug}`} tabIndex={-1} aria-hidden>
              <Photo
                image={project.heroImage}
                ratio="plate"
                sizes="(min-width: 768px) 55vw, 100vw"
              />
            </Link>
          </div>

          {/* Determination label */}
          <div className="flex flex-col md:col-span-5">
            <p className="label">
              {accession} · {project.category.replace(/-/g, ' ')}
            </p>

            <h3 className="mt-3 font-serif text-2xl leading-snug text-ink">
              <Link href={`/projects/${project.slug}`} className="hover:text-accent">
                {project.title}
              </Link>
            </h3>

            <p className="mt-3 text-sm leading-relaxed text-ink-muted">{project.summary}</p>

            <dl className="determination mt-6 border-t border-rule">
              <div className="flex justify-between gap-4 border-b border-rule py-2">
                <dt>Date</dt>
                <dd>{formatDate(project.date, { year: 'numeric', month: 'short', day: 'numeric' })}</dd>
              </div>
              {project.location ? (
                <div className="flex justify-between gap-4 border-b border-rule py-2">
                  <dt>Locality</dt>
                  <dd className="text-right">{project.location}</dd>
                </div>
              ) : null}
              <div className="flex justify-between gap-4 border-b border-rule py-2">
                <dt>Leo year</dt>
                <dd>{project.year}</dd>
              </div>
            </dl>

            {project.impact && project.impact.length > 0 ? (
              <dl className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
                {project.impact.slice(0, 3).map((stat) => (
                  <div key={stat.id}>
                    <dd className="font-serif text-xl text-ink">
                      {stat.prefix}
                      {typeof stat.value === 'number'
                        ? stat.value.toLocaleString('en-LK')
                        : stat.value}
                      {stat.suffix}
                    </dd>
                    <dt className="label mt-0.5 text-ink-faint">{stat.label}</dt>
                  </div>
                ))}
              </dl>
            ) : null}

            <Link
              href={`/projects/${project.slug}`}
              className="group mt-auto inline-flex items-center gap-2 pt-6 text-sm text-accent hover:text-accent-strong"
            >
              Full record
              <ArrowRight
                aria-hidden
                size={14}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

/** Formats an archive position as a herbarium-style accession number. */
export function accessionFor(total: number, index: number): string {
  return `GW·${String(total - index).padStart(3, '0')}`;
}
