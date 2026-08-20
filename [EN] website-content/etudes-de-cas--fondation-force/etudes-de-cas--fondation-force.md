# Étude de cas : Fondation Force — EN Content Master

> Live status: **published** · results still being measured (inProgress)

## 1. Page header
- **Route (FR, live):** /etudes-de-cas/fondation-force
- **Proposed EN slug:** /case-studies/fondation-force
- **Purpose:** Proof asset — measured before/after for Fondation Force (public-interest health research foundation · Strasbourg).
- **SEO role:** trust/proof + long-tail
- **Funnel stage:** MOFU/BOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | fondation force case study (branded) | — | — | branded/navigational |
| Secondary | robots.txt blocking ai crawlers | low | n/a | Ahrefs (light), 2026-07 — long-tail, niche |
| Secondary | geo for nonprofits | low | n/a | Ahrefs (light), 2026-07 — near-zero volume |

> **Keyword decision:** Proof page, not a keyword play. The distinctive, citable hook — a robots.txt that blocked every AI crawler — is long-tail and near-zero volume, but strong GEO/answer-engine bait. Branded intent primary; page feeds the /seo-geo money page as a second GEO proof alongside Sage.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | La fondation au Prix Nobel que les IA ne pouvaient pas lire | The Nobel-backed foundation the AIs couldn't read *(48)* |
| Meta description (140–160 chars) | Le site d'une fondation santé bloquait tous les robots IA. Déblocage, moteur de contenu et visibilité GEO : étude de cas complète. | A Nobel-backed health foundation's site blocked every AI crawler. Unblocking, a content engine, and GEO visibility: the full case study. *(142)* |
| H1 | La fondation au Prix Nobel que les IA ne pouvaient pas lire | The Nobel-backed foundation the AIs couldn't read |
| URL slug | /etudes-de-cas/fondation-force | /case-studies/fondation-force |

## 4. Sections & content
Shared template: `src/app/etudes-de-cas/[slug]/page.tsx` · copy lives in `src/lib/case-studies.ts` (entry `fondation-force`).

### 4.1 — Hero + TL;DR + metrics
- **Component:** `src/app/etudes-de-cas/[slug]/page.tsx`
- **Fields:** client, sector, period (May 2026 · ongoing), tags [GEO, Content, Patronage], title (H1), tldr, metrics[] {value, label} × 3
- **Proposed (EN):**
  - **sector:** `Public-interest health research foundation · Strasbourg` — **period:** `May 2026 · ongoing`
  - **tags:** `GEO` · `Content` · `Patronage`
  - **TL;DR:** `Fondation Force, a public-interest foundation dedicated to health research (35 years old, scientific board chaired by a Nobel laureate in medicine), was invisible in ChatGPT, Perplexity, and Gemini answers. The cause, found at audit: its site blocked every AI crawler. AI Makers unblocked the AI layer, then built its visibility and patronage machine.`
  - **metrics:** `100%` — `of AI crawlers blocked by the site at the start` · `96%` — `of traffic depended on searches that already contained the brand` · `35 years` — `of scientific authority to make visible`
- **Rationale:** Faithful EN. **inProgress: metrics describe the baseline diagnosis, not a claimed uplift. All figures verbatim from `case-studies.ts`; [to validate] until measurement completes. "Nobel laureate in medicine" kept generic exactly as source (no named person invented).**

### 4.2 — « La situation de départ » → "Where they started"
- **Component:** same template + `case-studies.ts:before[]`
- **Fields:** before[] — 4 bullets
- **Proposed (EN):**
  - `The robots.txt file blocked GPTBot, ClaudeBot, PerplexityBot, and every AI crawler: an exceptional authority asset, invisible in the AI layer.`
  - `448 clicks a month from Google, 96% of them on searches that already contained the foundation's name: almost no acquisition of new audiences.`
  - `No newsletter, no donor CRM, heavy content sign-off for a small team.`
  - `The clinical-research arm absent from AI answers on its own subject-matter queries.`
- **Rationale:** The robots.txt bullet is the whole story's hinge — kept the exact crawler names as first-hand, checkable detail. "448 clicks/month" preserved.

### 4.3 — « Ce qu'on a construit » → "What we built"
- **Component:** same template + `case-studies.ts:systems[]`
- **Fields:** systems[] — 4 blocks {title, description, visual?}
- **Proposed (EN):**
  - **Unblocking the AI layer** — `robots.txt fixed, llms.txt added, structured data (medical organisation, Nobel laureate): the site becomes readable and citable by the AI engines again.` · visual: `Before/after of the robots.txt and an AI-citation test`
  - **Automated content engine** — `Roughly one optimised article per working day, reviewed and approved by the Managing Director before publication. The consistency the team couldn't hold by hand.` · visual: `The content calendar in production`
  - **Frictionless validation workflow** — `A validation pipeline in Notion with automatic notifications: the director approves by dragging a card, without switching tools. The authority engine (backlinks) runs in parallel.` · visual: `The content validation pipeline`
  - **Executive LinkedIn and patronage outreach** — `Editorial calendar and copy in the voice of the two directors, ICP workshop, sourcing of qualified prospects, and personalised sequences for patronage.` · visual: `Extract from the approved LinkedIn calendar`
- **Rationale:** Real tool names (Notion, llms.txt) and the "drag a card to approve" detail keep it first-hand. "Managing Director" for Déléguée Générale; "patronage" for mécénat (the accurate nonprofit term).

### 4.4 — « Le déroulé de la mission » → "How the mission ran"
- **Component:** same template + `case-studies.ts:how[]`
- **Fields:** how[] — 4 steps; learned (1 paragraph); stack [Claude, n8n, Notion, WordPress, Google Search Console]
- **Proposed (EN):**
  - **steps:** `Full GEO audit: technical diagnosis, citation tests on target queries, prioritised action plan.` · `Unblocked the AI layer and instrumented measurement (Search Console, Analytics).` · `Started the content and authority engines, with a human validation loop.` · `Extended to executive LinkedIn, the newsletter, and patronage outreach.`
  - **learned:** `For a small team with high sign-off stakes, the validation system matters as much as the production system. Without the workflow and notifications, content stayed stuck waiting for review.`
- **Rationale:** The "learned" line is a concrete, transferable insight (validation as the bottleneck) drawn straight from source — no padding.

### 4.5 — Témoignage (absent) → Testimonial (none)
- **Component:** same template + `case-studies.ts:testimonial`
- **Fields:** no testimonial in data
- **Proposed (EN):** No testimonial in source — render nothing. Do not fabricate a quote. (Mission inProgress.)
- **Rationale:** Zero-fabrication rule.

### 4.6 — Related + CTA final
- **Component:** `related-content.tsx`, `cta-section.tsx`
- **Proposed (EN):** Related: the /seo-geo pillar + the Sage GEO case study. CTA below.
- **Rationale:** Second GEO proof — links to the same money page and its sibling proof.

## 5. FAQ
« Les questions qu'on nous pose sur ce type de mission » — `faq-accordion.tsx` + JSON-LD.

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | Comment savoir si mon site est lisible par les IA ? | How do I know if my site is readable by AIs? | Check your robots.txt: many sites block GPTBot or ClaudeBot without knowing it, often because of a default plugin setting. |
| 2 | L'IA peut-elle produire du contenu crédible pour un acteur santé ? | Can AI produce credible content for a health organisation? | Yes — with a human validation loop. Here, every piece is approved by the leadership before publication. |
| 3 | Une fondation a-t-elle vraiment besoin de GEO ? | Does a foundation really need GEO? | Patrons and partners now vet an organisation by asking the AIs. Not showing up there means letting others tell your story. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| Browse all case studies | /case-studies | hub (EN slug of /etudes-de-cas) |
| SEO & GEO: get cited by ChatGPT and Perplexity | /seo-geo | money page (GEO pillar) |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Obtenez les mêmes résultats » → /contact. Proposed EN: **`Get the same results`** → /contact

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `Fondation Force, a 35-year-old public-interest health research foundation whose scientific board is chaired by a Nobel laureate in medicine, was invisible in ChatGPT, Perplexity, and Gemini. The audit found the cause: its robots.txt blocked every AI crawler (GPTBot, ClaudeBot, PerplexityBot). AI Makers unblocked the AI layer (robots.txt, llms.txt, structured data), then built an automated content engine with a human validation loop in Notion, an authority engine, and executive LinkedIn plus patronage outreach. Results are still being measured (mission ongoing).`
- **llms.txt entry (EN):** `[Fondation Force case study](https://aimakers.fr/case-studies/fondation-force) : a health foundation whose site blocked every AI crawler — how AI Makers unblocked the AI layer and built its GEO visibility and content engine.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 100% — of AI crawlers blocked by the site at the start | src/lib/case-studies.ts (client-reported, still being measured — [to validate]) |
| 96% — of traffic depended on searches already containing the brand | src/lib/case-studies.ts (client-reported, still being measured — [to validate]) |
| 35 years — of scientific authority | src/lib/case-studies.ts (client-reported — [to validate]) |
| 448 clicks/month from Google | src/lib/case-studies.ts (client-reported — [to validate]) |
| Nobel laureate on scientific board (unnamed) | src/lib/case-studies.ts (kept generic — no person named) |
| Client name, sector, period | src/lib/case-studies.ts |

## Reconciliation applied
- **Double brand suffix (§2a):** none to strip — proposed Title has no hand-written brand and Title == H1 here, so the single-field template issue does not bite. No change.
- **Meta (§2b / SEO short-meta finding):** was 129 (below the 140 floor); added the sourced "Nobel-backed" authority hook → 142, within range. No new fact introduced (Nobel board is in source).
- **Uniform arc (§3.1):** NOT varied — `inProgress` case; the "Results are still being measured (mission ongoing)" closer is a protected status flag. Arc unchanged.
- **Negations (§1):** kept; FAQ "letting others tell your story" is a genuine verdict (optional-polish only), left as-is.
- **Protected:** all figures (100% / 96% / 35 years / 448 clicks/month) verbatim + `[to validate]` + `inProgress`; exact crawler names kept; Nobel laureate kept generic/unnamed (no person invented); NO testimonial fabricated. Nothing added, rounded, or invented.
- **Not touched (engineering):** `/case-studies/*` slug left ready-but-pending (TICKET-EN-ROUTES).
