import { test } from "node:test";
import assert from "node:assert/strict";

import {
  milestoneResourceForDay,
  skillsPackFor,
} from "../src/lib/challenge/resources.ts";
import { DAYS } from "../src/lib/challenge/index.ts";
import { DAYS_FR } from "../src/lib/challenge/index.fr.ts";

test("Day 2 resolves to the English Second Brain download", () => {
  assert.deepEqual(milestoneResourceForDay(2, "en"), {
    id: "second-brain",
    day: 2,
    title: "Second Brain Workspace",
    path: "/resources/claude-code-challenge/en/second-brain.zip",
  });
  assert.equal(milestoneResourceForDay(3, "en"), undefined);
});

test("all milestone resources have matching English and French identities", () => {
  const expected = [
    [2, "second-brain", "Second Brain Workspace", "Espace Second Brain"],
    [10, "starter-kit", "Claude Code Starter Kit", "Kit de démarrage Claude Code"],
    [20, "workflow-kit", "Claude Code Workflow Kit", "Kit de workflows Claude Code"],
    [30, "company-kit", "Company Claude Kit", "Kit Claude pour l’entreprise"],
  ] as const;

  for (const [day, id, titleEn, titleFr] of expected) {
    assert.deepEqual(milestoneResourceForDay(day, "en"), {
      id,
      day,
      title: titleEn,
      path: `/resources/claude-code-challenge/en/${id}.zip`,
    });
    assert.deepEqual(milestoneResourceForDay(day, "fr"), {
      id,
      day,
      title: titleFr,
      path: `/resources/claude-code-challenge/fr/${id}.zip`,
    });
  }
});

test("each visitor category resolves to its own English and French Skills Pack", () => {
  const expected = [
    ["developer", "Developer Skills Pack", "Pack de skills Développeur"],
    ["consultant", "Consultant Skills Pack", "Pack de skills Consultant"],
    ["operations", "Operations Skills Pack", "Pack de skills Opérations"],
    ["founder", "Founder Skills Pack", "Pack de skills Fondateur"],
    ["marketing", "Marketing Skills Pack", "Pack de skills Marketing"],
  ] as const;

  for (const [category, titleEn, titleFr] of expected) {
    assert.deepEqual(skillsPackFor(category, "en"), {
      id: `${category}-skills`,
      category,
      title: titleEn,
      path: `/resources/claude-code-challenge/en/skills/${category}-skills.zip`,
    });
    assert.deepEqual(skillsPackFor(category, "fr"), {
      id: `${category}-skills`,
      category,
      title: titleFr,
      path: `/resources/claude-code-challenge/fr/skills/${category}-skills.zip`,
    });
  }
});

test("English and French lessons offer resources on the same four days", () => {
  const expected = [
    [2, "second-brain"],
    [10, "starter-kit"],
    [20, "workflow-kit"],
    [30, "company-kit"],
  ];

  for (const days of [DAYS, DAYS_FR]) {
    assert.deepEqual(
      days
        .filter((day) => day.resource)
        .map((day) => [day.day, day.resource?.id]),
      expected,
    );
  }
});
