# Agence IA (/agence-ia) — Master de contenu FR

> Localisation FR du master EN scellé (`[EN] website-content/agence-ia/agence-ia.md`). Le contenu FR reprend **verbatim la copie live** (`src/app/agence-ia/page.tsx` — copie inline + metadata), qui est la voix authentique de la marque (l'EN en a été traduit). On applique les mêmes correctifs d'audit que l'EN, et on relocalise les champs SEO sur les vrais mots-clés FR (Ahrefs France, 2026-07). En FR, **« agence ia » est un vrai head term** (2 400/mo) : on le cible en primaire directement, là où l'EN devait pivoter vers « ai consulting services » (l'anglais « ai agency » étant un terme faible/dur, cf. §Réconciliation).

## 1. En-tête de page
- **Route (FR, live) :** /agence-ia
- **Slug FR :** /agence-ia (live, conservé — c'est le terme primaire FR, contrairement à l'EN qui repointait vers /ai-consulting)
- **Objectif :** Page de capture d'intention pour les recherches « agence IA » / « consultant IA » ; recadre « agence » → cabinet de transformation qui livre en production.
- **Rôle SEO :** pilier de la grappe agence/conseil (forte intention commerciale sur le marché FR).
- **Étape funnel :** MOFU/BOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume (FR) | Difficulté | Source |
|---|---|---|---|---|
| Primaire | agence ia | 2 400 | 54 | Ahrefs keywords-explorer-overview, France, 2026-07 |
| Secondaire | agence intelligence artificielle | 500 | 51 | Ahrefs, France, 2026-07 |
| Secondaire | consultant ia | 480 | — | Ahrefs, France, 2026-07 |
| Secondaire | automatisation ia | 900 | 24 | Ahrefs, France, 2026-07 |

> **Décision mots-clés :** en FR, « agence ia » (2 400/KD54) est le head term commercial réel de la grappe et il est directement pertinent — on le **cible en primaire**, dans le title, le H1 et l'intro. On garde le recadrage « agence → cabinet de transformation » comme angle éditorial (il répond quand même à la requête). Secondaires : **agence intelligence artificielle** (500, la variante longue), **consultant ia** (480, terme d'appui) et **automatisation ia** (900) — porté par la FAQ « comment automatiser des processus métier avec l'IA ? » et la carte « Automatisation de workflows ». NB : divergence assumée avec l'EN, qui devait fuir « ai agency » (US 1 600/KD71, contenu « lance ton agence IA ») vers « ai consulting services » (8 500/KD39). En FR le paysage est inverse : « agence ia » est disponible et rentable, on le prend de front.

## 3. Meta de page
| Champ | Actuel (FR, live) | Proposé (FR) |
|---|---|---|
| Title | Agence IA ? Un cabinet de transformation IA | **`Agence IA & automatisation des processus`** *(chaîne nue = 40 car. ; le layout ajoute automatiquement « \| AI Makers » via le template « %s \| AI Makers » → rendu 52 car., ≤60. Ne PAS écrire le suffixe à la main.)* |
| Meta description (≤160) | Vous cherchez une agence IA ? AI Makers est un cabinet de transformation IA : audit de vos process, agents IA et automatisations en production… | **`Agence IA à Paris et Rabat : audit, agents et automatisation de vos processus métier. Un ingénieur IA dédié, des systèmes en production, 4 garanties.`** *(150)* |
| H1 | Agence IA ? Non. Un cabinet de transformation IA. | **`Agence IA — des systèmes en production, pas des slides`** |
| URL slug | /agence-ia | /agence-ia (conservé) |

> Note SEO : le title nu **ne contient jamais « AI Makers »** (le suffixe est ajouté par le layout). Le H1 conserve **une seule** négation « X, pas Y » (« des systèmes en production, pas des slides ») — c'est le recadrage porteur du mot-clé, la seule négation autorisée sur la page (voir §Réconciliation). Aucun « certifié Qualiopi » ni « finançable OPCO » dans la meta (absent de `llms.txt`/copie AI Makers). Chiffres canoniques uniquement (+200 systèmes, +50 entreprises).

JSON-LD sur la page : BreadcrumbList + Service (construits dans `src/app/agence-ia/page.tsx`).

## 4. Sections & contenu
Template : ServicePage (`src/components/shared/service-page.tsx`). Copie inline dans `src/app/agence-ia/page.tsx` ; le tableau comparatif est **réutilisé** depuis `src/components/sections/homepage/comparison-section.tsx` (`OptionsComparison`, data `homepageContent.valueProp.optionsTable`). Copie FR = **verbatim live**, sauf les correctifs d'audit signalés.

### 4.1 — Hero + stats + bande de preuve
- **Composant :** `service-page.tsx`
- **Champs :** badge, h1, intro (answer-first), heroStats[3], proof photo+légende
- **Proposé (FR) — verbatim live :**
  - **badge :** `Cabinet de transformation IA`
  - **h1 :** `Agence IA — des systèmes en production, pas des slides` *(remplace le live « Agence IA ? Non. Un cabinet de transformation IA. » par le H1 Notion, qui porte le mot-clé et une seule négation)*
  - **intro (answer-first) :** `Vous cherchez une agence IA pour automatiser vos processus ? AI Makers va plus loin qu'une agence : nous auditons vos workflows, nous livrons des systèmes IA en production chaque mois (agents, automatisations, copilotes métier) et nous formons vos équipes jusqu'à l'autonomie. Un ingénieur dédié, quatre garanties écrites, plus de 200 systèmes déployés chez plus de 50 entreprises.`
  - **heroStats[3] :** `+50 entreprises accompagnées` · `+200 systèmes en production` · `9,6/10 de satisfaction`
  - **proof :** photo `/images/formations/atelier-hands-on.png` · légende `Un atelier hands-on chez un client, sur ses cas d'usage réels.`
- **Rationale :** les 40 premiers mots définissent ce qu'*est* AI Makers et répondent à « que fait une agence IA / un cabinet de transformation IA » pour les moteurs de réponse. Le contraste agence↔cabinet porte « agence ia » et « automatiser vos processus » dès les deux premières phrases. Stats verbatim `llms.txt` ; 9,6/10 live sur le hero.

### 4.2 — « Cabinet, ESN, agence, licence ou AI Makers » (comparatif)
- **Composant :** sections[0] + `comparison-section.tsx:OptionsComparison`
- **Champs :** tableau comparatif 5 colonnes × 6 lignes (`homepageContent.valueProp.optionsTable`) + wrapper de section
- **Proposé (FR) — verbatim live :**
  - **badge :** `Le comparatif`
  - **title :** `Cabinet, ESN, agence, licence ou AI Makers`
  - **description :** `Cinq façons d'aborder l'IA en entreprise. Une seule vous livre des systèmes en production, configurés pour vous, avec des garanties écrites.`
  - **cellules du tableau :** RÉUTILISÉ — la matrice 5×6 vit dans `homepageContent.valueProp.optionsTable` et est **propriété de la homepage**. Voir le master FR homepage (§4.3) pour la copie canonique des cellules. Cette page ne fait que rendre le même composant : **ne pas dupliquer/re-traduire** ici.
- **Rationale :** le comparatif est mutualisé sur tout le site. Propriétaire = homepage ; cette page ne possède que le wrapper (badge/title/description). Source unique = zéro clonage, claims cohérents pour l'audit anti-slop.

### 4.3 — « Trois familles de systèmes » (ce qu'on construit)
- **Composant :** sections[1] + data `realisations` (page.tsx)
- **Champs :** 3 cartes {icon, title, description}
- **Proposé (FR) — verbatim live, titre de section aplati :**
  - **badge :** `Ce qu'on construit` — **title :** `Trois familles de systèmes, livrées en production` *(aplati depuis le live « Des systèmes en production, pas des démos » — dé-empilement de la négation, cf. §Réconciliation)* — **description :** `Trois familles de systèmes IA, toutes livrées connectées à vos outils et documentées.`
  - **Carte 1 — Agents IA sur mesure :** `Des systèmes qui exécutent des tâches complètes : qualification de demandes, préparation de documents, synthèses de réunions. Connectés à vos outils, livrés en production.`
  - **Carte 2 — Automatisation de workflows :** `Reporting, saisie, relances, facturation : les tâches répétitives passent en automatique avec n8n et Claude. Gain moyen constaté : 7 heures par semaine et par collaborateur.`
  - **Carte 3 — Copilotes métier :** `Des assistants IA entraînés sur vos données et vos règles internes, au service d'une équipe précise : commerce, juridique, support, finance.`
- **Rationale :** livrables concrets avec noms de stack réels (n8n, Claude) et le chiffre canonique 7h/semaine. Chaque carte nomme un output précis (test de la ligne creuse supprimable : passé). Le titre de section perd sa négation « pas des démos » (le H1 porte déjà la seule négation de la page).

### 4.4 — « Trois phases, de l'audit à l'autonomie » (méthode)
- **Composant :** sections[2] + data `phases`
- **Champs :** 3 étapes + lien inline
- **Proposé (FR) — verbatim live :**
  - **badge :** `La méthode` — **title :** `Trois phases, de l'audit à l'autonomie` — **description :** `Une seule offre structure toutes nos missions : AI PARTNER.`
  - **01 — Audit : AI Scan :** `1 à 2 semaines pour cartographier vos processus, scorer votre maturité IA sur 24 points et livrer une roadmap avec au minimum 3 cas d'usage à fort ROI.`
  - **02 — Build : AI Engine :** `Un ingénieur IA dédié full-time construit 1 à 2 systèmes par mois, en production. 2 heures de formation par semaine pour vos équipes.`
  - **03 — Scale : AI Champions :** `Des référents internes formés pour diffuser les usages. Objectif : une entreprise autonome à 6 mois.`
  - **lien inline :** `Découvrir l'offre AI PARTNER en détail` → /ai-transformation
- **Rationale :** méthode mutualisée ; version courte de référence ici (propriétaires de la version longue = /ai-transformation et la home). Termes de marque conservés (AI Scan / AI Engine / AI Champions). Chiffres alignés sur les phases de l'offre en site-config.

### 4.5 — « Les entreprises avec qui ça fonctionne » (pour qui)
- **Composant :** sections[3] + data `cibles`
- **Champs :** 3 cartes ICP + ligne de rareté
- **Proposé (FR) — verbatim live, un correctif Tier-A :**
  - **badge :** `Pour qui` — **title :** `Les entreprises avec qui ça fonctionne` — **description :** `Nous acceptons au maximum 3 nouveaux clients par mois. Autant travailler avec les bons profils.`
  - **Carte 1 — PME et ETI de 50 à 500 personnes :** `Assez de volume pour que l'automatisation change les marges, assez d'agilité pour déployer vite. Le cœur de nos missions.`
  - **Carte 2 — Agences de communication :** `L'IA redéfinit le métier. Les agences qui l'intègrent dans leur production prennent l'avantage sur celles qui attendent.`
  - **Carte 3 — Biotech et santé :** `Des équipes très qualifiées, beaucoup de documentation et de reporting : là où l'IA produit les gains mesurés les plus importants, avec les exigences de rigueur du secteur.` *(correctif Tier-A : « un terrain à fort levier pour l'IA » → « là où l'IA produit les gains mesurés les plus importants », cf. §Réconciliation)*
- **Rationale :** qualification + rareté (3 clients/mois, issue du modèle de capacité) qui sert aussi de marqueur d'opinion valorisé par l'audit anti-slop. ICP aligné sur la stratégie (PME/ETI, agences, biotech/santé). La ligne de rareté est ici porteuse de la qualification (la home possède l'instance canonique du badge).

## 5. FAQ
Slot FAQ : OUI — `faq-accordion.tsx` + FAQPage JSON-LD (via ServicePage). 5 items, **verbatim live** :

| # | Question (FR) | Réponse (FR) — verbatim live |
|---|---|---|
| 1 | Quelle différence entre une agence IA et un cabinet de transformation IA ? | Une agence IA livre un projet : un chatbot, un POC, une automatisation, puis passe au client suivant. Un cabinet de transformation IA s'engage sur un résultat dans la durée : il audite les processus, déploie des systèmes en production, forme les équipes et transfère la compétence. Chez AI Makers, cela se traduit par un ingénieur dédié, 1 à 2 systèmes livrés en production chaque mois, 2 heures de formation par semaine et quatre garanties écrites, dont la propriété intellectuelle totale de ce qui est construit. |
| 2 | Que fait un consultant IA ? | Un consultant IA analyse les processus d'une entreprise, identifie les tâches automatisables, recommande des cas d'usage et accompagne leur mise en place. La limite du conseil classique : la recommandation s'arrête souvent au rapport. Notre approche va jusqu'à la production : les ingénieurs qui auditent sont ceux qui construisent les systèmes, puis forment les équipes à les faire vivre. *(Propriétaire canonique de cette Q sur le site — ne pas dupliquer sur la page audit.)* |
| 3 | Comment automatiser des processus métier avec l'IA ? | En quatre étapes. D'abord cartographier les workflows pour identifier les tâches répétitives : reporting, saisie, relances, synthèses. Ensuite prioriser par retour sur investissement : toutes les automatisations ne se valent pas. Puis construire le système avec des outils éprouvés comme n8n et Claude, connectés à vos données. Enfin mesurer : un système sans indicateur d'usage et de temps gagné est un système qu'on abandonne. *(Divergence FR vs EN — cf. §Réconciliation : l'EN recadrait cette Q pour renvoyer le « comment automatiser » vers son owner /ai-automation ; en FR « automatisation ia » est un secondaire et cette réponse est la copie live authentique, on la conserve.)* |
| 4 | Travaillez-vous avec des agents IA ? | Oui. Nous concevons des agents IA sur mesure : des systèmes capables d'exécuter des tâches complètes (qualifier une demande, préparer un document, synthétiser des échanges) en s'appuyant sur vos outils et vos données. Chaque agent est livré en production, documenté, et sa propriété intellectuelle vous revient intégralement. |
| 5 | Où intervenez-vous ? | Nous avons des bureaux à Paris (75008) et à Rabat (Agdal). Nous intervenons en France et au Maroc, sur site pour les phases clés (interviews d'audit, restitution, formations) et à distance pour le reste. Nous limitons volontairement notre capacité à 3 nouveaux clients par mois pour garantir un ingénieur dédié à chaque compte. |

> Titre de section FAQ (live) : `Questions fréquentes`.

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Meilleures agences IA en France en 2026 | /blog/meilleures-agences-ia-france | article lié (existant) |
| Meilleures formations IA pour entreprises | /blog/meilleures-formations-ia-entreprise | article lié (existant) |
| Meilleures formations Claude en entreprise | /blog/meilleures-formations-claude-entreprise | article lié (existant) |
| Automatiser un processus métier avec l'IA | /automatisation-ia-workflow | lien de grappe — renvoie l'intention « comment automatiser » vers sa page propriétaire |
| Commencer par un audit IA | /audit-ia-entreprise | lien de grappe |
| Réserver mon diagnostic gratuit | /contact | CTA |

## 7. CTA
- **Bloc CTA de page (live) :** title `Comparez-nous à une agence IA` · subtitle `30 minutes pour analyser vos workflows et repartir avec vos 3 premiers quick wins IA, que vous travailliez avec nous ou non.`
- **CTA primaire (guardrail marque) :** bouton **« Réserver mon diagnostic gratuit » → /contact**.

## 8. Bloc GEO
- **Paragraphe answer-first (FR, citable) :** `AI Makers est un cabinet de transformation IA (pas une agence de projet) avec des bureaux à Paris (75008) et Rabat (Agdal), fondé par Othmane Halim. Il audite les process d'une entreprise, déploie des agents IA et des automatisations en production, et forme les équipes jusqu'à l'autonomie — un ingénieur IA dédié livrant 1 à 2 systèmes par mois sous quatre garanties écrites. À ce jour : +200 systèmes IA déployés chez +50 entreprises, avec transfert intégral de la propriété intellectuelle au client.`
- **Entrée llms.txt (FR) :** `[Agence IA & automatisation](https://aimakers.fr/agence-ia) : ce que fait un cabinet de transformation IA et comment AI Makers livre des agents et automatisations sur mesure en production — pas des slides.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| +50 entreprises ; +200 systèmes ; +2 500 formés ; 7h/sem | public/llms.txt (canonique) |
| 9,6/10 satisfaction | site-config bookingProof / stat live du hero FR |
| 1 à 2 systèmes/mois ; 2h formation/sem ; autonomie à 6 mois ; plafond 3 clients/mois | site-config homepageContent.offer + modèle de capacité |
| 4 garanties écrites ; transfert intégral de la PI | public/llms.txt (canonique) |
| Claims du comparatif (cabinet/ESN/freelance/licence) | site-config optionsTable — cadrage d'opinion, propriété homepage, sous surveillance anti-slop |
| Bureaux Paris 75008 + Rabat Agdal ; fondateur Othmane Halim | public/llms.txt (canonique) |
| Qualiforme / financement OPCO | ABSENT de llms.txt/copie AI Makers — non revendiqué, écarté de la meta |

---

## Réconciliation appliquée (FR)

**Correctifs d'audit hérités de l'EN, appliqués en FR :**
1. **Title double-marque évité** — la chaîne nue `Agence IA & automatisation des processus` (40 car.) ne contient pas « AI Makers » ; le layout ajoute « \| AI Makers » (rendu 52, ≤60). Aucun suffixe écrit à la main.
2. **Famille « systèmes, pas des slides » dé-empilée** — une seule négation gardée sur la page : le H1 `Agence IA — des systèmes en production, pas des slides` (porteur du mot-clé). Le titre de la §4.3 est aplati en fait positif : `Des systèmes en production, pas des démos` → `Trois familles de systèmes, livrées en production`.
3. **Mot Tier-A retiré** (slop Layer 1) — carte Biotech/santé §4.5 : `un terrain à fort levier pour l'IA` → `là où l'IA produit les gains mesurés les plus importants`.

**Conservé délibérément (comme l'EN) :**
- **Négation du H1 gardée** — l'auditeur slop (contexte complet) demandait explicitement de garder le H1 ; il porte le recadrage agence↔cabinet et le mot-clé. Une négation par page = respecté.
- **Ligne de rareté (« au maximum 3 nouveaux clients par mois »)** conservée en §4.5 — porteuse de la qualification « pour qui », pas un écho gratuit ; la home possède l'instance canonique du badge.
- **Clôture CTA (« que vous travailliez avec nous ou non »)** conservée — c'est le champ CTA fonctionnel de la page ; la home possède l'instance canonique.

**Divergence FR vs EN assumée :**
- **Mot-clé primaire & slug :** l'EN devait fuir « ai agency » (US 1 600/KD71) vers « ai consulting services » (8 500) et repointait le slug /ai-consulting. En FR, **« agence ia » (2 400/KD54) est un head term disponible et rentable** : on le cible de front, title/H1/intro, et on **conserve le slug /agence-ia** live.
- **FAQ « Comment automatiser des processus métier avec l'IA ? » conservée verbatim** — l'EN recadrait cette Q (« Can you both advise and build ? ») pour renvoyer le pas-à-pas vers l'owner /ai-automation. En FR, « automatisation ia » (900) est un secondaire de la page et la réponse en 4 étapes est la copie live authentique ; on la garde, tout en maillant vers /automatisation-ia-workflow.
- **Badge & intro :** l'EN traduisait le badge en « AI transformation studio » et front-loadait la formule « ships systems, not slides » ; en FR on garde le badge live `Cabinet de transformation IA` et l'intro live verbatim (le recadrage vit dans le H1).

**Laissé pour la technique (hors édition de contenu) :** i18n du chrome ServicePage, hreflang, `inLanguage`, cible de lien /ai-transformation, mise à jour du slug dans llms.txt. Comparatif maintenu en source unique depuis la home (non forké).

---

## Reconciliation applied

Passe de réconciliation FR (audits SEO 89/100 + anti-slop Clean −10). **Aucune édition de copie requise** : la page est déjà conforme sur tous les items APPLY en périmètre.

**Vérifié conforme (rien changé) :**
- **Title (rule 1) :** chaîne nue `Agence IA & automatisation des processus` (40 car.), pas de suffixe écrit à la main, le layout ajoute `| AI Makers` → rendu 52 car. ≤60. L'audit SEO confirme le traitement correct (modèle à suivre).
- **Négation « X, pas Y » (rule 4) :** discipline une-négation-par-page déjà tenue (H1 garde l'unique instance porteuse du mot-clé ; §4.3 titre déjà aplati en fait positif). Rien à dé-empiler.
- **Mots-clés FR (rule 5) :** `agence ia` 2 400/KD54, `agence intelligence artificielle` 500/KD51, `automatisation ia` 900/KD24 — tous confirmés Ahrefs FR. Primaire money-page `agence ia` conservé.
- **Composants partagés (rule 6) :** tableau comparatif rendu depuis `homepageContent.valueProp.optionsTable`, non cloné/re-traduit. Correct.
- **Tags (rule 7) :** aucun `[à valider]` sur la page. Rien à normaliser.

**Pour décision owner (hors périmètre édition) :**
- **🟡 Cannibalisation FAQ Q3** — l'audit SEO recommande de réduire « Comment automatiser des processus métier avec l'IA ? » à un pointeur vers `/automatisation-ia-workflow` (owner de l'intention). Le master documente une décision FR délibérée de la conserver verbatim (copie live authentique) ; laissé tel quel — à trancher par l'owner (cross-page E).
- **🟡 Meta** (150 car., conforme ≤160) : l'audit suggère de terminer par un next-step (« Diagnostic gratuit. »). Non appliqué (meta déjà en budget, hors rule 2 qui vise >160).
- **🟡 `consultant ia` 480** : volume non re-confirmé par l'audit (pas de valeur corrigée fournie) — à vérifier avant de s'appuyer dessus.
