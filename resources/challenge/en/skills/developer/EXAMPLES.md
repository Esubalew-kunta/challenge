# Examples

Replace the bracketed details with your own task.

## Beginner

```text
/codebase-mapper I am new to this repository. Map how user sign in works. Show the entry point, main files, data flow, and tests. Do not edit anything.
```

```text
/safe-change Fix the empty state on the orders page. It should show a clear message when there are no orders. Make the smallest change and run the relevant test.
```

```text
/code-reviewer Review my current change for concrete bugs and missing tests. Explain each finding in beginner friendly language.
```

## Builder

```text
/codebase-mapper Trace invoice creation from the API entry point to persistence and notification. Separate confirmed facts from unknowns and identify likely change hotspots.
```

```text
/safe-change Add idempotency to invoice creation without changing the public response shape. Preserve unrelated work, add a failing regression test first, and run the focused suite.
```

```text
/code-reviewer Review the invoice change for concurrency, authorization, data integrity, rollback behavior, and test gaps. Report only evidence based findings with severity and file locations.
```
