"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  CONSENT_CHANGE_EVENT,
  CONSENT_OPEN_EVENT,
  getConsent,
  setConsent,
} from "@/lib/consent";
import { denyGtm, loadGtm } from "@/lib/gtm";
import { t } from "@/lib/ui-strings";
import { alternateFor, type Locale } from "@/lib/i18n";

/**
 * Bannière de consentement cookies (CNIL).
 *
 * Contraintes réglementaires que le rendu doit respecter :
 * • Refuser est aussi accessible qu'accepter — même taille, même niveau, pas de
 *   "Refuser" dégradé en lien discret. C'est le point le plus sanctionné.
 * • Aucun dépôt ni chargement avant clic : GTM n'est injecté que dans
 *   handleAccept.
 * • Pas de fermeture implicite : ni croix, ni clic extérieur, ni défilement. Le
 *   silence ne vaut pas consentement, donc la bannière ne se ferme que sur un
 *   choix explicite.
 * • Choix révocable : le lien "Cookies" du pied de page réémet CONSENT_OPEN_EVENT.
 */
export function CookieConsent({ locale = "fr" }: { locale?: Locale }) {
  const [visible, setVisible] = useState(false);
  const s = t(locale);
  // La politique n'existe qu'en FR pour l'instant : on ne fabrique pas un lien
  // /en/privacy qui renverrait un 404.
  const policyHref =
    (locale === "en" ? alternateFor("/confidentialite", "en") : null) ??
    "/confidentialite";

  useEffect(() => {
    const stored = getConsent();
    // Choix déjà pris : on le rejoue (l'injection est idempotente) et on n'affiche rien.
    if (stored) {
      if (stored.analytics) loadGtm();
      return;
    }
    setVisible(true);
  }, []);

  useEffect(() => {
    const reopen = () => setVisible(true);
    window.addEventListener(CONSENT_OPEN_EVENT, reopen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, reopen);
  }, []);

  const choose = (analytics: boolean) => {
    setConsent(analytics);
    if (analytics) loadGtm();
    else denyGtm();
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label={s.consentAria}
      className="fixed inset-x-0 bottom-0 z-[100] border-t border-black/10 bg-white/95 p-4 shadow-[0_-4px_24px_rgba(0,0,0,0.08)] backdrop-blur-xl sm:p-6"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-foreground/80">
          {s.consentText}{" "}
          <Link
            href={policyHref}
            className="underline underline-offset-2 hover:text-foreground"
          >
            {s.consentPolicy}
          </Link>
          .
        </p>
        {/* Les deux boutons partagent la même classe de taille : refuser doit
            peser visuellement autant qu'accepter. */}
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose(false)}
            className="rounded-lg border border-black/15 px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-black/5"
          >
            {s.consentRefuse}
          </button>
          <button
            type="button"
            onClick={() => choose(true)}
            className="rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            {s.consentAccept}
          </button>
        </div>
      </div>
    </div>
  );
}
