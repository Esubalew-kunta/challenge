# Étude de cas : Gepromed — Master de contenu FR

> Statut live : **published** (publié)
> Localisation FR du master EN scellé. Copie ancrée sur `src/lib/case-studies.ts` (entrée `gepromed`) — métriques reprises mot pour mot. Fin d'arc variée conservée (voir §7).

## 1. En-tête de page
- **Route (FR, live) :** /etudes-de-cas/gepromed
- **Objet :** Preuve — avant/après mesuré pour Gepromed (MedTech · Strasbourg). Preuve d'ancrage de l'Operating System IA / agents par département.
- **Rôle SEO :** confiance/preuve + longue traîne
- **Étape funnel :** MOFU/BOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | gepromed étude de cas (marque) | — | — | marque/navigationnel |
| Secondaire | ia pour medtech | faible | n/a | Ahrefs France (léger), 2026-07 — niche |
| Secondaire | agents ia conformité iso 13485 | faible | n/a | Ahrefs France (léger), 2026-07 — quasi nul, longue traîne |

> **Décision mots-clés :** page de preuve. L'accroche distinctive — des agents IA dans une MedTech ISO 13485 réglementée — est longue traîne et quasi nulle en volume mais un fort différenciateur GEO. Intention marque primaire ; la page alimente la money page automatisation (agents par département).

## 3. Meta de page
| Champ | Actuel (FR, live) | Master (FR) |
|---|---|---|
| Title (≤60 car. suffixe auto inclus) | Un département IA complet pour une MedTech de 6 personnes | idem *(56 ; rendu ~68 après suffixe — trim recommandé : « Un département IA pour une MedTech de 6 personnes » ~49. Title = H1)* |
| Meta description (140–160) | Agents IA pour l'acquisition, la finance, la gestion de projet et la conformité ISO dans une MedTech de 6 personnes. 16 skills livrés en un mois. *(~144)* | idem — dans la fourchette, inchangée |
| H1 | Un département IA complet pour une MedTech de 6 personnes | inchangé (= source `title`) |
| Slug URL | /etudes-de-cas/gepromed | inchangé |

## 4. Sections & contenu
Template partagé : `src/app/etudes-de-cas/[slug]/page.tsx` · copie dans `src/lib/case-studies.ts` (entrée `gepromed`).

### 4.1 — Hero + TL;DR + métriques
- **Champs :** client, secteur, période (Avril 2026 · en cours), tags [Agents IA, GTM, Conformité], title (H1), tldr, metrics[] × 3
- **Contenu (FR, source) :**
  - **secteur :** `MedTech · Strasbourg` — **période :** `Avril 2026 · en cours`
  - **tags :** `Agents IA` · `GTM` · `Conformité`
  - **TL;DR :** `Gepromed, institut strasbourgeois des dispositifs médicaux (formation de chirurgiens, recherche clinique, analyse d'explants), fonctionne à 6 personnes dans un environnement ultra-réglementé : ISO 9001, ISO 13485, Qualiopi. AI Makers y déploie des agents IA par domaine (acquisition, finance, gestion de projet, conformité), d'abord testés par une personne, puis réclamés par toute l'équipe.`
  - **métriques :** `47` — `besoins IA recensés par l'équipe elle-même` · `16` — `skills livrés le premier mois` · `6` — `personnes, 5 départements couverts`
- **Justification :** chiffres mot pour mot de `case-studies.ts`. « 16 skills / 47 besoins / 6 personnes » = triangle de preuve — exact.

### 4.2 — « La situation de départ »
- **Champs :** before[] — 3 puces
- **Contenu (FR, source) :**
  - `Une responsable admin et finance cumulant 3 casquettes, avec 2 à 3 jours par semaine de tâches à faible valeur, dont la double saisie des données financières entre deux outils.`
  - `Une conformité chronophage : ISO, RGPD, Qualiopi, financements publics audités.`
  - `Un site invisible (score de lisibilité IA de 24/100) et un parcours d'inscription qui perdait des candidats.`
- **Justification :** « 24/100 » et « 2 à 3 jours/semaine » = état de départ concret — préservés exactement.

### 4.3 — « Ce qu'on a construit »
- **Champs :** systems[] — 4 blocs {title, description, visual?}
- **Contenu (FR, source) :**
  - **Acquisition (GTM Engineering)** — `ICP, messages de prospection, posts LinkedIn et calendrier éditorial, SEO et GEO, refonte du site avec capture du lead avant paiement.` · visuel : `Le dashboard d'inscriptions du nouveau site`
  - **Finance et administratif** — `Agent comptabilité cadré avec la responsable financière, skills compta, RH et qualité déployés directement sur son poste de travail.` · visuel : `Un skill finance en action (données anonymisées)`
  - **Gestion de projet et développement** — `Delivery tracker, accélération du développement logiciel (documentation, tickets), générateur de deck de revue de direction.` · visuel : `Le delivery tracker de la mission`
  - **Conformité : le différenciant MedTech** — `Analyse d'écart ISO, générateur de documents RGPD, programme Qualiopi. De l'IA auditable, avec validation humaine avant tout export.`
- **Justification :** « validation humaine avant tout export » conservée — claim de conformité porteur pour un client réglementé. Noms de livrables réels préservés.

### 4.4 — « Le déroulé de la mission »
- **Champs :** how[] — 4 étapes ; learned ; stack [Claude, n8n, Next.js, Notion]
- **Contenu (FR, source) :**
  - **étapes :** `Masterclass collective pour toute l'équipe (avril 2026).` · `Une collaboratrice demande une formation individuelle sur ses tâches réelles : 4 skills déployés sur son poste en une journée.` · `La direction demande les skills pour toute l'équipe ; les employés recensent eux-mêmes 47 besoins.` · `Partenariat signé, 16 skills livrés le premier mois, agents déployés par domaine.`
  - **learned :** `La formation collective ne suffit pas : c'est la journée individuelle sur les tâches réelles d'une seule personne qui a déclenché l'adoption générale. Depuis, chaque déploiement commence par un pilote individuel.`
- **Justification :** la séquence d'adoption (masterclass → une personne → toute l'équipe) est la colonne vertébrale — conservée pas à pas. Learned = méthode transférable (démarrer par un pilote individuel).

### 4.5 — Témoignage (absent)
- **Contenu (FR, source) :** Pas de témoignage en source — ne rien afficher. Ne pas fabriquer de citation.
- **Justification :** règle zéro fabrication.

### 4.6 — Contenus liés + CTA final
- **Liés :** le pilier automatisation (/automatisation-ia-workflow, agents par département) + l'étude de cas operating system Addictest. CTA dessous.
- **Justification :** preuve agents/OS — pointe vers la money page automatisation.

## 5. FAQ
« Les questions qu'on nous pose sur ce type de mission » — `faq-accordion.tsx` + JSON-LD.

| # | Question (FR, source) | Réponse (FR, source) |
|---|---|---|
| 1 | L'IA est-elle compatible avec un environnement ISO 13485 ? | Oui, à condition de traçabilité et de validation humaine avant export. Ici, chaque agent respecte le cadre qualité existant. |
| 2 | 6 personnes, est-ce trop petit pour l'IA ? | C'est l'inverse : plus l'équipe est petite, plus chaque heure récupérée compte. 47 besoins ont été identifiés dans cette structure de 6 personnes. |
| 3 | Par où commencer ? | Par une personne et ses tâches réelles, pas par un plan global. L'adoption fait le reste. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Voir toutes les études de cas | /etudes-de-cas | hub |
| Agents IA et automatisation, département par département | /automatisation-ia-workflow | money page (pilier) |
| Réserver un diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA primaire :** « Obtenez les mêmes résultats » → /contact
- **Variation d'arc (§3.1 — 2 des 2 cas terminés variés) :** conserver le *composant* CTA « Obtenez les mêmes résultats », mais faire atterrir la dernière phrase sur des **faits durs**. Phrase de clôture avant le CTA : `Partenariat signé, 16 skills livrés le premier mois, et depuis, chaque déploiement commence par un pilote individuel.` (faits seulement, tous en source : partenariat signé + 16 skills + le changement de méthode ; aucune métrique nouvelle.)

## 8. Bloc GEO
- **Paragraphe réponse d'abord (FR, citable) :** `Gepromed, institut MedTech strasbourgeois de 6 personnes opérant sous ISO 9001, ISO 13485 et Qualiopi, a travaillé avec AI Makers pour construire un département IA complet. Des agents IA ont été déployés par domaine — acquisition (GTM), finance, gestion de projet et conformité — avec validation humaine avant tout export pour rester auditable. L'équipe a recensé elle-même 47 besoins IA, et 16 skills ont été livrés le premier mois. L'adoption a été déclenchée non par la masterclass collective mais par une journée individuelle sur les tâches réelles d'une personne.`
- **Entrée llms.txt (FR) :** `[Étude de cas Gepromed](https://aimakers.fr/etudes-de-cas/gepromed) : une MedTech de 6 personnes sous ISO 13485 se dote d'un département IA complet — agents pour l'acquisition, la finance, la gestion de projet et la conformité, 16 skills le premier mois.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| 47 — besoins IA recensés par l'équipe | src/lib/case-studies.ts (déclaré client) |
| 16 — skills livrés le premier mois | src/lib/case-studies.ts (déclaré client) |
| 6 — personnes, 5 départements couverts | src/lib/case-studies.ts (déclaré client) |
| Score lisibilité IA 24/100 ; 2–3 jours/sem. tâches à faible valeur | src/lib/case-studies.ts (déclaré client) |
| Nom client, secteur, période | src/lib/case-studies.ts |

## Réconciliation appliquée
- **Double suffixe de marque :** aucun suffixe manuel ; Title = H1. Trim ≤60 recommandé (gated sur TICKET-CS-META-TITLE).
- **Arc uniforme — VARIÉ (cas 2 sur 2) :** cas terminé le plus solide — seconde fin variée. Composant CTA conservé ; clôture atterrissant sur des **faits durs** (partenariat signé + 16 skills mois 1 + changement de méthode pilote individuel, tous en source). Pas de restructuration.
- **Meta :** ~144 car., dans la fourchette ; inchangée.
- **Négations :** renversement FAQ (« plus l'équipe est petite, plus chaque heure compte ») conservé — porteur de sens. Qualiopi/ISO sont les certifications du client (fait client), pas un claim de certification AI Makers — laissés exacts.
- **Protégé :** triangle de preuve (47 / 16 / 6), 24/100, 2–3 jours/sem., « validation humaine avant tout export » mot pour mot ; stack nommée ; AUCUN témoignage fabriqué. Rien d'ajouté, arrondi ou inventé.

## Reconciliation applied
FR-audit reconciliation pass (SEO + anti-slop) — Agent 2:
- **Tags:** none present — nothing to normalize.
- **Title/Meta:** meta ~144 within range (unchanged); title trim "Un département IA pour une MedTech de 6 personnes" (~49 rendered) stays recommended; TICKET-CS-META-TITLE remains a logged dev ticket.
- **Case ending — KEPT VARIED (2 of 2 hard-fact endings this batch):** closing lands on facts (partnership signed, 16 skills month 1, individual-pilot method shift), not a CTA echo. NOT re-uniformed. Closing sentence needs a template `outcome` field to land — field-map dev ticket, left ready-but-pending.
- **ISO 9001 / ISO 13485 / Qualiopi:** kept as the client's own certifications (client facts), not an AI Makers certification claim — left exact per both audits; no new tag introduced.
- **PROTECTED — no case metric touched:** proof triangle 47 / 16 / 6, 24/100, 2–3 j/sem, "validation humaine avant tout export" verbatim; stack named; NO testimonial fabricated. Nothing added, rounded, or invented.
