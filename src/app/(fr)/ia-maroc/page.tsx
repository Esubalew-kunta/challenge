import Link from "next/link";
import { ArrowRight, Building2, MapPin, ShieldCheck } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTASection } from "@/components/shared/cta-section";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata = constructMetadata({
  title: "IA Maroc : cabinet de transformation IA à Casablanca",
  description: "Cabinet de transformation IA au Maroc, bureau à Casablanca : audit, systèmes en production, formation. Conformité loi 09-08 (CNDP) et RGPD.",
  path: "/ia-maroc",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "IA au Maroc",
      item: `${siteConfig.url}/ia-maroc`,
    },
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "AI Makers Maroc",
  url: `${siteConfig.url}/ia-maroc`,
  description:
    "Cabinet de transformation IA au Maroc : audit IA, déploiement de systèmes IA en production et formation des équipes. Société de droit marocain, bureau à Casablanca.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Casablanca",
    addressCountry: "MA",
  },
  areaServed: "MA",
  availableLanguage: ["fr"],
  parentOrganization: {
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
  },
};

const pressures = [
  {
    title: "Une dynamique nationale",
    description:
      "La stratégie nationale de digitalisation pousse l'ensemble de l'économie marocaine à moderniser ses process. L'IA n'est plus un sujet de veille : c'est un chantier attendu par les directions générales.",
  },
  {
    title: "Une pression concurrentielle réelle",
    description:
      "Banques, télécoms, industrie : les secteurs les plus compétitifs du Royaume investissent déjà dans l'IA. Dans ces marchés, l'écart se creuse entre les organisations qui structurent leur transformation et celles qui attendent.",
  },
  {
    title: "Le coût d'attendre",
    description:
      "Chaque mois sans process automatisés, c'est du temps d'équipe perdu sur des tâches répétitives, pendant que les concurrents le réinvestissent. La seule question qui reste : dans quel ordre, et avec qui.",
  },
];

const phases = [
  {
    number: "01",
    name: "Audit",
    description:
      "Cartographie de vos process, scoring de maturité IA, interviews de vos équipes. Vous repartez avec une roadmap chiffrée et au minimum 3 cas d'usage à fort ROI.",
  },
  {
    number: "02",
    name: "Build",
    description:
      "Un ingénieur IA référent, onboardé sur votre secteur 2 semaines avant le kick-off, met vos premiers systèmes en production et forme vos équipes chaque semaine.",
  },
  {
    number: "03",
    name: "Scale",
    description:
      "Vos collaborateurs deviennent des champions IA autonomes. Les systèmes, playbooks et documentation vous appartiennent intégralement : zéro dépendance.",
  },
];

const faqItems = [
  {
    question: "Intervenez-vous partout au Maroc ?",
    answer:
      "Oui. Notre bureau est à Casablanca, et nous intervenons dans tout le Royaume (Rabat, Tanger, Marrakech et au-delà), sur site ou à distance selon le format de la mission. Toutes nos interventions se font en français.",
  },
  {
    question: "Facturez-vous depuis le Maroc ?",
    answer:
      "Oui. AI Makers dispose d'une société de droit marocain (SARL). Les clients marocains contractent avec notre entité locale et sont facturés au Maroc, dans le cadre juridique et fiscal marocain.",
  },
  {
    question: "Vos formations sont-elles disponibles au Maroc ?",
    answer:
      "Oui. Les programmes de formation que nous délivrons à nos clients européens sont disponibles au Maroc, animés en français, sur site ou à distance. La phase Scale de notre méthode (le programme de champions IA internes) s'applique de la même façon.",
  },
  {
    question: "Travaillez-vous avec le secteur public ?",
    answer:
      "Nous accompagnons des organisations privées et publiques. Chaque mission commence par le même diagnostic : cartographie des process, identification des cas d'usage à fort ROI, puis roadmap adaptée aux contraintes de l'organisation.",
  },
  {
    question: "Comment gérez-vous la conformité des données ?",
    answer:
      "Pour les clients marocains, nous travaillons dans le cadre de la loi 09-08 et des exigences de la CNDP. Pour les clients européens, dans le cadre du RGPD. L'hébergement des données est adapté au choix du client et défini dès le cadrage de la mission.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqItems.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function IAMarocPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="hero-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                <MapPin className="size-3.5" />
                Maroc
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                Votre partenaire IA au Maroc. Pas un cabinet français qui parle
                du Maroc.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                AI Makers est un cabinet de transformation IA avec une société
                de droit marocain et un bureau à Casablanca. Nous auditons vos
                process, mettons des systèmes IA en production et formons vos
                équipes, en français, dans tout le Royaume.
              </p>
              <div className="mt-9 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="btn-gradient group h-13 cursor-pointer rounded-lg px-8 text-base font-semibold shadow-sm"
                >
                  <Link href="/contact">
                    Réserver mon diagnostic gratuit
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Pourquoi maintenant */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                Pourquoi maintenant
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Le Maroc n&apos;attend pas. Vos concurrents non plus.
              </h2>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3">
            {pressures.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="border-t border-border pt-6">
                  <h3 className="text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Une présence réelle */}
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
            <span className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-1.5 text-xs font-medium text-blue-300">
              <Building2 className="size-3.5" />
              Une présence réelle
            </span>
            <h2 className="mt-6 text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl">
              Une société marocaine, un bureau à Casablanca. Pas une boîte aux
              lettres.
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-300 md:text-lg">
              <p>
                Beaucoup de cabinets européens « couvrent » le Maroc depuis
                Paris. Nous avons fait l&apos;inverse : une SARL de droit
                marocain, un bureau à Casablanca, et une
                équipe locale qui travaille au quotidien avec nos équipes
                opérant depuis Paris.
              </p>
              <p>
                Concrètement, ça change tout : contractualisation et
                facturation locales, interventions sur site sans logistique
                internationale, et une compréhension du terrain marocain qui ne
                s&apos;improvise pas depuis l&apos;étranger. Nos marchés
                (France, Belgique, Luxembourg, Maroc) partagent la même
                méthode, mais chaque client est servi depuis la bonne entité.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Conformité des données */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                <ShieldCheck className="size-3.5" />
                Conformité des données
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Loi 09-08 côté Maroc. RGPD côté Europe.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Un système IA qui ignore le cadre légal est un passif, pas un
                actif. La conformité est intégrée dès le cadrage.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-3">
            <ScrollReveal>
              <div className="border-t border-border pt-6">
                <h3 className="text-base font-semibold text-foreground">
                  Clients marocains
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Traitement des données personnelles dans le cadre de la loi
                  09-08 et des exigences de la CNDP.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="border-t border-border pt-6">
                <h3 className="text-base font-semibold text-foreground">
                  Clients européens
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Conformité RGPD pour toute mission impliquant des données de
                  résidents européens.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="border-t border-border pt-6">
                <h3 className="text-base font-semibold text-foreground">
                  Hébergement
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Adapté au choix du client et à ses contraintes, défini dès le
                  cadrage de la mission.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Méthode : les 3 phases */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                La méthode
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Trois phases. La même méthode qu&apos;en Europe.
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Audit, build, scale, avec la propriété totale de ce qui est
                construit.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-3">
            {phases.map((phase, i) => (
              <ScrollReveal key={phase.number} delay={i * 0.1}>
                <div className="border-t border-border pt-6">
                  <span className="text-5xl font-bold leading-none text-primary/15 sm:text-6xl">
                    {phase.number}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold text-foreground">
                    {phase.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {phase.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.2}>
            <div className="mt-14 text-center">
              <Link
                href="/ai-transformation"
                className="cursor-pointer text-sm font-medium text-primary hover:underline"
              >
                Voir le détail complet de l&apos;offre →
              </Link>
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
                Questions fréquentes
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                IA au Maroc : vos questions
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="mt-12">
              <FAQAccordion items={faqItems} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA final */}
      <CTASection
        title="Diagnostic IA gratuit avec l'équipe de Casablanca"
        subtitle="30 minutes pour analyser vos workflows et identifier vos premiers cas d'usage IA. En français, sur site ou à distance."
        primaryCta={{
          label: "Réserver mon diagnostic gratuit",
          href: "/contact",
        }}
      />
    </>
  );
}
