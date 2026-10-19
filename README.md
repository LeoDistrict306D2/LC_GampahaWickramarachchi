# Leo Club of GWUIM FISSMS — website

Gampaha Wickramarachchi University of Indigenous Medicine · Faculty of
Indigenous Social Sciences and Management Studies

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

**Design concept: *Herbarium*.** The club sits in a faculty of indigenous
medicine, so the site borrows the form of a herbarium sheet: a bordered mounting
sheet, a printed determination label carrying the metadata, and hairline rules
everywhere else. Projects are presented as **specimen sheets with accession
numbers**, not cards. The palette is the club's own crest colours — Maroon and
Gold — on parchment.

Motion is almost absent by design — opacity only, no movement. A scholarly
record does not slide around.

One of eleven independently designed club sites in Leo District 306 D2. It
shares no design code with the others; only `lib/` is common.

---

## Running it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
npm run lint
```

Node 20.9+ required.

---

## Where things live

| Path | What it is |
|---|---|
| `app/` | Routes, layout, metadata, sitemap, robots |
| `app/globals.css` | **The entire design system** — palette, sheet, label, motion |
| `components/` | Components bespoke to this club |
| `content/` | All club content. Normal edits touch only this |
| `lib/` | Domain types, utilities, hooks. Identical across all eleven clubs |
| `public/images/` | Club photography |

---

## The design system

Tokens live in the `@theme` block at the top of `app/globals.css`, named by
**role** rather than hue.

| Token | Value | Used for |
|---|---|---|
| `--color-page` | `#f7f1e3` | Parchment ground |
| `--color-panel` | `#efe2c4` | Alternate bands |
| `--color-ink` | `#2a1211` | Body text |
| `--color-ink-muted` | `#6b4340` | Running prose |
| `--color-ink-faint` | `#9c7c72` | Label terms |
| `--color-accent` | `#b9790e` | Gold — links, buttons, interaction |
| `--color-accent-strong` | `#5f2c2b` | Maroon — the crest's own colour, hover state |
| `--color-label` | `#8a5a12` | Label type only, never body copy |
| `--color-inverse` | `#3b1413` | Closing band |
| `--color-rule` | `#e3d5b8` | Hairlines |

Type: Fraunces (variable serif with optical sizing) + Inter, self-hosted via
`next/font`. Fraunces is used at everything from 3.5rem plate titles down to
0.95rem determination values; Inter carries the 0.65rem label type where a serif
would be unreadable.

### Signature classes

- `.sheet` — the mounting sheet: hairline border, generous internal margin.
  Everything of substance sits on one.
- `.label` — the printed label type: 0.65rem, letterspaced, uppercase, umber.
- `.determination` — the term/value table styling used on labels.
- `.wrap`, `.measure`, `.band`, `.reveal` — measure, prose width, rhythm, reveal.

### Accession numbers

`components/SpecimenSheet.tsx` exports `accessionFor(total, index)`, which
formats a record's archive position as `GW·034`. Numbering counts **down** from
the total, so the oldest record keeps the lowest number permanently — adding a
new project never renumbers the existing archive.

---

## Editing content

### Add a project record

Append to `content/projects.ts`:

```ts
{
  id: 'panchakarma-camp',
  slug: 'panchakarma-camp',       // permalink — unique and stable
  title: 'Panchakarma Camp',
  summary: 'One sentence for listings.',
  story: ['Paragraph one.', 'Paragraph two.'],
  category: 'health',
  year: '2025/26',
  date: '2026-02-21',             // ISO; drives sorting and accession order
  location: 'Yakkala',
  featured: true,                 // shows on the home page
  heroImage: { src: '/images/projects/panchakarma.jpg',
               alt: 'Describe what is happening', width: 1600, height: 1067 },
  impact: [{ id: 'patients', value: 180, label: 'Patients seen' }],
  partners: [{ name: 'GWUIM Teaching Hospital' }],
}
```

The route, sitemap entry, accession number and OG tags all generate from this.

### Add a board member

Append to `content/board.ts`. Ordering is automatic from `rank`. Members without
a `photo` render with initials, so the roster can go live before photographs do.

### Add images

Drop files in `public/images/…` with real `width`/`height` — those two fields
are what stop the page jumping as images load. Use `.jpg`/`.webp`; **HEIC files
do not render in browsers.** `Photo` takes an optional `plate` prop for plate
numbering (`Pl. 3`).

---

## Standards this site holds to

- One `<h1>` per page; per-route `<title>`, description, canonical and OG tags.
- Every image through `next/image` inside an aspect-ratio box, with `alt`.
- Keyboard-operable menu: `aria-expanded`/`aria-controls`, Escape closes and
  returns focus, visible focus ring, skip-to-content link.
- `prefers-reduced-motion` respected; all content readable with JavaScript off.
- `typedRoutes` on — a link to a route that does not exist **fails the build**.
- `images.remotePatterns` deliberately empty.
- The membership form composes a real pre-filled email rather than silently
  discarding input.

---

## Deploying

Every route prerenders, so any Node host or Vercel works.

1. Set the production origin in `content/club.ts` → `siteUrl`.
2. `npm run build`
3. `npm start`

---

## Outstanding content

This site now runs on real data from the club's completed Project Web Weavers
submission, with real photography for the logo, home page hero, About page,
one gallery plate, and D2 Con '26's project record. What's still missing
rather than fabricated:

- **Officer photographs** — the form's photo-folder link for the Executive
  Committee (`14x0MsF1NQJoFROW8ROVMyw…`) 404s, most likely cut by a line
  wrap when the form text was copied in. All ten board members render the
  `getInitials` fallback until a working link is supplied.
- **ASCEND '26** and **Nexus '26 Mid-Year Review** have no confirmed
  matching photograph (the photos the club sent are either general club
  photos or specific to D2 Con '26); both use the shared
  `/images/projects/placeholder.png` until event-specific photos arrive.
- **Past presidents before 2025/26** are not documented — only the current
  president's immediate predecessor (Leo Jeena Randuni Peiris, named in the
  club's own achievements text) is recorded.
- **Donation bank details** were not supplied (the form lists a phone number
  to contact instead of an account), so no structured donation details are
  shown — only a note to contact the club directly.
- **No sponsoring Lions Club** was named on the form, so that field and the
  footer's "Sponsored by…" line are omitted rather than guessed.

`scripts_resize.py` in the project root is the one-off Pillow script used to
process the source photos into `public/images/`; it is not part of the app
and is safe to delete.
