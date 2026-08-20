import Script from "next/script";

/**
 * Défauts Google Consent Mode v2 — tout refusé.
 *
 * `beforeInteractive` est indispensable ici : ce script doit s'exécuter AVANT
 * tout tag. Avec `afterInteractive`, un conteneur injecté juste après pourrait
 * démarrer sans défauts et considérer le consentement comme accordé.
 *
 * Ce composant ne charge PAS GTM. Le conteneur n'est injecté qu'après opt-in
 * explicite (lib/gtm.ts). Poser les défauts ici garantit qu'un tag ajouté plus
 * tard au conteneur démarre lui aussi refusé.
 *
 * `wait_for_update` laisse à la bannière le temps de restaurer un choix déjà
 * enregistré avant que le moindre tag ne conclue au refus.
 */
export function ConsentDefaults() {
  return (
    <Script id="consent-defaults" strategy="beforeInteractive">
      {`window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{
  analytics_storage:'denied',
  ad_storage:'denied',
  ad_user_data:'denied',
  ad_personalization:'denied',
  wait_for_update:500
});`}
    </Script>
  );
}
