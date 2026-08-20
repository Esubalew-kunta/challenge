# Disposition Log — `[XX] website-content`

> Owned by agent 2. **Never shown to agents 3 or 4.**
> Path: `[XX] website-content/_disposition.md`
>
> This is a **judgment pass, not an apply-all pass.** Agents 3 and 4 are blind by design,
> so some findings are wrong *because* they're blind. Applying everything mechanically sands
> the pages into something that passes both audits and says nothing — the exact failure this
> system exists to prevent. Rejecting inconvenient findings is the other failure, and it is
> more common.
>
> **Every finding gets a ruling. Including — especially — the rejected ones.** An unrecorded
> rejection means next cycle re-raises it and nobody remembers why it was dropped.

| | |
|---|---|
| Cycle | 1 |
| Reports dispositioned | `seo-audit-report/…`, `ai-slop-audit-report/…` |
| Date | |

## Rulings

| Ruling | Meaning |
|---|---|
| `implement` | Finding is right. Fixed. |
| `implement-differently` | Problem is real; proposed fix isn't. Did X instead. |
| `reject` | Finding is wrong. **Reason must be legible to a stranger.** |
| `escalate` | Needs a human decision. Name who and what's needed. |

### Rulings that are not available

| Finding class | Why you cannot reject it |
|---|---|
| **Fabrication** (5.5, 9.1, 9.2, §7) | If a figure doesn't resolve, it doesn't resolve. Fix or cut. A fabrication finding you disagree with is one to check again, not overrule. |
| **Zero-Knowledge failure** (5.1) | No rewrite fixes it. Get material, or cut the section. Rewriting it prettier produces polished slop and burns another cycle. |
| **SDS 36+** | Regenerate from a point of view. Editing slop produces polished slop. |
| **Measured keyword finding** | Agent 3 measured. You remembered. Measurement wins. |

---

## Page: <slug>

| # | Src | Sev | Finding (one line) | Ruling | Reason / what changed | Diff |
|---|---|---|---|---|---|---|
| 1 | SEO C1 | 🔴 | | `implement` | | `<sha>` |
| 2 | SEO H2 | 🟠 | | `reject` | | — |
| 3 | Slop 5.1 | fail | | `escalate` | | — |

### Reject reasons — long form

> "Not applicable" is not a reason. A reason a stranger could evaluate looks like:
> *"'Foundry' is our product name, not a keyword target — see brief §1. Density excluding
> product-name instances is 0.7%, within budget."*

**#2 — SEO H2:**

### Escalations

| # | Finding | Decision needed | Owner | Asked | Due | Blocks ship? |
|---|---|---|---|---|---|---|

---

## Coverage check

> Agent 1 verifies this at Stage 6. It checks *coverage*, not judgment — the rulings are
> yours; whether they were carried out is agent 1's.

| Check | ☐ |
|---|---|
| Every finding in both reports appears above with a ruling — no silent drops | ☐ |
| Every `implement` actually changed `content.md` (diffed — a ruling is not an edit) | ☐ |
| Every `reject` has a stranger-legible reason | ☐ |
| Every `escalate` names an owner and a date | ☐ |
| No spec'd section vanished during rewrite | ☐ |

## Recurring false positives

> When an auditor misreads something *because it's blind*, and it recurs across pages, the
> fix is **not** to show the auditor the brief. Promote the class to `_tracker.md` as a
> standing ruling. The auditor stays blind; the correction lives on this side of the wall.

| Class | Pages | Standing ruling | Promoted to tracker? |
|---|---|---|---|

## Cycle outcome

| Page | SEO before → after | Slop before → after | Converged? |
|---|---|---|---|

> **Two failed cycles on a page = stop looping.** Not a signal to try harder — a signal the
> material isn't there. Back to brief §6, or cut the page.
