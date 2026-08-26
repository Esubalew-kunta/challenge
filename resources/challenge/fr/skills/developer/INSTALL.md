# Installation

## Installation pour un projet

1. Ouvrez la racine du projet.
2. Copiez le dossier `.claude/skills` inclus dans cette racine.
3. Vérifiez qu'un skill possède maintenant un chemin comme `.claude/skills/safe-change/SKILL.md`.
4. Lancez Claude Code dans le projet. Redémarrez-le si le dossier principal des skills a été créé après le début de la session.
5. Tapez `/skills` et vérifiez que les trois skills Développeur apparaissent.

## Installation pour tous vos projets

Copiez chaque dossier de skill dans `~/.claude/skills/` dans votre dossier personnel. Un chemin personnel doit ressembler à `~/.claude/skills/codebase-mapper/SKILL.md`.

Lancez Claude Code et tapez `/skills` pour vérifier le résultat.

## Ce qui n'est pas nécessaire

Aucun gestionnaire de paquets, marketplace de plugins, compte, script ou service payant n'est nécessaire. Ces skills sont de simples instructions Markdown.

## Retirer un skill

Supprimez uniquement le dossier du skill dans l'emplacement où vous l'avez copié. Vérifiez d'abord le chemin exact pour ne pas retirer d'autres skills.
