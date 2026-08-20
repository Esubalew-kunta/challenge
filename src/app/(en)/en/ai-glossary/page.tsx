import { constructMetadata } from "@/lib/metadata";
import { GlossaryPage } from "@/components/pages/glossary-page";
import { GLOSSARY } from "@/lib/glossary-locale";

/**
 * /en/ai-glossary — équivalent anglais de /glossaire-ia.
 *
 * Les 30 définitions viennent du master, qui les couvre intégralement ; la
 * 31e (Forward Deployed Engineer) est traduite depuis le français, le master
 * l'omettant. Voir `glossary.en.ts`.
 */

export const metadata = constructMetadata({
  title: GLOSSARY.en.meta.title,
  description: GLOSSARY.en.meta.description,
  path: "/en/ai-glossary",
});

export default function Page() {
  return <GlossaryPage locale="en" />;
}
