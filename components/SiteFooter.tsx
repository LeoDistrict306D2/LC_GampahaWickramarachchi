import Link from 'next/link';
import { ArrowUpRight, Facebook, Instagram, Mail, MapPin, MessageCircle, Music2, Youtube } from 'lucide-react';
import { club } from '@/content/club';

/**
 * Footer, rebuilt to follow Leo Club of Polgasowita's: a gold top line, a
 * closing call-to-action, then a four-column grid, in this club's own
 * maroon/gold ground rather than Polgasowita's navy.
 *
 * A server component: no state, and the year resolves at build time.
 */
const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Records' },
  { href: '/board', label: 'Board' },
  { href: '/achievements', label: 'Awards' },
] as const;

const socials = [
  { icon: Facebook, href: club.socials.facebook, label: 'Facebook' },
  { icon: Instagram, href: club.socials.instagram, label: 'Instagram' },
  { icon: Youtube, href: club.socials.youtube, label: 'YouTube' },
  { icon: Music2, href: club.socials.tiktok, label: 'TikTok' },
  { icon: MessageCircle, href: club.socials.whatsapp, label: 'WhatsApp Channel' },
] as const;

export function SiteFooter() {
  const year = new Date().getFullYear();
  const activeSocials = socials.filter((item) => item.href);

  return (
    <footer className="relative overflow-hidden border-t border-rule bg-panel">
      <div className="gold-line" />
      <div
        aria-hidden
        className="absolute top-0 left-1/2 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-accent/[0.04] blur-[100px]"
      />
      <div aria-hidden className="grid-pattern absolute inset-0 opacity-10" />

      <div className="wrap relative z-10 pt-16 pb-10 md:pt-20">
        {/* CTA ------------------------------------------------------------ */}
        <div className="mb-16 text-center">
          <h2 className="font-serif text-2xl font-semibold text-ink md:text-3xl">
            Ready to add to the record?
          </h2>
          <p className="measure mx-auto mt-3 text-sm text-ink-muted">
            Join a club of 108 members putting leadership, service and fellowship to work.
          </p>
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/join"
              className="rounded-full bg-gradient-to-r from-accent to-accent-strong px-6 py-3 text-sm font-bold text-on-inverse shadow-[0_0_14px_rgba(227,171,66,0.25)] transition-all duration-300 hover:-translate-y-px hover:shadow-[0_0_25px_rgba(227,171,66,0.35)]"
            >
              Join the club
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-rule-strong bg-ink/[0.04] px-6 py-3 text-sm font-semibold text-ink-muted transition-all duration-300 hover:bg-ink/[0.08] hover:text-ink"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="h-px bg-rule" />

        {/* Columns ---------------------------------------------------------- */}
        <div className="mt-12 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-serif text-sm font-bold text-ink">Leo Club</p>
            <p className="label mt-0.5 text-ink-faint">GWUIM · FISSMS</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-faint">{club.tagline}</p>
            {activeSocials.length > 0 ? (
              <div className="mt-5 flex flex-wrap gap-2">
                {activeSocials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="flex h-8 w-8 items-center justify-center rounded-lg border border-rule bg-ink/[0.04] text-ink-faint transition-colors hover:border-accent/30 hover:bg-accent/10 hover:text-accent"
                  >
                    <Icon aria-hidden size={14} />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <nav aria-label="Navigate">
            <p className="label">Navigate</p>
            <ul className="mt-4 space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-ink-faint transition-colors hover:text-accent"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="label">Contact</p>
            <ul className="mt-4 space-y-3">
              {club.contact.email ? (
                <li className="flex items-center gap-2.5">
                  <Mail aria-hidden size={14} className="shrink-0 text-accent/60" />
                  <a
                    href={`mailto:${club.contact.email}`}
                    className="text-sm font-medium text-ink-faint transition-colors hover:text-accent"
                  >
                    {club.contact.email}
                  </a>
                </li>
              ) : null}
              {club.contact.address ? (
                <li className="flex items-start gap-2.5">
                  <MapPin aria-hidden size={14} className="mt-0.5 shrink-0 text-accent/60" />
                  <span className="text-sm text-ink-faint">Indigolla, Gampaha</span>
                </li>
              ) : null}
            </ul>
            {activeSocials.length > 0 ? (
              <div className="mt-4 space-y-1.5">
                {activeSocials.slice(0, 2).map(({ href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="flex items-center gap-1.5 text-xs font-medium text-ink-faint transition-colors hover:text-accent"
                  >
                    {label} <ArrowUpRight aria-hidden size={10} />
                  </a>
                ))}
              </div>
            ) : null}
          </div>

          <div>
            <p className="label">Affiliation</p>
            <p className="mt-4 text-sm leading-relaxed text-ink-faint">
              A member club of{' '}
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
            </p>
          </div>
        </div>

        <div className="mt-12 h-px bg-rule" />
        <div className="mt-6 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-ink-faint">
            © {year} {club.name}.
          </p>
          <p className="text-xs text-ink-faint">Chartered 16 November 2023 · Leo District 306 D2</p>
        </div>
      </div>
    </footer>
  );
}
