# Cross-page findings — English site as SHIPPED (`/en/*`)

> **How this differs from the audit one directory up.** `seo-audit-report/*.md` audits
> the EN content **drafts** (`[EN] website-content/`) — 55 per-page files by agent 3,
> with `_cross-page-findings.md` as their systemic file. This directory audits the
> pages **as actually served**: rendered HTML from a production build, measured. A draft
> can be perfect and the shipped page still wrong — CP-1 below is exactly that case.
> Where the two agree, the draft audit is the canonical owner and is cited rather than
> restated.

**Audited:** 21 live EN routes on branch `feat/en-full-parity`, measured against a
production build (`next build` + `next start`), 2026-08-13.
**Method:** every number here is measured, not estimated — rendered HTML crawled per
route (`title`, `meta description`, heading counts, JSON-LD `@type`, `hreflang`,
`<img alt>`, body word count after stripping header/footer). Schema claims verified by
grepping the codebase, indexability verified against the served `sitemap.xml`.
**See also:** the per-page files in this directory.

> **Auditor-independence caveat (§11.3).** The 9 sector routes
> (`/en/ai-by-industry`, `/en/industries/*`) were built in this same session by the
> author of this audit. §11.3 exists because an auditor who edits has destroyed the
> measurement, and that separation is not intact here. Their findings below are stated
> on measured evidence only, but they should be treated as self-reported and
> re-audited by an independent pass before they are trusted. The 12 pre-existing EN
> routes carry no such conflict.

---

## What the site gets right (verified, not assumed)

These are checked, not credited on trust. Naming them matters because §3.4 says a page
that *avoids* a known site-wide pattern should be credited for it.

1. **hreflang is correct on all 21 routes.** Each EN page emits a reciprocal
   `fr` / `en` / `x-default` triple, with `x-default` on the French URL. Spot-checked
   both directions: `/en/capacity` ↔ `/capacite` reference each other. This is the
   failure mode that usually breaks a bilingual launch and it is clean here.
2. **Canonicals are self-referencing and correct** on every route measured.
3. **No accidental `noindex`.** No EN route carries a robots meta that would block it.
4. **Every live EN route is in `sitemap.xml`** — verified against the served file, not
   the source. The sitemap derives its EN block from `EN_PUBLISHED` rather than a
   hand-kept list, which structurally removes the "page live but missing from the
   sitemap" class of bug.
5. **Exactly one `<h1>` per page**, on all 21.
6. **Decorative images are marked correctly.** The client-logo marquee renders
   `alt="" aria-hidden="true" title="…"`, which is correct practice for decorative
   imagery — *not* the missing-alt defect a naive crawl reports. Flagged here because
   an automated tool will keep re-raising it.
7. **Organization schema is genuinely strong** (`/en`): named founder with `jobTitle`,
   LinkedIn `sameAs` for both person and company, `foundingDate`, `contactPoint`. This
   is real E-E-A-T substance, not boilerplate.
8. **`[to validate]` tags survived into production copy.** The unvalidated figures
   (~$18,000/yr, 80% autonomous, ROI-in-first-month, the "two hours a day" clinician
   estimate, HDS scoping) are visibly tagged rather than silently presented as fact.
   That is §7.3 behaving exactly as designed.

---

## 🟠 CP-1 — French chrome leaks into every English page

**Evidence (measured, all 21 routes):** every EN page renders the French strings
`Partenaire Anthropic` and `Ambassadeur Osez l'IA`. Counts on the served HTML:
`/en` → "Partenaire Anthropic" ×5, "Ambassadeur Osez l'IA" ×5;
`/en/capacity`, `/en/industries/ai-for-small-business`, `/en/careers` → ×2 each.

**Root cause — the dictionary is right and two call sites bypass it:**

- `src/lib/ui-strings.ts:244-245` already holds the correct English:
  `badgeAnthropic: "Anthropic Partner"`, `badgeOsez: "Osez l'IA Ambassador"`.
- `src/lib/site-config.en.ts:465-466` overrides it with the **French** labels
  (`label: "Partenaire Anthropic"`, `label: "Ambassadeur Osez l'IA"`) — in the file
  whose entire purpose is to hold English.
- `src/components/layout/footer.tsx:~381,~392` receives a `locale` prop and computes
  `const s = t(locale)` (line 66) but then writes the two French strings **literally**
  instead of reading `s.badgeAnthropic` / `s.badgeOsez`.

**Why it matters:** this is the most-repeated text on the English site, it sits in the
trust bar and the footer — the two places a skeptical reader looks for legitimacy
signals — and it is in the wrong language. It reads as a half-translated site, which
undercuts the E-E-A-T of every page it appears on. It is a live-risk, not a draft-risk:
these routes are in the sitemap and indexable today.

**Fix (one engineering ticket, ~10 minutes):**
`TICKET-EN-BADGE-LABELS` — point `site-config.en.ts:465-466` at the English labels and
replace the two literals in `footer.tsx` with `s.badgeAnthropic` / `s.badgeOsez`. One
fix, 21 pages. Do **not** hand-edit page by page.

---

## 🟠 CP-2 — The partner/certification badges are published in English without the authorization check that gates them

**Evidence:** `/images/badges/anthropic.svg` and `/images/badges/osez-lia.png` render
on all 21 EN routes (verified per route). `docs/EN-LAUNCH.md` §4 "Publication gates —
not engineering, do not ship past them" lists: *"Partner / certification badges
('Anthropic Partner', 'Osez l'IA' Ambassador) — verify authorization before EN use."*

**Why it matters:** §1.1 penalises organizational claims that aren't independently
verifiable, and §4.2.1 holds laudatory or affiliation claims to a named, checkable
basis. A partner/ambassador badge is exactly such a claim. The project's own launch doc
treats it as a blocking gate; the pages shipped past it. This is not a judgement that
the claim is false — it is a finding that the check the project itself mandated has no
recorded outcome.

**Fix:** produce the authorization evidence (Anthropic partner-program listing; "Osez
l'IA" ambassador confirmation) and record it, **or** drop the badges from the EN tree
until it exists. Decision, not engineering — see Open questions.

---

## 🟠 CP-3 — No author, no reviewer, no "last updated" on any English page

**Evidence:** grepped the rendered HTML of all 21 routes for `author`, `datePublished`,
`dateModified`, `reviewedBy`, "Last updated", "Reviewed" — **zero hits on every route**,
including `/en/industries/ai-for-life-sciences` and
`/en/industries/ai-for-medical-practices`.

**Why it matters:** §1.1 allocates 13 of its 25 points to named authorship, reviewer
byline and an honest update date. Every EN page forfeits all of them — that is the
single largest score drag across the site, and it is structural rather than per-page.

**Scoring note (§1.1 reallocation rule, applied consistently across every per-page
file):** these are B2B service-marketing pages, not health or financial *advice* to
consumers. The reader's risk is a purchasing decision, so the full YMYL module (§4.1)
does **not** fire and anonymous authorship stays 🟠 rather than 🔴. The two healthcare
pages are the closest call — see CP-4. Because the sector has no reviewer convention
for B2B marketing pages, the 5 reviewer points are reallocated to citations (→10) on
every page, per the §1.1 note. This is stated in each per-page table rather than
silently dropped.

**Fix:** `TICKET-EN-EEAT-BYLINE` — add an optional author + `dateModified` to the page
templates and populate from a named person with a stated role. The Organization schema
already proves the site can name real people (founder, `sameAs` LinkedIn); the page
templates just don't.

---

## 🟡 CP-4 — Regulated-sector claims are tagged but unresolved, on pages with no expert reviewer

**Evidence:** `/en/industries/ai-for-medical-practices` renders
*"certified health-data hosting (e.g. HDS) scoped case by case where it applies
[to validate]"* and *"up to two hours by common estimates [to validate]"*.
`/en/industries/ai-for-life-sciences` renders the equivalent HDS/GDPR claim, also
tagged. `/en/industries/ai-for-financial-services` renders *"Sector-specific rules
(e.g. under GDPR and the EU AI Act) are scoped case by case [to validate]"*.

**Assessment:** the tagging is correct behaviour and I am **not** filing it as a
fabrication finding — §7.3 requires exactly this, and the pages comply. The finding is
that these are compliance claims addressed to licensed professionals (§4.2), carried on
pages with no named author and no expert reviewer (CP-3), and the tags have no recorded
owner or deadline. A `[to validate]` that never gets validated becomes a permanent
hedge on a regulatory claim.

**Uncertainty stated (§3.6):** I cannot verify from the codebase whether AI Makers holds
or brokers HDS-certified hosting. That is a client fact, not a code fact.

**Fix:** assign each tagged claim an owner and a resolution date; resolve to a sourced
statement or cut the claim. Do not ship the tag to a reader indefinitely.

---

## 🟡 CP-5 — Meta-description length overruns on 9 of 21 routes, and the masters' own counts under-report

**Evidence (measured on rendered HTML, entities decoded, budget 140–160 per §6.2):**

| Route | Measured | Master claimed | Verdict |
|---|---:|---:|---|
| `/en/careers` | **201** | — | 🟡 badly over |
| `/en/careers/gtm-growth-manager` | 175 | — | 🟡 over |
| `/en` | 168 | — | 🟡 over |
| `/en/careers/forward-deployed-engineer` | 168 | — | 🟡 over |
| `/en/careers/qa-engineer` | 163 | — | 🟡 over |
| `/en/ai-transformation` | 162 | — | 🟡 over |
| `/en/ai-by-industry` | 162 | 158 | 🟡 over |
| `/en/industries/ai-for-marketing-agencies` | 161 | 155 | 🟡 over |
| `/en/security` | 161 | — | 🟡 over |
| `/en/careers/data-engineer` | 129 | — | 🟡 under |
| `/en/careers/ai-engineer` | 130 | — | 🟡 under |
| `/en/capacity` | 133 | — | 🟡 under |
| `/en/forward-deployed-engineer` | 138 | — | 🟡 under |

**Second-order finding:** on the two pages where a master states a count, the master
**under-reports by 4–6 characters** (hub: claims 158, measures 162; agencies: claims
155, measures 161). The masters' counts were not machine-measured. Any page trimmed to
"exactly 160" on a master's authority is actually over. Re-measure all of them at
source rather than trusting the stated figures.

**Title lengths are mostly healthy** — 18 of 21 land in 35–58 including the auto-appended
`| AI Makers`. Two exceed the 60 budget: `/en/forward-deployed-engineer` at **62** and
`/en/ai-transformation` at **61**. Both truncate in SERPs.

---

## 🟡 CP-6 — Two pages are thin relative to their siblings

**Evidence (body word count, header/footer stripped):** `/en/contact` **169 words**,
`/en/ai-by-industry` **380 words**. The sector pages they sit beside run 699–818, and
`/en/forward-deployed-engineer` runs 5,425.

`/en/contact` at 169 is defensible — a contact page is navigational and thinness is not
a defect there (§9). **`/en/ai-by-industry` at 380 is the real finding:** §9 says a hub
must add citable value of its own rather than just listing its children. It currently
carries one strong POV paragraph and eight teasers. It is the weakest page on the
English site by content depth and it is the entry point to eight others.

---

## 🟢 CP-7 — The `/en/blog` hub is referenced but does not exist

**Evidence:** `ROUTE_MAP` maps `/blog` → `/en/blog`, but `/en/blog` is absent from
`EN_PUBLISHED` and no route exists. This is correctly handled — `resolveEnHref()` falls
the link back to the French `/blog` rather than emitting a 404, and `alternateFor()`
withholds the hreflang. **No bug.** Recorded only so the next audit does not re-raise
it: 21 EN blog articles have no English master and were deliberately held.

---

## Priority fix list (site-wide, ranked by severity × effort)

1. **CP-1** — `TICKET-EN-BADGE-LABELS`. Two files, ~10 minutes, fixes the most-repeated
   wrong-language text on 21 pages. Highest value per unit of effort on this list.
2. **CP-2** — Resolve the badge authorization gate. Decision, not code. Blocks nothing
   technically; carries the most reputational risk if the claim can't be evidenced.
3. **CP-3** — `TICKET-EN-EEAT-BYLINE`. Template change, unlocks up to 13 §1.1 points on
   every EN page. The single largest scoring lever available.
4. **CP-5** — Re-measure and rewrite the 13 out-of-budget meta descriptions at source.
   Start with `/en/careers` (201).
5. **CP-6** — Deepen `/en/ai-by-industry` with hub-level value it currently borrows from
   its children.
6. **CP-4** — Assign owners and dates to the `[to validate]` compliance claims.
7. **CP-5b** — Trim the two over-length titles (62, 61).

---

## Open questions — decisions, not auditor verdicts

1. **Are the Anthropic partner and "Osez l'IA" ambassador claims authorized for English
   use?** The project's own launch doc gates them; no recorded outcome exists. (CP-2)
2. **Who owns the `[to validate]` compliance claims (HDS, EU AI Act, the two-hour
   clinician estimate), and by when?** (CP-4)
3. **Is an author byline acceptable on service/marketing pages, or does the house style
   reserve bylines for articles?** The answer changes whether CP-3 is a template fix or
   a deliberate accepted cost. (CP-3)
4. **English-market keyword validation has not been performed in this audit.** The
   masters cite Ahrefs volumes from 2026-07 for the sector pages (e.g. "ai for small
   business" 4,700 US / KD55; "ai for marketing agencies" 150 US). Those were not
   re-verified here, and §5.1 requires live volume data before a primary keyword is
   accepted. Several pre-existing EN pages state no keyword target at all. This is the
   largest unexamined area of the English site and should be its own pass.

---

## Addendum — 2026-08-13, found while building the training pages

Three further chrome defects surfaced from a French-leak scan of the rendered
English HTML (the check `docs`/house discipline says a green build never replaces).
Two are fixed in the same commit; one is recorded and left.

### 🟠 CP-8 — Every `/en/*` 404 served a fully FRENCH page *(fixed)*

**Evidence:** `GET /en/does-not-exist` returned the root `src/app/not-found.tsx` —
*"Erreur 404"*, *"Cette page n'existe pas (ou plus)"*, *"Retour à l'accueil"*, and four
French resource cards. An English visitor mistyping a URL, and any crawler hitting a
dead English link, landed on a French page under `<html lang="fr">`.

**Root cause:** a `not-found.tsx` inside a route group only catches `notFound()` thrown
from an **already-matched** segment. An unknown `/en/...` URL matches no segment, so it
fell through to the root file.

**Fix shipped:** `src/app/(en)/not-found.tsx` (English 404, links resolved through
`resolveEnHref`) plus `src/app/(en)/en/[...notfound]/page.tsx`, a last-resort catch-all
that calls `notFound()` so the English 404 renders inside the English layout. Verified:
`/en/does-not-exist` now returns **404** with English copy; the French 404 is unchanged.

### 🟠 CP-9 — "CEO · Fondateur" rendered in the English footer *(fixed)*

**Evidence:** under *"Your contacts"* on every EN page, `footer.tsx` hardcoded
`role: "CEO · Fondateur"`. Verified visible in stripped body text, not just the payload.
**Fix shipped:** role moved to `ui-strings.ts` (`footerRoleCeo`), `contacts` built per
locale. Verified: `/en/capacity` → "CEO · Founder", `/capacite` → "CEO · Fondateur".

### 🟡 CP-10 — `LeadGate` field labels are French on every English form *(open)*

**Evidence:** the catalogue form on all six `/en/ai-training-for-teams/*` pages renders
`Nom et prénom`, `Téléphone`, `Email professionnel`, `Entreprise`, and
`Zéro spam. Vos données restent chez nous.` The form's own title, subtitle, CTA and
success message were localised in this pass; the **field labels come from the shared
`LeadGate` component**, which serves every lead form on the site.

**Why it is left open:** localising `LeadGate` touches every form on the French site
too, which is a wider blast radius than a translation pass should take unannounced. It
is scoped as its own ticket, `TICKET-LEADGATE-I18N`, and it is the last known French
leak in the English tree.

**Also note (content, not chrome):** client testimonial roles render in French on EN
pages — e.g. *"Mickaël Mina · Directeur IA · Sage"*. These are published verbatims owned
by `site-config.ts`; the masters say to translate them faithfully and tag
`[to validate]`, never to paraphrase. That is a content decision, not a bug, and it is
unresolved.
