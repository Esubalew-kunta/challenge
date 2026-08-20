# Google Search Console access for Claude Code (VPS)

> Gives the agent running on the box read/write access to Search Console for
> `aimakers.fr` — properties, search analytics, URL inspection, sitemaps.
>
> Config lives in `.mcp.json` at the repo root, so any Claude Code session
> started from the deploy checkout picks it up. The credentials file does **not**
> live in the repo.
>
> Server: [`mcp-search-console`](https://pypi.org/project/mcp-search-console/) 0.3.3.

---

## 1. Read this before you start: which property do you actually have?

This decides whether `blogs.aimakers.fr` needs anything at all, and it is the
single most common way this setup wastes an hour.

Search Console has two property types, and the string you pass to every tool
differs:

| Property type | String to use | Covers |
|---|---|---|
| **Domain** | `sc-domain:aimakers.fr` | `aimakers.fr`, `www.`, **`blogs.`**, every subdomain, http + https |
| **URL-prefix** | `https://aimakers.fr/` | That exact prefix only |

**If you have a Domain property, `blogs.aimakers.fr` is already inside it.**
There is no second property to create and nothing separate to configure — you
filter by hostname at query time instead. Check first:

```
Search Console → property dropdown → look at the entry for aimakers.fr
```

A Domain property shows the bare domain with no `https://`. Only if you are on a
URL-prefix property does `blogs.` need its own property added and verified.

**Second thing to know about `blogs.aimakers.fr`:** HANDOVER §9 lists it as
*requested, still dark (no vhost)*. If nothing is served there yet, there is no
crawl data to read regardless of property setup — verification would fail and
the tools would return empty. Confirm it actually resolves before spending time
on it:

```bash
curl -sS -o /dev/null -w '%{http_code}\n' https://blogs.aimakers.fr/
```

---

## 2. Create the service account

**Use a service account, not OAuth.** The server tries OAuth *first* unless told
otherwise (`gsc_server.py`, `get_gsc_service`), and OAuth wants to open a browser
window — which on a headless VPS hangs or fails. `GSC_SKIP_OAUTH=true` in
`.mcp.json` sends it straight to the service-account path. That flag is
load-bearing, not decorative.

1. [Google Cloud Console](https://console.cloud.google.com/) → create or select a
   project.
2. [Enable the Search Console API](https://console.cloud.google.com/apis/library/searchconsole.googleapis.com).
3. Credentials → Create Credentials → **Service Account**.
4. Open it → Keys tab → Add Key → Create new key → **JSON** → download.
5. Note the service account email — it looks like
   `gsc-reader@<project>.iam.gserviceaccount.com`.

The server requests the `https://www.googleapis.com/auth/webmasters` scope, which
is read **and write** (it can submit sitemaps and add/remove properties). If you
only want reads, that is not adjustable from here — grant *Restricted* rather
than *Full* access in step 3 below and let GSC enforce it.

---

## 3. Grant the service account access to the property

This is the step people skip, and nothing works without it. A service account has
no access to your Search Console just because it lives in the same Google Cloud
project.

```
Search Console → Settings → Users and permissions → Add user
  → paste the service account email
  → Full  (or Restricted, if you want read-only)
```

Do this on the `aimakers.fr` property. If you are on URL-prefix properties and
`blogs.` has its own, repeat it there.

---

## 4. Put the key on the box

```bash
sudo mkdir -p /opt/ai-makers/secrets
sudo install -m 600 /path/to/downloaded-key.json \
  /opt/ai-makers/secrets/gsc-service-account.json
sudo chown "$(id -u):$(id -g)" /opt/ai-makers/secrets/gsc-service-account.json
```

The path must match `GSC_CREDENTIALS_PATH` in `.mcp.json` and **must be
absolute** — the server runs from an internal `uv` cache directory, so anything
relative resolves somewhere you don't control. It fails fast with a clear message
if the path is set but missing, which is the good case; a relative path fails
confusingly.

Never put this file in the repo. `.gitignore` blocks the obvious names as a
backstop, but the real rule is that it lives under `/opt/ai-makers/secrets/`.

---

## 5. Install `uv` (provides `uvx`)

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
source "$HOME/.local/bin/env"
echo 'source "$HOME/.local/bin/env"' >> ~/.bashrc
uv --version
```

`uvx` must be on `PATH` for the user that runs Claude Code. If it is not, put the
absolute path (`/root/.local/bin/uvx` or `~/.local/bin/uvx`) in `.mcp.json`'s
`command` instead of the bare name.

The version is pinned to `0.3.3` deliberately. Version 0.3.3 exists because
`mcp` SDK 2.0.0 removed `mcp.server.fastmcp` and broke every fresh install of the
previous release. Floating on latest is how that recurs — bump it on purpose,
not by accident.

---

## 6. Verify

From the deploy checkout (`/opt/ai-makers/apps/website/app`):

```bash
claude mcp list          # expect: gsc — connected
```

Then, in a session, ask for `list_properties`. Expect `aimakers.fr` in the
result. If it comes back empty but connected, step 3 is missing — the server
authenticated fine and Google is correctly reporting that this identity can see
no properties.

Useful first calls, using whichever property string §1 established:

- `get_performance_overview` — sanity check that data is flowing
- `list_sitemaps_enhanced` — confirms `sitemap.xml` is submitted and error-free
- `check_indexing_issues` — the post-Framer migration check that matters most;
  feed it a handful of URLs that had legacy redirects (`next.config.ts` holds
  ~57 of them)

---

## Troubleshooting

| Symptom | Cause |
|---|---|
| Server won't start, `ModuleNotFoundError: mcp.server.fastmcp` | Version floated off 0.3.3 onto something resolving `mcp` 2.x. Re-pin. |
| Hangs on first call, or a browser-login error | `GSC_SKIP_OAUTH` missing or not `"true"` — it tried OAuth first. |
| `FileNotFoundError: GSC_CREDENTIALS_PATH is set to … but the file does not exist` | Path typo, or the file isn't readable by the user running Claude Code. Check the `600` owner. |
| Connected, `list_properties` returns nothing | Service account not added under Users and permissions (§3). |
| `blogs.aimakers.fr` returns no data | Either covered by the Domain property and needs a hostname filter rather than its own property, or the vhost still isn't live (§1). |
| Tools appear but every call 403s | API not enabled on the Cloud project (§2 step 2). |

---

## Note for cloud / CI sessions

`.mcp.json` is committed, so sessions started outside the VPS also try to load
this server. They have no `/opt/ai-makers/secrets/` and the server will fail to
authenticate. That is expected and harmless — the rest of the session is
unaffected. Do not "fix" it by weakening the path or committing a key.
