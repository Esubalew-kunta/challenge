import Link from "next/link";
import {
  ArrowRight,
  Calculator,
  ChevronRight,
  Radar,
  Search,
} from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { Button } from "@/components/ui/button";
import { RelatedContent } from "@/components/shared/related-content";
import { siteConfig } from "@/lib/site-config";

export const metadata = constructMetadata({
  title: "Outils IA gratuits : ROI, visibilité, audit",
  description: "3 outils gratuits, sans inscription forcée : calculez le ROI de l'IA, voyez ce que ChatGPT dit de vous, trouvez vos systèmes IA les plus rentables.",
  path: "/outils",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Outils gratuits",
      item: `${siteConfig.url}/outils`,
    },
  ],
};

const tools = [
  {
    icon: Calculator,
    name: "Calculateur ROI IA",
    promise:
      "Estimez en 30 secondes les heures et les euros que l'IA peut libérer dans votre entreprise.",
    outcome:
      "4 curseurs (effectif, salaires, heures gagnées, adoption), un calcul transparent aux hypothèses prudentes, et votre gain annuel estimé en heures, en euros et en équivalents temps plein.",
    href: "/outils/calculateur-roi-ia",
    cta: "Calculer mon ROI",
  },
  {
    icon: Search,
    name: "Audit GEO gratuit",
    promise:
      "Découvrez ce que ChatGPT, Gemini et Perplexity répondent quand vos clients posent des questions sur votre métier.",
    outcome:
      "Sous 48h, préparé par un humain : les réponses des moteurs mot pour mot, les requêtes où vos concurrents vous remplacent, et vos 3 actions prioritaires pour être cité davantage.",
    href: "/outils/audit-geo-gratuit",
    cta: "Recevoir mon audit",
  },
  {
    icon: Radar,
    name: "Scanner d'opportunités IA",
    promise:
      "3 questions, 60 secondes : identifiez les systèmes IA les plus rentables pour votre secteur, votre taille et vos irritants.",
    outcome:
      "Un classement immédiat à l'écran, sans email obligatoire, avec des chiffres sourcés (études publiques et systèmes en production chez nos clients) sur chaque opportunité.",
    href: "/outils/scanner-opportunites-ia",
    cta: "Lancer le scanner",
  },
];

export default function OutilsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-dot-grid opacity-30" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-20">
          <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Accueil
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Outils gratuits</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Gratuit
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Des outils gratuits,{" "}
              <span className="text-primary">sans inscription forcée</span>
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Trois outils pour mesurer votre potentiel IA avant de parler à qui
              que ce soit : votre ROI, votre visibilité dans les réponses des
              IA, et vos opportunités d&apos;automatisation les plus rentables.
            </p>
          </div>
        </div>
      </section>

      {/* Les 3 outils */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {tools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.href}
              className="group flex h-full flex-col rounded-2xl border border-border bg-background p-8 transition-all hover:border-primary/30 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <tool.icon
                  className="h-6 w-6 text-primary"
                  aria-hidden="true"
                />
              </div>
              <h2 className="mt-5 text-xl font-bold text-foreground">
                {tool.name}
              </h2>
              <p className="mt-3 text-sm font-medium leading-relaxed text-foreground">
                {tool.promise}
              </p>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {tool.outcome}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                {tool.cta}
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </span>
            </Link>
          ))}
        </div>

        <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-relaxed text-muted-foreground">
          Ces outils utilisent la même méthode que nos missions : c&apos;est
          notre façon de vous montrer le niveau avant de travailler ensemble.
        </p>
      </section>

      {/* Mini CTA diagnostic */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-14 text-center">
          <h2 className="text-2xl font-bold text-foreground">
            Vous voulez la version sur mesure ?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            30 minutes de diagnostic gratuit : on analyse vos workflows réels et
            vous repartez avec vos 3 premiers quick wins IA, que vous
            travailliez avec nous ou non.
          </p>
          <Button
            asChild
            size="lg"
            className="btn-gradient mt-6 h-12 cursor-pointer rounded-lg px-8 text-base font-semibold"
          >
            <Link href="/contact">
              Réserver mon diagnostic gratuit
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </section>

      <RelatedContent
        title="Pour aller plus loin"
        background="bg-background"
        links={[
          {
            title: "Audit IA de votre entreprise",
            href: "/ai-transformation",
            description:
              "L'audit complet : cartographie des process, scoring de maturité et roadmap chiffrée.",
          },
          {
            title: "Diagnostic IA en 2 minutes",
            href: "/diagnostic-ia",
            description:
              "Testez votre maturité IA en ligne et repartez avec un score et un plan d'action.",
          },
          {
            title: "Le Playbook AI-First",
            href: "/playbook-ia",
            description:
              "Le guide de transformation IA (54 pages) à télécharger gratuitement.",
          },
        ]}
      />
    </>
  );
}
