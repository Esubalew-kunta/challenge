import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { CTASection } from "@/components/shared/cta-section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { siteConfig, bookingUrl } from "@/lib/site-config";
import { villesFormation } from "@/lib/villes-formation";
import { formations } from "@/lib/formations";

export const metadata = constructMetadata({
  title: "Formation IA : 11 villes, France et Maroc",
  description: "Formation IA en entreprise dans 11 villes, France et Maroc : Paris, Lyon, Marseille, Casablanca. En présentiel dans vos locaux, sur vos cas d'usage réels.",
  path: "/formation-ia",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Formation IA par ville",
      item: `${siteConfig.url}/formation-ia`,
    },
  ],
};

export default function FormationVillesPage() {
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
            <Link
              href="/formation-ia-entreprise"
              className="hover:text-foreground"
            >
              Formation IA
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Par ville</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Présentiel partout en France et au Maroc
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-5xl">
              Formation IA{" "}
              <span className="text-primary">près de chez vous</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Nos formateurs interviennent en présentiel dans vos locaux, dans
              les grandes métropoles françaises et au Maroc. Chaque page ville
              détaille le tissu économique local, nos références et les
              programmes les plus demandés dans la région.
            </p>
          </div>
        </div>
      </section>

      {/* Grille des villes */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {villesFormation.map((v, i) => (
            <ScrollReveal key={v.slug} delay={(i % 3) * 0.06} className="flex">
              <Link
                href={`/formation-ia/${v.slug}`}
                className="group flex flex-1 flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary">
                  <MapPin className="size-3" />
                  {v.region}
                </span>
                <h2 className="mt-3 text-xl font-semibold text-foreground">
                  Formation IA {v.ville}
                </h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {v.tissuEco[0].split(" : ")[0]}
                  {", en présentiel dans vos locaux."}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                  Voir la page {v.ville} <ArrowRight className="size-4" />
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Votre ville n&apos;est pas dans la liste ? Nous intervenons partout en
          France et au Maroc, sur place ou à distance.{" "}
          <a
            href="/contact"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Parlons de votre projet
          </a>
          .
        </p>
      </section>

      {/* Les programmes */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <ScrollReveal>
            <span className="text-sm font-medium text-primary">
              / Les programmes
            </span>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              Six formations, disponibles dans chaque ville
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {formations.map((f, i) => (
              <ScrollReveal key={f.slug} delay={i * 0.05} className="flex">
                <Link
                  href={`/formation-ia-entreprise/${f.slug}`}
                  className="group flex flex-1 flex-col rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                >
                  <span className="text-xs font-medium text-primary">
                    {f.categorie}
                  </span>
                  <h3 className="mt-1 text-sm font-semibold text-foreground">
                    {f.name}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-primary transition-all group-hover:gap-2">
                    Découvrir <ArrowRight className="size-3" />
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Former vos équipes, où que vous soyez ?"
        subtitle="30 minutes pour analyser vos besoins et identifier le bon format, que vous travailliez avec nous ou non."
        primaryCta={{
          label: "Réserver un diagnostic gratuit",
          href: bookingUrl,
        }}
        secondaryCta={{
          label: "Voir le catalogue complet",
          href: "/formation-ia-entreprise",
        }}
      />
    </>
  );
}
