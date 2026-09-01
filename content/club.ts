import type { Club } from '@/lib/types';

/**
 * Leo Club of Gampaha Wickramarachchi University of Indigenous Medicine
 * (FISSMS) — club record.
 *
 * A university faculty club, so the register here is more academic than the
 * community clubs': the copy explains method as much as outcome.
 *
 * TODO(content): charter date, roster, contact details and photography are
 * placeholders pending real values from the club.
 */
export const club: Club = {
  name: 'Leo Club of Gampaha Wickramarachchi University of Indigenous Medicine FISSMS',
  shortName: 'GWUIM FISSMS',
  tagline: 'Practise what we study.',
  motto: 'Leadership · Experience · Opportunity',
  description:
    'A faculty Leo club at Gampaha Wickramarachchi University of Indigenous Medicine. Our members train in indigenous medicine and social sciences, and the club exists to take that training out of the lecture hall — into clinics, gardens, and villages that rarely see either.',
  charterDate: '2018-11-14',

  district: 'Leo District 306 D2',
  multipleDistrict: 'Leo Multiple District 306',
  sponsoringLionsClub: 'Lions Club of Yakkala',
  districtUrl: 'https://leodistrict306d2.org/',
  multipleDistrictUrl: 'https://www.leomd306.org/',

  logo: {
    src: '/images/logo/logo.png',
    alt: 'Leo Club of GWUIM FISSMS emblem',
    width: 512,
    height: 512,
  },
  heroImage: {
    src: '/images/hero/hero.png',
    alt: 'Members of the Leo Club of GWUIM FISSMS at a community health clinic',
    width: 1800,
    height: 900,
  },

  contact: {
    email: 'leogwuimfissms@gmail.com',
    address: 'Gampaha Wickramarachchi University of Indigenous Medicine, Yakkala, Sri Lanka',
  },

  socials: {
    facebook: 'https://www.facebook.com/leogwuimfissms',
    instagram: 'https://www.instagram.com/leogwuimfissms',
    email: 'leogwuimfissms@gmail.com',
  },

  siteUrl: 'https://gwuim.leo306d2.org',

  stats: [
    { id: 'years', value: 7, label: 'Years of service' },
    { id: 'members', value: 63, label: 'Student members' },
    { id: 'clinics', value: 34, label: 'Clinics held' },
    { id: 'seen', value: 4100, suffix: '+', label: 'Patients seen' },
  ],

  about: {
    story: [
      'The club was chartered in 2018 by students of the Faculty of Indigenous Social Sciences and Management Studies, on a simple observation: the university sits within reach of villages where traditional medicine is the first line of care and often the only one, and students were graduating without ever having practised in them.',
      'Our work is therefore mostly clinical and mostly repeated. Mobile clinics with faculty supervision. A medicinal plant garden maintained on campus and propagated outward. Documentation of local preparations from practitioners who have never written any of it down.',
      'That last one matters more than it sounds. Much of what is known in these villages is held by one or two elderly practitioners. When they go, it goes. Writing it down properly, with their consent and their names on it, is service work as much as any clinic.',
    ],
    mission:
      'To put student training to use in the communities around the university, and to record indigenous practice carefully before it is lost.',
    vision:
      'A faculty whose graduates have already served the villages they were trained to serve.',
    values: [
      {
        title: 'Supervised, always',
        description:
          'No clinical activity happens without faculty supervision. Enthusiasm is not a qualification.',
      },
      {
        title: 'Record with consent',
        description:
          'Practitioners who share their knowledge are named, credited, and given a copy. Nothing is collected anonymously.',
      },
      {
        title: 'Return to the same villages',
        description:
          'A single clinic tells you nothing about whether anyone got better. We schedule follow-ups from the start.',
      },
      {
        title: 'Grow what we prescribe',
        description:
          'The campus garden supplies the clinics. Members learn propagation alongside preparation.',
      },
    ],
  },
};
