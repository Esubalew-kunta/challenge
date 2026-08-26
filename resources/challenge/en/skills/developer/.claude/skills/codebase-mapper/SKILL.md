---
name: codebase-mapper
description: Maps a codebase into a concise guide grounded in real files and relationships. Use when entering a repository, locating a feature, tracing data flow, or planning where a change belongs.
disable-model-invocation: true
---

# Codebase mapper

Create a read only map that helps the user act without pretending to understand more than the evidence shows.

## Clarify

Ask for the target feature or question if it is missing. Keep the first pass narrow enough to be useful in one review.

## Inspect

1. Read project instructions and the top level documentation.
2. Identify entry points, main modules, configuration, tests, and external boundaries.
3. Trace one representative path from input to output.
4. Record confirmed facts, reasonable inferences, and unknowns separately.

## Deliver

Return these sections:

1. Orientation: purpose, stack, and how the project starts.
2. Code map: important paths and what each owns.
3. Entry points: where requests, jobs, events, or commands begin.
4. Data flow: how information moves and where it changes.
5. Change hotspots: likely files and relevant tests for the user's goal.
6. Unknowns: questions that still require evidence.

Link every important claim to a real path. Do not edit files, install packages, or run a command that changes state.
