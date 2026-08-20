import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { inter, jetbrainsMono } from "@/lib/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { LeadPopup } from "@/components/shared/lead-popup";
import { ConsentDefaults } from "@/components/shared/consent-defaults";
import { CookieConsent } from "@/components/shared/cookie-consent";
import { siteConfig, googleSiteVerification } from "@/lib/site-config";
// globals.css reste à la racine de app/ : il est partagé par les deux layouts
// racines (groupes (fr) et (en)).
import "../globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AI Makers | Cabinet de Transformation IA pour Entreprises",
    template: "%s | AI Makers",
  },
  description: siteConfig.description,
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [{ url: "/og-default.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: googleSiteVerification,
  },
};

// L'injection directe de GA4 (gtag.js via NEXT_PUBLIC_GA_ID) a été retirée :
// elle se chargeait sans consentement, exactement le problème que la bannière
// corrige, et elle aurait doublé les pages vues si GA4 est aussi configuré dans
// le conteneur GTM. GA4 passe désormais par GTM, qui est lui sous consentement.
// NEXT_PUBLIC_GA_ID n'est plus lu ici.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Défauts Consent Mode uniquement. GTM n'est PAS chargé ici : le
            conteneur n'est injecté qu'après opt-in (lib/gtm.ts). */}
        <ConsentDefaults />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        {/* Pas de <noscript> GTM : il chargerait le conteneur sans consentement
            possible, puisque sans JavaScript aucun choix ne peut être recueilli.
            On perd la mesure des visites sans JS — c'est le prix de la
            conformité, et ce volume est marginal. */}
        <Header />
        <main>{children}</main>
        <Footer />
        <LeadPopup />
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
