/**
 * Le moteur du Benchmark des Makers. Sections 6 et 7 du PRD.
 *
 * Aucune dépendance à React et aucun texte : le moteur décide, l'écran affiche.
 * C'est ce qui permet de le tester en entier sans navigateur.
 *
 * Les deux règles qui font tout le comportement :
 *
 * 1. **Le niveau suit le lecteur.** On démarre en intermédiaire. Trois bonnes
 *    réponses font monter, deux maintiennent, une ou zéro font descendre. Le
 *    niveau est figé pour tout le round et la promotion s'applique au suivant.
 *
 * 2. **Le palier suit le round, pas le niveau.** Chaque banque de neuf
 *    questions est rangée en trois paliers de trois, du plus direct au plus
 *    difficile, et le tirage est indexé sur le round. Une rétrogradation au
 *    round 3 sert donc quand même des questions de palier 3. La difficulté ne
 *    revient jamais en arrière, et se maintenir n'est plus faire du surplace.
 *
 * Le niveau final est celui **joué au round 3**, pas celui obtenu après l'avoir
 * corrigé. Un 3 sur 3 au dernier round n'achète aucun round supplémentaire,
 * donc il ne fait monter personne nulle part. Décision du 28 août, lecture B.
 * Le code l'obtient sans condition particulière : la mise à jour du niveau
 * n'est appliquée que par `advanceRound`, qui n'est jamais appelée après le
 * troisième.
 */

import type {
  DrawnQuestion,
  Palier,
  RoundResult,
  SourceQuestion,
  TierKey,
  Track,
  TrackId,
  VerdictCase,
} from "./types.ts";

export const PER_ROUND = 3;
export const ROUNDS = 3;
export const TOTAL_QUESTIONS = PER_ROUND * ROUNDS;
export const SECONDS_PER_QUESTION = 45;

export const TIERS: TierKey[] = ["beginner", "intermediate", "expert"];
export const POINTS: Record<TierKey, number> = {
  beginner: 10,
  intermediate: 20,
  expert: 30,
};

export const START_TIER: TierKey = "intermediate";

/** 3 sur 3 en intermédiaire, promotion, puis 3 sur 3 deux fois en expert. */
export const MAX_SCORE = 240;

/** Le code de session : quatre caractères, majuscules et chiffres. */
const CODE_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const CODE_LENGTH = 4;

export type Rng = () => number;

const defaultRng: Rng = Math.random;

/** Fisher-Yates. Ne modifie pas le tableau reçu. */
export function shuffle<T>(items: readonly T[], rng: Rng = defaultRng): T[] {
  const out = [...items];
  for (let i = out.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [out[i], out[j]] = [out[j], out[i]];
  }
  return out;
}

export function makeRunCode(rng: Rng = defaultRng): string {
  let code = "";
  for (let i = 0; i < CODE_LENGTH; i++) {
    code += CODE_ALPHABET[Math.floor(rng() * CODE_ALPHABET.length)];
  }
  return code;
}

const tierIndex = (tier: TierKey) => TIERS.indexOf(tier);
const promote = (tier: TierKey) => TIERS[Math.min(TIERS.length - 1, tierIndex(tier) + 1)];
const demote = (tier: TierKey) => TIERS[Math.max(0, tierIndex(tier) - 1)];

/** Ce qui est retenu d'une question répondue. Vit le temps de la session, sert
 *  au corrigé, et n'est jamais écrit en base : le PRD ne persiste que
 *  l'agrégat. */
export type AnswerRecord = {
  round: number;
  tier: TierKey;
  palier: Palier;
  q: string;
  why: string;
  options: { text: string; correct: boolean }[];
  answer: number;
  /** L'index choisi, ou `null` quand le temps est écoulé. */
  picked: number | null;
  outcome: "correct" | "wrong" | "timeout";
  points: number;
  link?: { label: string; url: string };
};

export type RunState = {
  runCode: string;
  trackId: TrackId;
  /** Une file par niveau, rangée par palier. */
  pools: Record<TierKey, SourceQuestion[]>;
  tier: TierKey;
  /** Indexé à partir de zéro, comme dans le patch. Le round affiché vaut
   *  `round + 1`, et le palier aussi. */
  round: number;
  qInRound: number;
  score: number;
  correctCount: number;
  correctInRound: number;
  roundResults: RoundResult[];
  answers: AnswerRecord[];
  startedAt: number;
};

export class BenchmarkContentError extends Error {}

/**
 * Vérifie qu'une banque est bien celle que le moteur attend, et échoue fort si
 * elle ne l'est pas. Une banque mal rangée ne casse rien visiblement : elle
 * sert simplement les mauvaises questions au mauvais round, ce que personne ne
 * remarque avant longtemps. C'est aussi le filet du jour où TRK-04 arrive.
 */
export function assertBankIsWellFormed(track: Track): void {
  for (const tier of TIERS) {
    const bank = track.bank[tier];
    if (!bank) {
      throw new BenchmarkContentError(`${track.code} : niveau ${tier} absent`);
    }
    if (bank.length !== TOTAL_QUESTIONS) {
      throw new BenchmarkContentError(
        `${track.code}/${tier} : ${bank.length} questions, il en faut ${TOTAL_QUESTIONS}`,
      );
    }
    bank.forEach((question, i) => {
      const expected = Math.floor(i / PER_ROUND) + 1;
      if (question.p !== expected) {
        throw new BenchmarkContentError(
          `${track.code}/${tier}[${i}] : palier ${question.p}, il faut ${expected}. ` +
            `Les neuf questions se rangent 1-1-1 / 2-2-2 / 3-3-3.`,
        );
      }
      if (question.o.length !== 4) {
        throw new BenchmarkContentError(
          `${track.code}/${tier}[${i}] : ${question.o.length} options, il en faut 4`,
        );
      }
    });
  }
}

/**
 * Construit une file par niveau, mélangée **à l'intérieur** de chaque palier et
 * jamais entre paliers. Deux lecteurs du même niveau ne voient donc pas les
 * mêmes questions dans le même ordre, mais tous les deux voient du palier 1 au
 * round 1.
 */
export function buildPools(
  track: Track,
  rng: Rng = defaultRng,
): Record<TierKey, SourceQuestion[]> {
  const pools = {} as Record<TierKey, SourceQuestion[]>;
  for (const tier of TIERS) {
    const bank = track.bank[tier];
    pools[tier] = ([1, 2, 3] as Palier[]).flatMap((p) =>
      shuffle(
        bank.filter((question) => question.p === p),
        rng,
      ),
    );
  }
  return pools;
}

export function startRun(
  track: Track,
  opts: { rng?: Rng; now?: number } = {},
): RunState {
  const rng = opts.rng ?? defaultRng;
  assertBankIsWellFormed(track);

  return {
    runCode: makeRunCode(rng),
    trackId: track.id,
    pools: buildPools(track, rng),
    tier: START_TIER,
    round: 0,
    qInRound: 0,
    score: 0,
    correctCount: 0,
    correctInRound: 0,
    roundResults: [],
    answers: [],
    startedAt: opts.now ?? Date.now(),
  };
}

/** Le palier courant. Il suit le round et rien d'autre. */
export function currentPalier(run: RunState): Palier {
  return (run.round + 1) as Palier;
}

/**
 * Tire la question courante. Le tirage est indexé sur le round, donc changer de
 * niveau change la file mais jamais le palier.
 *
 * Les options sont mélangées ici, au rendu. La bonne réponse est écrite à
 * l'index 0 dans le contenu et n'est jamais réordonnée à la source.
 */
export function drawQuestion(run: RunState, rng: Rng = defaultRng): DrawnQuestion {
  const pool = run.pools[run.tier];
  const idx = run.round * PER_ROUND + run.qInRound;
  const src = pool[idx % pool.length];

  const options = shuffle(
    src.o.map((text, i) => ({ text, correct: i === 0 })),
    rng,
  );

  return {
    tier: run.tier,
    palier: src.p,
    q: src.q,
    why: src.why,
    options,
    answer: options.findIndex((option) => option.correct),
    ...(src.link ? { link: src.link } : {}),
  };
}

/**
 * Enregistre une réponse. `picked` vaut `null` quand le temps est écoulé, ce
 * qui est un cas distinct d'une mauvaise réponse à l'affichage même s'il vaut
 * zéro point comme elle.
 */
export function recordAnswer(
  run: RunState,
  drawn: DrawnQuestion,
  picked: number | null,
): RunState {
  const outcome: AnswerRecord["outcome"] =
    picked === null ? "timeout" : picked === drawn.answer ? "correct" : "wrong";
  const points = outcome === "correct" ? POINTS[run.tier] : 0;

  const answer: AnswerRecord = {
    round: run.round,
    tier: drawn.tier,
    palier: drawn.palier,
    q: drawn.q,
    why: drawn.why,
    options: drawn.options,
    answer: drawn.answer,
    picked,
    outcome,
    points,
    ...(drawn.link ? { link: drawn.link } : {}),
  };

  const next: RunState = {
    ...run,
    qInRound: run.qInRound + 1,
    score: run.score + points,
    correctCount: run.correctCount + (outcome === "correct" ? 1 : 0),
    correctInRound: run.correctInRound + (outcome === "correct" ? 1 : 0),
    answers: [...run.answers, answer],
    roundResults: run.roundResults,
  };

  // Le round se ferme dès sa troisième réponse. Le résultat est enregistré au
  // niveau où il a été joué, pas au niveau qui en découle.
  if (next.qInRound === PER_ROUND) {
    const result: RoundResult = {
      round: (next.round + 1) as RoundResult["round"],
      tier: run.tier,
      palier: currentPalier(run),
      correct: next.correctInRound,
      points: next.correctInRound * POINTS[run.tier],
    };
    next.roundResults = [...run.roundResults, result];
  }

  return next;
}

export function isRoundOver(run: RunState): boolean {
  return run.qInRound === PER_ROUND;
}

export function isRunOver(run: RunState): boolean {
  return run.round === ROUNDS - 1 && isRoundOver(run);
}

export type Verdict = {
  case: VerdictCase;
  correct: number;
  tierBefore: TierKey;
  tierAfter: TierKey;
  /** Le palier du round suivant. Chaque verdict l'annonce, pour qu'un maintien
   *  ne se lise jamais comme du surplace. */
  nextPalier: Palier | null;
};

/** Le verdict du round qui vient de se fermer. */
export function roundVerdict(run: RunState): Verdict {
  if (!isRoundOver(run)) {
    throw new Error("Benchmark : verdict demandé avant la fin du round");
  }

  const correct = run.correctInRound;
  const tierBefore = run.tier;

  let tierAfter = tierBefore;
  let verdictCase: VerdictCase;

  if (correct === PER_ROUND) {
    if (tierBefore === "expert") {
      verdictCase = "plafond";
    } else {
      verdictCase = "montee";
      tierAfter = promote(tierBefore);
    }
  } else if (correct <= 1) {
    if (tierBefore === "beginner") {
      verdictCase = "plancher";
    } else {
      verdictCase = "descente";
      tierAfter = demote(tierBefore);
    }
  } else {
    verdictCase = "maintien";
  }

  return {
    case: verdictCase,
    correct,
    tierBefore,
    tierAfter,
    nextPalier: isRunOver(run) ? null : ((run.round + 2) as Palier),
  };
}

/** Passe au round suivant en appliquant le changement de niveau. Jamais
 *  appelée après le round 3 : c'est ce qui donne la lecture B du niveau
 *  final. */
export function advanceRound(run: RunState): RunState {
  if (!isRoundOver(run)) {
    throw new Error("Benchmark : round suivant demandé avant la fin du round");
  }
  if (isRunOver(run)) {
    throw new Error("Benchmark : il n'y a pas de round après le troisième");
  }

  return {
    ...run,
    tier: roundVerdict(run).tierAfter,
    round: run.round + 1,
    qInRound: 0,
    correctInRound: 0,
  };
}

export type RunSummary = {
  runCode: string;
  trackId: TrackId;
  /** Le niveau joué au round 3. Lecture B. */
  finalTier: TierKey;
  score: number;
  correctCount: number;
  total: number;
  durationSeconds: number;
  roundResults: RoundResult[];
};

export function summarise(run: RunState, now: number = Date.now()): RunSummary {
  if (!isRunOver(run)) {
    throw new Error("Benchmark : carte de score demandée avant la fin du parcours");
  }

  return {
    runCode: run.runCode,
    trackId: run.trackId,
    finalTier: run.tier,
    score: run.score,
    correctCount: run.correctCount,
    total: TOTAL_QUESTIONS,
    durationSeconds: Math.max(1, Math.round((now - run.startedAt) / 1000)),
    roundResults: run.roundResults,
  };
}
