import { NextResponse, after } from "next/server";
import { applicationSubmissionSchema } from "@/lib/schemas/application";
import { getJobRole } from "@/lib/careers/postes";
import { scoreApplication } from "@/lib/careers-scoring";
import { normalisePhone } from "@/lib/schemas/identity";
import { DEFAULT_PHONE_COUNTRY } from "@/lib/phone-countries";
import { relayToN8n } from "@/lib/relay-to-n8n";
import { captureApplication } from "@/lib/capture-application";
import {
  captureLead,
  originFromRequest,
  requestLeadNotification,
} from "@/lib/capture-lead";

/**
 * Candidature à un poste — /carrieres/postuler.
 *
 * Deux chemins de capture, essayés dans l'ordre :
 *
 * 1. `captureApplication()` → la RPC dédiée `capture_website_application`,
 *    qui écrit dans la table `applicants` (voir docs/APPLICANTS-SCHEMA-SPEC.md).
 *    Cette table n'existe pas encore côté OS : tant qu'elle n'est pas
 *    déployée, l'appel échoue proprement (`not_configured` ou 404).
 * 2. À défaut, le chemin existant : `captureLead()` avec `form: "lead"`,
 *    `source: "application"`, tout le détail de la candidature dans
 *    `payload` — exactement le comportement d'avant ce changement. Rien
 *    n'est perdu pendant la transition ; le jour où l'OS déploie la RPC,
 *    ce chemin cesse silencieusement d'être emprunté, sans changement de
 *    code ici.
 *
 * Suit le même contrat que /api/lead (progressive enhancement, POST/Redirect/GET
 * pour le formulaire sans JS).
 *
 * Le score et les questions de présélection sont RECALCULÉS ici à partir de
 * `postes.ts`, jamais lus depuis ce que le client a envoyé — un client ne
 * doit jamais pouvoir dicter son propre score ou l'énoncé d'une question.
 */

function redirectBack(request: Request, body: unknown, state: "ok" | "erreur") {
  const raw =
    typeof body === "object" && body !== null
      ? String((body as Record<string, unknown>)._return ?? "")
      : "";
  const safePath = /^\/(?!\/)[^\s]*$/.test(raw) ? raw : "/carrieres";
  const sep = safePath.includes("?") ? "&" : "?";
  return new NextResponse(null, {
    status: 303,
    headers: { Location: `${safePath}${sep}candidature=${state}` },
  });
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    const isFormPost = contentType.includes("application/x-www-form-urlencoded");

    let body: unknown;
    try {
      body = isFormPost
        ? Object.fromEntries((await request.formData()).entries())
        : await request.json();
    } catch {
      return NextResponse.json({ error: "Corps illisible" }, { status: 400 });
    }

    const parsed = applicationSubmissionSchema.safeParse(body);
    if (!parsed.success) {
      if (isFormPost) return redirectBack(request, body, "erreur");
      return NextResponse.json(
        { error: "Données invalides", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const data = parsed.data;

    // Défensif : ROLE_SLUGS (application.ts) est dupliqué depuis postes.ts,
    // pas importé (voir le commentaire du fichier) — un slug validé par le
    // schéma pourrait en théorie ne plus exister côté postes.ts s'il a été
    // retiré entre-temps.
    const role = getJobRole(data.role);
    if (!role) {
      if (isFormPost) return redirectBack(request, body, "erreur");
      return NextResponse.json({ error: "Poste invalide ou fermé" }, { status: 400 });
    }

    const { autoScreenScore, flags: autoScreenFlags } = scoreApplication({
      yearsExperience: data.yearsExperience,
      experienceMinValue: role.screeningQuestions.experience.minValue ?? 0,
    });

    // E.164 côté serveur, jamais la saisie brute : c'est la seule forme
    // composable depuis n'importe où, et deux saisies du même numéro s'y
    // rapprochent en base. Le couple (numéro, pays) vient d'être validé par le
    // schéma, on ne le redemande pas.
    const phoneE164 = data.phone
      ? normalisePhone(data.phone, data.phoneCountry ?? DEFAULT_PHONE_COUNTRY)
      : undefined;

    const applicationId = `app_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;
    const origin = originFromRequest(request);

    // 1. Chemin cible : la table applicants dédiée.
    const appCaptured = await captureApplication({
      applicationId,
      roleSlug: role.slug,
      roleTitle: role.title,
      name: data.name,
      email: data.email,
      phone: phoneE164,
      source: "application",
      pagePath: origin.pagePath,
      utm: origin.utm,
      linkedinUrl: data.linkedinUrl,
      githubUrl: data.githubUrl,
      websiteUrl: data.websiteUrl,
      resumeStoragePath: data.resumeId,
      resumeOriginalFilename: data.resumeFileName,
      resumeMimeType: data.resumeMimeType,
      resumeSizeBytes: data.resumeSizeBytes,
      coverLetterText: data.coverLetterText,
      coverLetterStoragePath: data.coverLetterId,
      coverLetterOriginalFilename: data.coverLetterFileName,
      coverLetterMimeType: data.coverLetterMimeType,
      coverLetterSizeBytes: data.coverLetterSizeBytes,
      yearsExperience: data.yearsExperience,
      experienceQuestionText: role.screeningQuestions.experience.question,
      experienceMinValue: role.screeningQuestions.experience.minValue ?? 0,
      // La question éliminatoire du poste et le français ne sont plus posés
      // ici : ils passent au niveau 2 de la présélection. `frenchRequired`
      // reste envoyé — c'est une propriété du POSTE, connue sans rien demander
      // au candidat, et elle dit au niveau 2 s'il faudra poser la question.
      frenchRequired: role.frenchRequired,
      autoScreenScore,
      autoScreenFlags,
    });

    if (appCaptured.ok) {
      console.log(
        `[CAREERS-APPLY] New application (applicants table): ${applicationId} | role: ${role.slug} | score: ${autoScreenScore}`,
      );
      if (isFormPost) return redirectBack(request, body, "ok");
      return NextResponse.json({ success: true, applicationId });
    }

    console.warn(
      `[CAREERS-APPLY] applicants table indisponible (${appCaptured.reason}) — repli sur website_leads`,
    );

    // 2. Repli : le chemin website_leads existant, avec les nouveaux champs
    // dans payload à la place de l'ancien portfolioUrl unique.
    const captured = await captureLead(
      {
        form: "lead",
        email: data.email,
        firstName: data.name.trim().split(/\s+/)[0],
        name: data.name,
        phone: phoneE164,
        source: "application",
        payload: {
          applicationId,
          role: role.slug,
          linkedinUrl: data.linkedinUrl,
          githubUrl: data.githubUrl,
          websiteUrl: data.websiteUrl,
          resumeId: data.resumeId,
          resumeFileName: data.resumeFileName,
          coverLetterText: data.coverLetterText,
          coverLetterId: data.coverLetterId,
          coverLetterFileName: data.coverLetterFileName,
          yearsExperience: data.yearsExperience,
          autoScreenScore,
          autoScreenFlags,
        },
        pagePath: origin.pagePath,
        utm: origin.utm,
      },
      5000,
      request,
    );

    if (!captured.ok) {
      const relay = await relayToN8n(process.env.N8N_APPLICATION_WEBHOOK_URL, {
        applicationId,
        name: data.name,
        email: data.email,
        phone: phoneE164 ?? "",
        role: role.slug,
        linkedinUrl: data.linkedinUrl ?? "",
        githubUrl: data.githubUrl ?? "",
        websiteUrl: data.websiteUrl ?? "",
        resumeId: data.resumeId ?? "",
        coverLetterText: data.coverLetterText ?? "",
        coverLetterId: data.coverLetterId ?? "",
        yearsExperience: data.yearsExperience,
        autoScreenScore,
        autoScreenFlags,
        source: "application",
        timestamp: new Date().toISOString(),
      });

      if (!relay.ok) {
        console.error(
          `[CAREERS-APPLY] ni applicants, ni OS lead (${captured.reason}), ni n8n (${relay.reason}) : applicationId ${applicationId} | role: ${role.slug}`,
        );
        if (isFormPost) return redirectBack(request, body, "erreur");
        return NextResponse.json(
          {
            error:
              "Votre candidature n'a pas pu être envoyée. Merci de réessayer dans un instant.",
          },
          { status: 502 },
        );
      }

      console.warn(
        `[CAREERS-APPLY] OS lead indisponible (${captured.reason}) — relayé à n8n en direct`,
      );
      if (isFormPost) return redirectBack(request, body, "ok");
      return NextResponse.json({ success: true, applicationId });
    }

    after(() => requestLeadNotification(captured.id));

    console.log(
      `[CAREERS-APPLY] New application (website_leads fallback): ${applicationId} | role: ${role.slug} | score: ${autoScreenScore}`,
    );

    if (isFormPost) return redirectBack(request, body, "ok");
    return NextResponse.json({ success: true, applicationId });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
