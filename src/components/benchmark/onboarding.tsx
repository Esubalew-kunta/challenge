"use client";

/**
 * L'onboarding, cinq étapes.
 *
 * Nom, e-mail, entreprise, track, rôle. Les trois premières ont un champ et un
 * bouton ; les deux dernières avancent au clic, et cliquer un rôle démarre le
 * parcours sans bouton supplémentaire.
 *
 * Le retour préserve ce qui a été saisi. Chaque étape a son propre message
 * d'erreur, parce qu'un message générique oblige le lecteur à deviner lequel
 * des trois champs ne va pas.
 *
 * La validation est délibérément légère : nom et entreprise non vides, e-mail
 * plausible. Refuser une adresse valable pour cause de règle trop stricte coûte
 * un lead ; accepter une faute de frappe coûte un envoi.
 */

import { useEffect, useRef, useState } from "react";
import { contentFor } from "@/lib/benchmark/content";
import type { TrackId } from "@/lib/benchmark/types";
import { s } from "@/lib/benchmark/strings";
import { useBenchmarkLocale } from "./locale-context";
import { Slot } from "./string-slot";

export type Lead = {
  name: string;
  email: string;
  company: string;
  trackId: TrackId | null;
  role: string | null;
};

export const EMPTY_LEAD: Lead = {
  name: "",
  email: "",
  company: "",
  trackId: null,
  role: null,
};

const STEPS = 5;

/** Assez pour attraper une faute de frappe, pas assez pour refuser une adresse
 *  valable dont la forme sort de l'ordinaire. */
const PLAUSIBLE_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function BackButton({ onClick }: { onClick: () => void }) {
  const locale = useBenchmarkLocale();

  return (
    <button
      type="button"
      className="backbtn"
      onClick={onClick}
      aria-label={s("onboarding.back", locale)}
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M15 5l-7 7 7 7" />
      </svg>
    </button>
  );
}

type Props = {
  lead: Lead;
  onChange: (lead: Lead) => void;
  onLeave: () => void;
  /** Renvoie faux si le parcours n'a pas pu démarrer : banque absente ou mal
   *  rangée. L'étape 4 reprend la main plutôt que de laisser un clic mort. */
  onStartRun: (lead: Lead & { trackId: TrackId; role: string }) => boolean;
};

export function Onboarding({ lead, onChange, onLeave, onStartRun }: Props) {
  const locale = useBenchmarkLocale();
  const { TRACKS, ROLES } = contentFor(locale);
  const [step, setStep] = useState(0);
  const currentTrack = TRACKS.find((track) => track.id === lead.trackId);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Le focus est un effet de bord sur le DOM, pas un état : il n'a rien à
  // faire ailleurs. L'erreur, elle, s'efface là où l'étape change.
  useEffect(() => {
    inputRef.current?.focus();
  }, [step]);

  const goTo = (next: number) => {
    setError(null);
    setStep(next);
  };

  const back = () => {
    if (step === 0) onLeave();
    else goTo(step - 1);
  };

  const forward = () => {
    if (step === 0 && !lead.name.trim()) return setError(s("onboarding.step1.error", locale));
    if (step === 1 && !PLAUSIBLE_EMAIL.test(lead.email.trim()))
      return setError(s("onboarding.step2.error", locale));
    if (step === 2 && !lead.company.trim()) return setError(s("onboarding.step3.error", locale));
    goTo(step + 1);
  };

  const chooseTrack = (trackId: TrackId) => {
    onChange({ ...lead, trackId, role: null });
    goTo(4);
  };

  const chooseRole = (role: string) => {
    if (!lead.trackId) {
      setError(s("onboarding.step4.error", locale));
      setStep(3);
      return;
    }
    // Un track sans banque jouable renvoie l'utilisateur au choix du
    // département, avec le message de cette étape. Aucun écran blanc, aucune
    // exception qui remonte jusqu'à React.
    if (!onStartRun({ ...lead, role, trackId: lead.trackId })) {
      onChange({ ...lead, trackId: null, role: null });
      setError(s("onboarding.step4.error", locale));
      setStep(3);
    }
  };

  const field = (
    key: "name" | "email" | "company",
    type: string,
    autoComplete: string,
  ) => (
    <div className="field">
      <input
        ref={inputRef}
        type={type}
        value={lead[key]}
        autoComplete={autoComplete}
        enterKeyHint="next"
        placeholder={s(`onboarding.step${step + 1}.placeholder`, locale)}
        onChange={(e) => onChange({ ...lead, [key]: e.target.value })}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            forward();
          }
        }}
      />
    </div>
  );

  const head = (
    <div className="step-head">
      <BackButton onClick={back} />
      <Slot
        k="onboarding.counter"
        className="form-index"
        values={{ n: String(step + 1).padStart(2, "0"), total: String(STEPS).padStart(2, "0") }}
      />
    </div>
  );

  const actions = (
    <div className="form-actions">
      <button type="button" className="btn btn-primary" onClick={forward}>
        <Slot k="onboarding.continue" />
      </button>
      <Slot k="onboarding.enterHint" className="form-kbd" />
    </div>
  );

  return (
    <section className="screen">
      <div className="shell form-wrap">
        <div className="form-progress" aria-hidden="true">
          {Array.from({ length: STEPS }, (_, i) => (
            <i key={i} className={i <= step ? "done" : undefined} />
          ))}
        </div>

        <div className="form-step">
          {head}

          {step === 0 && (
            <>
              <Slot k="onboarding.step1.label" as="h2" />
              <Slot k="onboarding.step1.hint" as="p" className="hint" />
              {field("name", "text", "name")}
            </>
          )}

          {step === 1 && (
            <>
              <Slot k="onboarding.step2.label" as="h2" />
              <Slot k="onboarding.step2.hint" as="p" className="hint" />
              {field("email", "email", "email")}
            </>
          )}

          {step === 2 && (
            <>
              <Slot k="onboarding.step3.label" as="h2" />
              <Slot k="onboarding.step3.hint" as="p" className="hint" />
              {field("company", "text", "organization")}
            </>
          )}

          {step === 3 && (
            <>
              <Slot k="onboarding.step4.label" as="h2" />
              <Slot k="onboarding.step4.hint" as="p" className="hint" />
              <div className="tracks" role="group">
                {TRACKS.map((track) => (
                  <button
                    key={track.id}
                    type="button"
                    className="track"
                    aria-pressed={lead.trackId === track.id}
                    onClick={() => chooseTrack(track.id)}
                  >
                    <span className="track-id">{track.code}</span>
                    <span className="track-name">{track.name}</span>
                    <span className="track-desc">{track.desc}</span>
                    <span className="track-tags">{track.tags}</span>
                  </button>
                ))}
              </div>
            </>
          )}

          {step === 4 && (
            <>
              <Slot
                k="onboarding.step5.label"
                as="h2"
                values={{ track: currentTrack?.name ?? "" }}
              />
              <Slot k="onboarding.step5.hint" as="p" className="hint" />
              <div className="roles" role="group">
                {(lead.trackId ? ROLES[lead.trackId] : []).map((role) => (
                  <button
                    key={role}
                    type="button"
                    className="role"
                    aria-pressed={lead.role === role}
                    onClick={() => chooseRole(role)}
                  >
                    {role}
                  </button>
                ))}
              </div>
              <Slot k="onboarding.step5.privacy" as="p" className="privacy" />
            </>
          )}

          <p className="field-error" role="alert">
            {error}
          </p>

          {step <= 2 && actions}
        </div>
      </div>
    </section>
  );
}
