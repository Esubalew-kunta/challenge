"use client";

/**
 * Day 1 only. The reader said the install failed, and asks for a human.
 *
 * This reverses a rule that was written down and defended, so the reasoning
 * belongs here rather than in a commit message nobody will find.
 *
 * The old rule: if the install failed, give help and show no email box at all.
 * Asking somebody for their address at the exact moment they have failed is
 * the worst moment on the site, and it is where most lead capture is placed.
 *
 * That rule stands, and this does not break it. The help text still appears
 * first and in full, on its own, asking for nothing. What is added underneath
 * is a button the reader has to choose to press. Nobody is shown a form for
 * failing. Somebody who is stuck is offered a way to reach a person, and only
 * sees a form after saying yes to that.
 *
 * The difference between those two is the whole argument, and it is the
 * difference between help and a trap.
 *
 * **It renders into `document.body`, and that is not optional.** The day
 * content sits inside `ScrollReveal`, which finishes its animation on
 * `filter: blur(0px)`. A filter that is not `none` is still a filter, so any
 * `position: fixed` descendant stops being measured against the window and gets
 * trapped inside the animated box instead. That exact bug shipped once already,
 * on the Day 6 booking popup, and was found by measuring the overlay in a
 * browser. Portalling out of the animated subtree is the fix.
 */

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { LifeBuoy, X } from "lucide-react";
import { track } from "@vercel/analytics";
import { LeadGate } from "@/components/shared/lead-gate";
import { uiFor } from "@/lib/challenge/locale";
import type { ChallengeLocale } from "@/lib/challenge/types";
import { useHydrated } from "./use-stored";

/** The policy the note links to, per language. */
const PRIVACY_HREF: Record<ChallengeLocale, string> = {
  en: "/en/privacy",
  fr: "/confidentialite",
};

export function HelpButton({ locale = "en" }: { locale?: ChallengeLocale }) {
  const UI = uiFor(locale);
  const hydrated = useHydrated();
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  const close = useCallback(() => setOpen(false), []);

  const openIt = useCallback(() => {
    setOpen(true);
    track("challenge_help_opened", { locale });
  }, [locale]);

  // Escape closes it, and the page behind stops scrolling while it is up.
  // Both are bound only while it is open, so neither can affect the rest of
  // the page.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  // Focus lands inside the box, so a keyboard reader is not left tabbing
  // through the page behind it.
  useEffect(() => {
    if (open) panelRef.current?.focus();
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={openIt}
        className="inline-flex w-fit items-center gap-2 rounded-sm border border-foreground px-4 py-2.5 text-sm font-semibold transition-colors hover:bg-foreground hover:text-background"
      >
        <LifeBuoy className="size-4" aria-hidden />
        {UI.helpButton}
      </button>

      {/*
        Nothing is portalled before hydration. `document` does not exist while
        this is prerendered, and the dialog must never appear in the static
        HTML that every reader shares.
      */}
      {hydrated && open
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-foreground/40 p-4 backdrop-blur-sm"
              onClick={close}
            >
              <div
                ref={panelRef}
                role="dialog"
                aria-modal="true"
                aria-label={UI.helpTitle}
                tabIndex={-1}
                // Clicks inside must not reach the backdrop, or filling in the
                // form would close the box on the first click.
                onClick={(e) => e.stopPropagation()}
                className="relative w-full max-w-md outline-none"
              >
                <button
                  type="button"
                  onClick={close}
                  aria-label={UI.helpClose}
                  className="absolute -top-3 -right-3 z-10 inline-flex size-9 items-center justify-center rounded-full border border-border bg-background text-muted-foreground shadow-md transition-colors hover:text-foreground"
                >
                  <X className="size-4" aria-hidden />
                </button>

                <LeadGate
                  source="claude-code-help"
                  context="challenge-help"
                  locale={locale}
                  title={UI.helpTitle}
                  subtitle={UI.helpBody}
                  ctaLabel={UI.helpCta}
                  successTitle={UI.helpDoneTitle}
                  successMessage={UI.helpDoneBody}
                  /*
                    Quiet, and still readable.

                    Small and grey is fine. Faint enough to be hard to find is
                    not: the rule requires the information to be easily
                    accessible, so a notice hidden on purpose does not weaken
                    the obligation, it invalidates the consent that the notice
                    was there to establish. It would also fail the contrast
                    rules that apply to this site separately.
                  */
                  privacyNote={
                    <>
                      {UI.helpPrivacy}{" "}
                      <Link
                        href={PRIVACY_HREF[locale]}
                        className="underline underline-offset-2 hover:text-foreground"
                      >
                        {UI.helpPrivacyLink}
                      </Link>
                    </>
                  }
                />
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
