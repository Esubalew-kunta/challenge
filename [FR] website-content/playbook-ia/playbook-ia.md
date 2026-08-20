# Playbook AI-First (/playbook-ia) — Master de contenu FR

> Localisation FR du master EN scellé. Le FR est la langue primaire live : le copy provient de `src/lib/playbook-config.ts` (`playbookContent.*`) et de `src/app/playbook-ia/page.tsx`, repris mot pour mot. On conserve chaque affirmation, chiffre et tag `[to validate]` à l'identique et on n'applique que les corrections d'audit déjà portées dans le master EN (suffixe de marque, réconciliation secteurs 6→8, mur de stats `[to validate]`).

## 1. En-tête de page
- **Route (FR, live) :** /playbook-ia
- **Objet :** Landing page lead magnet : playbook PDF de 48 pages, capture email.
- **Rôle SEO :** conversion (lead magnet) — pression mot-clé minimale.
- **Étape funnel :** TOFU→MOFU capture

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | playbook ia | 10 (global 40) | — | Ahrefs FR, 2026-07 |
| Secondaire | playbook ia pdf | TBD (Ahrefs FR) | — | Ahrefs FR, 2026-07 |

> **Décision mot-clé — pression minimale ; c'est un actif de conversion.** « playbook ia » (10/mois en France, 40 en global) et « playbook ia pdf » sont des requêtes à très faible volume en France (magnet/BOFU, pas des piliers de trafic). Ne pas juger la page sur ce terme. Une landing de lead magnet vit et meurt sur l'offre et le formulaire de capture, pas sur le classement d'une tête de requête : l'essentiel du trafic viendra du maillage interne (nav, page d'accueil, blog), du paid et de l'email. Le copy est donc optimisé pour la conversion email et pour nommer le livrable exact — pas bourré pour un terme quasi inexistant. Volumes/difficultés FR marqués `TBD (Ahrefs FR)` : pas de chiffre FR réel à ce stade, à renseigner avant publication (ne pas réutiliser les volumes US du master EN). Signalé à l'Agent 3 comme page de conversion volontairement faible en mots-clés.

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | Le Playbook AI-First : guide complet de transformation IA 2026 \| AI Makers | Le Playbook AI-First — Guide IA gratuit en PDF *(46 ; rend ~58 avec le suffixe `\| AI Makers` du template — marque non écrite à la main)* |
| Meta description (140–160 car.) | 48 pages, 8 exercices pratiques, 5 systèmes IA. Le guide que 88% des dirigeants auraient voulu avoir. Diagnostic gratuit inclus. | Un playbook IA gratuit de 48 pages pour structurer votre transformation : 8 exercices, 5 systèmes IA, 9 niveaux de maturité, un plan 90 jours. Reçu par email. *(159)* |
| H1 | Le guide que 88% des dirigeants auraient voulu avoir avant de commencer avec l'IA. | Le guide que 88% des dirigeants auraient voulu avoir avant de commencer avec l'IA. |
| URL slug | /playbook-ia | /playbook-ia |

## 4. Sections & contenu
Source du copy : `src/lib/playbook-config.ts` (`playbookContent.*`). Page : `src/app/playbook-ia/page.tsx` ; capture via `shared/lead-capture.tsx`. Copy repris verbatim du live ; on conserve chaque claim et chiffre à l'identique.

### 4.1 — Hero
- **Composant :** `playbookContent.hero`
- **Champs :** badge, title, subtitle, ctaPrimary (#recevoir-playbook), ctaSecondary (/diagnostic-ia), socialProof
- **Live (FR) :** accroche à 88 %.
- **Proposé (FR) :**
  - **badge :** `> NOUVEAU : Le Playbook AI-First 2026`
  - **title :** `Le guide que 88% des dirigeants auraient voulu avoir avant de commencer avec l'IA.`
  - **subtitle :** `48 pages. 8 exercices pratiques. 5 systèmes IA clés en main. Le seul guide qui ne vous vend pas un rêve : il vous donne un plan.`
  - **ctaPrimary :** `Recevoir le playbook (PDF)` → #recevoir-playbook
  - **ctaSecondary :** `Faire mon diagnostic IA gratuit` → /diagnostic-ia
  - **socialProof :** `Déjà utilisé par +300 dirigeants` *(voir §9 — [to validate])*
- **Rationale :** Copy live conservé mot pour mot. Garde l'accroche 88 % et le compte exact du livrable. « ne vous vend pas un rêve : il vous donne un plan » est le point de vue assumé du FR ; conservé, il pose la promesse que le PDF doit tenir. Nombre de pages = **48** (source de vérité `playbook-config.ts`) ; le « 43 pages » du megamenu est l'anomalie à réconcilier — voir §9.

### 4.2 — Stats (3)
- **Composant :** `playbookContent.stats`
- **Champs :** 3 blocs stat {value, label, sublabel}
- **Live (FR) :** stats « électrochoc » [to validate sources].
- **Proposé (FR) :**
  - **Stat 1 :** `88%` — `des entreprises utilisent l'IA` — `mais seulement 5% en tirent de la valeur` `[to validate — source]`
  - **Stat 2 :** `$700 Mds` — `investis en IA` — `impact PIB : presque zéro` `[to validate — source]`
  - **Stat 3 :** `30%` — `des projets IA abandonnés` — `après le proof of concept` `[to validate — source]`
  - **⚠ Ne pas afficher comme pourcentages bruts :** aucune de ces trois données n'a de source dans `playbook-config.ts`. Attacher une citation nommée (ex. McKinsey/BCG) ou reformuler en qualitatif avant publication — voir §9.
- **Rationale :** Copy live conservé. Les trois chiffres sont des claims externes sans source dans le config — conservés mais signalés [to validate sources] ici et en §9 ; citer ou adoucir avant publication. **Mur de stats : tags `[to validate]` préservés à l'identique du master EN.**

### 4.3 — Problème
- **Composant :** `playbookContent.problem`
- **Champs :** badge, title, points[3]
- **Live (FR) :** « Vous avez ChatGPT. Et maintenant ? »
- **Proposé (FR) :**
  - **badge :** `Le problème`
  - **title :** `Vous avez ChatGPT. Et maintenant ?`
  - **Point 1 — ChatGPT sans système = IA fantôme :** `Chaque employé bidouille dans son coin. Rien ne se cumule, rien ne s'améliore. C'est comme donner un téléphone à chaque employé sans installer d'email.`
  - **Point 2 — Automatiser un mauvais process = accélérer la médiocrité :** `Ajouter l'IA à un workflow qui n'a pas été repensé, c'est paver des chemins de terre avec de l'asphalte. Les leaders redesignent d'abord, automatisent ensuite.`
  - **Point 3 — Viser la réduction de coûts = 13 points de succès en moins :** `Les entreprises qui cadrent l'IA en 'cost savings' réussissent 50% du temps. Celles qui visent la croissance : 63%. La différence transforme des PowerPoints en résultats.` `[to validate — source pour 50%/63%]`
- **Rationale :** Copy live conservé mot pour mot, y compris les analogies imagées (IA fantôme, chemins de terre/asphalte) — c'est la part mémorable, non-slop. Les chiffres 50 %/63 %/13 points (et le « 95 % des projets IA » en §4.4) n'ont pas de source dans le config → tag `[to validate]` visible ; citer ou adoucir avant publication, ne pas présenter comme un fait acquis.

### 4.4 — Ce que contient le playbook (6 chapitres)
- **Composant :** `playbookContent.preview`
- **Champs :** badge, title, items[6] {number, title, description}
- **Live (FR) :** « 48 pages de concret, zéro bullshit. »
- **Proposé (FR) :**
  - **badge :** `Ce que contient le Playbook`
  - **title :** `48 pages de concret, zéro bullshit.`
  - **01 — Le Wake-Up Call :** `Les chiffres que personne ne vous montre, et les 3 erreurs qui font échouer 95% des projets IA.` `[to validate — source pour 95%]`
  - **02 — Les 9 Niveaux de Maturité :** `Où en est votre entreprise ? Une pyramide pour vous situer et voir le chemin.`
  - **03 — Le Modèle AI-Native :** `Ce que Y Combinator et les leaders mondiaux ont compris avant tout le monde.`
  - **04 — Les 5 Systèmes IA :** `Les 5 briques que toute entreprise compétitive doit avoir, expliquées simplement.`
  - **05 — Confidentialité & Souveraineté :** `AI Act, données, modèles : ce que votre entreprise doit savoir et faire.`
  - **06 — Votre Plan d'Action :** `Score de préparation /20, quick wins par département, roadmap 90 jours personnalisée.`
- **Rationale :** Copy live conservé. Titres de chapitres gardés au 1:1 pour que la promesse colle au PDF réel. « Score /20 » cohérent avec l'exercice de scoring du playbook (§4.5) et l'échelle du diagnostic. Référence Y Combinator conservée comme dans le config (claim externe, cadrage à faible risque).

### 4.5 — 8 exercices pratiques
- **Composant :** `playbookContent.exercises`
- **Champs :** badge, title, subtitle, items[8] {name, type, time, description}
- **Live (FR) :** « Pas juste un rapport : un kit de travail. »
- **Proposé (FR) :**
  - **badge :** `8 exercices pratiques inclus`
  - **title :** `Pas juste un rapport : un kit de travail.`
  - **subtitle :** `Chaque exercice est conçu pour être fait pendant la lecture. Le lecteur repart avec des actions concrètes, pas des théories.`
  - **Exercices :**
    - `Audit Express 5 min` · Calculateur · 5 min · `Calculez combien l'inaction vous coûte par mois`
    - `Test de Maturité IA` · Auto-diagnostic · 2 min · `Positionnez-vous sur la pyramide des 9 niveaux`
    - `Matrice Temps/Valeur` · Exercice · 10 min · `Identifiez vos quick wins IA en classant vos tâches`
    - `Exercice Amodei` · Réflexion · 5 min · `Décomposez votre poste en 5 composantes IA`
    - `Les 4 Paliers` · Framework · Lecture · `De ChatGPT au système intégré, avec checklist`
    - `Quick Wins par Département` · Actions · Immédiat · `1 action faisable lundi pour chaque département`
    - `Score de Préparation` · Scoring · 2 min · `10 questions, score /20, diagnostic personnalisé` *(featured)*
    - `Plan 30-60-90` · Roadmap · Lecture · `Votre plan d'action pour les 90 prochains jours`
- **Rationale :** Copy live conservé. Liste d'exercices gardée exacte — la promesse (« kit de travail ») est tenue par ces 8 items nommés. « Exercice Amodei » conservé comme framework nommé (renvoie à l'idée de décomposition de tâches de Dario Amodei ; faible risque, pas de citation fabriquée).

### 4.6 — Crédibilité
- **Composant :** `playbookContent.socialProof`
- **Champs :** title, stats[3]
- **Live (FR) :** « Construit à partir de +200 missions terrain. » — stats live : `+200 missions IA réalisées` · `+2 500 professionnels formés` · `6 secteurs couverts`
- **Proposé (FR) :**
  - **title :** `Construit à partir de +200 missions terrain.`
  - **stats :** `+200 systèmes IA déployés` · `+2 500 professionnels formés` · `8 secteurs couverts`
- **Rationale :** Titre conservé verbatim. +200 et +2 500 sont canoniques (`llms.txt` : « +200 systèmes IA déployés en production », « +2 500 professionnels formés »). Reformulé « +200 missions IA réalisées » → « +200 systèmes IA déployés » pour coller au chiffre canonique exact (correction d'audit portée dans le master EN). Nombre de secteurs porté à **8** (canonique — `secteurs.ts` a 8 entrées ; le « 6 secteurs » live est l'anomalie selon `_cross-page-findings.md §5`).

### 4.7 — Capture email
- **Composant :** `shared/lead-capture.tsx` + `playbookContent.capture`
- **Champs :** anchor, title, subtitle, champ email, CTA, message de succès + mention RGPD
- **Live (FR) :** « Recevez le playbook par email ».
- **Proposé (FR) :**
  - **title :** `Recevez le playbook par email`
  - **subtitle :** `Indiquez votre prénom et votre email professionnel. Vous recevez le playbook complet (48 pages) directement dans votre boîte mail.`
  - **ctaLabel :** `Recevoir le playbook`
  - **successTitle :** `C'est noté !`
  - **successMessage :** `Vous allez recevoir le playbook par email. Pensez à vérifier vos spams si vous ne voyez rien d'ici quelques minutes.`
  - **Mention RGPD/consentement (à ajouter si absente) :** `Nous utilisons votre email uniquement pour vous envoyer le playbook et, occasionnellement, des ressources IA. Désinscription en un clic. Aucun partage avec des tiers.`
- **Rationale :** Copy live conservé. Page de capture de données → finalité explicite + désinscription en un clic, dans le ton confidentialité de la page diagnostic. Microcopy de consentement signalée comme ajout si le formulaire live ne la porte pas encore.

### 4.8 — CTA final
- **Composant :** `playbookContent.finalCta`
- **Champs :** title, subtitle, 2 CTA, urgency
- **Live (FR) :** « Le plan complet est dans le playbook. »
- **Proposé (FR) :**
  - **title :** `Le plan complet est dans le playbook.`
  - **subtitle :** `48 pages pour structurer votre transformation IA. Et si vous voulez situer votre entreprise, le diagnostic prend 2 minutes.`
  - **ctaPrimary :** `Recevoir le playbook (PDF)` → #recevoir-playbook
  - **ctaSecondary :** `Faire mon diagnostic IA gratuit` → /diagnostic-ia
  - **urgency :** `Édition mars 2026. Mise à jour chaque trimestre.`
- **Rationale :** Copy live conservé. Ligne de mise à jour trimestrielle gardée — vrai signal de fraîcheur, pas une rareté fabriquée.

## 5. FAQ
Pas de bloc FAQ dans le template.

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Faire mon diagnostic IA gratuit | /diagnostic-ia | CTA secondaire (existant) |
| Nous contacter | /contact | escalade (existant) |

## 7. CTA
- **CTA principal :** « Recevoir le playbook (PDF) » (capture email).
- **CTA secondaire :** « Faire mon diagnostic IA gratuit » → /diagnostic-ia.

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `Le Playbook AI-First est le guide gratuit de 48 pages d'AI Makers pour structurer une transformation IA. Il contient 6 chapitres (du wake-up call à un plan d'action à 90 jours), 8 exercices pratiques à faire pendant la lecture, un modèle de maturité à 9 niveaux et les 5 systèmes IA clés d'une entreprise compétitive. Construit à partir de +200 systèmes IA déployés et +2 500 professionnels formés, il est envoyé par email après un court formulaire.`
- **Entrée llms.txt (FR) :** `[Playbook AI-First](https://aimakers.fr/playbook-ia) : le guide gratuit de transformation IA d'AI Makers (48 pages) — 6 chapitres, 8 exercices, un modèle de maturité à 9 niveaux et un plan 90 jours, envoyé par email.`

## 9. Faits utilisés
| Fait / chiffre | Source | Statut |
|---|---|---|
| 48 pages / 8 exercices / 5 systèmes IA / 6 chapitres / 9 niveaux de maturité | playbook-config.ts (source de vérité) | canonique |
| **Incohérence 48 vs 43 pages** | playbook-config.ts (48) vs site-config.ts megaMenu (43) | à réconcilier ; le FR retient 48 |
| 88 % utilisent l'IA / 5 % en tirent de la valeur ; 700 Mds $ investis / impact PIB ~nul ; 30 % abandonnés après le PoC | playbook-config.ts | **[to validate sources]** — mur de stats |
| 50 % vs 63 % de réussite (coûts vs croissance), écart de 13 points | playbook-config.ts | **[to validate sources]** |
| 95 % des projets IA échouent ; claim Y Combinator / AI-native | playbook-config.ts | cadrage externe, **[to validate]** |
| +200 systèmes IA déployés / +2 500 professionnels formés | public/llms.txt (canonique) | canonique |
| 8 secteurs couverts | secteurs.ts = 8 entrées (canonique) ; « 6 secteurs » live réconcilié à 8 selon `_cross-page-findings.md §5` | canonique |
| +300 dirigeants (social proof) | playbook-config hero | **[to validate]**, absent de llms.txt |
| Score /20 (préparation) | playbook-config | cohérent avec l'échelle /20 du diagnostic |

## Localisation appliquée
Localisé depuis le master EN scellé (batch FR). Le FR étant la langue source live, le copy est repris verbatim de `playbook-config.ts` / `page.tsx` ; les corrections d'audit portées dans le master EN sont conservées telles quelles :

- **Dé-empilement des négations (slop §2.1, 3× → 1) :** conservé la négation la plus forte du hero (« Le seul guide qui ne vous vend pas un rêve : il vous donne un plan »). Aplati le titre exercices (garde la forme live « Pas juste un rapport : un kit de travail. »). La meta description se clôt sur une étape suivante (« Reçu par email. ») plutôt que sur une troisième négation.
- **Double suffixe de marque (SEO §2a) :** retiré le `| AI Makers` écrit à la main du champ Title (le template l'ajoute une fois ; le live rend 54+ avec le suffixe). Title proposé = `Le Playbook AI-First — Guide IA gratuit en PDF`.
- **Secteurs 6 → 8 (canonique, `_cross-page-findings.md §5`) :** bloc crédibilité et §9 lisent désormais « 8 secteurs couverts » (secteurs.ts = 8 entrées, source de vérité). Nombre de pages maintenu à **48** ; `site-config.ts:111` « 43 pages » est un fix dev, pas du copy.
- **Mur de stats `[to validate]` (SEO 🟠 / remédiation slop) :** tags `[to validate — source]` visibles conservés en ligne sur le mur de stats §4.2 (88 %/5 %, 700 Mds $, 30 %), la carte 50 %/63 % de §4.3 et la ligne « 95 % » du chapitre §4.4, plus l'instruction « ne pas afficher comme pourcentages bruts ». Citer-ou-adoucir reste une action propriétaire ; les chiffres ne sont plus présentés comme des faits acquis. **Tags préservés exactement comme le master EN les a laissés.**
- **CONSERVÉ (protégé) :** les analogies porteuses de sens (« IA fantôme », « paver des chemins de terre avec de l'asphalte »), le signal de fraîcheur « Édition mars 2026, mise à jour chaque trimestre », la spec du livrable (48/8/5/9, exercices nommés), le social proof « +300 dirigeants » avec son tag `[to validate]` existant, et les chiffres canoniques +200/+2 500.
- **Décisions dev / propriétaire (hors copy) :** microcopy de consentement RGPD dans `lead-capture.tsx` (TICKET-GDPR-CONSENT) ; `site-config.ts:111` 43→48 ; vérifier-ou-retirer « +300 dirigeants » ; sourcer le mur de stats.

## Reconciliation applied
Réconciliation des deux audits FR (SEO 70/100 + anti-slop **Seasoned, net 9** — seule page non-Clean du corpus FR). Le master EN portait déjà l'essentiel ; vérifié et complété.
- **Mur de stats (dette d'édition principale) :** chaque chiffre porte un `[to validate]` visible — 88 %/5 % (§4.2), 700 Mds $ (§4.2), 30 % (§4.2), 50 %/63 %/13 points (§4.3), 95 % (§4.4), +300 dirigeants (§4.1). Instruction « ⚠ Ne pas afficher comme pourcentages bruts » présente en §4.2. Citer-ou-adoucir = action propriétaire. Tags préservés à l'identique du master EN.
- **Valeurs canoniques qui tranchent :** nombre de pages = **48** (playbook-config.ts = source de vérité ; le « 43 » du megamenu est un fix dev, pas du copy) ; **8 secteurs** (secteurs.ts = 8 entrées ; « 6 » live réconcilié) ; « +200 missions » → « +200 systèmes IA déployés » (llms.txt canonique) ; +2 500 formés canonique.
- **Titre :** suffixe manuel retiré + raccourci (`Le Playbook AI-First — Guide IA gratuit en PDF`, ~58 car. rendus). OG title à corriger côté dev. Meta = 159 car. (dans le budget).
- **Mot-clé FR :** `playbook ia` = **10** (global 40) renseigné — actif de conversion, pression minimale.
- **« X, pas Y » :** dé-empilé à 1 instance load-bearing conservée (« Le seul guide qui ne vous vend pas un rêve : il vous donne un plan »). Titre exercices aplati sur la forme live.
- **PROTÉGÉ (conservé) :** analogies (« IA fantôme », « paver des chemins de terre avec de l'asphalte »), POV « zéro bullshit », signal de fraîcheur « Édition mars 2026, mise à jour chaque trimestre », spec du livrable (48/8/5/9 + exercices nommés), chiffres canoniques +200/+2 500.
- **Décision propriétaire en attente :** sourcer le mur de stats (McKinsey/BCG/Gartner/Y Combinator) ou requalifier en qualitatif ; vérifier « +300 dirigeants » ; `site-config.ts:111` 43→48 ; microcopy RGPD (TICKET-GDPR-CONSENT).
