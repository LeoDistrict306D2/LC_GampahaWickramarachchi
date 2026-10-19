import type { PastPresident } from '@/lib/types';

/**
 * The club's Project Web Weavers submission covered only the current board
 * (Section D). The one confirmed prior year comes from the club's own
 * achievements text (Section C): Leo Jeena Randuni Peiris served as
 * President through 2025/26, recognised among the district's Top 10 Club
 * Presidents at D2 Con '26 before Leo Thilini Lakshika's installation as
 * President for 2026/27 at ASCEND '26. Earlier years are not yet documented.
 */
export const pastPresidents: PastPresident[] = [
  {
    year: '2025/26',
    name: 'Leo Jeena Randuni Peiris',
    highlights: ['Top 10 Club Presidents, D2 Con ’26'],
  },
];
