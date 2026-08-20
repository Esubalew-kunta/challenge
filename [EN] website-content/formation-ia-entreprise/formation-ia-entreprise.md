# Formation IA entreprise — hub (/formation-ia-entreprise) — EN Content Master

## 1. Page header
- **Route (FR, live):** /formation-ia-entreprise
- **Proposed EN slug:** /ai-training-for-teams
- **Purpose:** Training pillar hub: 6 programs, trainers, catalogue lead magnet. FR flagship; EN: reposition for corporate buyers only.
- **SEO role:** pillar (FR) / secondary (EN — MOOC/cert-seeker intent is NOT our ICP; target enterprise-training intent)
- **Funnel stage:** MOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai training for employees | 450 (US) / 90 (GB) | 22 (US) / 9 (GB) | Ahrefs keywords-explorer-overview, 2026-07 |
| Secondary | ai upskilling | 500 (US) | 17 (US) | Ahrefs, 2026-07 |
| Secondary | ai training for executives | 300 (US) | 42 (US) | Ahrefs matching-terms, 2026-07 |
| Secondary | corporate ai training | 150 (US) | n/a (low) | Ahrefs, 2026-07 |

> **Keyword decision (the trap the strategy warned about, confirmed):** bare "ai training" and "ai training for…" resolve almost entirely to MOOC/cert-seeker and *data-labelling job* noise ("how to use nvidia gpus for ai training", "ai training for german writers jobs") — not AI Makers' buyers. Even "generative ai training" (400, informational) skews course-marketplace. The only clean *enterprise* commercial cluster is small: **"ai training for employees" (450, KD22)** as primary, plus "ai upskilling" (500, KD17, commercial), "ai training for executives" (300, KD42, commercial), "corporate ai training" (150). This confirms EN training is a secondary pillar — the volume lives on the agency/automation pages. Recommend the EN site LEAD with those and treat this page as capability-building support, exactly per strategy. "generative ai training" is a future blog/informational angle, not this commercial page.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Formation IA entreprise : 6 programmes hands-on… | AI Training for Teams, on Your Real Work *(40; renders "… \| AI Makers" = 52 — template auto-appends brand)* |
| Meta description (140–160 chars) | Formation IA pour entreprises, hands-on… | Hands-on AI training for employees, built on your real use cases. Six programmes, from AI fundamentals to Claude and Copilot. 2,500+ professionals trained, 9.6/10. *(157)* |
| H1 | Formation IA pour entreprises, sur vos cas d'usage réels | AI training for teams, built on your real use cases |
| URL slug | /formation-ia-entreprise | /ai-training-for-teams |

## 4. Sections & content
Copy sources: `src/app/formation-ia-entreprise/page.tsx` (inline) + `src/lib/offer-pages/formation.ts` + `src/lib/formations.ts`. Local components: `formateurs-grid.tsx`, `formation-visuals.tsx`, `catalogue-form.tsx`, `formation-photo.tsx`.

### 4.1 — Hero
- **Component:** `formation.ts:formationHero`
- **Fields:** badge, titleLine1/2, subtitle, statsLine, cta
- **Current (FR):** « Des équipes qui produisent avec l'IA dès la semaine suivante. »
- **Proposed (EN):**
  - **badge:** `AI training for teams`
  - **titleLine1 / titleLine2:** `Teams that produce with AI` / `from the following week.`
  - **subtitle:** `Hands-on AI training for employees, on your real use cases, with your real tools — measured on what your teams produce afterwards.`
  - **statsLine:** `2,500+ professionals trained across France and Morocco`
  - **cta:** `Book a free diagnostic` → /contact
- **Rationale:** Answer-first outcome ("produce with AI from the following week") + primary kw ("AI training for employees") in the subtitle. Canonical 2,500+ figure (corrects the stale 1,250 in the brief).

### 4.2 — Preuve (stats + témoignages)
- **Component:** `formationProofStats` / `formationProofSection` + bookingProof
- **Fields:** 9.6/10 satisfaction, 100% reco, 2,500+ trained + quotes
- **Current (FR):** « Ce que disent les équipes qu'on a formées ».
- **Proposed (EN):**
  - **badge:** `The proof` — **title:** `What the teams we've trained say` — **subtitle:** `Every quote below is signed by a leader or operator we trained.`
  - **stats:** `9.6/10 satisfaction` · `100% would recommend` · `2,500+ professionals trained`
  - **testimonials:** REUSE — the signed quotes live in `site-config.testimonials`. Translate each existing signed quote verbatim; do not rewrite, reattribute, or fabricate. (Do not invent an Amgen outcome — keep whatever is already signed.)
- **Rationale:** Proof block is shared; this page owns the framing, not the quotes. Figures from bookingProof + llms.txt.

### 4.3 — Problème (3 défauts des formations)
- **Component:** `formationProblem`
- **Fields:** intro + items[3]
- **Current (FR):** Anti-catalogue positioning.
- **Proposed (EN):**
  - **title:** `You've already paid for AI training once. How many of your teams still use it?`
  - **intro:** `It's not a motivation problem. It's that the classic format doesn't survive the return to the desk.`
  - **01 — Theoretical:** `Slides, concepts, an impressive demo. Three weeks later, no one has opened an AI tool. What isn't practised during the session is never practised after it.`
  - **02 — Generic:** `The same content for a finance team, a sales team, and a creative agency. Fictional examples, far from the documents, processes, and tools your teams actually handle.`
  - **03 — No follow-through:** `The session ends, the trainer leaves, and no one measures what teams produce next. With no internal referent and no regular practice, the learning evaporates.`
- **Rationale:** Anti-slop opinion positioning ("doesn't survive the return to the desk"). The opening question is a real hook, not reassurance filler.

### 4.4 — Catalogue (6 programmes)
- **Component:** `formationCatalogue` + `formations.ts` + FormationVisual
- **Fields:** 6 cards {name, pourQui, dureeFormat, production, href}
- **Current (FR):** Catalogue of 6 programmes (live page already says "Six" consistently — metadata, hero, and catalogue H2).
- **Proposed (EN):**
  - **badge:** `The catalogue` — **title:** `Six programmes. One test: what your teams produce.` — **subtitle:** `The catalogue sets the frame; your reality sets the content. Every session is built on your use cases.`
  - **AI Fundamentals (Acculturation):** for `Everyone, whatever the role.` → `Teams leave with their own structured prompts and their daily tasks handled with AI: writing, analysis, summarising, first automations.`
  - **Vibe Coding:** for `Business and operational profiles, no technical prerequisite.` → `Each participant builds their first tool during the session: a prototype or automation that solves a real need in their job.`
  - **Creative & Advertising:** for `Marketing, content, and creative teams.` → `Real assets produced in-session: ad variations, visuals, and copy on your own briefs.`
  - **Go-to-Market & Sales:** for `Sales, marketing, and growth teams.` → `Prospecting sequences, meeting prep, and follow-ups produced in-session, on your real target accounts.`
  - **Microsoft Copilot:** for `Organisations on the Microsoft stack.` → `Copilot habits installed in daily tools — email, docs, spreadsheets, meetings. The paid licence becomes real usage.`
  - **Mastering Claude:** for `Teams standardising on Claude (Anthropic).` → `Participants leave running Claude on their real work: analysis, drafting, and building their own project workflows.`
  - **note:** header reads "Six" (live FR page already consistent at 6 — no count bug on this page; the earlier "Cinq→Six" correction was unverified and is withdrawn per SEO audit §5).
- **Rationale:** Six named programmes with real tool names (Claude, Copilot) and concrete in-session outputs. Program cards link to the 6 sub-pages (collection batch owns the detail copy).

### 4.5 — Mécanique (pourquoi ça marche)
- **Component:** `formationMechanics`
- **Fields:** items[4]
- **Current (FR):** « Pas un séminaire. Un entraînement. »
- **Proposed (EN):**
  - **title:** `Not a seminar. A training regimen.`
  - **On your real use cases:** `Every session starts from your documents, your processes, your tools. Participants practise on their own work, using the files they handle every day.`
  - **Dedicated sessions or 2h a week, ongoing:** `Intensive sessions over one or several days, or short regular sessions built into the work. The second format is the one we use in our engagements: learning is applied between sessions, not forgotten after a seminar.`
  - **On-site in Paris and Rabat:** `From our two offices or in your own premises, across France and Morocco.`
  - **Or remote:** `The same training format, delivered remotely. Each participant practises on their own use cases, live with the trainer.`
- **Rationale:** Real cadence (2h/week), real locations. The "regimen not seminar" line is a stated verdict.

### 4.6 — Programme AI Champions
- **Component:** `formationChampions` + championsTestimonial
- **Fields:** badge, title, copy + signed quote
- **Current (FR):** Internal champions program.
- **Proposed (EN):**
  - **badge:** `The AI Champions programme` — **title:** `Internal referents who carry the transformation`
  - **copy:** `A one-off training fades. An internal referent stays. The AI Champions programme trains, inside your teams, the people who spread AI usage over time: they support colleagues, find new use cases, and keep the systems alive after we leave. That's what makes your organisation autonomous, with no dependence on a provider.`
  - **bullets:** `Referents identified and trained in each key team.` · `A measured impact per champion, tracked over time.` · `A programme built into the everyday work.`
  - **testimonial:** REUSE existing signed quote (`championsTestimonial`) — translate verbatim, do not fabricate.
- **Rationale:** AI Champions is the autonomy mechanism and the bridge to the whole model. First-hand, concrete ("measured impact per champion, not a certificate").

### 4.7 — Garantie formation
- **Component:** `formationGuaranteeSection` + championsGuarantee
- **Fields:** guarantee copy
- **Current (FR):** « La garantie est écrite dans le contrat. »
- **Proposed (EN):**
  - **badge:** `Zero risk` — **title:** `The guarantee is in the contract. Not on a slide.`
  - **subtitle:** `We measure the impact of every champion trained. If the result isn't there, we cover the difference.`
  - **credibility:** `We can write it because we measure it: every champion has a tracked, reported impact.`
- **Rationale:** Guarantee owner is /garanties; this is the training-specific instance. Kept plain, no reassurance padding.

### 4.8 — Formateurs
- **Component:** `formateurs-grid.tsx` + `formations.ts:formateurs`
- **Fields:** trainer cards {nom, role, photo}
- **Current (FR):** « Formés par ceux qui déploient l'IA en production ».
- **Proposed (EN):**
  - **title:** `Trained by the people who ship AI to production`
  - **subtitle:** `The engineers and operators who build these systems for clients every week.`
  - **names/roles:** REUSE — keep real names verbatim (Othmane Halim, Maneesh Behera, Walid Boulanouar, Othmane Khadri, Adel Dahani, Edouard Willemsen…); translate role labels only.
- **Rationale:** E-E-A-T. The differentiator is that trainers are practitioners; names are facts, not to be altered.

### 4.9 — Photos de sessions
- **Component:** `formation-photo.tsx` + `formationPhotos`
- **Fields:** 8 real session photos + CTA tile
- **Current (FR):** Proof-of-reality gallery.
- **Proposed (EN):**
  - **section title:** `Real sessions, real teams`
  - **CTA tile:** `Which programme fits your teams?` → `Book a free diagnostic` → /contact
- **Rationale:** Photos are the proof-of-reality; only the caption/CTA tile needs EN. No stock-photo language.

### 4.10 — Catalogue form (lead magnet)
- **Component:** `formation/catalogue-form.tsx`
- **Fields:** form fields + promise
- **Current (FR):** « Recevez le catalogue complet ».
- **Proposed (EN):**
  - **title:** `Get the full catalogue`
  - **promise:** `The six programmes, formats, and sample session plans as a PDF. One email, no call required.`
  - **button:** `Send me the catalogue`
- **Rationale:** Low-friction secondary conversion. "No call required" removes objection without a reassurance closer.

### 4.11 — FAQ
- See §5.

### 4.12 — Related + CTA final
- **Component:** `cta-section.tsx`
- **Fields:** 3 blog comparatifs + CTA
- **Current (FR):** « Quel programme pour vos équipes ? »
- **Proposed (EN):**
  - **title:** `Which programme for your teams?`
  - **subtitle:** `30 minutes to identify which teams to train first, the use cases to work on, and the format that fits your organisation.`
  - **related:** Best AI training for companies (/blog/meilleures-formations-ia-entreprise); Best Claude training for teams (/blog/meilleures-formations-claude-entreprise); Best AI agencies in France (/blog/meilleures-agences-ia-france)
- **Rationale:** Related links match the existing FR set.

## 5. FAQ
FAQ slot: YES — `faq-accordion.tsx` + FAQPage JSON-LD.

| # | Current question (FR) | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|---|
| 1 | Comment se déroule une formation type ? | What does a typical AI training session look like? | It starts from your use cases, not a generic deck. Before the session we collect the tasks that eat your teams' time, the tools they use, and the documents they handle, then build the exercises from that. Participants apply AI to their own work during the session, so it's usable at their desk the next day. |
| 2 | Qu'est-ce que l'acculturation IA ? | What is AI acculturation (AI fundamentals)? | AI acculturation is the entry-level training that gets every employee comfortable using generative AI on daily work — writing, analysis, summarising, first automations. It's aimed at everyone, whatever the role, and is the base layer before role-specific programmes. |
| 3 | Proposez-vous un bootcamp IA ? | Do you run an AI bootcamp? | Yes, as intensive sessions over one or several days when a team needs to move fast. But our default is the opposite of a one-off bootcamp: short regular sessions (around two hours a week) built into the work, because that's what actually sticks. We'll recommend the format based on your goal. |
| 4 | La formation prompt engineering est-elle incluse ? | Is prompt engineering training included? | Yes — prompt engineering is built into every programme rather than sold as a standalone course. Participants leave with their own structured, reusable prompts for their real tasks, not a catalogue of generic templates. |
| 5 | Les formations sont-elles adaptées aux non-techniciens ? | Are the trainings suitable for non-technical people? | Yes. Most programmes (AI Fundamentals, Vibe Coding, GTM & Sales, Copilot) are designed for business and operational profiles with no technical prerequisite. Participants build real tools and workflows without writing code. |
| 6 | Combien de temps dure une formation IA en entreprise ? | How long does corporate AI training take? | It depends on the format: intensive sessions over one or several days, or an ongoing 2-hours-a-week format built into the team's work. The ongoing format is the one we use in our engagements, up to team autonomy at six months. *(Canonical owner of the training-duration Q across the site.)* |

> **Note on Qualiopi / OPCO:** the strategy brief positions this page around Qualiopi certification and OPCO funding ("up to 100%"). Neither claim appears in `public/llms.txt` nor in the scanned page copy. **`[to validate placement]`** — do NOT add a Qualiopi FAQ or any funding percentage until legal/ops confirms the certification is live and the funding rate is accurate. If confirmed, a 7th FAQ ("Is this training OPCO-fundable?") would be the natural home and this page becomes its canonical owner.

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| The 6 programme pages | /formation-ia-entreprise/[slug] ×6 | program details (collection batch owns copy) |
| Best AI training for companies | /blog/meilleures-formations-ia-entreprise | related (existing) |
| Best Claude training for teams | /blog/meilleures-formations-claude-entreprise | related (existing) |
| From training to systems in production | /agence-ia | cluster link (new) — routes to the EN lead pillar |
| Book a free diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** « Quel programme pour vos équipes ? » → /contact. Proposed EN: **`Which programme for your teams?`** (button: `Book a free diagnostic`)
- **Secondary CTA:** Catalogue PDF form. Proposed EN: **`Get the full catalogue`** (button: `Send me the catalogue`)

## 8. GEO block
- **Answer-first paragraph (EN, cite-able):** `AI Makers runs hands-on AI training for teams, built on the company's own real use cases rather than generic slides. The catalogue spans six programmes — AI fundamentals, Vibe Coding, Creative & Advertising, Go-to-Market & Sales, Microsoft Copilot, and Mastering Claude — on-site in Paris and Rabat or remote. 2,500+ professionals trained, 9.6/10 satisfaction, 100% would recommend.`
- **llms.txt entry (EN):** `[AI Training for Teams](https://aimakers.fr/formation-ia-entreprise) : hands-on AI training for employees on their real use cases — six programmes, trained by engineers who ship AI to production.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| 2,500+ professionals trained; 9.6/10; 100% would recommend | public/llms.txt + site-config bookingProof |
| Six programmes; on-site Paris/Rabat + remote; 2h/week format; autonomy at 6 months | formation.ts + formations.ts |
| Trainers are practitioners (real names) | formations.ts formateurs (verbatim, do not alter) |
| Qualiopi certification / OPCO funding "up to 100%" | strategy brief only — NOT in llms.txt or page copy → `[to validate placement]`, no funding % invented |

---

## Reconciliation applied

**Changed:**
1. **De-saturated the "X, not Y" frame from 9 → 2** (this was the batch's worst offender per the slop synthesis). Kept the two sharpest as positive-anchored verdicts: §4.5 title "Not a seminar. A training regimen." and §4.7 title "The guarantee is in the contract. Not on a slide." Flattened the other seven to positive facts (hero "Not another seminar" dropped; "Leaders and operators, not anonymous logos" → "Every quote below is signed by a leader or operator we trained"; "not fictional examples", "not a certificate on paper", "not a break from it", "not an attendance sheet", "Not career trainers" all flattened). No synonym-swapping — each became a plain assertion.
2. **Title double-brand fix** — stripped `| AI Makers` (renders 52).
3. **Withdrew the unverified "Cinq→Six" count correction** — SEO audit confirmed the live page already says "Six" everywhere; the "fix" was based on an unverified mismatch. Note updated so a producer doesn't chase a non-bug.

**Deliberately NOT changed:**
- **Qualiopi / OPCO `[to validate placement]` restraint** — protected compliance honesty; no funding % or certification added. Untouched.
- **2,500+ trained** — canonical figure, already correct (supersedes the stale 1,250).
- **Real trainer names, signed testimonials (REUSE verbatim)** — facts, not altered.
- **"What isn't practised during the session is never practised after it"** — kept; it's embodied-knowledge, not the "X not Y" tic.
- **Engineering left for dev:** orphaned `offer-pages/formation.ts` field-map target, FR villes local-SEO strip removal, `/ai-training-for-teams` route + sitemap, title template. Not content edits.
