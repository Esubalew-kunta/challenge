// Chargeur Google Tag Manager — injecté UNIQUEMENT après consentement.
//
// L'ID vit ici plutôt que dans le layout : le layout ne doit pas charger GTM,
// sinon le conteneur s'exécuterait avant le choix du visiteur (manquement CNIL).
// Le layout ne pose que les défauts Consent Mode v2 (tout refusé) ; ce module
// injecte le conteneur après opt-in et bascule les signaux en "granted".

export const GTM_ID = "GTM-PPKQFQZB";

let injected = false;

type ConsentSignals = {
  analytics_storage: "granted" | "denied";
  ad_storage: "granted" | "denied";
  ad_user_data: "granted" | "denied";
  ad_personalization: "granted" | "denied";
};

function gtag(...args: unknown[]) {
  // dataLayer attend l'objet `arguments` brut, pas un tableau : pousser un
  // tableau produit une commande que gtag.js ignore silencieusement.
  // eslint-disable-next-line prefer-rest-params
  (window as unknown as { dataLayer: unknown[] }).dataLayer.push(arguments);
}

function pushConsent(signals: ConsentSignals) {
  const w = window as unknown as { dataLayer: unknown[] };
  w.dataLayer = w.dataLayer || [];
  gtag("consent", "update", signals);
}

/** Injecte le conteneur une seule fois. Appelable plusieurs fois sans risque. */
export function loadGtm() {
  if (injected || typeof window === "undefined") return;
  if (document.getElementById("gtm-script")) {
    injected = true;
    return;
  }
  injected = true;

  // Signaler l'opt-in AVANT le chargement du conteneur, pour que la toute
  // première évaluation de tag voie déjà "granted".
  pushConsent({
    analytics_storage: "granted",
    ad_storage: "denied", // aucun tag publicitaire sur ce site
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  const w = window as unknown as { dataLayer: unknown[] };
  w.dataLayer.push({ "gtm.start": Date.now(), event: "gtm.js" });

  const s = document.createElement("script");
  s.id = "gtm-script";
  s.async = true;
  s.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
  document.head.appendChild(s);
}

/**
 * Révocation en cours de session : on repasse les signaux en "denied". Le
 * conteneur ne peut pas être déchargé une fois injecté — c'est le rechargement
 * qui le retire réellement — mais le signal arrête le déclenchement des tags à
 * partir de cet instant.
 */
export function denyGtm() {
  if (typeof window === "undefined") return;
  pushConsent({
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
}
