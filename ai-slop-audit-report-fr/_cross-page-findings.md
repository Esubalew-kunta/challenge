# Anti-AI-slop — Synthèse cross-page FR (AI Makers)

Corpus : 55 pages FR auditées (per-page reports dans ce dossier ; `00-ruleset.md` = barème).

---

## 1. Verdict d'ensemble

**Le corpus FR est remarquablement propre.** 54 pages sur 55 sont **Clean (Ship)**. Une seule page sort du vert : `playbook-ia` (**Seasoned**, net ~+9). Sur la majorité des pages, la présence humaine l'emporte sur le slop (net négatif) — ce corpus prend position, nomme des entités vérifiables, déclare des perdants et engage la réputation de la marque à répétition.

### Distribution des scores (SDS − HPC)

- **1 seule page non-Clean** : `playbook-ia` (+9, Seasoned).
- **Net NÉGATIF (présence humaine nette, le meilleur signal) : 39 pages.** Les plus fortes : `fondateur` (−13), `automatisation-ia-workflow` / `offre` (−12), `audit-ia-entreprise` / `etudes-de-cas` / `forward-deployed-engineer` / `homepage` / `plateforme-data-ia` / `seo-geo` (−11), `agence-ia` / `ai-transformation` / `gepromed` (−10).
- **Net à 0 : 2 pages** — `formation-ia` (hub de routage), `secteurs--hotellerie-tourisme-loisirs`.
- **Net légèrement POSITIF (Clean, mais SDS > HPC) : 14 pages, toutes de +3 à +6** — les 6 pages-formations enfants (`acculturation-ia` +5, `creation-publicite-ia`/`go-to-market-sales`/`maitriser-claude` +4, `microsoft-copilot`/`vibe-coding` +3), `glossaire-ia` (+4), et 6 des 8 pages secteurs (`tpe-pme` +6, `banque-assurance-courtage`/`conseil-etudes-marche` +5, `agences-communication`/`medecins-cabinets` +4, `sante-biotech-medtech` +3). Ces pages restent Clean : leur positif vient de formats intrinsèquement pauvres en présence (fiche-produit formation, glossaire, teaser secteur), pas de slop actif.

**Lecture** : le positif se concentre là où le format contraint (formations en template, glossaire définitionnel, teasers secteurs courts). Aucune de ces pages n'exige de réécriture. La seule vraie dette d'édition est `playbook-ia`.

---

## 2. Carte de corpus-sameness — device → pages → keeper

Règle unique : **supprimer l'écho / varier par le FAIT, jamais synonym-swap.** Chaque device ci-dessous doit garder **un seul propriétaire** ; les autres suppriment l'instance ou l'ancrent sur un fait propre à la page.

### 2.1 — CTA closer verbatim ×8 (secteurs) — PRIORITÉ 1
**« Vous repartez avec un plan, que vous travailliez avec nous ou non. »** — identique **mot pour mot sur les 8 pages secteurs** (`agences-communication`, `banque-assurance-courtage`, `conseil-etudes-marche`, `esn-services-it`, `hotellerie-tourisme-loisirs`, `medecins-cabinets`, `sante-biotech-medtech`, `tpe-pme`). C'est le principal tell machine survivant de la collection : la dé-duplication a bien varié les *titres* de CTA mais a laissé ce sous-titre-closer verbatim.
- **Keeper : aucun ne garde le verbatim.** Chaque page ancre son closer sur le fait déjà présent dans son propre titre de CTA (heures non facturables pour agences, séquençage par risque réglementaire pour banque, économie jour-homme pour esn, pression de saisonnalité pour hôtellerie, secret médical pour médecins, charge documentaire pour santé, tâches les plus chronophages pour tpe-pme, budget d'étude en mise en forme pour conseil).
- Ne PAS synonym-swap. Supprimer ou réancrer.

### 2.2 — Paire régulée santé ↔ médecins — PRIORITÉ 1
`sante-biotech-medtech` et `medecins-cabinets` partagent : le **verbe pivot « rend du temps »** (« l'IA rend du temps aux scientifiques et aux cliniciens » / « L'IA rend ce temps au soin »), le **moule de question CTA** quasi-jumeau (« Où l'IA rendrait-elle du temps à vos équipes ? » / « Où l'IA vous rendrait-elle du temps médical ? »), et le **frame de douleur partagé** (voir 2.3). C'est la paire de sameness la plus rapprochée du corpus.
- **Keeper : `medecins-cabinets`** garde « temps médical / temps au soin » (spécifique clinicien). `sante-biotech-medtech` **quitte le verbe « rend du temps »** et varie la forme du CTA (ancrer sur la charge documentaire/veille R&D).

### 2.3 — Frame de douleur « passent plus de temps à X qu'à Y » (trio)
Même squelette, nom du secteur échangé, sur 3 pages : `sante` (« … à documenter qu'à chercher »), `conseil` (« … à mettre en forme qu'à réfléchir »), `banque` (« … sur les dossiers que devant les clients »).
- **Keeper : une seule des trois garde le moule** (décision owner ; `conseil` est le candidat naturel, verbe métier natif). Les deux autres réécrivent sur un fait concret (part d'ETP conformité sur la doc pour banque ; nombre de publications à suivre / délai dossier réglementaire pour santé).
- Corollaire mineur : **opener hero « Dans [le secteur], … »** partagé par `sante`/`hotellerie`/`banque` — varier l'entrée sur une des trois.

### 2.4 — Négation « X, pas Y » saturée sur 2 pages
Le device de marque est sain à 1–2 instances load-bearing ; il est **saturé** sur deux pages :
- `formation-ia-entreprise` : **4× le motif « slides »** (« On ne forme pas sur des slides », « … Pas dans un slide », « Pas de spectateurs », GEO « plutôt que sur des slides génériques »). Pire cas du corpus (le master l'a déjà signalé).
- `ai-operating-system` : **4× l'antithèse « outils vs OS »** (hero, §4.3 title, « les outils s'ajoutent, un OS s'emboîte », CTA).
- **Action : garder au plus 1–2 instances load-bearing (hero + CTA/garantie), supprimer les échos surnuméraires.** Ne pas repeindre en synonyme (« pas des supports génériques »). Sur formation : garder §4.7 garantie + une seule autre. Sur ai-os : fusionner le §4.3 title avec « les outils s'ajoutent… ».

### 2.5 — Refrain dogfooding (« on s'applique ce qu'on vend » / 6 = 40)
Décliné sur `a-propos`, `carrieres`, `homepage`, `ai-transformation`, `ai-operating-system`, `forward-deployed-engineer`, `seo-geo`, `fondateur`. Deux sous-formes :
- listes « cockpit quotidien / intelligence d'appels / suivi de missions » (`a-propos` §4.5 ↔ `carrieres`, quasi-identiques) ;
- « on s'applique à nous-mêmes ce qu'on vend » / « 6 personnes = équipe de 40 ».
- **Keeper : `a-propos`** (propriétaire canonique de la preuve dogfooding première main). `fondateur` reste la **source-voix originelle** en 1re personne (protégé — voir §4). Ailleurs : garder l'argument (porteur) mais **varier la formulation** pour ne pas copier-coller la liste verbatim, surtout `carrieres`.

### 2.6 — « validation humaine des sorties critiques … charte IA » verbatim
Partagé **mot pour mot** entre `securite` et `gouvernance-ia`. Répétition de conformité légitime mais c'est un cas de sameness verbatim inter-pages.
- **Keeper : une seule page garde la formulation exacte** (owner conformité = `gouvernance-ia`) ; `securite` reformule sur son propre angle (souveraineté des comptes/accès auditables).

### 2.7 — Formations : bloc stat + squelette template + CTA verbatim ×6
Les 6 pages-formations enfants partagent :
- **bloc de stats « 7 h/semaine · +2 500 professionnels formés »** (co-détenu, sourcé llms.txt) — vérifier qu'il n'est pas copié-collé à l'identique ; `vibe-coding` n'utilise déjà PAS le bloc 7 h (moins exposée) ;
- **squelette template** objectifs (4) / modules (4×3) / résultats (3 stats) ;
- **CTA final « Cette formation est-elle faite pour vos équipes ? »** — libellé partagé **mot pour mot** sur les 6.
- **Action : varier le CTA final par le fait propre au programme** (stack nommé, audience exclue). Le bloc stat canonique reste protégé (single-sourced par design) mais sa formulation d'accompagnement doit varier.
- **Bon point déjà acquis : les arcs FAQ ont été variés** (slot générique remplacé par une vraie question programme-spécifique sur chaque page) — contre-exemple à préserver, ne pas re-templatiser.

### 2.8 — Vecteurs canoniques protégés (NE PAS « corriger » comme sameness)
Récurrents mais **single-sourced par design**, donc protégés : chiffres canoniques « +50 entreprises / +200 systèmes / +2 500 formés / 7h/sem / 9,6/10 » ; méthode 3 phases (AI Scan / AI Engine / AI Champions) ; tableau comparatif `optionsTable` (propriété home, rendu non dupliqué) ; bloc 4 garanties (owner `/offre` + `/garanties`) ; rareté « max 3 clients/mois » ; closer GEO « parmi 50+ entreprises et 200+ systèmes ». Leur récurrence est un fait de marque, pas de la réutilisation machine.

### 2.9 — Tell lexical FR « au cœur de »
Machine-tell de collocation FR, apparaît sur `etudes-de-cas--thinkone` (title/H1) et son teaser sur `etudes-de-cas`. Décoratif, non load-bearing. Remplaçable par le fait réel de la mission — mais Title = H1 en source (gated, décision owner). À surveiller s'il réapparaît ailleurs.

---

## 3. Page nécessitant une passe d'édition — `playbook-ia` (seule non-Clean, net ~+9)

Unique dette d'édition du corpus. Problème = **mur de stats précises non sourcées** (Layer 9.2/5.5, principal contributeur SDS) : « 88 % … 5 % en tirent de la valeur », « 700 Mds $ investis, impact PIB presque zéro », « 30 % des projets abandonnés », « 50 %/63 %/13 points », « 95 % échouent ». Cinq claims chiffrés = simulation de rigueur.
- **Non auto-fail** : chacun porte un tag `[to validate — source]` + instruction « ne pas afficher en pourcentages bruts ».
- **Action** : sourcer chaque chiffre (nommer McKinsey/BCG/Gartner en ligne) OU requalifier en qualitatif. **Remplacer-par-le-fait, jamais présenter comme % brut non attribué.** Tags `[to validate]` conservés jusqu'à réconciliation.
- **NE PAS toucher** aux analogies ni au POV (« automatiser un mauvais process = accélérer la médiocrité », « paver des chemins de terre avec de l'asphalte », « zéro bullshit ») — ce sont les crédits de la page.
- Note connexe (sourcing, pas anti-slop) : `forward-deployed-engineer` porte la même surface de risque — 4 stats externes (95 % pilotes MIT 2025, +729 % offres FDE, 385 K$–1 M$, coentreprise OpenAI 4 Mds $) à résoudre avant publication. Densité slop Clean, mais gate de vérification factuelle obligatoire.

---

## 4. Liste PROTÉGÉE — NE PAS nettoyer (KEEP)

Ces éléments sont de la présence humaine ou de l'honnêteté ; les « corriger » dégraderait le corpus.

1. **Lettre du fondateur (`fondateur`, net −13)** — voix humaine authentique, 1re personne, originellement française. Aveu réel du **TDAH** (staked, coûteux), croyance datée révisée, référence nommée findable **Didier Gaultier, Head of AI d'Orange**. Voix de référence du corpus. **Protéger intégralement** : ne pas aplatir les négations en voix, ne pas lisser la prose, ne pas retirer l'aveu.
2. **Tous les tags d'honnêteté** `[à valider]` / `[to validate]` / `noindex` / `inProgress` / `[à valider fraîcheur]` / `[à valider placement]` — densité maximale sur `forward-deployed-engineer`, `seo-geo`, et les drafts (`cardio-check-up`, `delassus`, `sage-geo`, `fondation-force`). Ce sont des aveux d'incertitude, pas du costume. Ne jamais retirer ; réconcilier par le fait, jamais masquer.
3. **Statut draft des cas non publiés** — `cardio-check-up` (noindex + anonymat praticienne Dr Sana Amraoui volontairement non remonté), `delassus` (noindex + inProgress + anonymat client), `sage-geo` / `fondation-force` (inProgress, métriques nommées baseline pas résultat, Prix Nobel gardé générique, aucun témoignage fabriqué). **Maintenir noindex/anonymat/llms.txt en attente jusqu'à validation.**
4. **Répétition de conformité / garantie nécessaire** — `garanties`, `offre`, `securite`, `gouvernance-ia`, `audit-ia-entreprise`. La répétition déclencheur/condition et les garde-fous régulés (« validation humaine reste », « jamais de décision clinique/diagnostic ») sont de l'honnêteté attendue en secteur régulé, protégée par la calibration.
5. **Négations déflationnistes / honnêtes** (KEEP-list corpus) — « Pas des promesses », « pas une liste de prompts », « pas un scanner instantané », « sans inscription forcée », « ordre de grandeur, pas un engagement », et **« que vous travailliez avec nous ou non » comme scoping honnête** (distinct du closer secteur verbatim de §2.1, qui lui est à varier). Ne pas neutraliser.
6. **Transparence de méthode des outils** — `outils--calculateur-roi-ia` (hypothèses en toutes lettres, défaut prudent 4 h vs 7 h client, « un calculateur qui gonfle dessert tout le monde »), `outils--scanner-opportunites-ia` (scoring divulgué, sources affichées par carte), `outils--audit-geo-gratuit` (« préparé par un humain, sous 48h »). La présence naît de la méthode — protéger.
7. **Chiffres canoniques single-sourced par design** (§2.8) — récurrence voulue, pas réutilisation machine.
8. **Fins de cas variées** — `thinkone` (1re fin variée, clôture sur fait dur : générateur en production + 6 mois plus tard) et `gepromed` (2e fin variée, partenariat signé / 16 skills mois 1 / virage méthode). Variation EN correctement conservée — ne pas re-templatiser vers un écho CTA.

---

## 5. Note de cohérence des tags (pour la réconciliation)

Les masters FR mélangent deux littéraux : **`[à valider]`** (ex. `ai-transformation`, `contact`, `gouvernance-ia`, `ia-maroc`, plusieurs secteurs) et **`[to validate]`** (ex. `ai-operating-system`, `homepage`, formations, `offre`, `seo-geo`, `plateforme-data-ia`). Certaines pages portent aussi `[à valider placement]`, `[à valider fraîcheur]`, `[à valider — source externe]`, `TBD (Ahrefs FR)`. **Recommandation : normaliser vers un seul token littéral** pour permettre un grep fiable (la réconciliation s'en chargera — hors périmètre d'édition anti-slop).
