# Homepage — Master de contenu FR

> Localisation FR du master EN scellé (`[EN] website-content/homepage/homepage.md`). Le contenu FR reprend **verbatim la copie live** (`src/lib/site-config.ts` → `homepageContent.*`), qui est la voix authentique de la marque (l'EN en a été traduit). On applique les mêmes correctifs d'audit que l'EN, on relocalise les champs SEO sur les vrais mots-clés FR (Ahrefs France, 2026-07), et on **ne reprend PAS** la dé-priorisation de la formation faite côté EN (voir §Réconciliation).

## 1. En-tête de page
- **Route (FR, live) :** /
- **Objectif :** Point d'entrée principal ; positionne AI Makers comme cabinet de transformation IA (audits, systèmes en production, formation des équipes), oriente vers le diagnostic de 30 min. Propriétaire canonique du tableau comparatif (`optionsTable`), du bloc garanties et de la méthode en 6 étapes.
- **Rôle SEO :** pilier / hub de marque. Stratégie FR : la **formation IA** (8 100 → 6 900/mo) est le plus gros volume du marché FR et fait partie de l'ICP — on la garde en avant (contrairement à l'EN qui la reléguait). On blende avec **agence ia** (2 400).
- **Étape funnel :** TOFU→BOFU (page full-funnel)

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume (FR) | Difficulté | Source |
|---|---|---|---|---|
| Primaire | ai makers (marque) + blend « cabinet de transformation IA » | marque | — | terme de marque |
| Secondaire | formation ia | 6 900 | 55 | Ahrefs keywords-explorer-overview, France, 2026-07 |
| Secondaire | agence ia | 2 400 | 54 | Ahrefs, France, 2026-07 |
| Secondaire | transformation ia | 100 | — | Ahrefs, France, 2026-07 |
| Secondaire | automatisation des processus | 600 | 5 | Ahrefs, France, 2026-07 |

> **Décision mots-clés :** la home est le hub de marque, donc le primaire est le terme de marque/blend (« AI Makers » / « cabinet de transformation IA ») — pression concurrentielle faible par design. La page blende les trois piliers qu'elle doit alimenter : **formation ia** (6 900 — le head term FR, dé-linké vers /formation-ia-entreprise), **agence ia** (2 400 — dé-linké vers /agence-ia) et **automatisation des processus** (600 — vers /automatisation-ia-workflow). Les pages money portent le ranking ; la home porte la marque et le maillage interne. NB : côté EN, la formation était reléguée (demande EN = intention MOOC) ; côté FR c'est l'inverse — head term et ICP — donc on la garde proéminente.

## 3. Meta de page
| Champ | Actuel (FR, live) | Proposé (FR) |
|---|---|---|
| Title | AI Makers \| Cabinet de Transformation IA pour Entreprises | **`Formation, Agence & Automatisation IA`** *(37 car. ; correctif — la home passe par `constructMetadata` → title string, donc le template `%s \| AI Makers` du layout s'applique. Rendu : `Formation, Agence & Automatisation IA \| AI Makers` ≈ 49 car., marque une seule fois, trois piliers en tête. La marque de tête est retirée pour éviter le double « AI Makers ».)* |
| Meta description (≤160) | Cabinet de transformation IA anti-hype. Audit, formations IA, automatisation... | **`Cabinet de transformation IA : formation, agence IA et automatisation des processus. +200 systèmes déployés, +2 500 formés. Diagnostic gratuit.`** *(146)* |
| H1 (hero) | Transformation **IA** | **`Transformation IA`** *(headline `Transformation` + accent `IA`, hero.tsx — conservé live)* |
| URL slug | / | / |

> Note SEO : la fiche Notion propose un H1 alternatif long « La transformation IA, portée par l'exécution — pas par les slides. » Le H1 réellement rendu est le hero « Transformation IA » ; on conserve le live. Le « certifié Qualiopi » de la meta Notion est **retiré** (non présent dans `llms.txt` ni la copie AI Makers — cf. note de réconciliation F). `1 250` de Notion corrigé en **`2 500`** (canonique).

JSON-LD sur la page : Organization + WebSite + FAQPage (construit dans `src/app/page.tsx` depuis `homepageContent.faq`).

## 4. Sections & contenu
Toute la copie vit dans `src/lib/site-config.ts` → `homepageContent.*` (+ `clientLogos`, `bookingProof`). Les composants ne font que la rendre. Copie FR = **verbatim live**, sauf les 3 correctifs d'audit signalés.

### 4.1 — Hero
- **Composant :** `src/components/sections/homepage/hero.tsx` · data `homepageContent.hero`
- **Proposé (FR) :**
  - **headline / headlineAccent :** `Transformation` / `IA` → rend « Transformation IA »
  - **subtitle :** `Votre département IA, opérationnel en 30 jours.`
  - **description (answer-first) :** `AI Makers est un cabinet de transformation IA en France et au Maroc : nous auditons vos process, construisons des systèmes IA en production dans vos outils et formons vos équipes jusqu'à l'autonomie, selon une méthode en 3 phases (Audit, Build, Scale).`
  - **ctaPrimary :** `{ label: "Réserver mon diagnostic gratuit", href: "/contact" }`
  - **ctaSecondary :** `{ label: "Testez votre maturité IA en 2 min", href: "/diagnostic-ia" }`
  - **newsletterFallback :** `{ prefix: "Pas prêt à échanger ?", label: "Recevez le Playbook AI-First (48 pages)", href: "/playbook-ia" }`
  - **stats[3] :** `+50 entreprises accompagnées` · `+2 500 personnes formées` · `9,6/10 de satisfaction moyenne`
- **Rationale :** la description définit ce qu'*est* AI Makers dans les 40 premiers mots (cabinet, 3 verbes, méthode en 3 phases) — citable par les moteurs de réponse. Stats verbatim `llms.txt` ; 9,6/10 live sur le hero.

### 4.2 — Problème
- **Composant :** `src/components/sections/homepage/problem.tsx` · data `homepageContent.problem`
- **Proposé (FR) :**
  - **badge :** `Le problème`
  - **title :** `Vous savez que l'IA peut transformer votre entreprise. Mais par où commencer ?`
  - **intro :** `Vous avez essayé ChatGPT, peut-être même formé quelques personnes. Mais concrètement, rien n'a changé dans vos process.`
  - **points[0] :** titre `Vous ne savez pas quels process automatiser en priorité` · description `Trop d'options, pas de scoring ROI. Vous investissez sur des cas d'usage sympas, pas sur ceux qui impactent votre P&L.`
  - **points[1] :** titre `Vos équipes perdent leurs journées sur du travail sans valeur` · description `Reporting, saisie, relances, synthèses : du travail que l'IA absorbe à 60-80% [to validate]. Vos meilleurs éléments méritent mieux.`
  - **points[2] :** titre `Vous avez testé ChatGPT ou Copilot. Rien n'a changé.` · description `Un outil ne change rien. Ce qui change tout : un système configuré pour votre façon de travailler, et des équipes formées pour l'utiliser.`
- **Rationale :** nomme l'état réel du lecteur (a testé un outil, rien n'a bougé). **Correctif d'audit :** le chiffre 60-80% (non canonique, absent de `llms.txt`) est tagué `[to validate]`, comme côté EN.

### 4.3 — Value Prop (conversation + objections + tableau comparatif — PROPRIÉTAIRE ICI)
- **Composant :** `src/components/sections/homepage/value-prop.tsx` (+ `conversation.tsx`, `comparison-section.tsx`) · data `homepageContent.valueProp`
- **Proposé (FR) — verbatim live :**
  - **kicker :** `Pourquoi AI Makers ?` · **title :** `Votre partenaire de transformation IA`
  - **conversation[5] :**
    1. `{ from: "dg", text: "On sait qu'on doit intégrer l'IA. Mais on ne sait ni par où commencer, ni comment faire." }`
    2. `{ from: "aim", text: "C'est la phrase qu'on entend le plus. La bonne nouvelle : ça se règle en 2 semaines." }`
    3. `{ from: "dg", text: "Comment ?" }`
    4. `{ from: "aim", text: "Un audit de vos workflows. On identifie où l'IA crée de la valeur chez vous, on chiffre chaque opportunité. Vous repartez avec une roadmap : quoi construire en premier, et pour quel gain." }`
    5. `{ from: "aim", text: "Ensuite on construit. 1 à 2 systèmes par mois, mesurés avant et après. Si l'audit ne trouve pas 3 cas rentables : remboursé." }`
  - **conversationCta :** `{ prefix: "Continuez la conversation. 30 minutes, en vrai.", label: "Réserver mon diagnostic", href: "/contact" }`
  - **objectionsKicker :** `La conversation continue` · **objectionsTitle :** `Ce que vous vous dites, probablement`
  - **objections[4] :**
    1. `{ icon: "presentation", quote: "Encore un cabinet qui va me vendre des slides ?", answer: "Non : des **systèmes en production**. Si l'audit ne trouve pas 3 cas rentables, il est **remboursé**." }`
    2. `{ icon: "users", quote: "Mes équipes ne suivront jamais.", answer: "70% d'une transformation, c'est l'humain (BCG) [to validate source]. **2h de formation par semaine**, vos **AI Champions** autonomes à 6 mois." }`
    3. `{ icon: "chef", quote: "Et vous, vous l'utilisez vraiment, l'IA ?", answer: "Depuis 2022, **les systèmes qu'on vend font tourner AI Makers**. Notre cuisine est plus bas sur cette page." }`
    4. `{ icon: "key", quote: "Et le jour où vous partez ?", answer: "**Tout reste chez vous** : code, playbooks, équipes formées. Votre indépendance est un **livrable**." }`
  - **orbitCaption :** `Notre stack. Utilisée tous les jours, en interne.`
  - **optionsPunchline :** line1 `Pas un cabinet. Pas une agence. Pas une licence de plus.` · line2 `Une équipe d'ingénieurs qui construit chez vous, garantie au contrat. Comparez.`
  - **optionsTable (5 colonnes × 6 lignes)** — colonnes : `Cabinet de conseil` · `ESN / SSII` · `Agence / freelance` · `Licence ChatGPT ou Copilot` · `AI Makers` :

| Ligne | Cabinet de conseil | ESN / SSII | Agence / freelance | Licence ChatGPT / Copilot | AI Makers |
|---|---|---|---|---|---|
| **Ce que vous recevez** | Un rapport et des slides `(no)` | Des développeurs en régie `(meh)` | Un outil, puis plus personne `(meh)` | Un chat généraliste `(no)` | Des systèmes en production, documentés `(yes)` |
| **Qui construit** | Personne : on vous recommande `(no)` | Une équipe facturée au jour `(meh)` | Un profil seul, selon dispo `(meh)` | Vous, tout seul `(no)` | Un ingénieur dédié, dans votre infra `(yes)` |
| **Configuré pour vous** | En théorie `(meh)` | Selon le cahier des charges `(meh)` | Selon le brief `(meh)` | Générique par design `(no)` | Sur vos process et vos données `(yes)` |
| **Vos équipes à 6 mois** | Toujours dépendantes `(no)` | Dépendantes de la régie `(no)` | Dépendantes du prestataire `(no)` | Livrées à elles-mêmes `(meh)` | Autonomes : AI Champions formés `(yes)` |
| **Garanties** | Aucune `(no)` | Obligation de moyens `(no)` | Rarement `(no)` | Aucune `(no)` | 4 garanties écrites au contrat `(yes)` |
| **Quand ça s'arrête** | Le rapport dort en PDF `(no)` | La régie part, le savoir aussi `(no)` | Tout part avec lui `(no)` | L'abonnement s'éteint `(no)` | Tout reste chez vous : code, workflows, docs `(yes)` |

  - **scarcity :** `Maximum 3 nouveaux clients par mois`
- **Rationale :** le dialogue reproduit le pattern d'objections des calls découverte. Le 70%/BCG est tagué `[to validate source]`. Tableau = propriété canonique de la home (les pages sœurs le référencent).

### 4.4 — Offres (3 points d'entrée)
- **Composant :** `src/components/sections/homepage/offers.tsx` · data `homepageContent.offers`
- **Proposé (FR) — ordre live conservé (Transformation → Formation → FDE), PAS l'ordre EN :**
  - **badge :** `Nos offres` · **title :** `Trois façons de travailler avec nous` · **subtitle :** `Un point d'entrée pour chaque situation. Le même déroulé éprouvé partout.`
  - **items[0] — Transformation IA :** promise `Le programme complet : audit, systèmes en production, équipes autonomes.` · for `Pour les PME et ETI qui veulent passer AI-first, pas juste tester.` · href `/ai-transformation`
  - **items[1] — Formation IA :** promise `Vos équipes formées à l'IA sur leurs vrais cas d'usage, pas sur des slides.` · for `Sur vos propres workflows et vos propres données.` *(correctif d'audit : négation empilée aplatie — était « Sur vos cas d'usage réels, jamais sur des slides génériques »)* · href `/formation-ia-entreprise`
  - **items[2] — Forward Deployed Engineer :** promise `Un ingénieur IA déployé dans votre équipe, à temps plein.` · for `Il code chez vous, avec vous, dès la semaine 1.` · href `/forward-deployed-engineer`
- **Rationale :** **Divergence FR vs EN assumée** — l'EN reléguait la formation en dernier (intention MOOC hors ICP EN) ; en FR « formation ia » est le head term et l'ICP, donc on garde l'ordre live avec la formation en position 2. Correctif d'audit sur le `for` de la carte Formation (dé-empilement « pas X »).

### 4.5 — Méthode (6 étapes) — PROPRIÉTAIRE ICI
- **Composant :** `src/components/sections/homepage/method.tsx` · data `homepageContent.method`
- **Proposé (FR) — verbatim live :**
  - **badge :** `Comment on fonctionne` · **title :** `Votre département IA externalisé. De l'audit à l'autonomie.` · **subtitle :** `Semaine après semaine, voici ce qui existe chez vous : les livrables, les systèmes en production, et ce que vous y gagnez à chaque étape.`
  - **steps[0]** — `01` · phase `AI Scan` · `Audit` · `Semaines 1-2` · involvement `Interviews de vos équipes` · deliverable `Cartographie complète et 3 cas d'usage rentables minimum` · short `Cartographie + 3 cas chiffrés` · whatWeDo `["Cartographie de vos workflows réels","Interviews des décideurs et opérationnels","Scoring de maturité sur notre grille /24","Chiffrage de chaque opportunité"]` · gain `Vous savez où l'IA rapporte chez vous : au moins 3 cas d'usage chiffrés, ou l'audit est remboursé.` · whyItMatters `C'est ici que la plupart des projets IA meurent : un cas d'usage choisi à l'intuition plutôt qu'à l'impact. Vous ne signez la suite que si les chiffres tiennent.` · next `La roadmap passe en arbitrage`
  - **steps[1]** — `02` · phase `AI Scan` · `Stratégie` · `Semaine 2` · involvement `Revue et arbitrage en comité` · deliverable `Roadmap chiffrée et priorisée, validée ensemble` · short `Roadmap ROI validée` · whatWeDo `["Priorisation par impact sur votre P&L","Architecture d'intégration à votre stack","Jalons et responsabilités","Projections de gains par système"]` · gain `Une roadmap 3, 6 et 12 mois priorisée par ROI. Vous décidez sur des chiffres, pas des intuitions.` · whyItMatters `Une roadmap arbitrée en comité, c'est un cap et un sponsor interne. Sans elle, chaque décision se renégocie pendant 6 mois.` · next `Le développement démarre`
  - **steps[2]** — `03` · phase `AI Engine` · `Développement` · `Semaines 3-6` · involvement `Minimale : on construit, vous validez` · deliverable `Systèmes construits, testés sur vos données` · short `Systèmes testés sur vos données` · whatWeDo `["Construction des workflows et agents","Connexion à vos outils existants","Tests et contrôle qualité","Documentation de chaque système"]` · gain `Vos premiers systèmes tournent en production dès le premier mois.` · whyItMatters `Testé sur vos vraies données, pas en démo. C'est la différence entre un POC qui impressionne et un outil que vos équipes gardent.` · next `Mise en production`
  - **steps[3]** — `04` · phase `AI Engine` · `Implémentation` · `En continu` · involvement `Vos retours terrain chaque semaine` · deliverable `1 à 2 systèmes par mois en production` · short `Système 1 en production` · whatWeDo `["Déploiement dans vos workflows réels","KPI mesuré avant et après","Ajustements sur les retours d'usage","Support jour même"]` · gain `Branché sur vos outils existants. Vos équipes ne changent pas d'environnement, elles gagnent du temps.` · whyItMatters `Un premier impact mesurable sous 30 jours : c'est notre garantie écrite, et le moment où le projet commence à se payer.` · next `Vos équipes prennent la main`
  - **steps[4]** — `05` · phase `AI Champions` · `Formation` · `2h par semaine` · involvement `Participation active de vos équipes` · deliverable `Équipes autonomes, AI Champions identifiés et formés` · short `Playbooks + AI Champions` · whatWeDo `["Sessions hands-on sur vos cas réels","Formation de vos AI Champions","Transmission des playbooks","Montée en autonomie progressive"]` · gain `Des équipes autonomes, capables de faire tourner et d'améliorer les systèmes sans nous.` · whyItMatters `Un outil sans équipes formées meurt en trois mois. Formées sur leurs cas réels, vos équipes en redemandent.` · next `L'amélioration continue`
  - **steps[5]** — `06` · phase `AI Champions` · `Itération` · `Chaque trimestre` · involvement `Revue stratégique avec la direction` · deliverable `Relance d'audit et nouveaux cas d'usage priorisés` · short `Revue trimestrielle + nouveaux cas` · whatWeDo `["Mesure des gains réalisés","Détection de nouvelles opportunités","Optimisation des systèmes en production","Veille intégrée à vos process"]` · gain `Chaque trimestre, de nouveaux cas d'usage à fort ROI identifiés et priorisés.` · whyItMatters `L'IA change tous les trimestres. Vos systèmes s'améliorent au lieu de vieillir, et la roadmap se recharge en continu.` · next `Le cycle recommence, plus haut`
  - **cta :** `{ label: "Réserver mon diagnostic gratuit", href: "/contact" }`
- **Rationale :** copie PROPRIÉTAIRE — les pages sœurs référencent cette méthode en 6 étapes. Labels de phase (AI Scan / AI Engine / AI Champions) conservés (termes de marque).

### 4.6 — Résultats (compteurs + bénéfices)
- **Composant :** `src/components/sections/homepage/results.tsx` · data `homepageContent.results` (+ `proof.cases`)
- **Proposé (FR) — verbatim live :**
  - **badge :** `Impact mesurable`
  - **counters[3] :** `200+ Systèmes IA déployés` · `2 500+ Professionnels formés` · `7h/sem Récupérées par collaborateur`
  - **benefits[0] :** titre `5 à 10h/semaine récupérées par collaborateur` · desc `Sur les tâches répétitives : saisie, reporting, synthèses, relances. Des heures qui retournent à ce qui compte vraiment : la relation client et la croissance.`
  - **benefits[1] :** titre `ROI visible dès le mois 1, pas en fin d'année` · desc `Chaque système déployé a un KPI attaché. Vous mesurez l'impact en temps réel. Pas de buzzwords, pas de promesses vagues. Des chiffres.`
  - **benefits[2] :** titre `Des équipes qui montent en compétence chaque semaine` · desc `2h de formation hands-on par semaine, sur vos cas d'usage réels. Nos formations (IA Généraliste, Vibe Coding, Sales IA, Copilot) forment vos AI Champions : les référents qui portent la suite.`
  - **benefits[3] :** titre `Un avantage qui se mesure en données accumulées` · desc `Vos systèmes s'améliorent avec l'usage. Vos concurrents qui « y réfléchissent encore » repartiront de zéro dans 6 mois. Vous, vous aurez 6 mois de données.`
  - **proof.cases[3] (mini études de cas — mesurées client, `[to validate pour usage]`) :**
    - **Qatar Tourism — Chatbot IA WhatsApp :** metric `18 000 $/an` label `d'économies réalisées` · secondMetric `-40%` label `charge support` · before `Une équipe support débordée sur WhatsApp. Temps de réponse moyen : +4h.` · after `80% des demandes gérées en autonomie par l'agent IA. 24h/24, multilingue.` · how `Chatbot IA WhatsApp intégré au CRM existant` · tags `["Chatbot","WhatsApp","Support client"]`
    - **Sage — Référencement IA (GEO) :** metric `+70%` label `de visibilité sur ChatGPT et Gemini` `[to validate — cas non publié]` · before `Absent des réponses des moteurs IA sur les requêtes de leur secteur.` · after `Première référence citée dans leur verticale sur ChatGPT, Gemini et Perplexity.` · how `Stratégie GEO : refonte du contenu pour la citation par les LLMs` · tags `["GEO","SEO","Visibilité IA"]`
    - **Shem's Publicité — Production marketing IA :** metric `10x` label `d'efficacité par équipe créative` · before `Une équipe de 3 produisait en 5 jours. Délais systématiquement dépassés.` · after `Même équipe, même volume, livré en moins de 24h.` · how `Automatisation du pipeline créatif : brief → génération → validation` · tags `["Automatisation","Marketing","Contenu"]`
- **Rationale :** compteurs verbatim `llms.txt`. Chiffres des mini-cas tagués pour validation d'usage (+70% Sage = cas non publié, cf. note de réconciliation E).

### 4.7 — Témoignages
- **Composant :** `src/components/sections/homepage/testimonials.tsx` · data `homepageContent.testimonials` (14 items)
- **Proposé (FR) — verbatim live, `[to validate : accord client]` sur l'ensemble :** badge `Ils nous font confiance` · title `Ce que disent nos clients`. Les 14 citations (Éric Solal/ESN Engit, Vanessa Braflan/Empruntis Montgeron, Mickaël Mina/Sage, Mariem Lahlou/ThinkONE, Hicham Boustit/Délifrance, Hervé Landau/SAS Family Holdings, John Volke/AstraNICE, Jennifer Vigouroux/BioValley, Lamia Ajana/Shem's, Nicole Neumann/Gepromed, Ziyad El Mouniri/Addictest, Lilla Merabet/Fondation Force, Marie-Pierre Picon/Amgen, Brigitte Meyer/Amgen) sont conservées **verbatim** — ce sont des déclarations réelles de personnes nommées, en français d'origine. Noms, titres, entreprises, photos inchangés.
- **Rationale :** citations authentiques et déjà en français — aucune retraduction. Nicole Neumann (Gepromed) et Ziyad (Addictest) réutilisées sur /ai-operating-system (même source).

### 4.8 — Fleet (galerie d'agents)
- **Composant :** `src/components/sections/homepage/fleet.tsx` · data `homepageContent.fleet`
- **Proposé (FR) — verbatim live :**
  - **badge :** `Notre propre cuisine` · **title :** `Un agent pour chaque étage de votre organisation` · **subtitle :** `Un aperçu de ce qui tourne déjà, chez nous et chez nos clients.`
  - **systems[11]** (name · tag · detail) : `Audit & pilotage GEO`·Marketing ; `Intelligence d'appels`·Ventes ; `Préparation de rendez-vous commerciaux`·Ventes ; `Traitement des factures fournisseurs`·Finance ; `Tableaux de bord de pilotage`·Direction ; `Copilote Microsoft 365 configuré`·Opérations ; `Cockpit de pilotage quotidien`·Direction ; `Suivi de santé des missions`·Direction ; `Campagnes Meta Ads pilotées`·Marketing ; `Chatbot support client`·Opérations ; `Synthèses de réunions`·Opérations. (détails verbatim live, bricks/internal inchangés)
  - **buildYours :** title `Construisez le vôtre` · subtitle `Décrivez-nous le process, on construit le système.` · href `#reserver`
- **Rationale :** systèmes réels internes + clients sur la stack live — la preuve « notre propre cuisine » qui répond à l'objection #3.

### 4.9 — Connexions
- **Composant :** `src/components/sections/homepage/connections.tsx` · data `homepageContent.connections`
- **Proposé (FR) — verbatim live :**
  - **badge :** `Connexion` · **title :** `On ne remplace rien. On se branche.` · **subtitle :** `Vos outils restent. Nos systèmes s'y connectent, et le travail circule.`
  - **groups[0] :** `Vos ventes et vos clients` · `Là où vit votre pipeline` (Salesforce, HubSpot, Stripe, LinkedIn, Zendesk)
  - **groups[1] :** `Vos opérations et votre connaissance` · `Là où le travail s'organise` (Jira, SAP / votre ERP, Notion, Google Drive, Google Sheets)
  - **groups[2] :** `Vos communications` · `Là où vos équipes échangent` (Slack, Gmail, Microsoft Teams, WhatsApp)
- **Rationale :** « On ne remplace rien. On se branche. » = one-liner citable qui répond à « faut-il jeter notre stack ? ».

### 4.10 — Tableau de stack
- **Composant :** `src/components/sections/homepage/stack-table.tsx` · data `homepageContent.stackTable`
- **Proposé (FR) — verbatim live :**
  - **badge :** `La stack, à découvert` · **title :** `Chaque outil, maîtrisé. Des systèmes livrés sur chacun.` · **subtitle :** `On ne découvre pas votre stack en mission : on a déjà construit dessus. Et zéro facture surprise : la moitié est open source, le reste tourne sur vos comptes.`
  - **categories[6]** (name · badge) : `Cerveau IA`·`Inclus dans l'accompagnement` (Claude, OpenAI, LangChain, Gemini, Microsoft Copilot) ; `Automatisation`·`Open source ou licence légère` (n8n, Make, Zapier, Power Automate) ; `Réunions, documents et connaissance`·`Vos comptes existants, zéro migration` (Notion, Google Drive, OneDrive, Fireflies, Slack) ; `CRM et paiements`·`On se branche dessus` (Salesforce, HubSpot, Stripe, Lemlist) ; `Visibilité SEO et GEO`·`Pour être cité par les IA` (Ahrefs, Profound, Google Search Console, Google Analytics) ; `Prototypage et développement`·`Du prototype à la prod en quelques jours` (Lovable, GitHub, Vercel). Détails d'outils verbatim live.
- **Rationale :** stack réelle, nommée à découvert — le point de preuve anti-hype. « Zéro facture surprise » et « sur vos comptes » = différenciateurs coût/sécurité.

### 4.11 — Conformité
- **Composant :** `src/components/sections/homepage/compliance.tsx` · data `homepageContent.compliance`
- **Proposé (FR) — verbatim live (cadrage FR natif : CNIL / RGPD / AI Act) :**
  - **badge :** `Confiance et conformité` · **title :** `Vos données. Vos règles.` · **subtitle :** `Un vrai département IA gère aussi la conformité. RGPD, AI Act, charte interne : on les intègre dans chaque déploiement, pas après coup.`
  - **pillars[0] — RGPD et CNIL :** `Base légale, minimisation des données et information des personnes, pour chaque déploiement, en lien avec votre DPO.`
  - **pillars[1] — AI Act anticipé :** `Cartographie et classification de vos systèmes IA pendant l'audit, transparence intégrée par défaut dans les agents livrés.`
  - **pillars[2] — Charte IA sur mesure :** `Usages autorisés, données à ne jamais saisir, validation humaine : la charte que recommande la CNIL, construite avec vous dès l'audit.`
  - **pillars[3] — Registre et formation :** `Nos formations répondent à l'exigence de maîtrise de l'IA de l'article 4, avec un registre documenté des systèmes et des formations.`
  - **cta :** `{ label: "Notre approche de la gouvernance IA", href: "/gouvernance-ia" }`
- **Rationale :** cadrage RGPD/CNIL/AI Act = natif marché FR (là où l'EN taguait le cadrage US `[to validate]`). Aucune adaptation nécessaire.

### 4.12 — Réservation
- **Composant :** `src/components/sections/homepage/booking.tsx` (+ `shared/booking-proof.tsx`, `cal-embed.tsx`) · data `homepageContent.booking` + `bookingProof`
- **Proposé (FR) — verbatim live :**
  - **badge :** `Réservez votre diagnostic` · **title :** `30 minutes. Une session de travail, pas une démo.` · **subtitle :** `On analyse vos workflows en direct et vous repartez avec vos 3 premiers quick wins IA, que vous travailliez avec nous ou non.`
  - **benefits[3] :** `Cartographie express de vos opportunités IA` · `3 quick wins priorisés par ROI` · `Première roadmap actionnable`
  - **host :** name `Othmane Halim` · role `CEO, AI Makers` · responseTime `Répond en général en 1h`
  - **emailFallback :** prefix `Pas envie d'un call ?` · email `othmane@aimakers.fr`
  - **bookingProof stats :** `9,6/10 satisfaction moyenne` · `100% de recommandations` `[to validate]`
  - **badges :** `Ambassadeur Osez l'IA` `[to validate — badge programme FR]` · `Partenaire Anthropic` `[to validate autorisation]`
- **Rationale :** cadrage « session de travail, pas une démo » = signal anti-hype. 9,6/10 et 100% reco tagués.

### 4.13 — FAQ
- **Composant :** `src/components/sections/homepage/faq.tsx` · data `homepageContent.faq` — voir §5.

### 4.14 — CTA final
- **Composant :** `src/components/sections/homepage/final-cta.tsx` · data `homepageContent.finalCta`
- **Proposé (FR) — verbatim live :**
  - **title :** `30 minutes pour identifier vos 3 premiers quick wins IA`
  - **subtitle :** `On analyse vos workflows, on identifie les opportunités à fort ROI, on vous donne une roadmap. Gratuit, sans engagement, et utile même si vous ne travaillez pas avec nous.`
  - **cta :** `{ label: "Réserver mon diagnostic gratuit", href: "/contact" }`
  - **urgency :** `Maximum 3 nouveaux clients par mois. Chaque client a un ingénieur IA dédié, onboardé 2 semaines avant le kick-off. Notre capacité est physiquement limitée, pas artificiellement.`
- **Rationale :** rareté réelle (modèle de capacité), énoncée comme un fait avec sa raison — honnête plutôt que fausse urgence.

## 5. FAQ
Slot FAQ : OUI — `faq.tsx` + FAQPage JSON-LD. 8 items dans `homepageContent.faq.items` (verbatim live) :

| # | Question (FR) | Réponse (FR) — résumé |
|---|---|---|
| 1 | Qu'est-ce qu'AI Makers ? | Cabinet de transformation IA en France et au Maroc, fondé par Othmane Halim ; bureaux Paris (60 rue François 1er, 75008) et Rabat (46 Av Okba, Agdal). Méthode AI-First en 3 phases (Audit/AI Scan, Build/AI Engine, Scale/AI Champions). +50 entreprises, +200 systèmes, +2 500 professionnels formés. |
| 2 | Quels types d'entreprises accompagnez-vous ? | Trois profils : PME/ETI (50-500 salariés), agences de communication, startups/scale-ups. Dénominateur commun : direction convaincue + budget alloué. |
| 3 | Différence entre AI Makers et une ESN / un freelance IA ? | ESN = jours-homme ; freelance = expertise ponctuelle ; AI Makers = transformation complète (audit, systèmes, formation, autonomie). « La différence entre acheter du code et acheter un résultat. » |
| 4 | Pourquoi pas un freelance IA à 500€/jour ? | Le freelance vend des jours ; nous un résultat contractuel avec 4 garanties écrites. Quand on part, AI Champions, doc et code restent chez vous. |
| 5 | Comment se structure l'accompagnement et quel ROI attendre ? | Au mois, engagement initial 3 ou 6 mois puis préavis 30 jours. En moyenne 7h/semaine récupérées par collaborateur, mesuré système par système. Cadrage précis au diagnostic gratuit de 30 min. |
| 6 | Comment se déroulent les formations AI Makers ? | Hands-on, sur vos cas réels, jamais sur des slides. Formats : sessions dédiées (IA Généraliste, Vibe Coding, GTM Sales IA, Microsoft Copilot) ou 2h/semaine intégrées. **Correctif d'audit — clôture aplatie :** « L'objectif est toujours le même : des équipes capables de faire tourner les systèmes elles-mêmes. » (était « pas des participants qui ont vu une démo »). |
| 7 | Combien de temps dure un accompagnement typique ? | Engagement minimum 3 mois ; semaines 1-2 = audit AI Scan + roadmap ; premiers systèmes en prod dès le mois 1 ; durée médiane 6 à 9 mois jusqu'à l'autonomie. |
| 8 | Où intervenez-vous géographiquement ? | Deux bureaux permanents : Paris (75008) et Rabat. Présentiel France + Maroc, distance sur toute la zone francophone (Belgique, Suisse, Canada, Afrique du Nord). |
| 9 | Que se passe-t-il si les résultats ne sont pas au rendez-vous ? | Quatre garanties écrites au contrat : (1) pas de roadmap claire = audit remboursé 100% ; (2) pas d'impact à 30 jours = prolongation gratuite ; (3) champion sans impact = 30 jours offerts ; (4) toute la PI vous appartient. |

> NB : le live rend 8 items (l'item « pourquoi pas un freelance » et le titre exact peuvent varier). Titre section : `Les questions qu'on nous pose vraiment en call découverte`. Propriété FAQ : Q1 (ce qu'est AI Makers), géographie et garanties sont possédées ici ; les réponses « combien de temps / qui construit / propriété » spécifiques au programme sont possédées par /ai-transformation.

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Réserver mon diagnostic gratuit | /contact | CTA primaire (hero, méthode, réservation, final) |
| Testez votre maturité IA en 2 min | /diagnostic-ia | CTA secondaire hero |
| Recevez le Playbook AI-First | /playbook-ia | fallback newsletter |
| Le programme de transformation IA complet | /ai-transformation | carte offre 1 |
| Forward Deployed Engineer | /forward-deployed-engineer | carte offre 3 |
| Formation IA en entreprise | /formation-ia-entreprise | carte offre 2 |
| Voir toutes les études de cas | /etudes-de-cas | CTA résultats/preuve |
| Notre approche de la gouvernance IA | /gouvernance-ia | CTA conformité |
| Agence IA | /agence-ia | deep-link pilier |
| Automatisation des processus | /automatisation-ia-workflow | deep-link pilier |

## 7. CTA
- **Primaire :** « Réserver mon diagnostic gratuit » → /contact (hero, méthode, final).
- **Secondaire :** « Testez votre maturité IA en 2 min » → /diagnostic-ia.

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `AI Makers est un cabinet de transformation IA basé à Paris (75008) et Rabat, fondé par Othmane Halim. Il audite les process d'une entreprise, déploie des systèmes et agents IA en production dans les outils du client, et forme les équipes à l'autonomie — une méthode en 3 phases (Audit, Build, Scale), un ingénieur IA dédié livrant 1 à 2 systèmes par mois, sous 4 garanties écrites au contrat. À ce jour : +200 systèmes IA chez +50 entreprises, +2 500 personnes formées, et 7h/semaine récupérées en moyenne par collaborateur.`
- **Entrée llms.txt (FR) :** `[AI Makers](https://aimakers.fr/) : cabinet de transformation IA à Paris et Rabat. Audite les process, déploie des systèmes IA en production, forme les équipes jusqu'à l'autonomie — méthode en 3 phases, 4 garanties écrites.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| +50 entreprises ; +200 systèmes ; +2 500 formés ; 7h/sem récupérées | public/llms.txt (canonique) |
| 9,6/10 satisfaction ; 100% de recommandations | site-config bookingProof — [to validate] |
| Clients cités (Qatar Tourism, Sage, Shem's + entreprises des témoignages) | site-config proof/testimonials — [to validate pour usage] |
| 70% d'une transformation = l'humain (BCG) | carte objections — [to validate source] |
| 18 000 $/an, -40% support (Qatar) ; +70% visibilité IA (Sage) ; 10x (Shem's) | site-config proof.cases — mesurés client, [to validate pour usage] |
| IA absorbe 60-80% | non canonique — [to validate] |
| Exigence de maîtrise de l'IA (article 4) ; AI Act ; RGPD/CNIL | AI Act / RGPD (public) |
| Badges « Osez l'IA », « Partenaire Anthropic » | site-config — [to validate autorisation] |
| Max 3 clients/mois ; 4 garanties écrites ; méthode 3 phases ; fondé 2022 ; Othmane Halim ; Paris 75008 + Rabat | public/llms.txt + site-config (canonique) |
| Qualiopi / financement OPCO | ABSENT de llms.txt/copie AI Makers — [to validate], retiré de la meta |

---

## COPIE PROPRIÉTAIRE — réutilisée par les pages sœurs (écrite une fois, ici)

### Bloc Garanties — `homepageContent.guarantees`
- **badge :** `Zéro risque` · **title :** `Vous ne prenez aucun risque. C'est nous qui le prenons.` · **subtitle :** `Les quatre sont écrites dans le contrat. Pas dans un slide.`
- **items[4] :**
  1. `Garantie Audit` · `Pas de roadmap claire avec 3 cas d'usage rentables en 2 semaines ?` · `Remboursé. Intégralement. Sans discussion.`
  2. `Garantie 30 jours` · `Rien en production le premier mois ?` · `On continue gratuitement jusqu'à ce que ça tourne.`
  3. `Garantie Champions` · `Un champion formé sans impact mesurable ?` · `30 jours offerts.`
  4. `Garantie Sortie` · `Le jour où on part, tout reste chez vous : code, playbooks, documentation.` · `Zéro dépendance, zéro otage.`
- **credibility :** `On peut garantir ça parce qu'on limite : 3 clients par mois, un ingénieur dédié chacun. Les agences qui signent tout le monde ne peuvent pas l'écrire dans un contrat. Nous, si.`

---

## Réconciliation appliquée (FR)

**Correctifs d'audit hérités de l'EN, appliqués en FR :**
1. **Chiffre 60-80% tagué `[to validate]`** dans problem points[1] (non canonique, absent de `llms.txt`).
2. **Deux négations empilées aplaties** (slop tell #1) : carte offre Formation `for` (« jamais sur des slides génériques » → « Sur vos propres workflows et vos propres données ») ; clôture FAQ Q6 (« pas des participants qui ont vu une démo » → « des équipes capables de faire tourner les systèmes elles-mêmes »).
3. **Meta : « certifié Qualiopi » retiré** (non présent dans llms.txt/copie AI Makers, cf. note de réconciliation F). **`1 250` → `2 500`** (canonique). ~~Title « AI Makers · … » conservé car title non templaté~~ **CORRIGÉ (voir §Reconciliation applied)** : la home passe par `constructMetadata`, le template `%s | AI Makers` s'applique bien → la marque de tête est retirée.
4. **Tags `[to validate]` préservés** sur 9,6/10, 100% reco, BCG 70%, +70% Sage, badges partenaires — marqueurs d'honnêteté.

**Divergence FR vs EN assumée :**
- **Ordre des offres :** l'EN reléguait la Formation en dernier (intention MOOC hors ICP EN). En FR, « formation ia » (6 900) est le head term et l'ICP — on **conserve l'ordre live** (Transformation → Formation → FDE) et on garde la formation proéminente dans le maillage et les mots-clés.
- **Cadrage conformité :** on garde le RGPD/CNIL/AI Act natif live (l'EN taguait un cadrage US `[to validate]` — sans objet en FR).

**Laissé pour la technique (hors édition de contenu) :** slugs/routes, hreflang, `inLanguage`, collision CTA /diagnostic-ia — non traité ici.

---

## Reconciliation applied

Passe de réconciliation FR (audits SEO + anti-slop). Éditée en place.

**Changé :**
1. **Title (rule 1) — correctif d'intégrité :** l'ancienne proposition `AI Makers · Formation & Agence IA pour Entreprises` s'appuyait sur une affirmation FAUSSE (« home non templatée »). L'audit SEO confirme que `constructMetadata` renvoie un title string, donc le template `%s | AI Makers` du layout **s'applique** → double marque + >60. Nouveau title `Formation, Agence & Automatisation IA` (rendu ≈49 car., marque une fois, 3 piliers en tête). Rationale §3 et point 3 de la réconciliation initiale corrigés.
2. **Normalisation des tags (rule 7) :** tous les `[à valider …]` → `[to validate …]` (texte explicatif FR conservé : `pour usage`, `source`, `autorisation`, `cas non publié`, `badge programme FR`, `accord client`). Grep-cohérence.

**Délibérément gardé :**
- Tous les tags d'honnêteté `[to validate]` (9,6/10, 100% reco, BCG 70%, +70% Sage `cas non publié`, badges Anthropic/Osez l'IA, 60-80%) — marqueurs d'incertitude, PROTECT.
- Mots-clés FR déjà corrects (formation ia 6 900, agence ia 2 400, automatisation des processus 600, transformation ia 100) — aucune retouche (rule 5).
- Triple négation `optionsPunchline` (« Pas un cabinet. Pas une agence. Pas une licence de plus. ») : staked, une instance, payload concret — non aplatie (l'anti-slop la juge Clean).
- Refrain dogfooding (objection #3 « depuis 2022… », fleet « notre propre cuisine ») : instances distinctes et load-bearing, non saturées sur la page — keeper canonique reste `/a-propos` (hors batch). Gardé tel quel.
- Ordre des offres (Transformation → Formation → FDE) et cadrage RGPD/CNIL/AI Act : divergences FR assumées, conservées.

**Pour décision owner (hors périmètre édition) :** figure C6 « 5 à 10h/sem » (benefits[0]) vs « 7h/sem » canonique — non modifié ici (touche un chiffre canonique) ; framing à trancher. Sign-off client Qatar (18 000 $/-40%) et Shem's (10x) : tags `[to validate]` maintenus dans les cartes jusqu'à accord.
