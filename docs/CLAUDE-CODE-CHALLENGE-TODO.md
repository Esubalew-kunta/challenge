# 30 Days of Claude Code: what is left

Live at `/en/claude-code-challenge` in English and `/challenge-claude-code` in
French. Thirty day pages in each, all written, all building, linked from both
menus and footers, with eleven downloadable sheets in each language.

Content lives in `src/lib/challenge/`. One layout renders all thirty days, so a
fact exists in exactly one place and two pages cannot disagree with each other.

Last updated: 21 August 2026.

---

## Done, 21 August 2026

### Seven things a real first visit found

Opened in incognito as a new reader. All seven fixed.

1. **The popup was chained to the cookie banner.** It waited for the cookie
   decision, so a reader who ignored the banner was never asked, and then the
   popup ambushed them minutes later when the banner was finally answered. The
   wait is gone. The collision it was hiding, the banner covering the last two
   answers at 375 wide, is solved by measuring the banner and sitting above it.
   `data-cookie-banner` is the handle. The banner stays clickable.
2. **There was no celebration.** `celebrate.tsx` now marks a new level, a
   finished phase, and all thirty. Five seconds of confetti, once per milestone
   ever, silent about anything earned before it shipped, no dependency, reduced
   motion respected. Not celebrated: finishing a single day.
3. **Titles were squeezed and left aligned.** Day heroes are centred, widened
   from 20 to 30 characters, slightly larger, with more room. Index heroes went
   from 16 to 24. The lesson body stays left aligned on purpose.
4. **The sheet footers printed dead links.** `aimakers.fr/en/claude-code-challenge`
   does not exist; the course is on Vercel. Every sheet now prints `aimakers.fr`
   and nothing else. All 22 rebuilt and re-uploaded.
5. **A local address could reach a real email.** `/api/challenge-sheet` now
   swaps localhost, 127.0.0.1, `.local` and home wifi ranges for
   `CHALLENGE_PUBLIC_URL`, then Vercel's production hostname, then site config.
6. **Day 6 has a cost tool.** `cost-tool.tsx`, both languages, attached through
   a new optional `tool` field on the day record. It prints no price of ours:
   every number is the reader's own, so it cannot go stale. Its output is three
   lines copied to the clipboard for whoever approves the spend.

### The eleven sheets exist in French

A French reader now gets French pages, a French email and a French PDF. That
was the last seam where English showed through.

- Content: `src/lib/challenge/sheets.fr.ts`, eleven records mirroring
  `sheets.ts` block for block. Commands are not translated: `INSTALL` and
  `SETTINGS_PATHS` come from `registry.ts` and are the same in both languages
- Layout: the same `sheet-doc.tsx`, which now takes a `locale`. The six strings
  the layout itself owns live in that file rather than in `config.ts`, because
  they only ever appear on a printed sheet
- Pages: `src/app/(print-fr)/challenge-claude-code/fiches/[id]`, a fourth root
  layout. A root layout cannot change its `lang` per route, and a French sheet
  served as `lang="en"` is wrong for a screen reader and for hyphenation
- Ids: `sheet-setup-fr` and so on. The rule lives once, in `sheetIdFor` in
  `registry.ts`. **The French day records deliberately keep the English id**,
  so no content file had to be renamed
- Delivery: `/api/challenge-sheet` asks for both ids in one query and prefers
  the French row, falling back to the English one. A row with no file is
  skipped, so a French sheet that exists but was never uploaded cannot beat an
  English PDF that is ready
- The email needed no change. It reads the title from the row that was looked
  up, so the French title, PDF and day link follow by themselves

**Why two ids and not a second column.** Adding a column changes an existing
table; adding a row does not. The id then carries the language into the PDF
name, the storage path and the lead row without anything else having to know.
The cost, stated once: `claude_code_leads.sheet_id` now splits by language, so
any count by sheet has to strip the suffix. That is the only place it shows.

**`claude_code_sheets.slot` is unique**, so the French rows took slots 12 to 22.
Nothing reads `slot` out of the database; the sheet's own `slot` in the code is
still 1 to 11 and is what prints on the page.

### The one page rule is now enforced, not remembered

`scripts/lib/pdf-a4.mjs` counts `/Type /Page` and reads the `MediaBox`. The
build refuses anything that is not exactly one A4 page, and so does the upload,
because a file that failed the build stays on disk and the upload used to take
every PDF in the folder. Proved against a deliberately long page: 11 pages, US
Letter, both flagged.

`sheets:upload` now takes ids, so a French pass no longer rewrites the eleven
English files and rows that nobody asked it to touch.

Verified on 21 August 2026, in a real browser and against the live tables: all
eleven French PDFs are one A4 page, all eleven download over the public URL,
the French form on `/challenge-claude-code/jour-5` returns
`sheet-which-tool-fr.pdf`, the English form on `/en/claude-code-challenge/day-5`
still returns `sheet-which-tool.pdf`, and n8n execution `21391` sent the French
email. Build clean, 236 static pages. Sitemap still 193 URLs, 193 unique, with
no sheet route in it.

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

### 1. The webhook that sends the email is open to anyone

**The email itself works.** Built live in n8n on 20 August 2026, activated,
and proven end to end. See `docs/n8n/README.md`. `N8N_SHEET_WEBHOOK_URL` is set
in `.env.local` and still has to be set on Render.

What is not solved: the webhook takes no authentication, so anyone who learns
the URL can make the AI Makers Gmail account send any link to any address. The
fix is header authentication on the n8n webhook plus a matching header sent by
`src/app/api/challenge-sheet/route.ts`. It needs a credential created by hand in
the n8n interface, so it was not done in the same pass.

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
