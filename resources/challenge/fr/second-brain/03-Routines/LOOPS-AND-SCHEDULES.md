# Boucles et planification

## Comprendre la différence

Une liste dans `03-Routines/` est une routine lisible par une personne. Elle ne s'exécute pas seule. Vous ou Claude la suivez lorsque cela devient utile.

La commande `/loop` de Claude Code répète un prompt tant que la session actuelle reste disponible. Elle est limitée à la session et convient aux surveillances courtes.

Les routines cloud, les tâches planifiées sur ordinateur et les systèmes CI conviennent mieux au travail qui doit continuer sans dépendre d'une session ouverte.

## Exemple débutant

Surveiller un déploiement tout en restant dans la session :

```text
/loop 5m vérifie si le déploiement est terminé. Indique son état. Ne modifie et ne publie rien.
```

Appuyez sur `Esc` pendant l'attente pour empêcher la prochaine exécution.

## Exemple builder

Utiliser une boucle étroite avec une condition d'arrêt claire :

```text
/loop 10m vérifie les tests. S'ils sont terminés, résume les échecs et arrête la boucle. Sinon, indique uniquement l'état actuel.
```

## Modèle de boucle sûre

```text
/loop [intervalle] observe [cible précise]. Indique [faits précis]. Arrête lorsque [condition claire]. Demande une validation avant de modifier des fichiers, envoyer un message, publier, acheter ou supprimer quoi que ce soit.
```

## Choisir la bonne option

- Utilisez une routine Markdown pour une liste lancée par une personne.
- Utilisez `/loop` pour une surveillance courte dans une session Claude Code active.
- Utilisez une tâche planifiée sur ordinateur si le travail exige des fichiers locaux sans session ouverte.
- Utilisez une routine cloud ou un système CI si le travail doit continuer loin de votre machine.

N'utilisez pas une boucle sans surveillance pour des suppressions, des identifiants secrets, des paiements ou une communication publique.
