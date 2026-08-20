import { NextResponse, after } from "next/server";
import { catalogueSubmissionSchema } from "@/lib/schemas/catalogue";
import { firstNameOf, normalisePhone } from "@/lib/schemas/identity";
import { relayToN8n } from "@/lib/relay-to-n8n";
import {
  captureLead,
  originFromRequest,
  requestLeadNotification,
} from "@/lib/capture-lead";

export async function POST(request: Request) {
  try {
    // Un corps illisible est une erreur du CLIENT, pas du serveur : sans ce
    // garde, request.json() lève et le catch générique renvoie 500. Un 500
    // déclenche des alertes et suggère une panne de notre côté, là où le bon
    // signal est 400.
    let body: unknown;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json({ error: "JSON malformé" }, { status: 400 });
    }

    const parsed = catalogueSubmissionSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Données invalides", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const data = parsed.data;

    const leadId = `cata_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`;

    // `data` n'a pas les mêmes champs selon le formulaire : on lit sur un
    // Record et on ne retient que ce qui est bien une chaîne, plutôt que de
    // faire semblant que le type union les contient toutes.
    const d = data as Record<string, unknown>;
    const str = (k: string) => (typeof d[k] === "string" ? (d[k] as string) : undefined);

    // Seule la capture est attendue ; le relais n8n vit dans un cron de l'OS.
    const origin = originFromRequest(request);
    const captured = await captureLead({
      form: "catalogue",
      email: data.email,
      firstName: firstNameOf(data.name),
      name: data.name,
      phone: normalisePhone(data.phone, data.phoneCountry),
      company: str("company"),
      website: str("website"),
      source: str("source"),
      payload: d,
      pagePath: origin.pagePath,
      utm: origin.utm,
    });

    if (!captured.ok) {
      // Filet de dernier recours : sans ligne dans l'OS, aucun cron ne rejouera
      // ce lead. C'est le seul cas où n8n est appelé dans la requête.
      const relay = await relayToN8n(process.env.N8N_CATALOGUE_WEBHOOK_URL, {
        leadId,
        // n8n interpole `firstName` : conservé, dérivé du nom complet.
        firstName: firstNameOf(data.name),
        name: data.name,
        phone: normalisePhone(data.phone, data.phoneCountry),
        email: data.email,
        company: data.company ?? "",
        formation: data.formation ?? "",
        source: data.source ?? "catalogue-formation",
        timestamp: new Date().toISOString(),
      });

      if (!relay.ok) {
        console.error(
          `[CATALOGUE] ni OS (${captured.reason}) ni n8n (${relay.reason}) : ${data.email}`,
        );
        return NextResponse.json(
          {
            error:
              "Votre demande n'a pas pu être envoyée. Merci de réessayer dans un instant.",
          },
          { status: 502 },
        );
      }
      console.warn(`[CATALOGUE] OS indisponible (${captured.reason}) — relayé à n8n en direct`);
      return NextResponse.json({ success: true, leadId });
    }

    after(() => requestLeadNotification(captured.id));

    console.log(
      `[CATALOGUE] Nouveau lead: ${data.email} | ${data.company ?? "-"} | formation: ${data.formation ?? "catalogue"}`,
    );

    return NextResponse.json({ success: true, leadId });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
