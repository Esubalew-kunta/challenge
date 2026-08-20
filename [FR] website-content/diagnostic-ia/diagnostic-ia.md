# Diagnostic IA (/diagnostic-ia) — Master de contenu FR

> Localisation FR du master EN. Le FR est la langue primaire live : le copy provient de `src/app/diagnostic-ia/page.tsx` (metadata) et `src/lib/diagnostic-config.ts` (`captureContent`, wizard). Page app-like : seuls la meta et la microcopy du wizard sont traduisibles. **Aucun fix de contenu nécessaire sur cette page** (voir réconciliation).

## 1. En-tête de page
- **Route (FR, live) :** /diagnostic-ia
- **Objet :** Auto-diagnostic de maturité interactif (wizard). Page app-like : seuls meta + microcopy du wizard sont traduisibles.
- **Rôle SEO :** aimant-outil (diagnostic gratuit) — mot-clé léger.
- **Étape funnel :** capture TOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | maturité ia | 150 | n/a | Ahrefs France (KE), 2026-07 |
| Secondaire | diagnostic ia | 200 | n/a | Ahrefs France (KE), 2026-07 |
| Secondaire | test maturité intelligence artificielle | minimal | — | quiz d'auto-évaluation |
| Référence (non owned ici) | audit ia | 400 | n/a | Ahrefs France — pointé vers /audit-ia-entreprise |

> **Décision mots-clés — mot-clé léger.** Le terme fort du cluster est `audit ia`, mais il appartient à la page audit (AI Scan, humaine et payante). Pour éviter que deux pages se battent, ce quiz self-service de 2 minutes cible `maturité ia` + `diagnostic ia` et pointe l'intention « audit » vers l'owner /audit-ia-entreprise. Pression mot-clé volontairement légère — le rôle de la page est l'outil + la capture de lead, pas le ranking organique.

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | Diagnostic IA Gratuit : testez votre maturité IA en 2 minutes \| AI Makers | **`Diagnostic IA gratuit : votre maturité en 2 min`** (base, 47 car., **sans `\| AI Makers` en dur**) → le template racine ajoute le suffixe UNE fois → rendu « Diagnostic IA gratuit : votre maturité en 2 min \| AI Makers » = **59 car. ≤ 60**. |
| Meta description (140–160 car.) | 12 questions pour évaluer votre maturité IA. Score personnalisé, recommandations par secteur, et plan d'action 90 jours. Gratuit et sans engagement. | Inchangée — *(≈147 car., dans le budget)* |
| H1 | (pas de H1 statique — UI pilotée par le wizard) | (pas de H1 statique — conserver le title OG comme H1 sémantique : « Diagnostic IA gratuit ») |
| URL slug | /diagnostic-ia | /diagnostic-ia |
| OG title | Diagnostic IA Gratuit : où en est votre entreprise ? | Inchangé |
| OG description | Testez votre maturité IA en 2 minutes. Score /20 + rapport personnalisé. | Inchangé |

> **Note title (corrigée à la réconciliation) :** l'hypothèse « plain Next Metadata → pas de suffixe auto » est **fausse** : le template racine `title.template: "%s | AI Makers"` (`layout.tsx:15`) s'applique AUSSI aux titles string des pages enfants en App Router. Garder `| AI Makers` en dur produit donc un **double suffixe** (« … 2 minutes \| AI Makers \| AI Makers », ~85 car.). **Fix :** retirer le suffixe écrit à la main et laisser le template l'ajouter une seule fois (ou, côté code, utiliser `title: { absolute: "Diagnostic IA gratuit : votre maturité en 2 min | AI Makers" }`). Le choix `absolute` vs template est un détail d'implémentation (ingénierie) ; le contenu à retenir = **base sans suffixe en dur**.
> **Réconciliation /20 vs /24 — décidée.** Deux instruments différents, pas un bug : ce diagnostic self-service a 10 questions notées × 0/1/2 = **score /20** ; la « grille /24 » du site est celle de l'*audit AI Scan* (humaine, séparée). Le « Score /20 » de l'OG est correct pour CETTE page — garder /20 ici, /24 sur la page audit.

## 4. Sections & contenu
La page `src/app/diagnostic-ia/page.tsx` ne rend que `diagnostic-wizard.tsx`. TOUT le copy du wizard (12 questions, options, capture, résultat) vit dans `diagnostic-config.ts` + `diagnostic-scoring.ts`. La traduction complète des 12 questions est une passe sur le fichier config (hors périmètre prose de cette page). Ici : meta, microcopy answer-first, bloc GEO.

### 4.1 — Microcopy du wizard (surface traduisible)
- **Composant :** `diagnostic-wizard.tsx` + `lib/diagnostic-config.ts`
- **Proposé (FR) — verbatim live où existant :**
  - **compteur de progression :** `Question {n} sur 12` / dernière étape : `Dernière étape`
  - **bouton retour :** `Retour`
  - **ligne intro answer-first (affichée d'emblée) :** `12 questions rapides, environ 2 minutes. Vous obtenez votre score de maturité IA sur 20, des recommandations pour votre secteur et un plan d'action 90 jours — gratuit, sans engagement.`
  - **capture title (`captureContent.title`) :** `Dernière étape : recevez votre diagnostic`
  - **capture subtitle (`captureContent.subtitle`) :** `Entrez votre email professionnel pour recevoir votre rapport personnalisé avec votre score, vos recommandations, et le Playbook AI-First complet (48 pages).`
  - **placeholder prénom :** `Votre prénom` · **placeholder email :** `prenom@entreprise.com`
  - **CTA (`captureContent.ctaLabel`) :** `Voir mon diagnostic →` · **loading :** `Calcul en cours…`
  - **privacyNote (`captureContent.privacyNote`) :** `Vos données restent confidentielles. Pas de spam. Désabonnement en 1 clic.`
  - **validation :** `Prénom requis` · `Email requis` · `Merci d'utiliser votre email professionnel`
- **Rationale :** l'intro answer-first annonce la durée (2 min), le livrable (score /20 + recos secteur + plan 90 jours) et le prix (gratuit) avant que l'utilisateur s'engage — le moteur de conversion. L'écran de capture garde le gate email pro et le bundle Playbook (48 pages). La note RGPD-à-la-capture est conservée explicite.

## 5. FAQ
Pas de slot FAQ dans le template.

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| (post-résultat) Voir mon diagnostic | /diagnostic-ia/resultat | écran résultat (hors périmètre) |
| Réserver plutôt un diagnostic avec un expert | /contact | alternative humaine post-résultat |
| Vous préférez l'audit complet ? | /audit-ia-entreprise | escalade vers l'AI Scan (grille /24) |

## 7. CTA
- **CTA primaire :** Compléter le diagnostic → capture de lead → résultat. Label : `Voir mon diagnostic →`

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `Le diagnostic IA gratuit d'AI Makers est un auto-test de 2 minutes en 12 questions qui note la maturité IA de votre entreprise sur 20, sur des dimensions comme la stratégie, les cas d'usage, la formation, la donnée et la gouvernance. Vous recevez un rapport personnalisé avec des recommandations par secteur et un plan d'action 90 jours, envoyé à votre email professionnel. C'est le pendant self-service de l'AI Scan, l'audit humain d'AI Makers qui note la maturité sur 24.`
- **Entrée llms.txt (FR) :** `[Diagnostic IA](https://aimakers.fr/diagnostic-ia) : l'auto-test gratuit de 2 minutes d'AI Makers — 12 questions, un score de maturité sur 20, des recommandations par secteur et un plan 90 jours.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| 12 questions (10 notées + 2 qualification) ; score sur 20 | diagnostic-config.ts — vérifié (10 × 0/1/2 = /20) |
| /20 (ce diagnostic) vs /24 (audit AI Scan) | réconcilié : instruments différents, les deux corrects |
| Recommandations par secteur, plan d'action 90 jours, gate email pro, bundle Playbook 48 p | diagnostic-config.ts (captureContent) |
| Note confidentialité (pas de spam, désabonnement 1 clic) | diagnostic-config.ts privacyNote |

## Corrections d'audit appliquées
- **Copy :** rien — cette page n'avait besoin d'aucun fix de contenu.
- **Title > 60 car. + double suffixe probable** — suffixe `| AI Makers` écrit à la main **retiré** ; base « Diagnostic IA gratuit : votre maturité en 2 min » (47 car.), le template racine ajoute le suffixe une fois → rendu 59 car. ≤ 60. Évite le double « | AI Makers | AI Makers ».
- Pas de négation à dé-empiler (microcopy fonctionnelle pure).
- /20 vs /24 gardés distincts (instruments différents, déjà réconciliés).
- Note RGPD + gate email pro + bundle Playbook 48 p préservés.

## À valider
- Slug EN `/ai-maturity-assessment` et collision owner `/ai-readiness-assessment` : hors périmètre FR (route FR live inchangée).
- Traduction complète des 12 questions : passe sur `diagnostic-config.ts` (hors périmètre de cette page prose).

## Reconciliation applied
Pass de réconciliation FR (audits SEO + anti-slop) :
- **Title — double suffixe corrigé :** le master supposait à tort que le template n'ajoutait pas le suffixe sur cette page (plain Metadata). Il l'ajoute → risque de « … | AI Makers | AI Makers ». Correctif : suffixe en dur retiré, base « Diagnostic IA gratuit : votre maturité en 2 min » (47 car.) → rendu 59 ≤ 60. Le choix code `absolute` vs template = ingénierie (log only) ; le contenu retenu = base sans suffixe en dur.
- **Meta :** ~147–148 car. (≤160). Conforme, inchangée.
- **/20 vs /24 :** deux instruments distincts, déjà réconciliés (self-test /20 ici ; AI Scan humain /24 sur /audit-ia-entreprise). Conservé — ne jamais confondre les deux.
- **Tags :** aucun token `[à valider]` en copie ; rien à normaliser (la section « À valider » est un en-tête de suivi, pas un tag).
- **Non touché (ingénierie / log only) :** lien `/confidentialite` à la capture email (RGPD, ticket B4) ; traduction des 12 questions dans `diagnostic-config.ts`.
