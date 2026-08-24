"use client";

/**
 * The badge, offered inside the card that already exists.
 *
 * **This is deliberately not a second popup.** Finishing day 10 already fires
 * a celebration card, and day 10 also carries a cheat sheet whose offer has its
 * own email box on the page. Adding a third thing would ask the same person for
 * the same address twice inside a minute and look careless. So the celebration
 * card becomes this when a milestone carries a badge, rather than appearing
 * next to it.
 *
 * The form is `LeadGate`, the same identity form as every other capture point
 * on the site. It arrives already filled in with whatever the reader has given
 * us anywhere before, and they only complete what is missing. That is the whole
 * of the owner's instruction on 24 August 2026, and it is why there is no
 * second form here.
 *
 * **Asking for the name is honest here in a way it usually is not.** The badge
 * has their name printed on it. We cannot draw it without asking.
 *
 * It renders into `document.body`. Day pages sit inside `ScrollReveal`, which
 * finishes on `filter: blur(0px)`, and a filter that is not `none` traps every
 * fixed descendant inside it. That bug already shipped once, on the Day 6
 * booking popup.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { ArrowRight, PartyPopper, X } from "lucide-react";
import { track } from "@vercel/analytics";
import { LeadGate } from "@/components/shared/lead-gate";
import { getCapturedLead } from "@/lib/lead-capture-state";
import { badgePath, type BadgeTier } from "@/lib/challenge/badge";
import { uiFor } from "@/lib/challenge/locale";
import { answerKeyFor, totalDaysFor } from "@/lib/challenge/nav";
import { summarise } from "@/lib/challenge/progress";
import type { ProgressState } from "@/lib/challenge/progress";
import type { ChallengeLocale } from "@/lib/challenge/types";
import { useProfile } from "./use-profile";

const KEYS = { en: answerKeyFor("en"), fr: answerKeyFor("fr") } as const;

const PRIVACY_HREF: Record<ChallengeLocale, string> = {
  en: "/en/privacy",
  fr: "/confidentialite",
};

export function BadgeCard({
  tier,
  locale,
  state,
  onClose,
}: {
  tier: BadgeTier;
  locale: ChallengeLocale;
  state: ProgressState;
  onClose: () => void;
}) {
  const UI = uiFor(locale);
  const { profile } = useProfile();
  const panelRef = useRef<HTMLDivElement>(null);

  /** Set the moment the form is accepted, and the only thing the badge needs. */
  const [readyName, setReadyName] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [onClose]);

  useEffect(() => {
    panelRef.current?.focus();
  }, []);

  /**
   * Records the badge, and is never allowed to cost the reader their badge.
   *
   * `LeadGate` has already written the lead through `/api/lead` by the time
   * this runs. This second write is the challenge's own record of who earned
   * which badge, which is where the team looks for challenge data. If it
   * fails, the reader still gets the thing they just earned. A row is worth
   * less than the moment.
   */
  const captured = useCallback(() => {
    const lead = getCapturedLead();
    const name = lead?.name?.trim() ?? "";
    setReadyName(name);
    track("challenge_badge", { tier, locale });

    if (!lead) return;
    const score = summarise(state, KEYS[locale], totalDaysFor());
    void fetch("/api/challenge-badge", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        tier,
        points: score.points,
        daysDone: score.daysDone,
        levelId: score.levelId,
        role: profile.role ?? undefined,
        claudeLevel: profile.level ?? undefined,
        locale,
      }),
    }).catch(() => {
      // Deliberately silent. See above.
    });
  }, [state, locale, tier, profile.role, profile.level]);

  return createPortal(
    <div
      className="fixed inset-0 z-[110] flex items-center justify-center overflow-y-auto bg-foreground/40 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={UI.badgeCardTitle(tier)}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-md outline-none"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={UI.badgeCardClose}
          className="absolute -top-3 -right-3 z-10 inline-flex size-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-md transition-colors hover:text-foreground"
        >
          <X className="size-4" aria-hidden />
        </button>

        <LeadGate
          source="claude-code-badge"
          context="challenge-badge"
          locale={locale}
          title={UI.badgeCardTitle(tier)}
          subtitle={UI.badgeCardBody}
          ctaLabel={UI.badgeCardCta}
          extraPayload={{ badgeTier: tier }}
          onCaptured={captured}
          privacyNote={
            <>
              {UI.badgePrivacy}{" "}
              <Link
                href={PRIVACY_HREF[locale]}
                className="underline underline-offset-2 hover:text-foreground"
              >
                {UI.badgePrivacyLink}
              </Link>
            </>
          }
        >
          {/*
            Revealed by LeadGate once the form is accepted.

            A new tab, not this one. The reader is mid lesson, and taking the
            page away from somebody as a reward for finishing a phase is a
            strange way to thank them.
          */}
          <div className="rounded-2xl border border-border bg-white p-6 text-center shadow-xl shadow-black/[0.04] sm:p-8">
            <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-2xl bg-accent">
              <PartyPopper className="size-7 text-primary-dark" aria-hidden />
            </div>
            <h3 className="text-lg font-bold">{UI.badgeReadyTitle}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {UI.badgeReadyBody}
            </p>
            <a
              href={badgePath(locale, readyName, tier)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gradient mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white"
            >
              {UI.badgeOpen}
              <ArrowRight className="size-4" aria-hidden />
            </a>
          </div>
        </LeadGate>
      </div>
    </div>,
    document.body,
  );
}
