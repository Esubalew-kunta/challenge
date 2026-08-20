import { constructMetadata } from "@/lib/metadata";
import { AiOsPage } from "@/components/pages/ai-os-page";
import { AI_OS } from "@/lib/offer-pages/ai-os-locale";

/**
 * /ai-operating-system — le gabarit vit dans `components/pages/ai-os-page.tsx`
 * et sert les deux langues. Le rendu FR est inchangé.
 */

export const metadata = constructMetadata({
  title: AI_OS.fr.meta.title,
  description: AI_OS.fr.meta.description,
  path: "/ai-operating-system",
});

export default function Page() {
  return <AiOsPage locale="fr" />;
}
