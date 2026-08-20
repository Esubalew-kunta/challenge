"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { LeadGate } from "@/components/shared/lead-gate";
import { diagnosticSubmissionSchema } from "@/lib/schemas/diagnostic";
import { captureContent } from "@/lib/diagnostic-config";

/**
 * Dernière étape du wizard de diagnostic : l'identité, avant le résultat.
 *
 * Portait une TROISIÈME liste de domaines grand public inlinée (après celles de
 * `schemas/lead.ts` et `schemas/diagnostic.ts`), elle aussi amputée d'icloud.com,
 * et validée uniquement dans ce composant. Tout passe désormais par `LeadGate`
 * et `diagnosticSubmissionSchema` — le MÊME schéma que /api/diagnostic, donc la
 * règle ne se contourne plus en postant directement sur la route.
 *
 * Le POST est fait par `LeadGate`. Le wizard ne garde que ce qu'il est seul à
 * savoir faire : écrire le résultat en session et naviguer.
 */

interface Props {
  /** Réponses et résultat calculé, joints au lead. */
  payload: Record<string, unknown>;
  /** Appelé après une capture réussie (session + navigation). */
  onCaptured: () => void;
}

export function DiagnosticCapture({ payload, onCaptured }: Props) {
  return (
    <div className="mx-auto max-w-md text-center">
      <div className="glass-card p-8 sm:p-10">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10"
        >
          <Mail className="h-8 w-8 text-primary" />
        </motion.div>

        <h2 className="mb-2 font-serif text-2xl font-bold text-foreground sm:text-3xl">
          {captureContent.title}
        </h2>
        <p className="mb-8 text-sm leading-relaxed text-muted-foreground">
          {captureContent.subtitle}
        </p>

        {/* `bare` : la glass-card ci-dessus EST la carte. */}
        <div className="text-left">
          <LeadGate
            source="diagnostic"
            endpoint="/api/diagnostic"
            schema={diagnosticSubmissionSchema}
            variant="bare"
            context="diagnostic"
            ctaLabel={captureContent.ctaLabel}
            extraPayload={payload}
            onCaptured={onCaptured}
            privacyNote=""
          />
        </div>
      </div>
    </div>
  );
}
