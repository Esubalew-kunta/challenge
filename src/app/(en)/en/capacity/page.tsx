import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTASection } from "@/components/shared/cta-section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { alternateFor } from "@/lib/i18n";

/**
 * /en/capacity — équivalent anglais de /capacite.
 *
 * Contenu repris du master `[EN] website-content/capacite/capacite.md`, champ
 * par champ. Aucune reformulation libre : ce que dit le master est ce qui est
 * rendu. Page choisie comme première tranche EN parce qu'elle ne porte aucun
 * `[to validate]` — ni chiffre non sourcé, ni témoignage à faire approuver.
 *
 * Le gabarit (structure, classes, animations) est copié de la page FR : à
 * terme, l'idéal serait un composant partagé prenant le contenu en props,
 * mais l'extraire maintenant, avant que d'autres pages EN existent, reviendrait
 * à généraliser sur un seul cas.
 */

// Les liens pointent vers l'équivalent EN quand il existe, sinon vers le FR.
// `alternateFor` ne renvoie une route EN que si elle est dans EN_PUBLISHED :
// tant que /en/contact n'est pas livrée, on envoie sur /contact plutôt que sur
// un 404. Le lien se met à niveau tout seul le jour où la page EN sort.
const contactHref = alternateFor("/contact", "en") ?? "/contact";

export const metadata = constructMetadata({
  // Le gabarit du layout ajoute « | AI Makers » : ne pas le réécrire ici.
  title: "3 New Clients a Month, Maximum",
  description:
    "Every AI Makers client gets a dedicated AI engineer, onboarded two weeks before kick-off — so we cap it at three new clients a month.",
  path: "/en/capacity",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: `${siteConfig.url}/en` },
    {
      "@type": "ListItem",
      position: 2,
      name: "Capacity",
      item: `${siteConfig.url}/en/capacity`,
    },
  ],
};

const benefits = [
  {
    number: "01",
    title: "Your engineer knows your business before they start",
    description:
      "That's what the two weeks of onboarding are for: your sector, your tools, your vocabulary, your constraints. At kick-off, they're not discovering anything — they're executing. You're not paying someone to learn your business on your time.",
  },
  {
    number: "02",
    title: "No stopgap freelancer, no shared team",
    description:
      "Your engineer works for you, not for ten accounts in parallel. Nobody swaps them out at short notice depending on who's free that week. That's the difference between an AI department and a one-off service.",
  },
  {
    number: "03",
    title: "The commitments stay keepable",
    description:
      "One referent engineer per client, impact measured against a KPI, full ownership of everything we build: these commitments only hold because the load is controlled. Taking on more clients would mean promising what we can no longer honour.",
  },
];

export default function CapacityPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                <Users className="size-3.5" />
                Limited capacity
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Three new clients a month. Maximum.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                This isn&apos;t manufactured scarcity. It&apos;s a mechanical
                limit of our model, and it&apos;s exactly what makes it
                reliable.
              </p>
              <div className="mt-9 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="btn-gradient group h-13 cursor-pointer rounded-lg px-8 text-base font-semibold shadow-sm"
                >
                  <Link href={contactHref}>
                    Check my availability window
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The real reason */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              The real reason
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl">
              Every client mobilises a dedicated AI engineer. We can&apos;t
              onboard more than three a month properly.
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-300 md:text-lg">
              <p>
                When you sign, an AI engineer is assigned to your engagement —
                to you, not to a pool of accounts. Before kick-off even starts,
                they spend two weeks onboarding on your sector: your processes,
                your tools, your market, your business constraints.
              </p>
              <p>
                That onboarding is the bottleneck. It takes senior time and real
                preparation. We can&apos;t do it properly for more than three
                new clients in parallel each month. Onboarding a fourth one well
                takes senior time we don&apos;t have to spare.
              </p>
              <p>
                Past that limit, the mechanism breaks: engineers arrive on the
                engagement without knowing the ground, quality drops, and the
                commitments written into our contracts become impossible to keep.
                We&apos;d rather turn a client down than let down the ones
                who&apos;ve already signed.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* What it changes for you */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                What it changes for you
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                A constraint for us. Three advantages for you.
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 max-w-5xl space-y-14 md:space-y-16">
            {benefits.map((item, i) => (
              <ScrollReveal key={item.number} delay={i * 0.05}>
                <div className="grid grid-cols-1 gap-4 border-t border-border pt-8 md:grid-cols-[auto_1fr] md:gap-12">
                  <span className="text-6xl font-bold leading-none text-primary/15 sm:text-7xl md:w-28">
                    {item.number}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* How to reserve a window */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                How to reserve a window
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                The free diagnostic is also for this
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                The 30-minute diagnostic isn&apos;t just a first conversation.
                It&apos;s how we check the next available window, scope the
                engagement upfront and, if you move ahead, start your
                engineer&apos;s onboarding two weeks before kick-off. The
                earlier you scope, the sooner your window arrives.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        locale="en"
        title="Check my availability window"
        subtitle="30 minutes to analyse your workflows, scope the engagement and find out the next open window."
        primaryCta={{
          label: "Book my free diagnostic",
          href: contactHref,
        }}
      />
    </>
  );
}
