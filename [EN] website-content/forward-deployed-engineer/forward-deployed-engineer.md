# Forward Deployed Engineer (/forward-deployed-engineer) — EN Content Master

> ⚠️ **IBM RETIRÉ DU SITE (2026-07-30, décision Maneesh).** Toute mention d'IBM ci-dessous — logo client, liste de références, biographie « ex-IBM » — ne doit PAS être reportée dans le code. Le logo `logo IBM -nobg.png` a été supprimé du dépôt.

## 1. Page header
- **Route (FR, live):** /forward-deployed-engineer
- **Proposed EN slug:** /forward-deployed-engineer (keep — the exact-match term is a strong, very-low-difficulty EN query)
- **Purpose:** Category-education + offer page for the FDE model (embedded AI engineer). Featured item of the mega-menu.
- **SEO role:** pillar (EN: forward deployed engineer — strong, low-KD EN query)
- **Funnel stage:** MOFU/BOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | forward deployed engineer | 5,100 (US) / 700 (GB) | 8 (US) / 4 (GB) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | what is a forward deployed engineer | 700 (US) | 13 (US) | Ahrefs, 2026-07 |
| Secondary | forward deployed engineering | 350 (US) | 6 (US) | Ahrefs, 2026-07 |
| Support | ai engineer / embedded ai engineer | 16,000 / 50 (US) | 56 / n/a | Ahrefs, 2026-07 — broad support term, not primary |

> **Keyword decision:** the brief flagged FDE as a "low-volume niche/branded" term to target as a differentiator, not a volume play. Ahrefs says otherwise for the US: **"forward deployed engineer" is 5,100/mo at KD8** — real volume AND one of the lowest-difficulty commercial-adjacent terms on the whole site (the concept is exploding but almost no service page competes for it; SERP is dominated by job listings and definition posts). This makes it a rare pillar we can genuinely rank. "what is a forward deployed engineer" (700, KD13) and "forward deployed engineering" (350, KD6) are easy supporting captures. "ai engineer" (16,000, KD56) is too broad/hiring-intent to own but worth a nod in body copy. GB is thinner (700/KD4) — US-led, GB secondary.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Forward Deployed Engineer (FDE) : le modèle expliqué, un ingénieur IA déployé chez vous | Forward Deployed Engineer (FDE) Explained *(41; renders "… \| AI Makers" = 53 — template auto-appends brand)* |
| Meta description (140–160 chars) | Qu'est-ce qu'un Forward Deployed Engineer ? Le modèle inventé par Palantir, adopté par OpenAI et Anthropic, et comment déployer un FDE dédié dans votre entreprise… | What is a Forward Deployed Engineer? The Palantir-born model now used by OpenAI and Anthropic — and how AI Makers embeds one dedicated AI engineer in your team. *(158)* |
| H1 | Un ingénieur IA qui s'assoit dans votre équipe. | An AI engineer who sits inside your team |
| URL slug | /forward-deployed-engineer | /forward-deployed-engineer |


## 4. Sections & content
Copy source: `src/lib/offer-pages/fde.ts` (`fdeContent.*` — richest data file of the site, 501 lines) + local components `src/app/forward-deployed-engineer/team-card.tsx` & `cert-badges.tsx`. Page: `src/app/forward-deployed-engineer/page.tsx` (944 lines).

### 4.1 — Hero
- **Component:** `fdeContent.hero`
- **Fields:** status badge, headline, subtitle, cta, microcopy
- **Current (FR):** « Un ingénieur IA qui s'assoit dans votre équipe. » + onboarding microcopy.
- **Proposed (EN):**
  - **Status badge:** Three new clients a month, maximum
  - **Headline:** An AI engineer who sits inside your team
  - **Subtitle:** He joins your morning stand-ups, builds inside your own tools, and opens his first project in week one. Hiring the same profile yourself would take 6 to 12 months.
  - **CTA:** Book a free diagnostic
  - **Microcopy:** Trained on your business two weeks before day one.
- **Rationale:** Answer-first headline states the model in one line (embedded, not advisory) and mirrors the primary keyword's intent. Kept the "3 clients/month" scarcity badge — it's a real capacity constraint, not manufactured urgency. Subtitle front-loads the concrete trade-off (week-1 build vs. 6–12-month hire) rather than a benefit adjective.

### 4.2 — Proof bar
- **Component:** `fdeContent.proof` + client logos
- **Fields:** kicker, stats (7h/collaborateur…)
- **Current (FR):** « Ils travaillent avec nos ingénieurs ».
- **Proposed (EN):**
  - **Kicker:** They work with our engineers
  - **Stat value:** 7h/week
  - **Stat label:** recovered per employee
  - **Stat detail:** Data entry, reporting, summaries, follow-ups. Every system ships with a before number and an after number: measured time, role by role.
- **Rationale:** 7h/week is canonical (llms.txt). Logos stay as-is (Schneider Electric, IBM, Amgen, Sage, Délifrance, AS Monaco, Emirates NBD, Gepromed) — read-only from site-config, no new claims.

### 4.3 — Le modèle (définition FDE)
- **Component:** `fdeContent.model`
- **Fields:** badge, title, definition copy (answer-first), stats[3]
- **Current (FR):** « Qu'est-ce qu'un Forward Deployed Engineer ? » — Palantir-origin model explained. Stats [to validate].
- **Proposed (EN):**
  - **Badge:** The model
  - **Title:** What is a Forward Deployed Engineer?
  - **Answer (answer-first, ~55 words):** A Forward Deployed Engineer (FDE) is an AI engineer embedded directly in the client's team. He works on the ground: he understands the real problem, writes production code, connects AI to your existing systems, and stays until it runs. Palantir invented the model twenty years ago; generative AI put it back at the centre of the game.
  - **Why:** The reason is blunt: 95% of enterprise AI pilots produce no measurable return (MIT study, 2025). Not because the models are weak, but because deployment fails. Every enterprise environment is complicated in its own way, and no off-the-shelf software plugs itself in. It takes someone inside the team who owns the outcome.
  - **Stats[3]:**
    1. **95%** — of enterprise AI pilots fail — *MIT study, 2025. The cause isn't the model: it's the last mile of deployment. Exactly an FDE's job.*
    2. **+729%** — FDE job postings in one year — *Indeed listings up 8x between April 2025 and April 2026. OpenAI, Anthropic and Google are hiring FDEs, including in Paris, alongside Mistral and H Company.*
    3. **$385K–$1M** — an FDE's comp at the AI labs — *The most contested profile on the market. You can't hire one at that price. You can deploy one — that's our model.*
- **Rationale:** The answer paragraph is the LLM-citable definition and captures "what is a forward deployed engineer" (700/KD13). Stats are live FR copy translated; sources retained but flagged [to validate] in §9. MIT 2025 pilot-failure figure is the strongest, most citable claim.

### 4.4 — Le problème (recruter)
- **Component:** `fdeContent.problem`
- **Fields:** badge, title, intro, stats[3]
- **Current (FR):** « Recruter un ingénieur IA senior : long, cher, risqué. »
- **Proposed (EN):**
  - **Badge:** The problem
  - **Title:** Hiring a senior AI engineer: slow, expensive, risky.
  - **Intro:** You know what you need: someone who builds. The market answers with CVs, notice periods and promises.
  - **Stats[3]:**
    1. **6 to 12 months** — to hire a senior AI expert — *You write the spec, you source, you run interviews, you wait out the notice period. The whole time, nobody's building.*
    2. **€70,000+/year** — base salary, plus overheads — *You pay before the first line of code. And nothing guarantees a single system ever reaches production.*
    3. **1 wrong hire** — and you start over — *One bad hire on this role and it's back to zero: new sourcing, new notice period, six more months.*
- **Rationale:** Frames the buy-vs-build decision the ops/transformation buyer is actually weighing. Salary/timeline figures are live FR copy — kept, flagged [to validate].

### 4.5 — Le mécanisme
- **Component:** `fdeContent.mechanism`
- **Fields:** badge, title, copy, footnote
- **Current (FR):** « Il n'arrive pas seul. Il arrive avec nos systèmes. »
- **Proposed (EN):**
  - **Badge:** The mechanism
  - **Title:** He doesn't arrive alone. He arrives with our systems.
  - **Copy:** On day one, your engineer opens the firm's toolbox: the call intelligence that analyses our own calls, the cockpit that briefs our CEO every morning, the tracker that scores the health of every engagement each week. 200+ systems already in production, 1,500+ automations ready to adapt, and the playbooks that go with them. He starts from what already runs and adapts it to you.
  - **Footnote:** We build them for ourselves first. A system that doesn't hold up here never reaches you.
- **Rationale:** The dogfooding mechanism is the page's real differentiator vs. a freelancer. 200+ systems is canonical (llms.txt); 1,500+ automations is live copy → [to validate].

### 4.6 — L'équipe (encadrement)
- **Component:** `fdeContent.team` + `team-card.tsx`
- **Fields:** badge, title, intro, team members
- **Current (FR):** « Les ingénieurs derrière le modèle » — supervised by CTO; AY Automate leadership.
- **Proposed (EN):**
  - **Badge:** The team
  - **Title:** The engineers behind the model
  - **Intro:** Named engineers who build every day — for us and for our clients — supervised directly by Walid, our CTO and co-founder of AY Automate. The model itself comes from AY Automate, where Adel Dahani (co-founder & COO, ex-AI Engineer at IBM) has scaled 20+ embedded AI engineers inside companies.
  - **Members (from `fdeContent.team`, keep names/roles/stacks):** Walid — CTO; Ali — Data & AI Consultant; Kunta — AI Engineer.
- **Rationale:** Names and the AY Automate lineage (Walid Boulanouar, Adel Dahani ex-IBM, 20+ engineers deployed) are canonical in llms.txt — used verbatim, nothing invented. EN keeps the "supervised in person" proof that separates FDE from a lone freelancer.

### 4.7 — Les profils (3)
- **Component:** `fdeContent.roles`
- **Fields:** badge, title, intro, popularBadge, profiles[3]{number,title,label,description,deliverables,logos}
- **Current (FR):** Role cards with stacks.
- **Proposed (EN):**
  - **Badge:** The profiles
  - **Title:** The profiles we train and source
  - **Intro:** We train and source the best AI profiles. Three roles, one standard: ship to production.
  - **Popular badge:** Most requested
  - **01 — AI Delivery Lead — "The conductor":** He runs the engagement end to end and turns your business priorities into shipped systems. He's the one who holds the cadence, week after week. *Deliverables:* Roadmap held / ROI trade-offs / Weekly steering.
  - **02 — AI Engineer — "The builder" (Most requested):** RAG, multi-agent systems, orchestration — he builds inside your tools, on your production stack. What he writes ships to production. *Deliverables:* Agents in production / Integrations to your stack / Documented playbooks.
  - **03 — LLMOps Engineer — "The engine":** He keeps it running: deployment, monitoring, cost control. He's the one who turns a POC into a product. *Deliverables:* Reliable deployment / Monitoring & alerts / Costs under control.
- **Rationale:** Straight adaptation of the three role cards; labels kept punchy. Stacks/logos unchanged (read from source).

### 4.8 — La stack
- **Component:** `fdeContent.stack`
- **Fields:** badge, title, intro, tools[6]{name,line}
- **Current (FR):** « Les outils qu'il maîtrise en arrivant ».
- **Proposed (EN):**
  - **Badge:** The stack
  - **Title:** The tools he's fluent in on arrival
  - **Intro:** Zero ramp-up on your invoice. He's already spent hundreds of hours in each of these tools, on real engagements.
  - **Tools[6]:**
    - **Claude Code** — His workstation. This is where your agents and internal tools get written, every day.
    - **n8n** — Your tools wired together. Data flows; nobody re-keys it.
    - **Notion** — Every system documented as it's built. The playbooks stay with you, readable by your teams.
    - **Microsoft 365** — He builds in Outlook, Teams and Excel: right where your teams already work.
    - **Claude API** — Agents wired to your data and your business rules, specific to your workflows.
    - **LangChain** — Your RAG agents: they answer from your own documents and your own data.
- **Rationale:** Real, named stack (first-hand, concrete) — the anti-slop proof that this is an operator, not a deck. Kept "hundreds of hours on real engagements" claim from source.

### 4.9 — Semaine par semaine
- **Component:** `fdeContent.timeline`
- **Fields:** badge, title, steps[5]{period,title,description,gain}, ctaPrompt
- **Current (FR):** « Concrètement, semaine par semaine ».
- **Proposed (EN):**
  - **Badge:** The timeline
  - **Title:** Concretely, week by week
  - **Steps[5]:**
    1. **Weeks -2 to 0 — He learns your business before he arrives.** Two weeks before kick-off he's already at work: reading your processes, learning your vocabulary, getting hands-on with your tools. On day one he doesn't ask how you work. He knows. *Gain: Zero days spent explaining your business to him.*
    2. **Week 1 — He joins your stand-ups and opens the first project.** No three-month scoping phase. The first system gets built straight into your workflows, with your teams, in week one. *Gain: A project open in week 1, not a project plan.*
    3. **Every month — 1 to 2 systems ship to production.** Every system ships with a before number and an after number. Anything that doesn't move the needle gets reworked until it does. *Gain: Impact measured system by system, not an end-of-engagement report.*
    4. **Every week — 2h of training, hands on the systems.** Every week he trains your teams for two hours, hands on the systems they actually use. *Gain: Your teams level up while the systems get built.*
    5. **By month 6 — Your teams run the systems without him.** The systems run, the playbooks are written, your leads are trained. Everything belongs to you. The goal isn't to stay — it's to make you independent. *Gain: Zero dependency the day the engineer leaves.*
  - **CTA prompt:** Want to know what he'd build at your company first?
- **Rationale:** The pre-onboarding and month-6 exit are the model's sharpest, most concrete claims. Answer-first "gain" line per step keeps it scannable and citable.

### 4.10 — Comparaison
- **Component:** `fdeContent.comparison`
- **Fields:** badge, title, rows[6]{label, freelance, esn, fde}
- **Current (FR):** « FDE vs les alternatives » (freelance / ESN / FDE).
- **Proposed (EN):**
  - **Badge:** The comparison
  - **Title:** FDE vs. the alternatives
  - **Columns:** Freelancer · Staffing firm (ESN) · Forward Deployed Engineer
  - **Rows[6]:**
    1. **What you buy** — Billed days / A team shared across clients / An engineer dedicated to you alone, an outcome in the contract
    2. **The start** — When his calendar frees up / When staffing decides / Onboarded 2 weeks before kick-off, operational on day one
    3. **Supervision** — Alone with the problem / A manager far from the ground / Supervised directly by our CTO, backed by 200+ deployed systems
    4. **Training your teams** — Rarely included / A project billed separately / 2h hands-on training per week, included
    5. **What you're left with** — The knowledge walks out with him / Technical deliverables / Everything is yours: systems, playbooks, trained teams
    6. **The commitment** — No outcome commitment / A best-efforts obligation / 4 guarantees written into the contract
- **Rationale:** Comparison table is a page-owned asset (not the homepage/offre one) — kept in full. "ESN" glossed as "staffing firm" for EN readers.

### 4.11 — Origine du modèle
- **Component:** `fdeContent.origin`
- **Fields:** badge, copy
- **Current (FR):** AI Makers = francophone arm of AY Automate (+20 engineers deployed).
- **Proposed (EN):**
  - **Badge:** Where the model comes from
  - **Copy:** Palantir built its success on this model twenty years ago: the engineer works inside the client's team, not in a consulting office, because no two enterprise environments are alike. OpenAI stood up its FDE team in 2024, then a $4B deployment joint venture in 2026. Anthropic followed. The giants have just validated what we've practised from the start — in French, for mid-market companies. AI Makers is the francophone arm of AY Automate, which has embedded 20+ AI engineers inside companies.
- **Rationale:** AY Automate partnership + 20+ engineers is canonical (llms.txt). OpenAI/Anthropic/Palantir lineage is live FR copy; $4B JV figure → [to validate].

### 4.12 — Preuve clients
- **Component:** `fdeContent.testimonials` + logo carousel
- **Fields:** badge, title, testimonial names
- **Current (FR):** « Ce que ça donne chez eux ».
- **Proposed (EN):**
  - **Badge:** They trust us
  - **Title:** What it looks like at their company
  - **Note:** Testimonial authors (Nicole Neumann, Éric Solal, John Volke) render read-only from `homepageContent.testimonials` — no new quotes authored here.
- **Rationale:** Reuses existing testimonials; no fabricated results.

### 4.13 — Certifications
- **Component:** `cert-badges.tsx` + `fdeContent.badges`
- **Fields:** partnersLabel, partners[6], certsLabel, certs[3]
- **Current (FR):** Credibility strip — [to validate each badge claim].
- **Proposed (EN):**
  - **Partners label:** Official partners
  - **Partners[6]:** CLAY — Enterprise partner · GOOGLE — Google partner · MAKE — Certified partner · N8N — Certified expert · AWS — AWS partner · MICROSOFT — Azure partner
  - **Certs label:** Our engineers are certified
  - **Certs[3]:** ANTHROPIC — Claude certified architect · MICROSOFT — AI industry leader · MICROSOFT — Certified fundamentals
- **Rationale:** Labels translated only; each badge claim itself flagged [to validate] in §9 (badge assets, not verified here).

### 4.14 — FAQ
- **Component:** `shared/faq-accordion.tsx` + `fdeContent.faq` — see §5.

### 4.15 — Garanties
- **Component:** `sections/homepage/guarantees.tsx`
- **Fields:** 4 guarantees (shared block)
- **Current (FR):** Shared block.
- **Proposed (EN):** Reference only — the 4 guarantees are owned by the homepage/offre/garanties pages. Do not re-author copy here; render the shared component so the wording stays single-sourced. EN label for the section header: "Four guarantees, written into the contract."
- **Rationale:** Reuse discipline — guarantees belong to /garanties; cloning risks drift.

### 4.16 — Related + CTA final
- **Component:** `shared/related-content.tsx` + `cta-section.tsx`
- **Fields:** related links + final CTA
- **Current (FR):** « Prêt à accueillir votre ingénieur IA ? »
- **Proposed (EN):**
  - **Final CTA title:** Ready to welcome your AI engineer?
  - **Final CTA subtitle:** 30 minutes to map where an embedded engineer would start — and what he'd ship in your first month.
  - **CTA label:** Book a free diagnostic
  - **Related:** AI Transformation / The team / Careers (see §6)
- **Rationale:** Keeps the human, direct FR close without a hollow reassurance line.

## 5. FAQ
FAQ slot: YES — `src/components/shared/faq-accordion.tsx` + FAQPage JSON-LD.

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | Qu'est-ce qu'un Forward Deployed Engineer (FDE) ? | What is a Forward Deployed Engineer (FDE)? | An AI engineer embedded directly in the client's team: he understands the real problem, writes production code, connects AI to existing systems and stays accountable until the solution runs. The model comes from Palantir and is now used by OpenAI, Anthropic and Google. At AI Makers it's the core of the offer — one dedicated FDE full-time in your team, supervised by our CTO. |
| 2 | Pourquoi le modèle FDE explose-t-il en ce moment ? | Why is the FDE model exploding right now? | Because 95% of enterprise AI pilots produce no measurable return (MIT study, 2025): the models are powerful, but wiring them into a real environment is the hard part. FDE job postings rose 8x in a year, and the AI labs pay this profile between $385K and $1M a year. Most companies can't hire that profile — but they can deploy one. |
| 3 | À qui appartient ce que l'ingénieur construit ? | Who owns what the engineer builds? | You do, entirely. Code, playbooks, documentation: all the IP is yours, written into the contract (Exit Guarantee). The day we leave, everything stays with you, and your teams keep running it. |
| 4 | Qui encadre l'ingénieur au quotidien ? | Who supervises the engineer day to day? | Walid, our CTO. Every shipped system is reviewed with him, every technical trade-off escalates to him, and the engineer draws on the playbooks of the 200+ systems the firm has already deployed. Your engineer is alone in your team, never alone with a problem. |
| 5 | Que se passe-t-il à la fin de la mission ? | What happens at the end of the engagement? | The goal isn't to stay — it's to make you independent. By month 6 the systems run, the playbooks are written and your leads are trained to keep them alive. Every system leaves with its documentation, fully client-owned. |
| 6 | L'ingénieur travaille à distance ou sur site ? | Does the engineer work remotely or on-site? | Both. We work on-site across mainland France and Morocco, from our Paris and Rabat offices, and remotely across the wider French-speaking region. The format is set to your organisation during the diagnostic. |
| 7 | Quel est l'engagement minimum ? | What's the minimum commitment? | Three months. It then continues month to month with 30 days' notice. The first weeks cover the audit and the costed roadmap, then the first systems ship to production within the first month. |
| 8 | En quoi est-ce différent d'un freelance IA ? | How is this different from an AI freelancer? | A freelancer sells you days and leaves with the know-how. We sell an outcome, with 4 guarantees written into the contract. When we leave, your leads stay, the documentation stays, and all the code is yours. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| The complete 3-phase engagement (Audit, Build, Scale) | /ai-transformation | related |
| The team behind the engagements | /equipe | related |
| We're hiring AI engineers | /carrieres | related |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Réserver mon diagnostic gratuit » → /contact. Proposed EN: **Book a free diagnostic**

## 8. GEO block
- **Answer-first paragraph (EN, 2–3 sentences):** A Forward Deployed Engineer (FDE) is an AI engineer embedded directly inside a client's team who writes production code, connects AI to existing systems, and stays accountable until it runs — a model invented by Palantir and now used by OpenAI, Anthropic and Google. AI Makers deploys one dedicated FDE full-time in your company, supervised by its CTO and backed by 200+ systems already in production, as the francophone arm of AY Automate. Hiring the same senior profile independently takes 6 to 12 months; the labs pay it $385K–$1M a year.
- **llms.txt entry (EN):** [Forward Deployed Engineer](https://aimakers.fr/forward-deployed-engineer) : one dedicated AI engineer embedded in your team. AI Makers is the francophone arm of AY Automate (20+ AI engineers deployed in companies), supervised by Walid Boulanouar (CTO, AY Automate co-founder) and Adel Dahani (AY Automate co-founder & COO, ex-AI Engineer at IBM).

## 9. Facts used
| Fact / figure | Source |
|---|---|
| AY Automate partnership, 20+ engineers deployed, Walid Boulanouar (CTO), Adel Dahani (COO, ex-IBM) | public/llms.txt (canonical) |
| 200+ systems in production, 7h/week recovered per employee | public/llms.txt (canonical) |
| 95% of enterprise AI pilots fail (MIT, 2025) | fde.ts — [to validate source] |
| +729% FDE job postings / 8x in one year (Indeed) | fde.ts — [to validate] |
| $385K–$1M lab comp for an FDE | fde.ts — [to validate] |
| 6–12 months to hire, €70,000+/year salary | fde.ts — [to validate] |
| 1,500+ automations ready to adapt | fde.ts — [to validate] |
| OpenAI $4B deployment JV (2026), FDE team 2024 | fde.ts — [to validate] |
| Partner/cert badges (Clay, Google, Make, n8n, AWS, Azure, Anthropic, Microsoft) | cert-badges — [to validate each badge claim] |

---

## Reconciliation applied

**Changed:**
1. **Title double-brand fix** — stripped `| AI Makers` (renders 53).
2. **Thinned the "X, not Y" frame from ~10 → 4** (batch-heaviest raw count). Kept the four sharpest/fingerprint instances: §4.3 "Not because the models are weak, but because deployment fails" (causal correction), §4.5 title "He doesn't arrive alone. He arrives with our systems.", §4.9/FAQ5 "The goal isn't to stay — it's to make you independent.", FAQ4 "alone in your team, never alone with a problem." (signature). Flattened the rest to positive facts: §4.2 "Not a ROI estimate on a slide", §4.3 "doesn't advise from a consulting desk", §4.5 "never starts from a blank page", §4.6 "No talent pool, no anonymous profiles", §4.7 "not in a demo environment", §4.8 "Not one more generic chatbot"/"not from the open web"/"not beside it", §4.9 "He doesn't build in a corner"/"No theory slides", FAQ3 "No dependency, no hostage-taking".

**Deliberately NOT changed:**
- **All `[to validate]` external stats kept and tagged** — MIT 95%, Indeed +729%/8x, $385K–$1M, OpenAI $4B JV, €70k/6–12mo, 1,500+ automations, and every partner/cert badge. These are the page's credibility spine and its only fabrication exposure; per _reconciliation-notes.md they are sign-off gates (🔎), not content edits. Left intact for the owner to verify-or-cut before publish. Did not weaken or launder them.
- **Named lineage** (Palantir → OpenAI/Anthropic/Google, AY Automate, Walid Boulanouar, Adel Dahani ex-IBM) — canonical/first-hand, untouched.
- **Dogfooding systems** (call intelligence, cockpit, tracker) — first-hand proof, kept.
- **Guarantees + testimonials** render read-only from source (no new copy authored).
- **Engineering left for dev:** FR founder-bio block + FdeEmbed/RelatedContent FR chrome (TICKET-I18N-BESPOKE), badge authorization. Not content edits.
