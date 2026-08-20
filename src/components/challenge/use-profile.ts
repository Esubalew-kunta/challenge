"use client";

/**
 * The reader's two answers, read from and written to their own browser.
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
  type ClaudeLevel,
  type ProfileState,
  type Role,
} from "@/lib/challenge/profile";

/** Namespaced so it cannot collide with anything else the site stores. */
export const PROFILE_KEY = "aim.challenge.profile.v1";

export function useProfile(): {
  profile: ProfileState;
  setLevel: (level: ClaudeLevel) => void;
  setRole: (role: Role) => void;
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
  const setRole = useCallback((role: Role) => patch({ role }), [patch]);
  const dismiss = useCallback(() => patch({ dismissed: true }), [patch]);
  const reopen = useCallback(
    () => patch({ dismissed: false, level: null }),
    [patch],
  );

  return { profile, setLevel, setRole, dismiss, reopen };
}
