"use client";

/**
 * The reader's role, level, and goal, read from and written to their own browser.
 *
 * Same shape as `use-progress.ts` and for the same reasons: the rules stay
 * pure in `lib/challenge/profile.ts`, this stays thin, and the server snapshot
 * is always empty so the first paint matches the static HTML.
 *
 * A separate key from the progress blob on purpose. Progress is written on
 * every answered question and read on every page; this is written twice in a
 * reader's whole life. Keeping them apart means a bad write to one cannot cost
 * somebody their thirty days of progress.
 */

import { useCallback, useMemo } from "react";
import { readStored, useStored, writeStored } from "./use-stored";
import {
  parseProfile,
  serialiseProfile,
  type ChallengeGoal,
  type ChallengePath,
  type ClaudeLevel,
  type Department,
  type ProfileState,
} from "@/lib/challenge/profile";

/**
 * Namespaced so it cannot collide with anything else the site stores.
 *
 * v3 adds the reader's goal and recommended learning path. Bumping the key means
 * an early tester is asked once more rather than carrying an incomplete profile.
 */
export const PROFILE_KEY = "aim.challenge.profile.v3";

export function useProfile(): {
  profile: ProfileState;
  setLevel: (level: ClaudeLevel) => void;
  setRole: (role: Department) => void;
  setGoal: (goal: ChallengeGoal) => void;
  setPath: (path: ChallengePath) => void;
  dismiss: () => void;
  reopen: () => void;
} {
  const raw = useStored(PROFILE_KEY, "");
  const profile = useMemo(() => parseProfile(raw), [raw]);

  /**
   * Read fresh before writing rather than closing over `profile`.
   *
   * Two answers can land in the same tick, and another tab may have written in
   * between. Merging onto a stale copy silently drops one of them.
   */
  const patch = useCallback((changes: Partial<ProfileState>) => {
    const current = parseProfile(readStored(PROFILE_KEY));
    writeStored(PROFILE_KEY, serialiseProfile({ ...current, ...changes }));
  }, []);

  const setLevel = useCallback(
    (level: ClaudeLevel) => patch({ level }),
    [patch],
  );
  const setRole = useCallback((role: Department) => patch({ role }), [patch]);
  const setGoal = useCallback((goal: ChallengeGoal) => patch({ goal }), [patch]);
  const setPath = useCallback((path: ChallengePath) => patch({ path }), [patch]);
  const dismiss = useCallback(() => patch({ dismissed: true }), [patch]);
  const reopen = useCallback(
    () => patch({ dismissed: false, level: null }),
    [patch],
  );

  return { profile, setLevel, setRole, setGoal, setPath, dismiss, reopen };
}

