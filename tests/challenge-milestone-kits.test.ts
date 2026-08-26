import assert from "node:assert/strict";
import test from "node:test";
import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import path from "node:path";

const ROOT = path.join(process.cwd(), "resources", "challenge");

function kitRoot(locale: "en" | "fr", kit: string) {
  return path.join(ROOT, locale, kit);
}

function filesUnder(root: string, current = root): string[] {
  return readdirSync(current).flatMap((name) => {
    const absolute = path.join(current, name);
    return statSync(absolute).isDirectory()
      ? filesUnder(root, absolute)
      : [path.relative(root, absolute).replaceAll("\\", "/")];
  });
}

function content(locale: "en" | "fr", kit: string, file: string) {
  return readFileSync(path.join(kitRoot(locale, kit), file), "utf8");
}

test("Day 10 Starter Kit gives beginners a safe first working system", () => {
  const expectedFiles = [
    ".claude/rules/safe-start.md",
    ".claude/skills/task-clarifier/SKILL.md",
    "CLAUDE-TEMPLATE.md",
    "INSTALL.md",
    "MEMORY-GUIDE.md",
    "SETUP-SCORE.md",
    "SHORTCUTS.md",
    "START-HERE.md",
  ].sort();

  const expected = {
    en: [/15 minutes/i, /CLAUDE\.md/i, /auto memory/i, /\/memory/i, /\/compact/i, /plan mode/i, /score/i],
    fr: [/15 minutes/i, /CLAUDE\.md/i, /mémoire automatique/i, /\/memory/i, /\/compact/i, /mode plan/i, /score/i],
  } as const;

  for (const locale of ["en", "fr"] as const) {
    const root = kitRoot(locale, "starter-kit");
    assert.equal(existsSync(root), true, `${locale} Starter Kit is missing`);
    assert.deepEqual(filesUnder(root).sort(), expectedFiles);

    const joined = expectedFiles.map((file) => content(locale, "starter-kit", file)).join("\n");
    for (const pattern of expected[locale]) assert.match(joined, pattern);

    const skill = content(locale, "starter-kit", ".claude/skills/task-clarifier/SKILL.md");
    assert.match(skill, /^name: task-clarifier$/m);
    assert.match(skill, /^description: .{30,}$/m);
    assert.match(skill, /^disable-model-invocation: true$/m);
    const skillTerms = locale === "en"
      ? [/goal/i, /success/i, /constraints/i]
      : [/objectif/i, /réussite/i, /contraintes/i];
    for (const pattern of skillTerms) assert.match(skill, pattern);

    for (const file of expectedFiles) {
      const readerText = content(locale, "starter-kit", file)
        .split(/\r?\n/)
        .filter((line) => line.trim() !== "---")
        .filter((line) => !/^\s*\|(?:\s*:?-{3,}:?\s*\|)+\s*$/.test(line))
        .join("\n");
      assert.doesNotMatch(readerText, /—/u, `${locale}/${file} contains an em dash`);
      assert.doesNotMatch(readerText, /--/u, `${locale}/${file} contains a double hyphen`);
    }
  }
});

test("Day 20 Workflow Kit turns repeated work into a compounding system", () => {
  const expectedFiles = [
    ".claude/skills/compound-review/SKILL.md",
    "COMPOUNDING-GUIDE.md",
    "CONTEXT-AND-COST.md",
    "DECISION-GUIDE.md",
    "ROUTINE-LOOPS.md",
    "SAFE-CONNECTIONS.md",
    "START-HERE.md",
    "WORKFLOW-REVIEW.md",
    "WORKFLOW-SCORE.md",
  ].sort();

  const expected = {
    en: [/CLAUDE\.md/i, /rule/i, /skill/i, /hook/i, /MCP/i, /plan[\s\S]+build[\s\S]+verify[\s\S]+capture/i, /context/i, /permission/i, /score/i],
    fr: [/CLAUDE\.md/i, /règle/i, /skill/i, /hook/i, /MCP/i, /planifier[\s\S]+construire[\s\S]+vérifier[\s\S]+capitaliser/i, /contexte/i, /permission/i, /score/i],
  } as const;

  for (const locale of ["en", "fr"] as const) {
    const root = kitRoot(locale, "workflow-kit");
    assert.equal(existsSync(root), true, `${locale} Workflow Kit is missing`);
    assert.deepEqual(filesUnder(root).sort(), expectedFiles);

    const joined = expectedFiles.map((file) => content(locale, "workflow-kit", file)).join("\n");
    for (const pattern of expected[locale]) assert.match(joined, pattern);

    const skill = content(locale, "workflow-kit", ".claude/skills/compound-review/SKILL.md");
    assert.match(skill, /^name: compound-review$/m);
    assert.match(skill, /^description: .{30,}$/m);
    assert.match(skill, /^disable-model-invocation: true$/m);
    assert.match(skill, /evidence|preuve/i);
    assert.match(skill, /reus|réutil/i);
  }
});

test("Day 30 Company Kit makes team adoption governed and repeatable", () => {
  const expectedFiles = [
    ".claude/rules/company-safety.md",
    ".claude/skills/team-handoff/SKILL.md",
    "ADOPTION-ROADMAP.md",
    "COMPANY-CLAUDE-TEMPLATE.md",
    "OWNERSHIP-AND-REVIEW.md",
    "SECURITY-CHECKLIST.md",
    "START-HERE.md",
    "TEAM-HANDOFF-TEMPLATE.md",
    "TEAM-ONBOARDING.md",
    "TEAM-SCORE.md",
    "UNATTENDED-WORK.md",
  ].sort();

  const expected = {
    en: [/owner/i, /permission/i, /secret/i, /onboarding/i, /handoff/i, /unattended/i, /review cadence/i, /human approval/i, /score/i],
    fr: [/responsable/i, /permission/i, /secret/i, /intégration/i, /transmission/i, /sans surveillance/i, /rythme de revue/i, /approbation humaine/i, /score/i],
  } as const;

  for (const locale of ["en", "fr"] as const) {
    const root = kitRoot(locale, "company-kit");
    assert.equal(existsSync(root), true, `${locale} Company Kit is missing`);
    assert.deepEqual(filesUnder(root).sort(), expectedFiles);

    const joined = expectedFiles.map((file) => content(locale, "company-kit", file)).join("\n");
    for (const pattern of expected[locale]) assert.match(joined, pattern);

    const skill = content(locale, "company-kit", ".claude/skills/team-handoff/SKILL.md");
    assert.match(skill, /^name: team-handoff$/m);
    assert.match(skill, /^description: .{30,}$/m);
    assert.match(skill, /^disable-model-invocation: true$/m);
    assert.match(skill, /evidence|preuve/i);
    assert.match(skill, /owner|responsable/i);
    assert.match(skill, /risk|risque/i);
  }
});

test("all milestone kits stay bilingual, static, safe, and reader friendly", () => {
  const kits = ["starter-kit", "workflow-kit", "company-kit"];
  const executableExtensions = /\.(?:bat|cmd|exe|js|mjs|cjs|ps1|py|sh|ts)$/i;
  let skillCount = 0;

  for (const kit of kits) {
    const englishFiles = filesUnder(kitRoot("en", kit)).sort();
    const frenchFiles = filesUnder(kitRoot("fr", kit)).sort();
    assert.deepEqual(frenchFiles, englishFiles, `${kit} differs between languages`);

    for (const locale of ["en", "fr"] as const) {
      for (const file of englishFiles) {
        assert.doesNotMatch(file, executableExtensions, `${locale}/${kit}/${file} is executable`);
        const raw = content(locale, kit, file);
        assert.equal(raw.length >= 120, true, `${locale}/${kit}/${file} is too thin`);
        const readerText = raw
          .split(/\r?\n/)
          .filter((line) => line.trim() !== "---")
          .filter((line) => !/^\s*\|(?:\s*:?-{3,}:?\s*\|)+\s*$/.test(line))
          .join("\n");
        assert.doesNotMatch(readerText, /—/u, `${locale}/${kit}/${file} contains an em dash`);
        assert.doesNotMatch(readerText, /--/u, `${locale}/${kit}/${file} contains a double hyphen`);
        if (file.endsWith("SKILL.md")) skillCount += 1;
      }
    }
  }

  assert.equal(skillCount, 6);
});
