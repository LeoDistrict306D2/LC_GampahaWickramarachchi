import { Fraunces, Inter } from 'next/font/google';

/**
 * Fraunces for headings, Inter for text and labels.
 *
 * Fraunces is a variable serif with optical sizing, which is what a document
 * design needs: the same family reads correctly at a 3.5rem plate title and at
 * a 0.95rem determination value. Inter handles the small-caps label type where
 * a serif would be hard to read at 0.65rem.
 *
 * Loaded via next/font, which self-hosts the files and removes the
 * render-blocking request to fonts.googleapis.com.
 */
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const fontVariables = `${fraunces.variable} ${inter.variable}`;
