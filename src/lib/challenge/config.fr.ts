/**
 * Les chaînes d'interface du challenge, en français.
 *
 * Un second objet à côté de `UI`, exactement comme annoncé dans `config.ts`.
 * Pas une seconde logique : les composants lisent l'un ou l'autre selon la
 * langue de la page, et rien d'autre ne change.
 *
 * `satisfies ChallengeUI` fait le travail de garde-fou : ajouter une chaîne en
 * anglais sans l'ajouter ici casse la compilation, au lieu d'afficher un mot
 * anglais sur une page française trois semaines plus tard.
 *
 * `ChallengeUI` et pas `typeof UI` parce que `UI` est déclaré `as const` : son
 * type dit que `challengeName` vaut exactement « 30 Days of Claude Code », ce
 * qu'aucune traduction ne peut satisfaire. `ChallengeUI` élargit les littéraux
 * et garde les noms de champs, qui sont la seule chose à vérifier ici.
 *
 * Règles de ton, identiques à l'anglais :
 *
 *   - phrases courtes, vocabulaire de tous les jours, aucun jargon
 *   - jamais de tiret cadratin ni de double trait d'union
 *   - on vouvoie, comme le reste du site
 *   - on ne promet rien qu'une page ne tienne
 */

import { PHASES } from "./config";
import type { ChallengeUI, PhaseMeta } from "./config";

/**
 * Les trois phases, en français.
 *
 * Les `id` et les `range` viennent de la version anglaise et ne sont pas
 * recopiés : une phase qui irait du jour 1 au jour 10 en anglais et du jour 1
 * au jour 11 en français serait un bug invisible jusqu'à ce qu'un lecteur
 * tombe sur un jour qui n'existe dans aucune des deux listes.
 */
export const PHASES_FR: PhaseMeta[] = [
  {
    ...PHASES[0],
    label: "Phase 1",
    title: "Le faire fonctionner",
    /*
      Finissait par « Beaucoup de gens s'arrêtent là, et c'est très bien ».

      C'était censé enlever la pression. Sur la liste des trente, lue par
      quelqu'un qui hésite encore à commencer, ça fait l'inverse : ça donne
      l'autorisation d'abandonner au jour 10 avant même d'avoir ouvert le jour
      1, et ça fait passer les deux phases suivantes pour facultatives.
    */
    promise:
      "Installé, au travail sur vos vrais fichiers, avec un garde-fou qui refuse de toucher ce que vous ne pouvez pas perdre.",
  },
  {
    ...PHASES[1],
    label: "Phase 2",
    title: "Le rendre vôtre",
    promise:
      "Le façonner autour de votre vrai travail. C'est là qu'un outil générique devient votre outil.",
  },
  {
    ...PHASES[2],
    label: "Phase 3",
    title: "Le faire travailler sans vous",
    promise: "Du travail qui avance pendant que vous faites autre chose.",
  },
];

export const UI_FR = {
  challengeName: "Claude Code en 30 jours",
  tagline:
    "Une page courte par jour. À la fin, Claude Code travaille vraiment, sur vos vrais fichiers, sans que vous le surveilliez.",
  allDays: "Tous les jours",
  dayOf: (n: number) => `Jour ${n} sur 30`,
  minutes: (n: number) => `${n} min`,
  outcomePrefix: "Vous repartez avec :",
  needsApp: "Nécessite l'application installée",
  needsAppHelp:
    "Claude Code doit être installé sur votre propre ordinateur pour ce jour.",
  whyLabel: "Pourquoi c'est utile",
  sectionsLabel: "Trois choses à comprendre",
  stepsLabel: "À faire maintenant",
  winLabel: "Ce qui vient de changer",
  quizLabel: "Vérifiez-vous",
  quizCounter: (i: number, total: number) => `Question ${i} sur ${total}`,
  sheetTag: "Téléchargement gratuit",
  sheetEmailPlaceholder: "vous@entreprise.com",
  sheetButton: "Envoyez-la moi",
  sheetSending: "Envoi",
  sheetDone: "C'est parti. Regardez votre boîte mail.",
  sheetFineprint:
    "Elle s'ouvre aussi tout de suite sur cette page. L'email sert juste à en garder une copie.",
  sheetOpenNow: "L'ouvrir maintenant",
  sheetNotReady:
    "Celle-ci est encore en cours de finition. Elle arrivera dans votre boîte mail dès qu'elle sera prête.",
  sheetEmailLabel: "Votre adresse email",
  sheetFailed: "Ça n'est pas passé. Réessayez dans un instant.",
  sheetBadEmail: "Vérifiez votre adresse email",
  sheetNoPrices:
    "Aucun prix ni détail d'abonnement n'est imprimé dessus. Ils renvoient vers notre site, donc la fiche ne peut pas devenir fausse dans votre boîte mail.",
  dayLabel: (n: number) => `Jour ${n}`,
  beforeNextDay: (n: number) => `Avant de passer au jour ${n}`,
  thatIsAllThirty: "Et voilà les trente",
  allDaysCount: (n: number) => `Les ${n} jours`,
  prev: "Précédent",
  next: "Suivant",
  verifiedPrefix:
    "Chaque commande de cette page a été exécutée avant publication. Vérifiée avec",
  ctaTitle: "Vous voulez déployer ça dans une équipe ?",
  ctaBody:
    "AI Makers aide les entreprises à mettre Claude Code au travail correctement. Pas de discours commercial, juste une conversation.",
  ctaButton: "Parlons-en",
  langLabel: "Langue",

  /* ---------------------------------------------------------------- score */

  scoreTitle: "Votre progression",
  scoreEmpty:
    "Répondez aux questions en bas de n'importe quel jour et votre score démarre ici.",
  scorePoints: "Points",
  scoreDays: "Jours faits",
  scoreStreak: "Jours d'affilée",
  scoreOf: (a: number, b: number) => `${a} sur ${b}`,
  scoreLevelLabel: "Niveau",
  scoreToNext: (n: number, level: string) => `${n} points de plus pour ${level}`,
  scoreTopLevel: "Dernier niveau atteint.",
  /** En avance, en retard, ou pile sur un jour par jour. */
  scorePaceAhead: (n: number) =>
    n === 1
      ? "Un jour d'avance sur un jour par jour."
      : `${n} jours d'avance sur un jour par jour.`,
  scorePaceBehind: (n: number) =>
    n === 1
      ? "Un jour de retard sur un jour par jour."
      : `${n} jours de retard sur un jour par jour.`,
  scorePaceLevel: "Pile sur un jour par jour.",
  scoreFinished: "Les trente sont faits.",
  scoreLocal:
    "Gardé dans ce navigateur uniquement. Rien ne nous est envoyé, et vider votre navigateur l'efface.",

  /* ------------------------------------------------- les deux questions */

  profileTag: "Avant de commencer",
  profileTitle: "Trente jours, c'est beaucoup. Lesquels vous faut-il ?",
  profileBody:
    "Deux clics. Rien n'est envoyé nulle part, et vous pouvez fermer.",
  profileStepOf: (i: number, total: number) => `Question ${i} sur ${total}`,
  profileDoneTitle: "Voilà par où commencer",
  profileSkipStep: "Passer cette question",
  profileSeeAllDays: "Voir les trente jours",
  profileLevelQuestion: "Vous avez utilisé Claude Code à quel point ?",
  profileRoleQuestion: "Vous êtes dans quel service ?",
  profileStartAt: (day: number) => `Commencez au jour ${day}.`,
  profileDayLabel: (day: number) => `jour ${day}`,
  profileAnsweredPrefix: "On vous a orienté vers le",
  profileDismissed:
    "Vous avez passé les deux questions. N'importe quel jour est un bon départ.",
  profileChange: "Changer",
  profileSkip: "Fermer",
  profileFineprint:
    "Les réponses restent dans ce navigateur. Elles ne partent que si vous demandez une fiche plus tard.",

  /* --------------------------------------------------------- fiche méritée */

  earnedTag: "Méritée",
  earnedTitle: "La fiche Équipe",
  earnedPitch:
    "La seule fiche qui n'est sur aucune page de jour. C'est comment tout ce que vous avez appris survit à quatre collègues qui s'y prennent mal : ce qui doit être versionné, ce que fait un nouvel arrivant dans sa première demi-heure, et ce qui casse dès qu'une deuxième personne s'y met.",
  earnedWhy:
    "Vous n'avez pas expédié ce parcours. C'est exactement pour ça que vous l'avez.",
  earnedButton: "Envoyez-moi la fiche",
  earnedFineprint:
    "Facultatif, comme toujours. Elle s'ouvre tout de suite sur cette page et l'email sert juste à en garder une copie.",
  /** Assez de points, mais tout le parcours fait en deux ou trois séances. */
  earnedTooFast: (have: number, need: number) =>
    `Vous avez les points. Celle-ci demande aussi les jours : ${have} pour l'instant, ${need} nécessaires. Revenez demain, et après-demain.`,
  earnedLocked: (points: number) =>
    `${points} points de plus et une chose de plus se débloque. Elle n'est sur aucune page de jour.`,

  /** Les niveaux, et ce que tenir l'un d'eux dit du lecteur. */
  levels: {
    starter: {
      name: "Débutant",
      blurb: "Vous avez commencé. Ça vous met déjà devant la plupart des gens.",
    },
    builder: {
      name: "Constructeur",
      blurb:
        "Vous avez une installation qui marche et vous la façonnez autour de votre travail.",
    },
    operator: {
      name: "Opérateur",
      blurb:
        "Vous pouvez confier du vrai travail à Claude Code et vous fier à ce qui revient.",
    },
    champion: {
      name: "Champion IA",
      blurb:
        "Vous en savez assez pour installer tout ça pour d'autres, pas seulement pour vous.",
    },
  },

  /* ------------------------------------------------------------ état du jour */

  dayDoneTag: "Jour terminé",
  dayScoreLine: (right: number, total: number) => `${right} sur ${total} juste.`,
  dayPartLine: (answered: number, total: number) =>
    `${answered} sur ${total} répondues. Terminez-les pour compléter ce jour.`,
  dayNotStarted: "Répondez aux questions ci-dessus pour compléter ce jour.",

  /* ------------------------------------------------------------ célébration */

  celebrateLevelTag: "Nouveau niveau",
  celebrateLevelTitle: (name: string) => `Vous êtes ${name}`,
  celebratePhaseTag: "Phase terminée",
  celebratePhaseTitle: (label: string) => `${label} terminée`,
  celebrateFinishedTag: "Les trente",
  celebrateFinishedTitle: "Vous avez fini les trente jours",
  celebrateFinishedBody:
    "Tous les jours répondus. Il ne reste qu'à continuer à vous en servir sur du vrai travail.",
  celebrateClose: "Bien vu",

  /* --------------------------------------------------------- l'outil coût */

  costTag: "À calculer",
  costTitle: "Ça vous coûte quoi, aujourd'hui ?",
  costBody:
    "Trois clics, rien à taper. Cochez ce que vous refaites sans arrêt, dites à peu près à quelle fréquence et combien de temps, le panneau fait le reste.",
  costPickJobs: "Cochez les travaux qui sont les vôtres",
  costPickHint: "Autant que vous voulez",
  costHowOften: "À quelle fréquence",
  costHowLong: "Combien de temps",
  costFrequency: {
    daily: "Tous les jours",
    fewWeekly: "Plusieurs fois par semaine",
    weekly: "Une fois par semaine",
    monthly: "Une ou deux fois par mois",
  },
  costDuration: {
    short: "Moins de 15 min",
    halfHour: "Environ 30 min",
    hour: "Environ une heure",
    halfDay: "Une demi-journée",
  },
  costResultTag: "Ce que ça représente",
  costEmpty: "Cochez un travail au-dessus et les chiffres apparaissent ici.",
  costAMonth: "par mois",
  costAYear: "par an",
  /* Une légende, pas une phrase. Le chiffre est affiché au-dessus, en grand. */
  costWorkingDays: "jours de travail par an",
  costWorkingDayNote:
    "En comptant une journée de travail à sept heures, et chaque réponse arrondie vers le bas. Le vrai chiffre est en général plus gros.",
  /* Ne répète volontairement pas le chiffre affiché juste au-dessus. */
  costCtaLine: "Vous voulez les récupérer ?",
  costCtaButton: "Parlons-en avec AI Makers",
  costCtaNote: "Une conversation gratuite. Aucun discours commercial.",
  /* Plus de mentions sous l'outil. Voir la raison dans `config.ts`. */
} satisfies ChallengeUI;





