import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ArrowRight,
  Search,
  MapPin,
  ListChecks,
} from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { faqPageSchema } from "@/lib/faq-schema";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedContent } from "@/components/shared/related-content";
import { GeoAuditForm } from "@/components/shared/geo-audit-form";
import { siteConfig } from "@/lib/site-config";

export const metadata = constructMetadata({
  title: "Audit GEO gratuit : ce que les IA disent",
  description: "ChatGPT, Gemini et Perplexity répondent déjà aux questions de vos clients. Cet audit gratuit vous montre ce qu'ils disent de vous et de vos concurrents. Sous 48h, préparé par un humain.",
  path: "/outils/audit-geo-gratuit",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Audit GEO gratuit",
      item: `${siteConfig.url}/outils/audit-geo-gratuit`,
    },
  ],
};

// Moteur réellement interrogé par l'audit automatisé. Les autres moteurs sont
// cités sur la page comme contexte marché, jamais comme livrable de cet audit.
const engines = [
  { name: "ChatGPT", logo: "/images/stack/openai-color.svg" },
  { name: "Gemini", logo: "/images/stack/gemini-color.svg" },
  { name: "Perplexity", logo: "/images/stack/perplexity-color.svg" },
];

const deliverables = [
  {
    icon: Search,
    title: "Ce que chaque moteur répond sur votre entreprise",
    description:
      "On pose les questions que vos clients posent, et on vous restitue les réponses obtenues, mot pour mot, avec les sources citées.",
    showEngines: true,
  },
  {
    icon: MapPin,
    title: "Où vous apparaissez (et où vos concurrents vous remplacent)",
    description:
      "Les requêtes où vous êtes cité, celles où vous êtes absent, et qui prend votre place dans les réponses.",
    showEngines: false,
  },
  {
    icon: ListChecks,
    title: "Les 3 actions prioritaires pour être cité davantage",
    description:
      "Des recommandations concrètes et actionnables, adaptées à votre site et à votre secteur. Pas de théorie.",
    showEngines: false,
  },
];

const steps = [
  {
    number: "01",
    title: "Vous laissez votre email, votre entreprise et votre site",
    description:
      "30 secondes. Pas de questionnaire à rallonge, pas de call obligatoire.",
  },
  {
    number: "02",
    title: "On interroge les moteurs sur les requêtes de votre métier",
    description:
      "ChatGPT, Gemini et Perplexity, testés sur les questions que vos clients leur posent vraiment.",
  },
  {
    number: "03",
    title: "Vous recevez l'audit sous 48h, préparé par notre équipe",
    description:
      "Un document lisible, avec les réponses des moteurs et vos 3 actions prioritaires. Par un humain, pas par un robot.",
  },
];

const faq = [
  {
    question: "C'est vraiment gratuit ?",
    answer:
      "Oui, sans condition. Pas de carte bancaire, pas d'engagement, pas de call imposé pour recevoir l'audit.",
  },
  {
    question: "Pourquoi gratuit ?",
    answer:
      "C'est notre meilleur moyen de vous montrer notre niveau en GEO. Si l'audit vous est utile, vous saurez à qui parler le jour où vous voudrez aller plus loin. Sinon, vous aurez quand même une photo claire de votre visibilité IA.",
  },
  {
    question: "Et ensuite ?",
    answer:
      "Libre à vous. L'audit est à vous : vous pouvez appliquer les recommandations en interne, les confier à votre agence, ou en discuter avec nous. Aucune relance agressive.",
  },
];

export default function AuditGeoGratuitPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqPageSchema(faq)} />

      {/* Hero + formulaire */}
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
            <span className="text-foreground">Audit GEO gratuit</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                Audit gratuit
              </span>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
                Que disent les IA{" "}
                <span className="text-primary">de votre entreprise ?</span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Vos futurs clients posent leurs questions à ChatGPT, Gemini et
                Perplexity. Cet audit gratuit vous montre ce qu&apos;ils
                entendent en retour : sur vous, et sur vos concurrents.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-8 shadow-xl">
              <h2 className="text-lg font-bold text-foreground">
                Recevez votre audit personnalisé
              </h2>
              <p className="mb-6 mt-1 text-sm text-muted-foreground">
                Sous 48h, dans votre boîte mail.
              </p>
              <GeoAuditForm context="page" />
              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                Gratuit. Sous 48h. Préparé par un humain, pas par un robot.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ce que vous recevez */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <span className="text-sm font-medium text-primary">
          / Le contenu de l&apos;audit
        </span>
        <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
          Ce que vous recevez
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          {deliverables.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-background p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                <item.icon
                  className="h-5 w-5 text-primary"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-4 text-base font-bold leading-snug text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
              {item.showEngines && (
                <ul className="mt-4 flex flex-wrap gap-2">
                  {engines.map((engine) => (
                    <li
                      key={engine.name}
                      className="flex items-center gap-1.5 rounded-full border border-border bg-muted/40 px-2.5 py-1 text-xs font-medium text-foreground"
                    >
                      {engine.logo ? (
                        <Image
                          src={engine.logo}
                          alt=""
                          width={14}
                          height={14}
                          className="h-3.5 w-3.5"
                        />
                      ) : (
                        <span
                          aria-hidden="true"
                          className="flex h-3.5 w-3.5 items-center justify-center rounded-sm bg-[#20808D] text-[9px] font-bold leading-none text-white"
                        >
                          P
                        </span>
                      )}
                      {engine.name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Comment ça marche */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <span className="text-sm font-medium text-primary">/ Le process</span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            Comment ça marche
          </h2>
          <ol className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.number}
                className="rounded-2xl border border-border bg-background p-6"
              >
                <span className="font-mono text-sm font-bold text-primary">
                  {step.number}
                </span>
                <h3 className="mt-3 text-base font-bold leading-snug text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* FAQ + lien offre */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Questions fréquentes
        </h2>
        <div className="mt-8">
          <FAQAccordion items={faq} />
        </div>
        <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
          Vous voulez comprendre comment on rend une entreprise visible dans les
          réponses des IA ?{" "}
          <Link
            href="/seo-geo"
            className="inline-flex items-center gap-1 font-medium text-primary underline-offset-4 hover:underline"
          >
            Découvrir notre offre SEO et GEO
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </p>
      </section>

      <RelatedContent
        title="Continuez avec ces ressources"
        links={[
          {
            title: "Notre offre SEO et GEO",
            href: "/seo-geo",
            description:
              "Être cité par ChatGPT, Perplexity et les AI Overviews : la méthode complète.",
          },
          {
            title: "Diagnostic IA en 2 minutes",
            href: "/diagnostic-ia",
            description: "Votre score de maturité IA et un plan d'action personnalisé.",
          },
          {
            title: "Meilleures agences IA en France",
            href: "/blog/meilleures-agences-ia-france",
            description: "Le comparatif honnête des cabinets et agences IA.",
          },
        ]}
      />
    </>
  );
}
