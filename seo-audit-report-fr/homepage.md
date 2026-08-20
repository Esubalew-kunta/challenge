# Homepage — `/`

**Source audited:** `[FR] website-content/homepage/homepage.md`
**Compared against:** `src/app/page.tsx`, `src/app/layout.tsx`, `src/lib/metadata.ts`, `src/lib/site-config.ts` (`homepageContent.*`), `src/app/sitemap.ts`, `public/llms.txt`; Ahrefs Keywords Explorer (France, FR, 2026-07).
**See also:** `_cross-page-findings.md` (title-template suffix; client-result tagging).

## Score: 85 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 21 / 25 |
| Factual & Claim Accuracy | 21 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 14 / 15 |

## Verdict
Ship after fixing two things. The page is a genuinely strong brand hub — real first-hand proof ("notre propre cuisine"), a named/verifiable founder, canonical figures, and correctly de-linked keyword targeting that avoids cannibalization. But the draft's core title claim is factually wrong against the code, and several named-client result figures are rendered live without the `[à valider]` tag the draft itself says they need.

## Findings

### 🟠 The draft's title claim is false against the code — the ` | AI Makers` suffix IS appended
§3 states the proposed title `AI Makers · Formation & Agence IA pour Entreprises` is "*52 car. — la home utilise le title `default` du layout, NON templaté : elle conserve « AI Makers » et rien n'est ajouté*." This is incorrect. `src/app/page.tsx` sets its metadata through `constructMetadata({ title: "..." })` (`src/lib/metadata.ts` returns `title` as a **plain string**), and `src/app/layout.tsx` defines `title.template: "%s | AI Makers"`. Next.js applies the parent template to any string title in a child segment. The homepage is the child segment `app/page.tsx`.
- **Consequence:** the currently-live title renders as `AI Makers | Cabinet de Transformation IA pour Entreprises | AI Makers` — ~66 chars, "AI Makers" duplicated. The proposed title would render `AI Makers · Formation & Agence IA pour Entreprises | AI Makers` = **62 chars, brand twice**.
- **Why it matters:** >60-char titles truncate in SERP; leading + trailing brand wastes the pixels that should front-load the keyword.
- **Fix:** drop the leading brand from the page-level title (the template supplies it once). E.g. `Formation, Agence & Automatisation IA pour Entreprises` → renders `… | AI Makers` at ~54 chars, brand once, keyword front-loaded. Correct the §3 rationale.

### 🟠 Named-client result figures render live without the `[à valider]` tag the draft assigns them
§4.6 renders, verbatim from `site-config.homepageContent.proof.cases`, `Qatar Tourism — 18 000 $/an … -40% charge support`, `Shem's — 10x`, and `Sage — +70% de visibilité`. §9's facts table marks all of these `[à valider pour usage]` / `[à valider — cas non publié]`, but only the Sage figure carries the tag in the rendered copy; Qatar and Shem's do not.
- **Why it matters:** these are attributed, named-client outcomes already shipping in production (§4/§7.3 hold these to the strictest standard). An untagged, un-sourced client number is a 🟠 trust/compliance exposure under EU advertising rules.
- **Fix:** either obtain written client sign-off for each figure, or carry the `[à valider]` marker through to the rendered card until sign-off. Live-risk (already on site), not draft-only.

### 🟡 "5 à 10h/semaine" (benefits) vs "7h/sem" (counters + llms.txt) — same metric, two figures on one page
§4.6 `benefits[0]` title = `5 à 10h/semaine récupérées par collaborateur`; the counters block and `public/llms.txt` (canonical) both state `7h/semaine`.
- **Why it matters:** 7 sits inside 5–10 so it is not a contradiction, but presenting a range and a point value for the identical metric on the same screen reads as imprecise. Canonical set is the single source of truth (§7.3).
- **Fix:** align on the canonical `7h/semaine` as the headline number; if the 5–10h range is kept, frame it explicitly as the observed spread around the 7h average.

### 🟡 "Partenaire Anthropic" / "Ambassadeur Osez l'IA" badges render live, unverified
§4.12 badges are tagged `[à valider autorisation]` / `[à valider — badge programme FR]`. Partnership badges are E-E-A-T credential claims (§1.1) and are live in `bookingProof`.
- **Fix:** confirm Anthropic partner-program authorization and the "Osez l'IA" ambassador status in writing, or remove the badges. Do not ship a partner claim on trust.

## What this page gets right
- **Keyword claims verified accurate (Ahrefs FR):** `formation ia` 6 900 / KD 55 (draft's 8 100→6 900 correction is correct), `agence ia` 2 400 / KD 54, `automatisation des processus` 600 / KD 5, `transformation ia` 100 — all match the draft's table.
- **Correct hub strategy, no cannibalization:** the three pillar terms are blended on the hub but de-linked to `/formation-ia-entreprise`, `/agence-ia`, `/automatisation-ia-workflow` — the money pages carry the ranking. Deliberate and right.
- **Canonical figures honored:** +50 entreprises, +200 systèmes, +2 500 formés all match `public/llms.txt`.
- **Schema genuinely implemented (not planned):** `Organization` (with founder Othmane Halim + LinkedIn `sameAs`), `WebSite`, and `FAQPage` are all emitted from `src/app/page.tsx` (lines 32–100). FAQPage is built from `homepageContent.faq.items`.
- **Route `` is in `sitemap.ts`; every internal-link target exists and is in the sitemap** (`/contact`, `/diagnostic-ia`, `/playbook-ia`, `/ai-transformation`, `/forward-deployed-engineer`, `/formation-ia-entreprise`, `/etudes-de-cas`, `/gouvernance-ia`, `/agence-ia`, `/automatisation-ia-workflow`).
- **Strong GEO opener** (§8): self-contained, citable, figure-backed answer-first paragraph.
- **Proposed meta fixes a live over-claim:** the live meta reads "+200 systèmes déployés **pour Schneider Electric, IBM, Amgen, Empruntis**" (implies 200 systems for 4 named clients); the proposed FR meta drops that framing. Good catch.
- **Audit-slop fixes applied:** stacked negations flattened; non-canonical 60-80% and BCG-70% tagged `[à valider]`.

## Priority fix list
1. **(🟠, low effort)** Re-word the page-level title to remove the leading brand and correct the §3 rationale about the template suffix.
2. **(🟠, medium effort — needs client)** Get sign-off on Qatar (18 000 $/-40%) and Shem's (10x) figures, or keep `[à valider]` in the rendered cards.
3. **(🟡, low effort)** Reconcile 5–10h vs 7h on the metric framing.
4. **(🟡, low effort — needs client)** Confirm or pull the Anthropic / "Osez l'IA" badges.

## Open questions
- Are the Qatar Tourism, Shem's, and Sage case figures client-approved for public use? Sage is explicitly marked "cas non publié."
- Is AI Makers an authorized Anthropic partner and an official "Osez l'IA" ambassador?
- Are all 14 named testimonials consented for web publication?
