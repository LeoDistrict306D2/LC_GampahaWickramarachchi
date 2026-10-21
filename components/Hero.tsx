'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import type { ImageRef } from '@/lib/types';

export interface HeroSlide {
  image: ImageRef;
  kicker: string;
  heading: string;
  accent: string;
  description: string;
}

/**
 * Full-bleed slideshow banner, built to follow Leo Club of Polgasowita's
 * hero: crossfading real photographs with a Ken Burns drift, a gradient
 * scrim, and the headline rotating in sync. In this club's own maroon-black
 * ground and gold accent rather than Polgasowita's navy.
 */
export function Hero({ slides, charterYear }: { slides: HeroSlide[]; charterYear: number | null }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (slides.length < 2) return;
    const timer = setInterval(() => setCurrent((value) => (value + 1) % slides.length), 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const slide = slides[current] ?? slides[0];
  if (!slide) return null;

  return (
    <section className="relative h-[85vh] min-h-[620px] overflow-hidden bg-page">
      {slides.map((item, index) => (
        <div
          key={item.image.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={item.image.src}
            alt=""
            fill
            priority={index === 0}
            sizes="100vw"
            className="animate-ken-burns object-cover"
          />
        </div>
      ))}

      {/* Scrims */}
      <div className="absolute inset-0 bg-gradient-to-b from-page/85 via-page/40 to-page" />
      <div className="absolute inset-0 bg-gradient-to-r from-page/80 via-transparent to-transparent" />
      <div aria-hidden className="grid-pattern absolute inset-0 opacity-20" />

      {/* Ambient glow */}
      <div aria-hidden className="absolute top-1/4 left-1/4 h-96 w-96 rounded-full bg-accent/[0.05] blur-[150px]" />
      <div aria-hidden className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-ember/10 blur-[120px]" />

      <div className="relative z-10 flex h-full items-center">
        <div className="wrap w-full">
          <div className="max-w-2xl">
            <div className="label mb-7 inline-flex items-center gap-2.5 rounded-full border border-rule-strong bg-ink/[0.05] px-4 py-2 backdrop-blur-md">
              {charterYear ? `Chartered ${charterYear}` : 'Leo District 306 D2'} · {slide.kicker}
            </div>

            <h1 className="text-4xl leading-[1.05] font-bold text-ink md:text-6xl">
              <span className="block">{slide.heading}</span>
              <span className="gradient-text block">{slide.accent}</span>
            </h1>

            <p className="measure mt-6 text-base leading-relaxed text-ink-muted">{slide.description}</p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-strong px-6 py-3.5 text-sm font-bold text-on-inverse shadow-[0_0_14px_rgba(227,171,66,0.2)] transition-all duration-300 hover:-translate-y-px hover:shadow-[0_0_26px_rgba(227,171,66,0.35)]"
              >
                Project records
                <ArrowRight aria-hidden size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-full border border-rule-strong bg-ink/[0.05] px-6 py-3.5 text-sm font-semibold text-ink-muted backdrop-blur-sm transition-all duration-300 hover:border-rule-strong hover:bg-ink/[0.08] hover:text-ink"
              >
                About the club
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Slide indicators */}
      {slides.length > 1 ? (
        <div className="absolute inset-x-0 bottom-8 z-20">
          <div className="wrap flex items-center gap-2">
            {slides.map((item, index) => (
              <button
                key={item.image.src}
                type="button"
                onClick={() => setCurrent(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-1 rounded-full transition-all duration-500 ${
                  index === current ? 'w-8 bg-accent' : 'w-1.5 bg-ink/20 hover:bg-ink/40'
                }`}
              />
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
