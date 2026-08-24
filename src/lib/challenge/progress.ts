/**
 * The reader's own progress, and the score derived from it.
 *
 * Everything here is pure: it takes a stored blob and an answer key, and
 * returns numbers. Nothing touches the browser, nothing touches the network,
 * and nothing here knows the day content. That keeps the rules testable and
 * keeps this file out of any import cycle with `index.ts`.
 *
 * Where the data lives: one small JSON blob in the reader's own localStorage,
 * and nowhere else. There is no account and no server-side progress, which is
 * what keeps every page a plain static file with zero cost per visitor. If the
 * reader clears their browser, it is gone, and that is the accepted trade.
 *
 * What counts as doing a day: answering all of its questions. Not a button
 * saying "I did this". A button like that is worth nothing, because thirty
 * clicks take two minutes. Answering is a real action and needs no policing.
 *
 * What is deliberately NOT here: any gate. A wrong answer still counts the
 * question as answered and still completes the day. The score rewards getting
 * it right; it never blocks anybody who got it wrong. Nobody is reviewing this,
 * so a gate would only punish honest readers while a determined one walks
 * straight through it.
 */

/** Unanswered. Stored explicitly so the array length stays stable. */
export const UNANSWERED = -1;

export const POINTS = {
  /** Awarded once every question on the day has been answered. */
  dayDone: 2,
  /** Awarded per question answered correctly. */
  quizRight: 1,
} as const;

/**
 * Level thresholds, in points.
 *
 * Ids and numbers live here; the names and the one-line blurbs live in
 * `config.ts` with every other user-facing string, so the French build stays a
 * second object in that file rather than a second copy of this logic.
 *
 * The numbers are set against a 150 point maximum: roughly 20 percent, 50
 * percent and 80 percent. AI Champion is deliberately reachable without a
 * perfect run, because a level nobody reaches motivates nobody.
 */
export type LevelId = "starter" | "builder" | "operator" | "champion";

export interface LevelBand {
  id: LevelId;
  /** Minimum points to hold this level. */
  at: number;
}

export const LEVELS: LevelBand[] = [
  { id: "starter", at: 0 },
  { id: "builder", at: 30 },
  { id: "operator", at: 75 },
  { id: "champion", at: 120 },
];

/* ----------------------------------------------------------------- state */

/**
 * What is stored, versioned.
 *
 * `v` exists so a future change to the shape can be detected and discarded
 * rather than crashing on somebody's two month old blob. An unreadable or
 * unknown blob is treated as no progress, never as an error.
 */
export interface ProgressState {
  v: 1;
  /** Local date of the first recorded answer, `YYYY-MM-DD`. */
  started: string | null;
  /** Local date of the most recent recorded answer. */
  lastActive: string | null;
  /** Consecutive calendar days with at least one answer. */
  streak: number;
  /** Day number to the option index picked for each of its questions. */
  answers: Record<number, number[]>;
}

export const EMPTY_PROGRESS: ProgressState = {
  v: 1,
  started: null,
  lastActive: null,
  streak: 0,
  answers: {},
};

/** The correct option index for every question, keyed by day number. */
export type AnswerKey = Record<number, number[]>;

/* ------------------------------------------------------------- read/write */

/**
 * Turns a stored string back into state.
 *
 * Anything unexpected returns empty progress. A reader with a corrupt blob
 * should see a fresh score, not a broken page, and certainly not a stack trace
 * on a marketing site.
 */
export function parseProgress(raw: string | null | undefined): ProgressState {
  if (!raw) return EMPTY_PROGRESS;
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (typeof parsed !== "object" || parsed === null) return EMPTY_PROGRESS;
    const p = parsed as Partial<ProgressState>;
    if (p.v !== 1) return EMPTY_PROGRESS;
    return {
      v: 1,
      started: typeof p.started === "string" ? p.started : null,
      lastActive: typeof p.lastActive === "string" ? p.lastActive : null,
      streak: typeof p.streak === "number" && p.streak >= 0 ? p.streak : 0,
      answers:
        typeof p.answers === "object" && p.answers !== null
          ? (p.answers as Record<number, number[]>)
          : {},
    };
  } catch {
    return EMPTY_PROGRESS;
  }
}

export function serialiseProgress(state: ProgressState): string {
  return JSON.stringify(state);
}

/* ------------------------------------------------------------------ dates */

/**
 * Today as `YYYY-MM-DD` in the reader's own timezone.
 *
 * Local, not UTC, on purpose: somebody answering at 11pm in Paris should see
 * that as today, not as tomorrow.
 */
export function localDate(now: Date = new Date()): string {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/**
 * Whole days from `from` to `to`.
 *
 * Both are parsed at UTC midnight so the subtraction cannot be knocked off by
 * an hour when the clocks change. Returns 0 for anything unparseable, which
 * keeps a bad stored date from producing a nonsense streak.
 */
export function daysBetween(from: string, to: string): number {
  const a = Date.parse(`${from}T00:00:00Z`);
  const b = Date.parse(`${to}T00:00:00Z`);
  if (Number.isNaN(a) || Number.isNaN(b)) return 0;
  return Math.round((b - a) / 86_400_000);
}

/* ---------------------------------------------------------------- writing */

/**
 * Records one answer and returns the new state. Never mutates the old one.
 *
 * `questionCount` comes from the page, so this file never needs to know the
 * content. The array is filled with `UNANSWERED` first, which is what lets
 * "every question answered" be a simple check rather than a guess.
 */
export function recordAnswer(
  state: ProgressState,
  day: number,
  questionIndex: number,
  picked: number,
  questionCount: number,
  now: Date = new Date(),
): ProgressState {
  const existing = state.answers[day];
  const row =
    Array.isArray(existing) && existing.length === questionCount
      ? [...existing]
      : new Array<number>(questionCount).fill(UNANSWERED);

  // An answer is committed once. Re-picking would let somebody grind a wrong
  // answer into a right one, which turns the score into a measure of patience.
  if (row[questionIndex] !== UNANSWERED) return state;
  row[questionIndex] = picked;

  const today = localDate(now);
  const gap = state.lastActive ? daysBetween(state.lastActive, today) : null;

  return {
    ...state,
    started: state.started ?? today,
    lastActive: today,
    // Same day keeps the streak, yesterday extends it, anything else restarts
    // it at one. A first ever answer is also a streak of one.
    streak: gap === 0 ? state.streak : gap === 1 ? state.streak + 1 : 1,
    answers: { ...state.answers, [day]: row },
  };
}

/* --------------------------------------------------------------- deriving */

export interface DayProgress {
  answered: number;
  total: number;
  right: number;
  done: boolean;
}

/** How one day stands. `total` is 0 when the reader has not opened it yet. */
export function dayProgress(
  state: ProgressState,
  day: number,
  key: AnswerKey,
): DayProgress {
  const correct = key[day] ?? [];
  const row = state.answers[day] ?? [];
  let answered = 0;
  let right = 0;
  correct.forEach((want, i) => {
    const got = row[i];
    if (typeof got === "number" && got !== UNANSWERED) {
      answered += 1;
      if (got === want) right += 1;
    }
  });
  return {
    answered,
    total: correct.length,
    right,
    done: correct.length > 0 && answered === correct.length,
  };
}

export interface Summary {
  points: number;
  maxPoints: number;
  daysDone: number;
  totalDays: number;
  questionsRight: number;
  questionsTotal: number;
  streak: number;
  levelId: LevelId;
  /** The next band up, or null once the top one is held. */
  nextLevelId: LevelId | null;
  pointsToNext: number;
  /**
   * Where one day per calendar day would have put them, capped at the total.
   * Null until they have answered something, because there is nothing to
   * measure against before they start.
   */
  expectedDays: number | null;
  /** Positive means ahead of that pace, negative means behind. */
  aheadBy: number | null;
  /** True once every day is done. */
  finished: boolean;
}

export function levelFor(points: number): LevelId {
  let held: LevelId = LEVELS[0].id;
  for (const band of LEVELS) if (points >= band.at) held = band.id;
  return held;
}

/**
 * The whole score, in one pass.
 *
 * `key` decides the maximum, so adding a question to a day raises the ceiling
 * for everyone automatically and no total has to be kept in sync by hand.
 */
export function summarise(
  state: ProgressState,
  key: AnswerKey,
  totalDays: number,
  now: Date = new Date(),
): Summary {
  const dayNumbers = Object.keys(key).map(Number);

  let points = 0;
  let daysDone = 0;
  let questionsRight = 0;
  let questionsTotal = 0;

  for (const day of dayNumbers) {
    const p = dayProgress(state, day, key);
    questionsTotal += p.total;
    questionsRight += p.right;
    points += p.right * POINTS.quizRight;
    if (p.done) {
      daysDone += 1;
      points += POINTS.dayDone;
    }
  }

  const maxPoints = questionsTotal * POINTS.quizRight + totalDays * POINTS.dayDone;

  const levelId = levelFor(points);
  const currentIndex = LEVELS.findIndex((l) => l.id === levelId);
  const next = LEVELS[currentIndex + 1] ?? null;

  const expectedDays = state.started
    ? Math.min(totalDays, daysBetween(state.started, localDate(now)) + 1)
    : null;

  return {
    points,
    maxPoints,
    daysDone,
    totalDays,
    questionsRight,
    questionsTotal,
    streak: state.streak,
    levelId,
    nextLevelId: next ? next.id : null,
    pointsToNext: next ? Math.max(0, next.at - points) : 0,
    expectedDays,
    aheadBy: expectedDays === null ? null : daysDone - expectedDays,
    finished: daysDone >= totalDays && totalDays > 0,
  };
}
