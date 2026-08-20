# Formation — Maîtriser Claude en entreprise · `/formation-ia-entreprise/maitriser-claude`

**Source auditée :** `[FR] website-content/formation-ia-entreprise--maitriser-claude/…md`
**Comparé au code :** `src/lib/formations.ts` (entrée `maitriser-claude`, `formateurs`), `src/app/formation-ia-entreprise/[slug]/page.tsx`, `layout.tsx`, `sitemap.ts`, `public/llms.txt`
**Ahrefs :** France/FR, 2026-07 — `formation claude` 700/KD0 ; `formation ia entreprise` 700/KD13 (cédé au pilier) ; `formation ia générative` 300/KD33
**Voir aussi :** `_cross-page-findings.md`

## Score : 85 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 22 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
La formation la mieux positionnée du catalogue : primaire `formation claude` (700, KD0) — fort volume, quasi zéro concurrence, vérifié. Contenu produit-exact (Skills, Projects, Cowork, MCP — fonctionnalités Claude actuelles, aucun fait périmé), formateur nommé pertinent (Walid Boulanouar, CTO). Compliance propre. Seuls freins : les tickets template partagés et une stat « 100 % du potentiel » non sourcée. À publier après les tickets.

## Findings

### 🟠 High
1. **Title rendu ≈ 71 caractères — double suffixe.** « Maîtriser Claude en entreprise | Formation IA en entreprise | AI Makers » = ~71 car. **Fix :** `TICKET-FORM-TITLE-TPL`. Title proposé « Maîtriser Claude en entreprise » (~42 rendu) — court, avec le primaire `formation claude` à porter dans H1/H2. Systémique.

2. **Stat de résultat vague/non sourcée : « 100 % du potentiel de Claude exploité ».** Rendue en dur dans `resultats[]` (formations.ts). Non mesurable, non sourcée. **Fix :** reformuler en résultat concret (ex. « Skills et automatisations déployés à l'échelle de l'équipe ») ou sourcer. Le master la tague `[to validate]` (non rendu sur la page).

### 🟡 Medium
3. **Meta = `resume` (158 car.) — dans le budget, mais sans champ dédié.** Ici le résumé fait 158 car. (correct), donc pas de problème de longueur, mais il double office de meta. `TICKET-FORM-SEO-DESC` reste utile pour découpler H1/meta/résumé. Peu urgent pour cette page.

4. **SEO à renforcer : `claude en entreprise` / `claude ia` en H2.** Adjacents (~200) non encore exploités en sous-titres. **Fix :** structurer un H2 dédié à la construction.

## Ce que la page fait bien (vérifié)
- **Meilleur primaire du catalogue :** `formation claude` 700/KD0 (vérifié) — distinct, aucune cannibalisation.
- **Exactitude produit :** Skills, Projects, Cowork, connecteurs MCP, intégrations Microsoft 365 — fonctionnalités Claude actuelles, aucun fait obsolète (§1.2 pass).
- **Compliance :** Qualiopi/OPCO en `[à valider placement]`, rien d'affirmé.
- **E-E-A-T ciblé :** formateur nommé pertinent Walid Boulanouar (CTO, expert Claude) — traçable LinkedIn (formations.ts `formateurs`).
- **Schema implémenté :** `Course` + `FAQPage` + `BreadcrumbList` (page.tsx L96-131). FAQ déjà spécifiques (Skills/Cowork, connecteurs) — pas de duplication avec les siblings.
- **GEO :** paragraphe réponse-d'abord dense et citable ; indexabilité propre (sitemap L91).

## Liste de correctifs priorisée
1. **(🟠 template, systémique)** `TICKET-FORM-TITLE-TPL`.
2. **(🟠 données)** Reformuler/sourcer « 100 % du potentiel de Claude ».
3. **(🟡 SEO)** H2 sur `claude en entreprise`.

## Questions client
- « 100 % du potentiel de Claude exploité » : reformuler en résultat concret ou fournir une base ?
- Éligibilité Qualiopi/OPCO à afficher, et où ?
