# Études de cas — hub (/etudes-de-cas) — Master de contenu FR

> Localisation FR du master EN. Le FR est la langue primaire live : le copy provient de `src/app/etudes-de-cas/page.tsx` + `src/lib/case-studies.ts` (cartes) + `homepageContent.proof` (mini-cas). On reprend le copy live verbatim et on n'applique que les corrections d'audit (suffixe de marque, meta trop longue).

## 1. En-tête de page
- **Route (FR, live) :** /etudes-de-cas
- **Objet :** Hub de preuve : résultats clients mesurés, routant vers les études de cas publiées (5 live ; 2 en draft/noindex exclues de l'index).
- **Rôle SEO :** hub de confiance
- **Étape funnel :** MOFU/BOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | étude de cas ia | ~0 (quasi nul) | — | tête de requête hub de confiance — intention exacte, pas un pilier de trafic |
| Secondaire | cas client ia / transformation ia étude de cas | TBD (Ahrefs FR) | TBD (Ahrefs FR) | longue traîne |
| Secondaire | exemples projets ia entreprise | TBD (Ahrefs FR) | TBD (Ahrefs FR) | longue traîne |

> **Décision mot-clé.** « étude de cas ia » est la bonne tête de requête pour un hub de preuve par l'**intention exacte**, mais son volume FR est **quasi nul** (Ahrefs FR — pas « modéré »). Ne pas juger la page sur ce terme : c'est une page à faible pression mot-clé. Le vrai poids de la page est comme preuve (avant/après mesuré) qui soutient les pages commerciales ; ce n'est pas un pilier de trafic. Slug /etudes-de-cas.

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | Études de cas IA : des résultats mesurés, pas des promesses | Études de cas IA : des résultats mesurés *(40 ; rend ~52 avec le suffixe `\| AI Makers` du template — marque non écrite à la main)* |
| Meta description (140–160 car.) | Operating systems IA, agents métier, visibilité GEO sur ChatGPT et Gemini, plateformes data : nos transformations IA détaillées avant / après / comment, dans la santé, la MedTech, l'éducation, l'agro-industrie et le logiciel. | Operating systems IA, agents métier, visibilité GEO sur ChatGPT et Gemini, plateformes data : nos missions IA en détail — avant, après, comment. *(140)* |
| H1 | Des résultats mesurés. Pas des promesses. | Des résultats mesurés. Pas des promesses. |
| URL slug | /etudes-de-cas | /etudes-de-cas |

## 4. Sections & contenu
Copy : inline `src/app/etudes-de-cas/page.tsx` + `src/lib/case-studies.ts` (cartes) + `homepageContent.proof` (mini-cas). Copy live repris verbatim.

### 4.1 — Hero
- **Composant :** `page.tsx`
- **Champs :** badge, H1, intro
- **Live (FR) :** positionnement anti-promesse.
- **Proposé (FR) :**
  - **badge :** `Résultats`
  - **H1 :** `Des résultats mesurés. Pas des promesses.`
  - **intro (answer-first) :** `Chaque mission a un KPI de référence, mesuré avant et après. Voici ce que ça donne.`
- **Rationale :** Repris verbatim du live. La négation de cadrage « Pas des promesses » est une posture de confiance déflationniste (variante concède/dégonfle de la liste KEEP du corpus) — conservée intacte.

### 4.2 — Cartes études de cas
- **Composant :** `page.tsx` + `case-studies.ts`
- **Champs :** carte par cas publié {cardTitle, secteur, teaser, lien}
- **Live (FR) :** Addictest, Sage, Fondation Force, ThinkONE, Gepromed (drafts masqués : cardio-check-up, delassus).
- **Proposé (FR) :** *(publiés uniquement ; secteur = `sector` live verbatim ; teaser = `title` live)*
  - `Addictest` — Éducation internationale · Maroc → /etudes-de-cas/addictest — `Addictest industrialise ses candidatures universitaires avec l'IA.`
  - `Sage` — Éditeur de logiciels de gestion · Europe → /etudes-de-cas/sage-geo — `Devenir la référence citée par les IA sur la facture électronique.`
  - `Fondation Force` — Fondation santé reconnue d'utilité publique · Strasbourg → /etudes-de-cas/fondation-force — `La fondation au Prix Nobel que les IA ne pouvaient pas lire.`
  - `ThinkONE` — Études et recherche marketing · Maroc → /etudes-de-cas/thinkone — `L'IA au cœur d'un cabinet d'études marketing.`
  - `Gepromed` — MedTech · Strasbourg → /etudes-de-cas/gepromed — `Un département IA complet pour une MedTech de 6 personnes.`
- **Lien de carte (live) :** `Lire l'étude de cas →`
- **Rationale :** Cinq cartes publiées uniquement — les deux cas draft/noindex (cardio-check-up, delassus) restent hors de l'index selon leur statut. Teasers = titre live de chaque cas, concis, chaque page enfant portant ses métriques complètes.

### 4.3 — « Explorer les missions en détail »
- **Composant :** `page.tsx`
- **Champs :** listing secondaire / liens d'approfondissement
- **Proposé (FR) :**
  - **title :** `Explorer les missions en détail`
  - **body :** `Chaque étude de cas détaille la situation de départ, les systèmes construits et la méthode, secteur par secteur.`
- **Rationale :** Repris verbatim du live. Pose l'attente sur la structure des pages enfant sans la dupliquer.

### 4.4 — CTA final
- **Composant :** `cta-section.tsx`
- **Proposé (FR) :**
  - **title :** `Obtenez les mêmes résultats`
  - **subtitle :** `30 minutes pour analyser vos workflows et identifier vos 3 premiers quick wins IA. Gratuit, sans engagement.`
  - **CTA principal :** `Réserver mon diagnostic gratuit` → /contact
- **Rationale :** Repris verbatim du live. Le subtitle live est déjà concret (« 3 premiers quick wins IA ») — pas de cliché type « move the needle » à corriger côté FR.

## 5. FAQ
Pas de bloc FAQ dans le template.

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| (5 noms de cas publiés ci-dessus) | /etudes-de-cas/[slug] | pages études de cas |
| Réserver mon diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA principal :** « Obtenez les mêmes résultats » → /contact (bouton : `Réserver mon diagnostic gratuit`)

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `Les études de cas d'AI Makers documentent de vrais systèmes IA en production chez des clients, chacun avec un avant et un après mesurables — d'un operating system IA complet pour une MedTech de 6 personnes (Gepromed) à un éditeur de logiciels (Sage) rendu citable par ChatGPT et Gemini sur la facture électronique. Les cas publiés couvrent l'éducation internationale, le logiciel de gestion, les fondations santé, les études marketing et la MedTech ; les chiffres rapportés par le client sont attribués comme tels.`
- **Entrée llms.txt (FR) :** `[Études de cas IA](https://aimakers.fr/etudes-de-cas) : résultats clients mesurés — operating systems IA, agents métier, visibilité GEO et plateformes data, avec avant/après et méthode.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| Cas publiés + secteurs + focus (Addictest, Sage, Fondation Force, ThinkONE, Gepromed) | src/lib/case-studies.ts (vérifié ; status="published") |
| Drafts exclus de l'index (cardio-check-up, delassus) | case-studies.ts status="draft" / noindex |
| Métriques des cas | case-studies.ts — rapportées par le client ; drafts en attente de validation |

## Localisation appliquée
Localisé depuis le master EN scellé (batch FR). Le FR étant la langue source live, le copy est repris verbatim de `page.tsx` ; corrections d'audit conservées telles quelles :

- **Double suffixe de marque (SEO §2a) :** Title raccourci à `Études de cas IA : des résultats mesurés` (40 car. ; rend ~52 avec le suffixe du template). La négation « Pas des promesses » reste portée par le H1.
- **Meta au plafond (SEO §2b) :** meta live (~215 car.) ramenée à 140 (liste sectorielle finale retirée), en gardant la liste des livrables et le cadre avant / après / comment.
- **CONSERVÉ (protégé) :** les négations d'honnêteté déflationniste — « Des résultats mesurés. Pas des promesses. » — variante concède/dégonfle de la liste KEEP du corpus. Hygiène d'index conservée : seuls les 5 cas publiés sont listés ; les 2 cas draft/noindex restent hors de l'index.
- **Décisions propriétaire/dev (hors copy) :** attribution/validation des métriques des pages enfant (chaque enfant doit porter des chiffres sourcés client ou tagués `[to validate]` — les deux cas draft sont en attente) ; arbitrage de slug/canonique `/etudes-de-cas` (TICKET-EN-ROUTES) — sans objet pour le FR live, laissés en l'état.

## Reconciliation applied
Réconciliation des deux audits FR (SEO 86/100 + anti-slop **Clean, net -11** — hub de preuve exemplaire sur l'hygiène d'index).
- **Titre :** déjà raccourci (`Études de cas IA : des résultats mesurés`, ~52 car. rendus), négation « Pas des promesses » portée par le H1. Aucun suffixe manuel.
- **Meta :** déjà trimée à 140 car. (live ~215 hors budget).
- **Mot-clé FR corrigé :** `étude de cas ia` « volume modéré » → **quasi nul (Ahrefs FR), intention exacte** — page à faible pression mot-clé, valeur = preuve BOFU, pas trafic. Requalification appliquée dans §2.
- **« X, pas Y » — DÉFLATIONNISTE, CONSERVÉ :** « Des résultats mesurés. Pas des promesses. » (KEEP-list), non neutralisé.
- **Tell FR « au cœur de » (teaser ThinkONE) :** signalé par l'audit anti-slop mais **Title = H1 en source (gated, décision owner)** ; conservé tel quel — remplacement par le fait réel de la mission laissé au propriétaire, jamais par synonyme.
- **PROTÉGÉ :** hygiène d'index (5 cas publiés listés, 2 drafts noindex hors liste) ; clients réels nommés ; attribution « chiffres rapportés par le client ».
- **Décision propriétaire en attente :** validation des métriques sur les 5 pages enfant publiées (droit de citation + chiffres).
