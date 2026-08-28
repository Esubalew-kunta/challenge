/* Labels and share copy — Le Benchmark des Makers. English.

   TRANSLATED FROM `labels.ts`, NOT REVIEWED YET.

   The seeded leaderboard is NOT here: those rows are people's names and
   companies, they read the same in both languages, and duplicating them would
   only create two lists to keep in step. `content/index.ts` serves the one in
   `labels.ts` to both locales.

   `POST_LINKEDIN` and `DEFI_COLLEGUE` carry {tokens} the scorecard injects. The
   token names are keys, not copy: they must survive translation unchanged, or
   the value lands nowhere and the sentence ships with `{score}` written out in
   the middle of it. `{NIVEAU}` is uppercase on purpose, the scorecard fills it
   with the uppercased tier label.

   The product name comes from the reference artifact, whose own <title> is
   "The Makers Benchmark". It was not invented here.

   The challenge message ends on `aimakers.fr` and carries no link token: the
   deep link is added on the line below rather than inserted inside, so the
   approved sentence stays whole. */

export const TIER_LABEL = { beginner: "Beginner", intermediate: "Intermediate", expert: "Expert" };

/* French tags translated, English ones left alone: #GEO, #SEO, #RevOps,
   #ClaudeCode, #n8n and #AIFirst are the same hashtag in both markets, and a
   hashtag that differs by language splits the audience it exists to gather. */
export const HASHTAGS = {
  growth: "#GEO #SEO #AIFirst",
  eng: "#AIAgents #ClaudeCode #AIFirst",
  ops: "#Automation #n8n #AIFirst",
  fin: "#RevOps #AIGovernance #AIFirst"
};

/* LinkedIn post text — values in braces are injected by the engine. */
export const POST_LINKEDIN = "I scored {score}/240 on The Makers Benchmark, level {NIVEAU}, {track} track.\n\nThis is not the AI maturity assessment you fill in for your company. Here you answer for yourself, on real situations from your own field: where to put a guardrail, which process to automate, when to hand back to a human. Everyone starts at intermediate, 3 out of 3 moves you up, 1 or 0 moves you down, and the difficulty steps up every round.\n\n{hits} correct out of {total}, {temps} on the clock.\n\nThink you can do better? aimakers.fr\n\n{hashtags}";

export const DEFI_COLLEGUE = "I scored {score}/240 at {niveau} level on The Makers Benchmark ({track} track). Your turn: aimakers.fr";
