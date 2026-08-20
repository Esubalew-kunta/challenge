# Carrières (/carrieres) — EN Content Master

## 1. Page header
- **Route (FR, live):** /carrieres
- **Proposed EN slug:** /careers
- **Purpose:** Careers page: employer brand + open roles + spontaneous applications.
- **SEO role:** brand (recruiting)
- **Funnel stage:** n/a (recruiting)

## 2. Target keywords
> Recruiting page. Minimal keyword pressure — optimise for employer-brand clarity, not a head term.

| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | (recruiting page — no head term) | — | — | intent judgement |
| Secondary | ai engineer jobs (descriptive) | — | — | not forced |

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Carrières : rejoignez AI Makers | Careers: Join the Team |
| Meta description (140–160 chars) | AI Makers recrute des profils qui veulent livrer… | AI Makers hires people who want to ship AI systems in production. A team of 6 across Paris and Rabat, on a Claude Code, n8n and LangChain stack. |
| H1 | Construisez les systèmes que les autres regardent tourner. | Build the systems others watch run. |
| URL slug | /carrieres | /careers |

## 4. Sections & content

### 4.1 — Hero
- **Proposed (EN):**
  - Badge: `Careers`
  - H1: `Build the systems others watch run.`
  - Intro: `At AI Makers, we don't produce slides. We ship AI systems in production at real clients, in France, Morocco and internationally. If you want your work to matter from the first month, you're in the right place.`
  - Primary button: `Apply spontaneously` (mailto othmane@aimakers.fr, subject "Spontaneous application")
  - Secondary button: `See open roles` → #roles
- **Rationale:** Faithful. Builder-pride pitch, no slop.

### 4.2 — "A team of 6 that ships like a team of 40" + values (4 cards)
- **Section header:** kicker `/ How we work` · H2 `A team of 6 that ships like a team of 40` · sub `Internal systems absorb the repetitive work, so six people ship like forty. Here's what that changes day to day.`
- **Proposed (EN):**
  1. **AI-native, for real** — `The firm runs on its own systems: a daily cockpit, call intelligence, engagement tracking. Here, everyone orchestrates their agents instead of stacking up manual tasks.`
  2. **Real production** — `What you build runs at real clients from the first month, with a KPI measured before and after. No POC gathering dust in a drawer.`
  3. **Small team, big playing field** — `6 people between Paris and Rabat, clients in France, Morocco and internationally. You see the impact of your work directly, with no reporting layer between you and the client.`
  4. **Fast progression** — `Direct mentoring from the CTO, code reviews, and a stack you use every day: Claude Code, n8n, LangChain. You build skills on what actually matters.`
- **Rationale:** Faithful. Keeps the concrete stack names and the "team of 40" mechanism.

### 4.3 — "We're hiring" (open roles)
- **Section header:** kicker `/ Open roles` · H2 `We're hiring`
- **Proposed (EN) — real roles (from `src/app/carrieres/postes.ts`), all `Paris, Rabat or remote` · `Full-time`:**
  1. **AI Engineer** — Engineering — `The builder. RAG, multi-agent systems, orchestration: you build inside our clients' tools, and what you write ships to production.` — Apply by email
  2. **AI Delivery Lead** — Delivery — `The conductor. You run engagements end to end and translate clients' business priorities into systems shipped, week after week.` — Apply by email
  3. **LLMOps Engineer** — Engineering — `The engine. Deployment, monitoring, cost control: you're the one who turns a POC into a product that runs.` — Apply by email
  4. **AI & Data Engineer** — Engineering — `You wire our clients' data into their AI systems: pipelines, integrations, data quality. The foundation everything else rests on.` — Apply by email
  5. **SEO & GEO Executor** — Growth — `You run our clients' SEO and GEO engagements: AI-visibility audits, content citable by the engines, monthly measurement. GEO is our most advanced offer, and you'll be on it every day.` — Apply by email
  - Empty-state fallback (if roles array is emptied): `No open roles listed right now. The good profiles don't wait for job ads: if you think you belong here, write to us directly. We answer every serious application.`
- **Rationale:** Real roles verbatim from source data. Flagged for freshness below.
- **`[to validate freshness]`:** These 5 openings reflect `postes.ts` as read on 2026-07-14 — confirm they're still current before publish.

### 4.4 — "Spontaneous application"
- **Section header:** H2 `Spontaneous application`
- **Proposed (EN):** `No cover letter. Show us what you've built: links, repos, systems. That's all we care about.`
  - Button: `Write to othmane@aimakers.fr` (mailto, subject pre-filled "Spontaneous application")
  - Note: `Pre-filled subject: "Spontaneous application"`
- **Rationale:** Faithful. Keeps the "show, don't tell" builder ethos.

### 4.5 — PartnerStrip
- **Proposed (EN):** No copy to translate (shared partner/credibility badges). Keep as-is.

## 5. FAQ
No FAQ slot in template.

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| meet the team | /equipe (→ /team) | team |
| the Forward Deployed Engineer model | /forward-deployed-engineer | FDE model |
| contact | /contact | contact |

## 7. CTA
- **Primary CTA:** EN: `Apply spontaneously` → mailto othmane@aimakers.fr (subject "Spontaneous application")

## 8. GEO block
- **Answer-first paragraph (EN):** `AI Makers hires people who want to ship AI systems in production rather than produce slides. It's a team of six between Paris and Rabat, serving clients in France, Morocco and internationally, working on a stack of Claude Code, n8n and LangChain with direct mentoring from the CTO. Open roles include AI Engineer, AI Delivery Lead, LLMOps Engineer, AI & Data Engineer and SEO & GEO Executor — Paris, Rabat or remote. Spontaneous applications go to othmane@aimakers.fr.`
- **llms.txt entry (EN):** `[Careers](https://aimakers.fr/careers) : open roles at AI Makers — AI engineers, delivery leads and growth, between Paris and Rabat or remote. Ship AI systems in production, not slides.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| Open roles (AI Engineer, AI Delivery Lead, LLMOps Engineer, AI & Data Engineer, SEO & GEO Executor; Paris/Rabat/remote; full-time) | src/app/carrieres/postes.ts — **[to validate freshness]** |
| Team of 6, Paris + Rabat, international clients | public/llms.txt (canonical) |
| Stack: Claude Code, n8n, LangChain; CTO mentoring | src/app/carrieres/page.tsx |
| Application email othmane@aimakers.fr | public/llms.txt (contact) |

## Reconciliation applied
**Changed:**
- Title: removed doubled in-field brand (`Careers: Join AI Makers` → `Careers: Join the Team`). Rendered now `Careers: Join the Team | AI Makers` (~34 chars, single brand).
- Meta description: removed the repeated "not slides" negation and the Tier-A "cutting-edge stack"; named the concrete stack (Claude Code, n8n, LangChain) instead. ~142 chars.
- "cutting-edge stack" ×2 eliminated: removed the adjective from §4.2 card 4 (the named stack already carries the point); the meta instance also replaced.
- De-stacked the doubled negation: DELETED "It's not a slogan" from the §4.2 sub (rewritten to the positive "Internal systems absorb the repetitive work, so six people ship like forty" per its own report). equipe keeps the "not a slogan" device (§2.7).

**Deliberately kept:**
- Hero "we don't produce slides. We ship AI systems in production" — the single retained "not slides" hook (carrieres' one owned negation).
- "No POC gathering dust in a drawer" and "No cover letter. Show us what you've built" — concrete builder-stance credits (deflating/load-bearing), not inflating.
- All five open roles verbatim from postes.ts with `[to validate freshness]` tag intact, team-of-6 canonical, direct-to-founder email.
