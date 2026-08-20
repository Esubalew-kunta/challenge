import type { LocalTrainingContent } from "./types";

/**
 * /formation-ia/lille — contenu V1.1 approuvé.
 *
 * Propriétaire commercial de « formation IA Lille », « formation IA entreprise
 * Lille » et de leurs variantes locales proches. Le générique reste sur
 * /formation-ia-entreprise, la découverte géographique sur /formation-ia.
 *
 * Aucune revendication de bureau, de client ou de référence lilloise : la
 * preuve Délifrance est explicitement qualifiée de preuve à l'échelle de
 * l'entreprise. Les trois sources locales sont externes et visibles.
 */
export const lilleTraining: LocalTrainingContent = {
  slug: "lille",
  city: "Lille",
  region: "Hauts-de-France",
  meta: {
    title: "Formation IA entreprise à Lille",
    description:
      "Formation IA pour entreprises à Lille : modules hands-on sur vos cas réels, exercices métier et livrables concrets pour rendre vos équipes autonomes.",
  },
  breadcrumb: [
    { label: "Accueil", href: "/" },
    { label: "Formation IA en entreprise", href: "/formation-ia-entreprise" },
    { label: "Formation IA par ville", href: "/formation-ia" },
    { label: "Lille", href: "/formation-ia/lille" },
  ],
  schema: {
    serviceName: "Formation IA entreprise à Lille",
    serviceType: "Formation IA en entreprise",
    serviceDescription:
      "Formation IA pour entreprises à Lille et dans les Hauts-de-France, construite à partir des tâches, documents et processus réels des équipes. Modules hands-on, exercices adaptés aux métiers présents et livrables réutilisables après la session.",
  },
  hero: {
    h1: "Formation IA entreprise à Lille, sur vos cas d’usage réels",
    intro: [
      "Une formation IA utile se juge à ce que vos équipes savent refaire seules ensuite. Elle doit leur permettre de reprendre leurs propres tâches, documents et processus avec une méthode qu’elles sauront réutiliser après la session.",
      "À Lille et dans les Hauts-de-France, AI Makers construit les formations à partir du travail réel de vos collaborateurs : préparation d’une analyse, traitement de documents, production de contenus, reporting, relation client, prospection, support, opérations ou automatisation d’étapes répétitives.",
      "Les participants travaillent directement sur leurs cas d’usage. Ils testent les méthodes pendant la formation et repartent avec des éléments réutilisables : prompts, Skills, procédures augmentées, workflows, assistants, prototypes ou plan d’adoption selon le programme retenu.",
      "Nous intervenons dans vos locaux à Lille et dans les Hauts-de-France, à distance ou dans un format hybride.",
    ],
    cta: {
      label: "Construire votre programme de formation IA",
      href: "/contact",
    },
  },
  sections: [
    {
      title: "Quand une entreprise a réellement besoin d’une formation IA",
      blocks: [
        {
          kind: "p",
          text: "Les collaborateurs connaissent généralement déjà ChatGPT, Claude ou Copilot. Le besoin apparaît surtout lorsque ces usages se diffusent sans méthode commune.",
        },
        {
          kind: "p",
          text: "Certains collaborateurs utilisent déjà plusieurs assistants. D’autres restent au stade de la découverte. Les équipes hésitent alors sur les données utilisables, l’outil à choisir, la manière de contrôler un résultat ou les usages qui méritent d’être standardisés.",
        },
        {
          kind: "p",
          text: "La formation sert alors à trancher ces questions :",
        },
        {
          kind: "ul",
          items: [
            "quelles tâches peuvent être améliorées dès maintenant ;",
            "quels usages demandent encore une validation humaine ;",
            "quels outils sont adaptés à l’environnement de l’entreprise ;",
            "comment produire un résultat suffisamment fiable pour être réutilisé ;",
            "quelles pratiques doivent être partagées entre les équipes ;",
            "quels cas d’usage pourraient ensuite devenir des automatisations ou des systèmes plus structurés.",
          ],
        },
        {
          kind: "p",
          text: "Le programme se construit donc à partir du travail des équipes, et le choix des outils en découle.",
        },
      ],
    },
    {
      title: "Vos équipes viennent avec leur travail réel",
      blocks: [
        {
          kind: "p",
          text: "Avant la formation, nous définissons les profils concernés et les situations sur lesquelles ils souhaitent progresser.",
        },
        {
          kind: "p",
          text: "Selon les équipes, les matériaux utilisés pendant les ateliers peuvent inclure :",
        },
        {
          kind: "ul",
          items: [
            "documents internes autorisés pour la session ;",
            "modèles de comptes rendus ;",
            "présentations ;",
            "briefs marketing ;",
            "données ou tableaux anonymisés ;",
            "processus commerciaux ;",
            "fiches produits ;",
            "procédures internes ;",
            "exemples de demandes clients ;",
            "tâches récurrentes de reporting ;",
            "workflows existants ;",
            "modèles d’emails ou de propositions.",
          ],
        },
        {
          kind: "p",
          text: "Les éléments utilisés restent encadrés : ils sont sélectionnés avec l’entreprise selon ses règles de confidentialité et son environnement technique.",
        },
        {
          kind: "p",
          text: "Cette préparation ancre la formation dans des situations que les participants reconnaissent.",
        },
        {
          kind: "p",
          text: "Un commercial doit pouvoir travailler sur une tâche commerciale. Une équipe opérations sur un processus opérationnel. Un manager sur la synthèse, la décision et le contrôle. Une équipe marketing sur ses contenus et ses workflows.",
        },
      ],
    },
    {
      title: "Comment nous construisons le programme",
      blocks: [
        {
          kind: "p",
          text: "Le contenu exact dépend des équipes, mais la progression suit généralement quatre étapes.",
        },
      ],
      subs: [
        {
          title: "1. Comprendre ce que l’IA sait réellement faire",
          blocks: [
            {
              kind: "p",
              text: "Les participants commencent par distinguer les capacités utiles des effets de mode. Ils apprennent à reconnaître les tâches où un assistant génératif peut être pertinent, celles qui nécessitent davantage de contexte et celles qui doivent conserver une validation humaine forte.",
            },
            {
              kind: "p",
              text: "L’objectif est de savoir décider quand utiliser l’IA et quand ne pas l’utiliser.",
            },
          ],
        },
        {
          title: "2. Produire des résultats reproductibles",
          blocks: [
            {
              kind: "p",
              text: "La formation passe ensuite à la formulation des demandes, au contexte, aux instructions, aux exemples, aux formats attendus et aux contrôles.",
            },
            {
              kind: "p",
              text: "Les participants repartent avec leurs propres méthodes, construites pendant la session et transposables à d’autres tâches : un bon usage doit pouvoir être expliqué, réutilisé et amélioré.",
            },
          ],
        },
        {
          title: "3. Appliquer la méthode aux métiers présents",
          blocks: [
            {
              kind: "p",
              text: "Les exercices utilisent les tâches apportées par les participants : une même technologie peut servir à préparer une analyse, transformer un document, comparer plusieurs propositions, structurer une réponse client ou construire un premier workflow.",
            },

          ],
        },
        {
          title: "4. Organiser la suite",
          blocks: [
            {
              kind: "p",
              text: "Les meilleurs cas sont identifiés à la fin du parcours. Certains peuvent rester de simples usages individuels, d’autres méritent une procédure commune, quelques-uns justifient un assistant, une automatisation ou un système plus structuré.",
            },
            {
              kind: "p",
              text: "La formation devient ainsi une première étape d’adoption plutôt qu’un événement isolé.",
            },
          ],
        },
      ],
    },
    {
      title: "Les exercices sont adaptés aux métiers présents",
      blocks: [
        {
          kind: "p",
          text: "Une formation destinée à plusieurs équipes gagne à adapter les exercices aux métiers présents.",
        },
      ],
      subs: [
        {
          title: "Direction et managers",
          blocks: [
            { kind: "p", text: "Les exercices peuvent porter sur :" },
            {
              kind: "ul",
              items: [
                "préparation et synthèse de réunions ;",
                "comparaison de scénarios ;",
                "structuration de notes de décision ;",
                "analyse de documents volumineux ;",
                "préparation de communications internes ;",
                "contrôle et amélioration d’un livrable produit avec l’IA.",
              ],
            },
          ],
        },
        {
          title: "Commerce et business development",
          blocks: [
            { kind: "p", text: "Les participants peuvent travailler sur :" },
            {
              kind: "ul",
              items: [
                "préparation de comptes ;",
                "recherche et enrichissement de contexte ;",
                "personnalisation de messages ;",
                "préparation d’entretiens ;",
                "synthèse d’informations CRM ;",
                "propositions commerciales ;",
                "qualification de prospects.",
              ],
            },
            {
              kind: "p",
              text: "Lorsque le besoin est principalement commercial, le programme Go-to-Market & Sales permet d’aller plus loin sur ces workflows.",
            },
            {
              kind: "link",
              label: "Go-to-Market & Sales",
              href: "/formation-ia-entreprise/go-to-market-sales",
            },
          ],
        },
        {
          title: "Marketing et communication",
          blocks: [
            { kind: "p", text: "Les ateliers peuvent couvrir :" },
            {
              kind: "ul",
              items: [
                "transformation d’un brief ;",
                "déclinaison de contenus ;",
                "recherche d’angles ;",
                "analyse de commentaires ou retours clients ;",
                "préparation de campagnes ;",
                "adaptation d’un contenu à plusieurs formats ;",
                "création de procédures de contrôle éditorial.",
              ],
            },
          ],
        },
        {
          title: "Opérations et fonctions support",
          blocks: [
            { kind: "p", text: "Nous pouvons travailler sur :" },
            {
              kind: "ul",
              items: [
                "synthèse de documents ;",
                "classification d’informations ;",
                "préparation de reporting ;",
                "procédures internes ;",
                "traitement d’informations répétitives ;",
                "création d’assistants documentaires ;",
                "préparation de workflows entre plusieurs outils.",
              ],
            },
          ],
        },
        {
          title: "Équipes techniques et produit",
          blocks: [
            {
              kind: "p",
              text: "Pour les profils qui souhaitent construire davantage, le parcours peut aller jusqu’au prototypage d’outils internes ou à l’utilisation d’assistants de développement dans le cadre de la formation Vibe Coding.",
            },
            {
              kind: "link",
              label: "Vibe Coding",
              href: "/formation-ia-entreprise/vibe-coding",
            },
          ],
        },
      ],
    },
    {
      title: "Chaque module doit produire quelque chose de réutilisable",
      blocks: [
        {
          kind: "p",
          text: "La qualité d’une formation se mesure à ce que les équipes conservent une fois la session terminée.",
        },

        {
          kind: "p",
          text: "Selon le niveau et le programme, les participants peuvent repartir avec :",
        },
        {
          kind: "ul",
          items: [
            "une bibliothèque de prompts métier testés ;",
            "une ou plusieurs Skills réutilisables ;",
            "une procédure pour une tâche récurrente ;",
            "un workflow documenté ;",
            "un assistant configuré pour un usage défini ;",
            "un prototype d’outil interne ;",
            "une grille de choix entre plusieurs assistants ;",
            "des règles de contrôle ;",
            "une liste de cas d’usage priorisés ;",
            "un plan d’adoption pour l’équipe.",
          ],
        },
        {
          kind: "p",
          text: "Le livrable attendu varie d’un participant à l’autre, selon son rôle et les tâches qu’il devra reprendre ensuite.",
        },
      ],
    },
    {
      title: "Pourquoi le contexte de Lille change les cas d’usage",
      blocks: [
        {
          kind: "p",
          text: "Le tissu économique de la métropole lilloise rend certains cas d’usage particulièrement pertinents.",
        },
      ],
      subs: [
        {
          title: "Retail, distribution et e-commerce",
          blocks: [
            {
              kind: "p",
              text: "La Métropole Européenne de Lille identifie le tertiaire, la distribution et l’e-commerce parmi les secteurs structurants de son économie.",
            },
            { kind: "source", href: "https://lillemetropole.fr/economie-et-emploi" },
            {
              kind: "p",
              text: "Pour les entreprises de ces secteurs, les équipes manipulent souvent de grands volumes d’informations :",
            },
            {
              kind: "ul",
              items: [
                "catalogues et fiches produits ;",
                "données commerciales ;",
                "demandes clients ;",
                "briefs ;",
                "retours terrain ;",
                "comptes rendus ;",
                "contenus ;",
                "informations fournisseurs.",
              ],
            },
            {
              kind: "p",
              text: "L’IA peut aider à préparer, structurer ou analyser ces éléments. La formation doit cependant distinguer l’assistance individuelle d’un véritable workflow métier.",
            },
          ],
        },
        {
          title: "Logistique et opérations",
          blocks: [
            {
              kind: "p",
              text: "L’écosystème retail de Lille s’appuie également sur une chaîne de valeur logistique importante. Hello Lille présente le retail et la logistique comme un ensemble économique fortement implanté dans la métropole.",
            },
            {
              kind: "source",
              href: "https://hellolille.eu/je-mimplante/secteurs-cles/retail-et-logistique/",
            },
            {
              kind: "p",
              text: "Pour les équipes opérationnelles, les exercices peuvent se concentrer sur la documentation, le reporting, les synthèses, le traitement de demandes récurrentes ou la préparation d’informations avant une décision humaine.",
            },
          ],
        },
        {
          title: "Industrie et fonctions support",
          blocks: [
            {
              kind: "p",
              text: "L’industrie reste également présente dans l’écosystème économique métropolitain, avec plusieurs filières et acteurs industriels implantés dans la région.",
            },
            {
              kind: "source",
              href: "https://hellolille.eu/je-mimplante/secteurs-cles/industries/",
            },
            {
              kind: "p",
              text: "Les cas travaillés relèvent alors souvent d’usages plus simples que les « agents IA » complexes.",
            },
            {
              kind: "p",
              text: "Beaucoup commencent par la documentation, les procédures, l’analyse, le reporting, la recherche interne ou l’amélioration des fonctions support.",
            },
          ],
        },
        {
          title: "Équipes internationales et transfrontalières",
          blocks: [
            {
              kind: "p",
              text: "La situation géographique de Lille place aussi de nombreuses entreprises dans un environnement où collaborateurs, fournisseurs, clients ou partenaires peuvent travailler sur plusieurs marchés et plusieurs langues.",
            },
            {
              kind: "p",
              text: "Rédaction, synthèse, adaptation de documents et préparation d’échanges multilingues peuvent alors constituer des cas d’usage pertinents.",
            },
            {
              kind: "p",
              text: "Comme pour les autres usages, le contenu et la validation métier restent sous la responsabilité des équipes concernées.",
            },
          ],
        },
      ],
    },
    {
      title: "Quel programme choisir ?",
      blocks: [
        {
          kind: "p",
          text: "AI Makers dispose de plusieurs programmes. Le bon choix dépend davantage des tâches à transformer que du niveau supposé de sophistication de l’outil.",
        },
      ],
      subs: [
        {
          title: "Formation AI Champions",
          blocks: [
            {
              kind: "p",
              text: "Pour créer un socle commun et faire émerger des référents capables d’aider leurs équipes à structurer les usages.",
            },
            {
              kind: "link",
              label: "Formation AI Champions",
              href: "/formation-ia-entreprise/formation-ai-champions",
            },
          ],
        },
        {
          title: "Maîtriser Claude en entreprise",
          blocks: [
            {
              kind: "p",
              text: "Pour approfondir Claude, travailler avec davantage de contexte et structurer des usages plus avancés autour des documents, projets et workflows.",
            },
            {
              kind: "link",
              label: "Maîtriser Claude en entreprise",
              href: "/formation-ia-entreprise/maitriser-claude",
            },
          ],
        },
        {
          title: "Microsoft Copilot",
          blocks: [
            {
              kind: "p",
              text: "Pour les entreprises déjà fortement équipées de Microsoft 365 et qui veulent organiser les usages autour de leur environnement existant.",
            },
            {
              kind: "link",
              label: "Microsoft Copilot",
              href: "/formation-ia-entreprise/microsoft-copilot",
            },
          ],
        },
        {
          title: "Go-to-Market & Sales",
          blocks: [
            {
              kind: "p",
              text: "Pour les équipes commerciales qui souhaitent travailler plus précisément sur la prospection, les données, la personnalisation et les workflows d’acquisition.",
            },
            {
              kind: "link",
              label: "Go-to-Market & Sales",
              href: "/formation-ia-entreprise/go-to-market-sales",
            },
          ],
        },
        {
          title: "Vibe Coding",
          blocks: [
            {
              kind: "p",
              text: "Pour les équipes qui veulent passer de l’usage d’un assistant à la construction de prototypes et d’outils internes.",
            },
            {
              kind: "link",
              label: "Vibe Coding",
              href: "/formation-ia-entreprise/vibe-coding",
            },
          ],
        },
        {
          title: "Création & Publicité IA",
          blocks: [
            {
              kind: "p",
              text: "Pour les équipes créatives et marketing qui souhaitent intégrer l’IA dans leur chaîne de production, de la recherche d’angles au contrôle éditorial.",
            },
            {
              kind: "link",
              label: "Création & Publicité IA",
              href: "/formation-ia-entreprise/creation-publicite-ia",
            },
          ],
        },
      ],
      after: [
        {
          kind: "p",
          text: "Le catalogue complet reste accessible sur la page Formation IA en entreprise.",
        },
        {
          kind: "link",
          label: "Formation IA en entreprise",
          href: "/formation-ia-entreprise",
        },
      ],
    },
    {
      title: "La sécurité et la gouvernance font partie de l’apprentissage",
      blocks: [
        {
          kind: "p",
          text: "Former une équipe à l’IA sans expliquer les limites d’usage crée un problème supplémentaire.",
        },
        { kind: "p", text: "Les participants doivent savoir :" },
        {
          kind: "ul",
          items: [
            "quelles données ils peuvent utiliser ;",
            "dans quel environnement ;",
            "ce qui doit être anonymisé ;",
            "quand vérifier une source ;",
            "quand conserver une validation humaine ;",
            "comment reconnaître une réponse incertaine ;",
            "quelles tâches restent hors du périmètre confié à un modèle ;",
            "comment documenter un usage qui devient récurrent.",
          ],
        },
        {
          kind: "p",
          text: "Le niveau de contrôle dépend évidemment du métier.",
        },
        {
          kind: "p",
          text: "La préparation d’un premier brouillon interne demande des garanties plus légères qu’une action sur une donnée client, un document réglementé ou une décision financière.",
        },
        {
          kind: "p",
          text: "Pour les organisations qui souhaitent formaliser ces sujets au-delà de la formation :",
        },
        { kind: "link", label: "Gouvernance IA", href: "/gouvernance-ia" },
      ],
    },
    {
      title:
        "La formation peut révéler des cas qui méritent d’être automatisés",
      blocks: [
        {
          kind: "p",
          text: "Certains usages restent parfaitement adaptés à un assistant utilisé par un collaborateur. D’autres deviennent rapidement répétitifs.",
        },
        {
          kind: "p",
          text: "Lorsque plusieurs personnes exécutent le même workflow, utilisent les mêmes données et produisent le même type de résultat, il peut devenir pertinent de transformer la méthode apprise en système.",
        },
        {
          kind: "p",
          text: "Exemple : pendant la formation, un collaborateur apprend à analyser plusieurs documents et à produire une synthèse structurée.",
        },
        {
          kind: "p",
          text: "Si cette opération devient ensuite un processus récurrent exécuté à grande échelle par plusieurs personnes, l’entreprise peut étudier une automatisation ou un assistant métier.",
        },
        {
          kind: "p",
          text: "La formation permet donc aussi d’identifier la frontière entre :",
        },
        {
          kind: "flow",
          steps: [
            "usage individuel",
            "méthode d’équipe",
            "workflow",
            "système",
          ],
        },
        {
          kind: "p",
          text: "AI Makers peut s’arrêter à la formation ou accompagner l’entreprise sur la suite.",
        },
        {
          kind: "link",
          label: "Automatisation",
          href: "/automatisation-ia-workflow",
        },
        {
          kind: "link",
          label: "Transformation IA",
          href: "/ai-transformation",
        },
      ],
    },
    {
      title:
        "Une formation doit renforcer l’autonomie de l’équipe",
      blocks: [
        {
          kind: "p",
          text: "Notre rôle consiste à rendre l’équipe capable de faire évoluer elle-même ses prompts et ses méthodes.",
        },
        {
          kind: "p",
          text: "Les participants doivent comprendre pourquoi une méthode fonctionne, et les référents internes savoir la faire évoluer.",
        },
        {
          kind: "p",
          text: "Lorsqu’un workflow plus complexe apparaît, l’entreprise doit pouvoir décider s’il peut être maintenu en interne ou s’il nécessite encore une expertise externe.",
        },
        {
          kind: "p",
          text: "Cette logique de transfert est particulièrement importante lorsqu’une organisation veut diffuser l’IA au-delà des premiers utilisateurs.",
        },
      ],
    },
    {
      title: "Ce que nos clients retiennent de la formation",
      blocks: [
        {
          kind: "p",
          text: "La preuve la plus utile montre ce que les équipes ont réellement retiré de la formation, au-delà d’une liste de logos.",
        },
        {
          kind: "testimonial",
          client: "Délifrance",
          lead: "Délifrance décrit ainsi son expérience avec AI Makers :",
          note: "Ce témoignage illustre notre méthode de formation à l’échelle de l’entreprise. Il n’est pas présenté comme une référence locale lilloise.",
        },
        {
          kind: "p",
          text: "Les autres résultats et missions publiables sont regroupés dans nos études de cas.",
        },
        { kind: "link", label: "Études de cas", href: "/etudes-de-cas" },
        {
          kind: "p",
          text: "Nous ne revendiquons pas une présence locale ou un client lillois sans pouvoir le documenter.",
        },
      ],
    },
    {
      title: "Modalités de formation à Lille et dans les Hauts-de-France",
      blocks: [
        {
          kind: "p",
          text: "Nous pouvons organiser la formation directement dans vos locaux, à Lille et dans la métropole, notamment autour de Roubaix, Tourcoing et Villeneuve-d’Ascq, ainsi que plus largement dans les Hauts-de-France selon le projet.",
        },
        { kind: "p", text: "Le format peut être :" },
        {
          kind: "ul",
          items: [
            "présentiel ;",
            "distanciel ;",
            "hybride ;",
            "session unique ;",
            "parcours en plusieurs sessions.",
          ],
        },
        {
          kind: "p",
          text: "Le format dépend du nombre de participants, des profils concernés, des objectifs et du niveau de pratique attendu.",
        },
        {
          kind: "p",
          text: "Le format est arrêté après un premier échange sur l’équipe, ses profils et ses objectifs.",
        },
        {
          kind: "cta",
          label: "Parler de votre équipe et de vos cas d’usage",
          href: "/contact",
        },
      ],
    },
  ],
  faq: {
    title: "FAQ : Formation IA entreprise à Lille",
    items: [
      {
        question: "Intervenez-vous en présentiel à Lille ?",
        answer:
          "Oui. Nous pouvons organiser la formation directement dans vos locaux à Lille et dans la métropole lilloise. Des interventions sont également possibles plus largement dans les Hauts-de-France. Le distanciel et les formats hybrides restent possibles lorsque cela correspond mieux à l’organisation des équipes.",
      },
      {
        question:
          "La formation peut-elle être adaptée au retail ou à la distribution ?",
        answer:
          "Oui. Le programme est construit à partir des tâches de l’entreprise. Pour une équipe retail ou distribution, cela peut concerner par exemple les contenus produits, la relation client, le reporting, l’analyse de documents, les opérations, la préparation commerciale ou certains workflows répétitifs.",
      },
      {
        question:
          "Devons-nous choisir ChatGPT, Claude ou Copilot avant la formation ?",
        answer:
          "Non. Le choix de l’outil dépend de votre environnement, de vos données, des tâches ciblées et des outils déjà présents dans l’entreprise. Une partie du travail peut justement consister à clarifier quel assistant utiliser pour quel usage.",
      },
      {
        question: "Peut-on former plusieurs métiers en même temps ?",
        answer:
          "Oui. Les exercices peuvent différer selon les participants : un socle commun est partagé, puis les ateliers sont adaptés aux métiers présents.",
      },
      {
        question: "Faut-il déjà utiliser l’IA pour participer ?",
        answer:
          "Pas nécessairement. Le niveau est défini pendant le cadrage. Une équipe peut commencer par les fondamentaux tandis qu’un autre groupe travaille déjà sur des workflows, des assistants ou du prototypage.",
      },
      {
        question: "Travaillez-vous avec nos documents internes ?",
        answer:
          "Lorsque c’est pertinent et autorisé par l’entreprise. Les documents ou données utilisés pendant les exercices sont sélectionnés selon les règles de confidentialité applicables. Des éléments anonymisés ou préparés spécifiquement pour la session peuvent également être utilisés.",
      },
      {
        question: "Que doivent produire les participants ?",
        answer:
          "Cela dépend du programme : prompts réutilisables, Skills, procédures, workflows, assistants, prototypes, cas d’usage priorisés ou plan d’adoption. Nous privilégions les livrables utilisables après la formation plutôt que les exercices jetables.",
      },
      {
        question:
          "Que se passe-t-il si nous identifions un processus à automatiser ?",
        answer:
          "La formation peut rester indépendante. Si un cas mérite une mise en production plus structurée, AI Makers peut ensuite accompagner l’entreprise sur l’automatisation ou la transformation IA. Cette étape est séparée et décidée avec le client.",
      },
      {
        question: "Par où commencer ?",
        answer:
          "Par un échange sur les équipes concernées, leurs tâches et les usages déjà testés. Cela permet de choisir le bon programme, d’identifier les matériaux à préparer et de déterminer le format adapté.",
      },
    ],
  },
  finalCta: {
    title:
      "Construisons une formation à partir de ce que vos équipes font déjà",
    paragraphs: [
      "Une formation IA pertinente commence par vos processus, vos documents, vos contraintes et les résultats que vos collaborateurs doivent produire.",
      "Nous définissons ensuite les outils, les exercices et les livrables qui méritent réellement d’entrer dans le programme.",
    ],
    primary: {
      label: "Construire notre programme de formation IA",
      href: "/contact",
    },
    secondary: {
      label: "Voir toutes les formations IA",
      href: "/formation-ia-entreprise",
    },
  },
};
