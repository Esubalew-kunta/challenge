/**
 * One layout renders all thirty days.
 *
 * Every day is a data record in `src/lib/challenge/`, never a hand-built page.
 * That is what stops two pages disagreeing with each other on a shared fact,
 * which is the single biggest content problem on the site we studied.
 */

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  LayoutGrid,
  Info,
  Timer,
  Trophy,
} from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { baseFor, uiFor } from "@/lib/challenge/locale";
import { dayHrefIn, neighboursIn, phaseIn, totalDaysFor } from "@/lib/challenge/nav";
import type { ChallengeLocale } from "@/lib/challenge/types";
import type { Day, Step, TeachSection } from "@/lib/challenge/types";
import { Celebrate } from "./celebrate";
import { CodeBlock } from "./code-block";
import { CostTool } from "./cost-tool";
import { DayStatus } from "./day-status";
import { PlatformTabs } from "./platform-tabs";
import { PathGuidance } from "./path-guidance";
import { Quiz } from "./quiz";
import { RichText, Paragraphs } from "./rich-text";
import { SheetOffer } from "./sheet-offer";
import { SuccessGate } from "./success-gate";

/* ------------------------------------------------------------------ atoms */

function BlockLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-center gap-3 text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
      {children}
      <span className="h-px flex-1 bg-border" aria-hidden />
    </div>
  );
}

function DataTable({ head, rows }: { head: string[]; rows: string[][] }) {
  return (
    <div className="overflow-x-auto rounded-md border border-border bg-card">
      <table className="w-full border-collapse text-[0.9375rem]">
        <thead>
          <tr>
            {head.map((h, i) => (
              <th
                key={i}
                className="whitespace-nowrap border-b border-border bg-secondary px-4 py-2.5 text-left text-[0.6875rem] font-bold uppercase tracking-[0.1em] text-muted-foreground"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td
                  key={j}
                  className="border-b border-border px-4 py-2.5 align-top last:border-b-0 [tr:last-child_&]:border-b-0"
                >
                  <RichText text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Callout({ tag, body }: { tag: string; body: string[] }) {
  return (
    <div className="flex flex-col gap-2 rounded-md border border-l-[3px] border-border border-l-accent-warm bg-card px-5 py-4 shadow-sm">
      <span className="text-[0.6875rem] font-bold uppercase tracking-[0.11em] text-accent-warm">
        {tag}
      </span>
      <Paragraphs items={body} className="text-[0.9375rem] text-foreground" />
    </div>
  );
}

/* ------------------------------------------------------------------ parts */

function Section({ section, index }: { section: TeachSection; index: number }) {
  return (
    <div className="grid grid-cols-[2rem_1fr] items-start gap-4">
      <span className="mt-0.5 grid size-8 place-items-center rounded-sm bg-accent font-mono text-[0.8125rem] font-medium text-primary-dark">
        {index + 1}
      </span>
      <div className="flex min-w-0 flex-col gap-3">
        <h3 className="text-lg font-semibold tracking-tight">{section.heading}</h3>
        <div className="flex flex-col gap-2">
          <Paragraphs items={section.body} />
        </div>
        {section.table ? <DataTable {...section.table} /> : null}
        {section.callout ? <Callout {...section.callout} /> : null}
      </div>
    </div>
  );
}

function StepItem({ step, index }: { step: Step; index: number }) {
  return (
    <div className="grid grid-cols-[2rem_1fr] items-start gap-4">
      <span className="mt-0.5 grid size-8 place-items-center rounded-full border border-border bg-card font-mono text-[0.8125rem] text-muted-foreground">
        {index + 1}
      </span>
      <div className="flex min-w-0 flex-col gap-3">
        <h3 className="text-[1.0625rem] font-semibold tracking-tight">{step.title}</h3>
        {step.body ? (
          <div className="flex flex-col gap-2">
            <Paragraphs items={step.body} />
          </div>
        ) : null}
        {step.code ? <CodeBlock {...step.code} /> : null}
        {step.panels ? <PlatformTabs panels={step.panels} /> : null}
        {step.troubleshoot ? (
          <div className="flex flex-col gap-1.5">
            {step.troubleshoot.map((t, i) => (
              <details
                key={i}
                className="overflow-hidden rounded-sm border border-border bg-card"
              >
                <summary className="cursor-pointer list-none px-4 py-2.5 text-[0.9375rem] font-semibold marker:hidden">
                  <span className="mr-2 font-mono font-bold text-primary">+</span>
                  {t.summary}
                </summary>
                <div className="flex flex-col gap-2 px-4 pb-4 pl-9 text-[0.9375rem] text-muted-foreground">
                  <Paragraphs items={t.body} />
                  {t.code ? <CodeBlock {...t.code} /> : null}
                </div>
              </details>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------- page */

export function DayView({
  day,
  locale = "en",
}: {
  day: Day;
  locale?: ChallengeLocale;
}) {
  const UI = uiFor(locale);
  const BASE = baseFor(locale);
  const phase = phaseIn(locale, day.phase);
  const { prev, next } = neighboursIn(locale, day);

  return (
    <article className="mx-auto w-full max-w-[52rem] px-5 pb-20">
      {/*
        The level and phase rewards. Mounted here rather than on the index
        because this is where a milestone is actually crossed: it happens on
        the click that answers the last question of a day.
      */}
      <Celebrate locale={locale} />

      {/*
        Hero.

        Centred, and no longer squeezed into a narrow column. It used to be
        left aligned inside `max-w-[20ch]`, which forced a five word title onto
        three lines while two thirds of the page sat empty beside it. Owner's
        call: centre it, let it use the width it has, and give it room to
        breathe. The lesson itself stays left aligned, because centred body
        text is genuinely harder to read line after line.
      */}
      <ScrollReveal className="flex flex-col items-center border-b border-border pb-10 pt-14 text-center">
        <span className="mb-5 inline-flex items-center gap-2 rounded-full bg-accent px-3.5 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-primary-dark">
          {phase.label} · {phase.title}
        </span>
        <h1 className="max-w-[30ch] text-[clamp(2.35rem,5.2vw,3.25rem)] font-bold leading-[1.15] tracking-tight text-balance">
          {day.title}
          {day.term ? (
            <span className="font-medium text-muted-foreground"> ({day.term})</span>
          ) : null}
        </h1>
        <p className="mt-6 max-w-[56ch] text-[1.1875rem] leading-relaxed text-muted-foreground text-pretty">
          {day.promise}
        </p>

        <div className="mt-7 flex flex-wrap justify-center gap-2">
          <span className="inline-flex items-center gap-2 rounded-sm border border-border bg-card px-3 py-2 text-[0.8125rem] font-semibold text-muted-foreground">
            <Timer className="size-3.5" aria-hidden />
            <b className="font-mono font-bold text-foreground">
              {UI.minutes(day.minutes)}
            </b>
          </span>

          {day.app === "needs-app" ? (
            <span
              title={UI.needsAppHelp}
              className="inline-flex items-center gap-2 rounded-sm border border-[#AFC6DA] bg-[#E1EBF3] px-3 py-2 text-[0.8125rem] font-semibold text-[#2C5578]"
            >
              <Info className="size-3.5" aria-hidden />
              {UI.needsApp}
            </span>
          ) : null}

          <span className="inline-flex items-center gap-2 rounded-sm bg-success/10 px-3 py-2 text-[0.8125rem] font-semibold text-success">
            <Trophy className="size-3.5" aria-hidden />
            {UI.outcomePrefix} {day.outcome}
          </span>
        </div>
      </ScrollReveal>

      <PathGuidance day={day} locale={locale} />

      {/* Why */}
      <ScrollReveal className="mt-10">
        <BlockLabel>{UI.whyLabel}</BlockLabel>
        <div className="flex flex-col gap-3 rounded-md border border-l-[3px] border-border border-l-primary bg-card px-6 py-5 shadow-sm">
          <Paragraphs items={day.why} className="text-foreground" />
        </div>
      </ScrollReveal>

      {/* Sections */}
      <ScrollReveal className="mt-12">
        <BlockLabel>{UI.sectionsLabel}</BlockLabel>
        <div className="flex flex-col gap-8">
          {day.sections.map((s, i) => (
            <Section key={i} section={s} index={i} />
          ))}
        </div>
      </ScrollReveal>

      {/*
        The day's tool, if it has one. Placed after the teaching and before
        "Do this now", because it is the thing the reader works out for
        themselves once they understand the idea and before they act on it.

        A `switch` on a name rather than a component stored in the data: the day
        records are plain data, read by the sitemap and by scripts that have no
        business importing React.
      */}
      {day.tool === "cost" ? (
        <ScrollReveal className="mt-12">
          <CostTool locale={locale} />
        </ScrollReveal>
      ) : null}

      {/* Steps */}
      <ScrollReveal className="mt-12">
        <BlockLabel>{UI.stepsLabel}</BlockLabel>
        <div className="flex flex-col gap-7">
          {day.steps.map((s, i) => (
            <StepItem key={i} step={s} index={i} />
          ))}
        </div>
      </ScrollReveal>

      {/* Win */}
      <ScrollReveal className="mt-12">
        <BlockLabel>{UI.winLabel}</BlockLabel>
        <div className="grid overflow-hidden rounded-md border border-border bg-card sm:grid-cols-2">
          <div className="flex flex-col gap-2 px-5 py-5">
            <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-destructive">
              {day.win.beforeLabel}
            </span>
            <p className="font-mono text-[0.8125rem] leading-[1.8] text-muted-foreground">
              {day.win.before.map((line, i) => (
                <span key={i} className="block">
                  <RichText text={line} />
                </span>
              ))}
            </p>
          </div>
          <div className="flex flex-col gap-2 border-t border-border bg-success/10 px-5 py-5 sm:border-l sm:border-t-0">
            <span className="text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-success">
              {day.win.afterLabel}
            </span>
            <p className="font-mono text-[0.8125rem] leading-[1.8] text-muted-foreground">
              {day.win.after.map((line, i) => (
                <span key={i} className="block">
                  <RichText text={line} />
                </span>
              ))}
            </p>
          </div>
        </div>
      </ScrollReveal>

      {/*
        Quiz, and what it earned.

        Answering every question is what completes the day. There is no "I did
        this" button, because thirty of those take two minutes to click and the
        score would mean nothing. Nothing is gated either: a wrong answer still
        counts the question and still completes the day.
      */}
      <ScrollReveal className="mt-12">
        <BlockLabel>{UI.quizLabel}</BlockLabel>
        <Quiz questions={day.quiz} day={day.day} locale={locale} />
        <div className="mt-4">
          <DayStatus day={day.day} locale={locale} />
        </div>
      </ScrollReveal>

      {/* Gate, or the sheet on its own */}
      {day.gate ? (
        <ScrollReveal className="mt-12">
          <BlockLabel>{UI.beforeNextDay(day.day + 1)}</BlockLabel>
          <SuccessGate gate={day.gate} sheet={day.sheet} day={day.day} locale={locale} />
        </ScrollReveal>
      ) : day.sheet ? (
        <ScrollReveal className="mt-12">
          <SheetOffer sheet={day.sheet} day={day.day} locale={locale} />
        </ScrollReveal>
      ) : null}

      {/*
        End of day navigation.

        Three ways out, in the order a reader wants them: back if they need the
        previous day again, the full list if they are choosing, and forward.
        The forward link names what they get, never just a number, because
        "Next: Day 9" gives nobody a reason to click.
      */}
      <nav className="mt-12 border-t border-border pt-8">
        <div className="grid gap-2.5 sm:grid-cols-2">
          {prev ? (
            <Link
              href={dayHrefIn(locale, prev)}
              className="group flex flex-col gap-1 rounded-md border border-border bg-card px-4 py-3.5 transition-colors hover:border-primary"
            >
              <span className="inline-flex items-center gap-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-muted-foreground">
                <ArrowLeft className="size-3 transition-transform group-hover:-translate-x-0.5" aria-hidden />
                {UI.dayLabel(prev.day)}
              </span>
              <span className="text-[0.9375rem] font-semibold">{prev.title}</span>
            </Link>
          ) : (
            <span aria-hidden className="hidden sm:block" />
          )}

          {next ? (
            <Link
              href={dayHrefIn(locale, next)}
              className="group flex flex-col gap-1 rounded-md border border-primary bg-card px-4 py-3.5 text-right transition-colors hover:bg-accent sm:col-start-2"
            >
              <span className="inline-flex items-center justify-end gap-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-primary-dark">
                {UI.dayLabel(next.day)}
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
              <span className="text-[0.9375rem] font-semibold">{day.nextTeaser}</span>
            </Link>
          ) : (
            <Link
              href={BASE}
              className="group flex flex-col gap-1 rounded-md border border-primary bg-card px-4 py-3.5 text-right transition-colors hover:bg-accent sm:col-start-2"
            >
              <span className="inline-flex items-center justify-end gap-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-primary-dark">
                {UI.thatIsAllThirty}
                <ArrowRight className="size-3 transition-transform group-hover:translate-x-0.5" aria-hidden />
              </span>
              <span className="text-[0.9375rem] font-semibold">{day.nextTeaser}</span>
            </Link>
          )}
        </div>

        <div className="mt-4 flex justify-center">
          <Link
            href={BASE}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-[0.8125rem] font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <LayoutGrid className="size-3.5" aria-hidden />
            {UI.allDaysCount(totalDaysFor())}
          </Link>
        </div>
      </nav>
    </article>
  );
}

