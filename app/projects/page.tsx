import type { Metadata } from 'next';
import { club } from '@/content/club';
import { projects } from '@/content/projects';
import { byDateDesc } from '@/lib/utils';
import { PageMasthead } from '@/components/PageMasthead';
import { SpecimenSheet, accessionFor } from '@/components/SpecimenSheet';

export const metadata: Metadata = {
  title: 'Project records',
  description: `Every project run by ${club.name}, recorded in full.`,
  alternates: { canonical: '/projects' },
};

export default function ProjectsPage() {
  const entries = byDateDesc(projects);

  return (
    <>
      <PageMasthead
        kicker={`${entries.length} records`}
        title="The archive."
        standfirst="Every project the club has run, newest first, each with its determination label."
      />

      <div className="wrap band flex flex-col gap-8">
        {entries.map((project, index) => (
          <SpecimenSheet
            key={project.id}
            project={project}
            accession={accessionFor(entries.length, index)}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
