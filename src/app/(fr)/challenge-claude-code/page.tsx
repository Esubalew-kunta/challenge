/**
 * L'index du challenge en français : les trente jours, en trois phases.
 *
 * Même structure que la version anglaise, et volontairement le même composant
 * pour tout ce qui s'affiche. La langue voyage en prop, pas en second jeu de
 * composants, sinon un bouton modifié d'un côté est oublié de l'autre.
 */

import Link from "next/link";
import { ArrowRight, FileText, Monitor } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { DayTick } from "@/components/challenge/day-status";
import { ProfileModal } from "@/components/challenge/profile-modal";
import { ProfileQuestions } from "@/components/challenge/profile-questions";
import { ScoreCard } from "@/components/challenge/score-card";
import { siteConfig } from "@/lib/site-config";
import { UI_FR, PHASES_FR } from "@/lib/challenge/config.fr";
import { BASE_FR, DAYS_FR, dayHrefFr } from "@/lib/challenge/index.fr";
import { daysInPhaseIn, totalDaysFor } from "@/lib/challenge/nav";
import type { Day } from "@/lib/challenge/types";

const LOCALE = "fr" as const;

export const metadata = constructMetadata({
  title: "Claude Code en 30 jours",
  description:
    "Un cours gratuit de trente jours. Une page courte par jour. À la fin, Claude Code fait du vrai travail sur vos vrais fichiers, sans que vous le surveilliez. Par AI Makers.",
  path: BASE_FR,
});

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: UI_FR.challengeName,
      item: `${siteConfig.url}${BASE_FR}`,
    },
  ],
};

const course = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: UI_FR.challengeName,
  description: UI_FR.tagline,
  inLanguage: "fr",
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

export default function ChallengeIndexPageFr() {
  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={course} />

      {/*
        Les deux questions, en popup, à la première visite seulement. Elle
        n'affiche rien une fois répondues ou fermées, et rien du tout dans le
        HTML statique.
      */}
      <ProfileModal locale={LOCALE} />

      <div className="mx-auto w-full max-w-6xl px-5 pb-24 pt-16 sm:pt-24">
        <ScrollReveal className="flex flex-col items-center border-b border-border pb-12 pt-16 text-center">
          <span className="mb-5 inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-primary-dark">
            Gratuit · Sans compte
          </span>

          <h1 className="max-w-[24ch] text-[clamp(2.5rem,6vw,3.75rem)] font-bold leading-[1.12] tracking-tight text-balance">
            {UI_FR.challengeName}
          </h1>

          <p className="mt-6 max-w-[56ch] text-lg leading-relaxed text-muted-foreground text-pretty">
            {UI_FR.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
            <Stat value={String(totalDaysFor())} label="Jours" />
            <Stat value="3" label="Phases" />
            <Stat value="10" label="Fiches" />
          </div>

          <Link
            href={dayHrefFr(DAYS_FR[0])}
            className="mt-9 inline-flex items-center gap-2 rounded-sm border border-primary bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-colors hover:border-primary-dark hover:bg-primary-dark"
          >
            Commencer par le jour 1
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </ScrollReveal>

        <ScrollReveal className="mx-auto mt-12 flex w-full max-w-[52rem] flex-col gap-4">
          <ProfileQuestions locale={LOCALE} />
          <ScoreCard locale={LOCALE} />
        </ScrollReveal>

        <div className="mt-14 flex flex-col gap-14">
          {PHASES_FR.map((phase) => (
            <ScrollReveal key={phase.id}>
              <div className="mb-6 flex flex-wrap items-baseline gap-3">
                <span className="rounded-full bg-accent px-3 py-1 font-mono text-[0.6875rem] font-medium tracking-wider text-primary-dark">
                  {phase.label}
                </span>
                <h2 className="text-[1.75rem] font-bold tracking-tight">
                  {phase.title}
                </h2>
                <span className="ml-auto text-[0.8125rem] font-semibold text-muted-foreground">
                  Jours {phase.range[0]} à {phase.range[1]}
                </span>
                <p className="basis-full pt-1 text-[0.9375rem] text-muted-foreground">
                  {phase.promise}
                </p>
              </div>

              <ul className="flex flex-col gap-3">
                {daysInPhaseIn(LOCALE, phase.id).map((day) => (
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

/* ------------------------------------------------------------------ cartes */

function DayCard({ day }: { day: Day }) {
  return (
    <Link
      href={dayHrefFr(day)}
      className="group flex flex-col gap-3 rounded-lg border border-border bg-card px-6 py-5 transition-colors hover:border-primary"
    >
      <div className="flex items-center gap-3">
        <span className="grid size-8 flex-none place-items-center rounded-sm bg-accent font-mono text-[0.8125rem] font-medium tabular-nums text-primary-dark">
          {String(day.day).padStart(2, "0")}
        </span>
        <span className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
          Jour {day.day}
        </span>

        <span className="ml-auto flex items-center gap-2">
          <DayTick day={day.day} locale={LOCALE} />
          {day.app === "needs-app" ? (
            <span
              title={UI_FR.needsAppHelp}
              className="inline-flex items-center gap-1.5 rounded-[5px] border border-[#AFC6DA] bg-[#E1EBF3] px-2 py-1 text-[0.6875rem] font-bold text-[#2C5578]"
            >
              <Monitor className="size-3" aria-hidden />
              App
            </span>
          ) : null}
          {day.sheet ? (
            <span className="inline-flex items-center gap-1.5 rounded-[5px] border border-[#DEC57E] bg-[#FBF0D4] px-2 py-1 text-[0.6875rem] font-bold text-[#8A6A12]">
              <FileText className="size-3" aria-hidden />
              Fiche
            </span>
          ) : null}
          <span className="font-mono text-[0.8125rem] tabular-nums text-muted-foreground">
            {UI_FR.minutes(day.minutes)}
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

