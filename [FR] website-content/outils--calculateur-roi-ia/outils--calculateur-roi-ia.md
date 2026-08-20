# Calculateur ROI IA (/outils/calculateur-roi-ia) — Master de contenu FR

> Localisation FR du master EN. Le FR est la langue primaire live : le copy provient de `src/app/outils/calculateur-roi-ia/page.tsx` et `src/components/outils/roi-calculator.tsx` (repris mot pour mot). Les hypothèses affichées collent aux constantes réelles du composant (vérifiées).

## 1. En-tête de page
- **Route (FR, live) :** /outils/calculateur-roi-ia
- **Objet :** Calculateur de ROI interactif (heures + € récupérables). Aimant-outil qui capte l'intention « combien l'IA peut nous faire gagner » et aiguille vers un diagnostic gratuit.
- **Rôle SEO :** aimant-outil (terme commercial-outil primaire FR)
- **Étape funnel :** TOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | calculateur roi ia | ~0 (intention exacte) | — | Ahrefs FR, 2026-07 |
| Secondaire | roi ia | TBD (Ahrefs FR) | TBD (Ahrefs FR) | Ahrefs, 2026-07 |
| Secondaire | calculateur roi | 70 (finance générique) | KD 2 | Ahrefs FR, 2026-07 (reframe large uniquement — hors intention) |

> **Décision mot-clé :** « calculateur roi ia » est le terme d'intention exacte qui correspond à ce que fait l'outil et que la page peut posséder en propre — c'est le H1 et le slug. « roi ia » est le frère informationnel (mention titre/FAQ, pas H1). « calculateur roi » est une requête finance générique qu'on ne battra pas et dont l'intention ne colle pas : à garder comme tournure naturelle, pas comme cible. Le calculateur compte en **euros** et l'hypothèse charges patronales ×1,45 est spécifique à la France — cohérent avec le marché FR live. Volumes/difficultés FR à confirmer côté Ahrefs FR (`TBD`) — ne pas fabriquer de chiffres.

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | Calculateur ROI IA : combien votre entreprise peut-elle gagner ? *(~64 car. hors suffixe — **dépasse le budget**, rend ~76 avec `\| AI Makers`)* | Calculateur ROI IA : heures et euros libérés *(44 ; rend 56 avec le suffixe `\| AI Makers` du template — marque non écrite à la main)* |
| Meta description (140–160 car.) | Estimez en 30 secondes les heures et les euros que l'IA peut libérer dans votre entreprise : effectif, salaires, adoption. Calcul transparent, hypothèses prudentes, gratuit. *(~178 car. — **dépasse le budget**)* | Estimez en 30 secondes les heures et les euros que l'IA peut libérer : effectif, salaires, adoption. Calcul transparent, hypothèses prudentes, gratuit. *(~151 car., dans le budget)* |
| H1 | Combien d'heures l'IA peut-elle libérer dans votre entreprise ? | Combien d'heures l'IA peut-elle libérer dans votre entreprise ? |
| URL slug | /outils/calculateur-roi-ia | /outils/calculateur-roi-ia |

## 4. Sections & contenu
Copy : inline `src/app/outils/calculateur-roi-ia/page.tsx` ; composant calculateur `src/components/outils/roi-calculator.tsx`. FR live repris verbatim ; hypothèses = constantes réelles du composant.

### 4.1 — Hero + calculateur
- **Composant :** `page.tsx` + `outils/roi-calculator.tsx`
- **Champs :** badge, H1, intro, 4 curseurs, 3 résultats, repère, CTA calculateur
- **Live (FR) :** Promesse d'estimation en 30 secondes.
- **Proposé (FR) :**
  - **badge :** `Outil gratuit`
  - **H1 :** `Combien d'heures l'IA peut-elle libérer dans votre entreprise ?`
  - **intro (answer-first) :** `Quatre curseurs, un ordre de grandeur honnête. Ajustez les hypothèses à votre réalité : le calcul se met à jour en direct.`
  - **libellés curseurs (FR) :** `Collaborateurs concernés` (5–500) · `Salaire brut annuel moyen` (25 000 €–90 000 €) · `Heures gagnées par semaine et par personne` (1–10) · `Part des équipes qui adopte réellement` (30–100 %)
  - **libellés résultats (FR) :** `{X} h libérées par an ({N} collaborateurs actifs)` · `{€} de temps de travail valorisé (salaires chargés)` · `{X,X} ETP d'équivalent temps plein réinvestis dans le métier`
  - **repère curseurs (FR) :** `Repère : le gain moyen constaté chez nos clients formés est de 7 heures par semaine et par collaborateur. La valeur par défaut (4 h) est volontairement prudente.`
  - **CTA calculateur (dans le composant) :** `Valider ce potentiel en 30 minutes` → réservation (sous-texte : `Diagnostic gratuit, que vous travailliez avec nous ou non.`)
- **Rationale :** L'intro décrit exactement ce que fait l'outil — quatre entrées, trois sorties — conforme à `roi-calculator.tsx`. Le repère 7 h/semaine est le chiffre canonique llms.txt, cadré comme référence client, pas comme valeur par défaut (qui reste à 4 h, par prudence).

### 4.2 — « Nos hypothèses, en toutes lettres »
- **Composant :** `page.tsx`
- **Champs :** eyebrow, titre, intro, 4 hypothèses, ligne de bouclage
- **Live (FR) :** Méthodologie transparente.
- **Proposé (FR) :**
  - **eyebrow :** `/ Le calcul, à découvert` — **titre :** `Nos hypothèses, en toutes lettres`
  - **intro :** `Un calculateur qui gonfle les chiffres dessert tout le monde. Voici exactement comment celui-ci compte :`
  - **hypothèses (4) :**
    - `47 semaines travaillées effectives par an (congés et fériés déduits)`
    - `Coût employeur estimé à 1,45 × le salaire brut (charges patronales)`
    - `Base 35 heures hebdomadaires pour le coût horaire et les ETP`
    - `Le taux d'adoption pondère l'effectif : tout le monde n'utilise pas l'IA au même rythme`
  - **ligne de bouclage :** `Pour passer de l'estimation à un chiffre engageant sur vos processus réels : réservez le diagnostic gratuit (→ /contact) ou commencez par le diagnostic de maturité IA en 10 questions (→ /diagnostic-ia).`
- **Rationale :** Chaque hypothèse mappe une constante réelle du code — 47 semaines (`HEURES_PAR_AN`), ×1,45 (`CHARGES_PATRONALES`), base 35 h (coût horaire et ETP), pondération par l'adoption. Aucun benchmark inventé. Le coût horaire live = `(salaire brut × 1,45) / (35 × 47)` ; l'ETP = `heures annuelles / (35 × 47)` (vérifié).

### 4.3 — FAQ
- **Composant :** `shared/faq-accordion.tsx` — voir §5

### 4.4 — Pour aller plus loin
- **Composant :** `shared/related-content.tsx`
- **Proposé (FR) :**
  - `Diagnostic IA en 2 minutes` → /diagnostic-ia — `Votre score de maturité IA et un plan d'action personnalisé.`
  - `Scanner d'opportunités IA` → /outils/scanner-opportunites-ia — `Vos 3 premières opportunités IA à partir de 3 questions.`
  - `L'offre Transformation IA` → /ai-transformation — `Comment on transforme ces heures gagnées en systèmes concrets.`

### 4.5 — CTA final
- **Composant :** `cta-section.tsx`
- **Proposé (FR) :**
  - **title :** `Le chiffre vous interpelle ?`
  - **subtitle :** `30 minutes pour valider le potentiel sur vos processus réels, avec les personnes qui déploient l'IA en production.`
  - **CTA principal :** `Réserver un diagnostic gratuit` → réservation · **secondaire :** `Diagnostic de maturité IA` → /diagnostic-ia
- **Rationale :** Relie le chiffre abstrait à une étape concrète suivante, sans slop.

## 5. FAQ
Bloc FAQ : OUI — `faq-accordion.tsx` + JSON-LD FAQPage.

| # | Question (FR, live) | Réponse (FR, live) |
|---|---|---|
| 1 | D'où vient le chiffre de 7 heures gagnées par semaine ? | C'est le gain moyen constaté chez nos clients dont les équipes ont été formées et outillées sur leurs tâches réelles : rédaction, synthèse, analyse de documents, reporting. Le calculateur démarre à 4 heures par prudence. Votre diagnostic affine ce chiffre pour votre contexte. |
| 2 | Ce calcul est-il fiable pour mon entreprise ? | C'est un ordre de grandeur, pas un engagement. La vraie réponse dépend de vos métiers, de vos outils et de vos processus. C'est exactement ce que mesure le diagnostic gratuit de 30 minutes : vos cas d'usage prioritaires et le gain réaliste pour chacun. |
| 3 | Les heures gagnées se transforment-elles vraiment en valeur ? | Seulement si elles sont réinvesties : plus de dossiers traités, plus de rendez-vous commerciaux, moins d'heures supplémentaires, moins de recrutements subis. C'est le rôle de l'accompagnement : transformer le temps libéré en résultats mesurables, pas en pause café. |
| 4 | Que se passe-t-il après le calcul ? | Rien d'automatique : pas d'email forcé, pas de relance. Si le chiffre vous interpelle, réservez le diagnostic gratuit : 30 minutes pour valider le potentiel sur vos processus réels, que vous travailliez avec nous ou non. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Diagnostic IA en 2 minutes | /diagnostic-ia | outil connexe |
| Scanner d'opportunités IA | /outils/scanner-opportunites-ia | outil connexe |
| L'offre Transformation IA | /ai-transformation | offre |
| Réserver un diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA principal :** « Le chiffre vous interpelle ? » → réservation (bouton : `Réserver un diagnostic gratuit`). CTA dans le composant : `Valider ce potentiel en 30 minutes`.

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `Le calculateur de ROI IA d'AI Makers estime les heures et la valeur annuelles qu'une entreprise peut récupérer avec l'IA. Vous réglez quatre paramètres — effectif, salaire brut moyen, heures gagnées par semaine et par personne, et taux d'adoption — et il renvoie les heures libérées par an, ce temps valorisé au coût salarial chargé, et les équivalents temps plein correspondants, à partir d'hypothèses volontairement prudentes (47 semaines travaillées, une valeur par défaut de 4 h face aux 7 h par semaine constatées chez les équipes formées par AI Makers). Il est gratuit, tourne côté navigateur et ne stocke rien.`
- **Entrée llms.txt (FR) :** `[Calculateur ROI IA](https://aimakers.fr/outils/calculateur-roi-ia) : estimez les heures et la valeur que l'IA peut libérer dans votre entreprise — calcul transparent et prudent, sans inscription.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| 7 h/semaine en moyenne (référence client) ; +2 500 formés ; +200 systèmes | public/llms.txt (canonique) |
| Valeur par défaut 4 h/semaine ; 47 semaines travaillées ; coût chargé ×1,45 ; base 35 h ; ETP = heures/(35×47) | src/components/outils/roi-calculator.tsx (vérifié) |
| Aucune donnée capturée par l'outil (100 % côté navigateur) | roi-calculator.tsx — aucun fetch/capture (vérifié) |
| Sortie en euros / charges patronales ×1,45 = spécifique France | roi-calculator.tsx — cohérent marché FR live |

## Localisation appliquée
Localisé depuis le master EN scellé (batch FR). Le FR étant la langue source live, le copy est repris verbatim de `page.tsx` + `roi-calculator.tsx` ; corrections d'audit appliquées au FR :

- **Title hors budget (corrigé) :** le Title live (~64 car. hors suffixe, ~76 rendu) dépasse le budget ≤60 incl. suffixe. Trimé à `Calculateur ROI IA : heures et euros libérés` (44 car. ; rend 56 avec le suffixe `| AI Makers` — marque non écrite à la main). Conserve le mot-clé exact « Calculateur ROI IA » en tête + la sortie réelle (heures et euros).
- **Meta hors budget (corrigée) :** la Meta live (~178 car.) dépasse ≤160 ; trimée à ~151 car. en retirant « dans votre entreprise » (redondant après le H1) et en conservant effectif/salaires/adoption + « Calcul transparent, hypothèses prudentes, gratuit ».
- **CONSERVÉ (protégé — transparence de méthode) :** toutes les hypothèses en toutes lettres (« 47 semaines travaillées », « 1,45 × le salaire brut », « base 35 heures », pondération par l'adoption), la couverture « Un calculateur qui gonfle les chiffres dessert tout le monde », les aveux (« pas d'email forcé, pas de relance », « un ordre de grandeur, pas un engagement », « pas en pause café ») et le cadrage repère-7 h vs défaut-4 h (canonique llms.txt). Cette page gagne sa présence par la méthode, pas la rhétorique — protégée.
- **Pas d'item RGPD** — le calculateur ne capture rien (aucun fetch dans le composant, vérifié).
- **Laissé pour le propriétaire / la dev (hors copy) :** sortie euros + base charges patronales ×1,45 (spécifique France) — cohérent avec le marché FR live ; pas de route EN (le slug FR live reste).

## Reconciliation applied
Réconciliation des deux audits FR (SEO **92/100** + anti-slop **Clean, net -8** — meilleure page-outil du corpus, méthode fidèle au code au chiffre près).
- **Titre :** déjà trimé (`Calculateur ROI IA : heures et euros libérés`, 44 car. → 56 rendus), mot-clé exact en tête, aucun suffixe manuel.
- **Meta :** déjà trimée à ~151 car. (live ~178).
- **Mots-clés FR :** `calculateur roi ia` = intention exacte, volume ~0 (aimant, pas pilier de trafic — H1 + slug la possèdent) ; `calculateur roi` = **70 / KD 2** (finance générique, hors intention — reframe large uniquement, pas une cible).
- **PROTÉGÉ (transparence de méthode — cœur de présence) :** hypothèses en toutes lettres (47 semaines, ×1,45, base 35 h, pondération adoption) mappées aux constantes réelles ; « Un calculateur qui gonfle les chiffres dessert tout le monde » ; cadrage repère-7 h vs défaut-4 h (choix délibéré du chiffre le moins flatteur) ; aveux « ordre de grandeur, pas un engagement », « pas d'email forcé, pas de relance », « pas en pause café ».
- **RGPD :** sans objet — l'outil ne capture rien (100 % côté navigateur, vérifié).
- **Aucune décision propriétaire en attente** : page prête après le trim title/meta (déjà appliqué).
