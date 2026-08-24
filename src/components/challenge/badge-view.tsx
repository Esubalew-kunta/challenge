/**
 * The badge page body. One component, both languages, no client state.
 *
 * A plain server component on purpose. Everything on this page is a link:
 * LinkedIn's share box is a link, saving the picture is a link to a route that
 * answers with a `Content-Disposition` header, and going back to the course is
 * a link. Nothing here needs JavaScript, so nothing here ships any.
 *
 * The honest line at the bottom is not decoration and should not be trimmed as
 * clutter. The badge carries the AI Makers name, and the score behind it lives
 * in the reader's own browser where they can edit it. Saying plainly that this
 * records a course finished rather than an exam passed is what makes putting
 * our name on it defensible. Remove that sentence and the badge becomes a
 * claim we cannot support.
 */

import Link from "next/link";
import { Download, ExternalLink, Linkedin } from "lucide-react";
import {
  BADGE_DAYS,
  badgeImagePath,
  badgePath,
  linkedInShareUrl,
  type BadgeTier,
} from "@/lib/challenge/badge";
import { challengePublicUrl } from "@/lib/challenge/public-url";
import { uiFor } from "@/lib/challenge/locale";
import type { ChallengeLocale } from "@/lib/challenge/types";

const COURSE_PATH: Record<ChallengeLocale, string> = {
  en: "/en/claude-code-challenge",
  fr: "/challenge-claude-code",
};

export function BadgeBroken({ locale }: { locale: ChallengeLocale }) {
  const UI = uiFor(locale);
  return (
    <div className="mx-auto flex max-w-lg flex-col items-start gap-4 px-6 pb-24 pt-36">
      <h1 className="text-2xl font-bold tracking-tight">{UI.badgeBrokenTitle}</h1>
      <p className="text-muted-foreground">{UI.badgeBrokenBody}</p>
      <Link
        href={COURSE_PATH[locale]}
        className="inline-flex items-center gap-2 rounded-sm border border-foreground px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
      >
        {UI.badgeBackToCourse}
      </Link>
    </div>
  );
}

export function BadgeView({
  locale,
  name,
  tier,
}: {
  locale: ChallengeLocale;
  name: string;
  tier: BadgeTier;
}) {
  const UI = uiFor(locale);

  /*
    Absolute, and built from the public address rather than the request.

    LinkedIn fetches this address from its own servers. A relative path is
    meaningless to it, and an address taken from a developer machine is one it
    cannot reach, so the picture would simply never appear. That bug already
    shipped once in the sheet emails.
  */
  const shareUrl = `${challengePublicUrl()}${badgePath(locale, name, tier)}`;

  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-8 px-6 pb-16 pt-28">
      <div className="flex flex-col gap-2">
        <span className="text-[0.6875rem] font-bold uppercase tracking-[0.14em] text-primary-dark">
          {UI.badgeCardTag}
        </span>
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {UI.badgePageTitle(tier)}
        </h1>
        <p className="text-muted-foreground">{UI.badgeSub(BADGE_DAYS[tier])}</p>
      </div>

      {/*
        A plain `img`, not `next/image`. The source is a route that draws the
        picture from the address, so there is nothing for the optimiser to
        optimise and its loader would only put a second cache in front of one
        that already exists.
      */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={badgeImagePath(locale, name, tier)}
        alt={`${UI.badgePageTitle(tier)}, ${name}`}
        width={1200}
        height={630}
        className="w-full rounded-lg border border-border shadow-sm"
      />

      <div className="flex flex-wrap gap-3">
        <a
          href={linkedInShareUrl(shareUrl)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-sm border border-primary bg-primary px-5 py-2.5 text-[0.9375rem] font-semibold text-primary-foreground transition-colors hover:border-primary-dark hover:bg-primary-dark"
        >
          <Linkedin className="size-4" aria-hidden />
          {UI.badgeShare}
        </a>

        <a
          href={badgeImagePath(locale, name, tier, { square: true, download: true })}
          className="inline-flex items-center gap-2 rounded-sm border border-foreground px-5 py-2.5 text-[0.9375rem] font-semibold transition-colors hover:bg-foreground hover:text-background"
        >
          <Download className="size-4" aria-hidden />
          {UI.badgeDownload}
        </a>

        <Link
          href={COURSE_PATH[locale]}
          className="inline-flex items-center gap-2 rounded-sm border border-border px-5 py-2.5 text-[0.9375rem] font-semibold transition-colors hover:border-foreground"
        >
          <ExternalLink className="size-4" aria-hidden />
          {UI.badgeBackToCourse}
        </Link>
      </div>

      <p className="text-[0.8125rem] text-muted-foreground">{UI.badgeShareNote}</p>

      <p className="border-t border-border pt-6 text-[0.8125rem] text-muted-foreground">
        {UI.badgeHonest}
      </p>
    </div>
  );
}
