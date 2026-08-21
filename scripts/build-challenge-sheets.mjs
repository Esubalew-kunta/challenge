/**
 * Turns each cheat sheet page into a one page A4 PDF.
 *
 * Uses the Chrome or Edge already installed on the machine, in headless mode,
 * rather than pulling in Puppeteer. Puppeteer downloads its own Chromium,
 * about 300 MB, into a repo that does not otherwise need a browser. This
 * script needs no dependency at all and produces the same file.
 *
 * The page itself carries `@page { size: A4; margin: 0 }` and a
 * `print-color-adjust` rule, so the layout and the colours are decided by the
 * page, not by flags here. `--no-pdf-header-footer` is what removes the
 * browser's own "about:blank  1/1" furniture, which is the thing that makes an
 * otherwise finished PDF look like somebody hit Ctrl+P by accident.
 *
 *   npm run dev                       # in another terminal
 *   node scripts/build-challenge-sheets.mjs
 *
 * Output lands in `public/sheets/`, which is also the fallback if a file is
 * ever unreachable in storage.
 */

import { execFileSync } from "node:child_process";
import { existsSync, mkdirSync, statSync } from "node:fs";
import { join, resolve } from "node:path";
import { inspectPdf } from "./lib/pdf-a4.mjs";

const ORIGIN = process.env.SHEETS_ORIGIN ?? "http://localhost:3000";
const OUT_DIR = resolve("public/sheets");

/** Every sheet that has a document written for it. */
const SHEET_IDS = process.argv.slice(2).length
  ? process.argv.slice(2)
  : ["sheet-setup"];

/** First one that exists wins. Chrome and Edge take identical flags here. */
const BROWSERS = [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Google/Chrome/Application/chrome.exe",
  "C:/Program Files/Microsoft/Edge/Application/msedge.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
  "/usr/bin/google-chrome",
  "/usr/bin/chromium",
];

function findBrowser() {
  const found = BROWSERS.find((p) => existsSync(p));
  if (!found) {
    console.error(
      "No Chrome or Edge found. Set one of these paths, or install either:\n  " +
        BROWSERS.join("\n  "),
    );
    process.exit(1);
  }
  return found;
}

/**
 * The page that renders this sheet.
 *
 * The `-fr` suffix on the id is the only thing that decides the language, so
 * there is no second list to keep in step with the first. A French sheet has a
 * French id, a French route, its own PDF and its own row in Supabase.
 */
function urlFor(id) {
  return id.endsWith("-fr")
    ? `${ORIGIN}/challenge-claude-code/fiches/${id}`
    : `${ORIGIN}/en/claude-code-challenge/sheets/${id}`;
}

function build(browser, id) {
  const url = urlFor(id);
  const out = join(OUT_DIR, `${id}.pdf`);

  execFileSync(
    browser,
    [
      "--headless",
      "--disable-gpu",
      // A fixed window width matters: the layout is millimetre based, but a
      // narrow viewport can still trigger a wrap that changes the page count.
      "--window-size=1400,2000",
      "--no-pdf-header-footer",
      "--run-all-compositor-stages-before-draw",
      // The page is static and already rendered, but the logo is a real image
      // request. Without this the PDF can be written before it arrives.
      "--virtual-time-budget=6000",
      `--print-to-pdf=${out}`,
      url,
    ],
    { stdio: "pipe" },
  );

  if (!existsSync(out)) throw new Error(`No file produced for ${id}`);

  // One page, A4, every time. French runs longer than English at equal content,
  // so a sheet that fitted in one language can spill onto a second page in the
  // other, and a two page cheat sheet is not a cheat sheet. This used to be
  // checked by hand, which means it was checked once and never again.
  const { problems } = inspectPdf(out);
  if (problems.length) throw new Error(problems.join("; "));

  return { out, bytes: statSync(out).size };
}

mkdirSync(OUT_DIR, { recursive: true });
const browser = findBrowser();
console.log(`Browser: ${browser}`);
console.log(`Origin:  ${ORIGIN}\n`);

let failed = 0;
for (const id of SHEET_IDS) {
  try {
    const { out, bytes } = build(browser, id);
    console.log(`  ok    ${id}  ${(bytes / 1024).toFixed(0)} KB  ${out}`);
  } catch (error) {
    failed += 1;
    console.error(`  FAIL  ${id}  ${error.message}`);
  }
}

if (failed) {
  console.error(`\n${failed} sheet(s) failed. Is the dev server running?`);
  process.exit(1);
}
console.log(`\n${SHEET_IDS.length} sheet(s) written to public/sheets/`);
