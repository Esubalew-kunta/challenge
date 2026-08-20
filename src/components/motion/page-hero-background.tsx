"use client";

import { AnimatedGridPattern } from "@/components/shared/animated-grid-pattern";

/**
 * Fond de hero pour les pages intérieures — déclinaison allégée du langage
 * visuel du hero homepage (halo radial + grille animée).
 *
 * Deux intensités :
 * - "subtle"  : halo léger + grille discrète (pages template / hubs / contact).
 * - "normal"  : halo et grille un cran plus présents (pages piliers).
 *
 * Toujours ~60% de l'intensité homepage : les pages intérieures ne doivent
 * jamais rivaliser avec la home ni avec leur animation signature.
 *
 * Purement décoratif : aria-hidden, pointer-events-none, absolute inset-0.
 * Le parent doit être `relative overflow-hidden`, le contenu en `relative z-10`.
 * Tout le texte reste rendu côté serveur — ce composant n'en contient aucun.
 */

type PageHeroBackgroundProps = {
  intensity?: "subtle" | "normal";
  className?: string;
};

export function PageHeroBackground({
  intensity = "subtle",
  className,
}: PageHeroBackgroundProps) {
  const isNormal = intensity === "normal";

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 ${className ?? ""}`}
    >
      {/* Halo radial bleu en haut — ~60% de l'intensité homepage */}
      <div
        className="absolute inset-0"
        style={{
          background: isNormal
            ? "radial-gradient(ellipse 75% 55% at 50% -10%, rgba(37, 99, 235, 0.11) 0%, rgba(37, 99, 235, 0.035) 45%, transparent 70%)"
            : "radial-gradient(ellipse 75% 55% at 50% -10%, rgba(37, 99, 235, 0.09) 0%, rgba(37, 99, 235, 0.03) 45%, transparent 70%)",
        }}
      />
      {/* Grille animée discrète, masquée en fondu vers le bas */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 70%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 0%, black 0%, transparent 70%)",
        }}
      >
        <AnimatedGridPattern
          width={44}
          height={44}
          numSquares={isNormal ? 13 : 10}
          maxOpacity={isNormal ? 0.06 : 0.05}
          duration={3.8}
        />
      </div>
    </div>
  );
}
