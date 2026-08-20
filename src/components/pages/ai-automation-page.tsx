import {
  BarChart3,
  BellRing,
  Database,
  FileText,
  Receipt,
  UserPlus,
} from "lucide-react";
import { JsonLd } from "@/components/shared/json-ld";
import {
  ServicePage,
  type ServiceFaqItem,
} from "@/components/shared/service-page";
import { WorkflowWiring } from "@/components/sections/services/workflow-wiring";
import { AvecSansTable } from "@/components/sections/services/avec-sans-table";
import { siteConfig } from "@/lib/site-config";
import { AI_AUTOMATION } from "@/lib/offer-pages/ai-automation-locale";
import type { Locale } from "@/lib/i18n";

/**
 * Gabarit partagé de la page Automatisation IA, pour les deux langues.
 *
 * Extrait de `(fr)/automatisation-ia-workflow/page.tsx`. Les deux visuels
 * (`WorkflowWiring`, `AvecSansTable`) portaient des libellés français en dur :
 * ils prennent désormais la locale.
 */

/** Icônes : choix de gabarit, pas du contenu — elles ne se traduisent pas. */
const PROCESS_ICONS: Record<string, typeof BarChart3> = {
  reporting: BarChart3,
  data: Database,
  followup: BellRing,
  summary: FileText,
  onboarding: UserPlus,
  invoicing: Receipt,
};

function ProcessesSection({
  items,
}: {
  items: (typeof AI_AUTOMATION)["fr"]["processes"]["items"];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = PROCESS_ICONS[item.icon] ?? BarChart3;
        return (
          <div
            key={item.title}
            className="rounded-2xl border border-border bg-background p-8"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
              <Icon className="size-5 text-primary" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-foreground">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

function StepsSection({
  items,
}: {
  items: (typeof AI_AUTOMATION)["fr"]["steps"]["items"];
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

function ToolVsSystemSection({
  content,
}: {
  content: (typeof AI_AUTOMATION)["fr"]["toolVsSystem"];
}) {
  return (
    <div className="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed text-muted-foreground">
      <p>{content.paragraph1}</p>
      <p>
        {content.paragraph2Lead}
        <span className="font-semibold text-foreground">
          {content.emphasis}
        </span>
        {content.paragraph2Rest}
      </p>
      <p>{content.paragraph3}</p>
    </div>
  );
}

function StackSection({
  items,
}: {
  items: (typeof AI_AUTOMATION)["fr"]["stack"]["items"];
}) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {items.map((tool) => (
        <div
          key={tool.name}
          className="rounded-2xl border border-border bg-white p-8"
        >
          <h3 className="text-xl font-semibold text-foreground">{tool.name}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {tool.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export function AiAutomationPage({ locale }: { locale: Locale }) {
  const c = AI_AUTOMATION[locale];
  const isEn = locale === "en";
  const pageUrl = `${siteConfig.url}${isEn ? "/en/ai-automation" : "/automatisation-ia-workflow"}`;

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
            badge: c.wiring.badge,
            title: c.wiring.title,
            description: c.wiring.description,
            content: <WorkflowWiring locale={locale} />,
          },
          {
            badge: c.processes.badge,
            title: c.processes.title,
            description: c.processes.description,
            content: <ProcessesSection items={c.processes.items} />,
          },
          {
            badge: c.steps.badge,
            title: c.steps.title,
            description: c.steps.description,
            content: <StepsSection items={c.steps.items} />,
          },
          {
            badge: c.toolVsSystem.badge,
            title: c.toolVsSystem.title,
            content: <ToolVsSystemSection content={c.toolVsSystem} />,
          },
          {
            badge: c.withWithout.badge,
            title: c.withWithout.title,
            description: c.withWithout.description,
            content: (
              <AvecSansTable
                locale={locale}
                withUs={c.withWithout.withUs}
                without={c.withWithout.without}
              />
            ),
          },
          {
            badge: c.stack.badge,
            title: c.stack.title,
            description: c.stack.description,
            content: <StackSection items={c.stack.items} />,
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
