"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, X } from "lucide-react";
import { LeadGate } from "@/components/shared/lead-gate";

/**
 * Un bouton discret en fin d'article, qui ouvre l'inscription en surcouche.
 *
 * Délibérément SECONDAIRE. `ContentOffer`, juste au-dessus, propose le playbook,
 * et son commentaire dit pourquoi : deux demandes d'email de même poids sur une
 * page se cannibalisent. La newsletter arrive donc sous forme d'un bouton, pas
 * d'un second bloc — l'offre principale garde sa place, et qui veut seulement
 * s'abonner peut le faire sans descendre jusqu'au pied de page.
 *
 * La source `newsletter` est la seule dispensée d'identité complète : email
 * seul, pas de nom ni de téléphone. Demander trois champs pour un abonnement
 * après un article serait hors de proportion, et le schéma le sait déjà.
 */
export function NewsletterButton({ context }: { context: string }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLButtonElement>(null);

  // Échap ferme, et le défilement de la page est gelé pendant la surcouche :
  // sans cela, la page continue de défiler derrière la boîte de dialogue.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
      // Le focus revient sur le bouton d'origine : sans ce retour, la
      // navigation au clavier repart du haut du document.
      openerRef.current?.focus();
    };
  }, [open]);

  return (
    <>
      <div className="mx-auto max-w-3xl px-6 pb-12">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-xl border border-border bg-surface px-5 py-4">
          <p className="text-sm text-muted-foreground">
            Nos notes sur l&rsquo;IA en entreprise, une fois par mois.
          </p>
          <button
            ref={openerRef}
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-primary/30 bg-primary/[0.06] px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <Mail className="h-4 w-4" aria-hidden="true" />
            S&rsquo;inscrire à la newsletter
          </button>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Inscription à la newsletter"
        >
          {/* Le fond ferme au clic — comportement attendu d'une surcouche, et
              la seule sortie évidente au doigt sur mobile. */}
          <button
            type="button"
            aria-label="Fermer"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="absolute inset-0 cursor-default bg-slate-900/60 backdrop-blur-sm"
          />
          <div className="relative z-10 w-full max-w-md">
            <button
              ref={closeRef}
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fermer"
              className="absolute -top-3 -right-3 z-20 rounded-full border border-border bg-white p-2 text-muted-foreground shadow-lg transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
            <LeadGate
              source="newsletter"
              context={`newsletter-${context}`}
              title="Recevoir nos notes"
              subtitle="Ce qu'on apprend en déployant l'IA dans des entreprises réelles. Une fois par mois, sans bruit."
              ctaLabel="S'inscrire"
              successTitle="C'est noté."
              successMessage="Vous recevrez la prochaine édition."
              onCaptured={() => {
                // Laisse le message de confirmation à l'écran un instant : la
                // boîte qui disparaît à l'instant du clic donne l'impression
                // que rien ne s'est passé.
                window.setTimeout(() => setOpen(false), 2200);
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
