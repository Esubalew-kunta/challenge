/**
 * Contenu de la page /seo-geo ("SEO & GEO : être cité par les IA").
 *
 * Structure : hero (le basculement des usages) puis preuve immédiate
 * (cas Sage + moteurs couverts), rupture dark (le search change de mains,
 * ancrée sur l'étude académique GEO de Princeton, vérifiée), méthode en
 * 4 temps, SEO + GEO ensemble, pourquoi nous (on pratique ce qu'on vend
 * + témoignage Sage), engagement mesurable, FAQ et appel final.
 *
 * Tout le copy propre à la page vit ici. Les données partagées (cas
 * client Sage, témoignage Mickaël Mina) sont importées de site-config
 * en lecture seule, jamais dupliquées.
 *
 * Référence vérifiée : « GEO: Generative Engine Optimization »,
 * Aggarwal et al. (Princeton, IIT Delhi, Georgia Tech, Allen Institute
 * for AI), KDD 2024, arXiv:2311.09735. L'étude introduit le terme GEO
 * et mesure jusqu'à +40% de visibilité dans les réponses des moteurs
 * IA via l'optimisation des contenus.
 */

export const seoGeoMeta = {
  title: "SEO & GEO : être cité par ChatGPT, Gemini et Perplexity",
  description:
    "Le GEO (Generative Engine Optimization) : faire de votre entreprise la réponse que citent ChatGPT, Gemini et Perplexity. Audit de visibilité IA, contenu citable, mesure mensuelle.",
} as const;

export const seoGeoHero = {
  badge: "SEO & GEO · L'offre où on a le plus d'avance",
  title:
    "Vos futurs clients ne cherchent plus sur Google. Ils demandent à ChatGPT.",
  subtitle:
    "Le GEO, c'est faire de votre entreprise la réponse que les IA citent. On le fait pour Sage : 447 prompts suivis en continu sur ChatGPT, Gemini et Perplexity. Mesuré chaque mois, preuve à l'appui.",
  cta: { label: "Réserver mon diagnostic gratuit", href: "/contact" },
  secondaryCta: {
    label: "Voir le cas Sage",
    href: "#preuve",
  },
} as const;

export const seoGeoProof = {
  id: "preuve",
  badge: "La preuve, pas la promesse",
  title: "Ce qu'on a fait pour Sage, mesuré",
  subtitle:
    "Un éditeur de logiciels international, absent des réponses des moteurs IA au départ. Voici l'avant, l'après et la méthode.",
  enginesCaption: "Les moteurs sur lesquels on travaille et on mesure :",
  engines: [
    { name: "ChatGPT", logo: "/images/stack/openai-color.svg" },
    { name: "Gemini", logo: "/images/stack/gemini-color.svg" },
    { name: "Claude", logo: "/images/stack/claude-color.svg" },
  ],
  enginesNote: "Et Perplexity, suivi dans les mêmes rapports mensuels.",
} as const;

export const seoGeoShift = {
  badge: "Le basculement",
  title: "Le search change de mains.",
  paragraphs: [
    "Une part croissante des recherches ne passe plus par une page de résultats : elle passe par une réponse générée. L'utilisateur pose sa question à ChatGPT, Gemini ou Perplexity, lit la réponse, et ne clique que sur les sources citées dedans. S'il clique.",
    "Or une réponse IA ne cite qu'une poignée de sources. Là où une page Google affichait dix liens et laissait sa chance à la page 2, un moteur génératif tranche : deux ou trois références, et le reste n'existe pas. Être cité ou être invisible, il n'y a plus d'entre-deux.",
    "La bonne nouvelle : ça s'optimise, et ça se mesure. Le terme GEO vient d'une étude académique, « GEO: Generative Engine Optimization » (Aggarwal et al., Princeton, présentée à KDD 2024), qui a mesuré jusqu'à +40% de visibilité dans les réponses des moteurs IA en retravaillant les contenus : sources citées, citations, statistiques. Ce n'est pas de la magie, c'est de la méthode.",
  ],
  facts: [
    {
      value: "2-3 sources",
      label: "citées par réponse, là où Google affichait dix liens",
      detail:
        "Un moteur génératif ne classe pas, il choisit. Soit vous êtes dans la réponse, soit vous n'existez pas pour cette question.",
    },
    {
      value: "+40%",
      label: "de visibilité mesurée par la recherche académique",
      detail:
        "L'étude Princeton qui a introduit le terme GEO (KDD 2024) : optimiser un contenu pour la citation augmente sa visibilité dans les réponses IA jusqu'à 40%.",
    },
    {
      value: "447",
      label: "prompts IA suivis en continu pour Sage",
      detail:
        "Notre application terrain de cette recherche : AI Makers suit 447 prompts pour Sage sur les moteurs IA, et retravaille les contenus jusqu'à la citation, requête par requête.",
    },
  ],
  closing:
    "Vos concurrents ne voient pas encore ce trafic disparaître, parce qu'il s'évapore requête par requête. Le moment de prendre position, c'est pendant que la place est libre.",
} as const;

export const seoGeoMethod = {
  badge: "La méthode",
  title: "La méthode GEO d'AI Makers : de l'état des lieux à la courbe qui monte",
  subtitle:
    "Pas de forfait boîte noire. Chaque temps a un livrable, et vous voyez la mesure évoluer mois par mois.",
  steps: [
    {
      number: "01",
      title: "Audit de visibilité IA",
      description:
        "Où apparaissez-vous aujourd'hui dans les réponses de ChatGPT, Gemini et Perplexity ? Et surtout : que disent les IA de vous, de vos offres, de vos concurrents ? On croise Google Search Console, Ahrefs, Profound et Peec pour établir la baseline, requête par requête.",
      deliverable:
        "État des lieux chiffré : vos citations, celles de vos concurrents, et ce que les moteurs racontent sur votre marque.",
    },
    {
      number: "02",
      title: "Stratégie de citation",
      description:
        "Les requêtes qui comptent pour votre métier, celles que vos clients posent vraiment aux IA. Puis les formats que les moteurs citent : comparatifs, définitions, données sourcées, pages réponses. On priorise par impact business, pas par volume de mots-clés.",
      deliverable:
        "Plan de citation priorisé : quelles questions viser, avec quels contenus, dans quel ordre.",
    },
    {
      number: "03",
      title: "Contenu citable, sur votre site et en dehors",
      description:
        "Refonte du contenu pour la citation : structuré, sourcé, factuel. Des pages qui répondent d'abord, argumentent ensuite. Et parce que les moteurs IA puisent massivement dans Reddit et les forums, on y installe aussi votre marque : des contributions utiles là où vos clients posent leurs questions, pas du spam.",
      deliverable:
        "Contenus refondus et publiés sur votre site, présence construite sur les canaux que les IA citent (Reddit, forums, comparatifs).",
    },
    {
      number: "04",
      title: "Mesure continue",
      description:
        "Suivi outillé, mois par mois : Profound et Peec pour vos citations dans les réponses IA, Google Search Console pour le trafic (y compris celui qui vient de ChatGPT), Ahrefs pour l'autorité. Ce qui monte, on l'amplifie. Ce qui stagne, on le retravaille.",
      deliverable:
        "Rapport mensuel : la courbe de visibilité, la part de voix face aux concurrents, et les prochaines actions.",
    },
  ],
} as const;

export const seoGeoTogether = {
  badge: "SEO + GEO",
  title: "SEO et GEO ensemble : un seul contenu, deux canaux",
  intro:
    "Google est toujours là, et le restera. Le SEO classique reste le socle : un site techniquement propre, des contenus qui répondent aux vraies questions, une autorité qui se construit. Le GEO ne remplace rien, il s'appuie dessus.",
  points: [
    {
      title: "Le SEO reste le socle",
      description:
        "Les moteurs IA s'alimentent en grande partie des mêmes sources que Google. Un contenu bien structuré et bien référencé part avec une longueur d'avance sur les deux terrains.",
    },
    {
      title: "Le GEO capte le canal qui s'ouvre",
      description:
        "Les mêmes pages, retravaillées pour la citation : structure réponse d'abord, sources, données. Ce que vous produisez une fois travaille sur Google et dans les réponses IA.",
    },
    {
      title: "AI Makers fait les deux",
      description:
        "Un seul prestataire, une seule stratégie de contenu, deux courbes suivies : votre trafic organique et votre visibilité dans les réponses IA.",
    },
  ],
} as const;

export const seoGeoWhyUs = {
  badge: "Pourquoi nous",
  title: "Une agence GEO qui pratique ce qu'elle vend",
  intro:
    "Le site d'AI Makers est lui-même optimisé GEO : données structurées sur chaque page, contenu answer-first, chiffres sourcés. On ne vous recommande rien qu'on n'applique pas à notre propre site.",
  proofPoints: [
    {
      title: "Ce site est notre terrain d'essai",
      description:
        "Schémas Service, FAQ et Breadcrumb, pages construites pour répondre d'abord : les techniques qu'on déploie chez nos clients tournent d'abord ici.",
    },
    {
      title: "On le fait sur un cas exigeant",
      description:
        "Sage, un éditeur international, sur une verticale concurrentielle : 447 prompts IA suivis en continu, contenus retravaillés jusqu'à la citation, part de voix mesurée chaque mois face aux concurrents.",
    },
    {
      title: "On rend le sujet exploitable",
      description:
        "Le GEO n'est utile que si vos équipes métiers comprennent quoi produire et pourquoi. On traduit la technique en recommandations actionnables, pas en jargon.",
    },
  ],
  /** Auteur du témoignage mis en avant (issu de bookingProof.testimonials). */
  testimonialAuthor: "Mickaël Mina",
} as const;

export const seoGeoCommitment = {
  badge: "Notre engagement",
  title: "Le GEO est mesurable. Alors on le mesure devant vous.",
  paragraphs: [
    "On ne vous promet pas une position : personne ne contrôle ce qu'un modèle décide de citer. Ce qu'AI Makers s'engage à faire, c'est rendre le travail visible. La mesure n'est pas un bonus de fin de mission : c'est le contrat de départ.",
    "Vous voyez ce qui monte, ce qui stagne, et ce qu'on fait pour corriger. Si un contenu ne produit pas de citations, on le retravaille.",
  ],
  points: [
    "Baseline de visibilité IA établie au jour 1",
    "Rapport mensuel : citations, part de voix, évolution requête par requête",
    "Comparaison systématique avec vos concurrents directs",
    "Contenus retravaillés tant qu'ils ne produisent pas de citations",
  ],
} as const;

export const seoGeoFaq = {
  badge: "FAQ",
  title: "Les questions qu'on nous pose sur le GEO",
  items: [
    {
      question: "Qu'est-ce que le GEO (Generative Engine Optimization) ?",
      answer:
        "Le GEO (Generative Engine Optimization) est l'optimisation de la visibilité d'une marque dans les réponses générées par les moteurs IA : ChatGPT, Gemini, Perplexity, Claude. Le terme vient d'une étude académique de Princeton présentée à KDD 2024. Là où le SEO vise un classement de liens, le GEO vise la citation : faire de votre entreprise l'une des 2 ou 3 sources que le moteur reprend dans sa réponse.",
    },
    {
      question: "Quelle est la différence entre le GEO et le SEO ?",
      answer:
        "Le SEO (Search Engine Optimization) vise à positionner vos pages dans les résultats de Google : un classement de liens, où l'utilisateur choisit. Le GEO vise à faire citer votre entreprise dans les réponses que rédigent les moteurs IA, qui ne retiennent que quelques sources. Les deux s'appuient sur le même socle de contenu structuré et sourcé, mais le GEO ajoute ses exigences propres : structure answer-first, données citables, données structurées. Chez AI Makers, les deux sont traités dans une seule stratégie de contenu.",
    },
    {
      question: "GEO ou SEO : par quoi commencer ?",
      answer:
        "Par les deux en même temps, parce qu'ils partagent le même socle : un site techniquement propre et des contenus qui répondent aux vraies questions. Un contenu bien structuré travaille sur Google et dans les réponses IA. Chez AI Makers, une seule stratégie de contenu alimente les deux canaux : l'arbitrage se fait sur les requêtes à viser, pas sur le canal.",
    },
    {
      question: "Comment apparaître dans les réponses de ChatGPT ?",
      answer:
        "ChatGPT cite les sources qu'il juge fiables et faciles à reprendre : un contenu qui répond directement à la question, des chiffres sourcés, une structure claire et l'autorité du domaine. Concrètement, AI Makers travaille deux terrains : votre site (pages answer-first, données citables, données structurées) et les canaux où ChatGPT puise ses réponses, Reddit et les forums en tête, où l'on installe votre marque avec des contributions utiles. Puis on mesure, requête par requête, si la marque est citée.",
    },
    {
      question: "Combien coûte une prestation GEO ?",
      answer:
        "Cela dépend du périmètre : nombre de requêtes suivies, volume de contenus à produire ou à refondre, nombre de moteurs mesurés. Chez AI Makers, le SEO et le GEO sont traités dans une même prestation de contenu, facturée au mois. Le plus simple : le diagnostic gratuit de 30 minutes établit votre première photographie de visibilité IA et un ordre de grandeur budgétaire.",
    },
    {
      question: "Combien de temps avant de voir des résultats ?",
      answer:
        "Les premières citations arrivent généralement en quelques semaines après la publication des contenus optimisés, mais la courbe se construit sur des mois. Les moteurs IA réévaluent leurs sources en continu : la visibilité gagnée se consolide avec la régularité et l'autorité accumulée. C'est pour ça qu'on établit la baseline au jour 1 et qu'on vous montre l'évolution chaque mois, plutôt que de promettre un délai précis que personne ne peut garantir.",
    },
    {
      question: "Le GEO fonctionne pour quel type d'entreprise ?",
      answer:
        "Le GEO est pertinent dès que vos clients se renseignent avant d'acheter : B2B, services, logiciels, santé, industrie, ou toute activité où l'on compare des prestataires. Il est particulièrement rentable sur les verticales où les moteurs IA citent encore peu d'acteurs : la place de première référence est à prendre. Il l'est moins pour les achats d'impulsion sans phase de recherche. Le plus simple : l'audit de visibilité IA d'AI Makers vous dit en quelques jours si votre marché pose déjà ses questions aux IA, et qui est cité à votre place.",
    },
    {
      question: "Comment mesurez-vous la visibilité dans les réponses des IA ?",
      answer:
        "AI Makers combine quatre outils : Profound et Peec interrogent les moteurs (ChatGPT, Gemini, Perplexity) en continu sur un panel de requêtes défini avec vous, Google Search Console mesure le trafic qui arrive des IA, et Ahrefs suit l'autorité de votre domaine. Pour chaque requête, on relève si votre marque est citée, à quelle place, avec quel discours, et qui d'autre est cité. Ça donne trois indicateurs suivis mois par mois : votre taux de citation, votre part de voix face aux concurrents, et la tonalité de ce que les moteurs disent de vous.",
    },
  ],
} as const;

export const seoGeoFinalCta = {
  title: "Que disent les IA de vous, aujourd'hui, à votre place ?",
  subtitle:
    "30 minutes pour le découvrir : on interroge les moteurs sur vos requêtes clés en direct, et vous repartez avec votre première photographie de visibilité IA, que vous travailliez avec nous ou non.",
  cta: { label: "Réserver mon diagnostic gratuit", href: "/contact" },
} as const;

/**
 * Chaînes qui vivaient en dur dans la page : JSON-LD, démonstration, bloc
 * final « sans rien faire / avec AI Makers » et liens connexes. Descendues ici
 * pour que la version anglaise ait un équivalent.
 */
export const seoGeoChrome = {
  breadcrumbHome: "Accueil",
  breadcrumbCurrent: "SEO & GEO",
  serviceName: "SEO & GEO : référencement dans les moteurs IA",
  serviceType: "Generative Engine Optimization (GEO) et SEO",
  serviceDescription:
    "Optimisation de la visibilité dans les réponses des moteurs IA (ChatGPT, Gemini, Perplexity, Claude) et référencement naturel : audit de visibilité, stratégie de citation, contenus citables, mesure mensuelle.",
  areaServed: ["France", "Maroc"],
  demoBadge: "La démonstration",
  demoTitle:
    "Vos meilleurs prospects posent la question à l’IA. Pas à Google.",
  demoIntro:
    "Et aujourd’hui, l’IA répond sans vous. Chaque réponse qui cite un concurrent est un client que vous ne verrez jamais arriver. Voici ce que le GEO change, en direct.",
  stepBefore: "Avant",
  stepAfter: "Après",
  stepHow: "Comment",
  deliverableLabel: "Le livrable",
  closingTitle:
    "L’IA répond déjà aux questions de votre marché. La seule question, c’est qui elle cite.",
  closingIntro:
    "Les moteurs IA apprennent en ce moment qui fait autorité dans votre secteur, et l’autorité accumulée se renforce à chaque citation. Ceux qui s’installent tôt partent avec l’avantage du premier cité.",
  withoutTitle: "Sans rien faire",
  withoutItems: [
    "· L’IA cite vos concurrents à votre place",
    "· Des prospects qualifiés que vous ne voyez jamais",
    "· Une autorité qui se construit sans vous",
    "· Un retard qui coûte de plus en plus cher à rattraper",
  ],
  withTitle: "Avec AI Makers",
  withItems: [
    "Votre marque présente dans les réponses IA de votre secteur",
    "Visibilité mesurée avant / après, chiffrée",
    "Contenus qui deviennent la source que l’IA reprend",
    "Une part de voix suivie chaque mois face à vos concurrents",
  ],
  closingCta: "Prendre ma place dans les réponses IA",
  closingNote:
    "Diagnostic de visibilité IA gratuit. On vous montre où vous en êtes avant d’en parler.",
  related: [
    {
      title: "Audit GEO gratuit",
      href: "/outils/audit-geo-gratuit",
      description: "Ce que les IA disent de votre entreprise, en 48h.",
    },
    {
      title: "Étude de cas Sage",
      href: "/etudes-de-cas/sage-geo",
      description: "Comment Sage a gagné en visibilité dans les moteurs IA.",
    },
    {
      title: "Meilleures agences IA en France",
      href: "/blog/meilleures-agences-ia-france",
      description: "Le comparatif honnête des cabinets et agences IA.",
    },
  ],
} as const;
