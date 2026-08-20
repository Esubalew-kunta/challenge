# Équipe (/equipe) — FR Content Master

> Localisation FR du master EN scellé. Noms, rôles et bios repris VERBATIM des données live (`src/lib/formations.ts:formateurs` + `src/lib/offer-pages/fde.ts:team`). Rien d'inventé ; les profils avec seulement nom+rôle restent nom+rôle.

## 1. En-tête de page
- **Route (FR, live) :** /equipe
- **Objectif :** Page équipe : qui pilote, qui construit, qui intervient.
- **Rôle SEO :** confiance (E-E-A-T)
- **Étape funnel :** MOFU

## 2. Mots-clés cibles
> Page nom E-E-A-T. Pas de head term à poursuivre ; faible volume de recherche sur les noms, attendu. Optimiser pour l'exactitude (mot-clé minimal).

| Type | Mot-clé (FR) | Volume | Difficulté | Source |
|---|---|---|---|---|
| Primaire | (page nom — pas de mot-clé) | — | — | jugement d'intention |

## 3. Meta de page
| Champ | Actuel (FR, live) | Proposé (FR) |
|---|---|---|
| Title (≤60 car. avec suffixe auto) | L'équipe AI Makers : 6 personnes, la production d'une équipe de 40 | L'équipe : 6 personnes, la production de 40 |
| Meta description (140–160 car.) | Direction, ingénieurs IA et experts associés : l'équipe AI Makers entre Paris et Rabat. Un cabinet volontairement compact qui tourne sur ses propres systèmes. +50 entreprises accompagnées, +200 systèmes IA déployés, +2 500 professionnels formés. | Direction, ingénieurs IA et experts associés : l'équipe AI Makers entre Paris et Rabat. Un cabinet compact qui tourne sur ses propres systèmes. |
| H1 | 6 personnes. La production d'une équipe de 40. | 6 personnes. La production d'une équipe de 40. |
| Slug URL | /equipe | /equipe |

## 4. Sections & contenu
> Les noms, rôles et bios ci-dessous sont repris verbatim des données du site. Rien d'inventé ; les personnes avec seulement nom+rôle sont affichées avec nom+rôle.

### 4.1 — Hero
- **Proposé (FR) :**
  - Badge : `L'équipe`
  - H1 : `6 personnes. La production d'une équipe de 40.`
  - Intro : `Ce n'est pas un slogan, c'est notre preuve vivante : l'équipe tourne sur les systèmes qu'elle déploie chez ses clients. Et vous travaillez en direct avec les personnes qui construisent les vôtres.`
- **Justification :** Fidèle.

### 4.2 — « Ceux qui pilotent » (Direction)
- **En-tête de section :** badge `Direction` · H2 `Ceux qui pilotent`
- **Proposé (FR) — roster réel (nom / rôle / bio / LinkedIn) :**
  1. **Othmane Halim** — Fondateur d'AI Makers — `+200 missions IA. Expert transformation et stratégie IA.` — [LinkedIn](https://www.linkedin.com/in/othmanehalim/)
  2. **Maneesh Behera** — COO d'AI Makers — `Pilotage du delivery et des opérations sur les missions IA.` — [LinkedIn](https://www.linkedin.com/in/maneesh-behera)
  3. **Walid Boulanouar** — CTO AI Makers — `Expert Claude, agents IA et automatisations.` — [LinkedIn](https://www.linkedin.com/in/walid-boulanouar)
- **Justification :** Verbatim des données `formateurs`. Rôles/bios conservés tels quels, rien de rembourré.

### 4.3 — « Ceux qui construisent » (Ingénierie)
- **En-tête de section :** badge `Ingénierie` · H2 `Ceux qui construisent` · sous-titre (de `fdeContent.team.intro`) : `Pas un vivier, pas de profils anonymes. Des ingénieurs qui construisent tous les jours, chez nous et chez nos clients, encadrés en direct par Walid, notre CTO.`
- **Proposé (FR) — roster réel :**
  1. **Kunta** — AI Engineer — (stack affichée : Claude, n8n, Notion, Microsoft 365)
  - Suivi de la carte « Votre futur collègue ? » → liens vers /carrieres : `Votre futur collègue ? On recrute des ingénieurs IA.` · `Voir les postes ouverts →`
- **Justification :** La page ne rend que Kunta depuis les données d'équipe FDE (Walid apparaît en Direction ; Ali n'est pas retenu par le filtre live). Nom + rôle uniquement — les données FDE ne portent pas de bio pour les ingénieurs, donc aucune n'est inventée.

### 4.4 — « Ceux qui interviennent à nos côtés » (Experts associés)
- **En-tête de section :** badge `Experts et formateurs associés` · H2 `Ceux qui interviennent à nos côtés` · sous-titre `Les experts que vous retrouvez sur nos formations et nos missions, chacun sur sa spécialité.`
- **Proposé (FR) — roster réel :**
  1. **Hamza Idmoudi** — Data / AI Engineer — [LinkedIn](https://www.linkedin.com/in/hamza-idmoudi-96b138207)
  2. **Edouard Willemsen** — Formateur IA — `Consultant transformation IA et conduite du changement.` — [LinkedIn](https://www.linkedin.com/in/edouard-willemsen)
- **Justification :** Le code live sélectionne Hamza Idmoudi + Edouard Willemsen. Hamza n'a pas de champ bio dans les données — affiché nom+rôle uniquement, rien d'inventé.

### 4.5 — Bande de chiffres
- **Proposé (FR) :**
  - `+200` — `Systèmes IA déployés chez +50 entreprises`
  - `+2 500` — `Professionnels formés`
  - `Paris · Rabat` — `Deux bureaux, une seule équipe`
  - Ligne de clôture : `Une équipe compacte qui livre autant, c'est exactement le mécanisme qu'on installe chez vous. Envie de le voir de l'intérieur ?` → `Rejoignez l'équipe →` (/carrieres)

### 4.6 — CTA final
- **Proposé (FR) :**
  - Titre : `Travailler avec nous`
  - Sous-titre : `30 minutes avec l'équipe pour analyser vos process et repartir avec vos 3 premiers quick wins IA, que vous travailliez avec nous ou non.`
  - Bouton principal : `Réserver mon diagnostic gratuit` → /contact
  - Secondaire : `Rejoindre l'équipe` → /carrieres

## 5. FAQ
Pas d'emplacement FAQ dans le template.

## 6. Liens internes
| Ancre (FR) | Route cible | Note |
|---|---|---|
| le fondateur | /fondateur | fondateur |
| on recrute | /carrieres | recrutement |
| Réserver un diagnostic | /contact | CTA |

## 7. CTA
- **CTA principal :** FR : `Travailler avec nous` → /contact

## 8. Bloc GEO
- **Paragraphe answer-first (FR) :** `L'équipe AI Makers compte six personnes réparties sur des bureaux à Paris et Rabat. Direction : Othmane Halim (Fondateur), Maneesh Behera (COO) et Walid Boulanouar (CTO). Ingénierie : des ingénieurs IA comme Kunta, encadrés en direct par le CTO Walid Boulanouar. Les experts associés incluent Hamza Idmoudi (Data / AI Engineer) et Edouard Willemsen (Formateur IA). L'équipe tourne sur les mêmes systèmes IA qu'elle déploie chez ses clients.`
- **Entrée llms.txt (FR) :** `[L'équipe](https://aimakers.fr/equipe) : les six personnes d'AI Makers entre Paris et Rabat — direction, ingénieurs IA et experts associés.`

## 9. Faits utilisés
| Fait / chiffre | Source |
|---|---|
| Roster (noms/rôles/bios) : Othmane Halim, Maneesh Behera, Walid Boulanouar, Hamza Idmoudi, Edouard Willemsen | src/lib/formations.ts:formateurs |
| Kunta (AI Engineer), intro équipe | src/lib/offer-pages/fde.ts:team |
| 6 personnes, Paris + Rabat, +50 entreprises, +200 systèmes, +2 500 formés | public/llms.txt (canonique) |

## Localisation appliquée
**Modifié vs. live FR :**
- Title : suppression de la marque dupliquée + raccourci (« L'équipe AI Makers : 6 personnes, la production d'une équipe de 40 » → « L'équipe : 6 personnes, la production de 40 », 43 car. + suffixe = 55 ≤ 60).
- Meta description : ramenée de ~240 à ~140 car. ; composition de l'équipe + cadrage dogfooding conservés.

**Délibérément conservé (voix live authentique) :**
- Hero « Ce n'est pas un slogan, c'est notre preuve vivante » — equipe est le propriétaire canonique du procédé « pas un slogan » ; carrieres supprime sa copie du même procédé. Conservé intact.
- Le roster verbatim (noms/rôles/bios de la source), les bios volontairement fines (aucune bio inventée là où la source n'en porte pas), la ligne posée « Pas un vivier, pas de profils anonymes », la bande de chiffres canonique.
- Titres de direction confirmés Fondateur (Othmane) / COO (Maneesh) / CTO (Walid) — ensemble canonique sur lequel a-propos a été aligné.

## Reconciliation applied
Pass de réconciliation FR (audits SEO + anti-slop) :
- **Title :** déjà à 43 car. + suffixe auto = 55 ≤ 60 ; suffixe de marque dupliqué retiré. Conforme.
- **Meta :** 143 car. (140–160). Conforme, inchangée.
- **Ensemble leadership canonique :** /equipe est le **propriétaire de référence** (Othmane Halim = Fondateur, Maneesh Behera = COO, Walid Boulanouar = CTO). Aucune modification — a-propos a été aligné vers cette page.
- **Bios fines protégées :** aucune bio inventée là où la source (formateurs / fde.ts) n'en porte pas (Kunta, Hamza Idmoudi restent nom+rôle). Conservé.
- **« pas un slogan / pas un vivier » :** négations porteuses ; equipe est le propriétaire canonique du procédé « pas un slogan » (carrieres a supprimé sa copie). Conservé.
- **Tags :** aucun `[à valider]` sur cette page. Rien à normaliser.
