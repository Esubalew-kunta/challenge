"use client";

import { LeadGate } from "@/components/shared/lead-gate";

/**
 * Formulaire de l'audit GEO gratuit.
 *
 * Enveloppe `LeadGate` en variante `bare` : ses deux emplacements
 * (/outils/audit-geo-gratuit et la pop-up de sortie) portent DÉJÀ leur propre
 * carte et leur propre titre, donc le composant ne doit fournir que les champs.
 *
 * `company` est requis pour cette source (règle portée par le schéma) et
 * `website` reste facultatif — mais c'est lui qui rend l'audit précis : sans le
 * site, l'analyse doit deviner de quelle entreprise il s'agit à partir du seul
 * nom.
 *
 * ⚠️ Les helpers `markLeadCaptured` / `hasLeadCaptured` vivaient ici pour des
 * raisons historiques. Ils sont partis dans `@/lib/lead-capture-state` — ils
 * n'ont jamais eu de rapport avec l'audit GEO.
 */

interface GeoAuditFormProps {
  /** Contexte d'affichage : pilote les ids et l'événement analytics. */
  context: "popup" | "page";
  /** Appelé après une soumission réussie (ex. : refermer la pop-up). */
  onSuccess?: () => void;
}

export function GeoAuditForm({ context, onSuccess }: GeoAuditFormProps) {
  return (
    <LeadGate
      source="geo-audit"
      variant="bare"
      context={`geo-audit-${context}`}
      ctaLabel="Recevoir mon audit"
      extraFields={["company", "website"]}
      successTitle="C'est noté."
      successMessage="Nous interrogeons les moteurs sur votre entreprise. Votre audit arrive dans votre boîte mail sous 48h, préparé par notre équipe."
      privacyNote=""
      onCaptured={onSuccess}
    />
  );
}
