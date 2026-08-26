# Loops and schedules

## First understand the difference

A checklist in `03-Routines/` is a human readable routine. It does not run itself. You or Claude follow it when needed.

Claude Code `/loop` repeats a prompt while the current session remains available. It is session scoped and is best for short monitoring jobs.

Cloud routines, Desktop scheduled tasks, and CI systems are better for work that must continue independently of one open session.

## Beginner example

Keep a deployment check running while you stay in the session:

```text
/loop 5m check whether the deployment finished. Report the status. Do not change or publish anything.
```

Press `Esc` while the loop is waiting to stop the next run.

## Builder example

Use a narrow loop that has a clear stop condition:

```text
/loop 10m check the test run. If it finished, summarize failures and stop. If it is still running, report only the current status.
```

## Safe loop template

```text
/loop [interval] observe [specific target]. Report [specific facts]. Stop when [clear condition]. Ask before changing files, sending messages, publishing, purchasing, or deleting anything.
```

## Choose the right option

- Use a Markdown routine for a checklist a person starts.
- Use `/loop` for short polling inside an active Claude Code session.
- Use a Desktop scheduled task when work needs local files without an open session.
- Use a cloud routine or CI when work must run away from your machine.

Do not use an unattended loop for destructive actions, credentials, payments, or public communication.
