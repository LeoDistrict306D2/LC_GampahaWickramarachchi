'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Membership enquiry form.
 *
 * No backend, so rather than render a form that silently discards what people
 * type, this composes a pre-filled email and hands it to the visitor's mail
 * client. It works, needs no server or third-party form service, and no
 * personal data passes through anyone else's hands.
 */
export function JoinForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get('name') ?? '');

    const body = [
      `Name: ${name}`,
      `Faculty and year: ${String(data.get('faculty') ?? '')}`,
      `Registration number: ${String(data.get('reg') ?? '')}`,
      '',
      String(data.get('message') ?? ''),
    ].join('\n');

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      `Membership enquiry — ${name}`,
    )}&body=${encodeURIComponent(body)}`;

    setSent(true);
  }

  const field =
    'mt-2 w-full rounded-xl border border-rule-strong bg-ink/[0.03] px-3.5 py-2.5 text-ink transition-colors focus:border-accent focus:outline-none';

  return (
    <form onSubmit={handleSubmit} className="measure">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="join-name" className="label block">
            Full name
          </label>
          <input id="join-name" name="name" type="text" required autoComplete="name" className={field} />
        </div>
        <div>
          <label htmlFor="join-faculty" className="label block">
            Faculty and year
          </label>
          <input id="join-faculty" name="faculty" type="text" required className={field} />
        </div>
        <div>
          <label htmlFor="join-reg" className="label block">
            Registration no.
          </label>
          <input id="join-reg" name="reg" type="text" className={field} />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="join-message" className="label block">
            Which programme interests you?
          </label>
          <textarea id="join-message" name="message" rows={5} className={field} />
        </div>
      </div>

      <button
        type="submit"
        className="group mt-7 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-strong px-6 py-3 text-sm font-bold text-on-inverse shadow-[0_0_14px_rgba(227,171,66,0.2)] transition-all duration-300 hover:-translate-y-px hover:shadow-[0_0_24px_rgba(227,171,66,0.35)]"
      >
        Send enquiry
        <ArrowRight aria-hidden size={15} className="transition-transform group-hover:translate-x-1" />
      </button>

      <p aria-live="polite" className="mt-4 min-h-[1.5rem] text-sm text-ink-muted">
        {sent
          ? 'Your email app should have opened with the message ready. If it did not, write to us directly at the address below.'
          : ''}
      </p>
    </form>
  );
}
