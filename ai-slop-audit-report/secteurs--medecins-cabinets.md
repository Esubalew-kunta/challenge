# AI-Slop Audit — secteurs--medecins-cabinets (EN)

## Net score: SDS − HPC = 8
- SDS ≈ 15 / 1,000 · HPC ≈ 7 / 1,000 · **Net ≈ 8 → Clean (top edge)**
- Audited copy: hero intro, 4 pains, 4 use cases, CTA title/subtitle, 3 FAQ answers, GEO block, llms.txt (~530 words).

## Verdict + action
**Clean.** Strong clinician-facing embodiment and honest regulated-sector discipline. The "up to two hours a day" figure is correctly tagged `[to validate]` and attributed as an industry estimate — that is good-practice sourcing, NOT a Layer 5.5 fabrication. Assistive-only / confidentiality framing is domain honesty (Layer 13.4), not a safety wobble. Light pass only. No auto-fail.

## Top tells (verbatim + layer)
- **Layer 2.1 (negative parallelism, 3 pts):** hero "It stays strictly an admin and documentation aid — never a diagnostic or treatment tool" — the em-dash "X — never Y" device, shared with the sante/agences heroes.
- **Repeated guardrail clause (rhythm):** "reviewed before they go out", "a prompt for you, not a clinical decision", "reviewed by you" — the same human-in-loop stamp on every card. Legitimate guardrail, but uniform (flag for Layer 6 rhythm, scored neutral under 13.4).
- **Layer 3.4 / cross-corpus verbatim (2 pts):** CTA closer + GEO closer identical to siblings.
- **Layer 2.5 (colon-headline, 2 pts):** use-case cards.

## Credits (HPC)
- **16.4 embodied/situated (3 cr):** "Dictation or brief notes turned into structured reports and referral letters in your style", "History, tests and prior letters summarised before the consultation", "the front desk augmented, not replaced" — clinic-native workflow detail distinct from the R&D life-sciences page.
- **16.2 admission against interest (2 cr):** "you're rightly wary about medical confidentiality" validates the buyer's objection instead of neutralising it; "never a diagnostic or treatment tool" narrows the product's own claim.
- **16.9 anchoring (1 cr):** "up to two hours by common estimates `[to validate]`" — a datable, checkable figure the writer flags rather than launders.
- **16.7 specific address (1 cr):** FAQ "Do I need to be comfortable with technology?" answered for clinicians specifically.

## Remediation
- Hero: drop the "— never a diagnostic or treatment tool" em-dash appositive into a plain clause so it doesn't share the sante/agences rhetorical shape ("It is an admin and documentation aid only; it never makes diagnostic or treatment decisions").
- Vary the "reviewed by you / reviewed before it goes out" stamp across the four cards.
- Confidentiality FAQ overlaps the sante/tpe-pme "never used to train the models" boilerplate — keep the médecins version anchored on secret médical + certified hosting so it stays sector-owned.

## Repeated devices seen on this page
- Negative-parallelism em-dash hero device — shared with sante/agences heroes, conseil FAQ
- "Watch and continuing education" — the "…and watch" device shared with agences/sante/conseil
- "data is never used to train the models" / "written usage rules" — data-safety FAQ shared with tpe-pme/sante/conseil
- CTA closer "You leave with a plan whether you work with us or not." (all 8)
- CTA title "Where would AI give you clinical time back?" — the "give time back" variant shared with sante
- GEO closer "among 50+ companies and 200+ systems deployed" (all 8)
- Colon-headline use-case card rhythm (all 8)
