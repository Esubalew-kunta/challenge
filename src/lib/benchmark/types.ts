/**
 * Le Benchmark des Makers, types partagés.
 *
 * Les identifiants ne changent jamais entre le français et l'anglais : ce sont
 * des clés, pas du texte. Seules les valeurs affichées sont traduites, et elles
 * vivent toutes dans la couche de chaînes (strings.fr.ts), jamais ici.
 */

export type TrackId = "growth" | "eng" | "ops" | "fin";

export type TierKey = "beginner" | "intermediate" | "expert";

/** Palier de difficulté à l'intérieur d'un niveau. Suit le round, pas le niveau. */
export type Palier = 1 | 2 | 3;

/** Une question telle qu'elle est écrite dans le pack de contenu.
 *  La bonne réponse est toujours à l'index 0 de `o`. Le moteur mélange les
 *  options au moment du rendu : on ne réordonne jamais la source.
 *
 *  `o` est typé `string[]` et non un quadruplet, parce que les fichiers de
 *  contenu sont des copies exactes de ce que fournit le pack et qu'on ne les
 *  annote pas. Le compte de quatre est donc vérifié à l'exécution, dans le
 *  moteur, et par un test. */
export type SourceQuestion = {
  p: Palier;
  q: string;
  o: string[];
  why: string;
  /** Lien contextuel vers un article aimakers.fr. Rendu seulement s'il existe. */
  link?: { label: string; url: string };
};

export type TrackBank = Record<TierKey, SourceQuestion[]>;

export type Track = {
  id: TrackId;
  code: string;
  name: string;
  desc: string;
  tags: string;
  bank: TrackBank;
};

/** Une question tirée, options déjà mélangées, prête à afficher. */
export type DrawnQuestion = {
  tier: TierKey;
  palier: Palier;
  q: string;
  why: string;
  options: { text: string; correct: boolean }[];
  answer: number;
  link?: { label: string; url: string };
};

export type RoundResult = {
  round: 1 | 2 | 3;
  tier: TierKey;
  palier: Palier;
  correct: number;
  points: number;
};

/** Les cinq verdicts de fin de round. Deux d'entre eux sont des plafonds. */
export type VerdictCase =
  | "montee"
  | "plafond"
  | "descente"
  | "plancher"
  | "maintien";

/** Ce qui est écrit en base à la fin d'une session terminée. Une seule ligne. */
export type BenchmarkRunPayload = {
  run_code: string;
  display_name: string;
  email: string;
  company: string;
  track_id: TrackId;
  role: string;
  final_tier: TierKey;
  score: number;
  correct_count: number;
  duration_seconds: number;
  round_results: RoundResult[];
  locale: "fr";
};

/** Les écrans. Une seule route, aucun rechargement. */
export type Screen =
  | "landing"
  | "onboarding"
  | "question"
  | "verdict"
  | "scorecard"
  | "corrige"
  | "leaderboard";
