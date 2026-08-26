import type { ChallengeLocale, MilestoneResourceId } from "./types";
import type { ResourceCategory } from "./profile";

export type ResourceDay = 2 | 10 | 20 | 30;

export interface LocalizedMilestoneResource {
  id: MilestoneResourceId;
  day: ResourceDay;
  title: string;
  path: string;
}

export interface LocalizedSkillsPack {
  id: `${ResourceCategory}-skills`;
  category: ResourceCategory;
  title: string;
  path: string;
}

const RESOURCE_ROOT = "/resources/claude-code-challenge";

interface MilestoneResourceDefinition {
  id: MilestoneResourceId;
  day: ResourceDay;
  titles: Record<ChallengeLocale, string>;
}

const MILESTONE_RESOURCES: readonly MilestoneResourceDefinition[] = [
  {
    id: "second-brain",
    day: 2,
    titles: { en: "Second Brain Workspace", fr: "Espace Second Brain" },
  },
  {
    id: "starter-kit",
    day: 10,
    titles: {
      en: "Claude Code Starter Kit",
      fr: "Kit de démarrage Claude Code",
    },
  },
  {
    id: "workflow-kit",
    day: 20,
    titles: {
      en: "Claude Code Workflow Kit",
      fr: "Kit de workflows Claude Code",
    },
  },
  {
    id: "company-kit",
    day: 30,
    titles: {
      en: "Company Claude Kit",
      fr: "Kit Claude pour l’entreprise",
    },
  },
];

const SKILLS_PACK_TITLES: Record<
  ResourceCategory,
  Record<ChallengeLocale, string>
> = {
  developer: {
    en: "Developer Skills Pack",
    fr: "Pack de skills Développeur",
  },
  consultant: {
    en: "Consultant Skills Pack",
    fr: "Pack de skills Consultant",
  },
  operations: {
    en: "Operations Skills Pack",
    fr: "Pack de skills Opérations",
  },
  founder: { en: "Founder Skills Pack", fr: "Pack de skills Fondateur" },
  marketing: {
    en: "Marketing Skills Pack",
    fr: "Pack de skills Marketing",
  },
};

export function milestoneResourceForDay(
  day: number,
  locale: ChallengeLocale,
): LocalizedMilestoneResource | undefined {
  const resource = MILESTONE_RESOURCES.find((candidate) => candidate.day === day);
  if (!resource) return undefined;

  return {
    id: resource.id,
    day: resource.day,
    title: resource.titles[locale],
    path: `${RESOURCE_ROOT}/${locale}/${resource.id}.zip`,
  };
}

export function skillsPackFor(
  category: ResourceCategory,
  locale: ChallengeLocale,
): LocalizedSkillsPack {
  const id = `${category}-skills` as const;
  return {
    id,
    category,
    title: SKILLS_PACK_TITLES[category][locale],
    path: `${RESOURCE_ROOT}/${locale}/skills/${id}.zip`,
  };
}
