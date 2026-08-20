# Formation : Acculturation IA : Masterclass — EN Content Master

> EN strategy note: EN training demand is MOOC-intent, not our ICP — Agent 2 should position this page for corporate buyers (team training), not individual learners, or deprioritize.

## 1. Page header
- **Route (FR, live):** /formation-ia-entreprise/acculturation-ia
- **Proposed EN slug:** /ai-training-for-teams/ai-literacy
- **Purpose:** Formation detail page (catalogue) — converts to catalogue download + diagnostic call.
- **SEO role:** supporting (training pillar; FR-strong, EN secondary)
- **Funnel stage:** MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai literacy training | US 100 / GB 150 | n/a | Ahrefs KE (US) |
| Secondary | ai upskilling | US 500 | 17 | Ahrefs KE (US) |
| Secondary | ai training for employees | US 450 / GB 90 | 22 | Ahrefs KE (US) — **ceded to the `/ai-training-for-teams` pillar** |

> **Keyword decision (reconciliation, §4.4 / SEO §3):** this child owns the literacy-specific head **`ai literacy training`**; the generic `ai training for employees` (450 US / KD22) is ceded to the `/ai-training-for-teams` pillar to avoid child-vs-pillar cannibalization.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Acculturation IA : Masterclass \| Formation IA en entreprise | AI Literacy Training for Teams *(30; renders ~42 once the template appends " \| AI Makers" — but TICKET-FORM-TITLE-TPL must first strip the hardcoded FR mid-suffix "\| Formation IA en entreprise". Do NOT hand-write the brand.)* |
| Meta description (140–160 chars) | La formation de base : lever les craintes et installer les bons réflexes IA sur les tâches du quotidien. Sans jargon technique. | A half- or full-day AI literacy masterclass: give non-technical teams the reflex to use ChatGPT, Claude, Gemini and Copilot on their real daily tasks. *(149; was ~168, trimmed under 160. Needs a `seoDescription` field to land in — TICKET-FORM-SEO-DESC.)* |
| H1 | Acculturation IA : la masterclass qui donne le réflexe IA à toutes vos équipes | AI Literacy Masterclass: give every team the AI reflex |
| URL slug | /formation-ia-entreprise/acculturation-ia | /ai-training-for-teams/ai-literacy |

## 4. Sections & content
Shared template: `src/app/formation-ia-entreprise/[slug]/page.tsx` · copy lives in `src/lib/formations.ts` (entry `acculturation-ia`).

### 4.1 — Hero + fiche
- **Component:** `src/app/formation-ia-entreprise/[slug]/page.tsx`
- **Fields:** categorie (Initiation), name, titre (H1), tagline, resume, niveau (Débutant), public, format (Présentiel, distanciel ou hybride), duree (Format sur-mesure, de la demi-journée à la journée), prerequis, tools[] logos
- **Current (FR):** Tagline: Comprendre ce que l'IA sait vraiment faire, et gagner du temps dès le premier jour.
- **Proposed (EN):**
  - Category label: `Foundation`
  - Name (cards): `AI Literacy Masterclass`
  - Tagline: `See what AI can actually do — and save time from day one.`
  - Résumé: `The starting-point session: by the end, non-technical teams use ChatGPT, Claude, Gemini and Copilot on their own everyday tasks — drafting, summarising, document analysis. No jargon, no code.`
  - Level: `Beginner` · Audience: `Every team, from support to leadership` · Format: `On-site, remote or hybrid` · Duration: `Tailored format, from a half-day to a full day` · Prerequisites: `No technical prerequisites`
- **Rationale:** Leads with the distinct promise of this program (whole-org literacy, zero prerequisites) rather than any generic "AI training" line. Keeps the four-assistant framing (Claude/ChatGPT/Gemini/Copilot) that separates it from the single-tool programs.

### 4.2 — « Ce que vos équipes vont maîtriser »
- **Component:** same template + `formations.ts:objectifs[]`
- **Fields:** objectifs[] — 4 bullets
- **Current (FR):** Comprendre ce que l'IA générative sait faire, et ce qu'elle ne sait pas faire …
- **Proposed (EN):**
  1. `Understand what generative AI can — and can't — reliably do at work`
  2. `Write clear, repeatable prompts that hold their quality`
  3. `Apply AI to real tasks: drafting, summarising, document analysis`
  4. `Spot your own highest time-saving use cases`
- **Rationale:** Outcomes framed for a team lead, not a hobbyist. Bullet 4 sets up the diagnostic hand-off.

### 4.3 — « Les modules de la formation »
- **Component:** same template + `formations.ts:programme[]`
- **Fields:** programme[] — 4 modules {titre, items[]}
- **Current (FR):** Comprendre l'IA générative · Les bases du prompting · L'IA sur vos tâches du quotidien · Repérer vos cas d'usage
- **Proposed (EN):**
  - **Module 1 — Understanding generative AI**
    - `From automation to deep learning: what AI actually changes at work`
    - `The assistant landscape (Claude, ChatGPT, Gemini, Copilot) and how they differ`
    - `Live demos on concrete, everyday cases`
  - **Module 2 — Prompting basics**
    - `Structuring a prompt: role, context, task, expected format`
    - `Making good results reliable and repeatable`
    - `Hands-on: each participant builds and improves their own prompts`
  - **Module 3 — AI on your daily tasks**
    - `Write, summarise, rephrase and translate faster`
    - `Analyse documents, pull out the essentials, prep a meeting`
    - `Produce visuals and tables from your own data`
  - **Module 4 — Finding your use cases**
    - `Map the time-consuming tasks in your role`
    - `Prioritise high-impact, low-risk uses`
    - `Leave with an action plan you can apply immediately`
- **Rationale:** Faithful adaptation of the real curriculum (not transliteration). The multi-tool comparison module is the page's differentiator vs. the Copilot / Claude programs.

### 4.4 — « Ce que vos équipes en retirent »
- **Component:** same template + `formations.ts:resultats[]`
- **Fields:** resultats[] — 3 stats {value, label}
- **Current (FR):** 7 h gagnées par semaine et par collaborateur · 10+ cas d'usage identifiés pour votre métier · 0 prérequis technique nécessaire
- **Proposed (EN):**
  - `7h` — `saved per week, per employee`
  - `10+` — `use cases mapped for your teams`
  - `0` — `technical prerequisites`
- **Rationale:** 7h/week is the canonical llms.txt figure. Other two are structural (from formations.ts), not invented outcomes.

### 4.5 — Catalogue form + formateurs + autres formations
- **Component:** `catalogue-form.tsx`, `formation-photo.tsx`, same template
- **Fields:** catalogue download form (lead magnet), trainers block « Formés par ceux qui déploient l'IA en production », grid of other formations
- **Current (FR):** Shared blocks across all formation pages.
- **Proposed (EN):** Reference the shared block copy owned by the training pillar `/ai-training-for-teams` — do not re-author. Trainers heading (EN): `Trained by the people who ship AI in production`. Catalogue form: `Get the full training catalogue` + email field + button `Send me the catalogue`. Other-programs grid: reuse the pillar card labels.
- **Rationale:** Reuse discipline — the pillar owns catalogue framing and trainer proof; program pages link up rather than clone.

### 4.6 — CTA final
- **Component:** `cta-section.tsx`
- **Fields:** title, subtitle
- **Current (FR):** « Cette formation est-elle faite pour vos équipes ? » → /contact.
- **Proposed (EN):** Title: `Is this the right starting point for your teams?` · Subtitle: `Book a 30-minute diagnostic — we'll scope the format, the audience and the use cases before anything is booked.`
- **Rationale:** Answer-first, no reassurance filler. Funding eligibility (Qualiopi / OPCO) line could sit here — **[to validate placement]** (see §9).

## 5. FAQ
| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | À qui s'adresse la masterclass d'acculturation ? | Who is the AI literacy masterclass for? | Every team, whatever their level. Most people we train are non-technical — sales, legal, HR, support, leadership. The session starts from their daily tasks, not from technical concepts. |
| 2 | Faut-il des connaissances techniques ? | Do participants need a technical background? | None. This is the starting point of any AI rollout: helping whole teams understand what AI can do and how to use it in their role. |
| 3 | La formation est-elle adaptée à notre secteur ? *(EN slot varied — program-specific, §3.2)* | Which AI assistant will our teams learn — ChatGPT, Claude, Gemini or Copilot? | All four. The session compares them and shows when to use which; if you've already standardised on one (say Microsoft Copilot), the hands-on exercises focus there while keeping the overview. Either way the content is built beforehand from your own processes and real documents. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| AI training for teams (catalogue) | /ai-training-for-teams | hub / pillar |
| Book a diagnostic | /contact | CTA |
| Mastering Claude in the enterprise | /ai-training-for-teams/claude-training | sibling program (natural next step) |

## 7. CTA
- **Primary CTA:** « Cette formation est-elle faite pour vos équipes ? » → /contact. Proposed EN: `Book a diagnostic` → /contact
- **Secondary:** catalogue PDF form (CatalogueForm) — `Get the full training catalogue`

## 8. GEO block
- **Answer-first paragraph (EN, 2–3 sentences):** AI Makers' AI Literacy Masterclass is a half- to full-day session (on-site, remote or hybrid) that teaches non-technical teams to use generative AI — Claude, ChatGPT, Gemini and Microsoft Copilot — on their everyday tasks. It requires no technical background and is built around each team's real processes and documents. AI Makers has trained 2,500+ professionals across France and Morocco.
- **llms.txt entry (EN):** [AI Literacy Masterclass](https://aimakers.fr/ai-training-for-teams/ai-literacy) : half- to full-day AI literacy training for non-technical teams, on their real daily tasks — no technical prerequisites.

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 7 h — saved per week, per employee | public/llms.txt |
| +2,500 professionals trained | public/llms.txt |
| 10+ — use cases mapped for your teams | src/lib/formations.ts — [to validate] |
| 0 — technical prerequisites | src/lib/formations.ts |
| Format / duration / level (half-day–day, on-site/remote/hybrid, beginner) | src/lib/formations.ts |
| Funding eligibility (Qualiopi / OPCO) | **[to validate placement]** — not in public/llms.txt or formations.ts; no certification or funding % claimed. If AI Makers is Qualiopi-certified, a funding-eligibility line could sit in the fiche or the final CTA. |

## Reconciliation applied
- **Double brand suffix (§2a):** stripped hand-written `| AI Makers` from the proposed Title; text "AI Literacy Training for Teams" (30 → ~42 rendered). Rendering still requires TICKET-FORM-TITLE-TPL to strip the hardcoded FR mid-suffix `| Formation IA en entreprise` first — left ready-but-pending.
- **Meta >160 (§2b):** trimmed the proposed meta from ~168 to 149; still needs the `seoDescription` field (TICKET-FORM-SEO-DESC) to land in.
- **acculturation special fix (§5):** replaced the most reversible line in the résumé — "it removes the fear and builds the right AI habits" — with a concrete outcome ("by the end, non-technical teams use ChatGPT, Claude, Gemini and Copilot on their own everyday tasks — drafting, summarising, document analysis"). Kept "No jargon, no code."
- **Keyword lean (§4.4):** made `ai literacy training` the primary; ceded the generic `ai training for employees` to the `/ai-training-for-teams` pillar (added a keyword-decision note).
- **Uniform FAQ (§3.2):** varied one slot — replaced the generic "Can it be tailored to our sector?" with a program-specific question ("Which AI assistant will our teams learn — ChatGPT, Claude, Gemini or Copilot?"), folding the sector-tailoring reassurance into the answer so no information is lost. Kept the other two FAQs and the shared arc.
- **Kept (strength):** the distinct four-assistant tool stack (Claude/ChatGPT/Gemini/Copilot) — the differentiator vs the single-tool siblings.
- **Protected:** 7h/week and +2,500 (llms.txt) verbatim; "10+ use cases" and Qualiopi/OPCO kept `[to validate]` / `[to validate placement]` — no funding % or certification asserted. Shared trainer/catalogue boilerplate left as pillar-owned reuse (not slop). Nothing added, rounded, or invented.
- **Not touched (engineering):** `/ai-training-for-teams/*` slugs and the FR title-template/seoDescription fields left ready-but-pending (TICKET-EN-ROUTES, TICKET-FORM-TITLE-TPL, TICKET-FORM-SEO-DESC).
