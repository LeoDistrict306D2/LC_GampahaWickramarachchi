import type { Metadata } from 'next';
import Link from 'next/link';
import { club } from '@/content/club';
import { gallery } from '@/content/gallery';
import { PageMasthead } from '@/components/PageMasthead';
import { Photo } from '@/components/Photo';

export const metadata: Metadata = {
  title: 'Plates',
  description: `Photographs from the work of ${club.name}.`,
  alternates: { canonical: '/gallery' },
};

export default function GalleryPage() {
  return (
    <>
      <PageMasthead
        kicker="Plates"
        title="From the field."
        standfirst="Photographs taken during clinics, garden work and documentation visits, filed against the record they belong to."
      />

      <div className="wrap band">
        {gallery.length === 0 ? (
          <div className="measure">
            <p className="text-ink-muted">
              The plate collection is empty while the club&rsquo;s photography is being catalogued.
              Project photographs are already published against each record.
            </p>
            <Link
              href="/projects"
              className="mt-6 inline-block text-sm text-accent hover:text-accent-strong"
            >
              Go to the archive →
            </Link>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {gallery.map((item, index) => (
              <Photo
                key={item.id}
                image={item}
                ratio="plate"
                plate={`Pl. ${index + 1}`}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
