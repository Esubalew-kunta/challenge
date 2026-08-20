import type { Locale } from "./i18n";
import { withResolvedEnLinks } from "./en-links";
import {
  teamMeta, teamSchema, teamHero, teamLeadership, teamEngineering,
  teamExperts, teamStats, teamBooking,
} from "./team";
import {
  teamMetaEn, teamSchemaEn, teamHeroEn, teamLeadershipEn, teamEngineeringEn,
  teamExpertsEn, teamStatsEn, teamBookingEn,
} from "./team.en";

/** Sélection par langue de /equipe. Type STRUCTUREL. */
type Link = { readonly label: string; readonly href: string };

export type TeamContent = {
  readonly meta: { readonly title: string; readonly description: string };
  readonly schema: {
    readonly breadcrumbHome: string;
    readonly breadcrumbCurrent: string;
  };
  readonly hero: {
    readonly badge: string;
    readonly title: string;
    readonly intro: string;
  };
  readonly leadership: { readonly badge: string; readonly title: string };
  readonly engineering: {
    readonly badge: string;
    readonly title: string;
    readonly linkLead: string;
    readonly linkLabel: string;
    readonly linkHref: string;
    readonly linkTail: string;
    readonly hiringTitle: string;
    readonly hiringText: string;
    readonly hiringCta: Link;
  };
  readonly experts: {
    readonly badge: string;
    readonly title: string;
    readonly intro: string;
    readonly outroLead: string;
    readonly outroLink: Link;
  };
  readonly stats: readonly {
    readonly value: string;
    readonly label: string;
  }[];
  readonly booking: {
    readonly badge: string;
    readonly title: string;
    readonly intro: string;
    readonly benefits: readonly string[];
    readonly notReady: string;
    readonly gateTitle: string;
    readonly linkedinAria: string;
  };
};

const FR: TeamContent = {
  meta: teamMeta, schema: teamSchema, hero: teamHero,
  leadership: teamLeadership, engineering: teamEngineering,
  experts: teamExperts, stats: teamStats, booking: teamBooking,
};

const EN: TeamContent = withResolvedEnLinks({
  meta: teamMetaEn, schema: teamSchemaEn, hero: teamHeroEn,
  leadership: teamLeadershipEn, engineering: teamEngineeringEn,
  experts: teamExpertsEn, stats: teamStatsEn, booking: teamBookingEn,
});

export const TEAM: Record<Locale, TeamContent> = { fr: FR, en: EN };
