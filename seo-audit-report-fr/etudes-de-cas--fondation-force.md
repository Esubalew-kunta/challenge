# Étude de cas — Fondation Force · `/etudes-de-cas/fondation-force`

**Source auditée :** `[FR] website-content/etudes-de-cas--fondation-force/etudes-de-cas--fondation-force.md`
**Comparé au code :** `src/lib/case-studies.ts` (entrée `fondation-force`), `src/app/etudes-de-cas/[slug]/page.tsx`, `layout.tsx`, `sitemap.ts`, `public/llms.txt`
**Ahrefs :** France/FR, 2026-07 (léger — preuve branded ; longue traîne niche)
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
Solide. Tous les chiffres (100 %, 96 %, 35 ans, 448 clics/mois) tracent mot pour mot vers `case-studies.ts`, cadrés comme diagnostic baseline d'une mission `inProgress`. Le Prix Nobel est gardé générique (aucune personne inventée) et tagué `[à valider]` — traitement correct d'un signal E-E-A-T fort attaché à une organisation réelle. Aucun témoignage fabriqué. À publier après validation client des chiffres.

## Findings

### 🟠 High
1. **Title rendu ≈ 70 caractères.** « La fondation au Prix Nobel que les IA ne pouvaient pas lire » (58) + `| AI Makers` (12) = **70 car.** Overrun. **Fix :** `TICKET-CS-META-TITLE` (champ `metaTitle` distinct du H1). Trim « La fondation Nobel que les IA ne lisaient pas » (~46 rendu) valable.

### 🟡 Medium
2. **Meta description live sous le plancher (128 car.).** L'actuelle (`seoDescription` en source) fait ~128 car., sous les 140 recommandés. Le master propose une version à ~142 (« …fondation santé au Prix Nobel bloquait… ») — aucun fait nouveau, seulement l'accroche déjà présente en source. **Fix :** mettre à jour `seoDescription` dans `case-studies.ts` (changement de données, un ticket).

3. **Claim « Prix Nobel » — signal fort, à valider.** Le conseil scientifique « présidé par un Prix Nobel de médecine » est une affirmation E-E-A-T puissante attachée à une organisation nommée réelle. Elle est déclarée client en source et gardée **non nominative** (bonne pratique §7.2). Master la tague `[à valider]`. **Fix :** obtenir confirmation écrite du client avant promotion ; ne jamais nommer la personne sans source publique.

4. **Mots-clés : longue traîne niche — confirmé.** « robots.txt bloque les robots ia » et « geo fondations » ≈ nuls en France. Correct : page de preuve alimentant `/seo-geo`. L'accroche robots.txt est un excellent appât answer-engine malgré le volume nul. Aucune action SEO.

## Ce que la page fait bien (vérifié)
- **Zéro fabrication :** chiffres mot pour mot, `inProgress` respecté, Prix Nobel générique, **aucun témoignage inventé** (absent en source → absent). Noms de robots exacts (GPTBot, ClaudeBot, PerplexityBot) = détail vérifiable de première main.
- **Schema implémenté :** `Article` + `FAQPage` + `BreadcrumbList` (page.tsx L119-121).
- **Indexabilité :** `published` → sitemap (sitemap.ts L100), canonical propre.
- **GEO exemplaire :** paragraphe réponse-d'abord riche et autonome ; l'accroche « site qui bloquait les IA » est intrinsèquement citable. Cohérent avec llms.txt.
- **Cluster de preuve :** seconde preuve GEO aux côtés de Sage, lien primaire vers `/seo-geo` — logique correcte.

## Liste de correctifs priorisée
1. **(🟠 template)** `TICKET-CS-META-TITLE` — `metaTitle` distinct, title sous 60 car.
2. **(🟡 données)** Passer `seoDescription` à ~142 car. (au-dessus du plancher).
3. **(🟡 contractuel)** Valider le claim Prix Nobel avant promotion ; ne pas nommer la personne.

## Questions client
- Le claim « conseil scientifique présidé par un Prix Nobel de médecine » est-il validé pour publication ? Peut-on citer une source publique ?
- Les chiffres baseline (100 % / 96 % / 448 clics) sont-ils validés ? (levée du `[à valider]`)
