# Challenge 30 jours (/challenge-30-jours) — EN Content Master

## 1. Page header
- **Route (FR, live):** /challenge-30-jours
- **Proposed EN slug:** /30-day-ai-challenge
- **Purpose:** Free 30-day email program to deploy a first Claude agent. Lead nurture magnet.
- **SEO role:** conversion (lead magnet) / Claude-adjacent long-tail — minimal keyword pressure.
- **Funnel stage:** TOFU capture

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | 30 day ai challenge | 200 (US) | n/a | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai challenge | 100 (US) | 14 | Ahrefs, 2026-07 |

> **Keyword decision — minimal keyword pressure.** "30 day ai challenge" (200 US, no KD) and "ai challenge" (100 US, KD14, parent "presidential ai challenge") are low volume with off-target parents. This is a signup lead-gen page fed by internal links, email, and social — not organic head-term ranking. Copy is optimised for the signup conversion and honest expectation-setting, with the Claude angle as the long-tail hook. Flagged to Agent 3 as a deliberately low-keyword conversion page.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Challenge 30 jours : intégrez Claude dans votre entreprise | 30-Day AI Challenge: Ship Your First Claude Agent *(50)* |
| Meta description (140–160 chars) | Un parcours gratuit de 30 jours par email… | A free 30-day email program to go from zero to your first Claude agent in production. One step a week, on your real documents and processes. By AI Makers. *(153)* |
| H1 | 30 jours pour intégrer Claude dans votre entreprise. | 30 days to put Claude to work in your company. |
| URL slug | /challenge-30-jours | /30-day-ai-challenge |

## 4. Sections & content
Copy: inline `src/app/challenge-30-jours/page.tsx` (394 lines). Badge: « Par AI Makers, Partenaire Anthropic ». Email sequence operated via n8n — the page never promises human coaching.

### 4.1 — Hero
- **Component:** `page.tsx`
- **Fields:** partner badge, H1, intro
- **Current (FR):** Free-challenge promise.
- **Proposed (EN):**
  - **badge 1:** `Free challenge`
  - **badge 2:** `By AI Makers, Anthropic Partner` *(see §9 — [to validate])*
  - **H1:** `30 days to put Claude to work in your company.`
  - **intro:** `An email-guided program, one step a week. By the end: your first real uses in production — not a list of prompts.`
- **Rationale:** "Put Claude to work" is more concrete than "integrate Claude". The intro promises exactly what the sequence delivers (uses in production), and preempts the "just prompts" objection.

### 4.2 — "Sign up your company" (form)
- **Component:** `page.tsx` (form, `ChallengeForm`)
- **Fields:** heading, subtext, email/company fields
- **Current (FR):** Signup block.
- **Proposed (EN):**
  - **heading:** `Sign up your company`
  - **subtext:** `The first email lands right away. Week 1: Claude configured for your context.`
  - **field labels:** `Work email` · `Company` — **button:** `Join the challenge`
  - **GDPR/consent line (add):** `We use your details only to send the 30-day program and related resources. One-click unsubscribe in every email.`
- **Rationale:** Data-capture point → explicit purpose + unsubscribe line. "First email lands right away" sets the immediate payoff.

### 4.3 — "4 weeks, 4 tiers, 4 deliverables"
- **Component:** `page.tsx`
- **Fields:** intro + week cards[4] {number, title, description, deliverable}
- **Current (FR):** Program structure.
- **Proposed (EN):**
  - **section label:** `/ The program`
  - **title:** `4 weeks, 4 tiers, 4 deliverables`
  - **intro:** `Each week, an email with the steps to run and a concrete deliverable at the end. No theory: by the end of the month, something is running in your company.`
  - **Week 1 — Claude configured for your context:** `Your company, your vocabulary, your reference documents. Claude stops answering like it does for everyone and starts answering like it's yours.` — **Deliverable:** `Your Claude workspace live, adopted by 2-3 key people.`
  - **Week 2 — Your first 3 daily use cases:** `Writing, summarising, analysis — on your real documents, not generic examples. You spot what saves time this week.` — **Deliverable:** `3 repeatable, documented workflows.`
  - **Week 3 — Your first agent:** `A repetitive process handed end to end to Claude, using Projects and integrations. No longer an assistant you prompt: a task that just gets done.` — **Deliverable:** `An agent running on a real process.`
  - **Week 4 — Measure and next steps:** `How much time saved, by whom, on what. You put numbers on what the first three weeks produced, and you know what to build next.` — **Deliverable:** `Your measured results and the next 3 prioritised use cases.`
- **Rationale:** Weeks kept 1:1 with deliverables — the promise is the deliverables, and they're concrete. "Claude configured for your context" matches the immediate first-email payoff.

### 4.4 — "We owe you an honest answer."
- **Component:** `page.tsx` (dark section)
- **Fields:** why-it's-free / honesty copy
- **Current (FR):** Expectation setting.
- **Proposed (EN):**
  - **section label:** `/ Why it's free`
  - **title:** `We owe you an honest answer.`
  - **para 1:** `Some participants will want to go faster or further — that's where we come in. The rest will have integrated Claude on their own, and that's just as good.`
  - **para 2:** `No mandatory call, no aggressive follow-up. The program is complete on its own: follow it, and you finish with an agent in production, with or without us.`
  - **pull-quote:** `It's our best demonstration: you see how we work before you pay us anything.`
- **Rationale:** The honesty section is the page's trust anchor and its strongest anti-slop asset — kept the plain admission that half the audience won't buy. No reassurance-closer softening.

### 4.5 — "This challenge is for you. Or not."
- **Component:** `page.tsx`
- **Fields:** fit / anti-fit lists
- **Current (FR):** Qualification.
- **Proposed (EN):**
  - **section label:** `/ Who it's for`
  - **title:** `This challenge is for you. Or it isn't.`
  - **For you if:**
    - `You run an SME or mid-market company and want concrete uses, not an IT project`
    - `Your team has tried ChatGPT or Claude without anything changing in your processes`
    - `You want to move under your own steam, at your pace, with a framework`
  - **Not for you if:**
    - `You're after one more demo, with no intention of applying it`
    - `You expect human coaching — this program is guided by email, not by a consultant`
- **Rationale:** Qualification kept honest, including the anti-fit that rules out coaching-seekers — matches the n8n-operated reality so the promise doesn't over-reach.

### 4.6 — FAQ
- **Component:** `shared/faq-accordion.tsx`
- **Fields:** 4 Q/A — see §5
- **Current (FR):** Time, paid plan, quitting, after.
- **Proposed (EN):** _See §5._
- **Rationale:** The four practical objections a signup actually has; answer-first, one fact each.

### 4.7 — Final
- **Component:** `page.tsx`
- **Fields:** closing headline + subtext + secondary links + repeat form
- **Current (FR):** « Dans 30 jours, votre premier agent Claude tourne. Ou pas. »
- **Proposed (EN):**
  - **headline:** `In 30 days, your first Claude agent is running. Or it isn't.`
  - **subtext:** `The difference is starting. The program is free, one step a week, and everything you build stays yours.`
  - **secondary link 1:** `Prefer to train your team with us? Mastering Claude in the enterprise` → /formation-ia-entreprise/maitriser-claude
  - **secondary link 2:** `Want to hand off the whole rollout? Explore AI Transformation` → /ai-transformation
  - **repeat form heading:** `Join the challenge` — **subtext:** `Free. One email a week, for 4 weeks.`
- **Rationale:** "Or it isn't" kept — the honesty runs to the last line. Program length stated as 4 weeks / one email a week, consistent with the "30 days" framing.

## 5. FAQ
FAQ slot: YES — `src/components/shared/faq-accordion.tsx` + FAQPage JSON-LD.

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | Combien de temps ça demande chaque semaine ? | How much time does it take each week? | Around 1 to 2 hours a week. Each email arrives with precise steps to run: you apply them to your own documents and processes, whenever suits you in the week. |
| 2 | Il faut un abonnement Claude payant ? | Do I need a paid Claude subscription? | A Claude account is enough to start. Some steps — like Projects or integrations — make the most of a paid plan: the emails tell you exactly when it becomes useful, and you decide. |
| 3 | On peut s'arrêter en cours de route ? | Can I stop partway through? | Yes, any time. Every email has a one-click unsubscribe link. What you set up in the earlier weeks stays with you and keeps working. |
| 4 | Et après les 30 jours ? | What happens after the 30 days? | You're free. Carry on alone with what you built, or move to an AI Makers engagement if you want to go faster or further. The challenge is useful either way. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| Mastering Claude in the enterprise | /formation-ia-entreprise/maitriser-claude | related formation (existing) |
| Explore AI Transformation | /ai-transformation | rollout escalation (existing) |
| Talk to us | /contact | escalation |

## 7. CTA
- **Primary CTA:** Challenge signup form (email). Proposed EN: **`Join the challenge`** (heading: `Sign up your company`)

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `The 30-Day AI Challenge is a free email program from AI Makers that takes a company from zero to its first Claude agent in production in four weeks, one step per week: Week 1 configures Claude for your context, Week 2 builds three daily use cases, Week 3 ships a first agent, and Week 4 measures the results. It's fully self-serve — guided by email, not by a consultant — and everything you build stays yours. Around 1-2 hours a week; unsubscribe in one click at any time.`
- **llms.txt entry (EN):** `[30-Day AI Challenge](https://aimakers.fr/challenge-30-jours) : AI Makers' free 30-day email program to ship your first Claude agent to production, one step a week, on your own documents.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 4 weeks / one email a week / 4 deliverables | page copy |
| 1-2 hours per week; one-click unsubscribe; account-vs-paid-plan | page copy (FAQ) |
| Email sequence via n8n, no human coaching promised | page.tsx header comment |
| "By AI Makers, Anthropic Partner" badge | page copy — **[to validate for EN use]**; confirm partner status wording before publishing in English |
| Claude Projects / integrations references | page copy (Anthropic product features) |

## Reconciliation applied
Applied from `seo-audit-report/challenge-30-jours.md` (83/100, ship after fixes) + `ai-slop-audit-report/challenge-30-jours.md` (Net −4, floor 0, ship).

- **No copy edits required.** No double brand suffix in the Title field (renders once); meta 153 is within budget.
- **KEPT (protected):** the honest scoping negations — "not a list of prompts", "guided by email, not by a consultant", "not an IT project", the "Or it isn't" honest-tags (×2), and the admission-against-interest "The rest will have integrated Claude on their own, and that's just as good." These are the deflationary/scoping variant on the corpus KEEP list (`ai-slop-audit-report/_cross-page-findings.md §1`), not the inflating tell — deleting them would lose the page's trust asset. The "Anthropic Partner" badge keeps its existing `[to validate]` tag.
- **Watch (not changed):** rendered Title is ~61-62 with the `| AI Makers` template suffix — the SEO audit measured it "within budget"; left as-is, flagged for the owner if a hard 60-char cap is enforced.
- **Left for dev / owner (not copy):** confirm exact "Anthropic Partner" wording site-wide (or soften); GDPR consent field in `ChallengeForm` (TICKET-GDPR-CONSENT); FAQPage `inLanguage` → en (TICKET-JSONLD-INLANGUAGE).
