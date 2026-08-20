# The Anti-AI-Slop Audit: Complete Ruleset

A layered, weighted audit system for detecting and eliminating AI-generated slop in text. Designed to be usable three ways: as a manual editorial checklist, as a rubric for scoring drafts, and as a spec for building automated linters.

**Core principle:** No single tell proves anything. Humans use em dashes; humans write "delve." Slop is a *density* problem — the co-occurrence of many weak signals. That's why every rule below carries a weight, and the verdict comes from the accumulated score, not any one hit.

---

## 0. How to run the audit

**Pass order (do them in this sequence — each pass primes the next):**

1. **Cold read** — read the piece once at natural speed. Note where your attention slid off the page. Slop's defining property is frictionless forgettability.
2. **Substance pass** (Layer 5) — could this have been written by someone with zero firsthand knowledge? This is the highest-weight layer.
3. **Lexical pass** (Layer 1) — ctrl-F the word lists.
4. **Structural pass** (Layers 3, 4, 6) — look at the shape: headers, bullets, paragraph rhythm.
5. **Opening/closing pass** (Layer 7) — first and last 10% get their own inspection.
6. **Provenance pass** (Layer 12) — search for artifact leakage.
7. **Score and verdict** (Layer 14).

**Two audit depths:**
- *Quick audit (5 min):* Passes 1, 3, 7, 12 only. Catches ~80% of unedited AI output.
- *Deep audit (30–60 min):* All passes, with per-paragraph substance scoring. Required for anything publishing under a human byline, anything making factual claims, and anything longer than 1,500 words.

---

## Layer 1 — Lexical tells (vocabulary)

Score each *occurrence*, not each unique word. Density matters: divide total lexical-hit points by word count per 1,000 words.

### Tier A — near-certain tells (3 pts each)
Words that appear in AI output at many times their natural base rate:

- delve / delving / delve into
- tapestry (metaphorical), rich tapestry
- testament ("a testament to")
- multifaceted, myriad (as adjective: "myriad options")
- ever-evolving, ever-changing, rapidly evolving
- landscape (metaphorical: "the marketing landscape")
- realm ("in the realm of")
- embark ("embark on a journey")
- journey (metaphorical, non-travel context)
- unlock / unleash ("unlock the potential", "unleash creativity")
- elevate ("elevate your brand")
- game-changer, game-changing
- paradigm shift
- synergy / synergize
- holistic (outside medicine/philosophy)
- seamless / seamlessly
- robust (outside statistics/engineering)
- leverage (as verb, outside finance)
- harness ("harness the power of")
- foster ("foster innovation")
- underscore / underscores ("this underscores the importance")
- pivotal, crucial (when stacked: 2+ per page)
- intricate / intricacies
- nuanced ("a nuanced approach") when nothing nuanced follows
- beacon ("a beacon of hope")
- symphony (metaphorical: "a symphony of flavors")
- vibrant, bustling, nestled (travel/place writing trifecta)
- boasts ("the city boasts")
- captivating, breathtaking, stunning (stacked)
- meticulous / meticulously
- comprehensive ("comprehensive guide") in the piece itself
- daunting ("can seem daunting")
- treasure trove
- culinary (as all-purpose food adjective: "culinary delights", "culinary scene")
- whimsical, enchanting (outside children's fiction)
- profound ("profound implications")
- resonate ("resonates with audiences")
- underpin / underpins
- akin to
- plethora
- albeit (in casual registers)
- moreover / furthermore (2+ in one piece, casual register)
- notably, additionally (as paragraph openers, stacked)
- fast-paced ("today's fast-paced world")
- digital age, modern era ("in the digital age")
- navigate (metaphorical: "navigate the complexities")
- complexities ("navigate the complexities of")
- transformative, revolutionize, groundbreaking (stacked)
- invaluable
- indelible ("indelible mark")
- annals ("annals of history")
- vital role / crucial role / pivotal role ("plays a vital role")
- dynamic (as vague praise: "dynamic environment")
- empower / empowering (outside politics/social work)
- streamline
- cutting-edge, state-of-the-art (stacked)
- top-notch
- array ("a wide array of")
- gone are the days
- look no further
- dive / deep dive / let's dive in
- explore ("in this article, we'll explore")
- excels ("excels at")
- stark ("stark reminder", "stark contrast")
- crossroads ("stands at a crossroads")
- double-edged sword
- silver bullet ("no silver bullet")
- uncharted ("uncharted territory")
- interplay ("the interplay between")
- confluence
- catalyst ("served as a catalyst")
- cornerstone
- bedrock
- linchpin
- juncture ("at this critical juncture")

### Tier B — suspicious in density (1 pt each, only count beyond the 2nd occurrence)
- ensure, enhance, optimize, utilize, facilitate, implement
- key (as adjective: "key takeaways", "key insights")
- insights, actionable
- impactful
- essentially, ultimately, fundamentally (as sentence openers)
- significant / significantly (when nothing is quantified)
- various, numerous, several (vagueness cluster)
- individuals (where "people" would be natural)
- utilize (where "use" would be natural)
- commence (where "start" would be natural)
- subsequently (where "then" would be natural)
- aforementioned
- in order to (where "to" suffices)
- it is important/worth/essential to note that
- when it comes to
- at the end of the day
- that being said, with that said, having said that
- needless to say
- in today's world / in this day and age
- more than ever
- now more than ever
- the world of ("the world of finance")

### Tier C — register mismatch (2 pts each)
Words fine in one register but slop when they appear in the wrong one:
- "utilize", "facilitate", "endeavor" in a casual blog post
- "super excited", "awesome" in a legal or academic document
- Sudden formality spikes mid-paragraph (a casual piece that abruptly says "Moreover, it is imperative that...")
- Uniform mid-formality everywhere — the piece never gets more casual or more formal than its average. Humans drift; models regress to a mean register.

### Rule 1.1 — The stacking multiplier
Any sentence containing **two or more** Tier A words scores double. "This comprehensive guide will delve into the ever-evolving landscape of digital marketing" = 4 hits × 2 = catastrophic.

### Rule 1.2 — Adjective inflation
Flag any noun carrying 2+ evaluative adjectives with no evidence attached ("stunning, vibrant coastal town"). 2 pts per instance. Evidence-free superlatives ("world-class", "unparalleled", "second to none") — 2 pts.

### Rule 1.3 — The intensifier audit
Count: very, truly, incredibly, remarkably, undoubtedly, certainly, absolutely. More than 1 per 300 words = 1 pt each beyond the threshold.

---

## Layer 2 — Phrase & syntax patterns

These are the sentence-level fingerprints. Higher confidence than single words.

### Rule 2.1 — Negative parallelism / the "not X, but Y" family (3 pts each)
- "It's not just about X — it's about Y."
- "This isn't merely X; it's Y."
- "X isn't just a tool. It's a philosophy."
- "Not because X, but because Y" (as a dramatic closer)
More than one instance in a piece: double all instances. This construction is *the* single most reliable modern tell.

### Rule 2.2 — The false-choice pair ("Whether you're...") (3 pts)
- "Whether you're a seasoned professional or just starting out..."
- "Whether you're looking to X or simply want to Y..."
Flag any "whether A or B" that tries to make the audience feel universally addressed.

### Rule 2.3 — The "From X to Y" sweep (2 pts)
"From bustling markets to serene beaches, the city offers something for everyone." Flag especially when paired with "something for everyone" (auto-double).

### Rule 2.4 — Rule-of-three abuse (2 pts each beyond the first)
AI produces triplets compulsively: "faster, cheaper, and more reliable"; "innovate, iterate, and inspire." One triad per 500 words is human. Three triads on one page is machine cadence. Alliterative triads ("purpose, passion, and perseverance") score double.

### Rule 2.5 — The colon-headline sentence (2 pts)
"The result: a product nobody wanted." / "The lesson: always test first." One is punchy. Recurring is a template.

### Rule 2.6 — Empty-agent constructions (1 pt each)
- "Studies show..." (which studies?)
- "Experts agree..." (which experts?)
- "Research suggests..." / "It has been shown that..."
- "Many people believe..."
No citation within the same sentence or footnote = flag.

### Rule 2.7 — The participial tail (2 pts each beyond the second)
Sentences ending in a comma + present-participle clause that *restates* rather than adds: "The company grew rapidly, cementing its position as a market leader." / "She smiled, highlighting her warmth." AI attaches these tails constantly; the tail usually asserts significance the sentence didn't earn. Especially: ", showcasing", ", highlighting", ", underscoring", ", solidifying", ", reflecting", ", demonstrating", ", ensuring", ", making it a must-visit".

### Rule 2.8 — Hedged assertion sandwiches (2 pts)
Claim + immediate retraction + reassertion: "X is the best option. However, it may not suit everyone. Ultimately, the choice depends on your needs." A paragraph that ends where it started, having risked nothing.

### Rule 2.9 — "serves as" / "acts as" / "stands as" (1 pt each)
"The bridge serves as a symbol of unity." Static verbs of designation instead of verbs of action.

### Rule 2.10 — Question-as-transition (1 pt each beyond the first)
"So what does this mean for you?" / "But how do you get started?" / "Sound familiar?" Rhetorical questions used as segues between sections.

### Rule 2.11 — The "In a world where..." opener (3 pts)
Also: "In an era of...", "As [trend] continues to reshape...", "Picture this:". Movie-trailer openings.

### Rule 2.12 — Anaphora without payoff (2 pts)
Three consecutive sentences starting with the same word/phrase ("We believe... We build... We deliver...") in contexts that aren't speeches or manifestos.

### Rule 2.13 — Uniform sentence connectors
Count sentence-initial "However," "Additionally," "Furthermore," "Moreover," "In addition," "On the other hand". More than 1 per 200 words = 1 pt each. If every paragraph pivots on one of these, +5 structural penalty.

### Rule 2.14 — The em-dash cluster (see also Layer 4)
Em dashes used for dramatic beat — like this — more than twice per 300 words (2 pts per excess instance). The specific slop pattern is the *appositive punch*: "the one thing that matters — trust." Single-word or two-word payload after a dash, recurring.

---

## Layer 3 — Structural & rhetorical shape

Zoom out. Blur your eyes. Look at the silhouette of the piece.

### Rule 3.1 — The hamburger essay (3 pts)
Intro that previews ("In this article, we'll explore...") + body + conclusion that recaps ("In conclusion, we've seen that..."). The five-paragraph-essay skeleton scaled up. If you can delete the first and last paragraphs with zero information loss, both were slop.

### Rule 3.2 — Header-per-thought disease (2 pts)
A header every 2–3 paragraphs, each header in parallel grammatical form ("Understanding X", "Exploring Y", "Leveraging Z"). Gerund-led header sets score double. Headers phrased as the content's SEO keywords rather than as claims.

### Rule 3.3 — Bullet metastasis (3 pts)
- Bulleted lists where the items are full sentences that should be prose
- **Bolded lead-in:** followed by a colon and explanation, repeated 5+ times
- Lists whose items are not parallel in kind (a feature, then a benefit, then a warning)
- Nested bullets more than 2 levels deep in non-technical writing
- Every list having exactly 3 or exactly 5 items across the whole document

### Rule 3.4 — Uniform paragraph mass (2 pts)
Measure paragraph lengths. Human writing has variance — a 200-word paragraph next to a 9-word one. If the standard deviation of paragraph length is low (every paragraph 3–4 sentences), flag. Same for sections: every section within ±15% of the same word count = template fill.

### Rule 3.5 — Symmetrical both-sidesism (3 pts)
Every argument immediately balanced by its counter-argument, in the same breath, with no verdict. "While X offers many benefits, it also has drawbacks. Ultimately, the best approach depends on your specific situation." The piece has no thesis — it has coverage. A human expert has *opinions* and *rankings*; slop has *considerations*.

### Rule 3.6 — The FAQ tumor (1 pt)
An unrequested FAQ section bolted to the end of an article. Double if the questions are ones nobody asks ("Is [topic] important? Yes, [topic] is very important because...").

### Rule 3.7 — Coverage over depth (3 pts)
Eight topics at one paragraph each instead of two topics at four paragraphs each. The tell: no section contains anything that required the previous section to be understood. Sections are shuffleable — reorder them and nothing breaks. Human argument is load-bearing and sequential; slop is modular.

### Rule 3.8 — The pre-apology and the throat-clear (2 pts each)
"Before we dive in, it's important to understand..." / "First, let's define what we mean by..." (when the definition is common knowledge) / "There's a lot to cover, so let's get started."

### Rule 3.9 — Key Takeaways box (1 pt)
A "Key Takeaways" or "TL;DR" section that restates the headers as sentences. Fine if genuinely additive; slop if compressive-only.

### Rule 3.10 — Balanced closers (2 pts)
Final paragraphs built on: "Ultimately...", "At the end of the day...", "The choice is yours...", "Only time will tell...", "The future of X looks bright/remains uncertain...", "As X continues to evolve, one thing is certain: ...". The "one thing is certain" closer scores double because the certain thing is never certain and never a thing.

---

## Layer 4 — Formatting, typography, and cosmetic tells

### Rule 4.1 — Emoji as section décor (3 pts)
🚀 Emojis prefixing headers or bullets in professional prose. Rocket, sparkles ✨, fire 🔥, light bulb 💡, chart 📈, target 🎯, check ✅ are the canonical set. One emoji per document in a casual context is human; a *system* of emojis is machine.

### Rule 4.2 — Bold abuse (2 pts)
Bolding **key phrases** mid-sentence so the piece can be "skimmed", multiple times per paragraph. If reading only the bold text produces a coherent summary, the author formatted for a skimmer instead of writing for a reader — classic AI-content-farm pattern.

### Rule 4.3 — Title Case Headers In Body Text (1 pt)
Also: inconsistent header capitalization (some Title Case, some Sentence case) — sign of multi-generation stitching.

### Rule 4.4 — Punctuation fingerprints
- Em dash frequency > 1 per 150 words: 1 pt per excess (see 2.14)
- Semicolons in casual registers where a period was natural: 1 pt each beyond 2nd
- Curly quotes mixed with straight quotes in one document (copy-paste stitching): 2 pts
- Oxford comma inconsistency within one document: 1 pt
- Exclamation marks in professional B2B copy: 1 pt each beyond the 1st

### Rule 4.5 — Markdown leakage (5 pts)
Literal **asterisks**, # hashes, [link](url) syntax, or --- rules appearing in a rendered medium (an email, a printed doc, a LinkedIn post). Near-proof of unedited paste.

### Rule 4.6 — The horizontal-rule tic (1 pt)
--- separators between every section of a short piece.

### Rule 4.7 — Numbered lists that number nothing (1 pt)
"7 Ways to..." where the items have no order, no ranking, and could be 5 or 12. Listicle-count inflation ("21 Essential Tips") doubles it.

---

## Layer 5 — Substance audit (highest weight)

This is the layer that matters most, and the one automation can't do. Score per section.

### Rule 5.1 — The Zero-Knowledge Test (5 pts per failing section)
Could this section have been written by someone who has never done the thing, met the people, used the product, or visited the place? Look for the *absence* of:
- Specific numbers with sources ("costs about €40" vs "can be expensive")
- Named entities that require having been there (the dish, the street, the error message, the clause number)
- Failure stories, edge cases, exceptions ("this breaks when...")
- Time-anchored facts ("as of the March update...")
- Trade-offs stated with a verdict, not a shrug

### Rule 5.2 — Reversibility test (3 pts per instance)
Take any claim and negate it. If the negation is equally plausible-sounding, the claim was empty. "Communication is key to a successful team" → "Communication is not key" is obviously false, but the original still says nothing because *no one argues otherwise*. Slop is dense with unfalsifiable, universally-agreed filler.

### Rule 5.3 — The "so what" chain (2 pts per dead end)
For each paragraph ask "so what?" — a substantive paragraph survives two "so what?"s (claim → implication → action/consequence). Slop paragraphs die at the first.

### Rule 5.4 — Example quality (3 pts each)
- Hypothetical personas with alliterative names ("Imagine Sarah, a busy marketing manager...")
- "For example, a company might..." (a company that doesn't exist doing a thing that didn't happen)
- The same three case studies everyone cites (Netflix pivoting, Kodak dying, Blockbuster ignoring Netflix, Apple's 1997 turnaround) with no new angle
- Examples that restate the claim instead of testing it

### Rule 5.5 — Fabrication & hallucination screen (10 pts each — audit-fail severity)
- Citations that don't resolve: check every DOI, every "et al.", every quoted study. AI-fabricated citations often have real authors + plausible title + wrong journal/year.
- Statistics with no findable origin ("Studies show 73% of consumers...") — reverse-search the number.
- Quotes attributed to famous people: verify. (Einstein, Churchill, and Maya Angelou attract fabricated quotes like lint.)
- Features/settings/menu paths that don't exist in the product being described.
- Laws, regulations, or standards cited with wrong numbers or invented sections.
- URLs that 404 or point somewhere unrelated.
Any confirmed fabrication = automatic audit failure regardless of total score.

### Rule 5.6 — Temporal vagueness (2 pts)
"In recent years", "recently", "nowadays", "in the past decade" doing the work of actual dates. Also: content that is undatable — you cannot tell from internal evidence whether it was written in 2021 or 2026.

### Rule 5.7 — The expertise inversion (3 pts)
The piece explains basics at length and rushes past the hard part. A real practitioner does the opposite. "Setting up your development environment" gets 800 words; "handling race conditions" gets one sentence and a "be careful."

### Rule 5.8 — Hedging density (1 pt each beyond threshold)
Count: may, might, can, could, potentially, generally, typically, often, in some cases, tends to. More than 4 per 200 words means the piece asserts nothing. Exception: genuinely uncertain domains (medicine, law, forecasting) where hedging is honesty — see Layer 13.

### Rule 5.9 — Instruction mirroring (3 pts)
The content restates the brief instead of fulfilling it. Asked for "a detailed guide to X", the piece repeatedly announces that it is a detailed guide to X.

### Rule 5.10 — The missing "no" (2 pts)
Product reviews, recommendations, and comparisons where nothing loses. Every option is "a great choice depending on your needs." A trustworthy comparison declares losers.

---

## Layer 6 — Rhythm & statistical signals

Measurable properties. Useful for automation; humans can eyeball them.

### Rule 6.1 — Sentence-length variance (burstiness)
Compute sentence lengths. Human writing: high variance, frequent short punches (< 6 words) and occasional long runs (> 35 words). Slop: mean 15–22 words with low standard deviation. If the coefficient of variation of sentence length < 0.45, +3 pts. If the piece contains zero sentences under 7 words, +2 pts. Zero fragments in an informal piece, +1 pt.

### Rule 6.2 — Paragraph-opener entropy
List the first word of every paragraph. Slop patterns: high repetition of "The", "In", "This", "When", "As" and connector-openers. If 3+ paragraphs open with the same word, +2 pts.

### Rule 6.3 — Type–token ratio anomalies
Slop is simultaneously repetitive in structure and *over-varied* in synonyms — it will never call a thing the same name twice (city → metropolis → urban hub → bustling center). Elegant-variation chains for the same referent: 2 pts per chain of 3+.

### Rule 6.4 — Verb anemia
Ratio of forms of "to be / to have / to make / to provide / to offer" to total verbs. If > 40% of main verbs are these, +2 pts. Slop describes states; humans narrate actions.

### Rule 6.5 — The no-typo paradox (context-dependent, 1 pt)
For informal, unedited registers (forum posts, DMs, quick emails): flawless grammar + perfect comma placement + zero contractions is itself a signal. Never apply this to edited/professional writing.

### Rule 6.6 — Contraction consistency
A conversational piece that never contracts ("do not", "it is", "cannot" throughout) reads machine-formal: 1 pt. A formal piece that contracts randomly in some paragraphs but not others suggests stitched generations: 2 pts.

---

## Layer 7 — Openings and closings (special inspection zone)

The first and last 10% of any AI-generated piece carry the highest slop concentration.

### Openings — flag on sight
- "In today's fast-paced / digital / ever-changing world..." (5 pts)
- "In a world where..." (5 pts)
- "Have you ever wondered..." (3 pts)
- "Picture this:" / "Imagine a world..." (3 pts)
- "X has become an integral part of our lives" (3 pts)
- "[Topic] is more important than ever" (3 pts)
- "When it comes to [topic], there's a lot to consider" (3 pts)
- Dictionary-definition opener: "Webster's defines X as..." or "X, by definition, is..." (3 pts)
- "In recent years, X has seen tremendous growth" (3 pts)
- A one-sentence-per-line dramatic staircase opening (LinkedIn pattern):
  "I got fired.
  Best thing that ever happened to me.
  Here's why: 🧵" (4 pts)
- Restating the title as the first sentence (2 pts)

### Closings — flag on sight
- "In conclusion," / "To sum up," / "In summary," (3 pts)
- "The future of X is bright" / "exciting times lie ahead" (3 pts)
- "As we've seen..." recap paragraph (2 pts)
- "So what are you waiting for?" (3 pts)
- "The journey of a thousand miles begins with a single step" — any proverb closer (3 pts)
- "Remember: [restatement of thesis as fortune cookie]" (2 pts)
- "Whether you X or Y, one thing is certain..." (4 pts — combines 2.2 and 3.10)
- Unrequested motivational uplift welded onto informational content (2 pts)
- "Happy [gerund]!" — "Happy coding!", "Happy travels!" (2 pts)

---

## Layer 8 — Tone failures

### Rule 8.1 — Sycophancy residue (3 pts each)
Traces of assistant-voice: "Great question!", "That's a fantastic point", "Certainly!", "Absolutely!", "I'd be happy to...", "Sure! Here's...". In published content these are proof of unedited paste (escalate to Layer 12).

### Rule 8.2 — Corporate cheer (2 pts)
Relentless positivity with no object: "exciting", "thrilled", "passionate", "delighted" attached to mundane facts. "We're thrilled to announce our updated privacy policy."

### Rule 8.3 — The safety wobble (2 pts each)
Unrequested disclaimers: "Of course, everyone's situation is different", "Be sure to consult a professional", "It's always best to do your own research" — when the context didn't call for it. (When context *does* call for it — medical, legal, financial — absence might be the problem instead. See Layer 13.)

### Rule 8.4 — Empathy boilerplate (2 pts)
"I understand this can be frustrating." / "Navigating X can feel overwhelming." Feeling-acknowledgment templates in front of informational content.

### Rule 8.5 — False intimacy (2 pts)
"Let's be honest..." / "We've all been there" / "You and I both know..." — manufactured rapport with a reader the author has never considered.

### Rule 8.6 — Uniform enthusiasm gradient (2 pts)
Every product feature, every list item, every destination described at the same excitement level. Humans have favorites; the flatness of equal praise is a machine signature.

---

## Layer 9 — Factual & epistemic integrity

(Extends 5.5 — these are process rules for the auditor.)

- **9.1** Verify every proper noun against reality: product names, versions, people, places, dates. AI blends adjacent facts (right person, wrong company; right law, wrong year). 5 pts per blend; 10 pts per invention.
- **9.2** Check numbers for suspicious roundness and false precision. "Studies show a 47% increase" with no study = fabricated precision (worse than a vague claim, because it *simulates* rigor). 5 pts.
- **9.3** Currency check: does the content assert as current something that changed? (Prices, leadership, APIs, laws.) 3 pts per stale fact presented as current.
- **9.4** Internal contradiction scan: slop stitched from multiple generations contradicts itself across sections (says "5 methods" then lists 6; recommends X in section 2 and warns against X in section 5). 4 pts each.
- **9.5** Plagiarism-adjacent paraphrase: passages that are near-isomorphic to the top-3 search results for the topic, sentence for sentence, with synonyms swapped. 5 pts.
- **9.6** Confidence calibration: certainty language ("definitely", "always", "proven") attached to contested claims, while hedges attach to settled facts. Inverted calibration = 3 pts each.

---

## Layer 10 — Genre-specific modules

Apply the relevant module *on top of* Layers 1–9.

### 10.1 Blog / SEO content
- Keyword stuffed into the first sentence, every H2, and the closer (2 pts)
- "Ultimate guide", "everything you need to know", "complete guide" in title with < 2,000 words of substance (2 pts)
- Definition of the topic given below a header "What is [topic]?" for a topic the target reader necessarily knows (2 pts)
- Word-count padding: the piece could lose 40% with no information loss (3 pts)

### 10.2 LinkedIn / social
- One-line paragraphs stacked as a dramatic staircase (3 pts)
- "Agree?" / "Thoughts?" / "Repost if this resonates ♻️" (2 pts)
- Fake vulnerability arc: humble brag disguised as failure story, resolving in a lesson within 8 lines (3 pts)
- "Unpopular opinion:" followed by the most popular opinion in the industry (3 pts)
- Emoji bullets: ✅✅✅ or 👉 (2 pts)

### 10.3 Email & outreach
- "I hope this email finds you well" (2 pts)
- "I wanted to reach out because..." / "I wanted to touch base" (1 pt)
- "Just following up on my previous email" with no new information (1 pt)
- Personalization tokens that read researched-but-hollow: "I loved your recent post about [topic of recent post]" with nothing specific said about it (3 pts)
- Three paragraphs where three sentences would do (2 pts)

### 10.4 Academic & technical writing
- Citation laundering: real citations attached to claims they don't support (10 pts — verify 3 random citations minimum)
- "Since the dawn of time / Throughout history, humans have..." opener (4 pts)
- Literature review that summarizes each paper in isolation with no synthesis or disagreement mapping (3 pts)
- Methods described in generic terms that couldn't reproduce the work (4 pts)
- Perfectly balanced "limitations" section that lists only harmless limitations (2 pts)

### 10.5 Fiction & creative writing
- "She let out a breath she didn't know she was holding" (4 pts)
- Eyes: widening, darkening, sparkling, "flashing with [emotion]" — more than once (2 pts each)
- "A shiver ran down her spine" (3 pts)
- The air: "thick with tension", "heavy with anticipation" (3 pts)
- Named emotion instead of behavior: "he felt a surge of anger" density > 1 per page (2 pts)
- Every character's dialogue in the same register; no one interrupts, trails off, or misunderstands (3 pts)
- Chapter-end moral summaries: "She realized that true strength came from within" (3 pts)
- Metaphor pileups: two or more mixed metaphors per paragraph in purple passages (2 pts)
- "Little did she know..." (3 pts)
- Symmetrical plot beats arriving exactly on schedule with no digression (2 pts)
- Weather as free mood lighting in every scene opening (1 pt)

### 10.6 Code & technical docs
- Comments that restate the line: i++ // increment i (1 pt each beyond 2nd)
- Docstring boilerplate on trivial functions while the gnarly function is undocumented (2 pts)
- README with badge wall + emoji headers + "🚀 Getting Started" for an internal tool (2 pts)
- Example code that cannot run: undefined variables, imports that don't exist, APIs invoked with wrong signatures (5 pts each — verify by running)
- "In this tutorial, we will learn how to..." (2 pts)
- Error handling that catches everything and does nothing: except Exception: pass presented as good practice (3 pts)

### 10.7 Marketing & product copy
- Benefit-free feature dump or feature-free benefit dump (2 pts)
- "Revolutionary", "disruptive", "next-generation" with no mechanism stated (2 pts each)
- The word "solutions" as the product category (1 pt)
- Testimonials with stock-photo energy: full name + title + company, praising in the brand's own vocabulary (3 pts)

### 10.8 Résumés & cover letters
- "Results-driven professional with a proven track record" (3 pts)
- "I am writing to express my interest in the position of..." (2 pts)
- Achievement bullets with no numbers, or with implausibly round numbers everywhere ("increased sales by 300%") (2 pts)
- Company-name flattery paragraph assembled from the company's own About page (2 pts)

### 10.9 News & reportage
- No quotes from any human, or quotes with no named source (3 pts)
- "Officials say" / "reports indicate" with no official or report (4 pts)
- Both-sides framing applied to factual questions (3 pts)
- Event summary with no detail absent from the press release (3 pts)

---

## Layer 11 — Multimodal slop (adjacent checks)

When auditing content packages, not just text:
- **Images:** hyper-glossy renders with wrong finger counts, garbled embedded text, identical facial structure across "different" people, teal-and-orange oversaturation, corporate-Memphis clip art on serious content. Watermark residue or latent-noise texture in flat color regions.
- **Charts:** axes that don't add up, legends referencing absent series, data invented to fit the narrative (cross-check every plotted number against the text).
- **Audio/video scripts:** uniform sentence cadence readable in one breath; no verbal stumbles scripted where authenticity is claimed.
- **Thumbnails/headlines mismatch:** headline promises a specific; body delivers a generic.

---

## Layer 12 — Provenance & artifact leakage (automatic-fail class)

Any of these = audit failure regardless of score; the content shipped unread by its own author:
- "As an AI language model..." / "As of my last knowledge update..."
- "Certainly! Here's a 1,000-word article on..."
- "[Insert company name]", "[Your Name]", "Lorem ipsum" survivors
- "I cannot browse the internet, but..."
- Prompt fragments: "Write in a friendly, professional tone" appearing in body text
- Duplicate paragraph blocks from regeneration stitching
- A response to a different question than the one the page poses
- Knowledge-cutoff ghosts: "the latest model, released in 2024" published in 2026
- Word counts announced and wrong: "(500 words)" on an 850-word piece

---

## Layer 13 — False positives & calibration (read before scoring anyone)

The audit must not become a witch hunt. Hard rules for the auditor:

1. **No single tell convicts.** Em dashes, "delve", triads, and semicolons are all legitimate tools. Nabokov delved. Dickinson dashed. Score density, never instances in isolation.
2. **Non-native and ESL writers** naturally use formal connectors ("moreover", "furthermore") learned from textbooks. Weight Layer 1 Tier B at half for known ESL authors; lean on Layer 5 (substance) instead — it is register-neutral.
3. **Neurodivergent writing styles** can be highly structured, list-heavy, and formally consistent. Structure alone (Layer 3) never convicts without lexical + substance corroboration.
4. **Domain conventions:** legal writing hedges; academic writing uses passive voice; medical writing includes disclaimers. Rules 5.8 and 8.3 invert in these domains — the *absence* of hedging can be the red flag.
5. **Editing history beats stylometry.** If provenance matters (academic integrity, journalism), request drafts/version history before rendering a verdict. Style analysis produces probabilities, not proof.
6. **AI-assisted ≠ slop.** The audit's target is *unedited, substance-free* output, not the use of tools. A human-verified, fact-checked, opinionated piece drafted with AI help can pass every layer. Judge the artifact, not the workflow.
7. **Pre-2022 baselines exist.** Content mills, SEO farms, and lazy corporate writing produced slop-identical text for decades. A high score means "slop", not necessarily "AI".

---

## Layer 14 — Scoring & verdicts

Normalize: **total points ÷ (word count / 1,000) = slop density score (SDS)**.

| SDS (per 1,000 words) | Verdict | Action |
|---|---|---|
| 0–8 | Clean | Ship. |
| 9–18 | Seasoned | Human-sounding but sloppy in spots. One editing pass on flagged items. |
| 19–35 | Processed | Structural rewrite needed. Keep the facts (after verifying them), rebuild the voice. |
| 36–60 | Slop | Do not edit — regenerate from an actual point of view, or assign a human with firsthand knowledge. Editing slop produces polished slop. |
| 61+ | Toxic slop | Discard. Auditing further is a waste of the auditor. |

**Automatic failures (any one, regardless of SDS):**
- Any confirmed fabrication (5.5, 9.1, 9.2)
- Any Layer 12 artifact
- Fails the Zero-Knowledge Test (5.1) in > 50% of sections

**Weighted layer caps** (prevents one obsessive layer from dominating):
Layer 1 max 30% of total · Layer 5 min 25% consideration in any deep audit · Layers 3+4 combined max 25%.

---

## Layer 15 — Remediation map

For each failing class, the fix — because an audit without a repair path is just complaining:

| Failure class | Fix |
|---|---|
| Lexical (L1) | Don't synonym-swap ("delve"→"explore" is still slop). Delete the sentence and state the underlying fact plainly. |
| Not-just-X-but-Y (2.1) | Pick X or Y. Assert one thing. |
| Hamburger structure (3.1) | Delete intro and outro. Start at the first fact; stop at the last one. |
| Both-sidesism (3.5) | Add a verdict with conditions: "Choose A unless [specific condition], then B." |
| Zero-knowledge (5.1) | Cannot be fixed by editing. Requires a source: interview someone, use the product, go to the place, read the primary document. |
| Empty agents (2.6) | Find the study or cut the claim. |
| Hedging (5.8) | For each hedge ask: am I uncertain, or am I hiding? Keep the honest hedges, delete the cowardly ones. |
| Uniform rhythm (6.1) | Read aloud. Wherever you run out of breath, cut. Wherever you get bored, cut harder. Add one short sentence per paragraph. |
| Tone (L8) | Delete every sentence about feelings the reader hasn't had yet. |
| Sameness of praise (8.6) | Rank things. Say which one you'd pick and why. |

---

## Appendix A — The 60-second triage (memorize this)

1. Read the first sentence. Trailer-voice opener? → suspicious.
2. Ctrl-F: "delve", "landscape", "it's not just", "whether you're", "in conclusion", "testament".
3. Squint at the shape: header-bullet-header-bullet with bold lead-ins? → suspicious.
4. Find one fact that required being there. Can't? → failing.
5. Read the last sentence. "The future is bright / the choice is yours / one thing is certain"? → convicted, pending appeal.

## Appendix B — One-line philosophy

Slop is not a vocabulary problem; it is text optimized to *resemble* an answer rather than to *be* one. Every rule above is a proxy for one question: **did anyone risk anything — a fact, an opinion, a verifiable claim, a joke that could bomb — anywhere in this piece?** If nothing was risked, nothing was written.

---

# PART II — HUMAN NATURALIZATION FACTORS

Part I detects absence. Part II detects presence. The distinction matters because Part I is gameable: any post-processor can inject sentence-length variance, strip "delve", and randomize paragraph mass. Those are *mathematical* naturalization — cosmetic humanity. This part scores the properties that are expensive to counterfeit because producing them requires having a self: a memory, a position, a body, a social context, and something to lose.

Mechanically: Part II awards **Human Presence Credits (HPC)**, which offset the slop score (see revised Layer 14 below). Part II also contains Layer 17, which detects *counterfeit* naturalization — text engineered to farm these credits — and converts faked credits into doubled penalties.

---

## Layer 16 — Human presence credits (positive scoring)

Credits are awarded per 1,000 words, same normalization as penalties. A signal must be *load-bearing* to score — decorative instances score zero (see 16.0).

### Rule 16.0 — The load-bearing test (gate for all credits)
Before awarding any credit, ask: **if I deleted this human touch, would any claim in the piece lose support?** A personal anecdote that merely decorates a generic point is ornament, not presence. Credits only attach to human signals that do argumentative, evidentiary, or structural work. This single gate defeats most credit-farming.

### 16.1 — Temporal selfhood (up to 4 credits)
The writer exists in time and their beliefs have version history:
- "I used to think X. Then [specific event] happened, and now I think Y." — belief revision with a named cause (3 cr)
- References to their own prior work, prior mistakes, prior published positions — especially *retractions* ("I recommended this tool in March; I was wrong, here's what broke") (4 cr)
- Knowledge with an acquisition story: not just knowing the fact but remembering *learning* it, including who taught it or what failure taught it (2 cr)
- Anticipation of their own future error: "Ask me again in a year, I'll probably have reversed on this" (2 cr)
Slop has no past. Every generation is born fully formed, believing everything at once, having learned nothing the hard way.

### 16.2 — Stakes & exposure (up to 5 credits)
The writer has skin somewhere:
- Admissions against interest: facts that hurt the writer's own argument, product, or reputation, stated without being neutralized in the next sentence (4 cr)
- Named disagreement with a specific, findable person or institution — a claim someone could answer back to (3 cr)
- Predictions with falsification dates: "If this isn't shipped by Q1 I'm wrong" (3 cr)
- Confessions of ignorance in the writer's own domain: "I don't understand why this works, and I've been doing it for ten years" (3 cr)
- Positions that alienate part of the writer's own audience (2 cr)
The unforgeable core: **slop cannot be embarrassed.** It has no reputation to spend. Any sentence that spends reputation is strong evidence of a human holding the pen.

### 16.3 — Asymmetric obsession (up to 3 credits)
Human attention is disproportionate; slop attention is allocated by importance-weighting:
- One minor detail examined at absurd length because the writer *cares*, while an "objectively" bigger topic gets a shrug (2 cr)
- A hierarchy of interest that doesn't match the SEO hierarchy of the topic (1 cr)
- Recurring hobby-horses: the writer drags in their pet framework even where it half-fits, and knows it ("yes, this is my hammer, but look —") (2 cr)
The test: could you reconstruct this writer's *personality* from what they over-attend to? If attention is evenly distributed by topical importance, a ranking function wrote it.

### 16.4 — Embodied and situated knowledge (up to 4 credits)
Not sensory *decoration* (Layer 17.4 catches that) but sensation carrying information:
- Physical details that only matter if you've done the thing: the tool that blisters your thumb, the smell that means the batch failed, the specific latency that tells you the cache missed (3 cr)
- Environmental contingency: how weather, fatigue, budget, or a broken elevator actually altered the outcome being described (2 cr)
- Procedural knowledge with the *order* mattering: "do X before Y or you'll strip the thread" — sequence learned from consequence (3 cr)
- Numbers with the texture of measurement rather than retrieval: "somewhere between 40 and 55 minutes depending on how the queue feels that day" (2 cr)

### 16.5 — Live cognition on the page (up to 3 credits)
Evidence the thinking happened *during* the writing, not before it:
- Mid-piece self-correction that survives into the final text: "— actually, no, that framing is wrong, start over:" (3 cr)
- A question the writer raises and genuinely fails to answer, left open without cosmetic resolution (2 cr)
- Visible weighing that lands unevenly: the writer sets up a 3-part framework and then admits part 2 doesn't really hold (2 cr)
- Parenthetical second thoughts that quarrel with the main clause (not that this always works) (1 cr)
Slop's conclusions and openings agree perfectly because both were generated from the same forward pass. Human pieces drift: the ending knows things the beginning didn't.

### 16.6 — Digression with return (up to 2 credits)
A genuine tangent — motivated by association, not outline — that wanders, pays off something unexpected, and *returns to the argument changed* (2 cr). Scored only if the return uses material gathered in the digression. A tangent that returns empty-handed is padding (revert to Rule 3.7).

### 16.7 — Specific address (up to 3 credits)
The piece is written *to someone*, not broadcast at everyone:
- The writer models a particular reader's likely objection and answers it in that reader's vocabulary (2 cr)
- Exclusions: "if you're doing X at hobby scale, close this tab, it's not for you" — willingness to shrink the audience (3 cr)
- In-group references left unexplained on purpose, correctly calibrated to the venue (1 cr)
Slop maximizes addressable audience ("whether you're a beginner or an expert..."); humans choose their reader and let the rest go.

### 16.8 — Idiosyncrasy fingerprint (up to 3 credits)
- Private coinages: the writer's own terminology for a phenomenon, used consistently, ideally with an origin note (2 cr)
- Stable quirks across the piece (a signature construction, a recurring joke format) that are *consistent* — same quirk, same deployment logic (2 cr)
- Aesthetic verdicts with no defense offered: "this is ugly and I won't use it" — taste asserted as taste (1 cr)
Consistency is the fingerprint part: quirks that appear once each and never recur are costume (see 17.2).

### 16.9 — Temporal and cultural anchoring (up to 2 credits)
- References that will visibly date the piece and the writer accepts it: this week's outage, a local price, a meme in its dying days (1 cr)
- Placement in a specific scene or community with its live disputes, not the Wikipedia summary of that community (2 cr)
Slop is written to be evergreen, which is why it is dead on arrival. Willingness to expire is a vital sign.

### 16.10 — Mood drift (up to 2 credits)
The emotional temperature moves across the piece for *narrative* reasons — irritation building through a debugging story, relief after resolution, flatness where the writer is genuinely bored by an obligatory section and lets it show (2 cr). Distinguish from 8.6's uniform enthusiasm and from randomly injected tone-jitter (17.3).

### 16.11 — Productive imperfection (up to 2 credits)
- A structure that visibly bent under the material: the "part 3" that got absorbed into part 2 with a note, the list of 7 that became 6 because item 4 was wrong (2 cr)
- Honest incompleteness: "there's a whole angle on X I'm not covering because I don't know it" (2 cr)
- Ratio integrity: the messy parts are messy *where the thinking was hard*, not uniformly distributed (1 cr)

### 16.12 — Humor that risks failure (up to 2 credits)
Jokes with a bombing condition: specific, contextual, capable of not landing (2 cr). Universal-safe humor ("we've all been there, am I right?") scores zero. Self-deprecation scores only if it discloses a real, checkable flaw rather than a flattering one ("I'm too much of a perfectionist" = 0).

---

## Layer 17 — Counterfeit naturalization (second-order slop)

The arms race layer. Every credit in Layer 16 will be farmed; every metric in Layer 6 will be gamed. These rules detect *engineered* humanity. **Any confirmed counterfeit converts its farmed credits to penalties at 2×** — faking presence is worse than lacking it, because it's fraud aimed at the auditor.

### 17.1 — Mechanical burstiness (3 pts)
Variance injected on a schedule: a short punch sentence appearing every 4–5 sentences with clockwork regularity; sentence-length histogram showing two artificial humps instead of a natural long tail. Human variance is itself variable — bursty in the heated sections, flat in the procedural ones. Uniform *non*-uniformity is the tell. Check: does the rhythm map to the content's emotional terrain, or is it topically indifferent?

### 17.2 — Persona pastiche (4 pts)
Quirks without a nervous system: slang from three incompatible dialects; a "voice" whose casualness fluctuates randomly rather than by topic; signature moves that appear exactly once each, like a checklist of humanity being completed. Test: do the idiosyncrasies *predict each other*? Real voices are correlated bundles (a writer who says "kludge" also structures arguments a certain way). Pastiche quirks are statistically independent.

### 17.3 — Typo and error forensics (3 pts)
Injected imperfection has the wrong distribution:
- Real typos cluster: keyboard-adjacent substitutions, doubled letters, dropped word endings, worse near the end of long pieces (fatigue gradient), worst in sections written fast (the angry paragraph)
- Fake typos are uniform, occur in low-frequency words (real typos favor high-frequency function words typed on autopilot), and never damage meaning
- Real errors *survive with consequences*: a garbled sentence a human didn't reread; fake errors are always cosmetic and always safely decodable
- Grammar errors inconsistent with the writer's demonstrated competence elsewhere in the same piece (flawless subjunctive in ¶2, "should of" in ¶9) = injection signature

### 17.4 — Synthetic anecdotes (5 pts)
The credit-farm attack on 16.2/16.4. Fabricated experience has a grain:
- The story exists solely to prove the thesis; nothing in it is surplus. Real memories carry irrelevant residue — the detail that serves no point but was simply *there* (the surplus-detail test)
- Sensory decoration without consequence: the coffee's smell is described but the smell changes nothing (contrast 16.4, where sensation carries information)
- No cost accounting: real anecdotes leak logistics — who paid, what it displaced, what was said after
- Perfect narrative causality: setback → insight → resolution in three beats, with the insight phrased as the article's H2
- Uncheckability by design: no names, no places, no dates, engineered so nothing can be cross-referenced — while claiming maximal specificity of feeling
- Cross-piece test where possible: does this writer's corpus contain the same "personal" story with drifting details?

### 17.5 — Manufactured vulnerability (3 pts)
Admissions calibrated to cost nothing: failures that showcase virtues, "unpopular opinions" that flatter the audience, confessions of past naivety framed as present-day superiority. Test against 16.2's standard: does the admission *still hurt*? A real admission against interest leaves the writer worse off with some live constituency. If you can't name who the confession costs the writer, it's marketing.

### 17.6 — Thesaurus-degradation naturalization (2 pts)
Post-hoc synonym swaps to beat Layer 1: tell-words replaced by near-synonyms that are slightly *wrong* for the register or collocation ("delve into" → "burrow into the topic"; "landscape" → "terrain of marketing"). The syntax skeleton — the "not just X but Y" frames, participial tails, triads — survives intact under the new paint. Rule: when Layer 2 fires heavily but Layer 1 is clean, suspect laundering and weight Layer 2 at 1.5×.

### 17.7 — First-person retrofit (3 pts)
"I" stapled onto generic content: pronoun density high, but every first-person claim is one no individual could uniquely make ("I've found that communication is important in teams"). Test: replace every "I've found" with "it is said" — if nothing breaks, the self is decorative. Real first person is *unsubstitutable*: it binds claims to a particular history.

### 17.8 — Simulated live cognition (2 pts)
Fake self-correction farming 16.5: "Actually, let me rethink that —" followed by a *pre-planned* pivot that the piece's structure clearly anticipated (the "correction" lands exactly on the next header's topic). Real revision leaves scar tissue: the corrected claim's residue still haunts later paragraphs. Cosmetic revision is hermetically sealed.

### 17.9 — Anti-detection stylometry smell (2 pts)
Text optimized against detectors as such: unnatural avoidance of *all* common bigrams, systematically weird-but-grammatical word choices, perplexity uniformly high (human perplexity is spiky — clichés in the connective tissue, surprise at the pressure points). A piece with no clichés at all is as synthetic as a piece made of nothing else.

---

## Layer 18 — Integration: the net score

Revised verdict computation (supersedes the table procedure in Layer 14; the thresholds stand):

1. Compute **SDS** (slop density) from Layers 1–12 as before.
2. Compute **HPC** (human presence credits) from Layer 16, per 1,000 words. **HPC hard cap: 20/1,000 words.**
3. Run Layer 17. Each confirmed counterfeit: remove the associated credits and add 2× their value as penalties.
4. **Net score = SDS − HPC.** Apply to the Layer 14 verdict table.

Non-negotiable constraints:
- **Credits never offset automatic failures.** Fabrication (5.5, 9.x), Layer 12 artifacts, and confirmed 17.4 synthetic anecdotes fail the audit at any HPC. A charming liar is still a liar.
- **Credits cannot rescue a Zero-Knowledge failure** (5.1) — by construction they shouldn't be able to: a piece failing 5.1 has no material for legitimate 16.x credits, so high HPC + failed 5.1 is itself a Layer 17 investigation trigger.
- **The asymmetry principle:** penalties are awarded on pattern-match; credits are awarded only after the 16.0 load-bearing gate. Doubt convicts features and acquits writers — flag the sentence, but require proof before crediting the persona.

### Rule 18.1 — The counterfeit-suspicion trigger
Open a full Layer 17 investigation whenever: HPC > 12 with SDS also > 20 (humanity sprinkled on slop); OR credits concentrate in exactly one 16.x category (real presence is diffuse — a genuine self leaks into everything, a farmed self deposits into one account); OR the human signals all occur in the first and last 15% of the piece (naturalization applied where auditors look).

### Rule 18.2 — What cannot be scored, only judged
Three properties resist all rubrics; the deep audit ends with the auditor answering them in one sentence each, on the record:
1. **Continuity** — does this piece feel like an episode in an ongoing life, with a before and after?
2. **Cost** — can I point to one sentence that cost the writer something to publish?
3. **Address** — do I know who this was written for, and is it demonstrably not "everyone"?
Two or more "no" answers: subtract 5 from HPC regardless of itemized credits. Rubrics are how slop learns; these three questions are the fallback when it has learned everything above.

---

## Appendix A.2 — Revised 60-second triage (supersedes Appendix A step 5)

1–4 as before, then:
5. Find one sentence that risks reputation, admits ignorance, or excludes readers. Found one → provisional human, proceed to credits. Found none → the piece is guilty of frictionlessness; sentence per the table.
6. If it *seems* human, spot-check one anecdote for surplus detail (17.4) and one quirk for recurrence (17.2). Charm without cost is the newest slop of all.
