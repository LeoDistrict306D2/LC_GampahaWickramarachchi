import { Space_Grotesk, Inter } from 'next/font/google';

/**
 * Space Grotesk for headings, Inter for text and labels — the same pairing
 * Leo Club of Polgasowita's site uses, which this site's redesign follows.
 *
 * Loaded via next/font, which self-hosts the files and removes the
 * render-blocking request to fonts.googleapis.com.
 */
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['500', '600', '700'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const fontVariables = `${spaceGrotesk.variable} ${inter.variable}`;
