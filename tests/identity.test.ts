/**
 * Tests du socle d'identité (`src/lib/schemas/identity.ts`).
 *
 * Premier test automatisé du dépôt. Volontairement sans framework : `node --test`
 * suffit, et installer Jest ou Vitest pour valider trois fonctions pures
 * coûterait plus cher que ce que ça rapporte.
 *
 *   npm test
 *
 * Ce qui est testé ici est exactement ce qui a déjà cassé en production : une
 * liste de domaines divergente, un refus qui affiche deux messages à la fois, et
 * un numéro de téléphone étranger refusé par un masque trop strict.
 */
import { test } from "node:test";
import assert from "node:assert/strict";

import {
  companyEmail,
  fullName,
  phone,
  identitySchema,
  isFreeEmailProvider,
  isDisposableEmailProvider,
  normalisePhone,
  firstNameOf,
  FREE_EMAIL_MESSAGE,
  DISPOSABLE_EMAIL_MESSAGE,
  FREE_EMAIL_PROVIDERS,
} from "../src/lib/schemas/identity.ts";

test("companyEmail accepte une adresse d'entreprise", () => {
  for (const ok of [
    "othmane@aimakers.fr",
    "contact@gepromed.ma",
    "j.dupont@cabinet-conseil.co.uk",
  ]) {
    assert.equal(companyEmail.safeParse(ok).success, true, ok);
  }
});

test("companyEmail refuse les fournisseurs grand public", () => {
  for (const bad of [
    "moi@gmail.com",
    "moi@GMAIL.COM", // insensible à la casse
    "moi@orange.fr",
    "moi@icloud.com", // absent de l'ancienne liste du diagnostic
    "moi@menara.ma",
  ]) {
    const r = companyEmail.safeParse(bad);
    assert.equal(r.success, false, bad);
    assert.equal(r.error?.issues[0]?.message, FREE_EMAIL_MESSAGE, bad);
  }
});

test("companyEmail refuse les adresses jetables avec son propre message", () => {
  const r = companyEmail.safeParse("moi@yopmail.com");
  assert.equal(r.success, false);
  assert.equal(r.error?.issues[0]?.message, DISPOSABLE_EMAIL_MESSAGE);
});

test("une adresse mal formée ne produit QU'UN message", () => {
  // Régression : un refine s'exécute même après un échec de format. Sans le
  // garde-fou du superRefine, « Email invalide » et « Adresse personnelle »
  // s'affichaient tous les deux.
  const r = companyEmail.safeParse("pas-une-adresse");
  assert.equal(r.success, false);
  assert.equal(r.error?.issues.length, 1);
  assert.equal(r.error?.issues[0]?.message, "Email invalide");
});

test("la liste des fournisseurs grand public n'a pas de doublon", () => {
  const seen = new Set(FREE_EMAIL_PROVIDERS);
  assert.equal(seen.size, FREE_EMAIL_PROVIDERS.length);
});

test("les prédicats de domaine sont insensibles à la casse et aux espaces", () => {
  assert.equal(isFreeEmailProvider("Moi@Gmail.Com "), true);
  assert.equal(isFreeEmailProvider("moi@aimakers.fr"), false);
  assert.equal(isDisposableEmailProvider("moi@MAILINATOR.com"), true);
  assert.equal(isDisposableEmailProvider("moi@aimakers.fr"), false);
  // Sans domaine du tout : traité comme non professionnel, jamais comme valide.
  assert.equal(isFreeEmailProvider("moi"), true);
});

test("phone accepte les formats français, marocains et internationaux", () => {
  for (const ok of [
    "0612345678",
    "06 12 34 56 78",
    "+33 6 12 34 56 78",
    "0033612345678",
    "+212 6 61 23 45 67", // Maroc : la moitié du cabinet
    "+1 (415) 555-2671",
    "01.42.86.82.00",
  ]) {
    assert.equal(phone.safeParse(ok).success, true, ok);
  }
});

test("phone refuse ce qui n'est pas un numéro", () => {
  for (const bad of [
    "", // requis
    "12345", // trop court
    "1234567890123456", // trop long
    "pas un numéro",
    "06 12 34 56 78 ext. 4", // lettres
  ]) {
    assert.equal(phone.safeParse(bad).success, false, JSON.stringify(bad));
  }
});

test("normalisePhone canonise sans inventer d'indicatif", () => {
  assert.equal(normalisePhone("+33 6 12 34 56 78"), "+33612345678");
  assert.equal(normalisePhone("0033612345678"), "+33612345678");
  assert.equal(normalisePhone("+1 (415) 555-2671"), "+14155552671");
  // Un 0X nu reste tel quel : préfixer +33 étiquetterait français la moitié
  // des numéros marocains, qui commencent aussi par 0.
  assert.equal(normalisePhone("06 12 34 56 78"), "0612345678");
});

test("fullName exige prénom ET nom", () => {
  assert.equal(fullName.safeParse("Othmane Halim").success, true);
  assert.equal(fullName.safeParse("  Marie   Dupont  ").success, true);
  assert.equal(fullName.safeParse("Othmane").success, false);
  assert.equal(fullName.safeParse("O").success, false);
});

test("firstNameOf alimente p_first_name en aval", () => {
  assert.equal(firstNameOf("Othmane Halim"), "Othmane");
  assert.equal(firstNameOf("  Marie  Dupont "), "Marie");
  assert.equal(firstNameOf("Jean-Pierre De La Tour"), "Jean-Pierre");
});

test("identitySchema valide un lead complet", () => {
  const r = identitySchema.safeParse({
    name: "Marie Dupont",
    phone: "+33 6 12 34 56 78",
    email: "marie.dupont@cabinet-conseil.fr",
    company: "Cabinet Conseil",
  });
  assert.equal(r.success, true);
});

test("identitySchema signale le champ fautif, pas seulement l'échec", () => {
  const r = identitySchema.safeParse({
    name: "Marie",
    phone: "abc",
    email: "marie@gmail.com",
  });
  assert.equal(r.success, false);
  const paths = r.error?.issues.map((i) => i.path[0]).sort();
  assert.deepEqual(paths, ["email", "name", "phone"]);
});

test("company est facultatif", () => {
  const r = identitySchema.safeParse({
    name: "Marie Dupont",
    phone: "0612345678",
    email: "marie@cabinet.fr",
  });
  assert.equal(r.success, true);
});
