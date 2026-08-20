import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Building2,
  Check,
  ChevronRight,
  MapPin,
} from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { CTASection } from "@/components/shared/cta-section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { siteConfig, bookingUrl, clientLogos } from "@/lib/site-config";
import { villesFormation, getVilleFormation } from "@/lib/villes-formation";
import { formations } from "@/lib/formations";
import { getSecteur } from "@/lib/secteurs";
import { getLocalTrainingV2 } from "@/lib/local-training";
import { LocalTrainingPage } from "@/components/pages/local-training-page";

type PageProps = {
  params: Promise<{ ville: string }>;
};

export function generateStaticParams() {
  return villesFormation.map((v) => ({ ville: v.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { ville } = await params;

  // Villes migrées sur le gabarit V2 : leurs métadonnées viennent de leur
  // propre contenu. Les autres gardent exactement celles de villes-formation.
  const v2 = getLocalTrainingV2(ville);
  if (v2) {
    return constructMetadata({
      title: v2.meta.title,
      description: v2.meta.description,
      path: `/formation-ia/${v2.slug}`,
    });
  }

  const data = getVilleFormation(ville);
  if (!data) {
    return constructMetadata({
      title: "Formation IA",
      description: "Formation IA pour entreprises.",
      path: "/formation-ia-entreprise",
    });
  }
  return constructMetadata({
    title: data.metaTitle,
    description: data.metaDescription,
    path: `/formation-ia/${data.slug}`,
  });
}

export default async function VilleFormationPage({ params }: PageProps) {
  const { ville } = await params;

  // Idem pour le rendu : le gabarit V2 ne sert que les villes enregistrées.
  const v2 = getLocalTrainingV2(ville);
  if (v2) return <LocalTrainingPage content={v2} />;

  const data = getVilleFormation(ville);
  if (!data) notFound();

  const secteurLie = data.secteurLie ? getSecteur(data.secteurLie) : undefined;
  const references = clientLogos.filter((c) =>
    data.referencesLocales.includes(c.name),
  );
  const autresVilles = villesFormation.filter((v) => v.slug !== ville);

  // Maillage interne + GEO : articles liés, avec l'article dédié à la ville en tête si présent.
  const articlesGeneriques = [
    {
      title: "Meilleures formations IA pour entreprises en 2026",
      href: "/blog/meilleures-formations-ia-entreprise",
      description:
        "Le comparatif des formations IA : catalogue générique ou sur-mesure sur vos cas d'usage.",
    },
    {
      title: "Meilleures formations Claude en entreprise",
      href: "/blog/meilleures-formations-claude-entreprise",
      description:
        "Où former vos équipes à Claude en français, sur vos process réels.",
    },
  ];
  const articleVille: Record<string, { title: string; href: string; description: string }> = {
    nice: {
      title: "Meilleure formation IA à Nice en 2026",
      href: "/blog/meilleure-formation-ia-nice",
      description:
        "Le comparatif des organismes de formation IA sur la Côte d'Azur : Nice, Sophia Antipolis, Monaco.",
    },
  };
  const relatedArticles = [
    ...(articleVille[data.slug] ? [articleVille[data.slug]] : []),
    ...articlesGeneriques,
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Accueil",
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Formation IA",
        item: `${siteConfig.url}/formation-ia-entreprise`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Formation IA ${data.ville}`,
        item: `${siteConfig.url}/formation-ia/${data.slug}`,
      },
    ],
  };

  // Schema Service avec zone desservie — le signal SEO local clé
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Formation IA en entreprise",
    name: `Formation IA à ${data.ville}`,
    description: data.metaDescription,
    areaServed: {
      "@type": "City",
      name: data.ville,
    },
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
      address: [
        {
          "@type": "PostalAddress",
          streetAddress: siteConfig.addresses.paris.street,
          addressLocality: "Paris",
          postalCode: "75008",
          addressCountry: "FR",
        },
        {
          "@type": "PostalAddress",
          addressLocality: "Casablanca",
          addressCountry: "MA",
        },
      ],
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: data.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
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
            <span className="text-foreground">{data.ville}</span>
          </nav>

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              <MapPin className="size-3" />
              {data.ville} · {data.region}
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
              {data.titre}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              {data.intro}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Réserver un diagnostic gratuit
                <ArrowRight className="size-4" />
              </a>
              <Link
                href="/formation-ia-entreprise"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
              >
                Voir les 6 programmes
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tissu économique local */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <ScrollReveal>
          <span className="text-sm font-medium text-primary">
            / À {data.ville} et alentours
          </span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            Qui nous formons dans la région
          </h2>
        </ScrollReveal>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {data.tissuEco.map((item, i) => (
            <ScrollReveal key={item} delay={i * 0.08}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-border bg-background p-6">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Building2 className="size-3.5 text-primary" />
                </span>
                <p className="text-sm leading-relaxed text-foreground">
                  {item}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Modalités */}
        <ScrollReveal className="mt-8">
          <div className="rounded-2xl border border-primary/20 bg-primary/[0.04] p-8">
            <h3 className="text-base font-semibold text-foreground">
              Comment nous intervenons à {data.ville}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground">
              {data.modalites}
            </p>
          </div>
        </ScrollReveal>

        {/* Références */}
        {references.length > 0 && (
          <ScrollReveal className="mt-8">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
              <span className="text-sm font-medium text-muted-foreground">
                Ils nous font confiance :
              </span>
              {references.map((c) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={c.name}
                  src={c.img}
                  alt={c.name}
                  title={c.name}
                  loading="lazy"
                  className="h-7 w-auto object-contain opacity-90"
                />
              ))}
            </div>
          </ScrollReveal>
        )}
      </section>

      {/* Programmes */}
      <section className="border-y border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <ScrollReveal>
            <span className="text-sm font-medium text-primary">
              / Les programmes
            </span>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
              Six formations disponibles à {data.ville}
            </h2>
          </ScrollReveal>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3">
            {formations.map((f, i) => (
              <ScrollReveal key={f.slug} delay={i * 0.05} className="flex">
                <Link
                  href={`/formation-ia-entreprise/${f.slug}`}
                  className="group flex flex-1 flex-col rounded-2xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
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
          {secteurLie && (
            <ScrollReveal className="mt-8">
              <Link
                href={`/secteurs/${secteurLie.slug}`}
                className="group flex items-center justify-between gap-4 rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/40"
              >
                <div className="flex items-start gap-3">
                  <Check className="mt-0.5 size-5 shrink-0 text-primary" />
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      Vous êtes dans le secteur {secteurLie.nom.toLowerCase()} ?
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Découvrez nos cas d&apos;usage et références dédiés à
                      votre secteur.
                    </div>
                  </div>
                </div>
                <ArrowRight className="size-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" />
              </Link>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-6 py-16">
        <h2 className="text-2xl font-bold text-foreground md:text-3xl">
          Questions fréquentes : {data.ville}
        </h2>
        <div className="mt-8">
          <FAQAccordion items={[...data.faq]} />
        </div>
      </section>

      {/* Articles liés — maillage interne + GEO */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Pour aller plus loin
          </h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((article) => (
              <Link
                key={article.href}
                href={article.href}
                className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/30"
              >
                <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                  {article.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {article.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  Lire l&rsquo;article
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Autres villes */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="flex flex-wrap items-center gap-4">
            <span className="text-sm font-medium text-muted-foreground">
              Formation IA dans d&apos;autres villes :
            </span>
            {autresVilles.map((v) => (
              <Link
                key={v.slug}
                href={`/formation-ia/${v.slug}`}
                className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                {v.ville}
                <ArrowRight className="size-3.5" />
              </Link>
            ))}
            <span className="text-sm text-muted-foreground">
              Et partout en France et au Maroc.
            </span>
          </div>
        </div>
      </section>

      <CTASection
        title={`Former vos équipes à ${data.ville} ?`}
        subtitle="30 minutes pour analyser vos besoins et identifier le bon format, que vous travailliez avec nous ou non."
        primaryCta={{
          label: "Réserver un diagnostic gratuit",
          href: bookingUrl,
        }}
        secondaryCta={{
          label: "Recevoir le catalogue",
          href: "/formation-ia-entreprise#catalogue",
        }}
      />
    </>
  );
}
