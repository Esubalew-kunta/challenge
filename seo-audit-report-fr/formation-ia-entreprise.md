# Formation IA entreprise (hub) — `/formation-ia-entreprise`

**Source audited:** `[FR] website-content/formation-ia-entreprise/formation-ia-entreprise.md`
**Compared against:** `src/app/formation-ia-entreprise/page.tsx`, `src/lib/formations.ts`, `src/lib/faq-schema.ts`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`; Ahrefs (France, FR, 2026-07).
**See also:** `_cross-page-findings.md` (`formation ia` 8 100→6 900 across masters; "100% recommandations" tagging).

## Score: 88 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 23 / 25 |
| Factual & Claim Accuracy | 21 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 15 / 15 |

## Verdict
Ship after fixing the primary-keyword figure. This is the FR flagship and it earns it — practitioner-trainer E-E-A-T, Course schema correctly implemented, and a genuinely disciplined refusal to add unverified Qualiopi/OPCO funding claims. But the primary keyword's stated volume is stale and contradicts the homepage master's own correction.

## Findings

### 🟠 Primary keyword `formation ia` stated at 8 100 — measures 6 900, and the homepage master already corrected this
§2 lists `formation ia` = **8 100** (difficulty "n/a"). Ahrefs FR (2026-07) returns **6 900, KD 55**. The homepage master (§Réconciliation) explicitly corrected "8 100 → 6 900" — this flagship page did not carry the correction through, and omits the (high) KD 55.
- **Why it matters:** two of the site's own masters cite different volumes for the same head term; the difficulty being blank hides that this is a hard target (KD 55) requiring the pillar's full authority.
- **Fix:** correct to `formation ia` 6 900 / KD 55 across the table. The secondaries check out: `formation ia entreprise` 700/KD13 ✓, `formation intelligence artificielle` 1 700/KD55 ✓.

### 🟡 "100% de recommandations" runs as a hard proof stat here, but is `[à valider]` elsewhere
§4.2 stats: `100% de recommandations · 9,6/10 · +2 500 professionnels formés`. On the homepage master the identical "100% de recommandations" carries an `[à valider]` tag; here it is presented as a firm statistic with no tag.
- **Why it matters:** a "100%" recommendation rate is a superlative claim that needs a checkable basis (§1.1); inconsistent tagging across pages is itself a signal.
- **Fix:** either source the figure (N clients, method) or carry the `[à valider]` tag here too, consistently with the homepage.

### 🟡 Live title/meta massively over budget (proposed fixes it, but proposed sits at the ceiling)
Live title `Formation IA entreprise : 6 programmes hands-on sur vos cas réels` renders ~76 chars with the ` | AI Makers` suffix (truncates badly); live meta ~225 chars. The proposed title `Formation IA entreprise : 6 programmes hands-on` (48) renders ~60 — right at the limit — and the proposed meta is 148 (good).
- **Why it matters:** the current live values are a real indexation/SERP-presentation problem (live-risk); the proposed title leaves no headroom.
- **Fix:** ship the proposed meta; trim the title one notch (e.g. drop "entreprise" or "6") to clear 60 comfortably.

## What this page gets right
- **Exemplary Qualiopi/OPCO restraint (compliance win):** the strategy brief pushes Qualiopi certification and "financement OPCO jusqu'à 100%"; the draft refuses to add either because neither appears in `public/llms.txt` or the code, tags it `[to validate placement]`, and invents no funding percentage. This is exactly the §4.1 regulated-claims discipline — the single most important thing this page could get right, and it does.
- **Course schema genuinely implemented:** `page.tsx` emits `BreadcrumbList` + an `ItemList` of `Course` items (from `formations.ts`) + `FAQPage` (via `faqPageSchema`). Course is the correct type for a training hub (§1.5). Verified in code.
- **Strong practitioner E-E-A-T:** named trainers (Othmane Halim, Maneesh Behera, Walid Boulanouar, Othmane Khadri, Adel Dahani, Edouard Willemsen) sourced from `formations.ts`; signed testimonials (Amgen, Délifrance, Shem's, Brigitte Meyer) reused verbatim with explicit instruction not to fabricate results.
- **Clean hub architecture, no cannibalization:** the pillar keeps the generic `formation ia`; the six child programs own their specific heads. FAQ Q6 (formation duration) declared canonical owner.
- **Route + all 6 child routes in sitemap** (`formationEntries`); internal links (`/agence-ia`, `/blog/*`, `/contact`) valid.
- **Answer-first GEO paragraph** names all six programs and is fully self-contained/citable.
- **Stacked-negation cleanup applied** in the proposed copy (the live `page.tsx` still has "Hands-on, pas théorique" / "pas des exemples inventés" / "pas un one-shot"); two signature negations deliberately kept.

## Priority fix list
1. **(🟠, trivial)** Correct `formation ia` to 6 900 / KD 55, matching the homepage master.
2. **(🟡, low effort — needs client)** Source or tag "100% de recommandations."
3. **(🟡, low effort)** Ship proposed meta; trim proposed title below 60.
4. **(🟢, tracked)** Keep Qualiopi/OPCO out until legal confirms certification + exact rate.

## Open questions
- Is AI Makers Qualiopi-certified, and if so what is the actual OPCO funding condition? Nothing ships on this until confirmed.
- What is the basis for "100% de recommandations"?
- The orphan `src/lib/offer-pages/formation.ts` ("Cinq formations") — dev cleanup, out of content scope but worth a ticket.
