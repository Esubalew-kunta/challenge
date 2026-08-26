# Verified resources

Reviewed on 26 August 2026. This is a dated review, not permanent approval. Repositories, licenses, commands, dependencies, and behavior can change.

Before installation, inspect the current source, requested permissions, scripts, hooks, network access, and removal steps. Popularity is not proof of safety. Test new tools in a low risk project first.

## Anthropic Agent Skills

- Owner: Anthropic
- Purpose: official examples, document skills, specification, and templates.
- License: mixed. Many examples use Apache 2.0. Some document skills are source available. Check each folder.
- Link: https://github.com/anthropics/skills
- Installation: add the repository as a Claude Code plugin marketplace, then install only the required skill set.
- Safety: example skills can contain scripts and resources. Inspect the selected skill before use.

## Superpowers

- Owner: obra
- Purpose: structured discovery, planning, implementation, testing, and review workflows.
- License: MIT.
- Link: https://github.com/obra/superpowers
- Installation: `/plugin install superpowers@claude-plugins-official`
- Safety: this is a full workflow plugin. Review its skills and hooks before enabling it in important work.

## GStack

- Owner: Garry Tan and contributors
- Purpose: integrated product, engineering, design, QA, review, and release workflows.
- License: MIT.
- Link: https://github.com/garrytan/gstack
- Installation: follow the current Quick start in the repository. It requires Git and Bun, plus Node.js on Windows.
- Safety: setup can register hooks and edit configuration. Inspect setup behavior and start with a small route.

## Vercel Agent Skills

- Owner: Vercel Labs
- Purpose: React, Next.js, web interface, deployment, and performance guidance.
- License: MIT.
- Link: https://github.com/vercel-labs/agent-skills
- Installation: `npx skills add vercel-labs/agent-skills`
- Safety: install only relevant skills and inspect optional scripts before use.

## Wshobson Agents

- Owner: Seth Hobson and contributors
- Purpose: a large marketplace of specialized plugins, agents, skills, and commands.
- License: MIT for the repository. External integrations can have separate terms.
- Link: https://github.com/wshobson/agents
- Installation: `/plugin marketplace add wshobson/agents`, then choose one specific plugin.
- Safety: do not install the full catalog by default. Review the selected plugin and any external integration.

## Awesome Claude Code

- Owner: community maintained catalog
- Purpose: discovery of Claude Code resources.
- License: check every linked project separately.
- Link: https://github.com/hesreallyhim/awesome-claude-code
- Installation: none. Use it only to discover candidates.
- Safety: a catalog entry is not a security review. Inspect the original source before use.
