# Formation : Vibe Coding — EN Content Master

> EN strategy note: EN training demand is MOOC-intent, not our ICP — Agent 2 should position this page for corporate buyers (team training), not individual learners, or deprioritize.

## 1. Page header
- **Route (FR, live):** /formation-ia-entreprise/vibe-coding
- **Proposed EN slug:** /ai-training-for-teams/vibe-coding
- **Purpose:** Formation detail page (catalogue) — converts to catalogue download + diagnostic call.
- **SEO role:** supporting (training pillar; FR-strong, EN secondary)
- **Funnel stage:** MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | vibe coding course | US 450 / global 1.9k | 8 | Ahrefs KE (US) |
| Secondary (topical parent) | vibe coding | US 89k / GB 14k | 54–70 | Ahrefs KE — informational/MOOC intent, not our ICP |
| Secondary | build ai tools without code | low (untested exact; long-tail) | n/a | manual |

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Vibe Coding \| Formation IA en entreprise | Vibe Coding Course for Teams *(28; renders ~40 once the template appends " \| AI Makers" — TICKET-FORM-TITLE-TPL must first strip the hardcoded FR mid-suffix "\| Formation IA en entreprise". Do NOT hand-write the brand.)* |
| Meta description (140–160 chars) | Le programme le plus avancé du catalogue : piloter les assistants de code (Claude Code, Cursor, Codex) pour construire vos propres outils métier, sans savoir coder. | Our most advanced program: drive Claude Code, Cursor and Codex to build your own internal tools — no coding needed. A hands-on vibe coding course for operators. |
| H1 | Vibe Coding : construire ses propres outils avec l'IA, sans être développeur | Vibe Coding: build your own tools with AI, without being a developer |
| URL slug | /formation-ia-entreprise/vibe-coding | /ai-training-for-teams/vibe-coding |

## 4. Sections & content
Shared template: `src/app/formation-ia-entreprise/[slug]/page.tsx` · copy lives in `src/lib/formations.ts` (entry `vibe-coding`).

### 4.1 — Hero + fiche
- **Component:** `src/app/formation-ia-entreprise/[slug]/page.tsx`
- **Fields:** categorie (Avancé), name, titre (H1), tagline, resume, niveau (Intermédiaire → Avancé), public, format (Présentiel, distanciel ou hybride), duree (Format sur-mesure, parcours en plusieurs sessions), prerequis, tools[] logos
- **Current (FR):** Tagline: Construire ses propres outils en pilotant l'IA par le langage naturel.
- **Proposed (EN):**
  - Category label: `Advanced`
  - Name (cards): `Vibe Coding`
  - Tagline: `Build your own tools by driving AI in plain language.`
  - Résumé: `The most advanced program in the catalogue: steer the coding assistants — Claude Code, Cursor, Codex — to build your own internal tools, without knowing how to code.`
  - Level: `Intermediate → Advanced` · Audience: `Operators, product managers and ops who want to build their own tools` · Format: `On-site, remote or hybrid` · Duration: `Tailored format, multi-session track` · Prerequisites: `Comfortable with office software; no programming background needed`
- **Rationale:** Distinct from every other program: it's the only build-your-own-software track. Named tools (Claude Code, Cursor, Codex) are the anchor and the differentiator — not a swapped-in program name.

### 4.2 — « Ce que vos équipes vont maîtriser »
- **Component:** same template + `formations.ts:objectifs[]`
- **Fields:** objectifs[] — 4 bullets
- **Current (FR):** Piloter les assistants de code (Claude Code, Cursor, Codex) en langage naturel …
- **Proposed (EN):**
  1. `Drive the coding assistants (Claude Code, Cursor, Codex) in plain language`
  2. `Build internal tools, prototypes and small apps`
  3. `Design agents and automations that take over repetitive work`
  4. `Turn your builds into something the team can rely on — with an eye on ROI`
- **Rationale:** Outcomes are concrete artefacts (tools, prototypes, agents), which is what separates this from prompting-only programs.

### 4.3 — « Les modules de la formation »
- **Component:** same template + `formations.ts:programme[]`
- **Fields:** programme[] — 4 modules {titre, items[]}
- **Current (FR):** Les fondamentaux du Vibe Coding · Construire ses outils métier · Agents et automatisations · Industrialiser et mesurer
- **Proposed (EN):**
  - **Module 1 — Vibe coding fundamentals**
    - `How a coding assistant works, and how to talk to it`
    - `Claude Code, Cursor and Codex: when to reach for which`
    - `From an idea to a first working tool, live`
  - **Module 2 — Building your own tools**
    - `Prototype a small app that's useful to your team`
    - `Iterate and fix without hitting a technical wall`
    - `Good practice for results that stay reliable and maintainable`
  - **Module 3 — Agents and automations**
    - `Understand the architecture of an AI agent`
    - `Automate complex, repetitive tasks`
    - `Connect AI to the tools your team already uses`
  - **Module 4 — Shipping and measuring**
    - `Roll your builds out to the team`
    - `Set the guardrails for security, quality and cost`
    - `Measure the productivity gain and the ROI`
- **Rationale:** Real curriculum kept intact. Module 3–4 (agents, shipping, cost guardrails) is what makes it enterprise-grade rather than a weekend "vibe coding" tutorial.

### 4.4 — « Ce que vos équipes en retirent »
- **Component:** same template + `formations.ts:resultats[]`
- **Fields:** resultats[] — 3 stats {value, label}
- **Current (FR):** 1er outil construit pendant la formation · 0 ligne de code écrite à la main · ROI mesuré sur les automatisations déployées
- **Proposed (EN):**
  - `1st tool` — `built during the training`
  - `0 lines` — `of code written by hand`
  - `ROI` — `measured on the automations you ship`
- **Rationale:** Structural claims from formations.ts, not invented metrics.

### 4.5 — Catalogue form + formateurs + autres formations
- **Component:** `catalogue-form.tsx`, `formation-photo.tsx`, same template
- **Fields:** catalogue download form (lead magnet), trainers block « Formés par ceux qui déploient l'IA en production », grid of other formations
- **Current (FR):** Shared blocks across all formation pages.
- **Proposed (EN):** Reference the shared block copy owned by `/ai-training-for-teams` — do not re-author. Trainers heading (EN): `Trained by the people who ship AI in production`. Catalogue form: `Get the full training catalogue` + email + `Send me the catalogue`.
- **Rationale:** Reuse discipline — pillar owns catalogue and trainer proof.

### 4.6 — CTA final
- **Component:** `cta-section.tsx`
- **Fields:** title, subtitle
- **Current (FR):** « Cette formation est-elle faite pour vos équipes ? » → /contact.
- **Proposed (EN):** Title: `Is your team ready to build its own tools?` · Subtitle: `Book a 30-minute diagnostic — we'll look at the tools your team should own and scope a multi-session track.`
- **Rationale:** Speaks to the L&D / ops buyer scoping a track. Funding eligibility (Qualiopi / OPCO) line could sit here — **[to validate placement]** (see §9).

## 5. FAQ
| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | Faut-il savoir coder pour suivre Vibe Coding ? | Do you need to know how to code to take Vibe Coding? | No — that's the whole point. You build tools by driving AI in plain language. The program is designed for non-technical operators who want to create their own solutions. |
| 2 | Quels outils sont utilisés ? | Which tools are used? | The leading coding assistants: Claude Code, Cursor and Codex. You learn when and how to use each one for the job in front of you. |
| 3 | Que repart-on avec ? | What do participants leave with? | At minimum, a working tool or prototype built during the session that you can use in your actual work — plus the method to build more on your own. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| AI training for teams (catalogue) | /ai-training-for-teams | hub / pillar |
| AI workflow automation | /automatisation-ia-workflow | related money page (what "shipping" looks like at scale) |
| Book a diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Cette formation est-elle faite pour vos équipes ? » → /contact. Proposed EN: `Book a diagnostic` → /contact
- **Secondary:** catalogue PDF form (CatalogueForm) — `Get the full training catalogue`

## 8. GEO block
- **Answer-first paragraph (EN, 2–3 sentences):** Vibe Coding is AI Makers' most advanced training program: a multi-session, hands-on course where non-developers learn to drive coding assistants — Claude Code, Cursor and Codex — to build internal tools, prototypes and agents without writing code by hand. Participants ship at least one working tool during the training and leave with a method to build more. It's aimed at operators, product managers and ops teams, not software engineers.
- **llms.txt entry (EN):** [Vibe Coding](https://aimakers.fr/ai-training-for-teams/vibe-coding) : hands-on vibe coding course for teams — build internal tools and agents with Claude Code, Cursor and Codex, no coding required.

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 1st tool — built during the training | src/lib/formations.ts — [to validate] |
| 0 lines — of code written by hand | src/lib/formations.ts |
| ROI — measured on the automations shipped | src/lib/formations.ts — [to validate] |
| Tools: Claude Code, Cursor, Codex | src/lib/formations.ts |
| Format / duration / level (multi-session, on-site/remote/hybrid, intermediate→advanced) | src/lib/formations.ts |
| Funding eligibility (Qualiopi / OPCO) | **[to validate placement]** — not in public/llms.txt or formations.ts; no certification or funding % claimed. |

## Reconciliation applied
- **Double brand suffix (§2a):** stripped hand-written `| AI Makers` from the proposed Title; text "Vibe Coding Course for Teams" (28 → ~40 rendered). Rendering still needs TICKET-FORM-TITLE-TPL to strip the FR mid-suffix — left ready-but-pending.
- **Meta (§2b):** proposed EN meta is exactly 160 (at ceiling, not over); not flagged by the SEO audit; left as-is.
- **Uniform FAQ (§3.2):** NO forced swap needed — FAQ #1 ("Do you need to know how to code to take Vibe Coding?") is already the program-specific question the cross-page prescribes for this course. The set is already varied off the who/tools/cases template; kept as drafted.
- **Kept (strength):** the named tool stack (Claude Code, Cursor, Codex) — the differentiator; left intact.
- **Negations:** none inflating; nothing to de-stack.
- **Protected:** result stats ("1st tool", "ROI") kept `[to validate]`; Qualiopi/OPCO kept `[to validate placement]` (no funding %/cert). Shared trainer/catalogue boilerplate left as pillar-owned reuse. Nothing added, rounded, or invented.
- **Not touched (engineering):** `/ai-training-for-teams/*` slug and FR title-template/seoDescription fields left ready-but-pending.
