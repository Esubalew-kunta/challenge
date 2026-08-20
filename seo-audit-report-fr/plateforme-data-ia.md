# Plateforme Data & IA — `/plateforme-data-ia`

**Source audited:** `[FR] website-content/plateforme-data-ia/plateforme-data-ia.md`
**Compared against:** `src/app/plateforme-data-ia/page.tsx`, `src/components/shared/service-page.tsx`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt`; Ahrefs (France, FR, 2026-07).
**See also:** `_cross-page-findings.md` (in-progress-case tagging).

## Score: 88 / 100

| Category | Score |
|---|---|
| E-E-A-T & Trust Signals | 22 / 25 |
| Factual & Claim Accuracy | 22 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 14 / 15 |

## Verdict
Ship. A clean, honest support page: a real medallion-architecture explainer that doubles as citable GEO content, a genuine (if unnamed) in-progress case kept factual, and full schema. Minor polish only — the H1 carries no keyword, the meta sits at the ceiling, and the case numbers need a validation gate.

## Findings

### 🟡 H1 carries no keyword — the primary lives only in the intro/section titles
H1 (kept live): `Vos données valent de l'or. Encore faut-il les brancher.` — a strong brand-voice line, but "plateforme data" (the primary) appears nowhere in it. The answer-first intro and section titles ("Vos silos, branchés dans un seul socle") carry the term.
- **Why it matters:** §1.3 wants the H1 to match intent and ideally hold the primary keyword; here it relies on the metaphor. Low stakes — the term is well-distributed below — but the H1 gives up an easy on-page signal.
- **Fix:** optional — keep the metaphor as a kicker and add a keyword-bearing H1/H2 ("Une plateforme data & IA pour unifier vos silos"), or accept the trade for brand voice. Not blocking.

### 🟡 In-progress case cites specific numbers about an unnamed client
§4.4: "Un leader marocain de l'export agricole : 4 500 employés, 20 ans de données, 3 systèmes… 15 agents… couche Bronze livrée en avance." Client unnamed, "étude de cas complète en cours de validation client," tagged `[to validate]`.
- **Why it matters:** honest handling — no outcome/ROI is fabricated, only scope is described, and it's tagged. But the specifics ship live about an unidentified client.
- **Fix:** confirm the figures (4 500 / 20 ans / 3 systèmes / 15 agents) and the client's consent to be described before the validation gate lifts; keep `[to validate]` visible until then.

### 🟡 Keyword volume slightly off; meta at the length ceiling
§2 lists `plateforme data` = 150; Ahrefs FR (2026-07) returns **200 (KD 0)**. The proposed meta is 159 chars — inside 140-160 but with zero headroom (French expands on any edit).
- **Fix:** correct to 200; trim the meta a few chars for safety (e.g. end on a CTA instead of "Tout vous appartient").

## What this page gets right
- **Excellent GEO explainer:** the answer-first paragraph defines "plateforme data d'entreprise" and "architecture médaillon" (Bronze/Silver/Gold) in the first 60 words — a rare, low-competition, highly citable concept anchor. The four-step "déroulé" gives LLMs a clean list to quote.
- **Honest keyword strategy:** the draft rejects the too-thin brief heads (`data foundation for ai`, `rag`) and targets the exact-match `plateforme data` plus `data engineering` and the citable `architecture médaillon`. Sound for a support page.
- **Real, license-honest stack named** (PostgreSQL, Docker, Airflow, Power BI, Claude, n8n) with "sans coût de licence caché" and "Rien n'est migré, rien n'est remplacé" — first-hand operator signal.
- **Trust anchors right for this buyer:** data sovereignty + total ownership (infrastructure, pipelines, agents, docs) addressed head-on, plus the "sans DSI requise" objection.
- **Canonical figures** (+50, +200, 9,6/10) trace to `llms.txt`/bookingProof.
- **Schema genuinely implemented:** `BreadcrumbList` + `Service` + `FAQPage` (via ServicePage). Route in `sitemap.ts`; internal links (`/ai-operating-system`, `/ai-transformation`, `/etudes-de-cas`, `/contact`) all valid.
- **Stacked negations de-stacked, signature lines kept** ("On ne vous demande pas des données propres : on vous les rend propres").

## Priority fix list
1. **(🟡, low effort — needs client)** Validate the agri-export case numbers and consent; keep `[to validate]` until then.
2. **(🟡, trivial)** Correct `plateforme data` to 200; trim the meta for headroom.
3. **(🟡, optional)** Add a keyword-bearing H1/H2 if brand voice allows.

## Open questions
- Are the in-progress case figures (4 500 / 20 ans / 3 systèmes / 15 agents) confirmed, and does the client consent to being described (even unnamed)?
