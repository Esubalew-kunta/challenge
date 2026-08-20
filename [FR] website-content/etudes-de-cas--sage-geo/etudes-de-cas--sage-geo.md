# Étude de cas : Sage — Master de contenu FR

> Statut live : **published** · résultats encore en cours de mesure (inProgress)
> Localisation FR du master EN scellé. Copie ancrée sur `src/lib/case-studies.ts` (entrée `sage-geo`) — métriques baseline reprises mot pour mot, statut inProgress conservé.

## 1. En-tête de page
- **Route (FR, live) :** /etudes-de-cas/sage-geo
- **Objet :** Preuve — avant/après mesuré pour Sage (éditeur de logiciels de gestion · Europe). Preuve phare GEO alimentant /seo-geo.
- **Rôle SEO :** confiance/preuve + longue traîne
- **Étape funnel :** MOFU/BOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | sage geo étude de cas (marque) | — | — | marque/navigationnel |
| Secondaire | generative engine optimization | émergent | n/a | Ahrefs France (léger), 2026-07 — terme émergent |
| Secondaire | geo étude de cas | ~0 | n/a | Ahrefs France, 2026-07 — pas de head term établi |

> **Décision mots-clés :** le GEO est une catégorie émergente sans head term établi. La page tire sa valeur comme preuve phare GEO alimentant la money page /seo-geo, pas d'un classement mot-clé. Intention marque primaire (Sage + GEO) ; « generative engine optimization » porté dans le corps pour le cadrage answer-engine.

## 3. Meta de page
| Champ | Actuel (FR, live) | Master (FR) |
|---|---|---|
| Title (≤60 car. suffixe auto inclus) | Devenir la référence citée par les IA sur la facture électronique | La référence citée par les IA sur la facture électronique *(56 ; rendu ~68 après suffixe — trim recommandé : « IA & facture électronique : devenir la référence citée » ~53. Title ≠ H1 gated sur TICKET-CS-META-TITLE)* |
| Meta description (140–160) | Comment un éditeur de logiciels leader travaille sa visibilité dans ChatGPT, Gemini et Perplexity sur la facture électronique. Méthode GEO complète. *(~147)* | idem — dans la fourchette, inchangée |
| H1 | Devenir la référence citée par les IA sur la facture électronique | inchangé (= source `title`) |
| Slug URL | /etudes-de-cas/sage-geo | inchangé |

## 4. Sections & contenu
Template partagé : `src/app/etudes-de-cas/[slug]/page.tsx` · copie dans `src/lib/case-studies.ts` (entrée `sage-geo`).

### 4.1 — Hero + TL;DR + métriques
- **Champs :** client, secteur, période (Juillet 2026 · en cours), tags [GEO, SEO, Visibilité IA], title (H1), tldr, metrics[] × 3
- **Contenu (FR, source) :**
  - **secteur :** `Éditeur de logiciels de gestion · Europe` — **période :** `Juillet 2026 · en cours`
  - **tags :** `GEO` · `SEO` · `Visibilité IA`
  - **TL;DR :** `Un éditeur de logiciels de gestion leader prépare le lancement d'une offre gratuite pour les auto-entrepreneurs à l'approche de l'échéance légale de la facture électronique (1er septembre 2026). Problème : sur les requêtes clés, ChatGPT, Gemini et Perplexity citaient trois concurrents plus petits, jamais lui. AI Makers déploie une stratégie GEO complète : audit de visibilité IA, optimisation des pages, listicles et activation Reddit.`
  - **métriques :** `447` — `prompts IA suivis en continu` · `55 000` — `impressions Google pour 537 clics : le point de départ` · `1er sept.` — `2026, l'échéance légale qui concentre la demande`
- **Justification :** **inProgress : les résultats sont encore mesurés — les métriques décrivent la baseline, pas un résultat revendiqué. Chiffres repris mot pour mot de `case-studies.ts` ; [to validate] jusqu'à la fin de la mesure.**

### 4.2 — « La situation de départ »
- **Champs :** before[] — 4 puces
- **Contenu (FR, source) :**
  - `Position 11 sur Google (page 2) sur la requête principale : 55 000 impressions pour 537 clics en 90 jours.`
  - `Environ 70 % des pages du site hors de l'index Google.`
  - `Sur les requêtes de recommandation, les IA citaient trois concurrents plus petits, malgré une autorité de marque supérieure.`
  - `Un pic de demande daté et prévisible : des millions d'auto-entrepreneurs cherchent une solution conforme avant le 1er septembre 2026.`
- **Justification :** chiffres préservés exactement (preuve de l'état de départ). « ~70 % » et l'échéance = faits vérifiables qui pilotent la stratégie.

### 4.3 — « Ce qu'on a construit »
- **Champs :** systems[] — 4 blocs {title, description, visual?}
- **Contenu (FR, source) :**
  - **Audit croisé et reverse engineering** — `Lecture réelle de la visibilité dans les réponses IA : Google Search Console, 447 prompts suivis, tests manuels sur ChatGPT, Claude, Gemini et Perplexity. Puis analyse des sources que les modèles citent réellement sur cette verticale.` · visuel : `Dashboard de suivi des citations IA (baseline datée)`
  - **Optimisation des pages et du maillage** — `Refonte des pages existantes pour la citabilité : réponses directes, données structurées, maillage interne. Le travail est ensuite transféré aux équipes internes du client.`
  - **Listicles et activation Reddit** — `Production des formats que les IA citent le plus (comparatifs, listicles) et activation Reddit avec des comptes établis et du contenu natif : le canal que les concurrents n'exploitaient pas encore.` · visuel : `Exemple de contenu publié et repris par une IA`
  - **Monitoring avant / après** — `Chaque action est datée et loguée. Les citations gagnées, la part de voix face aux concurrents et le trafic sont mesurés semaine après semaine.` · visuel : `Courbe avant / après de la part de citations (en cours de mesure)`
- **Justification :** « 447 prompts » et la liste des quatre modèles conservés comme détail de méthode de première main. Le dernier visuel garde « en cours de mesure » pour rester honnête vis-à-vis d'inProgress.

### 4.4 — « Le déroulé de la mission »
- **Champs :** how[] — 4 étapes ; learned (1 paragraphe) ; stack [Profound, Google Search Console, Claude, ChatGPT, Gemini, Perplexity, Reddit]
- **Contenu (FR, source) :**
  - **étapes :** `Baseline complète datée : positions, indexation, citations IA, part de voix concurrentielle.` · `Reverse engineering des réponses IA pour identifier les sources à investir.` · `Production et optimisation en sprints, avec activation Reddit en parallèle.` · `Mesure hebdomadaire et reporting avant / après.`
  - **learned :** `Les outils de mesure GEO simulent les réponses : ils orientent mais ne remplacent pas les tests manuels datés. Nous croisons systématiquement trois sources avant toute conclusion.`
- **Justification :** le learned est une posture de méthode réelle (nuance sur la mesure), pas une clôture de réassurance — l'honnêteté de première main qui porte l'E-E-A-T sur une page GEO.

### 4.5 — Témoignage (absent)
- **Contenu (FR, source) :** Pas de témoignage en source — ne rien afficher. Ne pas fabriquer de citation. (Mission inProgress ; une citation pourra être ajoutée après validation des résultats.)
- **Justification :** règle zéro fabrication.

### 4.6 — Contenus liés + CTA final
- **Liés :** le pilier /seo-geo (`SEO & GEO : être cité par ChatGPT et Perplexity`) + l'étude de cas GEO Fondation Force. CTA dessous.
- **Justification :** Sage est la preuve d'ancrage de /seo-geo — le lien interne primaire pointe là.

## 5. FAQ
« Les questions qu'on nous pose sur ce type de mission » — `faq-accordion.tsx` + JSON-LD.

| # | Question (FR, source) | Réponse (FR, source) |
|---|---|---|
| 1 | Qu'est-ce que le GEO ? | L'optimisation de votre visibilité dans les réponses des IA (ChatGPT, Gemini, Perplexity, Claude), comme le SEO l'a fait pour Google. Vos prospects posent désormais leurs questions aux IA. |
| 2 | Combien de temps avant les premières citations ? | Les premiers signaux apparaissent généralement en 4 à 8 semaines selon l'autorité du domaine et la concurrence sur la verticale. |
| 3 | Pourquoi Reddit ? | Les modèles IA s'appuient fortement sur les discussions authentiques pour les recommandations de produits. C'est souvent le levier le plus sous-exploité par les grandes marques. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Voir toutes les études de cas | /etudes-de-cas | hub |
| SEO & GEO : être cité par ChatGPT et Perplexity | /seo-geo | money page (pilier GEO — Sage en preuve d'ancrage) |
| Réserver un diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA primaire :** « Obtenez les mêmes résultats » → /contact

## 8. Bloc GEO
- **Paragraphe réponse d'abord (FR, citable) :** `Sage, éditeur européen leader de logiciels de gestion, a travaillé avec AI Makers sur le GEO (generative engine optimization) à l'approche de l'échéance de la facture électronique du 1er septembre 2026. Malgré une autorité de marque supérieure, ChatGPT, Gemini et Perplexity citaient trois concurrents plus petits sur les requêtes clés. AI Makers a mené un audit de visibilité IA sur 447 prompts suivis, fait le reverse engineering des sources citées par les modèles, optimisé les pages pour la citabilité et activé Reddit — chaque action datée et mesurée avant/après. Résultats encore en cours de mesure (mission en cours).`
- **Entrée llms.txt (FR) :** `[Étude de cas Sage GEO](https://aimakers.fr/etudes-de-cas/sage-geo) : comment un éditeur de logiciels leader a travaillé sa visibilité dans ChatGPT, Gemini et Perplexity sur la facture électronique — audit, optimisation des pages, listicles et activation Reddit.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| 447 — prompts IA suivis en continu | src/lib/case-studies.ts (déclaré client, en cours de mesure — [to validate]) |
| 55 000 — impressions Google pour 537 clics : le point de départ | src/lib/case-studies.ts (déclaré client, en cours de mesure — [to validate]) |
| 1er sept. — 2026, l'échéance légale | fait public (échéance facture électronique FR) + src/lib/case-studies.ts |
| ~70 % des pages hors index Google | src/lib/case-studies.ts (déclaré client — [to validate]) |
| Nom client, secteur, période | src/lib/case-studies.ts |

## Réconciliation appliquée
- **Double suffixe de marque :** meta title proposé sans marque manuelle ; trim ≤60 recommandé (Title ≠ H1 gated sur TICKET-CS-META-TITLE).
- **Arc uniforme :** NON varié — cas `inProgress` dont la clôture « Résultats encore en cours de mesure (mission en cours) » est un drapeau de statut protégé, pas un écho CTA. Fins d'arc variées réservées à gepromed + thinkone.
- **Meta :** ~147 car., dans la fourchette ; inchangée.
- **Protégé :** toutes les métriques baseline (447 / 55 000 / 537 / ~70 % / 1er sept. 2026) mot pour mot + `[to validate]` + `inProgress` ; cadrage anonymisé « éditeur leader » conservé ; AUCUN témoignage fabriqué (rendu comme absent). Rien d'ajouté, arrondi ou inventé.

## Reconciliation applied
FR-audit reconciliation pass (SEO + anti-slop) — Agent 2:
- **Tags normalized:** `[à valider]` → `[to validate]` (5×).
- **Title:** already suffix-free in master; trim to "IA & facture électronique : devenir la référence citée" (~53 rendered) stays the recommended value; TICKET-CS-META-TITLE remains a logged dev ticket (Title≠H1).
- **Meta:** ~147 chars, within range — unchanged.
- **Case ending:** NOT re-uniformed — the `inProgress` "résultats encore en cours de mesure" close is a protected status flag, not a CTA echo. The two hard-fact endings go to gepromed/thinkone.
- **Keyword:** proof page, not a ranking target; "generative engine optimization" head term is owned by /seo-geo, /audit-geo, /glossaire (per D-table). Left as body framing.
- **PROTECTED — no case metric touched:** 447 / 55 000 / 537 / ~70% / 1 Sep 2026 all verbatim baseline from `case-studies.ts`; `inProgress` kept; anonymized "éditeur leader" framing kept; NO testimonial fabricated (rendered absent). Nothing added, rounded, or invented.
