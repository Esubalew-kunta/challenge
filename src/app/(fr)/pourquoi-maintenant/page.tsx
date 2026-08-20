import { constructMetadata } from "@/lib/metadata";
import { ManifestePage } from "@/components/pages/manifeste-page";
import { MANIFESTE } from "@/lib/offer-pages/manifeste-locale";

/**
 * /pourquoi-maintenant — le gabarit vit dans
 * `components/pages/manifeste-page.tsx` et sert les deux langues.
 * Le rendu FR est inchangé, titre doublé compris (voir `manifeste.ts`).
 */

export const metadata = constructMetadata({
  title: MANIFESTE.fr.meta.title,
  description: MANIFESTE.fr.meta.description,
  path: "/pourquoi-maintenant",
});

export default function Page() {
  return <ManifestePage locale="fr" />;
}
