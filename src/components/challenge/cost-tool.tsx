"use client";

/**
 * Day 6: what the repeated work is costing, in three taps and no typing.
 *
 * **It prints no price of ours, on purpose.** This project already refuses to
 * put plan prices on a sheet, because a number nobody owns quietly becomes a
 * lie: Anthropic changes an offer, we do not notice for months, and a page that
 * claims every command was verified is now wrong about the one thing a finance
 * team will check. A calculator with our prices baked in would be the same
 * mistake with arithmetic on top. Every number here is derived from what the
 * reader chose, so it cannot go stale.
 *
 * **Nothing is typed.** The first version had four text boxes and most readers
 * would have scrolled past them. Owner's call, 21 August 2026: pick a job from
 * a list, pick a rough frequency, pick a rough length. Three taps, then the
 * answer.
 *
 * **The list already knows who they are.** The two questions popup on the index
 * asked which department they are in, and that answer picks the list of jobs
 * shown here. Nothing extra is asked. Somebody who skipped that question, or
 * who arrived on Day 6 from a search, gets the general list.
 *
 * **The result is not gated.** The AI Makers ROI calculator hides its number
 * behind a lead form. This course does not gate anything: lessons are open and
 * an email is only ever asked for in exchange for a sheet. A form in front of
 * this number would be the only gate on thirty one pages.
 *
 * It ends in the booking button the rest of the site uses, so a reader who
 * wants help does not lose the numbers they just built.
 */

import { useCallback, useMemo } from "react";
import { ArrowRight, Check } from "lucide-react";
import { BookingCtaButton } from "@/components/shared/booking-modal";
import { uiFor } from "@/lib/challenge/locale";
import {
  COST_DEFAULT_DURATION,
  COST_DEFAULT_FREQUENCY,
  COST_DURATIONS,
  COST_FREQUENCIES,
  HOURS_PER_WORKING_DAY,
  costJobsFor,
} from "@/lib/challenge/cost-jobs";
import type {
  CostDurationId,
  CostFrequencyId,
} from "@/lib/challenge/cost-jobs";
import type { ChallengeLocale } from "@/lib/challenge/types";
import { useHydrated, useStored, writeStored } from "./use-stored";
import { useProfile } from "./use-profile";

/**
 * v2 because the shape changed completely: rows of typed text became a set of
 * chosen jobs. An old v1 blob cannot be read as v2 and should not be guessed
 * at, so it is simply left behind.
 */
export const COST_KEY = "aim.challenge.cost.v2";

/** What the reader has chosen, keyed by job id. */
type Picks = Record<string, { often: CostFrequencyId; long: CostDurationId }>;

function parsePicks(raw: string): Picks {
  if (!raw) return {};
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (typeof parsed !== "object" || parsed === null) return {};
    const out: Picks = {};
    for (const [id, value] of Object.entries(parsed as Record<string, unknown>)) {
      if (typeof value !== "object" || value === null) continue;
      const v = value as { often?: unknown; long?: unknown };
      const often = COST_FREQUENCIES.find((f) => f.id === v.often)?.id;
      const long = COST_DURATIONS.find((d) => d.id === v.long)?.id;
      if (often && long) out[id] = { often, long };
    }
    return out;
  } catch {
    // A corrupt blob means nothing is picked. Never an error on a lesson page.
    return {};
  }
}

/* ------------------------------------------------------------------ atoms */

/**
 * One choice out of four, laid out on a fixed grid.
 *
 * A grid rather than a row of pills, because pills of different widths wrap
 * wherever they run out of room. The first version put the label inline and let
 * four pills flow after it, so "Once or twice a month" dropped onto a second
 * line underneath the label and the two rows of the same card no longer lined
 * up with each other. Equal cells cannot do that.
 *
 * Two columns on a phone, four on anything wider. The label sits above the grid
 * rather than beside it, so both rows in a card start at the same left edge.
 */
function OptionGrid<T extends string>({
  label,
  options,
  value,
  onPick,
}: {
  label: string;
  options: readonly { id: T; label: string }[];
  value: T;
  onPick: (id: T) => void;
}) {
  return (
    <div role="group" aria-label={label} className="flex flex-col gap-1.5">
      <span className="text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-muted-foreground">
        {label}
      </span>
      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
        {options.map((option) => {
          const on = option.id === value;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={on}
              onClick={() => onPick(option.id)}
              className={
                on
                  ? "rounded-sm border border-primary bg-primary px-3 py-2 text-center text-[0.8125rem] font-semibold leading-snug text-primary-foreground transition-colors"
                  : "rounded-sm border border-input bg-card px-3 py-2 text-center text-[0.8125rem] font-medium leading-snug text-foreground transition-colors hover:border-primary hover:bg-accent"
              }
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- tool */

export function CostTool({ locale = "en" }: { locale?: ChallengeLocale }) {
  const UI = uiFor(locale);
  const hydrated = useHydrated();
  const { profile } = useProfile();

  const raw = useStored(COST_KEY, "");
  const picks = useMemo(() => parsePicks(raw), [raw]);

  // The department they gave on the index decides the list. Before hydration
  // there is no stored profile, so the general list is what the static HTML
  // carries, which is also the correct list for most readers.
  const jobs = useMemo(
    () => costJobsFor(locale, hydrated ? profile.role : null),
    [locale, hydrated, profile.role],
  );

  const save = useCallback((next: Picks) => {
    writeStored(COST_KEY, JSON.stringify(next));
  }, []);

  const toggleJob = useCallback(
    (id: string) => {
      const next = { ...picks };
      if (next[id]) delete next[id];
      else next[id] = { often: COST_DEFAULT_FREQUENCY, long: COST_DEFAULT_DURATION };
      save(next);
    },
    [picks, save],
  );

  const setOften = useCallback(
    (id: string, often: CostFrequencyId) => {
      if (!picks[id]) return;
      save({ ...picks, [id]: { ...picks[id], often } });
    },
    [picks, save],
  );

  const setLong = useCallback(
    (id: string, long: CostDurationId) => {
      if (!picks[id]) return;
      save({ ...picks, [id]: { ...picks[id], long } });
    },
    [picks, save],
  );

  const chosen = useMemo(
    () => jobs.filter((j) => Boolean(picks[j.id])),
    [jobs, picks],
  );

  /**
   * Minutes a month.
   *
   * Only jobs from the list on screen are counted. Somebody who picked three
   * sales jobs and then answered the department question again would otherwise
   * carry an invisible total from a list they can no longer see.
   */
  const minutesPerMonth = useMemo(
    () =>
      chosen.reduce((total, job) => {
        const pick = picks[job.id];
        const often = COST_FREQUENCIES.find((f) => f.id === pick.often)?.perMonth ?? 0;
        const long = COST_DURATIONS.find((d) => d.id === pick.long)?.minutes ?? 0;
        return total + often * long;
      }, 0),
    [chosen, picks],
  );

  const nf = useMemo(
    () => new Intl.NumberFormat(locale === "fr" ? "fr-FR" : "en-GB"),
    [locale],
  );

  /** `9h 20m`, or `20m` when there is no hour to show. */
  const asDuration = (minutes: number) => {
    const whole = Math.round(minutes);
    const h = Math.floor(whole / 60);
    const m = whole % 60;
    if (!h) return `${m}m`;
    return m ? `${nf.format(h)}h ${m}m` : `${nf.format(h)}h`;
  };

  const hoursPerYear = (minutesPerMonth * 12) / 60;
  const workingDays = Math.round(hoursPerYear / HOURS_PER_WORKING_DAY);
  const hasNumbers = hydrated && minutesPerMonth > 0;

  return (
    <div className="flex flex-col gap-6 rounded-md border border-l-[3px] border-border border-l-primary bg-card px-6 py-5 shadow-sm">
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
        One list, not two blocks.

        The first version had a bag of pills at the top and a separate stack of
        cards underneath, which meant the job title was printed twice and the
        reader had to work out which card belonged to which pill. Ticking a job
        now opens its two questions directly underneath it, so cause and effect
        sit together and nothing is repeated.
      */}
      <div className="flex flex-col gap-3">
        <div className="flex flex-col gap-1">
          <span className="text-[0.9375rem] font-semibold">{UI.costPickJobs}</span>
          <span className="text-[0.8125rem] text-muted-foreground">
            {UI.costPickHint}
          </span>
        </div>

        <ul className="flex list-none flex-col gap-2 p-0">
          {jobs.map((job) => {
            const pick = picks[job.id];
            const on = Boolean(pick);
            return (
              <li
                key={job.id}
                className={
                  on
                    ? "overflow-hidden rounded-md border border-primary bg-accent/50"
                    : "overflow-hidden rounded-md border border-border bg-background transition-colors hover:border-primary/60"
                }
              >
                <button
                  type="button"
                  aria-pressed={on}
                  onClick={() => toggleJob(job.id)}
                  className="flex w-full items-center gap-3 px-4 py-3 text-left"
                >
                  {/*
                    A tick box, not a coloured pill. Eight pills of eight
                    different widths read as a pinball table, and a filled pill
                    is the same signal this tool uses for "this is the value I
                    chose" two lines below. A box that is either ticked or not
                    says multi-select on sight and keeps the loud blue for the
                    one place it means something.
                  */}
                  <span
                    aria-hidden
                    className={
                      on
                        ? "grid size-5 shrink-0 place-items-center rounded-[4px] border border-primary bg-primary text-primary-foreground"
                        : "size-5 shrink-0 rounded-[4px] border border-input bg-card"
                    }
                  >
                    {on ? <Check className="size-3.5" /> : null}
                  </span>
                  <span
                    className={
                      on
                        ? "text-[0.9375rem] font-semibold"
                        : "text-[0.9375rem] font-medium text-foreground"
                    }
                  >
                    {job.label}
                  </span>
                </button>

                {on ? (
                  <div className="flex flex-col gap-3 border-t border-primary/25 px-4 pb-4 pt-3">
                    <OptionGrid
                      label={UI.costHowOften}
                      options={COST_FREQUENCIES.map((f) => ({
                        id: f.id,
                        label: UI.costFrequency[f.id],
                      }))}
                      value={pick.often}
                      onPick={(id) => setOften(job.id, id)}
                    />
                    <OptionGrid
                      label={UI.costHowLong}
                      options={COST_DURATIONS.map((d) => ({
                        id: d.id,
                        label: UI.costDuration[d.id],
                      }))}
                      value={pick.long}
                      onPick={(id) => setLong(job.id, id)}
                    />
                  </div>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>

      {/*
        3. The answer, in the dark panel the rest of the AI Makers site uses for
        a result. Ends in the same booking button as every other calculator, so
        a reader who wants help does not navigate away from their own numbers.
      */}
      <div className="flex flex-col gap-4 rounded-md bg-foreground px-6 py-5 text-background">
        <span className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] opacity-60">
          {UI.costResultTag}
        </span>

        {!hasNumbers ? (
          <p className="text-[0.9375rem] opacity-70">{UI.costEmpty}</p>
        ) : (
          <>
            <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
              <span className="font-mono text-[1.75rem] font-bold leading-none tabular-nums text-blue-400">
                {asDuration(minutesPerMonth)}
                <span className="ml-2 font-sans text-[0.8125rem] font-semibold opacity-70">
                  {UI.costAMonth}
                </span>
              </span>
              <span className="font-mono text-[2.25rem] font-bold leading-none tabular-nums text-blue-400">
                {nf.format(Math.round(hoursPerYear))}h
                <span className="ml-2 font-sans text-[0.8125rem] font-semibold opacity-70">
                  {UI.costAYear}
                </span>
              </span>
            </div>

            <p className="text-[1.0625rem] font-bold">
              {UI.costWorkingDays(nf.format(workingDays))}
            </p>
            <p className="text-[0.8125rem] leading-relaxed opacity-60">
              {UI.costWorkingDayNote}
            </p>

            <div className="mt-1 flex flex-col gap-2 border-t border-white/15 pt-4">
              <p className="text-[0.9375rem] font-semibold">
                {UI.costCtaLine(nf.format(workingDays))}
              </p>
              <BookingCtaButton
                locale={locale}
                className="inline-flex w-fit items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:opacity-90"
              >
                {UI.costCtaButton}
                <ArrowRight className="size-4" aria-hidden />
              </BookingCtaButton>
              <p className="text-[0.8125rem] opacity-60">{UI.costCtaNote}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
