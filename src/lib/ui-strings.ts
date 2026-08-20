/**
 * Chaînes de gabarit (chrome), par langue.
 *
 * Ce sont les libellés que les composants partagés écrivaient en dur : titres de
 * section, libellés de bouton, bande de preuve. Les masters `[EN]
 * website-content/` ne les couvrent pas — ils ne fournissent l'anglais que pour
 * les champs de DONNÉES des pages. Sans ce dictionnaire, une page EN s'affiche
 * en anglais dans un gabarit français ; c'est le blocage TICKET-I18N-* des
 * notes de réconciliation.
 *
 * Traduction fidèle du FR en ligne, pas de nouvelle promesse. Relecture
 * éditoriale attendue, comme pour site-config.en.ts.
 *
 * Les valeurs FR sont copiées telles quelles depuis les composants : le rendu
 * français ne doit pas bouger d'un caractère.
 */
import type { Locale } from "./i18n";

export const uiStrings = {
  fr: {
    /** CTA principal, répété sur toutes les pages service. */
    bookDiagnostic: "Réserver mon diagnostic gratuit",
    faqBadge: "FAQ",
    faqTitle: "Questions fréquentes",
    relatedTitle: "Pour aller plus loin",
    /** Lien de carte dans le bloc « Pour aller plus loin ». */
    discover: "Découvrir",
    proofKicker: "Ils nous font confiance",
    proofText:
      "Des équipes formées et des systèmes en production chez plus de 50 entreprises, du grand groupe à la PME.",
    /** Accessibilité : lien du logo dans l'en-tête. */
    homeAriaLabel: "AI Makers, accueil",
    /* Bandeau cookies. */
    consentText:
      "Nous utilisons des cookies de mesure d'audience pour comprendre comment le site est utilisé. Rien n'est déposé sans votre accord.",
    consentPolicy: "Politique de confidentialité",
    consentAccept: "Accepter",
    consentRefuse: "Refuser",
    consentAria: "Gestion des cookies",

    /* En-tête. */
    headerCta: "Réserver un appel gratuit",

    /* Pied de page. */
    newsletterTitle: "Restez en avance sur l'IA",
    newsletterBlurb:
      "Le Brief AI-First : cas clients réels, playbooks et retours de terrain sur la transformation IA. Lu par des dirigeants et des responsables ops.",
    footerDiscover: "À découvrir",
    footerTagline:
      "Audit IA · Déploiement · Formation. On reste jusqu'à ce que ça tourne en production.",
    footerBookSlot: "Réserver un créneau",
    footerEmailAria: "Envoyer un email à AI Makers",
    footerContacts: "Vos interlocuteurs",
    footerLinkedinAria: "Profil LinkedIn de",
    footerReachKicker: "Portée internationale",
    footerReachTitle: "Présents en France et au Maroc",
    footerReachText:
      "Missions menées en Europe, Afrique du Nord et Moyen-Orient, en français, en anglais et en arabe.",
    footerRights: "Tous droits réservés.",
    colServices: "Services",
    colTraining: "Formations IA",
    colResources: "Ressources",
    colCompany: "Entreprise",

    /* Bandeau partenaires. */
    partnerStripTitle: "Partenariats, certifications et stack maîtrisée",

    /* Bloc de confiance du CTA. */
    badgeOsez: "Ambassadeur Osez l'IA",
    badgeAnthropic: "Partenaire Anthropic",

    /* Ressources mises en avant dans le pied de page. */
    resPlaybookTitle: "Le Playbook AI-First",
    resPlaybookDetail: "54 pages · guide gratuit",
    resChallengeTitle: "Challenge 30 jours Claude",
    resChallengeDetail: "Un parcours pour démarrer",
    resDiagTitle: "Diagnostic IA en 2 min",
    resDiagDetail: "Votre score sur 24",
    newsletterFootnote:
      "Le Brief AI-First · 1 email utile par semaine · désinscription en 1 clic.",

    /* Formulaire d'identité (LeadGate) — présent sur tous les points de capture. */
    gateName: "Nom et prénom",
    gateNamePlaceholder: "Votre nom et prénom",
    gatePhone: "Téléphone",
    gatePhonePlaceholder: "Votre téléphone",
    gateEmail: "Email professionnel",
    gateEmailPlaceholder: "Votre email professionnel",
    gateCompany: "Entreprise",
    gateCompanyPlaceholder: "Votre entreprise",
    gateWebsite: "Site web",
    gateWebsitePlaceholder: "Votre site web (facultatif)",
    gateSending: "Envoi en cours...",
    gatePrivacy: "Zéro spam. Vos données restent chez nous.",
    gateGenericError: "Une erreur est survenue. Merci de réessayer.",
    gateNetworkError:
      "Impossible d'envoyer le formulaire. Vérifiez votre connexion et réessayez.",
    gateSuccessTitle: "C'est noté.",
    gateSuccessMessage: "Vous recevrez tout par email dans un instant.",
    bookingGateTitle: "Avant de choisir un créneau",
    bookingGateSubtitle:
      "Vos coordonnées, pour qu'on puisse vous recontacter même si vous ne réservez pas aujourd'hui.",
    bookingGateCta: "Voir les créneaux",
    /* Newsletter en deux temps : l'email en ligne, le reste ensuite. */
    newsletterProfilePrompt:
      "C'est noté. Pour qu'on puisse vous répondre personnellement :",
    newsletterProfileCta: "Compléter",
    newsletterProfileSkip: "Plus tard",
    newsletterProfileDone: "Merci.",
    newsletterProfileDoneMessage: "On revient vers vous.",
    newsletterEmailLabel: "Votre email professionnel",
    newsletterSubmitLabel: "S'inscrire à la newsletter",
    newsletterDone: "C'est noté. Vous recevrez le prochain Brief AI-First.",

    /* ---- Chrome de la page d'accueil ---------------------------------- */
    /* Copié tel quel depuis les composants : le rendu FR ne bouge pas. */
    hpTrustLine: "Ils nous font confiance.",
    hpFdeEngineer: "Ingénieur IA",
    hpFdeEngineerAlt: "Ingénieur IA AI Makers",
    hpFdeYourTools: "Vos outils",
    hpFdeConnected: "connecté · à vos outils",
    hpConnectedWeek1: "Connecté à vos outils",
    hpLogosAria: "Nos clients",
    hpLogoHint: "Survolez les logos pour lire les témoignages",
    /** {name} est remplacé par le nom du client. */
    hpLogoAria: "{name} : voir le témoignage",
    hpRibbonCapacity: "3 nouveaux clients par mois maximum",
    hpRibbonOwnership: "Propriété totale des systèmes",
    hpProblemRoi: "ROI ?",
    hpProblemPrioritised: "Priorisé par impact P&L",
    hpProblemOrderChanges: "L'ordre change tous les jours",
    hpProblemConnected: "● Branchés sur votre système",
    hpProblemLonelyTool: "Un outil, sans système.",
    hpProblemIllustration: "Illustration : une journée type.",
    hpMethodIntro:
      "On cartographie vos process, on construit vos systèmes dans vos outils, on forme vos équipes jusqu\u2019à l\u2019autonomie. Six étapes, trois phases, de l\u2019audit à l\u2019autonomie.",
    hpMethodGain: "Ce que vous y gagnez",
    hpMethodDeliverable: "Vous repartez avec",
    hpOfferDetailCta: "Voir le détail complet de l\u2019offre →",
    hpResultsBefore: "Avant",
    hpResultsHow: "Comment",
    fdeBadgeAlt: "Badge",
    fdeEmbedEngineer: "Votre ingénieur IA",
    fdeEmbedInTeam: "Dans votre équipe, pas à distance",
    fdeEmbedLive: "Intégré à vos équipes",
    fdeEmbedPlugs: "Il se branche sur vos outils",
    fdeEmbedResult:
      "Il apprend vos process, construit dans vos outils, et forme vos équipes en direct. Vous avez un ingénieur de plus, présent dans vos réunions du matin.",
    hireAdPublished: "Annonce publiée",
    hireFirstInterviews: "Premiers entretiens, mois 3",
    hireCandidatePicked: "Candidat retenu, mois 6",
    hireFirstWorkstream: "Premier chantier cadré",
    hireStarts: "Il démarre, mois 9",
    hireConnected: "Connecté à vos outils",
    hireFirstSystem: "Premier système mis en production",
    hireCadence: "Cadence adaptée au portefeuille",
    hireCostTag: "101 000 à 122 000 € chargés par an",
    hireDeployTitle: "Déployer un Forward Deployed Engineer",
    hireDeployCostTag: "Une fraction du coût, cadrée au diagnostic",
    svcPhaseFlowFooter: "Mois 6 : tout ça tourne sans nous. Et tout est à vous.",
    svcScannerScore: "Score de maturité IA",
    svcScannerCaption:
      "Chaque process scanné, chiffré, priorisé. Vous repartez avec une roadmap : quoi construire en premier, et pour quel gain.",
    hpResultsAfter: "Après",
    hpCaseKicker: "Étude de cas",
    hpCaseRead: "Lire l\u2019étude",
    hpTestimonialsAll: "Voir tous les témoignages et les études de cas",
    hpTestimonialsAria: "Témoignages et études de cas clients",
    hpCarouselPrev: "Carte précédente",
    hpCarouselNext: "Carte suivante",
    hpBookingSponsor:
      "Chaque mission est sponsorisée par notre CEO, dans un canal Slack dédié avec votre équipe. Pas de hotline, pas de ticket : une conversation.",
    hpBookingChoose: "Choisissez votre créneau",
    hpBookingFree: "Gratuit · 3 places par mois",
    hpBookingIframeTitle: "Réserver un diagnostic gratuit avec Othmane Halim",
    hpBookingNoCommit: "Sans engagement · réponse en général sous 1h.",
    /* Gabarit des pages sectorielles /secteurs/[slug] et /en/industries/[slug].
       Ces libellés étaient écrits en dur dans la page : une page EN montée sur
       le même gabarit rendait de l'anglais sous des titres français
       (TICKET-I18N-SECTORPAGE). Les valeurs FR sont copiées au caractère près
       depuis l'ancienne page — le rendu français ne bouge pas. */
    secHome: "Accueil",
    secSection: "Secteurs",
    secHeroPrimary: "Réserver un diagnostic gratuit",
    secHeroSecondary: "Voir les formations",
    secPainsKicker: "/ Le constat",
    secPainsTitle: "Ce que vous vivez en ce moment",
    secTransformKicker: "/ La transformation",
    secTransformTitle: "De chaque douleur, un système en production",
    secUseCasesKicker: "/ Cas d\u2019usage",
    secUseCasesTitle: "Ce que l\u2019IA change concrètement chez vous",
    secTestimonialsKicker: "/ Ils l\u2019ont fait",
    secTestimonialsTitle: "Dans votre secteur, avec nous",
    secTrainingKicker: "/ Pour vos équipes",
    secTrainingTitle: "Les formations les plus demandées dans votre secteur",
    secOthers: "Autres secteurs :",
    secCtaTitle: "Et dans votre entreprise, l\u2019IA change quoi ?",
    secCtaSubtitle:
      "30 minutes pour cartographier vos cas d\u2019usage prioritaires, que vous travailliez avec nous ou non.",
    secCtaPrimary: "Réserver un diagnostic gratuit",
    secCtaSecondary: "Voir les formations",
    /* Gabarit des pages formation /formation-ia-entreprise/[slug] et
       /en/ai-training-for-teams/[slug]. Valeurs FR copiées au caractère près
       depuis l'ancienne page : le rendu français ne bouge pas. */
    formBreadcrumb: "Formation IA",
    formCoursePrefix: "Formation",
    formCourseLocation: "Dans vos locaux ou à distance",
    formSpecLevel: "Niveau",
    formSpecAudience: "Public visé",
    formSpecFormat: "Format",
    formSpecDuration: "Durée",
    formSpecPrereq: "Prérequis",
    formObjectivesTitle: "Ce que vos équipes vont maîtriser",
    formModulesTitle: "Les modules de la formation",
    formDeliverable: "Vous repartez avec",
    formResultsTitle: "Ce que vos équipes en retirent",
    formQuoteText:
      "Le tarif dépend du format, de l\u2019effectif et du nombre de sessions. Décrivez-nous votre contexte et nous revenons avec une proposition chiffrée.",
    formQuoteCta: "Obtenir mon devis personnalisé",
    formQuoteSecondary: "Recevoir le catalogue",
    formFitTitle: "Trente minutes pour savoir si c\u2019est le bon format",
    formFitText:
      "Un formateur regarde vos process avec vous et vous dit quel format convient, quitte à vous orienter ailleurs. L\u2019échange est gratuit et sans engagement.",
    formBookSlot: "Réserver mon créneau gratuit",
    formTrainersTitle: "Formés par ceux qui déploient l\u2019IA en production",
    formOthersTitle: "Les autres formations du catalogue",
    formFaqCtaTitle: "Une question qui n\u2019est pas dans cette liste ?",
    formFaqCtaText:
      "Écrivez-nous le contexte de vos équipes. Nous répondons avec un format, un déroulé et un budget, ou nous vous disons franchement que ce n\u2019est pas pour vous.",
    formFaqCtaLabel: "Poser ma question",
    formFaqCtaSecondary: "Réserver 30 minutes",
    formFinalTitle: "Cette formation est-elle faite pour vos équipes ?",
    formFinalSubtitle:
      "30 minutes pour analyser vos besoins et identifier le bon format, que vous travailliez avec nous ou non.",
    formFinalSecondary: "Voir tout le catalogue",
    footerRoleCeo: "CEO · Fondateur",
    formQuoteTitlePrefix: "Combien coûte «\u00a0",
    formQuoteTitleSuffix: "\u00a0» pour vos équipes ?",
    formHeroCatalogue: "Recevoir le catalogue",
    formTrainersKicker: "/ Nos formateurs",
    formNavTrainers: "Formateurs",
    formCatFormTitle: "Recevoir le catalogue",
    formCatFormSubtitle:
      "Le catalogue complet des formations, par email, en quelques minutes.",
    formCatFormSuccessTitle: "C\u2019est envoyé !",
    formCatFormSuccessMsg:
      "Vous recevez le catalogue complet des formations par email dans quelques minutes. On revient vers vous rapidement pour cadrer vos besoins.",
    formCatalogueTitle: "Recevez le catalogue complet des formations",
    formCatalogueText:
      "Le détail des 6 programmes, les modalités et des exemples de cas d\u2019usage par métier. On revient vers vous pour cadrer le format adapté à vos équipes, que vous travailliez avec nous ou non.",
    formTrainersText:
      "Nos formateurs sont les ingénieurs et experts qui construisent des systèmes IA chez nos clients, pas des formateurs professionnels qui récitent un support.",
    /** Bouton de fermeture du panneau formateur (aria-label). */
    formateurClose: "Fermer",
    /* Libellés du gabarit formation restés écrits en dur dans la page : ils
       rendaient du français sur les six pages programme anglaises. Valeurs FR
       copiées au caractère près — le rendu français ne bouge pas. */
    formQuoteTeamCta: "Obtenir un devis pour mes équipes",
    formTocAria: "Sommaire de la formation",
    formOthersKicker: "/ Nos programmes",
    /* Compteur animé de la section « problème » de la home. */
    hpCounterRecoverable: "Temps d'équipe récupérable",
    hpCounterAbsorbed: "Temps d'équipe absorbé aujourd'hui",
    hpTeamLink: "L\u2019équipe",
    /* Schéma « fleet » de la page AI Operating System. */
    fleetBrainTitle: "Cerveau IA central",
    fleetBrainSubtitle: "Vos données, unifiées et pilotées",
    fleetAgentLive: "Agent en production",
    fleetCaption:
      "Un seul système. Un agent pour chaque étage de votre organisation.",
    /* Schémas de la page Plateforme Data & IA (data-silos, data-live-report)
       et derniers libellés du gabarit `service-page`. */
    dataSiloed: "en silo",
    dataSiloProduction: "Production",
    dataSiloCommercial: "Commercial",
    dataBronzeDesc: "Données brutes centralisées",
    dataSilverDesc: "Nettoyées et reliées",
    dataGoldDesc: "Prêtes à décider",
    dataGoldCaption:
      "Vos agents de reporting et de pilotage lisent la couche Gold, en temps réel",
    dataUpToDate: "À jour",
    dataAgentLive: "Agent actif",
    dataDailySteering: "Pilotage quotidien",
    dataAutoGenerated: "Généré automatiquement, chaque matin.",
    dataRowSales: "Ventes consolidées",
    dataRowOutput: "Production du jour",
    dataRowCash: "Trésorerie",
    svcResources: "Ressources",
    svcReadArticle: "Lire l\u2019article",
    /* Démo « réponse IA » de la page SEO & GEO. */
    geoBefore: "Avant",
    geoAfter: "Après AI Makers",
    geoAiAnswer: "Réponse générée par l\u2019IA",
    geoSources: "Sources :",
    geoVisibility: "Visibilité IA",
    geoCaptionAfter: "Vous êtes la réponse. Cité en premier, avec votre source.",
    geoCaptionBefore:
      "Vos acheteurs demandent à l'IA. Elle ne vous connaît pas encore.",
    /* Bloc d'offre de contenu (blog, glossaire) — le playbook en aimant. */
    offerTitle: "Le playbook AI-First, gratuitement",
    offerSubtitle:
      "Les systèmes qu'on déploie chez nos clients, la méthode en 3 phases, et par où commencer. 54 pages, sans inscription à une newsletter.",
    offerCta: "Recevoir le playbook",
    offerSuccessTitle: "C'est parti.",
    offerSuccessMsg:
      "Le playbook arrive dans votre boîte mail d'ici quelques minutes.",
    /* Bandeau d'équipe de /equipe. Les rôles CEO/COO/CTO/AI Engineer sont
       identiques dans les deux langues ; seul « Formateur IA » se traduit. */
    teamRoleTrainer: "Formateur IA",
    teamStatCompanies: "entreprises accompagnées",
    teamStatSystems: "systèmes en production",
    teamStatTrained: "professionnels formés",
    /* Schémas de la page Automatisation IA (workflow-wiring, avec-sans-table).
       Les noms de produit (Gmail, Claude, n8n, HubSpot, Notion) ne se
       traduisent pas : seuls les libellés d'étape le font. */
    wfTrigger: "Le déclencheur",
    wfTriggerLabel: "Un lead arrive par email",
    wfAgentStep: "Lit, qualifie, décide",
    wfOutputs: "Les sorties, en secondes",
    wfOutCrm: "Fiche CRM créée et qualifiée",
    wfOutTask: "Tâche assignée à la bonne personne",
    wfOutReply: "Réponse personnalisée envoyée",
    wfCaption:
      "Ce workflow tourne 24h/24, sans oubli ni copier-coller. Vos équipes se concentrent sur ce qui compte, la machine fait le reste.",
    tableWith: "Avec AI Makers",
    tableWithout: "Sans accompagnement",
    wfCounterLabel: "gagnées par semaine et par personne",
  },
  en: {
    bookDiagnostic: "Book my free diagnostic",
    faqBadge: "FAQ",
    faqTitle: "Frequently asked questions",
    relatedTitle: "Go further",
    discover: "Explore",
    proofKicker: "Trusted by",
    proofText:
      "Teams trained and systems running in production at more than 50 companies, from large groups to small businesses.",
    homeAriaLabel: "AI Makers, home",
    consentText:
      "We use audience-measurement cookies to understand how the site is used. Nothing is stored without your agreement.",
    consentPolicy: "Privacy policy",
    consentAccept: "Accept",
    consentRefuse: "Decline",
    consentAria: "Cookie settings",

    headerCta: "Book a free call",

    newsletterTitle: "Stay ahead on AI",
    newsletterBlurb:
      "The AI-First Brief: real client cases, playbooks and field notes on AI transformation. Read by executives and ops leads.",
    footerDiscover: "Worth a look",
    footerTagline:
      "AI audit · Deployment · Training. We stay until it runs in production.",
    footerBookSlot: "Book a slot",
    footerEmailAria: "Email AI Makers",
    footerContacts: "Your contacts",
    footerLinkedinAria: "LinkedIn profile of",
    footerReachKicker: "International reach",
    footerReachTitle: "Based in France and Morocco",
    footerReachText:
      "Engagements delivered across Europe, North Africa and the Middle East, in French, English and Arabic.",
    footerRights: "All rights reserved.",
    colServices: "Services",
    colTraining: "AI training",
    colResources: "Resources",
    colCompany: "Company",

    partnerStripTitle: "Partnerships, certifications and a stack we know",

    badgeOsez: "Osez l'IA Ambassador",
    badgeAnthropic: "Anthropic Partner",

    resPlaybookTitle: "The AI-First Playbook",
    resPlaybookDetail: "54 pages · free guide",
    resChallengeTitle: "30-day Claude challenge",
    resChallengeDetail: "A path to get started",
    resDiagTitle: "AI diagnostic in 2 min",
    resDiagDetail: "Your score out of 24",
    newsletterFootnote:
      "The AI-First Brief · one useful email a week · unsubscribe in one click.",

    /* Identity form (LeadGate) — on every capture point. */
    gateName: "Full name",
    gateNamePlaceholder: "Your full name",
    gatePhone: "Phone",
    gatePhonePlaceholder: "Your phone number",
    gateEmail: "Work email",
    gateEmailPlaceholder: "Your work email",
    gateCompany: "Company",
    gateCompanyPlaceholder: "Your company",
    gateWebsite: "Website",
    gateWebsitePlaceholder: "Your website (optional)",
    gateSending: "Sending...",
    gatePrivacy: "No spam. Your data stays with us.",
    gateGenericError: "Something went wrong. Please try again.",
    gateNetworkError:
      "We couldn't send the form. Check your connection and try again.",
    gateSuccessTitle: "Got it.",
    gateSuccessMessage: "It'll be in your inbox in a moment.",
    bookingGateTitle: "Before you pick a slot",
    bookingGateSubtitle:
      "Your details, so we can get back to you even if you don't book today.",
    bookingGateCta: "See available slots",
    /* Two-step newsletter: email inline, the rest afterwards. */
    newsletterProfilePrompt:
      "Got it. So we can get back to you personally:",
    newsletterProfileCta: "Complete",
    newsletterProfileSkip: "Later",
    newsletterProfileDone: "Thank you.",
    newsletterProfileDoneMessage: "We'll be in touch.",
    newsletterEmailLabel: "Your work email",
    newsletterSubmitLabel: "Subscribe to the newsletter",
    newsletterDone: "Got it. You'll get the next AI-First Brief.",

    /* ---- Homepage chrome ---------------------------------------------- */
    hpTrustLine: "Trusted by teams like yours.",
    hpFdeEngineer: "AI engineer",
    hpFdeEngineerAlt: "AI Makers AI engineer",
    hpFdeYourTools: "Your tools",
    hpFdeConnected: "connected · to your tools",
    hpConnectedWeek1: "Connected to your tools",
    hpLogosAria: "Our clients",
    hpLogoHint: "Hover a logo to read the testimonial",
    hpLogoAria: "{name}: read the testimonial",
    hpRibbonCapacity: "3 new clients a month, maximum",
    hpRibbonOwnership: "Full ownership of the systems",
    hpProblemRoi: "ROI?",
    hpProblemPrioritised: "Prioritised by P&L impact",
    hpProblemOrderChanges: "The order changes every day",
    hpProblemConnected: "● Wired into your system",
    hpProblemLonelyTool: "A tool, with no system.",
    hpProblemIllustration: "Illustration: a typical day.",
    hpMethodIntro:
      "We map your processes, build your systems inside your own tools, and train your teams to autonomy. Six steps, three phases, from audit to autonomy.",
    hpMethodGain: "What you get out of it",
    hpMethodDeliverable: "You leave with",
    hpOfferDetailCta: "See the full offer →",
    hpResultsBefore: "Before",
    hpResultsHow: "How",
    fdeBadgeAlt: "Badge",
    fdeEmbedEngineer: "Your AI engineer",
    fdeEmbedInTeam: "In your team, not at arm's length",
    fdeEmbedLive: "Embedded in your teams",
    fdeEmbedPlugs: "He plugs into your tools",
    fdeEmbedResult:
      "He learns your processes, builds inside your tools, and trains your teams live. You have one more engineer, in your morning meetings.",
    hireAdPublished: "Job ad published",
    hireFirstInterviews: "First interviews, month 3",
    hireCandidatePicked: "Candidate picked, month 6",
    hireFirstWorkstream: "First workstream scoped",
    hireStarts: "He starts, month 9",
    hireConnected: "Connected to your tools",
    hireFirstSystem: "First system deployed",
    hireCadence: "Cadence matched to the portfolio",
    hireCostTag: "€101,000 to €122,000 fully loaded per year",
    hireDeployTitle: "Deploy a Forward Deployed Engineer",
    hireDeployCostTag: "A fraction of the cost, scoped at the diagnostic",
    svcPhaseFlowFooter: "Month 6: it all runs without us. And it is all yours.",
    svcScannerScore: "AI maturity score",
    svcScannerCaption:
      "Every process scanned, costed, prioritised. You leave with a roadmap: what to build first, and for what gain.",
    hpResultsAfter: "After",
    hpCaseKicker: "Case study",
    hpCaseRead: "Read the case study",
    hpTestimonialsAll: "See all testimonials",
    hpTestimonialsAria: "Client testimonials",
    hpCarouselPrev: "Previous card",
    hpCarouselNext: "Next card",
    hpBookingSponsor:
      "Every engagement is sponsored by our CEO, in a dedicated Slack channel with your team. No hotline, no ticket: a conversation.",
    hpBookingChoose: "Pick your slot",
    hpBookingFree: "Free · 3 slots a month",
    hpBookingIframeTitle: "Book a free diagnostic with Othmane Halim",
    hpBookingNoCommit: "No commitment · we usually reply within 1h.",
    /* Gabarit des pages sectorielles. `secCtaTitle` / `secCtaSubtitle` ne sont
       qu'un REPLI côté EN : chaque secteur anglais porte son propre CTA, imposé
       par les masters après que l'audit « slop » a relevé le même titre décliné
       par substitution de nom sur six pages. */
    secHome: "Home",
    secSection: "Industries",
    secHeroPrimary: "Book a free 30-min diagnostic",
    secHeroSecondary: "See the training programmes",
    secPainsKicker: "/ The reality",
    secPainsTitle: "What you\u2019re dealing with right now",
    secTransformKicker: "/ The transformation",
    secTransformTitle: "Every pain becomes a system in production",
    secUseCasesKicker: "/ Use cases",
    secUseCasesTitle: "What AI actually changes for you",
    secTestimonialsKicker: "/ They did it",
    secTestimonialsTitle: "In your sector, with us",
    secTrainingKicker: "/ For your teams",
    secTrainingTitle: "The training most requested in your sector",
    secOthers: "Other industries:",
    secCtaTitle: "What would AI change in your business?",
    secCtaSubtitle:
      "30 minutes to map your priority use cases, whether you work with us or not.",
    secCtaPrimary: "Book a free 30-min diagnostic",
    secCtaSecondary: "See the training programmes",
    /* Gabarit des pages formation. Les blocs OPTIONNELS du gabarit
       (comparison, versus, securite…) ne sont pas traduits : aucune formation
       anglaise ne porte ces données, donc ces sections ne s'affichent jamais
       côté EN. Voir le commentaire de tête de `formations.en.ts`. */
    formBreadcrumb: "AI training",
    formCoursePrefix: "Training",
    formCourseLocation: "At your offices or remote",
    formSpecLevel: "Level",
    formSpecAudience: "Audience",
    formSpecFormat: "Format",
    formSpecDuration: "Duration",
    formSpecPrereq: "Prerequisites",
    formObjectivesTitle: "What your teams will master",
    formModulesTitle: "The training modules",
    formDeliverable: "You leave with",
    formResultsTitle: "What your teams get out of it",
    formQuoteText:
      "Pricing depends on the format, the headcount and the number of sessions. Tell us your context and we come back with a costed proposal.",
    formQuoteCta: "Get a tailored quote",
    formQuoteSecondary: "Get the catalogue",
    formFitTitle: "Thirty minutes to know whether it is the right format",
    formFitText:
      "A trainer looks at your processes with you and tells you which format fits — even if that means pointing you elsewhere. Free, no commitment.",
    formBookSlot: "Book my free slot",
    formTrainersTitle: "Trained by the people who ship AI in production",
    formOthersTitle: "The other programs in the catalogue",
    formFaqCtaTitle: "A question that is not on this list?",
    formFaqCtaText:
      "Tell us your team\u2019s context. We reply with a format, an outline and a budget — or we tell you straight that it is not for you.",
    formFaqCtaLabel: "Ask your question",
    formFaqCtaSecondary: "Book 30 minutes",
    formFinalTitle: "Is this training right for your teams?",
    formFinalSubtitle:
      "30 minutes to look at your needs and pin down the right format, whether you work with us or not.",
    formFinalSecondary: "See the full catalogue",
    footerRoleCeo: "CEO · Founder",
    formQuoteTitlePrefix: "What does ",
    formQuoteTitleSuffix: " cost for your teams?",
    formHeroCatalogue: "Get the catalogue",
    formTrainersKicker: "/ Our trainers",
    formNavTrainers: "Trainers",
    formCatFormTitle: "Get the catalogue",
    formCatFormSubtitle:
      "The full training catalogue, by email, in a few minutes.",
    formCatFormSuccessTitle: "On its way!",
    formCatFormSuccessMsg:
      "You will get the full training catalogue by email in a few minutes. We will come back to you shortly to scope your needs.",
    formCatalogueTitle: "Get the full training catalogue",
    formCatalogueText:
      "The detail of all 6 programs, the formats, and real use-case examples by role. We come back to you to scope the right format for your teams, whether you work with us or not.",
    formTrainersText:
      "Our trainers are the engineers and experts who build AI systems at our clients — not professional trainers reciting a deck.",
    formateurClose: "Close",
    formQuoteTeamCta: "Get a quote for my teams",
    formTocAria: "Training contents",
    formOthersKicker: "/ Our programmes",
    hpCounterRecoverable: "Team time you can win back",
    hpCounterAbsorbed: "Team time absorbed today",
    hpTeamLink: "The team",
    fleetBrainTitle: "Central AI brain",
    fleetBrainSubtitle: "Your data, unified and steered",
    fleetAgentLive: "Agent in production",
    fleetCaption:
      "One system. An agent for every floor of your organisation.",
    dataSiloed: "siloed",
    dataSiloProduction: "Production",
    dataSiloCommercial: "Sales",
    dataBronzeDesc: "Raw data, centralised",
    dataSilverDesc: "Cleaned and joined",
    dataGoldDesc: "Ready to decide on",
    dataGoldCaption:
      "Your reporting and steering agents read the Gold layer, in real time",
    dataUpToDate: "Up to date",
    dataAgentLive: "Agent live",
    dataDailySteering: "Daily steering",
    dataAutoGenerated: "Generated automatically, every morning.",
    dataRowSales: "Consolidated sales",
    dataRowOutput: "Today\u2019s output",
    dataRowCash: "Cash position",
    svcResources: "Resources",
    svcReadArticle: "Read the article",
    geoBefore: "Before",
    geoAfter: "After AI Makers",
    geoAiAnswer: "AI-generated answer",
    geoSources: "Sources:",
    geoVisibility: "AI visibility",
    geoCaptionAfter: "You are the answer. Cited first, with your source.",
    geoCaptionBefore:
      "Your buyers are asking the AI. It doesn’t know you yet.",
    offerTitle: "The AI-First playbook, free",
    offerSubtitle:
      "The systems we deploy at our clients, the three-phase method, and where to start. 54 pages, with no newsletter sign-up.",
    offerCta: "Send me the playbook",
    offerSuccessTitle: "On its way.",
    offerSuccessMsg:
      "The playbook lands in your inbox within a few minutes.",
    teamRoleTrainer: "AI Trainer",
    teamStatCompanies: "companies supported",
    teamStatSystems: "systems in production",
    teamStatTrained: "professionals trained",
    wfTrigger: "The trigger",
    wfTriggerLabel: "A lead arrives by email",
    wfAgentStep: "Reads, qualifies, decides",
    wfOutputs: "The outputs, in seconds",
    wfOutCrm: "CRM record created and qualified",
    wfOutTask: "Task assigned to the right person",
    wfOutReply: "Personalised reply sent",
    wfCaption:
      "This workflow runs around the clock, with nothing forgotten and nothing copy-pasted. Your teams focus on what matters, the machine does the rest.",
    tableWith: "With AI Makers",
    tableWithout: "Without support",
    wfCounterLabel: "saved per week, per person",
  },
} as const satisfies Record<Locale, Record<string, string>>;

export function t(locale: Locale) {
  return uiStrings[locale];
}
