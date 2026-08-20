import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { JsonLd } from "@/components/shared/json-ld";
import { PageHeroBackground } from "@/components/motion/page-hero-background";
import { t } from "@/lib/ui-strings";
import { siteConfig } from "@/lib/site-config";
import {
  automationProcessFaq,
  automationProcessHero,
  automationProcessSchema,
  automationProcessSections,
  type ProcessBlock,
  type ProcessSection,
} from "@/lib/offer-pages/ai-automation-process";

/**
 * /automatisation-ia-workflow — gabarit propre à la page française.
 *
 * Cette page est du texte long : elle ne passe pas par `ServicePage`, dont le
 * hero impose une stat animée, une bande de preuve et un CTA final génériques.
 * Elle réutilise en revanche les mêmes primitives (fond de hero, ScrollReveal,
 * FAQAccordion, JsonLd, Button) et les mêmes classes de section, donc le
 * système visuel ne change pas. `ServicePage` n'est pas modifié : les deux
 * autres pages qui l'utilisent ne bougent pas.
 */

const PAGE_PATH = "/automatisation-ia-workflow";

function Prose({ blocks }: { blocks: readonly ProcessBlock[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
      {blocks.map((block, i) => {
        switch (block.kind) {
          case "p":
            return <p key={i}>{block.text}</p>;
          case "pLink":
            return (
              <p key={i}>
                {block.lead}
                <Link
                  href={block.link.href}
                  className="font-semibold text-primary underline underline-offset-4 hover:no-underline"
                >
                  {block.link.label}
                </Link>
                {block.rest}
              </p>
            );
          case "h3":
            return (
              <h3
                key={i}
                className="pt-2 text-xl font-semibold text-foreground"
              >
                {block.text}
              </h3>
            );
          case "ul":
            return (
              <ul key={i} className="space-y-3 pl-1">
                {block.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span
                      aria-hidden="true"
                      className="mt-2.5 size-1.5 shrink-0 rounded-full bg-primary"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i} className="space-y-3">
                {block.items.map((item, n) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary">
                      {n + 1}
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            );
          case "cards":
            return (
              <div
                key={i}
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:-mx-24"
              >
                {block.items.map((card) => (
                  <div
                    key={card.number}
                    className="rounded-2xl border border-border bg-white p-8"
                  >
                    <span className="text-4xl font-bold leading-none text-primary/15">
                      {card.number}
                    </span>
                    <h3 className="mt-4 text-lg font-semibold text-foreground">
                      {card.title}
                    </h3>
                    <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground">
                      {card.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </div>
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
        }
      })}
    </div>
  );
}

function Section({ section, index }: { section: ProcessSection; index: number }) {
  return (
    <section
      className={`section-padding ${index % 2 === 0 ? "bg-white" : "bg-background"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
              {section.badge}
            </span>
            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
              {section.title}
            </h2>
            {section.description && (
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                {section.description}
              </p>
            )}
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="mt-12">
            <Prose blocks={section.blocks} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

export function AiAutomationProcessPage() {
  const s = t("fr");
  const pageUrl = `${siteConfig.url}${PAGE_PATH}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: automationProcessSchema.breadcrumbHome,
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: automationProcessSchema.breadcrumbCurrent,
        item: pageUrl,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: automationProcessSchema.serviceName,
    serviceType: automationProcessSchema.serviceType,
    description: automationProcessSchema.serviceDescription,
    provider: {
      "@type": "Organization",
      name: "AI Makers",
      url: siteConfig.url,
    },
    areaServed: [...automationProcessSchema.areaServed],
    url: pageUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: automationProcessFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  // Les sections alternent blanc/fond ; la FAQ prend la couleur suivante pour
  // que le rythme ne casse pas.
  const faqBg =
    automationProcessSections.length % 2 === 0 ? "bg-white" : "bg-background";

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <PageHeroBackground intensity="subtle" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 sm:pt-28 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {automationProcessHero.badge}
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                {automationProcessHero.h1Lead}{" "}
                <span className="text-primary">
                  {automationProcessHero.h1Highlight}
                </span>
              </h1>
              <div className="mt-6 space-y-5 text-left text-lg leading-relaxed text-muted-foreground">
                {automationProcessHero.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-9 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="btn-gradient group h-13 cursor-pointer rounded-lg px-8 text-base font-semibold shadow-sm"
                >
                  <Link href="/contact">
                    {automationProcessHero.ctaLabel}
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {automationProcessSections.map((section, i) => (
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
                {automationProcessFaq.title}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-12">
              <FAQAccordion items={automationProcessFaq.items.map((i) => ({ ...i }))} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
