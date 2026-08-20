# Sécurité & données (/securite) — FR Content Master

> Localisation FR du master EN scellé. Voix live reprise de `src/app/securite/page.tsx` (contenu conservé : classé KEEP à l'audit, pas de dé-négation). SEO localisé FR.

## 1. En-tête de page
- **Route (FR, live) :** /securite
- **Objectif :** Page sécurité/confiance pour DSI/DPO : où vivent les données, six engagements, ce qu'on refuse.
- **Rôle SEO :** confiance (facilitation achats/procurement)
- **Étape funnel :** BOFU

## 2. Mots-clés cibles
| Type | Mot-clé (FR) | Volume (FR) | Difficulté | Source |
|---|---|---|---|---|
| Primaire | sécurité des données ia | 150 | faible (n/d) | Ahrefs (FR) |
| Secondaire | protection des données ia | 100 | faible (n/d) | Ahrefs |
| Secondaire | sécurité ia | 20 | 7 | Ahrefs |
| Support (descriptif) | sécurité intelligence artificielle | 50 | faible (n/d) | Ahrefs |

> « sécurité des données ia » (150) est la cible réaliste, alignée sur le thème de la page. « sécurité ia » (KD 7) est facile mais à très faible volume — usage descriptif.

## 3. Meta de page
| Champ | Actuel (FR, live) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. avec suffixe auto) | Sécurité et données : où vivent vos données avec AI Makers | Sécurité des données IA : où vivent les vôtres |
| Meta description (140–160 car.) | Les systèmes livrés par AI Makers tournent dans vos comptes : vos abonnements, vos clés API, vos données chez vous. Accès au moindre privilège, DPA type sur demande, pas d'entraînement des modèles sur vos données. | Les systèmes AI Makers tournent dans vos comptes et vos clés : vos données restent chez vous. Moindre privilège, DPA sur demande, sans entraînement des modèles. |
| H1 | Vos données ne quittent pas chez vous. | Vos données ne quittent pas chez vous. |
| Slug URL | /securite | /securite |

## 4. Sections & contenu

### 4.1 — Hero
- **Proposé (FR) :**
  - Badge : `Sécurité et données`
  - H1 : `Vos données ne quittent pas chez vous.`
  - Intro : `Les systèmes que nous livrons tournent par défaut dans vos comptes : vos abonnements n8n, Notion, Microsoft 365, vos clés API. AI Makers construit et configure, mais n'héberge pas vos données. Voici ce que cela change, concrètement.`
  - Bouton CTA : `Parler à un interlocuteur technique`
- **Justification :** Fidèle. Énonce la position de souveraineté des données clairement, avec les noms d'outils concrets qui parlent aux achats.

### 4.2 — « Où vivent vos données » (3 colonnes)
- **En-tête de section :** badge `Le flux des données` · H2 `Où vivent vos données` · sous-titre `Trois acteurs, trois rôles clairement séparés. La question à poser à tout prestataire IA : où passent nos données, et qui détient les comptes ?`
- **Proposé (FR) :**
  1. **Vos outils** — tag `Chez vous` — `Les workflows, bases et documents vivent dans vos abonnements : votre n8n, votre Notion, votre Microsoft 365, vos clés API. Vous en gardez le contrôle et la facturation, comme le détaille notre modèle « qui paie quoi ».`
  2. **Les modèles IA** — tag `Via API professionnelles` — `Les systèmes appellent les API professionnelles d'Anthropic, d'OpenAI ou de Google. Conformément aux politiques de ces fournisseurs, les données soumises via API ne servent pas par défaut à entraîner les modèles. Nous configurons et vérifions ces réglages.`
  3. **AI Makers** — tag `Construit et configure` — `Nous concevons, construisons et configurons les systèmes dans votre environnement. Nous n'hébergeons pas vos données : pas de serveur AI Makers entre vos outils et les modèles.`
- **Justification :** Exact. L'affirmation « pas d'entraînement par défaut via API » est correctement qualifiée (« conformément aux politiques des fournisseurs ») et conservée telle quelle — non surestimée.

### 4.3 — « Six engagements, valables pour chaque mission » (6 cartes)
- **En-tête de section :** badge `Nos engagements` · H2 `Six engagements, valables pour chaque mission` · sous-titre `Pas de politique de sécurité en 40 pages que personne ne lit. Six pratiques vérifiables, applicables dès le premier jour.`
- **Proposé (FR) :**
  1. **Vos comptes par défaut** — `Les systèmes livrés tournent par défaut dans vos comptes et vos abonnements. Si vous changez de prestataire demain, vos systèmes continuent de fonctionner chez vous.`
  2. **Pas d'entraînement sur vos données** — `Les API professionnelles que nous utilisons n'entraînent pas leurs modèles sur les données soumises, conformément aux politiques des fournisseurs, configurées et vérifiées par nos soins.`
  3. **DPA type sur demande** — `Un accord de traitement des données (DPA) type est disponible sur demande pour cadrer contractuellement les rôles et les responsabilités. Nous pouvons aussi travailler à partir du vôtre.`
  4. **Propriété intellectuelle totale et réversibilité** — `Tout ce qui est construit pendant la mission vous appartient : systèmes, prompts, playbooks documentés. Vous pouvez tout opérer sans nous. C'est une garantie contractuelle, pas une promesse.`
  5. **Accès au moindre privilège** — `Notre pratique par défaut : des comptes nominatifs pour chaque intervenant, des accès limités au périmètre de la mission, et une révocation des accès en fin de mission. Le tout dans vos outils, donc auditable par vos équipes.`
  6. **Validation humaine des sorties critiques** — `Un contenu destiné à vos clients ou un chiffre qui alimente une décision passe par une revue humaine, réalisée dans vos propres comptes et donc auditable par vos équipes. Le cadre de gouvernance qui formalise ce principe — charte IA, seuils de fiabilité — est détaillé sur la page dédiée.`
- **Justification :** Fidèle. L'engagement 4 renvoie correctement à la Garantie Indépendance contractuelle (co-détenue avec /garanties).

### 4.4 — « Ce qu'on refuse de déployer » (renvoi gouvernance)
- **Proposé (FR) :**
  - H2 `Ce qu'on refuse de déployer`
  - Corps : `La sécurité des données est une moitié du sujet. L'autre, c'est la gouvernance : pas de décisions automatisées sur les personnes, pas de système que vos équipes ne comprennent pas, un humain dans la boucle pour les sorties critiques. Ces limites, ainsi que le cadre AI Act, RGPD et charte IA, sont détaillées sur la page dédiée.`
  - Bouton : `Voir la page Gouvernance IA` → /gouvernance-ia
  - Encart : `**Zéro dépendance, par construction.** Comme les systèmes tournent dans vos comptes et que les playbooks sont documentés chez vous, la fin de mission ne crée aucune rupture : les systèmes continuent de fonctionner, avec ou sans nous.`
- **Justification :** Fidèle ; conserve l'argument de réversibilité concret.

### 4.5 — FAQ — voir §5

### 4.6 — PartnerStrip
- **Proposé (FR) :** Pas de copie à traduire (badges partenaires/crédibilité rendus par composant partagé). Conserver tel quel.

### 4.7 — CTA final
- **Proposé (FR) :**
  - Titre : `Une exigence de sécurité particulière ? Parlons-en.`
  - Sous-titre : `Questionnaire fournisseur, revue par votre DSI, DPA spécifique : nous répondons directement à vos équipes techniques et juridiques, avant tout engagement.`
  - Bouton : `Prendre contact` → /contact
- **Justification :** Conserve l'angle facilitation achats (réponse aux questionnaires fournisseurs).
- **Ligne de disclaimer légal (à conserver) :** `Cette page décrit nos pratiques et engagements contractuels. Elle ne constitue pas un conseil juridique.`

## 5. FAQ
Emplacement FAQ : OUI — `faq-accordion.tsx` + JSON-LD FAQPage.

| # | Question (FR) | Réponse (FR) |
|---|---|---|
| 1 | Qui a accès à nos données pendant la mission ? | Uniquement les personnes qui travaillent sur votre mission, avec des comptes nominatifs créés dans vos outils et des accès limités au périmètre nécessaire (principe du moindre privilège). Comme ces accès vivent chez vous, vos équipes peuvent les auditer, les restreindre ou les révoquer à tout moment, sans dépendre de nous. |
| 2 | Que se passe-t-il en fin de mission ? | Les accès nominatifs de nos intervenants sont révoqués, et tout ce qui a été construit reste chez vous : les systèmes tournent dans vos comptes, les playbooks documentés vous sont remis, et la propriété intellectuelle vous revient intégralement. Vous pouvez opérer, modifier ou confier les systèmes à qui vous voulez. C'est ce que nous appelons la réversibilité. |
| 3 | Utilisez-vous nos données pour d'autres clients ? | Non, jamais. Vos données servent vos systèmes et rien d'autre : elles ne sont ni réutilisées pour d'autres clients, ni intégrées à des bases mutualisées, ni soumises à l'entraînement des modèles. Ce que nous capitalisons entre les missions, ce sont nos méthodes et nos patterns, jamais vos données. |
| 4 | Pouvez-vous signer notre propre DPA ou le vôtre ? | Les deux. Nous disposons d'un DPA type, disponible sur demande, que vous pouvez faire relire par vos équipes juridiques. Et si votre entreprise impose son propre modèle d'accord de traitement des données, nous l'examinons et le signons après revue. L'objectif est le même dans les deux cas : un cadre contractuel clair avant le premier accès à vos outils. |

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| Gouvernance IA | /gouvernance-ia | page sœur |
| la Garantie Indépendance (PI & sortie) | /garanties | garantie : sortie/PI |
| Prendre contact | /contact | CTA |

## 7. CTA
- **CTA principal :** FR : `Une exigence de sécurité particulière ? Parlons-en.` → /contact

## 8. Bloc GEO
- **Paragraphe answer-first (FR) :** `Les systèmes IA livrés par AI Makers tournent dans les comptes du client — ses abonnements n8n, Notion, Microsoft 365 et ses clés API — de sorte que les données restent chez le client et qu'AI Makers n'héberge rien. Les données soumises aux API professionnelles des modèles (Anthropic, OpenAI, Google) ne servent pas par défaut à entraîner les modèles, et AI Makers configure et vérifie ces réglages. Les accès suivent le principe du moindre privilège via des comptes nominatifs, un DPA type est disponible sur demande, et la propriété intellectuelle totale ainsi que la réversibilité sont contractuelles.`
- **Entrée llms.txt (FR) :** `[Sécurité & données](https://aimakers.fr/securite) : les systèmes tournent dans vos propres comptes, aucun entraînement des modèles sur vos données, accès au moindre privilège et DPA type sur demande. AI Makers construit et configure mais n'héberge pas vos données.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| Systèmes dans les comptes client ; AI Makers n'héberge pas les données ; DPA sur demande ; pas d'entraînement sur les données client | public/llms.txt + copie de page |
| Données via API professionnelles non utilisées pour l'entraînement « par défaut, selon la politique des fournisseurs » | copie de page (correctement qualifié — non surestimé) |
| Propriété intellectuelle totale / réversibilité = Garantie Indépendance contractuelle | src/app/garanties/page.tsx |

## Localisation appliquée
**Modifié vs. live FR :**
- Title : raccourci de 57 à 46 car. (« Sécurité et données : où vivent vos données avec AI Makers » → « Sécurité des données IA : où vivent les vôtres ») pour tenir dans le budget de 60 avec le suffixe auto ; intègre le head term « sécurité des données ia ».
- Meta description : ramenée de ~210 à ~158 car., thème souveraineté des données + moindre privilège / DPA / pas d'entraînement conservés.

**Délibérément conservé (voix live authentique — classé KEEP à l'audit) :**
- Le « C'est une garantie contractuelle, pas une promesse » (une seule occurrence, il affirme un mécanisme contractuel réel — pas de dé-négation).
- Toute la répétition achats/conformité (moindre privilège, pas d'entraînement sur vos données, réversibilité, retour de la PI, DPA dans les deux sens) — cohérence inter-pages nécessaire, À PROTÉGER.
- Le cadrage qualifié « pas d'entraînement par défaut selon la politique des fournisseurs » et la ligne de disclaimer légal.

## Reconciliation applied
Pass de réconciliation FR (audits SEO + anti-slop) :
- **Title :** « Sécurité des données IA : où vivent les vôtres » = 46 car. + suffixe auto = 58 ≤ 60 ; aucun suffixe écrit à la main. Conforme (tight — ne pas rallonger).
- **Meta :** mesurée à ~161 car. → ramenée à ≤160 : « aucun entraînement des modèles » → « **sans** entraînement des modèles ». Conforme.
- **Device keep-one-owner « validation humaine des sorties critiques … charte IA » :** partagé mot pour mot avec /gouvernance-ia. Décision : **gouvernance-ia garde la formulation exacte** (propriétaire conformité) ; §4.3 carte 6 de /securite **reformulée sur son propre angle** (revue humaine réalisée dans vos comptes, auditable par vos équipes) et renvoie le cadre charte IA/seuils à la page gouvernance. Écho verbatim supprimé.
- **« X, pas Y » :** « C'est une garantie contractuelle, pas une promesse » — unique instance porteuse, conservée (classée KEEP). Conforme.
- **Répétition achats/conformité + qualification fournisseurs + disclaimer légal :** conservés (À PROTÉGER).
