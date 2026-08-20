# Formation — Microsoft Copilot · `/formation-ia-entreprise/microsoft-copilot`

**Source auditée :** `[FR] website-content/formation-ia-entreprise--microsoft-copilot/…md`
**Comparé au code :** `src/lib/formations.ts` (entrée `microsoft-copilot`, `formateurs`), `src/app/formation-ia-entreprise/[slug]/page.tsx`, `layout.tsx`, `sitemap.ts`, `public/llms.txt`
**Ahrefs :** France/FR, 2026-07 — `formation copilot` 350/KD0 ; `formation microsoft copilot` 100 ; `formation copilot microsoft` 50 ; `formation ia entreprise` 700 (cédé au pilier)
**Voir aussi :** `_cross-page-findings.md`

## Score : 84 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 22 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Bien positionné : primaire `formation copilot` (350, KD0) — le meilleur volume accessible après `formation claude` — plus co-primaire exact `formation microsoft copilot` (100), les deux vérifiés et distincts des siblings. Prérequis honnête (licences en place), formateur nommé pertinent (Adel Dahani, ex-IBM). Compliance propre. Freins : tickets template + stat de résultat non sourcée. À publier après tickets.

## Findings

### 🟠 High
1. **Title rendu ≈ double suffixe.** « Microsoft Copilot | Formation IA en entreprise | AI Makers ». **Fix :** `TICKET-FORM-TITLE-TPL`. Title proposé « Formation Microsoft Copilot pour vos équipes » (~56 rendu) — porte le co-primaire exact. Systémique.

2. **Stat de résultat non sourcée : « Gains de productivité mesurables par équipe ».** `resultats[]` l'affiche comme promesse ; les deux autres (« Licences rentabilisées », « -tps ») sont structurels. **Fix :** sourcer ou reformuler. Master tague `[to validate]`.

### 🟡 Medium
3. **Meta = `resume` — sans champ dédié.** `TICKET-FORM-SEO-DESC` ; meta proposée 158 car. valable.

4. **SEO : porter `formation copilot` (350) explicitement en H2.** Le head accessible n'est pas dans le H1 actuel (« rentabiliser vos licences »). **Fix :** H2 dédié à la construction.

## Ce que la page fait bien (vérifié)
- **Primaires forts et distincts :** `formation copilot` 350/KD0 + `formation microsoft copilot` 100 — vérifiés, sans collision avec les siblings.
- **Prérequis honnête :** « Disposer de licences Microsoft 365 Copilot » affiché en clair — pas de sur-promesse (§1.2 pass).
- **Exactitude produit :** couverture app par app (Word/Excel/PowerPoint/Outlook/Teams) — factuelle et à jour.
- **Compliance :** Qualiopi/OPCO en `[à valider placement]`.
- **E-E-A-T ciblé :** formateur nommé Adel Dahani (ex-IBM, spécialiste déploiement Copilot) — traçable LinkedIn + logo IBM (formations.ts `formateurs`).
- **Schema implémenté :** `Course` + `FAQPage` + `BreadcrumbList`. FAQ #1 (dépendance licence) et #3 (concrétisée) déjà spécifiques.
- **Indexabilité :** sitemap L91, canonical propre.

## Liste de correctifs priorisée
1. **(🟠 template, systémique)** `TICKET-FORM-TITLE-TPL`.
2. **(🟠 données)** Sourcer/reformuler « gains mesurables par équipe ».
3. **(🟡 SEO)** H2 sur `formation copilot`.

## Questions client
- « Gains de productivité mesurables par équipe » : dispose-t-on de mesures réelles à citer ?
- Éligibilité Qualiopi/OPCO à afficher, et où ?
