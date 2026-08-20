/**
 * Contenu de la page /ai-operating-system ("AI Operating System").
 *
 * Structure : hero (la promesse), problème (outils sans système), thèse
 * (un OS en 4 couches, bloc dark signature), démo (la fleet homepage en
 * grille par département), cas client Gepromed, installation en 3 temps
 * reliés aux phases du programme, dogfooding, FAQ, appel final.
 *
 * Tout le copy propre à la page vit ici. Les données partagées (fleet,
 * témoignages, urgence du CTA final) sont importées de
 * site-config en lecture seule, jamais dupliquées.
 */

export const aiOsMeta = {
  title: "AI Operating System : des agents IA par département",
  description:
    "Pas une collection d'outils : un système d'exploitation IA installé dans votre entreprise. Quatre couches : données, systèmes, agents, pilotage. Audit en 2 semaines, systèmes en production dès le premier mois, équipes autonomes à 6 mois.",
} as const;

export const aiOsHero = {
  badge: "Maximum 3 nouveaux clients par mois",
  title: "Votre entreprise, pilotée par un système d'exploitation IA.",
  subtitle:
    "Pas une collection d'outils. Un OS : vos données, vos process et vos agents au même endroit, qui travaillent ensemble. C'est ce qui fait tourner AI Makers, et ce qu'on installe chez nos clients.",
  cta: { label: "Réserver mon diagnostic gratuit", href: "/contact" },
} as const;

export const aiOsProblem = {
  badge: "Le problème",
  title: "Vous avez des outils partout. Aucun système.",
  intro:
    "ChatGPT par ici, Copilot par là, trois automatisations qui dorment dans un coin. Chaque outil travaille seul. Rien ne circule.",
  pains: [
    {
      number: "01",
      title: "Les licences s'empilent",
      description:
        "Chaque équipe a acheté son outil. Aucun ne parle aux autres. Vous payez dix abonnements pour dix silos, et le travail passe encore par copier-coller.",
    },
    {
      number: "02",
      title: "La connaissance est éparpillée",
      description:
        "Vos process vivent dans les mails, les drives et les têtes. Quand quelqu'un part, son savoir part avec lui. Aucune IA ne peut travailler sur une connaissance qu'elle ne trouve pas.",
    },
    {
      number: "03",
      title: "Personne ne pilote",
      description:
        "Les données ne remontent nulle part. Chaque décision commence par une chasse aux chiffres dans cinq outils. Vous dirigez à l'instinct un système que vous ne voyez pas.",
    },
  ],
} as const;

export const aiOsThesis = {
  badge: "La thèse",
  title: "Un OS, pas des outils.",
  paragraphs: [
    "Une entreprise AI-native ne s'équipe pas. Elle s'architecture. La différence tient en une phrase : les outils s'ajoutent, un OS s'emboîte.",
    "Quatre couches. Vos données structurées en bas. Vos process automatisés au-dessus. Des agents qui exécutent. Un pilotage qui remonte tout. Retirez une couche, le reste s'écroule. C'est pour ça que les outils isolés ne changent rien.",
  ],
  layersCaption:
    "Les quatre couches d'un AI Operating System. Chaque couche s'appuie sur celle du dessous.",
  /** Affichées de haut en bas : le pilotage au sommet, les données au socle. */
  layers: [
    {
      number: "04",
      name: "Pilotage",
      detail:
        "Vos KPIs remontent seuls. Vous voyez ce qui tourne, ce qui bloque, ce qui rapporte.",
    },
    {
      number: "03",
      name: "Agents",
      detail:
        "Ils exécutent : ils lisent, trient, rédigent, relancent et rendent compte.",
    },
    {
      number: "02",
      name: "Systèmes",
      detail:
        "Vos process automatisés, département par département, avec un KPI chacun.",
    },
    {
      number: "01",
      name: "Données",
      detail:
        "Votre connaissance structurée, sortie des mails et des têtes, accessible aux agents.",
    },
  ],
} as const;

export const aiOsFleet = {
  badge: "En production",
  title:
    "Un agent pour chaque étage. Voilà à quoi ressemble un OS en production.",
  subtitle:
    "Un extrait des systèmes qui tournent, chez nous et chez nos clients, classés par département.",
} as const;

export const aiOsCaseStudy = {
  badge: "Cas client",
  title: "Ce que ça donne chez Gepromed",
  context:
    "Gepromed, hub européen du dispositif médical, tourne sur un OS AI Makers : GTM, process internes, pilotage.",
  /** Société du témoignage cité (homepageContent.testimonials.items). */
  company: "Gepromed",
} as const;

export const aiOsInstall = {
  badge: "L'installation",
  title: "Comment on installe votre OS",
  subtitle:
    "Trois temps, reliés aux trois phases du programme. Pas de big bang : l'OS se monte couche par couche, département par département.",
  steps: [
    {
      number: "01",
      phase: "Phase 1 : AI Scan",
      duration: "1 à 2 semaines",
      title: "On cartographie vos process",
      detail:
        "Interviews de vos équipes, cartographie des workflows, scoring de maturité. Vous savez où l'OS commence chez vous : par les cas d'usage au ROI le plus court.",
    },
    {
      number: "02",
      phase: "Phase 2 : AI Engine",
      duration: "3 à 6 mois",
      title: "On construit vos systèmes et vos agents",
      detail:
        "Un ingénieur référent construit, département par département. Chaque système part en production avec un KPI mesuré avant et après.",
    },
    {
      number: "03",
      phase: "Phase 3 : AI Champions",
      duration: "En continu, dès le mois 3",
      title: "On forme vos équipes à piloter l'OS",
      detail:
        "Vos équipes prennent la main : elles font tourner, corrigent et étendent les systèmes. L'OS reste chez vous, avec les gens qui savent le conduire.",
    },
  ],
} as const;

export const aiOsDogfooding = {
  badge: "On l'utilise nous-mêmes",
  title: "C'est notre propre OS.",
  text: "AI Makers tourne sur le système qu'on vous installe : mêmes couches, mêmes agents, mêmes tableaux de bord. On ne vend pas une méthode lue quelque part. On duplique la nôtre.",
  stats: [
    { value: "+200", label: "systèmes IA déployés" },
    { value: "10 personnes", label: "la production d'une équipe de 60" },
  ],
} as const;

export const aiOsFaq = {
  badge: "FAQ",
  title: "Questions fréquentes sur l'AI Operating System",
  items: [
    {
      question: "À qui appartient l'OS une fois installé ?",
      answer:
        "À vous, intégralement. Les systèmes, les agents, les playbooks documentés : tout reste chez vous le jour où l'accompagnement s'arrête. Zéro dépendance, c'est écrit au contrat.",
    },
    {
      question: "Combien de temps faut-il pour l'installer ?",
      answer:
        "L'audit prend 1 à 2 semaines et fixe la feuille de route. Les premiers systèmes partent en production dès le premier mois, au rythme de 1 à 2 par mois. À 6 mois, vos équipes pilotent l'OS en autonomie.",
    },
    {
      question: "Est-ce que ça remplace nos outils actuels ?",
      answer:
        "Non. On ne remplace rien, on se branche. Votre CRM, votre ERP, vos drives et vos messageries restent en place : l'OS s'y connecte et fait circuler le travail entre eux.",
    },
    {
      question: "On a déjà des automatisations. On repart de zéro ?",
      answer:
        "Non. On les audite, on garde ce qui tourne et on l'intègre dans l'OS. Ce que vous avez déjà construit devient une brique du système, pas un doublon.",
    },
  ],
} as const;

export const aiOsFinalCta = {
  title: "Vos concurrents achètent des outils. Installez un système.",
  subtitle:
    "30 minutes pour cartographier vos process et repartir avec vos 3 premiers quick wins IA, que vous travailliez avec nous ou non.",
  cta: { label: "Réserver mon diagnostic gratuit", href: "/contact" },
} as const;

/**
 * Chaînes qui vivaient en dur dans la page : JSON-LD, liens « Pour aller plus
 * loin » et libellés de la section captures. Descendues ici pour que la version
 * anglaise ait un équivalent — sinon une page EN rend du JSON-LD français, ce
 * qui est donné à lire aux moteurs de réponse.
 */
export const aiOsSchema = {
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "AI Operating System",
  serviceName:
    "AI Operating System : le système d'exploitation IA de votre entreprise",
  serviceType: "Installation d'un système d'exploitation IA d'entreprise",
  serviceDescription:
    "Installation d'un système d'exploitation IA en 4 couches (données structurées, process automatisés, agents IA, pilotage) : cartographie des process, construction des systèmes et des agents département par département, formation des équipes jusqu'à l'autonomie.",
  areaServed: ["France", "Maroc"],
} as const;


export const aiOsRelated = [
  {
    title: "Transformation IA",
    href: "/ai-transformation",
    description: "L'offre complète en 3 phases : audit, build et formation.",
  },
  {
    title: "Plateforme Data & IA",
    href: "/plateforme-data-ia",
    description:
      "Unifier vos données en silo et brancher des agents de reporting.",
  },
  {
    title: "Études de cas",
    href: "/etudes-de-cas",
    description: "Les operating systems déployés chez nos clients.",
  },
] as const;
