---
name: safe-change
description: Implements the smallest verified code change while protecting unrelated work. Use when fixing a bug, adding a focused feature, or changing behavior in an existing repository.
disable-model-invocation: true
---

# Safe change

Make a narrow change with evidence that the desired behavior works.

## Establish the target

1. State the desired behavior in one sentence.
2. Identify how success will be observed or tested.
3. Read project instructions, relevant code, existing tests, and current working tree state.
4. Present the smallest change plan. Ask for approval if implementation was not already authorized.

## Implement

1. Add or identify a focused test that fails for the missing behavior.
2. Change only the files needed for the smallest change.
3. Preserve unrelated edits and existing interfaces unless the request requires otherwise.
4. Run the relevant tests after the change.
5. If a test fails, diagnose the cause. Do not weaken a valid test to make it pass.

## Report

- Desired behavior and result.
- Files changed and why.
- Relevant tests run and their outcome.
- Remaining risk or unverified assumption.

Do not install packages, change credentials, publish, deploy, or modify unrelated files without clear permission.
