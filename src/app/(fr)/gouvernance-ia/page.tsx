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
  ShieldCheck,
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

export const metadata = constructMetadata({
  title: "Gouvernance & sécurité IA : RGPD, AI Act et vos données",
  description:
    "Gouvernance et sécurité réunies : cartographie des systèmes, charte IA, volet RGPD, l'AI Act expliqué sans dramatiser, et où vivent vos données. Les systèmes tournent dans vos comptes, pas chez nous.",
  path: "/gouvernance-ia",
});

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Accueil", item: siteConfig.url },
    {
      "@type": "ListItem",
      position: 2,
      name: "Gouvernance & sécurité IA",
      item: `${siteConfig.url}/gouvernance-ia`,
    },
  ],
};

const refusals = [
  {
    title: "Pas de décisions automatisées sur les personnes",
    detail:
      "Recrutement, évaluation, sanction : l'IA prépare l'analyse, un humain décide. Toujours. Une position cohérente avec l'AI Act, qui classe ces usages à haut risque.",
  },
  {
    title: "Pas de systèmes que vos équipes ne comprennent pas",
    detail:
      "Chaque système livré est documenté, explicable et réversible. Si on ne peut pas vous expliquer comment il décide, on ne le livre pas.",
  },
  {
    title: "Pas de données clients dans l'entraînement des modèles",
    detail:
      "Vos données servent vos systèmes, pas l'entraînement des fournisseurs. C'est configuré, écrit et vérifiable.",
  },
  {
    title: "Pas de déploiement sans humain dans la boucle",
    detail:
      "Un contenu qui part chez vos clients, un chiffre qui va au COMEX : validation humaine des sorties critiques tant que la fiabilité n'est pas prouvée sur vos cas d'usage, mesurée sur vos données. C'est le principe que nous inscrivons ensuite dans votre charte IA.",
  },
];

const milestones = [
  {
    date: "Février 2025",
    title: "Maîtrise de l'IA (article 4)",
    detail:
      "L'AI Act demande aux entreprises qui utilisent l'IA de veiller à un niveau suffisant de maîtrise de l'IA de leurs équipes. Mesures proportionnées à votre contexte, sans certification obligatoire.",
  },
  {
    date: "Août 2026",
    title: "Transparence des chatbots (article 50)",
    detail:
      "À partir du 2 août 2026, vos utilisateurs doivent savoir qu'ils interagissent avec une IA, et les contenus générés doivent être étiquetés le cas échéant. Les autorités peuvent aussi contrôler la maîtrise de l'IA à partir de cette date.",
  },
  {
    date: "Décembre 2027",
    title: "Obligations haut risque",
    detail:
      "Les obligations pour les systèmes à haut risque, notamment les usages RH comme le recrutement et l'évaluation des salariés, ont été reportées à décembre 2027 par l'omnibus de juin 2026. De la marge pour se préparer sereinement.",
  },
  {
    date: "En continu",
    title: "RGPD et recommandations CNIL",
    detail:
      "Base légale, minimisation des données, analyse d'impact (AIPD) pour les traitements à risque. La CNIL publie des fiches pratiques IA et recommande d'encadrer l'IA générative par une charte interne.",
  },
];

const deliverables = [
  {
    title: "Cartographie et classification des systèmes",
    detail:
      "Pendant l'audit, chaque système IA existant ou prévu est recensé et classé selon les catégories de risque de l'AI Act. Vous savez exactement où vous en êtes.",
  },
  {
    title: "Charte IA construite ensemble",
    detail:
      "Usages autorisés et interdits, données à ne jamais saisir, validation humaine des sorties, point de contact : le contenu que recommande la CNIL, adapté à vos équipes, dès la phase d'audit.",
  },
  {
    title: "Transparence par défaut dans les agents",
    detail:
      "Chaque chatbot et agent livré indique clairement qu'il est une IA. L'exigence de l'article 50 est intégrée dès la conception, pas ajoutée après coup.",
  },
  {
    title: "Volet RGPD de chaque déploiement",
    detail:
      "Base légale, minimisation des données et information des personnes sont traitées pour chaque système, en lien avec votre DPO quand vous en avez un.",
  },
  {
    title: "Registre des systèmes et des formations",
    detail:
      "Un registre interne documente vos systèmes IA et les actions de formation menées. C'est ce qui vous permet de démontrer votre démarche en cas de contrôle.",
  },
  {
    title: "Veille réglementaire intégrée",
    detail:
      "Le cadre bouge, on le suit pour vous. Exemple concret : l'omnibus de juin 2026 et le report des obligations haut risque ont été intégrés à nos accompagnements dès leur adoption.",
  },
];

const dataLocations = [
  {
    icon: Building2,
    title: "Vos outils",
    tag: "Chez vous",
    detail:
      "Les workflows, bases et documents vivent dans vos abonnements : votre n8n, votre Notion, votre Microsoft 365, vos clés API. Vous en gardez le contrôle et la facturation, comme le détaille notre modèle « qui paie quoi ».",
  },
  {
    icon: Cpu,
    title: "Les modèles IA",
    tag: "Via API professionnelles",
    detail:
      "Les systèmes appellent les API professionnelles d'Anthropic, d'OpenAI ou de Google. Conformément aux politiques de ces fournisseurs, les données soumises via API ne servent pas par défaut à entraîner les modèles. Nous configurons et vérifions ces réglages.",
  },
  {
    icon: Wrench,
    title: "AI Makers",
    tag: "Construit et configure",
    detail:
      "Nous concevons, construisons et configurons les systèmes dans votre environnement. Nous n'hébergeons pas vos données : pas de serveur AI Makers entre vos outils et les modèles.",
  },
];

const commitments = [
  {
    icon: Building2,
    title: "Vos comptes par défaut",
    detail:
      "Les systèmes livrés tournent par défaut dans vos comptes et vos abonnements. Si vous changez de prestataire demain, vos systèmes continuent de fonctionner chez vous.",
  },
  {
    icon: EyeOff,
    title: "Pas d'entraînement sur vos données",
    detail:
      "Les API professionnelles que nous utilisons n'entraînent pas leurs modèles sur les données soumises, conformément aux politiques des fournisseurs, configurées et vérifiées par nos soins.",
  },
  {
    icon: FileCheck,
    title: "DPA type sur demande",
    detail:
      "Un accord de traitement des données (DPA) type est disponible sur demande pour cadrer contractuellement les rôles et les responsabilités. Nous pouvons aussi travailler à partir du vôtre.",
  },
  {
    icon: KeyRound,
    title: "Propriété intellectuelle totale et réversibilité",
    detail:
      "Tout ce qui est construit pendant la mission vous appartient : systèmes, prompts, playbooks documentés. Vous pouvez tout opérer sans nous. C'est écrit dans le contrat, pas une promesse.",
  },
  {
    icon: Lock,
    title: "Accès au moindre privilège",
    detail:
      "Notre pratique par défaut : des comptes nominatifs pour chaque intervenant, des accès limités au périmètre de la mission, et une révocation des accès en fin de mission. Le tout dans vos outils, donc auditable par vos équipes.",
  },
  {
    icon: UserCheck,
    title: "Validation humaine des sorties critiques",
    detail:
      "Un contenu qui part chez vos clients ou un chiffre qui alimente une décision passe par une validation humaine tant que la fiabilité n'est pas prouvée sur vos cas d'usage. Ce principe est inscrit dans votre charte IA.",
  },
];

const securityFaqItems = [
  {
    question: "Qui a accès à nos données pendant la mission ?",
    answer:
      "Uniquement les personnes qui travaillent sur votre mission, avec des comptes nominatifs créés dans vos outils et des accès limités au périmètre nécessaire (principe du moindre privilège). Comme ces accès vivent chez vous, vos équipes peuvent les auditer, les restreindre ou les révoquer à tout moment, sans dépendre de nous.",
  },
  {
    question: "Que se passe-t-il en fin de mission ?",
    answer:
      "Les accès nominatifs de nos intervenants sont révoqués, et tout ce qui a été construit reste chez vous : les systèmes tournent dans vos comptes, les playbooks documentés vous sont remis, et la propriété intellectuelle vous revient intégralement. Vous pouvez opérer, modifier ou confier les systèmes à qui vous voulez. C'est ce que nous appelons la réversibilité.",
  },
  {
    question: "Utilisez-vous nos données pour d'autres clients ?",
    answer:
      "Non, jamais. Vos données servent vos systèmes et rien d'autre : elles ne sont ni réutilisées pour d'autres clients, ni intégrées à des bases mutualisées, ni soumises à l'entraînement des modèles. Ce que nous capitalisons entre les missions, ce sont nos méthodes et nos patterns, jamais vos données.",
  },
  {
    question: "Pouvez-vous signer notre propre DPA ou le vôtre ?",
    answer:
      "Les deux. Nous disposons d'un DPA type, disponible sur demande, que vous pouvez faire relire par vos équipes juridiques. Et si votre entreprise impose son propre modèle d'accord de traitement des données, nous l'examinons et le signons après revue. L'objectif est le même dans les deux cas : un cadre contractuel clair avant le premier accès à vos outils.",
  },
];

const governanceFaqItems = [
  {
    question: "La formation de mes équipes est-elle obligatoire ?",
    answer:
      "L'article 4 de l'AI Act demande, depuis février 2025, aux entreprises qui utilisent l'IA de veiller à un niveau suffisant de maîtrise de l'IA de leurs équipes. Ce sont des mesures proportionnées à votre contexte : il n'existe pas de certification obligatoire. Nos formations répondent à cette exigence, et nous documentons un registre interne des actions de formation pour que vous puissiez démontrer votre démarche.",
  },
  {
    question: "Mon chatbot doit-il dire qu'il est une IA ?",
    answer:
      "Oui, à partir du 2 août 2026 : l'article 50 de l'AI Act prévoit que les utilisateurs sachent qu'ils interagissent avec une IA, et que les contenus générés soient étiquetés le cas échéant. Dans les chatbots et agents que nous livrons, cette transparence est intégrée par défaut : vous n'avez rien à rattraper.",
  },
  {
    question: "Qu'est-ce qu'une charte IA et en faut-il une ?",
    answer:
      "La CNIL recommande d'encadrer l'usage de l'IA générative par une charte interne : usages autorisés et interdits, données à ne jamais saisir dans les outils, validation humaine des sorties, et un point de contact pour les questions. Ce n'est pas une obligation légale en soi, mais c'est le socle d'un usage maîtrisé. Nous la construisons avec vous dès la phase d'audit, à partir de vos usages réels.",
  },
  {
    question: "Mes cas d'usage sont-ils à haut risque ?",
    answer:
      "Dans la plupart des cas, non. Les usages business courants comme le reporting, la qualification de leads, les copilotes internes ou les synthèses relèvent du risque minimal. La vigilance porte surtout sur les usages RH : le recrutement et l'évaluation des salariés seront classés à haut risque à partir de décembre 2027. C'est précisément le rôle de la cartographie faite pendant l'audit : savoir lesquels de vos systèmes sont concernés, et lesquels ne le sont pas.",
  },
  {
    question: "Comment gérez-vous le RGPD dans les déploiements ?",
    answer:
      "Chaque déploiement comporte un volet RGPD : identification de la base légale du traitement, minimisation des données saisies et transmises aux modèles, information des personnes concernées, et analyse d'impact (AIPD) quand le traitement le justifie, comme le recommande la CNIL. Nous travaillons en lien avec votre DPO quand vous en avez un.",
  },
];

/** FAQ fusionnée : conformité d'abord, puis données et accès (ex-page Sécurité). */
const faqItems = [...governanceFaqItems, ...securityFaqItems];

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

export default function GouvernanceIaPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={faqSchema} />

      {/* Hero */}
      <section className="hero-padding bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                <ShieldCheck className="size-3.5" />
                Gouvernance &amp; sécurité
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl md:text-6xl">
                L&apos;IA en confiance : RGPD, AI Act, vos données
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                La gouvernance IA désigne l&apos;ensemble des règles, rôles et
                contrôles qui encadrent l&apos;usage de l&apos;intelligence
                artificielle dans une entreprise : conformité RGPD et AI Act,
                charte d&apos;usage, validation humaine, traçabilité. Elle va de
                pair avec une question plus concrète : où vivent vos données ?
                Les systèmes que nous livrons tournent par défaut dans vos
                comptes — nous construisons et configurons, mais nous
                n&apos;hébergeons pas vos données. Les deux volets sont réunis
                ici.
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

      {/* Ce qu'on refuse de déployer */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                Nos convictions
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Ce qu&apos;on refuse de déployer
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                La conformité est un plancher. Nos convictions passent avant.
                Quatre limites que nous appliquons à chaque déploiement, quel
                que soit le calendrier réglementaire.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-14 grid max-w-4xl grid-cols-1 gap-5 sm:grid-cols-2">
            {refusals.map((item, i) => (
              <ScrollReveal
                key={item.title}
                delay={i * 0.05}
                className="h-full"
              >
                <div className="h-full rounded-xl border border-border bg-background p-6">
                  <span className="inline-flex size-8 items-center justify-center rounded-full border border-primary/20 bg-primary/[0.06]">
                    <Ban className="size-4 text-primary/70" />
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

          <ScrollReveal delay={0.2}>
            <p className="mx-auto mt-12 max-w-2xl text-center text-base font-medium text-foreground">
              Ces limites ne freinent pas la transformation. Elles la rendent
              durable.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Où vivent vos données — repris de l'ex-page /securite (fusion 30/07/2026) */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                Le flux des données
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Où vivent vos données
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Trois acteurs, trois rôles clairement séparés. La question à
                poser à tout prestataire IA : où passent nos données, et qui
                détient les comptes ?
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

      {/* Les 6 engagements — repris de l'ex-page /securite (fusion 30/07/2026) */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                Nos engagements
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Six engagements, valables pour chaque mission
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Pas de politique de sécurité en 40 pages que personne ne lit.
                Six pratiques vérifiables, applicables dès le premier jour.
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

      {/* Timeline des échéances */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                Le calendrier
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Les échéances qui vous concernent
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                L&apos;AI Act est en vigueur depuis août 2024, avec une
                application échelonnée. Voici les jalons utiles pour une
                entreprise qui utilise l&apos;IA, sans le jargon.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-16 max-w-2xl">
            {milestones.map((milestone, i) => (
              <ScrollReveal key={milestone.date} delay={i * 0.08}>
                <div className="relative border-l-2 border-border pb-12 pl-8 last:pb-0">
                  <span className="absolute -left-[7px] top-1.5 block size-3 rounded-full border-2 border-primary bg-white" />
                  <p className="font-mono text-sm font-semibold uppercase tracking-widest text-primary">
                    {milestone.date}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-foreground">
                    {milestone.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {milestone.detail}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Ce qu'on met en place */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                Notre approche
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Ce qu&apos;on met en place chez vous
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                La conformité n&apos;est pas une mission à part. Elle est
                intégrée dans l&apos;audit et dans chaque système livré.
              </p>
            </div>
          </ScrollReveal>

          <div className="mx-auto mt-14 max-w-3xl">
            {deliverables.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.05}>
                <div className="grid grid-cols-1 gap-3 border-t border-border py-7 last:border-b sm:grid-cols-[auto_1fr] sm:gap-8">
                  <span className="font-mono text-sm font-semibold text-primary/60 sm:w-10">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Le vrai niveau de risque */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
              Sans dramatiser
            </span>
            <h2 className="mt-6 text-2xl font-bold leading-snug tracking-tight text-foreground sm:text-3xl">
              Le vrai niveau de risque, sans dramatiser
            </h2>
            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                La plupart des cas d&apos;usage business relèvent du risque
                minimal au sens de l&apos;AI Act : reporting, qualification de
                leads, copilotes internes, synthèses. Les obligations lourdes
                concernent des catégories précises, comme les usages RH de
                recrutement ou d&apos;évaluation, à partir de décembre 2027. Le
                sujet n&apos;est donc pas de tout mettre en conformité dans la
                panique : c&apos;est de savoir lesquels de vos systèmes sont
                concernés, et lesquels ne le sont pas. C&apos;est exactement le
                rôle de la cartographie réalisée pendant l&apos;audit.
              </p>
              <p className="text-sm">
                Pour situer les enjeux : l&apos;AI Act prévoit des amendes
                pouvant atteindre 15 millions d&apos;euros ou 3 % du chiffre
                d&apos;affaires pour les manquements de transparence (pour les
                PME, le montant le plus bas est retenu), et le RGPD jusqu&apos;à
                20 millions d&apos;euros ou 4 %. Raison de plus pour traiter le
                sujet posément, en amont.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-white">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center">
              <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/[0.06] px-4 py-1.5 text-xs font-medium text-primary">
                Questions fréquentes
              </span>
              <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
                Les questions que posent vos DSI, DPO et juristes
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
              Ces informations sont fournies à titre général et ne constituent
              pas un conseil juridique.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA final */}
      <CTASection
        title="Faites le point sur vos systèmes IA avant les échéances"
        subtitle="30 minutes pour analyser vos workflows. La cartographie des systèmes et la charte IA font partie de l'audit, pas d'une option en plus."
        primaryCta={{
          label: "Réserver mon diagnostic gratuit",
          href: "/contact",
        }}
      />

      <PartnerStrip />
    </>
  );
}
