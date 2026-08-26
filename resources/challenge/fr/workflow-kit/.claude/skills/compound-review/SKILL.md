---
name: compound-review
description: Examiner un travail terminé et trouver une amélioration prouvée à réutiliser la prochaine fois.
disable-model-invocation: true
---

# Revue de capitalisation

Utilisez cette skill seulement après une vraie tâche terminée.

## Entrées

Demandez le résultat attendu, le travail réalisé, les preuves de vérification, les difficultés, les erreurs et les retours utilisateur. Signalez clairement toute preuve manquante.

## Revue

1. Comparez le résultat attendu aux preuves.
2. Identifiez le plus grand coût répété ou risque évitable.
3. Séparez le problème unique du modèle réutilisable.
4. Recommandez une seule amélioration.
5. Choisissez son emplacement : `CLAUDE.md`, règle, skill, hook, MCP ou documentation ordinaire.
6. Définissez une mesure pour la prochaine exécution.

## Résultat

Retournez : Résultat, Preuve, Friction répétée, Une amélioration, Bon emplacement, Limite de sécurité, Prochaine mesure.

Ne modifiez pas le système avant l'acceptation de la recommandation par l'utilisateur.

