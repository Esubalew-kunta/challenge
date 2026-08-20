# Garanties (/garanties) — FR Content Master

> Localisation FR du master EN scellé. Contenu = master EN (avec ses correctifs d'audit) traduit en français natif, en réutilisant la voix réelle de la marque (copie live `src/app/garanties/page.tsx`). SEO localisé sur des mots-clés FR réels.

## 1. En-tête de page
- **Route (FR, live) :** /garanties
- **Objectif :** Page de confiance détaillant les 4 garanties contractuelles (déclencheur / ce que vous obtenez / comment l'activer).
- **Rôle SEO :** confiance / support de conversion
- **Étape funnel :** BOFU

## 2. Mots-clés cibles
> Intention de recherche directe faible — page de confiance/conversion de marque, pas une page à mot-clé de tête. Pas de head term forcé (mot-clé minimal, attendu).

| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | (page confiance/marque — pas de head term) | — | — | jugement d'intention |
| Secondaire | garantie audit ia | négligeable | — | Ahrefs (pas de volume significatif) |
| Secondaire | audit ia remboursé | négligeable | — | jugement d'intention |

## 3. Meta de page
| Champ | Actuel (FR, live) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. avec suffixe auto « \| AI Makers ») | Nos 4 garanties contractuelles : zéro risque | Nos 4 garanties contractuelles : zéro risque |
| Meta description (140–160 car.) | Audit remboursé, impact sous 30 jours, champions formés, propriété intellectuelle totale : les 4 garanties AI Makers sont écrites dans le contrat. Voici exactement ce qu'elles couvrent et comment les activer. | Audit remboursé, impact sous 30 jours, champions à impact mesurable, propriété intellectuelle totale : les 4 garanties AI Makers, écrites dans le contrat. |
| H1 | Pourquoi on est les seuls à garantir nos résultats | Pourquoi on est les seuls à garantir nos résultats |
| Slug URL | /garanties | /garanties |

## 4. Sections & contenu

### 4.1 — Hero
- **Composant :** `src/app/garanties/page.tsx` (section Hero)
- **Proposé (FR) :**
  - Badge : `Zéro risque`
  - H1 : `Pourquoi on est les seuls à garantir nos résultats`
  - Intro : `Notre offre est conçue à partir des garanties, pas l'inverse. Les quatre sont écrites dans le contrat.`
  - Bouton CTA : `Réserver mon diagnostic gratuit`
- **Justification :** Copie live conservée telle quelle — voix authentique, différenciation par la garantie affirmée sans détour.

### 4.2 — Bande « Une garantie est une conséquence du modèle »
- **Proposé (FR) :**
  - Kicker : `Pourquoi c'est possible`
  - H2 : `Une garantie n'est pas un argument marketing. C'est une conséquence du modèle.`
  - Corps :
    - `Une agence classique mutualise ses consultants sur dix comptes à la fois. Personne ne connaît votre métier en profondeur, la qualité dépend de qui est disponible cette semaine, et les résultats sont imprévisibles. On ne peut pas garantir ce qu'on ne contrôle pas.`
    - `Notre modèle est construit autrement. Chaque client a un ingénieur IA dédié, onboardé 2 semaines avant le kick-off sur son secteur et ses outils. Et nous acceptons au maximum 3 nouveaux clients par mois : la capacité d'onboarding est physiquement limitée, donc la charge reste maîtrisée.`
    - `Quand la charge est maîtrisée et que l'ingénieur connaît le terrain, les résultats deviennent prévisibles. Et ce qui est prévisible peut s'écrire dans un contrat. C'est toute la logique : les garanties sont la conséquence directe de la façon dont on travaille.`
- **Justification :** Fidèle. Relie les garanties au modèle de capacité (co-détenu avec /capacite et la homepage). Conserve le cadrage canonique « 3 nouveaux clients/mois » et « 2 semaines avant le kick-off ».
- **Correctif d'audit appliqué :** dernier paragraphe aplati — « les garanties ne sont pas un pari commercial, elles sont la conséquence directe… » → « les garanties sont la conséquence directe de la façon dont on travaille » (on retire l'écho « X, pas Y » inflationniste ; on garde le H2 comme unique négation porteuse de la section).

### 4.3 — Les 4 garanties en détail
- **Champs par garantie :** nom, tagline, Le déclencheur, Ce que vous obtenez, Comment l'activer
- **En-tête de section :** H2 `Le déclencheur, ce que vous obtenez, comment l'activer` · sous-titre : `Pas de conditions cachées. Voici chaque garantie telle qu'elle figure au contrat, en langage clair.`
- **Proposé (FR) :**

  **01 — Garantie Audit** · tagline : `Pas de roadmap claire, pas de facture.`
  - Le déclencheur : `À la fin de l'audit, vous n'avez pas de roadmap claire avec au minimum 3 cas d'usage à fort ROI, chiffrés et priorisés.`
  - Ce que vous obtenez : `Le montant de l'audit vous est remboursé à 100 %. Vous gardez tous les livrables produits pendant l'audit.`
  - Comment l'activer : `Un email suffit. Pas de formulaire, pas de justification à fournir. Le remboursement est déclenché à réception.`

  **02 — Garantie 30 jours** · tagline : `De l'impact le premier mois, ou on continue gratuitement.`
  - Le déclencheur : `Au 30e jour d'accompagnement, aucun impact concret n'est constaté : pas de système en production, pas de temps récupéré mesurable.`
  - Ce que vous obtenez : `La mission est prolongée gratuitement jusqu'à ce que l'impact soit là. Même ingénieur dédié, même rythme, zéro facturation supplémentaire.`
  - Comment l'activer : `Vous le signalez par email à votre lead de mission. Le constat se fait ensemble, sur les livrables, pas sur des impressions.`

  **03 — Garantie Champions** · tagline : `Chaque champion formé produit un impact mesurable.`
  - Le déclencheur : `Un collaborateur formé dans le programme Champions n'atteint pas d'impact mesurable sur ses propres workflows.`
  - Ce que vous obtenez : `30 jours d'accompagnement offerts pour ce champion, jusqu'à ce que l'impact soit démontré.`
  - Comment l'activer : `Un email à votre lead de mission, avec le nom du champion concerné. Rien d'autre à justifier.`

  **04 — Garantie Indépendance** · tagline : `Le jour où on part, tout reste chez vous.`
  - Le déclencheur : `Elle s'applique en permanence : c'est une clause de propriété, active dès le premier jour, pas une clause de recours.`
  - Ce que vous obtenez : `L'intégralité de ce qui est construit pour vous (code, playbooks, documentation) vous appartient. Aucune licence, aucun abonnement caché, aucune dépendance technique à AI Makers.`
  - Comment l'activer : `Rien à activer. La propriété intellectuelle est transférée au fil de la mission, livrable par livrable.`
- **Justification :** Chaque garantie conserve son déclencheur exact ET sa condition d'activation — une garantie énoncée sans sa condition induirait en erreur (répétition de conformité — À PROTÉGER). Formulation identique à la copie contractuelle live.

### 4.4 — « Ce qu'elles couvrent. Ce qu'elles supposent. » (tableau transparence)
- **En-tête de section :** H2 `Ce qu'elles couvrent. Ce qu'elles supposent.` · sous-titre : `Une garantie honnête a des conditions honnêtes. Les voici, reprises de nos CGV.`
- **Proposé (FR) — tableau :**

  | Garantie | Ce qu'elle couvre | Ce qu'elle suppose |
  |---|---|---|
  | Garantie Audit | Une roadmap claire avec au moins 3 cas d'usage à fort ROI, sinon remboursement intégral. | La disponibilité de vos équipes pour les interviews prévues au planning. |
  | Garantie 30 jours | Un impact concret constaté le premier mois, sinon prolongation gratuite. | L'accès aux outils et aux données nécessaires, accordé dès le kick-off. |
  | Garantie Champions | Un impact mesurable par champion formé, sinon 30 jours offerts. | La participation active des champions aux sessions de formation. |
  | Garantie Indépendance | La propriété totale du code, des playbooks et de la documentation. | Aucune condition. Elle s'applique dans tous les cas. |
  - Note de bas de tableau : `Le texte contractuel complet est public : lire nos conditions générales de vente.` (lien /cgv — conserver la route légale FR)
- **Justification :** Les préconditions sont porteuses et doivent rester attachées à chaque garantie. Conservées mot pour mot.

### 4.5 — FAQ — voir §5

### 4.6 — CTA final
- **Proposé (FR) :**
  - Titre : `Réservez votre diagnostic : l'audit est garanti ou remboursé`
  - Sous-titre : `30 minutes pour analyser vos workflows. Si l'audit qui suit ne produit pas une roadmap claire avec 3 cas d'usage à fort ROI, il ne vous coûte rien.`
  - Bouton : `Réserver mon diagnostic gratuit` → /contact
- **Justification :** Conserve la condition de remboursement explicite dans le CTA (pas une réassurance creuse).

## 5. FAQ
Emplacement FAQ : OUI — `faq-accordion.tsx` + JSON-LD FAQPage.

| # | Question (FR) | Réponse (FR) |
|---|---|---|
| 1 | Et si je change d'avis en cours de mission ? | Vous gardez tout. La mission avance par livrables (systèmes en production, playbooks, documentation) et chaque livrable vous appartient dès qu'il est remis. Si vous arrêtez, rien ne disparaît et rien ne cesse de fonctionner : c'est exactement ce que couvre la garantie Indépendance. |
| 2 | Et si mes équipes ne jouent pas le jeu ? | C'est le seul vrai risque, et on le traite dès le kick-off : les garanties supposent la disponibilité de vos équipes, l'accès aux outils et une participation active. Concrètement, la charge côté client reste faible : l'ingénieur dédié fait le travail lourd. Si un blocage apparaît, on le signale immédiatement à votre sponsor plutôt que de laisser la mission dériver. |
| 3 | Les garanties sont-elles vraiment dans le contrat ? | Oui. Les quatre figurent mot pour mot dans nos conditions générales de vente et dans chaque contrat signé. Vous pouvez les lire avant tout engagement : elles sont publiques, sur la page CGV de ce site. |
| 4 | Comment se passe un remboursement d'audit ? | Un email suffit. Pas de formulaire, pas de commission d'examen, pas de justification à fournir. Si la roadmap remise ne contient pas au moins 3 cas d'usage à fort ROI, vous écrivez à votre contact AI Makers et le remboursement intégral est déclenché. Vous conservez les livrables déjà produits. |
| 5 | Pourquoi vos concurrents n'offrent pas de garanties ? | Parce que leur modèle ne le permet pas. Une agence qui mutualise ses consultants sur dix comptes ne peut pas prédire ses résultats, donc elle ne peut rien garantir. Notre modèle est différent : un ingénieur dédié par client, onboardé 2 semaines avant le kick-off, et maximum 3 nouveaux clients par mois. La charge est maîtrisée, les résultats sont prévisibles, et ce qui est prévisible peut s'écrire dans un contrat. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| le modèle derrière les garanties | /capacite | explication du modèle |
| l'audit IA garanti | /audit-ia-entreprise | offre garantie |
| Réserver un diagnostic | /contact | CTA |

## 7. CTA
- **CTA principal :** FR : `Réservez votre diagnostic : l'audit est garanti ou remboursé` → /contact

## 8. Bloc GEO
- **Paragraphe answer-first (FR, 2–3 phrases, citable par les LLM) :** `AI Makers adosse son travail à quatre garanties écrites dans le contrat : l'audit est intégralement remboursé s'il n'aboutit pas à une roadmap claire avec au moins 3 cas d'usage à fort ROI ; sans impact concret au 30e jour, la mission continue gratuitement ; chaque champion IA formé atteint un impact mesurable ou obtient 30 jours de plus ; et tout le code, les playbooks et la documentation appartiennent au client, sans dépendance. Ces garanties sont possibles parce qu'AI Makers affecte un ingénieur dédié par client et n'accepte que 3 nouveaux clients par mois maximum.`
- **Entrée llms.txt (FR, 1 ligne) :** `[Garanties](https://aimakers.fr/garanties) : les quatre garanties contractuelles d'AI Makers — audit remboursé, impact sous 30 jours, champions à impact mesurable, et propriété intellectuelle totale sans dépendance.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| 4 garanties écrites dans le contrat | public/llms.txt (canonique) |
| Max 3 nouveaux clients/mois ; ingénieur dédié onboardé 2 semaines avant le kick-off | public/llms.txt + copie de page |
| Déclencheurs/conditions des garanties (3 cas d'usage à fort ROI, 30e jour, champions, transfert de PI) | src/app/garanties/page.tsx (formulation contractuelle) |

## Localisation appliquée
**Modifié vs. live FR :**
- Meta description : ramenée de ~206 à ~153 car. (budget ≤160) — on garde la charge mots-clés + la liste des garanties ; on retire la phrase de clôture « Voici exactement ce qu'elles couvrent et comment les activer ».
- §4.2 : correctif d'audit EN reporté — aplati « les garanties ne sont pas un pari commercial, elles sont… » → « les garanties sont la conséquence directe de la façon dont on travaille ».
- Title : conservé (44 car. + suffixe auto = 56 ≤ 60).

**Délibérément conservé (voix live authentique) :**
- Les quatre déclencheurs + conditions d'activation + le tableau « Ce qu'elle suppose » (répétition de conformité/garantie nécessaire — À PROTÉGER).
- Le triptyque de propriété « code, playbooks, documentation » — garanties est le propriétaire canonique de cette formulation.
- Le H2 « Une garantie n'est pas un argument marketing. C'est une conséquence du modèle. » comme unique négation porteuse de la section.
- Aveu d'honnêteté FAQ2 (« le seul vrai risque »), cadrage canonique max 3 clients/mois + 2 semaines avant le kick-off.

## Reconciliation applied
Pass de réconciliation FR (audits SEO + anti-slop) — cette page était déjà largement conforme :
- **Title :** aucun suffixe de marque écrit à la main ; « Nos 4 garanties contractuelles : zéro risque » = 44 car. + suffixe auto = 56 ≤ 60. Conforme, inchangé.
- **Meta :** déjà ramenée à ~153 car. (≤160) lors de la localisation. Conforme, inchangé.
- **« X, pas Y » :** déjà dé-empilé en §4.2 ; le H2 « Une garantie n'est pas un argument marketing. C'est une conséquence du modèle. » reste l'unique négation porteuse. Conforme.
- **Device co-détenu (garantie de sortie / indépendance / triptyque « code, playbooks, documentation ») :** garanties est le **propriétaire canonique** de cette formulation — conservée telle quelle ici (les autres pages doivent varier).
- **Non modifié — décision propriétaire requise :** allégation comparative/superlative H1 « Pourquoi on est les seuls à garantir nos résultats » + FAQ5 « Pourquoi vos concurrents n'offrent pas de garanties » (A8 / cross-findings §F). Nettoyage juridique publicité comparative FR = **log only** (hors périmètre d'édition de cette passe) ; à trancher par le propriétaire avant promotion.
