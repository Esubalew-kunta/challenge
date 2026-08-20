# n8n Lead Automation — Design Doc (for review, not yet built)

**Author:** Esubalew · **Date:** 2026-07-20 · **Status:** DRAFT — awaiting approval before any build.

This document proposes how to structure the three lead-form automations in n8n. No workflow JSON yet. Read, mark up, approve, then I build.

---

## 1. Reality check — what the site actually sends

I read the three route files and their Zod schemas. Two things differ from the brief; the design is built around what the code *really* does, not the brief.

### 1a. Confirmed payloads (exactly what each webhook receives)

| Webhook env var | Route | JSON fields sent to n8n |
|---|---|---|
| `N8N_CATALOGUE_WEBHOOK_URL` | `/api/catalogue` | `leadId`, `firstName`, `lastName`, `email`, `company`, `formation`, `source`, `timestamp` |
| `N8N_LEAD_WEBHOOK_URL` | `/api/lead` | `leadId`, `firstName`, `email`, `company`, `website`, `source`, `sector`, `teamSize`, `pains[]`, `timestamp` |
| `N8N_DIAGNOSTIC_WEBHOOK_URL` | `/api/diagnostic` | `leadId`, `firstName`, `email`, **`score`** (0–20), `level`, `sector`, `teamSize`, `costPerMonth`, `quickWins[]`, `source`, `timestamp` |

### 1b. Two discrepancies vs. the brief — flag before building

1. **Diagnostic sends `score`, not `totalScore`; and it does NOT send `answers`.** The brief listed `answers` and `totalScore`. The route ([diagnostic/route.ts:28-40](../src/app/api/diagnostic/route.ts#L28)) maps `data.totalScore → score` and never forwards the raw `answers` object. So the HOT rule inside n8n must read `score` and `costPerMonth`. If we ever want per-question answers in the CRM, the *route* has to change first — not n8n.
2. **`source` is the routing key and it has many values.** `/api/lead`'s `source` is an enum: `playbook | brief | geo-audit | scanner | challenge | newsletter`. "Email the playbook PDF" is only the `playbook` case. The lead workflow needs a Switch on `source`, not a single email. (`challenge` is described in the schema as a weekly email sequence — that's a separate future build; for now it should at least log + Slack + not error.)

### 1c. THE critical constraint — the site ignores the webhook response

All three routes call n8n **fire-and-forget** and return `{ success: true }` regardless:

```ts
fetch(n8nWebhookUrl, {...}).catch(() => { /* Non-blocking */ });
// ...
return NextResponse.json({ success: true, leadId });
```

**Consequence:** whatever status code n8n's `Respond to Webhook` returns, the browser never sees it. n8n returning a clean 500 does **not** fix the "form shows success when nothing sent" bug — the route already threw the response away.

**So "never fake success" is a two-part fix, and only part of it lives in n8n:**
- **Site-side (separate task, my backlog):** make the route `await` the n8n call, check `res.ok`, and return failure to the browser when delivery fails. This is the only thing that stops the *browser* from lying. Recommend a fast **202-style contract**: route awaits n8n just long enough to confirm the webhook *received* the lead (n8n responds 200 immediately on receipt), then n8n does the slow work async. If n8n is unreachable, route returns 5xx and the form shows a real error + we still capture the email somewhere durable.
- **n8n-side (this doc):** guarantee that once a lead is *received*, it is never silently lost — durable capture first, then best-effort email/CRM/Slack, and a loud alert if any step fails. Covered in §4.

I'll write the doc's workflows to respond 200 *fast* on receipt (after durable capture) so the future route change can rely on it.

---

## 2. Architecture options

All three share the same tail: **capture → email the right asset → upsert Attio → Slack → schedule J+2 follow-up**. The only real differences are the front (which asset, HOT logic for diagnostic). That shared tail is the whole architecture question.

### Option A — Three fully separate workflows

Each webhook is one self-contained workflow that does everything inline.

- 👍 Simplest mental model; each workflow readable top-to-bottom; no cross-workflow wiring.
- 👍 Blast radius contained — breaking catalogue can't break diagnostic.
- 👎 **Attio + Slack + J+2 logic is copy-pasted three times.** The exact drift trap the sub-workflow skill warns about: fix a bug in the Attio call, miss the third copy, "identical" copies diverge.
- 👎 Changing the Slack format or the follow-up delay = edit in three places.
- **Debugging:** easy per-flow, but a systemic bug (Attio field rename) is three separate fixes.

### Option B — One "Lead Core" sub-workflow, three thin entry workflows

Three tiny entry workflows (webhook → validate → send asset) that all call **one shared sub-workflow** `Subworkflow: Lead Core` for the common tail (Attio + Slack + schedule J+2).

- 👍 Common logic lives **once**. Attio/Slack/follow-up fixes are one edit, everywhere.
- 👍 Entry workflows stay short and specific (each only knows its own asset + HOT logic).
- 👍 Testable: run `Lead Core` alone with pinned data; swap Attio→HubSpot behind its contract without touching entries.
- 👎 One more moving part; a bug in `Lead Core` affects all three (mitigated by it being small and well-tested).
- 👎 Slightly more indirection when reading end-to-end (open two workflows).
- **Debugging:** systemic bugs are one fix; per-flow bugs stay in the small entry workflow. Net easier than A at scale.

### Option C — Granular shared sub-workflows (Attio, Slack, Follow-up as separate functions)

Like B, but the tail is split into **three** reusable functions: `Subworkflow: Attio upsert lead`, `Subworkflow: Slack notify lead`, `Subworkflow: Schedule J+2 follow-up`. Entry workflows call each directly, or `Lead Core` orchestrates them.

- 👍 Maximum reuse — any *future* workflow (webinar signup, newsletter) reuses `Attio upsert` and `Slack notify` immediately.
- 👍 Each function independently testable and replaceable; cleanest separation.
- 👎 Most upfront wiring; more workflows to name, describe, and keep discoverable.
- 👎 Over-engineered if these three forms are the whole universe forever.

---

## 3. Recommendation — **B, built so it can grow into C**

Build **Option B** now: three thin entry workflows + one `Subworkflow: Lead Core`. **Inside** `Lead Core`, isolate the two most-reused concerns — **Attio upsert** and **Slack notify** — as their own sub-workflows from day one (the C seed). Keep the J+2 scheduling inside `Lead Core` for now.

**Why:**
- The common tail is genuinely identical across all three forms → it must live once (rules out A). The sub-workflow skill's decision tree points straight here: a 5+ node chunk that's conceptually one thing and reused = extract.
- Attio and Slack are the two concerns *most* likely to be reused by the next form and *most* likely to change (field renames, channel changes), so they earn their own boundary now. That's the cheap 80% of C's benefit.
- Full C (extracting the follow-up scheduler too) is speculative until there's a second scheduling pattern — defer it. Easy to lift out later without touching callers.

**Net shape:**

```
Entry: Catalogue  ─┐
Entry: Lead        ─┼─→ Subworkflow: Lead Core ─→ Subworkflow: Attio upsert lead
Entry: Diagnostic  ─┘        │                  └→ Subworkflow: Slack notify lead
                             └─ (J+2 scheduling, inline for now)
```

### 3a. How J+2 follow-up should work — scheduled sweep, not a 2-day Wait

Two ways to do "email in 2 days if no meeting booked":

- **Wait node (2 days) inside the execution.** Simple, but keeps an execution suspended for 48h, is awkward to cancel when they *do* book, and every in-flight lead is a parked execution. Fragile and hard to reason about at volume.
- **✅ Recommended: a durable ledger + one daily scheduled sweep.** `Lead Core` writes each lead to an **n8n Data Table** `followup_queue` with `email`, `firstName`, `source`, `due_at = now + 2 days`, `meeting_booked = false`, `followup_sent = false`. A separate **`Workflow: J+2 follow-up sweep`** runs daily (Schedule Trigger), selects rows where `due_at <= now AND meeting_booked = false AND followup_sent = false`, sends the value email, sets `followup_sent = true`. A **Cal.com booking webhook** (small workflow) flips `meeting_booked = true` when they book — which naturally suppresses the follow-up.

Why the ledger wins: cancellation is just a flag, no suspended executions, the whole follow-up state is inspectable in one table, and the sweep is trivially testable. Data Table keeps this scheduling bookkeeping out of Attio (Attio stays the clean CRM of record; we still upsert the booking status there too if wanted).

> Open decision for you: is "meeting booked" tracked via a **Cal.com webhook** (cleanest) or do we poll Cal.com? Cal.com webhook is strongly preferred. Need the Cal.com plan that allows webhooks.

---

## 4. Node-by-node plan (recommended approach)

**Conventions applied throughout** (from n8n error-handling guidance):
- Every network node (Gmail, Attio HTTP, Slack, Data Table) gets `retryOnFail: true, maxTries: 3, waitBetweenTries: 5000` to absorb transient 429s/blips before anything is treated as a real failure.
- **Durable-capture-first ordering:** the very first thing after validation is writing the lead to the `followup_queue` Data Table (and/or Attio). Only after the lead is safely stored do we attempt email/Slack. A later email failure can then never lose the lead — the sweep and Slack alert catch it.
- Each entry workflow responds **200 fast on successful receipt** (right after durable capture), so the future route change can trust it. Slow work (email, follow-up scheduling) continues after the response via the async tail.
- Validation failure → **400** with `{error:"validation_error", message, details}`, checked up front with the Set-based schema validator, never via error outputs.
- Genuine processing failure (Attio down, Gmail auth broken) → does **not** fake success: it triggers the workflow-level **error workflow** which posts to a `#leads-alerts` Slack channel with lead email + which step failed, so a human can recover the lead. (Only the user can set the error workflow in the UI — I'll flag it.)

### 4a. Entry: Catalogue  (`Webhook: catalogue`)
```
Webhook (POST, path /catalogue)
 → Set: Validate Schema (firstName, email required)         ── invalid → Respond 400
 → Subworkflow: Lead Core  (email, firstName, company, source="catalogue", asset="catalogue_pdf")
       (Lead Core does: durable capture → Attio → Slack → queue J+2)
 → Gmail: send Catalogue email (attach catalogue-formations-aimakers-2026.pdf + Cal.com link)   [retryOnFail]
 → Respond 200 { received: true, leadId }
 (any node error output) → Respond 500 {error:"internal_error"} + error workflow fires Slack alert
```
Note: whether the PDF is a Gmail attachment or a hosted link is a decision in §5. Attachment = simplest; hosted link = smaller emails, click tracking.

### 4b. Entry: Lead  (`Webhook: lead`)  — the multi-source one
```
Webhook (POST, path /lead)
 → Set: Validate Schema (email required; source in enum)     ── invalid → Respond 400
 → Switch on `source`:
      playbook   → Gmail: send Playbook email (playbook-ai-first-aimakers.pdf + Cal.com)  [retryOnFail]
      brief      → Gmail: send Brief email
      geo-audit  → Gmail: send GEO-audit confirmation (company-based)
      scanner    → Gmail: send scanner report (uses sector/teamSize/pains)
      challenge  → (v1: no email yet — log + continue; weekly sequence is a later build)
      newsletter → Gmail: send newsletter opt-in confirmation
      (default)  → route to error alert: unknown source, don't silently drop
 → Subworkflow: Lead Core (email, firstName, company, website, source, sector, teamSize, pains)
 → Respond 200 { received: true, leadId }
 (error output) → Respond 500 + error workflow Slack alert
```

### 4c. Entry: Diagnostic  (`Webhook: diagnostic`)  — the one with HOT logic
```
Webhook (POST, path /diagnostic)
 → Set: Validate Schema (email, score, costPerMonth required)  ── invalid → Respond 400
 → Set: compute isHot = (score >= 12) OR (costPerMonth >= 10000)
 → Gmail: send diagnostic result email (score /20, level, quickWins list, Cal.com link)  [retryOnFail]
 → Subworkflow: Lead Core (email, firstName, source="diagnostic", + score/level/sector/costPerMonth/isHot)
 → IF isHot → Slack: HOT-lead alert to #sales (email, score, costPerMonth, "book now")   [retryOnFail]
           (normal Slack notification still happens inside Lead Core; this is the extra HOT ping)
 → Respond 200 { received: true, leadId }
 (error output) → Respond 500 + error workflow Slack alert
```

### 4d. `Subworkflow: Lead Core`  (the shared tail)
```
Execute Workflow Trigger — Define Below, typed inputs:
   email(string), firstName(string), company(string), source(string),
   isHot(boolean, default false), extra(object)   // extra = diagnostic/scanner fields
 → Subworkflow: Attio upsert lead   (find-or-create person + company, write source, score, isHot)  [retryOnFail]
 → Data Table followup_queue: insert row (email, firstName, source, due_at=now+2d,
        meeting_booked=false, followup_sent=false)                                   [retryOnFail]
 → Subworkflow: Slack notify lead   (post to #leads: name, email, company, source, HOT badge)  [retryOnFail]
 → Return { ok: true, attioId }
 (any error) → return { ok:false, error } AND let the error workflow catch it for the alert
```
`Subworkflow: Attio upsert lead` and `Subworkflow: Slack notify lead` are thin, single-purpose, reusable — the C-seed. Both use "Define Below" typed inputs and return `{ok, id}`.

### 4e. `Workflow: J+2 follow-up sweep`  (unattended, scheduled)
```
Schedule Trigger (daily, e.g. 09:00 Europe/Paris)
 → Data Table followup_queue: select where due_at <= now AND meeting_booked=false AND followup_sent=false
 → Loop → Gmail: send J+2 value email (source-specific extra value)   [retryOnFail]
        → Data Table: set followup_sent=true for that row
 (error output) → error workflow Slack alert (a failed follow-up must not vanish)
```
This is an **unattended** workflow → it MUST have a workflow-level error workflow configured (§ non-negotiable). Same for the Cal.com booking webhook workflow below.

### 4f. `Workflow: Cal.com booking → mark meeting_booked` (small)
```
Webhook (Cal.com booking.created)
 → Data Table followup_queue: set meeting_booked=true where email matches
 → (optional) Subworkflow: Attio upsert lead — update stage to "meeting booked"
 → Respond 200
```

### Where errors & retries live (summary)
- **Transient network hiccup** → absorbed by `retryOnFail` on the node. Never reaches an alert.
- **Bad caller input** → 400 up front, structured body. Never touches error outputs.
- **Real failure after retries** (Attio down, Gmail auth expired) → node error output → 500 to caller (once the route awaits) **and** workflow-level error workflow → Slack `#leads-alerts` with lead email + failed step. Lead is already in the durable ledger, so it's recoverable, never silently lost.
- **The one rule everywhere:** a lead is written to durable storage *before* we attempt any fallible email/CRM/Slack step. That is what makes "never fake success" true on the n8n side.

---

## 5. What I need from you before building

**Accounts / credentials (create the n8n credential, don't paste secrets in fields):**
1. **Email sender** — which account sends the emails? Gmail (OAuth2, `noreply@aimakers…`?) or SMTP/transactional (SendGrid/Postmark)? Transactional is more reliable for deliverability at volume — your call. Need the account + OAuth or API key.
2. **Attio** — API key (Bearer token), and confirm the **object model**: are leads `People` + `Companies`? Which attributes should I write (source, score, level, isHot, costPerMonth, stage)? Any existing dedupe key (email)?
3. **Slack** — the channel(s): I've assumed `#leads` (all), `#sales` (HOT), `#leads-alerts` (failures). Confirm names, and provide a Slack app/bot token (preferred over incoming webhook, so we can format richly and target channels).
4. **Cal.com** — the booking link URL to embed in every email, and confirm we can enable a **booking webhook** (plan-dependent). Without the webhook we can't reliably suppress the J+2 follow-up after a booking.

**Assets / hosting:**
5. **PDFs** — decide **attachment vs hosted link**:
   - Files exist in-repo at `public/docs/catalogue-formations-aimakers-2026.pdf` and `public/docs/playbook-ai-first-aimakers.pdf`, so they're already served at `https://<site>/docs/…`. A **hosted link** in the email is my recommendation (smaller emails, better deliverability, click tracking) — I just need the **production domain**.
   - If you prefer attachments, n8n needs to fetch the binary (HTTP GET the public URL, or store the PDF in n8n) — confirm which.
6. **Production site domain** — for the hosted PDF links and the Cal.com/site links in emails.

**Content (can come slightly later, but blocks "done"):**
7. **Email copy** for each: catalogue, playbook, brief, geo-audit, scanner report, newsletter, diagnostic result, and the J+2 value email(s). Even rough drafts. Who's the from-name/signature?
8. **HOT thresholds confirmation** — `score >= 12` OR `costPerMonth >= 10000`. Confirm units of `costPerMonth` (euros/month? the route sends a raw number).

**One thing only you can do in the n8n UI:**
9. **Set the workflow-level error workflow** on the unattended workflows (sweep, Cal.com webhook) and ideally the entry workflows — MCP can't set this; I'll tell you exactly where to click.

**Site-side (my separate backlog task, noted so we don't forget):** change the three routes to `await` n8n and stop returning `{success:true}` on failure — the actual fix for the browser-side silent-success bug. n8n design above makes the route able to trust a fast 200-on-receipt.

---

## Decisions I need from you to move to build
- [ ] Approve Option **B (grow-into-C)**, or pick A / full-C.
- [ ] Approve **scheduled-sweep + Data Table** for J+2 (vs Wait node).
- [ ] Email sender: Gmail vs transactional (SendGrid/Postmark)?
- [ ] PDFs: hosted link (recommended) vs attachment?
- [ ] Confirm Slack channels + Attio object model + Cal.com webhook availability.
