# Blog — hub (/blog) — Master de contenu FR

> Localisation FR du master EN. Le FR est la langue primaire live : le copy provient de `src/app/blog/page.tsx` ; les articles viennent de `src/lib/blog.ts` lisant `src/content/blog/*.md` (8 posts). On reprend le copy live verbatim et on n'applique que les corrections d'audit (suffixe de marque, meta trop longue).

## 1. En-tête de page
- **Route (FR, live) :** /blog
- **Objet :** Index du blog / hub de retours terrain. Les articles eux-mêmes sont hors périmètre (calendrier éditorial à 90 jours).
- **Rôle SEO :** hub
- **Étape funnel :** TOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | — (hub éditorial ; pas de tête de requête cible) | — | — | page index ; le ranking vit sur chaque article |
| Secondaire | (par article : « meilleures agences ia », « formation ia », etc.) | TBD (Ahrefs FR) | TBD (Ahrefs FR) | porté par les posts enfant / calendrier éditorial |

> **Décision mot-clé.** Un index de blog ne doit pas courir après un mot-clé — son rôle est de cadrer le point de vue éditorial et de router vers les articles, qui portent chacun leur requête. Pas de tête de requête cible ; le hub gagne des liens et de la confiance, les articles gagnent le trafic.

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | Blog \| Transformation IA en entreprise, retours terrain | Blog : transformation IA, retours terrain *(41 ; rend ~53 avec le suffixe `\| AI Makers` du template — marque non écrite à la main)* |
| Meta description (140–160 car.) | Retours de mission, méthodes et analyses sur la transformation IA en entreprise : audit, automatisation, formation des équipes, visibilité dans les moteurs génératifs. | Retours de mission et analyses sur la transformation IA en entreprise : audit, automatisation, formation des équipes, visibilité dans les moteurs génératifs. *(155)* |
| H1 | Ce qu'on apprend sur le terrain | Ce qu'on apprend sur le terrain |
| URL slug | /blog | /blog |

## 4. Sections & contenu
Copy : inline `src/app/blog/page.tsx` ; posts depuis `src/lib/blog.ts` lisant `src/content/blog/*.md` (8 posts). Copy live repris verbatim.

### 4.1 — Hero
- **Composant :** `page.tsx`
- **Champs :** badge, H1, intro
- **Live (FR) :** positionnement retours terrain.
- **Proposé (FR) :**
  - **badge :** `Blog`
  - **H1 :** `Ce qu'on apprend sur le terrain`
  - **intro (answer-first) :** `Retours de mission, méthodes et analyses sur la transformation IA en entreprise. On publie quand on a quelque chose d'utile à dire.`
- **Rationale :** Repris verbatim du live. Le point de vue « on publie quand on a quelque chose d'utile à dire » est une posture éditoriale citable et fidèle aux vrais articles (série inside-AI-Makers, comparatifs honnêtes, « ce site est lui-même un produit IA »).

### 4.2 — Liste des articles
- **Composant :** `page.tsx` + `lib/blog.ts`
- **Champs :** cartes post {title, description, date, author}
- **Live (FR) :** 8 posts publiés (triés par date décroissante).
- **Proposé (FR) :** *(articles hors périmètre — le calendrier éditorial possède les traductions. Titres de référence uniquement, ne pas réécrire les corps ici. Titres = frontmatter live verbatim.)*
  - `Ce site est lui-même un produit IA. Voici comment on l'a construit.` (ce-site-est-un-produit-ia)
  - `Inside AI Makers : le brief qui attend notre CEO chaque matin` (inside-ai-makers-cockpit-ceo)
  - `Inside AI Makers : chaque appel commercial analysé, sans prendre une note` (inside-ai-makers-intelligence-appels)
  - `Meilleures agences IA en France en 2026 : le comparatif honnête` (meilleures-agences-ia-france)
  - `Meilleures formations IA pour entreprises en 2026 : le comparatif` (meilleures-formations-ia-entreprise)
  - `Meilleures formations Claude en entreprise en 2026 : le guide` (meilleures-formations-claude-entreprise)
  - `Meilleure formation IA à Nice en 2026 : le comparatif Côte d'Azur` (meilleure-formation-ia-nice)
  - `Le blog AI Makers est ouvert` (bienvenue)
- **Lien de carte (live) :** `Lire l'article →`
- **État vide (live) :** `Les premiers articles arrivent bientôt.`
- **Rationale :** Titres listés pour continuité uniquement ; le calendrier éditorial possède le copy réel des articles. L'index rend simplement les posts existants.

### 4.3 — CTA final
- **Composant :** `cta-section.tsx`
- **Proposé (FR) :**
  - **title :** `Envie de passer de la lecture à l'exécution ?`
  - **subtitle :** `30 minutes pour analyser vos workflows et identifier vos 3 premiers quick wins IA. Gratuit, sans engagement.`
  - **CTA principal :** `Réserver mon diagnostic gratuit` → /contact
- **Rationale :** Repris verbatim du live.

## 5. FAQ
Pas de bloc FAQ dans le template.

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| (titres de posts ci-dessus) | /blog/[slug] | posts (hors périmètre) |
| Réserver mon diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA principal :** « Envie de passer de la lecture à l'exécution ? » → /contact (bouton : `Réserver mon diagnostic gratuit`)

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `Le blog AI Makers est une publication de retours terrain sur la transformation IA en entreprise : comparatifs honnêtes d'agences et de formations, décryptages des systèmes internes d'AI Makers (un brief de décision quotidien, l'analyse automatisée des appels commerciaux) et analyses de la visibilité IA dans les moteurs de réponse. Écrit depuis le travail de mission, pas pour le content marketing.`
- **Entrée llms.txt (FR) :** `[Blog](https://aimakers.fr/blog) : retours terrain et analyses sur la transformation IA en entreprise — audit, automatisation, formation des équipes et visibilité dans les moteurs IA.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| 8 posts + titres | src/content/blog/*.md (vérifié) |

## Localisation appliquée
Localisé depuis le master EN scellé (batch FR). Le FR étant la langue source live, le copy est repris verbatim de `page.tsx` et des frontmatters ; corrections d'audit conservées telles quelles :

- **Double suffixe de marque (SEO §2a) :** Title raccourci à `Blog : transformation IA, retours terrain` (41 car. ; rend ~53 avec le suffixe du template). Le `|` écrit à la main du title live est retiré pour ne pas doubler le séparateur de marque.
- **Meta au plafond (SEO §2b) :** meta live (~165 car.) ramenée à 155 (retrait de « méthodes et »), en gardant le cadre mots-clés et l'intention retours terrain.
- **CONSERVÉ (protégé) :** l'intention éditoriale live « On publie quand on a quelque chose d'utile à dire » (standard auto-imposé, fidèle aux vrais articles). Une seule tournure de cadrage sur la page — conforme à la règle corpus « ≤1 négation ».
- **Décisions dev (hors copy) :** coupler la sortie de l'index EN avec les traductions EN des posts pour éviter tout rendu mixte de langues (dépendance calendrier éditorial) ; le slug reste `/blog` (pas de changement) — sans objet pour le FR live, laissé en l'état.

## Reconciliation applied
Réconciliation des deux audits FR (SEO 86/100 + anti-slop **Clean, net -4** — index éditorial thin par design, légitime).
- **Titre :** déjà dé-pipé et raccourci (`Blog : transformation IA, retours terrain`, ~53 car. rendus) — le `|` manuel redondant retiré, aucun double séparateur de marque.
- **Meta :** déjà trimée à 155 car. (live ~165).
- **Mots-clés :** hub éditorial sans tête de requête cible — décision correcte (le ranking vit sur les articles enfant). Rien à corriger.
- **PROTÉGÉ :** posture éditoriale citable « On publie quand on a quelque chose d'utile à dire » / « Écrit depuis le travail de mission, pas pour le content marketing » (KEEP-list) ; titres d'articles verbatim (calendrier éditorial propriétaire).
- **Note cross-page :** cannibalisation potentielle article ↔ page service (`meilleures-agences-ia-france` vs `/agence-ia` ; `meilleures-formations-ia-entreprise` vs `/formation-ia-entreprise`) — intention éditoriale vs commerciale, à surveiller, pas un finding actionnable ici.
- **Décision propriétaire en attente :** option `Blog`/`CollectionPage` schema ; couplage sortie EN ↔ traductions posts (dev).
