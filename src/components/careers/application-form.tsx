"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  CheckCircle2,
  FileText,
  Github,
  Globe,
  Linkedin,
  Loader2,
  Mail,
  Lock,
  Phone,
  Upload,
  User,
  X,
} from "lucide-react";
import type { JobRole } from "@/lib/careers/postes";
import { applicationSubmissionSchema } from "@/lib/schemas/application";
import { CountrySelect } from "@/components/shared/country-select";
import { DEFAULT_PHONE_COUNTRY } from "@/lib/phone-countries";
import { normalisePhone } from "@/lib/schemas/identity";

type ApplicationFormProps = {
  roles: readonly JobRole[];
  /** Slug préselectionné via ?role=, ou undefined si aucun / invalide. */
  initialRole?: string;
};

const INPUT_CLASS =
  "w-full rounded-xl border-2 border-border bg-background py-3.5 pl-12 pr-4 text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
const SELECT_CLASS =
  "w-full rounded-xl border-2 border-border bg-background py-3.5 pl-4 pr-4 text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
const ICON_CLASS =
  "pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground";
const ERROR_CLASS = "mt-1.5 pl-1 text-sm text-destructive";
const HINT_CLASS = "mt-1.5 pl-1 text-xs text-muted-foreground";
const LABEL_CLASS = "mb-1.5 block text-sm font-medium text-foreground";
/**
 * Bouton du sélecteur d'indicatif.
 *
 * CountrySelect ne pose aucune mise en page lui-même : il rend
 * « drapeau +33 chevron » et s'en remet ENTIÈREMENT à la classe reçue. Lui
 * passer le SELECT_CLASS du formulaire (`w-full`, sans flex) étirait le bouton
 * sur toute la ligne, écrasait le champ numéro à côté et laissait le drapeau,
 * l'indicatif et le chevron non centrés. Largeur fixe + flex, comme dans
 * lead-gate d'où vient le composant.
 */
const COUNTRY_BUTTON_CLASS =
  "flex h-full w-[7.5rem] shrink-0 items-center justify-between gap-1 rounded-xl border-2 border-border bg-background px-3 py-3.5 text-sm text-foreground transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";

const TEXTAREA_CLASS =
  "w-full rounded-xl border-2 border-border bg-background py-3.5 pl-12 pr-4 text-foreground placeholder:text-muted-foreground/60 transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20";
/**
 * Icône d'un champ MULTILIGNE : ancrée en haut, pas centrée verticalement.
 * ICON_CLASS centre sur la hauteur, ce qui place l'icône au milieu d'un
 * textarea de six lignes — à côté de rien.
 */
const TEXTAREA_ICON_CLASS =
  "pointer-events-none absolute left-4 top-4 h-5 w-5 text-muted-foreground";

type UploadStatus = "idle" | "uploading" | "done" | "error";

/** Types acceptés pour le CV comme pour la lettre déposée. */
const ACCEPTED_DOCS = ".pdf,.doc,.docx";

/**
 * Formulaire de candidature — /carrieres/postuler.
 *
 * Premier niveau de présélection avant les tests (hors périmètre ici).
 *
 * Depuis le 2026-08-12 il ne pose plus AUCUNE question de jugement : la
 * question éliminatoire du poste et celle du français passent au niveau
 * suivant. Ce qui reste est factuel — identité, liens, CV, lettre de
 * motivation, années d'expérience — et presque entièrement obligatoire. Le
 * téléphone et le site perso sont les deux seuls champs facultatifs.
 *
 * Le poste est VERROUILLÉ quand la personne arrive depuis une annonce
 * (`/carrieres/postuler?role=<slug>`) : elle a cliqué « Postuler » sur un
 * poste précis, lui laisser changer la valeur ensuite n'ouvre qu'une voie vers
 * une candidature envoyée au mauvais poste par inadvertance. Depuis
 * `/carrieres/postuler` sans paramètre, le choix reste ouvert.
 *
 * Poste en JSON via fetch (comportement principal), mais l'élément
 * `<form>` garde `method="POST"` et `action` vers la même route : si le JS
 * échoue, le navigateur envoie un POST classique en
 * `application/x-www-form-urlencoded`, que /api/careers-apply sait aussi
 * lire (voir sa gestion `isFormPost`).
 *
 * Les fichiers (CV, et lettre quand elle est déposée plutôt que saisie) partent
 * dès la sélection vers /api/careers-apply/resume, pas au submit final — un
 * envoi qui commence pendant que la personne remplit la suite est un envoi
 * qu'elle n'attend pas à la fin.
 *
 * Le CV étant désormais obligatoire, un échec d'upload BLOQUE l'envoi, alors
 * qu'il était auparavant sans conséquence. C'est le prix de l'exiger : le
 * message d'erreur invite donc explicitement à réessayer, plutôt que de
 * laisser la personne devant un bouton qui refuse sans dire pourquoi.
 *
 * Sans JS, le repli POST classique reste possible pour une lettre SAISIE ; le
 * dépôt de fichier, lui, demande JS par nature.
 */
export function ApplicationForm({ roles, initialRole }: ApplicationFormProps) {
  const [role, setRole] = useState(initialRole ?? roles[0]?.slug ?? "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneCountry, setPhoneCountry] = useState(DEFAULT_PHONE_COUNTRY);
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [githubUrl, setGithubUrl] = useState("");
  const [websiteUrl, setWebsiteUrl] = useState("");
  const [yearsExperience, setYearsExperience] = useState("");
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [resumeId, setResumeId] = useState("");
  const [resumeStatus, setResumeStatus] = useState<UploadStatus>("idle");
  const [coverLetterText, setCoverLetterText] = useState("");
  const [coverLetterFile, setCoverLetterFile] = useState<File | null>(null);
  const [coverLetterId, setCoverLetterId] = useState("");
  const [coverLetterStatus, setCoverLetterStatus] = useState<UploadStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formError, setFormError] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const selected = roles.find((r) => r.slug === role) ?? roles[0];
  if (!selected) return null;

  // Verrouillé seulement si le slug reçu existe vraiment : un ?role= inconnu
  // laisse le choix ouvert plutôt que de figer un poste arbitraire.
  const roleLocked = Boolean(initialRole && roles.some((r) => r.slug === initialRole));

  /**
   * Dépôt d'un document, CV ou lettre.
   *
   * Une seule fonction pour les deux : elles ne différaient que par le champ
   * `kind` et l'état mis à jour. Deux copies auraient divergé au premier
   * correctif appliqué d'un seul côté.
   */
  const uploadDocument = async (
    kind: "resume" | "cover-letter",
    file: File,
  ): Promise<void> => {
    const setFile = kind === "resume" ? setResumeFile : setCoverLetterFile;
    const setId = kind === "resume" ? setResumeId : setCoverLetterId;
    const setStatus = kind === "resume" ? setResumeStatus : setCoverLetterStatus;

    setFile(file);
    setId("");
    setStatus("uploading");
    try {
      const body = new FormData();
      body.append("file", file);
      body.append("applicationId", `pending-${Date.now()}`);
      body.append("roleSlug", selected.slug);
      body.append("kind", kind);
      const response = await fetch("/api/careers-apply/resume", {
        method: "POST",
        body,
      });
      const payload = await response.json().catch(() => null);
      if (!response.ok || !payload?.ok || typeof payload.resumeId !== "string") {
        setStatus("error");
        return;
      }
      setId(payload.resumeId);
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  const clearDocument = (kind: "resume" | "cover-letter") => {
    if (kind === "resume") {
      setResumeFile(null);
      setResumeId("");
      setResumeStatus("idle");
      return;
    }
    setCoverLetterFile(null);
    setCoverLetterId("");
    setCoverLetterStatus("idle");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setFormError("");

    const candidate = {
      name: name.trim(),
      email: email.trim(),
      // E.164 : la seule forme composable depuis n'importe où, et la seule qui
      // rapproche deux saisies du même numéro en base. Le pays part avec, pour
      // que le serveur revalide le couple exactement comme le navigateur.
      phone: phone.trim() ? normalisePhone(phone.trim(), phoneCountry) : undefined,
      phoneCountry,
      role: selected.slug,
      linkedinUrl: linkedinUrl.trim(),
      githubUrl: githubUrl.trim(),
      websiteUrl: websiteUrl.trim() || undefined,
      resumeId: resumeId || undefined,
      resumeFileName: resumeId && resumeFile ? resumeFile.name : undefined,
      resumeMimeType: resumeId && resumeFile ? resumeFile.type : undefined,
      resumeSizeBytes: resumeId && resumeFile ? resumeFile.size : undefined,
      coverLetterText: coverLetterText.trim() || undefined,
      coverLetterId: coverLetterId || undefined,
      coverLetterFileName:
        coverLetterId && coverLetterFile ? coverLetterFile.name : undefined,
      coverLetterMimeType:
        coverLetterId && coverLetterFile ? coverLetterFile.type : undefined,
      coverLetterSizeBytes:
        coverLetterId && coverLetterFile ? coverLetterFile.size : undefined,
      yearsExperience,
      source: selected.slug,
    };

    const parsed = applicationSubmissionSchema.safeParse(candidate);
    if (!parsed.success) {
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
      const response = await fetch("/api/careers-apply", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      if (!response.ok) {
        const payload = await response.json().catch(() => null);
        setFormError(
          typeof payload?.error === "string"
            ? payload.error
            : "Une erreur est survenue. Merci de réessayer.",
        );
        return;
      }

      setSubmitted(true);
    } catch {
      setFormError("Impossible d'envoyer le formulaire. Vérifiez votre connexion.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-border bg-white p-8 text-center shadow-xl shadow-black/[0.04] sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-success/10">
          <CheckCircle2 className="h-7 w-7 text-success" aria-hidden="true" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-foreground">
          Candidature envoyée
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
          On revient vers vous si votre profil correspond au poste de{" "}
          {selected.title}. Pas de réponse automatique : chaque candidature
          sérieuse est lue.
        </p>
        <Link
          href="/carrieres"
          className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
        >
          Voir les autres postes
          <ArrowRight className="size-4" />
        </Link>
      </div>
    );
  }

  return (
    <form
      method="POST"
      action="/api/careers-apply"
      onSubmit={handleSubmit}
      className="space-y-5 rounded-2xl border border-border bg-white p-8 shadow-xl shadow-black/[0.04] sm:p-10"
      noValidate
    >
      {/* Champ caché : où revenir en cas de fallback sans JS. */}
      <input type="hidden" name="_return" value="/carrieres/postuler" />

      <div>
        <label htmlFor="apply-role" className={LABEL_CLASS}>
          Poste
        </label>
        {roleLocked ? (
          <>
            {/*
              Un <select disabled> n'est PAS envoyé par le navigateur : sans ce
              champ caché, le repli sans JS posterait une candidature sans
              poste. L'état verrouillé est aussi annoncé au lecteur d'écran par
              aria-disabled, que `disabled` seul ne suffit pas à expliquer.
            */}
            <input type="hidden" name="role" value={selected.slug} />
            {/*
              Aligné sur le <select> qu'il remplace : le libellé commence au
              même pixel (pl-4), et le cadenas prend la place du chevron, à
              droite. Avec l'icône à gauche, le nom du poste se décalait de
              28px selon qu'on arrive d'une annonce ou de la page générique —
              le même champ ne peut pas bouger d'un parcours à l'autre.
            */}
            <div
              aria-disabled="true"
              className="flex items-center justify-between gap-2 rounded-xl border-2 border-border bg-muted/40 py-3.5 pl-4 pr-4 font-medium text-foreground"
            >
              <span>{selected.title}</span>
              <Lock className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
            </div>
            <p className={HINT_CLASS}>
              Vous postulez depuis cette annonce.{" "}
              <Link href="/carrieres" className="text-primary hover:underline">
                Voir les autres postes
              </Link>
            </p>
          </>
        ) : (
          <select
            id="apply-role"
            name="role"
            value={selected.slug}
            onChange={(e) => setRole(e.target.value)}
            className={SELECT_CLASS}
          >
            {roles.map((r) => (
              <option key={r.slug} value={r.slug}>
                {r.title}
              </option>
            ))}
          </select>
        )}
      </div>

      <div>
        <label htmlFor="apply-name" className={LABEL_CLASS}>
          Nom complet
        </label>
        <div className="relative">
          <User className={ICON_CLASS} aria-hidden="true" />
          <input
            id="apply-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Prénom et nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            aria-invalid={errors.name ? true : undefined}
            className={INPUT_CLASS}
          />
        </div>
        {errors.name && <p className={ERROR_CLASS}>{errors.name}</p>}
      </div>

      <div>
        <label htmlFor="apply-email" className={LABEL_CLASS}>
          Email
        </label>
        <div className="relative">
          <Mail className={ICON_CLASS} aria-hidden="true" />
          <input
            id="apply-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="vous@exemple.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-invalid={errors.email ? true : undefined}
            className={INPUT_CLASS}
          />
        </div>
        {errors.email && <p className={ERROR_CLASS}>{errors.email}</p>}
      </div>

      <div>
        <label htmlFor="apply-phone" className={LABEL_CLASS}>
          Téléphone <span className="font-normal text-muted-foreground">(optionnel)</span>
        </label>
        <div className="flex gap-2">
          {/*
            Même sélecteur d'indicatif que les formulaires de lead : il cherche
            dans le nom du pays, le code ISO et l'indicatif, ce qu'un <select>
            natif ne sait pas faire. Les postes sont remote et internationaux —
            un numéro sans indicatif n'est pas rappelable d'un autre pays.
          */}
          <CountrySelect
            id="apply-phone-country"
            value={phoneCountry}
            onChange={setPhoneCountry}
            tone="light"
            buttonClass={COUNTRY_BUTTON_CLASS}
          />
          <input type="hidden" name="phoneCountry" value={phoneCountry} />
          <div className="relative flex-1">
            <Phone className={ICON_CLASS} aria-hidden="true" />
            <input
              id="apply-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="6 12 34 56 78"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              aria-invalid={errors.phone ? true : undefined}
              className={INPUT_CLASS}
            />
          </div>
        </div>
        {errors.phone && <p className={ERROR_CLASS}>{errors.phone}</p>}
      </div>

      <div>
        <p className={LABEL_CLASS}>
          Montrez-nous ce que vous avez construit{" "}
          <span className="font-normal text-muted-foreground">
            (LinkedIn et GitHub obligatoires)
          </span>
        </p>

        <div className="space-y-3">
          <div>
            <label htmlFor="apply-linkedin" className="sr-only">
              LinkedIn
            </label>
            <div className="relative">
              <Linkedin className={ICON_CLASS} aria-hidden="true" />
              <input
                id="apply-linkedin"
                name="linkedinUrl"
                type="text"
                autoComplete="url"
                placeholder="Profil LinkedIn (obligatoire)"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                aria-invalid={errors.linkedinUrl ? true : undefined}
                className={INPUT_CLASS}
              />
            </div>
          </div>

          <div>
            <label htmlFor="apply-github" className="sr-only">
              GitHub
            </label>
            <div className="relative">
              <Github className={ICON_CLASS} aria-hidden="true" />
              <input
                id="apply-github"
                name="githubUrl"
                type="text"
                autoComplete="url"
                placeholder="Profil GitHub ou repo"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                aria-invalid={errors.githubUrl ? true : undefined}
                className={INPUT_CLASS}
              />
            </div>
          </div>

          <div>
            <label htmlFor="apply-website" className="sr-only">
              Site personnel ou portfolio
            </label>
            <div className="relative">
              <Globe className={ICON_CLASS} aria-hidden="true" />
              <input
                id="apply-website"
                name="websiteUrl"
                type="text"
                autoComplete="url"
                placeholder="Site perso, portfolio, démo…"
                value={websiteUrl}
                onChange={(e) => setWebsiteUrl(e.target.value)}
                aria-invalid={errors.websiteUrl ? true : undefined}
                className={INPUT_CLASS}
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="apply-resume"
              className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-border px-4 py-3.5 text-sm text-muted-foreground transition-colors hover:border-primary/40"
            >
              <FileText className="size-5 shrink-0" aria-hidden="true" />
              {resumeFile ? (
                <span className="flex-1 truncate text-foreground">
                  {resumeFile.name}
                </span>
              ) : (
                <span className="flex-1">
                  CV (PDF ou Word, 8 Mo max){" "}
                  <span className="text-xs">— obligatoire</span>
                </span>
              )}
              {resumeStatus === "uploading" && (
                <Loader2 className="size-4 shrink-0 animate-spin" aria-hidden="true" />
              )}
              {resumeStatus === "done" && (
                <CheckCircle2
                  className="size-4 shrink-0 text-success"
                  aria-hidden="true"
                />
              )}
              {resumeFile && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    clearDocument("resume");
                  }}
                  className="shrink-0 text-muted-foreground hover:text-foreground"
                  aria-label="Retirer le CV"
                >
                  <X className="size-4" aria-hidden="true" />
                </button>
              )}
              <input
                id="apply-resume"
                type="file"
                accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="sr-only"
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) void uploadDocument("resume", file);
                }}
              />
            </label>
            {resumeStatus === "error" && (
              <p className={ERROR_CLASS}>
                L&apos;envoi du CV a échoué. Réessayez — le CV est désormais
                obligatoire, la candidature ne peut pas partir sans lui. Si le
                problème persiste, écrivez à othmane@aimakers.fr.
              </p>
            )}
          </div>
        </div>
        {errors.linkedinUrl && <p className={ERROR_CLASS}>{errors.linkedinUrl}</p>}
        {errors.githubUrl && <p className={ERROR_CLASS}>{errors.githubUrl}</p>}
        {errors.websiteUrl && <p className={ERROR_CLASS}>{errors.websiteUrl}</p>}
        {errors.resumeId && <p className={ERROR_CLASS}>{errors.resumeId}</p>}
      </div>

      {/*
        Lettre de motivation — saisie OU déposée, obligatoire dans les deux cas.
        Laisser le choix est délibéré : imposer le textarea écarte ceux qui ont
        déjà une lettre en PDF, imposer le fichier écarte ceux qui écrivent
        d'un trait.

        La langue attendue est ANNONCÉE, jamais devinée : une détection
        automatique se trompe sur les lettres courtes ou très techniques, et
        refuser une candidature pour une langue mal détectée est une erreur
        sans recours.
      */}
      <div>
        <label htmlFor="apply-cover-letter" className={LABEL_CLASS}>
          Lettre de motivation
        </label>
        <div className="relative">
          <FileText className={TEXTAREA_ICON_CLASS} aria-hidden="true" />
          <textarea
            id="apply-cover-letter"
            name="coverLetterText"
            rows={6}
            maxLength={4000}
            placeholder="Pourquoi ce poste, et ce que vous voulez y construire."
            value={coverLetterText}
            onChange={(e) => setCoverLetterText(e.target.value)}
            aria-invalid={errors.coverLetterText ? true : undefined}
            aria-describedby="apply-cover-letter-hint"
            className={TEXTAREA_CLASS}
          />
        </div>
        <p id="apply-cover-letter-hint" className={HINT_CLASS}>
          En français ou en anglais. {coverLetterText.trim().length}/4000
          caractères — ou déposez un fichier ci-dessous.
        </p>

        <div className="mt-3">
          <label
            htmlFor="apply-cover-letter-file"
            className="flex cursor-pointer items-center gap-3 rounded-xl border-2 border-dashed border-border px-4 py-3.5 text-sm text-muted-foreground transition-colors hover:border-primary/40"
          >
            <Upload className="size-5 shrink-0" aria-hidden="true" />
            {coverLetterFile ? (
              <span className="flex-1 truncate text-foreground">
                {coverLetterFile.name}
              </span>
            ) : (
              <span className="flex-1">
                Déposer la lettre en fichier (PDF ou Word, 8 Mo max)
              </span>
            )}
            {coverLetterStatus === "uploading" && (
              <Loader2 className="size-4 shrink-0 animate-spin" aria-hidden="true" />
            )}
            {coverLetterStatus === "done" && (
              <CheckCircle2 className="size-4 shrink-0 text-success" aria-hidden="true" />
            )}
            {coverLetterFile && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  clearDocument("cover-letter");
                }}
                className="shrink-0 text-muted-foreground hover:text-foreground"
                aria-label="Retirer la lettre"
              >
                <X className="size-4" aria-hidden="true" />
              </button>
            )}
            <input
              id="apply-cover-letter-file"
              type="file"
              accept={ACCEPTED_DOCS}
              className="sr-only"
              onChange={(e) => {
                const file = e.target.files?.[0];
                if (file) void uploadDocument("cover-letter", file);
              }}
            />
          </label>
          {coverLetterStatus === "error" && (
            <p className={ERROR_CLASS}>
              L&apos;envoi de la lettre a échoué. Réessayez, ou saisissez-la
              directement dans le champ ci-dessus.
            </p>
          )}
        </div>
        {errors.coverLetterText && (
          <p className={ERROR_CLASS}>{errors.coverLetterText}</p>
        )}
      </div>

      <div>
        <label htmlFor="apply-experience" className={LABEL_CLASS}>
          {selected.screeningQuestions.experience.question}
        </label>
        <div className="relative">
          <Briefcase className={ICON_CLASS} aria-hidden="true" />
          <input
            id="apply-experience"
            name="yearsExperience"
            type="number"
            min={0}
            max={60}
            placeholder="Nombre d'années"
            value={yearsExperience}
            onChange={(e) => setYearsExperience(e.target.value)}
            aria-invalid={errors.yearsExperience ? true : undefined}
            className={INPUT_CLASS}
          />
        </div>
        {errors.yearsExperience && (
          <p className={ERROR_CLASS}>{errors.yearsExperience}</p>
        )}
      </div>


      {formError && (
        <p role="alert" className={ERROR_CLASS}>
          {formError}
        </p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="btn-gradient flex w-full items-center justify-center gap-2 rounded-xl py-3.5 text-base font-bold text-white disabled:opacity-60"
      >
        {loading ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
            Envoi…
          </span>
        ) : (
          <>
            Envoyer ma candidature
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </>
        )}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        Pas de lettre de motivation. Ce formulaire est la première étape ;
        les candidatures retenues passent ensuite par quelques tests courts.
      </p>
    </form>
  );
}
