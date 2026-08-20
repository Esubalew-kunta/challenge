# Formation : Go-to-Market & Sales — Master de contenu FR

> Le français est la langue primaire live des formations (marché FR fort). Copie ancrée sur `src/lib/formations.ts` (entrée `go-to-market-sales`) et `formateurs`. Corrections d'audit conservées (budget title, meta ≤160, FAQ variée, stack outbound protégé).

## 1. En-tête de page
- **Route (FR, live) :** /formation-ia-entreprise/go-to-market-sales
- **Objet :** Page détail formation (catalogue) — convertit vers téléchargement catalogue + appel diagnostic.
- **Rôle SEO :** support (pilier formation ; FR fort)
- **Étape funnel :** MOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | formation prospection | 200 | 1 | Ahrefs France (KE), 2026-07 |
| Secondaire | formation ia commerciale | minimal | — | intention commerciale forte |
| Secondaire | prospection ia / ia prospection | 150 | — | Ahrefs France (KE), 2026-07 — variante on-intent |

> **Décision mots-clés :** `formation prospection` (200 / KD1) est le head accessible et pertinent (la page industrialise la prospection). `formation ia commerciale` porte l'intention commerciale (volume faible). `prospection ia`/`ia prospection` (150) à travailler en H2/corps. **`formation ia marketing` (250) est cédé à creation-publicite-ia (fit créa/marketing) — pas de double-ciblage entre siblings.** Le générique `formation ia entreprise` est cédé au pilier.

## 3. Meta de page
| Champ | Actuel (FR, live) | Master (FR) |
|---|---|---|
| Title (≤60 car. suffixe auto inclus) | Go-to-Market & Sales \| Formation IA en entreprise | `Go-to-Market & Sales : la prospection augmentée par l'IA` *(55 ; rendu ~67 avec suffixe — **à raccourcir** → `Go-to-Market & Sales : prospection augmentée IA` (47 ; rend ~59). TICKET-FORM-TITLE-TPL doit retirer le mid-suffixe FR. Ne pas écrire la marque à la main)* |
| Meta description (140–160) | *(actuel = résumé)* Industrialiser la prospection avec Clay, Lemlist et FullEnrich : des listes enrichies, des séquences personnalisées, des rendez-vous. | `Industrialisez la prospection avec Clay, Lemlist et FullEnrich : listes enrichies, séquences personnalisées, plus de rendez-vous. Formation IA sur votre vrai pipeline.` *(159 ; nécessite un champ `seoDescription` — TICKET-FORM-SEO-DESC)* |
| H1 | Go-to-Market & Sales : trouver et convertir plus de clients avec l'IA | inchangé (= source `titre`) |
| Slug URL | /formation-ia-entreprise/go-to-market-sales | inchangé |

## 4. Sections & contenu
Template partagé : `src/app/formation-ia-entreprise/[slug]/page.tsx` · copie dans `src/lib/formations.ts` (entrée `go-to-market-sales`).

### 4.1 — Hero + fiche
- **Contenu (FR, source) :**
  - Catégorie : `Métier`
  - Nom (cartes) : `Go-to-Market & Sales`
  - Tagline : `Construire une machine d'acquisition augmentée par l'IA, de la liste au rendez-vous.`
  - Résumé : `Industrialiser la prospection avec Clay, Lemlist et FullEnrich : des listes enrichies, des séquences personnalisées, des rendez-vous.`
  - Niveau : `Intermédiaire` · Public : `Équipes commerciales, marketing, growth, dirigeants` · Format : `Présentiel, distanciel ou hybride` · Durée : `Format sur-mesure, de la journée au parcours complet` · Prérequis : `Aucun prérequis technique`
- **Justification :** stack outbound nommé (Clay, FullEnrich pour l'enrichissement, Lemlist pour les séquences) = différenciateur.

### 4.2 — « Ce que vos équipes vont maîtriser »
- **Contenu (FR, source) :**
  1. `Identifier les leviers IA pour l'acquisition client`
  2. `Automatiser la prospection et l'enrichissement des leads avec Clay et FullEnrich`
  3. `Personnaliser les séquences multicanales à grande échelle avec Lemlist`
  4. `Améliorer le taux de conversion et le suivi commercial`

### 4.3 — « Les modules de la formation »
- **Contenu (FR, source) :**
  - **La stratégie d'acquisition augmentée** : `Cartographier son marché et ses segments cibles avec l'IA` · `Construire des listes de prospects qualifiées et à jour` · `Les leviers IA à chaque étape du cycle de vente`
  - **Enrichir et cibler avec Clay & FullEnrich** : `Automatiser la collecte et l'enrichissement des données de prospects` · `Détecter les signaux d'achat et prioriser les comptes` · `Nettoyer et fiabiliser sa base commerciale`
  - **Séquences personnalisées avec Lemlist** : `Construire des séquences multicanales (email, LinkedIn)` · `Personnaliser les messages à grande échelle sans perdre en qualité` · `Tester, mesurer et optimiser les taux de réponse`
  - **Convertir et suivre** : `Préparer ses rendez-vous commerciaux avec l'IA` · `Améliorer le suivi et la relance` · `Piloter la performance de la machine d'acquisition`

### 4.4 — « Ce que vos équipes en retirent »
- **Contenu (FR, source) :**
  - `x3` — `de volume de prospection à qualité constante`
  - `100%` — `des messages personnalisés à grande échelle`
  - `+conv.` — `taux de conversion et de réponse en hausse`
- **Justification :** affirmations structurelles (formations.ts). « x3 » et « +conv. » gardés `[to validate]`.

### 4.5 — Formulaire catalogue + formateurs + autres formations
- **Contenu (FR) :** réutiliser les blocs partagés possédés par le pilier /formation-ia-entreprise. Titre formateurs : `Formés par ceux qui déploient l'IA en production`. Formulaire : `Recevez le catalogue de formations complet` + email + bouton `Recevoir le catalogue`.

### 4.6 — CTA final
- **Contenu (FR) :** Titre : `Votre prospection passe-t-elle de la liste au rendez-vous à l'échelle ?` · Sous-titre : `Réservez un diagnostic de 30 minutes — on cadre la formation sur votre marché, vos personas et vos séquences réelles.`
- **Justification :** la réassurance « sur vos cas réels » est conservée ici et dans le bloc GEO. Éligibilité financement (Qualiopi / OPCO) possible ici — **[to validate placement]** (voir §9).

## 5. FAQ
| # | Question (FR) | Réponse (FR) |
|---|---|---|
| 1 | À qui s'adresse cette formation ? | Aux équipes commerciales, marketing et growth, ainsi qu'aux dirigeants qui veulent industrialiser leur acquisition. Aucun prérequis technique n'est nécessaire. |
| 2 | Quels outils sont couverts ? | Les outils de référence de la prospection augmentée : Clay et FullEnrich pour l'enrichissement de données, Lemlist pour les séquences multicanales personnalisées. |
| 3 | Faut-il des abonnements Clay, Lemlist et FullEnrich pour participer ? *(FR varié — fix d'audit, remplace le slot générique « s'appuie sur nos cas réels ? »)* | Ce n'est pas obligatoire pour suivre la formation : on peut travailler sur des accès de démonstration. Pour industrialiser ensuite, on vous conseille sur les abonnements adaptés à votre volume et votre budget. Et dans tous les cas, on travaille sur votre marché, vos personas et vos séquences réelles. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Formation IA pour les équipes (catalogue) | /formation-ia-entreprise | hub / pilier |
| Automatisation des workflows IA | /automatisation-ia-workflow | money page connexe (industrialisation) |
| Réserver un diagnostic | /contact | CTA |

## 7. CTA
- **CTA primaire :** « Votre prospection passe-t-elle de la liste au rendez-vous à l'échelle ? » → /contact
- **Secondaire :** formulaire catalogue PDF (CatalogueForm) — `Recevez le catalogue de formations complet`

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `La formation Go-to-Market & Sales d'AI Makers apprend aux équipes commerciales, marketing et growth à industrialiser leur prospection avec l'IA — Clay et FullEnrich pour enrichir et cibler, Lemlist pour les séquences multicanales personnalisées à grande échelle — de la liste de prospects au rendez-vous. Sans prérequis technique, elle se construit sur le marché, les personas et les séquences réelles de l'équipe.`
- **Entrée llms.txt (FR) :** `[Go-to-Market & Sales](https://aimakers.fr/formation-ia-entreprise/go-to-market-sales) : formation IA à la prospection augmentée pour les équipes commerciales — listes enrichies, séquences personnalisées et rendez-vous avec Clay, Lemlist et FullEnrich.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| x3 — volume de prospection à qualité constante | src/lib/formations.ts — [to validate] |
| 100% des messages personnalisés · +conv. | src/lib/formations.ts — [to validate] |
| Outils : Clay, Lemlist, FullEnrich | src/lib/formations.ts |
| Format / durée / niveau | src/lib/formations.ts |
| Éligibilité financement (Qualiopi / OPCO) | **[to validate placement]** — absent de public/llms.txt et formations.ts ; aucun % de financement ni certification affirmé. |

## Corrections d'audit appliquées
- **Double suffixe de marque + budget title :** raccourci proposé à 47 car. (rend ~59) ; dépend de TICKET-FORM-TITLE-TPL.
- **Meta > 160 :** resserrée à 159 ; nécessite `seoDescription` (TICKET-FORM-SEO-DESC).
- **FAQ variée :** le slot générique « la formation s'appuie-t-elle sur nos cas réels ? » remplacé par la question spécifique buyer (« Faut-il des abonnements Clay/Lemlist/FullEnrich ? ») ; la réassurance cas réels est préservée dans la réponse, le GTM et le bloc GEO.
- **Conservé (force) :** stack outbound (Clay, FullEnrich, Lemlist) intact.
- **Protégé :** « x3 » / « +conv. » `[to validate]` ; Qualiopi/OPCO `[to validate placement]` ; note mots-clés honnête (pas de miroir bas-volume).

## Reconciliation applied
FR-audit reconciliation pass (SEO + anti-slop) — Agent 2:
- **Tags:** already normalized (`[to validate]` / `[to validate placement]`) — no change.
- **Cannibalization fix:** dropped the shared secondary `formation ia marketing` (ceded to creation-publicite-ia); this page keeps `formation prospection` (200/KD1) + `prospection ia` (150) — no cross-targeting.
- **Title:** short version "Go-to-Market & Sales : prospection augmentée IA" (~59 rendered) stays recommended; suffix-free. TICKET-FORM-TITLE-TPL / TICKET-FORM-SEO-DESC stay logged dev tickets. Meta ~159 kept ≤ cap.
- **Formation CTA varied:** "Cette formation est-elle faite pour vos équipes ?" → "Votre prospection passe-t-elle de la liste au rendez-vous à l'échelle ?" — anchored on this program's fact (list-to-meeting at scale).
- **KEPT distinct:** outbound tool stack (Clay / Lemlist / FullEnrich). Varied buyer-specific FAQ #3 kept.
- **PROTECTED:** "x3" / "+conv." `[to validate]`; Qualiopi/OPCO `[to validate placement]`. Nothing added, rounded, or invented.
