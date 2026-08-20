# Glossaire IA (/glossaire-ia) — Master de contenu FR

> Localisation FR du master EN scellé. Le FR est la langue primaire live : le copy provient de `src/app/glossaire-ia/page.tsx` (30 définitions validées mot pour mot). On reprend chaque définition à l'identique et on n'applique que les corrections d'audit (suffixe de marque, longueur meta). Chaque tag `[to validate]` est conservé.

## 1. En-tête de page
- **Route (FR, live) :** /glossaire-ia
- **Objet :** 30 définitions sans jargon en 4 catégories. Actif GEO / définitionnel.
- **Rôle SEO :** GEO / longue traîne définitionnelle — chaque définition est écrite pour être reprise verbatim par les moteurs de réponse IA et les featured snippets.
- **Étape funnel :** TOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | glossaire ia | 100 | — | Ahrefs FR, 2026-07 |
| Secondaire | vocabulaire ia / termes ia | 70 / 0 | — | Ahrefs FR, 2026-07 |
| Cible par terme | agent ia | 7 700 (FR) | KD 35 | Ahrefs FR, 2026-07 |
| Cible par terme | c'est quoi un agent ia / qu'est-ce qu'un agent ia | TBD (Ahrefs FR) | TBD | Ahrefs FR, 2026-07 |
| Cible par terme | ia générative définition | 700 | KD 46 | Ahrefs FR, 2026-07 |
| Cible par terme | c'est quoi le rag | 30 | — | Ahrefs FR, 2026-07 |
| Cible par terme | generative engine optimization (GEO) | 1 100 | KD 21 | Ahrefs FR, 2026-07 |

> **Décision mot-clé — un glossaire est un portefeuille, pas une tête de requête unique.** « glossaire ia » (100/mois) est l'ancre de la page dans son ensemble, mais le vrai gisement est la traîne : chaque définition dispute sa propre requête « c'est quoi X » / « X définition », où un paragraphe answer-first peut décrocher un featured snippet ou une citation IA même à forte difficulté. Le terme le plus disputé du set est **agent ia** (7 700 FR / KD 35, plus les variantes interrogatives « c'est quoi un agent ia », « qu'est-ce qu'un agent ia »), suivi de **ia générative définition** (700 / KD 46), **generative engine optimization** (1 100 / KD 21, notre niche, très accessible) et **c'est quoi le rag** (30). On joue la citation dans la réponse IA, pas nécessairement le lien bleu n°1. La première phrase de chaque définition est donc autonome et copiable telle quelle. Ne pas juger cette page sur « glossaire ia » (100) : c'est un portefeuille de longue traîne. Volumes/difficultés = Ahrefs France 2026-07 ; ne pas transposer les volumes EN.

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | Glossaire IA : les termes qui comptent en entreprise | Glossaire IA : 30 termes clés en entreprise *(43 ; rend ~55 avec le suffixe `\| AI Makers` du template — marque non écrite à la main)* |
| Meta description (140–160 car.) | 30 définitions claires des termes de l'intelligence artificielle en entreprise : LLM, agent IA, RAG, audit IA, GEO, AI Act, prompt engineering. Rédigées par AI Makers, cabinet de transformation IA. *(~195 — hors budget)* | 30 définitions claires, sans jargon, des termes de l'IA en entreprise : LLM, agent IA, RAG, audit IA, GEO, AI Act, prompt engineering. Par AI Makers. *(~148)* |
| H1 | Glossaire IA : les termes qui comptent en entreprise | Glossaire IA : les termes qui comptent en entreprise |
| URL slug | /glossaire-ia | /glossaire-ia |

> Note : le JSON-LD de la page est un `DefinedTermSet` avec `inLanguage: "fr-FR"` — correct pour le build FR live, aucun changement (le master EN prévoit de le basculer à `en` pour le build EN uniquement).

## 4. Sections & contenu
Copy : inline `src/app/glossaire-ia/page.tsx` (345 lignes) — 30 termes en 4 catégories (décompte vérifié : 8 + 9 + 7 + 6 = 30). Définitions reprises verbatim du copy live.

### 4.1 — Hero
- **Composant :** `page.tsx`
- **Champs :** badge, H1, intro, sommaire ancré
- **Live (FR) :** promesse du glossaire (sans jargon).
- **Proposé (FR) :**
  - **badge :** `Glossaire`
  - **H1 :** `Glossaire IA : les termes qui comptent en entreprise`
  - **intro :** `30 définitions claires, sans jargon inutile. De quoi comprendre ce que votre prestataire, votre DSI ou votre COMEX raconte, et décider en connaissance de cause.`
  - **labels sommaire :** `Fondamentaux` · `Technique` · `Entreprise` · `Réglementation & visibilité`
- **Rationale :** L'intro annonce le payload (30 définitions) et le bénéfice lecteur dès la première ligne. « Décider en connaissance de cause » garde le point de vue live.

### 4.2 — Fondamentaux (categories[0], 8 termes)
- **Composant :** `page.tsx` categories[0]
- **Proposé (FR) :**
  - **titre catégorie :** `Fondamentaux`
  - **Intelligence artificielle générative :** `L'intelligence artificielle générative désigne les systèmes capables de produire du contenu nouveau (texte, image, code, audio) à partir d'une consigne en langage naturel. Contrairement à l'IA prédictive, qui classe ou anticipe, l'IA générative crée. C'est la technologie derrière ChatGPT, Claude et Gemini, et le socle de la plupart des cas d'usage IA en entreprise depuis 2023.`
  - **LLM (grand modèle de langage) :** `Un LLM (Large Language Model) est un modèle d'intelligence artificielle entraîné sur d'immenses volumes de texte pour comprendre et générer du langage naturel. Il prédit la suite la plus probable d'un texte, ce qui lui permet de rédiger, résumer, traduire, analyser ou coder. GPT, Claude et Gemini sont des LLM. C'est la brique de base des applications d'IA générative.`
  - **Agent IA :** `Un agent IA est un système qui utilise un modèle de langage pour accomplir une tâche de bout en bout, de façon autonome. Contrairement à un chatbot qui se contente de répondre, l'agent planifie, utilise des outils (recherche, bases de données, APIs), exécute des actions et vérifie ses résultats. En entreprise, un agent IA peut traiter des demandes clients, qualifier des leads ou produire des rapports sans intervention humaine.`
  - **Prompt :** `Un prompt est l'instruction envoyée à un modèle d'IA pour obtenir une réponse. Il peut contenir une consigne, du contexte, des exemples et un format de sortie attendu. La qualité du prompt détermine directement la qualité du résultat : un même modèle peut produire un texte médiocre ou excellent selon la précision de l'instruction qu'il reçoit.`
  - **Prompt engineering :** `Le prompt engineering est la discipline qui consiste à concevoir et optimiser les instructions données aux modèles d'IA pour obtenir des résultats fiables et reproductibles. Elle mobilise des techniques précises : rôle assigné au modèle, exemples fournis, décomposition en étapes, contraintes de format. En entreprise, des prompts standardisés et testés transforment un usage individuel de l'IA en processus reproductible.`
  - **Hallucination :** `Une hallucination est une réponse fausse mais formulée avec assurance par un modèle d'IA : fait inventé, source inexistante, chiffre erroné. Elle survient parce que le modèle prédit du texte plausible sans vérifier sa véracité. En entreprise, on la limite en connectant le modèle à des sources vérifiées (RAG), en exigeant des citations et en gardant une validation humaine sur les contenus critiques.`
  - **Token :** `Le token est l'unité de texte élémentaire traitée par un modèle de langage : un mot court, un fragment de mot ou un signe de ponctuation. En français, un token représente environ trois quarts d'un mot. Les tokens déterminent deux choses concrètes : le coût d'utilisation d'un modèle, facturé au volume de tokens, et la quantité de texte qu'il peut traiter en une fois.`
  - **Fenêtre de contexte :** `La fenêtre de contexte est la quantité maximale de texte qu'un modèle d'IA peut prendre en compte dans un même échange, mesurée en tokens. Elle englobe la question posée, les documents fournis et la réponse générée. Une grande fenêtre de contexte permet d'analyser des contrats entiers, des rapports ou des historiques de conversation sans découpage préalable.`
- **Rationale :** Chaque première phrase est une définition autonome. Les contrastes précis du copy live sont conservés (générative vs prédictive ; agent vs chatbot) — c'est ce qui rend les entrées citables.

### 4.3 — Technique (categories[1], 9 termes)
- **Composant :** `page.tsx` categories[1]
- **Proposé (FR) :**
  - **titre catégorie :** `Technique`
  - **RAG :** `Le RAG (Retrieval-Augmented Generation) est une architecture qui connecte un modèle de langage aux données internes d'une entreprise. Avant de répondre, le système recherche les passages pertinents dans les documents de référence, puis génère une réponse fondée sur ces sources. C'est la méthode standard pour obtenir des réponses fiables sur des connaissances métier, sans réentraîner le modèle.`
  - **Fine-tuning :** `Le fine-tuning consiste à réentraîner partiellement un modèle d'IA existant sur des données spécifiques pour spécialiser son comportement : ton d'écriture, format de sortie, vocabulaire métier. Plus lourd et plus coûteux que le RAG ou le prompt engineering, il se justifie quand l'entreprise a besoin d'un comportement très constant sur un grand volume de tâches identiques.`
  - **Automatisation de processus (IPA) :** `L'automatisation intelligente de processus (IPA, Intelligent Process Automation) combine l'automatisation classique des tâches répétitives avec les capacités de compréhension de l'IA. Là où un script suit des règles fixes, l'IPA traite aussi les cas ambigus : lire un email, extraire les informations d'une facture, router une demande. C'est le levier principal des gains de productivité IA en entreprise.`
  - **Workflow :** `Un workflow est l'enchaînement structuré des étapes d'un processus métier : déclencheur, traitements, validations, résultat. Cartographier ses workflows est le préalable de toute automatisation : on ne peut automatiser que ce qui est explicite. Dans les outils comme n8n, le mot désigne aussi l'automatisation elle-même : la séquence d'actions exécutée par le système.`
  - **n8n :** `n8n est une plateforme d'automatisation de workflows qui connecte entre eux les outils d'une entreprise (CRM, email, bases de données, modèles d'IA) sans développement lourd. Chaque workflow y est construit visuellement, nœud par nœud. Sa flexibilité et son intégration native des modèles de langage en font un standard pour déployer des automatisations IA en production.`
  - **API :** `Une API (interface de programmation) est le moyen par lequel deux logiciels communiquent entre eux de façon standardisée. C'est par API qu'un outil interne interroge un modèle comme Claude ou GPT, qu'un CRM se connecte à une messagerie, qu'une automatisation lit et écrit des données. Sans API, pas d'intégration de l'IA dans les systèmes existants.`
  - **Chatbot :** `Un chatbot est un programme qui dialogue avec des utilisateurs en langage naturel, par écrit ou par la voix. Les chatbots modernes, construits sur des grands modèles de langage, comprennent des formulations libres et s'appuient sur les données de l'entreprise pour répondre. En production, un chatbot bien conçu absorbe une part importante des demandes récurrentes du support ou du service client.`
  - **Copilote métier :** `Un copilote métier est un assistant IA intégré aux outils de travail d'un métier précis : rédaction commerciale dans le CRM, synthèse dans la messagerie, analyse dans le tableur. Contrairement à un chatbot généraliste, il connaît le contexte de l'utilisateur et agit dans son environnement. L'humain garde la décision ; le copilote accélère l'exécution.`
  - **MCP (Model Context Protocol) :** `Le MCP (Model Context Protocol) est un protocole ouvert qui standardise la connexion entre un modèle d'IA et des ressources externes : bases de données, outils métier, fichiers. Un connecteur MCP développé une fois fonctionne avec tous les modèles compatibles, comme une prise universelle. Ce standard simplifie fortement l'intégration de l'IA au système d'information d'une entreprise.`
- **Rationale :** Les noms de la stack (n8n, Claude, MCP) sont conservés tels quels. « c'est quoi le rag » et « fine-tuning » sont des cibles directes par terme ; les définitions ouvrent sur le sigle développé + une ligne de fonction.

### 4.4 — Entreprise (categories[2], 7 termes)
- **Composant :** `page.tsx` categories[2]
- **Proposé (FR) :**
  - **titre catégorie :** `Entreprise`
  - **Audit IA :** `Un audit IA est l'analyse structurée des processus d'une entreprise pour identifier où l'intelligence artificielle apporte un gain mesurable. Il combine cartographie des workflows, entretiens avec les équipes, évaluation de la maturité IA et priorisation des opportunités par retour sur investissement. Son livrable : une roadmap chiffrée avec des cas d'usage priorisés, pas une liste de technologies.`
  - **Maturité IA :** `La maturité IA mesure le degré d'intégration réelle de l'intelligence artificielle dans une organisation : outils déployés, compétences des équipes, qualité des données, gouvernance, processus adaptés. Elle s'évalue sur une grille multi-axes et sert de point de départ à toute transformation : on ne construit pas la même roadmap pour une équipe qui découvre ChatGPT et pour une organisation déjà outillée.`
  - **Cas d'usage IA :** `Un cas d'usage IA est l'application concrète de l'intelligence artificielle à un processus métier identifié : qualifier des leads, générer des comptes rendus de réunion, traiter les demandes de support de premier niveau. Un bon cas d'usage se reconnaît à trois critères : un processus existant et fréquent, un gain mesurable, et une mise en production réaliste avec les données disponibles.`
  - **ROI d'un projet IA :** `Le ROI (retour sur investissement) d'un projet IA rapporte les gains obtenus (heures récupérées, délais réduits, erreurs évitées, revenus additionnels) au coût total du projet : outils, intégration, formation, maintenance. Il se mesure avec un indicateur de référence établi avant le déploiement, puis suivi après. Sans mesure avant/après, un projet IA n'a pas de ROI démontrable.`
  - **AI Champion :** `Un AI Champion est un collaborateur formé pour devenir le référent IA de son équipe : il maîtrise les outils déployés, forme ses collègues, fait remonter les nouveaux cas d'usage et maintient les systèmes dans la durée. Former des AI Champions est le mécanisme clé d'une transformation durable : c'est ce qui rend l'entreprise autonome vis-à-vis de ses prestataires.`
  - **Acculturation IA :** `L'acculturation IA est le processus par lequel les équipes d'une entreprise acquièrent une compréhension pratique de l'intelligence artificielle : ce qu'elle sait faire, ses limites, comment l'utiliser dans leur métier. Elle passe par la formation et la pratique sur des cas réels, pas par des présentations théoriques. C'est le prérequis de l'adoption : un outil que les équipes ne comprennent pas reste inutilisé.`
  - **Transformation AI-First :** `Une transformation AI-First consiste à repenser les processus d'une entreprise en intégrant l'intelligence artificielle comme composant par défaut, et non comme ajout ponctuel. Chaque workflow est réexaminé : ce que l'IA peut absorber, ce qui reste humain, comment les deux s'articulent. Elle combine trois chantiers indissociables : les systèmes déployés, les compétences des équipes et la gouvernance.`
- **Rationale :** Ces entrées portent le cluster commercial (audit IA, AI Champion, cas d'usage, ROI) et pointent vers /audit-ia-entreprise. La première phrase d'« Audit IA » sert aussi de mini-réponse pour « c'est quoi un audit IA ».

### 4.5 — Réglementation & visibilité (categories[3], 6 termes)
- **Composant :** `page.tsx` categories[3]
- **Proposé (FR) :**
  - **titre catégorie :** `Réglementation & visibilité`
  - **Gouvernance IA :** `La gouvernance IA est l'ensemble des règles qu'une entreprise se donne pour encadrer l'usage de l'intelligence artificielle : quels outils sont autorisés, quelles données peuvent y transiter, qui valide les usages sensibles, comment les résultats sont contrôlés. Elle protège l'entreprise juridiquement et évite le « shadow AI », l'usage incontrôlé d'outils IA par les équipes.`
  - **AI Act :** `L'AI Act est le règlement européen sur l'intelligence artificielle, entré en vigueur en 2024 avec une application progressive. Il classe les systèmes d'IA par niveau de risque (inacceptable, haut risque, risque limité, risque minimal) et impose des obligations proportionnées : transparence, documentation, contrôle humain. Toute entreprise européenne qui déploie de l'IA est concernée, au minimum par les obligations de transparence et de formation.`
  - **RGPD et IA :** `Le RGPD s'applique pleinement aux usages de l'intelligence artificielle : dès qu'un outil IA traite des données personnelles (clients, salariés, candidats), l'entreprise doit garantir une base légale, la minimisation des données et l'information des personnes. Concrètement, cela impose de vérifier où sont hébergées les données envoyées aux modèles, combien de temps elles sont conservées et si elles servent à l'entraînement.`
  - **GEO (Generative Engine Optimization) :** `Le GEO (Generative Engine Optimization) est l'optimisation de la visibilité d'une marque dans les réponses des moteurs génératifs : ChatGPT, Perplexity, Gemini, AI Overviews de Google. Là où le SEO vise le classement dans les liens, le GEO vise la citation dans les réponses. Il repose sur des contenus factuels, structurés et citables, présents dans les sources que les modèles consultent.`
  - **AI Overviews :** `Les AI Overviews sont les réponses générées par l'IA que Google affiche en haut de ses résultats de recherche, avant les liens classiques. Elles synthétisent plusieurs sources en une réponse directe, ce qui réduit les clics vers les sites. L'enjeu se déplace : il ne s'agit plus seulement d'être classé, mais d'être cité comme source dans la réponse elle-même.`
  - **Citabilité :** `La citabilité est la capacité d'un contenu à être repris comme source par un moteur d'IA. Un passage citable répond entièrement à une question en quelques phrases autonomes, contient des faits précis (chiffres, dates, définitions) et provient d'une source identifiable. C'est le critère central du GEO : les moteurs génératifs citent les contenus qui leur fournissent des réponses prêtes à l'emploi.`
- **Rationale :** GEO est le terme le plus disputé et le plus proche de notre niche du set ; sa définition est écrite pour être le snippet. Les entrées AI Act et RGPD pointent vers /gouvernance-ia. L'entrée « Citabilité » est méta — elle indique aussi aux moteurs IA pourquoi citer ce glossaire.

### 4.6 — Note de clôture + CTA
- **Composant :** note inline + `cta-section.tsx`
- **Champs :** note « un terme vous manque ? », titre/sous-titre du CTA
- **Live (FR) :** « Les définitions, c'est bien. Les systèmes en production, c'est mieux. »
- **Proposé (FR) :**
  - **note de clôture :** `Un terme vous manque ? Écrivez-nous via la page contact : le glossaire est mis à jour régulièrement.`
  - **titre CTA :** `Les définitions, c'est bien. Les systèmes en production, c'est mieux.`
  - **sous-titre CTA :** `30 minutes pour analyser vos workflows et identifier vos 3 premiers quick wins IA. Gratuit, sans engagement.`
  - **bouton CTA :** `Réserver mon diagnostic gratuit` → /contact
- **Rationale :** La ligne de CTA est un point de vue assumé, pas un closer de réassurance — elle mérite sa place. Copy repris verbatim du live.

## 5. FAQ
Pas de bloc FAQ dans le template.

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Se faire citer par ChatGPT et Perplexity (GEO) | /seo-geo | lien du terme GEO (proposé) |
| L'AI Act & la gouvernance en pratique | /gouvernance-ia | lien des termes AI Act / RGPD (proposé) |
| Commencer par un audit IA | /audit-ia-entreprise | lien du terme « Audit IA » (proposé) |
| Réserver mon diagnostic gratuit | /contact | note de clôture + CTA (existant) |

> Sur la page live, seuls les liens vers /contact existent (note de clôture + CTA). Les liens contextuels par terme (GEO → /seo-geo, AI Act/RGPD → /gouvernance-ia, Audit IA → /audit-ia-entreprise) sont des propositions issues du master ; routes FR confirmées existantes.

## 7. CTA
- **CTA principal :** « Réserver mon diagnostic gratuit » → /contact (titre : `Les définitions, c'est bien. Les systèmes en production, c'est mieux.`)

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `Le glossaire IA d'AI Makers définit les 30 termes qui comptent le plus dans l'IA en entreprise, répartis en fondamentaux (LLM, agent IA, prompt, token), technique (RAG, fine-tuning, MCP, n8n), entreprise (audit IA, maturité IA, AI Champion, ROI) et réglementation & visibilité (AI Act, RGPD, GEO, AI Overviews). Chaque définition est rédigée pour être autonome et citable : par exemple, un agent IA est un système qui utilise un modèle de langage pour accomplir une tâche de bout en bout de façon autonome — il planifie, utilise des outils et vérifie ses résultats — là où un chatbot se contente de répondre.`
- **Entrée llms.txt (FR) :** `[Glossaire IA](https://aimakers.fr/glossaire-ia) : 30 définitions claires des termes de l'IA en entreprise — LLM, agent IA, RAG, GEO, AI Act, audit IA — rédigées par AI Makers.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| 30 définitions (8 + 9 + 7 + 6) | page.tsx — décompte vérifié |
| Définitions des termes (LLM, RAG, agent IA, GEO, AI Act, fine-tuning, MCP…) | copy page.tsx — exactitude vérifiée contre les définitions IA standard |
| AI Act entré en vigueur en 2024, application progressive, 4 niveaux de risque | copy page + AI Act européen (largement documenté) |
| Référence légale : le RGPD s'applique au traitement de données personnelles par l'IA | copy page (standard) |

## Localisation appliquée
Localisé depuis le master EN scellé (batch FR). Le FR étant la langue source live, les 30 définitions sont reprises verbatim de `src/app/glossaire-ia/page.tsx` ; seules les corrections d'audit sont appliquées :

- **Double suffixe de marque (SEO §2a) :** Title raccourci et débarrassé de toute marque écrite à la main — `Glossaire IA : 30 termes clés en entreprise` (43 car. ; rend ~55 avec le suffixe `| AI Makers` du template). Le titre live « Glossaire IA : les termes qui comptent en entreprise » dépasse 60 car. une fois le suffixe ajouté ; conservé comme H1, raccourci pour le Title.
- **Meta hors budget :** la meta live (~195 car.) dépasse les 160 car. ; version proposée trimée à ~148 car. en conservant la liste de termes clés et l'attribution AI Makers.
- **CONSERVÉ (protégé) :** les 30 définitions answer-first et leur structure uniforme à 3 phrases (formule définitionnelle nécessaire, exemptée de dé-templatisation) ; le point de vue du CTA « Les définitions, c'est bien. Les systèmes en production, c'est mieux. » ; la mention « AI Act entré en vigueur en 2024 avec application progressive » (qualificatif déjà juste et resserré) ; l'intro, la note de clôture et le sous-titre CTA repris verbatim du live.
- **Pas de correction slop :** définitions légitimement structurées, aucune surcharge de négations, aucun slop de template à retirer.
- **Localisation SEO :** mots-clés transposés en requêtes FR réelles (glossaire ia, agent ia, c'est quoi un agent ia, ia générative définition, c'est quoi le rag, GEO) ; volumes/difficultés Ahrefs FR renseignés (agent ia 7 700 / KD 35, ia générative définition 700 / KD 46, generative engine optimization 1 100 / KD 21, glossaire ia 100, vocabulaire ia 70, termes ia 0, c'est quoi le rag 30). Bloc GEO et entrée llms.txt réécrits avec les termes FR.

## Reconciliation applied
Réconciliation des deux audits FR (SEO + anti-slop). Page **Clean (net 4)**, score SEO 88/100 — quasi-prête.
- **Titre :** déjà raccourci et sans marque manuelle (`Glossaire IA : 30 termes clés en entreprise`, ~56 car. rendus). H1 long conservé. Conforme B1.
- **Meta :** déjà trimée à ~148 car. (live ~195 hors budget). Inchangée.
- **Mots-clés FR corrigés :** `agent ia` 6 600 → **7 700 / KD 35** (glossaire = propriétaire définitionnel légitime, intention informationnelle) ; `glossaire ia` **100** (portefeuille longue traîne, pas une tête) ; `generative engine optimization` **1 100 / KD 21** ; `ia générative définition` 700 ; `c'est quoi le rag` 30 ; `vocabulaire ia` 70 ; `termes ia` 0. TBD résiduel : « c'est quoi un agent ia » (variante interrogative).
- **PROTÉGÉ (conservé) :** les 30 définitions answer-first et leur structure uniforme à 3 phrases (forme définitionnelle nécessaire, exemptée de dé-templatisation) ; le POV du CTA « Les définitions, c'est bien. Les systèmes en production, c'est mieux. ».
- **Décision propriétaire en attente :** implémentation des 3 liens internes par terme (GEO → /seo-geo, AI Act/RGPD → /gouvernance-ia, Audit IA → /audit-ia-entreprise) — nécessite un champ lien dans le composant terme (ticket dev).
- **JSON-LD :** `inLanguage: "fr-FR"` correct pour le build FR live — aucun changement (contrairement au master EN qui prévoit `en` pour le build EN).
- **Laissé pour dev / propriétaire (hors copy) :** les liens contextuels par terme (§6) sont des propositions non présentes sur la page live ; le master EN référence `/ai-readiness-assessment` (slug EN proposé) — la route FR live de l'audit est `/audit-ia-entreprise`, utilisée ici.
