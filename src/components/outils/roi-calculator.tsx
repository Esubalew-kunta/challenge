"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { LeadGate } from "@/components/shared/lead-gate";
import { BookingCtaButton } from "@/components/shared/booking-modal";

/**
 * Calculateur ROI IA — estimation des gains annuels d'une adoption IA
 * sur les tâches quotidiennes. Hypothèses volontairement prudentes,
 * affichées en toutes lettres sous le résultat.
 */

const HEURES_PAR_AN = 47; // semaines travaillées effectives
const CHARGES_PATRONALES = 1.45; // coût employeur ≈ brut x 1,45

function formatEuros(n: number): string {
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(n);
}

function formatNombre(n: number): string {
  return new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 0 }).format(n);
}

type SliderRowProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  displayValue: string;
  onChange: (v: number) => void;
};

function SliderRow({
  label,
  value,
  min,
  max,
  step,
  displayValue,
  onChange,
}: SliderRowProps) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label className="text-sm font-medium text-foreground">{label}</label>
        <span className="whitespace-nowrap text-sm font-bold text-primary">
          {displayValue}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-full bg-primary/15 accent-primary"
      />
    </div>
  );
}

export function RoiCalculator() {
  const [effectif, setEffectif] = useState(50);
  const [salaireBrut, setSalaireBrut] = useState(42000);
  const [heuresSemaine, setHeuresSemaine] = useState(4);
  const [adoption, setAdoption] = useState(70);

  const resultats = useMemo(() => {
    const collaborateursActifs = Math.round((effectif * adoption) / 100);
    const heuresAnnuelles = collaborateursActifs * heuresSemaine * HEURES_PAR_AN;
    const coutHoraire = (salaireBrut * CHARGES_PATRONALES) / (35 * HEURES_PAR_AN);
    const valeurAnnuelle = heuresAnnuelles * coutHoraire;
    const etp = heuresAnnuelles / (35 * HEURES_PAR_AN);
    return { collaborateursActifs, heuresAnnuelles, valeurAnnuelle, etp };
  }, [effectif, salaireBrut, heuresSemaine, adoption]);

  return (
    <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
      {/* Entrées */}
      <div className="space-y-7 rounded-2xl border border-border bg-background p-8">
        <SliderRow
          label="Collaborateurs concernés"
          value={effectif}
          min={5}
          max={500}
          step={5}
          displayValue={`${effectif} personnes`}
          onChange={setEffectif}
        />
        <SliderRow
          label="Salaire brut annuel moyen"
          value={salaireBrut}
          min={25000}
          max={90000}
          step={1000}
          displayValue={formatEuros(salaireBrut)}
          onChange={setSalaireBrut}
        />
        <SliderRow
          label="Heures gagnées par semaine et par personne"
          value={heuresSemaine}
          min={1}
          max={10}
          step={1}
          displayValue={`${heuresSemaine} h / semaine`}
          onChange={setHeuresSemaine}
        />
        <SliderRow
          label="Part des équipes qui adopte réellement"
          value={adoption}
          min={30}
          max={100}
          step={5}
          displayValue={`${adoption} %`}
          onChange={setAdoption}
        />
        <p className="text-xs leading-relaxed text-muted-foreground">
          Repère : le gain moyen constaté chez nos clients formés est de 7 heures
          par semaine et par collaborateur. La valeur par défaut (4 h) est
          volontairement prudente.
        </p>
      </div>

      {/*
        Résultats — derrière la porte d'identité.
        Le calculateur était jusqu'ici entièrement ouvert : le visiteur
        obtenait son chiffre et repartait sans laisser de trace, sur l'outil
        qui mesure précisément ce qu'il a à gagner. Les curseurs restent
        librement manipulables ; c'est le RÉSULTAT qui demande les
        coordonnées, une fois l'intérêt déjà démontré.
      */}
      <div className="flex flex-col rounded-2xl bg-foreground p-8 text-background">
        <span className="text-xs font-semibold uppercase tracking-wide opacity-60">
          Votre estimation annuelle
        </span>
        <LeadGate
          source="roi"
          variant="bare"
          tone="dark"
          context="roi"
          ctaLabel="Voir mon estimation"
          privacyNote="Zéro spam. Vos données restent chez nous."
          className="mt-5"
        >
        <div className="mt-5 space-y-5">
          <div>
            <div className="text-4xl font-bold text-primary-foreground">
              <span className="text-blue-400">{formatNombre(resultats.heuresAnnuelles)} h</span>
            </div>
            <div className="mt-1 text-sm opacity-70">
              libérées par an ({resultats.collaborateursActifs} collaborateurs actifs)
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400">
              {formatEuros(resultats.valeurAnnuelle)}
            </div>
            <div className="mt-1 text-sm opacity-70">
              de temps de travail valorisé (salaires chargés)
            </div>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-400">
              {resultats.etp.toFixed(1)} ETP
            </div>
            <div className="mt-1 text-sm opacity-70">
              d&apos;équivalent temps plein réinvestis dans le métier
            </div>
          </div>
        </div>
        <div className="mt-auto pt-8">
          <BookingCtaButton className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90">
            Valider ce potentiel en 30 minutes
            <ArrowRight className="size-4" />
          </BookingCtaButton>
          <p className="mt-3 text-center text-xs opacity-60">
            Diagnostic gratuit, que vous travailliez avec nous ou non.
          </p>
        </div>
        </LeadGate>
      </div>
    </div>
  );
}
