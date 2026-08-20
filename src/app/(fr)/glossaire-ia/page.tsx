import { constructMetadata } from "@/lib/metadata";
import { GlossaryPage } from "@/components/pages/glossary-page";
import { GLOSSARY } from "@/lib/glossary-locale";

/**
 * /glossaire-ia — le gabarit vit dans `components/pages/glossary-page.tsx` et
 * sert les deux langues. Le rendu FR est inchangé.
 */

export const metadata = constructMetadata({
  title: GLOSSARY.fr.meta.title,
  description: GLOSSARY.fr.meta.description,
  path: "/glossaire-ia",
});

export default function Page() {
  return <GlossaryPage locale="fr" />;
}
