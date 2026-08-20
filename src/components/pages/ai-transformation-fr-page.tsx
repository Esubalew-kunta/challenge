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
  aiTransformationFaq,
  aiTransformationHero,
  aiTransformationSchema,
  aiTransformationSections,
  type TransformationBlock,
  type TransformationSection,
} from "@/lib/offer-pages/ai-transformation-fr";

const PAGE_PATH = "/ai-transformation";

function Prose({ blocks }: { blocks: readonly TransformationBlock[] }) {
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

function Section({ section, index }: { section: TransformationSection; index: number }) {
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

export function AiTransformationFrPage() {
  const s = t("fr");
  const pageUrl = `${siteConfig.url}${PAGE_PATH}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: aiTransformationSchema.breadcrumbHome,
        item: siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: aiTransformationSchema.breadcrumbCurrent,
        item: pageUrl,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: aiTransformationSchema.serviceName,
    serviceType: aiTransformationSchema.serviceType,
    description: aiTransformationSchema.serviceDescription,
    provider: {
      "@type": "Organization",
      name: "AI Makers",
      url: siteConfig.url,
    },
    areaServed: [...aiTransformationSchema.areaServed],
    url: pageUrl,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: aiTransformationFaq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };

  const faqBg =
    aiTransformationSections.length % 2 === 0 ? "bg-white" : "bg-background";

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <JsonLd data={faqSchema} />

      <section className="relative overflow-hidden bg-background">
        <PageHeroBackground intensity="subtle" />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 sm:pt-28 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {aiTransformationHero.badge}
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                {aiTransformationHero.title}
              </h1>
              <div className="mt-6 space-y-5 text-left text-lg leading-relaxed text-muted-foreground">
                {aiTransformationHero.intro.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="btn-gradient group h-13 cursor-pointer rounded-lg px-8 text-base font-semibold shadow-sm"
                >
                  <Link href={aiTransformationHero.primaryCta.href}>
                    {aiTransformationHero.primaryCta.label}
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Link
                  href={aiTransformationHero.secondaryCta.href}
                  className="text-sm font-semibold text-primary underline underline-offset-4 hover:no-underline"
                >
                  {aiTransformationHero.secondaryCta.label}
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {aiTransformationSections.map((section, i) => (
        <Section key={section.title} section={section} index={i} />
      ))}

      <section className={`section-padding ${faqBg}`}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {s.faqBadge}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                {aiTransformationFaq.title}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-12">
              <FAQAccordion items={aiTransformationFaq.items.map((item) => ({ ...item }))} />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
