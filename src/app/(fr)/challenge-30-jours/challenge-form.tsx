"use client";

/**
 * Formulaire d'inscription au Challenge 30 jours Claude.
 *
 * NOTE OPÉRATIONNELLE : cette page ne fait que la capture.
 * La séquence email hebdomadaire (semaines 1 à 4) est opérée via n8n
 * (PRD Kunta) : le lead part sur /api/lead avec source "challenge",
 * n8n déclenche et livre le parcours.
 *
 * Enveloppe `LeadGate` en variante `bare` : les deux emplacements de la page
 * (hero et bloc final) fournissent déjà leur carte et leur titre.
 */

import { LeadGate } from "@/components/shared/lead-gate";

interface ChallengeFormProps {
  /** Contexte d'affichage : différencie les ids quand le formulaire apparaît deux fois sur la page. */
  context: "hero" | "final";
}

export function ChallengeForm({ context }: ChallengeFormProps) {
  return (
    <LeadGate
      source="challenge"
      variant="bare"
      context={`challenge-${context}`}
      ctaLabel="Démarrer le challenge"
      extraFields={["company"]}
      successTitle="Inscription confirmée."
      successMessage="Le premier email du parcours arrive dans votre boîte mail. Semaine 1 : configurer Claude pour votre contexte."
      privacyNote="Gratuit. Un email par semaine. Désinscription en un clic."
    />
  );
}
