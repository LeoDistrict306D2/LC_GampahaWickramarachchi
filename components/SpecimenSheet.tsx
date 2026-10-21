import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Project } from '@/lib/types';
import { formatDate } from '@/lib/utils';
import { Photo } from './Photo';
import { Reveal } from './Reveal';

/**
 * A project, as a glass card: photo on top with a category pill overlaid on
 * a gradient scrim, record details below — the pattern Leo Club of
 * Polgasowita's project cards use. Still named `SpecimenSheet` and still
 * carries the accession number this site's record-keeping is built around;
 * only the shape of the card changed.
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
      <article className="sheet group flex h-full flex-col !p-0">
        <Link href={`/projects/${project.slug}`} className="relative block aspect-[3/2] overflow-hidden">
          <Photo
            image={project.heroImage}
            ratio="plate"
            sizes="(min-width: 768px) 33vw, 100vw"
            className="m-0"
            rounded={false}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-panel/80 via-transparent to-transparent" />
          <span className="absolute bottom-3 left-4 inline-flex items-center gap-1.5 rounded-full border border-accent/25 bg-page/70 px-3 py-1 text-[0.65rem] font-semibold tracking-[0.1em] text-accent-strong uppercase backdrop-blur-sm">
            {accession} · {project.category.replace(/-/g, ' ')}
          </span>
        </Link>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="font-serif text-xl leading-snug font-semibold text-ink">
            <Link href={`/projects/${project.slug}`} className="hover:text-accent">
              {project.title}
            </Link>
          </h3>

          <p className="mt-2.5 text-sm leading-relaxed text-ink-muted">{project.summary}</p>

          <dl className="mt-5 flex flex-wrap gap-x-6 gap-y-2 text-xs text-ink-faint">
            <div>
              <dt className="inline">Date · </dt>
              <dd className="inline text-ink-muted">
                {formatDate(project.date, { year: 'numeric', month: 'short', day: 'numeric' })}
              </dd>
            </div>
            {project.location ? (
              <div>
                <dt className="inline">Locality · </dt>
                <dd className="inline text-ink-muted">{project.location}</dd>
              </div>
            ) : null}
          </dl>

          {project.impact && project.impact.length > 0 ? (
            <dl className="mt-5 flex flex-wrap gap-x-7 gap-y-3 border-t border-rule pt-5">
              {project.impact.slice(0, 3).map((stat) => (
                <div key={stat.id}>
                  <dd className="font-serif text-lg font-bold text-accent">
                    {stat.prefix}
                    {typeof stat.value === 'number' ? stat.value.toLocaleString('en-LK') : stat.value}
                    {stat.suffix}
                  </dd>
                  <dt className="label mt-0.5 text-ink-faint">{stat.label}</dt>
                </div>
              ))}
            </dl>
          ) : null}

          <Link
            href={`/projects/${project.slug}`}
            className="group/link mt-auto inline-flex items-center gap-2 pt-6 text-sm font-semibold text-accent hover:text-accent-strong"
          >
            Full record
            <ArrowRight
              aria-hidden
              size={14}
              className="transition-transform group-hover/link:translate-x-1"
            />
          </Link>
        </div>
      </article>
    </Reveal>
  );
}

/** Formats an archive position as a herbarium-style accession number. */
export function accessionFor(total: number, index: number): string {
  return `GW·${String(total - index).padStart(3, '0')}`;
}
