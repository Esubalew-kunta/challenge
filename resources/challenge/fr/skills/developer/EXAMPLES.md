# Exemples

Remplacez les détails entre crochets par votre propre tâche.

## Débutant

```text
/codebase-mapper Je découvre ce dépôt. Cartographie le fonctionnement de la connexion utilisateur. Montre le point d'entrée, les fichiers principaux, le flux des données et les tests. Ne modifie rien.
```

```text
/safe-change Corrige l'état vide de la page des commandes. Elle doit afficher un message clair lorsqu'il n'existe aucune commande. Réalise la plus petite modification et lance le test pertinent.
```

```text
/code-reviewer Analyse ma modification actuelle pour trouver les bugs concrets et les tests manquants. Explique chaque constat avec un langage accessible aux débutants.
```

## Builder

```text
/codebase-mapper Suis la création d'une facture depuis l'entrée API jusqu'au stockage et à la notification. Sépare les faits confirmés des inconnues et indique les zones de modification probables.
```

```text
/safe-change Ajoute l'idempotence à la création d'une facture sans changer la réponse publique. Conserve le travail sans rapport, ajoute d'abord un test de régression en échec et lance la suite ciblée.
```

```text
/code-reviewer Analyse la modification des factures pour la concurrence, les autorisations, l'intégrité des données, le retour arrière et les tests manquants. Présente uniquement des constats prouvés avec leur gravité et leur emplacement.
```
