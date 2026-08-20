/**
 * One day of the challenge. All thirty render from this file.
 *
 * Static at build time: there is no database, no account and no server-side
 * progress, so every page is a plain file. Cost per visitor is zero and stays
 * flat however much traffic arrives.
 */

import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { siteConfig } from "@/lib/site-config";
import { DayView } from "@/components/challenge/day-view";
import {
  BASE,
  DAYS,
  TOTAL_DAYS,
  UI,
  dayHref,
  getDayBySlug,
  neighbours,
} from "@/lib/challenge";

type Params = { slug: string };

export function generateStaticParams(): Params[] {
  return DAYS.map((d) => ({ slug: d.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const day = getDayBySlug(slug);
  if (!day)
    return constructMetadata({
      title: "Not found",
      description: "This day does not exist.",
      path: BASE,
    });

  // The plain-English title carries the page; the real term goes in the title
  // tag and the URL, because that is what people type into a search box.
  const title = day.term
    ? `${day.title} (${day.term}) — Day ${day.day} of ${TOTAL_DAYS}`
    : `${day.title} — Day ${day.day} of ${TOTAL_DAYS}`;

  return constructMetadata({
    title,
    description: day.promise,
    path: `${BASE}/${day.slug}`,
  });
}

export default async function DayPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const day = getDayBySlug(slug);
  if (!day) notFound();

  const { prev, next } = neighbours(day);

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: day.term ? `${day.title} (${day.term})` : day.title,
    description: day.promise,
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
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: UI.challengeName,
        item: `${siteConfig.url}${BASE}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Day ${day.day}`,
        item: `${siteConfig.url}${BASE}/${day.slug}`,
      },
    ],
  };

  return (
    <>
      <JsonLd data={howTo} />
      <JsonLd data={breadcrumb} />

      {/*
        The site header is fixed and floats over the page, so the day bar is
        pushed clear of it and sticks just underneath. Sitting at top-0 put it
        behind the header, where the reader could not see where they were.
      */}
      <div className="pt-16 sm:pt-24">
      <div className="sticky top-14 z-30 border-b border-border bg-background/90 backdrop-blur-md sm:top-[5.25rem]">
        <div className="mx-auto flex w-full max-w-6xl items-center gap-3 px-4 py-2.5 sm:gap-5 sm:px-5 sm:py-3">
          {/*
            On a phone the words "All days" cost more room than they earn, so
            only the icon shows there. The label comes back as soon as there is
            width for it. The link itself is the same, and keeps its accessible
            name either way.
          */}
          <Link
            href={BASE}
            aria-label={UI.allDays}
            className="inline-flex flex-none items-center gap-1.5 rounded-sm text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" aria-hidden />
            <span className="hidden md:inline">{UI.allDays}</span>
          </Link>

          <span className="h-6 w-px flex-none bg-border" aria-hidden />

          <div className="flex min-w-0 flex-col">
            <span className="text-[0.625rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
              Day {day.day} of {TOTAL_DAYS}
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

          {/*
            Back and forward stay on a phone, because moving between days is the
            main thing a reader does here. They shrink to square icon buttons
            rather than disappearing, which is what they used to do.
          */}
          <div className="ml-auto flex flex-none items-center gap-1.5">
            {prev ? (
              <Link
                href={dayHref(prev)}
                aria-label={`Day ${prev.day}, ${prev.title}`}
                className="inline-flex size-9 items-center justify-center gap-1 rounded-sm border border-border bg-card text-[0.8125rem] font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary sm:size-auto sm:px-3 sm:py-1.5"
              >
                <ChevronLeft className="size-4 sm:size-3.5" aria-hidden />
                <span className="hidden sm:inline">Day {prev.day}</span>
              </Link>
            ) : null}
            {next ? (
              <Link
                href={dayHref(next)}
                aria-label={`Day ${next.day}, ${next.title}`}
                className="inline-flex size-9 items-center justify-center gap-1 rounded-sm border border-primary bg-card text-[0.8125rem] font-semibold text-primary-dark transition-colors hover:bg-accent sm:size-auto sm:px-3 sm:py-1.5"
              >
                <span className="hidden sm:inline">Day {next.day}</span>
                <ChevronRight className="size-4 sm:size-3.5" aria-hidden />
              </Link>
            ) : null}
          </div>
        </div>
      </div>

        <DayView day={day} />
      </div>
    </>
  );
}
