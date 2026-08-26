import { test } from "node:test";
import assert from "node:assert/strict";

import {
  EMPTY_PROFILE,
  parseProfile,
  serialiseProfile,
  type ProfileState,
} from "../src/lib/challenge/profile.ts";

test("challenge profile keeps the visitor's goal and selected path", () => {
  const profile: ProfileState = {
    v: 3,
    level: "some",
    role: "technical",
    goal: "build-software",
    path: "builder",
    dismissed: true,
  };

  assert.deepEqual(parseProfile(serialiseProfile(profile)), profile);
});

test("challenge profile derives a safe path when an early v3 value omitted it", () => {
  const raw = JSON.stringify({
    v: 3,
    level: "daily",
    role: "technical",
    goal: "build-software",
    dismissed: false,
  });

  assert.equal(parseProfile(raw).path, "builder");
});

test("challenge profile rejects older or malformed stored data", () => {
  assert.deepEqual(parseProfile(JSON.stringify({ v: 2, level: "daily" })), EMPTY_PROFILE);
  assert.deepEqual(parseProfile("not json"), EMPTY_PROFILE);
});
