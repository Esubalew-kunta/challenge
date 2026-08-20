# Formation — Acculturation IA : Masterclass · `/formation-ia-entreprise/acculturation-ia`

**Source auditée :** `[FR] website-content/formation-ia-entreprise--acculturation-ia/…md`
**Comparé au code :** `src/lib/formations.ts` (entrée `acculturation-ia`, `formateurs`, `formationStats`), `src/app/formation-ia-entreprise/[slug]/page.tsx` (Course+FAQ+Breadcrumb schema, meta = `formation.resume`), `layout.tsx` (template `%s | AI Makers`), `sitemap.ts`, `public/llms.txt`
**Ahrefs :** France/FR, 2026-07 — `acculturation ia` 200 ; `formation ia entreprise` 700/KD13 ; `formation acculturation ia` 40
**Voir aussi :** `_cross-page-findings.md`

## Score : 82 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 21 / 25 |
| Factual & Claim Accuracy | 22 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Programme d'entrée bien positionné : primaire `acculturation ia` (200) vérifié et distinct des autres enfants, cannibalisation évitée (le générique `formation ia entreprise` est cédé au pilier). Qualiopi/OPCO correctement en `[à valider placement]`, non affirmé. Deux freins systémiques (title à double suffixe, meta sans champ dédié) et une stat de résultat non sourcée. À corriger sur les tickets template puis publier.

## Findings

### 🟠 High
1. **Title rendu ≈ 71 caractères — double suffixe.** Le code produit `title = "${name} | Formation IA en entreprise"` (page.tsx L41), puis `layout.tsx` ajoute `| AI Makers`. Rendu : « Acculturation IA : Masterclass | Formation IA en entreprise | AI Makers » = **71 car.** Deux suffixes de marque empilés. **Fix :** `TICKET-FORM-TITLE-TPL` — retirer le mid-suffixe FR codé en dur ; title proposé « Acculturation IA : masterclass pour vos équipes » (~55 rendu). Systémique aux 6 pages formation (voir cross-page).

2. **Stat de résultat non sourcée affichée en dur : « 10+ cas d'usage identifiés ».** `resultats[]` en source (formations.ts) rend « 10+ » comme chiffre de résultat sans source ni tag visible. La page ne peut pas porter le `[à valider]` du master (il n'existe que dans l'audit). **Fix :** sourcer (base de sessions passées) ou reformuler en promesse non chiffrée. Note : « 7 h/semaine » trace au canonique (llms.txt) ✓ et « 0 prérequis » est structurel — seul « 10+ » est en l'air.

### 🟡 Medium
3. **Meta description = `resume` (~123 car.), sous le plancher 140.** Le template n'a pas de champ `seoDescription` : `generateMetadata` utilise `formation.resume` (page.tsx L42). Le résumé actuel fait ~123 car. **Fix :** `TICKET-FORM-SEO-DESC` (champ dédié) ; meta proposée ~158 car. valable.

4. **FAQ : variation anti-cannibalisation proposée mais non live.** Le master remplace le slot générique « adaptée à notre secteur ? » par une question spécifique (« Quel assistant — ChatGPT/Claude/Gemini/Copilot ? »). Bon, mais cela exige d'éditer `formations.ts` (le template lit `formation.faq`). Tant que non édité, la FAQ live garde la question générique partagée avec d'autres pages. **Fix :** appliquer la variation dans `formations.ts`.

## Ce que la page fait bien (vérifié)
- **Primaire correct et distinct :** `acculturation ia` (200, vérifié Ahrefs) — bien plus fort que « formation acculturation ia » (40) ; distinct des 5 autres enfants. Générique 700 cédé au pilier = anti-cannibalisation propre.
- **Compliance impeccable :** Qualiopi/OPCO en `[à valider placement]`, **aucun** % de financement ni certification affirmé (confirmé : absent de `formations.ts` et `llms.txt`).
- **Schema implémenté :** `Course` + `FAQPage` + `BreadcrumbList` réellement émis (page.tsx L96-131), pas seulement planifiés.
- **E-E-A-T réel :** grille formateurs (personnes réelles, LinkedIn) rendue via `FormateursGrid` ; positionnement « formés par ceux qui déploient en production ».
- **Différenciateur clair :** cadrage multi-assistants (Claude/ChatGPT/Gemini/Copilot) qui sépare la page des programmes mono-outil.
- **Indexabilité :** route en sitemap (sitemap.ts L91), canonical propre.

## Liste de correctifs priorisée
1. **(🟠 template, systémique)** `TICKET-FORM-TITLE-TPL` — supprimer le double suffixe.
2. **(🟠 données)** Sourcer ou reformuler « 10+ cas d'usage ».
3. **(🟡 template)** `TICKET-FORM-SEO-DESC` — champ meta dédié (résumé sous le plancher).
4. **(🟡 données)** Appliquer la FAQ variée dans `formations.ts`.

## Questions client
- « 10+ cas d'usage identifiés » repose-t-il sur des données de sessions réelles ? Sinon, le reformuler.
- Y a-t-il éligibilité Qualiopi/OPCO à afficher, et où ? (décision de placement)
