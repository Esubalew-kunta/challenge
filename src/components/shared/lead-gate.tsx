"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Mail,
  User,
  Phone,
  Building2,
  Globe,
  ArrowRight,
  Loader2,
  CheckCircle2,
} from "lucide-react";
import { DEFAULT_PHONE_COUNTRY } from "@/lib/phone-countries";
import { CountrySelect } from "@/components/shared/country-select";
import { normalisePhone } from "@/lib/schemas/identity";
import { track } from "@vercel/analytics";
import {
  leadSubmissionSchema,
  FREE_EMAIL_MESSAGE,
  FREE_EMAIL_FALLBACK_HINT,
  type LeadSource,
} from "@/lib/schemas/lead";
import {
  getCapturedLead,
  markLeadCaptured,
} from "@/lib/lead-capture-state";
import { t } from "@/lib/ui-strings";
import type { Locale } from "@/lib/i18n";

/**
 * Le formulaire d'identité du site — nom, téléphone, email professionnel.
 *
 * Première étape de TOUT point de génération de lead : calendrier Cal.com,
 * playbook, audit GEO, catalogue de formations, challenge, scanner,
 * diagnostic, calculateur de ROI, blog, glossaire.
 *
 * Généralise `BookingGate`, qui faisait déjà exactement ça pour les quatre
 * chemins menant au calendrier. Ce composant en reprend la structure et ses
 * choix durement acquis :
 *
 * • `noValidate` — la validation native du navigateur ouvre ses propres bulles
 *   par-dessus les messages Zod et affiche les deux à la fois.
 * • Les libellés `sr-only` liés par `htmlFor` restent, malgré les placeholders :
 *   un placeholder n'est pas un libellé pour un lecteur d'écran.
 * • Le message d'erreur du SERVEUR est réaffiché tel quel quand il y en a un —
 *   ne jamais retomber sur une chaîne générique qui cache la vraie raison.
 *
 * Deux façons d'aboutir, selon ce qu'on garde derrière la porte :
 * • `children` — révélé après capture (calendrier, résultats du calculateur).
 * • `successTitle` / `successMessage` — état de confirmation (téléchargement,
 *   inscription). Si les deux sont fournis, `children` gagne.
 */

type ExtraField = "company" | "website";

/** Contrat minimal attendu d'un schéma Zod, sans importer ses génériques. */
type ParsesForm = {
  safeParse: (v: unknown) =>
    | { success: true; data: Record<string, unknown> }
    | { success: false; error: { issues: { path: PropertyKey[]; message: string }[] } };
};

type LeadGateProps = {
  /**
   * `LeadSource` pour les formulaires qui postent sur /api/lead. Le type reste
   * ouvert parce que /api/catalogue attend ses propres valeurs libres
   * ("catalogue-page", "catalogue-formation"…) — l'union préserve
   * l'autocomplétion sans refuser ces chaînes.
   */
  source: LeadSource | (string & {});
  /** Route de soumission. Défaut : /api/lead. */
  endpoint?: string;
  /**
   * Schéma de validation client. Défaut : `leadSubmissionSchema`.
   * Doit être LE MÊME que celui de la route — c'est précisément la divergence
   * client/serveur qui rendait la règle « email professionnel » contournable
   * sur le diagnostic.
   */
  schema?: ParsesForm;
  /** Omis en variante `bare` : c'est l'appelant qui porte le titre. */
  title?: string;
  subtitle?: string;
  ctaLabel: string;
  /**
   * `card` — le composant fournit son propre encadré (défaut).
   * `bare` — champs seuls, pour les emplacements qui ont DÉJÀ leur carte et
   *   leur titre (pop-up de sortie, encadré de /outils/audit-geo-gratuit).
   *   Sans ça, la carte se dessine deux fois.
   */
  variant?: "card" | "bare";
  /**
   * `dark` pour les blocs posés sur `bg-foreground` (scanner d'opportunités) :
   * les champs clairs y deviennent illisibles. Le comportement est identique,
   * seules les classes changent.
   */
  tone?: "light" | "dark";
  /** Distingue les ids de champs quand plusieurs instances coexistent. */
  context: string;
  /** Champs supplémentaires. `company` est requis pour geo-audit et challenge. */
  extraFields?: readonly ExtraField[];
  /** Données jointes au lead (réponses de wizard, slug de formation…). */
  extraPayload?: Record<string, unknown>;
  /** Révélé une fois la capture faite. */
  children?: React.ReactNode;
  successTitle?: string;
  successMessage?: string;
  /**
   * Lien affiché sous le message de confirmation. Le scanner et les blocs du
   * blog enchaînent sur « réservez un diagnostic » — sans ça, l'état de succès
   * est un cul-de-sac juste après le moment de plus forte intention.
   */
  successCta?: { label: string; href: string };
  /**
   * Note sous le bouton.
   *
   * `ReactNode` et pas `string` : la note doit pouvoir porter un lien vers la
   * politique de confidentialité. Discrete, oui. Illisible, non : le RGPD
   * exige une information « facilement accessible », et une mention rendue
   * volontairement invisible invalide le consentement au lieu de le fonder.
   */
  privacyNote?: React.ReactNode;
  /**
   * Langue du formulaire. Le pied de page et les CTA de réservation sont rendus
   * sur les pages EN aussi : sans ce fil, /en/capacity affiche un formulaire
   * entièrement français.
   *
   * Limite connue et assumée : seul le CHROME est traduit. Les messages de
   * validation viennent des schémas Zod et restent en français — les localiser
   * demande de porter chaque message des schémas partagés, ce qui n'est pas
   * dans le périmètre de ce changement.
   */
  locale?: Locale;
  /** Appelé après une capture réussie. */
  onCaptured?: () => void;
  /**
   * Valeur initiale de l'email, quand elle est déjà connue par un autre chemin
   * que `getCapturedLead()` — la newsletter en deux temps, qui a l'email de
   * l'étape 1 mais pas encore de capture complète.
   */
  prefillEmail?: string;
  className?: string;
};

const INPUT_CLASS = {
  light:
    "w-full rounded-xl border-2 border-border bg-background py-3.5 pl-12 pr-4 text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
  dark: "w-full rounded-xl border-2 border-background/20 bg-background/10 py-3.5 pl-12 pr-4 text-background placeholder:text-background/50 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30",
} as const;

// Le sélecteur d'indicatif : mêmes bordure, rayon et hauteur que la saisie,
// pour que les deux se lisent comme un seul champ. Largeur fixe — la liste
// contient « BL +590 » comme « GB +44 », et un champ qui change de largeur en
// changeant de pays fait sauter la mise en page.
const SELECT_CLASS = {
  light:
    "flex h-full w-[7.5rem] items-center justify-between gap-1 rounded-xl border-2 border-border bg-background px-3 py-3.5 text-sm text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20",
  dark: "flex h-full w-[7.5rem] items-center justify-between gap-1 rounded-xl border-2 border-background/20 bg-background/10 px-3 py-3.5 text-sm text-background transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30",
} as const;

const ICON_CLASS = {
  light: "absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground",
  dark: "absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-background/50",
} as const;

const ERROR_CLASS = {
  light: "mt-1.5 pl-1 text-sm text-destructive",
  dark: "mt-1.5 pl-1 text-sm text-red-300",
} as const;

const HINT_CLASS = {
  light: "mt-1 pl-1 text-xs text-muted-foreground",
  dark: "mt-1 pl-1 text-xs text-background/60",
} as const;

const BUTTON_CLASS = {
  light:
    "btn-gradient flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-base font-bold text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 disabled:opacity-60",
  dark: "flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-base font-bold text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 disabled:opacity-60",
} as const;

type Tone = keyof typeof INPUT_CLASS;

export function LeadGate({
  source,
  endpoint = "/api/lead",
  schema = leadSubmissionSchema as unknown as ParsesForm,
  title,
  subtitle,
  ctaLabel,
  variant = "card",
  tone = "light",
  locale = "fr",
  context,
  extraFields = [],
  extraPayload,
  children,
  successTitle,
  successMessage,
  successCta,
  privacyNote,
  onCaptured,
  prefillEmail,
  className,
}: LeadGateProps) {
  const s = t(locale);
  const note = privacyNote ?? s.gatePrivacy;
  // Prérempli depuis une capture précédente : on ne refait pas saisir ce qu'on
  // sait déjà. Lu une seule fois, à l'initialisation — pas dans un effet, qui
  // provoquerait un second rendu et écraserait une saisie en cours.
  const known = typeof window !== "undefined" ? getCapturedLead() : null;

  const [name, setName] = useState(known?.name ?? "");
  const [phone, setPhone] = useState(known?.phone ?? "");
  const [phoneCountry, setPhoneCountry] = useState(DEFAULT_PHONE_COUNTRY);
  const [email, setEmail] = useState(known?.email ?? prefillEmail ?? "");
  const [company, setCompany] = useState("");
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [captured, setCaptured] = useState(false);

  const wantsCompany = extraFields.includes("company");
  const wantsWebsite = extraFields.includes("website");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setFormError("");

    const candidate = {
      name: name.trim(),
      // Envoyé en E.164 : c'est la seule forme composable depuis n'importe où,
      // et la seule qui rapproche deux saisies du même numéro en base.
      // `phoneCountry` part avec, pour que le serveur puisse revalider le
      // couple exactement comme le navigateur vient de le faire.
      phone: normalisePhone(phone.trim(), phoneCountry),
      phoneCountry,
      email: email.trim(),
      source,
      ...(wantsCompany ? { company: company.trim() } : {}),
      ...(wantsWebsite ? { website: website.trim() } : {}),
      ...extraPayload,
    };

    const parsed = schema.safeParse(candidate);
    if (!parsed.success) {
      // Une erreur PAR CHAMP : un message unique en tête de formulaire oblige
      // à deviner lequel des cinq champs il désigne.
      const byField: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0] ?? "_");
        if (!byField[key]) byField[key] = issue.message;
      }
      setErrors(byField);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        setFormError(
          typeof payload?.error === "string"
            ? payload.error
            : s.gateGenericError,
        );
        return;
      }

      track("lead_capture_submit", { source, context });
      markLeadCaptured({
        name: String(parsed.data.name ?? ""),
        phone: String(parsed.data.phone ?? ""),
        email: String(parsed.data.email ?? ""),
      });
      setCaptured(true);
      onCaptured?.();
    } catch {
      setFormError(s.gateNetworkError);
    } finally {
      setLoading(false);
    }
  };

  if (captured) {
    if (children) return <>{children}</>;
    return (
      <Shell variant={variant} className={className}>
        <div className="text-center" role="status">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-success/10">
            <CheckCircle2 className="h-7 w-7 text-success" aria-hidden="true" />
          </div>
          <h3 className="text-lg font-bold text-foreground">
            {successTitle ?? s.gateSuccessTitle}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {successMessage ?? s.gateSuccessMessage}
          </p>
          {successCta && (
            <Link
              href={successCta.href}
              className="btn-gradient mt-6 inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold text-white"
            >
              {successCta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </div>
      </Shell>
    );
  }

  return (
    <Shell variant={variant} className={className}>
      {title && (
        <h3 className="text-lg font-bold text-foreground">{title}</h3>
      )}
      {subtitle && (
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}

      <form
        onSubmit={handleSubmit}
        className={title || subtitle ? "mt-6 space-y-3" : "space-y-3"}
        noValidate
      >
        <Field
          id={`lead-gate-${context}-name`}
          label={s.gateName}
          icon={User}
          type="text"
          autoComplete="name"
          placeholder={s.gateNamePlaceholder}
          value={name}
          onChange={setName}
          error={errors.name}
          tone={tone}
        />

        <PhoneField
          id={`lead-gate-${context}-phone`}
          label={s.gatePhone}
          placeholder={s.gatePhonePlaceholder}
          value={phone}
          onChange={setPhone}
          country={phoneCountry}
          onCountryChange={setPhoneCountry}
          error={errors.phone}
          tone={tone}
        />

        <Field
          id={`lead-gate-${context}-email`}
          label={s.gateEmail}
          icon={Mail}
          type="email"
          autoComplete="email"
          placeholder={s.gateEmailPlaceholder}
          value={email}
          onChange={setEmail}
          error={errors.email}
          // Le blocage des adresses grand public refuse des dirigeants de TPE
          // qui n'ont QUE leur gmail. Sans cette porte, la règle transforme le
          // prospect le mieux qualifié du site en cul-de-sac.
          hint={errors.email === FREE_EMAIL_MESSAGE ? FREE_EMAIL_FALLBACK_HINT : undefined}
          tone={tone}
        />

        {wantsCompany && (
          <Field
            id={`lead-gate-${context}-company`}
            label={s.gateCompany}
            icon={Building2}
            type="text"
            autoComplete="organization"
            placeholder={s.gateCompanyPlaceholder}
            value={company}
            onChange={setCompany}
            error={errors.company}
            tone={tone}
          />
        )}

        {wantsWebsite && (
          <Field
            id={`lead-gate-${context}-website`}
            label={s.gateWebsite}
            icon={Globe}
            type="text"
            autoComplete="url"
            placeholder={s.gateWebsitePlaceholder}
            value={website}
            onChange={setWebsite}
            error={errors.website}
            tone={tone}
          />
        )}

        {formError && (
          <p role="alert" className={ERROR_CLASS[tone]}>
            {formError}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className={BUTTON_CLASS[tone]}
        >
          {loading ? (
            <span className="flex items-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
              {s.gateSending}
            </span>
          ) : (
            <>
              {ctaLabel}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </>
          )}
        </button>

        {note && (
          <p className={`pt-1 text-center ${tone === "dark" ? "text-background/60" : "text-muted-foreground"} text-xs`}>
            {note}
          </p>
        )}
      </form>
    </Shell>
  );
}

/**
 * L'enveloppe du formulaire — définie ICI, au niveau du module, et pas dans le
 * corps de LeadGate.
 *
 * Déclarée à l'intérieur, elle était une NOUVELLE fonction à chaque rendu.
 * React compare les types de composants par identité : un type différent n'est
 * pas re-rendu, il est DÉMONTÉ puis remonté. Comme cette enveloppe contient le
 * formulaire entier, chaque frappe provoquait la destruction des champs et la
 * perte du focus — le champ semblait se désactiver à chaque lettre.
 *
 * La règle, générale : ne jamais définir un composant pendant le rendu d'un
 * autre. S'il a besoin de l'état du parent, cela passe par des props.
 */
function Shell({
  variant,
  className,
  children,
}: {
  variant?: "card" | "bare";
  className?: string;
  children: React.ReactNode;
}) {
  return variant === "bare" ? (
    <div className={className}>{children}</div>
  ) : (
    <div className={cardClass(className)}>{children}</div>
  );
}

function cardClass(extra?: string): string {
  return [
    "rounded-2xl border border-border bg-white p-6 shadow-xl shadow-black/[0.04] sm:p-8",
    extra ?? "",
  ]
    .filter(Boolean)
    .join(" ");
}

type FieldProps = {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string; "aria-hidden"?: boolean }>;
  type: string;
  autoComplete: string;
  placeholder: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  hint?: string;
  tone: Tone;
};

/**
 * Téléphone : sélecteur d'indicatif + saisie nationale.
 *
 * Un `<select>` natif, délibérément. Un composant sur mesure serait plus joli,
 * mais celui-ci est déjà accessible au clavier, se recherche en tapant les
 * premières lettres, et se comporte comme un sélecteur de système sur mobile —
 * trois choses qu'on réécrit mal et qui comptent davantage, sur un formulaire,
 * que l'esthétique du menu déroulant.
 *
 * Le pays sert à deux choses : lever l'ambiguïté d'un « 0612… » (valide en
 * France comme au Maroc, mais ce ne sont pas les mêmes abonnés) et produire la
 * forme E.164 envoyée au serveur.
 */
function PhoneField({
  id,
  label,
  placeholder,
  value,
  onChange,
  country,
  onCountryChange,
  error,
  tone,
}: {
  id: string;
  label: string;
  placeholder?: string;
  value: string;
  onChange: (v: string) => void;
  country: string;
  onCountryChange: (v: string) => void;
  error?: string;
  tone: Tone;
}) {
  const errorId = `${id}-error`;
  return (
    <div>
      <div className="flex gap-2">
        <CountrySelect
          id={`${id}-country`}
          value={country}
          onChange={onCountryChange}
          tone={tone}
          buttonClass={SELECT_CLASS[tone]}
        />
        <div className="relative flex-1">
          <label htmlFor={id} className="sr-only">
            {label}
          </label>
          <Phone className={ICON_CLASS[tone]} aria-hidden={true} />
          <input
            id={id}
            type="tel"
            name={id}
            autoComplete="tel"
            inputMode="tel"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? errorId : undefined}
            className={INPUT_CLASS[tone]}
          />
        </div>
      </div>
      {error && (
        <p id={errorId} role="alert" className={ERROR_CLASS[tone]}>
          {error}
        </p>
      )}
    </div>
  );
}

function Field({
  id,
  label,
  icon: Icon,
  type,
  autoComplete,
  placeholder,
  value,
  onChange,
  error,
  hint,
  tone,
}: FieldProps) {
  const errorId = `${id}-error`;
  return (
    <div>
      <div className="relative">
        <label htmlFor={id} className="sr-only">
          {label}
        </label>
        <Icon
          className={ICON_CLASS[tone]}
          aria-hidden={true}
        />
        <input
          id={id}
          type={type}
          name={id}
          autoComplete={autoComplete}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId : undefined}
          className={INPUT_CLASS[tone]}
        />
      </div>
      {error && (
        <p id={errorId} role="alert" className={ERROR_CLASS[tone]}>
          {error}
        </p>
      )}
      {hint && (
        <p className={HINT_CLASS[tone]}>{hint}</p>
      )}
    </div>
  );
}
