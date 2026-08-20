/**
 * Relaie un lead au webhook n8n et ATTEND la confirmation de réception.
 *
 * n8n répond 200 dès que le lead est capturé de façon durable (avant tout envoi
 * d'email). Donc un 200 = lead bien enregistré. Toute autre réponse, une absence
 * de configuration, un timeout ou une erreur réseau = échec réel, à remonter à
 * l'utilisateur. On ne renvoie plus jamais un faux succès quand rien n'est parti.
 */
export async function relayToN8n(
  webhookUrl: string | undefined,
  payload: unknown,
  // n8n capture chain (upsert → followup → Slack → respond) prend ~6s à chaud.
  // 15s laisse de la marge (démarrage à froid) sans faire trop attendre l'utilisateur.
  timeoutMs = 15000,
): Promise<{ ok: boolean; reason?: string }> {
  if (!webhookUrl) return { ok: false, reason: "not_configured" };

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });
    return res.ok ? { ok: true } : { ok: false, reason: `status_${res.status}` };
  } catch (err) {
    return { ok: false, reason: err instanceof Error ? err.name : "fetch_error" };
  } finally {
    clearTimeout(timeout);
  }
}
