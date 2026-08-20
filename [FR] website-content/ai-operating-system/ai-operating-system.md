# AI Operating System (/ai-operating-system) — Master de contenu FR

> Localisation FR du master EN. Le FR est la langue primaire live : le copy provient de `src/lib/offer-pages/ai-os.ts` + `site-config.ts` (fleet, garanties, témoignage Gepromed). Page : `src/app/ai-operating-system/page.tsx`. On conserve la thèse en 4 couches et les chiffres à l'identique et on n'applique que les corrections d'audit (title dédoublé, dé-empilage des négations, retrait de la ligne owned homepage).

## 1. En-tête de page
- **Route (FR, live) :** /ai-operating-system
- **Objet :** Page concept/offre : l'OS IA en 4 couches qui pilote l'entreprise ; se différencie de l'achat d'outils.
- **Rôle SEO :** support-pilier (FR : ai operating system — concept de marque, fort alignement stratégique)
- **Étape funnel :** MOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | ai operating system | minimal (marque) | — | Ahrefs France — concept de marque, à posséder en propre |
| Secondaire | agents ia | 1 200 | 39 | Ahrefs France (KE), 2026-07 (section fleet) |
| Secondaire | agent ia entreprise | 150 | n/a | Ahrefs France (KE), 2026-07 (thèse « pilote l'entreprise ») |
| Secondaire | ia pour les entreprises | 500 | n/a | Ahrefs France — plafond aspirationnel/informationnel |

> **Décision mots-clés :** « ai operating system » est un concept forgé par la marque — volume direct faible mais terme réel à posséder en propre (peu de concurrence sur l'expression exacte). La page sert aussi ses voisins : `agents ia` (la fleet), `agent ia entreprise` (la thèse « pilote l'entreprise »), et `ia pour les entreprises` en plafond aspirationnel. On ne force pas de tête hors intention (ex. « ia agentique » KD élevé/hors intention).

## 3. Meta de page
| Champ | Live (FR) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. suffixe de marque inclus) | AI Operating System \| AI Makers | **`AI Operating System : pilotez votre entreprise`** *(46 ; rend ≈58 avec le suffixe auto `\| AI Makers` — sous 60. Le `\| AI Makers` écrit à la main dans `ai-os.ts` doit être retiré côté code, sinon triple marque.)* — *(l'alt long `… : votre entreprise pilotée par l'IA` (54 bare) rendrait ~66 : écarté, hors budget.)* |
| Meta description (140–160 car.) | (aiOsMeta — ≈230 car., trop long) | `Pas une pile d'outils : un OS IA pour votre entreprise. Quatre couches — données, systèmes, agents, pilotage. En production dès le 1er mois, autonome à 6 mois.` *(157)* |
| H1 | Votre entreprise, pilotée par un système d'exploitation IA. | Inchangé — `Votre entreprise, pilotée par un système d'exploitation IA.` |
| URL slug | /ai-operating-system | /ai-operating-system |

## 4. Sections & contenu
Source du copy : `ai-os.ts` + `site-config.ts`. JSON-LD : Breadcrumb + Service + FAQPage.

### 4.1 — Hero
- **Composant :** `ai-os.ts:aiOsHero`
- **Proposé (FR) — verbatim live :**
  - **badge :** `Maximum 3 nouveaux clients par mois`
  - **title (H1) :** `Votre entreprise, pilotée par un système d'exploitation IA.`
  - **subtitle (answer-first) :** `Pas une collection d'outils. Un OS : vos données, vos process et vos agents au même endroit, qui travaillent ensemble. C'est ce qui fait tourner AI Makers, et ce qu'on installe chez nos clients.`
  - **cta :** `Réserver mon diagnostic gratuit` → /contact
- **Rationale :** définit « système d'exploitation IA » dès la 1re phrase par contraste (pas des outils — un système où données/process/agents travaillent ensemble), réponse citable exacte pour le terme forgé. « C'est ce qui fait tourner AI Makers » = preuve dogfooding d'entrée.

### 4.2 — Le problème
- **Composant :** `ai-os.ts:aiOsProblem`
- **Proposé (FR) — verbatim live :**
  - **badge :** `Le problème` — **title :** `Vous avez des outils partout. Aucun système.`
  - **intro :** `ChatGPT par ici, Copilot par là, trois automatisations qui dorment dans un coin. Chaque outil travaille seul. Rien ne circule.`
  - **01 — Les licences s'empilent :** `Chaque équipe a acheté son outil. Aucun ne parle aux autres. Vous payez dix abonnements pour dix silos, et le travail passe encore par copier-coller.`
  - **02 — La connaissance est éparpillée :** `Vos process vivent dans les mails, les drives et les têtes. Quand quelqu'un part, son savoir part avec lui. Aucune IA ne peut travailler sur une connaissance qu'elle ne trouve pas.`
  - **03 — Personne ne pilote :** `Les données ne remontent nulle part. Chaque décision commence par une chasse aux chiffres dans cinq outils. Vous dirigez à l'instinct un système que vous ne voyez pas.`
- **Rationale :** nomme l'état d'échec concret (dix abonnements, copier-coller, connaissance dans les têtes). « Vous dirigez à l'instinct un système que vous ne voyez pas » installe la couche pilotage (signature — conservée).

### 4.3 — Thèse : les 4 couches
- **Composant :** `ai-os.ts:aiOsThesis`
- **Proposé (FR) — verbatim live :**
  - **badge :** `La thèse` — **title :** `Quatre couches qui s'emboîtent.` *(fix d'audit — dé-empilage : l'ancien title « Un OS, pas des outils. » restatait l'antithèse déjà portée par la para 1 « les outils s'ajoutent, un OS s'emboîte » ; fusionné → le title passe en positif/architecture, l'antithèse load-bearing reste dans la para. Motif « outils vs OS » ramené à 2 instances load-bearing : hero + CTA de clôture.)*
  - **para 1 :** `Une entreprise AI-native ne s'équipe pas. Elle s'architecture. La différence tient en une phrase : les outils s'ajoutent, un OS s'emboîte.`
  - **para 2 :** `Quatre couches. Vos données structurées en bas. Vos process automatisés au-dessus. Des agents qui exécutent. Un pilotage qui remonte tout. Retirez une couche, le reste s'écroule. C'est pour ça que les outils isolés ne changent rien.`
  - **layersCaption :** `Les quatre couches d'un AI Operating System. Chaque couche s'appuie sur celle du dessous.`
  - **couches (haut → bas) :** `04 · Pilotage — Vos KPIs remontent seuls. Vous voyez ce qui tourne, ce qui bloque, ce qui rapporte.` · `03 · Agents — Ils exécutent : ils lisent, trient, rédigent, relancent et rendent compte.` · `02 · Systèmes — Vos process automatisés, département par département, avec un KPI chacun.` · `01 · Données — Votre connaissance structurée, sortie des mails et des têtes, accessible aux agents.`
- **Rationale :** l'architecture en 4 couches est le concept défendable de la page. « Les outils s'ajoutent, un OS s'emboîte » et « Retirez une couche, le reste s'écroule » sont les deux lignes citables. Noms de couches conservés (Pilotage).

### 4.4 — Fleet (agents en production)
- **Composant :** `fleet.tsx` · `homepageContent.fleet` + en-tête `aiOsFleet`
- **Proposé (FR) — verbatim live :**
  - **badge :** `En production` — **title :** `Un agent pour chaque étage. Voilà à quoi ressemble un OS en production.` — **subtitle :** `Un extrait des systèmes qui tournent, chez nous et chez nos clients, classés par département.`
  - **systèmes :** RÉUTILISER — les items fleet sont **owned par la homepage** (voir homepage.md §4.8). Cette page rend le même `homepageContent.fleet` avec l'en-tête cadré OS ci-dessus. Ne pas forker les items.
- **Rationale :** fleet partagée ; cette page ne possède que l'en-tête de section. Le cadrage OS réutilise les systèmes homepage comme preuve vivante des 4 couches.

### 4.5 — Cas client : Gepromed
- **Composant :** `ai-os.ts:aiOsCaseStudy` + témoignage (site-config)
- **Proposé (FR) — verbatim live :**
  - **badge :** `Cas client` — **title :** `Ce que ça donne chez Gepromed`
  - **contexte :** `Gepromed, hub européen du dispositif médical, tourne sur un OS AI Makers : GTM, process internes, pilotage.`
  - **citation (Nicole Neumann, Gepromed) :** owned par la homepage (§4.7 item 10). Source unique — ne pas dupliquer.
- **Rationale :** Gepromed est un client réel avec citation on-record nommant « un système d'exploitation » — le cas idéal pour cette page.

### 4.6 — Installation (3 temps)
- **Composant :** `ai-os.ts:aiOsInstall`
- **Proposé (FR) — verbatim live :**
  - **badge :** `L'installation` — **title :** `Comment on installe votre OS` — **subtitle :** `Trois temps, reliés aux trois phases du programme. Pas de big bang : l'OS se monte couche par couche, département par département.`
  - **01 — Phase 1 : AI Scan · 1 à 2 semaines · On cartographie vos process :** `Interviews de vos équipes, cartographie des workflows, scoring de maturité. Vous savez où l'OS commence chez vous : par les cas d'usage au ROI le plus court.`
  - **02 — Phase 2 : AI Engine · 3 à 6 mois · On construit vos systèmes et vos agents :** `Un ingénieur dédié construit, département par département. Chaque système part en production avec un KPI mesuré avant et après.`
  - **03 — Phase 3 : AI Champions · En continu, dès le mois 3 · On forme vos équipes à piloter l'OS :** `Vos équipes prennent la main : elles font tourner, corrigent et étendent les systèmes. L'OS reste chez vous, avec les gens qui savent le conduire.`
- **Rationale :** relie le concept forgé à la méthode éprouvée en 3 phases (owned par /ai-transformation). « Pas de big bang, couche par couche » répond au « est-ce disruptif ? ».

### 4.7 — Dogfooding
- **Composant :** `ai-os.ts:aiOsDogfooding`
- **Proposé (FR) :**
  - **badge :** `On l'utilise nous-mêmes` — **title :** `C'est notre propre OS.`
  - **text :** `AI Makers tourne sur le système qu'on vous installe : mêmes couches, mêmes agents, mêmes tableaux de bord. On duplique simplement celui sur lequel on tourne nous-mêmes.` *(fix d'audit : « On ne vend pas une méthode lue quelque part. On duplique la nôtre. » aplati en positif)*
  - **stats[0] :** `+200` · `systèmes IA déployés`
  - **stats[1] :** `6 personnes` · `la production d'une équipe de 40`
- **Rationale :** preuve first-hand. +200 depuis llms.txt (canonique) ; 6 personnes/équipe de 40 taggé [to validate].

### 4.8 — Garanties
- **Composant :** `guarantees.tsx` — RÉUTILISER, **owned par la homepage**. Rend le même `homepageContent.guarantees`. Ne pas forker.

### 4.9 — FAQ
Voir §5.

### 4.10 — Connexes
- **Proposé (FR) :** `Transformation IA` → /ai-transformation · `Plateforme Data & IA` → /plateforme-data-ia · `Études de cas` → /etudes-de-cas

### 4.11 — CTA final
- **Composant :** `cta-section.tsx` + `aiOsFinalCta`
- **Proposé (FR) — verbatim live :**
  - **title :** `Vos concurrents achètent des outils. Installez un système.`
  - **subtitle :** `30 minutes pour cartographier vos process et repartir avec vos 3 premiers quick wins IA, que vous travailliez avec nous ou non.`
  - **cta :** `Réserver mon diagnostic gratuit` → /contact
- **Rationale :** « achètent des outils / installez un système » est toute la thèse compressée dans la clôture — une affirmation, pas une réassurance (conservée).

## 5. FAQ
Slot FAQ : OUI — `faq-accordion.tsx` + JSON-LD FAQPage. 4 items. **Copy live conservé** (fix d'audit FAQ3/FAQ4).

| # | Question (FR) | Réponse (FR) |
|---|---|---|
| 1 | À qui appartient l'OS une fois installé ? | À vous, intégralement. Les systèmes, les agents, les playbooks documentés : tout reste chez vous le jour où l'accompagnement s'arrête. Zéro dépendance, c'est écrit au contrat. |
| 2 | Combien de temps faut-il pour l'installer ? | L'audit prend 1 à 2 semaines et fixe la feuille de route. Les premiers systèmes partent en production dès le premier mois, au rythme de 1 à 2 par mois. À 6 mois, vos équipes pilotent l'OS en autonomie. |
| 3 | Est-ce que ça remplace nos outils actuels ? | Non. Votre CRM, votre ERP, vos drives et vos messageries restent en place : l'OS s'y connecte et fait circuler le travail entre eux. *(fix d'audit : « On ne remplace rien, on se branche. » retiré — ligne owned par la homepage ; l'info est conservée)* |
| 4 | On a déjà des automatisations. On repart de zéro ? | Non. On les audite, on garde ce qui tourne et on l'intègre dans l'OS. Ce que vous avez déjà construit devient une brique du système. *(fix d'audit : « pas un doublon » aplati)* |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Transformation IA | /ai-transformation | connexe |
| Plateforme Data & IA | /plateforme-data-ia | connexe |
| Études de cas | /etudes-de-cas | connexe |
| Réserver un diagnostic gratuit | /contact | CTA |

## 7. CTA
- **CTA primaire :** `Réserver mon diagnostic gratuit` → /contact

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `Un système d'exploitation IA (AI operating system) est une entreprise qui tourne sur quatre couches connectées — données structurées, systèmes automatisés, agents IA et couche de pilotage — au lieu d'une pile d'outils déconnectés. AI Makers en installe un département par département : un audit cartographie les process, un ingénieur dédié construit les systèmes et agents en production, et les équipes sont formées pour le piloter. AI Makers tourne sur le même OS qu'il installe — +200 systèmes déployés, propriété client totale.`
- **Entrée llms.txt (FR) :** `[AI Operating System](https://aimakers.fr/ai-operating-system) : l'OS IA en 4 couches — données, systèmes, agents, pilotage — qui pilote une entreprise, installé département par département. Une flotte d'agents, propriété totale du client.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| +200 systèmes déployés | public/llms.txt (canonique) |
| 6 personnes = production d'une équipe de 40 | ai-os.ts — [to validate] |
| Cas & citation Gepromed (Nicole Neumann) | site-config.ts testimonials — mesuré client |
| Architecture 4 couches (données / systèmes / agents / pilotage) | ai-os.ts (concept) |
| Audit 1-2 semaines ; 1-2 systèmes/mois ; autonomie à 6 mois ; cap 3 clients/mois ; 4 garanties écrites ; propriété totale | site-config / ai-os.ts (canonique + programme) |

## Corrections d'audit appliquées
- **Title dédoublé** — le `\| AI Makers` écrit à la main est retiré (le template l'auto-ajoute) ; title proposé = l'alt court ≤60 `AI Operating System : pilotez votre entreprise` (rend ≈58).
- **Meta > 160** — resserrée à 157 car.
- **Dé-empilage « OS vs outils » (motif saturé, rule 4)** — après réconciliation : **2 instances load-bearing conservées** = hero (« Pas une collection d'outils. Un OS ») + CTA de clôture (« Vos concurrents achètent des outils. Installez un système. »). Le §4.3 title « Un OS, pas des outils. » (redondant avec la para « les outils s'ajoutent, un OS s'emboîte ») **fusionné** → title positif « Quatre couches qui s'emboîtent. » ; la para garde l'antithèse citable. Déjà aplatis auparavant : §4.7 (« On ne vend pas une méthode lue quelque part » → positif) et FAQ4 (« pas un doublon »). **Aucun synonym-swap.**
- **Ligne owned homepage retirée** de FAQ3 (« On ne remplace rien, on se branche. » — owner = homepage) ; l'info est préservée.

## À valider
- 6 personnes = équipe de 40 : `[to validate]`.
- Traduction EN de la citation Gepromed : gate d'approbation client (côté EN).
- Ingénierie laissée au dev : descriptions RelatedContent FR codées en dur (page.tsx). Fleet + garanties restent single-sourced depuis la homepage.

---

## Reconciliation applied

Passe de réconciliation FR (audits SEO 90/100 + anti-slop Clean −9).

**Changé :**
1. **Title (rule 1) :** proposition fixée sur l'alt court `AI Operating System : pilotez votre entreprise` (rend ≈58, sous 60). L'alt long (rend ~66) écarté. Rappel : le `| AI Makers` écrit à la main dans `ai-os.ts` est un bug code (triple marque) — retrait côté dev (B1).
2. **Dé-empilage « OS vs outils » (rule 4) — motif saturé (4×) ramené à 2 load-bearing :** gardés = hero + CTA de clôture. §4.3 title « Un OS, pas des outils. » fusionné avec la para « les outils s'ajoutent, un OS s'emboîte » → title positif **« Quatre couches qui s'emboîtent. »**. Aucun synonym-swap (écho supprimé, pas repeint).
3. **Mot-clé FR (rule 5) :** `agents ia` 400 → **1 200 / KD39** (Ahrefs FR ; volume réel supérieur = upside, la fleet le sert déjà). Primaire `ai operating system` (concept de marque, faible volume) inchangé.

**Délibérément gardé (PROTECT) :**
- **Ligne de conséquence §4.3** « Retirez une couche, le reste s'écroule. C'est pour ça que les outils isolés ne changent rien. » — crédit anti-slop (16.4 architecture), non touchée.
- **Refrain dogfooding §4.7** (« C'est notre propre OS » / 6 personnes = équipe de 40 `[to validate]`) : instance load-bearing variée par page (keeper canonique = a-propos, hors batch) — conservée.
- **Cas Gepromed + citation Nicole Neumann** (mono-sourcés home) ; fleet + garanties rendues, non forkées.
- **Tag `[to validate]`** sur 6=40 (déjà au bon littéral — rien à normaliser).

**Pour la technique / owner :** retrait du `| AI Makers` hand-written dans `ai-os.ts` (bug live) ; base du chiffre 6=40 à confirmer ; usage public de la citation Gepromed à confirmer.
