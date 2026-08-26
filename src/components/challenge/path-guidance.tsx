"use client";

import { Compass } from "lucide-react";
import { uiFor } from "@/lib/challenge/locale";
import { shouldAsk } from "@/lib/challenge/profile";
import type { ChallengeLocale, Day } from "@/lib/challenge/types";
import { Paragraphs } from "./rich-text";
import { useProfile } from "./use-profile";
import { useHydrated } from "./use-stored";

function defaultGuidance(day: Day, locale: ChallengeLocale) {
  const isFrench = locale === "fr";
  const needsApp = day.app === "needs-app";

  return {
    beginner: isFrench
      ? [
          needsApp
            ? "Parcours débutant : utilisez l'application Claude Code et travaillez dans un dossier de test. Vous n'avez pas besoin de comprendre chaque commande aujourd'hui."
            : "Parcours débutant : gardez un exemple réel mais sans risque. Avancez une étape à la fois et arrêtez-vous dès que le résultat est utile.",
        ]
      : [
          needsApp
            ? "Beginner path: use the Claude Code app and work in a test folder. You do not need to understand every command today."
            : "Beginner path: use a real but low-risk example. Take one step at a time and stop once the result is useful.",
        ],
    builder: isFrench
      ? [
          "Parcours builder : utilisez votre éditeur ou le terminal, gardez les changements petits et vérifiez le résultat avant de continuer.",
        ]
      : [
          "Builder path: use your editor or terminal, keep changes small, and verify the result before moving on.",
        ],
  };
}

export function PathGuidance({ day, locale }: { day: Day; locale: ChallengeLocale }) {
  const hydrated = useHydrated();
  const { profile } = useProfile();
  const UI = uiFor(locale);

  if (!hydrated || shouldAsk(profile)) return null;

  const guidance = day.pathGuidance ?? defaultGuidance(day, locale);
  const body = guidance[profile.path];

  return (
    <aside className="mt-10 rounded-md border border-border bg-accent/40 px-5 py-4">
      <div className="mb-2 flex items-center gap-2 text-[0.6875rem] font-bold uppercase tracking-[0.12em] text-primary-dark">
        <Compass className="size-3.5" aria-hidden />
        {UI.pathGuidanceLabel(profile.path)}
      </div>
      <Paragraphs items={body} className="text-[0.9375rem] text-foreground" />
    </aside>
  );
}
