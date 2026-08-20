# Audit GEO gratuit (/outils/audit-geo-gratuit)

**Source audité :** `[FR] website-content/outils--audit-geo-gratuit/outils--audit-geo-gratuit.md`
**Comparé à :** `src/app/outils/audit-geo-gratuit/page.tsx`, `src/components/shared/geo-audit-form.tsx`, `src/lib/schemas/lead.ts`, `src/lib/faq-schema.ts`, `src/app/sitemap.ts`, `public/llms.txt` · Ahrefs FR
**Voir aussi :** `_cross-page-findings.md`

## Score : 86 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 22 / 25 |
| Factual & Claim Accuracy | 23 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Corriger avant promotion. Aimant à leads honnête et bien cadré : le copy assume que l'audit est **préparé par un humain sous 48h**, jamais un scanner instantané — donc aucune sur-promesse à corriger (le piège de la version EN « checker » est évité en français). Mais le formulaire **capture un email professionnel + un nom d'entreprise et les envoie à `/api/lead` sans aucune mention RGPD** — bloquant compliance. Plus le title/meta hors budget. La promesse de l'outil correspond au code.

## L'outil correspond-il à son code ? **OUI.**
- `geo-audit-form.tsx` : capture `email` + `company`, POST vers `/api/lead` avec `source: "geo-audit"` — validé côté `lead.ts` (nom d'entreprise requis pour cette source). Conforme au copy « email pro + entreprise ».
- Livraison « sous 48h, préparé par un humain » : c'est la microcopy et l'état de succès réels du formulaire — **pas de sortie benchmark automatique fabriquée** (l'audit est humain, livré par email). Aucun résultat inventé affiché.
- Le copy « Contrairement à un scanner automatique instantané » désamorce activement toute attente d'outil instantané → pas de sur-promesse.

## Findings

### 🟠 High

**1. Capture de données personnelles sans aucune mention RGPD.**
`geo-audit-form.tsx` : `email` + `company` → `fetch("/api/lead")`. `grep` privacy/consent/RGPD/confidentialite/politique = **0 résultat** dans le composant. Donnée personnelle réellement collectée et transmise au backend, sans information à la collecte, sans lien vers `/confidentialite`, sans finalité affichée. Le master le flague (§7, `TICKET-GDPR-CONSENT`, tag `[à valider placement]`) — **à traiter avant promotion**, pas re-signalé comme nouveau. Fix : ligne de consentement + lien politique près du submit (« On ne s'en sert que pour vous envoyer votre audit — voir notre politique de confidentialité »). **Cross-page (même lacune que `ChallengeForm`).**

### 🟡 Medium

**2. Title live hors budget.**
`page.tsx:19` : `title: "Audit GEO gratuit : que disent les IA de votre entreprise ?"` = **58 car.** → rendu **≈71 car.** avec `| AI Makers`. Master propose `Audit GEO gratuit : que disent les IA de vous ?` (47 → 59). Fix : appliquer la version courte (garde « Audit GEO gratuit », aligné slug + `audit geo` = 250 FR).

**3. Meta description live hors budget.**
`page.tsx:20` : ≈185 car. → tronquée. Master trime à ~157. Fix : appliquer la version proposée.

### 🟢 Low

**4. Primaire `audit geo` volume modeste — exact et défendable.**
Ahrefs FR : `audit geo` = **250/mois** (CPC 170, intention commerciale), `generative engine optimization` = **1 100** (KD 21, terme de méthode). Le master vise justement `audit geo` (slug déjà aligné) + `visibilité ia`, en gardant « GEO » comme terme descriptif. Décision correcte : aimant à intention exacte, pas pilier de volume.

## Ce que la page fait de bien (vérifié)
- **Pas de sur-promesse** : « préparé par un humain, pas par un robot », « Contrairement à un scanner automatique instantané, livré sous 48h ». Le terme FR « audit » implique déjà un livrable — l'écueil EN « checker instantané » est évité.
- **Livrables concrets** : réponses des moteurs mot pour mot, écart concurrentiel, 3 actions prioritaires. Chaque carte nomme une sortie précise.
- **Honnêteté du process** en 3 étapes transparentes, alignée sur la mécanique réelle (email → interrogation moteurs → audit humain 48h).
- **FAQPage + BreadcrumbList schema** (`page.tsx:112` via `faqPageSchema(faq)`, `page.tsx:27`). FAQ answer-first (« Oui, sans condition. Pas de carte bancaire… »).
- **Capture validée** côté schéma (`lead.ts`, source « geo-audit », entreprise requise, fournisseurs grand public bloqués).
- **Answer-first GEO** (master §8) nomme les 3 moteurs, précise « humain / 48h », positionne l'outil comme porte d'entrée de `/seo-geo`.
- **Route dans le sitemap** (`sitemap.ts:32`). Pas de double suffixe de marque.

## Priorité de correction
1. **🟠 Ajouter la microcopy RGPD** (finalité + lien `/confidentialite`) au `geo-audit-form` — bloquant compliance.
2. **🟡 Corriger title (58→47) et meta (185→157).**

## Questions ouvertes (décision client)
- Placement exact de la ligne de consentement (tag `[à valider placement]` du master) : sous le submit, avec lien `/confidentialite`. Rétention des leads + DPA type à confirmer.

## Candidats cross-page
- **RGPD absente sur les formulaires de capture** : `geo-audit-form` (0 mention) et `ChallengeForm` (0 mention) sont les plus exposés ; `LeadCapture` a un `privacyNote` par défaut générique. Traiter au niveau composant + `/api/lead`.
- **Title/meta hors budget** — pattern partagé sur tout le lot.
