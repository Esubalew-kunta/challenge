import Link from "next/link";
import { ArrowRight, Users } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { CTASection } from "@/components/shared/cta-section";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata = constructMetadata({
  title: "3 nouveaux clients par mois, maximum : pourquoi notre capacité est limitée",
  description:
    "Chaque client AI Makers a un ingénieur IA référent, onboardé 2 semaines avant le kick-off. Cette capacité d'onboarding est physiquement limitée : au-delà de 3 nouveaux clients par mois, la qualité baisse.",
  path: "/capacite",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Capacité",
      item: `${siteConfig.url}/capacite`,
    },
  ],
};

const benefits = [
  {
    number: "01",
    title: "Votre ingénieur connaît votre business avant de commencer",
    description:
      "Les 2 semaines d'onboarding servent à ça : votre secteur, vos outils, votre vocabulaire, vos contraintes. Au kick-off, il ne découvre rien : il exécute. Vous ne payez pas quelqu'un pour apprendre votre métier sur votre temps.",
  },
  {
    number: "02",
    title: "Pas de freelance bouche-trou : un ingénieur référent par client",
    description:
      "Votre ingénieur travaille pour vous, pas pour dix comptes en parallèle. Personne ne le remplace au pied levé selon les disponibilités de la semaine. C'est la différence entre un département IA et une prestation.",
  },
  {
    number: "03",
    title: "Les engagements restent tenables",
    description:
      "Un ingénieur référent par client, un impact mesuré au KPI, la propriété totale de ce qui est construit : ces engagements ne tiennent que parce que la charge est maîtrisée. Accepter plus de clients, ce serait promettre ce qu'on ne peut plus honorer.",
  },
];

export default function CapacitePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />

      {/* Hero */}
      <section className="hero-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                <Users className="size-3.5" />
                Capacité limitée
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                3 nouveaux clients par mois. Maximum.
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Ce n&apos;est pas de la rareté marketing. C&apos;est une limite
                mécanique de notre modèle, et c&apos;est précisément ce qui le
                rend fiable.
              </p>
              <div className="mt-9 flex justify-center">
                <Button
                  asChild
                  size="lg"
                  className="btn-gradient group h-13 cursor-pointer rounded-lg px-8 text-base font-semibold shadow-sm"
                >
                  <Link href="/contact">
                    Vérifier ma fenêtre de disponibilité
                    <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* La vraie raison */}
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
              La vraie raison
            </p>
            <h2 className="mt-4 text-2xl font-bold leading-snug tracking-tight text-white sm:text-3xl">
              Chaque client mobilise un ingénieur IA référent. On ne peut pas en
              onboarder plus de trois par mois correctement.
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-300 md:text-lg">
              <p>
                Quand vous signez, un{" "}
                <Link
                  href="/forward-deployed-engineer"
                  className="font-medium text-blue-300 underline underline-offset-4 hover:text-white"
                >
                  ingénieur IA référent
                </Link>{" "}
                est affecté à votre mission : à vous, pas à un pool de comptes.
                Avant même le kick-off, il passe 2 semaines à s&apos;onboarder
                sur votre secteur : vos process, vos outils, votre marché, vos
                contraintes métier.
              </p>
              <p>
                Cet onboarding est le goulot d&apos;étranglement. Il demande du
                temps senior et une vraie préparation. On ne
                peut pas le faire correctement pour plus de trois nouveaux
                clients en parallèle chaque mois. C&apos;est une limite
                physique, pas un choix commercial.
              </p>
              <p>
                Au-delà de cette limite, la mécanique se casse : les ingénieurs
                arrivent en mission sans connaître le terrain et la qualité
                baisse. On préfère refuser un client que trahir ceux qui
                ont déjà signé.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Ce que ça change pour vous */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                Ce que ça change pour vous
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl md:text-5xl">
                Une contrainte pour nous. Trois avantages pour vous.
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

      {/* Comment réserver une fenêtre */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                Comment réserver une fenêtre
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Le diagnostic gratuit sert aussi à ça
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Le diagnostic de 30 minutes n&apos;est pas qu&apos;un premier
                échange. Il permet de vérifier la prochaine fenêtre disponible,
                de cadrer le périmètre en amont et, si vous avancez, de
                lancer l&apos;onboarding de votre ingénieur 2 semaines avant le
                kick-off. Plus vous cadrez tôt, plus votre fenêtre arrive vite.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA final */}
      <CTASection
        title="Vérifier ma fenêtre de disponibilité"
        subtitle="30 minutes pour analyser vos workflows, cadrer le périmètre et connaître la prochaine fenêtre ouverte."
        primaryCta={{
          label: "Réserver mon diagnostic gratuit",
          href: "/contact",
        }}
      />
    </>
  );
}
