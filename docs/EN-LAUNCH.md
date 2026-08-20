# English launch — architecture and remaining work

Written in English per the house convention for handover docs, though the site
and its code comments are French.

## Decisions taken (2026-07-29, owner)

1. **URL structure: `/en/<english-slug>`.** FR stays canonical at the root and
   keeps its current URLs unchanged. This was not cosmetic — the site carries
   ~57 legacy 301/308 redirects from the old Framer URLs onto FR routes, and
   prefixing FR with `/fr` would have invalidated all of them.
2. **EN and FR ship together.** The EN content is a launch, not a content bank.

English slugs come from `[EN] website-content/`, whose drafts already link to
them internally (`/ai-consulting`, `/ai-automation`,
`/ai-readiness-assessment`, …). They are recorded once in
`src/lib/i18n.ts → ROUTE_MAP`.

## What is in place

| Piece | Where | Note |
|---|---|---|
| Locale primitives, route map, `alternateFor()` | `src/lib/i18n.ts` | Single table feeds hreflang, the language switcher and the sitemap |
| FR route group | `src/app/(fr)/` | 35 routes moved; **URLs unchanged** — route groups don't appear in paths |
| hreflang + `og:locale` | `src/lib/metadata.ts` | Per page, with `x-default` on FR |
| Publication gate | `src/lib/i18n.ts → EN_PUBLISHED` | Empty today |
| `/offre` in sitemap | `src/app/sitemap.ts` | Was a live FR indexability bug |

### Why two root layouts

`<html lang>` can only be set by a root layout, and it must differ between the
trees. Next allows multiple root layouts only via route groups, hence `(fr)`
and a future `(en)`. Consequence to know: navigating between the two trees
triggers a full page load, not a client transition. That is acceptable for a
language switch.

### Why `EN_PUBLISHED` is separate from `ROUTE_MAP`

`ROUTE_MAP` says where an EN page *will* live; `EN_PUBLISHED` says what is
actually online. An hreflang pointing at a URL that 404s is an indexing error,
not an ignored link — so a FR page must not announce its EN twin before that
twin exists. **Add a route to `EN_PUBLISHED` at the moment its EN page goes
live, never in advance.**

## Remaining work

### 1. Chrome i18n layer — blocks everything else

`Header`, `Footer`, `MegaMenu`, `MobileNav`, the shared `service-page.tsx`, the
`secteurs/[slug]` template and several bespoke pages read French data directly
from `src/lib/site-config.ts` with no locale seam. An EN page mounted today
renders English body copy inside French navigation, French CTA labels, French
section headings and French breadcrumbs.

This is the blocker the content pipeline logged as
`TICKET-I18N-SERVICEPAGE / -SECTORPAGE / -BESPOKE`. The content masters supply
EN for the *data* fields only — never for template chrome. Shipping without
this produces visibly half-translated pages.

Approach: give the components a `locale` prop and move chrome strings into a
dictionary keyed by locale. The nav/mega-menu structure needs an EN twin of the
`navItems` / `megaMenu` data.

### 2. Content port — mechanical but large

~250 KB of French copy lives in typed data files, not in components:

| File | Size |
|---|---|
| `src/lib/site-config.ts` | 75 KB |
| `src/lib/formations.ts` | 35 KB |
| `src/lib/case-studies.ts` | 32 KB |
| `src/lib/villes-formation.ts` | 29 KB |
| `src/lib/secteurs.ts` | 29 KB |
| `src/lib/diagnostic-config.ts` | 23 KB |
| plus `offer-pages/*`, `playbook-config.ts`, `scanner-opportunites.ts` | |

The EN masters are field-level precise (e.g. `homepageContent.hero.headlineAccent`
→ `"shipped"`), so this is transcription rather than authoring — 34 static
pages plus collections.

Note `villes-formation` (FR city pages) has no EN counterpart by design: it is a
French-market artifact. Same for the "Osez l'IA" badge and the FR city strip.

### 3. Field gaps that need schema changes

- `TICKET-CS-META-TITLE` — the case-study template feeds one `caseStudy.title`
  to both `<title>` and `<h1>`; EN drafts propose distinct values, so an
  optional `metaTitle` field is needed.
- `TICKET-FORM-TITLE-TPL` / `-SEO-DESC` — formation `generateMetadata`
  hardcodes `| Formation IA en entreprise`, and `formation.resume` does triple
  duty (hero + meta description + Course schema), leaving the proposed EN meta
  descriptions nowhere to land.
- `TICKET-JSONLD-INLANGUAGE` — JSON-LD `inLanguage:"fr-FR"` and FR
  `areaServed`/`url` must switch per locale (~4 files).

### 4. Publication gates — not engineering, do not ship past them

- `/seo-geo` — the "+70% Sage" result is its entire proof spine and is an
  unpublished, unvalidated case. Needs client sign-off.
- `/playbook-ia` — the stat wall (88%, 5%, $700B, 30%, 95%, 300+ executives) is
  unsourced. Source or cut.
- Partner / certification badges ("Anthropic Partner", "Osez l'IA" Ambassador)
  — verify authorization before EN use.
- `addictest` testimonial is `pending:true`; `cardio-check-up` and `delassus`
  are `draft`/noindex.
- A drafted Groupe Partouche testimonial was **fabricated** — it does not exist
  in `site-config.ts`. Already dropped by the reconciliation pass; recorded here
  so it is not reintroduced.

### 5. Figure conflicts — RESOLVED 2026-07-29 (owner)

| Fact | Canonical value | What was fixed |
|---|---|---|
| Professionals trained | **2,500+** | Already correct everywhere in code; the 1,250 lived only in a Notion brief |
| Playbook page count | **48** | `site-config.ts` mega-menu said 43, every other reference said 48 |
| Sectors | **8** | `llms.txt` listed only 6; the two missing were médecins-cabinets and conseil-études-marché |
| Bpifrance adoption | **31%** | Copy said 55% while its own cited source URL is `31-des-tpe-et-pme-utilisent-l-ia-generative` |

Use these values; do not reintroduce the old ones.

### 5b. `/offre` — page and redirect contradict each other

`src/app/(fr)/offre/page.tsx` exists and builds, but `next.config.ts` redirects
`/offre` → `/ai-transformation` (308). The redirect wins, so the page is
unreachable dead code.

This was mis-diagnosed once already: the content audit listed "`/offre` missing
from `sitemap.ts`" as a live indexability bug, and adding it produced a sitemap
entry pointing at a redirect — which Search Console reports as "Page with
redirect". The entry has been removed again.

Decide which is true, because the EN port depends on it: the EN tracker treats
`/offre` as page #2 with its own slug (`/en/offering`), which only makes sense
if the page is meant to live. Either drop the redirect and index the page, or
delete the page and leave the redirect.

### 6. Second live FR bug, still open

The four lead-capture forms (audit-geo, scanner, playbook, challenge) POST to
`/api/lead` with no visible consent microcopy and no privacy link, though
`/confidentialite` exists. FR gap today, not EN-gated.

### 7. Localisation review

The ROI calculator computes in EUR with a France-specific ×1.45 employer-charge
basis on what will be a US-primary EN page. Localise the currency or state the
basis. OPCO/Qualiopi funding framing must not be invented for EN.
