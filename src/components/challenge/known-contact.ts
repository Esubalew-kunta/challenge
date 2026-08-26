"use client";

/**
 * What we already know about this reader, so no form asks twice.
 *
 * The problem this fixes was real and live: nothing remembered the email a
 * reader typed into a cheat sheet form. Somebody who wanted five of the ten
 * sheets typed the same address five times, on five different days, and each
 * time it looked to them as though we had never met.
 *
 * Two places hold what we know, and they are checked in this order:
 *
 * 1. `getCapturedLead()`, the site-wide record. Name, phone and work email,
 *    written by `LeadGate` on every capture point of the whole site. If the
 *    reader booked a call from the home page last month, we already have all
 *    three and the challenge should not ask for any of them.
 * 2. The key below, which holds only an email. The cheat sheet form asks for
 *    an address and nothing else, so it can never produce a full record. It
 *    writes here instead, and the next sheet form finds it.
 *
 * Deliberately not stored here: anything the reader did not type into a form.
 * Their score, their answers and their category are elsewhere and stay
 * elsewhere. This module is only the identity a person handed over.
 */

import { getCapturedLead } from "@/lib/lead-capture-state";
import { readStored, writeStored } from "./use-stored";

/**
 * Namespaced, and separate from the progress and profile blobs.
 *
 * Same reasoning as those two: a bad write to one must never be able to cost
 * somebody the others.
 */
export const CHALLENGE_EMAIL_KEY = "aim.challenge.email.v1";

/** The reader's email if we have it from anywhere, otherwise an empty string. */
export function knownEmail(): string {
  if (typeof window === "undefined") return "";
  const captured = getCapturedLead();
  if (captured?.email) return captured.email;
  return readStored(CHALLENGE_EMAIL_KEY) ?? "";
}

/**
 * Remember an address a reader just gave us.
 *
 * Only called after the server accepted it, so we never remember a typo the
 * reader then corrected.
 */
export function rememberEmail(email: string): void {
  if (typeof window === "undefined") return;
  const trimmed = email.trim();
  if (!trimmed) return;
  writeStored(CHALLENGE_EMAIL_KEY, trimmed);
}
