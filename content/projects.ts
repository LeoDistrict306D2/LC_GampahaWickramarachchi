import type { Project } from '@/lib/types';

/**
 * Project records.
 *
 * TODO(content): illustrative records in the club's format — replace with real
 * project data. `heroImage` points at the shared placeholder until real
 * photography exists.
 */
const placeholder = (alt: string) => ({
  src: '/images/projects/placeholder.png',
  alt,
  width: 1600,
  height: 1067,
});

export const projects: Project[] = [
  {
    id: 'sanjeewani',
    slug: 'sanjeewani',
    title: 'Sanjeewani',
    summary:
      'A supervised mobile clinic programme serving four villages in the Gampaha district, with scheduled follow-up visits.',
    category: 'health',
    year: '2025/26',
    date: '2025-07-19',
    location: 'Gampaha district',
    featured: true,
    heroImage: placeholder('A supervised mobile clinic session in a village hall'),
    story: [
      'Sanjeewani runs on a fixed rotation: four villages, one Saturday each per month, with two faculty members supervising every session.',
      'The rotation is the design decision that matters. A clinic that visits once produces a queue, a photograph, and no information. A clinic that returns produces case notes, and case notes are the only way to know whether anything worked.',
      'Patients are referred on to the university teaching hospital where the presentation is outside our scope. Roughly one in nine is, which is itself a useful number to have.',
    ],
    objectives: [
      'Hold a supervised clinic in each of four villages every month',
      'Keep case notes and schedule follow-ups from the first visit',
      'Refer presentations outside scope rather than treating them',
    ],
    impact: [
      { id: 'clinics', value: 34, label: 'Clinics held' },
      { id: 'patients', value: 4100, suffix: '+', label: 'Patients seen' },
      { id: 'referrals', value: 448, label: 'Referred onward' },
    ],
    partners: [{ name: 'GWUIM Teaching Hospital' }],
  },
  {
    id: 'osu-uyana',
    slug: 'osu-uyana',
    title: 'Osu Uyana',
    summary:
      'A medicinal plant garden maintained on campus, supplying the clinics and propagating outward to village gardens.',
    category: 'environment',
    year: '2025/26',
    date: '2025-03-08',
    location: 'GWUIM campus, Yakkala',
    featured: true,
    heroImage: placeholder('Students working in the campus medicinal plant garden'),
    story: [
      'The garden holds 112 species. It exists so that students learn a plant standing in the ground before they meet it dried in a jar.',
      'It also supplies the Sanjeewani clinics, which closes a loop that is usually open: the same members who prescribe a preparation have grown, harvested and prepared it.',
      'Cuttings go out to household gardens in the villages on the clinic rotation. Ninety-four households now grow at least five of the species themselves.',
    ],
    objectives: [
      'Maintain a documented living collection for teaching use',
      'Supply the mobile clinics from the garden rather than by purchase',
      'Propagate priority species out to village household gardens',
    ],
    impact: [
      { id: 'species', value: 112, label: 'Species maintained' },
      { id: 'households', value: 94, label: 'Village gardens started' },
      { id: 'cuttings', value: 1300, suffix: '+', label: 'Cuttings distributed' },
    ],
  },
  {
    id: 'parampara',
    slug: 'parampara',
    title: 'Parampara',
    summary:
      'Documenting traditional preparations with named practitioners, recorded with consent and returned to them in print.',
    category: 'education',
    year: '2024/25',
    date: '2024-12-02',
    location: 'Gampaha and Kurunegala districts',
    featured: true,
    heroImage: placeholder('A student recording a traditional practitioner’s preparation notes'),
    story: [
      'Much of what is known in these villages is held by one or two elderly practitioners and has never been written down. When they go, it goes.',
      'Parampara records preparations with the practitioner named and credited, under written consent, and returns a bound copy to them before anything is archived. Nineteen practitioners have taken part.',
      'The faculty holds the archive. Nothing is published commercially, and nothing is collected anonymously — that was the condition several practitioners set, and it was the right one.',
    ],
    objectives: [
      'Record preparations under written, informed consent',
      'Name and credit every practitioner who contributes',
      'Return a bound copy to the practitioner before archiving',
    ],
    impact: [
      { id: 'practitioners', value: 19, label: 'Practitioners recorded' },
      { id: 'preparations', value: 240, label: 'Preparations documented' },
      { id: 'villages', value: 11, label: 'Villages visited' },
    ],
  },
  {
    id: 'nutrition-survey',
    slug: 'nutrition-survey',
    title: 'Nutrition Survey',
    summary:
      'A household nutrition survey across two villages, conducted with the faculty of social sciences.',
    category: 'health',
    year: '2024/25',
    date: '2024-08-17',
    location: 'Gampaha district',
    heroImage: placeholder('Students conducting a household nutrition survey'),
    impact: [
      { id: 'households', value: 310, label: 'Households surveyed' },
      { id: 'children', value: 186, label: 'Children assessed' },
    ],
  },
  {
    id: 'blood-camp',
    slug: 'blood-camp',
    title: 'Blood Camp',
    summary: 'An annual campus donation camp with the National Blood Transfusion Service.',
    category: 'health',
    year: '2023/24',
    date: '2024-04-11',
    location: 'GWUIM campus, Yakkala',
    heroImage: placeholder('Donors at the campus blood donation camp'),
    impact: [
      { id: 'units', value: 96, label: 'Units collected' },
      { id: 'donors', value: 112, label: 'Donors attended' },
    ],
    partners: [{ name: 'National Blood Transfusion Service' }],
  },
  {
    id: 'first-clinic',
    slug: 'first-clinic',
    title: 'First Clinic',
    summary:
      'The club’s first supervised clinic, held in Yakkala three months after charter.',
    category: 'health',
    year: '2018/19',
    date: '2019-02-16',
    location: 'Yakkala',
    heroImage: placeholder('The club’s first supervised community clinic'),
    impact: [
      { id: 'patients', value: 78, label: 'Patients seen' },
      { id: 'members', value: 21, label: 'Members attended' },
    ],
  },
];
