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
import { ArrowRight, X } from "lucide-react";
import { track } from "@vercel/analytics";
import { CONSENT_CHANGE_EVENT } from "@/lib/consent";
import { uiFor } from "@/lib/challenge/locale";
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

/** Breathing room between the popup and the cookie banner under it. */
const BANNER_GAP = 16;

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
   * How tall the cookie banner is right now, or 0 when it is not on screen.
   *
   * This popup used to wait for the cookie decision instead. That fixed a real
   * collision, on a 375 wide viewport the banner sat straight over the last two
   * answers, and created a worse problem: a reader who ignored the banner and
   * started reading never got asked, and then the popup ambushed them minutes
   * later, on whatever page they happened to be on, the moment the banner was
   * finally answered. Owner saw exactly that on a first visit in incognito.
   *
   * So both are on screen together now, and the popup simply gets out of the
   * way. The banner is rendered after the page in the layout, so at the same
   * z-index it stays on top and stays clickable, which is what a legal notice
   * has to be. Measuring it beats guessing a padding: the banner is one row on
   * a desktop and three stacked on a phone.
   */
  const [bannerHeight, setBannerHeight] = useState(0);

  /**
   * Closed by hand, this visit.
   *
   * Needed because the result step keeps the popup open on its own. Without
   * this, pressing See the thirty days marked the answers as done but left the
   * box sitting there, since `step === 2` was still true. It only disappeared
   * on the next page load. Caught by clicking the button in a browser.
   */
  const [hidden, setHidden] = useState(false);

  /**
   * Open while there is still something to ask, and then for one more step.
   *
   * That second half is not optional. `shouldAsk` goes false the instant the
   * level is answered, which is the same instant the answer becomes available,
   * so without `step === 2` the popup vanishes on the last click and the reader
   * never sees the day number they just earned. Found by clicking through it in
   * a real browser rather than by reading it.
   */
  const open = hydrated && !hidden && (shouldAsk(profile) || step === 2);

  // Measured only while the popup is up, which is once in a reader's life. The
  // observer catches the banner mounting a tick after this effect runs, which
  // it does, because it decides whether to show itself inside its own effect.
  useEffect(() => {
    if (!open) return;

    const measure = () => {
      const el = document.querySelector<HTMLElement>("[data-cookie-banner]");
      setBannerHeight(el ? el.getBoundingClientRect().height : 0);
    };
    measure();

    const observer = new MutationObserver(measure);
    observer.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("resize", measure);
    window.addEventListener(CONSENT_CHANGE_EVENT, measure);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener(CONSENT_CHANGE_EVENT, measure);
    };
  }, [open]);

  /**
   * Closes the popup for good.
   *
   * `dismiss` is what makes it permanent. Without it the popup would come back
   * on the next visit, which turns a polite question into a nag.
   */
  const close = useCallback(() => {
    dismiss();
    setHidden(true);
    track("challenge_profile_dismissed", { step });
  }, [dismiss, step]);

  /** Both answered. Same permanence, but nothing was refused. */
  const finish = useCallback(() => {
    dismiss();
    setHidden(true);
    track("challenge_profile_finished", {});
  }, [dismiss]);

  /**
   * Skips the question on screen, and only that one.
   *
   * The first question hands over to the second with the department left
   * unset. The second has nothing after it, so skipping there ends the popup.
   * In both cases whatever they did answer is kept.
   */
  const skipStep = useCallback(() => {
    if (step === 0) {
      setStep(1);
      track("challenge_profile_skipped", { question: "department" });
      return;
    }
    track("challenge_profile_skipped", { question: "level" });
    dismiss();
    setHidden(true);
  }, [step, dismiss]);

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
      // Sits above the cookie banner rather than under it. Zero when there is
      // no banner, which is every visit after the first.
      style={
        bannerHeight
          ? { paddingBottom: `${bannerHeight + BANNER_GAP}px` }
          : undefined
      }
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
            {/*
              This closes the popup rather than opening the day.

              Owner's call: a reader who has just been told where to start
              should land on the list of thirty, not be thrown straight into
              one page. The day number stays on screen behind this, in the line
              under the score card, so it is one click away rather than forced.
            */}
            <button
              type="button"
              onClick={finish}
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-primary bg-primary px-5 py-3 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:border-primary-dark hover:bg-primary-dark"
            >
              {UI.profileSeeAllDays}
              <ArrowRight className="size-4" aria-hidden />
            </button>
          </div>
        ) : null}

        <p className="text-[0.8125rem] text-muted-foreground">
          {step === 2 ? UI.profileFineprint : UI.profileBody}
        </p>

        {/*
          Skips this question only, not both.

          On the first it moves to the second with the department left unset.
          On the second there is nothing after it, so skipping ends the popup.
          Either way the answer they did give is kept.
        */}
        {step < TOTAL_STEPS ? (
          <button
            type="button"
            onClick={skipStep}
            className="text-[0.8125rem] font-semibold text-muted-foreground underline underline-offset-2 transition-colors hover:text-foreground"
          >
            {UI.profileSkipStep}
          </button>
        ) : null}
      </div>
    </div>
  );
}



