# Playbook AI-First (/playbook-ia)

**Source audité :** `[FR] website-content/playbook-ia/playbook-ia.md`
**Comparé à :** `src/app/playbook-ia/page.tsx`, `src/lib/playbook-config.ts`, `src/lib/site-config.ts`, `src/lib/secteurs.ts`, `src/components/shared/lead-capture.tsx`, `public/llms.txt` · Ahrefs FR
**Voir aussi :** `_cross-page-findings.md`

## Score : 70 / 100

| Catégorie | Score |
|---|---|
| E-E-A-T & Trust | 16 / 25 |
| Factual & Claim Accuracy | 16 / 25 |
| On-Page SEO | 14 / 20 |
| Content Quality & Depth | 13 / 15 |
| Technical SEO & GEO | 11 / 15 |

## Verdict
Corriger avant promotion. Landing de conversion bien écrite, mémorable et honnête sur son intention — mais elle repose sur un **mur de statistiques externes sans aucune source dans le code live** (présentées comme des faits bruts), un **title live à double suffixe et hors budget**, et deux **incohérences de chiffres canoniques** (48 vs 43 pages, 6 vs 8 secteurs) encore présentes en production. Le master a correctement identifié et tagué tout cela ; rien n'est fabriqué, mais rien n'est encore corrigé côté code. Ne pas promouvoir tant que les stats ne sont pas sourcées ou adoucies.

## Findings

### 🟠 High

**1. Mur de stats non sourcées, présentées comme faits bruts (live).**
`playbook-config.ts:25-35` : `88%` / `$700 Mds` / `30%` — aucune de ces valeurs ne porte de champ `source` dans le config. S'y ajoutent `50 %/63 %/13 points` (§4.3) et `95 % des projets IA échouent` (§4.4), également sans source. Le master les tague tous `[to validate — source]`, mais **le copy LIVE ne porte aucun tag** : ces chiffres s'affichent aujourd'hui comme des pourcentages acquis. Pourquoi ça compte : une page qui promet « zéro bullshit » et « le guide que 88 % des dirigeants… » perd toute crédibilité E-E-A-T si le 88 % lui-même n'a pas de source. Fix : attacher une citation nommée (McKinsey/BCG/Y Combinator selon le chiffre) ou reformuler en qualitatif, avant toute promotion. Master §4.2 le demande explicitement (« ne pas afficher comme pourcentages bruts »).

**2. Title live : double suffixe de marque + hors budget.**
`page.tsx:24-25` : `title: "Le Playbook AI-First : guide complet de transformation IA 2026 | AI Makers"` = **73 car.**, déjà avec un `| AI Makers` écrit à la main — puis le template `layout.tsx:15` ajoute un second `| AI Makers`. Rendu réel ≈ **85 car., double marque**. La balise OG (`page.tsx:31`) répète encore `Le Playbook AI-First | AI Makers`. Fix : `title: "Le Playbook AI-First — Guide IA gratuit en PDF"` (46 car. → ~58 avec suffixe), version master. **Pattern site-wide — voir cross-page.**

**3. Incohérence nombre de pages : 48 vs 43 (live, deux sources de vérité).**
`playbook-config.ts` affiche « 48 pages » (hero, capture, CTA final) ; `site-config.ts:111` décrit le même livrable comme « Le guide complet, 43 pages (PDF) » dans le méga-menu. Deux chiffres contradictoires pour un même PDF, tous deux en production. Le master retient 48 (source de vérité `playbook-config.ts`) et flague `site-config.ts:111` comme fix dev. Fix : aligner le méga-menu sur 48. **Cross-page.**

### 🟡 Medium

**4. Incohérence secteurs : « 6 » en live vs 8 réels.**
`playbook-config.ts:169` : `{ value: "6", label: "secteurs couverts" }`. Or `secteurs.ts` contient **8 entrées top-level** (agences-communication, tpe-pme, sante-biotech-medtech, esn-services-it, conseil-etudes-marche, medecins-cabinets, hotellerie-tourisme-loisirs, banque-assurance-courtage — décompte vérifié). Le master a raison : canonique = 8. Fix : passer à 8. **Cross-page (`_cross-page-findings.md §5`).**

**5. « missions IA réalisées » ≠ chiffre canonique.**
`playbook-config.ts:167` : `+200 missions IA réalisées`. Le canonique `llms.txt` est « +200 systèmes IA déployés en production » — reformulation qui change le sens (une mission ≠ un système ; « plusieurs systèmes construits par client »). Master §4.6 corrige vers « +200 systèmes IA déployés ». Fix : aligner le libellé.

**6. Microcopy RGPD faible sur la capture email.**
`page.tsx:312` instancie `LeadCapture` **sans passer `privacyNote`** → valeur par défaut `lead-capture.tsx:33` : « Zéro spam. Vos données restent chez nous. » Pour une capture de lead : pas de finalité explicite, pas de lien vers la politique de confidentialité, pas de mention de désinscription. « Vos données restent chez nous » est même douteux si des ressources IA sont ensuite envoyées. Fix : passer un `privacyNote` explicite (finalité + désinscription + lien politique), version master §4.7. Ticket `TICKET-GDPR-CONSENT`.

**7. Social proof « +300 dirigeants » non vérifié.**
`playbook-config.ts:20` : « Déjà utilisé par +300 dirigeants ». Absent de `llms.txt`, aucune source. Master §9 le tague `[to validate]`. Fix : vérifier ou retirer.

**8. Aucune donnée structurée sur la page.**
`grep` schema/@type/ld+json sur `page.tsx` = 0 résultat. Une landing lead-magnet gagnerait un `FAQPage` (si FAQ ajoutée) ou au minimum `WebPage`/`Product`. Pas bloquant, mais opportunité GEO manquée face au reste du site (bien schématisé).

### 🟢 Low

**9. Primaire `playbook ia` ≈ 0 volume — attendu et assumé.**
Ahrefs FR : `playbook ia` = **10/mois** (global 40). Le master traite justement la page comme actif de conversion à pression mot-clé minimale ; ne pas juger la page sur ce terme. Confirmé : décision correcte, pas un défaut.

## Ce que la page fait de bien (vérifié)
- **Copy mémorable et non-slop** : analogies « IA fantôme », « paver des chemins de terre avec de l'asphalte » — signal humain fort, à l'opposé du copy IA générique.
- **Spec du livrable précise et tenue** : 6 chapitres, 8 exercices nommés, 9 niveaux, 5 systèmes, plan 90 jours — la promesse est vérifiable.
- **Point de vue assumé** : « le seul guide qui ne vous vend pas un rêve : il vous donne un plan » ; « zéro bullshit ». Cohérent avec la marque.
- **Signal de fraîcheur réel** : « Édition mars 2026, mise à jour chaque trimestre ».
- **Chiffres canoniques corrects là où ils le sont** : +200 / +2 500 alignés sur `llms.txt`.
- **Route dans le sitemap** (`sitemap.ts:34`).
- **Paragraphe answer-first GEO** propre et autonome (master §8).

## Priorité de correction
1. **🟠 Sourcer ou adoucir le mur de stats** (88 %/5 %, 700 Mds $, 30 %, 50/63 %, 95 %) — bloquant crédibilité.
2. **🟠 Corriger le title** (retirer le suffixe manuel + raccourcir) et l'OG title.
3. **🟠 Aligner le nombre de pages** 43→48 dans `site-config.ts:111`.
4. **🟡 Secteurs 6→8** et « missions »→« systèmes » dans `playbook-config.ts`.
5. **🟡 Ajouter un `privacyNote` RGPD explicite** à la capture (ticket GDPR).
6. **🟡 Vérifier ou retirer « +300 dirigeants ».**

## Questions ouvertes (décision client)
- Quelles sources exactes pour 88 %/5 %, 700 Mds $, 30 %, 50/63 %, 95 % ? (Sans elles, reformuler en qualitatif.)
- Le PDF fait-il 48 ou 43 pages réellement ? (Vérité terrain avant d'aligner le méga-menu.)
- « +300 dirigeants » est-il un chiffre réel de téléchargements ?

## Candidats cross-page
- **Double suffixe de marque** (partagé avec /pourquoi-maintenant, formation-ia, ai-os, seo-geo — voir grep cross-page).
- **48 vs 43 pages** : incohérence `playbook-config.ts` ↔ `site-config.ts` — à consolider en une seule source.
- **Comptage secteurs 6 vs 8** : même anomalie susceptible d'apparaître sur d'autres pages (`_cross-page-findings.md §5`).
- **Microcopy RGPD par défaut faible** de `LeadCapture` : impacte toutes les pages de capture (playbook, diagnostic, outils). À traiter au niveau composant.
