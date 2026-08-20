# Étude de cas — ThinkONE · `/etudes-de-cas/thinkone`

**Source auditée :** `[FR] website-content/etudes-de-cas--thinkone/etudes-de-cas--thinkone.md`
**Comparé au code :** `src/lib/case-studies.ts` (entrée `thinkone`), `src/app/etudes-de-cas/[slug]/page.tsx`, `layout.tsx`, `sitemap.ts`, `public/llms.txt`
**Ahrefs :** France/FR, 2026-07 (léger — preuve branded/niche)
**Voir aussi :** `_cross-page-findings.md`

## Score : 87 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 24 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 10 / 15 |

## Verdict
Solide et propre. Les deux métriques (4+ sessions, 6 mois) tracent mot pour mot vers `case-studies.ts` ; aucune 3e métrique inventée pour remplir la grille. Aucun témoignage fabriqué. Le title tient dans le budget (rare parmi les cas). Un seul vrai accroc : la phrase de clôture narrative proposée n'a pas de champ template pour la recevoir. À publier après retrait/relocalisation de cette phrase.

## Findings

### 🟠 High
1. **Phrase de clôture narrative proposée sans champ template.** Le §7 du master propose de faire atterrir la narration sur : « Le générateur de questionnaires tourne aujourd'hui en production, et l'équipe a gardé le réflexe IA six mois plus tard — les deux systèmes que la mission visait à laisser derrière elle. » Le template ne possède aucun champ entre le témoignage/stack et le `CTASection` (titre/sous-titre figés, page.tsx L336-343) : `learned` est déjà rempli. **Telle quelle, cette phrase ne peut pas être publiée.** Les faits qu'elle contient (production, 6 mois) sont vrais et en source, mais le composant n'a pas de réceptacle. **Fix :** soit intégrer l'idée dans le champ `learned` existant, soit créer un champ `closing`/`outcome` dans le type `CaseStudyDetail` (ticket ingénierie) — ne pas supposer qu'un emplacement existe.

### 🟡 Medium
2. **Grille à 2 métriques (vs 3 chez les autres cas).** `metrics[]` n'a que 2 entrées en source ; le template affiche `sm:grid-cols-3` (page.tsx L161) → deux colonnes remplies, une vide sur desktop. Ce n'est **pas** un défaut de contenu (ne rien inventer), mais un léger déséquilibre visuel. **Fix :** cosmétique — soit une 3e métrique **réelle** validée par le client, soit ajuster la grille à 2 colonnes pour ce cas. Ne jamais fabriquer une 3e métrique.

3. **Mots-clés : niche/nuls — confirmé.** « ia pour études de marché » / « formation ia équipe » quasi nuls en France (Ahrefs 2026-07). Correct : page de preuve alimentant `/formation-ia-entreprise`. Aucune action.

## Ce que la page fait bien (vérifié)
- **Zéro fabrication :** 4+ et 6 mois mot pour mot ; **pas de 3e métrique inventée** malgré la grille à 3 colonnes — discipline exemplaire. Aucun témoignage inventé (absent en source).
- **Title dans le budget :** « L'IA au cœur d'un cabinet d'études marketing » (44) + `| AI Makers` = ~56 car. — sous 60. Le seul cas du batch sans overrun de title.
- **Détail de première main :** « Il challenge même les briefs », agent « configuré comme un directeur d'études senior » — capacité distinctive, pas du remplissage générique.
- **Schema implémenté :** `Article` + `FAQPage` + `BreadcrumbList` (page.tsx L119-121).
- **Indexabilité :** `published` → sitemap (sitemap.ts L100), canonical propre.
- **Maillage :** lien primaire vers `/formation-ia-entreprise` (la money page dont ce cas est la preuve).

## Liste de correctifs priorisée
1. **(🟠 field-map)** Reloger la phrase de clôture dans `learned` ou créer un champ `outcome` avant de la publier.
2. **(🟡)** Décider du sort de la grille à 2 métriques (3e métrique réelle **ou** grille 2 colonnes).
3. **(🟢)** Meta et title déjà dans les fourchettes — rien à faire.

## Questions client
- Existe-t-il une 3e métrique réelle (ex. nombre de livrables/questionnaires produits) validable, ou laisse-t-on 2 métriques ?
- Peut-on confirmer que le générateur de questionnaires est bien « en production » aujourd'hui (fonde la phrase de clôture) ?
