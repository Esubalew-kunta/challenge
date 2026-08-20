# Formation — Go-to-Market & Sales · `/formation-ia-entreprise/go-to-market-sales`

**Source auditée :** `[FR] website-content/formation-ia-entreprise--go-to-market-sales/…md`
**Comparé au code :** `src/lib/formations.ts` (entrée `go-to-market-sales`, `formateurs`), `src/app/formation-ia-entreprise/[slug]/page.tsx`, `layout.tsx`, `sitemap.ts`, `public/llms.txt`
**Ahrefs :** France/FR, 2026-07 — `formation prospection` 200/KD1 ; `prospection ia` 150 ; `formation ia marketing` 250/KD10 ; `formation ia commerciale` ≈ nul ; `formation ia entreprise` 700 (cédé au pilier)
**Voir aussi :** `_cross-page-findings.md`

## Score : 83 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 21 / 25 |
| Factual & Claim Accuracy | 21 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 13 / 15 |

## Verdict
Bon pivot mots-clés : le master a remplacé un miroir bas-volume (`formation ia commerciale`, ≈ nul) par `formation prospection` (200/KD1) — vérifié, pertinent (la page industrialise la prospection) et distinct des siblings. Stack outbound nommé, FAQ variée. Compliance propre. Freins : tickets template + deux stats de résultat non sourcées. À publier après tickets.

## Findings

### 🟠 High
1. **Title rendu ≈ double suffixe et long.** « Go-to-Market & Sales | Formation IA en entreprise | AI Makers ». Le title proposé complet « Go-to-Market & Sales : la prospection augmentée par l'IA » rendrait ~67 car. **Fix :** `TICKET-FORM-TITLE-TPL` + version courte « Go-to-Market & Sales : prospection augmentée IA » (~59 rendu). Systémique.

2. **Deux stats de résultat non sourcées : « x3 volume de prospection » et « +conv. ».** Affichées en dur dans `resultats[]`. Multiplicateur et hausse de conversion sans source. **Fix :** sourcer ou reformuler en objectifs. « 100 % des messages personnalisés » est structurel (capacité de l'outil), acceptable. Master tague `[to validate]`.

### 🟡 Medium
3. **`formation ia marketing` (250) revendiqué en secondaire ici ET chez creation-publicite-ia.** Double-ciblage entre siblings. **Fix :** laisser ce terme à creation-publicite-ia ; cette page tient déjà `formation prospection` (200/KD1) + `prospection ia` (150). Voir cross-page.

4. **Meta = `resume` — sans champ dédié.** `TICKET-FORM-SEO-DESC` ; meta proposée 159 car. (au plafond — surveiller).

## Ce que la page fait bien (vérifié)
- **Primaire vérifié et bien choisi :** `formation prospection` 200/KD1 (très accessible), aligné sur le contenu (industrialisation prospection), distinct des siblings.
- **FAQ variée (anti-cannibalisation) :** le master remplace le slot générique « s'appuie sur nos cas réels ? » — partagé avec d'autres pages — par « Faut-il des abonnements Clay/Lemlist/FullEnrich ? » (spécifique buyer). Bonne pratique (à appliquer dans `formations.ts`).
- **Stack outbound nommé :** Clay + FullEnrich (enrichissement), Lemlist (séquences) — concret et différenciant.
- **Compliance :** Qualiopi/OPCO en `[à valider placement]`.
- **Schema implémenté :** `Course` + `FAQPage` + `BreadcrumbList`.
- **GEO :** paragraphe réponse-d'abord autonome, indexabilité propre (sitemap L91).

## Liste de correctifs priorisée
1. **(🟠 template, systémique)** `TICKET-FORM-TITLE-TPL` + version courte du title.
2. **(🟠 données)** Sourcer/reformuler « x3 » et « +conv. ».
3. **(🟡)** Céder `formation ia marketing` à creation-publicite-ia ; garder prospection.
4. **(🟡 données)** Appliquer la FAQ variée dans `formations.ts`.

## Questions client
- « x3 volume de prospection » et « +conv. » reposent-ils sur des mesures clients réelles ?
- Éligibilité Qualiopi/OPCO à afficher, et où ?
