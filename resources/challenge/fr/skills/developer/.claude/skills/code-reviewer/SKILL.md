---
name: code-reviewer
description: Analyse une modification de code pour trouver des défauts concrets, des risques et des vérifications manquantes. À utiliser lorsque la personne vérifie un diff, une pull request, un patch ou une mise en œuvre avant publication.
disable-model-invocation: true
---

# Revue de code

Analyser la modification demandée sans la changer. Préférer quelques constats fondés sur des preuves à une longue liste de suppositions.

## Comprendre le changement

1. Lire les instructions du projet et le résultat attendu.
2. Examiner toute la modification et le code voisin dont elle dépend.
3. Vérifier les tests existants et les résultats de validation.

## Dimensions de revue

- Exactitude et cas limites.
- Sécurité, permissions et exposition des données.
- Risque de régression et compatibilité.
- Gestion des erreurs et reprise.
- Qualité des tests et vérification manquante.
- Complexité inutile qui masque un risque.

## Constats

Pour chaque constat, indiquer :

1. Gravité : élevée, moyenne ou faible.
2. Emplacement : fichier et zone précise du code.
3. Risque : ce qui peut échouer et pour qui.
4. Preuve : le parcours dans le code qui crée le problème.
5. Correction : la plus petite amélioration utile.

Ne pas présenter une préférence de style comme un défaut. Si aucun défaut concret n'est trouvé, le dire et lister les tests manquants ou les hypothèses restantes.
