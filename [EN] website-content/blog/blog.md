# Blog — hub (/blog) — EN Content Master

## 1. Page header
- **Route (FR, live):** /blog
- **Proposed EN slug:** /blog
- **Purpose:** Blog index / field-notes hub. Articles themselves are out of scope (90-day content calendar).
- **SEO role:** hub
- **Funnel stage:** TOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | — (editorial hub; no head-term target) | — | — | index page; ranking lives on individual posts |
| Secondary | (per-article: "best ai agencies", "ai training", etc.) | — | — | owned by child posts / content calendar |

> **Keyword decision:** a blog index shouldn't chase a keyword — its job is to frame the editorial POV and route to posts, which each carry their own term. No head target; the hub earns links and trust, the articles earn traffic.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Blog \| Transformation IA en entreprise, retours terrain | Blog: AI transformation, field notes *(36; renders 48 with `\| AI Makers` template suffix — brand not hand-written)* |
| Meta description (140–160 chars) | Retours de mission, méthodes et analyses… | Field notes and analysis on enterprise AI transformation: audits, automation, team training, and visibility in AI answer engines. What we learn shipping systems. *(151)* |
| H1 | Ce qu'on apprend sur le terrain | What we learn in the field |
| URL slug | /blog | /blog |

## 4. Sections & content
Copy: inline `src/app/blog/page.tsx`; posts from `src/lib/blog.ts` reading `src/content/blog/*.md` (8 posts).

### 4.1 — Hero
- **Component:** `page.tsx`
- **Fields:** badge, H1, intro
- **Current (FR):** Field-notes positioning.
- **Proposed (EN):**
  - **badge:** `Blog`
  - **H1:** `What we learn in the field`
  - **intro (own POV, answer-first):** `This isn't a content-marketing blog. It's where we write up what we actually run into shipping AI systems — the honest agency comparisons we'd want if we were buying, the architecture behind our own internal tools, and where AI training pays off versus where it doesn't. If a post can't survive our own slop audit, it doesn't go up.`
- **Rationale:** The POV — "not content marketing; field notes that pass our own slop audit" — is a citable stance and true to the actual posts (inside-AI-Makers series, honest comparatives, "this site is itself an AI product"). Gives the hub its own value beyond a list.

### 4.2 — Article list
- **Component:** `page.tsx` + `lib/blog.ts`
- **Fields:** post cards {title, description, date}
- **Current (FR):** 8 published posts.
- **Proposed (EN):** *(articles out of scope — the calendar owns translations. Reference titles only, do not rewrite bodies here.)*
  - `Best AI agencies in France, 2026: the honest comparison` (meilleures-agences-ia-france)
  - `Best AI training for companies, 2026` (meilleures-formations-ia-entreprise)
  - `Best Claude training for teams, 2026` (meilleures-formations-claude-entreprise)
  - `Best AI training in Nice, 2026: the Riviera comparison` (meilleure-formation-ia-nice)
  - `Inside AI Makers: the brief that greets our CEO every morning` (inside-ai-makers-cockpit-ceo)
  - `Inside AI Makers: every sales call analysed, without taking a note` (inside-ai-makers-intelligence-appels)
  - `This site is itself an AI product. Here's how we built it.` (ce-site-est-un-produit-ia)
  - `The AI Makers blog is open` (bienvenue)
- **Rationale:** Titles listed for continuity only; the content calendar owns the actual EN article copy. The index just renders whatever posts exist.

### 4.3 — CTA final
- **Component:** `cta-section.tsx`
- **Proposed (EN):**
  - **title:** `Ready to go from reading to shipping?`
  - **subtitle:** `Thirty minutes to turn any of this into a plan for your own processes.`
  - **primary CTA:** `Book a free diagnostic` → /contact
- **Rationale:** Mirrors « Envie de passer de la lecture à l'exécution ? ».

## 5. FAQ
No FAQ slot in template.

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| (post titles above) | /blog/[slug] | posts (out of scope) |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Envie de passer de la lecture à l'exécution ? » → /contact. Proposed EN: **`Ready to go from reading to shipping?`** (button: `Book a free diagnostic`)

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `The AI Makers blog is a field-notes publication on enterprise AI transformation: honest agency and training comparisons, teardowns of AI Makers' own internal systems (a daily decision brief, automated sales-call intelligence), and analysis of AI visibility in answer engines. It's written from delivery work, not for content marketing.`
- **llms.txt entry (EN):** `[Blog](https://aimakers.fr/blog) : field notes and analysis on enterprise AI transformation — audits, automation, team training, and AI-engine visibility.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 8 posts + titles | src/content/blog/*.md (verified) |

## Reconciliation applied
Applied from `seo-audit-report/blog.md` (84/100, ship) + `ai-slop-audit-report/blog.md` (Net 0, ship).

- **Double brand suffix (SEO §2a):** stripped hand-written `| AI Makers` from the Title field (renders 48 with template suffix).
- **Meta at 160 ceiling (SEO §2b):** trimmed to 151 by dropping "methods,"; kept the keyword frame + the "What we learn shipping systems" hook.
- **KEPT — opener negation (per reconciliation brief):** "This isn't a content-marketing blog. It's where we write up what we actually run into shipping AI systems…" is retained as a scoping negation (it removes the "content marketing" misreading), per the brief's explicit KEEP instruction. It is also the only negation on the page, so it already satisfies the corpus "≤1" rule. The load-bearing self-imposed standard "If a post can't survive our own slop audit, it doesn't go up" and the admission "where AI training pays off versus where it doesn't" are kept.
- **Left for owner / dev (not copy):** couple the EN index release with EN post translations so no mixed-language render occurs (content-calendar dependency); slug stays `/blog` (no change).
