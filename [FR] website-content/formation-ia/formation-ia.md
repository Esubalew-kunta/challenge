# Formation IA par ville — hub (/formation-ia) — Master de contenu FR

> Localisation FR du master EN. Le FR est la langue primaire live : le copy provient de `src/app/formation-ia/page.tsx` (+ `src/lib/villes-formation.ts` pour les 11 villes, `src/lib/formations.ts` pour les 6 programmes). On reprend le copy live verbatim et on n'applique que les corrections d'audit (suffixe de marque en double, meta trop longue).

## 1. En-tête de page
- **Route (FR, live) :** /formation-ia
- **Objet :** Hub ville reliant les 11 pages de formation locales (collection enfant, hors périmètre) + les 6 programmes. Formation IA en entreprise, en présentiel, ville par ville.
- **Rôle SEO :** hub / appui SEO local (centré France + Maroc)
- **Étape funnel :** TOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire (local) | formation ia [ville] | TBD (Ahrefs FR) | TBD (Ahrefs FR) | intention locale, portée par les pages ville |
| Référence | formation ia | 6 900 | KD 55 | tête de requête — appartient au hub programme /formation-ia-entreprise |
| Référence | formation intelligence artificielle | TBD (Ahrefs FR) | TBD (Ahrefs FR) | variante longue — hub programme |

> **Décision mot-clé.** Ce hub est une page locale, centrée France et Maroc : sa valeur SEO est l'intention géolocalisée « formation ia [ville] », qui vit sur les pages ville enfant. La tête de requête générique « formation ia » (souvent une intention MOOC / auto-formation, hors ICP entreprise) est laissée au **hub programme** `/formation-ia-entreprise`, propriétaire de l'intention formation en entreprise. Le hub ville ne clone pas les 6 descriptions de programmes : il route vers le catalogue. Volumes/difficultés à confirmer côté Ahrefs FR (marqués `TBD (Ahrefs FR)`).

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | Formation IA près de chez vous : 11 villes en France et au Maroc | Formation IA près de chez vous : 11 villes *(43 ; rend ~55 avec le suffixe `\| AI Makers` du template — marque non écrite à la main)* |
| Meta description (140–160 car.) | Formation IA en entreprise à Paris, Lyon, Toulouse, Bordeaux, Lille, Nantes, Marseille, Strasbourg, Nice, Montpellier et Casablanca. Programmes hands-on en présentiel dans vos locaux, sur vos cas d'usage réels. | Formation IA en entreprise dans 11 villes, France et Maroc : Paris, Lyon, Marseille, Casablanca. En présentiel dans vos locaux, sur vos cas d'usage réels. *(152)* |
| H1 | Formation IA près de chez vous | Formation IA près de chez vous |
| URL slug | /formation-ia | /formation-ia |

## 4. Sections & contenu
Copy : inline `src/app/formation-ia/page.tsx` + `src/lib/villes-formation.ts` (11 villes) + `src/lib/formations.ts` (6 programmes). Copy live repris verbatim.

### 4.1 — Hero
- **Composant :** `page.tsx` (inline)
- **Champs :** badge, H1, intro
- **Live (FR) :** promesse de présence locale.
- **Proposé (FR) :**
  - **badge :** `Présentiel partout en France et au Maroc`
  - **H1 :** `Formation IA près de chez vous`
  - **intro (answer-first) :** `Nos formateurs interviennent en présentiel dans vos locaux, dans les grandes métropoles françaises et au Maroc. Chaque page ville détaille le tissu économique local, nos références et les programmes les plus demandés dans la région.`
- **Rationale :** Repris verbatim du live. Cadre la page comme de la formation en entreprise, en présentiel (notre ICP), distincte des cours d'IA en ligne. Hub volontairement court.

### 4.2 — Villes (11 cartes)
- **Composant :** `page.tsx` + `villes-formation.ts`
- **Champs :** cartes ville {ville, région, lien}
- **Live (FR) :** grille de cartes « Formation IA {ville} ».
- **Proposé (FR) :** libellé de carte `Formation IA {ville}` → /formation-ia/{slug}, pour : Paris, Lyon, Toulouse, Bordeaux, Lille, Nantes, Marseille, Strasbourg, Nice, Montpellier, Casablanca. Lien de carte : `Voir la page {ville}`. *(Les pages ville enfant sont hors périmètre de ce cycle.)*
- **Rationale :** Libellés de routage simples ; les pages enfant portent le contenu local. 11 villes confirmées dans `villes-formation.ts`.
- **Note bas de grille (live, conservée) :** `Votre ville n'est pas dans la liste ? Nous intervenons partout en France et au Maroc, sur place ou à distance. Parlons de votre projet.` → /contact

### 4.3 — « Six formations, disponibles dans chaque ville »
- **Composant :** `page.tsx` + `formations.ts`
- **Champs :** 6 cartes programme + lien catalogue
- **Live (FR) :** liste de programmes en crosslink (carte = catégorie + nom, lien « Découvrir »).
- **Proposé (FR) :**
  - **surtitre :** `/ Les programmes`
  - **title :** `Six formations, disponibles dans chaque ville`
  - **lien catalogue :** `Voir le catalogue complet` → /formation-ia-entreprise
- **Rationale :** Pointe vers le hub programme (propriétaire du catalogue) au lieu de cloner les six descriptions de programmes ici — évite la duplication hub-sur-hub (anti-cannibalisation correcte).

### 4.4 — CTA final
- **Composant :** `cta-section.tsx`
- **Proposé (FR) :**
  - **title :** `Former vos équipes, où que vous soyez ?`
  - **subtitle :** `30 minutes pour analyser vos besoins et identifier le bon format, que vous travailliez avec nous ou non.`
  - **CTA principal :** `Réserver un diagnostic gratuit` → /contact
  - **CTA secondaire :** `Voir le catalogue complet` → /formation-ia-entreprise
- **Rationale :** Repris verbatim du live.

## 5. FAQ
Pas de bloc FAQ dans le template.

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Formation IA {ville} ×11 | /formation-ia/[ville] | pages locales (hors périmètre ce cycle) |
| Voir le catalogue complet | /formation-ia-entreprise | hub programme (propriétaire de l'intention formation) |
| Parlons de votre projet | /contact | lien inline sous la grille |
| Réserver un diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA principal :** « Former vos équipes, où que vous soyez ? » → /contact (bouton : `Réserver un diagnostic gratuit`)
- **CTA secondaire :** `Voir le catalogue complet` → /formation-ia-entreprise

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `AI Makers dispense de la formation IA en entreprise, en présentiel, dans 11 villes en France et au Maroc — Paris, Nice, Lyon, Toulouse, Bordeaux, Lille, Nantes, Marseille, Strasbourg, Montpellier et Casablanca. Les sessions sont hands-on et construites sur les cas d'usage réels de chaque équipe ; les six mêmes programmes sont disponibles dans chaque ville, des fondamentaux de l'IA jusqu'à Claude et Microsoft Copilot.`
- **Entrée llms.txt (FR) :** `[Formation IA par ville](https://aimakers.fr/formation-ia) : formation IA en entreprise, hands-on, dans 11 villes en France et au Maroc, sur vos cas d'usage réels.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| 11 villes listées | src/lib/villes-formation.ts (vérifié) |
| 6 programmes | src/lib/formations.ts (catalogue propriété de /formation-ia-entreprise) |
| +2 500 professionnels formés | public/llms.txt (canonique) |

## Localisation appliquée
Localisé depuis le master EN scellé (batch FR). Le FR étant la langue source live, le copy est repris verbatim de `page.tsx` ; corrections d'audit conservées telles quelles :

- **Double suffixe de marque (SEO §2a) :** Title raccourci à `Formation IA près de chez vous : 11 villes` (43 car.) — le template ajoute `| AI Makers` une seule fois. Le title live (63 car.) dépassait le budget une fois le suffixe rendu.
- **Meta au plafond (SEO §2b) :** meta ramenée à ~152 car. (liste de villes réduite à 4 exemples + « et Maroc »), en gardant le cadre présentiel / cas d'usage réels et une marge pour la dérive de traduction.
- **CONSERVÉ (protégé) :** le cadrage déflationniste « sur vos cas d'usage réels » (distingue la formation entreprise en présentiel de l'intention MOOC — liste KEEP du corpus). Hub court qui ne clone pas les 6 descriptions de programmes (route vers le hub programme).
- **Décisions dev (hors copy) :** route EN différée du hub programme et arbitrage de slug/canonique `/formation-ia` (propositions TICKET-EN-ROUTES) — sans objet pour le FR live, laissés en l'état.

## Reconciliation applied
Réconciliation des deux audits FR (SEO 85/100 + anti-slop **Clean, net 0** — hub de routage local).
- **Titre :** déjà raccourci (`Formation IA près de chez vous : 11 villes`, ~55 car. rendus), aucun suffixe manuel. Conforme B1.
- **Meta :** déjà trimée à ~152 car.
- **Mot-clé FR :** `formation ia` **6 900 / KD 55** renseigné — tête de requête laissée au hub programme `/formation-ia-entreprise` ; ce hub-ci garde l'intention géolocalisée « formation ia [ville] ». Anti-cannibalisation vérifiée (titles divergents), pas un finding.
- **« X, pas Y » / cadrage — CONSERVÉ :** « sur vos cas d'usage réels » et « que vous travailliez avec nous ou non » = cadrage déflationniste honnête (KEEP-list), non neutralisé.
- **PROTÉGÉ :** hub court qui ne clone pas les 6 descriptions de programmes (route vers le catalogue). Tags `TBD (Ahrefs FR)` conservés.
- **Décision propriétaire en attente :** enrichissement léger possible (ligne de valeur locale ou `ItemList`/`Course` schema) — non bloquant.
