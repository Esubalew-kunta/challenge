# AI Operating System — `/ai-operating-system`

**Source audited:** `[FR] website-content/ai-operating-system/ai-operating-system.md`
**Compared against:** `src/app/ai-operating-system/page.tsx`, `src/lib/offer-pages/ai-os.ts` (`aiOsMeta`), `src/lib/site-config.ts` (fleet, guarantees, Gepromed testimonial), `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`; Ahrefs (France, FR, 2026-07).
**See also:** `_cross-page-findings.md` (double-brand title bug; shared fleet/guarantees ownership).

## Score: 90 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 23 / 25 |
| Factual & Claim Accuracy | 23 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 14 / 15 |

## Verdict
Ship after fixing the live title bug the draft correctly flags. Strong concept page: a defensible 4-layer architecture, genuine dogfooding proof, and a real named client (Gepromed) whose on-record quote literally says "operating system." All three schema types implemented.

## Findings

### 🟠 Live title renders the brand THREE times over — `aiOsMeta.title` hand-writes " | AI Makers" and the template appends it again
`src/lib/offer-pages/ai-os.ts` line 15: `title: "AI Operating System | AI Makers"`. This is passed through `constructMetadata` as a string, and `layout.tsx` applies `template: "%s | AI Makers"`. Rendered live title = **`AI Operating System | AI Makers | AI Makers`** — brand duplicated, ~43 chars wasted on repetition.
- **Why it matters:** duplicated brand in the title tag is a clear on-page defect (§1.3) and looks broken in SERP. Live-risk, shipping now.
- **Fix:** remove the hand-written " | AI Makers" from `aiOsMeta.title`. The draft's proposed bare title `AI Operating System : votre entreprise pilotée par l'IA` (54 → ~66 with suffix — too long) should be trimmed to the draft's own shorter alt `AI Operating System : pilotez votre entreprise` (~58 rendered).

### 🟡 Secondary keyword `agents ia` understated (400 vs 1 200)
§2 lists `agents ia` = 400. Ahrefs FR (2026-07): `agents ia` = **1 200, KD 39** (and the singular `agent ia` = 7 700). The primary `ai operating system` is correctly characterized as a low-volume brand-forged concept (FR = 50; global 1 700).
- **Fix:** correct `agents ia` to 1 200. The page already serves it via the fleet section, so the higher real volume is upside, not a problem.

### 🟡 Proposed title first option is over budget
The draft's primary proposed title (`AI Operating System : votre entreprise pilotée par l'IA`, 54 bare) renders ~66 with the suffix. The draft's shorter alt (~58) is the one to ship.
- **Fix:** use the shorter alt.

## What this page gets right
- **Ideal named-client proof:** Gepromed ("hub européen du dispositif médical") with Nicole Neumann's on-record testimonial that names "un système d'exploitation" — the perfect real-world anchor for a concept page. Testimonial mono-sourced from `site-config` (homepage owner), not fabricated.
- **Defensible, first-hand concept:** the 4-layer architecture (données → systèmes → agents → pilotage) with citable one-liners ("les outils s'ajoutent, un OS s'emboîte"; "Retirez une couche, le reste s'écroule"), plus dogfooding ("C'est notre propre OS") — genuine practitioner framing.
- **Canonical figures:** +200 systèmes from `llms.txt`; 6=40 tagged `[to validate]`.
- **Schema genuinely implemented:** `BreadcrumbList` + `Service` + `FAQPage` in `page.tsx`. Route in `sitemap.ts`.
- **Answer-first GEO paragraph** defines "système d'exploitation IA" self-containedly and is highly citable; llms.txt entry consistent with the live line 36.
- **Clean shared-block hygiene:** fleet and guarantees are rendered from the homepage-owned `site-config` data, not forked; the homepage-owned "On ne remplace rien, on se branche" line was correctly removed from FAQ3 while keeping the information.
- **Internal links valid:** `/ai-transformation`, `/plateforme-data-ia`, `/etudes-de-cas`, `/contact` all exist and are in the sitemap.

## Priority fix list
1. **(🟠, trivial engineering)** Remove the hand-written " | AI Makers" from `aiOsMeta.title`.
2. **(🟡, trivial)** Ship the shorter proposed title (~58 rendered), not the 54-bare one.
3. **(🟡, trivial)** Correct `agents ia` to 1 200.

## Open questions
- Confirm the 6-people-=-40 figure basis (tagged `[to validate]`).
- Gepromed case wording approved for public use? (The FR testimonial is live; confirm scope.)
