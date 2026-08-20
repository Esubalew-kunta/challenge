import Link from "next/link";
import { ArrowRight, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHeroBackground } from "@/components/motion/page-hero-background";
import { siteConfig, clientLogos } from "@/lib/site-config";
import { t } from "@/lib/ui-strings";
import type {
  LocalTrainingContent,
  TrainingBlock,
  TrainingSection,
} from "@/lib/local-training/types";

/**
 * Gabarit V2 des pages « Formation IA + ville ».
 *
 * Réutilisable : il ne connaît aucune ville en particulier, tout vient du
 * contenu passé en paramètre. Les autres villes restent sur le gabarit
 * historique de `(fr)/formation-ia/[ville]/page.tsx` tant qu'elles n'ont pas
 * de contenu local différencié — migrer une ville consiste à écrire son
 * fichier de contenu, pas à toucher ce composant.
 *
 * Les témoignages sont rendus depuis `clientLogos`, source de vérité unique :
 * la citation n'est jamais recopiée dans le contenu de la ville.
 */

function Blocks({ blocks }: { blocks: readonly TrainingBlock[] }) {
  return (
    <>
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "p":
            return (
              <p key={i} className="text-lg leading-relaxed text-muted-foreground">
                {block.text}
              </p>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-3">
                {block.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-lg leading-relaxed text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "link":
            return (
              <p key={i}>
                <Link
                  href={block.href}
                  className="group inline-flex items-center gap-1.5 text-lg font-semibold text-primary"
                >
                  {block.label}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </p>
            );
          case "source":
            return (
              <p key={i} className="text-sm">
                <span className="text-muted-foreground">Source : </span>
                <a
                  href={block.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 break-all font-medium text-primary underline underline-offset-4 hover:no-underline"
                >
                  {block.href}
                  <ExternalLink className="size-3.5 shrink-0" />
                </a>
              </p>
            );
          case "flow":
            return (
              <div key={i} className="flex flex-wrap items-center gap-2">
                {block.steps.map((step, n) => (
                  <span key={step} className="inline-flex items-center gap-2">
                    {n > 0 && (
                      <ChevronRight
                        aria-hidden="true"
                        className="size-4 text-primary"
                      />
                    )}
                    <span className="rounded-full border border-border bg-background px-4 py-1.5 text-sm font-medium text-foreground">
                      {step}
                    </span>
                  </span>
                ))}
              </div>
            );
          case "cta":
            return (
              <div key={i} className="pt-2">
                <Button
                  asChild
                  size="lg"
                  className="btn-gradient group h-13 cursor-pointer rounded-lg px-8 text-base font-semibold shadow-sm"
                >
                  <Link href={block.href}>
                    {block.label}
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            );
          case "testimonial": {
            const client = clientLogos.find((c) => c.name === block.client);
            const quote = client?.testimonial;
            if (!quote) return null;
            return (
              <div key={i} className="space-y-6">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {block.lead}
                </p>
                <figure className="rounded-2xl border border-border bg-white p-8">
                  <blockquote className="text-lg leading-relaxed text-foreground">
                    &laquo;&nbsp;{quote.quote}&nbsp;&raquo;
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={quote.photo}
                      alt={quote.author}
                      loading="lazy"
                      className="size-12 rounded-full object-cover"
                    />
                    <div className="text-sm">
                      <div className="font-semibold text-foreground">
                        {quote.author}
                      </div>
                      <div className="text-muted-foreground">{quote.role}</div>
                      <div className="text-muted-foreground">{client.name}</div>
                    </div>
                  </figcaption>
                </figure>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {block.note}
                </p>
              </div>
            );
          }
        }
      })}
    </>
  );
}

function Section({
  section,
  index,
}: {
  section: TrainingSection;
  index: number;
}) {
  return (
    <section
      className={`section-padding ${index % 2 === 0 ? "bg-white" : "bg-background"}`}
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            {section.title}
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="mt-8 space-y-6">
            {section.blocks && <Blocks blocks={section.blocks} />}
            {section.subs?.map((sub) => (
              <div key={sub.title} className="space-y-6 pt-4">
                <h3 className="text-xl font-semibold text-foreground">
                  {sub.title}
                </h3>
                <Blocks blocks={sub.blocks} />
              </div>
            ))}
            {section.after && (
              <div className="space-y-6 pt-4">
                <Blocks blocks={section.after} />
              </div>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function LocalTrainingPage({
  content,
}: {
  content: LocalTrainingContent;
}) {
  const s = t("fr");
  const pageUrl = `${siteConfig.url}/formation-ia/${content.slug}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: content.breadcrumb.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.label,
      item: `${siteConfig.url}${crumb.href === "/" ? "" : crumb.href}`,
    })),
  };

  // areaServed : la ville ET sa région. Le provider porte les adresses réelles
  // (Paris, Casablanca) — aucune adresse locale n'est fabriquée.
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: content.schema.serviceName,
    serviceType: content.schema.serviceType,
    description: content.schema.serviceDescription,
    areaServed: [
      { "@type": "City", name: content.city },
      { "@type": "AdministrativeArea", name: content.region },
    ],
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
    url: pageUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const faqBg =
    content.sections.length % 2 === 0 ? "bg-white" : "bg-background";

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <PageHeroBackground intensity="subtle" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 pt-24 pb-16 sm:px-6 sm:pt-28 lg:px-8">
          <ScrollReveal>
            <nav
              aria-label="Fil d'Ariane"
              className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground"
            >
              {content.breadcrumb.map((crumb, i) => (
                <span key={crumb.href} className="inline-flex items-center gap-1.5">
                  {i > 0 && <ChevronRight aria-hidden="true" className="size-3.5" />}
                  {i === content.breadcrumb.length - 1 ? (
                    <span className="text-foreground">{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href} className="hover:text-foreground">
                      {crumb.label}
                    </Link>
                  )}
                </span>
              ))}
            </nav>
            <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              {content.hero.h1}
            </h1>
            <div className="mt-6 space-y-5">
              {content.hero.intro.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-9">
              <Button
                asChild
                size="lg"
                className="btn-gradient group h-13 cursor-pointer rounded-lg px-8 text-base font-semibold shadow-sm"
              >
                <Link href={content.hero.cta.href}>
                  {content.hero.cta.label}
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {content.sections.map((section, i) => (
        <Section key={section.title} section={section} index={i} />
      ))}

      {/* FAQ */}
      <section className={`section-padding ${faqBg}`}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {s.faqBadge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                {content.faq.title}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-12">
              <FAQAccordion items={content.faq.items.map((item) => ({ ...item }))} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA final */}
      <section
        className={`section-padding ${faqBg === "bg-white" ? "bg-background" : "bg-white"}`}
      >
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              {content.finalCta.title}
            </h2>
            <div className="mt-6 space-y-5">
              {content.finalCta.paragraphs.map((paragraph) => (
                <p
                  key={paragraph}
                  className="text-lg leading-relaxed text-muted-foreground"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="btn-gradient group h-13 cursor-pointer rounded-lg px-8 text-base font-semibold shadow-sm"
              >
                <Link href={content.finalCta.primary.href}>
                  {content.finalCta.primary.label}
                  <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-13 cursor-pointer rounded-lg px-8 text-base font-semibold"
              >
                <Link href={content.finalCta.secondary.href}>
                  {content.finalCta.secondary.label}
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
