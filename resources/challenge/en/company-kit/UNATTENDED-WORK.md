# Safe unattended work checklist

Unattended work is suitable only for bounded, reversible, low risk tasks with reliable verification.

## Before starting

1. Name the exact outcome and maximum scope.
2. Use a clean version controlled workspace.
3. Protect secrets and sensitive data.
4. Allow only the minimum tools and paths.
5. Set time, cost, and iteration limits where available.
6. Define automatic checks and a clear stop condition.
7. Name the human reviewer and next owner.

## Never leave unattended

Publishing, deployment to sensitive production, deletion of material data, payments, permission changes, customer contact, legal commitments, and security incident decisions require human approval.

## After completion

Review the diff, commands, logs, evidence, and remaining risks. Do not accept a success summary without checking the actual result.

If the task leaves scope, fails verification, requests wider permission, or encounters sensitive data, stop and escalate to the named owner.

