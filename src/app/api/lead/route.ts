import { NextResponse, after } from "next/server";
import {
  leadSubmissionSchema,
  firstNameOf,
  normalisePhone,
} from "@/lib/schemas/lead";
import { relayToN8n } from "@/lib/relay-to-n8n";
import {
  captureLead,
  formFromSource,
  originFromRequest,
  requestLeadNotification,
} from "@/lib/capture-lead";


/**
 * Renvoie un envoi de formulaire nu sur sa page d'origine.
 *
 * 303 et pas 302 : la méthode DOIT redevenir GET, sinon un rafraîchissement
 * rejoue le POST et crée un doublon. C'est le motif POST/Redirect/GET, et c'est
 * la seule façon correcte de répondre à un formulaire sans JavaScript.
 *
 * La destination vient du champ caché `_return`, jamais du Referer : un Referer
 * est fourni par le client et peut pointer n'importe où, ce qui ferait de cette
 * route une redirection ouverte. On n'accepte qu'un chemin relatif sur l'hôte
 * d'origine.
 */
function redirectBack(request: Request, body: unknown, state: "ok" | "erreur") {
  const raw =
    typeof body === "object" && body !== null
      ? String((body as Record<string, unknown>)._return ?? "")
      : "";
  // Chemin relatif uniquement : « //evil.com » et « https://evil.com » sont
  // refusés, et l'on retombe sur la racine de l'hôte appelant.
  const safePath = /^\/(?!\/)[^\s]*$/.test(raw) ? raw : "/";

  // Location RELATIF, délibérément.
  //
  // Construire une URL absolue depuis `request.url` donnait
  // « https://0.0.0.0:3000/... » : à l'intérieur du conteneur, c'est l'adresse
  // d'écoute de Next, pas l'hôte public. Le navigateur suivait donc la
  // redirection vers une machine qui n'existe pas pour lui.
  //
  // Se fier à X-Forwarded-Host reviendrait à faire confiance à un en-tête
  // fourni par le client. Un chemin relatif évite le choix : le navigateur
  // reste sur l'hôte d'où il vient, que ce soit aimakers.fr ou
  // blogs.aimakers.fr, et cette route n'a pas à savoir lequel.
  const sep = safePath.includes("?") ? "&" : "?";
  return new NextResponse(null, {
    status: 303,
    headers: { Location: `${safePath}${sep}newsletter=${state}` },
  });
}

export async function POST(request: Request) {
  try {
    // Un corps illisible est une erreur du CLIENT, pas du serveur : sans ce
    // garde, request.json() lève et le catch générique renvoie 500. Un 500
    // déclenche des alertes et suggère une panne de notre côté, là où le bon
    // signal est 400.
    // Deux clients, deux formats.
    //
    // Le site principal poste du JSON en fetch. blogs.aimakers.fr, lui, est un
    // site statique servi par nginx qui n'envoie AUCUN JavaScript : son
    // formulaire est un <form method="POST"> nu, donc du
    // `application/x-www-form-urlencoded`. Jusqu'ici cette route ne lisait que
    // du JSON, donc le formulaire du blog répondait 400 à chaque envoi — il
    // n'a jamais capté un seul lead.
    const contentType = request.headers.get("content-type") ?? "";
    const isFormPost = contentType.includes("application/x-www-form-urlencoded");

    let body: unknown;
    try {
      if (isFormPost) {
        body = Object.fromEntries((await request.formData()).entries());
      } else {
        body = await request.json();
      }
    } catch {
      return NextResponse.json({ error: "Corps illisible" }, { status: 400 });
    }

    // Validate with Zod
    const parsed = leadSubmissionSchema.safeParse(body);
    if (!parsed.success) {
      // Un envoi de formulaire nu attend une PAGE, pas du JSON : renvoyer un
      // objet brut afficherait `{"error":"Données invalides"}` en haut d'un
      // écran blanc. On renvoie le visiteur d'où il vient, avec un drapeau que
      // la page sait rendre.
      if (isFormPost) {
        return redirectBack(request, body, "erreur");
      }
      return NextResponse.json(
        { error: "Données invalides", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const data = parsed.data;

    // Generate a lead ID
    const leadId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

    // `data` n'a pas les mêmes champs selon le formulaire : on lit sur un
    // Record et on ne retient que ce qui est bien une chaîne, plutôt que de
    // faire semblant que le type union les contient toutes.
    const d = data as Record<string, unknown>;
    const str = (k: string) => (typeof d[k] === "string" ? (d[k] as string) : undefined);

    // La capture est le SEUL appel attendu : elle est durable, rapide, et sur le
    // réseau Docker interne. Le relais n8n est parti dans un cron de l'OS — le
    // visiteur n'a plus à attendre un SaaS tiers pour savoir si son formulaire
    // est passé.
    // Prénom dérivé du nom complet, et téléphone canonisé, une seule fois et
    // ici : ce sont les deux formes que l'OS et les gabarits n8n consomment.
    const name = str("name");
    const phone = str("phone");
    // Le pays accompagne le numéro : sans lui, un « 0611… » ne peut pas être
    // ramené en E.164, et la normalisation serveur ne ferait rien.
    const phoneCountry = str("phoneCountry");

    const origin = originFromRequest(request);
    const captured = await captureLead(
      {
        // Le vrai formulaire, pas le point d'entrée : newsletter, playbook,
        // scanner… n'arrivent plus tous étiquetés « lead ».
        form: formFromSource("lead", str("source")),
        email: data.email,
        firstName: name ? firstNameOf(name) : undefined,
        name,
        phone: phone ? normalisePhone(phone, phoneCountry) : undefined,
        company: str("company"),
        website: str("website"),
        source: str("source"),
        payload: d,
          pagePath: origin.pagePath,
          utm: origin.utm,
      },
      5000,
      // La requête décide de la clé, donc de la propriété : un lead venu de
      // blogs.aimakers.fr ne doit pas être compté pour aimakers.fr.
      request,
    );

    if (!captured.ok) {
      // Filet de dernier recours, et UNIQUEMENT celui-là : si l'OS n'a pas pris
      // le lead, il n'existe nulle part et le cron ne le rejouera jamais. On
      // tente donc n8n dans la requête — l'inverse exact de la priorité d'avant,
      // qui est la bonne.
      const relay = await relayToN8n(process.env.N8N_LEAD_WEBHOOK_URL, {
        leadId,
        // n8n interpole `firstName` dans ses gabarits d'emails : on continue de
        // le lui fournir, dérivé, en plus du nom complet et du téléphone.
        firstName: name ? firstNameOf(name) : "",
        name: name ?? "",
        phone: phone ? normalisePhone(phone, phoneCountry) : "",
        email: data.email,
        company: data.company ?? "",
        website: data.website ?? "",
        source: data.source,
        // Réponses du scanner d'opportunités IA (source "scanner").
        sector: data.sector ?? "",
        teamSize: data.teamSize ?? "",
        pains: data.pains ?? [],
        timestamp: new Date().toISOString(),
      });

      if (!relay.ok) {
        console.error(
          `[LEAD] ni OS (${captured.reason}) ni n8n (${relay.reason}) : leadId ${leadId} | source: ${data.source}`,
        );
        return NextResponse.json(
          {
            error:
              "Votre demande n'a pas pu être envoyée. Merci de réessayer dans un instant.",
          },
          { status: 502 },
        );
      }

      console.warn(`[LEAD] OS indisponible (${captured.reason}) — relayé à n8n en direct`);
      if (isFormPost) return redirectBack(request, body, "ok");
      return NextResponse.json({ success: true, leadId });
    }

    // Hors du chemin de réponse : Slack ne doit pas retarder le visiteur, et un
    // cron de l'OS rattrape de toute façon tout lead resté non annoncé.
    after(() => requestLeadNotification(captured.id));

    console.log(`[LEAD] New lead: ${leadId} | Source: ${data.source}`);

    if (isFormPost) return redirectBack(request, body, "ok");
    return NextResponse.json({ success: true, leadId });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
