import { constructMetadata } from "@/lib/metadata";
import { DataPlatformPage } from "@/components/pages/data-platform-page";
import { DATA_PLATFORM } from "@/lib/offer-pages/data-platform-locale";

/**
 * /plateforme-data-ia — le gabarit vit dans
 * `components/pages/data-platform-page.tsx` et sert les deux langues.
 * Le rendu FR est inchangé.
 */

export const metadata = constructMetadata({
  title: DATA_PLATFORM.fr.meta.title,
  description: DATA_PLATFORM.fr.meta.description,
  path: "/plateforme-data-ia",
});

export default function Page() {
  return <DataPlatformPage locale="fr" />;
}
