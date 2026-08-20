# Étude de cas — Sage GEO · `/etudes-de-cas/sage-geo`

**Source auditée :** `[FR] website-content/etudes-de-cas--sage-geo/etudes-de-cas--sage-geo.md`
**Comparé au code :** `src/lib/case-studies.ts` (entrée `sage-geo`), `src/app/etudes-de-cas/[slug]/page.tsx`, `layout.tsx`, `sitemap.ts`, `public/llms.txt`, `src/lib/site-config.ts` (Sage = client listé)
**Ahrefs :** France/FR, 2026-07 (léger — preuve branded ; GEO = catégorie émergente sans head term)
**Voir aussi :** `_cross-page-findings.md`

## Score : 86 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 23 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Solide et honnête. Toutes les métriques baseline (447 prompts, 55 000 impressions / 537 clics, ~70 %, 1er sept. 2026) tracent mot pour mot vers `case-studies.ts` et sont explicitement encadrées comme point de départ d'une mission `inProgress`, pas comme résultats. Aucun témoignage fabriqué (absent en source, absent sur la page). Le title dépasse le budget (contrainte template partagée). À publier tel quel.

## Findings

### 🟠 High
1. **Title rendu ≈ 77 caractères.** « Devenir la référence citée par les IA sur la facture électronique » (65) + `| AI Makers` (12) = **77 car.** (le master sous-estime à « ~68 »). Google tronque. **Fix :** même ticket que les autres cas — `TICKET-CS-META-TITLE` pour un champ `metaTitle` distinct du H1. Trim proposé « IA & facture électronique : devenir la référence citée » (~53 rendu) valable.

### 🟡 Medium
2. **Métriques baseline affichées en gros dans la grille hero — risque de mauvaise lecture par les moteurs IA.** Le template rend `55 000` et `447` comme chiffres primaires (page.tsx L164). Les labels (« le point de départ », « prompts IA suivis ») les cadrent correctement, mais un scanner/IA qui n'extrait que la paire valeur+label court peut lire ces baselines comme des résultats obtenus. Master les tague `[à valider]` + `inProgress` — bon. **Fix :** conserver le badge « Mission en cours, résultats en cours de mesure » (rendu via `inProgress`, page.tsx L143-148) — il est présent, le maintenir. Aucun changement de données requis.

3. **Cohérence anonymisation vs identité.** Le TL;DR source dit « Un éditeur de logiciels de gestion leader » (anonymisé) alors que `cardTitle`, `logo` et le breadcrumb exposent « Sage » nommément (Sage est un client listé dans `site-config.ts` L464). Ce n'est pas une fabrication — juste une tension de ton. Le paragraphe GEO du master nomme Sage, ce qui est légitime. **Fix :** décision client — soit assumer « Sage » partout, soit garder l'anonymat partout ; le mix actuel est acceptable mais incohérent.

4. **Mots-clés : pas de head term GEO — confirmé.** « geo étude de cas » et termes GEO génériques ≈ 0 en France (Ahrefs 2026-07). Correct : la valeur est d'alimenter la money page `/seo-geo` en preuve d'ancrage. Aucune action.

## Ce que la page fait bien (vérifié)
- **Zéro fabrication, honnêteté sur le statut :** métriques baseline mot pour mot depuis `case-studies.ts`, `inProgress: true` respecté, dernier visuel « en cours de mesure », **aucun témoignage inventé** (absent en source → absent sur la page). Exemplaire au regard du §7.
- **Schema implémenté :** `Article` + `FAQPage` + `BreadcrumbList` émis (page.tsx L119-121). FAQ 3 Q/R éligibles.
- **Indexabilité :** `published` → route en sitemap (sitemap.ts L100), canonical propre.
- **GEO :** paragraphe réponse-d'abord autonome, nomme le client, l'enjeu daté (1er sept. 2026) et la méthode — hautement citable. Cohérent avec les figures canoniques llms.txt (aucune contradiction).
- **Maillage stratégique :** lien primaire vers `/seo-geo` (le pilier dont Sage est la preuve) — logique de cluster correcte.

## Liste de correctifs priorisée
1. **(🟠 template)** `TICKET-CS-META-TITLE` — champ `metaTitle` pour ramener le `<title>` sous 60 car.
2. **(🟡)** Trancher l'anonymat Sage (nommé partout ou anonyme partout).
3. **(🟡)** Maintenir le badge `inProgress` pour que les baselines ne soient jamais lues comme des résultats.

## Questions client
- Sage peut-il être nommé publiquement dans le corps (TL;DR) comme il l'est déjà via logo/breadcrumb ?
- Les chiffres baseline (55 000 / 537 / ~70 %) sont-ils validés pour publication ? (levée du `[à valider]`)
