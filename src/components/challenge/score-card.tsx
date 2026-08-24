"use client";

/**
 * The reader's score, on the index page.
 *
 * Three numbers and a level. No leaderboard, because one browser only ever
 * knows about one person, and inventing other people to rank against would be
 * a fabricated record on a page whose whole job is looking credible.
 *
 * The pace line does that job honestly instead: it compares the reader to a
 * fixed target, one day per day, which is a real thing they can be ahead of or
 * behind without anybody else existing.
 *
 * Before hydration there is no stored blob, so this renders its empty state.
 * That is deliberate and matches the static HTML.
 */

import { Flame, Trophy } from "lucide-react";
import { uiFor } from "@/lib/challenge/locale";
import { answerKeyFor, totalDaysFor } from "@/lib/challenge/nav";
import type { ChallengeLocale } from "@/lib/challenge/types";
import { summarise } from "@/lib/challenge/progress";
import { BadgeOffer } from "./badge-offer";
import { EarnedOffer } from "./earned-offer";
import { useProgress } from "./use-progress";

/** Built once per language at module load: the content does not change. */
const KEYS = { en: answerKeyFor("en"), fr: answerKeyFor("fr") } as const;

function Figure({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1">
      <span className="font-mono text-[1.75rem] font-bold leading-none tabular-nums">
        {value}
      </span>
      <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function ScoreCard({ locale = "en" }: { locale?: ChallengeLocale }) {
  const UI = uiFor(locale);
  const { state } = useProgress();
  const s = summarise(state, KEYS[locale], totalDaysFor());

  const level = UI.levels[s.levelId];
  const nextName = s.nextLevelId ? UI.levels[s.nextLevelId].name : null;
  const pct = s.maxPoints > 0 ? Math.round((s.points / s.maxPoints) * 100) : 0;

  // Nothing answered yet. Say what makes the score start rather than showing a
  // row of zeroes, which reads as a broken feature.
  if (s.points === 0 && s.daysDone === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border bg-card px-6 py-5 text-center">
        <p className="text-[0.9375rem] text-muted-foreground">{UI.scoreEmpty}</p>
      </div>
    );
  }

  const pace =
    s.finished
      ? UI.scoreFinished
      : s.aheadBy === null
        ? null
        : s.aheadBy > 0
          ? UI.scorePaceAhead(s.aheadBy)
          : s.aheadBy < 0
            ? UI.scorePaceBehind(-s.aheadBy)
            : UI.scorePaceLevel;

  return (
    <div className="flex flex-col gap-5 rounded-lg border border-border bg-card px-6 py-5 shadow-sm">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <span className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          {UI.scoreTitle}
        </span>
        <span className="ml-auto inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-[0.8125rem] font-bold text-primary-dark">
          <Trophy className="size-3.5" aria-hidden />
          {level.name}
        </span>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 sm:justify-start">
        <Figure value={String(s.points)} label={UI.scorePoints} />
        <Figure
          value={UI.scoreOf(s.daysDone, s.totalDays)}
          label={UI.scoreDays}
        />
        {s.streak > 1 ? (
          <div className="flex flex-col items-center gap-1">
            <span className="inline-flex items-center gap-1.5 font-mono text-[1.75rem] font-bold leading-none tabular-nums">
              <Flame className="size-5 text-accent-warm" aria-hidden />
              {s.streak}
            </span>
            <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
              {UI.scoreStreak}
            </span>
          </div>
        ) : null}
      </div>

      {/* Progress toward the next level. A bar reads faster than a number. */}
      <div className="flex flex-col gap-2">
        <div
          className="h-1.5 w-full overflow-hidden rounded-full bg-secondary"
          role="progressbar"
          aria-valuenow={pct}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={UI.scorePoints}
        >
          <div
            className="h-full rounded-full bg-primary transition-[width] duration-500"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="text-[0.9375rem] text-muted-foreground">
          {nextName ? UI.scoreToNext(s.pointsToNext, nextName) : UI.scoreTopLevel}
          {pace ? <span className="ml-1.5">{pace}</span> : null}
        </p>
      </div>

      <p className="text-[0.8125rem] leading-relaxed text-muted-foreground">
        {level.blurb} {UI.scoreLocal}
      </p>

      {/*
        The way back to a badge already earned.

        Not decoration: the celebration card fires once ever, so before this
        existed, closing it took the badge away permanently. Renders nothing
        until a phase is finished.
      */}
      <BadgeOffer state={state} locale={locale} />

      {/*
        The earned sheet. It renders nothing at all for a reader who is too
        early, so this line costs nothing on most visits.
      */}
      <EarnedOffer locale={locale} />
    </div>
  );
}

