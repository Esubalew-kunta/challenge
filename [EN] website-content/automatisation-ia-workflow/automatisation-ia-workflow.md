# Automatisation IA de workflows (/automatisation-ia-workflow) — EN Content Master

## 1. Page header
- **Route (FR, live):** /automatisation-ia-workflow
- **Proposed EN slug:** /ai-automation
- **Purpose:** Offer page: AI process/workflow automation. Core EN commercial page (automation is the EN lead pillar).
- **SEO role:** pillar for EN market (ai automation / workflow automation)
- **Funnel stage:** MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai automation | 12,000 (US) / 3,400 (GB) | 56 (US) / 48 (GB) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | workflow automation | 52,000 (US) / 15,000 (GB) | 50 (US) / 56 (GB) | Ahrefs, 2026-07 |
| Secondary | business process automation | 5,600 (US) / 1,100 (GB) | 48 (US) / 22 (GB) | Ahrefs, 2026-07 |
| Secondary | ai workflow automation | 4,600 (US) | 61 (US) | Ahrefs, 2026-07 |

> **Keyword decision:** "workflow automation" is the volume giant (52k US) but broad and tool-SERP-owned (Zapier/Make/Monday), and only partly commercial. **"ai automation" (12,000, KD56)** is the on-page, on-brand commercial primary and matches the H1 exactly. "workflow automation" and "business process automation" ride as secondaries (BPA is notably easy in GB at KD22). **"rpa" (32,000, KD78) and "robotic process automation" (18,000, KD72)** are high-volume but informational, hard, and legacy-RPA-vendor-owned — do NOT force onto this commercial page; better as a future blog comparison ("AI automation vs RPA", which the FR FAQ already hints at). Report: US-led.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Automatisation des processus par l'IA | AI Automation for Business Processes *(36; renders "… \| AI Makers" = 48 — template auto-appends brand)* |
| Meta description (140–160 chars) | Automatisation des processus métier par l'IA… | AI automation for your business processes: reporting, data entry, follow-ups, summaries. Mapped, scored by ROI, built on n8n and Claude, measured. Average gain: 7 hours a week per employee. *(158)* |
| H1 | Automatisation des processus par l'IA | AI automation for your business processes |
| URL slug | /automatisation-ia-workflow | /ai-automation |

## 4. Sections & content
Template: ServicePage. Copy inline in `src/app/automatisation-ia-workflow/page.tsx`; visuals `services/workflow-wiring.tsx`, `services/avec-sans-table.tsx`; imports `homepageContent` (stack + comparison).

### 4.1 — Hero + stats + proof band
- **Component:** `service-page.tsx`
- **Fields:** badge, h1, answer-first intro, heroStats[3], proof
- **Current (FR):** Defines AI process automation, states 7h/week average gain.
- **Proposed (EN):**
  - **badge:** `AI automation`
  - **h1:** `AI automation for your business processes`
  - **intro (answer-first):** `AI automation means handing the repetitive parts of a workflow to intelligent systems: data entry, reporting, follow-ups, summaries. Average measured result across our clients: 7 hours saved per week per employee. AI Makers maps your processes, prioritises them by ROI, builds on n8n and Claude, then measures the gain — every system shipped to production and documented.`
  - **heroStats[3]:** `7h saved / week / person` · `200+ systems in production` · `50+ companies`
  - **proof caption:** `Building an automated workflow, in a workshop with the client.`
- **Rationale:** First sentence is a self-contained definition of "AI automation" for answer engines; the 7h figure (canonical) lands inside the first 40 words. "ai automation" appears in H1 + first line.

### 4.2 — "À quoi ressemble un workflow automatisé" (visuel)
- **Component:** sections[0] + `workflow-wiring.tsx`
- **Fields:** animated wiring visual + description
- **Current (FR):** Visual anatomy of an automated workflow.
- **Proposed (EN):**
  - **badge:** `At a glance` — **title:** `What an automated workflow looks like`
  - **description:** `A trigger, an agent that processes, outputs in seconds. Here's a real case: a lead that arrives by email, qualified and routed without a single hand touching it.`
- **Rationale:** Concrete, single real example (email lead → qualified → routed). No abstract "streamline your operations" filler.

### 4.3 — "Ce qui s'automatise vraiment" (6 processus)
- **Component:** sections[1] + `processus` cards
- **Fields:** 6 cards {icon, title, description}
- **Current (FR):** Concrete automatable processes.
- **Proposed (EN):**
  - **badge:** `The processes` — **title:** `What actually gets automated` — **description:** `Six families of process show up in almost every engagement. If your teams spend hours a week on them, there's a system to build.`
  - **Reporting:** `Activity reports, dashboards, weekly consolidations generated automatically from your own data.`
  - **Data entry & transfer:** `Document extraction, CRM updates, tool-to-tool sync — no manual re-keying.`
  - **Follow-ups:** `Client, supplier, candidate, or overdue-invoice reminders fired at the right moment, with the right context.`
  - **Summaries:** `Meeting notes, long-document digests, condensed monitoring pushed to the right people.`
  - **Onboarding:** `A new client or hire arrives: access, documents, and checklists created with no manual step.`
  - **Invoicing:** `Invoice generation, payment tracking, reconciliation, and alerts on late payers.`
- **Rationale:** Six named, checkable process types — exactly the "concrete not generic" bar. HR/support fold in under data-entry/follow-ups (strategy mentioned HR; kept as example, not a fabricated separate stat).

### 4.4 — "Quatre étapes, zéro pari" (méthode)
- **Component:** sections[2] + `etapes`
- **Fields:** 4 steps
- **Current (FR):** Method.
- **Proposed (EN):**
  - **badge:** `The method` — **title:** `Four steps, no gamble` — **description:** `We never start with the tool. We start with the process and its ROI.`
  - **01 — Mapping:** `We document your real workflows, task by task, with the people who run them. No assumptions.`
  - **02 — ROI scoring:** `Every process gets scored: time spent, frequency, complexity, potential gain. We only build what pays back.`
  - **03 — Build:** `The system is built on n8n and Claude, connected to your tools, tested with your teams, then shipped to production.`
  - **04 — Measurement:** `Every system has its KPIs: real usage, time saved, errors avoided. What isn't measured gets dropped.`
- **Rationale:** "What isn't measured gets dropped" is an opinion/verdict line that survives negation. Keeps the anti-slop discipline.

### 4.5 — "Un outil s'achète. Un système se construit." (outil vs système)
- **Component:** sections[3] + `OutilVsSystemeSection`
- **Fields:** 3-paragraph argument
- **Current (FR):** Differentiation vs off-the-shelf tools.
- **Proposed (EN):**
  - **title:** `A tool is bought. A system is built.`
  - **p1:** `Buying a ChatGPT licence for the whole team isn't automation. It's a tool. And a tool with no process behind it sits unused after three weeks.`
  - **p2:** `A system is different: a workflow wired to your data that runs without anyone thinking about it, with tracking indicators and one person accountable for it. It survives departures, activity spikes, and tool changes.`
  - **p3:** `That's why we don't sell licences or prototypes: we ship systems to production, documented, with the IP transferred to you in full.`
- **Rationale:** Strong opinion ("sits unused after three weeks") + concrete trade-off with a verdict. Differentiation the slop audit likes.

### 4.6 — "Construire ces systèmes seul, ou avec nous" (avec/sans)
- **Component:** sections[4] + `avec-sans-table.tsx` (data `homepageContent.offer.comparison.withUs/without`)
- **Fields:** 2-column with/without table (4 rows)
- **Current (FR):** DIY vs accompanied comparison.
- **Proposed (EN):**
  - **badge:** `With or without` — **title:** `Build these systems alone, or with us`
  - **description:** `Hire a senior AI profile, or plug in a dedicated engineer who's operational on day one. The maths is quick.`
  - **table cells:** REUSE — `homepageContent.offer.comparison` is shared (also on homepage). Translate the with/without rows once at the source; render the same component here.
- **Rationale:** Shared device; owner is site-config/homepage. This page owns only the wrapper framing.

### 4.7 — "Nos outils, sans langue de bois" (stack)
- **Component:** sections[5] + `stack`
- **Fields:** 4 stack cards {name, description}
- **Current (FR):** Honest stack notes.
- **Proposed (EN):**
  - **badge:** `The stack` — **title:** `Our tools, no spin` — **description:** `We have no exclusivity with anyone. Here's what we use and why.`
  - **n8n:** `Our main automation engine. Open source, self-hosted, advanced logic, native connection to AI models. Most of our systems are built on n8n.`
  - **Claude:** `The AI model we use for reasoning tasks: document analysis, drafting, summarising, qualification. Wired into workflows via API.`
  - **Make:** `A solid visual alternative for mid-complexity scenarios. We reach for it when the client's ecosystem calls for it.`
  - **Zapier:** `Simplest way to connect two tools on a basic scenario. Its limits: cost at volume and restricted logic. Honestly, rarely our first pick for real business processes.`
- **Rationale:** Real stack names with candid trade-offs and a stated ranking (n8n > Make > Zapier for real processes). "Honestly, rarely our first pick" is the anti-slop first-hand verdict.

## 5. FAQ
FAQ slot: YES — `faq-accordion.tsx` + FAQPage JSON-LD.

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | Quels processus automatiser en priorité ? | Which processes should you automate first? | The ones that combine three traits: high frequency, clear rules, low human value-add. In practice: recurring reporting, data entry and transfer between tools, client and supplier follow-ups, meeting and document summaries. That's exactly what our audit measures — each process gets an ROI score before any build decision. |
| 2 | Combien de temps pour automatiser un workflow ? | How long does it take to automate a workflow? | In our Build phase, a dedicated engineer ships 1–2 systems a month to production. A simple workflow (an automated reminder, a generated report) deploys in a few weeks; a deeper system wired to several tools with human validation steps takes a full cycle. The real delay isn't technical — it's team adoption, which is why two hours of weekly training is built in. |
| 3 | n8n ou Zapier ? | n8n or Zapier? | Zapier is simpler and fine for connecting two tools on a basic scenario. n8n is more powerful: advanced conditional logic, calls to AI models like Claude, self-hosting, and cost that doesn't explode with volume. For serious business processes we build on n8n. But the tool is secondary — a bad process automated is still a bad process. |
| 4 | Comment mesurer le ROI d'une automatisation ? | How do you measure the ROI of an automation? | Before the build, we baseline the starting point: time on the task, frequency, people involved, error rate. After go-live, we track the same indicators plus real system usage. ROI is counted in hours recovered and errors avoided. Across our clients the average measured gain is 7 hours per week per employee. *(Canonical owner of the ROI-measurement Q; the ROI calculator tool links here.)* |
| 5 | Faut-il des compétences techniques en interne ? | Do you need technical skills in-house? | Not to start: our engineer builds, documents, and ships to production. Yes to last: every engagement includes two hours of weekly training and the AI Champions programme, which trains internal referents. At six months your teams run the systems without us, and the IP is entirely yours. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| The full AI transformation offer | /ai-transformation | related (existing) |
| Estimate your AI ROI | /outils/calculateur-roi-ia | related (existing) |
| Automations deployed at our clients | /etudes-de-cas | related (existing) |
| Start with an AI audit | /audit-ia-entreprise | cluster link (new) |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Quels processus automatiser chez vous ? » → /contact. Proposed EN: **`Which of your processes should be automated?`** (button: `Book a free 30-min diagnostic`)
- **CTA subtitle:** `30 minutes to review your workflows and leave with your first 3 AI quick wins — whether you work with us or not.`

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `AI Makers automates business processes with AI — reporting, data entry, follow-ups, summaries, onboarding, invoicing — built on Claude and n8n. Each automation carries a KPI measured before and after, and the average measured result across clients is 7 hours saved per week per employee. Systems are shipped to production with full IP transfer.`
- **llms.txt entry (EN):** `[AI Automation](https://aimakers.fr/automatisation-ia-workflow) : business-process automation with AI, built on Claude and n8n — mapped, ROI-scored, measured, shipped to production.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 7h/week saved per employee (average measured) | public/llms.txt (canonical) |
| +200 systems / +50 companies | public/llms.txt (canonical) |
| 1–2 systems/month, 2h training/week, autonomy at 6 months | site-config homepageContent.offer |
| Stack: n8n, Claude, Make, Zapier + trade-offs | page.tsx stack array (first-hand opinion) |
| ~~60–80% absorption of repetitive tasks~~ | homepage problem copy — NOT used (unverifiable %, dropped to avoid a `[to validate]` claim on a commercial page) |

---

## Reconciliation applied

**Changed:**
1. **Title double-brand fix** — stripped `| AI Makers` (renders 48 with template brand).
2. **KD corrected** — "ai workflow automation" 56 → 61 (SEO measured-accuracy fix).
3. **De-stacked the "not licences/prototypes" negation** (non-owner page) — kept the sharpest instance (§4.5 p3 "we don't sell licences or prototypes: we ship systems to production"); flattened the hero intro ("not licences resold") and the GEO restatement ("not resold as licences") to positive facts.
4. **"actually" dedup** — dropped the emphasis word from the §4.2 title ("What an automated workflow looks like"); §4.3 keeps its "actually".

**Deliberately NOT changed:**
- **The dropped 60–80% figure** stays dropped (integrity signal; keeps this commercial page free of a `[to validate]` stat) — consistent with the site figure policy.
- **CTA subtitle** ("30 minutes … whether you work with us or not") left as the standard shared closer; homepage owns the canonical instance. Not re-minted here, just rendered.
- **First-hand stack verdicts** ("Honestly, rarely our first pick", n8n > Make > Zapier ranking, "a bad process automated is still a bad process") — protected staked opinions, untouched.
- **Engineering left for dev:** ServicePage FR chrome i18n, `/ai-automation` route + sitemap, shared with/without table single-sourced from homepage.
