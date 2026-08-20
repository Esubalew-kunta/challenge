import { constructMetadata } from "@/lib/metadata";
import { WhyAiMakersPage } from "@/components/pages/why-ai-makers-page";
import { WHY_WORK } from "@/lib/why-work-with-us-locale";

/**
 * /en/why-ai-makers — équivalent anglais de /pourquoi-ai-makers.
 * Aucun master ne couvre cette page : traduction du français en ligne.
 */

export const metadata = constructMetadata({
  title: WHY_WORK.en.metaTitle,
  description: WHY_WORK.en.metaDescription,
  path: "/en/why-ai-makers",
});

export default function Page() {
  return <WhyAiMakersPage locale="en" />;
}
