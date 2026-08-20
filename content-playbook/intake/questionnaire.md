# Intake Questionnaire

Agent 1 runs this once, before any other work, and writes the answers into `_brief.md`.
Everything downstream is derived from it.

## How to run it

Ask in batches, conversationally. Do not paste this file at the user and wait.

Questions are tagged:

- **[BLOCK]** — work cannot start without it. If unanswered, stop and ask. Do not guess.
- **[DEFAULT]** — has a sane default. Propose the default, say you're proposing it, move on.
- **[NICE]** — improves output. Ask once, accept "skip," never ask twice.

The user is usually busy and often does not know what you need. Two obligations follow.
First, **never accept an abstraction where a specific was asked for.** "We're customer
obsessed" is not an answer to §6; the specific complaint from the specific customer is.
Push back once, concretely, then take what you get. Second, **when they don't know, say so
in the brief** — `[unknown]` is a usable input, an invented answer is not.

Some answers change what you ask next. §2 (sector) determines whether the YMYL and
compliance blocks fire at all. §4 (page inventory) sizes everything. Ask §2 and §4 early.

---

## §1 — The organization [BLOCK]

1. What is the organization called, and what does it actually do? One paragraph, plain.
2. What does it sell, and what does a buyer pay? (Ranges fine. "Free / open source" fine.)
3. Who is the buyer? Be specific: a role, a company size, a situation. Not "everyone."
4. Who is explicitly **not** the buyer? Who should bounce off this site and be glad they did?
5. Who are the three competitors you actually lose deals to? Names, URLs.
6. In one sentence a competitor could not truthfully say about themselves: why you?

> Q4 and Q6 do real work later. Q4 feeds Rule 16.7 (specific address) — a site written for
> everyone reads as written by nobody. Q6 is the thesis; without it every page reverts to
> symmetrical both-sidesism (Rule 3.5) and asserts nothing.

## §2 — Sector, market, and regime [BLOCK]

7. What sector? (SaaS, professional services, healthcare, finance, education, e-commerce, …)
8. Which country/countries are you selling into, and in which language(s)?
9. **Is this YMYL?** Does the content touch health, money, safety, legal rights, or major
   life decisions? If yes, the YMYL module in `rules/seo-audit-rules.md` §4.1 applies and
   the trust bar rises for every page.
10. Which regulatory or certification regime constrains what you may claim? Examples:
    professional-conduct rules for regulated practitioners, financial-promotion rules,
    training-body accreditation, advertising standards. If none, say "none" explicitly —
    the auditors need to know it was asked and answered, not skipped.
11. Any claims legal/compliance has already told you not to make?

> If §2 answers are wrong, every audit downstream is wrong. Do not infer the market from
> the domain TLD. Ask.

## §3 — Where the truth lives [BLOCK]

12. Where is the prior research, if any? (Path, repo, drive folder, or "none.")
13. Is there a **validated-figures list** — the single source of truth for every number the
    site may state? If not, we create one now, because two sources of truth is worse than
    one unvalidated one. Any figure not on it ships tagged `[to validate]` or does not ship.
14. Where do author and credential facts come from? Bios, registry numbers, titles. Any
    credential without a documented source is treated as fabricated, not as a rough draft.
15. Who signs off on factual accuracy, and who signs off on compliance? (Often two people.
    If it's the same person, say so; if it's nobody, that is itself the finding.)

## §4 — The pages [BLOCK]

16. List every page in scope. For each: route/slug, page type (home / service / product /
    pricing / about / practitioner / condition / article / hub / legal), and one line on
    what it's for.
17. Which page owns which topic? Every question gets exactly one canonical owner. Where two
    pages both answer it, name the winner now — cannibalization is cheaper to prevent here
    than to diagnose in `_cross-page.md` later.
18. What is the funnel stage of each page, and what is the next step you want from a reader
    who's convinced?
19. **Template reality:** what fields exist to receive this content? Title, meta, H1, body,
    and how long can each be? Does the meta description double as an on-page subhead or a
    card teaser? Copy with nowhere to land does not ship, however good it is.
20. Anything already live on these routes? (Rewrite and greenfield are different jobs, and
    a live problem outranks a draft problem.)

## §5 — Search [DEFAULT]

21. Do we have Ahrefs (or equivalent) access, and for which country setting? *Default: yes,
    set to the §2 country.* Volumes read against the wrong country are noise.
22. Do you have target keywords in mind? *Default: none — we derive them.*

> Treat any keyword the user supplies as a **claim to verify**, never as data. Test the
> variants before accepting a primary: bare vs. geo-suffixed, colloquial vs. industry-jargon,
> abbreviation vs. full term, and competing synonyms for the same thing. The standard failure
> is picking the low-volume variant and then over-repeating it. A "primary" keyword with zero
> measured volume is a finding, not a target.

23. Any term you deliberately do **not** want to rank for? (Namespace collisions: your
    abbreviation may be someone else's brand.)

## §6 — Firsthand material [BLOCK — the section everyone skips]

This is the raw material for the entire content build. Agent 2 cannot manufacture it, and
agent 4 will detect its absence in every page. Budget real time here. If the user tries to
skip it, tell them plainly: without it, the pipeline produces content that fails audit and
cannot be repaired by rewriting, because the missing ingredient is knowledge.

24. **What went wrong.** A project that failed, a launch that slipped, a bug that cost you.
    What broke, what it cost, what you do differently now.
25. **Numbers you measured yourself.** Not industry benchmarks — yours. How long something
    takes, what it costs, how often it fails. Rough and honest beats precise and borrowed.
26. **The thing you believe that your industry doesn't.** An opinion that would start an
    argument at a conference. If nothing comes to mind, ask instead: what advice does
    everyone in your field give that you think is wrong?
27. **A specific customer, and what they specifically said.** The complaint, the objection,
    the thing they misunderstood, in their words if you have them.
28. **What you're bad at.** Where a competitor genuinely beats you; who should buy from them
    instead. (This produces the admission against interest that makes everything else on the
    site believable. It is the highest-value answer in the questionnaire. See Rule 16.2.)
29. **What you don't know.** An open question in your own domain you haven't solved.
30. **Who taught you the hard part, and what did it cost to learn?**

> Answers here are quoted, not paraphrased, into `_sources.md`. Keep the surplus detail —
> the irrelevant bit that was simply *there*. Real memories carry residue; invented ones are
> clean, and Rule 17.4 convicts clean.

## §7 — Voice [DEFAULT]

31. Whose voice is this in? A named person, or the organization? *Default: organization,
    first-person plural.*
32. Point me at three pieces of writing that sound right — ideally yours. *Default: none;
    we infer from §6 answers.*
33. Formal or casual, and where's the floor? *Default: professional, contractions allowed,
    no exclamation marks.*
34. Any words, claims, or formats that are banned? (House style, legal, or taste.)

## §8 — Operating parameters [DEFAULT]

35. Word-count target per page type? *Default: none — length follows the material. Padding to
    a target is how Rule 10.1's 40%-cut test gets failed.*
36. Where does content get published, and by whom? *Default: agent 2 writes markdown here;
    a human ships it.*
37. Second language planned? *Default: FR after EN sign-off.*

> If yes: keyword targets must be re-validated **in the publication language** — patients,
> buyers, and readers search their own colloquialisms, not translations of yours. Budget for
> expansion (French runs ~10–15% longer than English), so an EN meta description at 158
> characters is an overrun before translation starts, not after.

38. Who is the human sign-off, and what is the deadline?

---

## Exit criteria

Do not proceed to page specs until all of the following hold:

- Every **[BLOCK]** question is answered, or explicitly marked `[unknown]` with a named
  owner and a date.
- §6 has produced **at least three usable specifics** — a real number, a real failure, and a
  real opinion, at minimum. If §6 is empty, stop and escalate to the human. Do not proceed
  and hope. This is the single most common way this playbook is run wrong.
- The page inventory in §4 has a canonical topic owner per topic, with no unresolved overlaps.
- §2 compliance regime is named or explicitly `none`.
- The validated-figures list exists, even if it starts empty.

Then write `_brief.md` from `project-brief.template.md` and show it to the user for
correction before building specs. They will find something wrong. They always do, and it is
much cheaper to find it now.
