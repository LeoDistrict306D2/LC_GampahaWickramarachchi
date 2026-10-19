import type { Club } from '@/lib/types';

/**
 * Leo Club of Gampaha Wickramarachchi University of Indigenous Medicine
 * (FISSMS) — club record.
 *
 * Source: the club's completed Project Web Weavers content form, returned to
 * the district, plus the official logo and event photography supplied
 * alongside it. Officer photographs were requested via a Drive link that did
 * not resolve — see README.md.
 */
export const club: Club = {
  name: 'Leo Club of Gampaha Wickramarachchi University of Indigenous Medicine FISSMS',
  shortName: 'GWUIM FISSMS',
  tagline: 'Leadership. Service. Fellowship. Inspiration.',
  motto: 'Leadership · Service · Fellowship · Inspiration',
  description:
    'A university-based Leo club representing the Faculty of Indigenous Social Sciences and Management Studies at Gampaha Wickramarachchi University of Indigenous Medicine, chartered in 2023 and recognised among Leo District 306 D2’s Top 10 Leo Clubs.',
  charterDate: '2023-11-16',
  clubNumber: '156709',
  clubType: 'University-based',
  region: 'Region A',
  zone: 'Zone A2',

  district: 'Leo District 306 D2',
  multipleDistrict: 'Leo Multiple District 306',
  districtUrl: 'https://leodistrict306d2.org/',
  multipleDistrictUrl: 'https://www.leomd306.org/',

  logo: {
    src: '/images/logo/logo.png',
    alt: 'Leo Club of Gampaha Wickramarachchi University of Indigenous Medicine FISSMS crest',
    width: 500,
    height: 500,
  },
  heroImage: {
    src: '/images/hero/hero.jpg',
    alt: 'Members of the Leo Club of GWUIM FISSMS with their club flag',
    width: 2400,
    height: 1800,
  },

  contact: {
    email: 'leoclubofgwuimfissms@gmail.com',
    phone: '+94 70 168 2685',
    address:
      'Faculty of Indigenous Social Sciences and Management Studies, Gampaha Wickramarachchi University of Indigenous Medicine, Indigolla, Gampaha',
  },

  socials: {
    facebook: 'https://www.facebook.com/share/1G1Le6rHX9/',
    instagram: 'https://instagram.com/leo_club_gwuim_fissms?rpxt=MWFqeWg2MHp2OHA3Nw%3D%3D',
    youtube: 'https://youtube.com/@gwuimfissms?si=ZwACUbHPAR0eB6LQ',
    tiktok: 'https://www.tiktok.com/@leo_club_gwuim_fissms?_r=1&_t=ZS-9AYRdKo2M3V',
    whatsapp: 'https://whatsapp.com/channel/0029VbBTyvf9MF99nIYD0x3I',
    email: 'leoclubofgwuimfissms@gmail.com',
  },

  siteUrl: 'https://gwuim.leo306d2.org',

  stats: [
    { id: 'years', value: 4, label: 'Years of service', note: 'Chartered 16 November 2023.' },
    { id: 'members', value: 108, label: 'Active members' },
    { id: 'projects', value: 32, label: 'Projects completed' },
    { id: 'volunteers', value: 99, suffix: '+', label: 'Total volunteers' },
    { id: 'beneficiaries', value: 1000, suffix: '+', label: 'Beneficiaries reached', note: '2025/26 Leoistic year.' },
    { id: 'raised', value: 356.46, prefix: '$', label: 'Funds raised', note: '2025/26 Leoistic year.' },
  ],

  about: {
    story: [
      'The Leo Club of Gampaha Wickramarachchi University of Indigenous Medicine – FISSMS is a university-based Leo club representing students of the Faculty of Indigenous Social Sciences and Management Studies, chartered on 16 November 2023. The club provides a platform for young people to develop leadership, experience and service-oriented skills while contributing to the university and the wider community.',
      'In its charter year the club was recognised as the Most Outstanding New Leo Club of the year. The following Leoistic year brought an award in the Legacy Projects category at A2 Con ’25, and in 2025/26 the club was recognised among Leo District 306 D2’s Top 10 Leo Clubs, with its then-Vice-President, now President, Leo Thilini Lakshika among the district’s Top 3 Club Vice Presidents.',
    ],
    mission:
      'To foster leadership, promote community service, and instil a sense of social responsibility among young individuals, thereby creating a network of youth dedicated to making a difference in the world.',
    vision:
      'A faculty whose students carry leadership, service and fellowship beyond their own community — recognised, year on year, for the difference they make.',
    values: [
      {
        title: 'Leadership',
        description:
          'Every member is given room to lead a project, not only to attend one — the route the club’s own officers came up through.',
      },
      {
        title: 'Service',
        description:
          'Active across eight focus areas, from healthcare and education to environmental conservation and women’s empowerment.',
      },
      {
        title: 'Fellowship',
        description:
          'A club of 108 members that works as one connected network rather than a committee and an audience.',
      },
      {
        title: 'Inspiration',
        description:
          'Recognised among the district’s Top 10 Leo Clubs in 2025/26 — proof the work is noticed, not just done.',
      },
    ],
  },
};
