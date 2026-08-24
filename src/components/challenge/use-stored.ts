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

/**
 * The stored text is scrambled. This is NOT security.
 *
 * It is base64 and nothing else. The function that unscrambles it ships to the
 * reader inside this very file, so anybody who wants to read their own stored
 * data still can, in about two minutes. Nothing here should ever be described
 * as protection, and nothing should ever be built on top of it as though it
 * were: the reader owns their browser, and that is not fixable from inside it.
 *
 * What it does buy, and the only thing it was asked for: the blob is no longer
 * sitting in readable English in developer tools.
 *
 * localStorage is already walled off per site and per browser, so no other
 * site and no server could read this either way.
 */
const SCRAMBLE_PREFIX = "b64.";

/**
 * The prefix is the whole reason this can be rolled out safely.
 *
 * Every reader who already has progress has it stored as plain text, written
 * before this existed. A value with no prefix is read exactly as it is and
 * quietly rewritten scrambled on the next write. Without that, shipping this
 * would wipe the score of every reader mid-course, silently, and arrive as
 * "the site deleted my progress".
 */
function scramble(value: string): string {
  try {
    // encodeURIComponent first: btoa throws on any character above U+00FF, and
    // the French side of this course is full of accents.
    return SCRAMBLE_PREFIX + btoa(encodeURIComponent(value));
  } catch {
    // Better a readable value than a lost one.
    return value;
  }
}

function unscramble(raw: string): string {
  if (!raw.startsWith(SCRAMBLE_PREFIX)) return raw;
  try {
    return decodeURIComponent(atob(raw.slice(SCRAMBLE_PREFIX.length)));
  } catch {
    // Corrupted or hand-edited. Treat it as nothing stored rather than letting
    // a broken string reach a parser that expects JSON.
    return "";
  }
}

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
    const raw = window.localStorage.getItem(key);
    return raw === null ? null : unscramble(raw);
  } catch {
    // Storage can be disabled or full. Treat it as simply not set.
    return null;
  }
}

export function writeStored(key: string, value: string) {
  try {
    window.localStorage.setItem(key, scramble(value));
  } catch {
    // Not being able to remember a preference is not worth an error.
  }
  notify();
}

/**
 * Returns the stored string for `key`, or `fallback` when nothing is stored,
 * storage is unavailable, or we are rendering on the server.
 */
/**
 * False while rendering on the server and on the very first client pass, true
 * afterwards.
 *
 * Anything that must not appear in the static HTML needs this. The popup is the
 * clearest case: storage is empty on the server, so without a guard every
 * prerendered page would contain an open dialog, and a reader who answered it
 * weeks ago would see it flash and vanish on every visit.
 *
 * `useSyncExternalStore` rather than an effect and a setState, to match the
 * rest of this folder and to avoid the cascading render the linter rejects.
 */
const NEVER_CHANGES = () => () => {};

export function useHydrated(): boolean {
  return useSyncExternalStore(
    NEVER_CHANGES,
    () => true,
    () => false,
  );
}

export function useStored(key: string, fallback: string): string {
  const getSnapshot = useCallback(
    () => readStored(key) ?? fallback,
    [key, fallback],
  );
  const getServerSnapshot = useCallback(() => fallback, [fallback]);
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
