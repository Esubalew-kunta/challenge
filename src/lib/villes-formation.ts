/**
 * Pages locales "Formation IA + ville" — SEO local + GEO.
 * Règle anti-doorway : chaque ville a un angle local réel et un contenu
 * différencié (tissu économique, références, maillage sectoriel).
 * Faits vérifiés uniquement : bureaux réels = Paris 8e + Casablanca.
 * Ailleurs : intervention en présentiel dans les locaux du client.
 */

export type VilleFaq = {
  question: string;
  answer: string;
};

export type VilleFormation = {
  slug: string;
  ville: string;
  region: string;
  metaTitle: string;
  metaDescription: string;
  /** H1 */
  titre: string;
  /** Intro answer-first — le passage citable par les moteurs IA */
  intro: string;
  /** Ancrage local : à qui on s'adresse dans cette ville, concrètement */
  tissuEco: readonly string[];
  /** Comment on intervient sur place */
  modalites: string;
  /** Slug du secteur le plus pertinent localement (maillage) */
  secteurLie?: string;
  /** Noms clients (clientLogos) pertinents localement — déjà publics */
  referencesLocales: readonly string[];
  faq: readonly VilleFaq[];
};

export const villesFormation: readonly VilleFormation[] = [
  {
    slug: "paris",
    ville: "Paris",
    region: "Île-de-France",
    metaTitle: "Formation IA à Paris : hands-on, dans vos locaux ou aux nôtres",
    metaDescription:
      "Formation IA pour entreprises à Paris et en Île-de-France : 6 programmes hands-on sur vos cas d'usage réels, animés par les ingénieurs qui déploient l'IA en production. Bureaux Paris 8e.",
    titre:
      "Formation IA à Paris : vos équipes formées sur leurs cas d'usage réels",
    intro:
      "AI Makers forme les équipes des entreprises parisiennes à l'IA générative depuis ses bureaux du 8e arrondissement (60 rue François 1er). Six programmes hands-on, du débutant à l'avancé, animés dans vos locaux partout en Île-de-France ou chez nous, sur vos tâches réelles, pas sur des slides.",
    tissuEco: [
      "Sièges sociaux et grands comptes : des programmes qui passent l'échelle, de la formation AI Champions du COMEX à la formation de centaines de collaborateurs",
      "Agences de communication et de création parisiennes : production créative, réponse aux appels d'offres, workflows IA",
      "Scale-ups et ETI franciliennes : automatisation des opérations, formation des équipes commerciales et support",
    ],
    modalites:
      "En présentiel dans vos locaux à Paris et en Île-de-France, dans nos bureaux du 8e arrondissement, ou à distance. Les sessions partent de vos processus : nous préparons chaque formation à partir de vos documents et outils réels.",
    secteurLie: "agences-communication",
    referencesLocales: ["Délifrance", "Empruntis", "Amgen"],
    faq: [
      {
        question: "Où se déroulent vos formations IA à Paris ?",
        answer:
          "Au choix : dans vos locaux partout à Paris et en Île-de-France, dans nos bureaux du 60 rue François 1er (Paris 8e), ou à distance. La plupart de nos clients parisiens choisissent leurs propres locaux pour former les équipes sur leur environnement de travail réel.",
      },
      {
        question: "Formez-vous les grandes équipes parisiennes ?",
        answer:
          "Oui. Nous formons de la session COMEX de 10 personnes au déploiement sur plusieurs centaines de collaborateurs, par vagues et par métier. Plus de 10 000 professionnels formés en France et au Maroc.",
      },
      {
        question: "Quels programmes proposez-vous à Paris ?",
        answer:
          "Les six programmes du catalogue : Formation AI Champions, Vibe Coding, Création & Publicité, Go-to-Market & Sales, Microsoft Copilot et Maîtriser Claude en entreprise. Chaque programme est adapté à vos métiers et vos outils.",
      },
    ],
  },
  {
    slug: "nice",
    ville: "Nice",
    region: "Côte d'Azur",
    metaTitle: "Formation IA à Nice : Côte d'Azur, Sophia Antipolis et Monaco",
    metaDescription:
      "Formation IA pour entreprises à Nice, Sophia Antipolis et Monaco : programmes hands-on sur vos cas réels, dispensés par notre bureau de Nice. Tech, ESN, hôtellerie-tourisme. Références locales dont l'AS Monaco.",
    titre:
      "Formation IA à Nice : de Sophia Antipolis à Monaco, des équipes qui produisent avec l'IA",
    intro:
      "AI Makers forme les équipes des entreprises de Nice, de Sophia Antipolis et de Monaco à l'IA générative, en présentiel sur la Côte d'Azur, depuis notre bureau de Nice. Six programmes hands-on sur vos cas d'usage réels, dispensés par des formateurs basés dans la région. Nous comptons déjà des références locales, dont l'AS Monaco.",
    tissuEco: [
      "Écosystème tech de Sophia Antipolis : des équipes produit et techniques qui passent à la vitesse supérieure avec les assistants de code et les agents",
      "Hôtellerie, tourisme et événementiel azuréens : relation client, contenus multilingues et back-office automatisés",
      "Sport business et organisations monégasques : l'AS Monaco fait partie de nos références régionales",
    ],
    modalites:
      "En présentiel dans vos locaux à Nice, Sophia Antipolis, Cannes ou Monaco (notre bureau est à Nice : intervention sous 48h sur toute la Côte d'Azur), ou à distance. Chaque session est préparée à partir de vos documents, vos outils et vos processus.",
    referencesLocales: ["AS Monaco", "Groupe Partouche"],
    secteurLie: "esn-services-it",
    faq: [
      {
        question: "Couvrez-vous toute la Côte d'Azur ?",
        answer:
          "Oui : Nice, Sophia Antipolis, Cannes, Antibes, Monaco et le reste des Alpes-Maritimes. En présentiel dans vos locaux, ou à distance pour les suites de parcours.",
      },
      {
        question: "Avez-vous des références dans la région ?",
        answer:
          "Oui, dont l'AS Monaco. Nos références couvrent le sport business, les services et l'hôtellerie, des secteurs où le gain de temps sur la relation client et les contenus se mesure vite.",
      },
      {
        question: "Quel programme pour une équipe tech de Sophia Antipolis ?",
        answer:
          "Vibe Coding : piloter les assistants de code (Claude Code, Cursor, Codex) pour accélérer le développement et outiller les profils produit. Pour le reste de l'entreprise, la formation AI Champions pose le socle commun.",
      },
    ],
  },
  {
    slug: "strasbourg",
    ville: "Strasbourg",
    region: "Grand Est",
    metaTitle:
      "Formation IA à Strasbourg : entreprises et institutions du Grand Est",
    metaDescription:
      "Formation IA pour entreprises à Strasbourg et dans le Grand Est : programmes hands-on sur vos cas réels, en présentiel dans vos locaux. Industrie, institutions, entreprises frontalières.",
    titre: "Formation IA à Strasbourg : le Grand Est passe à l'IA appliquée",
    intro:
      "AI Makers forme les équipes des entreprises strasbourgeoises et du Grand Est à l'IA générative, en présentiel dans leurs locaux. Six programmes hands-on qui partent des tâches réelles de vos équipes, de la formation AI Champions aux outils métier comme Copilot ou Claude.",
    tissuEco: [
      "Industrie du Grand Est : documentation technique, qualité, reporting. Les fonctions support gagnent des heures chaque semaine",
      "Entreprises frontalières et exportatrices : rédaction et traduction multilingues accélérées par l'IA, échanges franco-allemands fluidifiés",
      "Santé et medtech alsaciennes : nous accompagnons déjà Gepromed, medtech strasbourgeoise, sur la formation et les systèmes IA",
    ],
    modalites:
      "En présentiel dans vos locaux à Strasbourg et dans tout le Grand Est (Mulhouse, Colmar, Metz, Nancy), ou à distance. Le contenu est co-construit en amont à partir de vos processus réels.",
    referencesLocales: ["Gepromed", "Schneider Electric"],
    faq: [
      {
        question: "Intervenez-vous en présentiel à Strasbourg ?",
        answer:
          "Oui. Nos formateurs se déplacent dans vos locaux à Strasbourg et dans tout le Grand Est. Le format hybride (première session sur place, suites à distance) fonctionne bien pour les parcours en plusieurs sessions.",
      },
      {
        question:
          "Nos équipes travaillent en français et en allemand, est-ce un sujet ?",
        answer:
          "C'est même un des premiers gains : l'IA générative excelle en rédaction et traduction multilingues. Les entreprises frontalières y trouvent des cas d'usage immédiats : emails, documentation, propositions commerciales dans les deux langues.",
      },
      {
        question: "Quels programmes recommandez-vous pour une première étape ?",
        answer:
          "La formation AI Champions pour poser le socle commun, puis Microsoft Copilot si vos équipes vivent dans l'environnement Microsoft 365, le cas le plus fréquent dans l'industrie et les services du Grand Est.",
      },
    ],
  },
  {
    slug: "montpellier",
    ville: "Montpellier",
    region: "Occitanie",
    metaTitle:
      "Formation IA à Montpellier : santé, medtech et entreprises d'Occitanie",
    metaDescription:
      "Formation IA pour entreprises à Montpellier et en Occitanie : programmes hands-on sur vos cas réels. Écosystème santé et medtech, PME régionales, références dans les sciences de la vie.",
    titre:
      "Formation IA à Montpellier : la ville santé et medtech se forme à l'IA",
    intro:
      "AI Makers forme les équipes des entreprises de Montpellier et d'Occitanie à l'IA générative, en présentiel dans leurs locaux. Un ancrage fort dans la santé et les sciences de la vie, l'écosystème qui fait la force de Montpellier, avec des références comme Amgen dans le secteur.",
    tissuEco: [
      "Santé, biotech et medtech montpelliéraines : veille scientifique, documentation réglementaire et communication médicale accélérées, avec la conformité en premier réflexe",
      "PME et ETI d'Occitanie : back-office, commercial et reporting automatisés, sans DSI ni budget de grand groupe",
      "Startups et scale-ups locales : des équipes outillées sur les assistants de code et les agents dès les premiers recrutements",
    ],
    modalites:
      "En présentiel dans vos locaux à Montpellier et en Occitanie (Nîmes, Toulouse, Perpignan), ou à distance. Pour les acteurs de la santé, le cadre de confidentialité est posé avant la première session.",
    secteurLie: "sante-biotech-medtech",
    referencesLocales: ["Amgen"],
    faq: [
      {
        question: "Travaillez-vous avec le secteur santé à Montpellier ?",
        answer:
          "C'est un de nos secteurs de référence : laboratoires, biotechs, medtechs et praticiens. Veille bibliographique, documentation réglementaire, formation des équipes scientifiques, avec un cadre de confidentialité validé par la qualité avant de commencer.",
      },
      {
        question: "Et pour une PME régionale hors santé ?",
        answer:
          "Les mêmes programmes s'appliquent : la formation AI Champions pour poser le socle, puis les programmes métier (commercial, bureautique Copilot, création). Le gain moyen constaté : 7 heures par semaine et par collaborateur formé.",
      },
      {
        question: "Le présentiel est-il possible partout en Occitanie ?",
        answer:
          "Oui : Montpellier, Nîmes, Toulouse, Perpignan et le reste de la région. Le format hybride fonctionne bien pour les parcours en plusieurs sessions.",
      },
    ],
  },
  {
    slug: "casablanca",
    ville: "Casablanca",
    region: "Maroc",
    metaTitle:
      "Formation IA à Casablanca : équipe AI Makers sur place au Maroc",
    metaDescription:
      "Formation IA pour entreprises à Casablanca et au Maroc : programmes hands-on en français, équipe AI Makers basée au Maroc (Casablanca), références marocaines. Agences, banques, industriels.",
    titre:
      "Formation IA à Casablanca : une équipe sur place, des références marocaines",
    intro:
      "AI Makers forme les équipes des entreprises casablancaises à l'IA générative avec une différence majeure : notre entité marocaine et notre équipe sur place (Casablanca). Pas de formateur parachuté de Paris, mais des références locales comme Shem's Publicité ou Tribal DDB, et des programmes adaptés au marché marocain.",
    tissuEco: [
      "Agences de communication et de publicité casablancaises : production créative, déclinaisons de campagnes et workflows IA, notre secteur le plus actif au Maroc",
      "Banques, assurances et grands groupes marocains : formation AI Champions des équipes, automatisation du back-office, cadre de confidentialité strict",
      "Industriels et exportateurs : documentation, reporting et échanges internationaux accélérés par l'IA",
    ],
    modalites:
      "En présentiel dans vos locaux à Casablanca et partout au Maroc, depuis notre bureau de Casablanca, ou à distance. Formations en français, adaptées aux outils et processus de vos équipes.",
    secteurLie: "agences-communication",
    referencesLocales: ["Shem's Publicité", "Tribal DDB", "ThinkONE"],
    faq: [
      {
        question: "Avez-vous vraiment une équipe au Maroc ?",
        answer:
          "Oui : AI Makers a une entité marocaine et un bureau à Casablanca. Nos formateurs interviennent à Casablanca, Rabat et partout au Maroc, sans les coûts ni les délais d'un cabinet purement parisien.",
      },
      {
        question: "Quelles références avez-vous au Maroc ?",
        answer:
          "Des agences de communication comme Shem's Publicité et Tribal DDB, des cabinets de conseil comme ThinkONE, et des missions dans plusieurs secteurs. Plus de 10 000 professionnels formés en France et au Maroc.",
      },
      {
        question: "Les formations sont-elles adaptées au contexte marocain ?",
        answer:
          "Oui : en français, sur les outils réellement utilisés par vos équipes, avec des cas d'usage tirés de vos processus. La facturation passe par notre entité marocaine pour les clients marocains.",
      },
    ],
  },
  {
    slug: "lyon",
    ville: "Lyon",
    region: "Auvergne-Rhône-Alpes",
    metaTitle: "Formation IA à Lyon : industrie, pharma et ETI de la région",
    metaDescription:
      "Formation IA pour entreprises à Lyon et en Auvergne-Rhône-Alpes : programmes hands-on sur vos cas réels, en présentiel dans vos locaux. Industrie, santé-pharma, banque, ETI familiales.",
    titre:
      "Formation IA à Lyon : la deuxième place économique de France passe aux systèmes",
    intro:
      "AI Makers forme les équipes des entreprises lyonnaises à l'IA générative, en présentiel dans leurs locaux. Industrie, santé-pharma autour du Lyonbiopôle, banques et ETI familiales de la région : six programmes hands-on qui partent des tâches réelles de vos équipes.",
    tissuEco: [
      "Industrie et ETI familiales de la région lyonnaise : documentation, qualité, reporting automatisés, avec des équipes formées sur leurs propres dossiers",
      "Santé et sciences de la vie autour du Lyonbiopôle : veille scientifique, documentation réglementaire, communication médicale. Notre secteur de référence",
      "Banque, assurance et services : back-office, conformité documentaire et relation client augmentés par l'IA",
    ],
    modalites:
      "En présentiel dans vos locaux à Lyon et dans toute la région (Villeurbanne, Saint-Étienne, Grenoble, Annecy), ou à distance. Chaque session est préparée à partir de vos processus réels.",
    secteurLie: "sante-biotech-medtech",
    referencesLocales: ["Amgen", "Délifrance"],
    faq: [
      {
        question: "Intervenez-vous en présentiel à Lyon ?",
        answer:
          "Oui, dans vos locaux à Lyon et dans toute la région Auvergne-Rhône-Alpes. Le format hybride fonctionne bien pour les parcours en plusieurs sessions : première session sur place, suites à distance.",
      },
      {
        question: "Travaillez-vous avec le secteur santé-pharma lyonnais ?",
        answer:
          "La santé et les sciences de la vie sont un de nos secteurs de référence : laboratoires, biotechs et medtechs. Veille bibliographique, documentation réglementaire et formation des équipes scientifiques, avec un cadre de confidentialité posé avant la première session.",
      },
      {
        question: "Quel programme pour une ETI industrielle ?",
        answer:
          "La formation AI Champions pour poser le socle commun à toutes les équipes, puis Microsoft Copilot pour les fonctions support et Go-to-Market & Sales pour les équipes commerciales. Le gain moyen constaté : 7 heures par semaine et par collaborateur formé.",
      },
    ],
  },
  {
    slug: "toulouse",
    ville: "Toulouse",
    region: "Occitanie",
    metaTitle: "Formation IA à Toulouse : aéronautique, spatial et industrie",
    metaDescription:
      "Formation IA pour entreprises à Toulouse : programmes hands-on sur vos cas réels, en présentiel. Aéronautique, spatial, industrie, sous-traitants et PME de la métropole toulousaine.",
    titre:
      "Formation IA à Toulouse : la capitale de l'aéro met l'IA en production",
    intro:
      "AI Makers forme les équipes des entreprises toulousaines à l'IA générative, en présentiel dans leurs locaux. Dans la métropole de l'aéronautique et du spatial, les équipes techniques comme les fonctions support passent des pilotes aux systèmes qui tournent.",
    tissuEco: [
      "Aéronautique, spatial et leur chaîne de sous-traitance : documentation technique, qualité, réponses aux appels d'offres accélérées par l'IA",
      "Bureaux d'études et sociétés d'ingénierie : des profils techniques qui montent vite sur les assistants de code et les agents (notre programme Vibe Coding)",
      "PME et scale-ups de la métropole : back-office, commercial et reporting automatisés, sans DSI dédiée",
    ],
    modalites:
      "En présentiel dans vos locaux à Toulouse et en Occitanie (Blagnac, Colomiers, Albi, Montauban), ou à distance. Le contenu est co-construit à partir de vos processus réels.",
    referencesLocales: ["Schneider Electric", "Sage"],
    faq: [
      {
        question: "Formez-vous les profils techniques toulousains ?",
        answer:
          "Oui, c'est le terrain idéal de notre programme Vibe Coding : piloter Claude Code, Cursor et Codex pour construire des outils internes. Les ingénieurs toulousains y sont particulièrement à l'aise, et le programme s'adresse aussi aux profils non-développeurs.",
      },
      {
        question:
          "L'IA est-elle compatible avec nos exigences de confidentialité industrielle ?",
        answer:
          "Oui, à condition de la cadrer : environnements où vos données ne servent jamais à entraîner les modèles, règles d'usage écrites, validation par vos équipes qualité et sécurité. C'est la première étape de chaque mission dans l'industrie.",
      },
      {
        question: "Intervenez-vous en présentiel à Toulouse ?",
        answer:
          "Oui, dans vos locaux à Toulouse et dans la région. Les formats s'adaptent : formation AI Champions d'une journée, parcours en plusieurs sessions pour les programmes avancés.",
      },
    ],
  },
  {
    slug: "bordeaux",
    ville: "Bordeaux",
    region: "Nouvelle-Aquitaine",
    metaTitle: "Formation IA à Bordeaux : entreprises de Nouvelle-Aquitaine",
    metaDescription:
      "Formation IA pour entreprises à Bordeaux : programmes hands-on sur vos cas réels, en présentiel dans vos locaux. Aéro-défense, négoce, services et PME de la métropole bordelaise.",
    titre:
      "Formation IA à Bordeaux : des équipes qui produisent avec l'IA, pas des pilotes qui traînent",
    intro:
      "AI Makers forme les équipes des entreprises bordelaises à l'IA générative, en présentiel dans leurs locaux. De l'aéro-défense au négoce en passant par les services, six programmes hands-on qui partent des tâches réelles de vos équipes, en Nouvelle-Aquitaine comme partout en France.",
    tissuEco: [
      "Aéronautique, spatial et défense de la région : documentation technique et fonctions support outillées, avec un cadre de confidentialité strict",
      "Négoce, vins et spiritueux : relation client internationale, contenus multilingues et back-office accélérés par l'IA",
      "PME, ETI et scale-ups de la métropole : administratif, commercial et reporting automatisés, des gains dès les premières semaines",
    ],
    modalites:
      "En présentiel dans vos locaux à Bordeaux et en Nouvelle-Aquitaine (Mérignac, Pessac, Libourne, Arcachon), ou à distance. Chaque session part de vos documents et outils réels.",
    referencesLocales: ["Sage", "Empruntis"],
    faq: [
      {
        question: "Intervenez-vous en présentiel à Bordeaux ?",
        answer:
          "Oui, dans vos locaux à Bordeaux et dans toute la Nouvelle-Aquitaine. Une formation AI Champions se tient sur une journée ; les parcours complets s'étalent en plusieurs sessions, sur place ou en hybride.",
      },
      {
        question:
          "Nos équipes export travaillent en plusieurs langues, l'IA aide-t-elle ?",
        answer:
          "C'est un des gains les plus rapides : rédaction et adaptation multilingues des emails, propositions et contenus. Les équipes de négoce et d'export y trouvent des cas d'usage immédiats dès la première session.",
      },
      {
        question: "Par quoi commencer pour une PME bordelaise ?",
        answer:
          "Le diagnostic gratuit de 30 minutes : on cartographie vos cas d'usage prioritaires et le gain réaliste pour chacun. Ensuite, la formation AI Champions pose le socle, et les programmes métier prennent le relais.",
      },
    ],
  },
  {
    slug: "lille",
    ville: "Lille",
    region: "Hauts-de-France",
    metaTitle:
      "Formation IA à Lille : retail, distribution et entreprises du Nord",
    metaDescription:
      "Formation IA pour entreprises à Lille et dans les Hauts-de-France : programmes hands-on sur vos cas réels. Retail et distribution, industrie, services. En présentiel dans vos locaux.",
    titre:
      "Formation IA à Lille : la capitale du retail forme ses équipes aux systèmes IA",
    intro:
      "AI Makers forme les équipes des entreprises lilloises à l'IA générative, en présentiel dans leurs locaux. La métropole qui concentre les sièges de la grande distribution française a un terrain de jeu IA immense : relation client, logistique, contenus produits, back-office.",
    tissuEco: [
      "Retail et distribution : fiches produits, service client, pilotage des opérations, soit les cas d'usage IA les plus rentables du secteur, appliqués à vos propres outils",
      "Industrie et logistique des Hauts-de-France : documentation, qualité et reporting automatisés",
      "Entreprises frontalières : échanges avec la Belgique et les Pays-Bas fluidifiés par la rédaction et la traduction augmentées",
    ],
    modalites:
      "En présentiel dans vos locaux à Lille et dans les Hauts-de-France (Roubaix, Tourcoing, Villeneuve-d'Ascq, Arras, Amiens), ou à distance. Le contenu est co-construit à partir de vos processus réels.",
    secteurLie: "tpe-pme",
    referencesLocales: ["Délifrance", "Emirates NBD"],
    faq: [
      {
        question: "Quels cas d'usage IA pour le retail ?",
        answer:
          "Les plus rentables : génération et déclinaison de fiches produits, service client augmenté, synthèses de performance par magasin, préparation des négociations fournisseurs. Nos formations partent de vos référentiels et outils réels, pas d'exemples génériques.",
      },
      {
        question: "Intervenez-vous en présentiel à Lille ?",
        answer:
          "Oui, dans vos locaux à Lille et dans toute la région. Une formation AI Champions d'une journée, des parcours en plusieurs sessions pour les programmes métier.",
      },
      {
        question: "Formez-vous les équipes commerciales ?",
        answer:
          "Oui, avec le programme Go-to-Market & Sales : prospection augmentée, enrichissement des données clients et séquences personnalisées à grande échelle avec Clay, Lemlist et FullEnrich.",
      },
    ],
  },
  {
    slug: "nantes",
    ville: "Nantes",
    region: "Pays de la Loire",
    metaTitle:
      "Formation IA à Nantes : numérique, agences et industrie de l'ouest",
    metaDescription:
      "Formation IA pour entreprises à Nantes : programmes hands-on sur vos cas réels, en présentiel dans vos locaux. Écosystème numérique, agences, agroalimentaire et industrie de l'ouest.",
    titre:
      "Formation IA à Nantes : l'ouest numérique passe des idées aux systèmes",
    intro:
      "AI Makers forme les équipes des entreprises nantaises à l'IA générative, en présentiel dans leurs locaux. Dans une des métropoles les plus dynamiques du numérique français, la question n'est plus d'expérimenter : c'est de mettre en production.",
    tissuEco: [
      "Écosystème numérique et scale-ups nantaises : des équipes produit et tech qui accélèrent avec les assistants de code et les agents",
      "Agences de communication et studios créatifs de l'ouest : production créative et déclinaisons multicanales augmentées par l'IA",
      "Agroalimentaire et industrie ligérienne : qualité, documentation et reporting automatisés",
    ],
    modalites:
      "En présentiel dans vos locaux à Nantes et dans l'ouest (Saint-Nazaire, Angers, Rennes, La Roche-sur-Yon), ou à distance. Chaque session part de vos processus réels.",
    secteurLie: "agences-communication",
    referencesLocales: ["ThinkONE", "Empruntis"],
    faq: [
      {
        question: "Quel programme pour une équipe tech nantaise ?",
        answer:
          "Vibe Coding : piloter Claude Code, Cursor et Codex pour construire outils et prototypes. Pour le reste de l'entreprise, la formation AI Champions pose le socle commun, et les programmes métier prennent le relais.",
      },
      {
        question: "Travaillez-vous avec les agences de l'ouest ?",
        answer:
          "Les agences de communication sont notre premier secteur : production créative, réponse aux appels d'offres et workflows IA. Notre page dédiée aux agences détaille les cas d'usage et nos références du secteur.",
      },
      {
        question: "Intervenez-vous en présentiel à Nantes ?",
        answer:
          "Oui, dans vos locaux à Nantes et dans tout l'ouest (Rennes, Angers, Saint-Nazaire). Les formats s'adaptent à votre organisation : journée AI Champions ou parcours en plusieurs sessions.",
      },
    ],
  },
  {
    slug: "marseille",
    ville: "Marseille",
    region: "Provence-Alpes-Côte d'Azur",
    metaTitle:
      "Formation IA à Marseille : entreprises d'Aix-Marseille et du sud",
    metaDescription:
      "Formation IA pour entreprises à Marseille et Aix-en-Provence : programmes hands-on sur vos cas réels, en présentiel dans vos locaux. Commerce, logistique portuaire, services et PME du sud.",
    titre:
      "Formation IA à Marseille : la métropole du sud met ses équipes au travail avec l'IA",
    intro:
      "AI Makers forme les équipes des entreprises marseillaises et aixoises à l'IA générative, en présentiel dans leurs locaux. Commerce international, logistique portuaire, services et PME de la métropole : six programmes hands-on qui partent des tâches réelles de vos équipes.",
    tissuEco: [
      "Commerce international et logistique portuaire : documentation, échanges multilingues et suivi d'opérations accélérés par l'IA",
      "PME et ETI de la métropole Aix-Marseille : administratif, commercial et reporting automatisés, sans DSI dédiée",
      "Services, santé et tourisme du sud : relation client et back-office augmentés, des gains dès les premières semaines",
    ],
    modalites:
      "En présentiel dans vos locaux à Marseille, Aix-en-Provence et dans toute la région (Aubagne, Vitrolles, Toulon, Avignon), ou à distance. Le contenu est co-construit à partir de vos processus réels.",
    secteurLie: "tpe-pme",
    referencesLocales: ["Groupe Partouche", "AS Monaco"],
    faq: [
      {
        question: "Intervenez-vous en présentiel à Marseille et Aix ?",
        answer:
          "Oui, dans vos locaux partout dans la métropole Aix-Marseille et en région PACA. Nous intervenons déjà sur la Côte d'Azur : l'AS Monaco fait partie de nos références régionales.",
      },
      {
        question: "Par quoi commencer pour une PME marseillaise ?",
        answer:
          "Le diagnostic gratuit de 30 minutes pour cartographier vos cas d'usage, puis la formation AI Champions pour poser le socle. Le gain moyen constaté : 7 heures par semaine et par collaborateur formé.",
      },
      {
        question:
          "Nos équipes travaillent en plusieurs langues, l'IA aide-t-elle ?",
        answer:
          "C'est un des gains les plus immédiats pour le commerce international : rédaction, traduction et adaptation des emails et documents en plusieurs langues, directement sur vos propres échanges.",
      },
    ],
  },
] as const;

export function getVilleFormation(slug: string): VilleFormation | undefined {
  return villesFormation.find((v) => v.slug === slug);
}
