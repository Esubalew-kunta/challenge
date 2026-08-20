# Étude de cas — Addictest · `/etudes-de-cas/addictest`

**Source auditée :** `[FR] website-content/etudes-de-cas--addictest/etudes-de-cas--addictest.md`
**Comparé au code :** `src/lib/case-studies.ts` (entrée `addictest`), `src/app/etudes-de-cas/[slug]/page.tsx`, `src/app/layout.tsx` (template title), `src/app/sitemap.ts`, `public/llms.txt`
**Ahrefs :** France/FR, 2026-07 (léger — page de preuve branded/low)
**Voir aussi :** `_cross-page-findings.md` (non encore créé — patterns transverses signalés en fin)

## Score : 88 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 24 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 12 / 15 |

## Verdict
Solide. Chaque métrique, date, nom de système et la citation client tracent mot pour mot vers `case-studies.ts` — aucune fabrication. Le seul blocage réel est contractuel : le témoignage est `pending: true` en source et ne doit pas être publié avant signature. Corriger le title (overrun) est un chantier template déjà tracé. À publier une fois le témoignage validé.

## Findings

### 🟠 High
1. **Témoignage non signé encore présent dans les données.** `case-studies.ts` ligne 111 : `pending: true` sur la citation attribuée nommément à « Ziyad El Mouniri, Fondateur, Addictest ». Le template affiche la citation avec la mention « Témoignage en cours de validation » (page.tsx L296-300), donc elle *est* rendue en production sur cette page publiée. Une citation nominative attribuée à une personne réelle mais non encore validée par elle est la classe de risque la plus sensible du §4/§7. **Fix :** obtenir la validation écrite du client avant toute promotion ; tant que `pending: true`, la mention de garde suffit techniquement mais le client doit confirmer que la citation peut s'afficher. Le master le trace correctement (`[à valider]`) — confirmer résolu, pas re-découvert.

2. **Title rendu ≈ 77 caractères — dépasse largement le budget ≤60.** Le template applique `%s | AI Makers` (layout.tsx L15) au champ `caseStudy.title`. Rendu : « Addictest industrialise ses candidatures universitaires avec l'IA | AI Makers » = 65 + 12 = **77 car.** Google tronque. **Fix :** le master propose « Addictest industrialise ses candidatures IA » (43 → ~55 rendu), mais le template utilise le même champ `title` pour le H1 et la balise `<title>` — un title distinct du H1 exige un champ séparé (ticket `TICKET-CS-META-TITLE`). Scoper comme un seul ticket ingénierie, ne pas supposer fait.

### 🟡 Medium
3. **Mots-clés secondaires quasi-nuls — confirmé.** Master déclare « operating system ia pme » et « étude de cas automatisation ia » quasi nuls (Ahrefs FR). Vérifié : ces termes ne renvoient **aucune ligne** dans Ahrefs France (2026-07) = volume négligeable. C'est correct et assumé : la page est une preuve E-E-A-T, pas une cible de trafic. Aucune action, mais ne pas « optimiser » la page vers ces termes.

## Ce que la page fait bien (vérifié)
- **Zéro fabrication.** Les 3 métriques (`~750`, `3`, `4`), le TL;DR, les dates (nov. 2025 → juil. 2026), les noms de systèmes (« Addictest Match Index », « AI Writing ») et la citation sont repris **mot pour mot** de `case-studies.ts`. Rien d'arrondi ni inventé.
- **Schema complet et implémenté** (pas seulement planifié) : `BreadcrumbList`, `FAQPage`, `Article` émis via `<JsonLd>` (page.tsx L119-121). FAQ 3 Q/R éligibles FAQPage.
- **Indexabilité propre :** statut `published` → route dans le sitemap (`getPublishedCaseStudies`, sitemap.ts L100), pas de noindex, canonical construit.
- **GEO :** paragraphe réponse-d'abord autonome et citable ; cohérent avec l'entrée llms.txt proposée. Aucune contradiction avec les figures canoniques (`+50 entreprises`, `+200 systèmes`, `+2 500 formés`) — la page ne cite que des chiffres propres au cas.
- **Maillage concret :** ancres → cibles réelles (`/etudes-de-cas`, `/automatisation-ia-workflow`, `/contact`), toutes en sitemap.

## Liste de correctifs priorisée
1. **(🟠 contractuel)** Valider le témoignage Ziyad El Mouniri avant toute promotion ; confirmer avec le client que l'affichage `pending` est acceptable en attendant.
2. **(🟠 template)** Ticket `TICKET-CS-META-TITLE` : ajouter un champ `metaTitle` distinct du `title`/H1 pour ramener le `<title>` sous 60 car. — bénéficie à toutes les études de cas.
3. **(🟡)** Aucune optimisation vers les termes secondaires nuls — laisser la page en mode preuve.

## Questions client
- Le témoignage de Ziyad El Mouniri est-il validé pour affichage public ? (bloque la levée du `pending`)
- La date « Beta 1er juillet 2026 » est-elle tenue (nous sommes au 2026-07) — la mission est-elle passée en migration complète, auquel cas un chiffre-résultat pourrait remplacer le CTA générique ?
