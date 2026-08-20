/**
 * Données des pages sectorielles /secteurs/[slug].
 * 3 ICP prioritaires : agences de communication, TPE/PME, santé (médecins, biotech, medtech).
 * Les témoignages référencent clientLogos (site-config) par nom — déjà publiés sur le site.
 */

export type SecteurCasUsage = {
  titre: string;
  description: string;
};

export type SecteurFaq = {
  question: string;
  answer: string;
};

export type Secteur = {
  slug: string;
  /** Nom court (nav, cartes) */
  nom: string;
  /** Badge au-dessus du h1 */
  badge: string;
  /** H1 de la page */
  titre: string;
  metaTitle: string;
  metaDescription: string;
  /** Intro answer-first (2-3 phrases) */
  intro: string;
  illustration: { src: string; alt: string };
  /** Les douleurs du secteur, formulées comme le prospect les vit */
  douleurs: readonly string[];
  /** Cas d'usage concrets par métier */
  casUsage: readonly SecteurCasUsage[];
  /** Noms des clients (clientLogos) dont on affiche le témoignage */
  temoinClients: readonly string[];
  /** Slugs des formations les plus pertinentes pour ce secteur */
  formationsLiees: readonly string[];
  /**
   * Titre / sous-titre du CTA final.
   *
   * Optionnels et absents côté FR : la page française porte un CTA générique
   * défini dans le gabarit. Les masters EN, eux, imposent un CTA *propre à
   * chaque secteur* — c'est une correction explicite de l'audit « slop », qui
   * a relevé que le même titre décliné par simple substitution de nom
   * (« What would AI change in your agency / firm / practice ? ») revenait sur
   * six pages. Trois pages au moins devaient donc le réécrire nativement.
   *
   * Laisser le champ optionnel plutôt que de l'imposer aux deux langues évite
   * de toucher au FR, qui n'est pas concerné par cet arbitrage.
   */
  ctaTitle?: string;
  ctaSubtitle?: string;
  /**
   * Accroche courte de la carte sur le hub.
   *
   * Absente côté FR : le hub y dérive l'accroche de `intro.split(". ")[1]`,
   * c'est-à-dire la deuxième phrase de l'intro, quelle qu'elle soit. Les
   * masters EN fournissent au contraire des accroches écrites POUR le hub, qui
   * ne recopient pas le contenu des pages filles. On les respecte plutôt que
   * de leur appliquer le découpage.
   */
  teaser?: string;
  faq: readonly SecteurFaq[];
};

export const secteurs: readonly Secteur[] = [
  {
    slug: "agences-communication",
    nom: "Agences de communication",
    badge: "Agences & création",
    titre:
      "L'IA pour les agences de communication : produire plus, sans diluer la créa",
    metaTitle: "IA pour agences de communication : production, créa, marges",
    metaDescription:
      "Transformation IA pour agences de communication et de publicité : accélérer la production créative, protéger les marges et former les équipes. Cas réels d'agences accompagnées.",
    intro:
      "Les agences vivent une pression double : des clients qui demandent plus vite et moins cher, et une IA qui produit déjà une partie du travail facturé. Les agences qui gagnent ne sont pas celles qui résistent : ce sont celles qui intègrent l'IA dans leur production avant leurs concurrents, et avant leurs clients.",
    illustration: {
      src: "/images/3d/etoiles-ia.png",
      alt: "IA pour les agences de communication",
    },
    douleurs: [
      "Vos clients commencent à faire en interne avec ChatGPT ce qu'ils vous payaient hier",
      "Les délais de production écrasent vos marges, brief après brief",
      "Vos créatifs craignent l'IA au lieu de s'en servir comme d'un levier",
      "Les appels d'offres exigent désormais un volet IA que vous improvisez",
    ],
    casUsage: [
      {
        titre: "Production créative accélérée",
        description:
          "Générer, décliner et adapter les visuels de campagne par canal, en gardant la direction artistique aux mains de vos créatifs. Cycles de production divisés, volume multiplié.",
      },
      {
        titre: "Réponse aux appels d'offres",
        description:
          "Préparer recommandations, moodboards et territoires d'expression en jours plutôt qu'en semaines, avec des équipes qui pilotent l'IA au lieu de la subir.",
      },
      {
        titre: "Social media et déclinaisons",
        description:
          "Industrialiser les déclinaisons multi-formats et multi-plateformes d'une même campagne, sans refaire chaque asset à la main.",
      },
      {
        titre: "Veille et insights consommateurs",
        description:
          "Analyser les tendances, les conversations et les campagnes concurrentes en continu pour nourrir la stratégie et les plannings.",
      },
    ],
    temoinClients: ["Shem's Publicité", "ThinkONE"],
    formationsLiees: [
      "creation-publicite-ia",
      "formation-ai-champions",
      "vibe-coding",
    ],
    faq: [
      {
        question: "L'IA va-t-elle remplacer nos créatifs ?",
        answer:
          "Non, mais elle change leur travail. La direction artistique, l'idée et la relation client restent humaines. Ce qui change : le temps passé à produire, décliner et adapter. Nos formations partent de vos campagnes réelles pour que vos créatifs gardent la main sur l'IA, pas l'inverse.",
      },
      {
        question: "Par où commencer dans une agence ?",
        answer:
          "Par un audit de votre chaîne de production : où partent les heures non facturables, quelles étapes l'IA peut accélérer sans toucher à la qualité. Ensuite, on forme les équipes sur vos propres briefs et on déploie les premiers workflows en production.",
      },
      {
        question: "Vous avez déjà travaillé avec des agences ?",
        answer:
          "Oui : des agences de communication et de publicité en France et au Maroc, sur la production créative, les workflows d'automatisation et la formation des équipes créa. Leurs témoignages sont sur cette page.",
      },
    ],
  },
  {
    slug: "tpe-pme",
    nom: "TPE & PME",
    badge: "TPE / PME France",
    titre:
      "L'IA pour les TPE et PME : des gains concrets, sans DSI ni budget de grand groupe",
    metaTitle: "IA pour TPE et PME en France : par où commencer",
    metaDescription:
      "Transformation IA pour TPE, PME et ETI françaises : automatiser les tâches répétitives, gagner des heures par semaine et former les équipes, sans équipe technique interne.",
    intro:
      "Une PME n'a pas besoin d'un plan IA à trois ans : elle a besoin de gains visibles ce trimestre. Rédaction, devis, relances, reporting, service client : l'IA prend en charge le répétitif, vos équipes gardent le métier. Sans DSI, sans recrutement, sans jargon.",
    illustration: {
      src: "/images/3d/jauge-performance.png",
      alt: "IA pour les TPE et PME",
    },
    douleurs: [
      "Vous savez que l'IA peut vous faire gagner du temps, mais vous ne savez pas par où commencer",
      "Vos concurrents communiquent déjà sur l'IA et vous sentez le retard s'installer",
      "Pas de DSI, pas d'équipe technique : chaque outil ajouté devient un chantier",
      "Vos équipes passent leurs journées sur des tâches qu'une machine ferait mieux",
    ],
    casUsage: [
      {
        titre: "Administratif et back-office",
        description:
          "Devis, factures, relances, saisies : les tâches répétitives automatisées, avec un contrôle humain là où il compte.",
      },
      {
        titre: "Commercial et relation client",
        description:
          "Préparation des rendez-vous, comptes rendus, relances personnalisées et suivi de pipeline : vos commerciaux vendent au lieu de saisir.",
      },
      {
        titre: "Rédaction et communication",
        description:
          "Emails, propositions, contenus web et posts réseaux sociaux produits plus vite, dans le ton de votre entreprise.",
      },
      {
        titre: "Reporting et pilotage",
        description:
          "Vos chiffres consolidés et lisibles chaque semaine, sans y passer vos dimanches.",
      },
    ],
    temoinClients: ["Empruntis", "ESN Engit"],
    formationsLiees: [
      "formation-ai-champions",
      "microsoft-copilot",
      "go-to-market-sales",
    ],
    faq: [
      {
        question: "On est 30 personnes, est-ce que c'est pour nous ?",
        answer:
          "Oui. Nos clients PME vont de 20 à 500 collaborateurs. L'IA n'exige ni DSI ni budget de grand groupe : on commence par les tâches qui coûtent le plus d'heures, on mesure, on étend. Le gain moyen constaté : 7 heures par semaine et par collaborateur formé.",
      },
      {
        question: "Combien de temps avant de voir des résultats ?",
        answer:
          "Les premiers gains arrivent dès les premières semaines : une session de formation suffit pour que vos équipes appliquent l'IA à leurs tâches quotidiennes. Pour les automatisations en production, comptez le premier mois.",
      },
      {
        question: "Nos données sont-elles en sécurité ?",
        answer:
          "C'est cadré dès le départ : choix des outils, réglages de confidentialité, règles d'usage écrites pour vos équipes. Nous configurons des environnements où vos données ne servent jamais à entraîner les modèles.",
      },
    ],
  },
  {
    slug: "sante-biotech-medtech",
    nom: "Santé, biotech & medtech",
    badge: "Santé & sciences de la vie",
    titre:
      "L'IA pour la santé, la biotech et la medtech : rigueur scientifique, temps médical retrouvé",
    metaTitle: "IA pour santé, biotech et medtech : cas d'usage et conformité",
    metaDescription:
      "Transformation IA pour laboratoires, biotechs, medtechs et praticiens : veille scientifique, documentation réglementaire, formation des équipes. Références dans la santé.",
    intro:
      "Dans la santé, l'IA ne remplace ni le médecin ni le scientifique : elle leur rend du temps. Veille bibliographique, documentation réglementaire, synthèses d'études, préparation de dossiers : le travail documentaire qui dévore les journées se compresse, la rigueur reste.",
    illustration: {
      src: "/images/3d/dossier-securite.png",
      alt: "IA pour la santé, biotech et medtech",
    },
    douleurs: [
      "Vos scientifiques passent plus de temps à documenter qu'à chercher",
      "La veille bibliographique et concurrentielle déborde, impossible de tout lire",
      "Les dossiers réglementaires mobilisent des semaines d'experts",
      "Vos équipes veulent utiliser l'IA mais la conformité freine tout",
    ],
    casUsage: [
      {
        titre: "Veille scientifique et bibliographique",
        description:
          "Synthèses d'études, suivi des publications et des essais cliniques du domaine : une veille exhaustive qui prenait des jours, livrée en continu.",
      },
      {
        titre: "Documentation réglementaire",
        description:
          "Préparation et mise en cohérence des dossiers (soumissions, rapports, procédures qualité) avec relecture experte systématique.",
      },
      {
        titre: "Communication médicale et scientifique",
        description:
          "Supports congrès, publications internes, contenus de vulgarisation produits plus vite, validés par vos experts.",
      },
      {
        titre: "Efficacité des équipes support",
        description:
          "Fonctions administratives, qualité et affaires médicales outillées sur leurs tâches quotidiennes, avec un cadre de confidentialité strict.",
      },
    ],
    temoinClients: ["Amgen", "Gepromed"],
    formationsLiees: [
      "formation-ai-champions",
      "maitriser-claude",
      "microsoft-copilot",
    ],
    faq: [
      {
        question: "L'IA est-elle compatible avec nos exigences de conformité ?",
        answer:
          "Oui, à condition de la cadrer : choix d'outils adaptés, environnements où vos données ne servent jamais à l'entraînement des modèles, règles d'usage écrites et validées par la qualité. C'est la première étape de chacune de nos missions santé.",
      },
      {
        question: "Avez-vous des références dans la santé ?",
        answer:
          "Oui, laboratoires pharmaceutiques, biotechs, medtechs et praticiens, en France et au Maroc : formation des équipes scientifiques, veille automatisée, systèmes documentaires. Les témoignages sur cette page en sont issus.",
      },
      {
        question: "Nos équipes ne sont pas techniques, est-ce un frein ?",
        answer:
          "Non. La majorité des professionnels de santé que nous formons ne sont pas techniques. Les formations partent de leurs tâches réelles : rédiger, synthétiser, chercher, documenter. Aucun prérequis.",
      },
    ],
  },
  {
    slug: "esn-services-it",
    nom: "ESN & services IT",
    badge: "ESN / Services numériques",
    titre: "L'IA pour les ESN : livrer plus, staffer mieux, vendre autrement",
    metaTitle: "IA pour ESN et sociétés de services IT : delivery, staffing, avant-vente",
    metaDescription:
      "Transformation IA pour ESN et sociétés de services numériques : avant-vente accélérée, delivery outillé, consultants formés aux assistants de code. Références réelles dans le secteur.",
    intro:
      "Les ESN vivent un paradoxe : elles vendent de la transformation numérique et restent artisanales sur leurs propres process. Avant-vente, staffing, comptes rendus, delivery : l'IA change l'économie du modèle jour-homme, et vos clients commencent à exiger des consultants augmentés.",
    illustration: {
      src: "/images/3d/chip-strategie.png",
      alt: "IA pour les ESN et sociétés de services IT",
    },
    douleurs: [
      "Vos réponses aux appels d'offres mobilisent vos meilleurs profils pendant des jours, sans garantie de gain",
      "Vos clients demandent des consultants formés à l'IA et votre vivier ne suit pas",
      "Le modèle jour-homme s'érode : ce que vous facturez 5 jours, l'IA le fait en 1",
      "Comptes rendus, staffing, intercontrats : vos fonctions internes tournent comme en 2015",
    ],
    casUsage: [
      {
        titre: "Avant-vente et appels d'offres",
        description:
          "Mémoires techniques, réponses structurées et chiffrages préparés en heures plutôt qu'en jours, à partir de vos références réelles.",
      },
      {
        titre: "Consultants augmentés",
        description:
          "Vos équipes formées aux assistants de code (Claude Code, Cursor, Codex) : un différenciateur commercial concret face aux clients qui l'exigent.",
      },
      {
        titre: "Delivery et comptes rendus",
        description:
          "Comptes rendus, documentation projet et reporting client générés au fil de l'eau, relus par vos consultants au lieu d'être rédigés de zéro.",
      },
      {
        titre: "Staffing et intercontrats",
        description:
          "Matching profils-missions accéléré et montée en compétence des intercontrats sur l'IA plutôt que du temps perdu.",
      },
    ],
    temoinClients: ["ESN Engit", "Sage"],
    formationsLiees: ["vibe-coding", "formation-ai-champions", "go-to-market-sales"],
    faq: [
      {
        question: "Pourquoi une ESN ferait-elle appel à un cabinet IA externe ?",
        answer:
          "Pour la même raison que vos clients font appel à vous : la vitesse. Vos équipes savent faire, mais elles sont staffées chez les clients. Nous installons les systèmes internes et formons vos consultants sans mobiliser votre delivery facturable.",
      },
      {
        question: "Formez-vous les consultants aux assistants de code ?",
        answer:
          "Oui, c'est notre programme Vibe Coding : Claude Code, Cursor et Codex appliqués à de vrais projets. Des consultants formés à l'IA se vendent mieux et livrent plus vite — le calcul est rapide sur un TJM.",
      },
      {
        question: "Avez-vous des références dans les services IT ?",
        answer:
          "Oui, dont l'ESN Engit — le témoignage de son président est sur cette page. Nous travaillons aussi avec des éditeurs de logiciels comme Sage.",
      },
    ],
  },
  {
    slug: "conseil-etudes-marche",
    nom: "Conseil & études de marché",
    badge: "Conseil / Market research",
    titre: "L'IA pour le conseil et les études : analyser plus vite, livrer plus profond",
    metaTitle: "IA pour cabinets de conseil et études de marché : analyse, synthèse, livrables",
    metaDescription:
      "Transformation IA pour cabinets de conseil et instituts d'études : analyse documentaire, synthèses d'entretiens, livrables accélérés. Références réelles dans le conseil et la recherche.",
    intro:
      "Le métier du conseil et des études, c'est transformer de l'information en recommandation. Exactement ce que l'IA générative accélère le mieux : analyse documentaire, synthèses d'entretiens, revues de marché, production de livrables. Les cabinets qui s'outillent livrent plus profond, plus vite, à marge égale.",
    illustration: {
      src: "/images/3d/dossier-grille.png",
      alt: "IA pour le conseil et les études de marché",
    },
    douleurs: [
      "Vos consultants passent plus de temps à mettre en forme qu'à réfléchir",
      "Les retranscriptions et synthèses d'entretiens dévorent vos budgets d'étude",
      "Vos clients attendent des insights plus vite, à budget constant",
      "Chaque livrable repart d'une page blanche au lieu de capitaliser sur les précédents",
    ],
    casUsage: [
      {
        titre: "Synthèses d'entretiens et verbatims",
        description:
          "Entretiens qualitatifs retranscrits, codés et synthétisés en heures : vos chargés d'études passent du traitement à l'analyse.",
      },
      {
        titre: "Revues documentaires et veille",
        description:
          "Analyse de corpus, benchmarks concurrentiels et revues de littérature accélérés, avec sources tracées.",
      },
      {
        titre: "Production de livrables",
        description:
          "Rapports, présentations et notes de synthèse structurés dans vos formats, relus par vos consultants au lieu d'être rédigés de zéro.",
      },
      {
        titre: "Capitalisation des connaissances",
        description:
          "Vos études passées deviennent une base interrogeable : chaque nouvelle mission démarre avec la mémoire du cabinet.",
      },
    ],
    temoinClients: ["ThinkONE"],
    formationsLiees: ["formation-ai-champions", "maitriser-claude", "microsoft-copilot"],
    faq: [
      {
        question: "L'IA peut-elle traiter nos entretiens confidentiels ?",
        answer:
          "Oui, avec le bon cadre : environnements où vos données ne servent jamais à entraîner les modèles, anonymisation quand elle s'impose, règles d'usage écrites. C'est la première étape de chaque mission avec un cabinet d'études.",
      },
      {
        question: "La qualité d'analyse est-elle au niveau ?",
        answer:
          "L'IA ne remplace pas le jugement du consultant : elle élimine le travail de traitement qui l'empêche d'analyser. La relecture experte reste systématique — c'est elle qui fait la valeur du livrable.",
      },
      {
        question: "Avez-vous des références dans le conseil ?",
        answer:
          "Oui, dont ThinkONE, cabinet de recherche et conseil — le témoignage de sa Managing Partner est sur cette page.",
      },
    ],
  },
  {
    slug: "medecins-cabinets",
    nom: "Médecins & cabinets médicaux",
    badge: "Médecins / Praticiens",
    titre: "L'IA pour les médecins : moins d'administratif, plus de temps médical",
    metaTitle: "IA pour médecins et cabinets médicaux : comptes rendus, courriers, organisation",
    metaDescription:
      "L'IA au service des médecins et cabinets médicaux : comptes rendus dictés, courriers accélérés, organisation du cabinet. Accompagnement par un cabinet référencé dans la santé.",
    intro:
      "Un médecin passe jusqu'à deux heures par jour sur les comptes rendus, courriers et tâches administratives. L'IA générative rend ce temps au soin : dictée intelligente, courriers types personnalisés, synthèses de dossiers. Sans toucher au secret médical, avec un cadre de confidentialité strict.",
    illustration: {
      src: "/images/3d/cible-audit-chips.png",
      alt: "IA pour les médecins et cabinets médicaux",
    },
    douleurs: [
      "Deux heures par jour de comptes rendus et de courriers après les consultations",
      "Une patientèle qui augmente, un temps médical qui rétrécit",
      "Des outils métier fermés qui ne parlent pas entre eux",
      "L'envie d'utiliser l'IA, mais la crainte légitime pour le secret médical",
    ],
    casUsage: [
      {
        titre: "Comptes rendus et courriers",
        description:
          "Dictée ou notes brèves transformées en comptes rendus structurés et courriers confraternels dans votre style, relus avant envoi.",
      },
      {
        titre: "Synthèses de dossiers",
        description:
          "Antécédents, examens et courriers résumés avant la consultation : vous arrivez préparé, le patient le sent.",
      },
      {
        titre: "Organisation du cabinet",
        description:
          "Rappels, files d'attente, réponses aux demandes récurrentes : le secrétariat augmenté, pas remplacé.",
      },
      {
        titre: "Veille et formation continue",
        description:
          "Synthèses des publications de votre spécialité, préparées automatiquement au rythme qui vous convient.",
      },
    ],
    temoinClients: ["Addictest"],
    formationsLiees: ["formation-ai-champions", "maitriser-claude"],
    faq: [
      {
        question: "Et le secret médical ?",
        answer:
          "C'est le point de départ de chaque mission santé : outils configurés pour que les données ne servent jamais à entraîner les modèles, hébergements adaptés, règles d'usage écrites. Rien ne se déploie sans ce cadre.",
      },
      {
        question: "Travaillez-vous avec des praticiens ?",
        answer:
          "Oui — praticiens libéraux et structures de santé, en France et au Maroc, de la formation individuelle à l'installation de systèmes complets. Le secteur santé est une de nos références (Amgen, Gepromed, acteurs de la e-santé comme Addictest).",
      },
      {
        question: "Faut-il être à l'aise avec la technologie ?",
        answer:
          "Non. Les formations partent de vos tâches réelles : dicter, rédiger, synthétiser. La majorité des professionnels de santé que nous formons n'avaient jamais utilisé l'IA avant la première session.",
      },
    ],
  },
  {
    slug: "hotellerie-tourisme-loisirs",
    nom: "Hôtellerie, tourisme & loisirs",
    badge: "Hôtellerie / Tourisme / Loisirs",
    titre: "L'IA pour l'hôtellerie, le tourisme et les loisirs : la relation client à l'échelle",
    metaTitle: "IA pour hôtellerie, tourisme et loisirs : relation client, contenus, opérations",
    metaDescription:
      "Transformation IA pour l'hôtellerie, le tourisme et les loisirs : relation client multilingue 24/7, contenus, opérations. Références réelles : casinos, tourisme institutionnel.",
    intro:
      "Dans l'hôtellerie, le tourisme et les loisirs, chaque interaction compte et la saisonnalité ne pardonne pas. L'IA absorbe le volume : demandes clients en toutes langues 24/7, contenus multilingues, opérations pilotées. Nous l'avons déployé du casino au tourisme institutionnel — dont un chatbot WhatsApp qui économise 18 000 $ par an.",
    illustration: {
      src: "/images/3d/roadmap-roi.png",
      alt: "IA pour l'hôtellerie, le tourisme et les loisirs",
    },
    douleurs: [
      "Des demandes clients en dix langues, à toute heure, que vos équipes absorbent mal en haute saison",
      "Des avis en ligne qui s'accumulent sans réponse personnalisée",
      "Des contenus (offres, fiches, réseaux sociaux) à décliner sans fin",
      "Des équipes saisonnières à former vite, qui repartent avec le savoir",
    ],
    casUsage: [
      {
        titre: "Relation client 24/7 multilingue",
        description:
          "Chatbots WhatsApp et web qui répondent dans la langue du client, branchés sur vos systèmes de réservation. Notre déploiement de référence : 80 % des demandes gérées en autonomie, 18 000 $ économisés par an.",
      },
      {
        titre: "Avis et e-réputation",
        description:
          "Réponses personnalisées aux avis dans le ton de votre maison, veille des plateformes et synthèses pour la direction.",
      },
      {
        titre: "Contenus et offres multilingues",
        description:
          "Fiches, newsletters, réseaux sociaux et offres saisonnières déclinés en plusieurs langues, sans agence à chaque itération.",
      },
      {
        titre: "Opérations et reporting",
        description:
          "Prévisions d'activité, synthèses quotidiennes et pilotage par site : la direction voit tout, chaque matin.",
      },
    ],
    temoinClients: ["Groupe Partouche"],
    formationsLiees: ["formation-ai-champions", "creation-publicite-ia", "microsoft-copilot"],
    faq: [
      {
        question: "Un chatbot IA peut-il vraiment gérer nos clients ?",
        answer:
          "Oui, sur le volume répétitif — horaires, réservations, demandes types — avec transfert à l'humain dès que c'est nécessaire. Notre déploiement de référence dans le tourisme gère 80 % des demandes en autonomie, 24h/24 et en plusieurs langues.",
      },
      {
        question: "Avez-vous des références dans le secteur ?",
        answer:
          "Oui : le Groupe Partouche dans les loisirs (son témoignage est sur cette page) et un office de tourisme international pour qui nous avons déployé un chatbot WhatsApp multilingue.",
      },
      {
        question: "Comment gérez-vous la saisonnalité des équipes ?",
        answer:
          "En documentant tout dans des systèmes qui restent : les playbooks et les agents ne repartent pas à la fin de la saison. Les nouvelles équipes sont opérationnelles en jours, pas en semaines.",
      },
    ],
  },
  {
    slug: "banque-assurance-courtage",
    nom: "Banque, assurance & courtage",
    badge: "Banque / Assurance / Courtage",
    titre: "L'IA pour la banque, l'assurance et le courtage : conformité comprise",
    metaTitle: "IA pour banque, assurance et courtage : dossiers, relation client, conformité",
    metaDescription:
      "Transformation IA pour banques, assureurs et courtiers : montage de dossiers accéléré, relation client augmentée, conformité intégrée. Références réelles dans le courtage et la banque.",
    intro:
      "Dans la banque, l'assurance et le courtage, le temps se perd dans les dossiers : pièces à collecter, saisies, relances, conformité à documenter. L'IA absorbe ce travail de dossier pour rendre du temps au conseil — avec la conformité intégrée dès la conception, pas rajoutée après.",
    illustration: {
      src: "/images/3d/jauge-numero1.png",
      alt: "IA pour la banque, l'assurance et le courtage",
    },
    douleurs: [
      "Vos conseillers passent plus de temps sur les dossiers que devant les clients",
      "Les relances et pièces manquantes font traîner chaque signature",
      "La conformité documentaire mobilise des équipes entières",
      "Vos concurrents digitaux traitent en heures ce qui vous prend des jours",
    ],
    casUsage: [
      {
        titre: "Montage et complétude des dossiers",
        description:
          "Pièces vérifiées, informations extraites et dossiers pré-remplis automatiquement : vos équipes contrôlent au lieu de saisir. Un de nos clients courtage a vu son ROI dès le premier mois.",
      },
      {
        titre: "Relation client et relances",
        description:
          "Relances personnalisées, réponses aux demandes récurrentes et préparation des rendez-vous : le conseiller arrive informé, le client se sent suivi.",
      },
      {
        titre: "Conformité documentaire",
        description:
          "Contrôles de cohérence, pistes d'audit et documentation générés au fil de l'eau, validés par vos équipes conformité.",
      },
      {
        titre: "Synthèses et pilotage",
        description:
          "Production, portefeuilles et alertes synthétisés chaque semaine pour la direction, sans exports manuels.",
      },
    ],
    temoinClients: ["Empruntis"],
    formationsLiees: ["formation-ai-champions", "microsoft-copilot", "go-to-market-sales"],
    faq: [
      {
        question: "L'IA est-elle compatible avec nos obligations réglementaires ?",
        answer:
          "Oui, à condition de l'intégrer dès la conception : traçabilité des traitements, validation humaine sur les décisions, données cloisonnées. Nous documentons chaque système pour vos équipes conformité et votre DPO.",
      },
      {
        question: "Avez-vous des références dans le secteur financier ?",
        answer:
          "Oui : Empruntis dans le courtage de crédits (le témoignage de sa directrice est sur cette page) et des acteurs bancaires internationaux comme Emirates NBD.",
      },
      {
        question: "Par où commencer dans une structure régulée ?",
        answer:
          "Par un audit qui cartographie les cas d'usage à fort gain et faible risque réglementaire : le montage de dossiers et les synthèses internes d'abord, la relation client ensuite. Chaque étape passe par votre conformité.",
      },
    ],
  },
] as const;

export function getSecteur(slug: string): Secteur | undefined {
  return secteurs.find((s) => s.slug === slug);
}
