"use client";

/**
 * A permanent way back to a badge that has been earned.
 *
 * **This exists because of a real bug, found by the owner testing day 10.**
 *
 * The badge was only ever reachable through the card that fires when a phase
 * is finished, and that card is marked seen the first time it closes, once and
 * for ever. So pressing "Not now", or closing the tab while it was up, or
 * simply reloading, took the badge away permanently. There was no second door.
 * The reader had done the work and could not have the thing they earned.
 *
 * The card stays as it is, because the moment of finishing is worth
 * celebrating. This is the door that is always open: it sits under the score
 * on the index page, appears the moment a badge is earned, and never goes
 * away.
 *
 * It renders nothing at all for a reader who has not finished a phase, which
 * is most visits, so it costs nothing on the page it lives on.
 */

import { useState } from "react";
import { Award } from "lucide-react";
import { highestTier } from "@/lib/challenge/badge";
import { uiFor } from "@/lib/challenge/locale";
import { answerKeyFor } from "@/lib/challenge/nav";
import { dayProgress } from "@/lib/challenge/progress";
import type { ProgressState } from "@/lib/challenge/progress";
import type { ChallengeLocale } from "@/lib/challenge/types";
import { BadgeCard } from "./badge-card";
import { useHydrated } from "./use-stored";

/** Built once per language at module load: the content does not change. */
const KEYS = { en: answerKeyFor("en"), fr: answerKeyFor("fr") } as const;

export function BadgeOffer({
  state,
  locale = "en",
}: {
  state: ProgressState;
  locale?: ChallengeLocale;
}) {
  const UI = uiFor(locale);
  const hydrated = useHydrated();
  const [open, setOpen] = useState(false);

  /*
    Nothing before hydration. Storage is empty on the server, so this would
    render its absent state into the static HTML either way, but being explicit
    keeps it in step with everything else in this folder.
  */
  const tier = hydrated
    ? highestTier((day) => dayProgress(state, day, KEYS[locale]).done)
    : null;

  if (!tier) return null;

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex w-fit items-center gap-2 rounded-sm border border-primary bg-primary px-4 py-2.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:border-primary-dark hover:bg-primary-dark"
      >
        <Award className="size-4" aria-hidden />
        {UI.badgeOfferButton(tier)}
      </button>

      {/*
        The same card as the celebration, and deliberately so. One form, one
        design, one place to change it. `onClose` here only closes: unlike the
        celebration, opening this never marks anything as seen, so it can be
        opened as many times as the reader likes.
      */}
      {open ? (
        <BadgeCard
          tier={tier}
          locale={locale}
          state={state}
          onClose={() => setOpen(false)}
        />
      ) : null}
    </>
  );
}
