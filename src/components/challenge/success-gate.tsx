"use client";

/**
 * Day 1 only. The reader says whether the install worked before anything is
 * offered.
 *
 * If it failed they get help and no email box at all. Asking somebody for
 * their address immediately after they have failed is the worst moment on the
 * whole site, and it is the moment most lead capture is placed.
 *
 * That still holds, and `HelpButton` does not break it. The help text appears
 * first, in full, asking for nothing. Under it sits a button the reader has to
 * choose to press, and the form only exists behind that press. Nobody is shown
 * a form for failing; somebody stuck is offered a person.
 */

import { useState } from "react";
import { CheckCircle2, LifeBuoy, XCircle } from "lucide-react";
import type { ChallengeLocale, Sheet, SuccessGate as GateData } from "@/lib/challenge/types";
import { HelpButton } from "./help-modal";
import { SheetOffer } from "./sheet-offer";
import { Paragraphs } from "./rich-text";

export function SuccessGate({
  gate,
  sheet,
  day,
  locale = "en",
}: {
  gate: GateData;
  sheet?: Sheet;
  day: number;
  locale?: ChallengeLocale;
}) {
  const [answer, setAnswer] = useState<"yes" | "no" | null>(null);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 rounded-md border border-dashed border-border bg-card p-6">
        <h3 className="text-lg font-bold tracking-tight">{gate.question}</h3>
        <p className="text-muted-foreground">
          Be honest. There is something useful either way.
        </p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={answer === "yes"}
            onClick={() => setAnswer("yes")}
            className={`inline-flex items-center gap-2 rounded-sm border px-5 py-2.5 text-[0.9375rem] font-semibold transition-colors ${
              answer === "yes"
                ? "border-success bg-success/10 text-success"
                : "border-border bg-card hover:border-success hover:bg-success/10 hover:text-success"
            }`}
          >
            <CheckCircle2 className="size-4" aria-hidden />
            {gate.yesLabel}
          </button>
          <button
            type="button"
            aria-pressed={answer === "no"}
            onClick={() => setAnswer("no")}
            className={`inline-flex items-center gap-2 rounded-sm border px-5 py-2.5 text-[0.9375rem] font-semibold transition-colors ${
              answer === "no"
                ? "border-primary bg-accent text-primary-dark"
                : "border-border bg-card hover:border-primary hover:bg-accent hover:text-primary-dark"
            }`}
          >
            <XCircle className="size-4" aria-hidden />
            {gate.noLabel}
          </button>
        </div>
      </div>

      {answer === "yes" && sheet ? <SheetOffer sheet={sheet} day={day} locale={locale} /> : null}

      {answer === "no" ? (
        <div className="flex flex-col gap-2 rounded-md border border-l-[3px] border-border border-l-accent-warm bg-card px-5 py-4">
          <span className="inline-flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.11em] text-accent-warm">
            <LifeBuoy className="size-3.5" aria-hidden />
            {gate.failTag}
          </span>
          <Paragraphs items={gate.failBody} className="text-foreground" />
          <HelpButton locale={locale} />
        </div>
      ) : null}
    </div>
  );
}

