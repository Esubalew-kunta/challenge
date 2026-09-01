/* GÉNÉRÉ par scripts/build-benchmark-packs.mjs. Ne pas éditer à la main.
   Le poids est mesuré sur le fichier de `public/benchmark-packs/`, jamais
   écrit à la main : la maquette annonçait 80 Ko pour les quatre packs, ce qui
   est vrai d'un seul. Le test `benchmark-packs` refait la mesure. */

import type { TrackId } from "../types.ts";

export type SkillPack = {
  /** Le nom du fichier dans `public/benchmark-packs/`. */
  file: string;
  /** Le poids réel, en octets, au moment de la génération. */
  bytes: number;
  /** Les skills, dans l'ordre où l'équipe les a listées. */
  skills: string[];
};

export const PACKS: Record<TrackId, SkillPack> = {
  growth: {
    file: "aimakers-skills-growth.zip",
    bytes: 81146,
    skills: ["ai-seo", "seo-audit", "content-strategy"],
  },
  eng: {
    file: "aimakers-skills-eng.zip",
    bytes: 16363,
    skills: ["improve-codebase-architecture", "code-review", "git-guardrails-claude-code"],
  },
  ops: {
    file: "aimakers-skills-ops.zip",
    bytes: 105354,
    skills: ["n8n-workflow-patterns", "n8n-error-handling-official", "n8n-workflow-lifecycle-official"],
  },
  fin: {
    file: "aimakers-skills-fin.zip",
    bytes: 42543,
    skills: ["sales-enablement", "excel-automation", "kpi-dashboard-design"],
  },
};
