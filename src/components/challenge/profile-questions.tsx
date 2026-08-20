"use client";

/**
 * Two questions, asked once, before the reader picks a day.
 *
 * It sits below the Start with Day 1 button and above the list, which is the
 * one place it can be seen without being in the way. Nothing here blocks
 * anything: the button above it works, every lesson stays open, and closing
 * this is a permanent answer rather than a snooze.
 *
 * The first question earns its place by answering a question the reader
 * actually has. Landing on a list of thirty days, the honest reaction is
 * "which of these do I need?", and this replies with a day number and a reason
 * for it. The second question is ours, it is optional, and it is asked after
 * the reader has already been given something.
 *
 * Nothing is sent when they answer. The answers sit in their browser and only
 * travel if they later ask for a sheet, which is the only moment this site
 * sends anything anywhere.
 */

import Link from "next/link";
import { ArrowRight, Check, X } from "lucide-react";
import { track } from "@vercel/analytics";
import { uiFor } from "@/lib/challenge/locale";
import { dayByNumberIn, dayHrefIn } from "@/lib/challenge/nav";
import { baseFor } from "@/lib/challenge/locale";
import type { ChallengeLocale } from "@/lib/challenge/types";
import {
  levelOptionIn,
  levelOptionsFor,
  roleOptionsFor,
  shouldAsk,
} from "@/lib/challenge/profile";
import { useProfile } from "./use-profile";

function Choice({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={
        "rounded-sm border px-4 py-2.5 text-left text-[0.9375rem] font-medium transition-colors " +
        (selected
          ? "border-primary bg-primary text-primary-foreground"
          : "border-input bg-background hover:border-primary")
      }
    >
      {label}
    </button>
  );
}

export function ProfileQuestions({
  locale = "en",
}: {
  locale?: ChallengeLocale;
}) {
  const UI = uiFor(locale);
  const hrefForDay = (n: number) => {
    const day = dayByNumberIn(locale, n);
    return day ? dayHrefIn(locale, day) : baseFor(locale);
  };
  const { profile, setLevel, setRole, dismiss, reopen } = useProfile();
  const chosen = levelOptionIn(locale, profile.level);

  // Answered, or closed. Either way the questions are done. A single quiet
  // line is left so the advice can be found again and so a reader who clicked
  // the wrong one is not stuck with it.
  if (!shouldAsk(profile)) {
    return (
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 rounded-md border border-dashed border-border px-4 py-2.5 text-[0.8125rem] text-muted-foreground">
        {chosen ? (
          <>
            <Check className="size-3.5 text-success" aria-hidden />
            <span>
              {UI.profileAnsweredPrefix}{" "}
              <Link
                href={hrefForDay(chosen.startDay)}
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

  return (
    <div className="relative flex flex-col gap-4 rounded-lg border border-border bg-card px-6 py-5 shadow-sm">
      <button
        type="button"
        onClick={dismiss}
        aria-label={UI.profileSkip}
        title={UI.profileSkip}
        className="absolute right-3 top-3 rounded-sm p-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
      >
        <X className="size-4" aria-hidden />
      </button>

      <div className="flex flex-col gap-1 pr-8">
        <span className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          {UI.profileTag}
        </span>
        <h2 className="text-lg font-bold tracking-tight">{UI.profileTitle}</h2>
        <p className="text-[0.9375rem] text-muted-foreground">{UI.profileBody}</p>
      </div>

      <fieldset className="flex flex-col gap-2.5">
        <legend className="mb-2.5 text-[0.9375rem] font-semibold">
          {UI.profileLevelQuestion}
        </legend>
        <div className="grid gap-2 sm:grid-cols-3">
          {levelOptionsFor(locale).map((option) => (
            <Choice
              key={option.id}
              label={option.label}
              selected={profile.level === option.id}
              onClick={() => {
                setLevel(option.id);
                track("challenge_profile_level", { level: option.id });
              }}
            />
          ))}
        </div>
      </fieldset>

      {/*
        The role question only appears once the level is answered, so the
        reader is never looking at two questions at once. In practice this
        block is visible for about a second, between the click and the answer
        replacing the whole card.
      */}
      {profile.level ? (
        <fieldset className="flex flex-col gap-2.5 border-t border-border pt-4">
          <legend className="mb-2.5 text-[0.9375rem] font-semibold">
            {UI.profileRoleQuestion}
          </legend>
          <div className="grid gap-2 sm:grid-cols-2">
            {roleOptionsFor(locale).map((option) => (
              <Choice
                key={option.id}
                label={option.label}
                selected={profile.role === option.id}
                onClick={() => {
                  setRole(option.id);
                  track("challenge_profile_role", { role: option.id });
                }}
              />
            ))}
          </div>
        </fieldset>
      ) : null}

      {chosen ? (
        <div className="flex flex-col gap-2 rounded-md bg-accent px-4 py-3.5">
          <p className="text-[0.9375rem] font-semibold text-primary-dark">
            {UI.profileStartAt(chosen.startDay)}
          </p>
          <p className="text-[0.8125rem] text-muted-foreground">
            {chosen.because}
          </p>
          <Link
            href={hrefForDay(chosen.startDay)}
            className="mt-1 inline-flex w-fit items-center gap-2 rounded-sm border border-primary bg-primary px-5 py-2.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:border-primary-dark hover:bg-primary-dark"
          >
            {UI.profileGo(chosen.startDay)}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      ) : (
        <p className="text-[0.8125rem] text-muted-foreground">
          {UI.profileFineprint}
        </p>
      )}
    </div>
  );
}


