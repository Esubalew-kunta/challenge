# Offre AI PARTNER (/offre) — Master de contenu FR

> Localisation FR du master EN. Le FR est la langue primaire live : le copy provient de `src/app/offre/page.tsx` (inline) et `src/lib/site-config.ts` → `homepageContent.offer` / `homepageContent.guarantees` / `homepageContent.finalCta`. On conserve chaque chiffre et garantie à l'identique et on n'applique que les corrections d'audit (suffixe de marque, section `offer.model` réintégrée, dé-empilage des négations « slide »).

## 1. En-tête de page
- **Route (FR, live) :** /offre
- **Objet :** Page mono-offre : le programme AI PARTNER en 3 phases, avec garanties. Page de conversion BOFU référencée par llms.txt.
- **Rôle SEO :** conversion / page offre de marque
- **Étape funnel :** BOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | transformation ia | 100 | n/a | Ahrefs France (KE), 2026-07 |
| Secondaire | agence ia | 2 400 | 54 | Ahrefs France — cédé à /agence-ia (owner) |
| Secondaire | équipe ia externalisée / fractional ai team | minimal | — | terme de positionnement, pas un pari volume |
| Secondaire | ai partner (marque) | — | — | marque / navigationnel |

> **Décision mots-clés :** /offre est une page de conversion BOFU pour un programme de marque (AI PARTNER), pas une page de chasse au mot-clé — elle convertit le trafic envoyé par les pages piliers, donc la pression mot-clé est volontairement légère. `transformation ia` colle au H1 (« votre département IA, de l'audit au scale ») et porte en primaire ; le générique `agence ia` est cédé à /agence-ia (owner) pour éviter la cannibalisation. « équipe IA externalisée / fractional AI team » est à volume quasi nul mais c'est la description la plus juste du modèle à ingénieur dédié — on la garde en corps de texte pour le cadrage GEO / moteurs de réponse, pas comme cible SEO. Le contenu profond de transformation IA vit sur /ai-transformation (owner) ; cette page reste conversion-first.

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | AI PARTNER : votre département IA, de l'audit au scale | AI PARTNER : votre département IA, de l'audit au scale *(53 ; rend ~65 avec le suffixe `\| AI Makers` — **à raccourcir**)* → **Proposé : `AI PARTNER : votre département IA`** *(31 ; rend ~43 avec le suffixe — marque non écrite à la main)* |
| Meta description (140–160 car.) | Une offre unique en 3 phases : audit de vos process, systèmes IA en production chaque mois, équipes formées et autonomes à 6 mois. Un ingénieur IA dédié, quatre garanties contractuelles. | Inchangée — *(≈205 car. : **à raccourcir à ≤160**)* → **Proposé : `Une offre en 3 phases : audit de vos process, systèmes IA en production chaque mois, équipes autonomes à 6 mois. Un ingénieur dédié, 4 garanties contractuelles.`** *(158)* |
| H1 | Votre département IA. De l'audit au scale. | Inchangé — Votre département IA. De l'audit au scale. |
| URL slug | /offre | /offre |

> **Correction d'audit :** le title live (53 car.) rend au-delà du budget une fois le suffixe `| AI Makers` ajouté par le template. Raccourci proposé ci-dessus. La meta live dépasse 160 — version resserrée proposée.

## 4. Sections & contenu
Source du copy : inline dans `src/app/offre/page.tsx` + `site-config.ts` → `homepageContent.offer` (phase1/2/3, model) et `homepageContent.guarantees`. Copy live FR conservé mot pour mot.

### 4.1 — Hero
- **Composant :** `src/app/offre/page.tsx` (inline)
- **Champs :** badge, H1, paragraphe intro, CTA primaire
- **Proposé (FR) :**
  - **badge :** `L'offre AI PARTNER`
  - **H1 :** `Votre département IA. De l'audit au scale.`
  - **intro :** `Un ingénieur dédié, des systèmes en production chaque mois, des équipes formées chaque semaine. Et à 6 mois, vous êtes autonomes.`
  - **CTA primaire :** `Réserver mon diagnostic gratuit` → /contact
- **Rationale :** structure FR percutante en deux lignes conservée. La métaphore « département IA » est la promesse centrale de l'offre et porte le positionnement « équipe IA dédiée » sans ligne creuse.

### 4.2 — Les 3 phases (AUDIT / BUILD / SCALE)
- **Composant :** `src/app/offre/page.tsx` + `site-config.ts:homepageContent.offer.phase1-3`
- **Champs :** intro de section ; par phase : title, subtitle, summary, items[5]
- **Proposé (FR) — verbatim live :**
  - **Phase 1 — AUDIT** · `AI Scan · 1-2 semaines` · résumé : `Cartographie, interviews, scoring de maturité /24. Vous repartez avec une roadmap chiffrée et minimum 3 cas d'usage à fort ROI.`
    - items : `Cartographie complète des process existants` · `Interviews des décideurs et opérationnels` · `Scoring de maturité IA sur 6 axes (grille propriétaire)` · `Roadmap chiffrée 3/6/12 mois avec ROI estimé` · `Minimum 3 cas d'usage prêts à construire`
  - **Phase 2 — BUILD** · `AI Engine · 3-6 mois` · résumé : `Un ingénieur IA dédié full-time. 1 à 2 systèmes en production par mois, 2h de formation par semaine, propriété client totale.`
    - items : `1 ingénieur IA dédié full-time, intégré à votre équipe` · `1 à 2 systèmes IA livrés en production par mois` · `2h de formation hands-on / semaine pour vos équipes` · `Playbooks documentés, propriété client totale` · `Support jour même + accès à +1 500 automatisations`
  - **Phase 3 — SCALE** · `AI Champions · En continu` · résumé : `Vos équipes deviennent autonomes. Optimisation continue, nouveaux cas d'usage, revue stratégique trimestrielle COMEX.`
    - items : `Programme AI Champions : vos équipes deviennent autonomes` · `Optimisation continue des systèmes en production` · `Identification de nouveaux cas d'usage en continu` · `Veille IA intégrée directement dans vos systèmes` · `Revue stratégique trimestrielle au niveau COMEX`
- **Rationale :** copy live conservé verbatim (chiffres de site-config). On garde « +1 500 automatisations » et la grille « 6 axes /24 » telles quelles — [to validate] : le « +1 500 automatisations » est un chiffre de catalogue produit issu de site-config, conservé verbatim, non inventé.

### 4.2b — Le modèle (4 principes) — `offer.model`
- **Composant :** `src/app/offre/page.tsx` + `site-config.ts:homepageContent.offer` (`badge` / `title` / `subtitle` + `model[4]`)
- **Note de réconciliation :** la page live rend cette section entre les phases et les garanties. Ce bloc est **owned par /offre** (aussi rendu sur /ai-transformation qui la référence — source unique ici).
- **Proposé (FR) :**
  - **badge :** `Comment on fonctionne`
  - **title :** `On audite. On développe. On déploie.` *(correction d'audit : dé-empilage — la négation « slide » n'est gardée qu'une fois, sur le sous-titre des garanties, qui en est l'owner. Live actuel : « On ne vend pas des slides. On déploie. »)*
  - **subtitle :** `On audite vos workflows. On identifie où l'IA crée de la valeur réelle. On développe, on implémente, on forme.`
  - **01 — On audite vos workflows :** `Cartographie de vos process, interviews de vos équipes, chronométrage de ce qui vous coûte du temps. Pas de théorie : on part de votre réalité opérationnelle.`
  - **02 — On identifie où l'IA crée de la valeur :** `Chaque opportunité est scorée par impact réel sur votre P&L. Vous repartez avec une roadmap priorisée et minimum 3 cas d'usage rentables, pas une liste de fonctionnalités.`
  - **03 — On développe et on implémente :** `Un ingénieur dédié construit 1 à 2 systèmes par mois, directement dans vos workflows. Chaque système a un KPI mesuré avant/après. Si ça ne tourne pas, on itère jusqu'à ce que ça tourne.`
  - **04 — On forme vos équipes jusqu'à l'autonomie :** `2h de formation hands-on par semaine sur vos cas réels. On forme vos AI Champions, on documente tout, on vous transmet tout. À 6 mois, les systèmes tournent sans nous.`
- **Rationale :** copy live verbatim, sauf le title dé-empilé (fix d'audit). Les chiffres correspondent aux phases et à site-config.

### 4.3 — Garanties
- **Composant :** `src/components/sections/homepage/guarantees.tsx` · `homepageContent.guarantees`
- **Champs :** badge, title, subtitle, items[4]{name, promise, outcome}, credibility
- **Proposé (FR) — verbatim live :**
  - **badge :** `Zéro risque` — **title :** `Vous ne prenez aucun risque. C'est nous qui le prenons.` — **subtitle :** `Les quatre sont écrites dans le contrat. Pas dans un slide.` *(instance owner de la négation « slide » — conservée)*
  - **Garantie Audit** — promesse : `Pas de roadmap claire avec 3 cas d'usage rentables en 2 semaines ?` → issue : `Remboursé. Intégralement. Sans discussion.`
  - **Garantie 30 jours** — promesse : `Rien en production le premier mois ?` → issue : `On continue gratuitement jusqu'à ce que ça tourne.`
  - **Garantie Champions** — promesse : `Un champion formé sans impact mesurable ?` → issue : `30 jours offerts.`
  - **Garantie Sortie** — promesse : `Le jour où on part, tout reste chez vous : code, playbooks, documentation.` → issue : `Zéro dépendance, zéro otage.`
  - **credibility :** `On peut garantir ça parce qu'on limite : 3 clients par mois, un ingénieur dédié chacun. Les agences qui signent tout le monde ne peuvent pas l'écrire dans un contrat. Nous, si.`
- **Rationale :** bloc garanties partagé (owner = /garanties) mais /offre en est le foyer le plus fort — les garanties SONT le mécanisme de conversion de l'offre. Copy complet ici ; les autres pages référencent des instances uniques. Contenu à réputation engagée protégé.

### 4.4 — Rareté + CTA final
- **Composant :** bande de rareté (`finalCta.urgency`) + `src/components/shared/cta-section.tsx`
- **Proposé (FR) — verbatim live :**
  - **bande rareté :** `Maximum 3 nouveaux clients par mois. Chaque client a un ingénieur IA dédié, onboardé 2 semaines avant le kick-off. Notre capacité est physiquement limitée, pas artificiellement.`
  - **CTA title :** `30 minutes pour identifier vos 3 premiers quick wins IA`
  - **CTA subtitle :** `On analyse vos workflows, on identifie les opportunités à fort ROI, on vous donne une roadmap. Gratuit, sans engagement, et utile même si vous ne travaillez pas avec nous.`
  - **CTA primaire :** `Réserver mon diagnostic gratuit` → /contact
- **Rationale :** la ligne « physiquement limitée, pas artificiellement » est une rareté réelle et vérifiable (liée au modèle de capacité), pas de la fausse urgence.

## 5. FAQ
Pas de slot FAQ dans le template.

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Réserver mon diagnostic gratuit | /contact | CTA |
| Les quatre garanties en détail | /garanties | lien profond garanties (existant) |
| Les 3 phases en détail | /ai-transformation | détail programme (existant) |
| Commencer par un audit IA | /audit-ia-entreprise | lien offre d'entrée (nouveau) |

## 7. CTA
- **CTA primaire :** `Réserver mon diagnostic gratuit` → /contact

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `AI PARTNER est l'offre unique d'AI Makers, structurée en trois phases : Audit (AI Scan, 1-2 semaines), Build (AI Engine, 3-6 mois avec un ingénieur IA dédié full-time livrant 1 à 2 systèmes par mois) et Scale (AI Champions, jusqu'à l'autonomie des équipes). Elle est assortie de quatre garanties écrites dans le contrat — remboursement audit, 30 jours production, impact champion et sortie propre — et d'une propriété client totale de tout ce qui est construit.`
- **Entrée llms.txt (FR) :** `[Offre AI PARTNER](https://aimakers.fr/offre) : une offre en trois phases — audit, systèmes IA en production chaque mois, équipes formées jusqu'à l'autonomie — avec quatre garanties contractuelles.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| 3 phases ; 1 à 2 systèmes/mois ; 2h formation/semaine ; grille de maturité 6 axes /24 ; 3+ cas d'usage ; onboardé 2 semaines avant kick-off | site-config homepageContent.offer + finalCta.urgency |
| +1 500 automatisations disponibles (item phase Build) | site-config offer.phase2 items (verbatim, non inventé) — [to validate] source de vérité |
| 4 garanties contractuelles (Audit / 30 jours / Champions / Sortie) + crédibilité capacité (3 clients/mois) | site-config homepageContent.guarantees (canonique, aussi dans llms.txt) |
| +50 entreprises / +200 systèmes / +2 500 formés / 7h/semaine | public/llms.txt (canonique) |
| `offer.model` 4 principes (§4.2b) | site-config.ts homepageContent.offer.model (verbatim ; owner = /offre, partagé avec /ai-transformation) |

## Corrections d'audit appliquées
- **Title dédoublé + budget** — proposé raccourci `AI PARTNER : votre département IA` pour rester ≤60 avec le suffixe de marque auto-ajouté.
- **Meta > 160** — version resserrée à 158 car.
- **Section `offer.model` (§4.2b) explicitée** — la page live la rend entre phases et garanties ; owner = /offre.
- **Dé-empilage des négations « slide »** — l'instance owner reste sur le sous-titre des garanties (« Pas dans un slide. ») ; le title du modèle est aplati en positif (« On audite. On développe. On déploie. »).

## À valider
- `+1 500 automatisations` et grille `6 axes /24` : chiffres site-config préexistants, conservés verbatim — décision d'ingénierie sur la source de vérité (`[to validate]`).
- Ingénierie laissée au dev : `/offre` absent du sitemap (bug live), JSON-LD Offer/Service. Pas des éditions de contenu.

---

## Reconciliation applied

Passe de réconciliation FR (audits SEO 82/100 + anti-slop Clean −12).

**Changé :**
1. **Mots-clés FR (rule 5) — corrections de volumes :** `transformation ia` 250 → **100** (primaire money-page conservé, volume corrigé) ; `agence ia` 600 → **2 400/KD54** (aligné sur le master /agence-ia à qui le terme est cédé). Stratégie brand-led / anti-cannibalisation inchangée.

**Vérifié conforme (rien changé) :**
- **Title (rule 1) :** proposition déjà correcte — `AI PARTNER : votre département IA` (rend ≈43, marque une fois). Rien à strip.
- **Meta (rule 2) :** proposition déjà resserrée à 158 (≤160), keyword + offre. OK.
- **Négation « slide » (rule 4) :** déjà dé-empilée — instance owner unique sur le sous-titre garanties (« Pas dans un slide. ») ; title du modèle déjà aplati en positif (« On audite. On développe. On déploie. »). Non saturé.
- **Bloc garanties + `offer.model`** : owner = /offre, source unique, non cloné.
- **Tags (rule 7) :** `[to validate]` déjà au bon littéral (aucun `[à valider]`).

**Délibérément gardé (PROTECT) :**
- **Bloc 4 garanties + credibility** (répétition de garantie nécessaire, foyer de conversion) — intact.
- **Tag `[to validate]`** sur « +1 500 automatisations » et grille « 6 axes /24 » (chiffres site-config verbatim, non inventés).
- **Rareté honnête** (« physiquement limitée, pas artificiellement ») et closer CTA partagé.

**Pour la technique / owner (hors périmètre édition) :** `/offre` absent de `sitemap.ts` (bug live, 1 ligne) ; ajout d'un JSON-LD Service/Offer ; source de vérité de « +1 500 automatisations » ; répartition /offre (conversion) vs /ai-transformation (contenu long) à confirmer.
