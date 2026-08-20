"use client";

import { LeadGate } from "@/components/shared/lead-gate";
import { catalogueSubmissionSchema } from "@/lib/schemas/catalogue";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/i18n";

/**
 * Formulaire « Recevoir le catalogue de formations ».
 *
 * Poste sur /api/catalogue, pas sur /api/lead — d'où le `schema` et l'`endpoint`
 * explicites. Le schéma passé ici est CELUI DE LA ROUTE : c'est la divergence
 * entre validation client et validation serveur qui laissait passer les
 * adresses grand public sur ce formulaire, le plus fréquenté du site côté
 * formations.
 */

type CatalogueFormProps = {
  /** Slug de la formation d'où vient la demande (optionnel) */
  formation?: string;
  source?: string;
  className?: string;
  /** Langue. Défaut "fr" : les appels existants ne changent pas.
   *  NB : les LIBELLÉS DE CHAMPS viennent de `LeadGate`, partagé avec les
   *  autres formulaires du site et encore francophone — voir le rapport
   *  d'audit (`seo-audit-report/live-en/_cross-page.md`). */
  locale?: Locale;
};

export function CatalogueForm({
  formation,
  source = "catalogue-formation",
  className,
  locale = "fr",
}: CatalogueFormProps) {
  const s = t(locale);
  return (
    <LeadGate
      locale={locale}
      source={source}
      endpoint="/api/catalogue"
      schema={catalogueSubmissionSchema}
      context={`catalogue-${formation ?? "hub"}`}
      title={s.formCatFormTitle}
      subtitle={s.formCatFormSubtitle}
      ctaLabel={s.formCatFormTitle}
      extraFields={["company"]}
      extraPayload={formation ? { formation } : undefined}
      successTitle={s.formCatFormSuccessTitle}
      successMessage={s.formCatFormSuccessMsg}
      className={className}
    />
  );
}
