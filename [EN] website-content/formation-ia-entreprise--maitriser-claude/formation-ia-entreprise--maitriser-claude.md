# Formation : Maîtriser Claude en entreprise — EN Content Master

> EN strategy note: EN training demand is MOOC-intent, not our ICP — Agent 2 should position this page for corporate buyers (team training), not individual learners, or deprioritize.

## 1. Page header
- **Route (FR, live):** /formation-ia-entreprise/maitriser-claude
- **Proposed EN slug:** /ai-training-for-teams/claude-training
- **Purpose:** Formation detail page (catalogue) — converts to catalogue download + diagnostic call.
- **SEO role:** supporting (training pillar; FR-strong, EN secondary)
- **Funnel stage:** MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | claude training | US 350 / GB 250 | 47 | Ahrefs KE (US) |
| Secondary | claude for business | US 900 | 43 | Ahrefs KE (US) — higher volume, adjacent |
| Secondary | claude ai training | US 350 | n/a | Ahrefs KE (US) |

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Maîtriser Claude en entreprise \| Formation IA en entreprise | Claude Training for Teams *(25; renders ~37 once the template appends " \| AI Makers" — TICKET-FORM-TITLE-TPL must first strip the FR mid-suffix "\| Formation IA en entreprise". Do NOT hand-write the brand.)* |
| Meta description (140–160 chars) | Faire de Claude l'assistant central de vos équipes : Skills, Projects, Cowork, connecteurs MCP et intégrations Microsoft 365, avec les bons réglages de sécurité. | Make Claude your team's core assistant: Skills, Projects, Cowork, MCP connectors and Microsoft 365 integrations — with the security settings that fit. |
| H1 | Maîtriser Claude en entreprise : Skills, Cowork et automatisation IA | Mastering Claude in the enterprise: Skills, Cowork and AI automation |
| URL slug | /formation-ia-entreprise/maitriser-claude | /ai-training-for-teams/claude-training |

## 4. Sections & content
Shared template: `src/app/formation-ia-entreprise/[slug]/page.tsx` · copy lives in `src/lib/formations.ts` (entry `maitriser-claude`).

### 4.1 — Hero + fiche
- **Component:** `src/app/formation-ia-entreprise/[slug]/page.tsx`
- **Fields:** categorie (Métier), name, titre (H1), tagline, resume, niveau (Débutant → Intermédiaire), public, format (Présentiel, distanciel ou hybride), duree (Format sur-mesure, de la journée au parcours complet), prerequis, tools[] logos
- **Current (FR):** Tagline: Passer du chat à l'automatisation réelle : Skills, Projects, Cowork et connecteurs.
- **Proposed (EN):**
  - Category label: `Role-based`
  - Name (cards): `Mastering Claude in the enterprise`
  - Tagline: `Go from chat to real automation: Skills, Projects, Cowork and connectors.`
  - Résumé: `Make Claude your team's core assistant — Skills, Projects, Cowork, MCP connectors and Microsoft 365 integrations — with the right security settings.`
  - Level: `Beginner → Intermediate` · Audience: `Managers, operations teams, leadership, digital transformation leads` · Format: `On-site, remote or hybrid` · Duration: `Tailored format, from one day to a full track` · Prerequisites: `No technical prerequisites`
- **Rationale:** The distinct anchor is Claude's specific capabilities — Skills, Projects, Cowork, MCP connectors — moving teams from chat to automation. That separates it cleanly from the Copilot program (M365) and the literacy program (multi-tool).

### 4.2 — « Ce que vos équipes vont maîtriser »
- **Component:** same template + `formations.ts:objectifs[]`
- **Fields:** objectifs[] — 4 bullets
- **Current (FR):** Configurer Claude comme assistant spécialisé avec les Skills et les Projects …
- **Proposed (EN):**
  1. `Configure Claude as a specialised assistant with Skills and Projects`
  2. `Automate multi-step tasks with Cowork — no code`
  3. `Connect Claude to your tools (Drive, Notion, Slack, Microsoft 365)`
  4. `Roll Claude out across a team with the right security settings`
- **Rationale:** Feature-specific outcomes (Skills, Projects, Cowork, MCP) that only this program covers.

### 4.3 — « Les modules de la formation »
- **Component:** same template + `formations.ts:programme[]`
- **Fields:** programme[] — 4 modules {titre, items[]}
- **Current (FR):** Les fondamentaux de Claude · Skills, Projects & bases de connaissances · Cowork & automatisation sans code · Connecteurs, déploiement & sécurité
- **Proposed (EN):**
  - **Module 1 — Claude fundamentals**
    - `From chat to working assistant: what Claude actually changes`
    - `Prompts, styles and good practice for reliable results`
    - `Configuring Claude for your role`
  - **Module 2 — Skills, Projects & knowledge bases**
    - `Build specialised assistants with Skills`
    - `Organise your knowledge in Projects`
    - `Standardise usage across a team`
  - **Module 3 — Cowork & no-code automation**
    - `Automate multi-step tasks with Cowork`
    - `Chain actions without writing code`
    - `Concrete use cases by function`
  - **Module 4 — Connectors, rollout & security**
    - `Connect Claude to Drive, Notion, Slack and Microsoft 365 (MCP)`
    - `Roll Claude out across the team`
    - `Set the guardrails for data security and confidentiality`
- **Rationale:** The Skills → Cowork → connectors progression is the real curriculum and the page's fingerprint.

### 4.4 — « Ce que vos équipes en retirent »
- **Component:** same template + `formations.ts:resultats[]`
- **Fields:** resultats[] — 3 stats {value, label}
- **Current (FR):** 100% du potentiel de Claude exploité · Sans code automatisations accessibles à tous · À l'échelle déploiement équipe sécurisé
- **Proposed (EN):**
  - `100%` — `of Claude's potential put to use`
  - `No code` — `automations everyone can build`
  - `At scale` — `secure team rollout`
- **Rationale:** Structural claims from formations.ts, no invented figures.

### 4.5 — Catalogue form + formateurs + autres formations
- **Component:** `catalogue-form.tsx`, `formation-photo.tsx`, same template
- **Fields:** catalogue download form (lead magnet), trainers block « Formés par ceux qui déploient l'IA en production », grid of other formations
- **Current (FR):** Shared blocks across all formation pages.
- **Proposed (EN):** Reference the shared block copy owned by `/ai-training-for-teams` — do not re-author. Trainers heading (EN): `Trained by the people who ship AI in production`. Catalogue form: `Get the full training catalogue` + email + `Send me the catalogue`. (Claude/agents expert on the roster: Walid Boulanouar, CTO — as already stated in formations.ts.)
- **Rationale:** Reuse discipline — pillar owns catalogue and trainer proof; trainer credential used verbatim from formations.ts.

### 4.6 — CTA final
- **Component:** `cta-section.tsx`
- **Fields:** title, subtitle
- **Current (FR):** « Cette formation est-elle faite pour vos équipes ? » → /contact.
- **Proposed (EN):** Title: `Want Claude to be your team's core assistant?` · Subtitle: `Book a 30-minute diagnostic — we'll scope the Skills, connectors and rollout around your tools and security needs.`
- **Rationale:** Speaks to a transformation lead. Funding eligibility (Qualiopi / OPCO) line could sit here — **[to validate placement]** (see §9).

## 5. FAQ
| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | Faut-il des compétences techniques ? | Do participants need technical skills? | No. The program is built for managers and operations teams. Even the Cowork automations are done without writing code. |
| 2 | Qu'est-ce que les Skills et Cowork ? | What are Skills and Cowork? | Skills specialise Claude on your tasks and context; Cowork automates multi-step tasks. Together they take Claude from a chat window to a real working assistant. |
| 3 | Peut-on connecter Claude à nos outils ? | Can Claude connect to our tools? | Yes. Via MCP connectors, Claude plugs into Drive, Notion, Slack and Microsoft 365. We also cover team-wide rollout and the security settings. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| AI training for teams (catalogue) | /ai-training-for-teams | hub / pillar |
| AI workflow automation | /automatisation-ia-workflow | related money page (automation at scale) |
| Book a diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Cette formation est-elle faite pour vos équipes ? » → /contact. Proposed EN: `Book a diagnostic` → /contact
- **Secondary:** catalogue PDF form (CatalogueForm) — `Get the full training catalogue`

## 8. GEO block
- **Answer-first paragraph (EN, 2–3 sentences):** AI Makers' "Mastering Claude in the enterprise" program trains managers and operations teams to move Claude from chat to automation — using Skills and Projects to build specialised assistants, Cowork to automate multi-step tasks without code, and MCP connectors to link Claude to Drive, Notion, Slack and Microsoft 365. It covers team-wide rollout with the right security and confidentiality settings, and needs no technical background. It's a team program, not an individual course.
- **llms.txt entry (EN):** [Claude Training](https://aimakers.fr/ai-training-for-teams/claude-training) : team training to master Claude in the enterprise — Skills, Projects, Cowork, MCP connectors and secure rollout.

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 100% — of Claude's potential put to use | src/lib/formations.ts — [to validate] |
| No-code automations (Cowork) | src/lib/formations.ts |
| Secure team rollout at scale | src/lib/formations.ts |
| Features: Skills, Projects, Cowork, MCP connectors (Drive, Notion, Slack, Microsoft 365) | src/lib/formations.ts |
| Trainer: Walid Boulanouar, CTO — Claude, AI agents & automations | src/lib/formations.ts (formateurs) |
| Format / duration / level (day–full track, on-site/remote/hybrid, beginner→intermediate) | src/lib/formations.ts |
| Funding eligibility (Qualiopi / OPCO) | **[to validate placement]** — not in public/llms.txt or formations.ts; no certification or funding % claimed. |

## Reconciliation applied
- **Double brand suffix (§2a):** stripped hand-written `| AI Makers` from the proposed Title; "Claude Training for Teams" (25 → ~37 rendered). Needs TICKET-FORM-TITLE-TPL to strip the FR mid-suffix — left ready-but-pending.
- **Meta (§2b):** proposed EN meta is 150 chars, in range; not flagged; left as-is.
- **Uniform FAQ (§3.2):** already varied — FAQ #2 ("What are Skills and Cowork?") and #3 ("Can Claude connect to our tools?") are Claude-feature-specific, not the templated who/tools/based-on-cases set; no forced swap.
- **Negations / "from chat to X" (§4):** the recurring "from chat to automation" is a Layer-2.3 "from X to Y" sweep, not a "X, not Y" negation (out of §4 scope) — left as-is to avoid over-editing an already-clean page; noted for optional future polish.
- **Kept (strength):** the feature stack (Skills, Projects, Cowork, MCP connectors) and the named trainer credential (Walid Boulanouar, CTO) — used verbatim from formations.ts; intact and confirmed as current Claude features (no stale-fact risk).
- **Protected:** "100% of Claude's potential" kept `[to validate]`; Qualiopi/OPCO kept `[to validate placement]` (no funding %/cert). Shared trainer/catalogue boilerplate left as pillar-owned reuse. Nothing added, rounded, or invented.
- **SEO note (not applied as body edit):** consider elevating `claude for business` (900 US, KD43) to co-primary / H2 when built.
- **Not touched (engineering):** `/ai-training-for-teams/*` slug and FR title-template/seoDescription fields left ready-but-pending.
