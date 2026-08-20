import { constructMetadata } from "@/lib/metadata";
import { DiagnosticWizard } from "@/components/sections/diagnostic/diagnostic-wizard";

// Passe par constructMetadata comme le reste du site : la déclaration à la
// main perdait la balise canonique auto-référente, sur une page indexable et
// présente au sitemap.
export const metadata = constructMetadata({
  title: "Diagnostic IA gratuit : votre maturité en 2 min",
  description:
    "12 questions pour évaluer votre maturité IA. Score personnalisé, recommandations par secteur, et plan d'action 90 jours. Gratuit et sans engagement.",
  path: "/diagnostic-ia",
});

export default function DiagnosticPage() {
  return (
    <>
      <h1 className="sr-only">Diagnostic de maturité IA</h1>
      <DiagnosticWizard />
    </>
  );
}
