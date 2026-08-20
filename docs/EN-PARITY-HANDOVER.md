# English parity — handover

Written in English per the house convention for handover docs.
State as of **2026-08-13**, branch **`feat/en-full-parity`** (pushed, not merged,
nothing deployed). Updated the same day after the training hub landed. Read `docs/EN-LAUNCH.md` first if you have not — it is the
original architecture decision record and it is still accurate.

---

## 1. Where things stand

**Branch:** `feat/en-full-parity`, based on `feat/en-training-careers` (PR #73, still
open). Three commits:

| Commit | What |
|---|---|
| `97015f0` | 8 English sector pages + hub |
| `3b902dd` | Live-page SEO audit of the English site |
| `49d1dfc` | 6 English training pages + three chrome-leak fixes |
| `1156bd2` | The English training hub `/en/ai-training-for-teams` |
| `77c99f8` | French rendering found across the shipped English tree |

**Live in the build: 28 English routes.** The 12 that pre-existed, plus the 16 built
here (9 sector, 6 training, 1 training hub). All are in `EN_PUBLISHED`, therefore in
`sitemap.xml`, hreflang and the language switcher.

**All 28 render without French.** A sweep over body text *and* user-visible attributes
(`placeholder`, `aria-label`, `alt`, `title`) is clean as of `77c99f8`. Re-run it after
every new page — it is the check that found everything in that commit.

Prod is untouched: `main` @ `90d93c5`, container healthy. `deploy.sh` has not been run.

**PR:** https://github.com/ManeeshBehera/ai-m-website-v2/compare/main...feat/en-full-parity

---

## 2. Scope decisions already taken — do not relitigate

| Decision | Status |
|---|---|
| 13 `formation-ia/[ville]` city pages | **Excluded.** French-market artifact by design (`EN-LAUNCH.md`), no master exists. |
| 21 blog articles | **Held.** No EN master. Translated FR keywords rank for nothing in EN; needs its own keyword-validated project. |
| 3 legal pages (mentions-légales, CGV, confidentialité) | **Excluded** by owner decision. |
| Language toggle | **Already existed** (`language-switcher.tsx`), wired into header/footer/mobile nav. No work needed. |
| Sitemap | **Already correct.** It derives the EN block from `EN_PUBLISHED`, so every page you publish enters it automatically. Do not hand-maintain a list. |

**Remaining in scope: ~31 pages.** 7 case studies, ~24 static pages. (The training hub
is done — `1156bd2`.)

---

## 3. The pattern — follow it, it is proven twice

For any collection or big page:

1. **Content file** — `src/lib/<thing>.en.ts`. Transcribe from
   `[EN] website-content/<thing>/`. The `slug` field carries the **English** URL
   segment so it matches `ROUTE_MAP`.
2. **Locale accessor** — `src/lib/<thing>-locale.ts`: data selection + href helpers
   only. **No chrome here.**
3. **Chrome** — add `<prefix>*` keys to **both** blocks of `src/lib/ui-strings.ts`.
   Copy the FR value character-for-character from the old page so the French render
   does not move.
4. **Shared template** — move the page body to `src/components/pages/<thing>-page.tsx`
   taking `{ locale, slug }`. Both routes become thin wrappers holding only metadata.
   **Never copy the template** — a copy drifts at the first one-sided fix.
5. **Routes** — FR wrapper + `src/app/(en)/en/<english-slug>/page.tsx`.
6. **Publish** — add the route to `EN_PUBLISHED` in `src/lib/i18n.ts`, and **only once
   the page actually renders**. That one set feeds hreflang, the switcher and the
   sitemap together.
7. **Verify** — §5 below. A green build proves nothing about language.

Worked examples to copy from: `secteurs.en.ts` + `sector-page.tsx` (clean, medium),
`formations.en.ts` + `formation-page.tsx` (large, with optional blocks).

### Content rules that are not negotiable

- The masters in `[EN] website-content/` are **already reconciled** against an SEO audit
  and a slop audit. Their "Reconciliation applied" sections say what must be PROTECTED.
  **Transcribe them. Rewriting undoes a decision someone already made.**
- **But check the master is describing the page that is actually live** — this cost an
  hour on the training hub. Masters carry a "Copy sources" line naming the modules they
  map onto. Before transcribing, `grep -rn "<that module>" src/` and confirm a page
  imports it. The training-hub master mapped onto `offer-pages/formation.ts`, which
  **nothing imports**: transcribing it would have shipped a 5-programme catalogue with
  the wrong hero. Where master and live page disagree on a FACT, the live page wins and
  you record the correction in the file header — `homepage-content.en.ts` set that
  precedent (Rabat/Casablanca, invented guarantees) and the hub needed it twice again
  (2,500+ vs 10,000+ trained, Rabat vs Casablanca).
- Carry `[to validate]` tags through into shipped copy. Those figures are published in
  FR but absent from `public/llms.txt`, so they are **not canonical**. Dropping the tag
  passes an unvalidated figure off as a validated one.
- Never invent content the masters do not cover. Where a master stops, the section does
  not render — see the eleven optional blocks in `formations.en.ts`.
- Groupe Partouche is **logo-only**. A fabricated Partouche testimonial was written into
  a draft once and removed. Do not reintroduce it.

---

## 4. What is left, with specifics

### 4.1 Training hub — `/en/ai-training-for-teams` — **DONE** (`1156bd2`)

Built from the LIVE French page, not from the master: the master maps its sections onto
`offer-pages/formation.ts`, which no page imports (that file now carries an ORPHAN
banner). Two master figures were corrected against the site — 2,500+ → 10,000+ trained,
Rabat → Casablanca.

Reusable from it: `offer-pages/formation-hub{,.en,-locale}.ts` +
`components/pages/formation-hub-page.tsx`, and `client-testimonials.en.ts`, the single
English source for the signed quotes carried by `clientLogos`. **Any page that selects
testimonials by client name must go through `client-testimonials-locale.ts`** — reading
`clientLogos` directly is what put French quotes on the eight sector pages.

### 4.2 Case studies — 7 pages

- Masters exist for all 7.
- **Two are `draft`/noindex in `case-studies.ts`** (`cardio-check-up`, `delassus`) and
  `addictest` has `testimonial.pending: true`. Mirror the FR live status; do not publish
  past those gates.
- Note the content pipeline: case-study content is authored in the OS and rendered to
  `src/content/case-studies.generated.json`. **Never hand-edit that file** — `check.sh`
  catches it and the publisher reports drift.
- `TICKET-CS-META-TITLE` (in `EN-LAUNCH.md` §3) is still open: the template feeds one
  `caseStudy.title` to both `<title>` and `<h1>`, and the EN drafts propose distinct
  values. You need an optional `metaTitle` field first.

### 4.3 Static pages — ~24

All have masters. Suggested order (money pages first): `/offre`, `ai-operating-system`,
`plateforme-data-ia`, `agence-ia`, `automatisation-ia-workflow`, `outils` + its 3 tools,
`etudes-de-cas` hub, `a-propos`, `equipe`, `fondateur`, `pourquoi-ai-makers`,
`pourquoi-maintenant`, `glossaire-ia`, `ia-maroc`, `diagnostic-ia`, `challenge-30-jours`.

**Gated — build but ship noindex + out of the sitemap, per the owner's decision:**
`seo-geo` (its "+70% Sage" proof spine is unvalidated and the case is unpublished),
`playbook-ia` (88%, 5%, $700B, 30%, 95%, 300+ all unsourced). See `EN-LAUNCH.md` §4.

Two masters have **no FR route**: `garanties` (removal is an unported upstream commit)
and `audit-ia-entreprise` (never existed). Do not build EN pages for them.

---

## 5. How to verify — a green build proves nothing

This is the discipline that caught three defects a passing build hid.

```bash
npm run build
npx next start -p 4123          # use a fresh port; a stale server serves a stale build
```

Then, against the RUNNING server:

1. **French-leak scan.** Strip `<script>`/`<style>`/tags from the rendered HTML and
   regex for French function words — include `vos`, `votre`, `nos`, `Réserver`,
   `Durée`, `Prérequis`, `Entreprise`. A narrow word list hides leaks. Three refinements
   that each found real defects `77c99f8` fixed, and that a first pass missed:
   **match case-insensitively** (a case-sensitive list hid every `Votre …` placeholder);
   **scan the user-visible attributes too** (`placeholder`, `aria-label`, `alt`,
   `title` — the header logo had said "AI Makers, accueil" on all 28 routes); and
   **run it over every published route, not just the new one** — the sector pages had
   been shipped with whole French blocks.
   Beware false positives on deliberate British spellings (`programmes`).
2. **FR regression control.** Re-fetch the French twin and assert its strings are
   unchanged. Moving inline JSX into a data module silently turns `&rsquo;` into a
   straight quote, so FR data must carry curly apostrophes explicitly.
3. **Link sweep.** Collect every `href="/en..."` and assert 200. Also assert each is in
   `ROUTE_MAP` — an **unmapped** `/en/...` silently resolves to `/`, which no 404 check
   catches.
4. **Both 404s.** `curl /en/does-not-exist` must be English at status 404;
   `curl /nope` must stay French.
5. `./bin/check.sh parity`

The measurement harness used for the audit is worth rebuilding if you need numbers —
it crawls each route for title/meta/heading counts/JSON-LD/hreflang/word count.

---

## 6. Open items

**Engineering tickets**
- `TICKET-LEADGATE-I18N` — **mostly closed** (`77c99f8`). The premise was wrong:
  `LeadGate` already takes a `locale` and its labels already exist in English in
  `ui-strings.ts`. Nothing needed localising and the French site was never at risk —
  `CatalogueForm` simply never passed the prop down. **If a French label still shows on
  an English form, look for a caller that omits `locale=`, not for a missing string.**
- `TICKET-EN-BADGE-LABELS` — **do not "fix" this without asking.** The comment at
  `site-config.en.ts` (just below the testimonials block) says the French labels are
  DELIBERATE: "Osez l'IA" is the name of a French public programme, and the official
  English wording of the Anthropic partner status is not confirmed. Translating either
  claims something that was not granted under that name. This ticket contradicts a
  recorded decision; it is decision 1 below, for the owner, not an engineering task.
- `TICKET-EN-EEAT-BYLINE` — no author, reviewer or updated date on any EN page. Costs up
  to 13 of the 25 E-E-A-T points site-wide. Largest scoring lever available.
- `/en/careers` renders the brand **twice** (`Careers: join AI Makers | AI Makers`,
  source `src/lib/careers/page-content.ts:193`) and its meta description is 201 chars
  against a 160 budget, so the CTA never renders. *(Still open.)*
- **`/en/careers/apply` does not exist** but is the apply target of all five English
  role pages. `77c99f8` routes the link through `resolveEnHref`, so it now falls back
  to the French form instead of 404-ing — the link corrects itself the moment the page
  enters `EN_PUBLISHED`. Building it is still worth doing: English candidates currently
  land on a French application form.
- **The English 404 body is client-rendered.** `/en/does-not-exist` returns 404 with an
  English `<title>` and meta, but the visible body ("Error 404", "Back to home") is only
  in the RSC payload, where the French root `not-found` is serialised too. The French
  `/nope` renders its body server-side. Worth a look; not a language bug.
- `TICKET-CS-META-TITLE`, `TICKET-FORM-*`, `TICKET-JSONLD-INLANGUAGE` — see
  `EN-LAUNCH.md` §3.

**Decisions for the owner**
1. Are the Anthropic partner / "Osez l'IA" ambassador badges authorized for English use?
   `EN-LAUNCH.md` §4 gates them; they render on all 28 EN pages with no recorded check.
   Note the two sources disagree: `site-config.en.ts` argues in a comment for keeping
   them in French, while `TICKET-EN-BADGE-LABELS` calls that a bug. One answer settles
   both.
2. Who owns the `[to validate]` compliance claims (HDS, EU AI Act, the two-hour
   clinician estimate), and by when?
3. Client testimonial roles. The quotes and roles are now English everywhere
   (`client-testimonials.en.ts`), translated literally with no invented titles, but nine
   job titles are still **unconfirmed by the people named** and carry a `[to validate]`
   note in that file. Two are genuinely uncertain and worth checking first: "Attachée
   scientifique" (Amgen) → *Scientific Attaché*, and "Directeur du Contrôle de gestion"
   (Délifrance) → *Head of Management Control*.
4. Has the Sage case been signed off? One decision unblocks `/seo-geo`,
   `/en/ai-transformation` and the home page together.

---

## 7. The audit

`seo-audit-report/live-en/` — 21 per-page files + `_cross-page.md` + `README.md` index.
Site average **77.6/100**, narrow 74–82 spread, because the dominant driver is systemic
(no author/reviewer/date) rather than per-page.

Keep it **separate** from `seo-audit-report/*.md` one directory up: that audits the
content **drafts**, this audits the **shipped pages**. A perfect draft can still ship
wrong — CP-1 is exactly that.

**Two caveats carried in the audit itself:**
- §11.3 independence is **not** intact for the 9 sector routes — they were built and
  audited in the same session. Re-audit them independently before trusting them.
  **This was done for LANGUAGE only** (`77c99f8`) and the warning paid off: the eight
  `/en/industries/*` pages were rendering the French training catalogue and French
  testimonials. Their SEO scores in `live-en/` are still un-reaudited, and they were
  scored on a page whose content has now changed.
- **Keyword validation was never done.** §5.1 requires live volume data; none was
  pulled, so no page is scored on keyword selection. This is the largest unexamined
  area of the English site and deserves its own pass.

New pages should be audited the same way after they ship, not before.
