import { constructMetadata } from "@/lib/metadata";
import { FounderPage } from "@/components/pages/founder-page";
import { FOUNDER } from "@/lib/founder-locale";

/**
 * /fondateur — le gabarit vit dans `components/pages/founder-page.tsx` et sert
 * les deux langues. Le rendu FR est inchangé.
 */

export const metadata = constructMetadata({
  title: FOUNDER.fr.meta.title,
  description: FOUNDER.fr.meta.description,
  path: "/fondateur",
});

export default function Page() {
  return <FounderPage locale="fr" />;
}
