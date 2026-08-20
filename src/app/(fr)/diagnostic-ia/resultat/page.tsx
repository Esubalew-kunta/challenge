import { constructMetadata } from "@/lib/metadata";
import { DiagnosticResult } from "@/components/sections/diagnostic/diagnostic-result";

// Page volontairement hors index : on garde `robots`, mais elle passe par
// constructMetadata pour obtenir sa canonique comme les autres.
export const metadata = {
  ...constructMetadata({
    title: "Votre Diagnostic IA : résultat personnalisé",
    description:
      "Votre score de maturité IA, recommandations personnalisées et plan d'action 90 jours.",
    path: "/diagnostic-ia/resultat",
  }),
  robots: { index: false, follow: false },
};

export default function ResultPage() {
  return <DiagnosticResult />;
}
