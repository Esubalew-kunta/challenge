# Audit IA entreprise (/audit-ia-entreprise) — Master de contenu FR

> Localisation FR du master EN. Le FR est la langue primaire live : le copy provient de `src/app/audit-ia-entreprise/page.tsx` (inline) et du template `ServicePage`. On conserve les chiffres et la garantie à l'identique et on n'applique que les corrections d'audit (budget title, fusion §4.2/§4.3 en déroulé jour par jour, dé-empilage des négations « X, pas Y », mots-clés FR).

## 1. En-tête de page
- **Route (FR, live) :** /audit-ia-entreprise
- **Objet :** Page offre de l'audit AI Scan (produit d'entrée, remboursé si sans résultat).
- **Rôle SEO :** support-pilier (FR : audit ia / maturité ia)
- **Étape funnel :** BOFU (offre d'entrée)

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | audit ia | 600 | 1 | Ahrefs France (KE), 2026-07 |
| Secondaire | maturité ia | 150 | n/a | Ahrefs France (KE), 2026-07 |
| Secondaire | audit intelligence artificielle | 200 | — | Ahrefs France — variante longue |
| Secondaire | automatisation des processus | 600 | 5 | Ahrefs France — tissé dans les livrables |

> **Décision mots-clés :** contrairement au marché EN (où `ai readiness assessment` bat `ai audit`), en France `audit ia` est le terme naturel et sans ambiguïté pour ce produit d'entrée — il porte en primaire et mène le H1/title. `maturité ia` est le secondaire naturel (la grille /24 est l'actif propriétaire citable). `automatisation des processus` est tissé dans le copy des livrables pour la longue traîne. Pas de collision de slug : la route FR live reste /audit-ia-entreprise.

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | Audit IA entreprise : opportunités en 2 semaines | `Audit IA : opportunités en 2 semaines` *(37 ; rend ≈49 avec le suffixe `\| AI Makers` — marge de sécurité vs le plafond 60. « entreprise » retiré du title, gardé long-tail dans H1/copy)* |
| Meta description (140–160 car.) | Un audit IA analyse vos workflows… | `Un audit IA (AI Scan) cartographie vos workflows en 1-2 semaines : score de maturité /24 et roadmap avec 3+ cas d'usage à fort ROI. Diagnostic gratuit.` *(151 ; le primaire « audit IA » ouvre la meta + next-step « Diagnostic gratuit »)* |
| H1 | Audit IA : cartographiez vos opportunités en 2 semaines | Inchangé — `Audit IA : cartographiez vos opportunités en 2 semaines` |
| URL slug | /audit-ia-entreprise | /audit-ia-entreprise |

## 4. Sections & contenu
Template : ServicePage. Copy inline dans `src/app/audit-ia-entreprise/page.tsx` ; visuel `services/process-scanner.tsx`.

### 4.1 — Hero + stats + bande de preuve
- **Composant :** `service-page.tsx`
- **Champs :** badge, h1, intro answer-first, heroStats[3], proof
- **Proposé (FR) — verbatim live :**
  - **badge :** `Audit IA : AI Scan`
  - **h1 :** `Audit IA : cartographiez vos opportunités en 2 semaines`
  - **intro (answer-first) :** `Un audit IA est une analyse systématique de vos workflows pour identifier les tâches automatisables et les prioriser par retour sur investissement. Notre AI Scan dure 1 à 2 semaines : cartographie des processus, interviews des équipes, scoring de maturité sur 24 points, et une roadmap chiffrée avec au minimum 3 cas d'usage à fort ROI, présentée à votre COMEX.`
  - **heroStats[3] :** `+50 entreprises accompagnées` · `+200 systèmes en production` · `9,6/10 de satisfaction`
  - **proof caption :** `Restitution d'un AI Scan : cartographie et roadmap chiffrée.`
- **Rationale :** la première phrase est une définition autoportante d'« audit IA » (mot-clé primaire) pour les moteurs de réponse ; la garantie de remboursement est mentionnée en creux car c'est le levier de conversion le plus fort de la page.

### 4.2 — « Ce que fait un AI Scan »
- **Composant :** sections[0] + visuel `ProcessScanner`
- **Champs :** badge, title, description + 4 composantes
- **Proposé (FR) :**
  - **badge :** `En un coup d'œil` — **title :** `Ce que fait un AI Scan` — **description :** `On passe vos process au scanner : chacun est identifié, chiffré et priorisé par ROI. À la fin, un score de maturité et une roadmap claire.`
  - **Composante — Cartographie des processus :** `On documente les workflows réels de chaque département : qui fait quoi, avec quels outils, en combien de temps. Le travail réel, pas l'organigramme.`
  - **Composante — Interviews des équipes :** `Entretiens structurés avec les opérationnels et les managers pour faire remonter les tâches répétitives, les irritants et les données disponibles.`
  - **Composante — Scoring de maturité sur 24 points :** `Une grille de maturité IA propriétaire note où en est l'entreprise : outils, données, compétences, usages. Chaque opportunité est scorée par ROI.`
  - **Composante — Restitution COMEX :** `Présentation à votre direction : score de maturité, cas d'usage priorisés, roadmap chiffrée — des décisions que votre direction peut prendre le jour même.`
- **Rationale :** nomme les quatre composantes concrètes de l'audit. La grille /24 est l'actif propriétaire citable. *(Fix d'audit : la restitution passe de « Des décisions, pas un rapport qui dort » à la formulation positive « des décisions… le jour même » — dé-empilage.)* [to validate] : la note /diagnostic-ia mentionne un score /20 — incohérence à réconcilier ; cette page garde /24 (page.tsx + stratégie llms).

### 4.3 — « Deux semaines, jour par jour » (déroulé / calendrier)
- **Composant :** sections[1] + `etapes`
- **Fusion (fix d'audit) :** réécrit — le live répétait quasi verbatim les 4 composantes de §4.2. §4.2 répond *ce que fait l'AI Scan* ; §4.3 répond *quand ça se passe* (qui est dans la pièce, quel jour). Plus de copy de composante dupliqué, plus de « travail réel / rapport qui dort » répétés.
- **Proposé (FR) :**
  - **badge :** `Le calendrier` — **title :** `Deux semaines, jour par jour` — **description :** `L'AI Scan est volontairement court : un cycle rapide garde les constats frais. Voici qui on rencontre et quand.`
  - **01 — Jours 1-3 · Kickoff & cartographie :** `Kickoff avec votre sponsor, puis une session de travail avec chaque département pour cartographier les workflows tels qu'ils tournent vraiment.`
  - **02 — Jours 4-5 · Interviews :** `Entretiens structurés avec les opérationnels et les managers qui font tourner les processus au quotidien, plus une revue des données disponibles.`
  - **03 — Jours 6-8 · Scoring & modélisation ROI :** `On score votre maturité IA sur 24 points (outils, données, compétences, usages) et on chiffre chaque opportunité par retour sur investissement.`
  - **04 — Jours 9-10 · Restitution COMEX :** `On présente le score de maturité, les cas d'usage priorisés et la roadmap chiffrée à votre direction.`
- **Rationale :** vrai calendrier (dates + qui est dans la pièce) plutôt qu'une seconde description des composantes. Le cycle court est justifié (« garde les constats frais »), pas un slogan.

### 4.4 — « Ce que vous avez en main à la fin » (livrables)
- **Composant :** sections[2] + `livrables`
- **Proposé (FR) — verbatim live :**
  - **badge :** `Les livrables` — **title :** `Ce que vous avez en main à la fin` — **description :** `Pas un rapport de 80 pages qui finit dans un tiroir. Des documents faits pour décider.`
  - **items :**
    1. `La cartographie de vos processus, département par département.`
    2. `Votre score de maturité IA sur 24 points, avec les axes de progression.`
    3. `Au minimum 3 cas d'usage à fort ROI, chiffrés et priorisés.`
    4. `Une roadmap structurée en horizons 3, 6 et 12 mois.`
    5. `Une présentation de restitution devant votre COMEX.`
    6. `La propriété intégrale de tous les livrables, exploitables avec ou sans nous.`
- **Rationale :** livrables concrets et dénombrables. « Pas un rapport de 80 pages dans un tiroir » est la ligne d'opinion qui différencie du conseil classique (instance signature conservée).

### 4.5 — « Le risque est pour nous, pas pour vous » (garantie)
- **Composant :** sections[3] + `GarantieSection`
- **Proposé (FR) — verbatim live :**
  - **card title :** `Pas de roadmap claire = remboursé à 100 %`
  - **card body :** `Si l'audit ne débouche pas sur une roadmap claire avec au minimum 3 cas d'usage à fort ROI, vous êtes intégralement remboursé. C'est écrit au contrat. Un audit qui ne permet pas de décider ne vaut rien. Nous prenons ce risque à votre place.`
- **Rationale :** la garantie de remboursement est le déclencheur BOFU ; énoncée franchement avec le seuil exact. L'owner du copy garantie est /garanties — ici seulement l'instance spécifique à l'audit.

### 4.6 — « De la roadmap aux systèmes en production » (et après)
- **Composant :** sections[4] + `ApresSection`
- **Proposé (FR) — verbatim live :**
  - **p1 :** `L'audit est la première phase de notre méthode. La roadmap en main, deux options : vous exécutez en interne (tout vous appartient) ou vous passez en phase Build avec nous.`
  - **p2 :** `En phase Build, un ingénieur IA dédié full-time construit les systèmes identifiés : 1 à 2 systèmes par mois, en production, avec 2 heures de formation par semaine pour vos équipes. Garantie d'impact concret sous 30 jours, sinon l'accompagnement est prolongé gratuitement.`
  - **lien inline :** `Voir les 3 phases de l'offre AI PARTNER` → /ai-transformation
- **Rationale :** relie l'offre d'entrée au programme principal sans forcer la vente ; le « tout vous appartient » réduit le frein BOFU.

## 5. FAQ
Slot FAQ : OUI — `faq-accordion.tsx` + JSON-LD FAQPage. **Copy live conservé verbatim.**

| # | Question (FR) | Réponse (FR) |
|---|---|---|
| 1 | Combien de temps dure un audit IA ? | Notre AI Scan dure 1 à 2 semaines selon la taille de l'entreprise et le nombre de départements couverts. C'est volontairement court : un audit qui traîne trois mois produit un rapport déjà périmé. En deux semaines, vous avez la cartographie, le scoring de maturité et une roadmap actionnable présentée à votre comité de direction. |
| 2 | Qui est interviewé pendant l'audit ? | Les personnes qui exécutent réellement les processus, pas seulement les managers. Nous interrogeons chaque département concerné : les opérationnels décrivent les tâches répétitives telles qu'elles se passent vraiment, la direction apporte la vision et les priorités. C'est ce croisement qui révèle les écarts entre le processus officiel et le travail réel : là où se cachent les meilleurs gains. |
| 3 | Que contient la roadmap ? | Une feuille de route chiffrée et priorisée, avec au minimum 3 cas d'usage à fort ROI. Pour chaque cas d'usage : le processus concerné, le gain estimé, la complexité de mise en œuvre et l'ordre de déploiement recommandé. Elle est structurée en horizons 3, 6 et 12 mois et présentée directement à votre COMEX, avec le score de maturité IA de l'entreprise sur 24 points. |
| 4 | Que se passe-t-il si l'audit ne révèle rien ? | C'est couvert par une garantie écrite : si l'audit ne débouche pas sur une roadmap claire avec au minimum 3 cas d'usage à fort ROI, vous êtes remboursé à 100 %. En pratique, une entreprise de 50 personnes et plus a toujours des processus automatisables. La seule question est de savoir lesquels prioriser. |
| 5 | L'audit engage-t-il sur la suite ? | Non. La roadmap et tous les livrables vous appartiennent intégralement : vous pouvez les exécuter en interne ou avec un autre prestataire. Si vous continuez avec nous, l'audit devient la première phase de l'accompagnement AI PARTNER : un ingénieur dédié construit les systèmes identifiés, avec une garantie d'impact à 30 jours. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Vos 3 premières opportunités IA | /outils/scanner-opportunites-ia | connexe (existant) — version express |
| Ce qui vient après l'audit : build & formation | /ai-transformation | connexe (existant) |
| Meilleures agences IA en France | /blog/meilleures-agences-ia-france | connexe (existant) |
| Notre conseil en IA | /agence-ia | lien cluster (nouveau) |
| Réserver un diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA primaire :** `Prêt à cartographier vos opportunités ?` → /contact
- **CTA subtitle :** `30 minutes pour analyser vos workflows et repartir avec vos 3 premiers quick wins IA, que vous travailliez avec nous ou non.`

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `L'audit IA d'AI Makers (l'AI Scan) cartographie vos processus, score votre maturité IA sur une grille propriétaire /24 et livre en 1-2 semaines une roadmap chiffrée avec au minimum 3 cas d'usage à fort ROI en horizons 3, 6 et 12 mois. Si la roadmap n'est pas claire, l'audit est remboursé à 100 %.`
- **Entrée llms.txt (FR) :** `[Audit IA entreprise](https://aimakers.fr/audit-ia-entreprise) : l'AI Scan — cartographie des processus, score de maturité IA /24 et roadmap chiffrée de cas d'usage à fort ROI, livré en 1-2 semaines ou remboursé.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| AI Scan ; 1-2 semaines ; score de maturité /24 ; roadmap 3/6/12 mois ; 3+ cas d'usage | page.tsx + bloc citable (NOTE : /diagnostic-ia OG dit /20 → réconcilier) |
| Audit remboursé si pas de roadmap claire | public/llms.txt (canonique) |
| +50 entreprises / +200 systèmes | public/llms.txt (canonique) |
| 9,6/10 de satisfaction | site-config bookingProof / stat hero live |
| Phase Build : 1-2 systèmes/mois, 2h formation/semaine, garantie d'impact 30 jours | site-config homepageContent.offer |

## Corrections d'audit appliquées
- **Fusion §4.2/§4.3** — §4.2 garde les composantes « ce que fait un AI Scan » ; §4.3 réécrit en calendrier jour par jour (dates + qui est dans la pièce). Plus de double lecture des 4 mêmes items.
- **Title** — resserré à `Audit IA : opportunités en 2 semaines` (rend ≈49, marge vs plafond 60 ; voir §Reconciliation applied).
- **Meta** — réécrite pour ouvrir sur le primaire « audit IA » + next-step « Diagnostic gratuit » (151 car. ; voir §Reconciliation applied).
- **Dé-empilage des négations** — la restitution §4.2 passe en positif ; « Le travail réel, pas l'organigramme » gardé une seule fois (signature portante) ; « Pas un rapport de 80 pages dans un tiroir » (§4.4) et la ligne de remboursement (§4.5) gardées.

## À valider
- Échelle de maturité /24 vs /20 sur /diagnostic-ia — décision owner (`[to validate]`).
- Slug EN `/ai-readiness-assessment` et collision mot-clé : hors périmètre FR (route FR live inchangée).
- Seuil de garantie / remboursement : répétition de conformité nécessaire, intacte.

---

## Reconciliation applied

Passe de réconciliation FR (audits SEO 86/100 + anti-slop Clean −11).

**Changé :**
1. **Title (rule 1) — marge de sécurité :** l'ancien `Audit IA entreprise : opportunités en 2 semaines` rendait exactement 60 car. avec le suffixe (aucune marge). Resserré en `Audit IA : opportunités en 2 semaines` → rend ≈49. « entreprise » (100/mo long-tail) reste dans le H1 et la copie.
2. **Meta (rule 2) — primaire + next-step :** l'ancienne meta ouvrait sur « AI Scan » (terme de marque), sans le mot-clé searchable ni CTA. Réécrite : `Un audit IA (AI Scan) cartographie vos workflows en 1-2 semaines : score de maturité /24 et roadmap avec 3+ cas d'usage à fort ROI. Diagnostic gratuit.` (151 car., primaire en tête, next-step).
3. **Mots-clés FR (rule 5) — corrections de volumes :** `audit ia` 400/n-a → **600/KD1** (terme money-page primaire, conservé) ; `automatisation des processus` 250 → **600/KD5** (aligné sur la page sœur) ; `audit intelligence artificielle` « minimal » → **200**.

**Délibérément gardé :**
- **Négations « X, pas Y » (rule 4) :** deux instances signature (« Le travail réel, pas l'organigramme » §4.2 ; « Pas un rapport de 80 pages qui finit dans un tiroir » §4.4) conservées — chacune porte un verdict concret différenciant ; la restitution §4.2 avait déjà été aplatie en positif. Non saturé (page hors périmètre de dé-empilage rule 4).
- **Répétition de la garantie de remboursement** (§4.5 / FAQ Q4 / GEO) : répétition de conformité/garantie nécessaire — PROTECT, non dé-dupliquée.
- **Tag `[to validate]`** sur l'incohérence /24 vs /20 : marqueur d'honnêteté, conservé (déjà au bon littéral — rien à normaliser).

**Pour décision owner (hors périmètre édition) :** échelle de maturité **/24 vs /20** (`/diagnostic-ia` OG dit /20 ; cette page + megaMenu + home disent /24) — une seule valeur à retenir site-wide (/24 majoritaire). Tracké `[to validate]`.
