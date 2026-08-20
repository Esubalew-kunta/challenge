# Transformation IA (/ai-transformation) — Master de contenu FR

> ⚠️ **IBM RETIRÉ DU SITE (2026-07-30, décision Maneesh).** Toute mention d'IBM ci-dessous — logo client, liste de références, biographie « ex-IBM » — ne doit PAS être reportée dans le code. Le logo `logo IBM -nobg.png` a été supprimé du dépôt.

> Localisation FR du master EN scellé (`[EN] website-content/ai-transformation/ai-transformation.md`). Le contenu FR reprend **verbatim la copie live** (`src/lib/offer-pages/transformation.ts` + `src/app/ai-transformation/page.tsx`), qui est la voix authentique de la marque (l'EN en a été traduit). On applique les **mêmes correctifs d'audit que l'EN** (voir §Réconciliation), on relocalise les champs SEO sur les vrais mots-clés FR (Ahrefs France, 2026-07), et on référence — sans re-traduire — la copie propriétaire réutilisée (règles = `offer.model` possédé par /offre ; garanties et témoignages possédés par la home).

## 1. En-tête de page
- **Route (FR, live) :** /ai-transformation
- **Slug FR :** /ai-transformation
- **Objectif :** Page programme phare (l'offre complète Audit/Build/Scale). Page de vente long-format narrative qui vise la famille de recherche « transformation IA ».
- **Rôle SEO :** pilier (FR : transformation ia / programme de transformation IA)
- **Étape funnel :** MOFU/BOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume (FR) | Difficulté | Source |
|---|---|---|---|---|
| Primaire | transformation ia | 100 | — | Ahrefs keywords-explorer-overview, France, 2026-07 |
| Secondaire | agence ia | 2 400 | 54 | Ahrefs, France, 2026-07 |
| Secondaire | transformation digitale ia | 70 | — | Ahrefs, France, 2026-07 |
| Secondaire | automatisation ia | 900 | 24 | Ahrefs, France, 2026-07 |
| Secondaire | accompagnement ia | faible | — | Ahrefs, France, 2026-07 |

> **Décision mots-clés :** le head term FR **« transformation ia » (100/mo)** est de faible volume — c'est le nom même de la page et de l'offre, intention informationnelle-commerciale, mais le marché FR le sur-cherche peu. On **blende** donc avec **« agence ia » (2 400/KD54)** — le vrai volume commercial du secteur — et avec la longue traîne **« programme de transformation IA »** (que cette page *est* littéralement). Le H1 et le title mènent avec « Transformation IA » pour l'exact match, et « programme »/« agence » sont travaillés dans la meta et le corps. **« automatisation ia » (900/KD24)** et **« accompagnement ia »** alimentent les sections phases/horizons. NB : contrairement à l'EN (US 1 600, orienté « consulting/services »), le volume FR direct est mince — la page joue le blend agence + longue traîne plutôt qu'un head term unique.

## 3. Meta de page
| Champ | Actuel (FR, live) | Proposé (FR) |
|---|---|---|
| Title | Transformation IA : audit, systèmes en production, équipes formées *(65 car. — trop long)* | **`Transformation IA : le programme complet`** *(bare 40 ; rendu « … \| AI Makers » = 52 ; le template `%s \| AI Makers` du layout ajoute la marque — le title bare ne la contient pas)* |
| Meta description (≤160) | (de transformation.ts — >160, à trimmer) | **`Programme de transformation IA en 3 phases : audit chiffré en 2 semaines, 1 à 2 systèmes IA en production par mois, équipes autonomes à 6 mois. 4 garanties.`** *(156)* |
| H1 | La transformation IA n'attendra pas votre prochain plan stratégique. | **`La transformation IA n'attendra pas votre prochain plan stratégique.`** *(H1 live conservé — `transformationHero.title`)* |
| URL slug | /ai-transformation | /ai-transformation |

> Note SEO : le title live (65 car.) dépasse la limite ≤48 bare / ≤60 rendu. On le trimme en front-loadant l'exact match « Transformation IA » + la longue traîne « programme ». Meta live trimmée de ~235 à 156 car. (le FR gonfle ; on coupe « écrites au contrat » et l'accroche « Le coût de l'intelligence s'effondre »).

JSON-LD sur la page : BreadcrumbList + Service + FAQPage (construits dans `page.tsx`).

## 4. Sections & contenu
Source de copie : `src/lib/offer-pages/transformation.ts` (TOUTES les sections propres) + `site-config.ts` (garanties, témoignages, logos, `offer.model`). Page : `src/app/ai-transformation/page.tsx`. Copie FR = **verbatim live**, sauf les correctifs d'audit signalés.

### 4.1 — Hero
- **Composant :** `page.tsx` + `transformation.ts:transformationHero`
- **Champs :** badge (rareté), title, subtitle, manifesteLink, cta, statsLine
- **Proposé (FR) — verbatim live :**
  - **badge :** `Maximum 3 nouveaux clients par mois`
  - **title (H1) :** `La transformation IA n'attendra pas votre prochain plan stratégique.`
  - **subtitle (answer-first) :** `La transformation IA consiste à redessiner les process d'une entreprise autour de l'intelligence artificielle : audit des workflows, systèmes en production, équipes formées. Les entreprises qui s'y mettent prennent une avance qui se compose chaque mois. Les autres accumulent un retard qui se compose aussi.`
  - **manifesteLink :** `{ label: "Lire pourquoi maintenant", href: "/pourquoi-maintenant" }`
  - **cta :** `{ label: "Réserver mon diagnostic gratuit", href: "/contact" }`
  - **statsLine :** `+200 systèmes déployés · +2 500 professionnels trained · 7h/semaine récupérées en moyenne par collaborateur`
- **Rationale :** la première phrase est une définition auto-portée de « transformation IA » (audit → production → formation) — la réponse exacte et citable pour le head term. La ligne avance/retard qui « se compose » est une assertion avec un verdict, pas du remplissage. Stats verbatim `llms.txt`.

> Correction typo de recopie : `statsLine` = `+200 systèmes déployés · +2 500 professionnels formés · 7h/semaine récupérées en moyenne par collaborateur` (verbatim live).

### 4.2 — Rangée de preuve (logos + stat)
- **Composant :** `page.tsx` + `proofBar`/`featuredLogoNames` + `shared/logo-carousel.tsx`
- **Champs :** kicker, logos clients mis en avant, stat +70% Sage, lien études de cas
- **Proposé (FR) — verbatim live :**
  - **kicker :** `Ils travaillent avec nous`
  - **logos :** inchangés (Schneider Electric, IBM, Sage, Amgen, Délifrance, AS Monaco, Emirates NBD, Groupe Partouche) `[to validate pour usage]`
  - **stat :** value `+70%` · label `de visibilité sur ChatGPT et Gemini pour Sage` · detail `Absent des réponses des moteurs IA au départ. Première référence citée dans sa verticale à l'arrivée.` · link `{ label: "Voir toutes les études de cas", href: "/etudes-de-cas" }`
- **Rationale :** le +70% GEO Sage est une preuve réelle mesurée client et la stat unique la plus forte. Liste de logos conservée live mais taguée `[to validate pour usage]`.

### 4.3 — Problème (3 raisons)
- **Composant :** `transformation.ts:transformationProblem`
- **Champs :** badge, title, intro, pains[3]{number,title,description,figure,figureLabel}
- **Proposé (FR) — verbatim live, avec 2 correctifs d'audit :**
  - **badge :** `Le problème`
  - **title :** `Trois raisons pour lesquelles rien n'a encore changé chez vous`
  - **intro :** `Vous avez essayé les outils, peut-être formé quelques personnes. Vos process, eux, n'ont pas bougé. Ce n'est pas un problème de technologie. C'est un problème de système.`
  - **pains[0] :** title `Vos équipes ont testé ChatGPT. Rien n'est passé en production.` · description `Des usages individuels, aucun système. Chacun bricole dans son coin, rien n'est documenté, rien ne tient dans le temps. Un outil ne change rien : ce qui change tout, c'est un système configuré pour votre façon de travailler.` · figure `60-80% [to validate]` · figureLabel `du travail répétitif (reporting, saisie, relances, synthèses) est absorbable par l'IA. Chez vous, il est encore fait à la main.`
  - **pains[1] :** title `Vous avez formé quelques personnes. Trois semaines après, tout est oublié.` · description `Une formation théorique sur des slides génériques ne survit pas au retour au poste de travail. Ce qui tient dans le temps : de la pratique régulière sur vos cas réels, avec des systèmes déjà en production à utiliser.` · figure `2h/semaine` · figureLabel `de pratique sur vos cas réels : le format qui rend les équipes autonomes.` *(correctif d'audit : négation empilée aplatie — était « …autonomes, pas le séminaire d'une journée »)*
  - **pains[2] :** title `Personne chez vous n'a le temps de structurer le sujet.` · description `Vos meilleurs éléments sont pris par l'opérationnel. Recruter un profil IA senior est long, cher et incertain. Pendant ce temps, le sujet reste au stade du « on devrait s'y mettre ».` · figure `6 à 12 mois` · figureLabel `pour recruter un expert IA senior, à 70 000 €+/an de fixe, sans garantie de résultat.`
- **Rationale :** chaque douleur a un chiffre réel et un verdict. « Ce n'est pas un problème de technologie. C'est un problème de système. » est la thèse citable de la page (négation-contraste conservée). **Correctif d'audit :** 60-80% (non canonique, absent de `llms.txt`) tagué `[to validate]`, comme home et EN. **FR ≠ EN :** on **garde le chiffre natif `70 000 €+/an`** (l'EN l'avait converti en « $80k+/yr [to validate] » pour le marché US — sans objet en FR).

### 4.4 — Mécanisme (dogfooding)
- **Composant :** `transformation.ts:transformationMechanism`
- **Champs :** badge, title, paragraphs[], stat{value,label}, systemsCaption
- **Proposé (FR) — verbatim live, avec 1 correctif d'audit :**
  - **badge :** `Notre mécanisme`
  - **title :** `On s'applique à nous-mêmes ce qu'on vend.`
  - **paragraphs[0] :** `AI Makers tourne sur ses propres systèmes. Le brief de décision du matin, l'analyse de chaque appel commercial, la préparation de chaque rendez-vous, le suivi de santé de chaque mission client : tout est produit par les agents que nous construisons.`
  - **paragraphs[1] :** `Résultat : une équipe de 6 personnes qui produit comme une équipe de 40. C'est ce mécanisme, éprouvé chez nous tous les jours, que nous installons chez vous : notre propre façon de travailler, testée d'abord sur nos propres opérations.` *(correctif d'audit : négation empilée aplatie — était « Pas une méthode lue dans un livre blanc : notre propre façon de travailler »)*
  - **stat :** value `6 personnes` · label `la production d'une équipe de 40, grâce à nos propres systèmes` `[to validate]`
  - **systemsCaption :** `Quatre des systèmes qui font tourner AI Makers en interne, tous les jours :`
- **Rationale :** preuve de première main, pas une affirmation. « On s'applique à nous-mêmes ce qu'on vend » répond à l'objection #3 de la home. Le chiffre 6 personnes = équipe de 40 est tagué `[to validate]` (absent de `llms.txt`).

### 4.5 — Horizons (trajectoire)
- **Composant :** `transformation.ts:transformationHorizons`
- **Champs :** badge, title, intro, buildLabel, items[3]{period,title,description,build,phaseLabel}, note
- **Proposé (FR) — verbatim live, avec 1 correctif d'audit :**
  - **badge :** `La trajectoire`
  - **title :** `Où va l'IA. Et où on vous emmène.`
  - **intro :** `Notre métier : construire chez vous, aujourd'hui, ce qui vous met en position pour la suite.` *(correctif d'audit : cliché « Notre métier n'est pas de suivre la vague » supprimé — négation aplatie + cliché de rang A éliminé)*
  - **buildLabel :** `Ce qu'on construit avec vous aujourd'hui pour y être`
  - **items[0] :** period `Aujourd'hui` · title `Des workflows augmentés` · description `L'IA lit, trie, rédige, rapproche. Les tâches répétitives sortent du quotidien de vos équipes, process par process. C'est le niveau de maturité le plus rentable aujourd'hui, et le plus rapide à mettre en production.` · build `L'audit chiffre vos cas d'usage par ROI, puis les premiers systèmes passent en production dans vos workflows. C'est exactement le périmètre des phases AUDIT et BUILD.` · phaseLabel `Phases 1 et 2`
  - **items[1] :** period `Dans 12 mois` · title `Des agents qui agissent` · description `Des agents qui enchaînent les étapes eux-mêmes : ils consultent vos outils, prennent des actions, rendent compte. Les standards émergent, comme MCP (Model Context Protocol, le standard ouvert lancé par Anthropic et adopté par OpenAI et Google), qui branche les modèles directement sur vos systèmes.` · build `Vos playbooks documentés et les données produites par vos premiers systèmes sont le carburant de ces agents. On les structure dès maintenant, pendant les phases BUILD et SCALE.` · phaseLabel `Phases 2 et 3`
  - **items[2] :** period `Dans 24 mois` · title `Des équipes hybrides` · description `Des équipes où chaque collaborateur orchestre plusieurs agents sur son périmètre. Les entreprises qui auront structuré leurs process et formé leurs équipes d'ici là auront une avance difficile à rattraper. Personne ne connaît le calendrier exact. La direction, elle, ne fait plus débat.` · build `Le programme AI Champions rend vos équipes capables de faire tourner, corriger et étendre les systèmes sans nous. C'est la phase SCALE, et ce qui vient après.` · phaseLabel `Phase 3 et au-delà`
  - **note :** `AI Makers est Partenaire Anthropic` `[to validate]` `, l'éditeur de Claude à l'origine du standard MCP. Ces horizons ne sont pas des promesses datées : ce que vous structurez aujourd'hui reste valable quel que soit le rythme réel.` *(fix : « Partenaire Anthropic » tagué `[to validate]` — cohérence avec la home ; gate d'autorisation A6, à confirmer ou reformuler « nous construisons sur Claude/MCP »)*
- **Rationale :** le détail MCP est factuel et actuel (standard Anthropic adopté par OpenAI/Google) — établit la crédibilité technique pour l'ICP. Se termine sur un verdict (« La direction ne fait plus débat ») plutôt qu'une réserve.

### 4.6 — Phases (la méthode)
- **Composant :** `src/components/sections/services/phase-flow.tsx` (`PhaseFlow`) + `transformationPhases`
- **Champs :** badge, title, subtitle, items[3]{number,brand,duration,summary,actions[5],gain,illustration}
- **Proposé (FR) — verbatim live :**
  - **badge :** `Le déroulé`
  - **title :** `Votre département IA externalisé. Trois phases. Zéro risque.`
  - **subtitle :** `De la feuille de route chiffrée à l'autonomie de vos équipes : chaque phase a une durée, des livrables concrets et un gain mesurable.`
  - **items[0] :** number `Phase 1 : AUDIT` · brand `AI Scan` · duration `1 à 2 semaines` · summary `Cartographie de vos workflows, interviews de vos équipes, scoring de maturité sur notre grille en 24 points. On définit ensemble votre feuille de route IA, avec le ROI attendu par cas d'usage.` · actions `["Cartographie complète des process existants","Interviews des décideurs et des opérationnels","Scoring de maturité IA sur 6 axes (grille propriétaire)","Roadmap chiffrée 3, 6 et 12 mois avec ROI estimé","Minimum 3 cas d'usage prêts à construire"]` · gain `Vous savez où l'IA rapporte chez vous : au moins 3 cas d'usage chiffrés et une roadmap priorisée par ROI. Sinon, l'audit est remboursé.`
  - **items[1] :** number `Phase 2 : BUILD` · brand `AI Engine` · duration `3 à 6 mois` · summary `Un ingénieur IA dédié à temps plein construit vos systèmes, directement dans vos workflows. Chaque système a un KPI mesuré avant et après.` · actions `["1 ingénieur IA dédié à temps plein, intégré à votre équipe","1 à 2 systèmes IA livrés en production par mois","2h de formation par semaine, sur vos cas réels","Playbooks documentés, propriété client totale","Support jour même + accès à +1 500 automatisations"]` · gain `Vos premiers systèmes tournent en production dès le premier mois, avec un impact mesuré. Sinon, on continue gratuitement jusqu'à ce que ça tourne.`
  - **items[2] :** number `Phase 3 : SCALE` · brand `AI Champions` · duration `En continu, dès le mois 3` · summary `Le passage à l'échelle : vos équipes prennent la main. Optimisation continue des systèmes, nouveaux cas d'usage, revue stratégique trimestrielle au niveau COMEX.` · actions `["Programme AI Champions : vos équipes deviennent autonomes","Optimisation continue des systèmes en production","Identification de nouveaux cas d'usage en continu","Veille IA intégrée directement dans vos systèmes","Revue stratégique trimestrielle au niveau COMEX"]` · gain `Des équipes capables de faire tourner et d'améliorer les systèmes sans nous. Et chaque trimestre, de nouveaux cas d'usage à fort ROI, priorisés.`
- **Rationale :** c'est la méthode LONG-FORMAT (cette page + /ai-partner la possèdent) ; la version home en 6 étapes et les versions courtes sœurs la référencent. Noms de phase (AI Scan/Engine/Champions) conservés (termes de marque). « +1 500 automatisations » depuis site-config.

### 4.7 — Le modèle (4 cartes) — rend le `offer.model` partagé
- **Composant :** `page.tsx` (~L527) rend `transformationRules.badge/title` comme en-tête, puis **`site-config.ts:homepageContent.offer.model[4]`** pour les 4 cartes + `offer.subtitle` en sous-titre.
- **RÉCONCILIÉ (hérité EN) :** la page live rend le **`offer.model` partagé** ici — le *même* bloc que /offre — pas des règles bespoke. Les quatre cartes sont **mono-sourcées depuis /offre** (traduites là-bas), **référencées et non re-traduites**. Cette page ne possède que l'en-tête de section.
  - **badge :** `Le modèle`
  - **title :** `Quatre règles. Sans exception.` *(depuis `transformationRules` ; les 4 cartes en dessous = `offer.model`, propriété /offre — ne pas re-traduire)*
- **Rationale :** mono-sourcer la traduction du `offer.model` partagé (propriétaire = /offre) pour que les deux pages restent cohérentes. Supprime les 4 textes de « règles » inventés/`[to validate]` du brouillon EN d'origine (et la négation « pas sur un slide » qu'ils portaient — le bloc garanties possède déjà ce tagline).

### 4.8 — Cas client (Sage)
- **Composant :** `page.tsx` + `transformationCaseStudy` + `proof.cases` (Sage, depuis site-config)
- **Champs :** badge, title, subtitle, contenu du cas (Avant/Après/Comment, verbatim site-config)
- **Proposé (FR) — verbatim live :**
  - **badge :** `Preuve`
  - **title :** `Ce que ça donne chez un client`
  - **subtitle :** `Un exemple documenté, avec l'avant, l'après et la méthode. Pas une promesse : un résultat mesuré.`
- **Rationale :** cadre le cas mis en avant (tiré de proof.cases) comme une preuve, pas un témoignage. « Pas une promesse : un résultat mesuré. » est la ligne anti-hype récurrente (négation-contraste conservée). Chiffre Sage +70% `[to validate — cas non publié]`.

### 4.9 — Témoignages
- **Composant :** `shared/testimonial-card.tsx` + `transformationTestimonials`/`featuredTestimonialAuthors`
- **Champs :** badge, title, citations filtrées (Hervé Landau, Mickaël Mina, Mariem Lahlou)
- **Proposé (FR) — verbatim live :**
  - **badge :** `Ils en parlent mieux que nous`
  - **title :** `Ce que disent les dirigeants qu'on accompagne`
  - **citations :** filtrées depuis le jeu de témoignages de la home (Hervé Landau, Mickaël Mina, Mariem Lahlou) — copie FR d'origine possédée par la home §4.7, `[to validate : accord client]`.
- **Rationale :** réutilise les témoignages de la home (mono-source, déjà en français d'origine) ; cette page ne possède que badge/title. Aucune retraduction.

### 4.10 — Garanties
- **Composant :** `sections/homepage/guarantees.tsx` · `homepageContent.guarantees`
- **Champs :** 4 cartes garantie + crédibilité
- **Proposé (FR) :** RÉUTILISER — le bloc garanties est POSSÉDÉ par la home (voir homepage.md « COPIE PROPRIÉTAIRE »). Cette page rend le même `homepageContent.guarantees`. Ne pas forker.
- **Rationale :** bloc partagé, mono-source. Propriétaire = home.

### 4.11 — FAQ
- **Composant :** `shared/faq-accordion.tsx` + `transformationFaq` — voir §5.

### 4.12 — Liens connexes + CTA final
- **Composant :** `shared/related-content.tsx` + `shared/cta-section.tsx` + `transformationFinalCta` (+ `finalCta.urgency` de la home)
- **Champs :** 3 liens connexes, cta{title,subtitle,cta}, urgency
- **Proposé (FR) — verbatim live :**
  - **related[3] :** `Forward Deployed Engineer` → /forward-deployed-engineer · `AI Operating System` → /ai-operating-system · `Études de cas` → /etudes-de-cas
  - **finalCta title :** `Chaque mois d'attente est un mois de données que vous n'accumulez pas.`
  - **finalCta subtitle :** `30 minutes pour analyser vos workflows et repartir avec vos 3 premiers quick wins IA, que vous travailliez avec nous ou non.`
  - **finalCta cta :** `{ label: "Réserver mon diagnostic gratuit", href: "/contact" }`
  - **urgency :** `Maximum 3 nouveaux clients par mois. Chaque client a un ingénieur IA dédié, onboardé 2 semaines avant le kick-off. Notre capacité est physiquement limitée, pas artificiellement.` *(depuis `homepageContent.finalCta.urgency`)*
- **Rationale :** la clôture « un mois de données que vous n'accumulez pas » est un vrai argument de coût du retard (cohérent avec la thèse de l'avance qui se compose), pas un rassurant de fin.

## 5. FAQ
Slot FAQ : OUI — `faq-accordion.tsx` + FAQPage JSON-LD. 5 items (verbatim live) :

| # | Question (FR) | Réponse (FR) |
|---|---|---|
| 1 | Combien de temps dure le programme ? | L'audit dure 1 à 2 semaines. Ensuite, un ingénieur dédié construit 1 à 2 systèmes par mois dans vos workflows, avec 2 heures de formation par semaine pour vos équipes. L'objectif est fixé dès le départ : vos équipes autonomes à 6 mois. *(Possédé ici — la Q home « durée d'un accompagnement typique » pointe ici.)* |
| 2 | Quelle est la durée d'engagement ? | L'engagement initial est de 3 ou 6 mois selon le périmètre. Ensuite, l'accompagnement se poursuit au mois, avec un préavis de 30 jours. La durée médiane d'un accompagnement complet est de 6 à 9 mois pour atteindre l'autonomie totale des équipes. |
| 3 | Qui construit les systèmes ? | Un ingénieur IA dédié à temps plein, intégré à votre équipe. Il est onboardé sur votre secteur 2 semaines avant le lancement : il comprend votre métier avant de construire quoi que ce soit. Chaque système livré a un KPI mesuré avant et après. *(Possédé ici.)* |
| 4 | Que se passe-t-il si les résultats ne sont pas là ? | Quatre garanties, écrites au contrat : pas de roadmap claire avec 3 cas d'usage à fort ROI à l'issue de l'audit = remboursé ; pas d'impact concret dans les 30 premiers jours = prolongation gratuite ; un AI Champion formé sans impact mesurable = 30 jours offerts ; et la propriété intellectuelle totale de tout ce qui est construit. |
| 5 | À qui appartient ce qui est construit ? | À vous, intégralement. Les systèmes, les playbooks documentés, les formations : tout reste chez vous. Le jour où l'accompagnement s'arrête, rien ne s'arrête avec lui. Zéro dépendance : c'est la quatrième garantie du contrat. *(Possédé ici — la Q « propriété » de l'AI-OS est scopée à cette page-là.)* |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Lire pourquoi maintenant | /pourquoi-maintenant | hero secondaire |
| Voir toutes les études de cas | /etudes-de-cas | rangée preuve + connexes |
| Forward Deployed Engineer | /forward-deployed-engineer | connexes |
| AI Operating System | /ai-operating-system | connexes |
| Voir l'offre AI PARTNER complète | /ai-partner | méthode → offre *(la carte modèle rend `offer.model` de /offre)* |
| Réserver mon diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA primaire :** `Réserver mon diagnostic gratuit` → /contact (hero, CTA intermédiaire des phases, final).

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `La transformation IA consiste à redessiner les process d'une entreprise autour de l'IA : auditer les workflows, mettre des systèmes en production, former les équipes à les faire tourner. AI Makers la livre comme un programme en 3 phases (Audit, Build, Scale) : un audit chiffré en 1 à 2 semaines, un ingénieur IA dédié qui livre 1 à 2 systèmes par mois, et des équipes autonomes à 6 mois — sous 4 garanties écrites au contrat. À ce jour : +200 systèmes chez +50 entreprises.`
- **Entrée llms.txt (FR) :** `[Transformation IA](https://aimakers.fr/ai-transformation) : le programme complet Audit → Build → Scale. Audit chiffré en 2 semaines, 1 à 2 systèmes IA en production par mois, équipes autonomes à 6 mois, quatre garanties écrites.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| +70% visibilité IA, ChatGPT/Gemini (Sage) | transformation.ts / proof.cases — mesuré client, `[to validate — cas non publié]` |
| 6 personnes = production d'une équipe de 40 | transformation.ts — [to validate] |
| 60-80% du travail répétitif absorbable par l'IA | transformation.ts / site-config — non canonique, désormais `[to validate]` (cohérent avec home ; automatisation le supprime) |
| 70 000 €+/an de fixe pour un expert IA senior ; 6 à 12 mois pour recruter | transformation.ts (chiffre natif FR conservé — non converti) |
| +1 500 automatisations ; 2h formation/semaine ; autonomie à 6 mois ; plafond 3 clients/mois | site-config / transformation.ts |
| MCP = standard ouvert d'Anthropic, adopté par OpenAI + Google | public (MCP) |
| Partenaire Anthropic | site-config — `[to validate]` (gate d'autorisation A6, site-wide) |
| +50 entreprises / +200 systèmes / +2 500 formés / 7h/semaine | public/llms.txt (canonique) |
| 4 garanties écrites, propriété intellectuelle totale | public/llms.txt (canonique) |

---

## Réconciliation appliquée (FR)

**Correctifs d'audit hérités de l'EN, appliqués en FR :**
1. **Title raccourci** — le title live (65 car.) dépasse ≤48 bare / ≤60 rendu ; trimmé en `Transformation IA : le programme complet` (bare 40 / rendu 52). Le layout ajoute « | AI Makers » via le template `%s | AI Makers` — le title bare ne contient donc PAS la marque (pas de double-marque). Meta live (>230) trimmée à 156.
2. **60-80% tagué `[to validate]`** (§4.3 pains[0] + Faits) — même claim non canonique, cohérent site-wide (home tague, automatisation supprime).
3. **Négations empilées « X, pas Y » aplaties de ~7 à 2** — **conservées** : la thèse « Ce n'est pas un problème de technologie. C'est un problème de système. » (§4.3) et « Pas une promesse : un résultat mesuré. » (§4.8). **Aplaties** : §4.3 pains[1] figureLabel « …autonomes, pas le séminaire d'une journée » → positif ; §4.4 « Pas une méthode lue dans un livre blanc » → « …testée d'abord sur nos propres opérations » ; §4.5 intro « Notre métier n'est pas de suivre la vague » supprimé (aussi cliché de rang A) ; §4.7 « pas sur un slide » retirée via la réconciliation `offer.model`.
4. **§4.7 réconciliée** — la page live rend le `offer.model` partagé, pas des règles bespoke ; les 4 textes de « règles » inventés/`[to validate]` du brouillon EN sont retirés, les cartes mono-sourcées depuis /offre (les deux pages s'accordent).

**Divergence FR ≠ EN assumée :**
- **Chiffre du recrutement (§4.3 pains[2])** — on **garde le natif `70 000 €+/an`** (l'EN l'avait converti en « $80k+/yr [to validate] » pour le marché US — sans objet en FR).

**Tags `[to validate]` préservés :** Sage +70% (cas non publié), 6 personnes = équipe de 40, 60-80%, logos, accord client des témoignages — marqueurs d'honnêteté.

**Laissé pour la technique (hors édition de contenu) :** libellés FR hard-codés dans `page.tsx` (`Ce que vous y gagnez`, CTA intermédiaire « Vous voulez savoir à quoi ressemblerait ce programme chez vous ? », `Avant`/`Après`/`Comment`), cible du lien `/ai-partner`, `RelatedContent` descriptions. Garanties + témoignages restent mono-sourcés (propriétaire = home). Slugs/routes, hreflang, `inLanguage` — non traités ici.

---

## Reconciliation applied

Passe de réconciliation FR (audits SEO 88/100 + anti-slop Clean −10).

**Changé :**
1. **Normalisation des tags (rule 7) :** tous les `[à valider …]` → `[to validate …]` (13 occurrences ; texte explicatif FR conservé). Grep-cohérence.
2. **Cohérence de tag « Partenaire Anthropic » (A6, 🟠) :** affirmée à plat en §4.5 note mais `[to validate]` sur la home → tag `[to validate]` ajouté (§4.5 note + §9). Le claim MCP factuel (« standard ouvert d'Anthropic adopté par OpenAI/Google ») reste non tagué (exact, public). Gate d'autorisation à lever ou reformuler « nous construisons sur Claude/MCP ».

**Vérifié conforme (rien changé) :**
- **Title (rule 1) :** déjà trimmé bare `Transformation IA : le programme complet` (40 → rendu 52), marque non écrite à la main. OK.
- **Meta (rule 2) :** déjà resserrée à 156. OK.
- **Mots-clés FR (rule 5) :** table déjà exacte (transformation ia 100, agence ia 2 400/KD54, transformation digitale ia 70, automatisation ia 900/KD24) — confirmée par l'audit. `agence ia` maintenu hors title/H1 (owner = /agence-ia).
- **Négations « X, pas Y » (rule 4) :** déjà réduites ~7→2 (thèse « pas un problème de technologie… un problème de système » + « Pas une promesse : un résultat mesuré » conservées). Non saturé.
- **Blocs partagés** (offer.model, garanties, témoignages) mono-sourcés (home/offre), non forkés.

**Délibérément gardé (PROTECT) :**
- **Refrain dogfooding §4.4** (« On s'applique à nous-mêmes ce qu'on vend » / 6 personnes = équipe de 40) : instance load-bearing avec détail procédural first-hand + systèmes nommés — variée par page (pas un clone verbatim de la liste a-propos, keeper canonique hors batch). Crédit anti-slop, conservé.
- **Tags `[to validate]`** : Sage +70% (cas non publié), 6=40, 60-80%, logos, accord client témoignages — marqueurs d'honnêteté.
- **Chiffre natif FR `70 000 €+/an`** (non converti), claim MCP actuel, titres à colon-cadence (staked).

**Pour la technique / owner (hors périmètre édition) :** **lien cassé `/ai-partner` → `/offre`** (§4.7 + §6 ; bug live, NON corrigé en copie — ticket dev) ; statut « Partenaire Anthropic » à confirmer (A6, site-wide) ; répartition /ai-transformation (long-format) vs /offre (conversion) des 3 phases à confirmer ; accord client Sage +70%.
