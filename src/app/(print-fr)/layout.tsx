import type { Metadata } from "next";
import { inter, jetbrainsMono } from "@/lib/fonts";
import { siteConfig } from "@/lib/site-config";
import { HTML_LANG } from "@/lib/i18n";
// Partagé avec les autres layouts racines : globals.css vit à la racine de app/.
import "../globals.css";

/**
 * Layout racine des fiches françaises destinées au papier.
 *
 * Quatrième racine, à côté de (fr), (en) et (print). Un layout racine ne peut
 * pas changer son `lang` selon la route, et une fiche française servie avec
 * `lang="en"` est fausse pour un lecteur d'écran et pour la césure. Un
 * quatrième groupe coûte un fichier de vingt lignes et règle ça pour de bon.
 *
 * Tout le reste est identique à (print), et pour les mêmes raisons : pas
 * d'en-tête de site, donc rien à masquer à l'impression, et pas d'Analytics ni
 * de bandeau cookies, qui se retrouveraient imprimés sur la fiche.
 */

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name}`,
    template: "%s | AI Makers",
  },
  robots: { index: false, follow: true },
};

export default function PrintFrRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={HTML_LANG.fr}
      className={`${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background font-sans text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
