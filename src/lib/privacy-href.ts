/**
 * Where a privacy notice links to.
 *
 * **The live policy on the main domain, absolute, in both languages.** Owner's
 * decision, 24 August 2026.
 *
 * Why it is not a relative path: the course is deployed on its own Vercel
 * address today and moves to `aimakers.fr` later. A relative `/confidentialite`
 * resolves against whatever host the reader happens to be on, so the notice
 * would point at a copy of the policy rather than the published one, and would
 * have to be remembered and changed again at the DNS switch. An absolute link
 * to the canonical policy is correct on every host, before and after.
 *
 * What this replaced, and why it mattered: `/en/privacy` **does not exist**. It
 * is a 404, and the English footer still links to it, which is a separate bug
 * and not this module's job. A GDPR notice pointing at a dead link is worse
 * than no notice at all, because the whole obligation is that the information
 * is easily accessible. A 404 is the clearest possible failure of that, and
 * the consent the notice exists to establish does not stand.
 *
 * The French policy is the real one and it is the only one that exists. An
 * English reader gets it in French, which is not ideal and is still the honest
 * option out of the two available.
 */

/**
 * One constant, not a function taking a language.
 *
 * There is only one policy, so a `privacyHref(locale)` would have been a
 * parameter that changed nothing, which reads as though the language matters
 * when it does not. The day an English policy exists, this is still the one
 * place that has to change.
 */
export const PRIVACY_URL = "https://aimakers.fr/confidentialite";
