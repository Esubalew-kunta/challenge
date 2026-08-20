# Outils gratuits — hub (/outils) — EN Content Master

## 1. Page header
- **Route (FR, live):** /outils
- **Proposed EN slug:** /ai-tools
- **Purpose:** Free-tools hub: ROI calculator, AI visibility check, opportunity assessment. Router + trust framing for the three magnets.
- **SEO role:** hub / tool-magnet
- **Funnel stage:** TOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai tools for business | 2,900 (US) · 5,600 global | 33 (US) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | free ai tools | 7,300 (US) · 28,000 global | 57 (US) | Ahrefs, 2026-07 (intent mismatch — see note) |
| Secondary | ai roi calculator / ai visibility checker | — | — | owned by the child tool pages |

> **Keyword decision:** "free ai tools" (7,300) and "ai tools for business" (2,900) are software-**directory** queries — people want a list of 50 apps, not three lead-gen tools. This hub can't and shouldn't win them; chasing them would make it thin and off-intent. The hub's real job is internal routing + a citable POV on why these three exist. The commercial-tool intent lives on the child pages (ai roi calculator, ai visibility checker, ai opportunity assessment). Target "ai tools for business" softly in copy; don't over-optimise the hub for a directory head term.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Outils gratuits : ROI, visibilité IA, opportunités d'automatisation | Free AI tools: ROI, visibility, opportunities *(45; renders 57 with `\| AI Makers` template suffix — brand not hand-written)* |
| Meta description (140–160 chars) | 3 outils gratuits, sans inscription forcée… | Three free AI tools, no forced signup: calculate AI's ROI, see what ChatGPT says about you, and find your most profitable AI systems. Built from real client work. *(159)* |
| H1 | Des outils gratuits, sans inscription forcée | Free AI tools, no forced signup |
| URL slug | /outils | /ai-tools |

## 4. Sections & content
Copy: inline `src/app/outils/page.tsx`.

### 4.1 — Hero
- **Component:** `page.tsx`
- **Fields:** badge, H1, intro
- **Current (FR):** No-forced-signup promise.
- **Proposed (EN):**
  - **badge:** `Free`
  - **H1:** `Free AI tools, no forced signup`
  - **intro (own POV, answer-first):** `Three tools, each built from a question we actually get asked on sales calls: what would AI save us, what do the AI engines say about us, and where should we start. Two of the three give you an answer on screen without an email. We built them the same way we build client systems — sourced figures, conservative math, no invented numbers — because a tool that oversells is worse than no tool.`
- **Rationale:** A hub must add its own citable value. The intro states a POV (why three, why sourced, why no forced email) instead of just announcing a grid. "No invented numbers / a tool that oversells is worse than no tool" is an assertable opinion the anti-slop pass rewards, and it's true of the underlying tools.

### 4.2 — 3 tool cards
- **Component:** `page.tsx`
- **Fields:** tool cards {name, description, link}
- **Current (FR):** Tool grid.
- **Proposed (EN):**
  - **Card 1 — AI ROI calculator** → /outils/calculateur-roi-ia: `Four sliders give you an annual estimate of hours freed, their value at loaded salary cost, and the full-time-equivalents that adds up to. Conservative by default, no signup.`
  - **Card 2 — AI visibility check** → /outils/audit-geo-gratuit: `What ChatGPT, Gemini, and Perplexity say about you versus your competitors — a short audit, human-prepared within 48h.`
  - **Card 3 — AI opportunity assessment** → /outils/scanner-opportunites-ia: `Three questions surface the AI systems with the best payback for your profile, each with a sourced figure. Top three on screen in a minute.`
- **Rationale:** One-line blurbs that route, not clone. Each links to the child page that owns the full answer. Deliverables match the verified tool logic.

### 4.3 — "Want the tailored version?"
- **Component:** `page.tsx`
- **Fields:** bridge copy to paid offers
- **Current (FR):** Upsell bridge.
- **Proposed (EN):**
  - **title:** `Want the tailored version?`
  - **body:** `These tools give you an order of magnitude. The real numbers come from your processes — which is what the free 30-minute diagnostic is for, and what the AI Scan turns into a costed roadmap. The tools are the honest preview; the audit is the real thing.`
  - **CTA:** `Book a free diagnostic` → /contact · secondary `See the AI audit` → /audit-ia-entreprise
- **Rationale:** Bridges TOFU tools to the BOFU offer without repeating the audit page's content — links to its owner.

### 4.4 — Related
- **Component:** `shared/related-content.tsx`
- **Fields:** Audit IA, Diagnostic IA, Playbook
- **Proposed (EN):**
  - `The AI audit for companies` → /audit-ia-entreprise — `The full AI Scan: mapping, scoring, costed roadmap.`
  - `2-minute AI diagnostic` → /diagnostic-ia — `Your AI maturity score and an action plan.`
  - `The AI-First Playbook (48 pages)` → /playbook-ia — `Our transformation guide, free to download.`

## 5. FAQ
No FAQ slot in template.

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| AI ROI calculator | /outils/calculateur-roi-ia | tool |
| AI visibility check | /outils/audit-geo-gratuit | tool |
| AI opportunity assessment | /outils/scanner-opportunites-ia | tool |
| The AI audit for companies | /audit-ia-entreprise | related |

## 7. CTA
- **Primary CTA:** Tool cards → individual tools. Bridge CTA: **`Book a free diagnostic`** → /contact

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `AI Makers offers three free AI tools with no forced signup: an AI ROI calculator (hours and value AI can recover), a free AI visibility check (what ChatGPT, Gemini, and Perplexity say about you vs. competitors, human-prepared within 48h), and an AI opportunity assessment (your highest-ROI AI systems from three questions). Each uses sourced figures and conservative math; two return results on screen without an email.`
- **llms.txt entry (EN):** `[Free AI Tools](https://aimakers.fr/outils) : AI Makers' free tools — ROI calculator, AI visibility check, and opportunity assessment. Sourced figures, no forced signup.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 3 free tools, no forced signup; 2 return results without email | page copy + tool components (verified) |
| Per-tool deliverables | child tool pages (verified against components) |

## Reconciliation applied
Applied from `seo-audit-report/outils.md` (85/100, ship) + `ai-slop-audit-report/outils.md` (Net −2, floor 0, ship).

- **Double brand suffix (SEO §2a):** stripped hand-written `| AI Makers` from the Title field (renders 57 with template suffix).
- **Colon-template card (slop, optional cross-hub echo):** reshaped Card 1 (ROI calculator) from the "punch: three nouns" colon shape to a flowing declarative, so the tool grid doesn't repeat the secteurs card template. Kept "Conservative by default, no signup." Cards 2 and 3 already vary. Restructured, not synonym-swapped.
- **KEPT (protected — tools' method transparency):** the hub POV "sourced figures, conservative math, no invented numbers", "a tool that oversells is worse than no tool", "Two of the three give you an answer on screen without an email", and the H1 scoping negation "no forced signup". These are the protected honesty/method-transparency presence per the brief.
- **Meta 159 within budget** — no trim.
- **Left for dev (not copy):** GDPR consent line on the two capturing child tools (TICKET-GDPR-CONSENT); `/outils` vs `/ai-tools` slug/canonical + child routes (TICKET-EN-ROUTES).
