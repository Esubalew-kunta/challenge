"use client";

/**
 * The reader's progress, read from and written to their own browser.
 *
 * This is the only file that connects the pure rules in
 * `lib/challenge/progress.ts` to localStorage. The rules stay testable, this
 * stays thin.
 *
 * On the server and during hydration the stored value is the empty string, so
 * every page renders the same "no progress yet" markup the static HTML has.
 * React then re-renders with the real blob. That ordering is why nothing here
 * may render differently on a first pass than it does in the built file.
 */

import { useCallback, useMemo } from "react";
import { readStored, useStored, writeStored } from "./use-stored";
import {
  parseProgress,
  recordAnswer,
  serialiseProgress,
  type ProgressState,
} from "@/lib/challenge/progress";

/** Namespaced so it cannot collide with anything else the site stores. */
export const PROGRESS_KEY = "aim.challenge.progress.v1";

export function useProgress(): {
  state: ProgressState;
  answer: (day: number, questionIndex: number, picked: number, questionCount: number) => void;
} {
  const raw = useStored(PROGRESS_KEY, "");
  const state = useMemo(() => parseProgress(raw), [raw]);

  const answer = useCallback(
    (day: number, questionIndex: number, picked: number, questionCount: number) => {
      // Read fresh rather than closing over `state`: another tab, or a second
      // question answered in the same tick, must not be overwritten by a
      // stale copy from this render.
      const current = parseProgress(readStored(PROGRESS_KEY));
      const next = recordAnswer(current, day, questionIndex, picked, questionCount);
      if (next === current) return;
      writeStored(PROGRESS_KEY, serialiseProgress(next));
    },
    [],
  );

  return { state, answer };
}
