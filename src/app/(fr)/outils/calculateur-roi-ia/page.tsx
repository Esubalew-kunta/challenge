import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { faqPageSchema } from "@/lib/faq-schema";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { CTASection } from "@/components/shared/cta-section";
import { RelatedContent } from "@/components/shared/related-content";
import { RoiCalculator } from "@/components/outils/roi-calculator";
import { siteConfig, bookingUrl } from "@/lib/site-config";

export const metadata = constructMetadata({
  title: "Calculateur ROI IA : vos gains estimés",
  description: "Estimez en 30 secondes les heures et les euros que l'IA peut libérer : effectif, salaires, adoption. Calcul transparent, hypothèses prudentes, gratuit.",
  path: "/outils/calculateur-roi-ia",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Calculateur ROI IA",
      item: `${siteConfig.url}/outils/calculateur-roi-ia`,
    },
  ],
};

const hypotheses = [
  "47 semaines travaillées effectives par an (congés et fériés déduits)",
  "Coût employeur estimé à 1,45 × le salaire brut (charges patronales)",
  "Base 35 heures hebdomadaires pour le coût horaire et les ETP",
  "Le taux d'adoption pondère l'effectif : tout le monde n'utilise pas l'IA au même rythme",
];

const faq = [
  {
    question: "D'où vient le chiffre de 7 heures gagnées par semaine ?",
    answer:
      "C'est le gain moyen constaté chez nos clients dont les équipes ont été formées et outillées sur leurs tâches réelles : rédaction, synthèse, analyse de documents, reporting. Le calculateur démarre à 4 heures par prudence. Votre diagnostic affine ce chiffre pour votre contexte.",
  },
  {
    question: "Ce calcul est-il fiable pour mon entreprise ?",
    answer:
      "C'est un ordre de grandeur, pas un engagement. La vraie réponse dépend de vos métiers, de vos outils et de vos processus. C'est exactement ce que mesure le diagnostic gratuit de 30 minutes : vos cas d'usage prioritaires et le gain réaliste pour chacun.",
  },
  {
    question: "Les heures gagnées se transforment-elles vraiment en valeur ?",
    answer:
      "Seulement si elles sont réinvesties : plus de dossiers traités, plus de rendez-vous commerciaux, moins d'heures supplémentaires, moins de recrutements subis. C'est le rôle de l'accompagnement : transformer le temps libéré en résultats mesurables, pas en pause café.",
  },
  {
    question: "Que se passe-t-il après le calcul ?",
    answer:
      "Rien d'automatique : pas d'email forcé, pas de relance. Si le chiffre vous interpelle, réservez le diagnostic gratuit : 30 minutes pour valider le potentiel sur vos processus réels, que vous travailliez avec nous ou non.",
  },
];

export default function CalculateurRoiPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema(faq)} />

      {/* Hero + calculateur */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-20">
          <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Accueil
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Outils</span>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Calculateur ROI IA</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Outil gratuit
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Combien d&apos;heures l&apos;IA peut-elle libérer{" "}
              <span className="text-primary">dans votre entreprise ?</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Quatre curseurs, un ordre de grandeur honnête. Ajustez les
              hypothèses à votre réalité : le calcul se met à jour en direct.
            </p>
          </div>

          <div className="mt-10">
            <RoiCalculator />
          </div>
        </div>
      </section>

      {/* Hypothèses transparentes */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <span className="text-sm font-medium text-primary">
          / Le calcul, à découvert
        </span>
        <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
          Nos hypothèses, en toutes lettres
        </h2>
        <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Un calculateur qui gonfle les chiffres dessert tout le monde. Voici
          exactement comment celui-ci compte :
        </p>
        <ul className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
          {hypotheses.map((h) => (
            <li
              key={h}
              className="rounded-2xl border border-border bg-background p-5 text-sm leading-relaxed text-foreground"
            >
              {h}
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Pour passer de l&apos;estimation à un chiffre engageant sur vos
          processus réels :{" "}
          <a
            href="/contact"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            réservez le diagnostic gratuit
          </a>{" "}
          ou commencez par{" "}
          <Link
            href="/diagnostic-ia"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            le diagnostic de maturité IA en 12 questions
          </Link>
          .
        </p>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Questions fréquentes
          </h2>
          <div className="mt-8">
            <FAQAccordion items={faq} />
          </div>
        </div>
      </section>

      <RelatedContent
        title="Continuez avec ces ressources"
        links={[
          {
            title: "Diagnostic IA en 2 minutes",
            href: "/diagnostic-ia",
            description: "Votre score de maturité IA et un plan d'action personnalisé.",
          },
          {
            title: "Scanner d'opportunités IA",
            href: "/outils/scanner-opportunites-ia",
            description: "Vos 3 premières opportunités IA à partir de 3 questions.",
          },
          {
            title: "L'offre Transformation IA",
            href: "/ai-transformation",
            description: "Comment on transforme ces heures gagnées en systèmes concrets.",
          },
        ]}
      />

      <CTASection
        title="Le chiffre vous interpelle ?"
        subtitle="30 minutes pour valider le potentiel sur vos processus réels, avec les personnes qui déploient l'IA en production."
        primaryCta={{
          label: "Réserver un diagnostic gratuit",
          href: bookingUrl,
        }}
        secondaryCta={{
          label: "Diagnostic de maturité IA",
          href: "/diagnostic-ia",
        }}
      />
    </>
  );
}
