import Link from 'next/link';

/**
 * Page heading, set as the head of a plate: a small label line, the title in
 * serif, and a hairline rule closing the block. No coloured banner — keeping
 * every page on the same paper is what makes the site read as one document.
 */
export function PageMasthead({
  kicker,
  title,
  standfirst,
  breadcrumb,
}: {
  kicker: string;
  title: string;
  standfirst?: string;
  breadcrumb?: { href: '/projects'; label: string };
}) {
  return (
    <div className="relative overflow-hidden border-b border-rule bg-panel">
      <div aria-hidden className="grid-pattern absolute inset-0 opacity-10" />
      <div aria-hidden className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-accent/[0.06] blur-[120px]" />
      <div className="wrap relative z-10 pt-12 pb-10 md:pt-18 md:pb-14">
      {breadcrumb ? (
        <nav aria-label="Breadcrumb" className="mb-6">
          <Link href={breadcrumb.href} className="text-sm text-accent hover:text-accent-strong">
            ← {breadcrumb.label}
          </Link>
        </nav>
      ) : null}

      <p className="label">{kicker}</p>

      <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.06] text-ink md:text-plate">
        {title}
      </h1>

      {standfirst ? (
        <p className="measure mt-5 text-lg leading-relaxed text-ink-muted">{standfirst}</p>
      ) : null}
      </div>
    </div>
  );
}
