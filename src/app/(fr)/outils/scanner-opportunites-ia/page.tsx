import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { faqPageSchema } from "@/lib/faq-schema";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { CTASection } from "@/components/shared/cta-section";
import { RelatedContent } from "@/components/shared/related-content";
import { siteConfig, bookingUrl } from "@/lib/site-config";
import { ScannerWizard } from "./scanner-wizard";

export const metadata = constructMetadata({
  title: "Scanner d'opportunités IA en 60 secondes",
  description: "3 questions, 60 secondes : les opportunités IA les plus rentables pour votre secteur, votre taille et vos irritants. Chiffres sourcés, gratuit.",
  path: "/outils/scanner-opportunites-ia",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Scanner d'opportunités IA",
      item: `${siteConfig.url}/outils/scanner-opportunites-ia`,
    },
  ],
};

const methodPoints = [
  {
    title: "Des chiffres sourcés, pas des promesses",
    description:
      "Chaque opportunité s'appuie sur une étude publique (Forrester, Ardent Partners, Loopio, Deloitte) ou sur un système AI Makers en production chez nos clients. La source est affichée sur chaque carte.",
  },
  {
    title: "Un classement selon votre profil",
    description:
      "Vos irritants pèsent le plus lourd dans le score. Votre secteur ajoute un bonus quand un système y est particulièrement rentable, et certains systèmes ne sont proposés qu'au-delà d'une certaine taille.",
  },
  {
    title: "Un point de départ, pas un audit",
    description:
      "Le scanner donne un ordre de priorité honnête en 60 secondes. La vraie réponse dépend de vos processus réels : c'est le rôle du diagnostic gratuit de 30 minutes.",
  },
];

const faq = [
  {
    question: "C'est vraiment gratuit ?",
    answer:
      "Oui, sans condition. Les résultats s'affichent à l'écran immédiatement, sans email. L'email ne sert qu'à recevoir le rapport complet, si vous le souhaitez.",
  },
  {
    question: "D'où viennent les chiffres affichés ?",
    answer:
      "D'études publiques (Forrester Total Economic Impact, Ardent Partners, Loopio, Deloitte), de cas publics documentés (Klarna, Unilever) et de systèmes AI Makers en production chez nos clients. Aucun chiffre n'est inventé et la source est affichée sous chaque résultat.",
  },
  {
    question: "Que contient le rapport complet ?",
    answer:
      "Toutes les opportunités identifiées pour votre profil (pas seulement les 3 premières), les chiffres sourcés pour chacune, et notre recommandation sur par où commencer selon votre taille et votre secteur.",
  },
  {
    question: "Et après le rapport ?",
    answer:
      "Libre à vous. Vous pouvez lancer ces systèmes en interne, avec votre prestataire, ou en discuter avec nous lors d'un diagnostic gratuit de 30 minutes. Aucune relance agressive.",
  },
];

export default function ScannerOpportunitesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema(faq)} />

      {/* Hero + scanner */}
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
            <span className="text-foreground">
              Scanner d&apos;opportunités IA
            </span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Outil gratuit
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Quelles opportunités IA sont les plus rentables{" "}
              <span className="text-primary">dans votre entreprise ?</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              3 questions, 60 secondes. Vous voyez immédiatement les 3 systèmes
              IA les plus pertinents pour votre secteur, votre taille et vos
              irritants. Chaque chiffre est sourcé.
            </p>
          </div>

          <div className="mt-10">
            <ScannerWizard />
          </div>
        </div>
      </section>

      {/* Méthode transparente */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <span className="text-sm font-medium text-primary">
          / Comment le scanner classe vos opportunités
        </span>
        <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
          La méthode, à découvert
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {methodPoints.map((point) => (
            <div
              key={point.title}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <h3 className="text-base font-bold leading-snug text-foreground">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {point.description}
              </p>
            </div>
          ))}
        </div>
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
            title: "Calculateur de ROI IA",
            href: "/outils/calculateur-roi-ia",
            description: "Estimez les heures et la valeur récupérables avec l'IA.",
          },
          {
            title: "Diagnostic IA en 2 minutes",
            href: "/diagnostic-ia",
            description: "Votre score de maturité IA et un plan d'action personnalisé.",
          },
          {
            title: "L'audit IA en entreprise",
            href: "/ai-transformation",
            description: "L'audit complet AI Scan : cartographie, scoring et roadmap chiffrée.",
          },
        ]}
      />

      <CTASection
        title="Une opportunité vous parle ?"
        subtitle="30 minutes pour valider le potentiel sur vos processus réels, avec les personnes qui déploient ces systèmes en production."
        primaryCta={{
          label: "Réserver un diagnostic gratuit",
          href: "/contact",
        }}
        secondaryCta={{
          label: "Calculateur ROI IA",
          href: "/outils/calculateur-roi-ia",
        }}
      />
    </>
  );
}
