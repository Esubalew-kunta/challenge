# Carrières (/carrieres) — FR Content Master

> Localisation FR du master EN scellé. Voix live reprise de `src/app/carrieres/page.tsx`. Postes ouverts repris verbatim de `src/app/carrieres/postes.ts` (tag `[to validate fraîcheur]` conservé).

## 1. En-tête de page
- **Route (FR, live) :** /carrieres
- **Objectif :** Page carrières : marque employeur + postes ouverts + candidatures spontanées.
- **Rôle SEO :** marque (recrutement)
- **Étape funnel :** n/a (recrutement)

## 2. Mots-clés cibles
> Page recrutement. Pression mots-clés minimale — optimiser pour la clarté marque employeur, pas un head term.

| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | (page recrutement — pas de head term) | — | — | jugement d'intention |
| Secondaire | emploi ingénieur ia (descriptif) | — | — | non forcé |

## 3. Meta de page
| Champ | Actuel (FR, live) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. avec suffixe auto) | Carrières : rejoignez AI Makers | Carrières : rejoignez l'équipe |
| Meta description (140–160 car.) | AI Makers recrute des profils qui veulent livrer des systèmes IA en production, pas des slides. Équipe de 6 entre Paris et Rabat, clients internationaux, stack de pointe. Candidature spontanée bienvenue. | AI Makers recrute des profils qui veulent livrer des systèmes IA en production. Équipe de 6 entre Paris et Rabat, sur une stack Claude Code, n8n et LangChain. |
| H1 | Construisez les systèmes que les autres regardent tourner. | Construisez les systèmes que les autres regardent tourner. |
| Slug URL | /carrieres | /carrieres |

## 4. Sections & contenu

### 4.1 — Hero
- **Proposé (FR) :**
  - Badge : `Carrières`
  - H1 : `Construisez les systèmes que les autres regardent tourner.`
  - Intro : `Chez AI Makers, on ne produit pas des slides. On livre des systèmes IA en production chez de vrais clients, en France, au Maroc et à l'international. Si vous voulez que votre travail serve à quelque chose dès le premier mois, vous êtes au bon endroit.`
  - Bouton principal : `Candidater spontanément` (mailto othmane@aimakers.fr, objet « Candidature spontanée »)
  - Bouton secondaire : `Voir les postes ouverts` → #postes
- **Justification :** Fidèle. Pitch fierté de bâtisseur, sans slop.

### 4.2 — « Une équipe de 6 qui produit comme une équipe de 40 » + valeurs (4 cartes)
- **En-tête de section :** kicker `/ Comment on travaille` · H2 `Une équipe de 6 qui produit comme une équipe de 40` · sous-titre `Les systèmes internes absorbent le travail répétitif : six personnes livrent comme quarante. Voici ce que ça change au quotidien.`
- **Proposé (FR) :**
  1. **AI-native, pour de vrai** — `Le cabinet tourne sur ses propres systèmes internes plutôt que sur du travail manuel. Concrètement, pour vous : vous orchestrez une flotte d'agents dès votre première semaine, au lieu d'empiler les tâches répétitives.`
  2. **Production réelle** — `Ce que vous construisez tourne chez de vrais clients dès le premier mois, avec un KPI mesuré avant et après. Pas de POC qui dort dans un tiroir.`
  3. **Petite équipe, gros terrain** — `6 personnes entre Paris et Rabat, des clients en France, au Maroc et à l'international. Vous voyez l'impact de votre travail en direct, sans couche de reporting entre vous et le client.`
  4. **Progression rapide** — `Mentorat direct du CTO, revues de code, et une stack utilisée tous les jours : Claude Code, n8n, LangChain. Vous montez en compétence sur ce qui compte vraiment.`
- **Justification :** Fidèle. Conserve les noms de stack concrets et le mécanisme « équipe de 40 ».
- **Correctifs d'audit appliqués :** sous-titre — négation « Ce n'est pas un slogan : c'est le résultat de systèmes internes… » SUPPRIMÉE, réécrite au positif (equipe garde le procédé « pas un slogan »). Carte 4 — adjectif « de pointe » retiré de « une stack de pointe » (les noms de stack portent déjà le point).

### 4.3 — « On recrute » (postes ouverts)
- **En-tête de section :** kicker `/ Postes ouverts` · H2 `On recrute`
- **Proposé (FR) — postes réels (de `src/app/carrieres/postes.ts`), tous `Paris, Rabat ou remote` · `Temps plein` :**
  1. **AI Engineer** — Ingénierie — `Le bâtisseur. RAG, systèmes multi-agents, orchestration : vous construisez dans les outils de nos clients, et ce que vous écrivez part en production.` — Postuler par email
  2. **AI Delivery Lead** — Delivery — `Le chef d'orchestre. Vous pilotez les missions de bout en bout et traduisez les priorités business des clients en systèmes livrés, semaine après semaine.` — Postuler par email
  3. **LLMOps Engineer** — Ingénierie — `Le moteur. Déploiement, monitoring, contrôle des coûts : vous êtes celui qui transforme un POC en produit qui tourne.` — Postuler par email
  4. **AI & Data Engineer** — Ingénierie — `Vous branchez les données de nos clients sur leurs systèmes IA : pipelines, intégrations, qualité des données. Le socle sur lequel tout le reste tient.` — Postuler par email
  5. **SEO & GEO Executor** — Growth — `Vous exécutez les missions SEO et GEO de nos clients : audits de visibilité IA, contenu citable par les moteurs, mesure mensuelle. Le GEO est notre offre la plus en avance, vous serez dessus tous les jours.` — Postuler par email
  - État vide (si le tableau des postes est vidé) : `Pas de poste ouvert affiché en ce moment. Les bons profils n'attendent pas les annonces : si vous pensez avoir votre place ici, écrivez-nous directement. On répond à toutes les candidatures sérieuses.`
- **Justification :** Postes réels verbatim des données source.
- **`[to validate fraîcheur]` :** Ces 5 postes reflètent `postes.ts` tel que lu le 2026-07-15 — confirmer qu'ils sont toujours d'actualité avant publication.

### 4.4 — « Candidature spontanée »
- **En-tête de section :** H2 `Candidature spontanée`
- **Proposé (FR) :** `Pas de lettre de motivation. Montrez-nous ce que vous avez construit : liens, repos, systèmes. C'est tout ce qui nous intéresse.`
  - Bouton : `Écrire à othmane@aimakers.fr` (mailto, objet pré-rempli « Candidature spontanée »)
  - Note : `Objet pré-rempli : « Candidature spontanée »`
- **Justification :** Fidèle. Conserve l'éthos de bâtisseur « montrez, ne racontez pas ».

### 4.5 — PartnerStrip
- **Proposé (FR) :** Pas de copie à traduire (badges partenaires/crédibilité partagés). Conserver tel quel.

## 5. FAQ
Pas d'emplacement FAQ dans le template.

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| rencontrer l'équipe | /equipe | équipe |
| le modèle Forward Deployed Engineer | /forward-deployed-engineer | modèle FDE |
| contact | /contact | contact |

## 7. CTA
- **CTA principal :** FR : `Candidater spontanément` → mailto othmane@aimakers.fr (objet « Candidature spontanée »)

## 8. Bloc GEO
- **Paragraphe answer-first (FR) :** `AI Makers recrute des profils qui veulent livrer des systèmes IA en production plutôt que produire des slides. C'est une équipe de six personnes entre Paris et Rabat, au service de clients en France, au Maroc et à l'international, sur une stack Claude Code, n8n et LangChain, avec un mentorat direct du CTO. Les postes ouverts incluent AI Engineer, AI Delivery Lead, LLMOps Engineer, AI & Data Engineer et SEO & GEO Executor — Paris, Rabat ou remote. Les candidatures spontanées vont à othmane@aimakers.fr.`
- **Entrée llms.txt (FR) :** `[Carrières](https://aimakers.fr/carrieres) : postes ouverts chez AI Makers — ingénieurs IA, delivery leads et growth, entre Paris et Rabat ou en remote. Livrer des systèmes IA en production, pas des slides.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| Postes ouverts (AI Engineer, AI Delivery Lead, LLMOps Engineer, AI & Data Engineer, SEO & GEO Executor ; Paris/Rabat/remote ; temps plein) | src/app/carrieres/postes.ts — **[to validate fraîcheur]** |
| Équipe de 6, Paris + Rabat, clients internationaux | public/llms.txt (canonique) |
| Stack : Claude Code, n8n, LangChain ; mentorat CTO | src/app/carrieres/page.tsx |
| Email de candidature othmane@aimakers.fr | public/llms.txt (contact) |

## Localisation appliquée
**Modifié vs. live FR :**
- Title : suppression de la marque dupliquée en champ (« Carrières : rejoignez AI Makers » → « Carrières : rejoignez l'équipe », 30 car. + suffixe = 42).
- Meta description : négation répétée « pas des slides » et « stack de pointe » Tier-A retirées ; stack concrète nommée (Claude Code, n8n, LangChain). ~150 car.
- « stack de pointe » ×2 éliminé : adjectif retiré de la carte 4 §4.2 (la stack nommée porte déjà le point) ; occurrence meta remplacée aussi.
- Négation dédoublée dé-empilée : « Ce n'est pas un slogan » SUPPRIMÉE du sous-titre §4.2 (réécrite au positif). equipe conserve le procédé « pas un slogan ».

**Délibérément conservé (voix live authentique) :**
- Hero « on ne produit pas des slides. On livre des systèmes IA en production » — unique hameçon « pas des slides » conservé (négation propre à carrieres).
- « Pas de POC qui dort dans un tiroir » et « Pas de lettre de motivation. Montrez-nous ce que vous avez construit » — crédits posture bâtisseur concrets (dégonflants/porteurs), non inflationnistes.
- Les cinq postes ouverts verbatim de postes.ts avec le tag `[to validate fraîcheur]` intact, équipe de 6 canonique, email direct au fondateur.

## Reconciliation applied
Pass de réconciliation FR (audits SEO + anti-slop) :
- **Title :** « Carrières : rejoignez l'équipe » = 30 car. + suffixe auto = 42 ≤ 60 ; suffixe de marque dupliqué retiré. Conforme.
- **Meta :** 158 car. (≤160) ; « stack de pointe » retiré, stack nommée (Claude Code, n8n, LangChain). Conforme.
- **Refrain dogfooding (device keep-one-owner) :** la liste « cockpit quotidien / intelligence d'appels / suivi de missions » est **propriété de /a-propos** (§4.5). §4.2 carte 1 de /carrieres **réécrite pour varier l'écho** : l'argument dogfooding est conservé mais reformulé sur l'angle propre à la page (expérience de l'employé — « vous orchestrez une flotte d'agents dès votre première semaine »). Copier-coller verbatim supprimé.
- **Superlatif « stack de pointe » (A8) :** déjà retiré ×2 (carte 4 §4.2 + meta) ; stack nommée porte le point. Conforme.
- **Tag normalisé :** `[à valider fraîcheur]` → **`[to validate fraîcheur]`** (×tous). Fraîcheur des 5 postes à confirmer avant publication.
- **« pas des slides » (Hero) + « pas un slogan » :** hameçon « pas des slides » propre à carrieres conservé ; « pas un slogan » supprimé du sous-titre §4.2 (equipe en est le propriétaire). Conforme.
