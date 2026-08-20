# PROGRESS.md — AI Makers Website v2

> Shared progress tracker & cross-session memory. **Read this first at the start of every session.**
> Keep it accurate: move items between sections, add a dated Session log entry whenever something changes.
>
> **⚠️ Scope:** this file tracks the *n8n / backend* workstream (Esubalew's).
> For the state of the deployed site — hosting, deploy procedure, repo access,
> bilingual setup, lead capture, consent, content rules — see
> **[HANDOVER.md](./HANDOVER.md)**, which is the authoritative document.

## Project
AI Makers website v2 — Next.js 16 (App Router, Turbopack) marketing site with lead-capture forms that relay to n8n automations. Backend/automation + site-health workstream.

## My role
**Esubalew (Kunta)** — backend / n8n automations / site health. (Frontend & SEO strategy sit with the rest of the team — Othmane, Maneesh.)

## Current status
_(Superseded 2026-07-31 — the lines below described the state on 2026-07-20 and
were misleading by the time the site shipped.)_

The site is **live in production**, self-hosted on the VPS at aimakers.fr (not
Vercel), deployed from `main` — see [HANDOVER.md](./HANDOVER.md).

Leads are **not** dropped: the three routes capture into `public.website_leads`
in the OS (`OS_SUPABASE_URL` / `OS_SUPABASE_ANON_KEY` / `OS_LEAD_INGEST_SECRET`
are all set in the deploy `.env`), and the OS posts them to Slack and feeds the
pipeline. What is still missing is the **n8n relay**: the three
`N8N_*_WEBHOOK_URL` vars are unset in the production `.env`, so nothing reaches
n8n. That, plus the per-node credential check and workflow activation below,
remains this workstream's top priority.

## Done
- _(2026-07-20)_ Got the project running locally: `npm install` (699 pkgs) + `npm run dev`, verified HTTP 200 on localhost:3000.
- _(2026-07-20)_ Audited the three lead API routes and created this tracker.
- _(pre-existing)_ Three lead-capture API routes built with Zod validation: `/api/lead`, `/api/diagnostic`, `/api/catalogue`.

## In progress
- **n8n workflows BUILT (2026-07-20), not yet activated.** 9 workflows created in n8n project *Esubalew Kunta* (`EMURC2a7cq98F8Pa`), targeting Supabase `ai_makers_internal`. Awaiting: per-node credential verification, activation of the 4 live workflows, and swap-in of Slack + Cal.com stubs. See workflow IDs in Key facts.

## To do (mine)
- [x] ~~Build the n8n workflows~~ — DONE 2026-07-20 (9 workflows, see Key facts). Hot-lead rule wired into Diagnostic entry.
- [ ] **Verify credentials per node in n8n UI** — every Supabase HTTP node = `supabase-aimakers` (`Uwyq4zyMsrHDDX4P`); every Gmail node = `Gmail OAuth2 API` (`Q7UEGgHXmqQRSCa0`). The #1 test item: confirm the Supabase `predefinedCredentialType` auth actually works (no 401).
- [ ] **Activate the 4 live workflows** (entry-catalogue, entry-lead, entry-diagnostic, j2-followup-sweep). Leave Cal.com inactive.
- [ ] **Point the 3 Vercel webhook env vars at the n8n production URLs** (base `https://othmaneaimakers.app.n8n.cloud/webhook/`): `catalogue`, `lead`, `diagnostic`.
- [ ] **Fix the "silent success" route behavior** (site-side, separate from n8n) — make the 3 routes `await` n8n and check `res.ok`; stop returning `{success:true}` on failure. The n8n side already responds fast-200-on-capture to support this.
- [ ] Swap in the stubs when ready: Slack token (in `Subworkflow: Slack notify lead`), real Cal.com link (in `Subworkflow: Render brand email`), and activate the Cal.com booking webhook.
- [ ] Set a workflow-level Error Workflow in the n8n UI on the unattended workflows (needs an Error-Trigger handler workflow first).

## Known bugs (mine to fix)
- **Diagnostic wizard `removeChild` crash on submit** — `src/components/sections/diagnostic/diagnostic-wizard.tsx` does a hard `window.location.href = "/diagnostic-ia/resultat"` on submit while framer-motion `AnimatePresence` (mode="wait") is mounted → React teardown race throwing "Failed to execute 'removeChild'". **Dev-only overlay; the lead always saves and navigation still happens.** Workaround for demos: run a production build (`npm run build && npm start`) — no overlay. Proper fix pending (e.g. router.push + guard AnimatePresence, or dismiss animation before nav). Applies to scanner-wizard too (same pattern) — check it.

## Flagged to team (not mine to fix)
- **Staging is indexable** — staging environment is crawlable/indexable; needs noindex or auth. (SEO risk.)
- **No GTM installed** — no Google Tag Manager container on the site. (The old `NEXT_PUBLIC_GA_ID` hook in `layout.tsx` has since been removed: GA4 now goes through GTM, which is consent-gated.)
- **City-page canonical strategy mismatch** — canonical tags on city pages don't match intended strategy. **Ask Maneesh.**

## Open questions
- (Maneesh) What's the intended canonical strategy for the city pages?
- (Othmane/Maneesh) Confirm the hot-lead thresholds (`score >= 12` / `cost >= 10000`) and where hot leads should route (email? CRM? Slack?).
- (Team) Who owns fixing staging indexability and GTM install, and what's the timeline?

## ⚠️ Guardrails (do not violate)
- **Supabase: work ONLY in project `ai_makers_internal` (`vncqaboiklsxyynbiuej`, eu-west-1).** Never touch `gepromed` (`hdvqiiprylrrzrkydtpa`) or any other Supabase project.
- **Do not build (tables/migrations/workflows) until Esubalew explicitly says to.** Design/plan is fine; creating things is not.

## n8n workflows (built 2026-07-20 — instance `othmaneaimakers.app.n8n.cloud`, project `EMURC2a7cq98F8Pa`)
| Workflow | ID | Role |
|---|---|---|
| Subworkflow: Supabase upsert lead | `mom8CfBZPlA5BoNI` | RPC `upsert_lead(p)` — durable capture |
| Subworkflow: Render brand email | `nSZxwfLDdkaiy6DJ` | branded HTML + **CALCOM_LINK** constant (Code node) |
| Subworkflow: Slack notify lead | `2vpEsQtn88U4ViBH` | **STUB** (NoOp) — swap for Slack node |
| Subworkflow: Lead Core | `K0JvSubr4e8fqkE8` | upsert → followup insert → Slack notify |
| Entry: Catalogue lead | `fQS4YCWp3LG5iS5E` | POST /webhook/catalogue |
| Entry: Lead | `hnb3uuiUJxX0awMA` | POST /webhook/lead (source content-map) |
| Entry: Diagnostic lead | `noDVYscwAuCv0oyL` | POST /webhook/diagnostic (is_hot + HOT ping) |
| Workflow: J+2 follow-up sweep | `SFz7KuZgAkXbj4xX` | daily 09:00, reads `v_due_followups` |
| Workflow: Cal.com booking webhook | `9f1cKS4Zr8mpQO69` | **INACTIVE stub** — sets meeting_booked |

Credentials used: Supabase `supabase-aimakers` (`Uwyq4zyMsrHDDX4P`, type supabaseApi) · Gmail `Gmail OAuth2 API` (`Q7UEGgHXmqQRSCa0`). All Supabase calls go via HTTP Request + `predefinedCredentialType: supabaseApi` to PostgREST (`https://vncqaboiklsxyynbiuej.supabase.co/rest/v1/...`). Supabase objects: tables `leads`, `followup_queue`; view `v_due_followups`; function `upsert_lead(p jsonb)`.

## Key facts / reference
**Env vars (server-side, set in Vercel):**
- `N8N_LEAD_WEBHOOK_URL` — used by `/api/lead`
- `N8N_DIAGNOSTIC_WEBHOOK_URL` — used by `/api/diagnostic`
- `N8N_CATALOGUE_WEBHOOK_URL` — used by `/api/catalogue`

**API routes:**
- `src/app/api/lead/route.ts` — payload: `leadId, firstName, email, company, website, source, sector, teamSize, pains[], timestamp`. ID prefix `lead_`.
- `src/app/api/diagnostic/route.ts` — payload: `leadId, firstName, email, score (/20), level, sector, teamSize, costPerMonth, quickWins, source, timestamp`. ID prefix `diag_`.
- `src/app/api/catalogue/route.ts` — payload: `leadId, firstName, lastName, email, company, formation, source, timestamp`. ID prefix `cata_`.

**Zod schemas:** `src/lib/schemas/{lead,diagnostic,catalogue}.ts`

**PDF assets (public downloads):**
- `public/docs/catalogue-formations-aimakers-2026.pdf`
- `public/docs/playbook-ai-first-aimakers.pdf`

**Hot-lead rule (for n8n diagnostic workflow):** hot if `score >= 12` OR `costPerMonth >= 10000`.

**Run locally:** `npm run dev` → http://localhost:3000 (Next.js 16.1.6, Turbopack). Build dir is `.next.nosync` locally, `.next` on Vercel.

## Site audit findings (2026-07-21, staging build)
- **Dead links:** 1 — blog `meilleures-formations-ia-entreprise.md` links to `/formation-ia-entreprise/acculturation-ia` (404). Nav/footer (60 links) all valid. 0 missing images.
- **Visible placeholders (must fix):** "Capture à venir" tiles on `/seo-geo` and `/ai-operating-system` (need Othmane screenshots; marked `TODO Othmane` in code).
- **Console errors (every page):** shared component renders SVG `<linearGradient>` with undefined x1/x2 (cosmetic, not visible to users). Frontend fix.
- **Diagnostic submit:** dev-only React `removeChild` crash (hard `window.location.href` during AnimatePresence); lead still saves + navigates; prod build clean. Same pattern in scanner-wizard. See Known bugs.
- **Score copy bug:** site says "score sur 24"; engine maxes at **/20**. Align copy to 20 (or add 2 questions).
- **Real Cal.com link found in footer:** `https://cal.com/othmane-halim-5lo7uc/30min` — swap into n8n `Subworkflow: Render brand email` to replace the placeholder.
- Brand gut-check: PASS (professional, on-brand). PageSpeed deferred to real domain + no-index.

## Lead scoring (from src/lib/diagnostic-config.ts + diagnostic-scoring.ts)
- Maturity score = 10 scoring questions × (0/1/2) = **max 20**. Levels: 0-5 Pré-démarrage, 6-10 Expérimentation, 11-15 Structuration, 16-20 Avancé. 5 radar dims (2 q each): Vision, Cas d'usage, Formation, Infrastructure, Maturité opérationnelle.
- Cost of inaction €/mo = teamCount × 7h/wk × 4.3wk × €35/h. teamCount map: 0-2→5, 3-10→15, 11-50→35, 50+→80.
- Hot rule: `score >= 12 OR cost_per_month >= 10000`.

## Language status
- Site is **FR only**. No i18n lib, `<html lang="fr">` hardcoded, no `/en` routes. EN = a scoped phase-2 project (i18n + full translation + hreflang).

## Fixes applied (2026-07-21)
- **Silent-success FIXED** (site): new `src/lib/relay-to-n8n.ts` helper (await + 15s timeout + `res.ok` check). All 3 routes (`lead`, `diagnostic`, `catalogue`) now await n8n and return **502** with a French error on failure/missing-config instead of fake `{success:true}`. Client forms already surface `!res.ok` as an error. Verified: valid submit → 200 in ~6s; unreachable → 502. NOTE: forms now take ~6s (n8n's synchronous capture chain: upsert→followup→slack→respond). Fine on warm self-hosted n8n; could optimize n8n to respond right after the upsert if snappier forms are wanted.
- **Cal.com real link swapped** into `Subworkflow: Render brand email` (`nSZxwfLDdkaiy6DJ`) Code node: `https://cal.com/othmane-halim-5lo7uc/30min`. Republished. Placeholder gone from all emails.
- **Dead blog link fixed**: `meilleures-formations-ia-entreprise.md` `acculturation-ia` (404) → `/formation-ia-entreprise/formation-ai-champions` (text "AI Champions").
- **Quiz "/24" → "/20"**: `footer.tsx` + `site-config.ts` diagnostic teasers now say 20 (matches the 10-question /20 engine). Left the paid AI-Scan-audit "/24 points" copy alone (separate product, marketing decision). Verified live.
- **Gradient console error FIXED**: `fleet.tsx` ConnectorPulse `motion.linearGradient` was missing initial coords → `x1/x2 undefined` on first paint (homepage only, 4 msgs). Added `initial={{ x1: 0, x2: 0 }}`. Verified: 0 errors, beams still render.
- **Dev note:** Turbopack HMR was not applying edits on Windows; had to kill the dev server + clear `.next.nosync` + restart to pick up source changes. Watch for this — restart dev after edits if changes don't appear.

## Session log
- **2026-07-21 (8)** — Dropped Slack per Maneesh (leads live in Supabase → shown in the internal OS instead). Removed all Slack calls: Lead Core (normal notify + followup-fail alert), 3 entries (email-fail alerts), Diagnostic HOT ping (is_hot column covers it). Archived `Subworkflow: Slack notify lead` (`2vpEsQtn88U4ViBH`). Added Supabase `leads.email_status` column ('pending'/'sent'/'failed') + wired each entry: Gmail success → mark 'sent', Gmail failure → mark 'failed'. Caught & fixed a regression: earlier `setNodeCredential` calls had stripped the Gmail nodes' `resource`/`operation`/`emailType` (emails would've sent as raw text) — restored on all 3. Republished the 4 workflows. Verified end-to-end: catalogue test lead → captured + `email_status='sent'`. Cleaned test rows.
- **2026-07-21 (7)** — Applied the agreed fixes: silent-success (await+502 via new relay-to-n8n helper), real Cal.com link into n8n emails (republished render SW), dead blog link, quiz /24→/20 teasers, and the homepage gradient console error (fleet ConnectorPulse initial coords). Verified each. Cleaned Supabase test rows (tables empty for demo).
- **2026-07-21 (6)** — Ran the staging design/visibility sanity check Maneesh asked for (static dead-link/asset sweep via Explore agent + live browser walkthrough via gstack browse on localhost:3000). Findings + lead-scoring writeup captured above. Wrote a forwardable reply for Maneesh covering the audit, his questions (canonical, Slack, CRM, FR/EN, n8n concern), and the scoring table. Found the real Cal.com link in the footer.
- **2026-07-20 (5)** — First successful END-TO-END test on localhost. Set `.env.local` with the 3 n8n webhook URLs, ran dev on :3000 (killed a stale prev-session server holding the port/lock). Published the 4 sub-workflows (required before the entries could activate); 3 entry webhooks now active. POSTed a diagnostic lead (kunta@aimakers.fr) through the real local route → n8n → Supabase: `leads` row created with is_hot=true (score 14), `followup_queue` scheduled for J+2. Full chain green. Email delivery leg to be confirmed in the inbox. Ready for team demo on localhost.
- **2026-07-20 (4)** — Diagnosed "No tables in schema": read-only checked both Supabase projects — `ai_makers_internal` was empty (0 tables/migrations) and `gepromed` had only its own unrelated schema (incl. a different `leads` table). The migration had never run on either. With Esubalew's go, applied migration `leads_automation` to `ai_makers_internal` ONLY. Verified: 2 tables + view + `upsert_lead()` (17 cols on leads). Smoke-tested `upsert_lead` merge logic (lowercase/dedupe, no-null-on-resubmit, no is_hot downgrade) — all pass; test row cleaned up. Schema now matches what the workflows expect.
- **2026-07-20 (3)** — BUILT all 9 n8n workflows (Option B + C-seed). Supabase tables/view/upsert_lead confirmed created by Esubalew in `ai_makers_internal`; Supabase credential added in n8n. Wired Gmail + Supabase creds per node (HTTP predefined-type creds needed explicit `setNodeCredential`). Verified connection graphs (caught + fixed a Catalogue mis-wire where Respond 500 landed on the email-fail output instead of Lead Core's capture-fail output). Durable-capture-first + fast-200 + validation-400/capture-500 all in place. Slack + Cal.com left as isolated stubs. Not yet activated — pending credential verification + activation.
- **2026-07-20 (2)** — n8n design brainstorm. Read all 3 route files + Zod schemas; confirmed exact payloads. Found 2 discrepancies vs. the brief: diagnostic sends `score` (not `totalScore`) and does NOT forward `answers`; `/api/lead` `source` is a 6-value enum needing a Switch. Key finding: routes call n8n fire-and-forget and ignore the response, so the "silent success" fix needs a SITE-side route change too (await + check status) — n8n alone can't fix it. Compared 3 architectures, recommended Option B (grow-into-C) + scheduled-sweep J+2. Wrote docs/n8n-workflow-design.md. No build yet — awaiting approval + credentials.
- **2026-07-20** — First session on the tracker. Ran the project locally (npm install + dev, HTTP 200). Audited the 3 lead API routes; confirmed the "silent success" pattern (all routes return `{success:true}` regardless of webhook delivery) and that all 3 `N8N_*_WEBHOOK_URL` env vars are unset. Created PROGRESS.md with current backlog. Note: previous session's background dev server was reported stopped.
