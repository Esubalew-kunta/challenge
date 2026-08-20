# Étude de cas — Delassus Group (DRAFT/noindex) · `/etudes-de-cas/delassus`

**Source auditée :** `[FR] website-content/etudes-de-cas--delassus/etudes-de-cas--delassus.md`
**Comparé au code :** `src/lib/case-studies.ts` (entrée `delassus`, `status: "draft"`, `inProgress: true`), `src/app/etudes-de-cas/[slug]/page.tsx` (robots draft L38-40 ; breadcrumbSchema L82 utilise `cardTitle`), `sitemap.ts` (L100), `layout.tsx`, `public/llms.txt`
**Ahrefs :** France/FR, 2026-07 (léger — draft noindex, aucune cible active)
**Voir aussi :** `_cross-page-findings.md`

## Score : 84 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 23 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Draft bien géré : noindex et exclusion du sitemap vérifiés en code, `inProgress` respecté, prose anonymisée, entrée llms.txt en attente, aucun témoignage fabriqué, chiffres tracés. Une incohérence d'anonymat à trancher : la prose masque le nom (« un leader marocain… ») mais le `cardTitle` (breadcrumb schema) et le slug d'URL exposent « Delassus ». Rester en draft jusqu'à signature.

## Findings

### 🟠 High
1. **Anonymat incohérent : prose masquée, mais nom exposé en schema + URL.** Le master garde la prose anonyme (« un leader marocain de la production… ») conformément à la source live. Mais en source, `cardTitle: "Delassus Group"` est injecté dans le `breadcrumbSchema` (page.tsx L82, position 3) — donc le nom réel est présent dans le JSON-LD livré dans le HTML — et le slug d'URL est `/etudes-de-cas/delassus`. Si l'intention est l'anonymat jusqu'à signature, il n'est pas complet. Contenu par le noindex (schema non indexé, page non liée), donc pas un blocage live, mais une contradiction. **Fix :** décider — soit assumer « Delassus » (alors la prose peut le nommer), soit anonymiser aussi `cardTitle` et envisager un slug neutre avant l'ouverture. Ne pas laisser un mix « anonyme en prose / nommé en schema+URL ».

### 🟡 Medium
2. **Title rendu ≈ 68 caractères** (« 20 ans de données agricoles, une plateforme data et des agents métier » + `| AI Makers`). Overrun, mais **peu urgent** (noindex). Le master note aussi une divergence title≠H1 souhaitée (title trim ~49) → `TICKET-CS-META-TITLE` à l'ouverture.

3. **Métriques de périmètre en gros dans la grille hero.** `4 500`, `3`, `15` sont du périmètre/baseline (`inProgress`), pas des résultats. Le badge « Mission en cours, résultats en cours de mesure » (page.tsx L143-148, via `inProgress`) les cadre. **Fix :** maintenir ce badge à l'ouverture. Aucun changement de données.

4. **Mots-clés inactifs (draft).** « plateforme data bronze silver gold », « plateforme data ia étude de cas » techniques/nuls en France — sans objet tant que noindex. Revalider à l'ouverture.

## Ce que la page fait bien (vérifié)
- **Draft correctement isolé :** `status: "draft"` → `robots {index:false, follow:false}` (page.tsx L38-40) **et** exclusion sitemap (sitemap.ts L100) — les deux concordent. `inProgress` respecté.
- **llms.txt en attente :** entrée `[DRAFT — en attente]`, à n'ajouter qu'après ouverture. Correct.
- **Zéro fabrication :** 4 500 / 80 000 t / 3 / 15 / « Bronze en avance » / ~20 ans mot pour mot ; **aucun témoignage inventé**.
- **Différenciateur réel et crédible :** méthode « sans DSI », priorisation des agents par les utilisateurs finaux en atelier terrain, validation métier par jalon — E-E-A-T de première main.
- **GEO :** paragraphe réponse-d'abord autonome et citable (une fois ouvert).

## Liste de correctifs priorisée
1. **(🟠)** Trancher l'anonymat : nommer Delassus partout, ou anonymiser `cardTitle` (+ slug) avant ouverture — supprimer le mix prose/schema.
2. **(🟡)** Maintenir le badge `inProgress` pour que les chiffres de périmètre ne soient pas lus comme résultats.
3. **(🟡)** Title/meta/mots-clés : à traiter au moment de l'ouverture à l'indexation.

## Questions client
- Delassus Group autorise-t-il d'être nommé, ou faut-il un anonymat complet (y compris slug et schema) jusqu'à signature ?
- Les chiffres de périmètre (4 500 / 80 000 t / 15 agents) sont-ils validés pour publication ? (levée du `[à valider]`)
