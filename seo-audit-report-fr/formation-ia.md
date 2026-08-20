# Formation IA par ville — hub (/formation-ia)

**Source audité :** `[FR] website-content/formation-ia/formation-ia.md`
**Comparé à :** `src/app/formation-ia/page.tsx`, `src/lib/villes-formation.ts`, `src/lib/formations.ts`, `src/app/formation-ia-entreprise/page.tsx` (sibling), `src/lib/metadata.ts`, `src/app/layout.tsx`, `src/app/sitemap.ts`, `public/llms.txt` · Ahrefs FR
**Voir aussi :** `_cross-page-findings.md`

## Score : 85 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 21 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 12 / 15 |
| Technical SEO & GEO | 12 / 15 |

## Verdict
Ship après corrections mineures. Hub local propre et bien conçu : il route vers ses 11 pages ville et son catalogue sans cloner le contenu enfant, et il **ne cannibalise pas** le hub programme `/formation-ia-entreprise` (intentions distinctes, vérifiées). Seuls le title et la meta débordent du budget une fois le suffixe de marque rendu. Aucune fabrication ; comptages vérifiés exacts.

## Findings

### 🟡 Medium

**1. Title live hors budget une fois le suffixe ajouté.**
`page.tsx:12` : `title: "Formation IA près de chez vous : 11 villes en France et au Maroc"` = **63 car.** (pas de suffixe manuel) → rendu **≈76 car.** avec `| AI Makers`. Master propose `Formation IA près de chez vous : 11 villes` (43 → ~55). Fix : appliquer la version courte au champ `title`.

**2. Meta description live hors budget.**
`page.tsx:13` liste les 11 villes une à une → largement au-delà de 160 car., tronquée en SERP. Master trime à ~152 car. (4 villes exemples + « et Maroc »). Fix : appliquer la version proposée, en gardant une marge pour la dérive de traduction.

**3. Thinness du hub (risque de type page-index).**
Le hub est volontairement court : hero + grille de 11 villes + 6 cartes programme en crosslink. C'est le bon choix anti-duplication, mais un hub doit ajouter une valeur citable propre. L'intro answer-first (« nos formateurs interviennent en présentiel… chaque page ville détaille le tissu économique local ») fournit ce minimum. Amélioration possible (non bloquante) : une phrase par région sur ce qui distingue l'offre locale, ou un `ItemList`/`Course` schema pour la collection ville. Confirmé : pas de contenu dupliqué depuis les enfants.

### 🟢 Low

**4. `formation ia` (6 900 FR, KD 55) laissé au sibling — décision correcte.**
Ahrefs FR : `formation ia` = **6 900/mois** (KD 55). Le master attribue cette tête de requête au hub programme `/formation-ia-entreprise` et réserve à ce hub-ci l'intention géolocalisée « formation ia [ville] » (portée par les pages enfant). Vérifié en live : les titles divergent — `/formation-ia` = « près de chez vous : 11 villes » (geo), `/formation-ia-entreprise:28` = « 6 programmes hands-on sur vos cas réels » (catalogue). **Pas de cannibalisation** — c'est un pass, pas un finding.

## Ce que la page fait de bien (vérifié)
- **Comptages exacts** : 11 villes (`villes-formation.ts`, aligné llms.txt), 6 programmes (`formations.ts` : acculturation-ia, vibe-coding, creation-publicite-ia, go-to-market-sales, microsoft-copilot, maitriser-claude). Aucun chiffre inventé.
- **Anti-cannibalisation exemplaire** : ne clone pas les 6 descriptions programme, route vers `/formation-ia-entreprise` (propriétaire du catalogue). Modèle à suivre pour les autres hubs.
- **Pas de double suffixe de marque** : title propre côté marque (contrairement à `offer-pages/formation.ts:17` — voir cross-page).
- **Answer-first GEO** propre (master §8), liste les 11 villes de façon citable.
- **BreadcrumbList schema implémenté** (`page.tsx:20`).
- **Route dans le sitemap** (`sitemap.ts:19`), + 11 pages ville et 6 programmes générés depuis les libs (`sitemap.ts:84-96`).
- **Cadrage « sur vos cas d'usage réels »** distingue l'offre entreprise-présentiel de l'intention MOOC — pertinent pour l'ICP.

## Priorité de correction
1. **🟡 Raccourcir le title** (63→43) au champ `title`.
2. **🟡 Trimer la meta** (~152 car.).
3. **🟢 Enrichir légèrement le hub** (une ligne de valeur locale ou un `ItemList`/`Course` schema) pour réduire le risque de thinness.

## Questions ouvertes (décision client)
- Aucune bloquante. (Arbitrage de canonique EN `/formation-ia` laissé en ticket dev, sans objet pour le FR live.)

## Candidats cross-page
- **`offer-pages/formation.ts:17`** : `title: "Formation IA | AI Makers"` — double suffixe de marque, à corriger avec le lot title.
- **Cannibalisation `formation ia` (6 900)** : trio `/formation-ia` (geo) / `/formation-ia-entreprise` (catalogue) / `offer-pages/formation.ts` — vérifier lequel des trois assets rend réellement une page et qu'ils ne se disputent pas la tête de requête.
- **Title/meta hors budget** : pattern partagé (glossaire, challenge, formation-ia).
