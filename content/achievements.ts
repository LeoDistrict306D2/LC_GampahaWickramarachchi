import type { Achievement } from '@/lib/types';

/** TODO(content): confirm against the club's award records. */
export const achievements: Achievement[] = [
  {
    id: 'health-2025',
    title: 'Outstanding Health Service Project',
    competition: 'Leo District 306 D2 Convention',
    year: '2025',
    level: 'winner',
    description: 'For Sanjeewani, and specifically for scheduling follow-up visits from the outset.',
  },
  {
    id: 'uni-club-2024',
    title: 'Best University Leo Club',
    competition: 'Leo District 306 D2 Convention',
    year: '2024',
    level: 'runner-up',
  },
  {
    id: 'heritage-2024',
    title: 'Heritage and Culture Award',
    competition: 'Leo Multiple District 306',
    year: '2024',
    level: 'merit',
    description: 'For Parampara and its consent-first approach to recording practitioners.',
  },
];
