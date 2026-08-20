# HANDOVER — aimakers.fr (website v2)

> State of the site as deployed. Update this file on every push and every merge.
> Written in English by convention, even though the site and the code comments
> are in French.
>
> Last updated: **2026-08-19**.

---

## 1. Where it runs

aimakers.fr is **self-hosted on the VPS**. It is not on Vercel, despite the repo
still carrying Vercel wiring (`@vercel/analytics`, `.vercelignore`, and a
`VERCEL`-conditional `distDir` in `next.config.ts`).

| | |
|---|---|
| Repo | `ManeeshBehera/ai-m-website-v2`, deployed from **`main`** |
| Checkout on the box | `/opt/ai-makers/apps/website/app` |
| Container | `aimakers-web`, Next standalone on `:3000`, `web` network |
| Compose project | `aimakers-website` — **pinned, load-bearing** |
| Edge | Caddy: `aimakers.fr` → `127.0.0.1:8101`; `www.` → 301 to apex |

The compose project name is pinned in `docker-compose.yml`. Without it Compose
derives the name from the directory (`app`) and **replaces the OS's containers**.
Do not remove it.

### Tenant port — `127.0.0.1:8101`

Public traffic is routed by **Caddy**; nothing reaches this app directly from the
internet. Caddy runs with host networking and joins each tenant over the host
loopback, so the website's entry point is the published binding

```yaml
ports:
  - "127.0.0.1:8101:3000"
```

The container itself listens on **3000** internally. The OS is a separate tenant
on a **different** port, currently `127.0.0.1:8103`.

This binding is **intentional tenant isolation and must not be removed**. Two
tenants claiming the same port fail loudly at startup; two tenants reachable by
a shared container name failed silently, serving a 200 from the wrong site. The
`127.0.0.1` prefix is load-bearing too — bound on `0.0.0.0` the port would be
reachable from the internet, bypassing Caddy and its TLS.

Local HTTP verification on the VPS therefore uses **`http://127.0.0.1:8101`**,
never `localhost:3000` — 3000 is the in-container port and nothing listens on it
on the host.

Canonical host is the **apex**. `rythmologue.com` on the same box canonicalises
on `www` instead — the two are deliberately opposite, it is not a mistake.

### Deploy

```bash
cd /opt/ai-makers/apps/website/app
git fetch origin main && git checkout -B main origin/main
docker compose build web && docker compose up -d web
```

There is no auto-deploy. A restart alone is not enough for any
`NEXT_PUBLIC_*` change — those are baked in at build time, so rebuild.

---

## 2. Repo access (this trips up every new session)

- **Push** uses the SSH alias `github-aimv2` (deploy key). Plain `git@github.com`
  will not work — the global GitHub SSH identity belongs to another project.
- **`gh` cannot create PRs here.** The box's PAT is fine-grained and 404s on this
  repo. Push the branch and open the PR by hand in the browser. This is accepted
  as-is (the manual step is a deliberate human check), so don't try to work
  around it.
- **Othmane's upstream repo** (`othmane-droid/aimakers-site`) is readable through
  the SSH alias `github-aimsrc` (read-only deploy key, added 2026-07-30). Add it
  as remote `upstream` to pull the team's work.

---

## 3. Taking changes from Othmane's repo

`othmane-droid/aimakers-site` is where the team authors. Their tree is still
flat (`src/app/a-propos`); ours lives in `(fr)` / `(en)` route groups.

**On 2026-08-02 the upstream history was merged straight into `main`** (via
`yosef/unified`) and it came out clean — no IBM regression, no duplicate routes.
So a merge is possible. It is still not free, and here is what it cost:

1. **Our SERP-trimmed metadata was silently reverted** on the homepage, the FDE
   page and the training catalogue. The explanatory comment above each one
   survived while the value went back — that mismatch is the tell that a merge
   clobbered it, not a person.
2. **A half-applied page fusion.** `/gouvernance-ia` and `/ai-transformation`
   absorbed the content of `/securite` and `/audit-ia-entreprise`, but the two
   source pages stayed live and un-redirected — duplicate content on indexed
   URLs. Finished on 2026-08-02.
3. **The `/offre` redirect came back**, while `/offre` is also advertised in the
   sitemap and `llms.txt`. See §8 — the redirect is the error, not the page.
4. **Nothing upstream knows about the English side.** They have no `(en)` pages,
   so anything shaped by locale (nav indices, `ROUTE_MAP`, `EN_PUBLISHED`) is
   theirs to break and ours to notice.

After any merge from upstream, check those four things before anything else.
When hand-porting instead, compare file *contents* against the merge-base — a
"which files overlap?" check on path names finds nothing, because the route-group
rename makes every one of our edited pages look untouched.

```bash
git remote add upstream git@github-aimsrc:othmane-droid/aimakers-site.git
git fetch upstream
MB=$(git merge-base origin/main upstream/main)
git diff --stat $MB upstream/main          # what they changed
git diff $MB origin/main -- <file>         # what WE changed in the same file
```

Verify afterwards: zero IBM in source **and** generated HTML, `/en/*` still
`lang="en"` with no French leak, build clean.

**Coordinate before porting.** On 2026-08-02 a port of upstream's nav
simplification was thrown away because the same work had just landed on `main`
and been partly reverted there on purpose. Check `git log origin/main` first.

## 4. Bilingual setup (FR default, EN behind a gate)

- Two root layouts via route groups: `src/app/(fr)` (43 pages) and
  `src/app/(en)` (2 pages). URLs for FR are unchanged; EN is path-prefixed
  `/en/<english-slug>`.
- `src/lib/i18n.ts` — `ROUTE_MAP` (58 FR→EN slug pairs), `EN_PUBLISHED`,
  `alternateFor()`, `localeFromPath()`.
- **`EN_PUBLISHED` is the gate.** It currently holds only `/en/capacity` and
  `/en/security`. hreflang and the language switcher read from it, so an EN page
  that is built but not listed is simply not advertised. `resolveHref()` in
  `src/lib/nav.ts` falls back to the FR page for any EN route not yet published —
  that is what keeps the EN nav from producing dead links.
- `src/lib/ui-strings.ts` — FR/EN chrome dictionary (CTAs, FAQ titles, footer,
  consent banner, badges). `src/lib/site-config.en.ts` — EN nav/mega-menu/footer.
- **Hard rule:** every FR content edit must update the EN copy in the same
  change. EN lives in separate files and fails silently otherwise.

### Client quotes in English

`src/components/shared/cta-section.tsx` holds `TRUST_QUOTE_EN`, a map **keyed by
author name**, not a single string. This is deliberate: the CTA testimonial has
already changed person once (John Volke removed from the data), and a single
constant kept printing Volke's words under the next person's name. No entry for
the current author ⇒ the whole testimonial block is omitted in EN, rather than
inventing a named person's words or leaving a French quote on an English page.

Note that the same client can have **two different quotes** in the data (a
homepage variant and a shorter booking-carousel variant). Translate the one the
component actually renders.

Approved entries: John Volke, Mickaël Mina (approved 2026-07-31).

---

## 5. Lead capture

Leads land in the **OS**, not in a spreadsheet. The OS is the single source of
truth; Notion is import-only.

- `src/lib/capture-lead.ts` — `originFromRequest()` records the page slug
  (`/slug` or `/en/slug`) plus five whitelisted `utm_*` params; `captureLead()`
  writes to `public.website_leads` in the self-hosted Supabase.
- API routes `/api/lead`, `/api/diagnostic`, `/api/catalogue`: capture → relay to
  n8n → `markRelayed()` → `requestLeadNotification()` (Slack). The request
  succeeds if **either** path holds the lead, so an n8n outage doesn't lose it.
- Slack notification is posted by the OS at `/api/cron/leads-notify`, not by the
  site. It must live under `/api/cron/*` — the OS middleware only exempts
  `api/cron` and `api/notion`, and any other path returns HTML instead of JSON.
- From `/leads` in the OS, "prendre en charge" creates the pipeline deal and
  stamps `acted_at` (the delta between arrival and first action).

Full details: `docs/WEBSITE_LEADS.md` in the OS repo.

---

## 6. Analytics & consent

- GTM is **`GTM-PPKQFQZB`** and is **consent-gated**. It is not in the raw HTML —
  it is injected only after consent. Do not hardcode it into a layout.
- `consent-defaults.tsx` runs `beforeInteractive` with everything denied
  (Google Consent Mode v2); `cookie-consent.tsx` is the CNIL banner —
  locale-aware, Refuse and Accept given equal prominence, no dismiss-on-scroll.
- GSC verification lives in one place: `googleSiteVerification` in
  `src/lib/site-config.ts`, rendered by both root layouts. Do not delete it after
  validation — Google re-checks periodically.

---

## 7. Environment (verified 2026-07-31)

`.env` in the deploy checkout:

| Variable | State |
|---|---|
| `OS_SUPABASE_URL` | set |
| `OS_SUPABASE_ANON_KEY` | set |
| `OS_LEAD_INGEST_SECRET` | set |
| `N8N_LEAD_WEBHOOK_URL` | **missing** |
| `N8N_DIAGNOSTIC_WEBHOOK_URL` | **missing** |
| `N8N_CATALOGUE_WEBHOOK_URL` | **missing** |

So leads **do** reach the OS, but nothing relays to n8n. GA4 runs through GTM
(consent-gated); the old `NEXT_PUBLIC_GA_ID` build variable has been removed —
it was read nowhere and only looked like a live knob.
The n8n production URLs are on the base
`https://othmaneaimakers.app.n8n.cloud/webhook/` (`lead`, `diagnostic`,
`catalogue`, `desabonnement`).

---

## 8. Content rules

- **No IBM anywhere** — removed in PR #23 (copy, client logos, trainer bio, the
  FDE page and its JSON-LD, `llms.txt`, `llms-full.txt`, and both logo files).
  Content masters carry a warning banner so it isn't reintroduced during the EN
  port.
- Current figures: **+10 000 professionals trained**, **+50 companies**,
  **+200 systems**, team of **10** ("the output of a team of 60"). Updated
  2026-07-31 from Othmane's repo. Note Gepromed's own headcount is 6 — that is a
  *client's* number and must not be swept up in a find-and-replace.
- `next.config.ts` holds ~57 legacy redirects from the old Framer blog URLs.
  **Never prune them.**
- `/offre` is a real page advertised in `llms.txt` **and** in the sitemap; it
  must not be redirected to `/ai-transformation`. The redirect has been
  reintroduced by a merge once already (2026-08-02).
- `/securite` and `/audit-ia-entreprise` no longer exist. Their content lives in
  `/gouvernance-ia` and `/ai-transformation`; both old URLs redirect
  permanently. `/gouvernance-ia` is the French counterpart of `/en/security`.

---

## 9. Outstanding

- **PLAN-013 independent review:** the FDE category/commercial intent split is
  implemented, but independent SEO and anti-AI-slop audits are still pending.
- **FR-first content rule:** French is the canonical SEO/content market. English
  only mirrors approved French content where a counterpart already exists; it
  must not set French search intent or block French delivery. An EN counterpart
  for `/metiers/ingenieur-ia` is explicitly outside PLAN-013's repair scope.
- **EN port**: 41 of 43 FR pages still have no EN counterpart. EN nav/footer copy
  is authored, not editorially reviewed.
- **n8n webhooks + GA** not configured (section 7).
- `blogs.aimakers.fr` — requested, still dark (no vhost).
- Six FR pages need hand-written meta (sentinel / over-budget / stale master).
- Gated on the owner: the `+70% Sage` figure (blocks `/seo-geo` in both
  languages); the `/playbook-ia` stat wall (88%, 5%, $700B, 300+) needs a source
  or should be cut.
- Caddy's Caddyfile bind mount is detached (inode mismatch) — host edits plus a
  reload silently no-op. Reattaching needs a maintenance window because
  recreating Caddy drops manual tenant network attachments. See the tenant docs.

---

## 10. Session log

- **2026-08-19** — Post-deploy FDE SEO cleanup (`fix/fde-post-deploy-seo-cleanup`).
  The two new FR FDE pages shipped with `| AI Makers` inside their own
  `title`, which the `(fr)` layout template appends again — they rendered as
  `… | AI Makers | AI Makers`. Removed the suffix from the page metadata and
  left the template alone; the EN FDE page had the same duplication and was
  fixed with it. Also neutralised the unsupported FDE day/week delivery
  promises still surfacing on the homepage, the sector pages and the FDE offer
  page ("semaine 1", "J+1", "opérationnel dès le jour 1"): the copy now names
  the dependency — scope, accesses and test users — instead of guaranteeing a
  date. Fixed at the shared source strings (`ui-strings.ts`, `site-config.ts`,
  `offer-pages/fde.ts`) rather than in each consumer, with the EN twins moved in
  the same change. No architecture, routing or infrastructure change; the +200
  company-wide framing, the case-study links and the category ↔ commercial
  cross-links from the approved release are untouched.
- **2026-08-19 (PR #76 final pre-merge repair)** — Addressed the independent
  audit findings without changing the approved page architecture. Both French
  pages now describe `+200 systems` as company-wide delivery experience across
  all engagement models, not as 200 FDE missions, and link that proof treatment
  to the published case-study hub. Neutralised the global navigation promises
  "week 1" and "+20 deployed" with factual category wording. Rewrote the
  commercial page's repeated negative/contrast openings as direct buyer and
  operating guidance. No client attribution or testimonial was added. Final
  independent French SEO and anti-AI-slop re-audits remain pending.
- **2026-08-19 (PR #76 repair)** — Kept the category/commercial ownership split
  while restoring the French FDE page's useful depth: embedded operating model,
  six-step workflow-to-production loop, a six-role comparison, positive and
  negative fit criteria, six skill areas, FAQ, related routes and a restrained
  AI Makers experience signal. The only numeric proof restored is the canonical
  `+200 systems` figure. Client-logo attribution, testimonials and old partner
  or team claims remain held because this repair did not establish their direct
  connection to the FDE service. Salary content/schema, market-growth and
  hiring statistics, ROI figures, fixed timelines, Palantir history and hard
  performance claims remain removed. Strengthened `/metiers/ingenieur-ia` with
  a decision table, an explicit user-testing stage, AI Makers contribution,
  ownership/documentation/handover detail and the same verified experience
  signal. The existing English category page now mirrors the approved French
  structure and meaning; no English commercial route was considered or added.
  Independent French SEO and anti-AI-slop audits remain pending.
- **2026-08-19** — Implemented PLAN-013's first batch. Recentered
  `/forward-deployed-engineer` and `/en/forward-deployed-engineer` on the FDE
  definition, role, skills, role boundaries and operating model. Refactored
  `/metiers/ingenieur-ia` from career/salary intent to the commercial decision
  between internal hiring and deploying an AI Makers FDE; removed its
  `Occupation` and salary schema, salary tables, unverified market figures,
  recruitment-market assertions and time-to-value promises. The commercial
  page now uses `Service` plus decision FAQ schema, describes engagement start,
  process-to-measurement delivery and documentation/transfer without fixed
  timing or ROI claims, and links to Transformation, Offer and AI Operating
  System. Existing client logos and testimonials were not reused as proof here
  because this batch did not revalidate the relationship between every asset
  and the specific FDE offer. No EN Hire FDE route exists in the current i18n
  architecture, so that part remains blocked rather than being assigned a new
  slug. Independent SEO and anti-AI-slop certification remain pending.
- **2026-08-02** — Upstream merged into `main` by the team; the nav
  simplification was then partly reverted there on purpose (Secteurs, Résultats
  and the full À propos menu restored). Finished the two page fusions left
  half-done, removed the reintroduced `/offre` redirect, restored the SERP
  metadata lost in the merge, and caught the English chrome up (it still said
  2 500 trained, a team of 6/40, Diagnostic /24). Hardened the header CTA, which
  read `navItems[1]` by index and 500'd every English page whenever the nav bar
  changed shape.
- **2026-07-31** — Owner-approved EN translation of Mickaël Mina's quote; EN CTA
  testimonial visible again (`feat/en-mina-quote`).
- **2026-07-30** — Ported Othmane's work from upstream in two passes:
  design (PR #24: watercolour wash, hero/method/value-prop, header) and content
  (PR #25: +10 000, team of 10, Sage case anonymised, Gepromed/Cardio/Bio Valley
  logos, John Volke removed, "Audit IA" + "Agence IA" dropped from the menus).
  Deployed together; 88/88 pages verified 200 with zero IBM.
- **2026-07-29** — IBM removed site-wide (PR #23). Site went live self-hosted on
  the VPS, off Framer.
