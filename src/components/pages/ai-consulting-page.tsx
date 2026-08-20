import Link from "next/link";
import { ArrowRight, Bot, MessagesSquare, Workflow } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import {
  ServicePage,
  type ServiceFaqItem,
} from "@/components/shared/service-page";
import { OptionsComparison } from "@/components/sections/homepage/comparison-section";
import { siteConfig } from "@/lib/site-config";
import { AI_CONSULTING } from "@/lib/offer-pages/ai-consulting-locale";
import type { Locale } from "@/lib/i18n";

/**
 * Gabarit partagé de la page /agence-ia, pour les deux langues.
 *
 * Le tableau comparatif (`OptionsComparison`) est PARTAGÉ avec la home et prend
 * ses cellules dans `homepageContent.valueProp.optionsTable` : cette page ne
 * possède que l'habillage de section, jamais les cellules.
 */

/** Les icônes sont des choix de gabarit, pas du contenu : elles ne se traduisent pas. */
const BUILD_ICONS: Record<string, typeof Bot> = {
  bot: Bot,
  workflow: Workflow,
  copilot: MessagesSquare,
};

function BuildsSection({
  items,
}: {
  items: (typeof AI_CONSULTING)["fr"]["builds"]["items"];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {items.map((item) => {
        const Icon = BUILD_ICONS[item.icon] ?? Bot;
        return (
          <div
            key={item.title}
            className="rounded-2xl border border-border bg-white p-8"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
              <Icon className="size-5 text-primary" />
            </span>
            <h3 className="mt-5 text-xl font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function MethodSection({
  content,
}: {
  content: (typeof AI_CONSULTING)["fr"]["method"];
}) {
  return (
    <div>
      <div className="grid grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3">
        {content.items.map((phase) => (
          <div key={phase.number} className="border-t border-border pt-6">
            <span className="text-5xl font-bold leading-none text-primary/15">
              {phase.number}
            </span>
            <h3 className="mt-4 text-xl font-semibold text-foreground">
              {phase.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {phase.description}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          href={content.link.href}
          className="group inline-flex items-center text-base font-semibold text-primary"
        >
          {content.link.label}
          <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
}

function IcpSection({
  items,
}: {
  items: (typeof AI_CONSULTING)["fr"]["icp"]["items"];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-border bg-background p-8"
        >
          <h3 className="text-xl font-semibold text-foreground">
            {item.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export function AiConsultingPage({ locale }: { locale: Locale }) {
  const c = AI_CONSULTING[locale];
  const isEn = locale === "en";
  const pageUrl = `${siteConfig.url}${isEn ? "/en/ai-consulting" : "/agence-ia"}`;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: c.schema.breadcrumbHome,
        item: isEn ? `${siteConfig.url}/en` : siteConfig.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: c.schema.breadcrumbCurrent,
        item: pageUrl,
      },
    ],
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: c.schema.serviceName,
    serviceType: c.schema.serviceType,
    description: c.schema.serviceDescription,
    provider: {
      "@type": "Organization",
      name: "AI Makers",
      url: siteConfig.url,
    },
    areaServed: [...c.schema.areaServed],
    url: pageUrl,
  };

  const faq: ServiceFaqItem[] = c.faq.items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));

  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={serviceSchema} />
      <ServicePage
        locale={locale}
        badge={c.hero.badge}
        h1={
          <>
            {c.hero.h1Lead}{" "}
            <span className="text-primary">{c.hero.h1Highlight}</span>
          </>
        }
        intro={c.hero.intro}
        heroStats={c.hero.stats.map((stat) => ({ ...stat }))}
        proof={{
          photo: { ...c.hero.proofPhoto },
          caption: c.hero.proofCaption,
        }}
        sections={[
          {
            badge: c.comparison.badge,
            title: c.comparison.title,
            description: c.comparison.description,
            content: <OptionsComparison locale={locale} />,
          },
          {
            badge: c.builds.badge,
            title: c.builds.title,
            description: c.builds.description,
            content: <BuildsSection items={c.builds.items} />,
          },
          {
            badge: c.method.badge,
            title: c.method.title,
            description: c.method.description,
            content: <MethodSection content={c.method} />,
          },
          {
            badge: c.icp.badge,
            title: c.icp.title,
            description: c.icp.description,
            content: <IcpSection items={c.icp.items} />,
          },
        ]}
        faq={faq}
        faqTitle={c.faq.title}
        relatedArticles={c.related.map((item) => ({ ...item }))}
        cta={{ title: c.cta.title, subtitle: c.cta.subtitle }}
      />
    </>
  );
}
