/**
 * Is this PDF exactly one A4 page?
 *
 * Shared by the build script and the upload script on purpose. The build is
 * where a bad sheet is caught, but the upload is what actually reaches a
 * reader, so the gate has to sit on both. A file that failed the build stays on
 * disk to be looked at, and `upload-challenge-sheets.mjs` uploads every PDF in
 * the folder, so without this second check a two page sheet would quietly go
 * live on the next upload.
 *
 * `/Type /Page` is counted rather than parsed. A real PDF parser would be more
 * correct and would also be a dependency this repository does not otherwise
 * need. The negative lookahead is what stops `/Type /Pages`, the node holding
 * the page list, being counted as a page of its own.
 */

import { readFileSync } from "node:fs";

/** A4 in PDF points, and how far off we tolerate. */
export const A4_PT = { width: 595.28, height: 841.89, tolerance: 2 };

export function inspectPdf(file) {
  const raw = readFileSync(file, "latin1");

  const pages = (raw.match(/\/Type\s*\/Page(?![s])/g) ?? []).length;

  const box = /\/MediaBox\s*\[\s*0\s+0\s+([\d.]+)\s+([\d.]+)\s*\]/.exec(raw);
  const width = box ? Number(box[1]) : 0;
  const height = box ? Number(box[2]) : 0;

  const isA4 =
    Math.abs(width - A4_PT.width) <= A4_PT.tolerance &&
    Math.abs(height - A4_PT.height) <= A4_PT.tolerance;

  const problems = [];
  if (pages !== 1) problems.push(`${pages} pages, expected exactly 1`);
  if (!isA4) {
    problems.push(
      box
        ? `page is ${width} by ${height} pt, expected A4 (${A4_PT.width} by ${A4_PT.height})`
        : "no page size found in the file",
    );
  }

  return { pages, width, height, problems };
}
