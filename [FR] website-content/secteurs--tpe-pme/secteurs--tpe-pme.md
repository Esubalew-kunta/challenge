# Secteur : TPE & PME — Master de contenu FR

> Localisation française du master EN scellé (`[EN] website-content/secteurs--tpe-pme`). Français = langue primaire live. Copie traduite en français naturel ; SEO localisé sur mots-clés FR réels (Ahrefs France) ; correctifs d'audit préservés.

## 1. En-tête de page
- **Route (FR, live) :** /secteurs/tpe-pme
- **Objectif :** Page sectorielle — comprendre les douleurs de l'ICP, cartographier les cas d'usage IA, orienter vers l'appel diagnostic.
- **Rôle SEO :** secondaire (longue traîne sectorielle) + assist conversion
- **Étape funnel :** MOFU

## 2. Mots-clés cibles (France)
| Type | Mot-clé (FR) | Volume (FR) | Difficulté | Source |
|---|---|---|---|---|
| Primaire | ia pme | 150 | n/a | Ahrefs keywords-explorer, 2026-07 |
| Secondaire | ia tpe pme | faible | n/a | Ahrefs, 2026-07 |
| Secondaire | ia petite entreprise | faible | n/a | Ahrefs, 2026-07 |

> **Note volume :** « ia pme » (150) est le meilleur primaire FR du secteur. « ETI » n'a pas de terme de recherche propre : la page mène sur le langage TPE/PME. Longue traîne assumée — page d'assist conversion pour un ICP marché français.

## 3. Méta de page
| Champ | Live (FR) | Proposé (FR, corrigé) |
|---|---|---|
| Title (≤60 incl. suffixe auto) | IA pour TPE et PME en France : par où commencer | **IA pour TPE et PME en France** *(suffixe `\| AI Makers` auto — rendu ~40 chars)* |
| Méta description (≤160) | Transformation IA pour TPE, PME et ETI françaises : automatiser les tâches répétitives, gagner des heures par semaine et former les équipes, sans équipe technique interne. | IA pour TPE, PME et ETI françaises : automatiser le répétitif, gagner des heures chaque semaine et former vos équipes — sans DSI ni budget de grand groupe. *(153)* |
| H1 | L'IA pour les TPE et PME : des gains concrets, sans DSI ni budget de grand groupe | *(inchangé)* |
| URL slug | /secteurs/tpe-pme | /secteurs/tpe-pme |

## 4. Sections & contenu
Template partagé : `src/app/secteurs/[slug]/page.tsx` · copie dans `src/lib/secteurs.ts` (entrée `tpe-pme`).

### 4.1 — Hero
- **Proposé (FR) :**
  - **badge :** `TPE / PME France`
  - **h1 :** `L'IA pour les TPE et PME : des gains concrets, sans DSI ni budget de grand groupe`
  - **intro (answer-first) :** `Une PME n'a pas besoin d'un plan IA à trois ans : elle a besoin de gains visibles ce trimestre. Rédaction, devis, relances, reporting, service client : l'IA prend en charge le répétitif, vos équipes gardent le métier. Sans DSI, sans recrutement, sans jargon. Sur nos clients, le gain moyen constaté est de 7 heures par semaine et par collaborateur formé.`
  - **alt illustration :** `IA pour les TPE et PME`
- **Rationale :** Answer-first, orienté trimestre (pas la « feuille de route à 3 ans » que l'acheteur redoute). Utilise le chiffre canonique 7h/semaine de llms.txt. Angle distinct « sans DSI, sans gros budget ».

### 4.2 — Douleurs
- **Proposé (FR) :**
  1. `Vous savez que l'IA peut vous faire gagner du temps, mais vous ne savez pas par où commencer.`
  2. `Vos concurrents communiquent déjà sur l'IA et vous sentez le retard s'installer.`
  3. `Pas de DSI, pas d'équipe technique : chaque outil ajouté devient un chantier.`
  4. `Vos équipes passent leurs journées sur des tâches qu'une machine ferait mieux.`
- **Rationale :** Douleurs de l'acheteur PME, pas d'un DSI de grand groupe : incertitude, anxiété concurrentielle, absence de ressource tech. Distinctes des douleurs ESN/conseil (TJM, delivery).

### 4.3 — Cas d'usage
- **Proposé (FR) :**
  - **Administratif et back-office** — `Devis, factures, relances, saisies : les tâches répétitives automatisées, avec un contrôle humain là où il compte.`
  - **Commercial et relation client** — `Préparation des rendez-vous, comptes rendus, relances personnalisées et suivi de pipeline : vos commerciaux vendent au lieu de saisir.`
  - **Rédaction et communication** — `Emails, propositions, contenus web et posts réseaux sociaux produits plus vite, dans le ton de votre entreprise.`
  - **Reporting et pilotage** — `Vos chiffres consolidés et lisibles chaque semaine, sans y passer vos dimanches.`
- **Rationale :** Cas d'usage back-office transversaux pour une PME généraliste — larges à dessein, à l'inverse des pages verticales profondes. Sorties concrètes (devis, factures, pipeline).

### 4.4 — Témoignages
- **Champs :** temoinClients[] — Empruntis, ESN Engit
- **Proposé (FR) :** RÉUTILISER — verbatims publiés (Empruntis, ESN Engit) affichés par leur nom depuis `site-config.ts:clientLogos`. Pas de nouvelle citation.

### 4.5 — Formations liées
- **Champs :** acculturation-ia, microsoft-copilot, go-to-market-sales
- **Proposé (FR) :** Label `Les formations les plus demandées dans votre secteur`. Cartes : `Acculturation à l'IA`, `Microsoft Copilot`, `Go-to-market & vente avec l'IA`. Corps propriété de chaque page formation.

### 4.6 — Related + CTA final
- **Proposé (FR) :**
  - **Titre CTA :** `Et dans votre entreprise, l'IA change quoi ?`
  - **Sous-titre CTA :** `30 minutes pour repérer les tâches qui vous coûtent le plus d'heures, et les deux ou trois gains rapides par où commencer. En 30 minutes, vous repartez avec un plan clair sur vos tâches les plus chronophages — que vous le mettiez en œuvre avec nous ou de votre côté.`
- **Rationale :** Cadrage à l'échelle PME (« tâches qui coûtent le plus d'heures », « gains rapides »). Cette page généraliste est la SEULE gardienne de la formulation « l'IA change quoi ? » — les réécritures natives se font sur agences/esn/conseil.

## 5. FAQ
| # | Question (FR) | Réponse (FR) |
|---|---|---|
| 1 | On est 30 personnes, est-ce que c'est pour nous ? | Oui. Nos clients PME vont de 20 à 500 collaborateurs. L'IA n'exige ni DSI ni budget de grand groupe : on commence par les tâches qui coûtent le plus d'heures, on mesure, on étend. Le gain moyen constaté : 7 heures par semaine et par collaborateur formé. *(Propriétaire de la Q « est-ce pour une entreprise de notre taille ».)* |
| 2 | Combien de temps avant de voir des résultats ? | Les premiers gains arrivent dès les premières semaines : une session de formation suffit pour que vos équipes appliquent l'IA à leurs tâches quotidiennes. Pour les automatisations en production, comptez le premier mois. *(Propriétaire de la Q « délai de résultats » pour tous les secteurs.)* |
| 3 | Nos données sont-elles en sécurité ? | C'est cadré dès le départ : choix des outils, réglages de confidentialité, règles d'usage écrites pour vos équipes. Nous configurons des environnements où vos données ne servent jamais à entraîner les modèles. *(Réponse générique de sécurité des données possédée ici ; les pages secteurs régulées portent leur version conformité spécifique.)* |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Voir notre approche complète de transformation IA | /ai-transformation | related |
| Commencer par un audit IA | /audit-ia-entreprise | related |
| Formation Acculturation à l'IA | /formation-ia-entreprise/acculturation-ia | formations liées |
| Réserver un diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA principal :** **`Et dans votre entreprise, l'IA change quoi ?`** → /contact (bouton : `Réserver un diagnostic gratuit de 30 min`)

## 8. Bloc GEO
- **Paragraphe answer-first (FR) :** `AI Makers aide les TPE, PME et ETI à adopter l'IA sans DSI ni budget de grand groupe — automatisation de l'administratif, des relances commerciales, de la rédaction et du reporting. Le cabinet commence par les tâches qui coûtent le plus d'heures, déploie les automatisations en production et forme les équipes. Gain moyen constaté : 7 heures par semaine et par collaborateur formé ; 50+ entreprises, 200+ systèmes, 2 500+ personnes formées.`
- **Entrée llms.txt (FR) :** `[IA pour TPE et PME](https://aimakers.fr/secteurs/tpe-pme) : comment les PME adoptent l'IA sans équipe tech ni gros budget — automatiser le répétitif, gagner des heures, former les équipes. Moyenne 7h/semaine par collaborateur formé.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| 7h/semaine par collaborateur · +50 entreprises · +200 systèmes · +2 500 formés | public/llms.txt (canonique) |
| Fourchette PME 20-500 personnes | src/lib/secteurs.ts FAQ (publié) |
| Douleurs & cas d'usage listés | src/lib/secteurs.ts (page FR publiée) |
| Témoignages (Empruntis, ESN Engit) | src/lib/site-config.ts clientLogos (verbatims publiés) |

## Réconciliation appliquée
- **Sécurité des données (FAQ Q3) — PROPRIÉTAIRE CANONIQUE, CONSERVÉ TEL QUEL :** « données jamais utilisées pour entraîner les modèles » est le propriétaire générique de la collection. Les 4 secteurs régulés (santé, médecins, conseil, banque) portent leurs faits data spécifiques et défèrent ici.
- **CTA-title « l'IA change quoi ? » — CONSERVÉ :** cette page généraliste en est la seule gardienne.
- **« au lieu de saisir » (partagé avec banque) — CONSERVÉ ici** ; la formulation banque est variée à la place.
- **Conservé (PROTÉGER) :** chiffres canoniques 7h + 50/200/2 500 ; témoignages vérifiés ; propriété FAQ taille-entreprise + délai-résultats.
- **SEO localisé FR :** primaire « ia pme » (150), secondaires « ia tpe pme », « ia petite entreprise ».

## Reconciliation applied
> Passe de réconciliation FR (Agent 2) — audits `seo-audit-report-fr/` + `ai-slop-audit-report-fr/`.
- **Closer CTA verbatim ×8 (slop synth §2.1) — VARIÉ :** réancré sur le fait propre à la page — les **tâches les plus chronophages** — : « … vous repartez avec un plan clair sur vos tâches les plus chronophages — que vous le mettiez en œuvre avec nous ou de votre côté. » Cette page généraliste conserve l'esprit du scoping honnête « repartez avec un plan / avec nous ou non » (protégé slop synth §5.5) mais dans une formulation variée ; aucune page ne garde la phrase verbatim.
- **Sécurité des données (FAQ Q3) — PROPRIÉTAIRE GÉNÉRIQUE, vérifié, conservé :** « données jamais utilisées pour entraîner les modèles » reste ici ; santé/médecins/conseil/banque défèrent avec leur fait sectoriel.
- **Titre & méta :** titre court « IA pour TPE et PME en France » (~40 c) et méta 153 c — déjà conformes, conservés.
- **PROTÉGÉ :** titre CTA « l'IA change quoi ? » (seule gardienne) ; chiffres canoniques 7h + 50/200/2 500 ; témoignages vérifiés.
