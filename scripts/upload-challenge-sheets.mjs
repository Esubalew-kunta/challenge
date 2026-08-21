/**
 * Uploads the built sheet PDFs to Supabase Storage and records where they went.
 *
 * Run `node scripts/build-challenge-sheets.mjs` first. This script only moves
 * files; it never renders one, so a stale PDF stays stale until it is rebuilt.
 *
 *   node scripts/upload-challenge-sheets.mjs                 # everything built
 *   node scripts/upload-challenge-sheets.mjs sheet-setup-fr  # only these
 *
 * Needs SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local. The service
 * role key bypasses every row level security rule, which is exactly why it is
 * read here, in a script that runs on a developer machine, and never imported
 * into anything that ships to a browser.
 *
 * The bucket is PUBLIC on purpose. A signed URL expires, and an expired link
 * inside an email somebody opens three weeks later is a broken promise with no
 * way to recover. The tradeoff is that the address is guessable, so the file
 * is not really gated. That was already true: the sheet is readable on the
 * site without giving an email, by design. The email buys a copy to keep, not
 * access.
 *
 * Idempotent: uploading the same path again replaces the file, so re-running
 * after a content fix updates what everybody downloads without changing any
 * URL already sitting in an inbox.
 */

import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join, resolve } from "node:path";
import { inspectPdf } from "./lib/pdf-a4.mjs";

const BUCKET = "challenge-sheets";
const PDF_DIR = resolve("public/sheets");

/* ------------------------------------------------------------------ env */

function loadEnvLocal() {
  const path = resolve(".env.local");
  if (!existsSync(path)) return;
  for (const line of readFileSync(path, "utf8").split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq === -1) continue;
    const key = trimmed.slice(0, eq).trim();
    const value = trimmed.slice(eq + 1).trim();
    if (value && !process.env[key]) process.env[key] = value;
  }
}

loadEnvLocal();

const URL_BASE = process.env.SUPABASE_URL?.replace(/\/$/, "");
const KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!URL_BASE || !KEY) {
  console.error(
    "Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY.\n" +
      "Fill both in .env.local. Project Settings > API in the Supabase dashboard.",
  );
  process.exit(1);
}

const auth = {
  apikey: KEY,
  Authorization: `Bearer ${KEY}`,
};

/* --------------------------------------------------------------- bucket */

async function ensureBucket() {
  const res = await fetch(`${URL_BASE}/storage/v1/bucket/${BUCKET}`, {
    headers: auth,
  });
  if (res.ok) return "exists";

  const created = await fetch(`${URL_BASE}/storage/v1/bucket`, {
    method: "POST",
    headers: { ...auth, "Content-Type": "application/json" },
    body: JSON.stringify({
      id: BUCKET,
      name: BUCKET,
      public: true,
      file_size_limit: 10 * 1024 * 1024,
      allowed_mime_types: ["application/pdf"],
    }),
  });
  if (!created.ok) {
    throw new Error(`Could not create bucket: ${created.status} ${await created.text()}`);
  }
  return "created";
}

/* --------------------------------------------------------------- upload */

async function upload(id) {
  const file = join(PDF_DIR, `${id}.pdf`);

  // The last gate before a file reaches a reader. The build script checks the
  // same thing, but a sheet that failed the build stays on disk, and this
  // script uploads every PDF in the folder. Without this, one bad file would
  // go live on the next upload with nobody having asked for it.
  const { problems } = inspectPdf(file);
  if (problems.length) throw new Error(`not one A4 page: ${problems.join("; ")}`);

  const body = readFileSync(file);

  const res = await fetch(`${URL_BASE}/storage/v1/object/${BUCKET}/${id}.pdf`, {
    method: "POST",
    headers: {
      ...auth,
      "Content-Type": "application/pdf",
      // Replace rather than fail, so a corrected sheet reuses its URL and every
      // link already sent stays good.
      "x-upsert": "true",
      // One hour. Long enough to be cheap, short enough that a fix reaches
      // people the same day rather than whenever a CDN feels like it.
      "Cache-Control": "3600",
    },
    body,
  });
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);

  return `${URL_BASE}/storage/v1/object/public/${BUCKET}/${id}.pdf`;
}

/**
 * Points the sheets table at the file that was just uploaded.
 *
 * `return=representation` rather than `return=minimal`, so an update that
 * matched no row can be seen. A PATCH on an id that does not exist is a
 * perfectly successful request that changes nothing, and with `minimal` it
 * reads as a clean upload: the file is in storage, the table still says the
 * sheet has no file, and the page politely tells readers it is not ready yet.
 * That is exactly the shape of bug that survives a launch.
 */
async function recordUrl(id, url) {
  const res = await fetch(
    `${URL_BASE}/rest/v1/claude_code_sheets?id=eq.${encodeURIComponent(id)}&select=id`,
    {
      method: "PATCH",
      headers: {
        ...auth,
        "Content-Type": "application/json",
        Prefer: "return=representation",
      },
      body: JSON.stringify({ file_url: url, updated_at: new Date().toISOString() }),
    },
  );
  if (!res.ok) throw new Error(`${res.status} ${await res.text()}`);

  const rows = await res.json();
  if (!Array.isArray(rows) || rows.length === 0) {
    throw new Error(
      `no row with id "${id}" in claude_code_sheets, so nothing points at the file. ` +
        "Create the row first, then run this again.",
    );
  }
}

/* ----------------------------------------------------------------- main */

if (!existsSync(PDF_DIR)) {
  console.error("No public/sheets folder. Run build-challenge-sheets.mjs first.");
  process.exit(1);
}

const onDisk = readdirSync(PDF_DIR)
  .filter((f) => f.endsWith(".pdf"))
  .map((f) => f.replace(/\.pdf$/, ""));

/*
  Named sheets only, when names are given.

  Without this the script uploads every PDF in the folder, which quietly
  rewrites files and rows that nobody asked to touch. That was harmless while
  there were ten sheets in one language and every run was a full rebuild. It
  stopped being harmless the moment half the folder belonged to a language the
  current change has nothing to do with.
*/
const asked = process.argv.slice(2);
const missing = asked.filter((id) => !onDisk.includes(id));
if (missing.length) {
  console.error(`No PDF built for: ${missing.join(", ")}`);
  process.exit(1);
}

const ids = asked.length ? asked : onDisk;

if (!ids.length) {
  console.error("No PDFs in public/sheets. Run build-challenge-sheets.mjs first.");
  process.exit(1);
}

console.log(`Bucket ${BUCKET}: ${await ensureBucket()}\n`);

let failed = 0;
for (const id of ids) {
  try {
    const url = await upload(id);
    await recordUrl(id, url);
    console.log(`  ok    ${id}\n        ${url}`);
  } catch (error) {
    failed += 1;
    console.error(`  FAIL  ${id}  ${error.message}`);
  }
}

if (failed) process.exit(1);
console.log(`\n${ids.length} sheet(s) uploaded and recorded.`);
