"use client";

/**
 * A tiny subscribable wrapper around localStorage.
 *
 * The challenge keeps two things in the browser and nowhere else: which
 * platform the reader picked, and their progress blob (see
 * `use-progress.ts`). There is no account and no server-side progress, which
 * is what keeps every page a plain static file with zero cost per visitor.
 *
 * Reading storage inside an effect and calling setState causes a cascading
 * render, so this goes through useSyncExternalStore instead. The server
 * snapshot is always the fallback, so the first paint matches the HTML and
 * there is no hydration mismatch.
 */

import { useCallback, useSyncExternalStore } from "react";

const listeners = new Set<() => void>();

function notify() {
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.add(listener);
  // Another tab writing the same key should update this one too.
  window.addEventListener("storage", listener);
  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", listener);
  };
}

export function readStored(key: string): string | null {
  try {
    return window.localStorage.getItem(key);
  } catch {
    // Storage can be disabled or full. Treat it as simply not set.
    return null;
  }
}

export function writeStored(key: string, value: string) {
  try {
    window.localStorage.setItem(key, value);
  } catch {
    // Not being able to remember a preference is not worth an error.
  }
  notify();
}

/**
 * Returns the stored string for `key`, or `fallback` when nothing is stored,
 * storage is unavailable, or we are rendering on the server.
 */
export function useStored(key: string, fallback: string): string {
  const getSnapshot = useCallback(
    () => readStored(key) ?? fallback,
    [key, fallback],
  );
  const getServerSnapshot = useCallback(() => fallback, [fallback]);
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
