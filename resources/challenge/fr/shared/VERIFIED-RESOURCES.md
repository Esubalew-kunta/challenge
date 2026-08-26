# Ressources vérifiées

Revue effectuée le 26 août 2026. Cette revue datée n'est pas permanente. Les dépôts, licences, commandes, dépendances et comportements peuvent changer.

Avant une installation, inspecter la source actuelle, les permissions, scripts, hooks, accès réseau et étapes de retrait. La popularité ne prouve pas la sécurité. Tester tout nouvel outil dans un projet peu risqué.

## Anthropic Agent Skills

- Propriétaire : Anthropic
- Objectif : exemples officiels, skills de documents, spécification et modèles.
- Licence : variable. De nombreux exemples utilisent Apache 2.0. Certains skills de documents sont seulement disponibles en source. Vérifier chaque dossier.
- Lien : https://github.com/anthropics/skills
- Installation : ajouter le dépôt comme marketplace Claude Code, puis installer uniquement le groupe nécessaire.
- Sécurité : les exemples peuvent contenir des scripts et ressources. Inspecter le skill choisi.

## Superpowers

- Propriétaire : obra
- Objectif : découverte, planification, mise en œuvre, tests et revue structurés.
- Licence : MIT.
- Lien : https://github.com/obra/superpowers
- Installation : `/plugin install superpowers@claude-plugins-official`
- Sécurité : il s'agit d'un plugin complet. Examiner les skills et hooks avant un travail important.

## GStack

- Propriétaire : Garry Tan et contributeurs
- Objectif : flux intégrés de produit, ingénierie, design, QA, revue et publication.
- Licence : MIT.
- Lien : https://github.com/garrytan/gstack
- Installation : suivre le Quick start actuel du dépôt. Git et Bun sont nécessaires, ainsi que Node.js sous Windows.
- Sécurité : l'installation peut enregistrer des hooks et modifier la configuration. Inspecter son fonctionnement et commencer petit.

## Vercel Agent Skills

- Propriétaire : Vercel Labs
- Objectif : conseils React, Next.js, interfaces web, déploiement et performance.
- Licence : MIT.
- Lien : https://github.com/vercel-labs/agent-skills
- Installation : `npx skills add vercel-labs/agent-skills`
- Sécurité : installer uniquement les skills utiles et inspecter les scripts facultatifs.

## Wshobson Agents

- Propriétaire : Seth Hobson et contributeurs
- Objectif : grande marketplace de plugins, agents, skills et commandes spécialisés.
- Licence : MIT pour le dépôt. Les intégrations externes peuvent avoir leurs propres conditions.
- Lien : https://github.com/wshobson/agents
- Installation : `/plugin marketplace add wshobson/agents`, puis choisir un plugin précis.
- Sécurité : ne pas installer tout le catalogue par défaut. Examiner le plugin choisi et ses intégrations externes.

## Awesome Claude Code

- Propriétaire : catalogue communautaire
- Objectif : découverte de ressources Claude Code.
- Licence : vérifier séparément chaque projet lié.
- Lien : https://github.com/hesreallyhim/awesome-claude-code
- Installation : aucune. Utiliser uniquement pour découvrir des candidats.
- Sécurité : une présence dans le catalogue n'est pas une revue de sécurité. Inspecter la source originale.
