# Scanner d'opportunités IA (/outils/scanner-opportunites-ia) — EN Content Master

## 1. Page header
- **Route (FR, live):** /outils/scanner-opportunites-ia
- **Proposed EN slug:** /ai-opportunity-assessment
- **Purpose:** 3-question tool that surfaces the visitor's 3 highest-ROI AI systems from a sourced opportunity library; captures assessment intent and routes to a diagnostic.
- **SEO role:** tool-magnet
- **Funnel stage:** TOFU capture

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai opportunity assessment | 150 (US) / 50 (GB) · 1,600 global | n/a (low competition) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai use cases by industry | 90 (US) · 250 global | 64 (US) | Ahrefs, 2026-07 |
| Secondary | ai opportunities | (long-tail, low) | — | Ahrefs, 2026-07 |

> **Keyword decision:** "ai opportunity assessment" is the exact-intent term (US 150, global 1,600, no meaningful competition) and matches what the tool does. Volume is modest — this is a magnet, not a traffic pillar. "ai use cases by industry" (90, KD64) overlaps the sector cut of the tool but is hard and better owned by the /secteurs hub; keep it as a supporting phrase only.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Scanner d'opportunités IA : vos 3 premiers systèmes à déployer | AI Opportunity Assessment: your top 3 AI systems *(48; renders 60 with `\| AI Makers` template suffix — brand not hand-written)* |
| Meta description (140–160 chars) | 3 questions, 60 secondes… | Three questions, 60 seconds: get the AI systems with the best payback for your sector, size, and pain points. Every figure is sourced. Free, results on screen. *(153)* |
| H1 | Quelles opportunités IA sont les plus rentables pour vous ? | Which AI opportunities pay off fastest for you? |
| URL slug | /outils/scanner-opportunites-ia | /ai-opportunity-assessment |

## 4. Sections & content
Copy: inline `src/app/outils/scanner-opportunites-ia/page.tsx`; scanner data & scoring `src/lib/scanner-opportunites.ts` (12 opportunities, each with a sourced figure); wizard `scanner-wizard.tsx`; optional email capture via `leadSubmissionSchema` source `"scanner"`.

### 4.1 — Hero + scanner
- **Component:** `page.tsx` + `scanner-wizard.tsx`
- **Fields:** H1, intro, 3 questions (sector, team size, pain points — pick 2 to 4), results cards (stat, one-line description, source, 3 tools)
- **Current (FR):** 60-second scan promise.
- **Proposed (EN):**
  - **badge:** `Free tool`
  - **H1:** `Which AI opportunities pay off fastest for you?`
  - **intro (answer-first):** `Answer three questions — your sector, your size, and the two to four things that eat your team's time — and the scanner ranks the AI systems with the strongest payback for that profile, on screen in about a minute. Each result carries one figure and its source: a public study or an AI Makers system running in production. No email needed to see your top three.`
  - **question labels (EN):** `Your sector` (Agency & communication · Health, biotech, medtech · Industry & manufacturing · B2B services · Retail & distribution · Other) · `Your size` (Under 20 · 20–50 · 50–250 · 250+) · `What eats your team's time?` (pick 2–4: Invoicing & admin · Prospecting & sales follow-up · Meetings & notes · Support & customer requests · Content production · Reporting & steering · Recruiting · Tenders & proposals)
- **Rationale:** Matches the wizard exactly — 3 questions, 2–4 pains, on-screen top 3, sourced figures. Sector/size/pain options are the translated `SECTORS`/`TEAM_SIZES`/`PAINS` labels. "No email to see your top three" is literally true (results render before any capture).

### 4.2 — "The method, in the open"
- **Component:** `page.tsx` (methodPoints[3])
- **Fields:** 3 cards
- **Current (FR):** Methodology transparency.
- **Proposed (EN):**
  - **eyebrow:** `/ How the scanner ranks your opportunities` — **title:** `The method, in the open`
  - **Card 1 — Sourced figures, not promises:** `Every opportunity rests on a public study — Forrester, Ardent Partners, Loopio, Deloitte — or on an AI Makers system in production at a client. The source sits on each result card.`
  - **Card 2 — A ranking built on your profile:** `Your pain points carry the most weight in the score. Your sector adds a bonus where a system is especially profitable, and a few systems only appear above a certain company size.`
  - **Card 3 — A starting point, not an audit:** `The scanner gives an honest priority order in 60 seconds. The real answer depends on your actual processes — that's what the free 30-minute diagnostic is for.`
- **Rationale:** Direct translation of the live `methodPoints`, which accurately describe the scoring in `scanner-opportunites.ts` (+2 per matching pain, +1 sector bonus, `minTeamSizeIndex` gate). No over-promise.

### 4.3 — FAQ
- **Component:** `shared/faq-accordion.tsx` — see §5

### 4.4 — Related
- **Component:** `shared/related-content.tsx`
- **Proposed (EN):**
  - `AI ROI calculator` → /outils/calculateur-roi-ia — `Estimate the hours and value AI can free up.`
  - `2-minute AI diagnostic` → /diagnostic-ia — `Your AI maturity score and a personalised action plan.`
  - `The AI audit for companies` → /audit-ia-entreprise — `The full AI Scan: process mapping, scoring, and a costed roadmap.`

### 4.5 — CTA final
- **Component:** `cta-section.tsx`
- **Proposed (EN):**
  - **title:** `Do any of these opportunities speak to you?`
  - **subtitle:** `Thirty minutes to validate the payoff against your real processes, with the people who ship these systems into production.`
  - **primary CTA:** `Book a free diagnostic` → /contact · **secondary:** `AI ROI calculator` → /outils/calculateur-roi-ia
- **Rationale:** Mirrors live CTA copy; ties the ranked list to a concrete validation step.

## 5. FAQ
FAQ slot: YES — `faq-accordion.tsx` + FAQPage JSON-LD.

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | C'est vraiment gratuit ? | Is it really free? | Yes, no strings. Your results show on screen immediately, no email required. An email is only for receiving the full report if you want it — and it has to be a work address, since we send the report to a professional inbox. |
| 2 | D'où viennent les chiffres affichés ? | Where do the figures come from? | From public studies (Forrester Total Economic Impact, Ardent Partners, Loopio, Deloitte), documented public cases (Klarna, Unilever), and AI Makers systems running in production at our clients. Nothing is invented, and the source appears under each result. |
| 3 | Que contient le rapport complet ? | What's in the full report? | Every opportunity matched to your profile — not only the top three — with the sourced figure for each and our recommendation on where to start given your size and sector. |
| 4 | Et après le rapport ? | What happens after the report? | Your call. Run these systems in-house, with your own provider, or talk them through with us in a free 30-minute diagnostic. No aggressive follow-up. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| AI ROI calculator | /outils/calculateur-roi-ia | related tool |
| 2-minute AI diagnostic | /diagnostic-ia | related tool |
| The AI audit for companies | /audit-ia-entreprise | offer |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Une opportunité vous parle ? » → /contact. Proposed EN: **`Do any of these opportunities speak to you?`** (button: `Book a free diagnostic`)

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `AI Makers' AI opportunity assessment is a free three-question tool that ranks a company's highest-payback AI systems by sector, size, and pain points. It draws on a library of 12 opportunities, each backed by one sourced figure — a public study (Forrester, Ardent Partners, Loopio, Deloitte) or an AI Makers system in production. The top three show on screen in about a minute with no email; a work email unlocks the full report.`
- **llms.txt entry (EN):** `[AI Opportunity Assessment](https://aimakers.fr/outils/scanner-opportunites-ia) : three questions surface your highest-ROI AI systems, each with a sourced figure. Free, results on screen.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 3 questions, 2–4 pains, on-screen top 3, no email to see results | scanner page.tsx + scanner-wizard + FAQ (verified) |
| Scoring: +2 per matching pain, +1 sector bonus, minTeamSizeIndex gate | src/lib/scanner-opportunites.ts (verified) |
| 12 opportunities, each with one sourced figure | src/lib/scanner-opportunites.ts (verified) |
| Sources cited (Forrester, Ardent Partners, Loopio, Deloitte, Klarna, Unilever, AI Makers production) | scanner-opportunites.ts per-entry `source` (verified) |
| Full report requires a work email (free providers blocked) | src/lib/schemas/lead.ts — source "scanner" (verified); GDPR: email + sector/size/pains stored via /api/lead |

## Reconciliation applied
Applied from `seo-audit-report/outils--scanner-opportunites-ia.md` (87/100, fix-first: one compliance item) + `ai-slop-audit-report/outils--scanner-opportunites-ia.md` (Net −8, floor 0, ship).

- **Grammar slip (both audits — genuine translation slip, not a slop tell):** fixed the CTA subject/verb disagreement "One of these opportunities speak to you?" → "Do any of these opportunities speak to you?" in both §4.5 and §7.
- **Double brand suffix (SEO §2a):** stripped hand-written `| AI Makers` from the Title field; copy is now `AI Opportunity Assessment: your top 3 AI systems` (48 chars; renders 60 with the template suffix — at the cap).
- **KEPT (protected — tools' method transparency):** the method-card negation titles "Sourced figures, not promises" and "A starting point, not an audit" (deflationary/honest, named on the brief's KEEP list), the named-source transparency (Forrester, Ardent Partners, Loopio, Deloitte, Klarna, Unilever), the disclosed scoring, "No email needed to see your top three", and "No aggressive follow-up".
- **Meta 153 within budget** — no trim.
- **Left for dev / owner (not copy):** consent line + `/confidentialite` link on the wizard's email-capture step (TICKET-GDPR-CONSENT, also a live FR gap); keep method copy behaviour-based rather than hardcoding the +2/+1 weights; `/outils/scanner-opportunites-ia` vs `/ai-opportunity-assessment` slug/canonical (TICKET-EN-ROUTES).
