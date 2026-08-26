# Choisir le bon outil Claude Code

Utilisez le plus petit outil qui résout le problème répété.

## `CLAUDE.md`

Utilisez le pour les faits courts et les instructions nécessaires dans la majorité des sessions. Par exemple, les commandes de test, les limites d'architecture et la définition de terminé.

## Règle

Utilisez `.claude/rules/` pour des instructions ciblées, surtout si elles concernent un chemin ou un type de fichier. Une règle guide le comportement, mais ne garantit pas son application.

## Skill

Utilisez une skill pour une procédure répétable qui demande du jugement, une checklist ou des références. Son contenu complet est chargé seulement quand elle est utilisée.

## Hook

Utilisez un hook quand une action doit se déclencher à un événement précis. Un hook peut exécuter des commandes ou d'autres traitements. Inspectez le et testez le avant activation. Ce kit n'installe aucun hook exécutable.

## Connexion MCP

Utilisez MCP seulement si Claude a besoin de données ou d'une action hors du projet. Commencez avec la plus petite permission et préférez un accès en lecture seule.

## Décision rapide

Nécessaire dans presque chaque session : `CLAUDE.md`.

Nécessaire pour certains fichiers : règle.

Procédure de réflexion répétée : skill.

Action déterministe liée à un événement : hook.

Accès à un système externe : MCP.

Référence officielle : https://code.claude.com/docs/en/features-overview

