"use client";

import { LeadGate } from "@/components/shared/lead-gate";
import type { Locale } from "@/lib/i18n";
import { t } from "@/lib/ui-strings";
import type { LeadSource } from "@/lib/schemas/lead";

interface LeadCaptureProps {
  source: LeadSource;
  title: string;
  subtitle: string;
  ctaLabel: string;
  successTitle: string;
  successMessage: string;
  privacyNote?: string;
  /** Distingue les ids quand plusieurs captures coexistent sur une page. */
  context?: string;
  locale?: Locale;
}

/**
 * Bloc de capture autonome (playbook, brief, blog, glossaire).
 *
 * Enveloppe `LeadGate` en variante `card`, et lui délègue désormais l'appel
 * réseau, la validation et la mémoire de capture. C'est ce dernier point qui
 * change quelque chose : ce composant ne posait PAS `markLeadCaptured()`, donc
 * un visiteur qui venait de télécharger le playbook restait « inconnu » pour la
 * porte de réservation et se voyait redemander ses coordonnées.
 */
export function LeadCapture({
  source,
  title,
  subtitle,
  ctaLabel,
  successTitle,
  successMessage,
  privacyNote,
  context,
  locale = "fr",
}: LeadCaptureProps) {
  const s = t(locale);
  return (
    <LeadGate
      locale={locale}
      source={source}
      context={context ?? `capture-${source}`}
      title={title}
      subtitle={subtitle}
      ctaLabel={ctaLabel}
      successTitle={successTitle}
      successMessage={successMessage}
      privacyNote={privacyNote}
    />
  );
}
