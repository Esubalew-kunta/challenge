"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Home, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * Frontière d'erreur globale. Comme pour la 404, sans ce fichier Next.js sert
 * un écran par défaut en anglais et sans style.
 *
 * Obligatoirement un composant client (Next l'exige pour `reset`), donc pas
 * d'export `metadata` possible ici.
 */
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Le digest est la seule façon de relier cet écran à la trace serveur.
    console.error("[ERROR BOUNDARY]", error.digest ?? error.message);
  }, [error]);

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-dot-grid opacity-30" />
      <div className="relative z-10 mx-auto max-w-2xl px-6 py-20 text-center md:py-28">
        <span className="inline-flex rounded-full bg-destructive/10 px-3 py-1 font-mono text-xs font-medium text-destructive">
          Erreur technique
        </span>

        <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
          Quelque chose s&apos;est{" "}
          <span className="text-primary">mal passé</span>
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
          L&apos;erreur vient de chez nous, pas de vous. Réessayez : le plus
          souvent, ça suffit.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button
            onClick={reset}
            size="lg"
            className="btn-gradient h-12 w-full cursor-pointer rounded-lg px-8 text-base font-semibold sm:w-auto"
          >
            <RefreshCw className="mr-2 size-4" aria-hidden="true" />
            Réessayer
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="h-12 w-full cursor-pointer rounded-lg px-8 text-base font-semibold sm:w-auto"
          >
            <Link href="/">
              <Home className="mr-2 size-4" aria-hidden="true" />
              Retour à l&apos;accueil
            </Link>
          </Button>
        </div>

        {error.digest && (
          <p className="mt-8 font-mono text-xs text-muted-foreground">
            Référence : {error.digest}
          </p>
        )}
      </div>
    </section>
  );
}
