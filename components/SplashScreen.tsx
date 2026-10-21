import Image from 'next/image';
import { club } from '@/content/club';

/**
 * Entry splash, built from the sheet/label vocabulary already in
 * `globals.css`. Pure CSS fade — no client JS — so it degrades correctly
 * with JavaScript off, and opacity is the only thing that moves: "a
 * scholarly record does not slide around," here included.
 */
export function SplashScreen() {
  return (
    <div aria-hidden="true" className="splash-screen fixed inset-0 z-80 flex items-center justify-center bg-page">
      <div className="sheet flex flex-col items-center text-center">
        <span className="label">Leo District 306 D2</span>
        <Image
          src={club.logo.src}
          alt=""
          width={64}
          height={64}
          priority
          className="mt-5"
        />
        <h1 className="mt-5 text-2xl text-ink">Leo Club of {club.shortName}</h1>
        <p className="label mt-3">{club.tagline}</p>
      </div>
    </div>
  );
}
