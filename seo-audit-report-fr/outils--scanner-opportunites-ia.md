# Scanner d'opportunités IA (/outils/scanner-opportunites-ia)

**Source audité :** `[FR] website-content/outils--scanner-opportunites-ia/outils--scanner-opportunites-ia.md`
**Comparé à :** `src/lib/scanner-opportunites.ts`, `src/app/outils/scanner-opportunites-ia/page.tsx`, `scanner-wizard.tsx`, `src/lib/schemas/lead.ts`, `src/lib/faq-schema.ts`, `src/app/sitemap.ts`, `public/llms.txt` · Ahrefs FR
**Voir aussi :** `_cross-page-findings.md`

## Score : 90 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 24 / 25 |
| Factual & Claim Accuracy | 24 / 25 |
| On-Page SEO | 16 / 20 |
| Content Quality & Depth | 14 / 15 |
| Technical SEO & GEO | 12 / 15 |

## Verdict
Ship après corrections mineures. **La promesse de l'outil correspond exactement au code** : 12 opportunités, chacune avec un champ `source`, scoring +2/irritant +1/secteur avec seuil de taille — précisément ce que le copy décrit. C'est le page-outil le plus propre du lot sur la transparence de méthode. Corrections purement cosmétiques (title/meta hors budget) plus la microcopy RGPD de la capture email. Aucune sur-promesse, aucun chiffre inventé.

## L'outil correspond-il à son code ? **OUI.**
- `scanner-opportunites.ts` : **12 opportunités** (`OPPORTUNITIES`), chacune avec un champ `source` non vide (Ardent Partners, Loopio 2025, Forrester TEI, Forrester Power BI, Klarna, Unilever, Deloitte 2026, Shem's, Sage, systèmes AI Makers). Le commentaire de tête « Aucun chiffre inventé : la source est affichée sous chaque carte » est vérifié.
- **Scoring** : `PAIN_MATCH_POINTS = 2`, `SECTOR_BONUS_POINTS = 1`, exclusion par `minTeamSizeIndex`, filtre `score >= 2` (au moins un irritant). Exactement le « +2 par irritant, +1 bonus secteur, seuil de taille » du copy.
- **3 questions, 2 à 4 irritants** : `MIN_PAINS = 2`, `MAX_PAINS = 4`, `SECTORS`/`TEAM_SIZES`/`PAINS` correspondent aux libellés du copy.
- **Résultat à l'écran sans email** : la capture (`lead.ts`, source « scanner », email seul requis) est optionnelle et postérieure à l'affichage du top 3. Le « sans email pour voir votre top 3 » est littéralement vrai.
- **Cohérence figures canoniques** : 7 h/semaine (source « AI Makers, +200 missions »), +70 % Sage, 12,88 $→2,78 $ Ardent Partners — alignés sur `llms.txt` et la page manifeste.

## Findings

### 🟡 Medium

**1. Title live hors budget.**
`page.tsx:13` : `title: "Scanner d'opportunités IA : vos 3 premiers systèmes à déployer"` = **61 car.** → rendu **≈74 car.** avec `| AI Makers`. Master propose `Scanner d'opportunités IA : vos 3 systèmes prioritaires` (50 → ~62, encore légèrement au-dessus du cap dur). Fix : appliquer la version courte, ou l'option master « Scanner d'opportunités IA : votre top 3 » si un cap ≤60 rendu est exigé.

**2. Meta description live hors budget.**
`page.tsx:14` : ≈178 car. → tronquée. Master trime à ~160. Fix : appliquer la version proposée.

**3. Microcopy RGPD minimale sur la capture email.**
`scanner-wizard.tsx:594` : « Zéro spam. Vos données restent chez nous. » Or la capture stocke email + secteur + taille + irritants via `/api/lead`. Pas de finalité explicite, pas de lien `/confidentialite`, pas de mention de désinscription. Master §Localisation : `TICKET-GDPR-CONSENT`. Fix : ajouter une ligne de consentement + lien politique à l'étape email.

### 🟢 Low

**4. Primaire `opportunités ia` volume modeste — assumé.**
Master §2 : aimant, pas pilier de trafic. Ahrefs FR : pas de volume exploitable pour `scanner opportunités ia` ; `cas d'usage ia` = 150 (mieux porté par `/secteurs`). Décision correcte.

## Ce que la page fait de bien (vérifié)
- **Transparence de méthode réelle** : « Des chiffres sourcés, pas des promesses », « Un point de départ, pas un audit » — et le scoring divulgué correspond au code. Anti-slop authentique.
- **Sources nommées et affichées** sur chaque opportunité (études publiques + systèmes AI Makers en production) — standard E-E-A-T le plus élevé du lot.
- **FAQPage + BreadcrumbList schema implémentés** (`page.tsx:78` via `faqPageSchema(faq)`, `page.tsx:21`). FAQ answer-first (« Oui, sans condition. Les résultats s'affichent à l'écran immédiatement, sans email »).
- **Capture validée** côté schéma (`lead.ts`, `z.enum([... "scanner" ...])`), email seul requis pour le rapport complet.
- **Answer-first GEO** (master §8) autonome, cite la bibliothèque de 12 opportunités et la mécanique.
- **Route dans le sitemap** (`sitemap.ts:33`). Pas de double suffixe de marque.

## Priorité de correction
1. **🟡 Ajouter la microcopy RGPD** (finalité + lien `/confidentialite` + désinscription) à l'étape email du wizard.
2. **🟡 Corriger title (61→50 ou « votre top 3 ») et meta (178→160).**

## Questions ouvertes (décision client)
- Les chiffres attribués à des cas clients nommés (Shem's 10x, Sage +70 %) sont-ils validés par ces clients pour affichage public ? (Cohérents avec les études de cas, à confirmer une fois.)

## Candidats cross-page
- **Microcopy RGPD par défaut/minimale** sur les formulaires de capture (scanner, playbook, challenge) — traiter au niveau composant.
- **Title/meta hors budget** — pattern partagé.
- **Modèle de transparence de source** : ce page-outil est la référence ; le playbook (stats non sourcées) devrait s'aligner sur ce standard.
