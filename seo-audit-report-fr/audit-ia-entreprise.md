# Audit IA entreprise — `/audit-ia-entreprise`

**Source audited:** `[FR] website-content/audit-ia-entreprise/audit-ia-entreprise.md`
**Compared against:** `src/app/audit-ia-entreprise/page.tsx`, `src/components/shared/service-page.tsx`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`, `src/lib/site-config.ts` (megaMenu, guarantees); Ahrefs (France, FR, 2026-07).
**See also:** `_cross-page-findings.md` (maturity scale /24 vs /20; title length near ceiling).

## Score: 86 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 22 / 25 |
| Factual & Claim Accuracy | 21 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 13 / 15 |

## Verdict
Ship after tightening. The page is well-structured (the §4.2/§4.3 merge into a real day-by-day calendar removes the live duplication), the reimbursement guarantee matches the canonical set, and schema is fully implemented. Fix the understated keyword figures, the title that sits exactly at the 60-char ceiling, and reconcile the maturity-scale number with `/diagnostic-ia`.

## Findings

### 🟠 Maturity scale disagreement: /24 here vs /20 on `/diagnostic-ia` (tracked)
§4.2 / §4.3 / FAQ / GEO all state the proprietary grid is scored **on 24 points**, matching `page.tsx` and the homepage method ("grille /24"). The draft flags (§À valider) that `/diagnostic-ia`'s OG copy says **/20**. `site-config.megaMenu` labels the diagnostic "Diagnostic IA **/24**", so the site is already internally split on this number.
- **Why it matters:** the same proprietary asset scored two different ways across sibling pages is a §8.3 consistency failure and undercuts the "proprietary grid" credibility signal.
- **Fix:** pick one scale sitewide (the /24 is the majority and matches this page + megaMenu + homepage) and correct `/diagnostic-ia`. Already tracked `[to validate]` — confirm resolved before publish, don't re-open as new.

### 🟡 Keyword figures understated and internally inconsistent
§2 states `audit ia` = 400 (n/a difficulty). Ahrefs FR (2026-07): `audit ia` = **600, KD 1** — a stronger, near-zero-difficulty term than claimed. §2 also lists `automatisation des processus` = 250; the same keyword is 600 (and the automatisation master's own table says 600). `audit intelligence artificielle` is called "minimal" but measures **200**.
- **Why it matters:** the primary is actually easier and higher-volume than the draft credits — no strategic harm, but the "Source: Ahrefs France 2026-07" stamp should be accurate, and the 250 figure contradicts the sibling page.
- **Fix:** correct to `audit ia` 600/KD1, `automatisation des processus` 600, `audit intelligence artificielle` 200.

### 🟡 Title renders at ~60 chars — no headroom
Proposed bare title `Audit IA entreprise : opportunités en 2 semaines` (48 chars) + auto-appended ` | AI Makers` (12) = **60 chars**, exactly the ceiling. The draft itself flags "à surveiller."
- **Fix:** trim to leave a margin, e.g. `Audit IA : opportunités en 2 semaines` → ~49 rendered, still front-loads the primary. ("entreprise" adds the 100/mo long-tail but pushes to the truncation edge.)

### 🟡 Proposed meta omits the primary keyword "audit IA"
The tightened 158-char meta opens `Notre AI Scan cartographie vos workflows…` — "AI Scan" is a brand term; the searchable primary `audit IA` does not appear, and there's no explicit next step.
- **Fix:** lead with the keyword, e.g. `Un audit IA (AI Scan) cartographie vos workflows en 1-2 semaines : score de maturité /24 et roadmap chiffrée avec 3+ cas d'usage à fort ROI. Diagnostic gratuit.`

## What this page gets right
- **Primary keyword is the right FR term and very winnable:** `audit ia` = 600/mo, KD 1 (Ahrefs FR) — unambiguous, exact-matched in H1 and first sentence.
- **Guarantee language matches the contract and the canonical set:** "remboursé à 100 %" if no clear roadmap with 3+ ROI use cases — consistent with `public/llms.txt` and the homepage `guarantees` block ("Garantie Audit"). Stated with its exact condition — no softening or inflating.
- **The §4.2/§4.3 audit fix is real:** the live page repeated its four components twice; the rewrite makes §4.3 a genuine day-by-day calendar (who's in the room, which day). Removes thin/duplicate content.
- **Answer-first opener is a clean, citable definition** of "audit IA" with the AI Scan specifics in the first 40 words.
- **Schema genuinely implemented:** `BreadcrumbList` + `Service` + `FAQPage` (via ServicePage). Route in `sitemap.ts`; internal links (`/outils/scanner-opportunites-ia`, `/ai-transformation`, `/agence-ia`, `/blog/meilleures-agences-ia-france`, `/contact`) all valid.
- **Canonical figures only** (+50, +200, 9,6/10 from live hero); no Qualiopi/OPCO claim.
- **Signature opinion lines kept, negations de-stacked** ("Pas un rapport de 80 pages dans un tiroir" retained once).

## Priority fix list
1. **(🟠, low effort — needs owner)** Reconcile the /24 vs /20 maturity scale with `/diagnostic-ia`.
2. **(🟡, trivial)** Correct the understated keyword volumes (audit ia 600/KD1; automatisation des processus 600).
3. **(🟡, trivial)** Trim the title below 60 for headroom.
4. **(🟡, low effort)** Put "audit IA" and a next step into the meta.

## Open questions
- Is the maturity grid /24 or /20? This must be one number sitewide.
- Keep "entreprise" in the title (long-tail) at the cost of hitting the 60-char ceiling, or trim for safety?
