import type { Project } from '@/lib/types';

const placeholder = (alt: string) => ({
  src: '/images/projects/placeholder.png',
  alt,
  width: 1600,
  height: 1200,
});

/**
 * Projects & events, from the club's own Project Web Weavers submission
 * (Section F). Only D2 Con '26 has a confirmed, matching photograph from the
 * photos the club supplied; ASCEND '26 and Nexus '26 use the shared
 * placeholder until event-specific photos are available.
 */
export const projects: Project[] = [
  {
    id: 'ascend-26',
    slug: 'ascend-26',
    title: "ASCEND '26 — 4th Installation Ceremony",
    summary:
      'The 4th Installation Ceremony of the Leo Club of GWUIM–FISSMS, installing the 2026/27 Executive Committee.',
    category: 'leadership',
    year: '2026/27',
    date: '2026-09-12',
    featured: true,
    heroImage: placeholder("The ASCEND '26 Installation Ceremony"),
    story: [
      'The 4th Installation Ceremony of the Leo Club of GWUIM–FISSMS, celebrating club achievements and officially installing the new Executive Committee. The event emphasised leadership, service, fellowship, inspiration and reaching greater heights.',
    ],
  },
  {
    id: 'd2-con-26',
    slug: 'd2-con-26',
    title: 'D2 Con ’26',
    summary:
      'District-level Leo convention where the club was recognised among the Top 10 Leo Clubs and received 3rd Highest Membership Growth.',
    category: 'leadership',
    year: '2025/26',
    date: '2026-06-20',
    featured: true,
    heroImage: {
      src: '/images/projects/d2-con-26/hero.jpg',
      alt: 'Leo Club of GWUIM FISSMS recognised among the Top 10 Club Presidents at D2 Con ’26',
      width: 2048,
      height: 1365,
    },
    gallery: [
      {
        src: '/images/projects/d2-con-26/g1.jpg',
        alt: 'Club members on stage at D2 Con ’26',
        width: 1800,
        height: 1390,
      },
    ],
    story: [
      'District-level Leo convention and recognition event where the club was recognised among the Top 10 Leo Clubs and received the 3rd Highest Membership Growth recognition. Club leadership and projects also received recognition and nominations, including President Leo Jeena Randuni Peiris among the district’s Top 10 Club Presidents.',
    ],
  },
  {
    id: 'nexus-26-mid-year-review',
    slug: 'nexus-26-mid-year-review',
    title: "Nexus '26 Mid-Year Review",
    summary:
      'District/club review held at the University of Sri Jayewardenepura, where the club’s progress was reviewed.',
    category: 'leadership',
    year: '2025/26',
    date: '2026-01-24',
    location: 'University of Sri Jayewardenepura',
    featured: true,
    heroImage: placeholder("Nexus '26 Mid-Year Review"),
    story: [
      'Mid-Year Review held at the University of Sri Jayewardenepura, where the club’s progress was reviewed and Leo Thilini Lakshika was recognised among the Top 3 Club Vice Presidents.',
    ],
  },
];
