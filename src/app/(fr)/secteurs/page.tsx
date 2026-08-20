import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { CTASection } from "@/components/shared/cta-section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { PageHeroBackground } from "@/components/motion/page-hero-background";
import { PremiumCard } from "@/components/motion/premium-card";
import { siteConfig, bookingUrl } from "@/lib/site-config";
import { secteurs } from "@/lib/secteurs";

export const metadata = constructMetadata({
  title: "Transformation IA par secteur",
  description: "L'IA appliquée à votre secteur, pas en général : agences, TPE/PME, santé, ESN, conseil, hôtellerie, banque. Cas d'usage réels et références clients par métier.",
  path: "/secteurs",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Secteurs",
      item: `${siteConfig.url}/secteurs`,
    },
  ],
};

export default function SecteursPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <PageHeroBackground intensity="subtle" />
        <div className="hero-padding relative z-10 mx-auto max-w-6xl px-6">
          <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Accueil
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Secteurs</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Par secteur
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-5xl">
              L&apos;IA appliquée à <span className="text-primary">votre métier</span>
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              Les cas d&apos;usage qui comptent ne sont pas les mêmes dans une
              agence de création, une PME industrielle ou un laboratoire. Chaque
              page ci-dessous part de votre réalité : vos douleurs, vos cas
              d&apos;usage, nos références dans votre secteur.
            </p>
          </div>
        </div>
      </section>

      {/* Les 3 secteurs */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {secteurs.map((s, i) => (
            <ScrollReveal key={s.slug} delay={i * 0.08} className="flex">
              <PremiumCard className="flex-1 bg-background [&>div:last-child]:h-full">
                <Link
                  href={`/secteurs/${s.slug}`}
                  className="group flex h-full flex-col rounded-2xl p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                >
                <div className="mb-5 flex h-20 items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={s.illustration.src}
                    alt={s.illustration.alt}
                    loading="lazy"
                    className="h-20 w-auto object-contain"
                  />
                </div>
                <span className="text-xs font-medium text-primary">{s.badge}</span>
                <h2 className="mt-1 text-xl font-semibold text-foreground">
                  {s.nom}
                </h2>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {s.intro.split(". ")[1] ?? s.intro}
                </p>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                  Voir les cas d&apos;usage <ArrowRight className="size-4" />
                </span>
                </Link>
              </PremiumCard>
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Votre secteur n&apos;est pas dans la liste ? Nous intervenons aussi dans
          l&apos;industrie, la finance, le retail et le secteur public.{" "}
          <a
            href="/contact"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Parlons de votre contexte
          </a>
          .
        </p>
      </section>

      <CTASection
        title="Et dans votre secteur, l'IA change quoi ?"
        subtitle="30 minutes pour cartographier vos cas d'usage prioritaires, que vous travailliez avec nous ou non."
        primaryCta={{ label: "Réserver un diagnostic gratuit", href: bookingUrl }}
        secondaryCta={{
          label: "Voir les formations",
          href: "/formation-ia-entreprise",
        }}
      />
    </>
  );
}
