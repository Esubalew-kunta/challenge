/**
 * The two questions asked before the reader starts, and what they buy.
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

/** What they do. Kept coarse: this is a menu, not a survey. */
export type Role = "developer" | "technical" | "lead" | "other";

export interface LevelOption {
  id: ClaudeLevel;
  label: string;
  /** The day this reader is told to open first. */
  startDay: number;
  /** Why that day, in one line, so the advice is not a black box. */
  because: string;
}

export interface RoleOption {
  id: Role;
  label: string;
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

export const ROLE_OPTIONS: RoleOption[] = [
  { id: "developer", label: "I write code" },
  { id: "technical", label: "Technical, but not a developer" },
  { id: "lead", label: "I lead a team" },
  { id: "other", label: "Something else" },
];

/**
 * What is stored, versioned.
 *
 * `dismissed` is a real answer and not an absence of one. Without it, a reader
 * who deliberately closed the questions would be asked again on every visit,
 * which is how a polite question turns into a nag.
 */
export interface ProfileState {
  v: 1;
  level: ClaudeLevel | null;
  role: Role | null;
  dismissed: boolean;
}

export const EMPTY_PROFILE: ProfileState = {
  v: 1,
  level: null,
  role: null,
  dismissed: false,
};

const LEVEL_IDS = new Set<string>(LEVEL_OPTIONS.map((o) => o.id));
const ROLE_IDS = new Set<string>(ROLE_OPTIONS.map((o) => o.id));

/** Anything unexpected returns an empty profile, never an error. */
export function parseProfile(raw: string | null | undefined): ProfileState {
  if (!raw) return EMPTY_PROFILE;
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (typeof parsed !== "object" || parsed === null) return EMPTY_PROFILE;
    const p = parsed as Partial<ProfileState>;
    if (p.v !== 1) return EMPTY_PROFILE;
    return {
      v: 1,
      level:
        typeof p.level === "string" && LEVEL_IDS.has(p.level)
          ? (p.level as ClaudeLevel)
          : null,
      role:
        typeof p.role === "string" && ROLE_IDS.has(p.role) ? (p.role as Role) : null,
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

export function roleOption(id: Role | null): RoleOption | null {
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
