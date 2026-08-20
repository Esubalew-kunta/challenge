import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { constructMetadata } from "@/lib/metadata";
import { JsonLd } from "@/components/shared/json-ld";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { FAQAccordion } from "@/components/shared/faq-accordion";
import { PageHeroBackground } from "@/components/motion/page-hero-background";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";

export const metadata = constructMetadata({
  title: "Recruter un ingénieur IA dédié (FDE)",
  description: "Besoin d’un ingénieur IA dans vos équipes ? Déployez un FDE qui travaille sur vos process, construit dans vos outils et livre des systèmes en production.",
  path: "/metiers/ingenieur-ia",
});

const steps = [
  ["Process", "Choisir un périmètre prioritaire, observer le travail réel et préciser le résultat attendu avec les personnes concernées."],
  ["Données et outils", "Cartographier les sources disponibles, les accès, les règles métier et les intégrations nécessaires."],
  ["Construction", "Construire un premier périmètre utilisable et le tester avec les futurs utilisateurs dans leurs conditions de travail."],
  ["Tests utilisateurs", "Faire passer les cas courants et les exceptions par les personnes qui exécutent le processus, puis consigner les corrections."],
  ["Production", "Déployer le système dans l’environnement retenu, traiter les exceptions et organiser son suivi."],
  ["Mesure", "Comparer le fonctionnement au résultat défini au départ, documenter les décisions et ajuster le système."],
] as const;

const outputs = [
  "Un périmètre priorisé et des critères de réussite explicites.",
  "Un système connecté aux données et outils retenus, déployé dans l’environnement convenu.",
  "Des tests et un suivi adaptés au risque et à l’usage du système.",
  "Une documentation du fonctionnement, des accès, des décisions et des points de vigilance.",
  "Un transfert aux personnes qui exploiteront ou feront évoluer ce qui a été construit.",
] as const;

const comparison = [
  ["Finalité", "Installer une capacité durable dans l’organisation", "Faire avancer un périmètre priorisé avec les équipes en place"],
  ["Encadrement", "À organiser en interne : management, revue technique et progression", "Cadre de mission, revue technique et arbitrages définis avec AI Makers"],
  ["Connaissance métier", "S’acquiert au fil de l’intégration dans l’entreprise", "Se construit pendant la cartographie et les tests avec les opérationnels"],
  ["Portefeuille de travail", "Pertinent si plusieurs systèmes justifient une capacité permanente", "Pertinent si un processus prioritaire doit être construit et intégré"],
  ["Continuité", "Le savoir reste avec le salarié et doit être documenté par l’équipe", "La documentation et les conditions de transfert sont prévues dans le périmètre"],
] as const;

const faq = [
  { question: "Quand faut-il recruter un ingénieur IA en interne ?", answer: "Le recrutement interne est cohérent lorsque le besoin est durable, que plusieurs chantiers justifient une capacité permanente et que l’entreprise peut encadrer techniquement le poste. Il faut aussi intégrer le temps nécessaire pour recruter, donner accès au contexte et constituer l’environnement de travail." },
  { question: "Quand déployer un Forward Deployed Engineer ?", answer: "Le modèle FDE est adapté lorsqu’un périmètre prioritaire doit avancer avec les métiers, que les données et outils existants imposent un travail d’intégration, ou que l’entreprise ne dispose pas encore de la capacité interne pour construire et mettre en production." },
  { question: "Que se passe-t-il au début de l’engagement ?", answer: "Le démarrage sert à choisir le processus prioritaire, rencontrer ses utilisateurs, cartographier les données et les outils, puis définir ce qui sera testé et comment le résultat sera observé. La construction commence sur ce périmètre plutôt que sur une liste générale d’idées." },
  { question: "Qui reste propriétaire de ce qui est construit ?", answer: "Le périmètre d’accès, d’hébergement, de documentation et de transfert doit être défini dans l’engagement. L’objectif présenté ici est que les équipes disposent de la documentation nécessaire pour exploiter le système et comprendre les décisions prises." },
  { question: "Quelle différence avec la page Forward Deployed Engineer ?", answer: "La page Forward Deployed Engineer définit le rôle, ses compétences et son modèle de travail. Cette page aide une entreprise à choisir entre recrutement interne et déploiement d’un FDE AI Makers, puis à préparer un engagement." },
] as const;

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Déploiement d’un ingénieur IA dédié",
  description: "Un Forward Deployed Engineer travaille avec les équipes métier pour cadrer, construire, mettre en production et documenter un système IA sur un périmètre priorisé.",
  provider: { "@type": "Organization", name: "AI Makers", url: siteConfig.url },
  url: `${siteConfig.url}/metiers/ingenieur-ia`,
};

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faq.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };

export default function IngenieurIaPage() {
  return <>
    <JsonLd data={serviceSchema} /><JsonLd data={faqSchema} />
    <section className="hero-padding relative overflow-hidden bg-background"><PageHeroBackground intensity="normal" /><div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><ScrollReveal><p className="text-sm font-semibold text-primary">Ingénieur IA dédié</p><h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">Recruter un ingénieur IA dédié, sans attendre le recrutement</h1><div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground md:text-xl"><p>Vous avez identifié des cas d’usage IA, mais personne en interne pour les transformer en systèmes qui tournent réellement. Un Forward Deployed Engineer AI Makers rejoint vos équipes, travaille dans vos outils et avance avec vos opérationnels sur un périmètre priorisé.</p><p>L’objectif est de mettre les systèmes utiles en production, documenter ce qui est construit et transférer la maîtrise aux équipes.</p></div><div className="mt-8 flex flex-wrap gap-3"><Button asChild size="lg"><Link href="/contact">Déployer un FDE dans mon équipe<ArrowRight className="ml-2 size-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link href="/forward-deployed-engineer">Comprendre le rôle du FDE</Link></Button></div></ScrollReveal></div></section>

    <section className="section-padding bg-surface"><div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8"><ScrollReveal><h2 className="text-3xl font-bold sm:text-4xl">Recruter en interne ou déployer un FDE ?</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">Décidez selon la capacité dont votre entreprise a besoin. Le recrutement installe une compétence permanente. Le déploiement d’un FDE confie un périmètre identifié à un responsable qui travaille avec le métier et l’équipe technique.</p></ScrollReveal><div className="mt-10 grid gap-5 md:grid-cols-2"><ScrollReveal><div className="h-full rounded-2xl border border-border bg-white p-7"><h3 className="text-xl font-semibold">Recruter en interne</h3><p className="mt-3 leading-relaxed text-muted-foreground">À privilégier pour une feuille de route durable, plusieurs systèmes à maintenir et une équipe capable de recruter, encadrer et faire progresser le profil.</p></div></ScrollReveal><ScrollReveal delay={.08}><div className="h-full rounded-2xl border border-primary/30 bg-primary/[.04] p-7"><h3 className="text-xl font-semibold">Déployer un FDE</h3><p className="mt-3 leading-relaxed text-muted-foreground">À envisager lorsqu’un processus prioritaire doit passer du cas d’usage à la production et que le travail exige une présence régulière auprès des utilisateurs.</p></div></ScrollReveal></div><div className="mt-10 overflow-x-auto"><table className="w-full min-w-[720px] text-left"><thead><tr className="border-b border-border"><th className="px-4 py-4">Critère</th><th className="px-4 py-4">Recrutement interne</th><th className="px-4 py-4">FDE déployé</th></tr></thead><tbody>{comparison.map(([criterion, internal, embedded]) => <tr key={criterion} className="border-b border-border"><th className="px-4 py-5 align-top">{criterion}</th><td className="px-4 py-5 align-top text-muted-foreground">{internal}</td><td className="px-4 py-5 align-top text-muted-foreground">{embedded}</td></tr>)}</tbody></table></div></div></section>

    <section className="section-padding bg-white"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><ScrollReveal><h2 className="text-3xl font-bold sm:text-4xl">Comment commence un engagement</h2><p className="mt-5 max-w-3xl text-lg text-muted-foreground">L’engagement commence par un processus concret, ses utilisateurs, ses données et un résultat observable. Ce socle permet de définir le travail avant de choisir les technologies.</p></ScrollReveal><ol className="mt-10">{steps.map(([title, body], i) => <ScrollReveal key={title} delay={i * .04}><li className="flex gap-6 border-t border-border py-6"><span className="font-semibold text-primary">{String(i + 1).padStart(2, "0")}</span><div><h3 className="font-semibold">{title}</h3><p className="mt-2 leading-relaxed text-muted-foreground">{body}</p></div></li></ScrollReveal>)}</ol></div></section>

    <section className="section-padding bg-background"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><ScrollReveal><h2 className="text-3xl font-bold sm:text-4xl">Ce que l’engagement doit laisser à vos équipes</h2><p className="mt-5 max-w-3xl text-lg text-muted-foreground">Les livrables exacts dépendent du système et de votre environnement. Les éléments suivants doivent être explicités avant la mise en production.</p></ScrollReveal><ul className="mt-8 grid gap-4 md:grid-cols-2">{outputs.map((item) => <li key={item} className="rounded-xl border border-border bg-white p-5 leading-relaxed text-muted-foreground">{item}</li>)}</ul></div></section>

    <section className="section-padding bg-white"><div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8"><ScrollReveal><h2 className="text-3xl font-bold sm:text-4xl">Ce qu’AI Makers apporte au FDE déployé</h2><p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground">L’entreprise cliente apporte le processus, ses règles, ses utilisateurs et son environnement technique. AI Makers apporte l’ingénieur, un cadre de revue et les enseignements tirés de plus de 200 systèmes déployés à l’échelle du cabinet, tous modes d’accompagnement confondus. Ce chiffre décrit l’expérience globale de l’entreprise, pas 200 missions FDE. Cette expérience fournit des points de contrôle concrets, adaptés aux données et aux exceptions de chaque entreprise.</p><Link href="/etudes-de-cas" className="mt-4 inline-flex font-semibold text-primary hover:underline">Voir les études de cas publiées<ArrowRight className="ml-2 size-4" /></Link></ScrollReveal><div className="mt-9 grid gap-5 md:grid-cols-3"><div className="rounded-2xl border border-border p-6"><h3 className="font-semibold">Cadrage du périmètre</h3><p className="mt-2 text-muted-foreground">Transformer le processus prioritaire en décisions, accès, utilisateurs et critères de test explicites.</p></div><div className="rounded-2xl border border-border p-6"><h3 className="font-semibold">Revue technique</h3><p className="mt-2 text-muted-foreground">Relire les choix d’intégration, d’évaluation et d’exploitation avant que le système ne dépende d’une seule personne.</p></div><div className="rounded-2xl border border-border p-6"><h3 className="font-semibold">Playbooks adaptables</h3><p className="mt-2 text-muted-foreground">Réutiliser des contrôles éprouvés pour les accès, les exceptions, les tests et la documentation, puis les adapter au contexte.</p></div></div></div></section>

    <section className="section-padding bg-background"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><ScrollReveal><h2 className="text-3xl font-bold sm:text-4xl">Propriété, documentation et transfert</h2><div className="mt-6 space-y-4 text-lg leading-relaxed text-muted-foreground"><p>Un transfert exploitable couvre davantage que le dépôt de code : les données auxquelles le système accède, l’emplacement de ses règles, la manière de rejouer les tests, les limites connues et la personne qui intervient en cas d’anomalie.</p><p>Ces éléments, ainsi que les droits sur le code et les configurations, doivent être précisés dans le périmètre de l’engagement. La documentation est mise à jour pendant la construction afin que les décisions restent compréhensibles lorsque le FDE quitte le chantier ou travaille avec un ingénieur interne.</p></div></ScrollReveal></div></section>

    <section className="section-padding bg-surface"><div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8"><ScrollReveal><h2 className="text-3xl font-bold sm:text-4xl">Un modèle relié à votre transformation</h2><p className="mt-5 leading-relaxed text-muted-foreground">La gouvernance et la feuille de route restent sous la responsabilité de l’entreprise. Le FDE exécute un périmètre à l’intérieur de cette trajectoire. Selon votre point de départ, vous pouvez d’abord cadrer votre <Link className="font-medium text-primary hover:underline" href="/ai-transformation">transformation IA</Link>, consulter <Link className="font-medium text-primary hover:underline" href="/offre">notre offre</Link> ou organiser les systèmes dans un <Link className="font-medium text-primary hover:underline" href="/ai-operating-system">AI Operating System</Link>.</p></ScrollReveal></div></section>

    <section className="section-padding bg-white"><div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8"><h2 className="text-3xl font-bold sm:text-4xl">Questions pour décider</h2><div className="mt-8"><FAQAccordion items={[...faq]} /></div></div></section>
    <section className="section-padding bg-primary text-primary-foreground"><div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8"><h2 className="text-3xl font-bold sm:text-4xl">Parlons du processus que vous voulez mettre en production</h2><p className="mt-5 text-lg text-primary-foreground/80">Le diagnostic sert à vérifier le périmètre, les données et le mode d’engagement adapté, avant de proposer un déploiement.</p><Button asChild size="lg" variant="secondary" className="mt-8"><Link href="/contact">Déployer un FDE dans mon équipe<ArrowRight className="ml-2 size-4" /></Link></Button></div></section>
  </>;
}
