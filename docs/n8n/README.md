# n8n, the challenge sheet email

The live workflow is the truth. This folder is a record of how it was designed,
not the thing that runs.

## What runs

**This repository is public. The webhook address is not written down here.**
It has no password on it yet, so anybody who can read the address can make our
Gmail account send mail. It lives in two places only: `.env.local` on the
machine that runs the site, and the Render environment.

| | |
|---|---|
| Name | Send Claude Code challenge sheet (live) |
| Workflow ID | `3djQkxS39TCvKcdb` |
| Where to find it | the n8n workflow list, search the name |
| Webhook | `POST` to the path `claude-code-sheet` on the AI Makers n8n instance |
| Status | Active since 20 August 2026 |
| Sends with | Gmail node, credential `Gmail account 4`, the same one the catalogue, diagnostic and drip emails use |

The site reads that webhook URL from `N8N_SHEET_WEBHOOK_URL`. Empty means no
email is sent and the page still shows the file link, which is the correct
fallback and not a failure.

## What it does

Ten nodes, eight of them doing work.

1. `Lead saved` takes the POST.
2. `Read the request` normalizes the body. Fields are read as `body.x` or `x`,
   so a test call and a real call both work.
3. `Enough to send?` checks there is an address and a link.
4. `Build the email` builds the branded HTML and the subject.
5. `Send the sheet` sends through Gmail, three tries, five seconds apart.
6. Three exits: **200** sent, **400** the body was missing something, **502**
   Gmail refused after all three tries.

Three codes and not one, because a single 500 makes bad input look like an
outage and nobody can tell them apart in a log.

## Why the email is not built with the shared brand renderer

`Subworkflow: Render brand email` is the single source of truth for AI Makers
email styling and every other lead workflow uses it. This one does not, on
purpose:

- It renders `<html lang="fr">` and a French footer
- It always appends a French Cal.com booking button, whatever you pass it
- Its unsubscribe line is French

The course exists in both languages, and the reader's language arrives in the
request as `locale`. The shared renderer cannot honour that: it is French
whatever you pass it, so an English reader would get a French footer and a
French booking button, which is worse than sending them plain text.
`Build the email` uses the same colours, the same card and the same 600 pixel
table, in whichever of the two languages was asked for, with no booking button.

If the brand renderer ever takes a language input, this node should be deleted
and replaced with a call to it. Until then, two templates is the honest cost.

**The email needed no change when the French sheets landed.** It reads
`sheetTitle` from the row the site looked up, and a French reader is looked up
against the `-fr` row, so the French title, the French PDF and the French day
link all follow by themselves. Proved on 21 August 2026: execution `21391`
sent `Votre fiche : La fiche Quel outil` linking to `sheet-which-tool-fr.pdf`.

## One thing the 502 cannot do

n8n Cloud sits behind Cloudflare, and Cloudflare replaces the body of a 5xx
response with its own `error code: 502` page. The status code arrives intact,
so the site can still tell a bad request from a failed send, but the useful
message never reaches the caller. The actual Gmail error is in the workflow's
execution list, which is where anyone debugging it would look anyway.

## The request it expects

```json
{
  "email": "someone@company.com",
  "sheetTitle": "The Setup Sheet",
  "sheetDay": 1,
  "fileUrl": "https://.../sheet-setup.pdf",
  "locale": "en",
  "siteUrl": "https://challenge-nine-ochre.vercel.app"
}
```

`locale` is `en` or `fr` and decides the whole email. `siteUrl` is the address
the reader is actually on, sent rather than configured in n8n so the links
inside the email follow the domain by themselves on the day it moves.

Sent by `src/app/api/challenge-sheet/route.ts`, only after the lead row is
safely written to Supabase.

## Proven on 20 August 2026

- Real send returned `200 {"sent":true,"id":"..."}`, twice: once for a day
  sheet and once for the earned sheet, which take different copy
- Empty body returned `400 validation_error` with the schema in the reply
- An address Gmail refuses returned `502`, and the execution shows the send
  failing and `Respond not sent` running, so the error branch is wired
- All runs are in the workflow's execution list

## Two open points

- **The webhook has no password.** Anyone who learns the address can make our
  Gmail account send any link to any address. The site calls it from the server,
  so a visitor's browser never sees it, and that is the only reason it is safe
  today. The fix is header authentication on the webhook plus a matching header
  from the site. It needs a credential created by hand in n8n. **Until it is
  done, never write the full address into this repository.**
- **An older draft workflow shares the same path.** `Send Claude Code challenge
  sheet`, ID `xfNgeR8uKILUIWA9`, is inactive. Leave it inactive or archive it.
  Two active workflows on `claude-code-sheet` will collide.

## About `claude-code-send-challenge-sheets.json`

The original four node design, written before the n8n connector was reachable.
It was never imported. It used an SMTP node; the instance has no SMTP credential
and every other AI Makers email goes through Gmail, so the live build uses Gmail
instead. Kept for the reasoning in its sticky notes.
