import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { CTASection } from "@/components/shared/cta-section";
import { JsonLd } from "@/components/shared/json-ld";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { LogoCarousel } from "@/components/shared/logo-carousel";
import { PageHeroBackground } from "@/components/motion/page-hero-background";
import { clientLogosFor } from "@/lib/client-logos-locale";
import { resolveEnHref } from "@/lib/en-links";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/i18n";

export type ServiceFaqItem = {
  question: string;
  answer: string;
};

export type ServiceSection = {
  badge?: string;
  title: string;
  description?: string;
  content?: React.ReactNode;
  /** Photo réelle rendue en split alterné à côté du contenu (humanise la page). */
  media?: { src: string; alt: string; caption?: string };
};

type ServiceCta = {
  title: string;
  subtitle?: string;
  label?: string;
};

export type RelatedArticle = {
  title: string;
  href: string;
  description?: string;
};

/** Stat animée sous le hero (compteur qui monte au scroll). */
export type ServiceStat = {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
};

/** Bande de preuve après le hero : photo réelle OU animation + logos clients. */
export type ServiceProof = {
  photo?: { src: string; alt: string };
  /** Contenu custom (animation) affiché à la place de la photo. */
  content?: React.ReactNode;
  caption?: string;
};

type ServicePageProps = {
  badge: string;
  h1: React.ReactNode;
  intro: string;
  sections: ServiceSection[];
  faq: ServiceFaqItem[];
  faqBadge?: string;
  faqTitle?: string;
  relatedArticles?: RelatedArticle[];
  relatedTitle?: string;
  heroStats?: ServiceStat[];
  proof?: ServiceProof;
  cta: ServiceCta;
  /** Intensité du fond animé du hero (défaut : "subtle" pour les pages template). */
  heroIntensity?: "subtle" | "normal";
  /** Langue du gabarit. Défaut "fr" : les appels FR existants ne changent pas. */
  locale?: Locale;
};

function buildFaqSchema(faq: ServiceFaqItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function ServicePage({
  badge,
  h1,
  intro,
  sections,
  faq,
  faqBadge,
  faqTitle,
  relatedArticles,
  relatedTitle,
  heroStats,
  proof,
  cta,
  heroIntensity = "subtle",
  locale = "fr",
}: ServicePageProps) {
  // Les libellés non fournis retombent sur le dictionnaire de la langue, pas
  // sur une constante française.
  const s = t(locale);
  const faqBadgeLabel = faqBadge ?? s.faqBadge;
  const faqTitleLabel = faqTitle ?? s.faqTitle;
  const relatedTitleLabel = relatedTitle ?? s.relatedTitle;
  const faqSchema = buildFaqSchema(faq);
  const faqSectionBg =
    sections.length % 2 === 0 ? "bg-white" : "bg-background";
  const relatedSectionBg = faqSectionBg === "bg-white" ? "bg-background" : "bg-white";

  return (
    <>
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-background">
        <PageHeroBackground intensity={heroIntensity} />
        <div className="relative z-10 mx-auto max-w-7xl px-4 pt-24 pb-16 sm:px-6 sm:pt-28 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {badge}
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                {h1}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground md:text-xl">
                {intro}
              </p>
              <div className="mt-9 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="btn-gradient group h-13 cursor-pointer rounded-lg px-8 text-base font-semibold shadow-sm"
                >
                  <Link href="/contact">
                    {s.bookDiagnostic}
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          {heroStats && heroStats.length > 0 && (
            <ScrollReveal delay={0.2}>
              <div className="mx-auto mt-14 flex max-w-3xl flex-col items-center justify-center gap-8 sm:flex-row sm:gap-14">
                {heroStats.map((stat) => (
                  <AnimatedCounter locale={locale}
                    key={stat.label}
                    target={stat.target}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    label={stat.label}
                  />
                ))}
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Bande de preuve : photo réelle + logos clients */}
      {proof && (
        <section className="border-y border-border bg-white">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_1.1fr]">
              <ScrollReveal>
                <figure className="overflow-hidden rounded-3xl border border-border shadow-sm">
                  {proof.content ? (
                    <div className="aspect-[4/3] w-full">{proof.content}</div>
                  ) : proof.photo ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={proof.photo.src}
                      alt={proof.photo.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                  ) : null}
                  {proof.caption && (
                    <figcaption className="bg-foreground px-5 py-3 text-sm font-medium text-white/80">
                      {proof.caption}
                    </figcaption>
                  )}
                </figure>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {s.proofKicker}
                  </p>
                  <p className="mt-3 text-lg font-medium text-foreground">
                    {s.proofText}
                  </p>
                  <div className="mt-8">
                    <LogoCarousel
                      logos={clientLogosFor(locale).slice(0, 10)}
                      locale={locale}
                    />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* Sections de contenu */}
      {sections.map((section, i) => (
        <section
          key={section.title}
          className={`section-padding ${i % 2 === 0 ? "bg-white" : "bg-background"}`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {section.media ? (
              /* Layout split alterné avec photo réelle */
              <div
                className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${
                  i % 2 === 1 ? "lg:[&>figure]:order-last" : ""
                }`}
              >
                <ScrollReveal>
                  <div>
                    {section.badge && (
                      <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                        {section.badge}
                      </span>
                    )}
                    <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                      {section.title}
                    </h2>
                    {section.description && (
                      <p className="mt-4 text-lg text-muted-foreground">
                        {section.description}
                      </p>
                    )}
                    {section.content && (
                      <div className="mt-8">{section.content}</div>
                    )}
                  </div>
                </ScrollReveal>
                <ScrollReveal delay={0.15}>
                  <figure className="overflow-hidden rounded-3xl border border-border shadow-sm">
                    <img
                      src={section.media.src}
                      alt={section.media.alt}
                      loading="lazy"
                      className="aspect-[4/3] w-full object-cover"
                    />
                    {section.media.caption && (
                      <figcaption className="bg-foreground px-5 py-3 text-sm font-medium text-white/80">
                        {section.media.caption}
                      </figcaption>
                    )}
                  </figure>
                </ScrollReveal>
              </div>
            ) : (
              <>
                <ScrollReveal>
                  <div className="mx-auto max-w-3xl text-center">
                    {section.badge && (
                      <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                        {section.badge}
                      </span>
                    )}
                    <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                      {section.title}
                    </h2>
                    {section.description && (
                      <p className="mt-4 text-lg text-muted-foreground">
                        {section.description}
                      </p>
                    )}
                  </div>
                </ScrollReveal>
                {section.content && (
                  <ScrollReveal delay={0.15}>
                    <div className="mx-auto mt-14 max-w-6xl">
                      {section.content}
                    </div>
                  </ScrollReveal>
                )}
              </>
            )}
          </div>
        </section>
      ))}

      {/* FAQ */}
      <section className={`section-padding ${faqSectionBg}`}>
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                {faqBadgeLabel}
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                {faqTitleLabel}
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="mt-12">
              <FAQAccordion items={faq} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles liés (maillage interne + GEO) */}
      {relatedArticles && relatedArticles.length > 0 && (
        <section className={`section-padding ${relatedSectionBg}`}>
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <div className="text-center">
                <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                  {s.svcResources}
                </span>
                <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                  {relatedTitleLabel}
                </h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {relatedArticles.map((article) => (
                  <Link
                    key={article.href}
                    href={article.href}
                    className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-colors hover:border-primary/30"
                  >
                    <h3 className="text-base font-semibold text-foreground transition-colors group-hover:text-primary">
                      {article.title}
                    </h3>
                    {article.description && (
                      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                        {article.description}
                      </p>
                    )}
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                      {s.svcReadArticle}
                      <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* CTA final */}
      <CTASection
        locale={locale}
        title={cta.title}
        subtitle={cta.subtitle}
        primaryCta={{
          label: cta.label ?? s.bookDiagnostic,
          // Le /contact était écrit en dur : sur une page anglaise il renvoyait
          // vers le formulaire FRANÇAIS.
          href: locale === "en" ? resolveEnHref("/en/contact") : "/contact",
        }}
      />
    </>
  );
}
