import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="label">Error 404</p>
      <h1 className="mt-4 font-serif text-4xl text-ink md:text-plate">No record at that address.</h1>
      <p className="measure mt-5 text-lg text-ink-muted">
        The page you asked for is not in the archive. It may have been renamed, or never existed.
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <Link href="/" className="border border-accent bg-accent px-6 py-3 text-sm text-page hover:bg-accent-strong">
          Home
        </Link>
        <Link
          href="/projects"
          className="border border-rule-strong px-6 py-3 text-sm text-ink-muted hover:border-ink hover:text-ink"
        >
          Project records
        </Link>
      </div>
    </div>
  );
}
