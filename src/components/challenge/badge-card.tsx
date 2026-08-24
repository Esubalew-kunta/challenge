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
 * has their name printed on it. We cannot draw it without asking. The box
 * arrives empty unless the reader has already given us their name elsewhere on
 * the site, in which case it is filled in and editable. Nothing is ever
 * guessed, and nothing is ever printed that they did not confirm.
 *
 * **It posts to `/api/challenge-badge`, not to `/api/lead`, and that matters.**
 * The site-wide capture route needs the AI Makers OS and answers 502 when it
 * cannot reach it, so a reader who had finished ten days was told "your request
 * could not be sent" and got nothing. The badge is already earned by the time
 * this form appears: handing it over must not depend on a CRM being up. The
 * badge route writes the row and relays the lead onwards afterwards, allowed to
 * fail.
 *
 * It renders into `document.body`. Day pages sit inside `ScrollReveal`, which
 * finishes on `filter: blur(0px)`, and a filter that is not `none` traps every
 * fixed descendant inside it. That bug already shipped once, on the Day 6
 * booking popup.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { ArrowRight, PartyPopper, X } from "lucide-react";
import { track } from "@vercel/analytics";
import { LeadGate } from "@/components/shared/lead-gate";
import { getCapturedLead } from "@/lib/lead-capture-state";
import { badgePath, type BadgeTier } from "@/lib/challenge/badge";
import { PRIVACY_URL } from "@/lib/privacy-href";
import { uiFor } from "@/lib/challenge/locale";
import { answerKeyFor, totalDaysFor } from "@/lib/challenge/nav";
import { summarise } from "@/lib/challenge/progress";
import { badgeSubmissionSchema } from "@/lib/schemas/challenge-badge";
import type { ProgressState } from "@/lib/challenge/progress";
import type { ChallengeLocale } from "@/lib/challenge/types";
import { useProfile } from "./use-profile";

const KEYS = { en: answerKeyFor("en"), fr: answerKeyFor("fr") } as const;

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
   * The score, sent with the form so the row knows how engaged the lead is.
   *
   * Computed on every render rather than inside the submit handler, because
   * `LeadGate` owns the submit and only gives us a payload to attach.
   */
  const score = summarise(state, KEYS[locale], totalDaysFor());

  /**
   * Runs once the badge route has accepted the form.
   *
   * All it does is read back the name that was just stored and put it on the
   * button, so the badge link carries the name the reader actually typed. The
   * row and the lead relay are both the route's job now.
   */
  const captured = useCallback(() => {
    setReadyName(getCapturedLead()?.name?.trim() ?? "");
    track("challenge_badge", { tier, locale });
  }, [tier, locale]);

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
          endpoint="/api/challenge-badge"
          schema={badgeSubmissionSchema}
          context="challenge-badge"
          locale={locale}
          title={UI.badgeCardTitle(tier)}
          subtitle={UI.badgeCardBody}
          ctaLabel={UI.badgeCardCta}
          extraPayload={{
            tier,
            points: score.points,
            daysDone: score.daysDone,
            levelId: score.levelId,
            role: profile.role ?? undefined,
            claudeLevel: profile.level ?? undefined,
            locale,
          }}
          onCaptured={captured}
          privacyNote={
            <>
              {UI.badgePrivacy}{" "}
              <a
                href={PRIVACY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-2 hover:text-foreground"
              >
                {UI.badgePrivacyLink}
              </a>
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
