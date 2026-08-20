import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { inter, jetbrainsMono } from "@/lib/fonts";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ConsentDefaults } from "@/components/shared/consent-defaults";
import { CookieConsent } from "@/components/shared/cookie-consent";
import { siteConfig, googleSiteVerification } from "@/lib/site-config";
import { HTML_LANG, OG_LOCALE } from "@/lib/i18n";
// Partagé avec le layout racine FR : globals.css vit à la racine de app/.
import "../globals.css";

/**
 * Layout racine de l'arbre anglais (/en/*).
 *
 * Pourquoi un second layout racine plutôt qu'un layout imbriqué : `<html lang>`
 * ne peut être posé que par un layout racine, et il doit valoir "en" ici contre
 * "fr" côté FR. Next n'autorise plusieurs layouts racines que via des groupes
 * de routes — d'où (fr) et (en), qui n'apparaissent pas dans les URLs.
 *
 * Conséquence connue : passer d'un arbre à l'autre déclenche un rechargement
 * complet, pas une transition client. Acceptable pour un changement de langue.
 */

const EN_TITLE = "AI Transformation Studio for Companies";
// Reprise du master EN (homepage.md, § Page meta) — pas une traduction ad hoc.
const EN_DESCRIPTION =
  "AI Makers is an AI transformation studio in Paris and Casablanca. We audit processes, ship AI systems to production, and train your teams. 200+ systems, full ownership of what we build.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${EN_TITLE} | AI Makers`,
    // Le gabarit ajoute la marque : ne jamais la réécrire à la main dans les
    // titres de page, sous peine de double suffixe (relevé par l'audit SEO).
    template: "%s | AI Makers",
  },
  description: EN_DESCRIPTION,
  openGraph: {
    type: "website",
    locale: OG_LOCALE.en,
    url: `${siteConfig.url}/en`,
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
  // Même jeton que côté FR : la propriété est vérifiée pour le domaine, et la
  // balise doit rester présente sur les deux arbres.
  verification: {
    google: googleSiteVerification,
  },
};

export default function EnRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={HTML_LANG.en}
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        {/* Défauts Consent Mode uniquement, comme côté FR : GTM n'est injecté
            qu'après opt-in. Le conteneur doit être présent des deux côtés,
            sinon les chiffres de trafic sont faux sans que rien ne casse. */}
        <ConsentDefaults />
      </head>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <Header locale="en" />
        <main>{children}</main>
        <Footer locale="en" />
        {/* LeadPopup n'est volontairement pas monté ici : son contenu est
            écrit en français en dur. Le remonter une fois traduit — mieux vaut
            pas de pop-up qu'une pop-up française sur une page anglaise. */}
        <Analytics />
        <CookieConsent locale="en" />
      </body>
    </html>
  );
}
