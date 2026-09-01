import Link from 'next/link';
import { Facebook, Instagram, Mail } from 'lucide-react';
import { club } from '@/content/club';

/**
 * Colophon footer — the affiliation chain set as a printed sentence rather than
 * a row of logos, so the district never out-shouts the club on the club's own
 * site.
 *
 * A server component: no state, and the year resolves at build time.
 */
const columns = [
  {
    heading: 'The club',
    links: [
      { href: '/about', label: 'About' },
      { href: '/board', label: 'Board' },
      { href: '/past-presidents', label: 'Past Presidents' },
      { href: '/achievements', label: 'Awards' },
    ],
  },
  {
    heading: 'The work',
    links: [
      { href: '/projects', label: 'Project records' },
      { href: '/gallery', label: 'Plates' },
    ],
  },
  {
    heading: 'Take part',
    links: [
      { href: '/join', label: 'Join the club' },
      { href: '/contact', label: 'Contact' },
    ],
  },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-rule-strong bg-panel">
      <div className="wrap py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="label">Leo District 306 D2</p>
            <p className="mt-3 font-serif text-2xl leading-snug text-ink">{club.name}</p>
            <p className="mt-3 text-sm text-ink-muted italic">{club.motto}</p>
            <p className="measure mt-5 text-sm leading-relaxed text-ink-muted">
              {club.description}
            </p>

            <ul className="mt-7 flex gap-3">
              {club.socials.facebook ? (
                <li>
                  <a
                    href={club.socials.facebook}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Facebook"
                    className="inline-flex h-10 w-10 items-center justify-center border border-rule-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Facebook aria-hidden size={17} />
                  </a>
                </li>
              ) : null}
              {club.socials.instagram ? (
                <li>
                  <a
                    href={club.socials.instagram}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Instagram"
                    className="inline-flex h-10 w-10 items-center justify-center border border-rule-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Instagram aria-hidden size={17} />
                  </a>
                </li>
              ) : null}
              {club.contact.email ? (
                <li>
                  <a
                    href={`mailto:${club.contact.email}`}
                    aria-label="Email"
                    className="inline-flex h-10 w-10 items-center justify-center border border-rule-strong text-ink-muted transition-colors hover:border-accent hover:text-accent"
                  >
                    <Mail aria-hidden size={17} />
                  </a>
                </li>
              ) : null}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-3 md:col-span-6 md:col-start-7">
            {columns.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h2 className="label">{column.heading}</h2>
                <ul className="mt-4 space-y-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-ink-muted underline-offset-4 transition-colors hover:text-accent hover:underline"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <p className="mt-14 border-t border-rule pt-6 text-xs leading-relaxed text-ink-faint">
          {club.name} is a member club of{' '}
          <a
            href={club.districtUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink-muted underline underline-offset-2 hover:text-accent"
          >
            {club.district}
          </a>
          , part of{' '}
          <a
            href={club.multipleDistrictUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="text-ink-muted underline underline-offset-2 hover:text-accent"
          >
            {club.multipleDistrict}
          </a>
          , within Lions Clubs International.
          {club.sponsoringLionsClub ? ` Sponsored by the ${club.sponsoringLionsClub}.` : ''}
        </p>

        <p className="mt-3 text-xs text-ink-faint">
          © {year} {club.name}.
        </p>
      </div>
    </footer>
  );
}
