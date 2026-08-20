# Étude de cas — Cabinet de cardiologie (DRAFT/noindex) · `/etudes-de-cas/cardio-check-up`

**Source auditée :** `[FR] website-content/etudes-de-cas--cardio-check-up/etudes-de-cas--cardio-check-up.md`
**Comparé au code :** `src/lib/case-studies.ts` (entrée `cardio-check-up`, `status: "draft"`), `src/app/etudes-de-cas/[slug]/page.tsx` (robots draft L38-40), `sitemap.ts` (L100 `getPublishedCaseStudies`), `layout.tsx`, `public/llms.txt`
**Ahrefs :** France/FR, 2026-07 (léger — draft noindex, aucune cible SEO active)
**Voir aussi :** `_cross-page-findings.md`

## Score : 84 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 23 / 25 |
| Factual & Claim Accuracy | 22 / 25 |
| On-Page SEO | 15 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Gestion du draft exemplaire : anonymat de la praticienne préservé, noindex et exclusion du sitemap vérifiés en code, entrée llms.txt explicitement en attente, aucun témoignage fabriqué, tous les chiffres tracés. Un point de compliance santé à verrouiller avant toute ouverture à l'indexation : la formulation « hébergement certifié santé ». Rester en draft jusqu'à signature client.

## Findings

### 🔴 Critique (bloque l'ouverture à l'indexation — actuellement contenu par le noindex)
1. **Anonymat de la praticienne à préserver strictement.** Le champ `client` en source contient le nom réel (« Cardio Check-up · Dr Sana Amraoui »). Le master ne le remonte **pas** — la page reste sur « cabinet de cardiologie parisien ». Vérifié en code : le template **ne rend jamais** le champ `client` (il n'utilise que `sector`, `title`, `tldr`, `cardTitle` pour le breadcrumb) — le nom n'apparaît donc ni en contenu visible, ni dans le schema `Article`, ni dans le breadcrumb. **C'est correct.** Publier le nom avant signature serait une brèche proche de la fabrication (§7.2). **Fix / vigilance :** ne jamais mapper `client` vers un champ rendu pour ce cas tant que la cliente n'a pas signé. Note live-risk mineure : le nom reste présent dans les données `case-studies.ts` livrées au bundle — acceptable car noindex et non rendu, mais à retirer/masquer si sensibilité.

### 🟠 High
2. **Claim « hébergement certifié santé » à valider (compliance santé).** FAQ #1 : « Uniquement dans un cadre strict : hébergement certifié santé, anonymisation avant tout traitement IA, validation humaine. C'est le cadre appliqué ici. » La stack déclarée (`Claude, Notion, Whisper, Render`) ne comprend pas d'hébergeur HDS (Hébergeur de Données de Santé) évident. Deux lectures possibles se télescopent : soit il y a bien un hébergement HDS certifié, soit — comme le dit le `how` (« zéro donnée patient identifiable dans les outils ») — aucune donnée de santé n'entre dans les outils, auquel cas l'HDS n'est pas déclenché et « hébergement certifié santé » ne devrait pas être présenté comme la garantie. Une affirmation de conformité santé inexacte est money/compliance-relevant. **Fix :** avant ouverture à l'indexation, confirmer l'hébergement réel ; reformuler pour que le safeguard annoncé (HDS vs anonymisation totale) corresponde exactement au dispositif.

### 🟡 Medium
3. **Title rendu ≈ 65 caractères** (« Sortir un cabinet de cardiologie d'Excel et de WhatsApp » 53 + `| AI Makers`). Overrun mais **peu urgent** (noindex). `TICKET-CS-META-TITLE` quand la page sera ouverte.

4. **Mots-clés inactifs (draft).** « ia cabinet médical rgpd », « chatbot médical étude de cas » niche/nuls en France — sans objet tant que noindex. À revalider à l'ouverture.

## Ce que la page fait bien (vérifié)
- **Draft correctement isolé :** `status: "draft"` → `robots {index:false, follow:false}` (page.tsx L38-40) **et** exclusion du sitemap (sitemap.ts L100) — vérifié, les deux mécanismes concordent. Bandeau « Version de travail » rendu (page.tsx L123-127).
- **llms.txt en attente :** entrée marquée `[DRAFT — en attente]`, à n'ajouter qu'après ouverture. Correct.
- **Zéro fabrication :** chiffres (8 / ~120 / 2 / 12 / 36 / 16) mot pour mot ; **aucun témoignage inventé**.
- **Conformité pensée dès la conception :** « zéro donnée patient identifiable », « le médecin ne voit que les cas vérifiés par la secrétaire », angle GEO organique cohérent avec l'interdiction de publicité de l'Ordre — cadrage sectoriel crédible.

## Liste de correctifs priorisée
1. **(🔴 vigilance)** Ne pas remonter « Dr Sana Amraoui » avant signature ; garder le champ `client` non rendu.
2. **(🟠 compliance)** Valider et reformuler le claim « hébergement certifié santé » pour qu'il corresponde au dispositif réel — avant toute indexation.
3. **(🟡)** Title + meta + mots-clés : à traiter au moment de l'ouverture, pas avant.

## Questions client
- Quel est l'hébergement réel des outils, et une donnée de santé y transite-t-elle ? (détermine la formulation HDS)
- La cliente autorise-t-elle la publication de son identité, ou reste-t-elle anonyme après signature ?
