# Formation IA entreprise — hub (/formation-ia-entreprise) — Master de contenu FR

> Localisation FR du master EN. Le FR est la langue primaire live et le vaisseau amiral (marché FR fort). Copy ancré sur `src/app/formation-ia-entreprise/page.tsx` (inline, source live), `src/lib/formations.ts` (catalogue = 6 programmes) et `formateurs`. On conserve chiffres, noms de formateurs et témoignages signés à l'identique et on n'applique que les corrections d'audit (dé-empilage des négations « X, pas Y » — pire cas du lot, restreinte Qualiopi/OPCO, mots-clés FR).
>
> **Note source :** `src/lib/offer-pages/formation.ts` est orphelin (dit « Cinq formations ») — la page live utilise `page.tsx` + `formations.ts` (6 programmes). On localise la page LIVE.

## 1. En-tête de page
- **Route (FR, live) :** /formation-ia-entreprise
- **Objet :** Hub pilier formation : 6 programmes, formateurs, lead magnet catalogue. Vaisseau amiral FR.
- **Rôle SEO :** pilier (FR)
- **Étape funnel :** MOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | formation ia | 6 900 | 55 | Ahrefs France (KE), 2026-07 |
| Secondaire | formation ia entreprise | 700 | 13 | Ahrefs France (KE), 2026-07 |
| Secondaire | formation intelligence artificielle | 1 700 | 55 | Ahrefs France (KE) — tête générique, difficile |
| Secondaire | formation ia générative | 250 | n/a | Ahrefs France (KE), 2026-07 |

> **Décision mots-clés :** contrairement à l'EN (où « ai training » se dilue dans le bruit MOOC/emplois), en France `formation ia` est un vrai head commercial fort (6 900 / KD55 — dur, exige toute l'autorité du pilier). Ce hub pilier le possède, avec `formation ia entreprise` (700 / KD13) comme secondaire cœur-cible et `formation intelligence artificielle` (1 700 / KD55) en variante de corps. `formation ia générative` porté en secondaire. Les enfants du cluster (acculturation, vibe-coding, copilot, claude…) captent leurs heads spécifiques ; le pilier garde le générique pour éviter la cannibalisation.

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | Formation IA entreprise : 6 programmes hands-on sur vos cas réels | *(≈64 car. — au-delà avec suffixe)* → **Proposé : `Formation IA entreprise : programmes hands-on`** *(45 ; rend ≈57 avec le suffixe `\| AI Makers` — « 6 » retiré pour dégager une marge sous 60 ; garde le secondaire exact « formation ia entreprise »)* |
| Meta description (140–160 car.) | Formation IA pour entreprises, hands-on et sur vos cas d'usage réels. Six programmes : Acculturation IA, Vibe Coding, Création & Publicité, Go-to-Market & Sales, Microsoft Copilot, Maîtriser Claude. +2 500 professionnels formés. | *(≈225 car. — trop long)* → **Proposé : `Formation IA hands-on sur vos cas d'usage réels. Six programmes, des fondamentaux à Claude et Copilot. +2 500 professionnels formés, 9,6/10.`** *(148)* |
| H1 | Formation IA pour entreprises, sur vos cas d'usage réels | Inchangé |
| URL slug | /formation-ia-entreprise | /formation-ia-entreprise |

## 4. Sections & contenu
Sources : `src/app/formation-ia-entreprise/page.tsx` (inline) + `src/lib/formations.ts`. Composants : `formateurs-grid.tsx`, `formation-visuals.tsx`, `catalogue-form.tsx`, `formation-photo.tsx`.

### 4.1 — Hero
- **Composant :** `page.tsx`
- **Proposé (FR) — verbatim live :**
  - **badge :** `Formation IA`
  - **H1 :** `Formation IA pour entreprises, sur vos cas d'usage réels`
  - **subtitle :** `Six programmes hands-on, du débutant à l'avancé. Chaque formation part de vos tâches réelles, en présentiel, distanciel ou hybride, en France et au Maroc.`
  - **CTA primaire :** `Recevoir le catalogue complet` → #catalogue — **CTA secondaire :** `Réserver un appel` → /contact
  - **stat flottant :** `9,6/10 de satisfaction`
- **Rationale :** outcome answer-first + mot-clé primaire (`formation ia`) dans le H1. Six programmes explicitement dès le hero.

### 4.2 — Preuve (stats + témoignages)
- **Composant :** bande `preuveStats` + `formationTemoignages` (Amgen, Délifrance, Shem's Publicité)
- **Proposé (FR) — verbatim live :**
  - **H2 :** `Ce que disent les équipes formées` (kicker `/ Ils l'ont vécu`)
  - **stats (hiérarchie validée) :** `100% de recommandations` `[to validate]` · `9,6/10 de satisfaction` · `+2 500 professionnels formés` *(fix : « 100% de recommandations » tagué `[to validate]` — cohérence avec la home ; site-config bookingProof, absent de llms.txt, sans base chiffrée sourcée)*
  - **témoignages :** RÉUTILISER — citations signées déjà publiées (`clientLogos`). Traduire/conserver verbatim ; ne pas réécrire, ré-attribuer ni fabriquer (ne pas inventer de résultat Amgen — garder ce qui est déjà signé).
- **Rationale :** bloc preuve partagé ; cette page possède le cadrage, pas les citations. Chiffres depuis bookingProof + llms.txt.

### 4.3 — Pourquoi (notre approche)
- **Composant :** `page.tsx` (pourquoiPoints[3])
- **Proposé (FR) — dé-empilé (fix d'audit) :**
  - **kicker :** `/ Notre approche` — **H2 :** `Pourquoi nos formations marchent`
  - **01 :** `Sur vos cas réels et vos outils : chaque session est préparée à partir de vos processus, vos documents et vos logiciels.` *(fix : « pas des slides génériques » aplati)*
  - **02 :** `Animées par les ingénieurs qui construisent vos systèmes : les formateurs sont ceux qui déploient l'IA en production chez nos clients.` *(fix : « pas des formateurs professionnels qui récitent un support » aplati)*
  - **03 :** `Mesurées par la mise en pratique : le critère de réussite est ce que les équipes utilisent réellement dans leur travail les semaines suivantes.` *(fix : « pas par un quiz » aplati)*
- **Rationale :** différenciateur E-E-A-T (formateurs praticiens). Négations aplaties en affirmations positives — la page était le pire cas du lot pour l'empilage « X, pas Y ».

### 4.4 — Catalogue (6 programmes)
- **Composant :** `page.tsx` + `formations.ts` + FormationVisual
- **Proposé (FR) — verbatim live :**
  - **kicker :** `/ Le catalogue` — **H2 :** `Six formations, un seul critère : l'usage réel` — **intro :** `Chaque programme vise un résultat opérationnel précis, pas une culture générale de l'IA. Cliquez pour voir le détail de chaque formation.`
  - **cartes (name / public / tagline / outils — depuis `formations.ts`, source de vérité) :**
    1. **Acculturation IA** (slug acculturation-ia) — pour tous les collaborateurs, quel que soit le métier.
    2. **Vibe Coding** (slug vibe-coding) — profils métiers et opérationnels, sans prérequis technique.
    3. **Création & Publicité IA** (slug creation-publicite-ia) — équipes marketing, contenu et création.
    4. **Go-to-Market & Sales** (slug go-to-market-sales) — équipes sales, marketing et growth.
    5. **Microsoft Copilot** (slug microsoft-copilot) — organisations équipées de l'environnement Microsoft.
    6. **Maîtriser Claude** (slug maitriser-claude) — équipes qui standardisent sur Claude (Anthropic).
  - **note :** l'en-tête dit « Six » partout (métadonnées, hero, H2 catalogue) — pas de bug de comptage sur cette page (la correction « Cinq→Six » évoquée ailleurs venait du fichier orphelin `formation.ts`, retirée).
- **Rationale :** six programmes nommés avec vrais noms d'outils (Claude, Copilot). Les cartes lient vers les 6 sous-pages (les masters enfants possèdent le détail).

### 4.5 — Pédagogie (pourquoi ça marche)
- **Composant :** `page.tsx` (pedagogie[3])
- **Proposé (FR) — dé-empilé (fix d'audit, une signature conservée) :**
  - **kicker :** `/ La pédagogie` — **H2 :** `On ne forme pas sur des slides` *(signature conservée — verdict positif-ancré)*
  - **01 — Les mains sur les outils :** `Chaque session se fait les mains sur les outils. Les participants repartent avec des workflows fonctionnels et directement utilisables.` *(fix : « Hands-on, pas théorique » → titre positif)*
  - **02 — Vos cas d'usage réels :** `Nous préparons chaque session à partir de vos processus, vos documents, vos logiciels. La formation part de votre quotidien réel.` *(fix : « pas des exemples inventés » aplati)*
  - **03 — Dans la durée :** `Les compétences IA s'ancrent par la répétition sur des cas réels. Nous privilégions un rythme continu à un bootcamp intensif oublié en deux semaines.` *(fix : « pas un one-shot » aplati ; le contraste « continu vs bootcamp » reste, informatif)*
  - **encart :** `Chaque participant repart avec des workflows qui tournent sur ses propres dossiers.` *(fix : « Pas de spectateurs. » retiré — dé-empilage du motif « slides » saturé ; le H2 §4.5 et la garantie §4.7 portent les deux instances load-bearing)*
- **Rationale :** cadence réelle (2h/semaine), lieux réels. Une seule négation-signature conservée dans cette section (H2 « On ne forme pas sur des slides ») ; le reste aplati en positif.

### 4.6 — Programme AI Champions
- **Composant :** `page.tsx` + `championsTestimonial`
- **Proposé (FR) :**
  - **badge :** `Le programme AI Champions` — **title :** `Des référents internes qui portent la transformation`
  - **copy :** `Une formation ponctuelle s'oublie. Un référent interne reste. Le programme AI Champions forme, au sein de vos équipes, les personnes qui diffuseront les usages IA dans la durée : elles accompagnent leurs collègues, identifient de nouveaux cas d'usage et font vivre les systèmes après notre départ. C'est ce qui rend votre organisation autonome, sans dépendance à un prestataire.`
  - **bullets :** `Des référents identifiés et formés dans chaque équipe clé.` · `Un impact mesuré pour chaque champion, suivi dans le temps.` · `Un programme intégré à l'activité, au plus près du travail réel.` *(fix : « pas une certification sur le papier » / « pas une parenthèse » aplatis)*
  - **témoignage :** RÉUTILISER la citation signée existante (`championsTestimonial`, Brigitte Meyer) — verbatim, ne pas fabriquer.
- **Rationale :** AI Champions est le mécanisme d'autonomie et le pont vers tout le modèle. First-hand, concret (« impact mesuré par champion »).

### 4.7 — Garantie formation
- **Composant :** `formationGuaranteeSection` + `championsGuarantee`
- **Proposé (FR) — verbatim live :**
  - **badge :** `Zéro risque` — **title :** `La garantie est écrite dans le contrat. Pas dans un slide.` *(instance owner de la négation « slide » côté formation — conservée)*
  - **subtitle :** `Nous mesurons l'impact de chaque champion formé. Si le résultat n'est pas là, c'est nous qui payons la différence.`
  - **credibility :** `On peut l'écrire parce qu'on mesure : chaque champion a un impact suivi, pas une attestation de présence.`
- **Rationale :** owner garantie = /garanties ; ici l'instance spécifique formation. Franc, sans rembourrage.

### 4.8 — Formateurs
- **Composant :** `formateurs-grid.tsx` + `formations.ts:formateurs`
- **Proposé (FR) — verbatim live :**
  - **kicker :** `/ Nos formateurs` — **H2 :** `Formés par ceux qui déploient l'IA en production`
  - **noms/rôles :** RÉUTILISER — garder les vrais noms verbatim (Othmane Halim, Maneesh Behera, Walid Boulanouar, Othmane Khadri, Adel Dahani, Edouard Willemsen…) ; ne pas altérer.
- **Rationale :** E-E-A-T. Le différenciateur : les formateurs sont des praticiens ; les noms sont des faits.

### 4.9 — Photos de sessions
- **Composant :** `formation-photo.tsx`
- **Proposé (FR) — verbatim live :** kicker `Nos formations en images` + tuile CTA `Quelle formation pour vos équipes ?` → `Réserver mon diagnostic gratuit` → /contact
- **Rationale :** photos = preuve de réalité ; pas de langage stock-photo.

### 4.10 — Formulaire catalogue (lead magnet)
- **Composant :** `formation/catalogue-form.tsx`
- **Proposé (FR) — verbatim live :**
  - **kicker :** `/ Le catalogue` — **title :** `Recevez le catalogue complet des formations`
  - **promesse :** les six programmes, formats et exemples de plans de session en PDF. Un email, sans appel requis.
  - **bouton :** `Recevoir le catalogue`
- **Rationale :** conversion secondaire à faible friction.

### 4.11 — FAQ / 4.12 — Related + CTA final
Voir §5, §6, §7.

## 5. FAQ
Slot FAQ : OUI — `faq-accordion.tsx` + JSON-LD FAQPage. **Copy live conservé verbatim (6 items).**

| # | Question (FR) | Réponse (FR) |
|---|---|---|
| 1 | Comment se déroule une formation type ? | Trois temps. En amont : nous analysons vos processus, vos outils et vos documents pour préparer des exercices tirés de votre quotidien réel. Pendant la session : chaque participant travaille les mains sur les outils, sur ses propres dossiers. Après : les participants repartent avec des workflows fonctionnels et directement utilisables, et nous mesurons la mise en pratique dans les semaines qui suivent. |
| 2 | Qu'est-ce que l'acculturation IA ? | L'acculturation IA est la première étape d'une transformation : faire comprendre à l'ensemble des équipes ce que l'IA sait faire, ce qu'elle ne sait pas faire, et comment l'utiliser dans leur métier. C'est l'objectif de notre masterclass Acculturation IA. L'acculturation seule ne suffit pas : sans cas d'usage concrets appliqués au travail réel, les acquis s'évaporent en quelques semaines. |
| 3 | Proposez-vous un bootcamp IA ? | Nous préférons un format continu à un bootcamp intensif de quelques jours. La raison est simple : les compétences IA s'ancrent par la répétition sur des cas réels, pas par une immersion unique. Dans notre accompagnement AI PARTNER, la formation est intégrée à raison de 2 heures par semaine, directement sur les workflows de vos équipes. Des formats courts et intensifs restent possibles pour lancer une dynamique. |
| 4 | La formation prompt engineering est-elle incluse ? | Oui. Le prompt engineering (savoir formuler des instructions fiables et reproductibles à une IA) est un socle transversal de toutes nos formations, en particulier la masterclass Acculturation IA. Nous ne le vendons pas comme une formation à part : un prompt n'a de valeur qu'appliqué à un cas d'usage métier précis. |
| 5 | Les formations sont-elles adaptées aux non-techniciens ? | Oui, c'est même le cœur de notre approche. La majorité des +2 500 professionnels que nous avons formés ne sont pas des profils techniques : commerciaux, juristes, RH, équipes support, dirigeants. Les formations partent de leurs tâches quotidiennes (rédiger, analyser, synthétiser), pas de concepts techniques. Même Vibe Coding, notre programme le plus avancé, s'adresse à des profils métiers qui n'ont jamais codé. |
| 6 | Combien de temps dure une formation IA en entreprise ? | Cela dépend du format. Une session d'acculturation se tient sur une demi-journée à une journée. Un programme complet par équipe s'étale sur plusieurs semaines. Dans le cadre de notre accompagnement AI PARTNER, la formation est continue : 2 heures par semaine, chaque semaine, appliquées aux cas d'usage réels de vos équipes, avec un objectif d'autonomie à 6 mois via le programme AI Champions. *(Owner canonique de la question durée-formation sur le site.)* |

> **Note Qualiopi / OPCO :** le brief stratégie positionne cette page autour de la certification Qualiopi et du financement OPCO (« jusqu'à 100% »). Aucune de ces affirmations n'apparaît dans `public/llms.txt` ni dans le copy scanné. **`[to validate placement]`** — NE PAS ajouter de FAQ Qualiopi ni de pourcentage de financement tant que le juridique/ops n'a pas confirmé que la certification est active et le taux exact. Si confirmé, une 7e FAQ (« Cette formation est-elle finançable par un OPCO ? ») serait le foyer naturel et cette page en deviendrait l'owner canonique.

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Les 6 pages programme | /formation-ia-entreprise/[slug] ×6 | détails programmes (masters enfants) |
| Meilleures formations IA pour entreprises | /blog/meilleures-formations-ia-entreprise | connexe (existant) |
| Meilleures formations Claude en entreprise | /blog/meilleures-formations-claude-entreprise | connexe (existant) |
| De la formation aux systèmes en production | /agence-ia | lien cluster (nouveau) |
| Réserver un diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA primaire :** title `Quelle formation pour vos équipes ?` → /contact (bouton `Réserver mon diagnostic gratuit`)
- **CTA secondaire :** formulaire catalogue PDF → `Recevoir le catalogue`
- **subtitle :** `30 minutes pour identifier les équipes à former en priorité, les cas d'usage à travailler et le format adapté à votre organisation.`

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `AI Makers propose des formations IA hands-on pour les équipes, construites sur les vrais cas d'usage de l'entreprise. Le catalogue couvre six programmes — Acculturation IA, Vibe Coding, Création & Publicité IA, Go-to-Market & Sales, Microsoft Copilot et Maîtriser Claude — en présentiel à Paris et Rabat ou à distance. +2 500 professionnels formés, 9,6/10 de satisfaction, 100% de recommandations [to validate].`
- **Entrée llms.txt (FR) :** `[Formation IA entreprise](https://aimakers.fr/formation-ia-entreprise) : formation IA hands-on sur les cas d'usage réels des équipes — six programmes, animés par les ingénieurs qui déploient l'IA en production.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| +2 500 professionnels formés ; 9,6/10 | public/llms.txt + site-config bookingProof (canonique) |
| 100% de recommandations | site-config bookingProof — `[to validate]` (absent de llms.txt, pas de base chiffrée sourcée ; tagué comme sur la home) |
| Six programmes ; présentiel Paris/Rabat + distanciel ; format 2h/semaine ; autonomie à 6 mois | page.tsx + formations.ts |
| Formateurs praticiens (vrais noms) | formations.ts formateurs (verbatim, ne pas altérer) |
| Certification Qualiopi / financement OPCO « jusqu'à 100% » | brief stratégie uniquement — PAS dans llms.txt ni le copy → `[to validate placement]`, aucun % de financement inventé |

## Corrections d'audit appliquées
- **Dé-empilage « X, pas Y » (pire cas du lot)** — après la passe de réconciliation, **deux** instances load-bearing conservées : §4.5 H2 « On ne forme pas sur des slides » (signature pédagogie) + §4.7 « Pas dans un slide » (owner garantie formation). Surplus retirés/aplatis : encart §4.5 « Pas de spectateurs. » → positif ; GEO « plutôt que sur des slides génériques » → supprimé ; ainsi que pourquoiPoints (3), titres pédagogie (3), bullets Champions (« pas une certification sur le papier », « pas une parenthèse »).
- **Title > 60 car.** — raccourci proposé à 45 (« 6 » retiré ; rend ≈57 avec suffixe, marge sous 60).
- **Meta > 160** — resserrée à 148 car.
- **Restreinte Qualiopi / OPCO `[to validate placement]`** — aucun % de financement ni certification ajouté.
- **+2 500 formés** — chiffre canonique correct (supplante l'ancien 1 250).
- **Noms formateurs + témoignages signés** — RÉUTILISÉS verbatim, non altérés.

## À valider
- Qualiopi / OPCO `[to validate placement]` — certification et taux à confirmer avant toute FAQ ou % de financement.
- Ingénierie laissée au dev : fichier `offer-pages/formation.ts` orphelin (dit « Cinq »), slug EN `/ai-training-for-teams` + sitemap, template title. Pas des éditions de contenu.

---

## Reconciliation applied

Passe de réconciliation FR (audits SEO 88/100 + anti-slop Clean net −8 ; pire cas « slides » du corpus).

**Changé :**
1. **Mot-clé primaire (rule 5) :** `formation ia` **8 100 → 6 900 / KD55** (Ahrefs FR ; aligne enfin ce vaisseau amiral sur la correction déjà portée par la home). KD55 explicité (cible dure). Prose §2 mise à jour.
2. **Dé-empilage « slides » (rule 4) — motif saturé (4 échos) ramené à 2 :** gardés load-bearing = §4.5 H2 « On ne forme pas sur des slides » + §4.7 garantie « Pas dans un slide ». Retirés/aplatis en positif : encart §4.5 « Pas de spectateurs. » (→ clause positive seule) et GEO « plutôt que sur des slides génériques » (→ supprimé). **Aucun synonym-swap** — échos supprimés, pas repeints.
3. **Title (rule 1) :** `Formation IA entreprise : 6 programmes hands-on` (rendait ~60, zéro marge) → `Formation IA entreprise : programmes hands-on` (« 6 » retiré ; rend ≈57). Secondaire exact « formation ia entreprise » conservé.
4. **Cohérence de tag (100% de recommandations) :** stat présentée en dur ici mais `[to validate]` sur la home → tag `[to validate]` ajouté (§4.2, §8 GEO, §9). Site-config bookingProof, absent de llms.txt, sans base chiffrée.

**Délibérément gardé (PROTECT) :**
- **Restriction Qualiopi / OPCO `[to validate placement]`** — meilleur signal d'honnêteté de la page ; aucun % de financement ni certification ajouté. Intact.
- **Formateurs nommés + témoignages signés** (Amgen/Délifrance/Shem's/Brigitte Meyer) réutilisés verbatim, non altérés/fabriqués.
- **Deux négations « slides » load-bearing** — device de marque anti-hype, gardé au seuil sain (1-2).
- **Verdicts/admissions FAQ** (« un prompt n'a de valeur qu'appliqué à un cas d'usage précis », « l'acculturation seule ne suffit pas ») — staked, protégés.
- **+2 500 formés** (canonique), méthode 2h/sem, AI Champians autonomie 6 mois — inchangés.

**Pour décision owner :** base de « 100% de recommandations » à sourcer ou retirer (cross-page C4) ; Qualiopi/OPCO à confirmer juridiquement avant toute FAQ financement ; fichier orphelin `offer-pages/formation.ts` (« Cinq formations ») = ticket dev (hors contenu).
