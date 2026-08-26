---
name: safe-change
description: Réalise la plus petite modification vérifiée tout en protégeant le travail sans rapport. À utiliser lorsque la personne corrige un bug, ajoute une fonction ciblée ou change un comportement existant.
disable-model-invocation: true
---

# Modification sûre

Réaliser un changement étroit avec une preuve que le comportement attendu fonctionne.

## Définir la cible

1. Formuler le comportement attendu en une phrase.
2. Identifier comment la réussite sera observée ou testée.
3. Lire les instructions, le code concerné, les tests existants et l'état actuel du travail.
4. Présenter le plan de la plus petite modification. Demander une validation si la mise en œuvre n'a pas déjà été autorisée.

## Mettre en œuvre

1. Ajouter ou trouver un test ciblé qui échoue pour le comportement absent.
2. Modifier uniquement les fichiers nécessaires à la plus petite modification.
3. Conserver les changements sans rapport et les interfaces existantes sauf demande contraire.
4. Lancer les tests pertinents après la modification.
5. Si un test échoue, chercher la cause. Ne pas affaiblir un test valide pour le faire passer.

## Présenter le résultat

- Comportement attendu et résultat.
- Fichiers modifiés et raison.
- Tests pertinents lancés et résultat.
- Risque restant ou hypothèse non vérifiée.

Ne rien installer, ne changer aucun identifiant, ne rien publier ou déployer et ne modifier aucun fichier sans rapport sans permission claire.
