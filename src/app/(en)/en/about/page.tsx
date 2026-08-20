import { constructMetadata } from "@/lib/metadata";
import { AboutPage } from "@/components/pages/about-page";
import { ABOUT } from "@/lib/about-locale";

/**
 * /en/about — équivalent anglais de /a-propos.
 *
 * Lire l'en-tête de `about.en.ts` avant d'y toucher : le master de cette page
 * se trompe sur l'effectif, sur la ville, sur le nombre de personnes formées,
 * lie vers une route qui n'existe pas et supprime une fonction de direction.
 */

export const metadata = constructMetadata({
  title: ABOUT.en.meta.title,
  description: ABOUT.en.meta.description,
  path: "/en/about",
});

export default function Page() {
  return <AboutPage locale="en" />;
}
