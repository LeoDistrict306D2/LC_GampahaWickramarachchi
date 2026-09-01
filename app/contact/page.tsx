import type { Metadata } from 'next';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { club } from '@/content/club';
import { PageMasthead } from '@/components/PageMasthead';

export const metadata: Metadata = {
  title: 'Contact',
  description: `How to reach ${club.name}.`,
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageMasthead
        kicker="Contact"
        title="Get in touch."
        standfirst="For collaborations, clinic requests, or practitioners willing to contribute to the documentation archive."
      />

      <div className="wrap band grid gap-12 md:grid-cols-12">
        <section className="md:col-span-7" aria-labelledby="details">
          <p className="label" id="details">
            Details
          </p>
          <dl className="mt-6 border-t border-rule-strong">
            {club.contact.email ? (
              <div className="flex items-start gap-4 border-b border-rule py-5">
                <Mail aria-hidden size={17} className="mt-1.5 shrink-0 text-accent" />
                <div>
                  <dt className="label text-ink-faint">Email</dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${club.contact.email}`}
                      className="font-serif text-xl break-all text-ink underline underline-offset-4 hover:text-accent"
                    >
                      {club.contact.email}
                    </a>
                  </dd>
                </div>
              </div>
            ) : null}

            {club.contact.phone ? (
              <div className="flex items-start gap-4 border-b border-rule py-5">
                <Phone aria-hidden size={17} className="mt-1.5 shrink-0 text-accent" />
                <div>
                  <dt className="label text-ink-faint">Phone</dt>
                  <dd className="mt-1.5">
                    <a
                      href={`tel:${club.contact.phone}`}
                      className="font-serif text-xl text-ink hover:text-accent"
                    >
                      {club.contact.phone}
                    </a>
                  </dd>
                </div>
              </div>
            ) : null}

            {club.contact.address ? (
              <div className="flex items-start gap-4 border-b border-rule py-5">
                <MapPin aria-hidden size={17} className="mt-1.5 shrink-0 text-accent" />
                <div>
                  <dt className="label text-ink-faint">Address</dt>
                  <dd className="mt-1.5 font-serif text-xl leading-snug text-ink">
                    {club.contact.address}
                  </dd>
                </div>
              </div>
            ) : null}
          </dl>
        </section>

        <section className="md:col-span-4 md:col-start-9" aria-labelledby="social">
          <p className="label" id="social">
            Elsewhere
          </p>
          <ul className="mt-6 border-t border-rule">
            {club.socials.facebook ? (
              <li className="border-b border-rule">
                <a
                  href={club.socials.facebook}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 py-4 text-ink-muted transition-colors hover:text-accent"
                >
                  <Facebook aria-hidden size={17} />
                  Facebook
                </a>
              </li>
            ) : null}
            {club.socials.instagram ? (
              <li className="border-b border-rule">
                <a
                  href={club.socials.instagram}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 py-4 text-ink-muted transition-colors hover:text-accent"
                >
                  <Instagram aria-hidden size={17} />
                  Instagram
                </a>
              </li>
            ) : null}
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-ink-faint">
            Looking to join rather than get in touch? The membership page has a form that reaches
            the secretary directly.
          </p>
        </section>
      </div>
    </>
  );
}
