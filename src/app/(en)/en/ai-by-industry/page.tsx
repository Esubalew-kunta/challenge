import Link from "next/link";
import { ArrowRight, ChevronRight } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { CTASection } from "@/components/shared/cta-section";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { PageHeroBackground } from "@/components/motion/page-hero-background";
import { PremiumCard } from "@/components/motion/premium-card";
import { siteConfig, bookingUrl } from "@/lib/site-config";
import { secteursEn } from "@/lib/secteurs.en";
import { sectorHref } from "@/lib/secteurs-locale";
import { resolveEnHref } from "@/lib/en-links";
import { t } from "@/lib/ui-strings";

/**
 * /en/ai-by-industry — hub anglais des pages sectorielles.
 *
 * Le hub et ses pages filles n'ont pas le même préfixe côté anglais
 * (`/en/ai-by-industry` vs `/en/industries/*`) : c'est ce que disent les
 * masters, et ROUTE_MAP l'enregistre tel quel. Ne pas « harmoniser ».
 *
 * Contenu transcrit de `[EN] website-content/secteurs/secteurs.md`.
 */

export const metadata = constructMetadata({
  // Le gabarit du layout ajoute « | AI Makers » : ne pas le réécrire ici.
  title: "AI by industry: use cases that actually differ",
  description:
    "AI applied to your industry, not in general: agencies, SMEs, health & biotech, IT services, hospitality, banking. Real use cases and client references per sector.",
  path: "/en/ai-by-industry",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: `${siteConfig.url}/en`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Industries",
      item: `${siteConfig.url}/en/ai-by-industry`,
    },
  ],
};

export default function Page() {
  const s = t("en");
  const contactHref = resolveEnHref("/en/contact");

  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-background">
        <PageHeroBackground intensity="subtle" />
        <div className="hero-padding relative z-10 mx-auto max-w-6xl px-6">
          <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/en" className="hover:text-foreground">
              Home
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Industries</span>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              By industry
            </span>
            <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-5xl">
              AI applied to <span className="text-primary">your industry</span>,
              not in general
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              The AI use cases that pay off in a communication agency are not the
              ones that pay off in a medtech or a brokerage — the bottleneck is
              different, so the first system to build is different. A creative
              team needs volume without more headcount; a medical practice needs
              its admin back; a broker needs compliance baked in. Pick your
              sector below for the use cases, the tools, and the client work that
              actually apply to it.
            </p>
          </div>
        </div>
      </section>

      {/* Cartes secteurs */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {secteursEn.map((sec, i) => (
            <ScrollReveal key={sec.slug} delay={i * 0.08} className="flex">
              <PremiumCard className="flex-1 bg-background [&>div:last-child]:h-full">
                <Link
                  href={sectorHref("en", sec.slug)}
                  className="group flex h-full flex-col rounded-2xl p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2"
                >
                  <div className="mb-5 flex h-20 items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={sec.illustration.src}
                      alt={sec.illustration.alt}
                      loading="lazy"
                      className="h-20 w-auto object-contain"
                    />
                  </div>
                  <span className="text-xs font-medium text-primary">
                    {sec.badge}
                  </span>
                  <h2 className="mt-1 text-xl font-semibold text-foreground">
                    {sec.nom}
                  </h2>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {sec.teaser ?? sec.intro}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-primary transition-all group-hover:gap-2">
                    See the use cases <ArrowRight className="size-4" />
                  </span>
                </Link>
              </PremiumCard>
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-8 text-center text-sm text-muted-foreground">
          Your sector isn&apos;t listed? We also work in industry, finance, retail
          and the public sector.{" "}
          <a
            href={contactHref}
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            Tell us about your context
          </a>
          .
        </p>
      </section>

      <CTASection
        locale="en"
        title="And in your industry — what does AI actually change?"
        subtitle="Thirty minutes to map the use cases that fit your sector and your processes, with the engineers who build them."
        primaryCta={{ label: s.secCtaPrimary, href: bookingUrl }}
        secondaryCta={{
          label: s.secCtaSecondary,
          href: resolveEnHref("/en/ai-training-for-teams"),
        }}
      />
    </>
  );
}
