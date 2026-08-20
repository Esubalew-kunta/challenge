# Sécurité & données (/securite) — EN Content Master

## 1. Page header
- **Route (FR, live):** /securite
- **Proposed EN slug:** /security
- **Purpose:** Security/trust page for CIO/DPO: where data lives, six commitments, refusals.
- **SEO role:** trust (procurement enablement)
- **Funnel stage:** BOFU

## 2. Target keywords
| Type | Keyword (EN) | Volume (US) | Difficulty | Source |
|---|---|---|---|---|
| Primary | ai data security | 1,500 | 36 | Ahrefs (US); GB secondary |
| Secondary | enterprise ai security | 450 | 3 (easy) | Ahrefs |
| Secondary | ai security for business | 10 | — | Ahrefs (very low — descriptive use only) |

> "ai data security" and "enterprise ai security" are the realistic targets. "ai security for business" has almost no volume — use as descriptive phrasing, not a head term.

## 3. Page meta
| Field | Current (FR) | Proposed (EN) |
|---|---|---|
| Title (≤60 chars incl. brand suffix) | Sécurité et données : où vivent vos données… | AI Data Security: Where Your Data Lives |
| Meta description (140–160 chars) | Les systèmes livrés par AI Makers tournent… | AI Makers delivers systems that run in your own accounts and keys — your data stays with you. Least-privilege access, standard DPA on request, no model training. |
| H1 | Vos données ne quittent pas chez vous. | Your data never leaves your side. |
| URL slug | /securite | /security |

## 4. Sections & content

### 4.1 — Hero
- **Proposed (EN):**
  - Badge: `Security & data`
  - H1: `Your data never leaves your side.`
  - Intro: `The systems we deliver run by default in your accounts: your n8n, Notion and Microsoft 365 subscriptions, your API keys. AI Makers builds and configures, but doesn't host your data. Here's what that means, concretely.`
  - CTA button: `Talk to a technical contact`
- **Rationale:** Faithful. States the data-sovereignty position plainly, with the concrete tool names procurement cares about.

### 4.2 — "Where your data lives" (3 columns)
- **Section header:** badge `The data flow` · H2 `Where your data lives` · sub `Three players, three clearly separated roles. The question to ask any AI provider: where does our data go, and who holds the accounts?`
- **Proposed (EN):**
  1. **Your tools** — tag `With you` — `Workflows, databases and documents live in your subscriptions: your n8n, your Notion, your Microsoft 365, your API keys. You keep control and billing, as our "who pays for what" model spells out.`
  2. **The AI models** — tag `Via professional APIs` — `The systems call the professional APIs of Anthropic, OpenAI or Google. In line with these providers' policies, data submitted via API is not used by default to train the models. We configure and verify these settings.`
  3. **AI Makers** — tag `Builds and configures` — `We design, build and configure the systems in your environment. We don't host your data: there's no AI Makers server between your tools and the models.`
- **Rationale:** Accurate. The "not used by default to train via API" claim is qualified correctly ("in line with providers' policies") and kept as such — not overstated.

### 4.3 — "Six commitments, valid for every engagement" (6 cards)
- **Section header:** badge `Our commitments` · H2 `Six commitments, valid for every engagement` · sub `No 40-page security policy nobody reads. Six verifiable practices, in place from day one.`
- **Proposed (EN):**
  1. **Your accounts by default** — `The systems we deliver run by default in your accounts and subscriptions. If you change providers tomorrow, your systems keep working with you.`
  2. **No training on your data** — `The professional APIs we use don't train their models on submitted data, in line with the providers' policies, configured and verified by us.`
  3. **Standard DPA on request** — `A standard Data Processing Agreement (DPA) is available on request to frame roles and responsibilities contractually. We can also work from yours.`
  4. **Full IP ownership and reversibility** — `Everything built during the engagement belongs to you: systems, prompts, documented playbooks. You can operate it all without us. It's a contractual guarantee, not a promise.`
  5. **Least-privilege access** — `Our default practice: named accounts for each person, access limited to the engagement's scope, and access revoked at the end. All within your tools, so it's auditable by your teams.`
  6. **Human validation of critical outputs** — `Content going out to your clients or a figure feeding a decision passes through human validation until reliability is proven on your use cases. This principle is written into your AI charter.`
- **Rationale:** Faithful. Commitment 4 correctly references the contractual Independence Guarantee (co-owned with /guarantees).

### 4.4 — "What we refuse to deploy" (governance cross-link)
- **Proposed (EN):**
  - H2 `What we refuse to deploy`
  - Body: `Data security is half the subject. The other half is governance: no automated decisions about people, no system your teams don't understand, a human in the loop for critical outputs. These limits, along with the EU AI Act, GDPR and AI-charter framework, are detailed on the dedicated page.`
  - Button: `See the AI Governance page` → /gouvernance-ia (→ /ai-governance)
  - Callout: `**Zero dependency, by design.** Because the systems run in your accounts and the playbooks are documented on your side, the end of the engagement creates no rupture: the systems keep working, with or without us.`
- **Rationale:** Faithful; keeps the reversibility argument concrete.

### 4.5 — FAQ — see §5

### 4.6 — PartnerStrip
- **Proposed (EN):** No copy to translate (partner/credibility badges rendered from shared component). Keep as-is.

### 4.7 — CTA final
- **Proposed (EN):**
  - Title: `A specific security requirement? Let's talk.`
  - Subtitle: `Vendor questionnaire, review by your IT team, a specific DPA: we respond directly to your technical and legal teams, before any commitment.`
  - Button: `Get in touch` → /contact
- **Rationale:** Keeps the procurement-enablement angle (answers vendor questionnaires).
- **Legal disclaimer line (keep):** `This page describes our practices and contractual commitments. It does not constitute legal advice.`

## 5. FAQ
FAQ slot: YES — `faq-accordion.tsx` + FAQPage JSON-LD.

| # | Proposed question (EN) | Proposed answer (EN) |
|---|---|---|
| 1 | Who has access to our data during the engagement? | Only the people working on your engagement, with named accounts created in your tools and access limited to the necessary scope (least-privilege principle). Because that access lives on your side, your teams can audit, restrict or revoke it at any time, without depending on us. |
| 2 | What happens at the end of the engagement? | Our team's named access is revoked, and everything built stays with you: the systems run in your accounts, the documented playbooks are handed over, and intellectual property reverts to you in full. You can operate, modify or hand the systems to whoever you want. That's what we call reversibility. |
| 3 | Do you use our data for other clients? | No, never. Your data serves your systems and nothing else: it's not reused for other clients, not merged into shared databases, and not submitted to model training. What we carry between engagements is our methods and patterns, never your data. |
| 4 | Can you sign our own DPA, or yours? | Both. We have a standard DPA, available on request, that your legal team can review. And if your company mandates its own Data Processing Agreement, we examine it and sign after review. The goal is the same either way: a clear contractual framework before the first access to your tools. |

## 6. Internal links
| Anchor (proposed EN) | Target route | Note |
|---|---|---|
| AI governance | /gouvernance-ia (→ /ai-governance) | sister page |
| the Independence Guarantee (IP & exit) | /garanties (→ /guarantees) | guarantee: exit/IP |
| Get in touch | /contact | CTA |

## 7. CTA
- **Primary CTA:** EN: `A specific security requirement? Let's talk.` → /contact

## 8. GEO block
- **Answer-first paragraph (EN):** `The AI systems AI Makers delivers run in the client's own accounts — their n8n, Notion, Microsoft 365 subscriptions and API keys — so the data stays with the client and AI Makers hosts nothing. Data submitted to the professional model APIs (Anthropic, OpenAI, Google) is not used by default to train the models, and AI Makers configures and verifies those settings. Access is least-privilege via named accounts, a standard DPA is available on request, and full IP ownership and reversibility are contractual.`
- **llms.txt entry (EN):** `[Security & data](https://aimakers.fr/security) : systems run in your own accounts, no model training on your data, least-privilege access and a standard DPA on request. AI Makers builds and configures but doesn't host your data.`

## 9. Facts used
| Fact / figure | Source |
|---|---|
| Systems run in client accounts; AI Makers doesn't host data; DPA on request; no training on client data | public/llms.txt + page copy |
| Data via professional APIs not used for training "by default, per provider policy" | page copy (correctly qualified — not overstated) |
| Full IP ownership / reversibility = contractual Independence Guarantee | src/app/garanties/page.tsx |

## Reconciliation applied
**Changed:**
- Title: stripped `— AI Makers` suffix. Rendered now `AI Data Security: Where Your Data Lives | AI Makers` (~51 chars, ≤60), single brand.
- Meta description: trimmed 188→~159 chars; kept the data-sovereignty theme + least-privilege / DPA / no-training next steps.

**Deliberately kept (no negation de-stack):**
- The page is classified KEEP for negative parallelism (Clean, net 4; deflating/procurement context). The single "It's a contractual guarantee, not a promise" is left intact — one instance, and it asserts a real contractual mechanism.
- All procurement/compliance repetition (least-privilege, no-training-on-your-data, reversibility, IP reverts, DPA-either-way) — necessary cross-page consistency, PROTECT.
- "human validation of critical outputs … written into your AI charter" shared verbatim with gouvernance-ia (required consistency), the qualified "no training by default, per provider policy" framing, and the legal-disclaimer line.
