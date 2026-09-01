'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { club } from '@/content/club';
import { cn } from '@/lib/utils';

/**
 * Header, set as the head of a printed record: an institutional line above, the
 * club name in serif below, a hairline rule under both. It does not shrink,
 * float or change on scroll — the page is a document, and a document's
 * letterhead stays put.
 *
 * Accessibility is structural: a real `aria-expanded`/`aria-controls`
 * disclosure, Escape closes and returns focus to the toggle, body scroll locks
 * while open, and the current route carries `aria-current`.
 */
const nav = [
  { href: '/about', label: 'About' },
  { href: '/projects', label: 'Records' },
  { href: '/board', label: 'Board' },
  { href: '/past-presidents', label: 'Past Presidents' },
  { href: '/achievements', label: 'Awards' },
  { href: '/gallery', label: 'Plates' },
  { href: '/contact', label: 'Contact' },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  // Reset on navigation by adjusting state during render — React's documented
  // pattern — rather than in an effect, which costs an extra render pass.
  const [menuPathname, setMenuPathname] = useState(pathname);
  if (pathname !== menuPathname) {
    setMenuPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);
    panelRef.current?.querySelector<HTMLElement>('a')?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-rule-strong bg-page/97 backdrop-blur-sm">
      <div className="wrap flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex flex-col gap-1" aria-label={`${club.name} — home`}>
          <span className="label">Gampaha Wickramarachchi University · FISSMS</span>
          <span className="font-serif text-lg leading-none text-ink">Leo Club</span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'border-b pb-0.5 text-sm transition-colors',
                      active
                        ? 'border-accent text-accent'
                        : 'border-transparent text-ink-muted hover:border-rule-strong hover:text-ink',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Link
          href="/join"
          className="hidden shrink-0 border border-accent px-4 py-2 text-sm text-accent transition-colors hover:bg-accent hover:text-page lg:inline-block"
        >
          Join
        </Link>

        <button
          ref={toggleRef}
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="site-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink lg:hidden"
        >
          {open ? <X aria-hidden size={22} /> : <Menu aria-hidden size={22} />}
        </button>
      </div>

      <div
        id="site-menu"
        ref={panelRef}
        hidden={!open}
        className="border-t border-rule bg-page lg:hidden"
      >
        <nav aria-label="Primary" className="wrap py-2">
          <ul>
            {nav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <li key={item.href} className="border-b border-rule last:border-b-0">
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={cn(
                      'block py-4 font-serif text-lg',
                      active ? 'text-accent' : 'text-ink',
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/join"
            className="mt-4 mb-4 block border border-accent px-4 py-3 text-center text-sm text-accent"
          >
            Join the club
          </Link>
        </nav>
      </div>
    </header>
  );
}
