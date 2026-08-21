"use client";

/**
 * The one line left behind once the two questions are done.
 *
 * The asking itself moved into `profile-modal.tsx`, which puts one question on
 * screen at a time the first time somebody opens the course. This is what
 * remains afterwards: a quiet reminder of where they were pointed, and a way
 * back in for somebody who clicked the wrong answer.
 *
 * It renders nothing at all while the questions are still unanswered, because
 * in that state the popup is on screen and two versions of the same question
 * would be one too many.
 *
 * Nothing here is sent anywhere. The answers sit in the reader's browser and
 * only travel if they later ask for a cheat sheet.
 */

import Link from "next/link";
import { Check } from "lucide-react";
import { uiFor, baseFor } from "@/lib/challenge/locale";
import { dayByNumberIn, dayHrefIn } from "@/lib/challenge/nav";
import { levelOptionIn, shouldAsk } from "@/lib/challenge/profile";
import type { ChallengeLocale } from "@/lib/challenge/types";
import { useHydrated } from "./use-stored";
import { useProfile } from "./use-profile";

export function ProfileQuestions({
  locale = "en",
}: {
  locale?: ChallengeLocale;
}) {
  const UI = uiFor(locale);
  const hydrated = useHydrated();
  const { profile, reopen } = useProfile();

  // Not on the server, and not while the popup is doing the asking.
  if (!hydrated || shouldAsk(profile)) return null;

  const chosen = levelOptionIn(locale, profile.level);
  const startDay = chosen ? dayByNumberIn(locale, chosen.startDay) : undefined;

  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 rounded-md border border-dashed border-border px-4 py-2.5 text-[0.8125rem] text-muted-foreground">
      {chosen ? (
        <>
          <Check className="size-3.5 text-success" aria-hidden />
          <span>
            {UI.profileAnsweredPrefix}{" "}
            <Link
              href={startDay ? dayHrefIn(locale, startDay) : baseFor(locale)}
              className="font-semibold text-primary-dark underline-offset-2 hover:underline"
            >
              {UI.profileDayLabel(chosen.startDay)}
            </Link>
            .
          </span>
        </>
      ) : (
        <span>{UI.profileDismissed}</span>
      )}
      <button
        type="button"
        onClick={reopen}
        className="ml-auto font-semibold underline underline-offset-2 hover:text-foreground"
      >
        {UI.profileChange}
      </button>
    </div>
  );
}
