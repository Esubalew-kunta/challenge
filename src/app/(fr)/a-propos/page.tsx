import { constructMetadata } from "@/lib/metadata";
import { AboutPage } from "@/components/pages/about-page";
import { ABOUT } from "@/lib/about-locale";

/**
 * /a-propos — le gabarit vit dans `components/pages/about-page.tsx` et sert les
 * deux langues. Le rendu FR est inchangé, à une exception documentée près :
 * `numberOfEmployees` du JSON-LD passe de 6 à 10, la valeur que la page affiche
 * partout (voir `about.ts`).
 */

export const metadata = constructMetadata({
  title: ABOUT.fr.meta.title,
  description: ABOUT.fr.meta.description,
  path: "/a-propos",
});

export default function Page() {
  return <AboutPage locale="fr" />;
}
