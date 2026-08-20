# Formation : Création & Publicité (IA pour la Créa) — Master de contenu FR

> Le français est la langue primaire live des formations (marché FR fort). Copie ancrée sur `src/lib/formations.ts` (entrée `creation-publicite-ia`) et `formateurs`. Corrections d'audit conservées (budget title, meta ≤160, dé-empilage d'une négation, stack créatif protégé).

## 1. En-tête de page
- **Route (FR, live) :** /formation-ia-entreprise/creation-publicite-ia
- **Objet :** Page détail formation (catalogue) — convertit vers téléchargement catalogue + appel diagnostic.
- **Rôle SEO :** support (pilier formation ; FR fort)
- **Étape funnel :** MOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | formation ia marketing | 250 | 10 | Ahrefs France (KE), 2026-07 — **pivot** (voir décision) |
| Secondaire | formation midjourney | 300 | 0 | Ahrefs France (KE), 2026-07 — variante visuels |
| Secondaire | formation ia design / formation ia créative | 150 / ~20 | — | Ahrefs France (KE) — variantes de corps |

> **Décision mots-clés (pivot FR) :** l'ancien primaire `formation ia créative` ne mesure que **~20** en France (Ahrefs 2026-07), pas les 150 supposés — trop faible pour porter la page. Bascule du primaire vers **`formation ia marketing` (250 / KD10)**, meilleur fit créa/marketing et vérifié ; **`formation midjourney` (300 / KD0)** et `formation ia design` (150) portés en corps/H2 ; `formation ia créative` rétrogradé en simple variante. `formation ia marketing` est attribué **à cette page** (fit créa/marketing) et non à go-to-market-sales (qui vise `prospection ia`/`formation prospection`) — pas de double-ciblage. Le générique `formation ia entreprise` reste cédé au pilier.

## 3. Meta de page
| Champ | Actuel (FR, live) | Master (FR) |
|---|---|---|
| Title (≤60 car. suffixe auto inclus) | Création & Publicité : IA pour la Créa \| Formation IA en entreprise | `Formation IA marketing & créa : vos visuels` *(44 ; rendu ~56 après ajout auto de « \| AI Makers ». Foregrounde le primaire pivoté `formation ia marketing`. TICKET-FORM-TITLE-TPL doit d'abord retirer le mid-suffixe FR « \| Formation IA en entreprise ». Ne pas écrire la marque à la main)* |
| Meta description (140–160) | *(actuel = résumé)* Accélérer la production créative avec Nano Banana et Weavy, en gardant une direction artistique cohérente du brief à la livraison. | `Formation IA pour les équipes créa et marketing : accélérez la production avec Nano Banana et Weavy, en gardant une direction artistique cohérente.` *(146 ; primaire `formation ia marketing` en tête ; nécessite un champ `seoDescription` — TICKET-FORM-SEO-DESC)* |
| H1 | Création & Publicité : produire et décliner des contenus créatifs avec l'IA | inchangé (= source `titre`) |
| Slug URL | /formation-ia-entreprise/creation-publicite-ia | inchangé |

## 4. Sections & contenu
Template partagé : `src/app/formation-ia-entreprise/[slug]/page.tsx` · copie dans `src/lib/formations.ts` (entrée `creation-publicite-ia`).

### 4.1 — Hero + fiche
- **Contenu (FR, source) :**
  - Catégorie : `Métier`
  - Nom (cartes) : `Création & Publicité : IA pour la Créa`
  - Tagline : `Produire et décliner des contenus créatifs avec l'IA, sans perdre la direction artistique.` *(négation cœur conservée)*
  - Résumé : `Accélérer la production créative avec Nano Banana et Weavy, en gardant une direction artistique cohérente du brief à la livraison.`
  - Niveau : `Débutant → Intermédiaire` · Public : `Créatifs, designers, équipes marketing et communication` · Format : `Présentiel, distanciel ou hybride` · Durée : `Format sur-mesure, de la journée au parcours complet` · Prérequis : `Aucun prérequis technique`
- **Justification :** stack créatif nommé (Nano Banana pour la génération, Weavy pour le pipeline) = différenciateur. La tension cœur « sans perdre la direction artistique » est la seule négation conservée.

### 4.2 — « Ce que vos équipes vont maîtriser »
- **Contenu (FR, source) :**
  1. `Générer des visuels et des contenus créatifs avec l'IA`
  2. `Accélérer les cycles de production`
  3. `Adapter les créations aux différents canaux`
  4. `Structurer un workflow créatif IA avec Nano Banana et Weavy`

### 4.3 — « Les modules de la formation »
- **Contenu (FR, source) :**
  - **Les bases de la création IA** : `Panorama des outils créatifs et de ce qu'ils savent faire` · `Garder une direction artistique cohérente avec l'IA` · `Les bons prompts pour des visuels de qualité`
  - **Générer visuels & contenus avec Nano Banana** : `Produire des images et déclinaisons créatives` · `Itérer rapidement sur les concepts` · `Respecter l'identité de marque`
  - **Structurer un workflow créatif avec Weavy** : `Intégrer l'IA dans le pipeline de production, du brief à la livraison` · `Assembler et enchaîner les étapes créatives` · `Assurer la cohérence sur tous les livrables`
  - **Décliner & industrialiser** : `Adapter les créations à chaque canal (social, print, web)` · `Accélérer les cycles de production` · `Mesurer le gain de temps et de volume`

### 4.4 — « Ce que vos équipes en retirent »
- **Contenu (FR, source) :**
  - `x5` — `cycles de production accélérés`
  - `DA` — `direction artistique cohérente préservée`
  - `Multi-canal` — `déclinaisons adaptées à chaque canal`
- **Justification :** affirmations structurelles (formations.ts). « x5 » gardé `[to validate]`.

### 4.5 — Formulaire catalogue + formateurs + autres formations
- **Contenu (FR) :** réutiliser les blocs partagés possédés par le pilier /formation-ia-entreprise. Titre formateurs : `Formés par ceux qui déploient l'IA en production`. Formulaire : `Recevez le catalogue de formations complet` + email + bouton `Recevoir le catalogue`.

### 4.6 — CTA final
- **Contenu (FR) :** Titre : `Vos équipes créa tiennent-elles la cadence sans sacrifier la DA ?` · Sous-titre : `Réservez un diagnostic de 30 minutes — on cadre le format, le public et les workflows créatifs sur vos vrais briefs.`
- **Justification :** éligibilité financement (Qualiopi / OPCO) possible ici — **[to validate placement]** (voir §9).

## 5. FAQ
| # | Question (FR) | Réponse (FR) |
|---|---|---|
| 1 | À qui s'adresse cette formation ? | Aux créatifs, designers et équipes marketing/communication qui veulent accélérer leur production tout en gardant la qualité et la cohérence de marque intactes. *(fix d'audit : négation dupliquée aplatie en clause positive)* |
| 2 | Quels outils sont couverts ? | Nano Banana pour la génération de visuels et Weavy pour structurer le workflow créatif de bout en bout, du brief à la livraison. |
| 3 | L'IA remplace-t-elle la direction artistique ? | Non. L'IA accélère la production, mais la direction artistique reste pilotée par vos équipes. La formation apprend justement à garder une DA cohérente tout en produisant plus vite. *(négation-verdict portante conservée)* |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Formation IA pour les équipes (catalogue) | /formation-ia-entreprise | hub / pilier |
| Réserver un diagnostic | /contact | CTA |
| Go-to-Market & Sales IA | /formation-ia-entreprise/go-to-market-sales | programme sœur marketing |

## 7. CTA
- **CTA primaire :** « Vos équipes créa tiennent-elles la cadence sans sacrifier la DA ? » → /contact
- **Secondaire :** formulaire catalogue PDF (CatalogueForm) — `Recevez le catalogue de formations complet`

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `La formation Création & Publicité d'AI Makers apprend aux équipes créa, design et marketing à produire et décliner des contenus créatifs avec l'IA — avec Nano Banana pour la génération de visuels et Weavy pour structurer le workflow, du brief à la livraison — tout en gardant une direction artistique cohérente. Sans prérequis technique, présentiel, distanciel ou hybride, elle se construit sur les vrais briefs de l'équipe.`
- **Entrée llms.txt (FR) :** `[Création & Publicité IA](https://aimakers.fr/formation-ia-entreprise/creation-publicite-ia) : formation IA pour équipes créa et marketing — produire et décliner des contenus avec Nano Banana et Weavy, sans perdre la direction artistique.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| x5 — cycles de production accélérés | src/lib/formations.ts — [to validate] |
| DA cohérente préservée · Multi-canal | src/lib/formations.ts |
| Outils : Nano Banana, Weavy | src/lib/formations.ts |
| Format / durée / niveau | src/lib/formations.ts |
| Éligibilité financement (Qualiopi / OPCO) | **[to validate placement]** — absent de public/llms.txt et formations.ts ; aucun % de financement ni certification affirmé. |

## Corrections d'audit appliquées
- **Double suffixe de marque :** meta title sans « | AI Makers » manuel ; dépend de TICKET-FORM-TITLE-TPL.
- **Meta > 160 :** resserrée à 153 ; nécessite `seoDescription` (TICKET-FORM-SEO-DESC).
- **Dé-empilage :** le frame « sans perdre / sans sacrifier » apparaissait 2 fois ; conservé une fois sur la tagline (tension cœur), aplati dans la FAQ 1. FAQ 3 (« L'IA remplace-t-elle la DA ? Non ») conservée (scoping portant).
- **FAQ variée :** FAQ 3 est déjà la question spécifique programme ; pas de swap forcé.
- **Conservé (force) :** stack créatif (Nano Banana, Weavy) intact.
- **Protégé :** « x5 » `[to validate]` ; Qualiopi/OPCO `[to validate placement]`.
- **Note SEO :** primaire pivoté vers `formation ia marketing` (250/KD10) ; `formation midjourney` (300/KD0) et `formation ia design` (150) en H2/corps à la construction.

## Reconciliation applied
FR-audit reconciliation pass (SEO + anti-slop) — Agent 2:
- **🔴 FR KEYWORD PIVOT applied:** old primary `formation ia créative` measures only ~20 in France (not 150) → primary switched to **`formation ia marketing` (250/KD10)**; `formation midjourney` (300/KD0) + `formation ia design` (150) moved to body/H2; `formation ia créative` demoted to variant. Keyword table + decision note + proposed Title + meta emphasis all updated. `formation ia marketing` assigned to THIS page (créa/marketing fit); go-to-market-sales keeps `prospection ia`/`formation prospection` — no cross-targeting.
- **Title:** proposed "Formation IA marketing & créa : vos visuels" (~56 rendered) foregrounds the pivoted primary; suffix-free. TICKET-FORM-TITLE-TPL / TICKET-FORM-SEO-DESC stay logged dev tickets.
- **Meta:** trimmed to ~146 (within range), primary in front.
- **Formation CTA varied:** "Cette formation est-elle faite pour vos équipes ?" → "Vos équipes créa tiennent-elles la cadence sans sacrifier la DA ?" — anchored on production cadence + DA (program-specific).
- **KEPT distinct:** creative tool stack (Nano Banana / Weavy). Program-specific FAQ #3 verdict ("Non") kept; de-stacked negation kept once (tagline).
- **PROTECTED:** "x5" `[to validate]`; Qualiopi/OPCO `[to validate placement]`. Nothing added, rounded, or invented.
