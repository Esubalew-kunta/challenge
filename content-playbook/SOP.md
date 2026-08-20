# Standard Operating Procedure

The cycle, step by step, with the gates that stop it going wrong. `README.md` explains why;
this explains what to do.

Language code `XX` below is `EN` first, then `FR`, then whatever follows.

---

## Stage 0 — Setup

1. Create the working branch. All four agents commit here; nothing touches `main` until
   sign-off.
2. Confirm merge access before you need it, not after. If your host has branch protection or
   required checks, know now whether the pipeline can merge unattended or will park a PR and
   wait.
3. Create the trees:

```
[EN] website-content/
seo-audit-report/
ai-slop-audit-report/
```

4. Confirm tool access: keyword tool (which country?), the site's repo or CMS, the sitemap.

---

## Stage 1 — Intake · agent 1 · **human required**

Agent 1 runs `intake/questionnaire.md` and writes `_brief.md`.

This is the only stage that cannot be automated, and the only one people try to. Budget real
time — an hour of a founder's attention, not a form emailed at them.

**Gate — do not pass until all hold:**

- [ ] Every `[BLOCK]` answered, or `[unknown]` with a named owner and a date
- [ ] §6 firsthand material: **at least three usable specifics** (a real number, a real
      failure, a real opinion)
- [ ] One canonical topic owner per topic; overlaps resolved on the record
- [ ] Compliance regime named, or explicitly `none`
- [ ] Validated-figures list exists (may be empty)
- [ ] `_brief.md` shown to the human and corrected

> **If §6 is empty, stop the project.** Not "proceed carefully" — stop. Every page will fail
> the Zero-Knowledge Test, and that failure cannot be repaired by rewriting, because what's
> missing is knowledge. You would be spending real cycles to arrive, expensively, at a
> conclusion available for free right now. This is the single most common way this playbook
> is run wrong.

---

## Stage 2 — Specs · agent 1 · **human approval**

One `_spec.md` per page. Every section pinned to specific material from the brief.

**Gate:**

- [ ] Every page in the inventory has a directory and a spec
- [ ] Every section names what it must establish **and** which §6 material it draws on
- [ ] Sections with no material behind them are marked `blocked`, not handed to agent 2
- [ ] Human has approved the specs

> A section whose instruction is "explain our approach to X" is a slop generator with a
> ticket number. Pin it or block it.

---

## Stage 3 — Draft · agent 2

Agent 2 writes `content.md` and `_sources.md` per page, updating `_tracker.md` as it goes.

Keywords get validated here, independently, against real volume for the target country —
including any target the brief supplied. The brief's keywords are claims, not data.

**Gate:**

- [ ] Every page `drafted`
- [ ] Every section in every spec present in its `content.md`
- [ ] `_sources.md` complete: every claim traced, every quote quoted not paraphrased
- [ ] Every figure either on the validated-figures list or tagged `[to validate]`
- [ ] Agent 2 has run its own 60-second triage and answered Rule 18.2's three questions

> Agent 2 self-checking is not redundant with Stage 4. It's cheaper. A page that fails
> Continuity/Cost/Address at draft time will fail it at audit time, having burned two audits
> to tell you.

---

## Stage 4 — Audit · agents 3 and 4 · parallel

Fire both. Order doesn't matter; simultaneous is fine. They are independent by construction,
and nothing they do interacts.

**Before firing, enforce the firewall physically:**

- [ ] Both spawn as **fresh subagents with clean context** — not a continuation of any
      conversation that has the brief in scroll-back
- [ ] Each gets **file paths only**, from its allowed column in `rules/context-firewall.md`
- [ ] Agent 3 gets keyword-tool and codebase access; agent 4 gets neither
- [ ] Neither can read the other's report
- [ ] Nobody has "helpfully" summarized the brief into the prompt

> A firewall is a property of what's in the context window. It is not a request, and an
> agent told "don't consider the brief" while holding the brief is an agent considering the
> brief.

Outputs: `seo-audit-report/<page>.md` + `_cross-page.md`; `ai-slop-audit-report/<page>.md`.

**Gate:**

- [ ] Every drafted page has both reports
- [ ] Every finding carries evidence — a quote, a file:line, a measured count, a tool figure
- [ ] Neither auditor edited any content

---

## Stage 5 — Disposition · agent 2

Agent 2 rules on every finding in `_disposition.md`: `implement` / `implement-differently` /
`reject` / `escalate`.

**This is a judgment pass, not an apply-all pass.** Applying every finding mechanically sands
the pages into something that passes both audits and says nothing — which is the exact
failure the system exists to prevent. Rejecting inconvenient findings is the other failure,
and it's more common.

Four rulings that are not available:

- **Fabrication findings are never rejected.** If a figure doesn't resolve, it doesn't
  resolve. Fix or cut.
- **Zero-Knowledge failures are never edited away.** Get material, or cut the section.
- **SDS 36+ means regenerate, not edit.** Editing slop produces polished slop.
- **Measured keyword findings beat intuition.** Agent 3 measured; you remembered.

**Gate:**

- [ ] Every finding from both reports has a ruling — no silent drops
- [ ] Every `reject` has a reason a stranger could evaluate
- [ ] Every `implement` has actually changed `content.md` (diff it — a ruling is not an edit)
- [ ] Every `escalate` names who decides and what's needed

---

## Stage 6 — Re-verify · agent 1

Agent 1 checks coverage, not judgment. The rulings are agent 2's; whether they were *carried
out* is agent 1's.

**Gate:**

- [ ] Filesystem swept against the inventory — every page, every section, nothing forgotten
- [ ] Every `implement` verified in the diff
- [ ] No spec'd section vanished during rewrite
- [ ] `_tracker.md` matches reality

---

## Stage 7 — Re-audit, if needed

Re-audit only pages that changed materially. Fresh subagents again — an auditor that has seen
the page before and remembers its own findings is no longer independent.

Loop 4 → 5 → 6 until every page clears:

- SEO score ≥ 75, no 🔴 outstanding
- Slop net score ≤ 8 (Clean), no automatic failures
- Every `escalate` resolved

> **If a page won't converge after two full cycles, stop looping.** Two failed cycles is not
> a signal to try harder; it is a signal that the material isn't there. Go back to Stage 1
> §6 and get it, or cut the page. A third cycle produces a page that scores well and reads
> like nothing.

---

## Stage 8 — Sign-off

- [ ] Human sign-off on factual accuracy
- [ ] Human sign-off on compliance (often a different person — check the brief)
- [ ] Every `[to validate]` tag resolved or consciously accepted
- [ ] Engineering tickets (schema, template fields) filed and named

Merge.

---

## Stage 9 — Next language

Build `[FR] website-content/` by running Stages 1–8 again. It is a build, not a translation
job — it just starts with a head start.

What does **not** carry over:

- **Keywords.** Re-validate every target in the publication language. Readers search their
  own colloquialisms, not translations of yours. A term validated in EN and translated to FR
  is an unvalidated term.
- **Length budgets.** French runs ~10–15% longer than English. An EN meta description at 158
  characters is an overrun before translation starts.
- **The audits.** Agents 3 and 4 re-run in the target language, blind, fresh.

What does carry over: the brief's §6 firsthand material, the validated-figures list, and the
canonical topic ownership map.

---

## The five ways this goes wrong

Ranked by how often they actually happen.

1. **§6 gets skipped**, everything downstream fails audit forever, and the loop never
   converges. By far the most common.
2. **The firewall leaks** — someone pastes the brief into the auditor's prompt to be helpful.
   Both audits become rubber stamps and the project produces a beautiful trail of evidence
   that content nobody would read is exactly what was ordered.
3. **Disposition becomes apply-all**, every specific gets sanded off, and the pages converge
   on inoffensive nothing with excellent scores.
4. **A page is forgotten.** Spec'd in week one, never drafted, shipped as a stub. This is
   why Stage 6 sweeps the filesystem instead of trusting anyone's memory.
5. **A page is looped four times** instead of being sent back for material at cycle two.
