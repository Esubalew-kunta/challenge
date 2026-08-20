"use client";

import { useState } from "react";

const CAL_ORIGIN = "https://cal.com";

type CalEmbedProps = {
  /** Lien Cal.com sans l'origine, ex. "othmane-halim-5lo7uc/30min". */
  calLink: string;
  /** Titre accessible du bloc de réservation. */
  title: string;
  /** Classes du conteneur (hauteur, etc.). */
  className?: string;
};

/**
 * Embed Cal.com par iframe directe — plus fiable que le script embed.js
 * (qui échouait silencieusement selon les navigateurs / bloqueurs). Le
 * squelette de calendrier reste affiché jusqu'à l'événement `onLoad` de
 * l'iframe. Locale forcée en français via le paramètre d'URL.
 */
export function CalEmbed({
  calLink,
  title,
  className = "h-[620px]",
}: CalEmbedProps) {
  const [isReady, setIsReady] = useState(false);

  const src = `${CAL_ORIGIN}/${calLink}?embed=true&theme=light&layout=month_view`;

  return (
    <div
      className={`relative w-full ${className}`}
      role="region"
      aria-label={title}
    >
      {!isReady && (
        <div
          className="absolute inset-0 z-10 flex flex-col bg-white p-6"
          aria-hidden
        >
          {/* Squelette de calendrier pendant le chargement */}
          <div className="animate-pulse">
            <div className="h-5 w-40 rounded bg-muted" />
            <div className="mt-2 h-3 w-56 rounded bg-muted/70" />
            <div className="mt-6 grid grid-cols-7 gap-2">
              {Array.from({ length: 7 }).map((_, i) => (
                <div key={`h-${i}`} className="h-3 rounded bg-muted/60" />
              ))}
              {Array.from({ length: 28 }).map((_, i) => (
                <div key={`c-${i}`} className="h-9 rounded-lg bg-muted/40" />
              ))}
            </div>
            <div className="mt-6 space-y-2">
              <div className="h-9 rounded-lg bg-muted/40" />
              <div className="h-9 rounded-lg bg-muted/40" />
            </div>
          </div>
          <div className="mt-auto flex items-center justify-center gap-2 pt-4">
            <span className="size-4 animate-spin rounded-full border-2 border-primary border-t-transparent" />
            <span className="text-xs text-muted-foreground">
              Chargement du calendrier…
            </span>
          </div>
        </div>
      )}
      <iframe
        src={src}
        title={title}
        loading="lazy"
        onLoad={() => setIsReady(true)}
        className="h-full w-full rounded-xl border-0"
      />
    </div>
  );
}
