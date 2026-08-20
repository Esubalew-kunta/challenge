# Formation — Création & Publicité (IA pour la Créa) · `/formation-ia-entreprise/creation-publicite-ia`

**Source auditée :** `[FR] website-content/formation-ia-entreprise--creation-publicite-ia/…md`
**Comparé au code :** `src/lib/formations.ts` (entrée `creation-publicite-ia`, `formateurs`), `src/app/formation-ia-entreprise/[slug]/page.tsx`, `layout.tsx`, `sitemap.ts`, `public/llms.txt`
**Ahrefs :** France/FR, 2026-07 — `formation ia créative` **20** ; `formation ia marketing` 250/KD10 ; `formation midjourney` 300/KD0 ; `formation ia design` 150 ; `formation ia générative` 300/KD33
**Voir aussi :** `_cross-page-findings.md`

## Score : 78 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 21 / 25 |
| Factual & Claim Accuracy | 22 / 25 |
| On-Page SEO | 12 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 10 / 15 |

## Verdict
Contenu solide (stack créatif nommé, DA préservée, compliance propre), mais le mot-clé primaire est mal choisi : `formation ia créative` mesure ~20 en France, pas les 150 revendiqués. Des termes vérifiés bien plus forts existent pour exactement ce public. À corriger sur le primaire **avant** promotion, puis tickets template.

## Findings

### 🟠 High
1. **Primaire surévalué et quasi-nul : `formation ia créative` = ~20 (revendiqué 150).** Vérifié Ahrefs France 2026-07 : « formation ia créative » = **20** (le master annonce 150). Une page ne peut pas gagner de trafic sur un terme que ~personne ne tape. Or des termes vérifiés couvrant le même public existent : **`formation ia marketing` 250/KD10**, **`formation midjourney` 300/KD0**, `formation ia design` 150, `formation ia générative` 300/KD33. **Fix :** basculer le primaire sur `formation ia marketing` (250/KD10 — meilleur fit créa/marketing) et porter `formation midjourney`/`formation ia design` en variantes de corps. Reclasser `formation ia créative` en simple variante.

2. **Title rendu ≈ double suffixe.** « Création & Publicité : IA pour la Créa | Formation IA en entreprise | AI Makers ». **Fix :** `TICKET-FORM-TITLE-TPL`. Title proposé « Création & Publicité : l'IA pour la créa » (~53 rendu) — mais y intégrer le primaire retenu (marketing/créa). Systémique.

3. **Stat de résultat non sourcée : « x5 cycles de production accélérés ».** Affichée en dur dans `resultats[]`. Multiplicateur de performance sans source. **Fix :** sourcer ou reformuler (« cycles nettement accélérés »). Master tague `[to validate]`.

### 🟡 Medium
4. **`formation ia marketing` (250) revendiqué en secondaire ici ET chez go-to-market-sales.** Risque de double-ciblage entre siblings. **Fix :** assigner ce terme en propre à cette page (fit créa/marketing) ; go-to-market s'appuie sur `formation prospection`/`prospection ia`. Voir cross-page.

5. **Meta = `resume` — sans champ dédié.** `TICKET-FORM-SEO-DESC` ; meta proposée 153 car. valable.

## Ce que la page fait bien (vérifié)
- **Stack créatif nommé et différenciant :** Nano Banana (génération) + Weavy (pipeline) — outils concrets, du brief à la livraison.
- **Cadrage honnête :** « sans perdre la direction artistique » ; FAQ #3 « L'IA remplace-t-elle la DA ? Non » — pas de sur-promesse (§1.2 pass).
- **Compliance :** Qualiopi/OPCO en `[à valider placement]`.
- **Schema implémenté :** `Course` + `FAQPage` + `BreadcrumbList`.
- **Indexabilité :** sitemap L91, canonical propre.

## Liste de correctifs priorisée
1. **(🟠 SEO — le plus impactant)** Basculer le primaire sur `formation ia marketing` (250/KD10) ; `formation midjourney`/`formation ia design` en corps.
2. **(🟠 template, systémique)** `TICKET-FORM-TITLE-TPL` (avec le nouveau primaire).
3. **(🟠 données)** Sourcer/reformuler « x5 ».
4. **(🟡)** Résoudre le double-ciblage `formation ia marketing` avec go-to-market.

## Questions client
- Le public visé est-il plutôt « créa/design » ou « marketing » ? (détermine `formation ia design` vs `formation ia marketing` comme primaire)
- « x5 cycles accélérés » repose-t-il sur une mesure réelle ?
- Éligibilité Qualiopi/OPCO à afficher, et où ?
