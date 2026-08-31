/**
 * Le Benchmark des Makers, couche de chaînes anglaises.
 *
 * **Traduction du français validé, pas une réécriture.** Le français est la
 * référence, chaque clé est rendue phrase par phrase, et rien n'est ajouté,
 * retiré ni « amélioré » au passage. Les clés, leur ordre et les commentaires
 * de section sont ceux de `strings.fr.ts` : les deux fichiers se lisent en
 * vis-à-vis, et `tests/benchmark-strings.test.ts` refuse toute divergence.
 *
 * **Personne n'a encore relu cet anglais.** C'est pourquoi DRAFT_KEYS_EN les
 * couvre toutes : une construction de production les accepte et le dit dans le
 * journal, `BENCHMARK_STRICT_STRINGS=1` les refuse, et le soulignement de
 * développement les montre à qui relit. L'ensemble rétrécit à mesure que
 * Youssef valide, il ne se vide pas d'un coup.
 *
 * Deux points de traduction qui ne se devinent pas :
 *
 * - **« The Makers Benchmark »** vient de l'artefact de référence, dont c'est
 *   le `<title>`. Le nom anglais du produit n'a donc pas été inventé ici.
 * - **Les {jetons} ne se traduisent pas.** Ce sont des clés : `{niveau}` rendu
 *   `{level}` ne casse ni le typage ni le rendu, la valeur n'arrive simplement
 *   jamais et la phrase part en ligne avec un `{level}` en toutes lettres au
 *   milieu. Un test verrouille les jetons clé par clé.
 *
 * Une valeur vide n'est pas un oubli silencieux : elle s'affiche en évidence en
 * développement, elle fait échouer une construction de production, et
 * `localeIsComplete("en")` la voit.
 */

export const STRINGS_EN: Record<string, string> = {
  // ---------------------------------------------------------------- métadonnées
  // PROVISOIRE, voir DRAFT_KEYS.
  "meta.title": "The Makers Benchmark: test your AI level in 6 minutes",
  "meta.description":
    "Nine real situations drawn from our audits, three rounds, 45 seconds per question. The Benchmark measures your AI level and adjusts its difficulty at every round. Four tracks, one leaderboard.",

  // ------------------------------------------------------------- barre de statut
  "status.session": "Session",
  "status.track": "Track",
  "status.round": "Round",
  // Sert aussi de libellé accessible à l'échelle en trois points : c'est le
  // même objet, il n'a pas besoin de deux noms.
  "status.niveau": "Level",
  // Seule entrée de la barre dont la valeur est dans la chaîne.
  "status.palier": "Step {n}/3",
  "status.score": "Score",

  // --------------------------------------------------------------------- niveaux
  // TIER_LABEL, une seule source pour la barre, les verdicts, la carte de score
  // et le classement.
  "tier.beginner": "Beginner",
  "tier.intermediate": "Intermediate",
  "tier.expert": "Expert",

  // -------------------------------------------------------------------- landing
  "landing.headline1": "The assessment measures what your company says about AI.",
  "landing.headline2": "The Benchmark measures what your teams actually know.",
  "landing.lede":
    "Nine real situations, drawn from our audits and our client work, in your own field. Every round scores you and moves your difficulty. Nobody takes the same path twice, and nobody reaches expert by accident.",

  // L'artefact coupe chaque statistique en trois : un libellé, un chiffre, une
  // précision. Le pack les écrit « 9 · 3 rounds de 3 », c'est la même coupure.
  "landing.stat1.label": "Questions",
  "landing.stat1.value": "9",
  "landing.stat1.sub": "3 rounds of 3",
  "landing.stat2.label": "Time",
  "landing.stat2.value": "45 s",
  "landing.stat2.sub": "per question",
  "landing.stat3.label": "Tracks",
  "landing.stat3.value": "4",
  "landing.stat3.sub": "pick your field",
  "landing.stat4.label": "Max score",
  "landing.stat4.value": "240",
  "landing.stat4.sub": "a flawless expert run",

  "landing.rule1":
    "Everyone starts at intermediate. No warm-up: we assume you are already in the subject.",
  "landing.rule2":
    "3 correct answers in a round move you up. 2 keep you where you are. 1 or 0 move you down.",
  // La règle 3 est la nouvelle : chaque round tape plus fort, donc se maintenir
  // fait quand même avancer d'un palier.
  "landing.rule3":
    "Every round hits harder than the one before. Even holding your level, you move to the next step: the round 3 questions are the ones that separate someone who uses AI from an AI Champion.",
  "landing.rule4":
    "The harder the level, the more it pays. Beginner 10 points, intermediate 20, expert 30. Stringing easy questions together will never beat moving up.",
  "landing.rule5":
    "45 seconds per question. Enough to think, too little to go and ask a model.",

  "landing.cta": "Start the Benchmark",
  "landing.ctaNote": "About 6 minutes",

  // Lien de défi reçu : la landing affiche qui il faut battre.
  // PROVISOIRE, voir DRAFT_KEYS.
  "landing.challengedBy": "{nom} scored {score}/240, level {niveau}. Your turn.",

  // --------------------------------------------------------------- onboarding
  // ARTEFACT : le compteur d'étape, rendu « 01 / 05 ».
  "onboarding.counter": "{n} / {total}",
  "onboarding.continue": "Continue",
  "onboarding.enterHint": "or press Enter",
  "onboarding.back": "Back",

  "onboarding.step1.label": "What name would you like on the leaderboard?",
  // Le prénom d'exemple ne se traduit pas : c'est un nom, il se lit dans les
  // deux langues, et en changer en inventerait un.
  "onboarding.step1.placeholder": "Camille Bernard",
  "onboarding.step1.hint":
    "Only your first name and the initial of your last name are shown publicly.",
  "onboarding.step1.error": "We need a name to show on the leaderboard.",

  "onboarding.step2.label": "Where should we send your scorecard?",
  "onboarding.step2.placeholder": "camille@your-company.com",
  "onboarding.step2.hint":
    "Your round by round detail, your place on the leaderboard, and the answer key: every question points back to the use case or the governance rule behind it.",
  "onboarding.step2.error": "That address looks incomplete. Please check it.",

  "onboarding.step3.label": "At which company?",
  "onboarding.step3.placeholder": "Your company name",
  "onboarding.step3.hint":
    "It appears nowhere. We use it to group the runs of one team when several colleagues take the Benchmark, and to place our answers in your context.",
  "onboarding.step3.error":
    "Freelance, or between two jobs? Write that down, it counts too.",

  "onboarding.step4.label": "Which department do you work in?",
  "onboarding.step4.hint":
    "This choice loads the question bank for your field. All four tracks are scored the same way and meet on a single leaderboard.",
  "onboarding.step4.error":
    "Pick a department: it is what decides your questions.",

  "onboarding.step5.label": "What do you work on in {track}?",
  "onboarding.step5.hint":
    "Last step. Take the closest one: your run starts on the click.",
  "onboarding.step5.error": "Take the closest one. One click is enough.",
  // Section 11 du PRD. Le pack fournit la mention de démonstration, qui dit que
  // rien n'est transmis : faux depuis que Supabase est branché.
  //
  // Version courte, option B de `docs/BENCHMARK-MENTIONS-A-VALIDER.md`. Elle
  // garde les trois choses qui doivent y être : ce qui est public, que l'e-mail
  // est stocké sans être affiché, et à quoi il sert. Les autres options et la
  // version longue sont dans ce document.
  //
  // PROVISOIRE, en attente d'Othmane. Traduite malgré tout, sur décision du
  // propriétaire du 28 août : la version française est déjà en ligne, donc les
  // deux disent la même chose non validée plutôt qu'une seule.
  "onboarding.step5.privacy":
    "On the leaderboard: display name, level, score. Your company and your email are stored, never displayed, and are only used to send you your scorecard. Your data, your rules.",

  // ----------------------------------------------------------------- question
  "question.timerLabel": "Time",
  "question.points": "{pts} pts",
  "question.position": "Round {n} · Q{i} · step {p}",
  // ARTEFACT : les quatre lettres des options.
  "question.optionA": "A",
  "question.optionB": "B",
  "question.optionC": "C",
  "question.optionD": "D",

  "question.resultCorrect": "Correct · +{pts} pts",
  "question.resultWrong": "Wrong answer · 0 pts",
  "question.resultTimeout": "Time is up · 0 pts",

  "question.nextMidRound": "Next question",
  "question.nextEndOfRound": "End of round: see the verdict",
  "question.nextEndOfRun": "See my scorecard",

  "question.liveRegion": "Round {n}, question {i}, level {niveau}, step {p}.",

  // ------------------------------------------------------- verdict de fin de round
  "verdict.montee.pill": "Level up",
  "verdict.montee.title": "3 / 3, you move up",
  "verdict.montee.body":
    "Flawless. Next round: the {niveau} bank, step {p}, {pts} points a question. You change level and step at the same time.",

  "verdict.plafond.pill": "Ceiling held",
  "verdict.plafond.title": "3 / 3 at expert",
  "verdict.plafond.body":
    "There is nothing above this. You stay at expert, at 30 points a question, and you move to step {p}: the three situations we keep for our AI Champions.",

  "verdict.descente.pill": "Level down",
  "verdict.descente.title": "{n} / 3, you move down",
  "verdict.descente.body":
    "That round did not hold. The next one drops back to {niveau}, at {pts} points a question. The difficulty does not start over for all that: you come in at step {p}.",

  "verdict.plancher.pill": "Floor held",
  "verdict.plancher.title": "{n} / 3 at beginner",
  "verdict.plancher.body":
    "Beginner is the floor, so you stay there. The step still moves on: the next round's questions are the hardest in this bank.",

  "verdict.maintien.pill": "Level held",
  "verdict.maintien.title": "2 / 3, you hold your level",
  "verdict.maintien.body":
    "Two out of three keep you at {niveau}. Three would have moved you up. The next round stays at this level and moves to step {p}: same points, harder situations.",

  "verdict.cta": "Start round {n}",

  // -------------------------------------------------------------- carte de score
  "scorecard.eyebrow": "Run complete",
  // PROVISOIRE, voir DRAFT_KEYS. Le bandeau bleu en haut de la carte
  // partageable. Le pack ne l'a pas fourni.
  "scorecard.benchTop": "AI MAKERS · THE MAKERS BENCHMARK",
  "scorecard.subline":
    "{hits} correct out of {total}, across 3 rounds, in {temps}.",
  // L'artefact affiche le score en très gros puis « / 240 » en petit. Le pack
  // écrit la ligne entière, « {score} / 240 » : c'est la même coupure.
  "scorecard.scoreOutOf": "/ {max}",
  // La ligne complète du pack. Le composant la coupe au tiret pour remplir les
  // deux colonnes du tableau, exactement là où l'artefact la coupe. Le tiret
  // est un séparateur, il n'est jamais rendu : `splitRoundLine` le mange.
  "scorecard.roundLine": "Round {n} · {niveau} · step {p} - {c}/3 · {pts} pts",
  "scorecard.finalTier": "Final level",
  "scorecard.time": "Time",

  // VERDICT_COPY, une paire par niveau de sortie.
  "scorecard.verdict.beginner.title": "You finish at beginner level.",
  "scorecard.verdict.beginner.body":
    "Everyone here starts at intermediate, so this run took the hard road. The answer key below is the fastest way back up: every explanation names the principle at play, the one we teach in the AI Champions training.",
  "scorecard.verdict.intermediate.title": "You finish at intermediate level.",
  "scorecard.verdict.intermediate.body":
    "A solid command of the ground. The gap to expert level is rarely about how many tools you know. It is about governance: knowing where a human stays indispensable, and which failure mode each choice buys you.",
  "scorecard.verdict.expert.title": "You finish at expert level.",
  "scorecard.verdict.expert.body":
    "You held the hardest bank in the game, step 3 included. Inside a team, that level is called an AI Champion: the person the others turn to before plugging an agent into a real process.",

  "scorecard.copyLinkedIn": "Copy my LinkedIn post",
  "scorecard.seeCorrige": "See the answer key",
  "scorecard.otherTrack": "Try another track",

  // --------------------------------------------------------------------- badge
  // Traduit du français, non relu, comme tout ce fichier. Les {jetons} gardent
  // leur nom français : ce sont des clés, pas du texte.
  //
  // Le mot « certification » est banni ici aussi. On dit « level » ou
  // « result ». Le test `badge-wording` couvre les deux langues.
  "badge.shareLinkedIn": "Post on LinkedIn",
  "badge.download": "Download the badge",
  "badge.addToProfile": "Add to my profile",
  "badge.previewAlt": "The Makers Benchmark badge, {niveau} level, {track} track",
  "badge.profileEntry": "The Makers Benchmark, {niveau} level ({track})",
  "badge.pageTitle": "{nom}, {niveau} level",
  "badge.pageLead": "{score} out of {max} on The Makers Benchmark, {track} track.",
  "badge.backToBenchmark": "Take the Benchmark",
  "badge.honest":
    "This badge records a run played on aimakers.fr. It is not a proctored exam, and the score on it was earned over nine questions.",
  "badge.brokenTitle": "This badge link is incomplete",
  "badge.brokenBody":
    "Something is missing from the link, or one part of it was edited. Play the Benchmark to get a badge in your own name.",

  // ------------------------------------------------------------------- corrigé
  "corrige.title": "Answer key",
  "corrige.pillCorrect": "Correct",
  "corrige.pillWrong": "Missed",
  "corrige.pillTimeout": "No answer, time ran out",
  // ARTEFACT : les deux glyphes qui portent la réponse.
  "corrige.correctAnswer": "✓ {reponse}",
  "corrige.yourAnswer": "✗ {reponse}",
  "corrige.close": "Close",

  // ---------------------------------------------------------------- classement
  "leaderboard.title": "Leaderboard",
  "leaderboard.colRank": "#",
  "leaderboard.colName": "Name",
  // Plus rendue depuis le 31 août : la colonne entreprise est retirée du
  // classement. La clé reste, parce que la retirer casserait la parité entre
  // les deux langues pour une chaîne qui coûte quinze octets, et parce que
  // remettre la colonne un jour ne doit pas demander de réécrire l'en-tête.
  "leaderboard.colCompany": "Company",
  "leaderboard.colTier": "Level",
  "leaderboard.colScore": "Score",
  // Deux écarts avec le français, tous les deux volontaires.
  //
  // 1. Le gabarit français porte le « e » de l'ordinal hors du jeton,
  //    « {rang}e ». L'anglais ne se découpe pas ainsi : « 1st » arrive entier à
  //    la place du jeton, et `rankCounter` gère les deux formes.
  //
  // 2. Le nombre ne commence pas la phrase. « {n} runs » donne « 1 runs » au
  //    tout premier parcours enregistré, c'est-à-dire précisément la ligne que
  //    lit la première personne à passer le test. Le français ne pose pas le
  //    problème, « parcours » étant invariable. Plutôt que d'ajouter une
  //    machinerie de pluriel pour une seule chaîne, la phrase est écrite pour
  //    ne pas en avoir besoin.
  "leaderboard.counter": "Runs: {n} · you are {rang}",
  // PROVISOIRE, voir DRAFT_KEYS. La pastille posée sur une ligne dont ce n'est
  // pas la première tentative. Le pack ne l'a pas fournie, et l'artefact n'a
  // pas de badge de reprise du tout.
  "leaderboard.retakeBadge": "2nd attempt",
  // Ne devrait jamais s'afficher, les 14 parcours d'exemple étant livrés avec.
  // Existe pour que le composant ne puisse pas rendre un tableau vide.
  // PROVISOIRE, voir DRAFT_KEYS.
  "leaderboard.empty":
    "No runs recorded yet. Yours will open the leaderboard.",
  // Section 11. Le pack fournit la note de démonstration, qui dit que le tableau
  // mélange des parcours d'exemple et des parcours locaux au navigateur : faux
  // depuis Supabase. Version courte, option B du même document.
  // PROVISOIRE, en attente d'Othmane.
  "leaderboard.note":
    "One leaderboard, four departments. Display name, level, score: no company, no email address. The first runs are examples.",

  // ---------------------------------------------------------------- conversion
  "closer.eyebrow": "What comes next",
  "closer.expert.title": "You know. Do your systems in production know?",
  "closer.expert.body":
    "Finishing at expert means you spot the failure modes on paper. The teams we audit spot them too, and still ship agents with no replayable trace, no escalation threshold and no evaluation set. An AI Scan starts exactly there: process first, solution second.",
  "closer.other.title":
    "The gap this run has just revealed can be closed in a day.",
  "closer.other.body":
    "Your weak rounds point at specific things: where to put a guardrail, what to log, which decision to leave to a human. 70% of an AI transformation is the people. That is what the AI Champions training is for: one AI lead per team, trained on your own use cases.",
  "closer.cta": "Book a free call",
  "closer.challenge": "Challenge a colleague",

  // ------------------------------------------------------------------- partage
  // Le gabarit du post LinkedIn et le message de défi vivent dans
  // `content/labels.ts`, avec le reste de ce que le pack exporte, et leur
  // version anglaise dans `content/labels.en.ts`. Deux clés vides les
  // attendaient ici, du temps où la seconde locale n'avait pas de fichier de
  // contenu à elle : retirées le 28 août, parce qu'une clé vide n'est pas une
  // place réservée mais un trou, et que ces deux-là empêchaient une locale
  // d'être jamais déclarée complète.

  // --------------------------------------------------------------------- langue
  // Traduit du français, non relu, comme tout ce fichier.
  "guard.title": "Switch language?",
  "guard.body":
    "The Benchmark restarts from the home screen in the other language: the answers you have already given do not follow. A finished run stays on the leaderboard.",
  "guard.confirm": "Switch anyway",
  "guard.cancel": "Stay here",

  // -------------------------------------------------------------------- toasts
  "toast.linkedInCopied": "Post copied. Paste it straight into LinkedIn",
  "toast.linkedInFailed":
    "Clipboard unavailable. Select the text by hand",
  "toast.challengeCopied": "Challenge copied. Send it over",
  "toast.demoNotice":
    "Demo version. Live, this button opens the booking form",

  // -------------------------------------------------------------------- footer
  "footer.brand": "aimakers.fr · The Makers Benchmark",
  // Section 11. Le pack fournit la mention de démonstration, qui dit qu'aucune
  // donnée ne quitte le navigateur : faux depuis Supabase.
  // PROVISOIRE, en attente d'Othmane.
  "footer.privacy": "Four departments · email never displayed",
};

/**
 * **Tout l'anglais est provisoire**, et pas seulement les dix clés qui le sont
 * en français.
 *
 * La raison n'est pas la même des deux côtés. En français, une chaîne
 * provisoire est une chaîne que le pack n'a pas fournie. Ici, c'est une
 * traduction que personne n'a encore relue : elle se lit comme du texte fini,
 * c'est tout le risque, et une traduction plausible et fausse coûte plus cher
 * qu'un trou.
 *
 * Conséquences concrètes : `BENCHMARK_STRICT_STRINGS=1` refuse de construire la
 * page anglaise, `NEXT_PUBLIC_BENCHMARK_SHOW_DRAFTS=1` la souligne d'un bout à
 * l'autre pour la relecture, et le journal de construction les liste.
 *
 * **Cet ensemble rétrécit clé par clé, à mesure que Youssef valide.** Il ne se
 * vide pas d'un coup : les dix clés provisoires du français le restent en
 * anglais, puisqu'une traduction ne valide pas ce qu'elle traduit.
 */
export const DRAFT_KEYS_EN = new Set<string>(Object.keys(STRINGS_EN));
