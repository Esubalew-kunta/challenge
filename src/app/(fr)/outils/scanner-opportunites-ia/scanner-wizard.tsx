"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { LeadGate } from "@/components/shared/lead-gate";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  BarChart3,
  Briefcase,
  Building2,
  CalendarClock,
  CheckCircle2,
  Factory,
  FileText,
  Headphones,
  HeartPulse,
  Megaphone,
  PenLine,
  Receipt,
  ShoppingCart,
  Target,
  UserPlus,
  type LucideIcon,
} from "lucide-react";
import { track } from "@vercel/analytics";
import {
  MAX_PAINS,
  MIN_PAINS,
  PAINS,
  SECTORS,
  TEAM_SIZES,
  getPainLabels,
  getSectorLabel,
  getTeamSizeLabel,
  scoreOpportunities,
  type PainId,
  type SectorId,
  type TeamSizeId,
} from "@/lib/scanner-opportunites";

const SECTOR_ICONS: Record<SectorId, LucideIcon> = {
  agence: Megaphone,
  sante: HeartPulse,
  industrie: Factory,
  "services-b2b": Briefcase,
  commerce: ShoppingCart,
  autre: Building2,
};

const PAIN_ICONS: Record<PainId, LucideIcon> = {
  factures: Receipt,
  prospection: Target,
  reunions: CalendarClock,
  support: Headphones,
  contenu: PenLine,
  reporting: BarChart3,
  recrutement: UserPlus,
  "appels-offres": FileText,
};

const STEP_TITLES = [
  "Votre secteur d'activité",
  "La taille de votre entreprise",
  "Vos irritants du quotidien",
];

type Step = 0 | 1 | 2 | 3;

export function ScannerWizard() {
  const prefersReducedMotion = useReducedMotion();
  const [step, setStep] = useState<Step>(0);
  const [direction, setDirection] = useState(1);
  const [started, setStarted] = useState(false);
  const [resultsTracked, setResultsTracked] = useState(false);

  const [sector, setSector] = useState<SectorId | null>(null);
  const [teamSize, setTeamSize] = useState<TeamSizeId | null>(null);
  const [pains, setPains] = useState<PainId[]>([]);

  const slideVariants = {
    enter: (dir: number) => ({
      x: prefersReducedMotion ? 0 : dir > 0 ? 60 : -60,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir: number) => ({
      x: prefersReducedMotion ? 0 : dir > 0 ? -60 : 60,
      opacity: 0,
    }),
  };

  const goTo = (next: Step) => {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  };

  const handleSector = (id: SectorId) => {
    setSector(id);
    if (!started) {
      setStarted(true);
      track("scanner_start", { sector: id });
    }
    goTo(1);
  };

  const handleTeamSize = (id: TeamSizeId) => {
    setTeamSize(id);
    goTo(2);
  };

  const togglePain = (id: PainId) => {
    setPains((prev) => {
      if (prev.includes(id)) return prev.filter((p) => p !== id);
      if (prev.length >= MAX_PAINS) return prev;
      return [...prev, id];
    });
  };

  const showResults = () => {
    if (sector && !resultsTracked) {
      setResultsTracked(true);
      track("scanner_results", { sector });
    }
    goTo(3);
  };

  const progress = step === 3 ? 100 : (step / 3) * 100;

  return (
    <div className="rounded-2xl border border-border bg-background p-6 shadow-xl sm:p-8">
      {/* Barre de progression */}
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={Math.round(progress)}
        aria-label="Progression du scanner"
        className="h-1.5 w-full overflow-hidden rounded-full bg-primary/10"
      >
        <motion.div
          className="h-full rounded-full bg-primary"
          initial={false}
          animate={{ width: `${Math.max(progress, 6)}%` }}
          transition={{ duration: prefersReducedMotion ? 0 : 0.4 }}
        />
      </div>
      <div className="mt-3 flex items-center justify-between text-xs text-muted-foreground">
        <span>{step < 3 ? `Étape ${step + 1} sur 3` : "Vos résultats"}</span>
        {step > 0 && step < 3 && (
          <button
            type="button"
            onClick={() => goTo((step - 1) as Step)}
            className="flex items-center gap-1 rounded-md px-2 py-1 transition-colors hover:bg-muted hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Retour
          </button>
        )}
        {step === 3 && (
          <button
            type="button"
            onClick={() => goTo(2)}
            className="flex items-center gap-1 rounded-md px-2 py-1 transition-colors hover:bg-muted hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" />
            Modifier mes réponses
          </button>
        )}
      </div>

      <div className="mt-6">
        <AnimatePresence mode="wait" custom={direction} initial={false}>
          {step === 0 && (
            <motion.div
              key="sector"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
            >
              <h2 className="text-xl font-bold text-foreground">
                {STEP_TITLES[0]}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Certains systèmes sont plus rentables dans certains secteurs.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {SECTORS.map((s) => {
                  const Icon = SECTOR_ICONS[s.id];
                  const selected = sector === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => handleSector(s.id)}
                      aria-pressed={selected}
                      className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-colors ${
                        selected
                          ? "border-primary bg-primary/5"
                          : "border-border bg-background hover:border-primary/40"
                      }`}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon
                          className="h-5 w-5 text-primary"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {s.label}
                      </span>
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="teamSize"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
            >
              <h2 className="text-xl font-bold text-foreground">
                {STEP_TITLES[1]}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                La taille détermine quels systèmes se rentabilisent le plus
                vite.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {TEAM_SIZES.map((s) => {
                  const selected = teamSize === s.id;
                  return (
                    <button
                      key={s.id}
                      type="button"
                      onClick={() => handleTeamSize(s.id)}
                      aria-pressed={selected}
                      className={`rounded-xl border-2 p-4 text-left text-sm font-medium text-foreground transition-colors ${
                        selected
                          ? "border-primary bg-primary/5"
                          : "border-border bg-background hover:border-primary/40"
                      }`}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="pains"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
            >
              <h2 className="text-xl font-bold text-foreground">
                {STEP_TITLES[2]}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Sélectionnez de {MIN_PAINS} à {MAX_PAINS} sujets qui coûtent le
                plus de temps à vos équipes.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {PAINS.map((p) => {
                  const Icon = PAIN_ICONS[p.id];
                  const selected = pains.includes(p.id);
                  const disabled = !selected && pains.length >= MAX_PAINS;
                  return (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => togglePain(p.id)}
                      aria-pressed={selected}
                      disabled={disabled}
                      className={`flex items-center gap-3 rounded-xl border-2 p-4 text-left transition-colors ${
                        selected
                          ? "border-primary bg-primary/5"
                          : "border-border bg-background hover:border-primary/40"
                      } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                        <Icon
                          className="h-4.5 w-4.5 text-primary"
                          aria-hidden="true"
                        />
                      </span>
                      <span className="flex-1 text-sm font-medium text-foreground">
                        {p.label}
                      </span>
                      {selected && (
                        <CheckCircle2
                          className="h-5 w-5 shrink-0 text-primary"
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  );
                })}
              </div>
              <div className="mt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
                <span className="text-xs text-muted-foreground">
                  {pains.length} sélectionné{pains.length > 1 ? "s" : ""} sur{" "}
                  {MAX_PAINS} maximum
                </span>
                <button
                  type="button"
                  onClick={showResults}
                  disabled={pains.length < MIN_PAINS}
                  className="btn-gradient flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white disabled:opacity-50"
                >
                  Voir mes opportunités
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && sector && teamSize && (
            <motion.div
              key="results"
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: prefersReducedMotion ? 0 : 0.25 }}
            >
              <ScannerResults
                sector={sector}
                teamSize={teamSize}
                pains={pains}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

interface ScannerResultsProps {
  sector: SectorId;
  teamSize: TeamSizeId;
  pains: PainId[];
}

function ScannerResults({ sector, teamSize, pains }: ScannerResultsProps) {
  const scored = useMemo(
    () => scoreOpportunities({ sector, teamSize, pains }),
    [sector, teamSize, pains],
  );
  const top = scored.slice(0, 3);
  const remaining = Math.max(scored.length - top.length, 0);

  return (
    <div>
      <h2 className="text-xl font-bold text-foreground">
        {top.length > 1
          ? `Vos ${top.length} opportunités principales`
          : "Votre opportunité principale"}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Classées selon vos irritants et votre secteur. Chaque chiffre est
        sourcé.
      </p>

      <div className="mt-6 grid grid-cols-1 gap-4 lg:grid-cols-3">
        {top.map(({ opportunity }, index) => (
          <article
            key={opportunity.id}
            className="flex flex-col rounded-2xl border border-border bg-muted/30 p-5"
          >
            <span className="font-mono text-xs font-bold text-primary">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="mt-2 text-base font-bold leading-snug text-foreground">
              {opportunity.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {opportunity.description}
            </p>
            <div className="mt-4">
              <div className="text-3xl font-bold text-primary">
                {opportunity.stat}
              </div>
              <p className="mt-1 text-sm leading-snug text-foreground">
                {opportunity.statNote}
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Source : {opportunity.source}
              </p>
            </div>
            <ul className="mt-auto flex flex-wrap gap-2 pt-4">
              {opportunity.tools.map((tool) => (
                <li
                  key={tool.name}
                  className="flex items-center gap-1.5 rounded-full border border-border bg-background px-2.5 py-1 text-xs font-medium text-foreground"
                >
                  <Image
                    src={tool.logo}
                    alt=""
                    width={14}
                    height={14}
                    className="h-3.5 w-3.5 object-contain"
                  />
                  {tool.name}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="mt-8">
        <ScannerCapture
          sector={sector}
          teamSize={teamSize}
          pains={pains}
          remaining={remaining}
        />
      </div>
    </div>
  );
}

interface ScannerCaptureProps extends ScannerResultsProps {
  remaining: number;
}

/**
 * Dernière étape du scanner : l'identité, avant l'envoi du rapport.
 *
 * Ne collectait que l'email et ne posait pas `markLeadCaptured()` — un visiteur
 * qui venait de demander son rapport restait « inconnu » pour la porte de
 * réservation. Les deux sont corrigés en déléguant à `LeadGate`.
 *
 * `tone="dark"` : le bloc est posé sur `bg-foreground`, où les champs clairs
 * du formulaire standard seraient illisibles.
 */
function ScannerCapture({
  sector,
  teamSize,
  pains,
  remaining,
}: ScannerCaptureProps) {
  return (
    <div className="rounded-2xl bg-foreground p-6 text-background sm:p-8">
      <h3 className="text-lg font-bold">Recevez votre rapport complet</h3>
      <p className="mt-1 text-sm opacity-80">
        Toutes vos opportunités
        {remaining > 0 ? ` (${remaining} de plus pour votre profil)` : ""}, les
        chiffres sourcés, et par où commencer.
      </p>

      <div className="mt-5">
        <LeadGate
          source="scanner"
          variant="bare"
          tone="dark"
          context="scanner"
          ctaLabel="Recevoir mon rapport"
          extraPayload={{
            sector: getSectorLabel(sector),
            teamSize: getTeamSizeLabel(teamSize),
            pains: getPainLabels(pains),
          }}
          successTitle="Votre rapport arrive dans votre boîte mail"
          successMessage="Vous y trouverez toutes vos opportunités, les chiffres sourcés et par où commencer pour votre profil."
          successCta={{
            label: "Aller plus loin : réservez un diagnostic gratuit",
            href: "/contact",
          }}
          privacyNote="Zéro spam. Vos données restent chez nous."
        />
      </div>
    </div>
  );
}
