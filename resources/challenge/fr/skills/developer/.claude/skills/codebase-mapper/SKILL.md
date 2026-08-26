---
name: codebase-mapper
description: Cartographie un code existant dans un guide concis fondé sur les vrais fichiers et leurs relations. À utiliser lorsque la personne découvre un dépôt, cherche une fonction, suit un flux de données ou prépare une modification.
disable-model-invocation: true
---

# Cartographie du code

Créer une carte en lecture seule qui aide à agir sans prétendre comprendre plus que les preuves disponibles.

## Préciser

Demander la fonction ou la question cible si elle manque. Garder la première analyse assez étroite pour être utile en une seule revue.

## Examiner

1. Lire les instructions du projet et la documentation principale.
2. Identifier les points d'entrée, modules principaux, réglages, tests et limites externes.
3. Suivre un parcours représentatif depuis l'entrée jusqu'au résultat.
4. Séparer les faits confirmés, les déductions raisonnables et les inconnues.

## Présenter

Rendre les sections suivantes :

1. Orientation : objectif, technologies et démarrage du projet.
2. Carte du code : chemins importants et responsabilité de chacun.
3. Points d'entrée : début des requêtes, tâches, événements ou commandes.
4. Flux de données : déplacement des informations et lieux de transformation.
5. Zones de modification : fichiers probables et tests pertinents pour le besoin.
6. Inconnues : questions qui exigent encore une preuve.

Associer chaque affirmation importante à un vrai chemin. Ne modifier aucun fichier, ne rien installer et ne lancer aucune commande qui change un état.
