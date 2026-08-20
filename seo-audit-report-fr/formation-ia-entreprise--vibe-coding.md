# Formation — Vibe Coding · `/formation-ia-entreprise/vibe-coding`

**Source auditée :** `[FR] website-content/formation-ia-entreprise--vibe-coding/…md`
**Comparé au code :** `src/lib/formations.ts` (entrée `vibe-coding`, `formateurs`), `src/app/formation-ia-entreprise/[slug]/page.tsx`, `layout.tsx`, `sitemap.ts`, `public/llms.txt`
**Ahrefs :** France/FR, 2026-07 — `formation vibe coding` 150 ; `vibe coding` 4 900/KD30 (informationnel/MOOC) ; `formation ia entreprise` 700 (cédé au pilier)
**Voir aussi :** `_cross-page-findings.md`

## Score : 83 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 21 / 25 |
| Factual & Claim Accuracy | 22 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Programme avancé bien cadré : primaire `formation vibe coding` (150) vérifié et distinct ; le parent `vibe coding` (4 900) est justement écarté comme informationnel/MOOC hors ICP entreprise — bonne discipline d'intention (§5.4). Outils nommés actuels (Claude Code, Cursor, Codex). Compliance propre. Freins : tickets template + stats de résultat non sourcées. À publier après tickets.

## Findings

### 🟠 High
1. **Title rendu ≈ double suffixe.** « Vibe Coding | Formation IA en entreprise | AI Makers ». **Fix :** `TICKET-FORM-TITLE-TPL`. Title proposé « Vibe Coding : vos outils sans être développeur » (~58 rendu). Systémique.

2. **Stats de résultat non sourcées : « 1er outil » et « ROI mesuré ».** `resultats[]` rend « 1er outil construit pendant la formation » (plausible, structurel) et « ROI mesuré sur les automatisations déployées » — ce dernier est une promesse de résultat sans source. **Fix :** « ROI » reformulé en objectif (« ROI visé/cadré ») ou sourcé. Master tague `[to validate]` (non rendu).

### 🟡 Medium
3. **Meta = `resume` — sans champ dédié.** `TICKET-FORM-SEO-DESC` ; meta proposée ~160 car. (au plafond — surveiller la troncature). Peu urgent.

## Ce que la page fait bien (vérifié)
- **Intention maîtrisée :** le parent haute-volume `vibe coding` (4 900) est explicitement écarté (informationnel/MOOC), la page vise `formation vibe coding` (150, buyer entreprise). Évite un namespace collision (§5.4).
- **Primaire distinct :** aucune collision avec les 5 autres enfants.
- **Contenu enterprise-grade réel :** modules agents/industrialisation/coûts qui séparent le programme d'un tuto week-end ; outils actuels (Claude Code, Cursor, Codex).
- **Compliance :** Qualiopi/OPCO en `[à valider placement]`.
- **Schema implémenté :** `Course` + `FAQPage` + `BreadcrumbList`. FAQ déjà spécifiques (savoir coder, outils, livrable) — pas de duplication.
- **Indexabilité :** sitemap L91, canonical propre.

## Liste de correctifs priorisée
1. **(🟠 template, systémique)** `TICKET-FORM-TITLE-TPL`.
2. **(🟠 données)** Reformuler/sourcer « ROI mesuré ».
3. **(🟡 template)** `TICKET-FORM-SEO-DESC` (meta au plafond — vérifier ≤160 après variantes).

## Questions client
- « ROI mesuré sur les automatisations déployées » : dispose-t-on d'exemples chiffrés, ou reformuler en objectif ?
- Éligibilité Qualiopi/OPCO à afficher, et où ?
