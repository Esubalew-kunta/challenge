# The Context Firewall

The constraint the rest of the system is built to protect. Read this before modifying any
agent definition, because most "obvious improvements" to this playbook are attempts to
punch a hole in this wall, and they all fail the same way.

## The rule

| Artifact | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| `_brief.md` (intake output) | ✅ | ✅ | ❌ | ❌ |
| Prior research, client docs, strategy notes | ✅ | ✅ | ❌ | ❌ |
| `<page>/_spec.md` | ✅ | ✅ | ❌ | ❌ |
| `_tracker.md` | ✅ | ✅ | ❌ | ❌ |
| `_disposition.md` | ✅ | ✅ | ❌ | ❌ |
| `<page>/content.md` | ✅ | ✅ | ✅ | ✅ |
| `<page>/_sources.md` | ✅ | ✅ | ✅ *(claims only)* | ❌ |
| Ahrefs / keyword tools | ✅ | ✅ | ✅ | ❌ |
| Live site code, CMS, templates | ✅ | ✅ | ✅ | ❌ |
| `seo-audit-report/*` | ✅ | ✅ | ✅ (own) | ❌ |
| `ai-slop-audit-report/*` | ✅ | ✅ | ❌ | ✅ (own) |

Read the last two rows twice. **Agent 3 may not read agent 4's reports, and agent 4 may not
read agent 3's.** They are not colleagues. They are two independent measurements of the same
object, and their value is entirely in their independence.

## Why agent 3 is blind to the brief and the research

An auditor holding the brief stops auditing the page and starts auditing *compliance with
the brief*. Those are different jobs, and only one of them predicts how the page performs.
If the brief says "target `enterprise onboarding software`" and the page dutifully targets
it, a brief-holding auditor marks it correct. A blind auditor goes to Ahrefs, discovers the
term has 40 searches a month while `employee onboarding tool` has 4,400, and files the
finding that matters.

The strategy is exactly what needs independent checking. An auditor that has been told the
answer cannot check the answer.

## Why agent 4 is blind to everything, including Ahrefs

Agent 4 answers one question: does a human being appear to have written this? Every extra
input degrades that judgment.

Keyword data is the worst offender. Show agent 4 that `employee onboarding tool` is the
target and it starts reasoning about whether the repetition is *justified* — which is agent
3's job, done worse. Its own job is to notice that the phrase appears eleven times and that
no human writes like that.

The brief is nearly as bad, for a subtler reason. Told that the page is for HR directors at
mid-market SaaS companies, agent 4 reads a generic passage as "addressed to HR directors"
and awards credit for specific address (Rule 16.7). The reader never gets that context.
They get the page. If the address isn't legible *in the text*, it doesn't exist, and an
auditor holding the brief will hallucinate it onto the page every time.

Agent 4 gets the artifact and the ruleset. Nothing else. It is a proxy for a stranger, and
strangers do not have briefs.

## Why agent 4 is blind to `_sources.md` too

This one is counterintuitive: surely knowing the firsthand material helps verify it?

No — it inverts the test. `_sources.md` says the founder spent nine months on a failed
Kubernetes migration. Agent 4 reads that, then reads a bland paragraph about "infrastructure
challenges," and credits it as grounded in real experience. But the reader never sees
`_sources.md`. If the nine months and the specific failure didn't make it onto the page,
the page is not grounded — it merely had access to grounding and squandered it.

Agent 4 must not be able to tell the difference between a page written from deep experience
and a page written from none, *except by reading the page*. That's the whole measurement.

Agent 3 gets `_sources.md`, but narrowly: to verify that cited claims resolve to real
sources (fabrication screen, §7). Not to understand the strategy.

## The failure this prevents

Give 3 and 4 the full context and they converge on agreement with agent 2 within one cycle.
Every finding becomes "matches the brief, ship it." The reports keep arriving, the scores
keep rising, and the system produces a rich audit trail proving that content nobody would
read is exactly what was ordered. That's the failure mode, and it looks like success right
up until launch.

## Enforcement

The firewall is enforced by what you put in the agent's context window, not by the agent's
good intentions. In practice:

- Spawn 3 and 4 as **fresh subagents with clean context**. Do not continue an existing
  conversation that has the brief in scroll-back. A firewall is not a request.
- Pass them **file paths, not file contents**, and only the paths their column permits.
- If your harness cannot restrict reads, run 3 and 4 from a directory containing only the
  content files and the rules — copy `content.md` out, or check out a sparse tree.
- Agent 2 must **never** summarize the brief into a message to 3 or 4. Not as helpful
  background, not as "to save you time," not ever.

## The one legal crossing

After both audits land, everything flows to agent 2, which holds all context and is
therefore the only agent qualified to rule on findings. That's the design: the auditors are
blind so their measurements are honest; the dispositioner sees everything so the rulings are
informed. One direction only. Findings flow up to agent 2; context never flows down to 3 or 4.

## If you must break it

Sometimes an auditor files a finding that context would obviously have resolved — it flagged
a term as keyword stuffing when the term is the client's product name. The fix is **not** to
show the auditor the brief. The fix is for agent 2 to reject the finding in
`_disposition.md` with the reason, and — if the same misread recurs across pages — for agent
1 to note it in `_tracker.md` as a known false-positive class.

The auditor stays blind. The correction lives on agent 2's side of the wall. That is the
only maintenance path that doesn't degrade into a rubber stamp.
