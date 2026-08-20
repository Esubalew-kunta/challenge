# SEO & GEO (/seo-geo) — EN Content Master

## 1. Page header
- **Route (FR, live):** /seo-geo
- **Proposed EN slug:** /generative-engine-optimization (exact-match to the chosen primary; /seo-geo is opaque to EN searchers)
- **Purpose:** Offer page: generative engine optimization (be cited by ChatGPT/Perplexity/AI Overviews) + SEO.
- **SEO role:** pillar-support (EN: generative engine optimization / GEO — emerging, differentiator query)
- **Funnel stage:** MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | generative engine optimization | 7,900 (US) / 1,500 (GB) | 48 (US) / 69 (GB) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | answer engine optimization | 4,900 (US) / 600 (GB) | 43 (US) / 45 (GB) | Ahrefs, 2026-07 |
| Secondary | llm seo | 1,500 (US) / 600 (GB) | 12 (US) / 0 (GB) | Ahrefs, 2026-07 — low-KD win |
| Support | ai seo | 8,500 (US) / 1,900 (GB) | 60 (US) / 59 (GB) | Ahrefs, 2026-07 — high volume, high KD |

> **GEO-term volumes found (US, Ahrefs 2026-07) & primary choice:**
> - **generative engine optimization — 7,900, KD48, CPC $6, informational** ← chosen primary
> - generative engine optimization geo — 1,200, KD64
> - geo (bare acronym) — 55,000, KD79, **branded/ambiguous** (geography, GEO Group, etc.) → **unusable as primary**
> - geo optimization — 1,200, KD52
> - answer engine optimization (AEO) — 4,900, KD43
> - ai seo — 8,500, KD60
> - ai search optimization — 3,400, KD48
> - llm seo — 1,500, KD12 (easiest real win)
>
> **Why "generative engine optimization" is the honest primary:** it's the exact, unambiguous name of the service being sold, it's the term the page already defines (GEO acronym), and at 7,900/KD48 it has the best volume-to-relevance ratio of any clean option. The bigger number — "geo" at 55,000 — is a mirage: it's dominated by geography/brand intent at KD79 and would never convert. We define the GEO acronym once, then anchor supporting captures on "answer engine optimization" (4,900) and the low-KD "llm seo" (1,500, KD12). "ai seo" (8,500) is a body-copy nod, too broad/hard to own. US-led; GB is real but harder (KD69 on the primary).

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | SEO & GEO : être cité par les IA \| AI Makers | Generative Engine Optimization (GEO) *(36; renders "… \| AI Makers" = 48 — template auto-appends brand)* |
| Meta description (140–160 chars) | (from `seoGeoMeta.description`) | GEO (Generative Engine Optimization) makes your company the answer ChatGPT, Gemini and Perplexity cite. AI-visibility audit, citation strategy, monthly measurement. +70% for Sage. *(157)* |
| H1 | Vos futurs clients ne cherchent plus sur Google. Ils demandent à ChatGPT. | Your future customers don't search Google anymore. They ask ChatGPT. |
| URL slug | /seo-geo | /generative-engine-optimization |


## 4. Sections & content
Copy source: `src/lib/offer-pages/seo-geo.ts` + `site-config.ts` (Sage testimonial, bookingProof). Page: `src/app/seo-geo/page.tsx`. JSON-LD: Breadcrumb + Service + FAQPage.

### 4.1 — Hero
- **Component:** `seoGeoHero`
- **Fields:** badge, title, subtitle, cta + secondaryCta
- **Current (FR):** Search-shift headline with Sage proof.
- **Proposed (EN):**
  - **Badge:** SEO & GEO · The offer we're furthest ahead on
  - **Title:** Your future customers don't search Google anymore. They ask ChatGPT.
  - **Subtitle:** GEO makes your company the answer the AI engines cite. We did it for Sage: +70% visibility on ChatGPT and Gemini. We measure it, we build it, we prove it.
  - **CTA:** Book a free diagnostic → /contact
  - **Secondary CTA:** See the Sage case → #proof
- **Rationale:** Answer-first headline names the behaviour shift; "GEO makes your company the answer the engines cite" is the one-line definition that captures the primary keyword and is LLM-citable. Sage +70% is the single proof point — real, measured, in the case study.

### 4.2 — Preuve Sage
- **Component:** `seoGeoProof`
- **Fields:** badge, title, subtitle, engines caption/logos/note
- **Current (FR):** « Ce qu'on a fait pour Sage, mesuré ».
- **Proposed (EN):**
  - **Badge:** Proof, not promise
  - **Title:** What we did for Sage, measured
  - **Subtitle:** An international software vendor, invisible in AI-engine answers at the start. Here's the before, the after and the method.
  - **Engines caption:** The engines we work on and measure:
  - **Engines:** ChatGPT · Gemini · Claude
  - **Engines note:** And Perplexity, tracked in the same monthly reports.
- **Rationale:** Keeps the Sage proof band exactly as sourced. Sage is the one sanctioned GEO proof — no other client results invented.

### 4.3 — Le basculement
- **Component:** `seoGeoShift`
- **Fields:** badge, title, paragraphs[3], facts[3], closing
- **Current (FR):** « Le search change de mains. » — market-shift stats.
- **Proposed (EN):**
  - **Badge:** The shift
  - **Title:** Search is changing hands.
  - **Paragraphs[3]:**
    1. A growing share of searches no longer goes through a results page: it goes through a generated answer. The user asks ChatGPT, Gemini or Perplexity, reads the answer, and only clicks the sources cited inside it. If they click at all.
    2. And an AI answer cites only a handful of sources. Where a Google page showed ten links and gave page two a chance, a generative engine decides: two or three references, and the rest stays out of the answer.
    3. The good news: it can be optimised, and it can be measured. The term GEO comes from an academic study, "GEO: Generative Engine Optimization" (Aggarwal et al., Princeton, presented at KDD 2024), which measured up to +40% visibility in AI-engine answers by reworking content — cited sources, quotations, statistics. It's not magic, it's method.
  - **Facts[3]:**
    1. **2–3 sources** — cited per answer, where Google showed ten links — *A generative engine chooses its sources. For that question, you're either in the answer or you don't exist.*
    2. **+40%** — visibility measured by academic research — *The Princeton study that introduced the term GEO (KDD 2024): optimising content for citation lifts its visibility in AI answers by up to 40%.*
    3. **+70%** — visibility gained for Sage on ChatGPT and Gemini — *Our field application of that research: from absent in AI answers to the first reference cited in its vertical.*
  - **Closing:** Your competitors don't see this traffic disappearing yet: it doesn't collapse, it evaporates query by query. The time to take the position is while the seat is still empty.
- **Rationale:** The Princeton/KDD 2024 GEO study (arXiv:2311.09735) is real and verified in the source header — it's the citable authority that gets GEO terminology right. The +40% is the study's figure; +70% Sage is our field result (case study inProgress → [to validate]).

### 4.4 — La méthode (4 temps)
- **Component:** `seoGeoMethod`
- **Fields:** badge, title, subtitle, steps[4]{number,title,description,deliverable}
- **Current (FR):** GEO methodology.
- **Proposed (EN):**
  - **Badge:** The method
  - **Title:** Four movements. From baseline to the curve going up.
  - **Subtitle:** No black-box package. Every movement has a deliverable, and you watch the measurement move month by month.
  - **Steps[4]:**
    - **01 · AI-visibility audit** — Where do you show up today in answers from ChatGPT, Gemini and Perplexity? And more importantly: what do the AIs say about you, your offers, your competitors? We set the baseline, query by query. *Deliverable: A quantified baseline — your citations, your competitors', and what the engines say about your brand.*
    - **02 · Citation strategy** — The queries that matter for your business, the ones your customers actually ask the AIs. Then the formats engines cite: comparisons, definitions, sourced data, answer pages. We prioritise by business impact. *Deliverable: A prioritised citation plan — which questions to target, with which content, in what order.*
    - **03 · Citable content** — Content reworked for citation: structured, sourced, factual. Pages that answer first and argue second. Structured data, llms.txt, verifiable figures — everything that gives an engine a reason to cite you over someone else. *Deliverable: Reworked, published content, optimised to be picked up by AI engines and by Google.*
    - **04 · Continuous measurement** — Monthly AI-visibility tracking: your citations, your share of voice against competitors, the shift query by query. What rises, we amplify. What stalls, we rework. *Deliverable: A monthly report — the visibility curve, the share of voice, and the next actions.*
- **Rationale:** Four named steps with deliverables — anti-black-box, and each is a citable answer-block. "answer first" and "llms.txt" show the method is applied to the page itself (dogfooding, §4.6).

### 4.5 — SEO + GEO ensemble
- **Component:** `seoGeoTogether`
- **Fields:** badge, title, intro, points[3]
- **Current (FR):** « Un seul contenu. Deux canaux. »
- **Proposed (EN):**
  - **Badge:** SEO + GEO
  - **Title:** One body of content. Two channels.
  - **Intro:** Google is still here, and it's staying. Classic SEO is still the foundation: a technically clean site, content that answers real questions, authority that compounds. GEO builds on that same foundation.
  - **Points[3]:**
    - **SEO stays the foundation** — AI engines draw largely from the same sources as Google. Well-structured, well-ranked content starts a step ahead on both fronts.
    - **GEO captures the channel that's opening** — The same pages, reworked for citation: answer-first structure, sources, data. What you produce once works on Google and in AI answers.
    - **AI Makers does both** — One provider, one content strategy, two curves tracked: your organic traffic and your visibility in AI answers.
- **Rationale:** Positions GEO as additive to SEO (not a fad replacement) — the honest framing that also reassures the SEO-literate buyer.

### 4.6 — Pourquoi nous
- **Component:** `seoGeoWhyUs`
- **Fields:** badge, title, intro, proofPoints[3], testimonialAuthor
- **Current (FR):** Dogfooding argument.
- **Proposed (EN):**
  - **Badge:** Why us
  - **Title:** We run GEO on our own site first.
  - **Intro:** The page you're reading is GEO-optimised: llms.txt at the root, structured data on every page, answer-first content. Everything we recommend to clients is already running here.
  - **Proof points[3]:**
    - **This site is our test bed** — llms.txt, Service, FAQ and Breadcrumb schemas, pages built to answer first: the techniques we deploy for clients run here first.
    - **We did it on a demanding case** — Sage, an international vendor, in a competitive vertical: +70% visibility on ChatGPT and Gemini, first reference cited in its vertical.
    - **We make the subject usable** — GEO only helps if your business teams understand what to produce and why. We translate the technical into actionable recommendations, not jargon.
  - **Testimonial author:** Mickaël Mina (rendered from bookingProof, see §4.8)
- **Rationale:** Dogfooding is the sharpest "why us" for a GEO seller — provable, first-hand, and it demonstrates the method on the very page.

### 4.7 — Engagement mesurable
- **Component:** `seoGeoCommitment`
- **Fields:** badge, title, paragraphs[2], points[4]
- **Current (FR):** « Le GEO est mesurable. Alors on le mesure devant vous. »
- **Proposed (EN):**
  - **Badge:** Our commitment
  - **Title:** GEO is measurable. So we measure it in front of you.
  - **Paragraphs[2]:**
    1. We don't promise you a position — nobody controls what a model decides to cite. What we commit to: set the baseline on day one, query by query, and show you the curve every month. Your citations, your share of voice against competitors, the shift over time.
    2. You see what's rising, what's stalling, and what we're doing to fix it. If a piece of content produces no citations, we rework it. Measurement is written into the engagement from day one.
  - **Points[4]:**
    - AI-visibility baseline set on day one
    - Monthly report: citations, share of voice, shift query by query
    - Systematic comparison with your direct competitors
    - Content reworked until it produces citations
- **Rationale:** The measurable-commitment section is the trust close — honest ("we don't promise a position") and concrete. Kept intact.

### 4.8 — Témoignage Sage
- **Component:** `shared/testimonial-card.tsx` + site-config (Mickaël Mina)
- **Fields:** quote, author, role, company, photo
- **Current (FR):** Sage AI Director verbatim.
- **Proposed (EN):**
  - **Quote (EN translation of the sourced verbatim):** "AI Makers made GEO understandable and usable for our business teams. Their ability to grasp the business stakes quickly and translate technical topics into actionable recommendations clearly made the difference. A serious, pedagogical partner."
  - **Author:** Mickaël Mina — AI Director, Sage
- **Rationale:** Translated from the single sourced Sage testimonial in site-config. No new quote authored; company/role kept exact.

### 4.9 — FAQ
- **Component:** `shared/faq-accordion.tsx` + `seoGeoFaq` — see §5.

### 4.10 — Related
- **Component:** `shared/related-content.tsx`
- **Fields:** Free GEO audit, Sage case study, Best AI agencies
- **Current (FR):** Cross-links.
- **Proposed (EN):** See §6.

### 4.11 — CTA final
- **Component:** `cta-section.tsx` + `seoGeoFinalCta`
- **Fields:** title, subtitle, cta
- **Current (FR):** « Que disent les IA de vous, aujourd'hui, à votre place ? »
- **Proposed (EN):**
  - **Title:** What are the AIs saying about you right now, in your place?
  - **Subtitle:** 30 minutes to find out: we query the engines on your key searches live, and you leave with your first snapshot of AI visibility — whether you work with us or not.
  - **CTA:** Book a free diagnostic → /contact
- **Rationale:** Keeps the provocative, specific FR close; the "whether you work with us or not" is a genuine no-strings hook, not a hollow reassurance line.

## 5. FAQ
FAQ slot: YES — `src/components/shared/faq-accordion.tsx` + FAQPage JSON-LD.

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | Quelle est la différence entre le GEO et le SEO ? | What's the difference between GEO and SEO? | SEO (Search Engine Optimization) aims to rank your pages in Google's results — a list of links where the user chooses. GEO (Generative Engine Optimization) aims to get your company cited inside the answers generated by AI engines like ChatGPT, Gemini, Perplexity or Claude: the engine writes an answer and cites only a few sources. Both rest on the same foundation — structured, sourced, factual content — but GEO adds its own requirements: answer-first structure, citable data, an llms.txt file, structured data. At AI Makers, both are handled in a single content strategy. |
| 2 | Combien de temps avant de voir des résultats ? | How long before you see results? | First citations usually appear within a few weeks of publishing optimised content, but the curve builds over months. AI engines re-evaluate their sources continuously: visibility gained consolidates with consistency and accumulated authority. That's why we set the baseline on day one and show you the shift every month, rather than promising a precise timeline nobody can guarantee. |
| 3 | Le GEO fonctionne pour quel type d'entreprise ? | What kind of company does GEO work for? | GEO is relevant the moment your customers research before buying: B2B, services, software, healthcare, industry, or any activity where providers get compared. It pays off most in verticals where AI engines still cite few players: the first-reference seat is there to take. It's less useful for impulse purchases with no research phase. The simplest test: our AI-visibility audit tells you in a few days whether your market is already asking the AIs, and who's being cited in your place. |
| 4 | Comment mesurez-vous la visibilité dans les réponses des IA ? | How do you measure visibility in AI answers? | We query the engines (ChatGPT, Gemini, Perplexity) on a panel of searches that matter for your business, defined with you up front. For each query we record whether your brand is cited, in what position, with what framing, and who else is cited. That gives three indicators tracked month by month: your citation rate, your share of voice against competitors, and the tone of what the engines say about you. The day-one baseline is the reference: every monthly report shows the curve from that starting point. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| Free GEO audit: what the AIs say about you | /outils/audit-geo-gratuit | lead magnet |
| Sage case study: +70% AI visibility | /etudes-de-cas/sage-geo | proof |
| Best AI agencies in France 2026 | /blog/meilleures-agences-ia-france | related |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Réserver mon diagnostic gratuit » → /contact. Proposed EN: **Book a free diagnostic**

## 8. GEO block
- **Answer-first paragraph (EN, 2–3 sentences):** Generative Engine Optimization (GEO) is the practice of making your company the answer that AI engines — ChatGPT, Gemini, Perplexity, Claude — cite when users ask them a question, rather than ranking a link in Google's results. The term comes from a 2024 Princeton academic study (KDD 2024) that measured up to +40% visibility in AI answers through citation-optimised content. AI Makers runs GEO as a four-step service — AI-visibility audit, citation strategy, citable content, monthly measurement — and lifted Sage's visibility on ChatGPT and Gemini by +70%.
- **llms.txt entry (EN):** [Generative Engine Optimization (GEO)](https://aimakers.fr/seo-geo) : make your company the answer ChatGPT, Perplexity, Gemini and AI Overviews cite. AI-visibility audit, citation strategy, citable content, monthly measurement. +70% AI visibility for Sage.

## 9. Facts used
| Fact / figure | Source |
|---|---|
| +70% visibility on ChatGPT/Gemini for Sage; first reference cited in its vertical | case-studies.ts (inProgress) — [to validate] |
| GEO term origin: Aggarwal et al., Princeton, KDD 2024, arXiv:2311.09735; +40% visibility measured | seo-geo.ts header (verified reference) |
| 2–3 sources cited per AI answer | seo-geo.ts — [to validate source] |
| Sage testimonial (Mickaël Mina, AI Director) | site-config.ts (canonical, translated) |
| Method (4 steps), monthly reporting, day-1 baseline | seo-geo.ts copy |

---

## Reconciliation applied

**Changed:**
1. **Title double-brand fix** — stripped `| AI Makers` (renders 48).
2. **Thinned the "X, not Y" frame from ~9 → ~3** — kept "It's not magic, it's method." (§4.3), the "it doesn't collapse, it evaporates query by query." closer (§4.3), and the protected honest-ceiling admission "We don't promise you a position — nobody controls what a model decides to cite." (§4.7). Flattened the rest to positive: §4.3 "Cited or invisible — there's no in-between", facts[1] "doesn't rank, it chooses" (kept the binary), §4.5 "GEO doesn't replace it", §4.4 "not keyword volume", §4.7 "isn't an end-of-engagement bonus".
3. **De-duplicated the dogfooding framing** (synthesis §2.5/§11: a-propos owns "we run on what we sell") — retitled §4.6 "We practise what we sell." → "We run GEO on our own site first." and flattened "We don't recommend anything we don't run on our own site." → positive. The proof (llms.txt, schema, Sage) is fully kept; only the shared framing tagline is dropped.

**Deliberately NOT changed / flagged for owner:**
- **🔎 SIGN-OFF GATE:** the entire proof spine is "+70% AI visibility for Sage," tagged `[to validate]`, sourced from an unpublished `inProgress`/noindex case. Per _reconciliation-notes.md (E) and the SEO audit, **this page must not ship until the client clears the +70% figure and the Sage case publishes.** One sign-off also covers homepage + ai-transformation. Left the copy intact with its tag — not a content edit.
- **Princeton/KDD 2024 GEO citation** (Aggarwal et al., arXiv:2311.09735, +40%) — real, verified authority; untouched.
- **"2–3 sources per answer"** — kept with its `[to validate]` tag.
- **Sage testimonial** (Mickaël Mina) — translated from the single sourced quote, not re-authored.
- **Engineering left for dev:** `/generative-engine-optimization` route + sitemap, hard-coded FR labels (Avant/Après/Comment, Le livrable, RelatedContent descriptions).
