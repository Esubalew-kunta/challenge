# Annonces LinkedIn, postes ouverts AI Makers

Cinq packets d'annonce prêts à publier sur LinkedIn. Chaque fichier contient les
champs du formulaire « Publier une offre d'emploi » de LinkedIn, puis le corps de
l'annonce en français (version canonique) et en anglais.

| # | Poste | Équipe | Fichier |
|---|---|---|---|
| 01 | AI Engineer | Ingénierie | [`01-ai-engineer.md`](./01-ai-engineer.md) |
| 02 | GTM & Growth Manager | Growth | [`02-gtm-growth-manager.md`](./02-gtm-growth-manager.md) |
| 03 | Data Engineer | Ingénierie | [`03-data-engineer.md`](./03-data-engineer.md) |
| 04 | QA Engineer | Ingénierie | [`04-qa-engineer.md`](./04-qa-engineer.md) |
| 05 | Forward Deployed Engineer | Delivery | [`05-forward-deployed-engineer.md`](./05-forward-deployed-engineer.md) |

## Avant de publier

1. **Renseigner ou supprimer les `[COMP]`.** Chaque annonce porte un placeholder de
   rémunération. LinkedIn met en avant les offres qui affichent une fourchette.
2. **Vérifier le lieu.** Ces annonces sont désormais cadrées *remote / international*,
   fuseau compatible avec Paris/Casablanca, aucune obligation de résidence dans l'une des
   deux villes. Voir « Écarts tranchés » plus bas pour la formulation retenue et son
   champ d'application par poste.
3. **Coller en texte simple.** LinkedIn supprime le Markdown. Les corps d'annonce sont
   écrits pour rester lisibles sans mise en forme : les puces `•` et les sauts de ligne
   survivent, `**gras**` et `##` non. Retirer les `**` au collage.
4. **Publier depuis la page entreprise** `linkedin.com/company/aimakers`, pas depuis un
   profil personnel, pour que les offres remontent dans l'onglet Emplois de la page.

## Boilerplate commun

Bloc « À propos » réutilisé en tête de chaque annonce, aligné sur `public/llms.txt` :

> AI Makers est un cabinet de transformation IA en France et au Maroc. Nous auditons les
> process, déployons des systèmes IA en production et formons les équipes jusqu'à leur
> autonomie. +50 entreprises accompagnées, +200 systèmes IA en production, +10 000
> professionnels formés, 7 heures par semaine récupérées en moyenne par collaborateur.
> Une équipe de 10 personnes entre Paris et Casablanca, fondée par Othmane Halim.

**Faits vérifiés utilisables dans toute annonce** (source : `public/llms.txt`,
`src/lib/offer-pages/fde.ts`) :

- Lieux de poste : Paris et Casablanca. L'adresse postale marocaine publiée dans
  `public/llms.txt` reste 46 Av Okba, Agdal, Rabat, voir « Écarts tranchés »
- Adresse Paris : 60 rue François 1er, 75008
- Méthode en 3 phases : Audit (AI Scan) → Build (AI Engine) → Scale (AI Champions)
- Stack : Claude et Claude Code, n8n, LangChain, Notion
- Direction technique : Walid Boulanouar (CTO) · Adel Dahani (expert IA associé)
- Plus de 20 ingénieurs IA déployés en entreprise · partenariat avec AY Automate

**Ton.** Direct, orienté construction. Phrases courtes, chiffres concrets, une seule
négation par annonce. Repris de la page carrières : « Nous ne produisons pas de slides.
Nous mettons des systèmes IA en production. » · « Pas de POC qui dort dans un tiroir. »
· « Pas de lettre de motivation. Montrez ce que vous avez construit. »

## Écarts tranchés

Quatre incohérences relevées dans le contenu existant, arbitrées depuis :

| Sujet | Retenu | Statut |
|---|---|---|
| Bureau marocain | **Casablanca** | appliqué aux 5 annonces et à `postes.ts` |
| Taille d'équipe | **10 personnes** | déjà le cas dans `page.tsx`, aucun changement |
| Liste des postes | les 5 postes ci-dessus | `postes.ts` aligné, `/carrieres` affiche les 5 |
| Cadrage remote/international | **Remote**, fuseau compatible avec Paris/Casablanca (Europe, Maghreb ou proche), aucune obligation de résidence dans l'une des deux villes, avec des temps de présence ponctuels dans nos bureaux. Le FDE ajoute des déplacements chez le client une partie de la semaine. Rémunération non publiée : « compétitive, communiquée à l'entretien » remplace `[COMP]`. Le français reste éliminatoire pour GTM & Growth Manager et Forward Deployed Engineer (rôles client), retiré pour AI Engineer, Data Engineer et QA Engineer (anglais professionnel suffisant). | appliqué aux 5 annonces et à `postes.ts` |

**Reste ouvert.** `public/llms.txt` décrit toujours le bureau marocain comme Rabat
(« bureaux à Paris (75008) et Rabat (Agdal) », « 46 Av Okba, Agdal, Rabat »), et
`/ia-maroc` parle du « bureau de Rabat ». Les pages `carrieres` et `equipe` disent
Casablanca. Si l'adresse postale est bien à Rabat et l'équipe à Casablanca, il n'y a
rien à corriger ; sinon `llms.txt` et `/ia-maroc` sont à reprendre. Hors périmètre de
ces annonces.

Les masters de contenu `[FR]/[EN] website-content/carrieres/carrieres.md` décrivent
encore l'ancienne liste de postes, « une équipe de 6 » et « Paris et Rabat ». Ce sont
des documents de planification, pas la source de rendu, la page lit `postes.ts` et
`page.tsx`. Ils sont désormais périmés sur ces trois points.

## Fourchettes de marché, pour référence

Le site publie déjà des fourchettes pour l'ingénieur IA en France
(`src/lib/offer-pages/fde.ts`), utiles pour calibrer les `[COMP]`. Ce sont des
données de marché, **pas** une grille AI Makers.

| Séniorité | Île-de-France | Régions |
|---|---|---|
| Junior, 0-2 ans | 45 000 – 55 000 € | 38 000 – 48 000 € |
| Confirmé, 2-5 ans | 55 000 – 75 000 € | 48 000 – 65 000 € |
| Senior, 5-8 ans | 75 000 – 100 000 € | 65 000 – 85 000 € |
| Lead / Staff, 8 ans et + | 100 000 € et plus | 85 000 € et plus |
