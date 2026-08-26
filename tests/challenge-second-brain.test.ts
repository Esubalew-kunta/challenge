import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const REQUIRED_FILES = [
  ".claude/rules/safe-work.md",
  ".claude/skills/weekly-review/SKILL.md",
  "00-Inbox/QUICK-CAPTURE.md",
  "00_Index.md",
  "01-Projects/PROJECT-TEMPLATE.md",
  "02-Resources/RESOURCE-NOTE-TEMPLATE.md",
  "03-Routines/DAILY-RESET.md",
  "03-Routines/LOOPS-AND-SCHEDULES.md",
  "03-Routines/WEEKLY-REVIEW.md",
  "04-Archive/README.md",
  "CLAUDE.md",
  "MEMORY.md",
  "START-HERE.md",
  "VERIFIED-RESOURCES.md",
];

const SOURCE_ROOT = path.join(process.cwd(), "resources", "challenge");

function filesUnder(directory: string, relative = ""): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const nextRelative = path.posix.join(relative, entry.name);
    const nextPath = path.join(directory, entry.name);
    return entry.isDirectory()
      ? filesUnder(nextPath, nextRelative)
      : [nextRelative];
  });
}

function source(locale: "en" | "fr", file: string): string {
  return readFileSync(
    path.join(SOURCE_ROOT, locale, "second-brain", file),
    "utf8",
  );
}

test("Second Brain has the same required files in English and French", () => {
  for (const locale of ["en", "fr"]) {
    const packageRoot = path.join(SOURCE_ROOT, locale, "second-brain");
    assert.equal(existsSync(packageRoot), true, `${locale} package is missing`);
    assert.deepEqual(filesUnder(packageRoot).sort(), REQUIRED_FILES);
  }
});

test("English pack gives a beginner a clear start and accurate memory guidance", () => {
  const start = source("en", "START-HERE.md");
  const memory = source("en", "MEMORY.md");
  const instructions = source("en", "CLAUDE.md");

  assert.match(start, /5 minute setup/i);
  assert.match(start, /00_Index\.md/);
  assert.match(start, /first prompt/i);
  assert.match(start, /Obsidian is optional/i);

  assert.match(memory, /manual notebook/i);
  assert.match(memory, /not Claude Code auto memory/i);
  assert.match(memory, /\/memory/);
  assert.match(memory, /machine local/i);

  assert.match(instructions, /ask before/i);
  assert.match(instructions, /credentials/i);
  assert.match(instructions, /next action/i);
});

test("French pack gives the same clear start and accurate memory guidance", () => {
  const start = source("fr", "START-HERE.md");
  const memory = source("fr", "MEMORY.md");
  const instructions = source("fr", "CLAUDE.md");

  assert.match(start, /installation en 5 minutes/i);
  assert.match(start, /00_Index\.md/);
  assert.match(start, /premier prompt/i);
  assert.match(start, /Obsidian est facultatif/i);

  assert.match(memory, /carnet manuel/i);
  assert.match(memory, /pas la mémoire automatique de Claude Code/i);
  assert.match(memory, /\/memory/);
  assert.match(memory, /local à la machine/i);

  assert.match(instructions, /demander confirmation/i);
  assert.match(instructions, /identifiants/i);
  assert.match(instructions, /prochaine action/i);
});

test("each pack supports capture, projects, reviews, and safe routines", () => {
  const expectations = {
    en: {
      index: [/today's focus/i, /active projects/i, /waiting for/i],
      capture: [/raw note/i, /why it matters/i, /next action/i],
      project: [/desired outcome/i, /success looks like/i, /next action/i],
      resource: [/source/i, /three sentence summary/i, /trust check/i],
      daily: [/7 minute/i, /choose one next action/i, /close the loop/i],
      weekly: [/15 minute/i, /clear the inbox/i, /archive/i],
      loops: [/\/loop 5m/i, /session scoped/i, /press `Esc`/i, /does not run itself/i],
    },
    fr: {
      index: [/priorité du jour/i, /projets actifs/i, /en attente/i],
      capture: [/note brute/i, /pourquoi elle compte/i, /prochaine action/i],
      project: [/résultat attendu/i, /critère de réussite/i, /prochaine action/i],
      resource: [/source/i, /résumé en trois phrases/i, /vérification de confiance/i],
      daily: [/7 minutes/i, /choisir une prochaine action/i, /fermer la boucle/i],
      weekly: [/15 minutes/i, /vider la boîte de réception/i, /archiver/i],
      loops: [/\/loop 5m/i, /limitée à la session/i, /appuyez sur `Esc`/i, /ne s'exécute pas seule/i],
    },
  } as const;

  for (const locale of ["en", "fr"] as const) {
    const expected = expectations[locale];
    const files = {
      index: source(locale, "00_Index.md"),
      capture: source(locale, "00-Inbox/QUICK-CAPTURE.md"),
      project: source(locale, "01-Projects/PROJECT-TEMPLATE.md"),
      resource: source(locale, "02-Resources/RESOURCE-NOTE-TEMPLATE.md"),
      daily: source(locale, "03-Routines/DAILY-RESET.md"),
      weekly: source(locale, "03-Routines/WEEKLY-REVIEW.md"),
      loops: source(locale, "03-Routines/LOOPS-AND-SCHEDULES.md"),
    };

    for (const key of Object.keys(files) as Array<keyof typeof files>) {
      for (const pattern of expected[key]) assert.match(files[key], pattern);
    }
  }
});

test("each pack includes a safe rule and an explicit weekly review skill", () => {
  const expectations = {
    en: {
      rule: [/ask for confirmation/i, /credentials/i, /untrusted/i, /reversible/i],
      skill: [/name: weekly-review/i, /disable-model-invocation: true/i, /workspace health/i, /do not edit/i],
    },
    fr: {
      rule: [/demander une validation/i, /identifiants/i, /non fiable/i, /réversible/i],
      skill: [/name: weekly-review/i, /disable-model-invocation: true/i, /santé de l'espace/i, /ne rien modifier/i],
    },
  } as const;

  for (const locale of ["en", "fr"] as const) {
    const rule = source(locale, ".claude/rules/safe-work.md");
    const skill = source(locale, ".claude/skills/weekly-review/SKILL.md");

    assert.match(skill, /^---\n[\s\S]+\n---\n/);
    for (const pattern of expectations[locale].rule) assert.match(rule, pattern);
    for (const pattern of expectations[locale].skill) assert.match(skill, pattern);
  }
});

test("each pack cites only the approved official sources for its Claude features", () => {
  const approvedUrls = [
    "https://code.claude.com/docs/en/memory",
    "https://code.claude.com/docs/en/scheduled-tasks",
    "https://code.claude.com/docs/en/skills",
  ];

  for (const locale of ["en", "fr"] as const) {
    const guide = source(locale, "VERIFIED-RESOURCES.md");
    const urls = [...guide.matchAll(/https:\/\/[^\s)]+/g)]
      .map((match) => match[0])
      .sort();

    assert.deepEqual(urls, approvedUrls);
    assert.match(guide, /Anthropic/i);
    assert.match(guide, /26 August 2026|26 août 2026/i);
    assert.match(guide, /reviewed on|revue datée/i);
  }
});

test("Second Brain sources are static, safe, and follow reader punctuation rules", () => {
  const unsafeExtensions = /\.(?:bat|cmd|exe|js|ps1|sh)$/i;
  const secretLike = /(?:sk-ant-|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|api[_-]?key\s*[=:]\s*\S+)/i;

  for (const locale of ["en", "fr"] as const) {
    const packageRoot = path.join(SOURCE_ROOT, locale, "second-brain");
    const files = filesUnder(packageRoot);

    assert.equal(files.some((file) => unsafeExtensions.test(file)), false);
    assert.equal(files.some((file) => /(?:^|\/)hooks?(?:\/|$)/i.test(file)), false);

    for (const file of files) {
      const content = source(locale, file);
      const readerText = content
        .split(/\r?\n/)
        .filter((line) => line.trim() !== "---")
        .join("\n");

      assert.equal(content.length >= 80, true, `${locale}/${file} is too thin`);
      assert.equal(readerText.includes("—"), false, `${locale}/${file} has an em dash`);
      assert.equal(readerText.includes("--"), false, `${locale}/${file} has a double hyphen`);
      assert.equal(secretLike.test(content), false, `${locale}/${file} looks like it contains a secret`);
      assert.equal(/^!`/m.test(content), false, `${locale}/${file} executes a shell command`);
    }
  }
});
