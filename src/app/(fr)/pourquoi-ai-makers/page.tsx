import { constructMetadata } from "@/lib/metadata";
import { WhyAiMakersPage } from "@/components/pages/why-ai-makers-page";
import { WHY_WORK } from "@/lib/why-work-with-us-locale";

/**
 * /pourquoi-ai-makers — le gabarit vit dans
 * `components/pages/why-ai-makers-page.tsx` et sert les deux langues.
 * Le rendu FR est inchangé.
 */

export const metadata = constructMetadata({
  title: WHY_WORK.fr.metaTitle,
  description: WHY_WORK.fr.metaDescription,
  path: "/pourquoi-ai-makers",
});

export default function Page() {
  return <WhyAiMakersPage locale="fr" />;
}
