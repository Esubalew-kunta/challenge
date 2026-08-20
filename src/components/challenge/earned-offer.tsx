"use client";

/**
 * The earned sheet, offered on the score card and nowhere else.
 *
 * The difference from `SheetOffer` is the whole point of it. That one is a
 * free download in exchange for an address, on ten day pages. This one is not
 * offered anywhere until the reader has actually done the work, and the file
 * behind it exists on no lesson page at all.
 *
 * Three states, and the middle one matters most:
 *
 *   locked   they can see something exists and what it costs
 *   too fast they have the points but did the whole thing in two sittings
 *   unlocked the box, and the file
 *
 * The "too fast" message says plainly what is missing, which also tells a
 * determined person exactly what to fake in their own browser store. That is
 * accepted, and it is the same trade the rest of this build makes: a gate only
 * ever punishes the honest reader. Saying nothing would leave a real reader
 * staring at a locked box with no idea why.
 *
 * Email stays optional here as everywhere. The file opens on the page whether
 * they give an address or not.
 */

import { useState } from "react";
import { ArrowRight, Check, Download, Loader2, Lock, Sparkles } from "lucide-react";
import { track } from "@vercel/analytics";
import { uiFor } from "@/lib/challenge/locale";
import { LEAD_SOURCE } from "@/lib/challenge/registry";
import { answerKeyFor, totalDaysFor } from "@/lib/challenge/nav";
import type { ChallengeLocale } from "@/lib/challenge/types";
import { summarise } from "@/lib/challenge/progress";
import { EARNED_SHEET_ID, earnedState } from "@/lib/challenge/earned";
import { leadSubmissionSchema } from "@/lib/schemas/lead";
import { useProfile } from "./use-profile";
import { useProgress } from "./use-progress";

/** Built once per language at module load: the content does not change. */
const KEYS = { en: answerKeyFor("en"), fr: answerKeyFor("fr") } as const;

/** Below this, the reader is too early for a teaser to mean anything. */
const TEASE_FROM_POINTS = 30;

export function EarnedOffer({ locale = "en" }: { locale?: ChallengeLocale }) {
  const UI = uiFor(locale);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const { state } = useProgress();
  const { profile } = useProfile();

  const score = summarise(state, KEYS[locale], totalDaysFor());
  const earned = earnedState(state, score.points, score.daysDone);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    const parsed = leadSubmissionSchema.safeParse({
      email: email.trim(),
      source: LEAD_SOURCE,
      sheetId: EARNED_SHEET_ID,
      // 0 is not a day. It is this sheet saying it belongs to none of them.
      sheetDay: 0,
    });

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? UI.sheetBadEmail);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/challenge-sheet", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: parsed.data.email,
          sheetId: EARNED_SHEET_ID,
          sheetDay: 0,
          points: score.points,
          daysDone: score.daysDone,
          levelId: score.levelId,
          // Their two answers from the index page, if they gave them.
          role: profile.role ?? undefined,
          claudeLevel: profile.level ?? undefined,
          locale,
        }),
      });
      if (!response.ok) throw new Error("failed");
      const result = (await response.json()) as { fileUrl?: string | null };

      setFileUrl(result.fileUrl ?? null);
      track("challenge_earned_sheet", { days: score.daysDone });
      setSent(true);
    } catch {
      setError(UI.sheetFailed);
    } finally {
      setLoading(false);
    }
  };

  // Too early to mention it. A locked box on somebody's second day is noise.
  if (!earned.unlocked && !earned.tooFast && score.points < TEASE_FROM_POINTS) {
    return null;
  }

  if (!earned.unlocked) {
    return (
      <div className="flex items-start gap-2.5 rounded-md border border-dashed border-border px-4 py-3 text-[0.8125rem] text-muted-foreground">
        <Lock className="mt-0.5 size-3.5 shrink-0" aria-hidden />
        <span>
          {earned.tooFast
            ? UI.earnedTooFast(earned.calendarDays, earned.calendarDaysNeeded)
            : UI.earnedLocked(earned.pointsToGo)}
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3.5 rounded-lg border border-primary bg-accent/40 p-5">
      <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-primary-dark">
        <Sparkles className="size-3.5" aria-hidden />
        {UI.earnedTag}
      </span>

      <h3 className="text-lg font-bold tracking-tight">{UI.earnedTitle}</h3>

      <p className="text-[0.9375rem] text-muted-foreground">{UI.earnedPitch}</p>

      <p className="text-[0.9375rem] font-semibold">{UI.earnedWhy}</p>

      {sent ? (
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-2 text-[0.9375rem] font-semibold text-success">
            <Check className="size-4" aria-hidden />
            {UI.sheetDone}
          </p>
          {fileUrl ? (
            <a
              href={fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-sm border border-foreground px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
            >
              <Download className="size-4" aria-hidden />
              {UI.sheetOpenNow}
            </a>
          ) : (
            <p className="text-[0.8125rem] text-muted-foreground">{UI.sheetNotReady}</p>
          )}
        </div>
      ) : (
        <form onSubmit={submit} className="flex flex-col gap-2">
          <div className="flex flex-wrap gap-2">
            <label className="sr-only" htmlFor="earned-sheet-email">
              {UI.sheetEmailLabel}
            </label>
            <input
              id="earned-sheet-email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={UI.sheetEmailPlaceholder}
              className="min-w-0 flex-1 basis-56 rounded-sm border border-input bg-background px-3.5 py-2.5 text-[0.9375rem] outline-none transition-colors focus:border-primary"
            />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center gap-2 rounded-sm border border-primary bg-primary px-5 py-2.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:border-primary-dark hover:bg-primary-dark disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="size-4 animate-spin" aria-hidden />
                  {UI.sheetSending}
                </>
              ) : (
                <>
                  {UI.earnedButton}
                  <ArrowRight className="size-4" aria-hidden />
                </>
              )}
            </button>
          </div>
          {error ? (
            <p className="text-[0.8125rem] text-destructive">{error}</p>
          ) : null}
          <p className="text-[0.8125rem] text-muted-foreground">
            {UI.earnedFineprint}
          </p>
        </form>
      )}
    </div>
  );
}



