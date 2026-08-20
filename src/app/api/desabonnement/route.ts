import { NextResponse } from "next/server";
import { z } from "zod";
import { recordUnsubscribe } from "@/lib/capture-lead";

/**
 * Désinscription en un clic.
 *
 * La page /challenge-30-jours promet noir sur blanc « un lien de désinscription
 * en un clic » dans chaque email. Cette route est ce lien.
 *
 * n8n ne fait plus partie du chemin : l'OS émet le jeton, détient la
 * correspondance jeton -> adresse et exécute la suppression. Un intermédiaire
 * de moins sur une obligation légale.
 *
 * Le jeton est un UUID opaque : l'email n'apparaît jamais dans l'URL, donc un
 * lien partagé ou journalisé ne révèle pas l'adresse de l'inscrit.
 */

const unsubscribeSchema = z.object({
  token: z.string().uuid("Lien de désinscription invalide"),
});

const FAILURE =
  "La désinscription n'a pas pu être enregistrée. Merci de réessayer dans un instant.";

/**
 * Désinscription en un clic RFC 8058.
 *
 * Gmail et Yahoo n'affichent leur bouton « Se désabonner » que si l'expéditeur
 * accepte un POST `List-Unsubscribe=One-Click`, envoyé SANS interaction et en
 * form-encoded — jamais en JSON. Sans cette branche, l'en-tête que l'OS pose
 * sur chaque envoi promettrait un mécanisme qui échoue, ce qui compte comme
 * plainte côté délivrabilité.
 */
async function oneClick(request: Request): Promise<Response | null> {
  const type = request.headers.get("content-type") ?? "";
  if (!type.includes("application/x-www-form-urlencoded")) return null;

  const token = new URL(request.url).searchParams.get("token") ?? "";
  const parsed = unsubscribeSchema.safeParse({ token });
  if (!parsed.success) {
    return NextResponse.json({ error: "Lien invalide" }, { status: 400 });
  }

  const ok = await recordUnsubscribe(parsed.data.token);
  // Un 2xx est la seule réponse que le client de messagerie interprète comme
  // « c'est fait » ; on ne ment donc pas en cas d'échec.
  return ok
    ? new NextResponse(null, { status: 200 })
    : NextResponse.json({ error: FAILURE }, { status: 502 });
}

export async function POST(request: Request) {
  const direct = await oneClick(request);
  if (direct) return direct;

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

    const parsed = unsubscribeSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: "Lien de désinscription invalide" },
        { status: 400 },
      );
    }

    const ok = await recordUnsubscribe(parsed.data.token);
    if (!ok) {
      // On ne journalise jamais le jeton : il vaut autorisation de désinscription.
      console.error("[UNSUBSCRIBE] OS n'a pas confirmé l'enregistrement");
      return NextResponse.json({ error: FAILURE }, { status: 502 });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
