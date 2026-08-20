"use client";

/**
 * Bouton de confirmation de désinscription.
 *
 * Même contrat d'erreur que les autres formulaires du site (cf. correctif du
 * diagnostic) : on ne montre l'état de succès QUE si l'API a confirmé. Un échec
 * réseau ou une erreur serveur affiche un message et laisse réessayer — jamais
 * un faux « c'est fait » alors que la personne reste inscrite.
 */

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export function UnsubscribeForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  // Lien tronqué, recopié à la main, ou visite directe de la page.
  if (!token) {
    return (
      <div className="mt-6 flex items-start gap-3 rounded-xl border-2 border-border bg-muted/30 p-4">
        <AlertCircle
          className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground"
          aria-hidden="true"
        />
        <p className="text-sm leading-relaxed text-muted-foreground">
          Ce lien de désinscription est incomplet. Ouvrez-le directement depuis
          l&apos;un de nos emails, ou répondez-y simplement et nous nous en
          occupons.
        </p>
      </div>
    );
  }

  if (done) {
    return (
      <div className="mt-6" role="status">
        <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-success/10">
          <CheckCircle2 className="h-7 w-7 text-success" aria-hidden="true" />
        </div>
        <h2 className="text-lg font-bold text-foreground">
          Vous êtes désinscrit.
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          Vous ne recevrez plus ces emails. Ce que vous avez mis en place
          précédemment reste chez vous et continue de fonctionner.
        </p>
      </div>
    );
  }

  const handleUnsubscribe = async () => {
    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/desabonnement", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        setError(
          typeof payload?.error === "string"
            ? payload.error
            : "Une erreur est survenue. Merci de réessayer.",
        );
        return;
      }

      setDone(true);
    } catch {
      setError(
        "Impossible d'enregistrer la désinscription. Vérifiez votre connexion et réessayez.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-4">
      <p className="leading-relaxed text-muted-foreground">
        Confirmez pour ne plus recevoir ces emails.
      </p>

      {error && (
        <p role="alert" className="mt-4 text-sm text-destructive">
          {error}
        </p>
      )}

      <button
        type="button"
        onClick={handleUnsubscribe}
        disabled={loading}
        className="btn-gradient mt-6 flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-base font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 disabled:opacity-60"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Désinscription...
          </span>
        ) : (
          "Confirmer la désinscription"
        )}
      </button>
    </div>
  );
}
