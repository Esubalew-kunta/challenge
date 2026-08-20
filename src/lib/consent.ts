// Stockage du consentement cookies (CNIL / RGPD).
//
// Règles encodées ici, volontairement :
// • RIEN ne se charge avant un opt-in explicite. GTM n'est injecté qu'une fois
//   `analytics` accordé — cf. lib/gtm.ts. Pas de consentement, pas de conteneur.
// • Refuser est aussi simple qu'accepter (un clic, même importance visuelle), et
//   le silence ne vaut pas consentement : sans choix enregistré, analytics reste
//   refusé.
// • Le choix est révocable à tout moment (lien "Cookies" du pied de page).
// • Les défauts Consent Mode v2 sont posés en "denied" AVANT tout tag, donc même
//   un tag ajouté plus tard au conteneur démarre refusé.
//
// Stocké en localStorage plutôt qu'en cookie : une trace de consentement est un
// état first-party, et la déposer en cookie demanderait elle-même une
// justification.
//
// Portage du modèle déjà en place sur cardio-check-up.com (même VPS), pour que
// les deux sites se comportent pareil.

export const CONSENT_KEY = "aimakers-cookie-consent";
export const CONSENT_VERSION = 1;
/** Rouvrir la bannière depuis n'importe où. */
export const CONSENT_OPEN_EVENT = "open-cookie-prefs";
/** Émis à chaque choix, pour réagir sans recharger. */
export const CONSENT_CHANGE_EVENT = "cookie-consent-change";

export type ConsentRecord = {
  version: number;
  analytics: boolean;
  date: string;
};

/**
 * null quand le visiteur n'a jamais choisi → la bannière doit s'afficher et
 * analytics rester coupé.
 */
export function getConsent(): ConsentRecord | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as ConsentRecord;
    // Politique modifiée => on redemande.
    if (parsed?.version !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    // Navigation privée / stockage bloqué → traité comme "non consenti".
    return null;
  }
}

export function setConsent(analytics: boolean): ConsentRecord {
  const record: ConsentRecord = {
    version: CONSENT_VERSION,
    analytics: !!analytics,
    date: new Date().toISOString(),
  };
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify(record));
  } catch {
    /* stockage bloqué : le choix ne vaut que pour cette page */
  }
  window.dispatchEvent(
    new CustomEvent(CONSENT_CHANGE_EVENT, { detail: record }),
  );
  return record;
}

export const hasAnalyticsConsent = () => getConsent()?.analytics === true;

export function openCookiePrefs() {
  window.dispatchEvent(new CustomEvent(CONSENT_OPEN_EVENT));
}
