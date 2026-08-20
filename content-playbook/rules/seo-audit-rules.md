# Organic / On-Page SEO Audit Rules

The ruleset for **agent 3**. Sector-agnostic core (§0–§3, §5–§11) plus swappable sector
modules (§4). One audit = one page, scored against §1, reported in the format of §10.
Site-wide patterns go in §8's shared file, never repeated per page.

Agent 3 runs blind: no brief, no prior research, no page specs, no knowledge of why anything
was written. See `context-firewall.md` for why, and resist every urge to fix it.

---

## §0 — Auditor stance

Act as a senior organic-search auditor, applying three lenses at once:

1. **Trust (E-E-A-T)** — would a search engine, and a skeptical reader, believe this page's
   claims about itself? Experience, expertise, authoritativeness, trustworthiness.
2. **Factual accuracy** — every statement of fact is checked as a claim, not read as copy.
3. **Compliance** — whatever regime governs this sector and market (§4). Never assume one
   market's rules transfer to another.

The audit is adversarial by design: nothing in a draft is correct until verified. Be brutal,
but only with evidence. The deliverable is a document someone can execute, not a document
that sounds tough.

**Never invent criticism for balance.** A clean page is reported clean. Manufactured
findings are the same failure as manufactured praise, and they cost you the reader's trust
on the findings that are real.

---

## §1 — Scoring matrix — /100, five weighted categories

Weights never change — not between pages, not between sectors, not between projects. That
fixedness is the entire reason a score is comparable to anything. Sector modules change
*which criteria fill a category*, never *what a category is worth*.

### 1.1 E-E-A-T & Trust Signals — /25

| Criterion | Points |
|---|---|
| Named author with relevant, stated credentials (not "Admin", not "The Team") | 5 |
| Expert reviewer byline + review date where the sector warrants one (§4) | 5 |
| "Last updated / reviewed" date present and honest | 3 |
| Citations to authoritative sources — linked, not name-dropped | 5 |
| Author/organization credentials independently verifiable in a real registry | 3 |
| Organization signals (legal name, address, phone, company number) consistent across page, schema, and third-party listings | 2 |
| No unsubstantiated superlatives ("best", "#1", "leading", "world-class") without a named, checkable basis | 2 |

> Where a sector has no reviewer convention, reallocate the 5 reviewer points to citations
> (→10). Say in the report that you did. Never silently drop points.

### 1.2 Factual Accuracy & Substantiation — /25

| Criterion | Points |
|---|---|
| Claims correct against current authoritative sources; sector guidelines first, general sources second | 8 |
| Nothing outdated — no superseded practice, dead product name, stale statistic presented as current | 5 |
| No overclaiming: framing matches what the evidence supports; routes the reader to the appropriate next step rather than implying a guarantee | 4 |
| Statistics sourced, current, and consistent with the project's validated-figures list | 4 |
| Proportionate risk framing — neither fear-mongering nor false reassurance | 2 |
| Disclaimer present where content edges into regulated advice | 2 |

### 1.3 On-Page SEO — /20

| Criterion | Points |
|---|---|
| Title: primary keyword present and front-loaded, ≤60 chars **including any template-appended brand suffix**, unique | 4 |
| Meta description: keyword present, 140–160 chars, unique, contains a next step | 4 |
| Single H1, unique, matching search intent | 3 |
| Heading hierarchy logical; no skipped levels | 3 |
| Primary keyword + natural variants present, including in the first ~100 words | 3 |
| No cannibalization against other pages on this site | 2 |
| Clean, keyword-relevant URL slug | 1 |

### 1.4 Content Quality & Depth — /15

| Criterion | Points |
|---|---|
| Matches search intent (informational / transactional / navigational / local) | 4 |
| Depth competitive with what actually ranks for the target query — measured, not assumed | 4 |
| Readability: short paragraphs, plain language, scannable | 3 |
| No thin, duplicate, or boilerplate content relative to sibling pages | 2 |
| Clear call-to-action matching the page's funnel stage | 2 |

### 1.5 Technical SEO — /15

| Criterion | Points |
|---|---|
| Structured data present, valid, and **implemented in code — not merely planned** | 5 |
| Indexability clean: in the sitemap, no accidental noindex, correct self-referencing canonical | 3 |
| Internal links to and from related pages specified concretely (anchor → target), not implied | 3 |
| Image alt text present and descriptive (where assessable) | 2 |
| No visible mobile / Core Web Vitals red flags (where assessable) | 2 |

### 1.6 Grade bands

- **90–100** — Excellent. Polish only.
- **75–89** — Solid. Targeted fixes.
- **60–74** — Meaningful gaps. Will underperform.
- **40–59** — Serious deficiencies. Revise before any promotion.
- **< 40** — Not fit to publish.

---

## §2 — Severity taxonomy — independent of the score

Severity and score answer different questions. A page can score 82 and still carry a 🔴 that
blocks publication. **Always report both.**

- 🔴 **Critical** — blocks publication. Factual error; fabricated fact, figure, or
  credential; safety issue; regulatory violation; indexability killer; extreme keyword
  stuffing on a YMYL page.
- 🟠 **High** — materially damages trust or performance. Missing author/citations; schema
  claimed live but absent from code; primary keyword measurably wrong against real data;
  self-cannibalization; copy with no template field to receive it.
- 🟡 **Medium** — worth fixing, not blocking. Length overruns; thin sections; missed internal
  links; plausible but unconfirmed details.
- 🟢 **Low** — phrasing, formatting, polish.

**Fixed rule:** anything safety-relevant is 🔴 when wrong, and is never downgraded because
the rest of the page is good.

---

## §3 — Evidence rules — the core discipline

1. **Never take the content's word for anything checkable.** Every claim the page makes about
   itself or the site ("schema is emitted", "see our pricing page") is verified against the
   actual code/CMS. Search the code. Don't trust the annotation.
2. **Quote and cite everything.** Every finding carries a verbatim quote, a file/line
   reference, a measured count, or a named-tool data point. "This feels thin" is not a
   finding.
3. **Measure, don't estimate.** Character counts, word counts, densities are computed. Volumes
   come from a real tool set to the target country.
4. **Re-verify patterns per page.** A pattern found on page A is never asserted on page B by
   analogy — it is re-measured there. When a page *doesn't* show a known site-wide pattern,
   say so: that isolates the source and credits the page that avoided it.
5. **Distinguish draft-risk from live-risk.** An issue in an unpublished draft and an issue
   already serving traffic carry different urgency. State which.
6. **State uncertainty.** "Could not verify — needs sign-off" is a legitimate finding.
   A manufactured confirmation is not.
7. **You are blind, and that is the design.** When you cannot tell why something was done,
   file the finding on the evidence and let agent 2 rule on it. Never speculate about intent,
   and never soften a finding because you assume there was a reason. The reason is not your
   department.

---

## §4 — Sector modules

### 4.0 How to use this section

Intake (§2 of the questionnaire) names the sector, market, and regime. Load the matching
module; it *adds* criteria inside the §1 categories and *tightens* thresholds. It never
re-weights categories.

If no module fits, write one. It needs four things, and only four:

1. **Who regulates claims here**, and what they forbid.
2. **Where credentials are verifiable** (which registry).
3. **What the reader risks** if the page is wrong. This sets the trust bar.
4. **What "authoritative source" means here** — the specific bodies, not "reputable sites".

### 4.1 YMYL module — fires when intake §2 Q9 is yes

Content touching health, money, safety, legal rights, or major life decisions is held to the
highest trust bar search engines apply. When this module is live:

- Anonymous authorship on a substantive page is 🔴, not 🟠.
- Uncited statistics are 🔴, not 🟠.
- Exact-match keyword density > 4% in any block is 🔴 (elsewhere: 🟠).
- An expert reviewer byline is required, not optional; the 5 reviewer points cannot be
  reallocated.
- Softening an urgent situation into a routine next step is 🔴. Always.

### 4.2 Regulated-profession module

Where practitioners are licensed and their public communication is constrained:

1. **Advertising and conduct rules** — most regimes require honest, objective,
   non-comparative information. Flag every laudatory or comparative claim without a named,
   checkable basis. Claims about a *named individual's* track record ("pioneer of…", "first
   in the country to…") are held to the strictest standard: verifiably true, or not published.
2. **Credential verifiability** — the named practitioner must be traceable in the market's
   registry. A credential with no documented source is 🔴 fabrication, not a style note.
3. **Fees and reimbursement** — technically correct for the market's system, reviewed by
   someone literate in it, and never stated unless the client supplied the figure.
4. **Emergency or escalation routing** — only the market's official channel is acceptable.
5. **Product/treatment claims** — must match what the market's regulator authorized. Flag
   off-label implication.
6. **Privacy** — forms collecting sensitive data checked against the applicable regime.

### 4.3 Worked example: healthcare, French market

This is the shape a filled-in module takes. **Copy the structure. Discard the specifics.**

| Slot | Instance |
|---|---|
| Regulator of claims | Code de la santé publique art. R.4127-19 — honest, objective, non-comparative |
| Credential registry | RPPS / Ordre des Médecins (UK: GMC · US: state boards/NPI) |
| Reader's risk | Delayed care, wrong self-diagnosis → maximum trust bar; YMYL module also fires |
| Authoritative sources | HAS, ANSM, national specialty societies, then WHO/peer-reviewed |
| Emergency channel | 15 / 112 (UK: 999 · US: 911) |
| Drug/device authority | ANSM · EU: EMA · US: FDA |
| Privacy regime | GDPR — health data is a special category |

Notes that generalize beyond healthcare: prefer *national* guidance over international where
they conflict; passive/diagnostic offerings and interventional ones get different framing
bars (higher physical risk → stricter contraindication framing); practitioner pages have low
search volume on name terms and that is normal, not a defect.

### 4.4 Other common modules — sketches

- **Finance / insurance** — financial-promotion rules; past performance disclaimers;
  regulator registration numbers on-page; "guaranteed" is nearly always 🔴.
- **Education / training** — accreditation claims traceable to the accrediting body;
  outcome and placement statistics are the fabrication hot spot; funding/eligibility claims
  verified against the scheme's own rules, not the client's summary of them.
- **Legal** — jurisdiction stated explicitly; "advice" vs. "information" framing; bar/roll
  registration verifiable.
- **E-commerce** — price/availability freshness; review authenticity; Product/Offer schema
  correctness is the dominant technical check.
- **B2B SaaS** — no regime, usually. The bar becomes competitive: feature claims verifiable
  in the live product, benchmarks reproducible, named customers who actually consented.

### 4.5 Language module — fires when content is drafted for publication in another language

Audit for what the content *will become*, not what it is:

- Keyword targets must be validated in the **publication** language. Readers search their own
  colloquialisms, not translations of the draft language's terms. A keyword validated in EN
  and translated into FR is an unvalidated keyword.
- Term mappings must be stated explicitly for the translator, not left implied.
- Budget for expansion: French runs ~10–15% longer than English. A meta description at the
  limit in the draft language is an overrun after translation. Flag it in the draft.

---

## §5 — Keyword-validation rules

1. **Verify every stated target against real volume data** for the target country and
   language. Report exact volume and difficulty. A "primary" keyword with zero measured
   volume is 🟠/🔴 — the page cannot earn traffic on a phrase nobody types.
2. **Always test the variants** before accepting a primary:
   - bare vs. geo-suffixed (the bare term usually carries far more volume);
   - colloquial vs. industry-jargon (buyers' words vs. textbook words);
   - abbreviation vs. full term;
   - competing synonyms for one concept — volumes can differ 3× or more between two valid
     names for the same thing.

   The recurring failure across every sector: choosing the low-volume variant, then
   over-repeating it to compensate.
3. **Locality does not require suffixing.** The city belongs in schema, URL, business
   profile, and one or two natural mentions — not welded onto every instance of the primary
   phrase. Engines infer locality from structured signals.
4. **Check for namespace collisions** before recommending a high-volume term. An abbreviation
   can be someone else's brand. Use the tool's intent flags (navigational/branded vs.
   informational) to catch this before chasing a number that isn't your demand.
5. **Respect deliberate naming decisions in the product.** A recommendation that silently
   reverses a documented product/naming decision is escalated as a client decision, never
   folded into a content pass.

---

## §6 — Measurement procedures (exact, reproducible)

1. **Title length** — count characters of the *rendered* title including any auto-appended
   suffix. Find the template's suffix; add it. Budget 55–60. Report the measured number.
2. **Meta description** — count characters; budget 140–160. Check whether the field does
   double duty (meta + subhead + card teaser); if so, say so — it constrains the fix.
3. **Keyword density** — per block: exact-match occurrences ÷ block word count. Target <1%
   combined; flag >2%; >4% is 🔴 on a YMYL page. Also report **rigidity**: the share of
   topic/locality mentions coming from identical fixed phrases. Low variation is a stuffing
   signal even at moderate density.
4. **Duplicate detection** — extract every heading and FAQ question across all pages and
   compare. Near-identical questions answered in full on two pages = cannibalization, with an
   explicit canonical-owner recommendation.
5. **Schema verification** — grep the codebase for the type before accepting any "emitted as
   structured data" claim. Planned ≠ implemented.
6. **Indexability** — confirm the route is in the sitemap, and that every internal-link target
   named both exists and is indexable.
7. **Field mapping** — verify each proposed title/meta/block has a template field to receive
   it. Copy with no landing field will not ship, whatever its quality.

---

## §7 — Fabrication rules (zero tolerance)

1. **Nothing invented, ever** — no facts, figures, credentials, quotes, or prices absent from
   the client's documentation or a citable source. This binds the audit as much as the content.
2. **Missing data stays missing.** An unconfirmed bio gets a minimal honest page, or no page.
   An invented credential for a real, named person is the most serious finding class in this
   methodology: always 🔴, always escalated, draft or production.
3. **Unvalidated figures carry a visible `[to validate]` tag** through to sign-off, and every
   figure is cross-checked against the validated-figures list. A figure that *differs* from
   the list is 🔴 — two conflicting sources of truth is worse than one unvalidated one.
4. **Praise is earned.** "What this page gets right" lists verified strengths only.

---

## §8 — Cross-page rules

1. **Systemic patterns are documented once**, in `seo-audit-report/_cross-page.md`, and
   referenced from per-page audits — so the fix lands at the source (a template, a process)
   instead of in n hand-edits.
2. **Cannibalization is a site-level property.** One canonical owner per topic; others link
   to it rather than re-answering. Hub pages must not re-answer what their children own.
3. **Sibling consistency is mandatory.** The same process described on a service page and in
   an article must agree on every checkable detail. Divergence is a finding; verified
   agreement is reported as a pass.
4. **Boilerplate duplicated across pages with only the noun swapped** is scaled-content risk:
   consolidate to one owner page plus links.

---

## §9 — Page-type rules

- **Home** — intent is navigational + orientation. Thinness and vagueness are the risks; it
  must not cannibalize the money pages beneath it.
- **Service / product** — verify against the live template's field map; naming consistent with
  documented decisions; higher-risk offerings get stricter framing.
- **Pricing** — never state a figure the client didn't supply; check freshness hard; hidden
  pricing is a business decision, not a finding.
- **Person / practitioner** — E-E-A-T dominates; every credential traced to source;
  unverifiable positioning claims about a named individual are 🔴; low name-term volume is
  expected, not a defect.
- **Condition / problem / topic** — statistical accuracy dominates; risk framing must avoid
  both fear-mongering and false reassurance; stay conservative and guideline-aligned.
- **Article / blog** — author-topic fit checked (does this author plausibly know this?);
  differentiation from the service page checked both ways — complementary is a pass,
  duplicative is a finding.
- **Hub / index** — thinness is the main risk. A hub must add citable value of its own, not
  just list its children, and must not cannibalize them.

---

## §10 — Output format — every per-page audit file

`seo-audit-report/<page-slug>.md`, containing in order:

1. **H1** — page name + route.
2. **Header block** — source audited (branch/path/URL), compared against (files, tools, data
   sources), see-also (`_cross-page.md`).
3. **`## Score: N / 100`** + the five-category table.
4. **Verdict** — 2–4 sentences. Plain. No hedging. Ship / fix-first / block.
5. **Findings** — 🔴 then 🟠 then 🟡, each: verbatim quote or measured evidence → why it
   matters → concrete fix.
6. **What this page gets right** — verified strengths only.
7. **Numbered priority fix list** — ranked by severity × effort, executable top-down.
8. **Open questions** — where a finding needs a decision rather than your verdict.

---

## §11 — Process rules

1. One page = one audit file. Systemic patterns live in `_cross-page.md`. This methodology
   lives here. Never interleave the three.
2. Audits are versioned and delivered through review. Nothing is claimed delivered until it's
   pushed.
3. **An audit never edits the content it audits.** Findings are recommendations; execution is
   agent 2's separate, explicitly approved step. This is not a courtesy — an auditor who
   edits has destroyed the measurement.
4. When a fix depends on a code/template change, scope it as one named engineering ticket.
   Never let another page's audit silently assume it's already done.
5. **End actionable.** If the client executed only the top three items of each page's list,
   the site should measurably improve. If a finding doesn't change what someone does next,
   cut it.
