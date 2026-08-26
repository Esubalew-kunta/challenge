import { test } from "node:test";
import assert from "node:assert/strict";

import { costJobsFor } from "../src/lib/challenge/cost-jobs.ts";
import {
  EMPTY_PROFILE,
  parseProfile,
  roleOptionsFor,
  serialiseProfile,
  type ProfileState,
} from "../src/lib/challenge/profile.ts";

test("challenge offers the five approved resource categories in both languages", () => {
  assert.deepEqual(
    roleOptionsFor("en").map(({ id, label }) => [id, label]),
    [
      ["developer", "Developer"],
      ["consultant", "Consultant"],
      ["operations", "Operations"],
      ["founder", "Founder"],
      ["marketing", "Marketing"],
    ],
  );
  assert.deepEqual(
    roleOptionsFor("fr").map(({ id, label }) => [id, label]),
    [
      ["developer", "Développeur"],
      ["consultant", "Consultant"],
      ["operations", "Opérations"],
      ["founder", "Fondateur"],
      ["marketing", "Marketing"],
    ],
  );
});

test("challenge profile keeps the visitor's goal and selected path", () => {
  const profile: ProfileState = {
    v: 4,
    level: "some",
    role: "developer",
    goal: "build-software",
    path: "builder",
    dismissed: true,
  };

  assert.deepEqual(parseProfile(serialiseProfile(profile)), profile);
});

test("challenge profile derives a safe path when an early v4 value omitted it", () => {
  const raw = JSON.stringify({
    v: 4,
    level: "daily",
    role: "developer",
    goal: "build-software",
    dismissed: false,
  });

  assert.equal(parseProfile(raw).path, "builder");
});

test("challenge profile rejects older or malformed stored data", () => {
  assert.deepEqual(parseProfile(JSON.stringify({ v: 3, level: "daily" })), EMPTY_PROFILE);
  assert.deepEqual(parseProfile("not json"), EMPTY_PROFILE);
});

test("resource categories keep the Day 6 calculator relevant", () => {
  assert.equal(costJobsFor("en", "developer")[0]?.id, "explainBug");
  assert.equal(costJobsFor("en", "consultant")[0]?.id, "pipelineUpdate");
  assert.equal(costJobsFor("en", "operations")[0]?.id, "teamUpdate");
  assert.equal(costJobsFor("en", "founder")[0]?.id, "weeklyUpdate");
  assert.equal(costJobsFor("en", "marketing")[0]?.id, "perfReport");
});
