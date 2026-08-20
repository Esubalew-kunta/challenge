import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTASection } from "@/components/shared/cta-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { RelatedContent } from "@/components/shared/related-content";
import {
  caseStudies,
  getCaseStudy,
  getPublishedCaseStudies,
} from "@/lib/case-studies";
import { siteConfig } from "@/lib/site-config";

type PageProps = {
  params: Promise<{ slug: string }>;
};

/**
 * Décompose une valeur de métrique ("~750", "100%", "4 500") en cible
 * numérique + préfixe/suffixe pour le compteur animé. Retourne null si la
 * valeur n'est pas numérique : elle est alors affichée en statique.
 */
function parseMetricValue(value: string) {
  const match = value.match(/^(\D*?)([\d\s ]+(?:[.,]\d+)?)(\D*)$/);
  if (!match) return null;
  const raw = match[2].replace(/[\s ]/g, "").replace(",", ".");
  const target = Number(raw);
  if (Number.isNaN(target)) return null;
  const decimals = raw.includes(".") ? raw.split(".")[1].length : 0;
  return { prefix: match[1], target, suffix: match[3], decimals };
}

export function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) return {};

  const metadata = constructMetadata({
    title: caseStudy.title,
    description: caseStudy.seoDescription,
    path: `/etudes-de-cas/${caseStudy.slug}`,
  });

  // Les études de cas restent hors index tant que les validations client
  // (noms, chiffres, témoignages) ne sont pas obtenues.
  if (caseStudy.status === "draft") {
    return { ...metadata, robots: { index: false, follow: false } };
  }
  return metadata;
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const caseStudy = getCaseStudy(slug);
  if (!caseStudy) notFound();

  // Maillage : 2 autres études de cas publiées + pages piliers pertinentes.
  const relatedCases = getPublishedCaseStudies()
    .filter((c) => c.slug !== caseStudy.slug)
    .slice(0, 2)
    .map((c) => ({
      title: c.cardTitle,
      href: `/etudes-de-cas/${c.slug}`,
      description: c.metrics[0]?.label ?? c.sector,
    }));
  const relatedLinks = [
    ...relatedCases,
    {
      title: "Transformation IA",
      href: "/ai-transformation",
      description:
        "L'offre complète : audit, build et formation, de A à Z, en 3 phases.",
    },
    {
      title: "AI Operating System",
      href: "/ai-operating-system",
      description:
        "L'outil unique qui remplace les fichiers Excel : leads, delivery, pilotage.",
    },
  ];

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
      {
        "@type": "ListItem",
        position: 2,
        name: "Études de cas",
        item: `${siteConfig.url}/etudes-de-cas`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: caseStudy.cardTitle,
        item: `${siteConfig.url}/etudes-de-cas/${caseStudy.slug}`,
      },
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: caseStudy.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: caseStudy.title,
    description: caseStudy.tldr,
    about: caseStudy.tags,
    author: {
      "@type": "Organization",
      name: "AI Makers",
      url: siteConfig.url,
    },
    publisher: {
      "@type": "Organization",
      name: "AI Makers",
      url: siteConfig.url,
    },
    mainEntityOfPage: `${siteConfig.url}/etudes-de-cas/${caseStudy.slug}`,
  };

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />
      <JsonLd data={articleSchema} />

      {caseStudy.status === "draft" && (
        <div className="border-b border-amber-200 bg-amber-50 px-4 py-2.5 text-center text-sm text-amber-800">
          Version de travail : chiffres et visuels en cours de validation avec le client.
        </div>
      )}

      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              href="/etudes-de-cas"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              ← Toutes les études de cas
            </Link>
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {caseStudy.sector}
              </span>
              {caseStudy.inProgress && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-surface px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Mission en cours, résultats en cours de mesure
                </span>
              )}
            </div>
            <h1 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {caseStudy.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              {caseStudy.tldr}
            </p>
            <p className="mt-4 text-sm text-muted-foreground">{caseStudy.period}</p>
          </ScrollReveal>

          {/* Métriques : compteurs animés (SSR = valeur finale) */}
          <ScrollReveal>
            <div className="mt-12 grid grid-cols-1 gap-8 rounded-2xl border border-border bg-surface p-8 sm:grid-cols-3">
              {caseStudy.metrics.map((metric) => {
                const parsed = parseMetricValue(metric.value);
                if (parsed) {
                  return (
                    <AnimatedCounter
                      key={metric.label}
                      target={parsed.target}
                      prefix={parsed.prefix}
                      suffix={parsed.suffix}
                      decimals={parsed.decimals}
                      label={metric.label}
                    />
                  );
                }
                return (
                  <div key={metric.label} className="text-center">
                    <p className="text-4xl font-bold md:text-5xl">
                      <span className="text-gradient-blue">{metric.value}</span>
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {metric.label}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Avant */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Avant
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              La situation de départ
            </h2>
            <ul className="mt-8 space-y-4">
              {caseStudy.before.map((item) => (
                <li key={item} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300" />
                  {item}
                </li>
              ))}
            </ul>
          </ScrollReveal>
        </div>
      </section>

      {/* Systèmes */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Après
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Ce qu'on a construit
            </h2>
          </ScrollReveal>
          <div className="mt-10 space-y-8">
            {caseStudy.systems.map((system, i) => (
              <ScrollReveal key={system.title}>
                <div className="rounded-2xl border border-border bg-white p-8">
                  <div className="flex items-start gap-4">
                    <span className="text-sm font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-foreground">
                        {system.title}
                      </h3>
                      <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                        {system.description}
                      </p>
                      {system.image ? (
                        <div className="mt-6">
                          <div className="overflow-hidden rounded-xl border border-border bg-white shadow-[0_24px_60px_-24px_rgba(15,23,42,0.3)] transition-shadow duration-300 hover:shadow-[0_28px_70px_-24px_rgba(37,99,235,0.35)]">
                            <div className="flex items-center gap-1.5 border-b border-border bg-surface px-4 py-2.5">
                              <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                              <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                              <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                            </div>
                            <Image
                              src={system.image.src}
                              alt={system.image.alt}
                              width={system.image.width}
                              height={system.image.height}
                              className="w-full"
                              sizes="(max-width: 896px) 100vw, 800px"
                            />
                          </div>
                          {system.image.note && (
                            <p className="mt-2.5 text-xs italic text-slate-400">
                              {system.image.note}
                            </p>
                          )}
                        </div>
                      ) : (
                        system.visual && (
                          <div className="mt-5 flex items-center justify-center rounded-xl border border-dashed border-slate-300 bg-surface px-6 py-10 text-center">
                            <p className="text-sm text-muted-foreground">
                              <span className="mb-1 block text-lg">📸</span>
                              {system.visual}
                              <span className="mt-1 block text-xs text-slate-400">
                                Visuel en cours d'ajout
                              </span>
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Comment */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Comment
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Le déroulé de la mission
            </h2>
            <ol className="mt-8 space-y-5">
              {caseStudy.how.map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                    {i + 1}
                  </span>
                  <p className="pt-0.5 text-[15px] leading-relaxed text-muted-foreground">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-12 rounded-2xl border border-primary/15 bg-primary/[0.04] p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-primary">
                Ce qu'on a appris
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-foreground">
                {caseStudy.learned}
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Témoignage */}
      {caseStudy.testimonial && (
        <section className="section-padding bg-background">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <ScrollReveal>
              <blockquote className="text-xl font-medium leading-relaxed text-foreground sm:text-2xl">
                « {caseStudy.testimonial.quote} »
              </blockquote>
              <p className="mt-6 text-sm font-semibold text-foreground">
                {caseStudy.testimonial.author}
              </p>
              <p className="text-sm text-muted-foreground">
                {caseStudy.testimonial.role}
              </p>
              {caseStudy.testimonial.pending && (
                <p className="mt-3 text-xs italic text-slate-400">
                  Témoignage en cours de validation
                </p>
              )}
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Stack + FAQ */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Stack utilisée
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {caseStudy.stack.map((tool) => (
                <span
                  key={tool}
                  className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tool}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <h2 className="mt-16 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
              Les questions qu'on nous pose sur ce type de mission
            </h2>
            <FAQAccordion items={caseStudy.faq} className="mt-6" />
          </ScrollReveal>
        </div>
      </section>

      <RelatedContent links={relatedLinks} background="bg-background" />

      <CTASection
        title="Obtenez les mêmes résultats"
        subtitle="30 minutes pour analyser vos workflows et identifier vos 3 premiers quick wins IA. Gratuit, sans engagement."
        primaryCta={{
          label: "Réserver mon diagnostic gratuit",
          href: "/contact",
        }}
      />
    </>
  );
}
