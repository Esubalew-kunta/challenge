/**
 * Désinscription des emails AI Makers (Challenge 30 jours, Brief AI-First).
 *
 * Cible du lien « désinscription en un clic » présent dans chaque email du
 * parcours, promesse faite explicitement dans la FAQ de /challenge-30-jours.
 *
 * Pourquoi une confirmation et pas une désinscription immédiate à l'ouverture :
 * Gmail et Outlook préchargent et scannent les liens des emails. Une désinscription
 * déclenchée par un simple GET désabonnerait des gens qui n'ont jamais cliqué.
 * La page s'ouvre donc sur un bouton, et l'écriture se fait en POST.
 *
 * noindex : page utilitaire, jamais dans les résultats de recherche.
 */

import { constructMetadata } from "@/lib/metadata";
import { Suspense } from "react";
import { UnsubscribeForm } from "./unsubscribe-form";

// Page volontairement hors index : on garde `robots`, mais elle passe par
// constructMetadata pour obtenir sa canonique comme les autres.
export const metadata = {
  ...constructMetadata({
    title: "Désinscription",
    description: "Désinscrivez-vous des emails AI Makers en un clic.",
    path: "/desabonnement",
  }),
  robots: { index: false, follow: false },
};

export default function DesabonnementPage() {
  return (
    <main className="mx-auto flex min-h-[70vh] max-w-xl items-center px-6 py-20">
      <div className="w-full">
        <h1 className="text-2xl font-bold text-foreground md:text-3xl">
          Désinscription des emails AI Makers
        </h1>

        <Suspense
          fallback={
            <p className="mt-4 text-muted-foreground">Chargement...</p>
          }
        >
          <UnsubscribeForm />
        </Suspense>
      </div>
    </main>
  );
}
