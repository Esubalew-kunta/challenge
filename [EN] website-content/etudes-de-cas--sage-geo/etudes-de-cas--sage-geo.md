# Étude de cas : Sage — EN Content Master

> Live status: **published** · results still being measured (inProgress)

## 1. Page header
- **Route (FR, live):** /etudes-de-cas/sage-geo
- **Proposed EN slug:** /case-studies/sage-geo
- **Purpose:** Proof asset — measured before/after for Sage (business-management software vendor · Europe). Flagship GEO/seo-geo proof.
- **SEO role:** trust/proof + long-tail
- **Funnel stage:** MOFU/BOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | sage geo case study (branded) | — | — | branded/navigational |
| Secondary | generative engine optimization | growing | n/a | Ahrefs (light), 2026-07 — emerging term |
| Secondary | geo case study | 0 (US) | n/a | Ahrefs keywords-explorer-overview, 2026-07 |

> **Keyword decision:** "geo case study" returns 0 US volume (Ahrefs, 2026-07) — GEO is an emerging category with no established head term yet. This page earns value as the flagship GEO proof feeding the /seo-geo money page, not through keyword ranking. Branded intent (Sage + GEO) is primary; "generative engine optimization" carried in body copy for answer-engine framing.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Devenir la référence citée par les IA sur la facture électronique | Becoming the AI-cited reference on e-invoicing *(45; renders ~57 once the template appends " \| AI Makers" — do NOT hand-write the suffix)* |
| Meta description (140–160 chars) | Comment un éditeur de logiciels leader travaille sa visibilité dans ChatGPT, Gemini et Perplexity sur la facture électronique. Méthode GEO complète. | How a leading software vendor builds its visibility in ChatGPT, Gemini, and Perplexity on e-invoicing. A complete GEO method. Case study. *(140)* |
| H1 | Devenir la référence citée par les IA sur la facture électronique | Becoming the reference the AIs cite on e-invoicing |
| URL slug | /etudes-de-cas/sage-geo | /case-studies/sage-geo |

## 4. Sections & content
Shared template: `src/app/etudes-de-cas/[slug]/page.tsx` · copy lives in `src/lib/case-studies.ts` (entry `sage-geo`).

### 4.1 — Hero + TL;DR + metrics
- **Component:** `src/app/etudes-de-cas/[slug]/page.tsx`
- **Fields:** client, sector, period (July 2026 · ongoing), tags [GEO, SEO, AI Visibility], title (H1), tldr, metrics[] {value, label} × 3
- **Current (FR):** TL;DR + 3 metrics (see source).
- **Proposed (EN):**
  - **sector:** `Business-management software vendor · Europe` — **period:** `July 2026 · ongoing`
  - **tags:** `GEO` · `SEO` · `AI Visibility`
  - **TL;DR:** `A leading business-management software vendor is preparing to launch a free offer for sole traders ahead of the legal e-invoicing deadline (1 September 2026). The problem: on the key queries, ChatGPT, Gemini, and Perplexity cited three smaller competitors — never it. AI Makers is deploying a full GEO strategy: AI-visibility audit, page optimisation, listicles, and Reddit activation.`
  - **metrics:** `447` — `AI prompts tracked continuously` · `55,000` — `Google impressions for 537 clicks: the starting point` · `1 Sept.` — `2026, the legal deadline that concentrates demand`
- **Rationale:** Faithful EN. **inProgress: results are still being measured — the metrics describe the baseline, not a claimed outcome. All figures carried verbatim from `case-studies.ts`; none invented or rounded. [to validate] on the baseline numbers until measurement completes.**

### 4.2 — « La situation de départ » → "Where they started"
- **Component:** same template + `case-studies.ts:before[]`
- **Fields:** before[] — 4 bullets
- **Proposed (EN):**
  - `Position 11 on Google (page 2) on the main query: 55,000 impressions for 537 clicks over 90 days.`
  - `Around 70% of the site's pages outside Google's index.`
  - `On recommendation queries, the AIs cited three smaller competitors — despite stronger brand authority.`
  - `A dated, predictable demand spike: millions of sole traders searching for a compliant solution before 1 September 2026.`
- **Rationale:** Numbers preserved exactly (they are the before-state proof). "~70%" and the deadline are the checkable facts driving the strategy.

### 4.3 — « Ce qu'on a construit » → "What we built"
- **Component:** same template + `case-studies.ts:systems[]`
- **Fields:** systems[] — 4 blocks {title, description, visual?}
- **Proposed (EN):**
  - **Cross-audit and reverse engineering** — `A real read of visibility inside AI answers: Google Search Console, 447 tracked prompts, manual tests on ChatGPT, Claude, Gemini, and Perplexity. Then analysis of the sources the models actually cite in this vertical.` · visual: `AI-citation tracking dashboard (dated baseline)`
  - **Page and internal-link optimisation** — `Reworking existing pages for citability: direct answers, structured data, internal linking. The work is then handed over to the client's in-house teams.`
  - **Listicles and Reddit activation** — `Producing the formats AIs cite most (comparisons, listicles) and activating Reddit with established accounts and native content: the channel competitors weren't yet using.` · visual: `Example of published content picked up by an AI`
  - **Before/after monitoring** — `Every action is dated and logged. Citations won, share of voice against competitors, and traffic are measured week by week.` · visual: `Before/after curve of citation share (measurement in progress)`
- **Rationale:** Kept the "447 prompts" and the four-model list as first-hand method detail. The last visual keeps "measurement in progress" to match the inProgress status honestly.

### 4.4 — « Le déroulé de la mission » → "How the mission ran"
- **Component:** same template + `case-studies.ts:how[]`
- **Fields:** how[] — 4 steps; learned (1 paragraph); stack [Profound, Google Search Console, Claude, ChatGPT, Gemini, Perplexity, Reddit]
- **Proposed (EN):**
  - **steps:** `Full dated baseline: positions, indexation, AI citations, competitive share of voice.` · `Reverse-engineered AI answers to identify which sources to invest in.` · `Production and optimisation in sprints, with Reddit activation in parallel.` · `Weekly measurement and before/after reporting.`
  - **learned:** `GEO measurement tools simulate answers: they guide but don't replace dated manual tests. We systematically cross-check three sources before drawing any conclusion.`
- **Rationale:** The "learned" line is a genuine method stance (measurement caveat), not a reassurance closer — exactly the kind of first-hand honesty that carries E-E-A-T on a GEO page.

### 4.5 — Témoignage (absent) → Testimonial (none)
- **Component:** same template + `case-studies.ts:testimonial`
- **Fields:** no testimonial in data
- **Proposed (EN):** No testimonial in source — render nothing. Do not fabricate a quote. (Mission is inProgress; a client quote may be added once results are validated.)
- **Rationale:** Zero-fabrication rule: no quote exists, so none is written.

### 4.6 — Related + CTA final
- **Component:** `related-content.tsx`, `cta-section.tsx`
- **Proposed (EN):** Related: the /seo-geo pillar (`SEO & GEO: get cited by ChatGPT and Perplexity`) + the Fondation Force GEO case study. CTA below.
- **Rationale:** Sage is the anchor proof for /seo-geo — the primary internal link points there.

## 5. FAQ
« Les questions qu'on nous pose sur ce type de mission » — `faq-accordion.tsx` + JSON-LD.

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | Qu'est-ce que le GEO ? | What is GEO? | Optimising your visibility inside AI answers (ChatGPT, Gemini, Perplexity, Claude), the way SEO did for Google. Your prospects now put their questions to the AIs. |
| 2 | Combien de temps avant les premières citations ? | How long before the first citations? | First signals usually appear in 4 to 8 weeks, depending on domain authority and how competitive the vertical is. |
| 3 | Pourquoi Reddit ? | Why Reddit? | AI models lean heavily on authentic discussions for product recommendations. It's often the most under-used lever for large brands. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| Browse all case studies | /case-studies | hub (EN slug of /etudes-de-cas) |
| SEO & GEO: get cited by ChatGPT and Perplexity | /seo-geo | money page (GEO pillar — Sage is its anchor proof) |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Obtenez les mêmes résultats » → /contact. Proposed EN: **`Get the same results`** → /contact

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `Sage, a leading European business-management software vendor, worked with AI Makers on GEO (generative engine optimization) ahead of the 1 September 2026 e-invoicing deadline. Despite stronger brand authority, ChatGPT, Gemini, and Perplexity were citing three smaller competitors on the key queries. AI Makers ran an AI-visibility audit across 447 tracked prompts, reverse-engineered the sources the models cite, optimised pages for citability, and activated Reddit — with every action dated and measured before/after. Results are still being measured (mission ongoing).`
- **llms.txt entry (EN):** `[Sage GEO case study](https://aimakers.fr/case-studies/sage-geo) : how a leading software vendor built its visibility in ChatGPT, Gemini, and Perplexity on e-invoicing — audit, page optimisation, listicles, and Reddit activation.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 447 — AI prompts tracked continuously | src/lib/case-studies.ts (client-reported, still being measured — [to validate]) |
| 55,000 — Google impressions for 537 clicks: the starting point | src/lib/case-studies.ts (client-reported, still being measured — [to validate]) |
| 1 Sept. — 2026, the legal deadline that concentrates demand | public fact (French e-invoicing deadline) + src/lib/case-studies.ts |
| ~70% of pages outside Google's index | src/lib/case-studies.ts (client-reported — [to validate]) |
| Client name, sector, period | src/lib/case-studies.ts |

## Reconciliation applied
- **Double brand suffix (§2a):** stripped hand-written `| AI Makers` from the proposed Title; text is "Becoming the AI-cited reference on e-invoicing" (45 → ~57 rendered). Title ≠ H1 remains gated on TICKET-CS-META-TITLE (left ready-but-pending).
- **Uniform arc (§3.1):** NOT varied — this is one of the 3 `inProgress` cases whose "Results are still being measured (mission ongoing)" closer is a protected status flag, not a CTA echo. Ending kept verbatim; arc unchanged. (Arc variation applied to the completed cases gepromed + thinkone instead.)
- **Meta:** 140 chars, within range (no >160 trim needed); left as-is.
- **Negations (§1):** kept — none inflating; method caveats are load-bearing E-E-A-T on a GEO page.
- **Protected:** all baseline figures (447 / 55,000 / 537 / ~70% / 1 Sept 2026) carried verbatim and kept `[to validate]` + `inProgress`; anonymised "leading software vendor" framing kept; NO testimonial fabricated (rendered as none). Nothing added, rounded, or invented. seo-geo sign-off gate noted upstream (unchanged here).
- **Not touched (engineering):** `/case-studies/*` slug and metaTitle field left ready-but-pending.
