'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="wrap flex min-h-[60vh] flex-col justify-center py-24">
      <p className="label">Error</p>
      <h1 className="mt-4 font-serif text-4xl text-ink md:text-plate">Something went wrong.</h1>
      <p className="measure mt-5 text-lg text-ink-muted">
        This page failed to render. Trying again usually clears it.
      </p>
      <button
        type="button"
        onClick={reset}
        className="mt-8 self-start rounded-full bg-gradient-to-r from-accent to-accent-strong px-6 py-3 text-sm font-bold text-on-inverse"
      >
        Try again
      </button>
    </div>
  );
}
