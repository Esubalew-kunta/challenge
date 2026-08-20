# 30 Days of Claude Code — what is left

Live at `/en/claude-code-challenge`. English only. Thirty day pages, all
written, all building, linked from the English menu and footer.

Content lives in `src/lib/challenge/`. One layout renders all thirty days, so a
fact exists in exactly one place and two pages cannot disagree with each other.

Last updated: 20 August 2026.

---

## Done, 20 August 2026

### The ten cheat sheets exist, and the button works

All ten are written, built as one page A4 PDFs, uploaded, and delivered.

- Content: `src/lib/challenge/sheets.ts`, one data record per sheet, same
  principle as the thirty days
- Layout: `src/components/challenge/sheet-doc.tsx`, one layout for all ten,
  sized in millimetres so paper is identical on every machine
- Pages: `src/app/(print)/`, a third root layout beside `(fr)` and `(en)` with
  no site chrome, because hiding the header from inside `(en)` also hid the
  sheet and every PDF came out blank
- Build: `npm run sheets:build`, drives the Chrome already installed rather
  than pulling in a 300 MB Puppeteer download
- Upload: `npm run sheets:upload`, into the public `challenge-sheets` bucket,
  and writes the URL back into `claude_code_sheets.file_url`
- Delivery: `src/app/api/challenge-sheet/route.ts` writes the lead into
  `claude_code_leads` first, then asks n8n to email a copy. The email is never
  allowed to fail the request

Verified: all ten are exactly one A4 page, all ten download over the public
URL, and all ten complete the request and write a lead row.

**What the one page rule cost.** The original brief for The Complete Guide
promised all thirty days written out, and The Manager Pack four sections for an
approver. Neither fits on a page. The Complete Guide is now the reference table
plus the where-does-it-go rules; the Manager Pack is the rollout, the approver
questions, the failure modes and what to measure. The days themselves stay on
the site, where they can be kept current.

**Also dropped, deliberately:** the verification date is no longer printed on a
sheet (owner's call). `VERIFIED_AGAINST` still governs when we re-check.

### The score exists

Points, four levels, days done, a streak and a pace line, all kept in the
reader's own browser. A day counts when all of its questions are answered. See
`src/lib/challenge/progress.ts`.

---

## Open

### 1. The email copy is not proven

The n8n workflow is written and importable
(`docs/n8n/claude-code-send-challenge-sheets.json`, four nodes), but it has not
been imported or activated, so no email has ever been sent. Until
`N8N_SHEET_WEBHOOK_URL` is set the route returns `emailed: false`, which is
correct behaviour, not a failure: the reader still gets the file link.

### 2. Never tested on a real phone

Built responsive and checked at desktop width only. The day bar, the tables, the
code blocks and the platform tabs all need looking at on a real handset before
launch. Code blocks and wide tables scroll sideways inside their own box by
design; that is the thing most likely to be wrong in practice.

### 3. No share image

Sharing any of the thirty one pages on LinkedIn or Slack shows the site's
generic `/og-default.png`. The challenge deserves its own, and the day pages
would ideally carry the day number.

---

## Deliberately not done

**No French version.** The architecture is ready for it: FR at the root, EN
under `/en`, and `ROUTE_MAP` in `src/lib/i18n.ts` pairs them. A French build is
a second data file plus a second set of UI strings in
`src/lib/challenge/config.ts`, not a second set of components.

Until it exists, `/en/claude-code-challenge` is deliberately absent from
`ROUTE_MAP`: a hreflang pointing at a page that does not exist is an indexing
error, not an ignored link. The index is in `EN_PUBLISHED` so it reaches the
sitemap; the thirty day pages are added to the sitemap from the data.

**The old French `/challenge-30-jours` is untouched.** It is a different
product: a weekly email course about Claude the chat app, run through n8n.
Owner's decision (20 August 2026) is to leave it until the French version of
this challenge is ready, so French visitors are not left with nothing.

**Personal email addresses are refused.** Site-wide policy in
`src/lib/schemas/lead.ts`: gmail, outlook, yahoo and similar are rejected. On a
free course aimed at individuals this will turn some readers away. Reviewed and
kept on purpose (20 August 2026).

---

## Rules this build depends on

- **Every day is timed with a real beginner before it goes live.** If one runs
  over eighteen minutes it becomes two days. The number is never shrunk to fit
  the promise. Enforced in `src/lib/challenge/index.ts`, which warns in
  development if a day falls outside five to eighteen minutes.
- **Every command is run before publishing.** All of them were checked against
  the official Claude Code documentation on 20 August 2026. Anything older than
  ninety days needs re-checking, in particular install commands, plan
  requirements and hook syntax.
- **Lessons stay open.** No account, no gate. The open pages are what earn the
  search traffic. An email is only ever asked for in exchange for a sheet.
- **Nothing is scored or tracked.** Quizzes are for the reader. There is no
  progress store. The only lead signal is which sheet was requested, and from
  which day.
- **Day 1 asks whether the install worked.** If it failed, the reader gets help
  and no email box. Do not add one there.
