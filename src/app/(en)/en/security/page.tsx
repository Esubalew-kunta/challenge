import Link from "next/link";
import {
  ArrowRight,
  Ban,
  Building2,
  Cpu,
  EyeOff,
  FileCheck,
  KeyRound,
  Lock,
  RotateCcw,
  UserCheck,
  Wrench,
} from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTASection } from "@/components/shared/cta-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { PartnerStrip } from "@/components/shared/partner-strip";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { alternateFor } from "@/lib/i18n";

/**
 * /en/security — équivalent anglais de /securite.
 *
 * Contenu repris champ par champ du master
 * `[EN] website-content/securite/securite.md`. Aucune reformulation libre.
 *
 * Point de vigilance conservé tel quel : le master qualifie explicitement la
 * non-utilisation des données pour l'entraînement (« conformément aux
 * politiques de ces fournisseurs », « par défaut »). Cette nuance porte tout le
 * poids juridique de la page pour un acheteur ou un DPO — elle ne doit pas être
 * simplifiée en un « nous n'entraînons pas sur vos données » sec.
 */

const contactHref = alternateFor("/contact", "en") ?? "/contact";
const governanceHref = alternateFor("/gouvernance-ia", "en") ?? "/gouvernance-ia";

export const metadata = constructMetadata({
  title: "AI Data Security: Where Your Data Lives",
  description:
    "AI Makers delivers systems that run in your own accounts and keys — your data stays with you. Least-privilege access, standard DPA on request, no model training.",
  path: "/en/security",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/en` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Security & data",
      item: `${siteConfig.url}/en/security`,
    },
  ],
};

const dataLocations = [
  {
    icon: Building2,
    title: "Your tools",
    tag: "With you",
    detail:
      "Workflows, databases and documents live in your subscriptions: your n8n, your Notion, your Microsoft 365, your API keys. You keep control and billing, as our “who pays for what” model spells out.",
  },
  {
    icon: Cpu,
    title: "The AI models",
    tag: "Via professional APIs",
    detail:
      "The systems call the professional APIs of Anthropic, OpenAI or Google. In line with these providers' policies, data submitted via API is not used by default to train the models. We configure and verify these settings.",
  },
  {
    icon: Wrench,
    title: "AI Makers",
    tag: "Builds and configures",
    detail:
      "We design, build and configure the systems in your environment. We don't host your data: there's no AI Makers server between your tools and the models.",
  },
];

const commitments = [
  {
    icon: Building2,
    title: "Your accounts by default",
    detail:
      "The systems we deliver run by default in your accounts and subscriptions. If you change providers tomorrow, your systems keep working with you.",
  },
  {
    icon: EyeOff,
    title: "No training on your data",
    detail:
      "The professional APIs we use don't train their models on submitted data, in line with the providers' policies, configured and verified by us.",
  },
  {
    icon: FileCheck,
    title: "Standard DPA on request",
    detail:
      "A standard Data Processing Agreement (DPA) is available on request to frame roles and responsibilities contractually. We can also work from yours.",
  },
  {
    icon: KeyRound,
    title: "Full IP ownership and reversibility",
    detail:
      "Everything built during the engagement belongs to you: systems, prompts, documented playbooks. You can operate it all without us. It's a contractual guarantee, not a promise.",
  },
  {
    icon: Lock,
    title: "Least-privilege access",
    detail:
      "Our default practice: named accounts for each person, access limited to the engagement's scope, and access revoked at the end. All within your tools, so it's auditable by your teams.",
  },
  {
    icon: UserCheck,
    title: "Human validation of critical outputs",
    detail:
      "Content going out to your clients or a figure feeding a decision passes through human validation until reliability is proven on your use cases. This principle is written into your AI charter.",
  },
];

const faqItems = [
  {
    question: "Who has access to our data during the engagement?",
    answer:
      "Only the people working on your engagement, with named accounts created in your tools and access limited to the necessary scope (least-privilege principle). Because that access lives on your side, your teams can audit, restrict or revoke it at any time, without depending on us.",
  },
  {
    question: "What happens at the end of the engagement?",
    answer:
      "Our team's named access is revoked, and everything built stays with you: the systems run in your accounts, the documented playbooks are handed over, and intellectual property reverts to you in full. You can operate, modify or hand the systems to whoever you want. That's what we call reversibility.",
  },
  {
    question: "Do you use our data for other clients?",
    answer:
      "No, never. Your data serves your systems and nothing else: it's not reused for other clients, not merged into shared databases, and not submitted to model training. What we carry between engagements is our methods and patterns, never your data.",
  },
  {
    question: "Can you sign our own DPA, or yours?",
    answer:
      "Both. We have a standard DPA, available on request, that your legal team can review. And if your company mandates its own Data Processing Agreement, we examine it and sign after review. The goal is the same either way: a clear contractual framework before the first access to your tools.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  inLanguage: "en",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function SecurityPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                <Lock className="size-3.5" />
                Security &amp; data
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Your data never leaves your side.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                The systems we deliver run by default in your accounts: your
                n8n, Notion and Microsoft 365 subscriptions, your API keys. AI
                Makers builds and configures, but doesn&apos;t host your data.
                Here&apos;s what that means, concretely.
              </p>
              <div className="mt-9 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="btn-gradient group h-13 cursor-pointer rounded-lg px-8 text-base font-semibold shadow-sm"
                >
                  <Link href={contactHref}>
                    Talk to a technical contact
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Where your data lives */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                The data flow
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Where your data lives
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Three players, three clearly separated roles. The question to
                ask any AI provider: where does our data go, and who holds the
                accounts?
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 md:grid-cols-3">
            {dataLocations.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.08} className="h-full">
                <div className="flex h-full flex-col rounded-xl border border-border bg-background p-7">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.06]">
                    <item.icon className="size-5 text-primary" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                    {item.tag}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Six commitments */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                Our commitments
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Six commitments, valid for every engagement
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                No 40-page security policy nobody reads. Six verifiable
                practices, in place from day one.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {commitments.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.05} className="h-full">
                <div className="h-full rounded-xl border border-border bg-white p-6">
                  <span className="inline-flex size-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.06]">
                    <item.icon className="size-4.5 text-primary" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Governance cross-link */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="rounded-xl border border-border bg-background p-8 sm:p-10">
              <span className="inline-flex size-9 items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.06]">
                <Ban className="size-4.5 text-primary/70" />
              </span>
              <h2 className="mt-5 text-2xl font-bold leading-snug tracking-tight text-foreground">
                What we refuse to deploy
              </h2>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                Data security is half the subject. The other half is governance:
                no automated decisions about people, no system your teams
                don&apos;t understand, a human in the loop for critical outputs.
                These limits, along with the EU AI Act, GDPR and AI-charter
                framework, are detailed on the dedicated page.
              </p>
              <div className="mt-6">
                <Button
                  asChild
                  variant="outline"
                  className="group cursor-pointer rounded-lg"
                >
                  <Link href={governanceHref}>
                    See the AI Governance page
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div className="mt-10 flex items-start gap-4 rounded-xl border border-border bg-background p-6">
              <span className="mt-0.5 inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-primary/20 bg-primary/[0.06]">
                <RotateCcw className="size-4.5 text-primary/70" />
              </span>
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Zero dependency, by design.
                </span>{" "}
                Because the systems run in your accounts and the playbooks are
                documented on your side, the end of the engagement creates no
                rupture: the systems keep working, with or without us.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                Frequently asked questions
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                The questions CIOs and DPOs ask
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-12">
              <FAQAccordion items={faqItems} />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="mt-12 text-center text-xs text-muted-foreground">
              This page describes our practices and contractual commitments. It
              does not constitute legal advice.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        locale="en"
        title="A specific security requirement? Let's talk."
        subtitle="Vendor questionnaire, review by your IT team, a specific DPA: we respond directly to your technical and legal teams, before any commitment."
        primaryCta={{
          label: "Get in touch",
          href: contactHref,
        }}
      />

      <PartnerStrip locale="en" />
    </>
  );
}
