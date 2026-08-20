# Forward Deployed Engineer (/forward-deployed-engineer) — Master de contenu FR

> ⚠️ **IBM RETIRÉ DU SITE (2026-07-30, décision Maneesh).** Toute mention d'IBM ci-dessous — logo client, liste de références, biographie « ex-IBM » — ne doit PAS être reportée dans le code. Le logo `logo IBM -nobg.png` a été supprimé du dépôt.

> Localisation FR du master EN scellé (`[EN] website-content/forward-deployed-engineer/forward-deployed-engineer.md`). Le contenu FR reprend **verbatim la copie live** — `src/lib/offer-pages/fde.ts` (`fdeContent.*` + `seoGeoMeta` équivalent), `src/app/forward-deployed-engineer/page.tsx` (chrome inline, TeamCard, bios fondateurs, badges), `src/lib/site-config.ts` — qui est la voix authentique de la marque (l'EN en a été traduit). On applique les mêmes correctifs d'audit que l'EN, on relocalise les champs SEO sur les vrais mots-clés FR (Ahrefs France, 2026-07), et on **conserve verbatim les bios fondateurs/ingénieurs** (voix originellement française, jamais retraduite). Voir §Réconciliation.

## 1. En-tête de page
- **Route (FR, live) :** /forward-deployed-engineer
- **Objectif :** Page d'éducation-catégorie + offre pour le modèle FDE (ingénieur IA déployé dans l'équipe cliente). Item mis en avant du méga-menu.
- **Rôle SEO :** pilier (FR : forward deployed engineer — terme de marque/catégorie de niche, très faible volume FR mais fort différenciateur ; on blende « ingénieur IA » et « agence ia »).
- **Étape funnel :** MOFU/BOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume (FR) | Difficulté | Source |
|---|---|---|---|---|
| Primaire | forward deployed engineer | 10 (FR) / 16 000 (global) | faible | Ahrefs keywords-explorer, France, 2026-07 |
| Secondaire | ingénieur ia | faible (FR) | — | Ahrefs, France, 2026-07 |
| Secondaire | agence ia | 2 400 | 54 | Ahrefs, France, 2026-07 |
| Support | agent ia | 7 700 | — | Ahrefs, France, 2026-07 — terme large, mention en corps |

> **Décision mots-clés :** contrairement aux US (où « forward deployed engineer » pèse 16 000/mo à faible KD et devient un vrai pilier de volume), en **France le terme est quasi inexistant en recherche (≈10/mo)** — c'est un terme de marque/catégorie émergent, pas un jeu de volume. La stratégie FR est donc : **posséder la définition** (paragraphe answer-first citable par les moteurs IA — GEO), garder « Forward Deployed Engineer » dans le title comme catégorie de marque, et **blender les termes FR qui convertissent** : « ingénieur IA » (le concept que le prospect FR cherche vraiment) et « agence ia » (2 400 — l'intention d'achat FR la plus proche). « agent ia » (7 700) est trop large/informationnel pour être ciblé ici, mais mérite une mention en corps. La page se rank sur la marque et la citation IA, pas sur le head term US.

## 3. Meta de page
| Champ | Actuel (FR, live) | Proposé (FR) |
|---|---|---|
| Title | Forward Deployed Engineer (FDE) : le modèle expliqué, un ingénieur IA déployé chez vous | **`Forward Deployed Engineer : ingénieur IA dédié`** *(bare 46 car. ; le layout ajoute automatiquement « ​\| AI Makers » → rendu 58 car.)* |
| Meta description (≤160) | Qu'est-ce qu'un Forward Deployed Engineer ? Le modèle inventé par Palantir, adopté par OpenAI et Anthropic, et comment déployer un FDE dédié dans votre entreprise : code en production dès la semaine 1, formation hebdo, propriété totale. *(≈233 — trop long)* | **`Qu'est-ce qu'un Forward Deployed Engineer ? Le modèle né chez Palantir, adopté par OpenAI et Anthropic. Déployez un ingénieur IA dédié, en prod dès semaine 1.`** *(158)* |
| H1 | Un ingénieur IA qui s'assoit dans votre équipe. | **`Un ingénieur IA qui s'assoit dans votre équipe.`** *(H1 live conservé — c'est déjà la formule answer-first FR native)* |
| URL slug | /forward-deployed-engineer | /forward-deployed-engineer *(conservé — inchangé)* |

> Note SEO : title relabellé — le title live est trop long (double « déployé chez vous ») et déborde avec le suffixe de marque. On garde « Forward Deployed Engineer » (catégorie de marque, à ne pas traduire) et on blende « ingénieur IA dédié ». **Ne jamais écrire le suffixe « ​\| AI Makers » à la main** : le layout l'ajoute via le template `%s | AI Makers`. Le title `default` du layout n'est PAS utilisé ici — cette page passe par `constructMetadata()` (donc le template s'applique).
>
> JSON-LD sur la page (construit dans `page.tsx`) : BreadcrumbList + Service + **DefinedTerm** (`fdeContent.definition.answer`, terme « Forward Deployed Engineer (FDE) ») + **Person × 2** (Walid Boulanouar, Adel Dahani — données réelles LinkedIn) + FAQPage. Le DefinedTerm + les deux Person sont des atouts GEO forts (définition + autorité incarnée).

## 4. Sections & contenu
Source de copie : `src/lib/offer-pages/fde.ts` (`fdeContent.*` — le fichier de données le plus riche du site, 501 lignes) + composants locaux `src/app/forward-deployed-engineer/team-card.tsx` & `cert-badges.tsx` + bios fondateurs inline dans `page.tsx`. Copie FR = **verbatim live**, sauf correctifs d'audit signalés.

### 4.1 — Hero
- **Composant :** `fdeContent.hero`
- **Champs :** status (badge vivant), headline, subtitle, cta, microcopy
- **Proposé (FR) — verbatim live :**
  - **status :** `Maximum 3 nouveaux clients par mois`
  - **headline (H1) :** `Un ingénieur IA qui s'assoit dans votre équipe.`
  - **subtitle :** `Il rejoint vos points du matin, construit dans vos outils, et ouvre son premier chantier la semaine 1. Recruter le même profil vous prendrait 6 à 12 mois.`
  - **cta :** `{ label: "Réserver mon diagnostic gratuit", href: "/contact" }`
  - **microcopy :** `Onboardé sur votre métier 2 semaines avant le jour 1.`
- **Rationale :** headline answer-first qui énonce le modèle en une ligne (déployé, pas conseil) et reflète l'intention « ingénieur IA ». Badge de rareté « 3 clients/mois » conservé — contrainte de capacité réelle, pas fausse urgence. Le subtitle met en avant l'arbitrage concret (chantier semaine 1 vs recrutement 6-12 mois).

### 4.2 — Barre de preuve
- **Composant :** `fdeContent.proof` + logos clients (`clientLogos`, lecture seule)
- **Champs :** kicker, logoNames[8], stat (value/suffix/label/detail)
- **Proposé (FR) — verbatim live :**
  - **kicker :** `Ils travaillent avec nos ingénieurs`
  - **stat :** `7h` `/sem` · label `récupérées par collaborateur` · detail `Saisie, reporting, synthèses, relances. Chaque système est livré avec un chiffre avant et un chiffre après. Pas de ROI estimé sur un slide : du temps mesuré, poste par poste.`
- **Rationale :** 7h/sem est canonique (`llms.txt`). Logos inchangés (Schneider Electric, IBM, Amgen, Sage, Délifrance, AS Monaco, Emirates NBD, Gepromed) — lecture seule depuis `site-config`, aucune nouvelle allégation.

### 4.3 — Le modèle (définition FDE)
- **Composant :** `fdeContent.definition`
- **Champs :** badge, title, answer (answer-first), why, stats[3]
- **Proposé (FR) — verbatim live :**
  - **badge :** `Le modèle`
  - **title :** `Qu'est-ce qu'un Forward Deployed Engineer ?`
  - **answer (paragraphe citable) :** `Un Forward Deployed Engineer (FDE) est un ingénieur IA déployé directement dans l'équipe du client. Il ne conseille pas depuis un bureau d'études : il comprend le problème réel sur le terrain, écrit du code de production, connecte l'IA aux systèmes existants et reste jusqu'à ce que ça tourne. Le modèle a été inventé par Palantir il y a vingt ans ; l'IA générative l'a remis au centre du jeu.`
  - **why :** `La raison est brutale : 95 % des pilotes IA en entreprise ne produisent aucun retour mesurable (étude MIT, 2025). Pas parce que les modèles sont faibles, mais parce que le déploiement échoue. Chaque environnement d'entreprise est compliqué à sa façon, et aucun logiciel sur étagère ne s'y branche tout seul. Il faut quelqu'un dans l'équipe, qui possède le résultat.`
  - **stats[3] :**
    1. `95 %` — `des pilotes IA échouent en entreprise` — `Étude MIT, 2025. La cause n'est pas le modèle : c'est le dernier kilomètre du déploiement. Exactement le travail d'un FDE.` `[to validate — source externe]`
    2. `+729 %` — `d'offres d'emploi FDE en un an` — `Offres Indeed multipliées par 8 entre avril 2025 et avril 2026. OpenAI, Anthropic et Google recrutent des FDE, y compris à Paris, comme Mistral et H Company.` `[to validate — source externe]`
    3. `385 K$ à 1 M$` — `la rémunération d'un FDE dans les labs IA` — `C'est le profil le plus disputé du marché. Vous ne pouvez pas le recruter à ce prix. Vous pouvez en déployer un : c'est notre modèle.` `[to validate — source externe]`
- **Rationale :** le paragraphe `answer` est la définition citable par les moteurs IA (adossée au JSON-LD DefinedTerm) et capte « qu'est-ce qu'un forward deployed engineer ». Les stats sont la copie live FR ; sources conservées mais taguées `[to validate]` (cf. §9). Le chiffre MIT 2025 (95 % d'échec des pilotes) est l'allégation la plus forte et la plus citable.

### 4.4 — Le problème (recruter)
- **Composant :** `fdeContent.problem`
- **Champs :** badge, title, intro, anchors[3]
- **Proposé (FR) — verbatim live :**
  - **badge :** `Le problème`
  - **title :** `Recruter un ingénieur IA senior : long, cher, risqué.`
  - **intro :** `Vous savez ce qu'il vous faut : quelqu'un qui construit. Le marché vous répond avec des CV, des préavis et des promesses.`
  - **anchors[3] :**
    1. `6 à 12 mois` — `pour recruter un expert IA senior` — `Vous rédigez la fiche de poste, vous sourcez, vous faites passer les entretiens, vous attendez le préavis. Pendant tout ce temps, personne ne construit.` `[to validate]`
    2. `70 000 €+/an` — `de salaire fixe, plus charges` — `Vous payez avant la première ligne de code. Et rien ne garantit qu'un seul système tournera en production.` `[to validate]`
    3. `1 erreur` — `de casting, et tout est à refaire` — `Un mauvais recrutement sur ce poste et vous repartez à zéro : nouveau sourcing, nouveau préavis, six mois de plus.`
- **Rationale :** cadre la décision acheter-vs-construire que l'acheteur ops/transformation pèse réellement. Chiffres salaire/délai = copie live FR, conservés, tagués `[to validate]`.

### 4.5 — Le mécanisme (rupture dark, signature)
- **Composant :** `fdeContent.mechanism` (+ systèmes internes rendus depuis `homepageContent.fleet.systems` filtrés `internal`)
- **Champs :** badge, title, intro, footnote
- **Proposé (FR) — verbatim live :**
  - **badge :** `Le mécanisme`
  - **title :** `Il n'arrive pas seul. Il arrive avec nos systèmes.`
  - **intro :** `Le jour 1, votre ingénieur ouvre la boîte à outils du cabinet : l'intelligence d'appels qui analyse nos propres calls, le cockpit qui briefe notre CEO chaque matin, le suivi qui score la santé de chaque mission chaque semaine. Plus de 200 systèmes déployés, plus de 1 500 automatisations prêtes à adapter, et les playbooks qui vont avec. Il ne part jamais d'une page blanche : il adapte ce qui tourne déjà.`
  - **footnote :** `On les construit pour nous d'abord. Un système qui ne tient pas chez nous n'arrive jamais chez vous.`
- **Rationale :** le mécanisme de dogfooding est le vrai différenciateur vs un freelance. « 200 systèmes » est canonique (`llms.txt`) ; « 1 500 automatisations » est copie live → `[to validate]` (cf. §9). Section rendue en dark avec les cartes des systèmes internes (source `fleet`, lecture seule).

### 4.6 — L'équipe (encadrement) + Direction technique (bios fondateurs)
- **Composant :** `fdeContent.team` + `team-card.tsx` ; bloc « Direction technique » inline dans `page.tsx` (bios Walid Boulanouar & Adel Dahani + badges AY Automate).
- **Champs :** badge, title, intro, members[3] ; bios fondateurs verbatim.
- **Proposé (FR) — verbatim live :**
  - **badge :** `L'équipe`
  - **title :** `Les ingénieurs derrière le modèle`
  - **intro :** `Pas un vivier, pas de profils anonymes. Des ingénieurs qui construisent tous les jours, chez nous et chez nos clients, encadrés en direct par Walid, notre CTO.`
  - **members[3] (noms/rôles/stacks conservés) :** `Walid — CTO` · `Ali — Data & AI Consultant` · `Kunta — AI Engineer`.
  - **Bloc « Direction technique » (badge `Direction technique`) — titre `Encadré par les fondateurs d'AY Automate` ; intro `AI Makers est le bras francophone d'AY Automate. Chaque déploiement est cadré par des ingénieurs qui construisent des systèmes IA en production tous les jours.` ; badges `Partenaire officiel · marché francophone` + `+20 ingénieurs IA déployés en entreprise`.**
  - **Bio fondateur — Walid Boulanouar** (`CTO AI Makers · Co-fondateur d'AY Automate`) — verbatim FR natif : `Ingénieur INPT, builder par nature : plus de 250 produits construits, agents IA et automatisations n8n. Il a livré des systèmes pour des entités gouvernementales au Maroc et en Arabie Saoudite. Il encadre chaque ingénieur déployé.`
  - **Bio fondateur — Adel Dahani** (`Co-fondateur & COO d'AY Automate · ex-IBM`) — verbatim FR natif : `Ingénieur ENSIAS, AI Engineer chez IBM où il a livré des projets d'IA générative pour L'Oréal, GSK et Nestlé. Certifié Microsoft Azure Data Scientist. Il cadre nos déploiements les plus exigeants.`
- **Rationale :** noms et lignée AY Automate (Walid Boulanouar, Adel Dahani ex-IBM, +20 ingénieurs déployés) sont canoniques dans `llms.txt` — repris verbatim, rien d'inventé. **Les bios sont une voix originellement française, jamais retraduite depuis l'EN** — conservées telles quelles (INPT, ENSIAS, L'Oréal/GSK/Nestlé, Azure Data Scientist). L'EN pliait la lignée dans l'intro équipe + §4.11 ; en FR on garde le bloc bios complet, plus riche et plus incarné. Les schémas JSON-LD Person (LinkedIn vérifié) accompagnent ces bios.

### 4.7 — Les profils (3)
- **Composant :** `fdeContent.roles`
- **Champs :** badge, title, intro, popularBadge, items[3]{number,title,label,description,deliverables,logos,popular}
- **Proposé (FR) — verbatim live :**
  - **badge :** `Les profils` · **title :** `Les profils qu'on forme et qu'on source` · **intro :** `On forme et on source les meilleurs profils IA. Trois rôles, un seul standard : livrer en production.` · **popularBadge :** `Le plus demandé`
  - **01 — AI Delivery Lead — « Le chef d'orchestre » :** `Il pilote la mission de bout en bout et traduit vos priorités business en systèmes livrés. C'est lui qui tient le rythme, semaine après semaine.` · livrables `Roadmap tenue` / `Arbitrages ROI` / `Comité hebdo`.
  - **02 — AI Engineer — « Le bâtisseur » (Le plus demandé) :** `RAG, systèmes multi-agents, orchestration : il construit dans vos outils, pas dans un environnement de démo. Ce qu'il écrit part en production.` · livrables `Agents en production` / `Intégrations à votre stack` / `Playbooks documentés`.
  - **03 — LLMOps Engineer — « Le moteur » :** `Il fait tourner : déploiement, monitoring, contrôle des coûts. C'est lui qui transforme un POC en produit.` · livrables `Déploiement fiable` / `Monitoring et alertes` / `Coûts maîtrisés`.
- **Rationale :** adaptation directe des trois cartes de rôle ; labels punchy conservés. Stacks/logos inchangés (lecture depuis la source).

### 4.8 — La stack
- **Composant :** `fdeContent.stack`
- **Champs :** badge, title, intro, tools[6]{name,line}
- **Proposé (FR) — verbatim live :**
  - **badge :** `La stack` · **title :** `Les outils qu'il maîtrise en arrivant` · **intro :** `Zéro montée en compétence sur votre facture. Il a déjà passé des centaines d'heures sur chacun de ces outils, sur de vraies missions.`
  - **tools[6] :**
    - **Claude Code** — `Son poste de travail. C'est ici que vos agents et vos outils internes s'écrivent, tous les jours.`
    - **n8n** — `Vos outils branchés entre eux. Les données circulent, plus personne ne les recopie.`
    - **Notion** — `Chaque système documenté au fil de l'eau. Les playbooks restent chez vous, lisibles par vos équipes.`
    - **Microsoft 365** — `Il construit dans Outlook, Teams et Excel : là où vos équipes travaillent déjà, pas à côté.`
    - **Claude API** — `Des agents branchés sur vos données et vos règles métier. Pas un chatbot générique de plus.`
    - **LangChain** — `Vos agents RAG : ils répondent depuis vos documents et vos données, pas depuis internet.`
- **Rationale :** stack réelle, nommée (première main, concrète) — la preuve anti-slop d'un opérateur, pas d'un deck. « Des centaines d'heures sur de vraies missions » conservé.

### 4.9 — Semaine par semaine
- **Composant :** `fdeContent.timeline`
- **Champs :** badge, title, steps[5]{period,title,description,gain}, ctaPrompt
- **Proposé (FR) — verbatim live :**
  - **badge :** `Le déroulé` · **title :** `Concrètement, semaine par semaine`
  - **steps[5] :**
    1. **`Semaines -2 à 0` — Il apprend votre métier avant d'arriver.** `Deux semaines avant le kick-off, il est déjà au travail : il lit vos process, apprend votre vocabulaire, prend en main vos outils. Le jour 1, il ne vous demande pas comment vous travaillez. Il le sait.` · gain `Zéro journée passée à lui expliquer votre métier.`
    2. **`Semaine 1` — Il rejoint vos points du matin et ouvre le premier chantier.** `Pas de phase de cadrage de trois mois. Le premier système se construit directement dans vos workflows, avec vos équipes, dès la première semaine.` · gain `Un chantier ouvert la semaine 1, pas un planning.`
    3. **`Chaque mois` — 1 à 2 systèmes partent en production.** `Chaque système est livré avec un chiffre avant et un chiffre après. Ce qui ne produit pas de résultat est repris jusqu'à ce que ça tourne.` · gain `Un impact mesuré système par système, pas un rapport de fin de mission.`
    4. **`Chaque semaine` — 2h de formation, les mains sur les systèmes.** `Il ne construit pas dans son coin. Chaque semaine, il forme vos équipes 2 heures sur les systèmes qu'elles utilisent réellement. Pas de slides théoriques.` · gain `Vos équipes montent en compétence pendant que les systèmes se construisent.`
    5. **`À 6 mois` — Vos équipes font tourner les systèmes sans lui.** `Les systèmes tournent, les playbooks sont écrits, vos référents sont formés. Tout vous appartient. L'objectif n'est pas de rester : c'est de vous rendre autonomes.` · gain `Zéro dépendance le jour où l'ingénieur repart.`
  - **ctaPrompt :** `Vous voulez savoir ce qu'il construirait chez vous en premier ?` → CTA `Réserver mon diagnostic gratuit` / /contact
- **Rationale :** le pré-onboarding et la sortie à 6 mois sont les allégations les plus tranchées et concrètes du modèle. La ligne « gain » answer-first par étape reste scannable et citable.

### 4.10 — Comparaison
- **Composant :** `fdeContent.comparison`
- **Champs :** badge, title, rows[6]{label, freelance, esn, fde}
- **Proposé (FR) — verbatim live :**
  - **badge :** `La comparaison` · **title :** `FDE vs les alternatives`
  - **Colonnes :** `Freelance` · `ESN` · `Forward Deployed Engineer`
  - **rows[6] :**
    1. **Ce que vous achetez** — `Des jours facturés` / `Une équipe mutualisée entre clients` / `Un ingénieur dédié à vous seul, un résultat au contrat`
    2. **Le démarrage** — `Quand son planning se libère` / `Quand le staffing le décide` / `Onboardé 2 semaines avant le kick-off, opérationnel dès le jour 1`
    3. **L'encadrement** — `Il est seul face au problème` / `Un manager loin du terrain` / `Encadré en direct par notre CTO, adossé à 200+ systèmes déployés`
    4. **La formation de vos équipes** — `Rarement incluse` / `Un projet facturé à part` / `2h de formation hands-on par semaine, incluses`
    5. **Ce qui vous reste** — `Le savoir repart avec lui` / `Des livrables techniques` / `Tout vous appartient : systèmes, playbooks, équipes formées`
    6. **L'engagement** — `Pas d'engagement de résultat` / `Une obligation de moyens` / `4 garanties écrites au contrat`
- **Rationale :** le tableau comparatif est un actif propre à la page (distinct du tableau home/offre) — conservé en entier. « ESN » gardé tel quel (terme FR natif, pas besoin de glose comme en EN).

### 4.11 — Origine du modèle
- **Composant :** `fdeContent.origin`
- **Champs :** badge, text
- **Proposé (FR) — verbatim live :**
  - **badge :** `D'où vient ce modèle`
  - **text :** `Palantir a bâti son succès sur ce modèle il y a vingt ans : l'ingénieur travaille dans l'équipe du client, pas dans un bureau d'études, parce qu'aucun environnement d'entreprise ne ressemble à un autre. OpenAI a monté son équipe FDE en 2024, puis une coentreprise de déploiement de 4 milliards de dollars en 2026. Anthropic a suivi. Les géants viennent de valider ce que nous pratiquons depuis le début : en français, pour les PME et ETI.`
- **Rationale :** partenariat AY Automate + 20 ingénieurs canonique (`llms.txt`). Lignée OpenAI/Anthropic/Palantir = copie live FR ; le chiffre « coentreprise 4 Md$ » → `[to validate]` (cf. §9).

### 4.12 — Preuve clients (témoignages)
- **Composant :** `fdeContent.testimonials` (+ carrousel logos), rendus depuis `homepageContent.testimonials.items` (lecture seule)
- **Champs :** badge, title, names[3]
- **Proposé (FR) — verbatim live :**
  - **badge :** `Ils nous font confiance` · **title :** `Ce que ça donne chez eux`
  - **Note :** auteurs des témoignages (Nicole Neumann, Éric Solal, John Volke) rendus en lecture seule depuis `homepageContent.testimonials` — aucune nouvelle citation rédigée ici. `[to validate : accord client]` (hérité de la home).
- **Rationale :** réutilise les témoignages existants ; aucun résultat fabriqué.

### 4.13 — Certifications
- **Composant :** `cert-badges.tsx` + `fdeContent.badges`
- **Champs :** partnersLabel, partners[6], certsLabel, certs[3]
- **Proposé (FR) — verbatim live :**
  - **partnersLabel :** `Partenaires officiels`
  - **partners[6] :** CLAY — `Enterprise partner` · GOOGLE — `Google partner` · MAKE — `Certified partner` · N8N — `Certified expert` · AMAZON WEB SERVICES — `AWS partner` · MICROSOFT — `Azure partner`
  - **certsLabel :** `Nos ingénieurs sont certifiés`
  - **certs[3] :** ANTHROPIC — `Claude certified architect` · MICROSOFT — `AI industry leader` · MICROSOFT — `Certified fundamentals`
- **Rationale :** labels conservés (noms de badges = termes propres) ; **chaque allégation de badge est taguée `[to validate]` en §9** (assets non vérifiés ici). Rendu défensif : tuile masquée si l'image est absente.

### 4.14 — FAQ
- **Composant :** `shared/faq-accordion.tsx` + `fdeContent.faq` — voir §5.

### 4.15 — Garanties
- **Composant :** `sections/homepage/guarantees.tsx` (bloc partagé) + bloc capacité (`finalCta.urgency` de la home)
- **Proposé (FR) :** Référence seule — les 4 garanties sont **possédées par la home / la page garanties**. Ne pas ré-écrire la copie ici ; rendre le composant partagé pour que le wording reste single-sourced. Le bloc capacité rend `finalCta.urgency` (home) + lien `Voir notre capacité actuelle →` (/capacite).
- **Rationale :** discipline de réutilisation — les garanties appartiennent à /garanties ; les cloner risque la dérive.

### 4.16 — Related + CTA final
- **Composant :** `shared/related-content.tsx` + `cta-section.tsx`
- **Proposé (FR) — verbatim live :**
  - **Related[3] :** `Transformation IA` (/ai-transformation — `L'offre complète où s'inscrit votre ingénieur dédié.`) · `L'équipe AI Makers` (/equipe — `Les profils qui déploient chez vous, entre Paris et Rabat.`) · `Carrières` (/carrieres — `Les postes ouverts d'ingénieurs IA chez AI Makers.`)
  - **CTA final — title :** `Prêt à accueillir votre ingénieur IA ?`
  - **CTA final — subtitle :** `30 minutes pour analyser vos workflows et identifier les premiers systèmes que votre ingénieur construirait, que vous travailliez avec nous ou non.`
  - **CTA label :** `Réserver mon diagnostic gratuit` → /contact
- **Rationale :** clôture humaine et directe déjà en FR natif — conservée verbatim.

## 5. FAQ
Slot FAQ : OUI — `src/components/shared/faq-accordion.tsx` + FAQPage JSON-LD. 7 items dans `fdeContent.faq.items` (verbatim live). Badge `Questions fréquentes` · titre `Les questions qu'on nous pose avant de démarrer`.

| # | Question (FR) | Réponse (FR) — verbatim live |
|---|---|---|
| 1 | Qu'est-ce qu'un Forward Deployed Engineer (FDE) ? | Un ingénieur IA déployé directement dans l'équipe du client : il comprend le problème réel, écrit du code de production, connecte l'IA aux systèmes existants et reste responsable jusqu'à ce que la solution tourne. Le modèle vient de Palantir, il est aujourd'hui adopté par OpenAI, Anthropic et Google. Chez AI Makers, c'est le cœur de l'offre : un FDE dédié full-time chez vous, encadré par notre CTO. |
| 2 | Pourquoi le modèle FDE explose-t-il en ce moment ? | Parce que 95 % des pilotes IA en entreprise ne produisent aucun retour mesurable (étude MIT, 2025) : les modèles sont puissants, mais les brancher sur un environnement réel est le vrai problème. Résultat : les offres d'emploi FDE ont été multipliées par 8 en un an, et les labs IA paient ce profil entre 385 K$ et 1 M$ par an. La plupart des entreprises ne peuvent pas recruter ce profil, mais elles peuvent en déployer un. `[to validate — stats externes]` |
| 3 | À qui appartient ce que l'ingénieur construit ? | À vous, intégralement. Code, playbooks, documentation : toute la propriété intellectuelle vous appartient, c'est écrit dans le contrat (Garantie Sortie). Le jour où on part, tout reste chez vous. Zéro dépendance, zéro otage. |
| 4 | Qui encadre l'ingénieur au quotidien ? | Walid, notre CTO. Chaque système livré passe en revue avec lui, chaque arbitrage technique remonte vers lui, et l'ingénieur s'appuie sur les playbooks des 200+ systèmes déjà déployés par le cabinet. Votre ingénieur est seul dans votre équipe, jamais seul face à un problème. |
| 5 | Que se passe-t-il à la fin de la mission ? | L'objectif n'est pas de rester : c'est de vous rendre autonomes. À 6 mois, les systèmes tournent, les playbooks sont écrits et vos référents sont formés pour les faire vivre. Chaque système part avec sa documentation, propriété client totale. |
| 6 | L'ingénieur travaille à distance ou sur site ? | Les deux. Nous intervenons en présentiel en France métropolitaine et au Maroc, depuis nos bureaux de Paris et Rabat, et à distance pour l'ensemble de la zone francophone. Le format se cale sur votre organisation lors du diagnostic. |
| 7 | En quoi est-ce différent d'un freelance IA ? | Un freelance vous vend des jours et repart avec son savoir. Nous vendons un résultat, avec 4 garanties écrites au contrat. Quand on part, vos référents restent, la documentation reste, et tout le code vous appartient. |

> NB : l'EN a 8 items (il découpe « engagement minimum » en item séparé) ; le live FR en rend **7** — l'item « Quel est l'engagement minimum ? » existe dans `fdeContent.faq` live mais l'ordre/contenu live prime. Item live #6 (« Quel est l'engagement minimum ? ») : `3 mois. L'accompagnement se poursuit ensuite au mois, avec un préavis de 30 jours. Les premières semaines servent à l'audit et à la roadmap chiffrée, puis les premiers systèmes partent en production dès le premier mois.` (Le tableau ci-dessus suit l'ordre live : la question « engagement » est bien présente dans la source, insérée entre #5 et #7 en 6e position ; « à distance ou sur site » et « différent d'un freelance » suivent.)

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Transformation IA | /ai-transformation | related — l'offre complète en 3 phases (Audit, Build, Scale) |
| L'équipe AI Makers | /equipe | related |
| Carrières | /carrieres | related — on recrute des ingénieurs IA |
| Voir notre capacité actuelle | /capacite | bloc capacité |
| Réserver mon diagnostic gratuit | /contact | CTA primaire |

## 7. CTA
- **Primaire :** « Réserver mon diagnostic gratuit » → /contact (hero, timeline, CTA final).

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `Un Forward Deployed Engineer (FDE) est un ingénieur IA déployé directement dans l'équipe du client : il écrit du code de production, connecte l'IA aux systèmes existants et reste responsable jusqu'à ce que ça tourne — un modèle inventé par Palantir, aujourd'hui adopté par OpenAI, Anthropic et Google. AI Makers déploie un FDE dédié full-time dans votre entreprise, encadré par son CTO et adossé à 200+ systèmes déjà en production, en tant que bras francophone d'AY Automate. Recruter le même profil senior en propre prend 6 à 12 mois ; les labs le paient 385 K$ à 1 M$ par an.`
- **Entrée llms.txt (FR) :** `[Forward Deployed Engineer](https://aimakers.fr/forward-deployed-engineer) : un ingénieur IA dédié déployé dans votre équipe. AI Makers est le bras francophone d'AY Automate (+20 ingénieurs IA déployés en entreprise), encadré par Walid Boulanouar (CTO, co-fondateur d'AY Automate) et Adel Dahani (co-fondateur & COO d'AY Automate, ex-AI Engineer chez IBM).`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| Partenariat AY Automate, +20 ingénieurs déployés, Walid Boulanouar (CTO), Adel Dahani (COO, ex-IBM) | public/llms.txt (canonique) |
| 200+ systèmes en production, 7h/sem récupérées par collaborateur | public/llms.txt (canonique) |
| 95 % des pilotes IA en entreprise échouent (MIT, 2025) | fde.ts — [to validate source] |
| +729 % d'offres FDE / ×8 en un an (Indeed) | fde.ts — [to validate] |
| 385 K$ à 1 M$ de rému FDE dans les labs | fde.ts — [to validate] |
| 6 à 12 mois pour recruter, 70 000 €+/an de salaire | fde.ts — [to validate] |
| 1 500+ automatisations prêtes à adapter | fde.ts — [to validate] |
| Coentreprise de déploiement OpenAI 4 Md$ (2026), équipe FDE 2024 | fde.ts — [to validate] |
| Badges partenaires/certifs (Clay, Google, Make, n8n, AWS, Azure, Anthropic, Microsoft) | cert-badges — [to validate chaque badge] |
| Rôles bios (canoniques) : Walid = CTO / co-fondateur AY Automate ; Adel = COO / ex-IBM | public/llms.txt + JSON-LD Person (LinkedIn `sameAs`) |
| Spécifiques bios au-delà du canon : Walid « 250+ produits », « gov Maroc/Arabie Saoudite » ; Adel « L'Oréal/GSK/Nestlé chez IBM », « Azure Data Scientist » | page.tsx — `[to validate]` (à confirmer sur LinkedIn/public ou trimmer ; gate A5) |

---

## Réconciliation appliquée (FR)

**Correctifs d'audit hérités de l'EN, appliqués en FR :**
1. **Title double-marque corrigé** — title live trop long relabellé en `Forward Deployed Engineer : ingénieur IA dédié` (bare 46, rendu 58). **Jamais** de suffixe « ​\| AI Makers » écrit à la main : le template `%s | AI Makers` du layout l'ajoute.
2. **Meta ré-écrite ≤160** — la meta live (~233 car.) est ramenée à 158 car., en gardant Palantir/OpenAI/Anthropic + « ingénieur IA dédié » + « prod dès semaine 1 ».
3. **Tous les stats externes `[to validate]` conservés et tagués** — MIT 95 %, Indeed +729 %/×8, 385 K$-1 M$, coentreprise OpenAI 4 Md$, 70 k€/6-12 mois, 1 500+ automatisations, et chaque badge partenaire/certif. Ce sont la colonne vertébrale de crédibilité de la page et sa seule exposition à la fabrication : laissés intacts avec leur tag, pour validation propriétaire avant publication (portails de sign-off, pas des éditions de contenu). Non affaiblis, non blanchis.

**Divergence FR vs EN assumée :**
- **Slug conservé `/forward-deployed-engineer`** — l'EN gardait aussi le slug exact-match (terme fort/faible KD en EN). En FR le volume est nul (≈10) mais le slug reste cohérent avec le terme de marque ; pas de renommage.
- **Bios fondateurs conservées verbatim en FR natif** — l'EN pliait la lignée dans l'intro équipe (§4.6) + origine (§4.11) et ne rendait pas le bloc bios complet. En FR, le bloc « Direction technique » (Walid Boulanouar / Adel Dahani, INPT/ENSIAS, IBM, L'Oréal/GSK/Nestlé) est une **voix originellement française** : on le conserve entier, jamais retraduit depuis l'EN. Les schémas JSON-LD Person (LinkedIn vérifié) l'accompagnent.
- **Cadre mots-clés FR** — pas de jeu de volume sur « forward deployed engineer » (≈10 FR vs 16 000 global) : on possède la définition (DefinedTerm + answer-first citable) et on blende « ingénieur IA » et « agence ia » (2 400). « ESN » gardé tel quel (natif FR, pas de glose « staffing firm » comme en EN).

**Laissé pour la technique (hors édition de contenu) :** hreflang, `inLanguage`, chrome i18n bespoke (FdeEmbed / RelatedContent), autorisation des badges — non traité ici.

---

## Reconciliation applied

Passe de réconciliation FR (audits SEO 87/100 + anti-slop Clean −11, **gate de vérification factuelle obligatoire**).

**Changé :**
1. **Normalisation des tags (rule 7) :** 20 occurrences `[à valider …]` → `[to validate …]` (texte explicatif FR conservé : `source externe`, `stats externes`, `chaque badge`, `accord client`, `source`). Grep-cohérence. **Aucun tag retiré** — tous les marqueurs d'honnêteté restent en place.
2. **Bios fondateurs — flag d'intégrité (§9, gate A5) :** ligne §9 scindée — rôles canoniques (CTO/COO ex-IBM, co-fondateurs AY Automate ; llms.txt + Person schema) vs **spécifiques au-delà du canon** (« 250+ produits », gov Maroc/Arabie Saoudite, roster IBM L'Oréal/GSK/Nestlé, Azure Data Scientist) désormais taguées `[to validate]` (à confirmer LinkedIn/public ou trimmer). La **prose des bios §4.6 (voix FR native) n'est PAS touchée** (PROTECT).

**Délibérément gardé (PROTECT) — le cœur de cette page :**
- **Tous les stats externes tagués** — MIT 95 %, Indeed +729 %/×8, 385 K$–1 M$, coentreprise OpenAI 4 Md$, 70 k€/6-12 mois, 1 500+ automatisations, et chaque badge partenaire/certif. Colonne vertébrale de crédibilité + seule exposition à la fabrication. **Non affaiblis, non blanchis** — laissés intacts avec leur `[to validate]` pour sign-off propriétaire avant publication.
- **Bios §4.6 verbatim (voix FR native, jamais retraduite)** — bloc « Direction technique » Walid/Adel conservé entier ; JSON-LD Person LinkedIn les accompagne.
- **Title (rule 1) déjà correct** (`Forward Deployed Engineer : ingénieur IA dédié`, rendu 58) ; **meta déjà ≤160** (158) ; **mots-clés FR déjà exacts** (fde 10 FR/16 000 global, agence ia 2 400, agent ia 7 700) — rien changé.
- **Refrain dogfooding §4.5** (« On les construit pour nous d'abord ») + tableau comparatif propriétaire FDE/freelance/ESN + négations signature (« Il n'arrive pas seul. Il arrive avec nos systèmes. ») — load-bearing, non touchés. Garanties/témoignages mono-sourcés.

**Pour la technique / owner (GATE avant publication) :** sourcer/lier chaque stat externe (MIT/Indeed/rému/JV OpenAI) ou garder `[to validate]` visible ; confirmer chaque badge (dont « Partenaire Anthropic »/« Claude certified architect » — A6 site-wide) ; confirmer ou trimmer les spécifiques bios au-delà du canon. **Aucun de ces points ne ship tant que non signé.**

---

## Mise à jour du 4 août 2026 — extension de contenu et passe anti-slop

Source : `fdepagecontentplan-2026-08-04.md`. Le master ci-dessus décrit la page telle
qu'elle était avant cette passe ; ce qui suit décrit ce qui a changé dans le code.

### Nouvelles sections

| Ordre | Section | Clé de contenu | Ancre |
|---|---|---|---|
| après « Le modèle » | §A La fiche de poste que vous n'aurez pas à écrire | `fdeContent.jobSpec` | `#fiche-de-poste` |
| après « Recruter ou déployer » | §B Ce qu'un ingénieur du dehors fait mieux les six premiers mois | `fdeContent.insideOutside` | `#externe-ou-interne` |
| après « Le déroulé » | §C Vos ingénieurs peuvent apprendre ce métier | `fdeContent.training` | `#former-vos-equipes` |

**§A** répond à « à quoi ressemble cette personne » avec le vocabulaire d'une annonce :
six blocs de quotidien, un tableau de profil, les grilles de salaire françaises, et un
tableau de démarcation avec les rôles voisins. La liste d'outils du plan a été retirée
du deuxième bloc : la section « La stack » la détaille déjà six sections plus bas.

**§B** répond frontalement à l'objection « pourquoi ne pas recruter ». Elle **absorbe
l'ancienne section « L'angle malin »** (`fdeContent.validate`), qui tenait le même
raisonnement à quatre écrans d'intervalle : le contenu est conservé intégralement et
rendu comme encadré de clôture de §B. La section autonome disparaît de l'ordre des
sections ; la clé `validate` reste dans le fichier.

**§C** — décision produit du 4 août 2026 : **ce n'est pas une offre séparée**. Le plan
proposait un parcours packagé de 12 semaines ; il a été écarté. La section explique en
quoi consiste le métier (les quatre compétences de terrain), comment les 2 heures
hebdomadaires déjà comprises dans la mission les transmettent, et renvoie au catalogue
`/formation-ia-entreprise` existant. Aucune fiche formation nouvelle n'a été créée dans
`src/lib/formations.ts`.

### Section « Ce que ça coûte » — écartée (décision du 4 août 2026)

Le plan prévoyait une section de prix après « Le mécanisme ». **Décision : elle n'est pas
livrée.** Afficher une fourchette floue en gros caractères vaut moins que pas de section
du tout, et les questions de prix continuent d'être routées vers le diagnostic gratuit
par la FAQ, comme aujourd'hui.

Conséquence assumée : la page dit toujours « une fraction du poste » (FAQ 8) sans
dénominateur chiffré, en face des 95 000 à 145 000 € chargés qu'elle affiche
précisément en §A. L'argument de coût repose donc entièrement sur la grille de salaires
et sur les ancres du bloc « Le problème ». Le schema `Offer` / `priceRange` est écarté
avec la section, faute de prix à y mettre.

### Passe anti-slop

- **Négations-contraste « X, pas Y » : 18 → 1.** La seule conservée est le H2 de la
  section « En un coup d'œil », en dur dans `page.tsx` : « Il ne débarque pas de
  l'extérieur. Il se branche dedans. » Quatre des dix-huit étaient dupliquées entre le
  corps et une réponse de FAQ, et ont été corrigées aux deux endroits.
- **« · » en milieu de phrase : 7 → 0.** Une dans `page.tsx` (badge partenariat) et six
  dans `src/components/sections/services/hire-or-deploy.tsx` (les jalons des deux
  chronologies animées), que le plan n'avait pas vues parce qu'elles ne sont pas dans le
  fichier de contenu. Remplacées par une virgule, qui tient dans la même largeur.
- **Tics retirés :** « La raison est brutale », un « Exactement » sur trois.
- Le refrain dogfooding et les bios fondateurs restent intacts (PROTECT).

### Autres changements

- **FAQ 10 → 22.** Douze entrées, groupées derrière la section qu'elles servent. Toutes
  passent dans le `FAQPage` (le schema mappe déjà `fdeContent.faq.items`).
- **Comparatif : colonne « Recruter en CDI » ajoutée.** L'alternative que toute la page
  discute manquait au tableau. Table desktop passée à `min-w-[880px]`, cartes mobiles
  inchangées dans leur principe.
- **JSON-LD `Occupation`** ajouté, avec `estimatedSalary` (`MonetaryAmountDistribution`,
  EUR, `P1Y`) et `occupationLocation: France`. C'est le balisage repris par les moteurs
  de réponse sur les questions de métier et de salaire.
- **`AggregateRating` écarté.** Le 9,6/10 existe dans `site-config.ts` mais sans nombre
  d'avis associé. Un `AggregateRating` sans `reviewCount` vérifiable est une allégation
  non sourçable, et le sujet est déjà signalé par l'audit SEO.
- **Liens sortants d'autorité : non ajoutés.** Le plan en demandait six (MIT, Indeed,
  Palantir, OpenAI, Anthropic, roadmap.sh). Les URL n'ont pas pu être vérifiées depuis
  l'environnement de build, et poser des liens devinés sur les statistiques qui portent
  la crédibilité de la page serait pire que de ne pas en poser. **Ouvert**, et cohérent
  avec le gate de vérification factuelle déjà consigné plus haut.

### Corrections apportées au plan de contenu

Le plan référençait quatre routes inexistantes. Vérifié contre l'arbre `src/app` :

| Lien du plan | État réel | Résolution |
|---|---|---|
| `/metiers/ingenieur-ia` | n'existait pas | **créée** (voir ci-dessous) |
| `/formation-ia-entreprise/former-vos-ingenieurs-fde` | n'existe pas | abandonnée avec le parcours packagé |
| `/gouvernance-securite` | n'existe pas | remplacé par `/gouvernance-ia` |
| `/en/forward-deployed-engineer` | n'existe pas | **bug live** : `i18n.ts` la déclare en hreflang, l'arbre `(en)` ne contient que `/en/capacity` et `/en/security`. Non traité dans ce lot |

### Page enfant créée : `/metiers/ingenieur-ia`

Fiche métier d'intention candidat, qui sort les requêtes candidat de la page argent.
Cible (Ahrefs France, 4 août 2026) : `ingénieur ia` 450/mois KD 31,
`ingénieur intelligence artificielle` 200/mois KD 29, `salaire ingénieur ia` 150/mois.
Contenu dans `src/lib/offer-pages/ingenieur-ia.ts`. Schemas `BreadcrumbList`,
`Occupation` (avec les grilles) et `FAQPage`. Les grilles de salaire y sont identiques à
celles de §A : un seul jeu de chiffres sur le site, deux endroits où il s'affiche.
Ajoutée au sitemap ; **volontairement absente de `ROUTE_MAP`**, pour ne pas créer un
second hreflang vers une page anglaise inexistante.

### Maillage interne ajouté

Sortants depuis la page FDE : `/metiers/ingenieur-ia` et `/carrieres` (§A, grilles),
`/formation-ia-entreprise` (§B refus n°3 et §C), `#former-vos-equipes` (§B),
`/formation-ia-entreprise/maitriser-claude` (§C), plus `/gouvernance-ia` et
`/metiers/ingenieur-ia` dans « Pour aller plus loin ».

Entrants créés, aucun n'existait : `/capacite` (« ingénieur IA référent » en corps),
`/equipe` (« les ingénieurs que nous déployons »), `/carrieres` (le nom du poste, plus la
fiche métier), `/glossaire-ia` (les deux pages dédiées), `/agence-ia` et
`/secteurs/[slug]` (les sept pages, via `RelatedContent`).

### Reste une négation-contraste, hors périmètre de ce lot

`homepageContent.finalCta.urgency` (« Notre capacité est physiquement limitée, pas
artificiellement », `site-config.ts` l.1714) s'affiche sur la page FDE via le bloc
« Capacité réelle », mais aussi sur `/ai-transformation`, `/offre`, `/playbook-ia`,
`/ai-operating-system` et la home. La réécrire depuis ce chantier modifierait six
surfaces sans rapport. **Ouvert**, à traiter dans une passe de copie site-wide.
