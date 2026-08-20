# Formation IA par ville — hub (/formation-ia) — EN Content Master

## 1. Page header
- **Route (FR, live):** /formation-ia
- **Proposed EN slug:** /ai-training-locations *(low EN priority — see note)*
- **Purpose:** City hub linking the 11 local training pages (P3 collection, out of scope) + the 6 programmes. On-site enterprise training, city by city.
- **SEO role:** hub / local SEO support (FR-centric; **EN value low**)
- **Funnel stage:** TOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | — (deprioritised for EN — see note) | — | — | — |
| Reference | ai training | 11,000 (US) / 2,500 (GB) · 25,000 global | 65 (US) / 64 (GB) | Ahrefs keywords-explorer-overview, 2026-07 |
| Reference | ai training for teams (owned by /ai-training-for-teams) | — | — | sibling programme hub |

> **EN priority note (per brief):** this is a FR-centric, local city hub, and the big EN term "ai training" (11,000, KD65) is a **MOOC/self-serve intent trap** — people searching it want an online course, not on-site enterprise training in Lyon or Nantes. It's also hard (KD65) and off-ICP. So we **deprioritise this page for EN**: don't chase "ai training", keep the French cities as-is, and let the **programme** hub (`/ai-training-for-teams`, owned by formation-ia-entreprise) carry the EN enterprise-training intent. If EN ever needs a city angle, it's a later cycle. English copy below is a light adaptation so the page reads correctly if surfaced, not an optimisation target.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Formation IA près de chez vous : 11 villes en France et au Maroc | On-site AI training near you: 11 cities *(39; renders 51 with `\| AI Makers` template suffix — brand not hand-written)* |
| Meta description (140–160 chars) | Formation IA en entreprise à Paris, Lyon… | On-site enterprise AI training across 11 cities in France and Morocco — Paris, Lyon, Marseille, Casablanca. Hands-on, at your offices, on your real use cases. *(152)* |
| H1 | Formation IA près de chez vous | On-site AI training, near you |
| URL slug | /formation-ia | /ai-training-locations |

## 4. Sections & content
Copy: inline `src/app/formation-ia/page.tsx` + `src/lib/villes-formation.ts` (11 cities) + `src/lib/formations.ts` (6 programmes).

### 4.1 — Hero
- **Component:** `page.tsx` (inline)
- **Fields:** badge, H1, intro
- **Current (FR):** Local-presence promise.
- **Proposed (EN):**
  - **badge:** `On-site across France & Morocco`
  - **H1:** `On-site AI training, near you`
  - **intro (answer-first):** `We run AI training in your offices, in 11 cities across France and Morocco — hands-on sessions built on your team's real use cases, not a generic slide deck. Same six programmes everywhere; pick your city for local details and scheduling.`
- **Rationale:** Frames the page as enterprise, on-site training (our ICP), explicitly distinct from online AI courses. Keeps it short since this is a deprioritised EN page.

### 4.2 — Cities (11 cards)
- **Component:** `page.tsx` + `villes-formation.ts`
- **Fields:** city cards {city, link}
- **Current (FR):** "AI training {city}" card grid.
- **Proposed (EN):** card label pattern `AI training in {City}` → /formation-ia/{ville}, for: Paris, Nice, Lyon, Toulouse, Bordeaux, Lille, Nantes, Marseille, Strasbourg, Montpellier, Casablanca. *(Local child pages are out of scope this cycle.)*
- **Rationale:** Simple routing labels; child pages own the local content.

### 4.3 — "Six programmes, available in every city"
- **Component:** `page.tsx` + `formations.ts`
- **Fields:** 6 programme cards
- **Current (FR):** Programme list crosslink.
- **Proposed (EN):**
  - **title:** `Six programmes, available in every city`
  - **body:** `The catalogue is the same wherever we come to you — from AI fundamentals to shipping with Claude and Microsoft Copilot. The programmes and their detail are owned by the enterprise-training hub; see it for the full catalogue.`
  - **link:** `See the full AI training catalogue` → /formation-ia-entreprise
- **Rationale:** Points to the programme hub (owner of the catalogue) instead of cloning the six programme descriptions here — avoids hub-on-hub duplication.

### 4.4 — CTA final
- **Component:** `cta-section.tsx`
- **Proposed (EN):**
  - **title:** `Train your teams, wherever you are?`
  - **subtitle:** `Thirty minutes to scope the right programme and city for your team.`
  - **primary CTA:** `Book a free diagnostic` → /contact
- **Rationale:** Mirrors « Former vos équipes, où que vous soyez ? ».

## 5. FAQ
No FAQ slot in template.

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| AI training in {City} ×11 | /formation-ia/[ville] | local pages (out of scope this cycle) |
| See the full AI training catalogue | /formation-ia-entreprise | programme hub (EN owner of training intent) |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Former vos équipes, où que vous soyez ? » → /contact. Proposed EN: **`Train your teams, wherever you are?`** (button: `Book a free diagnostic`)

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `AI Makers runs on-site enterprise AI training in 11 cities across France and Morocco — Paris, Nice, Lyon, Toulouse, Bordeaux, Lille, Nantes, Marseille, Strasbourg, Montpellier, and Casablanca. Sessions are hands-on and built on each team's real use cases; the same six programmes are available in every city, from AI fundamentals to Claude and Microsoft Copilot.`
- **llms.txt entry (EN):** `[On-site AI training by city](https://aimakers.fr/formation-ia) : hands-on enterprise AI training in 11 cities across France and Morocco, on your real use cases.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 11 cities listed | src/lib/villes-formation.ts (verified) |
| 6 programmes | src/lib/formations.ts (catalogue owned by /formation-ia-entreprise) |
| +2,500 professionals trained | public/llms.txt (canonical) |

## Reconciliation applied
Applied from `seo-audit-report/formation-ia.md` (82/100, ship light) + `ai-slop-audit-report/formation-ia.md` (Net +2, ship, no editing).

- **Double brand suffix (SEO §2a):** stripped the hand-written `| AI Makers` from the Title field; copy is now `On-site AI training near you: 11 cities` (39 chars; renders ~51 with template suffix).
- **Meta at 160 ceiling (SEO §2b):** trimmed to 152 by dropping "and more", leaving buffer for translation drift; kept the city list + on-site/hands-on frame.
- **KEPT (protected):** the scoping negation "real use cases, not a generic slide deck" (deflationary — distinguishes on-site enterprise training from MOOC intent; corpus KEEP list). Hub stays short and does not clone the 6 programme descriptions (correct anti-cannibalization — routes to the programme hub).
- **Left for owner / dev (not copy):** the deferred EN route for the programme hub (`/ai-training-for-teams` vs `/formation-ia-entreprise`) and the `/formation-ia` vs `/ai-training-locations` slug/canonical decision — both TICKET-EN-ROUTES proposals, left as proposals.
