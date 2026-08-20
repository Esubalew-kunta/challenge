/**
 * Capture d'un lead dans l'OS AI Makers, avant tout relais n8n.
 *
 * Pourquoi ce chemin existe : écrire d'abord dans l'OS rend la capture
 * indépendante de n8n. Webhook absent, n8n en panne ou en maintenance, le lead
 * reste durable et visible dans l'OS.
 *
 * Depuis 0076, la capture est le SEUL appel attendu dans la requête du visiteur.
 * Le relais n8n a quitté le chemin de réponse : c'est un cron de l'OS qui le
 * rejoue chaque minute. Le lead peut attendre soixante secondes ; le visiteur,
 * non — il attendait jusqu'à vingt-quatre secondes, dont une étape sans aucun
 * délai d'expiration.
 *
 * n8n n'est pas remplacé : il reste l'expéditeur d'emails, le seul de la maison.
 * Tout le reste de l'activation (Slack, pipeline, escalade) est déjà fait par
 * l'OS. L'OS est le filet et la source de vérité de « qui nous a écrit ».
 *
 * Sécurité : on n'utilise PAS la clé service_role de l'OS. Le site appelle une
 * fonction SECURITY DEFINER dédiée, protégée par un secret propre à l'ingestion
 * (OS_LEAD_INGEST_SECRET). Si ce secret fuite, le pire scénario est du faux
 * lead — pas un accès à la base.
 */

import { OS_URL, OS_ANON, OS_APP_URL } from "./os-client";

export type LeadForm =
  | "lead"
  | "diagnostic"
  | "catalogue"
  | "challenge"
  | "audit-geo"
  | "scanner"
  | "playbook"
  | "newsletter"
  | "brief"
  | "booking";

/**
 * Le formulaire réel, déduit de la source.
 *
 * Huit formulaires du site n'entrent que par trois routes : /api/lead reçoit la
 * newsletter, le challenge, l'audit GEO, le scanner, le playbook et le brief, et
 * les annonçait tous comme « lead ». La distinction existait pourtant déjà —
 * l'enum Zod `source` la porte — elle était simplement jetée. Impossible, dès
 * lors, de savoir quel aimant produit quoi.
 *
 * L'écrasement ne vaut que pour « lead », le point d'entrée fourre-tout :
 * `diagnostic` et `catalogue` sont déjà spécifiques et ne doivent jamais être
 * réécrits par leur source.
 *
 * La base applique exactement la même règle (private.normalise_lead_form, 0075).
 * Deux implémentations volontairement redondantes : celle du site garde l'appel
 * lisible, celle de la base garantit qu'aucune route future ne puisse re-perdre
 * l'information en oubliant d'appeler celle-ci.
 */
const FORM_BY_SOURCE: Record<string, LeadForm> = {
  newsletter: "newsletter",
  challenge: "challenge",
  "geo-audit": "audit-geo",
  scanner: "scanner",
  playbook: "playbook",
  brief: "brief",
  booking: "booking",
  // « roi », « blog » et « glossaire » sont ABSENTS volontairement.
  //
  // Ces trois points de capture sont nouveaux (2026-08-03). Les valeurs de
  // `form` sont normalisées côté base par private.normalise_lead_form (0075) et
  // peuvent être contraintes : y envoyer une valeur inconnue risquerait de
  // faire échouer l'insertion, donc de perdre le lead — exactement ce que toute
  // cette chaîne existe pour éviter.
  //
  // L'information n'est pas perdue pour autant : `p_source` transporte la
  // source verbatim, donc « roi », « blog » et « glossaire » sont lisibles dans
  // la colonne `source`. Ils tombent simplement dans le `form` générique
  // « lead » en attendant.
  //
  // TODO(OS) : une fois les trois valeurs admises côté base, les ajouter ici et
  // dans le type LeadForm.
};

export function formFromSource(form: LeadForm, source?: string): LeadForm {
  if (form !== "lead") return form;
  return FORM_BY_SOURCE[(source ?? "").trim().toLowerCase()] ?? form;
}

type CaptureInput = {
  form: LeadForm;
  email: string;
  firstName?: string;
  /**
   * Nom complet, tel que saisi. `firstName` reste alimenté séparément (dérivé
   * par `firstNameOf()`) pour ne rien casser des gabarits d'emails n8n qui
   * l'interpolent déjà.
   */
  name?: string;
  /** Forme canonique, produite par `normalisePhone()`. */
  phone?: string;
  company?: string;
  website?: string;
  source?: string;
  locale?: "fr" | "en";
  /** Page d'origine, telle que vue par le visiteur : /slug ou /en/slug. */
  pagePath?: string;
  /** Paramètres de campagne, lus sur l'URL de la page d'origine. */
  utm?: Utm;
  /** Tout le reste du formulaire : les champs évoluent plus vite que le schéma. */
  payload?: Record<string, unknown>;
};

const INGEST_SECRET = process.env.OS_LEAD_INGEST_SECRET;

/**
 * La clé du sous-domaine blogs.
 *
 * La propriété d'un lead est déduite de la CLÉ, jamais d'un champ envoyé par
 * l'appelant (migration 0075) : une propriété fournie par le client serait
 * falsifiable, et l'attribution ne vaudrait plus rien. Mais Caddy renvoie
 * /api/lead* de blogs.aimakers.fr vers CE conteneur, donc une seule clé
 * étiquetait « aimakers.fr » des leads venus du blog.
 *
 * On choisit donc la clé d'après l'hôte du Referer — la seule information
 * d'origine dont on dispose ici — et l'on retombe sur la clé principale si elle
 * manque. Un Referer falsifié ne permet que de s'attribuer à soi-même une
 * propriété que l'on possède déjà : il n'ouvre aucun accès.
 */
const INGEST_SECRET_BLOGS = process.env.OS_LEAD_INGEST_SECRET_BLOGS;
const BLOGS_HOST = "blogs.aimakers.fr";

function ingestSecretFor(request?: Request): string | undefined {
  if (!request || !INGEST_SECRET_BLOGS) return INGEST_SECRET;
  try {
    const referer = request.headers.get("referer");
    if (!referer) return INGEST_SECRET;
    return new URL(referer).host.toLowerCase() === BLOGS_HOST
      ? INGEST_SECRET_BLOGS
      : INGEST_SECRET;
  } catch {
    return INGEST_SECRET;
  }
}

export type Utm = {
  source?: string;
  medium?: string;
  campaign?: string;
  term?: string;
  content?: string;
};

/**
 * Page d'origine + UTM, lus sur le Referer.
 *
 * On ne conserve du query string QUE les cinq paramètres utm_* : le reste peut
 * contenir des données personnelles (email de désinscription, token) et n'a rien
 * à faire dans une table de leads. Liste blanche, pas liste noire.
 *
 * Limite assumée : le Referer porte l'URL de la PAGE DU FORMULAIRE. Si le
 * visiteur arrive avec des UTM sur une autre page puis navigue avant de
 * remplir, l'attribution est perdue. La corriger demanderait de mémoriser le
 * premier contact côté navigateur — donc un stockage soumis au consentement,
 * qu'on vient précisément de mettre sous bannière. À trancher séparément.
 *
 * L'hôte est validé contre une LISTE, pas contre le seul NEXT_PUBLIC_SITE_URL.
 * Avec la comparaison à un hôte unique, tout Referer venant d'ailleurs repartait
 * en `{}` — silencieusement. C'est déjà ce qui a fait perdre son `page_path` à
 * un lead, et c'est exactement ainsi que blogs.aimakers.fr serait parti sans la
 * moindre attribution sans que personne ne le voie.
 */
const ORIGIN_HOSTS = (
  process.env.LEAD_ORIGIN_HOSTS ?? "aimakers.fr,www.aimakers.fr,blogs.aimakers.fr"
)
  .split(",")
  .map((h) => h.trim().toLowerCase())
  .filter(Boolean);
export function originFromRequest(request: Request): {
  pagePath?: string;
  utm?: Utm;
} {
  const referer = request.headers.get("referer");
  if (!referer) return {};
  try {
    const url = new URL(referer);
    if (!ORIGIN_HOSTS.includes(url.host.toLowerCase())) return {};
    const g = (k: string) => url.searchParams.get(k) ?? undefined;
    const utm: Utm = {
      source: g("utm_source"),
      medium: g("utm_medium"),
      campaign: g("utm_campaign"),
      term: g("utm_term"),
      content: g("utm_content"),
    };
    const hasUtm = Object.values(utm).some(Boolean);
    return {
      pagePath: url.pathname.replace(/\/$/, "") || "/",
      utm: hasUtm ? utm : undefined,
    };
  } catch {
    return {};
  }
}

export async function captureLead(
  input: CaptureInput,
  timeoutMs = 5000,
  /** La requête d'origine, pour choisir la clé — donc la propriété. */
  request?: Request,
): Promise<{ ok: boolean; id?: string; reason?: string }> {
  const secret = ingestSecretFor(request);
  if (!secret || !OS_ANON) return { ok: false, reason: "not_configured" };

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(`${OS_URL}/rest/v1/rpc/capture_website_lead`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: OS_ANON,
        Authorization: `Bearer ${OS_ANON}`,
      },
      body: JSON.stringify({
        p_secret: secret,
        p_form: input.form,
        p_email: input.email,
        p_first_name: input.firstName ?? null,
        p_company: input.company ?? null,
        p_website: input.website ?? null,
        p_source: input.source ?? null,
        p_locale: input.locale ?? "fr",
        // `name` et `phone` voyagent dans le payload JSONB, PAS en paramètres.
        //
        // `capture_website_lead` a une signature figée côté OS : PostgREST
        // répond 404 « function not found » dès qu'on lui passe un paramètre
        // qu'elle ne déclare pas. Ajouter p_phone ici AVANT la migration OS
        // ferait donc échouer toutes les captures, sur tous les formulaires.
        //
        // Fusionné ici plutôt que dans chaque route : c'est le seul endroit qui
        // ne peut pas être oublié par un futur point de capture.
        //
        // TODO(OS) : une fois `p_phone` / `p_name` déclarés côté OS, les passer
        // en paramètres et retirer ce merge — voir docs/LEAD-GATE-SPEC.md §D2.
        p_payload: {
          ...(input.payload ?? {}),
          ...(input.name ? { name: input.name } : {}),
          ...(input.phone ? { phone: input.phone } : {}),
        },
        p_page_path: input.pagePath ?? null,
        p_utm_source: input.utm?.source ?? null,
        p_utm_medium: input.utm?.medium ?? null,
        p_utm_campaign: input.utm?.campaign ?? null,
        p_utm_term: input.utm?.term ?? null,
        p_utm_content: input.utm?.content ?? null,
      }),
      signal: controller.signal,
    });
    if (!res.ok) return { ok: false, reason: `status_${res.status}` };
    // PostgREST renvoie l'uuid brut pour une fonction scalaire.
    const id = (await res.text()).replace(/^"|"$/g, "").trim();
    return { ok: true, id };
  } catch (err) {
    return { ok: false, reason: err instanceof Error ? err.name : "fetch_error" };
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Marque le lead comme relayé (ou non) une fois n8n appelé.
 *
 * Sans ça, `relayed` resterait false pour tout le monde et la colonne ne
 * distinguerait plus « jamais transmis » de « transmis ». C'est précisément
 * cette distinction qui doit faire remonter les leads à relancer à la main.
 *
 * Le délai d'expiration n'est pas décoratif : le fetch de Node n'en a AUCUN par
 * défaut. Sans lui, une socket bloquée vers supabase-kong suspend cet await
 * indéfiniment — et donc la réponse au visiteur, dont le formulaire tourne dans
 * le vide alors que son lead est déjà enregistré.
 */
export async function markRelayed(
  id: string | undefined,
  relayed: boolean,
  reason?: string,
  timeoutMs = 5000,
): Promise<void> {
  if (!id || !INGEST_SECRET || !OS_ANON) return;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    await fetch(`${OS_URL}/rest/v1/rpc/mark_website_lead_relayed`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: OS_ANON,
        Authorization: `Bearer ${OS_ANON}`,
      },
      body: JSON.stringify({
        p_secret: INGEST_SECRET,
        p_id: id,
        p_relayed: relayed,
        p_reason: reason ?? null,
      }),
      signal: controller.signal,
    });
  } catch {
    /* le lead est déjà capturé : l'échec du marquage ne doit rien casser */
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Enregistre une désinscription dans l'OS, avant le relais n8n.
 *
 * Jusqu'ici, se désinscrire ne laissait AUCUNE trace côté OS : le cerveau de la
 * maison ignorait qui avait demandé le silence, et un rejeu de relais pouvait
 * ré-écrire à quelqu'un qui était parti.
 *
 * L'OS est désormais AUTORITAIRE : il émet lui-même le jeton au moment de
 * l'envoi et en garde la correspondance jeton -> adresse. La désinscription
 * résout donc l'adresse et écrit une suppression qui bloque réellement, là où
 * la correspondance vivait auparavant chez n8n — et disparaissait avec lui.
 *
 * Retourne false si l'OS n'a pas confirmé : l'appelant DOIT le signaler au
 * visiteur plutôt que d'afficher un succès qui n'a rien enregistré.
 */
export async function recordUnsubscribe(
  token: string,
  timeoutMs = 5000,
): Promise<boolean> {
  if (!INGEST_SECRET || !OS_ANON) return false;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(`${OS_URL}/rest/v1/rpc/record_website_unsubscribe`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: OS_ANON,
        Authorization: `Bearer ${OS_ANON}`,
      },
      body: JSON.stringify({ p_secret: INGEST_SECRET, p_token: token }),
      signal: controller.signal,
    });
    return res.ok;
  } catch {
    return false;
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Demande à l'OS d'annoncer le lead sur Slack.
 *
 * C'est l'OS qui poste, pas le site : le jeton Slack reste d'un seul côté. Le
 * site ne présente que le secret d'ingestion, déjà en sa possession.
 *
 * Chemin sous /api/cron/ : le middleware de l'OS n'exempte que `api/cron` et
 * `api/notion`. Ailleurs, la requête part en redirection vers la page de
 * connexion et renvoie du HTML — échec silencieux de bout en bout.
 *
 * Volontairement silencieux en cas d'échec : le lead est déjà capturé et un
 * cron de l'OS rattrape tout ce qui a notified_at NULL. Faire échouer la
 * réponse au visiteur parce que Slack est indisponible serait absurde.
 */
export async function requestLeadNotification(
  id: string | undefined,
  timeoutMs = 4000,
): Promise<void> {
  if (!id || !INGEST_SECRET) return;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    await fetch(`${OS_APP_URL}/api/cron/leads-notify`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-ingest-secret": INGEST_SECRET,
      },
      body: JSON.stringify({ leadId: id }),
      signal: controller.signal,
    });
  } catch {
    /* le cron de l'OS rattrapera */
  } finally {
    clearTimeout(timer);
  }
}
