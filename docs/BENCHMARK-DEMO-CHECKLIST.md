# Le Benchmark des Makers, checklist de démo

**Adresse : http://localhost:3000/benchmark**

Si le serveur ne tourne pas :

```
cd "c:\Users\Esubalew\Desktop\aimakers\tasks\30 days claude challenge\ai-m-website-v2-main"
npm run dev
```

Comptez six minutes pour un parcours complet. Prenez une fenêtre de navigation
privée : le site se souvient de vous et la démo est plus honnête à froid.

---

## Ce qui marche, dans l'ordre où le montrer

| Écran | Ce qu'on voit |
|---|---|
| **Accueil** | Le titre qui oppose le diagnostic au Benchmark, quatre statistiques, les cinq règles dont la nouvelle sur le palier, « Lancer le Benchmark » |
| **Onboarding, 5 étapes** | Une question par écran, la barre de progression, la flèche de retour ronde qui garde ce qui a été saisi, `Entrée` qui valide |
| **Étape 04** | **Les quatre cartes de track.** Finance & RevOps est arrivé le 28 août |
| **Étape 05** | Les rôles du track choisi, le titre reprend son nom, la mention de confidentialité. Cliquer un rôle démarre le parcours |
| **Barre de statut** | Session, track, round, niveau en trois points, **palier**, score, tout en direct |
| **Question** | Chrono 45 s qui passe en ambre puis en rouge, puces de niveau et de points, texte, quatre options A à D |
| **Après réponse** | La bonne en vert, votre erreur en rouge, les autres estompées, l'explication et les points gagnés |
| **Fin de round** | La fenêtre de verdict : le mouvement de niveau, et **la phrase qui annonce le palier suivant** |
| **Carte de score** | Score sur 240, niveau de sortie, détail des trois rounds avec leur palier, temps |
| **Classement** | Le top 10, votre ligne épinglée et surlignée si vous êtes plus bas, avec votre vrai rang |
| **Corrigé** | Les neuf questions, juste / raté / sans réponse, la bonne réponse, la vôtre, l'explication |
| **Conclusion** | Le texte AI Scan ou AI Champions selon le niveau de sortie, puis les deux boutons |

**Deux démonstrations qui portent :**

1. **Ratez le round 1 exprès.** Vous descendez en débutant, et le round 3 vous
   sert quand même les questions les plus dures de cette banque. C'est tout le
   changement de mécanique, et il se voit en trois clics.
2. **Le parcours est écrit en base.** Une ligne dans `benchmark_runs`, avec
   « Camille B. » et jamais « Camille Bernard » : le prénom plus initiale est
   calculé par la base, pas par la page.

---

## À ne pas cliquer devant quelqu'un

| | Pourquoi |
|---|---|
| **« Copier mon post LinkedIn » sur un navigateur exotique** | Le presse-papiers est refusé hors contexte sécurisé. Sur `localhost` en Chrome ça marche ; ailleurs le message d'erreur s'affiche, ce qui est le bon comportement mais fait mauvais effet |
| **« Réserver un appel gratuit »** | Ça ouvre le vrai formulaire de réservation du site, qui redemande nom, e-mail **et téléphone**. Nous ne collectons pas le téléphone, donc il repose des questions déjà posées |
| **Le bouton de téléchargement du pack** | Il n'existe pas à l'écran : aucun des quatre packs n'est assemblé. Le mécanisme est en place et le bouton apparaîtra tout seul le jour où un fichier est déposé |
| **Rafraîchir en plein parcours** | La session est perdue. Accepté pour la v1 |

---

## Les soulignements ambre, si quelqu'un les remarque

Onze chaînes sont **provisoires** et se soulignent en pointillé ambre, en
développement uniquement. Ce n'est pas un bug, c'est le repère de relecture.

- Les trois mentions de confidentialité en attente d'Othmane : étape 05, note
  sous le classement, mention de pied
- Les deux que vous avez écrites : le bandeau de la carte, le badge de reprise
- Le titre et la description de la page, le bandeau de défi, le libellé du
  téléchargement, la ligne du classement vide

**Une construction de production refuse de compiler** tant qu'une de ces chaînes
n'est pas validée, sauf à poser `BENCHMARK_ALLOW_DRAFT_STRINGS=1`. La page est
aussi en `noindex`. Les deux sautent à la validation.

---

## Deux tournures à faire relire par Youssef

Elles viennent du pack, je n'y ai pas touché.

- **« 1 bonnes réponses sur 9 »** quand on n'a qu'une bonne réponse. Le gabarit
  ne gère pas le singulier
- **« redescend en Débutant »** : `TIER_LABEL` est capitalisé, donc il arrive
  avec sa majuscule au milieu d'une phrase

---

## Le classement d'amorçage a changé

Trois lignes portaient des scores qu'aucun parcours ne peut produire. Le moteur
donne 10, 20 ou 30 points selon le niveau, le round 1 se joue toujours en
intermédiaire, et le niveau ne bouge que d'un cran par round : l'ensemble
atteignable est 0 à 160 de dix en dix, puis 180, 190, 210, 240. **170, 200, 220
et 230 n'ont aucun chemin.**

| Ligne | Avant | Après |
|---|---|---|
| Tobias K., Northwind Labs | 230 expert | **180 expert** |
| Lucas F., Atelier Neuf | 200 expert | **100 expert** |
| Hugo D., Bastion Fret | 170 intermédiaire | **110 intermédiaire** |

Chaque remplacement est la valeur atteignable la plus proche **en dessous** de
l'originale, valide pour le niveau de sortie de la ligne et encore libre. Le
tableau est reclassé. Un test verrouille l'ensemble atteignable : une prochaine
valeur impossible fera échouer la suite plutôt que de partir en ligne.

---

## État vérifié

| | |
|---|---|
| Parcours complet en navigateur | joué de bout en bout, aucune erreur console |
| Écriture en base | vérifiée, lignes de test supprimées |
| Chaînes manquantes à l'écran | 0 |
| Tests du Benchmark | 31 sur 31 |
| `tsc --noEmit` | exit 0 |
| eslint sur les fichiers du Benchmark | propre |
| Dérive de style contre l'artefact | aucune, deux écarts validés mis à part |

**Deux tests du dépôt échouaient avant ce chantier et échouent toujours**,
`challenge-profile` et `challenge-resources`. Ils ne viennent pas d'ici.

Captures dans `demo-captures/`, la référence de l'artefact à côté.
