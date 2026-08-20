# Études de cas — hub (/etudes-de-cas) — EN Content Master

## 1. Page header
- **Route (FR, live):** /etudes-de-cas
- **Proposed EN slug:** /ai-case-studies
- **Purpose:** Proof hub: measured client results, routing to the published case studies (5 live; 2 draft/noindex excluded from the index).
- **SEO role:** trust hub
- **Funnel stage:** MOFU/BOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai case studies | 200 (US) / 90 (GB) · 600 global | 39 (US) / 45 (GB) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai transformation case study | low · long-tail | — | Ahrefs, 2026-07 |
| Secondary | ai implementation examples | low · long-tail | — | Ahrefs, 2026-07 |

> **Keyword decision:** "ai case studies" (200 US, KD39) is the right head term for a trust hub — modest volume, mid difficulty, exact intent. The page's real weight is as proof (measured before/after) that supports the commercial pages; it isn't a traffic pillar. Slug /ai-case-studies.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Études de cas IA : des résultats mesurés, pas des promesses | AI case studies: measured results, not promises *(47; renders 59 with `\| AI Makers` template suffix — brand not hand-written)* |
| Meta description (140–160 chars) | Operating systems IA, agents métier… | AI operating systems, business agents, GEO visibility on ChatGPT and Gemini, data platforms: our AI work in detail — before, after, and how — across health and medtech. *(152)* |
| H1 | Des résultats mesurés. Pas des promesses. | Measured results. Not promises. |
| URL slug | /etudes-de-cas | /ai-case-studies |

## 4. Sections & content
Copy: inline `src/app/etudes-de-cas/page.tsx` + `src/lib/case-studies.ts` (cards) + `homepageContent.proof` mini-cases.

### 4.1 — Hero
- **Component:** `page.tsx`
- **Fields:** badge, H1, intro
- **Current (FR):** Anti-promise positioning.
- **Proposed (EN):**
  - **badge:** `Results`
  - **H1:** `Measured results. Not promises.`
  - **intro (own POV, answer-first):** `Every case here is a real system running in a real company, with a before and an after we can point to — not a mock-up or a pilot that never shipped. They range from a full AI operating system for a six-person medtech to getting a software vendor cited by ChatGPT and Gemini. Where a figure comes from the client, we say so. Read them for the method, not the logos.`
- **Rationale:** The hub's POV — "real systems, real before/after, we attribute figures" — is a citable trust stance, and "read them for the method, not the logos" asserts an opinion. It frames the collection without retelling any single case.

### 4.2 — Case study cards
- **Component:** `page.tsx` + `case-studies.ts`
- **Fields:** card per published case {cardTitle, sector, one-line, link}
- **Current (FR):** Addictest, Sage, Fondation Force, ThinkONE, Gepromed (drafts hidden: cardio-check-up, delassus).
- **Proposed (EN):** *(published only; sector = translated `sector`; one-liners are teasers, not the child `title`)*
  - `Addictest` — International education, Morocco → /etudes-de-cas/addictest — `Industrialising university applications with AI.`
  - `Sage` — Business software vendor, Europe → /etudes-de-cas/sage-geo — `Becoming the answer AI engines cite on e-invoicing.`
  - `Fondation Force` — Public-interest health foundation, Strasbourg → /etudes-de-cas/fondation-force — `The Nobel-linked foundation the AIs couldn't read — until they could.`
  - `ThinkONE` — Marketing research, Morocco → /etudes-de-cas/thinkone — `AI at the core of a market-research firm.`
  - `Gepromed` — MedTech, Strasbourg → /etudes-de-cas/gepromed — `A full AI department for a six-person medtech.`
- **Rationale:** Five published cards only — the two draft/noindex cases (cardio-check-up, delassus) stay out of the index per their status. Teasers are short so each child page owns its full metrics.

### 4.3 — "Explore the engagements in detail"
- **Component:** `page.tsx`
- **Fields:** secondary listing / deep-dive links
- **Proposed (EN):**
  - **title:** `Explore the engagements in detail`
  - **body:** `Each case breaks down the same way: the before, the systems we shipped, how they were built, the measured after, and what we'd do differently. Open any one for the full teardown.`
- **Rationale:** Sets the reader's expectation for the child-page structure without duplicating it.

### 4.4 — CTA final
- **Component:** `cta-section.tsx`
- **Proposed (EN):**
  - **title:** `Want the same kind of result?`
  - **subtitle:** `Thirty minutes to see which of these systems would cut the most time in your company — with the engineers who built them.`
  - **primary CTA:** `Book a free diagnostic` → /contact
- **Rationale:** Mirrors « Obtenez les mêmes résultats » without over-claiming a guaranteed outcome.

## 5. FAQ
No FAQ slot in template.

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| (5 published case names above) | /etudes-de-cas/[slug] | case pages |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Obtenez les mêmes résultats » → /contact. Proposed EN: **`Want the same kind of result?`** (button: `Book a free diagnostic`)

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `AI Makers' case studies document real AI systems in production at client companies, each with a measurable before and after — from a full AI operating system for a six-person medtech (Gepromed) to getting a software vendor (Sage) cited by ChatGPT and Gemini on e-invoicing. Published cases span international education, business software, health foundations, marketing research, and medtech; client-reported figures are attributed as such.`
- **llms.txt entry (EN):** `[AI case studies](https://aimakers.fr/etudes-de-cas) : measured client results — AI operating systems, business agents, GEO visibility, and data platforms, with before/after and how.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| Published cases + sectors + focus (Addictest, Sage, Fondation Force, ThinkONE, Gepromed) | src/lib/case-studies.ts (verified; status="published") |
| Drafts excluded from index (cardio-check-up, delassus) | case-studies.ts status="draft" / noindex |
| Case metrics | case-studies.ts — client-reported; drafts pending validation |

## Reconciliation applied
Applied from `seo-audit-report/etudes-de-cas.md` (86/100, ship) + `ai-slop-audit-report/etudes-de-cas.md` (Net −5, floor 0, ship).

- **Double brand suffix (SEO §2a):** stripped hand-written `| AI Makers` from the Title field (renders 59 with template suffix).
- **Meta at 160 ceiling (SEO §2b):** trimmed to 152 by dropping "and more"; kept the deliverable list + before/after/how frame.
- **Cliché (slop §10.7):** replaced "move the needle" in the final-CTA subtitle with the concrete "cut the most time" (restructure, not synonym-swap).
- **KEPT (protected):** the deflationary honesty negations — "Measured results. Not promises.", "not a mock-up or a pilot that never shipped", "Read them for the method, not the logos" — these are the concede/deflate variant on the corpus KEEP list, plus the epistemic-integrity line "Where a figure comes from the client, we say so" and the "what we'd do differently" section. Index hygiene kept: only the 5 published cases listed; the 2 draft/noindex cases stay out.
- **Left for owner / dev (not copy):** child-case metric attribution / sign-off (each child must carry client-sourced or `[to validate]` figures — the two draft cases are held); `/etudes-de-cas` vs `/ai-case-studies` slug/canonical (TICKET-EN-ROUTES).
