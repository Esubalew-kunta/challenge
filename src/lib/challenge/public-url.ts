/**
 * The public address of the course, for anything that has to survive leaving
 * this machine.
 *
 * `CHALLENGE_PUBLIC_URL` first, so a developer can point a local run at the
 * live site. Then Vercel's own production hostname. Then the site config.
 * **Never the request host as a last resort**: that is the thing this exists to
 * override.
 *
 * Why it matters, from a bug that actually shipped: testing the sheet form on
 * `http://localhost:3000` put `http://localhost:3000` into a real email sent
 * from the real Gmail account, so every link in it was dead for the person who
 * received it. The badge has the same problem in a different shape. A LinkedIn
 * share link built from a developer machine is an address LinkedIn cannot
 * fetch, so the badge picture would simply never appear.
 *
 * Server only. It reads environment variables that must not reach a browser.
 */

import { siteConfig } from "@/lib/site-config";

export function challengePublicUrl(): string {
  const configured = process.env.CHALLENGE_PUBLIC_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");

  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercel) {
    return `https://${vercel.replace(/^https?:\/\//, "").replace(/\/$/, "")}`;
  }

  return siteConfig.url.replace(/\/$/, "");
}
