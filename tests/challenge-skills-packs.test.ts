import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";

const SOURCE_ROOT = path.join(process.cwd(), "resources", "challenge");

function packRoot(locale: "en" | "fr", category: string): string {
  return path.join(SOURCE_ROOT, locale, "skills", category);
}

function filesUnder(directory: string, relative = ""): string[] {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const nextRelative = path.posix.join(relative, entry.name);
    const nextPath = path.join(directory, entry.name);
    return entry.isDirectory()
      ? filesUnder(nextPath, nextRelative)
      : [nextRelative];
  });
}

function source(locale: "en" | "fr", category: string, file: string): string {
  return readFileSync(path.join(packRoot(locale, category), file), "utf8");
}

function skill(locale: "en" | "fr", category: string, name: string): string {
  return source(locale, category, `.claude/skills/${name}/SKILL.md`);
}

function assertSkillMetadata(
  content: string,
  locale: "en" | "fr",
  name: string,
): void {
  assert.match(content, new RegExp(`^---\\nname: ${name}\\n`));
  assert.match(
    content,
    locale === "en"
      ? /description: .+ Use when .+/i
      : /description: .+ À utiliser (?:lorsque |lorsqu'|pour ).+/i,
  );
  assert.match(content, /disable-model-invocation: true/);
  assert.equal(content.split(/\r?\n/).length <= 100, true);
}

test("Developer pack has the same required files in English and French", () => {
  const expected = [
    ".claude/skills/code-reviewer/SKILL.md",
    ".claude/skills/codebase-mapper/SKILL.md",
    ".claude/skills/safe-change/SKILL.md",
    "EXAMPLES.md",
    "INSTALL.md",
    "RECOMMENDED-RESOURCES.md",
    "START-HERE.md",
    "TIPS.md",
  ];

  for (const locale of ["en", "fr"] as const) {
    const root = packRoot(locale, "developer");
    assert.equal(existsSync(root), true, `${locale} Developer pack is missing`);
    assert.deepEqual(filesUnder(root).sort(), expected);
  }
});

test("Developer skills map, change, and review code with clear safety boundaries", () => {
  const expected = {
    en: {
      "codebase-mapper": [/entry points/i, /data flow/i, /unknowns/i, /do not edit/i],
      "safe-change": [/desired behavior/i, /smallest change/i, /relevant tests/i, /unrelated/i],
      "code-reviewer": [/correctness/i, /security/i, /regression/i, /severity/i, /evidence/i],
    },
    fr: {
      "codebase-mapper": [/points d'entrée/i, /flux de données/i, /inconnues/i, /ne modifier aucun fichier/i],
      "safe-change": [/comportement attendu/i, /plus petite modification/i, /tests pertinents/i, /sans rapport/i],
      "code-reviewer": [/exactitude/i, /sécurité/i, /régression/i, /gravité/i, /preuve/i],
    },
  } as const;

  for (const locale of ["en", "fr"] as const) {
    for (const name of ["codebase-mapper", "safe-change", "code-reviewer"] as const) {
      const content = skill(locale, "developer", name);
      assertSkillMetadata(content, locale, name);
      for (const pattern of expected[locale][name]) assert.match(content, pattern);
    }
  }
});

test("Developer guides make installation, first use, and improvement easy", () => {
  const expected = {
    en: {
      start: [/choose one/i, /codebase-mapper/i, /safe-change/i, /code-reviewer/i],
      install: [/\.claude\/skills/i, /~\/\.claude\/skills/i, /\/skills/i, /no package manager/i],
      examples: [/beginner/i, /builder/i, /\/codebase-mapper/i, /\/safe-change/i, /\/code-reviewer/i],
      tips: [/compound/i, /second time/i, /CLAUDE\.md/i, /one change at a time/i],
    },
    fr: {
      start: [/choisissez/i, /codebase-mapper/i, /safe-change/i, /code-reviewer/i],
      install: [/\.claude\/skills/i, /~\/\.claude\/skills/i, /\/skills/i, /aucun gestionnaire de paquets/i],
      examples: [/débutant/i, /builder/i, /\/codebase-mapper/i, /\/safe-change/i, /\/code-reviewer/i],
      tips: [/capitaliser/i, /deuxième fois/i, /CLAUDE\.md/i, /un seul changement à la fois/i],
    },
  } as const;

  for (const locale of ["en", "fr"] as const) {
    const files = {
      start: source(locale, "developer", "START-HERE.md"),
      install: source(locale, "developer", "INSTALL.md"),
      examples: source(locale, "developer", "EXAMPLES.md"),
      tips: source(locale, "developer", "TIPS.md"),
    };

    for (const key of Object.keys(files) as Array<keyof typeof files>) {
      for (const pattern of expected[locale][key]) assert.match(files[key], pattern);
    }
  }
});

test("Consultant pack turns discovery into scoped proposals and owned actions", () => {
  const names = [
    "discovery-brief",
    "proposal-builder",
    "meeting-to-action-plan",
  ] as const;
  const expectedFiles = [
    ...names.map((name) => `.claude/skills/${name}/SKILL.md`),
    "EXAMPLES.md",
    "INSTALL.md",
    "RECOMMENDED-RESOURCES.md",
    "START-HERE.md",
    "TIPS.md",
  ].sort();
  const expected = {
    en: {
      "discovery-brief": [/current state/i, /pain points/i, /stakeholders/i, /evidence/i, /unknowns/i],
      "proposal-builder": [/client outcome/i, /scope/i, /deliverables/i, /assumptions/i, /exclusions/i],
      "meeting-to-action-plan": [/decisions/i, /owner/i, /due date/i, /open questions/i, /agreed/i],
      guides: [/beginner/i, /builder/i, /\.claude\/skills/i, /compound/i],
    },
    fr: {
      "discovery-brief": [/situation actuelle/i, /problèmes/i, /parties prenantes/i, /preuves/i, /inconnues/i],
      "proposal-builder": [/résultat client/i, /périmètre/i, /livrables/i, /hypothèses/i, /exclusions/i],
      "meeting-to-action-plan": [/décisions/i, /responsable/i, /échéance/i, /questions ouvertes/i, /validé/i],
      guides: [/débutant/i, /builder/i, /\.claude\/skills/i, /capitaliser/i],
    },
  } as const;

  for (const locale of ["en", "fr"] as const) {
    const root = packRoot(locale, "consultant");
    assert.equal(existsSync(root), true, `${locale} Consultant pack is missing`);
    assert.deepEqual(filesUnder(root).sort(), expectedFiles);

    for (const name of names) {
      const content = skill(locale, "consultant", name);
      assertSkillMetadata(content, locale, name);
      for (const pattern of expected[locale][name]) assert.match(content, pattern);
    }

    const guides = ["START-HERE.md", "INSTALL.md", "EXAMPLES.md", "TIPS.md"]
      .map((file) => source(locale, "consultant", file))
      .join("\n");
    for (const pattern of expected[locale].guides) assert.match(guides, pattern);
  }
});

test("Operations pack documents, audits, and reports processes with evidence", () => {
  const names = [
    "sop-builder",
    "process-auditor",
    "weekly-operations-report",
  ] as const;
  const expectedFiles = [
    ...names.map((name) => `.claude/skills/${name}/SKILL.md`),
    "EXAMPLES.md",
    "INSTALL.md",
    "RECOMMENDED-RESOURCES.md",
    "START-HERE.md",
    "TIPS.md",
  ].sort();
  const expected = {
    en: {
      "sop-builder": [/owner/i, /inputs/i, /decision points/i, /exceptions/i, /evidence/i],
      "process-auditor": [/current process/i, /bottlenecks/i, /failure modes/i, /controls/i, /priority/i],
      "weekly-operations-report": [/service health/i, /incidents/i, /risks/i, /decisions needed/i, /next week/i],
      guides: [/beginner/i, /builder/i, /\.claude\/skills/i, /compound/i],
    },
    fr: {
      "sop-builder": [/responsable/i, /entrées/i, /points de décision/i, /exceptions/i, /preuve/i],
      "process-auditor": [/processus actuel/i, /goulots/i, /modes de défaillance/i, /contrôles/i, /priorité/i],
      "weekly-operations-report": [/santé du service/i, /incidents/i, /risques/i, /décisions nécessaires/i, /semaine suivante/i],
      guides: [/débutant/i, /builder/i, /\.claude\/skills/i, /capitaliser/i],
    },
  } as const;

  for (const locale of ["en", "fr"] as const) {
    const root = packRoot(locale, "operations");
    assert.equal(existsSync(root), true, `${locale} Operations pack is missing`);
    assert.deepEqual(filesUnder(root).sort(), expectedFiles);

    for (const name of names) {
      const content = skill(locale, "operations", name);
      assertSkillMetadata(content, locale, name);
      for (const pattern of expected[locale][name]) assert.match(content, pattern);
    }

    const guides = ["START-HERE.md", "INSTALL.md", "EXAMPLES.md", "TIPS.md"]
      .map((file) => source(locale, "operations", file))
      .join("\n");
    for (const pattern of expected[locale].guides) assert.match(guides, pattern);
  }
});

test("Founder pack validates demand, sharpens decisions, and resets priorities", () => {
  const names = [
    "idea-validator",
    "decision-memo",
    "founder-weekly-review",
  ] as const;
  const expectedFiles = [
    ...names.map((name) => `.claude/skills/${name}/SKILL.md`),
    "EXAMPLES.md",
    "INSTALL.md",
    "RECOMMENDED-RESOURCES.md",
    "START-HERE.md",
    "TIPS.md",
  ].sort();
  const expected = {
    en: {
      "idea-validator": [/target user/i, /painful problem/i, /evidence/i, /riskiest assumptions/i, /experiment/i],
      "decision-memo": [/decision/i, /options/i, /criteria/i, /tradeoffs/i, /reversible/i],
      "founder-weekly-review": [/company health/i, /customer signals/i, /risks/i, /decisions/i, /next week/i],
      guides: [/beginner/i, /builder/i, /\.claude\/skills/i, /compound/i],
    },
    fr: {
      "idea-validator": [/utilisateur cible/i, /problème douloureux/i, /preuves/i, /hypothèses les plus risquées/i, /expérimentation/i],
      "decision-memo": [/décision/i, /options/i, /critères/i, /compromis/i, /réversible/i],
      "founder-weekly-review": [/santé de l'entreprise/i, /signaux clients/i, /risques/i, /décisions/i, /semaine suivante/i],
      guides: [/débutant/i, /builder/i, /\.claude\/skills/i, /capitaliser/i],
    },
  } as const;

  for (const locale of ["en", "fr"] as const) {
    const root = packRoot(locale, "founder");
    assert.equal(existsSync(root), true, `${locale} Founder pack is missing`);
    assert.deepEqual(filesUnder(root).sort(), expectedFiles);

    for (const name of names) {
      const content = skill(locale, "founder", name);
      assertSkillMetadata(content, locale, name);
      for (const pattern of expected[locale][name]) assert.match(content, pattern);
    }

    const guides = ["START-HERE.md", "INSTALL.md", "EXAMPLES.md", "TIPS.md"]
      .map((file) => source(locale, "founder", file))
      .join("\n");
    for (const pattern of expected[locale].guides) assert.match(guides, pattern);
  }
});

test("Marketing pack plans, repurposes, and reviews work without inventing claims", () => {
  const names = [
    "campaign-brief",
    "content-repurposer",
    "performance-review",
  ] as const;
  const expectedFiles = [
    ...names.map((name) => `.claude/skills/${name}/SKILL.md`),
    "EXAMPLES.md",
    "INSTALL.md",
    "RECOMMENDED-RESOURCES.md",
    "START-HERE.md",
    "TIPS.md",
  ].sort();
  const expected = {
    en: {
      "campaign-brief": [/audience/i, /objective/i, /offer/i, /message/i, /success measures/i],
      "content-repurposer": [/source truth/i, /channel/i, /preserve/i, /call to action/i, /invent/i],
      "performance-review": [/target/i, /actual/i, /attribution/i, /data gaps/i, /next experiment/i],
      guides: [/beginner/i, /builder/i, /\.claude\/skills/i, /compound/i],
    },
    fr: {
      "campaign-brief": [/public/i, /objectif/i, /offre/i, /message/i, /mesures de réussite/i],
      "content-repurposer": [/source de vérité/i, /canal/i, /préserver/i, /appel à l'action/i, /inventer/i],
      "performance-review": [/cible/i, /résultat réel/i, /attribution/i, /données manquantes/i, /prochaine expérimentation/i],
      guides: [/débutant/i, /builder/i, /\.claude\/skills/i, /capitaliser/i],
    },
  } as const;

  for (const locale of ["en", "fr"] as const) {
    const root = packRoot(locale, "marketing");
    assert.equal(existsSync(root), true, `${locale} Marketing pack is missing`);
    assert.deepEqual(filesUnder(root).sort(), expectedFiles);

    for (const name of names) {
      const content = skill(locale, "marketing", name);
      assertSkillMetadata(content, locale, name);
      for (const pattern of expected[locale][name]) assert.match(content, pattern);
    }

    const guides = ["START-HERE.md", "INSTALL.md", "EXAMPLES.md", "TIPS.md"]
      .map((file) => source(locale, "marketing", file))
      .join("\n");
    for (const pattern of expected[locale].guides) assert.match(guides, pattern);
  }
});

test("trusted guides are reviewed and recommendations stay category specific", () => {
  const approvedUrls = [
    "https://github.com/anthropics/skills",
    "https://github.com/garrytan/gstack",
    "https://github.com/hesreallyhim/awesome-claude-code",
    "https://github.com/obra/superpowers",
    "https://github.com/vercel-labs/agent-skills",
    "https://github.com/wshobson/agents",
  ];
  const recommendations = {
    developer: [/plan-eng-review/i, /code review/i, /React best practices/i],
    consultant: [/office-hours/i, /design consultation/i, /document/i],
    operations: [/guard/i, /health/i, /investigation/i],
    founder: [/office-hours/i, /CEO review/i, /writing guidelines/i],
    marketing: [/design consultation/i, /design review/i, /web design guidelines/i],
  } as const;

  for (const locale of ["en", "fr"] as const) {
    const sharedGuide = readFileSync(
      path.join(SOURCE_ROOT, locale, "shared", "VERIFIED-RESOURCES.md"),
      "utf8",
    );
    const urls = [...sharedGuide.matchAll(/https:\/\/[^\s)]+/g)]
      .map((match) => match[0])
      .sort();

    assert.deepEqual(urls, approvedUrls);
    assert.match(sharedGuide, /26 August 2026|26 août 2026/i);
    assert.match(sharedGuide, /not permanent|pas permanente/i);
    assert.match(sharedGuide, /inspect|inspecter/i);

    for (const category of Object.keys(recommendations) as Array<keyof typeof recommendations>) {
      const guide = source(locale, category, "RECOMMENDED-RESOURCES.md");
      for (const pattern of recommendations[category]) assert.match(guide, pattern);
    }
  }
});

test("all category packs are isolated, static, safe, and reader friendly", () => {
  const categories = [
    "developer",
    "consultant",
    "operations",
    "founder",
    "marketing",
  ] as const;
  const unsafeExtension = /\.(?:bat|cmd|exe|js|ps1|sh)$/i;
  const secretLike = /(?:sk-ant-|BEGIN (?:RSA |OPENSSH )?PRIVATE KEY|api[_-]?key\s*[=:]\s*\S+)/i;
  let skillCount = 0;

  for (const locale of ["en", "fr"] as const) {
    for (const category of categories) {
      const root = packRoot(locale, category);
      const files = filesUnder(root);
      const skillFiles = files.filter((file) => file.endsWith("/SKILL.md"));

      assert.equal(files.length, 8, `${locale}/${category} has unexpected files`);
      assert.equal(skillFiles.length, 3, `${locale}/${category} must have three skills`);
      assert.equal(files.some((file) => unsafeExtension.test(file)), false);
      assert.equal(files.some((file) => /(?:^|\/)hooks?(?:\/|$)/i.test(file)), false);
      skillCount += skillFiles.length;

      for (const file of files) {
        const content = source(locale, category, file);
        const readerText = content
          .split(/\r?\n/)
          .filter((line) => line.trim() !== "---")
          .join("\n");

        assert.equal(content.length >= 80, true, `${locale}/${category}/${file} is too thin`);
        assert.equal(readerText.includes("—"), false, `${locale}/${category}/${file} has an em dash`);
        assert.equal(readerText.includes("--"), false, `${locale}/${category}/${file} has a double hyphen`);
        assert.equal(secretLike.test(content), false, `${locale}/${category}/${file} looks like it contains a secret`);
        assert.equal(/^!`/m.test(content), false, `${locale}/${category}/${file} executes a shell command`);
      }
    }
  }

  assert.equal(skillCount, 30);
});
