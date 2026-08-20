import Link from "next/link";
import { ArrowRight, Check, Database } from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import { DataSilos } from "@/components/sections/services/data-silos";
import { DataLiveReport } from "@/components/sections/services/data-live-report";
import {
  ServicePage,
  type ServiceFaqItem,
} from "@/components/shared/service-page";
import { siteConfig } from "@/lib/site-config";
import { DATA_PLATFORM } from "@/lib/offer-pages/data-platform-locale";
import type { Locale } from "@/lib/i18n";

/**
 * Gabarit partagé de la page Plateforme Data & IA, pour les deux langues.
 *
 * Extrait de `(fr)/plateforme-data-ia/page.tsx`. Les quatre sous-sections
 * (déroulé, cas, livrables, suite) étaient des composants locaux avec leur
 * copy en dur ; elles prennent maintenant leur contenu en argument.
 *
 * Les trois visuels (`DataSilos`, `DataLiveReport`) portaient eux aussi des
 * libellés français en dur : ils prennent désormais la locale.
 */

function StepsSection({
  items,
}: {
  items: DataPlatformSteps;
}) {
  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((step) => (
        <div key={step.number} className="border-t border-border pt-6">
          <span className="text-5xl font-bold leading-none text-primary/15">
            {step.number}
          </span>
          <h3 className="mt-4 text-xl font-semibold text-foreground">
            {step.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {step.description}
          </p>
        </div>
      ))}
    </div>
  );
}

type DataPlatformSteps =
  (typeof DATA_PLATFORM)["fr"]["steps"]["items"];

function CaseSection({
  content,
}: {
  content: (typeof DATA_PLATFORM)["fr"]["caseStudy"];
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="rounded-2xl border border-border bg-white p-8 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">
          {content.kicker}
        </p>
        <h3 className="mt-3 text-xl font-semibold leading-snug text-foreground">
          {content.headline}
        </h3>
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">
          {content.body}
        </p>
        <p className="mt-4 flex items-center gap-2 text-sm font-medium text-primary">
          <Database className="size-4" />
          {content.footnote}
        </p>
      </div>
    </div>
  );
}

function DeliverablesSection({ items }: { items: readonly string[] }) {
  return (
    <div className="mx-auto max-w-3xl">
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Check className="size-3 text-primary" />
            </span>
            <span className="text-base leading-relaxed text-foreground">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NextSection({
  content,
}: {
  content: (typeof DATA_PLATFORM)["fr"]["next"];
}) {
  return (
    <div className="mx-auto max-w-3xl">
      <div className="space-y-6 text-lg leading-relaxed text-muted-foreground">
        {content.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      <div className="mt-10 text-center">
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

export function DataPlatformPage({ locale }: { locale: Locale }) {
  const c = DATA_PLATFORM[locale];
  const isEn = locale === "en";
  const pageUrl = `${siteConfig.url}${isEn ? "/en/enterprise-data-platform" : "/plateforme-data-ia"}`;

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
        heroIntensity="normal"
        badge={c.hero.badge}
        h1={
          <>
            {c.hero.h1Lead}{" "}
            <span className="text-primary sm:whitespace-nowrap">
              {c.hero.h1Highlight}
            </span>
          </>
        }
        intro={c.hero.intro}
        heroStats={c.hero.stats.map((stat) => ({ ...stat }))}
        proof={{
          content: <DataLiveReport locale={locale} />,
          caption: c.hero.proofCaption,
        }}
        sections={[
          {
            badge: c.silos.badge,
            title: c.silos.title,
            description: c.silos.description,
            content: <DataSilos locale={locale} />,
          },
          {
            badge: c.steps.badge,
            title: c.steps.title,
            description: c.steps.description,
            content: <StepsSection items={c.steps.items} />,
          },
          {
            badge: c.caseStudy.badge,
            title: c.caseStudy.title,
            content: <CaseSection content={c.caseStudy} />,
          },
          {
            badge: c.deliverables.badge,
            title: c.deliverables.title,
            content: <DeliverablesSection items={c.deliverables.items} />,
          },
          {
            badge: c.next.badge,
            title: c.next.title,
            content: <NextSection content={c.next} />,
          },
        ]}
        faq={faq}
        faqTitle={c.faq.title}
        relatedArticles={c.related.map((item) => ({ ...item }))}
        cta={{ title: c.cta.title, subtitle: c.cta.subtitle, label: c.cta.label }}
      />
    </>
  );
}
