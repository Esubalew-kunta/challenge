"use client";

/**
 * Two questions, one at a time, the first time somebody opens the course.
 *
 * It appears on the index only, and only once. Answering it or closing it are
 * both permanent, so nobody is asked twice. Every lesson stays open the whole
 * time, and closing takes one click, the Escape key, or a click outside the
 * box, because a popup with only one way out is the kind people learn to hate.
 *
 * The order is deliberate. The department question is ours, and it is asked
 * first while the reader still has the patience for it. The level question is
 * theirs, and it is asked second so the last thing that happens is the popup
 * giving something back: a day number and the reason for it.
 *
 * It renders nothing until the browser has hydrated. Storage is empty on the
 * server, so without that guard every prerendered page would ship with an open
 * dialog inside it, and somebody who answered weeks ago would watch it flash
 * and disappear on every single visit.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowRight, X } from "lucide-react";
import { track } from "@vercel/analytics";
import { CONSENT_CHANGE_EVENT, getConsent } from "@/lib/consent";
import { uiFor, baseFor } from "@/lib/challenge/locale";
import { dayByNumberIn, dayHrefIn } from "@/lib/challenge/nav";
import {
  levelOptionIn,
  levelOptionsFor,
  roleOptionsFor,
  shouldAsk,
} from "@/lib/challenge/profile";
import type { ChallengeLocale } from "@/lib/challenge/types";
import { useHydrated } from "./use-stored";
import { useProfile } from "./use-profile";

const TOTAL_STEPS = 2;

/** True once the visitor has accepted or declined cookies. */
function hasConsentDecision(): boolean {
  try {
    return getConsent() !== null;
  } catch {
    // Storage can be blocked. Treat that as decided rather than never showing.
    return true;
  }
}

function Choice({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="rounded-sm border border-input bg-background px-4 py-3 text-left text-[0.9375rem] font-medium transition-colors hover:border-primary hover:bg-accent"
    >
      {label}
    </button>
  );
}

export function ProfileModal({
  locale = "en",
}: {
  locale?: ChallengeLocale;
}) {
  const UI = uiFor(locale);
  const hydrated = useHydrated();
  const { profile, setLevel, setRole, dismiss } = useProfile();
  const panelRef = useRef<HTMLDivElement>(null);

  /**
   * Which question is on screen.
   *
   * Local, not stored. Somebody who answers the first question and closes the
   * tab has told us their department and nothing else, and that is a complete
   * answer rather than a half finished form to resume.
   */
  const [step, setStep] = useState<0 | 1 | 2>(0);

  /**
   * The cookie banner goes first.
   *
   * Both are anchored to the bottom of a phone screen, and on a 375 wide
   * viewport the banner sat straight over the last two answers, so nobody could
   * pick them or close the popup. Found by opening it at phone width, not by
   * reading the CSS.
   *
   * Waiting is also the right order regardless of the collision. The banner is
   * a legal notice the visitor has to be able to answer. Ours is an optional
   * question. Ours waits.
   */
  const [consentSettled, setConsentSettled] = useState(() => hasConsentDecision());

  useEffect(() => {
    if (consentSettled) return;
    const onChange = () => setConsentSettled(hasConsentDecision());
    window.addEventListener(CONSENT_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(CONSENT_CHANGE_EVENT, onChange);
  }, [consentSettled]);

  /**
   * Open while there is still something to ask, and then for one more step.
   *
   * That second half is not optional. `shouldAsk` goes false the instant the
   * level is answered, which is the same instant the answer becomes available,
   * so without `step === 2` the popup vanishes on the last click and the reader
   * never sees the day number they just earned. Found by clicking through it in
   * a real browser rather than by reading it.
   */
  const open =
    hydrated && consentSettled && (shouldAsk(profile) || step === 2);

  const close = useCallback(() => {
    dismiss();
    track("challenge_profile_dismissed", { step });
  }, [dismiss, step]);

  // Escape closes it, like every other dialog on the web. Bound only while it
  // is open, so it cannot swallow the key on the rest of the page.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, close]);

  // Move focus into the box when it opens, so a keyboard reader is not left
  // tabbing through the page behind it.
  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  if (!open) return null;

  const chosen = levelOptionIn(locale, profile.level);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-foreground/40 p-4 backdrop-blur-sm"
      onClick={close}
    >
      <div
        ref={panelRef}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-label={UI.profileTag}
        onClick={(e) => e.stopPropagation()}
        className="relative flex w-full max-w-md flex-col gap-5 rounded-lg border border-border bg-card p-6 shadow-[0_20px_60px_-20px_rgba(15,23,42,.45)] outline-none"
      >
        <button
          type="button"
          onClick={close}
          aria-label={UI.profileSkip}
          className="absolute right-3 top-3 rounded-sm p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
        >
          <X className="size-4" aria-hidden />
        </button>

        <div className="flex flex-col gap-1 pr-8">
          <span className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
            {step < TOTAL_STEPS
              ? UI.profileStepOf(step + 1, TOTAL_STEPS)
              : UI.profileTag}
          </span>
          <h2 className="text-xl font-bold tracking-tight">
            {step === 0
              ? UI.profileRoleQuestion
              : step === 1
                ? UI.profileLevelQuestion
                : UI.profileDoneTitle}
          </h2>
        </div>

        {step === 0 ? (
          <div className="grid gap-2">
            {roleOptionsFor(locale).map((option) => (
              <Choice
                key={option.id}
                label={option.label}
                onClick={() => {
                  setRole(option.id);
                  track("challenge_profile_role", { role: option.id });
                  setStep(1);
                }}
              />
            ))}
          </div>
        ) : null}

        {step === 1 ? (
          <div className="grid gap-2">
            {levelOptionsFor(locale).map((option) => (
              <Choice
                key={option.id}
                label={option.label}
                onClick={() => {
                  setLevel(option.id);
                  track("challenge_profile_level", { level: option.id });
                  setStep(2);
                }}
              />
            ))}
          </div>
        ) : null}

        {step === 2 && chosen ? (
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2 rounded-md bg-accent px-4 py-3.5">
              <p className="text-[0.9375rem] font-semibold text-primary-dark">
                {UI.profileStartAt(chosen.startDay)}
              </p>
              <p className="text-[0.8125rem] text-muted-foreground">
                {chosen.because}
              </p>
            </div>
            <Link
              href={
                dayByNumberIn(locale, chosen.startDay)
                  ? dayHrefIn(locale, dayByNumberIn(locale, chosen.startDay)!)
                  : baseFor(locale)
              }
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-primary bg-primary px-5 py-3 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:border-primary-dark hover:bg-primary-dark"
            >
              {UI.profileGo(chosen.startDay)}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        ) : null}

        <p className="text-[0.8125rem] text-muted-foreground">
          {step === 2 ? UI.profileFineprint : UI.profileBody}
        </p>

        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={close}
            className="text-[0.8125rem] font-semibold text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground"
          >
            {UI.profileSkipAll}
          </button>
        ) : null}
      </div>
    </div>
  );
}

