# Équipe (/equipe) — EN Content Master

## 1. Page header
- **Route (FR, live):** /equipe
- **Proposed EN slug:** /team
- **Purpose:** Team page: who pilots, who builds, who intervenes.
- **SEO role:** trust (E-E-A-T)
- **Funnel stage:** MOFU

## 2. Target keywords
> E-E-A-T name page. No head term to chase; low search volume on names is expected. Optimise for accuracy.

| Type | Keyword (EN) | Volume | Difficulty | Source |
|---|---|---|---|---|
| Primary | (name page — no keyword) | — | — | intent judgement |

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | L'équipe AI Makers : 6 personnes, la production… | The Team: 6 people, the output of 40 |
| Meta description (140–160 chars) | Direction, ingénieurs IA et experts associés… | Leadership, AI engineers and associate experts — the AI Makers team across Paris and Rabat. A compact firm that runs on its own systems. |
| H1 | 6 personnes. La production d'une équipe de 40. | 6 people. The output of a team of 40. |
| URL slug | /equipe | /team |

## 4. Sections & content
> Names, roles and bios below are taken verbatim from site data (`src/lib/formations.ts:formateurs` + `src/lib/offer-pages/fde.ts:team`). Nothing invented; people with only name+role are shown with name+role.

### 4.1 — Hero
- **Proposed (EN):**
  - Badge: `The team`
  - H1: `6 people. The output of a team of 40.`
  - Intro: `This isn't a slogan, it's our living proof: the team runs on the systems it deploys for clients. And you work directly with the people building yours.`
- **Rationale:** Faithful.

### 4.2 — "Those who pilot" (Leadership)
- **Section header:** badge `Leadership` · H2 `Those who pilot`
- **Proposed (EN) — real roster (name / role / bio / LinkedIn):**
  1. **Othmane Halim** — Founder of AI Makers — `+200 AI engagements. Expert in AI transformation and strategy.` — [LinkedIn](https://www.linkedin.com/in/othmanehalim/)
  2. **Maneesh Behera** — COO of AI Makers — `Leads delivery and operations across AI engagements.` — [LinkedIn](https://www.linkedin.com/in/maneesh-behera)
  3. **Walid Boulanouar** — CTO of AI Makers — `Expert in Claude, AI agents and automation.` — [LinkedIn](https://www.linkedin.com/in/walid-boulanouar)
- **Rationale:** Verbatim from `formateurs` data. Roles/bios translated faithfully, nothing padded.

### 4.3 — "Those who build" (Engineering)
- **Section header:** badge `Engineering` · H2 `Those who build` · sub (from `fdeContent.team.intro`): `Not a talent pool, no anonymous profiles. Engineers who build every day, at our firm and at our clients', mentored directly by Walid, our CTO.`
- **Proposed (EN) — real roster:**
  1. **Kunta** — AI Engineer — (stack shown: Claude, n8n, Notion, Microsoft 365)
  - Followed by the "Your future colleague?" card → links to /carrieres (→ /careers): `Your future colleague? We're hiring AI engineers.` · `See open roles →`
- **Rationale:** The page renders only Kunta from the FDE team data (Walid appears under Leadership; Ali is not selected in the live filter). Name + role only — the FDE data carries no bio for engineers, so none is invented.

### 4.4 — "Those who work alongside us" (Associate experts)
- **Section header:** badge `Associate experts and trainers` · H2 `Those who work alongside us` · sub `The experts you meet on our training and engagements, each in their specialty.`
- **Proposed (EN) — real roster:**
  1. **Hamza Idmoudi** — Data / AI Engineer — [LinkedIn](https://www.linkedin.com/in/hamza-idmoudi-96b138207)
  2. **Edouard Willemsen** — AI Trainer — `AI transformation and change-management consultant.` — [LinkedIn](https://www.linkedin.com/in/edouard-willemsen)
- **Rationale:** The live code selects Hamza Idmoudi + Edouard Willemsen (not Adel Dahani, despite the skeleton's example note). Followed the source. Hamza has no bio field in data — shown name+role only, nothing invented.

### 4.5 — Stats row
- **Proposed (EN):**
  - `+200` — `AI systems deployed across +50 companies`
  - `+2,500` — `Professionals trained`
  - `Paris · Rabat` — `Two offices, one team`
  - Closing line: `A compact team that ships this much is exactly the mechanism we install at your company. Want to see it from the inside?` → `Join the team →` (/carrieres → /careers)

### 4.6 — CTA final
- **Proposed (EN):**
  - Title: `Work with us`
  - Subtitle: `30 minutes with the team to analyse your processes and leave with your first 3 AI quick wins, whether you work with us or not.`
  - Primary button: `Book my free diagnostic` → /contact
  - Secondary: `Join the team` → /carrieres (→ /careers)

## 5. FAQ
No FAQ slot in template.

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| the founder | /fondateur (→ /founder) | founder |
| we're hiring | /carrieres (→ /careers) | hiring |
| Book a diagnostic | /contact | CTA |

## 7. CTA
- **Primary CTA:** EN: `Work with us` → /contact

## 8. GEO block
- **Answer-first paragraph (EN):** `The AI Makers team is six people across offices in Paris and Rabat. Leadership: Othmane Halim (Founder), Maneesh Behera (COO) and Walid Boulanouar (CTO). Engineering: AI engineers such as Kunta, mentored directly by CTO Walid Boulanouar. Associate experts include Hamza Idmoudi (Data / AI Engineer) and Edouard Willemsen (AI Trainer). The team runs on the same AI systems it deploys for clients.`
- **llms.txt entry (EN):** `[Team](https://aimakers.fr/team) : the six people at AI Makers between Paris and Rabat — leadership, AI engineers and associate experts.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| Roster (names/roles/bios): Othmane Halim, Maneesh Behera, Walid Boulanouar, Hamza Idmoudi, Edouard Willemsen | src/lib/formations.ts:formateurs |
| Kunta (AI Engineer), team intro | src/lib/offer-pages/fde.ts:team |
| 6 people, Paris + Rabat, +50 companies, +200 systems, +2,500 trained | public/llms.txt (canonical) |

## Reconciliation applied
**Changed:**
- Title: removed doubled in-field brand (`The AI Makers Team` → `The Team`). Rendered now `The Team: 6 people, the output of 40 | AI Makers` (~48 chars, single brand).
- Meta description: trimmed 174→~136 chars; kept the team-composition + dogfooding framing.

**Deliberately kept:**
- Hero "This isn't a slogan, it's our living proof" — equipe is the canonical owner of the "not a slogan" device (§2.7); carrieres deletes its copy of it. Kept intact per task item 4.
- The verbatim roster (names/roles/bios from source), deliberately thin bios (no invented bio where source carries none), "Not a talent pool, no anonymous profiles" staked line, and canonical stat row.
- Leadership titles confirmed Founder (Othmane) / COO (Maneesh) / CTO (Walid) — this is the canonical set I aligned a-propos to.
