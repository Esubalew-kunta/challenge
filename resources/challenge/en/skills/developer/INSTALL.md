# Install

## Install for one project

1. Open the project root.
2. Copy the included `.claude/skills` folder into that root.
3. Confirm a skill now has a path such as `.claude/skills/safe-change/SKILL.md`.
4. Start Claude Code in the project. Restart it if the top level skills folder was created after the session began.
5. Type `/skills` and confirm the three Developer skills appear.

## Install for all your projects

Copy each individual skill folder into `~/.claude/skills/` in your home folder. A personal path should look like `~/.claude/skills/codebase-mapper/SKILL.md`.

Start Claude Code and type `/skills` to check the result.

## What is not required

No package manager, plugin marketplace, account, script, or paid integration is required. These are plain Markdown instructions.

## Remove a skill

Delete only that skill's folder from the location where you copied it. Review the exact path first so you do not remove other skills.
