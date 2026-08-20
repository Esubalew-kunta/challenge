"use client";

import { LeadGate } from "@/components/shared/lead-gate";
import { CalEmbed } from "@/components/shared/cal-embed";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/i18n";

interface BookingGateProps {
  /** Lien Cal.com sans l'origine, ex. "othmane-halim-5lo7uc/30min". */
  calLink: string;
  /** Titre accessible du calendrier Cal.com. */
  title: string;
  /** Classes du conteneur du calendrier une fois révélé. */
  calClassName?: string;
  /** Contexte d'affichage : pilote l'événement analytics et les ids de champs. */
  context: "inline" | "modal";
  /** Les CTA de réservation existent aussi sur les pages EN. */
  locale?: Locale;
}

/**
 * Porte d'entrée du calendrier Cal.com.
 *
 * Sans ce garde-fou, un visiteur qui n'aboutit pas à une réservation ne laisse
 * aucune trace — le lead existe dès la soumission du formulaire, avant même le
 * choix d'un créneau.
 *
 * N'est plus qu'une enveloppe autour de `LeadGate` : c'est le même formulaire
 * d'identité que partout ailleurs sur le site, avec le calendrier pour enfant.
 * Le composant garde son nom et sa signature pour que ses quatre appelants
 * (accueil, /contact, /equipe, et la modale des CTA) n'aient pas à bouger.
 */
export function BookingGate({
  calLink,
  title,
  calClassName = "h-[620px]",
  context,
  locale = "fr",
}: BookingGateProps) {
  const s = t(locale);
  return (
    <LeadGate
      source="booking"
      context={`booking-${context}`}
      locale={locale}
      title={s.bookingGateTitle}
      subtitle={s.bookingGateSubtitle}
      ctaLabel={s.bookingGateCta}
      privacyNote=""
    >
      <CalEmbed calLink={calLink} title={title} className={calClassName} />
    </LeadGate>
  );
}
