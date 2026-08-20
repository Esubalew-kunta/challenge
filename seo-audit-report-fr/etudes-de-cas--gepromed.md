# Étude de cas — Gepromed · `/etudes-de-cas/gepromed`

**Source auditée :** `[FR] website-content/etudes-de-cas--gepromed/etudes-de-cas--gepromed.md`
**Comparé au code :** `src/lib/case-studies.ts` (entrée `gepromed`), `src/app/etudes-de-cas/[slug]/page.tsx`, `layout.tsx`, `sitemap.ts`, `public/llms.txt`
**Ahrefs :** France/FR, 2026-07 (léger — preuve branded/longue traîne)
**Voir aussi :** `_cross-page-findings.md`

## Score : 87 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 24 / 25 |
| Factual & Claim Accuracy | 23 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Le cas le plus riche du batch, et propre. Le triangle de preuve (47 besoins / 16 skills / 6 personnes), le score 24/100 et « validation humaine avant tout export » tracent mot pour mot vers `case-studies.ts`. Aucun témoignage fabriqué. Deux accrocs : la phrase de clôture proposée n'a pas de champ template, et les certifications réglementaires du client (ISO 13485, Qualiopi) doivent porter la même validation que les autres faits client. À publier après ces ajustements.

## Findings

### 🟠 High
1. **Phrase de clôture narrative proposée sans champ template.** Le §7 propose : « Partenariat signé, 16 skills livrés le premier mois, et depuis, chaque déploiement commence par un pilote individuel. » Comme pour thinkone, aucun champ n'existe entre la stack/FAQ et le `CTASection` figé (page.tsx L336-343). **Telle quelle, elle ne peut pas être publiée.** Faits vrais et en source, mais pas de réceptacle. **Fix :** intégrer dans `learned` (déjà proche) ou créer un champ `outcome` (ticket).

### 🟡 Medium
2. **Certifications réglementaires du client à valider.** La page affirme que Gepromed opère sous « ISO 9001, ISO 13485, Qualiopi » (TL;DR + FAQ). Ce sont des **faits client**, pas un claim de certification d'AI Makers (bonne distinction, correctement notée dans le master). Mais ces statuts réglementaires attachés à une organisation nommée doivent porter la même exigence que les autres faits client. **Fix :** confirmer par écrit avec Gepromed que ces trois certifications sont exactes et publiables ; `[à valider]` comme les chiffres.

3. **Title rendu ≈ 68 caractères.** « Un département IA complet pour une MedTech de 6 personnes » (56) + `| AI Makers` = **68 car.** Overrun. **Fix :** `TICKET-CS-META-TITLE`. Trim « Un département IA pour une MedTech de 6 personnes » (~49 rendu) valable.

4. **Mots-clés : longue traîne niche — confirmé.** « ia pour medtech », « agents ia conformité iso 13485 » quasi nuls en France (Ahrefs 2026-07). Correct : preuve alimentant `/automatisation-ia-workflow`. Aucune action.

## Ce que la page fait bien (vérifié)
- **Zéro fabrication :** triangle 47/16/6, 24/100, 2–3 j/sem mot pour mot ; **aucun témoignage inventé** (absent en source).
- **Narration d'adoption forte :** masterclass → une collaboratrice → toute l'équipe, avec la leçon « démarrer par un pilote individuel » — E-E-A-T de première main, hautement crédible.
- **Claim de conformité honnête :** « IA auditable, validation humaine avant tout export » — cadrage responsable pour un contexte réglementé, sans sur-promesse.
- **Schema implémenté :** `Article` + `FAQPage` + `BreadcrumbList` (page.tsx L119-121).
- **Indexabilité :** `published` → sitemap (sitemap.ts L100), canonical propre.
- **GEO :** paragraphe réponse-d'abord dense et citable ; cohérent avec llms.txt.

## Liste de correctifs priorisée
1. **(🟠 field-map)** Reloger la phrase de clôture dans `learned` ou champ `outcome`.
2. **(🟡 contractuel)** Valider ISO 9001 / ISO 13485 / Qualiopi de Gepromed avec le client.
3. **(🟠 template)** `TICKET-CS-META-TITLE` — title sous 60 car.

## Questions client
- Gepromed confirme-t-il ses certifications ISO 9001 / ISO 13485 / Qualiopi pour publication ?
- Le partenariat est-il « signé » et les 16 skills bien livrés au mois 1 (fonde la clôture) ?
