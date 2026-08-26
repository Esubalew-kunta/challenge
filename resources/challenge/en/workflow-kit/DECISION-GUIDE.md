# Choose the right Claude Code tool

Use the smallest tool that solves the repeated problem.

## `CLAUDE.md`

Use it for short project facts and instructions needed in most sessions. Examples include test commands, architecture boundaries, and the definition of done.

## Rule

Use `.claude/rules/` for focused instructions, especially guidance tied to a path or file type. A rule guides behavior but does not guarantee enforcement.

## Skill

Use a skill for a repeatable procedure that needs judgment, a checklist, or reference material. Its full content loads only when used.

## Hook

Use a hook when an action must fire at a specific lifecycle event. Hooks can run commands or other handlers, so inspect and test them before enabling. This kit installs no executable hook.

## MCP connection

Use MCP only when Claude needs data or an action outside the project. Start with the least permission and prefer read only access.

## Quick decision

Needed almost every session: `CLAUDE.md`.

Needed only for certain files: rule.

Repeated thinking workflow: skill.

Deterministic event action: hook.

External system access: MCP.

Official overview: https://code.claude.com/docs/en/features-overview

