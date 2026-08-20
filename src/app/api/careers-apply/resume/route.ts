import { NextResponse } from "next/server";

/**
 * Upload d'un document de candidature — /carrieres/postuler.
 *
 * Porte le CV et la lettre de motivation quand elle est déposée en fichier,
 * distingués par `kind`. Le chemin garde son nom `resume` : l'OS l'expose
 * ainsi, et le renommer des deux côtés à la fois ouvrirait une fenêtre où
 * chaque dépôt tombe sur un 404.
 *
 * Route nodejs (pas edge) : la gestion de fichier en a besoin. Le fichier est
 * reçu ici puis relayé serveur-à-serveur vers un endpoint OS qui n'existe pas
 * encore (voir docs/APPLICANTS-SCHEMA-SPEC.md §6) — le navigateur ne parle
 * jamais directement à l'OS, même règle que `captureLead()`.
 *
 * Tant que `OS_APP_URL`/`OS_APPLICATION_INGEST_SECRET` ne sont pas configurés
 * ou que l'OS ne répond pas, cette route rend `{ok:false}` proprement. C'est
 * volontairement NON bloquant côté formulaire : voir `application-form.tsx`,
 * un échec d'upload n'empêche jamais l'envoi de la candidature.
 */
export const runtime = "nodejs";

const MAX_SIZE_BYTES = 8 * 1024 * 1024; // 8 Mo, voir §6 de la spec
const ALLOWED_MIME_TYPES = new Set([
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
]);

const OS_APP_URL = process.env.OS_APP_URL ?? "http://os-app:3000";
const INGEST_SECRET = process.env.OS_APPLICATION_INGEST_SECRET;

export async function POST(request: Request) {
  let form: FormData;
  try {
    form = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, reason: "corps_illisible" }, { status: 400 });
  }

  const file = form.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ ok: false, reason: "fichier_manquant" }, { status: 400 });
  }

  if (!ALLOWED_MIME_TYPES.has(file.type)) {
    return NextResponse.json(
      { ok: false, reason: "type_non_supporte" },
      { status: 415 },
    );
  }

  if (file.size > MAX_SIZE_BYTES) {
    return NextResponse.json({ ok: false, reason: "fichier_trop_lourd" }, { status: 413 });
  }

  // OS pas encore construit : dégrader proprement plutôt que d'échouer fort
  // pour une infra qui n'existe pas encore — voir la note du fichier.
  if (!INGEST_SECRET) {
    return NextResponse.json({ ok: false, reason: "not_configured" }, { status: 502 });
  }

  const applicationId = String(form.get("applicationId") ?? "");
  const roleSlug = String(form.get("roleSlug") ?? "");
  // `kind` distingue le CV de la lettre déposée : l'OS les range sous deux
  // préfixes distincts. Valeur inconnue -> "resume", pour ne jamais créer un
  // dossier de plus sur une faute de frappe.
  const rawKind = String(form.get("kind") ?? "resume");
  const kind = rawKind === "cover-letter" ? "cover-letter" : "resume";

  const relay = new FormData();
  relay.append("file", file, file.name);
  relay.append("applicationId", applicationId);
  relay.append("roleSlug", roleSlug);
  relay.append("kind", kind);

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 20000);
  try {
    const res = await fetch(`${OS_APP_URL}/api/careers/resume-upload`, {
      method: "POST",
      headers: { "x-ingest-secret": INGEST_SECRET },
      body: relay,
      signal: controller.signal,
    });

    if (!res.ok) {
      console.warn(`[CAREERS-RESUME] OS a refusé l'upload : status_${res.status}`);
      return NextResponse.json(
        { ok: false, reason: `status_${res.status}` },
        { status: 502 },
      );
    }

    const payload = await res.json().catch(() => null);
    if (!payload?.ok || typeof payload.resumeId !== "string") {
      return NextResponse.json({ ok: false, reason: "reponse_os_invalide" }, { status: 502 });
    }

    return NextResponse.json({
      ok: true,
      resumeId: payload.resumeId,
      storagePath: payload.storagePath,
    });
  } catch (err) {
    const reason = err instanceof Error ? err.name : "fetch_error";
    console.warn(`[CAREERS-RESUME] OS injoignable (${reason})`);
    return NextResponse.json({ ok: false, reason }, { status: 502 });
  } finally {
    clearTimeout(timer);
  }
}
