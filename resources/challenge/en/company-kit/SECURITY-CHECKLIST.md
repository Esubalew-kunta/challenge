# Company security checklist

Complete this before a pilot and after any major scope change.

## Data

1. Classify the data allowed in the project.
2. Exclude credentials, regulated data, customer secrets, and unnecessary personal data.
3. Confirm retention, logging, and deletion requirements.

## Access and permissions

1. Give each user and connection the minimum required access.
2. Prefer read only access for the first pilot.
3. Keep denial rules stronger than convenience rules.
4. Review project settings and `/permissions` with the security owner.

## External resources

1. Verify owner, source, license, maintenance, and requested permissions.
2. Inspect skills, plugins, hooks, scripts, and MCP servers before use.
3. Test new executable code in an isolated non sensitive environment.

## Human approval

Require it for publishing, deletion, payments, production changes, access changes, customer messages, legal commitments, and sensitive data movement.

## Incident readiness

Record who can revoke access, where activity is reviewed, how an incident is reported, and how affected assets are removed.

