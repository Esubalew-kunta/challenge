/**
 * Un jour du challenge, en français. Les trente sortent de ce fichier.
 *
 * Statique à la construction, comme la version anglaise : pas de base de
 * données, pas de compte, pas de progression côté serveur. Chaque page est un
 * simple fichier et le coût par visiteur reste à zéro quel que soit le trafic.
 */

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/lib/site-config";
import { DayView } from "@/components/challenge/day-view";
import { UI_FR } from "@/lib/challenge/config.fr";
import {
  BASE_FR,
  DAYS_FR,
  dayHrefFr,
  getDayBySlugFr,
  neighboursFr,
} from "@/lib/challenge/index.fr";
import { totalDaysFor } from "@/lib/challenge/nav";

const LOCALE = "fr" as const;

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return DAYS_FR.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const day = getDayBySlugFr(slug);
  if (!day)
    return constructMetadata({
      title: "Introuvable",
      description: "Ce jour n'existe pas.",
      path: BASE_FR,
    });

  // Le titre en français courant porte la page ; le vrai terme technique va
  // dans la balise titre et dans l'URL, parce que c'est ce que les gens tapent
  // dans une barre de recherche.
  const title = day.term
    ? `${day.title} (${day.term}), jour ${day.day} sur ${totalDaysFor()}`
    : `${day.title}, jour ${day.day} sur ${totalDaysFor()}`;

  return constructMetadata({
    title,
    description: day.promise,
    path: `${BASE_FR}/${day.slug}`,
  });
}

export default async function DayPageFr({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const day = getDayBySlugFr(slug);
  if (!day) notFound();

  const { prev, next } = neighboursFr(day);

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: day.term ? `${day.title} (${day.term})` : day.title,
    description: day.promise,
    inLanguage: "fr",
    totalTime: `PT${day.minutes}M`,
    step: day.steps.map((s, i) => ({
      "@type": "HowToStep",
      position: i + 1,
      name: s.title,
      text: s.body?.join(" ") ?? s.title,
    })),
  };

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
      {
        "@type": "ListItem",
        position: 3,
        name: UI_FR.dayLabel(day.day),
        item: `${siteConfig.url}${BASE_FR}/${day.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={howTo} />
      <JsonLd data={breadcrumb} />

      {/*
        L'en-tête du site est fixe et flotte au-dessus de la page, donc la barre
        du jour est décalée pour passer dessous et y reste collée. À top-0 elle
        se retrouvait derrière l'en-tête, là où le lecteur ne voyait plus où il
        en était.
      */}
      <div className="pt-16 sm:pt-24">
        <div className="sticky top-14 z-30 border-b border-border bg-background/90 backdrop-blur-md sm:top-[5.25rem]">
          <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-2.5 sm:gap-5 sm:px-5 sm:py-3">
            <Link
              href={BASE_FR}
              aria-label={UI_FR.allDays}
              className="inline-flex flex-none items-center gap-1.5 rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" aria-hidden />
              <span className="hidden md:inline">{UI_FR.allDays}</span>
            </Link>

            <span className="h-6 w-px flex-none bg-border" aria-hidden />

            <div className="flex min-w-0 flex-col">
              <span className="text-[0.625rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                {UI_FR.dayOf(day.day)}
              </span>
              <span className="truncate text-sm font-bold tracking-tight sm:text-[0.9375rem]">
                {day.title}
                {day.term ? (
                  <span className="font-medium text-muted-foreground">
                    {" "}
                    ({day.term})
                  </span>
                ) : null}
              </span>
            </div>

            <div className="ml-auto flex flex-none items-center gap-1.5">
              {prev ? (
                <Link
                  href={dayHrefFr(prev)}
                  aria-label={`${UI_FR.dayLabel(prev.day)}, ${prev.title}`}
                  className="inline-flex size-9 items-center justify-center gap-1 rounded-sm border border-border bg-card text-[0.8125rem] font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary sm:size-auto sm:px-3 sm:py-1.5"
                >
                  <ChevronLeft className="size-4 sm:size-3.5" aria-hidden />
                  <span className="hidden sm:inline">
                    {UI_FR.dayLabel(prev.day)}
                  </span>
                </Link>
              ) : null}
              {next ? (
                <Link
                  href={dayHrefFr(next)}
                  aria-label={`${UI_FR.dayLabel(next.day)}, ${next.title}`}
                  className="inline-flex size-9 items-center justify-center gap-1 rounded-sm border border-primary bg-card text-[0.8125rem] font-semibold text-primary-dark transition-colors hover:bg-accent sm:size-auto sm:px-3 sm:py-1.5"
                >
                  <span className="hidden sm:inline">
                    {UI_FR.dayLabel(next.day)}
                  </span>
                  <ChevronRight className="size-4 sm:size-3.5" aria-hidden />
                </Link>
              ) : null}
            </div>
          </div>
        </div>

        <DayView day={day} locale={LOCALE} />
      </div>
    </>
  );
}
