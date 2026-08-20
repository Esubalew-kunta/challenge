# Outils gratuits — hub (/outils)

**Source audité :** `[FR] website-content/outils/outils.md`
**Comparé à :** `src/app/outils/page.tsx`, `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt` · Ahrefs FR
**Voir aussi :** `_cross-page-findings.md`

## Score : 85 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 23 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 12 / 15 |

## Verdict
Ship après corrections. Hub-aiguilleur propre : point de vue honnête (« sans inscription forcée »), route vers les 3 outils enfant sans cloner leur contenu, et **refuse justement de courir après la tête de requête annuaire** `outils ia`. La seule correction sérieuse est le title, très au-delà du budget (66 → ~79 car. rendus). Aucune fabrication au niveau du hub ; la véracité des promesses d'outils est vérifiée dans les audits enfant (voir les 3 fichiers outils).

## Findings

### 🟡 Medium

**1. Title live très au-delà du budget.**
`page.tsx:16` : `title: "Outils gratuits : ROI, visibilité IA, opportunités d'automatisation"` = **66 car.** (pas de suffixe manuel) → rendu **≈79 car.** avec `| AI Makers`. Coupé bien avant la fin en SERP. Master propose `Outils IA gratuits : ROI, visibilité IA, scanner` (48 → 60 pile). Fix : appliquer la version courte (bonus : injecte « IA » près du début, plus proche de `outils ia`).

**2. Meta description live hors budget.**
`page.tsx:18` : ≈177 car. → tronquée. Master trime à ~147 en gardant « sans inscription forcée », ChatGPT et « systèmes IA les plus rentables ». Fix : appliquer la version proposée.

### 🟢 Low

**3. Volume `outil ia` mal étiqueté : 700 FR, pas 1 300.**
Master §2 : « 1 300 (« outil ia ») ». Ahrefs FR : `outil ia` = **700** et `outils ia` = **700** (KD 53) ; le **1 300 est le volume global**, pas France. À corriger dans le master (ruleset §5.1 : les volumes viennent d'Ahrefs réglé sur le pays cible). Sans impact sur la décision : `outils ia` est en partie une requête **annuaire** (l'internaute veut une liste de 50 applis) — le master a raison de ne pas sur-optimiser le hub pour cette tête de requête. Décision confirmée correcte.

**4. Schema d'index minimal.**
`page.tsx:24` : `BreadcrumbList` seul. Un `ItemList`/`CollectionPage` des 3 outils renforcerait la lisibilité GEO. Non bloquant.

## Ce que la page fait de bien (vérifié)
- **Point de vue citable propre au hub** : « Trois outils pour mesurer votre potentiel IA avant de parler à qui que ce soit » + la ligne de méthode « ces outils utilisent la même méthode que nos missions ». Honnêteté = valeur ajoutée du hub, pas juste une liste de liens.
- **Anti-cannibalisation correcte** : ne vise pas `outils ia` en force ; l'intention commerciale précise vit sur les pages enfant (ROI, audit GEO, scanner).
- **Blurbs d'aiguillage fidèles à la mécanique réelle** de chaque outil (4 curseurs ROI, 48h humain pour l'audit GEO, top 3 à l'écran pour le scanner) — cohérents avec le code des enfants (voir audits outils).
- **Answer-first GEO** (master §8) autonome, décrit les 3 outils de façon citable, précise « deux affichent le résultat à l'écran, sans email ».
- **Route dans le sitemap** (`sitemap.ts:30`) + les 3 outils (`sitemap.ts:31-33`). **BreadcrumbList** présent. Pas de double suffixe de marque.

## Priorité de correction
1. **🟡 Raccourcir le title** (66→48) — corrige un débordement SERP marqué.
2. **🟡 Trimer la meta** (177→147).
3. **🟢 Corriger le volume `outil ia`** (700 FR) dans le master ; option `ItemList` schema.

## Questions ouvertes (décision client)
- Aucune bloquante au niveau du hub. (RGPD des outils capturant des données = traité dans les audits enfant.)

## Candidats cross-page
- **Title hors budget** : le plus marqué du lot (66 car.) — pattern partagé.
- **Volumes étiquetés en global au lieu de France** : `outil ia` (1 300 global vs 700 FR) — vérifier les autres volumes du master.
- **RGPD sur les outils enfant capturant des données** (audit-geo-gratuit, et selon capture ROI/scanner) — voir audits outils.
