# SEO & GEO (/seo-geo) — Master de contenu FR

> Localisation FR du master EN. Le FR est la langue primaire live : le copy provient de `src/lib/offer-pages/seo-geo.ts` + `site-config.ts` (témoignage Sage, bookingProof). Page : `src/app/seo-geo/page.tsx`. JSON-LD : Breadcrumb + Service + FAQPage. On conserve la référence académique et les chiffres à l'identique et on n'applique que les corrections d'audit (title dédoublé, dé-empilage des négations, dédup dogfooding).

> **🔎 GATE DE VALIDATION :** toute la colonne vertébrale de preuve est « +70% de visibilité IA pour Sage », taggé `[to validate]`, issu d'un cas `inProgress`/noindex non publié. **Cette page ne doit pas partir tant que le client n'a pas validé le +70% et que le cas Sage n'est pas publié.** Une seule validation couvre aussi homepage + ai-transformation. Copy laissé intact avec son tag — pas une édition de contenu.

## 1. En-tête de page
- **Route (FR, live) :** /seo-geo
- **Objet :** Page offre : generative engine optimization (être cité par ChatGPT/Perplexity/AI Overviews) + SEO.
- **Rôle SEO :** support-pilier (FR : generative engine optimization / GEO — émergent, requête différenciante)
- **Étape funnel :** MOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | generative engine optimization | 1 100 | 21 | Ahrefs France (KE), 2026-07 (terme exact du service) |
| Secondaire | seo geo | 800 | 12 | Ahrefs France (KE), 2026-07 — on-intent, faible KD ; cette page l'owne |
| Secondaire | référencement ia | 350 | 3 | Ahrefs France (KE), 2026-07 |
| Secondaire | visibilité ia | minimal | — | audit de visibilité IA |
| Support | seo ia | 300 | n/a | Ahrefs France — volume large, plus concurrentiel |

> **Décision mots-clés :** en France, `generative engine optimization` (1 100/KD21 — plus fort que l'estimation initiale de 200) est le nom exact et sans ambiguïté du service vendu, et le terme que la page définit déjà (acronyme GEO) — primaire. On ajoute **`seo geo` (800/KD12)** en secondaire on-intent à faible difficulté — cette page est l'owner naturel. L'acronyme `geo` seul est un mirage (géographie / marque : FR 1 800 mais global 236 000, navigationnel — hors intention). On ancre les captures support sur `référencement ia` (350/KD3) et `visibilité ia` ; `seo ia` (300) est un clin d'œil de corps, trop large pour être possédé. Le terme est jeune côté FR : on possède l'expression exacte pendant que la concurrence est faible.

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | SEO & GEO : être cité par les IA \| AI Makers | `SEO & GEO : être cité par les IA` *(32 ; rend ~44 avec le suffixe `\| AI Makers` — retirer le `\| AI Makers` écrit à la main du live)* |
| Meta description (140–160 car.) | (seoGeoMeta — ≈280 car., trop long) | `Le GEO fait de votre entreprise la réponse que citent ChatGPT, Gemini et Perplexity : audit de visibilité IA, contenu citable, mesure mensuelle. +70% pour Sage.` *(158)* |
| H1 | Vos futurs clients ne cherchent plus sur Google. Ils demandent à ChatGPT. | Inchangé |
| URL slug | /seo-geo | /seo-geo |

## 4. Sections & contenu
Source du copy : `seo-geo.ts` + `site-config.ts`. Référence vérifiée : « GEO: Generative Engine Optimization », Aggarwal et al. (Princeton, IIT Delhi, Georgia Tech, Allen Institute for AI), KDD 2024, arXiv:2311.09735.

### 4.1 — Hero
- **Composant :** `seoGeoHero`
- **Proposé (FR) — verbatim live :**
  - **badge :** `SEO & GEO · L'offre où on a le plus d'avance`
  - **title :** `Vos futurs clients ne cherchent plus sur Google. Ils demandent à ChatGPT.`
  - **subtitle :** `Le GEO, c'est faire de votre entreprise la réponse que les IA citent. On l'a fait pour Sage : +70% de visibilité sur ChatGPT et Gemini. On le mesure, on le construit, on le prouve.`
  - **cta :** `Réserver mon diagnostic gratuit` → /contact — **secondaryCta :** `Voir le cas Sage` → #preuve
- **Rationale :** titre answer-first nommant le basculement d'usage ; « le GEO, c'est faire de votre entreprise la réponse que les IA citent » est la définition en une ligne qui capte le mot-clé primaire et est citable par les LLM. Sage +70% = point de preuve unique, réel, mesuré. **[to validate] — gate Sage.**

### 4.2 — Preuve Sage
- **Composant :** `seoGeoProof`
- **Proposé (FR) — verbatim live :**
  - **badge :** `La preuve, pas la promesse` — **title :** `Ce qu'on a fait pour Sage, mesuré` — **subtitle :** `Un éditeur de logiciels international, absent des réponses des moteurs IA au départ. Voici l'avant, l'après et la méthode.`
  - **enginesCaption :** `Les moteurs sur lesquels on travaille et on mesure :` — **engines :** ChatGPT · Gemini · Claude — **enginesNote :** `Et Perplexity, suivi dans les mêmes rapports mensuels.`
- **Rationale :** garde la bande de preuve Sage exactement sourcée. Sage est la seule preuve GEO sanctionnée — aucun autre résultat client inventé. **[to validate] — gate Sage.**

### 4.3 — Le basculement
- **Composant :** `seoGeoShift`
- **Proposé (FR) :**
  - **badge :** `Le basculement` — **title :** `Le search change de mains.`
  - **para 1 :** `Une part croissante des recherches ne passe plus par une page de résultats : elle passe par une réponse générée. L'utilisateur pose sa question à ChatGPT, Gemini ou Perplexity, lit la réponse, et ne clique que sur les sources citées dedans. S'il clique.`
  - **para 2 :** `Or une réponse IA ne cite qu'une poignée de sources. Là où une page Google affichait dix liens et laissait sa chance à la page 2, un moteur génératif tranche : deux ou trois références, et le reste reste hors de la réponse.` *(fix d'audit : « Être cité ou être invisible, il n'y a plus d'entre-deux. » retiré — dé-empilage)*
  - **para 3 :** `La bonne nouvelle : ça s'optimise, et ça se mesure. Le terme GEO vient d'une étude académique, « GEO: Generative Engine Optimization » (Aggarwal et al., Princeton, présentée à KDD 2024), qui a mesuré jusqu'à +40% de visibilité dans les réponses des moteurs IA en retravaillant les contenus : sources citées, citations, statistiques. Ce n'est pas de la magie, c'est de la méthode.`
  - **facts[3] :**
    1. `2-3 sources` — citées par réponse, là où Google affichait dix liens — *Un moteur génératif ne classe pas, il choisit. Soit vous êtes dans la réponse, soit vous n'existez pas pour cette question.*
    2. `+40%` — de visibilité mesurée par la recherche académique — *L'étude Princeton qui a introduit le terme GEO (KDD 2024) : optimiser un contenu pour la citation augmente sa visibilité dans les réponses IA jusqu'à 40%.*
    3. `+70%` — de visibilité obtenue pour Sage sur ChatGPT et Gemini — *Notre application terrain de cette recherche : de l'absence des réponses IA à la première référence citée dans sa verticale.* **[to validate] — gate Sage.**
  - **closing :** `Vos concurrents ne voient pas encore ce trafic disparaître : il ne s'effondre pas, il s'évapore requête par requête. Le moment de prendre position, c'est pendant que la place est libre.`
- **Rationale :** l'étude Princeton/KDD 2024 (arXiv:2311.09735) est réelle et vérifiée — l'autorité citable qui pose la terminologie GEO. +40% = chiffre de l'étude ; +70% Sage = résultat terrain (cas inProgress → [to validate]).

### 4.4 — La méthode (4 temps)
- **Composant :** `seoGeoMethod`
- **Proposé (FR) — verbatim live :**
  - **badge :** `La méthode` — **title :** `Quatre temps. De l'état des lieux à la courbe qui monte.` — **subtitle :** `Pas de forfait boîte noire. Chaque temps a un livrable, et vous voyez la mesure évoluer mois par mois.`
  - **01 · Audit de visibilité IA :** `Où apparaissez-vous aujourd'hui dans les réponses de ChatGPT, Gemini et Perplexity ? Et surtout : que disent les IA de vous, de vos offres, de vos concurrents ? On établit la baseline, requête par requête.` — *Livrable : État des lieux chiffré : vos citations, celles de vos concurrents, et ce que les moteurs racontent sur votre marque.*
    2. **02 · Stratégie de citation :** `Les requêtes qui comptent pour votre métier, celles que vos clients posent vraiment aux IA. Puis les formats que les moteurs citent : comparatifs, définitions, données sourcées, pages réponses. On priorise par impact business.` *(fix d'audit : « pas par volume de mots-clés » aplati)* — *Livrable : Plan de citation priorisé : quelles questions viser, avec quels contenus, dans quel ordre.*
    3. **03 · Contenu citable :** `Refonte du contenu pour la citation : structuré, sourcé, factuel. Des pages qui répondent d'abord, argumentent ensuite. Données structurées, llms.txt, chiffres vérifiables : tout ce qui donne à un moteur une raison de vous citer plutôt qu'un autre.` — *Livrable : Contenus refondus et publiés, optimisés pour être repris par les moteurs IA et par Google.*
    4. **04 · Mesure continue :** `Suivi de visibilité IA mois par mois : vos citations, votre part de voix face aux concurrents, l'évolution requête par requête. Ce qui monte, on l'amplifie. Ce qui stagne, on le retravaille.` — *Livrable : Rapport mensuel : la courbe de visibilité, la part de voix, et les prochaines actions.*
- **Rationale :** quatre temps nommés avec livrables — anti-boîte-noire, chacun est un bloc réponse citable. « Répondre d'abord » et « llms.txt » montrent la méthode appliquée à la page elle-même (dogfooding, §4.6).

### 4.5 — SEO + GEO ensemble
- **Composant :** `seoGeoTogether`
- **Proposé (FR) :**
  - **badge :** `SEO + GEO` — **title :** `Un seul contenu. Deux canaux.`
  - **intro :** `Google est toujours là, et le restera. Le SEO classique reste le socle : un site techniquement propre, des contenus qui répondent aux vraies questions, une autorité qui se construit. Le GEO s'appuie sur ce même socle.` *(fix d'audit : « ne remplace rien » aplati en positif)*
  - **points[3] :** `Le SEO reste le socle — Les moteurs IA s'alimentent en grande partie des mêmes sources que Google. Un contenu bien structuré et bien référencé part avec une longueur d'avance sur les deux terrains.` · `Le GEO capte le canal qui s'ouvre — Les mêmes pages, retravaillées pour la citation : structure réponse d'abord, sources, données. Ce que vous produisez une fois travaille sur Google et dans les réponses IA.` · `AI Makers fait les deux — Un seul prestataire, une seule stratégie de contenu, deux courbes suivies : votre trafic organique et votre visibilité dans les réponses IA.`
- **Rationale :** positionne le GEO comme additif au SEO (pas un remplacement mode) — cadrage honnête qui rassure aussi le buyer averti SEO.

### 4.6 — Pourquoi nous
- **Composant :** `seoGeoWhyUs`
- **Proposé (FR) :**
  - **badge :** `Pourquoi nous` — **title :** `On fait tourner le GEO sur notre propre site d'abord.` *(fix d'audit / dédup dogfooding : live « On pratique ce qu'on vend. » — cadrage owned par /a-propos)*
  - **intro :** `La page que vous lisez est optimisée GEO : llms.txt à la racine, données structurées sur chaque page, contenu answer-first. Tout ce qu'on recommande à nos clients tourne déjà ici.` *(fix d'audit : « On ne vous recommande rien qu'on n'applique pas… » aplati en positif)*
  - **proofPoints[3] :** `Ce site est notre terrain d'essai — llms.txt, schémas Service, FAQ et Breadcrumb, pages construites pour répondre d'abord : les techniques qu'on déploie chez nos clients tournent d'abord ici.` · `On l'a fait sur un cas exigeant — Sage, un éditeur international, sur une verticale concurrentielle : +70% de visibilité sur ChatGPT et Gemini, première référence citée dans sa verticale.` **[to validate] — gate Sage.** · `On rend le sujet exploitable — Le GEO n'est utile que si vos équipes métiers comprennent quoi produire et pourquoi. On traduit la technique en recommandations actionnables, pas en jargon.`
  - **testimonialAuthor :** Mickaël Mina (rendu depuis bookingProof, voir §4.8)
- **Rationale :** le dogfooding est le « pourquoi nous » le plus fort pour un vendeur GEO — prouvable, first-hand, démontré sur la page même.

### 4.7 — Engagement mesurable
- **Composant :** `seoGeoCommitment`
- **Proposé (FR) :**
  - **badge :** `Notre engagement` — **title :** `Le GEO est mesurable. Alors on le mesure devant vous.`
  - **para 1 :** `On ne vous promet pas une position, personne ne contrôle ce qu'un modèle décide de citer. Ce qu'on s'engage à faire : définir la baseline au jour 1, requête par requête, et vous montrer la courbe chaque mois. Vos citations, votre part de voix face aux concurrents, l'évolution dans le temps.`
  - **para 2 :** `Vous voyez ce qui monte, ce qui stagne, et ce qu'on fait pour corriger. Si un contenu ne produit pas de citations, on le retravaille. La mesure est écrite dans l'engagement dès le jour 1.` *(fix d'audit : « n'est pas un bonus de fin de mission » aplati)*
  - **points[4] :** `Baseline de visibilité IA établie au jour 1` · `Rapport mensuel : citations, part de voix, évolution requête par requête` · `Comparaison systématique avec vos concurrents directs` · `Contenus retravaillés tant qu'ils ne produisent pas de citations`
- **Rationale :** la section engagement-mesurable est la clôture de confiance — honnête (« on ne promet pas une position ») et concrète. L'aveu de plafond honnête est conservé.

### 4.8 — Témoignage Sage
- **Composant :** `testimonial-card.tsx` + site-config (Mickaël Mina)
- **Proposé (FR) — verbatim live sourcé :**
  - **citation :** `AI Makers a rendu le GEO compréhensible et exploitable par nos équipes métiers. Leur capacité à comprendre rapidement les enjeux business et à traduire des sujets techniques en recommandations actionnables a clairement fait la différence.` *(🔴 correctif d'intégrité appliqué — reverti verbatim à la source `site-config.ts:468` : « pour »→« par », « saisir vite »→« comprendre rapidement », et la phrase AJOUTÉE « Un partenaire sérieux et pédagogue. » RETIRÉE. On n'ajoute jamais de mots à la citation d'une personne nommée. NB : `site-config.ts:1548` porte une variante avec la phrase ajoutée, et `:1782` une reformulation encore différente — incohérence de source à réconcilier côté dev.)*
  - **auteur :** Mickaël Mina — Directeur IA, Sage
- **Rationale :** issu du seul témoignage Sage sourcé dans site-config. Aucune citation nouvelle écrite ; société/rôle exacts.

### 4.9 — FAQ / 4.10 — Connexes / 4.11 — CTA final
Voir §5, §6, §7.

## 5. FAQ
Slot FAQ : OUI — `faq-accordion.tsx` + JSON-LD FAQPage. **Copy live conservé verbatim.**

| # | Question (FR) | Réponse (FR) |
|---|---|---|
| 1 | Quelle est la différence entre le GEO et le SEO ? | Le SEO (Search Engine Optimization) vise à positionner vos pages dans les résultats de Google : un classement de liens, où l'utilisateur choisit. Le GEO (Generative Engine Optimization) vise à faire citer votre entreprise dans les réponses générées par les moteurs IA comme ChatGPT, Gemini, Perplexity ou Claude : le moteur rédige une réponse et ne cite que quelques sources. Les deux s'appuient sur le même socle, un contenu structuré, sourcé et factuel, mais le GEO ajoute des exigences propres : structure answer-first, données citables, fichier llms.txt, données structurées. Chez AI Makers, les deux sont traités dans une seule stratégie de contenu. |
| 2 | Combien de temps avant de voir des résultats ? | Les premières citations arrivent généralement en quelques semaines après la publication des contenus optimisés, mais la courbe se construit sur des mois. Les moteurs IA réévaluent leurs sources en continu : la visibilité gagnée se consolide avec la régularité et l'autorité accumulée. C'est pour ça qu'on établit la baseline au jour 1 et qu'on vous montre l'évolution chaque mois, plutôt que de promettre un délai précis que personne ne peut garantir. |
| 3 | Le GEO fonctionne pour quel type d'entreprise ? | Le GEO est pertinent dès que vos clients se renseignent avant d'acheter : B2B, services, logiciels, santé, industrie, ou toute activité où l'on compare des prestataires. Il est particulièrement rentable sur les verticales où les moteurs IA citent encore peu d'acteurs : la place de première référence est à prendre. Il l'est moins pour les achats d'impulsion sans phase de recherche. Le plus simple : notre audit de visibilité IA vous dit en quelques jours si votre marché pose déjà ses questions aux IA, et qui est cité à votre place. |
| 4 | Comment mesurez-vous la visibilité dans les réponses des IA ? | On interroge les moteurs (ChatGPT, Gemini, Perplexity) sur un panel de requêtes qui comptent pour votre métier, défini avec vous au départ. Pour chaque requête, on relève si votre marque est citée, à quelle place, avec quel discours, et qui d'autre est cité. Ça donne trois indicateurs suivis mois par mois : votre taux de citation, votre part de voix face aux concurrents, et la tonalité de ce que les moteurs disent de vous. La baseline du jour 1 sert de référence : chaque rapport mensuel montre la courbe depuis ce point de départ. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Audit GEO gratuit : ce que les IA disent de vous | /outils/audit-geo-gratuit | lead magnet |
| Cas Sage : +70% de visibilité IA | /etudes-de-cas/sage-geo | preuve **[to validate] — gate Sage** |
| Meilleures agences IA en France 2026 | /blog/meilleures-agences-ia-france | connexe |
| Réserver un diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA final :** title `Que disent les IA de vous, aujourd'hui, à votre place ?` — subtitle `30 minutes pour le découvrir : on interroge les moteurs sur vos requêtes clés en direct, et vous repartez avec votre première photographie de visibilité IA, que vous travailliez avec nous ou non.` — cta `Réserver mon diagnostic gratuit` → /contact

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `Le GEO (Generative Engine Optimization) est la pratique consistant à faire de votre entreprise la réponse que les moteurs IA — ChatGPT, Gemini, Perplexity, Claude — citent quand un utilisateur leur pose une question, plutôt que de positionner un lien dans les résultats de Google. Le terme vient d'une étude académique de Princeton (KDD 2024) qui a mesuré jusqu'à +40% de visibilité dans les réponses IA via des contenus optimisés pour la citation. AI Makers déploie le GEO en quatre temps — audit de visibilité IA, stratégie de citation, contenu citable, mesure mensuelle — et a fait progresser la visibilité de Sage sur ChatGPT et Gemini de +70%.`
- **Entrée llms.txt (FR) :** `[SEO & GEO](https://aimakers.fr/seo-geo) : faites de votre entreprise la réponse que citent ChatGPT, Perplexity, Gemini et AI Overviews. Audit de visibilité IA, stratégie de citation, contenu citable, mesure mensuelle. +70% de visibilité IA pour Sage.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| +70% de visibilité sur ChatGPT/Gemini pour Sage ; première référence citée dans sa verticale | case-studies.ts (inProgress) — **[to validate] — gate Sage** |
| Origine du terme GEO : Aggarwal et al., Princeton, KDD 2024, arXiv:2311.09735 ; +40% mesuré | seo-geo.ts header (référence vérifiée) |
| 2-3 sources citées par réponse IA | seo-geo.ts — [to validate source] |
| Témoignage Sage (Mickaël Mina, Directeur IA) | `site-config.ts:468` (verbatim, reverti à la source — phrase ajoutée retirée) ; incohérence code :468 vs :1548 vs :1782 à réconcilier côté dev |
| Méthode (4 temps), reporting mensuel, baseline jour 1 | seo-geo.ts |

## Corrections d'audit appliquées
- **Title dédoublé** — `\| AI Makers` écrit à la main retiré (auto-ajouté par le template).
- **Meta > 160** — resserrée à 158 car.
- **🔴 Correctif d'intégrité — témoignage Sage** — reverti verbatim à la source (`site-config.ts:468`) : « pour »→« par », « saisir vite »→« comprendre rapidement », phrase ajoutée « Un partenaire sérieux et pédagogue. » retirée (voir §4.8 + §Reconciliation applied).
- **Mots-clés FR** — `generative engine optimization` 200 → 1 100/KD21 ; `référencement ia` 150 → 350/KD3 ; ajout `seo geo` 800/KD12 en secondaire (voir §Reconciliation applied).
- **Dé-empilage des négations (~9 → ~3)** — conservées : « Ce n'est pas de la magie, c'est de la méthode. » (§4.3), « il ne s'effondre pas, il s'évapore requête par requête » (closing), « On ne vous promet pas une position… » (§4.7). Aplaties : §4.3 para 2 « Être cité ou être invisible… », §4.5 « ne remplace rien », §4.4 « pas par volume de mots-clés », §4.7 « pas un bonus de fin de mission ».
- **Dédup dogfooding** — §4.6 « On pratique ce qu'on vend. » (owned par /a-propos) → « On fait tourner le GEO sur notre propre site d'abord. » ; « On ne vous recommande rien qu'on n'applique pas… » aplati en positif. Preuve (llms.txt, schéma, Sage) intégralement conservée.

## À valider
- **🔎 Gate de sign-off Sage** — le +70% (colonne vertébrale de preuve) est `[to validate]`, cas non publié. Page bloquée tant que le client n'a pas validé et que le cas Sage n'est pas publié. Une validation couvre homepage + ai-transformation.
- « 2-3 sources par réponse » : conservé avec son tag `[to validate]`.
- Ingénierie laissée au dev : slug EN `/generative-engine-optimization` + sitemap, labels FR codés en dur (Avant/Après/Comment, Le livrable, descriptions RelatedContent).

---

## Reconciliation applied

Passe de réconciliation FR (audits SEO 83/100 **BLOQUÉ** + anti-slop Clean −11, gate Sage).

**Changé :**
1. **🔴 Correctif d'intégrité — citation Sage (rule 3) :** la citation de Mickaël Mina (Sage) avait été altérée vs la source. Revertie **verbatim** à `site-config.ts:468` : « exploitable **pour** » → « exploitable **par** » ; « **saisir vite** les enjeux » → « **comprendre rapidement** les enjeux » ; et la phrase **AJOUTÉE** « Un partenaire sérieux et pédagogue. » **retirée**. On n'ajoute jamais de mots à la citation d'une personne nommée (§7.2).
2. **Mots-clés FR (rule 5) :** `generative engine optimization` 200 → **1 100/KD21** (primaire, plus fort que l'estimation) ; `référencement ia` 150 → **350/KD3** ; ajout **`seo geo` 800/KD12** en secondaire on-intent (cette page l'owne). Prose §2 mise à jour. `geo` seul confirmé mirage (navigationnel).

**Vérifié conforme (rien changé) :**
- **Title (rule 1) :** proposition déjà correcte — bare `SEO & GEO : être cité par les IA` (32, rendu ~44) ; le `| AI Makers` hand-written est un bug code (`seo-geo.ts:22`, retrait dev — B1).
- **Meta (rule 2) :** déjà 158 ≤160.
- **Négations (rule 4) :** déjà dé-empilées ~9→3 (« Ce n'est pas de la magie, c'est de la méthode » ; « il s'évapore requête par requête » ; « On ne vous promet pas une position » conservées). Non saturé.
- **Dédup dogfooding (rule 6) :** déjà fait (§4.6 « On pratique ce qu'on vend » → « On fait tourner le GEO sur notre propre site d'abord » ; cadrage canonique = a-propos hors batch).
- **Tags (rule 7) :** `[to validate]` déjà au bon littéral (aucun `[à valider]`).

**Délibérément gardé (PROTECT) :**
- **Gate Sage `[to validate]`** sur le **+70%** (hero, facts[3], pourquoi-nous, meta, llms.txt, lien §6) — colonne vertébrale de preuve, **conservé intact** : la page reste BLOQUÉE jusqu'à sign-off client + publication du cas Sage. Une validation couvre aussi homepage + ai-transformation. **Non retiré.**
- **Ancre académique** (Aggarwal et al., Princeton, KDD 2024, arXiv:2311.09735, +40%) — sourcée, vérifiée, load-bearing — intacte.
- **Aveu de plafond honnête** (« personne ne contrôle ce qu'un modèle décide de citer ») + tag `[to validate]` sur « 2-3 sources par réponse » — signaux d'honnêteté, gardés.

**Pour la technique / owner (GATE + dev) :**
- **🔎 GATE bloquant :** ne pas publier tant que Sage n'a pas validé le +70% et que `/etudes-de-cas/sage-geo` (inProgress/noindex) n'est pas publié (corrige aussi le lien de preuve §6 vers une page noindex).
- **Incohérence code du témoignage** : `site-config.ts:468` (source, sans phrase) vs `:1548` (avec « partenaire sérieux et pédagogue ») vs `:1782` (reformulation) — à réconcilier vers une version unique côté dev.
- Retrait du `| AI Makers` hand-written dans `seo-geo.ts` (bug live).
