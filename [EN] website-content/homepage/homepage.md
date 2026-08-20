# Homepage — EN Content Master

## 1. Page header
- **Route (FR, live):** /
- **Proposed EN slug:** / (EN site root)
- **Purpose:** Main entry point; positions AI Makers as an AI transformation studio (audits, ships systems to production, trains teams), funnels to the 30-min diagnostic. Canonical OWNER of the reused comparison table (`optionsTable`), the guarantees block, and the 6-step method.
- **SEO role:** pillar / brand hub. EN strategy: lead with the Agency & automation pillar (ai consulting, ai automation, ai transformation) — training is secondary.
- **Funnel stage:** TOFU→BOFU (full-funnel page)

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai makers (brand) + blended "ai transformation studio" | brand (light) | — | brand term |
| Secondary | ai transformation | 1,600 (US) / 450 (GB) | 41 (US) / 30 (GB) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai consulting | 8,400 (US) / 1,400 (GB) | 46 (US) / 45 (GB) | Ahrefs, 2026-07 |
| Secondary | ai automation | 12,000 (US) / 3,400 (GB) | 56 (US) / 48 (GB) | Ahrefs, 2026-07 |

> **Keyword decision:** Homepage is the brand hub, so the primary is the brand/blended term ("AI Makers" / "AI transformation studio") — low keyword pressure by design. The page blends the three pillar terms it should be relevant for: **ai transformation** (1,600/KD41 US — the head term this brand owns), **ai consulting** (8,400/KD46, high commercial intent — deep-linked to /ai-consulting), and **ai automation** (12,000/KD56 — deep-linked to /ai-automation). The money pages carry the ranking weight for those clusters; the homepage carries the brand and the internal-link authority. GB volumes are ~3–4× smaller across the board (US-led report, GB secondary).

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | AI Makers \| Cabinet de Transformation IA pour Entreprises | AI Transformation Studio for Companies *(38; renders "… \| AI Makers" = 50 — template auto-appends brand, do not hand-write it)* |
| Meta description (140–160 chars) | Cabinet de transformation IA anti-hype. Audit, formations IA, automatisation et accompagnement sur-mesure. +200 systèmes déployés... | AI Makers is an AI transformation studio in Paris and Rabat. We audit processes, ship AI systems to production, and train your teams. 200+ systems, 4 guarantees. *(158)* |
| H1 | Transformation **IA** (headline + accent, hero.tsx) | AI transformation, **shipped** |
| URL slug | / | / |

JSON-LD on page: Organization + WebSite + FAQPage (built in `src/app/page.tsx` from `homepageContent.faq`).

## 4. Sections & content
ALL copy lives in `src/lib/site-config.ts` → `homepageContent.*` (+ `clientLogos`, `bookingProof`). Components only render it.

### 4.1 — Hero
- **Component:** `src/components/sections/homepage/hero.tsx` · data `homepageContent.hero`
- **Fields:** headline, headlineAccent, subtitle, description, ctaPrimary{label,href}, ctaSecondary{label,href}, newsletterFallback{prefix,label,href}, stats[3]{target,prefix/suffix,label}
- **Proposed (EN):**
  - **headline:** `AI transformation,`
  - **headlineAccent:** `shipped`  *(renders "AI transformation, shipped")*
  - **subtitle:** `Your AI department, live in 30 days.`
  - **description (answer-first, ~40 words):** `AI Makers is an AI transformation studio in France and Morocco. We audit your processes, build AI systems into production inside your own tools, and train your teams to run them without us — a three-phase method: Audit, Build, Scale.`
  - **ctaPrimary:** `{ label: "Book a free diagnostic", href: "/contact" }`
  - **ctaSecondary:** `{ label: "Test your AI maturity in 2 min", href: "/ai-readiness-assessment" }`
  - **newsletterFallback:** `{ prefix: "Not ready to talk?", label: "Get the AI-First Playbook (48 pages)", href: "/playbook-ia" }`
  - **stats[3]:** `+50 companies` · `+2,500 people trained` · `9.6/10 average satisfaction`
- **Rationale:** Answer-first description defines what AI Makers *is* in the first 40 words (studio, three verbs, three-phase method) so answer engines can cite it. "shipped" as the accent word carries the whole positioning: ships systems, not slides. Stats verbatim from llms.txt; 9.6/10 is live on the FR hero.

### 4.2 — Problem
- **Component:** `src/components/sections/homepage/problem.tsx` · data `homepageContent.problem`
- **Fields:** badge, title, intro, points[3]{title,description}
- **Proposed (EN):**
  - **badge:** `The problem`
  - **title:** `You know AI can transform your company. But where do you start?`
  - **intro:** `You've tried ChatGPT, maybe trained a few people. Concretely, nothing in your processes has changed.`
  - **points[0]:** title `You don't know which processes to automate first` · description `Too many options, no ROI scoring. You spend on the fun use cases instead of the ones that move your P&L.`
  - **points[1]:** title `Your teams lose whole days to work with no value` · description `Reporting, data entry, follow-ups, summaries — work AI absorbs 60–80% [to validate] of. Your best people deserve better.`
  - **points[2]:** title `You tested ChatGPT or Copilot. Nothing changed.` · description `A tool changes nothing on its own. What changes everything: a system configured for how you actually work, and teams trained to use it.`
- **Rationale:** Names the reader's real state (tried a tool, no change) rather than a generic pain. The 60–80% figure recurs across the site as a cite-able claim. Verdict-style: "a tool changes nothing on its own."

### 4.3 — Value Prop (conversation + objections)
- **Component:** `src/components/sections/homepage/value-prop.tsx` (+ `conversation.tsx`) · data `homepageContent.valueProp`
- **Fields:** kicker, title, conversation[5]{from,text}, conversationCta, objectionsKicker, objectionsTitle, objections[4]{icon,quote,answer(markdown bold)}, orbitCaption
- **Proposed (EN):**
  - **kicker:** `Why AI Makers?`
  - **title:** `Your AI transformation partner`
  - **conversation[5]:**
    1. `{ from: "dg", text: "We know we have to bring in AI. We just don't know where to start or how." }`
    2. `{ from: "aim", text: "That's the sentence we hear most. The good news: it's a two-week fix." }`
    3. `{ from: "dg", text: "How?" }`
    4. `{ from: "aim", text: "An audit of your workflows. We find where AI creates value for you and put a number on each opportunity. You leave with a roadmap: what to build first, and for what return." }`
    5. `{ from: "aim", text: "Then we build. One to two systems a month, measured before and after. If the audit doesn't find 3 profitable cases: refunded." }`
  - **conversationCta:** `{ prefix: "Keep the conversation going. 30 minutes, for real.", label: "Book my diagnostic", href: "/contact" }`
  - **objectionsKicker:** `The conversation continues`
  - **objectionsTitle:** `What you're probably thinking`
  - **objections[4]:**
    1. `{ icon: "presentation", quote: "Another consultancy about to sell me slides?", answer: "No — **systems in production**. If the audit doesn't find 3 profitable cases, it's **refunded**." }`
    2. `{ icon: "users", quote: "My teams will never keep up.", answer: "70% of a transformation is people (BCG). **Two hours of training a week**, your **AI Champions** autonomous at 6 months." }`
    3. `{ icon: "chef", quote: "And you — do you actually use AI yourselves?", answer: "Since 2022, **the systems we sell run AI Makers**. Our own kitchen is further down this page." }`
    4. `{ icon: "key", quote: "And the day you walk away?", answer: "**Everything stays with you**: code, playbooks, trained teams. Your independence is a **deliverable**." }`
  - **orbitCaption:** `Our stack. Used every day, in-house.`
- **Rationale:** The dialogue mirrors the real objection pattern from discovery calls. The 70%/BCG figure is tagged `[to validate source]` in Facts. "Our own kitchen is further down this page" points to the fleet/dogfooding sections — first-hand, not a claim.

### 4.4 — Offers (3 entry points)
- **Component:** `src/components/sections/homepage/offers.tsx` · data `homepageContent.offers`
- **Fields:** badge, title, subtitle, items[3]{name,promise,for,href,illustration}
- **Proposed (EN) — EN ordering: build/automation program leads, training demoted to last:**
  - **badge:** `Our offers`
  - **title:** `Three ways to work with us`
  - **subtitle:** `One entry point per situation. The same proven method underneath each.`
  - **items[0] — AI Transformation:** promise `The full program: audit, systems in production, autonomous teams.` · for `For SMEs and mid-market that want to go AI-first, not just run a pilot.` · href `/ai-transformation`
  - **items[1] — Forward Deployed Engineer:** promise `An AI engineer embedded in your team, full-time.` · for `Codes at your side, in your stack, from week one.` · href `/forward-deployed-engineer`
  - **items[2] — AI Training:** promise `Your teams trained on their real use cases, not on slides.` · for `On your own workflows and your own data.` · href `/ai-training-for-teams`
- **Rationale:** EN strategy leads with the agency/automation pillar, so the build program and FDE come before training (FR order was Transformation → Training → FDE). Training href points to the EN money-page slug /ai-training-for-teams.

### 4.5 — Method (6 steps) — OWNED HERE
- **Component:** `src/components/sections/homepage/method.tsx` · data `homepageContent.method`
- **Fields:** badge, title, subtitle, steps[6]{number,phase,icon,name,duration,involvement,deliverable,deliverableShort,whatWeDo[4],gain,whyItMatters,next}, cta
- **Proposed (EN):**
  - **badge:** `How we work`
  - **title:** `Your AI department, outsourced. From audit to autonomy.`
  - **subtitle:** `Week by week, here's what exists inside your company: the deliverables, the systems in production, and what you gain at each step.`
  - **steps[0]** — number `01` · phase `AI Scan` · icon `search` · name `Audit` · duration `Weeks 1–2` · involvement `Interviews with your teams` · deliverable `Full process map and at least 3 profitable use cases` · deliverableShort `Map + 3 costed cases` · whatWeDo `["Map of your real workflows","Interviews with leaders and operators","Maturity scoring on our /24 grid","A number on every opportunity"]` · gain `You know where AI pays off for you: at least 3 costed use cases, or the audit is refunded.` · whyItMatters `This is where most AI projects die: a use case picked on gut feel instead of impact. You only sign the next step if the numbers hold.` · next `The roadmap goes to review`
  - **steps[1]** — number `02` · phase `AI Scan` · icon `map` · name `Strategy` · duration `Week 2` · involvement `Review and trade-offs in committee` · deliverable `Costed, prioritised roadmap, validated together` · deliverableShort `ROI roadmap validated` · whatWeDo `["Prioritisation by impact on your P&L","Integration architecture for your stack","Milestones and owners","Projected gains per system"]` · gain `A 3-, 6- and 12-month roadmap ranked by ROI. You decide on numbers, not hunches.` · whyItMatters `A roadmap signed off in committee gives you a direction and an internal sponsor. Without it, every decision gets renegotiated for six months.` · next `Development starts`
  - **steps[2]** — number `03` · phase `AI Engine` · icon `settings` · name `Development` · duration `Weeks 3–6` · involvement `Minimal: we build, you validate` · deliverable `Systems built, tested on your data` · deliverableShort `Systems tested on your data` · whatWeDo `["Building the workflows and agents","Connection to your existing tools","Testing and quality control","Documentation of every system"]` · gain `Your first systems run in production from the first month.` · whyItMatters `Tested on your real data, not in a demo. That's the difference between a POC that impresses and a tool your teams keep.` · next `Go live`
  - **steps[3]** — number `04` · phase `AI Engine` · icon `rocket` · name `Rollout` · duration `Ongoing` · involvement `Your field feedback every week` · deliverable `1–2 systems a month in production` · deliverableShort `System 1 in production` · whatWeDo `["Deployment into your real workflows","KPI measured before and after","Adjustments from usage feedback","Same-day support"]` · gain `Wired into your existing tools. Your teams don't switch environments, they save time.` · whyItMatters `A first measurable impact within 30 days: that's our written guarantee, and the moment the project starts paying for itself.` · next `Your teams take over`
  - **steps[4]** — number `05` · phase `AI Champions` · icon `graduation` · name `Training` · duration `2h a week` · involvement `Active participation from your teams` · deliverable `Autonomous teams, AI Champions identified and trained` · deliverableShort `Playbooks + AI Champions` · whatWeDo `["Hands-on sessions on your real cases","Training your AI Champions","Handover of the playbooks","Gradual move to autonomy"]` · gain `Autonomous teams, able to run and improve the systems without us.` · whyItMatters `A tool with no trained team dies in three months. Trained on their real cases, your teams ask for more.` · next `Continuous improvement`
  - **steps[5]** — number `06` · phase `AI Champions` · icon `trending` · name `Iteration` · duration `Every quarter` · involvement `Strategic review with leadership` · deliverable `Fresh audit and new prioritised use cases` · deliverableShort `Quarterly review + new cases` · whatWeDo `["Measuring the gains realised","Spotting new opportunities","Optimising the live systems","Monitoring built into your processes"]` · gain `Every quarter, new high-ROI use cases identified and prioritised.` · whyItMatters `AI changes every quarter. Your systems improve instead of ageing, and the roadmap keeps refilling.` · next `The cycle restarts, one level up`
  - **cta:** `{ label: "Book a free diagnostic", href: "/contact" }`
- **Rationale:** OWNER copy — siblings reference this 6-step method, they don't re-translate it. Kept the AI Scan / AI Engine / AI Champions phase labels (they're brand terms), translated every field faithfully with the anti-slop rewrites ("where most AI projects die", "dies in three months"). Numbers match the /ai-transformation phases and the offer.

### 4.6 — Results (counters + benefits; absorbed former ProofSection)
- **Component:** `src/components/sections/homepage/results.tsx` · data `homepageContent.results` (+ `proof.cases`)
- **Fields:** badge, counters[3]{target,suffix,label}, benefits[4]{title,description}; proof.cases[3]{...}
- **Proposed (EN):**
  - **badge:** `Measurable impact`
  - **counters[3]:** `200+ AI systems deployed` · `2,500+ professionals trained` · `7h/week recovered per employee`
  - **benefits[0]:** title `5 to 10 hours a week back per employee` · description `On the repetitive work: data entry, reporting, summaries, follow-ups. Hours that go back to what matters — client relationships and growth.`
  - **benefits[1]:** title `ROI visible in month 1, not at year-end` · description `Every system deployed has a KPI attached. You measure impact in real time. No buzzwords, no vague promises. Numbers.`
  - **benefits[2]:** title `Teams that level up every week` · description `Two hours of hands-on training a week, on your real use cases. Our programs (AI Essentials, Vibe Coding, AI for Sales, Copilot) build your AI Champions — the people who carry it forward.`
  - **benefits[3]:** title `An edge measured in accumulated data` · description `Your systems improve with use. Competitors "still thinking about it" will start from zero in six months. You'll have six months of data.`
  - **proof.cases[3] (mini case studies — client-measured, keep as-is, `[to validate for EN use]`):**
    - **Qatar Tourism — WhatsApp AI chatbot:** metric `$18,000/yr` label `saved` · secondMetric `-40%` label `support load` · before `A support team overwhelmed on WhatsApp. Average response time: 4h+.` · after `80% of requests handled autonomously by the AI agent. 24/7, multilingual.` · how `WhatsApp AI chatbot integrated with the existing CRM` · tags `["Chatbot","WhatsApp","Customer support"]`
    - **Sage — AI search (GEO):** metric `+70%` label `visibility on ChatGPT and Gemini` · before `Absent from AI-engine answers on their sector's queries.` · after `The first reference cited in their vertical on ChatGPT, Gemini and Perplexity.` · how `GEO strategy: content rebuilt to be cited by LLMs` · tags `["GEO","SEO","AI visibility"]`
    - **Shem's Publicité — AI marketing production:** metric `10x` label `efficiency per creative team` · before `A team of 3 shipped in 5 days. Deadlines always slipping.` · after `Same team, same volume, delivered in under 24h.` · how `Automated creative pipeline: brief → generation → validation` · tags `["Automation","Marketing","Content"]`
- **Rationale:** Counters verbatim from llms.txt. Benefits keep the "start from zero in six months" verdict. Mini-cases are real, client-measured results already live on FR; figures tagged for EN-use validation. Training program names anglicised (AI Essentials = Acculturation IA).

### 4.7 — Testimonials
- **Component:** `src/components/sections/homepage/testimonials.tsx` · data `homepageContent.testimonials` (14 items)
- **Fields:** badge, title, items[]{quote,name,title,company,photo}
- **Proposed (EN):**
  - **badge:** `They trust us`
  - **title:** `What our clients say`
  - **items:** Names, titles, companies and photos stay unchanged. Quotes are **factual client statements** — EN translations below are `[to validate: client approval of EN translation]`. Titles anglicised (Président → CEO/Chairman, Directrice → Director) `[to validate: exact EN titles]`.
    1. Éric Solal, ESN Engit — `A pragmatic, no-bullshit approach. Othmane and his team deliver concrete results, not slides.`
    2. Vanessa Braflan, Empruntis Montgeron — `AI Makers helped us automate processes that used to take hours. The ROI was visible from the first month.`
    3. Mickaël Mina, Sage — `AI Makers made GEO understandable and usable for our business teams. Their ability to grasp the business stakes fast and turn technical topics into actionable recommendations made the difference. A serious, hands-on partner.`
    4. Mariem Lahlou, ThinkONE — `The AI Makers team stood out for a human approach and genuine availability. Their ideas helped us evolve our strategic thinking and build pragmatic, impact-focused tools.`
    5. Hicham Boustit, Délifrance — `Before AI Makers, our challenge was using AI intelligently and securely while keeping our autonomy. The training made the difference: examples applied to our environment, very concrete use cases, and a clear view of how AI fits our work.`
    6. Hervé Landau, SAS Family Holdings — `Enthusiasm guaranteed, along with productivity and creativity gains — so a quickly measurable return on investment. Would do it again.`
    7. John Volke, AstraNICE & BrightSens Diagnostics — `The pragmatic approach, discovering what's possible by mixing AIs, and the lessons from US startups. Result: real gains in time and skills for our teams.`
    8. Jennifer Vigouroux, BioValley France — `Seeing AI as a powerful tool when used well. The training helped me discover the right tools for each need and phrase my requests better. The trainer's approach for beginners is remarkable.`
    9. Lamia Ajana, Shem's Publicité — `An expert team that knows how to support and train. The teams who took the training are now autonomous, and AI is a copilot in their daily work.`
    10. Nicole Neumann, Gepromed — `AI Makers supports us well beyond training: an operating system to structure our business, custom AI agents for our GTM and internal processes. Their strength: making AI applicable to our real needs — time saved, automations, and performance gains for the organisation.`
    11. Ziyad El Mouniri, Addictest — `AI Makers built our AI Operating System: repetitive tasks automated, processes structured, teams performing better every day. Not one more tool: a system that runs the business.`
    12. Lilla Merabet, Fondation Force — `AI Makers supports us with a pragmatic approach suited to healthcare and research: concrete systems that save our teams time, and real skills transfer. A partner that structures our AI transformation.`
    13. Marie-Pierre Picon, Amgen — `The training completely changed how we work. Our teams are now autonomous on AI tools and save considerable time every day.`
    14. Brigitte Meyer, Amgen — `Adopting AI across our teams was a real success thanks to the AI Champions program. The methodology is proven and effective.`
- **Rationale:** Verbatim quotes are factual and belong to named people; EN renders are faithful translations, tagged for client sign-off before publish. Nicole Neumann (Gepromed) and Ziyad (Addictest) quotes are reused on /ai-operating-system — same source, no cloning.

### 4.8 — Fleet (agent gallery)
- **Component:** `src/components/sections/homepage/fleet.tsx` · data `homepageContent.fleet`
- **Fields:** badge, title, subtitle, systems[]{name,tag,detail,bricks[logos],internal}, buildYours{title,subtitle,href}
- **Proposed (EN):**
  - **badge:** `Our own kitchen`
  - **title:** `An agent for every floor of your organisation`
  - **subtitle:** `A look at what's already running, here and at our clients.`
  - **systems[]** (name · tag · detail — bricks/internal unchanged):
    1. `GEO audit & tracking` · Marketing · `Your visibility in AI answers tracked continuously: citations won, share of voice vs competitors, SEO positions, prioritised actions`
    2. `Call intelligence` · Sales · `Every call analysed: objections, buying signals, next step pushed into the CRM`
    3. `Sales meeting prep` · Sales · `The full brief ready before every meeting: context, recent news, exchange history, angles to play`
    4. `Supplier invoice processing` · Finance · `Every invoice read, matched and pre-booked — only the exceptions come to you`
    5. `Management dashboards` · Leadership · `Your KPIs current every morning, and your teams answer their own data questions`
    6. `Configured Microsoft 365 Copilot` · Operations · `Deployed on your data and actually adopted: hours back each week on email, meetings and documents`
    7. `Daily decision cockpit` · Leadership · `The morning decision brief, generated before you reach the office`
    8. `Engagement health tracking` · Leadership · `Every client engagement scored weekly, weak signals caught before satisfaction dips`
    9. `Managed Meta Ads campaigns` · Marketing · `Your Meta and Instagram ads generated, tested and optimised continuously`
    10. `Customer support chatbot` · Operations · `First-line support handled on WhatsApp and Telegram, day and night`
    11. `Meeting summaries` · Operations · `The minutes and decisions extracted, with no note-taking`
  - **buildYours:** title `Build your own` · subtitle `Describe the process, we build the system.` · href `#reserver`
- **Rationale:** These are real internal + client systems on the live stack (Claude, n8n, Notion, Fireflies, Salesforce). First-hand and concrete — the "our own kitchen" proof that answers objection #3. Reused with an OS framing on /ai-operating-system (that page owns only the section header, not the fleet items).

### 4.9 — Connections
- **Component:** `src/components/sections/homepage/connections.tsx` · data `homepageContent.connections`
- **Fields:** badge, title, subtitle, groups[3]{number,title,detail,tools[]{name,logo}}
- **Proposed (EN):**
  - **badge:** `Connection`
  - **title:** `We replace nothing. We plug in.`
  - **subtitle:** `Your tools stay. Our systems connect to them, and the work flows.`
  - **groups[0]:** title `Your sales and your customers` · detail `Where your pipeline lives` (tools unchanged: Salesforce, HubSpot, Stripe, LinkedIn, Zendesk)
  - **groups[1]:** title `Your operations and your knowledge` · detail `Where the work gets organised` (tools: Jira, SAP / your ERP, Notion, Google Drive…)
  - **groups[2]:** (mirror FR group 3 — comms/collaboration) title `Your communication and your teams` · detail `Where your teams talk` (tools per FR)
- **Rationale:** "We replace nothing. We plug in." is a cite-able one-liner and directly answers the "do we rip out our stack?" objection. Tool logos unchanged.

### 4.10 — Stack table
- **Component:** `src/components/sections/homepage/stack-table.tsx` · data `homepageContent.stackTable`
- **Fields:** badge, title, subtitle, categories[6]{name,badge,tools[]{name,logo,detail}}
- **Proposed (EN):**
  - **badge:** `The stack, in the open`
  - **title:** `Every tool, mastered. Systems shipped on each.`
  - **subtitle:** `We don't discover your stack mid-engagement — we've already built on it. And zero surprise invoices: half is open source, the rest runs on your own accounts.`
  - **categories[6]** (name · badge — tool details translated one-liners):
    1. `AI brain` · `Included in the engagement` — Claude `The engine of your agents and copilots`; OpenAI `Alternative models per use case`; LangChain `The framework for your RAG agents: systems wired to your data`; Gemini `Search and multimodal`; Microsoft Copilot `Deployed and configured in your 365 environment`
    2. `Automation` · `Open source or light licence` — n8n `Workflows, webhooks, integrations`; Make `Fast scenarios when n8n is overkill`; Zapier `Simple triggers between your apps`; Power Automate `Your Microsoft processes orchestrated`
    3. `Meetings, docs and knowledge` · `Your existing accounts, zero migration` — Notion `The knowledge base and the cockpit`; Google Drive `Your documents, read and used by the agents`; OneDrive `Your Microsoft environment, covered too`; Fireflies `Your meetings transcribed and used`; Slack `Alerts and approvals`
    4. `CRM and payments` · `We plug into it` — Salesforce `Your pipeline updated by the agents, no data entry`; HubSpot `Pipeline and follow-ups fed by the agents`; Stripe `Billing and collection tracked`; Lemlist `Outreach sequences driven by the agents`
    5. `SEO and GEO visibility` · `To get cited by the AIs` — Ahrefs `Your domain authority — the kind that gets you cited`; Profound `Your share of voice in AI answers, tracked monthly`; Google Search Console `What Google sees of your site, on your account`; Google Analytics `Where your visitors come from, including from ChatGPT`
    6. `Prototyping and development` · `From prototype to production in days` — Lovable `Business interfaces prototyped live`; GitHub `All the code versioned, yours`; Vercel `Your internal tools deployed and hosted`
- **Rationale:** Real stack, named openly — the anti-hype proof point. "Zero surprise invoices" and "on your own accounts" are the security/cost differentiators. Every tool detail is a specific, deletable-if-hollow one-liner; none are.

### 4.11 — Compliance
- **Component:** `src/components/sections/homepage/compliance.tsx` · data `homepageContent.compliance`
- **Fields:** badge, title, subtitle, pillars[4]{icon,title,detail}, cta{label,href→/gouvernance-ia}
- **Proposed (EN):**
  - **badge:** `Trust and compliance`
  - **title:** `Your data. Your rules.`
  - **subtitle:** `A real AI department handles compliance too. GDPR, the EU AI Act, an internal charter: we build them into every deployment, not after the fact.`
  - **pillars[0] — GDPR and data protection:** `Legal basis, data minimisation and notice to individuals, for every deployment, alongside your DPO.`
  - **pillars[1] — EU AI Act, anticipated:** `We map and classify your AI systems during the audit, with transparency built into the agents we ship by default.`
  - **pillars[2] — A tailored AI charter:** `Permitted uses, data never to enter a prompt, human sign-off: the charter regulators recommend, built with you from the audit.`
  - **pillars[3] — Register and training:** `Our training meets the AI-literacy requirement of Article 4, with a documented register of systems and training.`
  - **cta:** `{ label: "Our approach to AI governance", href: "/gouvernance-ia" }`
- **Rationale:** EU AI Act framing fits the EN/EU market and the ICP (ops/transformation leaders in Europe). US-specific framing (state privacy laws, NIST) is `[to validate placement]` — not added here to avoid fabrication.

### 4.12 — Booking
- **Component:** `src/components/sections/homepage/booking.tsx` (+ `shared/booking-proof.tsx`, `shared/cal-embed.tsx`) · data `homepageContent.booking` + `bookingProof`
- **Fields:** badge, title, subtitle, benefits[3], host{name,role,photo,responseTime}, emailFallback; bookingProof stats + testimonials + badges
- **Proposed (EN):**
  - **badge:** `Book your diagnostic`
  - **title:** `30 minutes. A working session, not a demo.`
  - **subtitle:** `We map your workflows live and you leave with your first 3 AI quick wins, whether you work with us or not.`
  - **benefits[3]:** `Express map of your AI opportunities` · `3 quick wins ranked by ROI` · `A first actionable roadmap`
  - **host:** name `Othmane Halim` · role `CEO, AI Makers` · responseTime `Usually replies within 1h`
  - **emailFallback:** prefix `Not in the mood for a call?` · email `othmane@aimakers.fr`
  - **bookingProof stats:** `9.6/10 average satisfaction` · `100% would recommend` `[to validate]`
  - **badges:** `Anthropic Partner` · `"Osez l'IA" (French national AI program)` `[to validate placement — FR-specific badge]`
- **Rationale:** Working-session framing (not a demo) is the anti-hype signal the ICP responds to. 9.6/10 and 100% reco come from bookingProof and are tagged. The "Osez l'IA" badge is a France-specific program — kept but flagged as possibly not relevant to a US/GB audience.

### 4.13 — FAQ
- **Component:** `src/components/sections/homepage/faq.tsx` · data `homepageContent.faq` — see §5.

### 4.14 — Final CTA
- **Component:** `src/components/sections/homepage/final-cta.tsx` · data `homepageContent.finalCta`
- **Fields:** title, subtitle, cta{label,href}, urgency
- **Proposed (EN):**
  - **title:** `30 minutes to pin down your first 3 AI quick wins`
  - **subtitle:** `We map your workflows, find the high-ROI opportunities, and hand you a roadmap. Free, no strings, and useful even if you never work with us.`
  - **cta:** `{ label: "Book a free diagnostic", href: "/contact" }`
  - **urgency:** `At most 3 new clients a month. Each client gets a dedicated AI engineer, onboarded two weeks before kickoff. Our capacity is physically limited, not artificially.`
- **Rationale:** Real scarcity (the capacity model), stated as fact with the reason ("physically limited, not artificially") — which reads as honest rather than a fake-urgency close.

## 5. FAQ
FAQ slot: YES — `faq.tsx` + FAQPage JSON-LD. 9 items in `homepageContent.faq.items`.

| # | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|
| 1 | What is AI Makers? | AI Makers is an AI transformation studio in France and Morocco, founded by Othmane Halim, with offices in Paris (60 rue François 1er, 75008) and Rabat (46 Av Okba, Agdal). We help SMEs, mid-market and large groups put AI into operation through a three-phase method: Audit (AI Scan), Build (AI Engine), Scale (AI Champions). To date: 50+ companies supported, 200+ AI systems deployed (several systems per client), and 2,500+ professionals trained across France, Morocco and the wider francophone market. |
| 2 | What kinds of companies do you work with? | Mainly three profiles: SMEs and mid-market firms (50–500 employees) that want an AI strategy without hiring for it; communication and creative agencies bringing AI into their production; and startups and scale-ups automating operations to grow without growing headcount. The common thread: leadership that's convinced and a budget allocated to AI transformation. |
| 3 | What's the difference between AI Makers and an IT services firm or a freelancer? | An IT services firm sells person-days and technical deliverables. A freelancer sells one-off expertise on a tool or a scope. AI Makers sells a full transformation: workflow audit, AI systems deployed, teams trained and made autonomous. We don't leave before your teams can run it. It's the difference between buying code and buying an outcome. |
| 4 | Why not a freelance AI consultant at $500/day? | A freelancer sells you days. We sell a contractual outcome with 4 written guarantees. When the freelancer leaves, their knowledge leaves too. When we leave, your AI Champions stay, the documentation stays, and all the code is yours. |
| 5 | How is the engagement structured, and what ROI should we expect? | It runs monthly, with an initial commitment of 3 or 6 months depending on scope, then continues month to month with 30 days' notice. On average our clients recover 7 hours a week per employee involved, measured system by system against a baseline set before each deployment. The precise scoping — scope, team, investment — happens in the free 30-minute diagnostic. |
| 6 | How does AI Makers training work? | Hands-on, on your real use cases, never on generic slides. Formats: dedicated sessions (AI Essentials, Vibe Coding, AI for Sales, Microsoft Copilot) or 2 hours a week built into the engagement, on-site in Paris and Rabat or remote. The goal is always the same: teams who can run the systems themselves. |
| 7 | How long does a typical engagement last? | The minimum commitment is 3 months. Weeks 1–2 go to the AI Scan audit and the costed roadmap. From the first month, the first systems go into production. The median length of a full engagement is 6 to 9 months to reach full team autonomy. |
| 8 | Where do you operate? | From two permanent offices: Paris (75008) and Rabat, Morocco. We work on-site across France and Morocco, and remotely across the francophone market (Belgium, Switzerland, Canada, North Africa) and with international clients. On-site audits can be run anywhere in France. |
| 9 | What happens if the results aren't there? | Four guarantees, written into the contract: (1) no clear roadmap with 3 high-ROI use cases = audit refunded in full; (2) no concrete impact in the first 30 days = free extension; (3) an AI Champion trained with no measurable impact = 30 days on us; (4) all the IP is yours — the day we leave, everything stays. We take the risk for you, because we know it works. |

> FAQ ownership: Q1 (what is AI Makers), Q8 (geography) and Q9 (guarantees on the homepage) are owned here. The program-specific "how long / who builds / ownership" answers are owned by /ai-transformation; the AI-OS ownership answer is owned by /ai-operating-system.

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| Book a free diagnostic | /contact | primary CTA (hero, method, booking, final) |
| Test your AI maturity in 2 min | /ai-readiness-assessment | hero secondary CTA (EN slug) |
| Get the AI-First Playbook | /playbook-ia | newsletter fallback |
| The full AI transformation program | /ai-transformation | offers card 1 |
| Forward Deployed Engineer | /forward-deployed-engineer | offers card 2 |
| AI training for teams | /ai-training-for-teams | offers card 3 (EN slug) |
| See all case studies | /etudes-de-cas | results/proof CTA |
| Our approach to AI governance | /gouvernance-ia | compliance CTA |
| AI consulting services | /ai-consulting | pillar deep-link (blended term) |
| AI workflow automation | /ai-automation | pillar deep-link (blended term) |

## 7. CTA
- **Primary:** « Réserver mon diagnostic gratuit » → /contact. Proposed EN: **`Book a free diagnostic`** (hero, method, final)
- **Secondary:** « Testez votre maturité IA en 2 min » → /ai-readiness-assessment. Proposed EN: **`Test your AI maturity in 2 min`**

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `AI Makers is an AI transformation studio with offices in Paris (75008) and Rabat, founded by Othmane Halim. It audits a company's processes, deploys AI systems and agents into production inside the client's own tools, and trains the teams to run them without help — a three-phase method (Audit, Build, Scale) with one dedicated AI engineer shipping 1–2 systems a month under four written guarantees. To date: 200+ AI systems across 50+ companies, 2,500+ people trained, and an average 7 hours a week recovered per employee.`
- **llms.txt entry (EN):** `[AI Makers](https://aimakers.fr/) : AI transformation studio in Paris and Rabat. Audits processes, ships AI systems to production, and trains teams to autonomy — three-phase method, four written guarantees.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| +50 companies; +200 systems; +2,500 trained; 7h/week recovered | public/llms.txt (canonical) |
| 9.6/10 satisfaction; 100% would recommend | site-config bookingProof — [to validate] |
| Clients cited (Qatar Tourism, Sage, Shem's, + testimonial companies) | site-config proof/testimonials — [to validate for EN use] |
| 70% of a transformation is people (BCG) | objections card — [to validate source] |
| $18,000/yr saved, -40% support (Qatar Tourism); +70% AI visibility (Sage); 10x (Shem's) | site-config proof.cases — client-measured, [to validate for EN use] |
| Article 4 AI-literacy requirement; EU AI Act | EU AI Act (public); US framing [to validate placement] |
| "Osez l'IA" badge | site-config — FR national program, [to validate placement for EN] |
| Max 3 new clients/month; 4 written guarantees; three-phase method; founded 2022; Othmane Halim; Paris 75008 + Rabat | public/llms.txt + site-config (canonical) |
| Qualiopi / OPCO funding | NOT in llms.txt or copy — [to validate placement], no funding % invented |

---

## OWNER COPY — reused by sibling pages (write once, here)

### Comparison matrix — `homepageContent.valueProp.optionsTable` (5 columns × 6 rows)

**Punchline (`optionsPunchline`):**
- line1: `Not a consultancy. Not an agency. Not one more licence.`
- line2: `A team of engineers that builds inside your company, guaranteed in the contract. Compare.`

**Columns:** `Consulting firm` (briefcase) · `IT services firm` (server) · `AI agency / freelancer` (user) · `ChatGPT or Copilot licence` (logos) · `AI Makers` (aimakers)

| Row label | Consulting firm | IT services firm | AI agency / freelancer | ChatGPT / Copilot licence | AI Makers |
|---|---|---|---|---|---|
| **What you get** | A report and slides `(no)` | Contract developers, staff-aug `(meh)` | A tool, then no one `(meh)` | A general-purpose chatbot `(no)` | Systems in production, documented `(yes)` |
| **Who builds it** | No one: they recommend `(no)` | A team billed by the day `(meh)` | One person, when they're free `(meh)` | You, on your own `(no)` | A dedicated engineer, inside your stack `(yes)` |
| **Configured for you** | In theory `(meh)` | To the spec sheet `(meh)` | To the brief `(meh)` | Generic by design `(no)` | On your processes and your data `(yes)` |
| **Your teams at 6 months** | Still dependent `(no)` | Dependent on the staff-aug `(no)` | Dependent on the vendor `(no)` | Left to figure it out `(meh)` | Autonomous: AI Champions trained `(yes)` |
| **Guarantees** | None `(no)` | Best-efforts only `(no)` | Rarely `(no)` | None `(no)` | 4 guarantees written into the contract `(yes)` |
| **When it ends** | The report gathers dust as a PDF `(no)` | The team leaves, the knowledge with it `(no)` | It all leaves with them `(no)` | The subscription switches off `(no)` | Everything stays with you: code, workflows, docs `(yes)` |

**Scarcity badge:** `At most 3 new clients a month`

### Guarantees block — `homepageContent.guarantees`
- **badge:** `Zero risk`
- **title:** `You take no risk. We take it.`
- **subtitle:** `All four are written into the contract, not onto a slide.`
- **items[4]:**
  1. name `Audit guarantee` · promise `No clear roadmap with 3 profitable use cases in two weeks?` · outcome `Refunded. In full. No debate.`
  2. name `30-day guarantee` · promise `Nothing in production the first month?` · outcome `We keep working for free until it runs.`
  3. name `Champions guarantee` · promise `A champion trained with no measurable impact?` · outcome `30 days on us.`
  4. name `Exit guarantee` · promise `The day we leave, everything stays with you: code, playbooks, documentation.` · outcome `Zero dependency, no hostages.`
- **credibility:** `We can put that in writing because we cap intake: 3 clients a month, one dedicated engineer each. Agencies that sign everyone can't write it into a contract. We can.`

---

## Reconciliation applied

**Changed:**
1. **Title double-brand fix** — stripped the hand-written `| AI Makers` from the proposed Title (template auto-appends it); annotated rendered length (38 → 50 with brand). Renders once, ≤60.
2. **60–80% figure tagged** — added `[to validate]` to the "AI absorbs 60–80%" claim in Problem points[1] (non-canonical figure, not in llms.txt; brings homepage in line with the site-wide figure policy that flags/drops it on ai-transformation & automatisation).
3. **Two low-stakes negations flattened** (slop audit tell #1: de-densify the "not X" cadence without synonym-swapping) — offers card 3 `for` field ("never on generic slides" → "On your own workflows and your own data"); FAQ Q6 closer ("not people who 'watched a demo'" → "teams who can run the systems themselves").

**Deliberately NOT changed:**
- **Owner signatures kept in full:** "systems, not slides", "A working session, not a demo", the options punchline ("Not a consultancy…"), the CTA closer ("whether you work with us or not"), the scarcity line ("At most 3 new clients a month / physically limited, not artificially"), the exit-guarantee triplet — homepage is the canonical OWNER of all of these per the slop synthesis map. Non-owner sibling pages get de-stacked instead.
- **Meta description (158) left as-is** — in range; keyword + proof present. SEO flagged an *optional* soft-CTA add, but adding one pushes it over 160, so left.
- **Engineering items left for dev** (per _reconciliation-notes.md): EN slug scheme / routes / 404ing internal links, `inLanguage:"fr-FR"`, "studio vs cabinet" EN entity-noun decision, `/ai-readiness-assessment` CTA collision (D-1). Not content edits.
- `[to validate]` tags on 9.6/10, 100% reco, BCG 70%, client case figures, "Osez l'IA" badge — protected honesty markers, left intact.
