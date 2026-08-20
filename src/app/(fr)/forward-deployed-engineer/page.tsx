import { constructMetadata } from "@/lib/metadata";
import { FdePage } from "@/components/pages/fde-page";

/**
 * /forward-deployed-engineer — le corps vit dans `FdePage`, partagé avec
 * /en/forward-deployed-engineer. Cette route ne porte que ses métadonnées.
 */
export const metadata = constructMetadata({
  title: "Forward Deployed Engineer : rôle et modèle",
  description: "Comprendre le rôle du Forward Deployed Engineer : missions, compétences, différences avec consultant ou AI engineer, et modèle de déploiement en entreprise.",
  path: "/forward-deployed-engineer",
});

export default function Page() {
  return <FdePage locale="fr" />;
}
