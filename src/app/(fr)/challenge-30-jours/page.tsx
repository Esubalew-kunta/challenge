/**
 * Challenge 30 jours : intégrez Claude dans votre entreprise.
 *
 * Lead magnet structuré : la page capture (email pro + entreprise,
 * POST /api/lead source "challenge"), la séquence email hebdomadaire
 * est opérée via n8n (PRD Kunta). La page ne promet donc jamais
 * d'accompagnement humain : c'est un parcours guidé gratuit par email.
 */

import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  ArrowRight,
  Settings,
  FileText,
  Bot,
  BarChart3,
  CheckCircle2,
  XCircle,
} from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { siteConfig } from "@/lib/site-config";
import { ChallengeForm } from "./challenge-form";

export const metadata = constructMetadata({
  title: "Challenge 30 jours : intégrer Claude",
  description: "Un parcours gratuit de 30 jours par email pour passer de zéro à un premier agent Claude en production. Une étape par semaine, sur vos documents. Par AI Makers.",
  path: "/challenge-30-jours",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Challenge 30 jours Claude",
      item: `${siteConfig.url}/challenge-30-jours`,
    },
  ],
};

const faq = [
  {
    question: "Combien de temps ça demande chaque semaine ?",
    answer:
      "Comptez 1 à 2 heures par semaine. Chaque email arrive avec des étapes précises à dérouler : vous les appliquez sur vos propres documents et process, au moment qui vous arrange dans la semaine.",
  },
  {
    question: "Il faut un abonnement Claude payant ?",
    answer:
      "Un compte Claude suffit pour commencer. Certaines étapes du parcours, comme les Projets ou les intégrations, tirent parti d'un plan payant : les emails vous indiquent précisément à quel moment ça devient utile, et vous décidez.",
  },
  {
    question: "On peut s'arrêter en cours de route ?",
    answer:
      "Oui, à tout moment. Chaque email contient un lien de désinscription en un clic. Ce que vous avez mis en place les semaines précédentes reste chez vous et continue de fonctionner.",
  },
  {
    question: "Et après les 30 jours ?",
    answer:
      "Vous êtes libre. Vous pouvez continuer seuls avec ce que vous avez construit, ou passer à l'accompagnement AI Makers si vous voulez aller plus vite ou plus loin. Le challenge est utile dans les deux cas.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faq.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

const weeks = [
  {
    number: "Semaine 1",
    icon: Settings,
    title: "Claude configuré pour votre contexte",
    description:
      "Votre entreprise, votre vocabulaire, vos documents de référence. Claude arrête de répondre comme à tout le monde et commence à répondre comme chez vous.",
    deliverable:
      "Votre espace Claude opérationnel, adopté par 2 à 3 personnes clés.",
  },
  {
    number: "Semaine 2",
    icon: FileText,
    title: "Vos 3 premiers cas d'usage quotidiens",
    description:
      "Rédaction, synthèse, analyse : sur vos vrais documents, pas sur des exemples génériques. Vous identifiez ce qui fait gagner du temps dès cette semaine.",
    deliverable: "3 workflows répétables, documentés.",
  },
  {
    number: "Semaine 3",
    icon: Bot,
    title: "Votre premier agent",
    description:
      "Un process répétitif confié de bout en bout à Claude, avec les Projets et les intégrations. Ce n'est plus un assistant qu'on sollicite : c'est une tâche qui se fait.",
    deliverable: "Un agent qui tourne sur un vrai process.",
  },
  {
    number: "Semaine 4",
    icon: BarChart3,
    title: "Mesure et suite",
    description:
      "Combien de temps gagné, par qui, sur quoi. Vous chiffrez ce que les 3 premières semaines ont produit, et vous savez quoi construire ensuite.",
    deliverable:
      "Votre bilan chiffré et les 3 prochains cas d'usage priorisés.",
  },
];

const forWho = [
  "Dirigeants de PME et ETI qui veulent des usages concrets, pas un projet informatique",
  "Équipes qui ont testé ChatGPT ou Claude sans que rien ne change dans leurs process",
  "Entreprises qui veulent avancer par elles-mêmes, à leur rythme, avec un cadre",
];

const notForWho = [
  "Ceux qui cherchent une démo de plus, sans intention d'appliquer",
  "Ceux qui attendent un accompagnement humain : ce parcours est guidé par email, pas par un consultant",
];

export default function Challenge30JoursPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero + formulaire */}
      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <nav className="mb-8 flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-foreground">
              Accueil
            </Link>
            <ChevronRight className="size-3.5" />
            <span className="text-foreground">Challenge 30 jours Claude</span>
          </nav>

          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  Challenge gratuit
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                  <Image
                    src="/images/badges/anthropic.svg"
                    alt=""
                    width={14}
                    height={14}
                    className="h-3.5 w-3.5"
                  />
                  Par AI Makers, Partenaire Anthropic
                </span>
              </div>
              <h1 className="mt-4 text-3xl font-bold leading-tight text-foreground md:text-4xl">
                30 jours pour intégrer Claude{" "}
                <span className="text-primary">dans votre entreprise.</span>
              </h1>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                Un parcours guidé par email, une étape par semaine. Au bout :
                vos premiers usages en production, pas une liste de prompts.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-background p-8 shadow-xl">
              <h2 className="text-lg font-bold text-foreground">
                Inscrivez votre entreprise
              </h2>
              <p className="mb-6 mt-1 text-sm text-muted-foreground">
                Le premier email arrive tout de suite. Semaine 1 : Claude
                configuré pour votre contexte.
              </p>
              <ChallengeForm context="hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Le parcours : 4 semaines */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-20">
        <ScrollReveal>
          <span className="text-sm font-medium text-primary">
            / Le parcours
          </span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            4 semaines, 4 paliers, 4 livrables
          </h2>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Chaque semaine, un email avec les étapes à dérouler et un livrable
            concret à la fin. Pas de théorie : à la fin du mois, quelque chose
            tourne chez vous.
          </p>
        </ScrollReveal>

        <ol className="relative mt-10 space-y-8 border-l-2 border-border pl-8 md:pl-10">
          {weeks.map((week, index) => (
            <ScrollReveal key={week.number} delay={index * 0.08}>
              <li className="relative">
                <span className="absolute -left-[45px] flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background md:-left-[57px]">
                  <week.icon
                    className="h-4 w-4 text-primary"
                    aria-hidden="true"
                  />
                </span>
                <div className="rounded-2xl border border-border bg-background p-6">
                  <span className="font-mono text-sm font-bold text-primary">
                    {week.number}
                  </span>
                  <h3 className="mt-2 text-lg font-bold leading-snug text-foreground">
                    {week.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {week.description}
                  </p>
                  <p className="mt-4 flex items-start gap-2 rounded-xl bg-primary/5 px-4 py-3 text-sm leading-relaxed text-foreground">
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span>
                      <span className="font-semibold">Livrable : </span>
                      {week.deliverable}
                    </span>
                  </p>
                </div>
              </li>
            </ScrollReveal>
          ))}
        </ol>
      </section>

      {/* Pourquoi c'est gratuit : la rupture dark, honnêteté totale */}
      <section className="relative overflow-hidden bg-[#0F172A] py-20 md:py-28">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(37,99,235,0.15) 0%, transparent 60%)",
          }}
        />
        <div className="relative z-10 mx-auto max-w-3xl px-6">
          <ScrollReveal>
            <span className="text-sm font-medium text-blue-400">
              / Pourquoi c&apos;est gratuit
            </span>
            <h2 className="mt-2 text-2xl font-bold text-white md:text-3xl">
              On vous doit une réponse honnête.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-slate-400">
              Une partie des participants voudra aller plus vite ou plus loin :
              c&apos;est là qu&apos;on intervient. Les autres auront intégré
              Claude par eux-mêmes, et c&apos;est très bien aussi.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Pas de call obligatoire, pas de relance agressive. Le parcours est
              complet en lui-même : si vous le suivez, vous arrivez au bout avec
              un agent en production, avec ou sans nous.
            </p>
            <p className="mt-10 border-l-2 border-blue-400 pl-6 text-xl font-semibold leading-snug text-white">
              C&apos;est notre meilleure démonstration : vous voyez notre
              méthode avant de payer quoi que ce soit.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Pour qui */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <ScrollReveal>
          <span className="text-sm font-medium text-primary">/ Pour qui</span>
          <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
            Ce challenge est fait pour vous. Ou pas.
          </h2>
        </ScrollReveal>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          <ScrollReveal>
            <div className="h-full rounded-2xl border border-border bg-background p-6">
              <h3 className="text-base font-bold text-foreground">
                Pour vous si
              </h3>
              <ul className="mt-4 space-y-3">
                {forWho.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-success"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.08}>
            <div className="h-full rounded-2xl border border-border bg-muted/30 p-6">
              <h3 className="text-base font-bold text-foreground">
                Pas pour vous si
              </h3>
              <ul className="mt-4 space-y-3">
                {notForWho.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm leading-relaxed text-muted-foreground"
                  >
                    <XCircle
                      className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-6 py-16">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">
            Questions fréquentes
          </h2>
          <div className="mt-8">
            <FAQAccordion items={faq} />
          </div>
        </div>
      </section>

      {/* CTA final : rappel inscription + liens secondaires */}
      <section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <h2 className="text-2xl font-bold leading-tight text-foreground md:text-3xl">
              Dans 30 jours, votre premier agent Claude tourne. Ou pas.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              La différence, c&apos;est de commencer. Le parcours est gratuit,
              une étape par semaine, et tout ce que vous construisez reste chez
              vous.
            </p>
            <div className="mt-8 space-y-3 text-sm leading-relaxed text-muted-foreground">
              <p>
                Vous préférez former vos équipes avec nous ?{" "}
                <Link
                  href="/formation-ia-entreprise/maitriser-claude"
                  className="inline-flex items-center gap-1 font-medium text-primary underline-offset-4 hover:underline"
                >
                  Formation Maîtriser Claude en entreprise
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </p>
              <p>
                Vous voulez déléguer le déploiement de bout en bout ?{" "}
                <Link
                  href="/ai-transformation"
                  className="inline-flex items-center gap-1 font-medium text-primary underline-offset-4 hover:underline"
                >
                  Découvrir la Transformation IA
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.08}>
            <div className="rounded-2xl border border-border bg-background p-8 shadow-xl">
              <h3 className="text-lg font-bold text-foreground">
                Rejoindre le challenge
              </h3>
              <p className="mb-6 mt-1 text-sm text-muted-foreground">
                Gratuit. Un email par semaine, pendant 4 semaines.
              </p>
              <ChallengeForm context="final" />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
