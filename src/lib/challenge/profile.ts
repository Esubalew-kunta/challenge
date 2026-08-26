/**
 * The optional questions asked before the reader starts, and what they buy.
 *
 * `claude_code_leads` has had a `role` and a `claude_level` column since the
 * table was created and both have been null on every single row, because
 * nothing on the site ever asked. This is the field that asks.
 *
 * The rule that makes it acceptable to ask at all: **it is not a gate.** The
 * Start with Day 1 button sits above it and works whether these are answered
 * or not, every one of the thirty lessons stays open, and a reader who scrolls
 * past never sees it again after dismissing it. The whole page exists to be
 * read without giving anything, and a question that blocks the reading would
 * cost more traffic than the answers are worth.
 *
 * The second rule: **the reader gets something back immediately.** Answering
 * tells them where to start, which is a real question a real person has when
 * they land on a thirty day list. A question that only serves us is a question
 * people learn to close, and they are right to.
 *
 * Pure on purpose, like `progress.ts`. No storage, no browser, no content
 * imports, so the rules can be tested on their own and this file cannot join
 * an import cycle with `index.ts`.
 */

/** How much Claude Code the reader has actually used. */
export type ClaudeLevel = "new" | "some" | "daily";
export type ChallengePath = "beginner" | "builder";
export type ChallengeGoal =
  | "save-time"
  | "automate-work"
  | "build-software"
  | "organise-knowledge"
  | "improve-team-work";

/**
 * Which part of the business they sit in.
 *
 * Departments and not job titles, because a title is a free text field nobody
 * can group afterwards, and "Head of Growth" and "Marketing Manager" are the
 * same row to anybody reading this table.
 *
 * It is stored in the `role` column, which is the name that column already had.
 * Renaming a live column to match a label would cost more than the mismatch.
 */
export type Department = "sales" | "marketing" | "operations" | "technical" | "other";

export interface LevelOption {
  id: ClaudeLevel;
  label: string;
  /** The day this reader is told to open first. */
  startDay: number;
  /** Why that day, in one line, so the advice is not a black box. */
  because: string;
}

export interface RoleOption {
  id: Department;
  label: string;
}

export interface GoalOption {
  id: ChallengeGoal;
  label: string;
}

export const GOAL_OPTIONS: GoalOption[] = [
  { id: "save-time", label: "Save time" },
  { id: "automate-work", label: "Automate work" },
  { id: "build-software", label: "Build software" },
  { id: "organise-knowledge", label: "Organise knowledge" },
  { id: "improve-team-work", label: "Improve team work" },
];

export const GOAL_OPTIONS_FR: GoalOption[] = [
  { id: "save-time", label: "Gagner du temps" },
  { id: "automate-work", label: "Automatiser le travail" },
  { id: "build-software", label: "Créer des logiciels" },
  { id: "organise-knowledge", label: "Organiser les connaissances" },
  { id: "improve-team-work", label: "Améliorer le travail d'équipe" },
];

export const PATH_OPTIONS: Array<{ id: ChallengePath; label: string }> = [
  { id: "beginner", label: "Beginner path" },
  { id: "builder", label: "Builder path" },
];

export const PATH_OPTIONS_FR: Array<{ id: ChallengePath; label: string }> = [
  { id: "beginner", label: "Parcours débutant" },
  { id: "builder", label: "Parcours builder" },
];

export function goalOptionsFor(locale: "en" | "fr"): GoalOption[] {
  return locale === "fr" ? GOAL_OPTIONS_FR : GOAL_OPTIONS;
}

export function pathOptionsFor(locale: "en" | "fr") {
  return locale === "fr" ? PATH_OPTIONS_FR : PATH_OPTIONS;
}

export function pathForLevel(level: ClaudeLevel | null): ChallengePath {
  return level === "daily" ? "builder" : "beginner";
}

/**
 * Where each answer sends them.
 *
 * Day 1 for somebody new, because nothing works before the setup does. Day 5
 * for somebody who has opened it a few times, because that is where the course
 * stops installing and starts choosing. Day 11 for a daily user, because
 * phase 1 is the working setup they already have.
 */
export const LEVEL_OPTIONS: LevelOption[] = [
  {
    id: "new",
    label: "I have never used it",
    startDay: 1,
    because: "Day 1 is the install, and nothing else works until that does.",
  },
  {
    id: "some",
    label: "I have opened it a few times",
    startDay: 5,
    because:
      "Skip the install if yours already runs. Day 5 is where the course stops setting up and starts choosing.",
  },
  {
    id: "daily",
    label: "I use it most days",
    startDay: 11,
    because:
      "Phase 1 is the working setup you already have. Phase 2 is where it starts becoming yours.",
  },
];

/**
 * Four departments and an Other.
 *
 * The brief said three or four plus Other. This is four, because dropping
 * Operations pushes exactly the people who sign the training budget into the
 * Other bucket, where they cannot be counted.
 */
export const ROLE_OPTIONS: RoleOption[] = [
  { id: "sales", label: "Sales" },
  { id: "marketing", label: "Marketing" },
  { id: "operations", label: "Operations or management" },
  { id: "technical", label: "Engineering or IT" },
  { id: "other", label: "Something else" },
];

/**
 * The same options in French.
 *
 * `startDay` and `id` are taken from the English list rather than retyped, so
 * the two can never point a reader at different days. Only the words change.
 */
export const LEVEL_OPTIONS_FR: LevelOption[] = [
  {
    ...LEVEL_OPTIONS[0],
    label: "Je ne l'ai jamais utilisé",
    because:
      "Le jour 1 est l'installation, et rien d'autre ne marche tant qu'elle ne marche pas.",
  },
  {
    ...LEVEL_OPTIONS[1],
    label: "Je l'ai ouvert quelques fois",
    because:
      "Sautez l'installation si la vôtre tourne déjà. Le jour 5 est là où le cours arrête d'installer et commence à choisir.",
  },
  {
    ...LEVEL_OPTIONS[2],
    label: "Je m'en sers presque tous les jours",
    because:
      "La phase 1 est l'installation qui marche, que vous avez déjà. La phase 2 est là où ça commence à devenir vôtre.",
  },
];

export const ROLE_OPTIONS_FR: RoleOption[] = [
  { ...ROLE_OPTIONS[0], label: "Commercial" },
  { ...ROLE_OPTIONS[1], label: "Marketing" },
  { ...ROLE_OPTIONS[2], label: "Direction ou opérations" },
  { ...ROLE_OPTIONS[3], label: "Technique ou informatique" },
  { ...ROLE_OPTIONS[4], label: "Autre chose" },
];

/** The options for a page in this language. */
export function levelOptionsFor(locale: "en" | "fr"): LevelOption[] {
  return locale === "fr" ? LEVEL_OPTIONS_FR : LEVEL_OPTIONS;
}

export function roleOptionsFor(locale: "en" | "fr"): RoleOption[] {
  return locale === "fr" ? ROLE_OPTIONS_FR : ROLE_OPTIONS;
}

/** The chosen level, described in this language. */
export function levelOptionIn(
  locale: "en" | "fr",
  id: ClaudeLevel | null,
): LevelOption | null {
  return levelOptionsFor(locale).find((o) => o.id === id) ?? null;
}

/**
 * What is stored, versioned.
 *
 * `dismissed` is a real answer and not an absence of one. Without it, a reader
 * who deliberately closed the questions would be asked again on every visit,
 * which is how a polite question turns into a nag.
 */
export interface ProfileState {
  v: 3;
  level: ClaudeLevel | null;
  role: Department | null;
  goal: ChallengeGoal | null;
  path: ChallengePath;
  dismissed: boolean;
}

export const EMPTY_PROFILE: ProfileState = {
  v: 3,
  level: null,
  role: null,
  goal: null,
  path: "beginner",
  dismissed: false,
};

const LEVEL_IDS = new Set<string>(LEVEL_OPTIONS.map((o) => o.id));
const ROLE_IDS = new Set<string>(ROLE_OPTIONS.map((o) => o.id));
const GOAL_IDS = new Set<string>(GOAL_OPTIONS.map((o) => o.id));
const PATH_IDS = new Set<string>(PATH_OPTIONS.map((o) => o.id));

/** Anything unexpected returns an empty profile, never an error. */
export function parseProfile(raw: string | null | undefined): ProfileState {
  if (!raw) return EMPTY_PROFILE;
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (typeof parsed !== "object" || parsed === null) return EMPTY_PROFILE;
    const p = parsed as Partial<ProfileState>;
    if (p.v !== 3) return EMPTY_PROFILE;
    return {
      v: 3,
      level:
        typeof p.level === "string" && LEVEL_IDS.has(p.level)
          ? (p.level as ClaudeLevel)
          : null,
      role:
        typeof p.role === "string" && ROLE_IDS.has(p.role) ? (p.role as Department) : null,
      goal:
        typeof p.goal === "string" && GOAL_IDS.has(p.goal)
          ? (p.goal as ChallengeGoal)
          : null,
      path:
        typeof p.path === "string" && PATH_IDS.has(p.path)
          ? (p.path as ChallengePath)
          : pathForLevel(
              typeof p.level === "string" && LEVEL_IDS.has(p.level)
                ? (p.level as ClaudeLevel)
                : null,
            ),
      dismissed: p.dismissed === true,
    };
  } catch {
    return EMPTY_PROFILE;
  }
}

export function serialiseProfile(state: ProfileState): string {
  return JSON.stringify(state);
}

export function levelOption(id: ClaudeLevel | null): LevelOption | null {
  return LEVEL_OPTIONS.find((o) => o.id === id) ?? null;
}

export function roleOption(id: Department | null): RoleOption | null {
  return ROLE_OPTIONS.find((o) => o.id === id) ?? null;
}

/**
 * Whether the questions should still be on screen.
 *
 * Hidden once the level is answered, since that is the one that produces the
 * advice, and hidden once dismissed. The role question is a bonus and is never
 * the reason the block stays up.
 */
export function shouldAsk(state: ProfileState): boolean {
  return !state.dismissed && state.level === null;
}

