"use client";

/**
 * Two small readouts of one day's state, both driven by the same stored blob.
 *
 * `DayStatus` closes a day page: it says whether the day counted and how many
 * questions were right. `DayTick` marks a finished day in the list of thirty on
 * the index.
 *
 * Both render nothing at all before hydration. A tick that appears on the
 * static HTML and then vanishes is worse than one that arrives a beat late, and
 * an empty span keeps the list from jumping.
 */

import { Check } from "lucide-react";
import { UI } from "@/lib/challenge/config";
import { answerKey } from "@/lib/challenge";
import { dayProgress } from "@/lib/challenge/progress";
import { useProgress } from "./use-progress";

const KEY = answerKey();

export function DayStatus({ day }: { day: number }) {
  const { state } = useProgress();
  const p = dayProgress(state, day, KEY);

  if (p.answered === 0) {
    return (
      <p className="text-center text-[0.8125rem] text-muted-foreground">
        {UI.dayNotStarted}
      </p>
    );
  }

  if (!p.done) {
    return (
      <p className="text-center text-[0.8125rem] text-muted-foreground">
        {UI.dayPartLine(p.answered, p.total)}
      </p>
    );
  }

  return (
    <div className="flex flex-wrap items-center justify-center gap-2 rounded-md border border-success/30 bg-success/10 px-4 py-3">
      <span className="inline-flex items-center gap-2 text-[0.8125rem] font-bold uppercase tracking-[0.1em] text-success">
        <Check className="size-3.5" aria-hidden />
        {UI.dayDoneTag}
      </span>
      <span className="text-[0.8125rem] text-muted-foreground">
        {UI.dayScoreLine(p.right, p.total)}
      </span>
    </div>
  );
}

export function DayTick({ day }: { day: number }) {
  const { state } = useProgress();
  const p = dayProgress(state, day, KEY);
  if (!p.done) return null;

  return (
    <span
      title={UI.dayDoneTag}
      className="inline-flex items-center gap-1 rounded-[5px] border border-success/30 bg-success/10 px-2 py-1 text-[0.6875rem] font-bold text-success"
    >
      <Check className="size-3" aria-hidden />
      {UI.dayDoneTag}
    </span>
  );
}
