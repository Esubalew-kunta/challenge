"use client";

/**
 * Day 6: what the repeated work is costing, before anybody talks about price.
 *
 * **It prints no price of ours, on purpose.** This project already refuses to
 * put plan prices on a sheet, because a number nobody owns quietly becomes a
 * lie: Anthropic changes an offer, we do not notice for months, and a page that
 * claims every command was verified is now wrong about the one thing a finance
 * team will check. A calculator with our prices baked in would be the same
 * mistake with more arithmetic on top.
 *
 * So the only numbers here are the reader's own. How often they do a job, how
 * long it takes, and optionally what an hour of their time costs. Everything it
 * shows is derived from those three, which means it cannot go stale and cannot
 * be wrong in a way we would have to correct.
 *
 * What makes it worth building rather than being a nice widget: the output is
 * an email. Three lines, copied to the clipboard, that a reader pastes to
 * whoever approves the spend. That is the actual blocker on Day 6, and it is
 * the same audience the Manager Pack sheet on Day 10 is written for.
 *
 * Everything stays in the reader's browser, like the score and the two
 * questions. Nothing is sent anywhere.
 */

import { useCallback, useMemo, useState } from "react";
import { Check, Copy, Plus, X } from "lucide-react";
import { track } from "@vercel/analytics";
import { uiFor } from "@/lib/challenge/locale";
import type { ChallengeLocale } from "@/lib/challenge/types";
import { useHydrated, useStored, writeStored } from "./use-stored";

/** Its own key, like every other thing this course remembers. */
export const COST_KEY = "aim.challenge.cost.v1";

/**
 * Hours in a working day.
 *
 * Seven, not eight. Nobody does eight hours of the work being counted here, and
 * a payback figure a manager can pick apart is worth less than a smaller one
 * they cannot.
 */
const HOURS_PER_WORKING_DAY = 7;

interface Row {
  job: string;
  times: string;
  minutes: string;
}

const EMPTY_ROW: Row = { job: "", times: "", minutes: "" };
const START_ROWS: Row[] = [EMPTY_ROW, EMPTY_ROW, EMPTY_ROW];

/** Guards against a hand edited or half written blob, never throws. */
function parseRows(raw: string): Row[] {
  if (!raw) return START_ROWS;
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return START_ROWS;
    const rows = parsed
      .filter((r): r is Partial<Row> => typeof r === "object" && r !== null)
      .map((r) => ({
        job: typeof r.job === "string" ? r.job.slice(0, 80) : "",
        times: typeof r.times === "string" ? r.times : "",
        minutes: typeof r.minutes === "string" ? r.minutes : "",
      }));
    return rows.length ? rows : START_ROWS;
  } catch {
    return START_ROWS;
  }
}

/** A number the reader typed, or 0. Never NaN, never negative, never silly. */
function num(value: string, max: number): number {
  const n = Number.parseFloat(value.replace(",", "."));
  if (!Number.isFinite(n) || n <= 0) return 0;
  return Math.min(n, max);
}

export function CostTool({ locale = "en" }: { locale?: ChallengeLocale }) {
  const UI = uiFor(locale);
  const hydrated = useHydrated();
  const raw = useStored(COST_KEY, "");
  const rows = useMemo(() => parseRows(raw), [raw]);

  const [copied, setCopied] = useState(false);

  const save = useCallback((next: Row[]) => {
    writeStored(COST_KEY, JSON.stringify(next));
  }, []);

  const setCell = useCallback(
    (index: number, field: keyof Row, value: string) => {
      const next = rows.map((r, i) => (i === index ? { ...r, [field]: value } : r));
      save(next);
    },
    [rows, save],
  );

  const addRow = useCallback(() => save([...rows, EMPTY_ROW]), [rows, save]);

  const removeRow = useCallback(
    (index: number) => {
      const next = rows.filter((_, i) => i !== index);
      save(next.length ? next : START_ROWS);
    },
    [rows, save],
  );

  /**
   * Minutes a month, from whatever is filled in.
   *
   * A row with only a name, or only a number, contributes nothing rather than
   * guessing. Somebody halfway through typing should not watch the total jump
   * around.
   */
  const minutesPerMonth = useMemo(
    () =>
      rows.reduce(
        (total, r) => total + num(r.times, 500) * num(r.minutes, 600),
        0,
      ),
    [rows],
  );

  const [rate, setRate] = useState("");

  const nf = useMemo(
    () => new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-GB"),
    [locale],
  );
  const money = useMemo(
    () =>
      new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-GB", {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
      }),
    [locale],
  );

  /** `8h 10m`, or `10m` when there is no hour to show. */
  const asDuration = useCallback(
    (minutes: number) => {
      const whole = Math.round(minutes);
      const h = Math.floor(whole / 60);
      const m = whole % 60;
      if (!h) return `${m}m`;
      return m ? `${nf.format(h)}h ${m}m` : `${nf.format(h)}h`;
    },
    [nf],
  );

  const hoursPerYear = (minutesPerMonth * 12) / 60;
  const workingDays = hoursPerYear / HOURS_PER_WORKING_DAY;
  const rateNumber = num(rate, 10_000);
  const yearlyMoney = rateNumber ? hoursPerYear * rateNumber : 0;

  const managerText = UI.costManagerText(
    `${nf.format(Math.round(hoursPerYear))}h`,
    nf.format(Math.round(workingDays)),
    yearlyMoney ? money.format(Math.round(yearlyMoney)) : null,
  );

  // A plain function, not a `useCallback`. The compiler in this project
  // memoizes on its own, and wrapping this one by hand made it give up on the
  // whole component rather than keep the memoization it had already worked out.
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(managerText);
      setCopied(true);
      track("challenge_cost_copied", {});
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      // Clipboard can be blocked. The lines are on screen and selectable.
    }
  };

  const hasNumbers = minutesPerMonth > 0;

  return (
    <div className="flex flex-col gap-5 rounded-md border border-l-[3px] border-border border-l-primary bg-card px-6 py-5 shadow-sm">
      <div className="flex flex-col gap-2">
        <span className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary-dark">
          {UI.costTag}
        </span>
        <h3 className="text-lg font-semibold tracking-tight">{UI.costTitle}</h3>
        <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
          {UI.costBody}
        </p>
      </div>

      {/*
        Three columns on a desktop, stacked on a phone. Labels are real labels
        rather than placeholders: a placeholder disappears the moment somebody
        types, which is exactly when they need to know what the box was for.
      */}
      <div className="flex flex-col gap-3">
        {rows.map((row, i) => (
          <div
            key={i}
            className="grid gap-2 sm:grid-cols-[1fr_7rem_7rem_2rem] sm:items-end"
          >
            <label className="flex flex-col gap-1">
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                {UI.costJobLabel}
              </span>
              <input
                type="text"
                value={row.job}
                maxLength={80}
                placeholder={i === 0 ? UI.costJobPlaceholder : ""}
                onChange={(e) => setCell(i, "job", e.target.value)}
                className="rounded-sm border border-input bg-background px-3 py-2 text-[0.9375rem] outline-none transition-colors focus:border-primary"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                {UI.costTimesLabel}
              </span>
              <input
                type="number"
                inputMode="decimal"
                min={0}
                value={row.times}
                onChange={(e) => setCell(i, "times", e.target.value)}
                className="rounded-sm border border-input bg-background px-3 py-2 font-mono text-[0.9375rem] outline-none transition-colors focus:border-primary"
              />
            </label>

            <label className="flex flex-col gap-1">
              <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                {UI.costMinutesLabel}
              </span>
              <input
                type="number"
                inputMode="decimal"
                min={0}
                value={row.minutes}
                onChange={(e) => setCell(i, "minutes", e.target.value)}
                className="rounded-sm border border-input bg-background px-3 py-2 font-mono text-[0.9375rem] outline-none transition-colors focus:border-primary"
              />
            </label>

            <button
              type="button"
              onClick={() => removeRow(i)}
              aria-label={UI.costRemoveRow}
              className="hidden size-9 place-items-center rounded-sm text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground sm:grid"
            >
              <X className="size-4" aria-hidden />
            </button>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={addRow}
        className="inline-flex w-fit items-center gap-2 rounded-sm border border-border px-3.5 py-2 text-[0.8125rem] font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
      >
        <Plus className="size-3.5" aria-hidden />
        {UI.costAddRow}
      </button>

      {/* The answer. Empty until there is something real to say. */}
      <div className="flex flex-col gap-3 rounded-md bg-accent px-5 py-4">
        {!hydrated || !hasNumbers ? (
          <p className="text-[0.9375rem] text-muted-foreground">{UI.costEmpty}</p>
        ) : (
          <>
            <div className="flex flex-wrap items-baseline gap-x-6 gap-y-2">
              <span className="font-mono text-[1.5rem] font-bold leading-none tabular-nums text-primary-dark">
                {asDuration(minutesPerMonth)}
                <span className="ml-1.5 font-sans text-[0.8125rem] font-semibold text-muted-foreground">
                  {UI.costAMonth}
                </span>
              </span>
              <span className="font-mono text-[1.75rem] font-bold leading-none tabular-nums text-primary-dark">
                {nf.format(Math.round(hoursPerYear))}h
                <span className="ml-1.5 font-sans text-[0.8125rem] font-semibold text-muted-foreground">
                  {UI.costAYear}
                </span>
              </span>
            </div>
            <p className="text-[0.9375rem] font-semibold text-foreground">
              {UI.costWorkingDays(nf.format(Math.round(workingDays)))}
            </p>
            <p className="text-[0.8125rem] text-muted-foreground">
              {UI.costWorkingDayNote}
            </p>

            {yearlyMoney ? (
              <p className="text-[1.0625rem] font-bold text-foreground">
                {UI.costMoneyLine(money.format(Math.round(yearlyMoney)))}
              </p>
            ) : null}
          </>
        )}
      </div>

      <label className="flex flex-col gap-1">
        <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
          {UI.costRateLabel}
        </span>
        <input
          type="number"
          inputMode="decimal"
          min={0}
          value={rate}
          onChange={(e) => setRate(e.target.value)}
          className="w-40 rounded-sm border border-input bg-background px-3 py-2 font-mono text-[0.9375rem] outline-none transition-colors focus:border-primary"
        />
        <span className="text-[0.8125rem] text-muted-foreground">
          {UI.costRateHint}
        </span>
      </label>

      {/*
        The point of the whole thing: three lines somebody can paste into an
        email to whoever signs off the spend. Hidden until there is a number,
        because copying an empty sentence is worse than no button.
      */}
      {hydrated && hasNumbers ? (
        <div className="flex flex-col gap-2">
          <pre className="overflow-x-auto whitespace-pre-wrap rounded-sm border border-border bg-secondary px-4 py-3 font-sans text-[0.9375rem] leading-relaxed text-foreground">
            {managerText}
          </pre>
          <button
            type="button"
            onClick={copy}
            className="inline-flex w-fit items-center gap-2 rounded-sm border border-primary bg-primary px-5 py-2.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:border-primary-dark hover:bg-primary-dark"
          >
            {copied ? (
              <>
                <Check className="size-4" aria-hidden />
                {UI.costCopied}
              </>
            ) : (
              <>
                <Copy className="size-4" aria-hidden />
                {UI.costCopyButton}
              </>
            )}
          </button>
        </div>
      ) : null}

      <p className="text-[0.8125rem] leading-relaxed text-muted-foreground">
        {UI.costPricesElsewhere} {UI.costLocal}
      </p>
    </div>
  );
}
