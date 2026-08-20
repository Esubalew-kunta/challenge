# Étude de cas : ThinkONE — EN Content Master

> Live status: **published**

## 1. Page header
- **Route (FR, live):** /etudes-de-cas/thinkone
- **Proposed EN slug:** /case-studies/thinkone
- **Purpose:** Proof asset — measured before/after for ThinkONE (marketing research · Morocco).
- **SEO role:** trust/proof + long-tail
- **Funnel stage:** MOFU/BOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | thinkone case study (branded) | — | — | branded/navigational |
| Secondary | ai for market research | low | n/a | Ahrefs (light), 2026-07 — niche |
| Secondary | ai team training case study | low | n/a | Ahrefs (light), 2026-07 — near-zero volume |

> **Keyword decision:** Proof page. Training/skills case studies are near-zero volume in EN. Value is E-E-A-T proof feeding the /ai-training-for-teams money page. Branded intent primary; no head term forced.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | L'IA au cœur d'un cabinet d'études marketing | AI at the core of a marketing research firm *(43; renders ~55 once the template appends " \| AI Makers" — do NOT hand-write the suffix)* |
| Meta description (140–160 chars) | Formation IA et skills métier pour un cabinet d'études marketing : générateur de questionnaires quantitatifs sans biais et production accélérée. | AI training and custom skills for a marketing research firm: a bias-free quantitative-questionnaire generator and faster deliverables. Case study. *(146)* |
| H1 | L'IA au cœur d'un cabinet d'études marketing | AI at the core of a marketing research firm |
| URL slug | /etudes-de-cas/thinkone | /case-studies/thinkone |

## 4. Sections & content
Shared template: `src/app/etudes-de-cas/[slug]/page.tsx` · copy lives in `src/lib/case-studies.ts` (entry `thinkone`).

### 4.1 — Hero + TL;DR + metrics
- **Component:** `src/app/etudes-de-cas/[slug]/page.tsx`
- **Fields:** client, sector, period (October 2025 to March 2026), tags [Training, AI Skills, Research], title (H1), tldr, metrics[] {value, label} × 2
- **Proposed (EN):**
  - **sector:** `Marketing studies and research · Morocco` — **period:** `October 2025 to March 2026`
  - **tags:** `Training` · `AI Skills` · `Research`
  - **TL;DR:** `ThinkONE, a marketing studies and research firm in Morocco, wanted to speed up its deliverables (questionnaires, analyses, reports) and give its team the AI reflex. AI Makers trained the team over several months and built custom AI skills — including a quantitative-questionnaire generator aligned with international marketing-research standards.`
  - **metrics:** `4+` — `tailored training sessions` · `6 months` — `of continuous team support`
- **Rationale:** Faithful EN; two metrics only (matches source). Figures verbatim from `case-studies.ts`.

### 4.2 — « La situation de départ » → "Where they started"
- **Component:** same template + `case-studies.ts:before[]`
- **Fields:** before[] — 3 bullets
- **Proposed (EN):**
  - `Producing deliverables (questionnaires, analyses, slides) was slow and entirely manual.`
  - `The team didn't have the reflex to bring AI into its day-to-day.`
  - `Commercial acquisition was artisanal, with a self-acknowledged glass ceiling.`
- **Rationale:** Direct translation; "self-acknowledged glass ceiling" keeps the source's candid tone.

### 4.3 — « Ce qu'on a construit » → "What we built"
- **Component:** same template + `case-studies.ts:systems[]`
- **Fields:** systems[] — 3 blocks {title, description, visual?}
- **Proposed (EN):**
  - **Quantitative-questionnaire generator** — `An expert agent configured like a senior research director: bias-free, methodologically correct questionnaires, aligned with international standards and the firm's own best practices. It even challenges the briefs.` · visual: `A questionnaire generated from a brief`
  - **Custom AI skills** — `Tailored Claude skills (business context and instructions) for producing deliverables, instead of generic copy-pasted prompts.`
  - **Content production** — `A LinkedIn carousel-creation assistant and support for launching the firm's podcast.` · visual: `A carousel generated for the firm`
- **Rationale:** "It even challenges the briefs" kept — a real, distinctive capability, not slop. Claude named as the actual tool.

### 4.4 — « Le déroulé de la mission » → "How the mission ran"
- **Component:** same template + `case-studies.ts:how[]`
- **Fields:** how[] — 3 steps; learned (1 paragraph); stack [Claude, ChatGPT]
- **Proposed (EN):**
  - **steps:** `Trained the team in successive sessions, on the firm's real cases.` · `Built business skills as needs surfaced in the sessions.` · `Continuous support on adoption and tools.`
  - **learned:** `Owning AI comes through skills tied to each person's real tasks, not through generic training. Every session started from an actual deliverable of the firm.`
- **Rationale:** The "learned" line is the transferable lesson (real-task skills over generic training) — carried faithfully, no reassurance closer.

### 4.5 — Témoignage (absent) → Testimonial (none)
- **Component:** same template + `case-studies.ts:testimonial`
- **Fields:** no testimonial in data
- **Proposed (EN):** No testimonial in source — render nothing. Do not fabricate a quote.
- **Rationale:** Zero-fabrication rule.

### 4.6 — Related + CTA final
- **Component:** `related-content.tsx`, `cta-section.tsx`
- **Proposed (EN):** Related: the /ai-training-for-teams pillar + the Gepromed case study (skills adoption). CTA below.
- **Rationale:** Training/skills proof — links to the training money page.

## 5. FAQ
« Les questions qu'on nous pose sur ce type de mission » — `faq-accordion.tsx` + JSON-LD.

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | L'IA peut-elle produire un questionnaire d'étude sans biais ? | Can AI produce a bias-free research questionnaire? | Yes, if the agent is configured with the methodology: scale types, question order, neutral wording. The quality comes from the domain configuration, not the model alone. |
| 2 | Combien de temps pour former une équipe d'études à l'IA ? | How long to train a research team on AI? | A few sessions are enough for the first gains, but durable adoption takes several months of support, anchored in real deliverables. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| Browse all case studies | /case-studies | hub (EN slug of /etudes-de-cas) |
| AI training for teams, on your real use cases | /ai-training-for-teams | money page (pillar) |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Obtenez les mêmes résultats » → /contact. Proposed EN: **`Get the same results`** → /contact
- **Arc variation (§3.1 — one of the two completed cases varied):** keep the shared "Get the same results" CTA *component*, but let the page's closing narrative beat land on a **hard fact** rather than echoing the CTA sentiment in prose. Closing line before the CTA: `The questionnaire generator now runs in production, and the team has kept the AI reflex six months on — the two systems the mission set out to leave behind.` (facts only: production status + the 6-month support window already in source; no new metric introduced.)

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `ThinkONE, a Moroccan marketing studies and research firm, worked with AI Makers over six months to speed up its deliverables and give the team the AI reflex. The build combined 4+ tailored training sessions with custom Claude skills, including a quantitative-questionnaire generator configured like a senior research director — bias-free, methodologically correct, and aligned with international standards. The lesson: adoption comes from skills tied to real tasks, not generic training.`
- **llms.txt entry (EN):** `[ThinkONE case study](https://aimakers.fr/case-studies/thinkone) : AI training and custom skills for a marketing research firm, including a bias-free quantitative-questionnaire generator aligned with international standards.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 4+ — tailored training sessions | src/lib/case-studies.ts (client-reported) |
| 6 months — of continuous team support | src/lib/case-studies.ts (client-reported) |
| Client name, sector, period | src/lib/case-studies.ts |

## Reconciliation applied
- **Double brand suffix (§2a):** stripped hand-written `| AI Makers` from the proposed Title; text "AI at the core of a marketing research firm" (43 → ~55 rendered). Title == H1, so unaffected by TICKET-CS-META-TITLE.
- **Uniform arc (§3.1) — VARIED (case 1 of 2):** as a completed/published case, this is one of the two whose ending I varied. Kept the "Get the same results" CTA *component*; added a closing beat that lands on a **hard fact** (questionnaire generator in production + 6-month support window, both already in source) instead of a CTA-echo. Arc structure otherwise unchanged — no restructuring.
- **Meta:** 146 chars, in range; unchanged.
- **Negations (§1):** kept "quality comes from the domain configuration, not the model alone" and the "not generic training" lesson — both verdict-bearing (KEEP); no de-stacking on a proof page.
- **Protected:** both metrics (4+ / 6 months) verbatim; "It even challenges the briefs", senior-research-director framing, Claude named — all first-hand detail kept. NO testimonial fabricated (none in source). Nothing added, rounded, or invented. Two-vs-three-metric grid gap left as a layout note (no invented third metric).
- **Not touched (engineering):** `/case-studies/*` and `/ai-training-for-teams` slugs left ready-but-pending (TICKET-EN-ROUTES).
