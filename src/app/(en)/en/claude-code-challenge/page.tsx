/**
 * The challenge index: all thirty days, in three phases.
 *
 * Every lesson is public and readable without giving anything. That open
 * access is what brings search traffic. The email buys a takeaway sheet,
 * never a lesson.
 */

import Link from "next/link";
import { ArrowRight, FileText, Monitor } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { DayTick } from "@/components/challenge/day-status";
import { ProfileQuestions } from "@/components/challenge/profile-questions";
import { ScoreCard } from "@/components/challenge/score-card";
import { siteConfig } from "@/lib/site-config";
import {
  BASE,
  DAYS,
  PHASES,
  TOTAL_DAYS,
  UI,
  dayHref,
  daysInPhase,
} from "@/lib/challenge";
import type { Day } from "@/lib/challenge/types";

export const metadata = constructMetadata({
  title: "30 Days of Claude Code",
  description:
    "A free thirty day course. One short page a day. By the end you have Claude Code doing real work on your real files, without you watching. By AI Makers.",
  path: BASE,
});

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: UI.challengeName,
      item: `${siteConfig.url}${BASE}`,
    },
  ],
};

const course = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: UI.challengeName,
  description: UI.tagline,
  provider: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
  isAccessibleForFree: true,
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "PT6H",
  },
};

export default function ChallengeIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={course} />

      <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-16 sm:pt-24">
        {/* Hero, centred */}
        <ScrollReveal className="flex flex-col items-center border-b border-border pb-12 pt-16 text-center">
          <span className="mb-5 inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-primary-dark">
            Free · No account needed
          </span>

          <h1 className="max-w-[16ch] text-[clamp(2.4rem,6vw,3.75rem)] font-bold leading-[1.05] tracking-tight text-balance">
            {UI.challengeName}
          </h1>

          <p className="mt-5 max-w-[52ch] text-lg text-muted-foreground">
            {UI.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <Stat value={String(TOTAL_DAYS)} label="Days" />
            <Stat value="3" label="Phases" />
            <Stat value="10" label="Cheat sheets" />
          </div>

          <Link
            href={dayHref(DAYS[0])}
            className="mt-9 inline-flex items-center gap-2 rounded-sm border border-primary bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:border-primary-dark hover:bg-primary-dark"
          >
            Start with Day 1
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </ScrollReveal>

        {/*
          Two questions, then the reader's own score.

          The questions come first because they are for somebody arriving, and
          the score is for somebody returning. A new reader answers two taps
          and gets a day number; a returning reader has already answered, so
          that block collapses to one line and the score is what they see.

          Neither blocks anything. Start with Day 1 is above both of them.
        */}
        <ScrollReveal className="mx-auto mt-12 flex w-full max-w-[52rem] flex-col gap-4">
          <ProfileQuestions />
          <ScoreCard />
        </ScrollReveal>

        {/* Phases */}
        <div className="mt-14 flex flex-col gap-14">
          {PHASES.map((phase) => (
            <ScrollReveal key={phase.id}>
              <div className="mb-6 flex flex-wrap items-baseline gap-3">
                <span className="rounded-full bg-accent px-3 py-1 font-mono text-[0.6875rem] font-medium tracking-wider text-primary-dark">
                  {phase.label}
                </span>
                <h2 className="text-[1.75rem] font-bold tracking-tight">
                  {phase.title}
                </h2>
                <span className="ml-auto text-[0.8125rem] font-semibold text-muted-foreground">
                  Days {phase.range[0]} to {phase.range[1]}
                </span>
                <p className="basis-full pt-1 text-[0.9375rem] text-muted-foreground">
                  {phase.promise}
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {daysInPhase(phase.id).map((day) => (
                  <li key={day.day}>
                    <DayCard day={day} />
                  </li>
                ))}
              </ul>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ cards */

function DayCard({ day }: { day: Day }) {
  return (
    <Link
      href={dayHref(day)}
      className="group flex flex-col gap-3 rounded-lg border border-border bg-card px-6 py-5 transition-colors hover:border-primary"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-8 flex-none place-items-center rounded-sm bg-accent font-mono text-[0.8125rem] font-medium tabular-nums text-primary-dark">
          {String(day.day).padStart(2, "0")}
        </span>
        <span className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          Day {day.day}
        </span>

        <span className="ml-auto flex items-center gap-2">
          <DayTick day={day.day} />
          {day.app === "needs-app" ? (
            <span
              title={UI.needsAppHelp}
              className="inline-flex items-center gap-1.5 rounded-[5px] border border-[#AFC6DA] bg-[#E1EBF3] px-2 py-1 text-[0.6875rem] font-bold text-[#2C5578]"
            >
              <Monitor className="size-3" aria-hidden />
              App
            </span>
          ) : null}
          {day.sheet ? (
            <span className="inline-flex items-center gap-1.5 rounded-[5px] border border-[#DEC57E] bg-[#FBF0D4] px-2 py-1 text-[0.6875rem] font-bold text-[#8A6A12]">
              <FileText className="size-3" aria-hidden />
              Sheet
            </span>
          ) : null}
          <span className="font-mono text-[0.8125rem] tabular-nums text-muted-foreground">
            {day.minutes} min
          </span>
          <ArrowRight
            className="size-4 text-muted-foreground transition-colors group-hover:text-primary"
            aria-hidden
          />
        </span>
      </div>

      <div className="flex flex-col gap-1.5">
        <h3 className="text-lg font-bold tracking-tight">
          {day.title}
          {day.term ? (
            <span className="font-medium text-muted-foreground"> ({day.term})</span>
          ) : null}
        </h3>
        <p className="text-[0.9375rem] text-muted-foreground">{day.promise}</p>
      </div>
    </Link>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
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
