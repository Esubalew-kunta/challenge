import { test } from "node:test";
import assert from "node:assert/strict";
import { isValidPhone, normalisePhone } from "../src/lib/schemas/identity.ts";
import {
  PHONE_COUNTRIES,
  DEFAULT_PHONE_COUNTRY,
  searchCountries,
} from "../src/lib/phone-countries.ts";

/**
 * Le contrôle précédent n'exigeait que 8 à 15 chiffres, donc « 000000000 »
 * passait. Ces tests sont écrits d'abord comme des refus : c'est ce qui rendait
 * un lead sans valeur, et personne ne s'en apercevait avant d'essayer d'appeler.
 */

test("refuse les suites de chiffres hors plan de numérotation", () => {
  // Le cas signalé : « 000000000 ». Aucun plan n'attribue l'indicatif 0.
  for (const bad of ["000000000", "0000000000", "0000000000000"]) {
    assert.equal(isValidPhone(bad, "FR"), false, `${bad} aurait dû être refusé`);
    assert.equal(isValidPhone(bad, "MA"), false, `${bad} aurait dû être refusé (MA)`);
  }
});

test("LIMITE CONNUE : un numéro plausible mais probablement faux passe", () => {
  // « 123456789 » devient +33 1 23 45 67 89 : un numéro parisien structurellement
  // correct. libphonenumber valide le PLAN de numérotation, pas l'ATTRIBUTION —
  // savoir si la ligne existe demande une interrogation d'opérateur (HLR), qui
  // est payante, lente, et n'a pas sa place dans la soumission d'un formulaire.
  //
  // Ce test existe pour que la limite soit explicite plutôt que découverte le
  // jour où quelqu'un s'étonne qu'un faux numéro soit passé. Il documente le
  // comportement ; il ne le cautionne pas.
  assert.equal(isValidPhone("123456789", "FR"), true);
  // Au Maroc, en revanche, ce préfixe n'existe pas dans le plan.
  assert.equal(isValidPhone("123456789", "MA"), false);
});

test("refuse un numéro trop court ou vide", () => {
  for (const bad of ["", "  ", "1", "06", "+33"]) {
    assert.equal(isValidPhone(bad, "FR"), false, `${bad} aurait dû être refusé`);
  }
});

test("accepte les vrais mobiles français, quelle que soit la mise en forme", () => {
  for (const ok of ["0611223344", "06 11 22 33 44", "06.11.22.33.44", "+33611223344", "0033611223344"]) {
    assert.equal(isValidPhone(ok, "FR"), true, `${ok} aurait dû être accepté`);
  }
});

test("accepte un mobile marocain — le cabinet a un bureau à Rabat", () => {
  assert.equal(isValidPhone("0612345678", "MA"), true);
  assert.equal(isValidPhone("+212612345678"), true);
});

test("le pays lève l'ambiguïté d'un numéro national", () => {
  // Le même 09… : plan valide en France, pas au Maroc.
  assert.equal(isValidPhone("0912345678", "FR"), true);
  assert.equal(isValidPhone("0912345678", "MA"), false);
});

test("normalise vers E.164", () => {
  assert.equal(normalisePhone("06 11 22 33 44", "FR"), "+33611223344");
  assert.equal(normalisePhone("0033611223344"), "+33611223344");
  assert.equal(normalisePhone("+33611223344"), "+33611223344");
  assert.equal(normalisePhone("0612345678", "MA"), "+212612345678");
});

test("ne perd jamais la saisie, même invalide", () => {
  // La validation a déjà refusé en amont ; ici on vérifie seulement qu'on ne
  // renvoie pas une chaîne vide, ce qui effacerait le champ sous l'utilisateur.
  assert.notEqual(normalisePhone("000000000", "FR"), "");
});

test("la liste des pays est cohérente avec la validation", () => {
  assert.ok(PHONE_COUNTRIES.length > 200, "liste anormalement courte");
  assert.equal(PHONE_COUNTRIES[0].iso, "FR", "la France doit être en tête");
  assert.equal(PHONE_COUNTRIES[1].iso, "MA", "le Maroc doit suivre");
  assert.ok(PHONE_COUNTRIES.every((c) => /^\d+$/.test(c.code)), "indicatif non numérique");
  assert.ok(PHONE_COUNTRIES.some((c) => c.iso === DEFAULT_PHONE_COUNTRY));
  const isos = new Set(PHONE_COUNTRIES.map((c) => c.iso));
  assert.equal(isos.size, PHONE_COUNTRIES.length, "doublon dans la liste");
});

/**
 * La recherche de pays — le `<select>` natif ne cherchait que dans le libellé
 * de l'option, qui commence par le code ISO. Il fallait donc deviner « FR », et
 * une frappe erronée bloquait jusqu'à expiration du tampon.
 */
test("on trouve un pays par son nom, son code ou son indicatif", () => {
  const first = (q: string) => searchCountries(q)[0]?.iso;
  assert.equal(first("France"), "FR");
  assert.equal(first("fra"), "FR");
  assert.equal(first("FR"), "FR");
  assert.equal(first("33"), "FR");
  assert.equal(first("+33"), "FR");
  assert.equal(first("maroc"), "MA");
  assert.equal(first("212"), "MA");
});

test("les accents ne font pas échouer la recherche", () => {
  assert.equal(searchCountries("emirats")[0]?.iso, "AE");
  assert.equal(searchCountries("Émirats")[0]?.iso, "AE");
  assert.equal(searchCountries("BRESIL")[0]?.iso, "BR");
});

test("un préfixe passe avant une occurrence au milieu", () => {
  // « Danemark » contient « ma », mais qui tape « ma » cherche le Maroc.
  assert.equal(searchCountries("ma")[0]?.iso, "MA");
});

test("une recherche vide rend toute la liste, priorités en tête", () => {
  const all = searchCountries("");
  assert.equal(all.length, PHONE_COUNTRIES.length);
  assert.equal(all[0].iso, "FR");
});

test("une recherche sans résultat rend une liste vide, jamais tout", () => {
  assert.deepEqual(searchCountries("zzzzzz"), []);
});
