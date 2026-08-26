import assert from "node:assert/strict";
import test from "node:test";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";

const ROOT = path.join(
  process.cwd(),
  "public",
  "resources",
  "claude-code-challenge",
);

interface ArchiveRecord {
  id: string;
  locale: "en" | "fr";
  path: string;
  topFolder: string;
  files: string[];
}

interface ResourceManifest {
  version: number;
  reviewDate: string;
  archives: ArchiveRecord[];
}

function zipEntries(file: string): string[] {
  const data = readFileSync(file);
  let end = data.length - 22;
  while (end >= 0 && data.readUInt32LE(end) !== 0x06054b50) end -= 1;
  assert.notEqual(end, -1, `${file} has no ZIP end record`);

  const count = data.readUInt16LE(end + 10);
  let offset = data.readUInt32LE(end + 16);
  const entries: string[] = [];

  for (let index = 0; index < count; index += 1) {
    assert.equal(data.readUInt32LE(offset), 0x02014b50, `${file} has a broken directory`);
    const nameLength = data.readUInt16LE(offset + 28);
    const extraLength = data.readUInt16LE(offset + 30);
    const commentLength = data.readUInt16LE(offset + 32);
    entries.push(data.subarray(offset + 46, offset + 46 + nameLength).toString("utf8"));
    offset += 46 + nameLength + extraLength + commentLength;
  }

  return entries.map((entry) => entry.replaceAll("\\", "/"));
}

test("the resource build publishes exactly 18 localized ZIP archives", () => {
  const manifestPath = path.join(ROOT, "manifest.json");
  assert.equal(existsSync(manifestPath), true, "resource manifest is missing");
  const manifest = JSON.parse(readFileSync(manifestPath, "utf8")) as ResourceManifest;

  const expected = [
    "en/company-kit.zip",
    "en/second-brain.zip",
    "en/skills/consultant-skills.zip",
    "en/skills/developer-skills.zip",
    "en/skills/founder-skills.zip",
    "en/skills/marketing-skills.zip",
    "en/skills/operations-skills.zip",
    "en/starter-kit.zip",
    "en/workflow-kit.zip",
    "fr/company-kit.zip",
    "fr/second-brain.zip",
    "fr/skills/consultant-skills.zip",
    "fr/skills/developer-skills.zip",
    "fr/skills/founder-skills.zip",
    "fr/skills/marketing-skills.zip",
    "fr/skills/operations-skills.zip",
    "fr/starter-kit.zip",
    "fr/workflow-kit.zip",
  ];

  assert.equal(manifest.version, 1);
  assert.equal(manifest.reviewDate, "2026-08-26");
  assert.deepEqual(manifest.archives.map((archive) => archive.path).sort(), expected);
});

test("every archive opens with one safe root and its promised resources", () => {
  const manifest = JSON.parse(
    readFileSync(path.join(ROOT, "manifest.json"), "utf8"),
  ) as ResourceManifest;
  const executable = /\.(?:bat|cmd|com|dll|exe|js|mjs|cjs|ps1|py|sh|ts)$/i;

  for (const archive of manifest.archives) {
    const archivePath = path.join(ROOT, ...archive.path.split("/"));
    assert.equal(existsSync(archivePath), true, `${archive.path} is missing`);
    const entries = zipEntries(archivePath).filter((entry) => !entry.endsWith("/"));

    assert.deepEqual(entries.sort(), archive.files.sort(), `${archive.path} differs from manifest`);
    assert.equal(entries.every((entry) => entry.startsWith(`${archive.topFolder}/`)), true);
    assert.equal(entries.some((entry) => entry.endsWith("/START-HERE.md")), true);
    assert.equal(entries.some((entry) => entry.endsWith("/VERIFIED-RESOURCES.md")), true);
    for (const entry of entries) assert.doesNotMatch(entry, executable);

    if (archive.id.endsWith("skills")) {
      assert.equal(entries.filter((entry) => entry.endsWith("/SKILL.md")).length, 3);
    }

    if (["starter-kit", "workflow-kit", "company-kit"].includes(archive.id)) {
      assert.equal(entries.some((entry) => entry.endsWith("/QUICK-GUIDE.pdf")), true);
    }
  }
});

test("milestone archives include the approved localized worksheet PDFs", () => {
  const manifest = JSON.parse(
    readFileSync(path.join(ROOT, "manifest.json"), "utf8"),
  ) as ResourceManifest;
  const names = {
    "starter-kit": ["sheet-setup", "sheet-which-tool", "sheet-hooks", "sheet-manager"],
    "workflow-kit": ["sheet-context", "sheet-skills", "sheet-connections"],
    "company-kit": ["sheet-unattended", "sheet-instructions", "sheet-complete-guide", "sheet-team"],
  } as const;

  for (const archive of manifest.archives) {
    if (!(archive.id in names)) continue;
    const suffix = archive.locale === "fr" ? "-fr" : "";
    for (const name of names[archive.id as keyof typeof names]) {
      assert.equal(
        archive.files.some((file) => file.endsWith(`/PDF-GUIDES/${name}${suffix}.pdf`)),
        true,
        `${archive.path} is missing ${name}${suffix}.pdf`,
      );
    }
  }
});
