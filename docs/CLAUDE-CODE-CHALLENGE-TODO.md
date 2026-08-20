# 30 Days of Claude Code — what is left

Live at `/en/claude-code-challenge`. English only. Thirty day pages, all
written, all building, linked from the English menu and footer.

Content lives in `src/lib/challenge/`. One layout renders all thirty days, so a
fact exists in exactly one place and two pages cannot disagree with each other.

Last updated: 20 August 2026.

---

## Open

### 1. The ten cheat sheets do not exist

**Blocking.** Ten of the thirty days offer a downloadable sheet. The form works
and the lead is captured, but the button that appears afterwards
(`src/components/challenge/sheet-offer.tsx`, `href="#"`) goes nowhere.

Anyone who gives an email today gets nothing back.

| Slot | Day | Sheet |
|---|---|---|
| 1 | 1 | The Setup Sheet |
| 2 | 5 | The Tool Picker |
| 3 | 8 | The Hooks Cheat Sheet |
| 4 | 10 | The Manager Pack |
| 5 | 13 | The Context Sheet |
| 6 | 15 | The Saved Jobs Sheet |
| 7 | 16 | The Connections Sheet |
| 8 | 24 | The Unattended Sheet |
| 9 | 26 | The Instructions Sheet |
| 10 | 30 | The Complete Guide |

What each one contains is already written, in the `sheet` field of the matching
day record. That is the brief.

**One rule when writing them:** no prices, no plan details, no model names
printed inside. Those link back to the site. A number inside a PDF sitting in
somebody's inbox cannot be corrected; a link can.

Until they exist, either write them or hide the offer. Capturing an address and
delivering nothing is worse than not asking.

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
