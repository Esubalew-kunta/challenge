import type { Metadata } from "next";
import { inter, jetbrainsMono } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";
import { HTML_LANG } from "@/lib/i18n";
// Partagé avec les layouts racines FR et EN : globals.css vit à la racine de app/.
import "../globals.css";

/**
 * Layout racine des pages destinées au papier (les fiches du challenge).
 *
 * Troisième layout racine, à côté de (fr) et (en), et pour la même raison
 * qu'eux : Next n'autorise plusieurs racines que via des groupes de routes.
 *
 * Pourquoi une racine séparée plutôt qu'une règle @media print dans (en) :
 * masquer l'en-tête et le pied de page du site depuis la feuille elle-même
 * demande de connaître la chaîne d'ancêtres qui l'entoure. La première version
 * utilisait `body > *:not(.sheet-root)`, ce qui masquait aussi le conteneur
 * DANS lequel vit la fiche — le PDF sortait vide. Une page sans chrome n'a rien
 * à masquer, donc rien ne peut se tromper de cible.
 *
 * Conséquence assumée : pas d'en-tête de site sur ces pages. C'est correct
 * pour un document à imprimer, et le pied de la fiche renvoie vers le site.
 *
 * Pas d'Analytics, pas de bandeau cookies : ces pages sont noindex, servent de
 * source à un PDF, et un bandeau de consentement se retrouverait imprimé.
 */

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name}`,
    template: "%s | AI Makers",
  },
  robots: { index: false, follow: true },
};

export default function PrintRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={HTML_LANG.en}
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
