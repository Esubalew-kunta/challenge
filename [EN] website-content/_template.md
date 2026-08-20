# _template.md — Fixed per-page content template (Agent 2 fills every "Proposed (EN)" and TBD slot)

> Rules: keep the section order and headings exactly as below. Never invent facts — anything not in `public/llms.txt` or the page's "Facts used" table gets a `[to validate]` tag. EN market strategy: lead with the Agency / automation pillar (ai agency, ai automation, ai consulting, rpa); EN training demand is MOOC-intent, not our ICP.

---

# [Page name] — EN Content Master

## 1. Page header
- **Route (FR, live):** /...
- **Proposed EN slug:** TBD (Agent 2)
- **Purpose:** what this page does for the business
- **SEO role:** pillar / supporting / conversion / trust / hub / tool-magnet
- **Funnel stage:** TOFU / MOFU / BOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | TBD (Ahrefs) | TBD (Ahrefs) | TBD (Ahrefs) | TBD (Ahrefs) |
| Secondary | TBD (Ahrefs) | TBD (Ahrefs) | TBD (Ahrefs) | TBD (Ahrefs) |
| Secondary | TBD (Ahrefs) | TBD (Ahrefs) | TBD (Ahrefs) | TBD (Ahrefs) |

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | ... | _[Agent 2]_ |
| Meta description (140–160 chars) | ... | _[Agent 2]_ |
| H1 | ... | _[Agent 2]_ |
| URL slug | ... | _[Agent 2]_ |

## 4. Sections & content
> One block per section, in the page's real render order.

### 4.N — [Section name]
- **Component:** `src/...` (+ data source file if copy lives in `src/lib/**`)
- **Fields:** exact content fields the component renders (headline, subhead, items[] with sub-fields, stats, CTA labels…)
- **Current (FR):** 1–2 line summary of the live FR content
- **Proposed (EN):** _[Agent 2 — full copy for every field]_
- **Rationale:** _[Agent 2 — why this angle/keyword/claim]_

## 5. FAQ
> Only if the page template renders a FAQ component — otherwise write exactly: "No FAQ slot in template."

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | ... | _[Agent 2]_ | _[Agent 2]_ |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| _[Agent 2]_ | /... | existing FR link / new |

## 7. CTA
- **Primary CTA:** current FR label + href → Proposed EN label: _[Agent 2]_
- **Secondary CTA (if any):** ...

## 8. GEO block
- **Answer-first paragraph (EN, 2–3 sentences, cite-able by LLMs):** _[Agent 2]_
- **llms.txt entry (EN, 1 line: [Title](url) : description):** _[Agent 2]_

## 9. Facts used
> Every figure/claim used on the page, with source. Canonical brand facts come from `public/llms.txt`. Anything else: `[to validate]`.

| Fact / figure | Source |
|---|---|
| ... | public/llms.txt / component file / [to validate] |
