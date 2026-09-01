# Leo Club of GWUIM FISSMS — website

Gampaha Wickramarachchi University of Indigenous Medicine · Faculty of
Indigenous Social Sciences and Management Studies

Next.js 16 · React 19 · TypeScript · Tailwind CSS v4

**Design concept: *Herbarium*.** The club sits in a faculty of indigenous
medicine, so the site borrows the form of a herbarium sheet: a bordered mounting
sheet, a printed determination label carrying the metadata, and hairline rules
everywhere else. Projects are presented as **specimen sheets with accession
numbers**, not cards.

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
| `--color-page` | `#f4f1e6` | Parchment ground |
| `--color-panel` | `#ebe7d8` | Alternate bands |
| `--color-ink` | `#1e2a22` | Body text |
| `--color-ink-muted` | `#4c5a50` | Running prose |
| `--color-ink-faint` | `#7a867d` | Label terms |
| `--color-accent` | `#2f5d3a` | Links, buttons — green carries interaction |
| `--color-label` | `#6b4f2a` | Umber. **Label type only**, never body copy |
| `--color-inverse` | `#1e2a22` | Closing band |
| `--color-rule` | `#d6d0bc` | Hairlines |

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

Everything marked `TODO(content)` needs real values from the club: charter date,
board roster, project records, photography and contact details. Images in
`public/images/` are generated solid-colour placeholders. The site renders
correctly while these are incomplete.

One editorial note carried into the copy: the Parampara project describes a
consent-first approach to recording named practitioners. If the club's actual
practice differs, that copy should be corrected before launch — it makes a
specific ethical claim on the club's behalf.
