import type { Metadata } from 'next';
import { Facebook, Instagram, Mail, MapPin, MessageCircle, Music2, Phone, Youtube } from 'lucide-react';
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
        standfirst="For collaborations, project enquiries, or to support the club's work directly."
      />

      <div className="wrap band grid gap-12 md:grid-cols-12">
        <section aria-labelledby="details" className="md:col-span-7">
          <p className="label" id="details">
            Details
          </p>
          <div className="mt-6 flex flex-col gap-3">
            {club.contact.email ? (
              <div className="sheet flex items-start gap-4">
                <Mail aria-hidden size={17} className="mt-1.5 shrink-0 text-accent" />
                <div>
                  <dt className="label text-ink-faint">Email</dt>
                  <dd className="mt-1.5">
                    <a
                      href={`mailto:${club.contact.email}`}
                      className="font-serif text-xl font-semibold break-all text-ink underline underline-offset-4 hover:text-accent"
                    >
                      {club.contact.email}
                    </a>
                  </dd>
                </div>
              </div>
            ) : null}

            {club.contact.phone ? (
              <div className="sheet flex items-start gap-4">
                <Phone aria-hidden size={17} className="mt-1.5 shrink-0 text-accent" />
                <div>
                  <dt className="label text-ink-faint">Phone</dt>
                  <dd className="mt-1.5">
                    <a
                      href={`tel:${club.contact.phone}`}
                      className="font-serif text-xl font-semibold text-ink hover:text-accent"
                    >
                      {club.contact.phone}
                    </a>
                  </dd>
                </div>
              </div>
            ) : null}

            {club.contact.address ? (
              <div className="sheet flex items-start gap-4">
                <MapPin aria-hidden size={17} className="mt-1.5 shrink-0 text-accent" />
                <div>
                  <dt className="label text-ink-faint">Address</dt>
                  <dd className="mt-1.5 font-serif text-xl leading-snug font-semibold text-ink">
                    {club.contact.address}
                  </dd>
                </div>
              </div>
            ) : null}
          </div>
        </section>

        <section className="md:col-span-4 md:col-start-9" aria-labelledby="social">
          <p className="label" id="social">
            Elsewhere
          </p>
          <div className="sheet mt-6">
          <ul className="border-t border-rule">
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
            {club.socials.youtube ? (
              <li className="border-b border-rule">
                <a
                  href={club.socials.youtube}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 py-4 text-ink-muted transition-colors hover:text-accent"
                >
                  <Youtube aria-hidden size={17} />
                  YouTube
                </a>
              </li>
            ) : null}
            {club.socials.tiktok ? (
              <li className="border-b border-rule">
                <a
                  href={club.socials.tiktok}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 py-4 text-ink-muted transition-colors hover:text-accent"
                >
                  <Music2 aria-hidden size={17} />
                  TikTok
                </a>
              </li>
            ) : null}
            {club.socials.whatsapp ? (
              <li className="border-b border-rule">
                <a
                  href={club.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-3 py-4 text-ink-muted transition-colors hover:text-accent"
                >
                  <MessageCircle aria-hidden size={17} />
                  WhatsApp Channel
                </a>
              </li>
            ) : null}
          </ul>

          <p className="label mt-10">Downloads</p>
          <ul className="mt-4 border-t border-rule">
            <li className="border-b border-rule">
              <a
                href="https://anyflip.com/bookcase/tclyj"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center py-4 text-sm text-ink-muted transition-colors hover:text-accent"
              >
                Newsletter
              </a>
            </li>
            <li className="border-b border-rule">
              <a
                href="https://anyflip.com/dszco/sbpa/"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center py-4 text-sm text-ink-muted transition-colors hover:text-accent"
              >
                Club directory, 2026/27
              </a>
            </li>
          </ul>

          <p className="mt-8 text-sm leading-relaxed text-ink-faint">
            The club accepts donations in support of its projects — contact the club directly for
            details. Looking to join rather than get in touch? The membership page has a form
            that reaches the secretary directly.
          </p>
          </div>
        </section>
      </div>
    </>
  );
}
