import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = constructMetadata({
  title: "Politique de confidentialité",
  description:
    "Politique de confidentialité et protection des données personnelles d'AI Makers. RGPD, droits des utilisateurs, cookies.",
  path: "/confidentialite",
});

const sections = [
  {
    title: "1. Responsable du traitement",
    content: [
      `**AI Makers** (SARL, 60 rue François 1er, 75008 Paris) est responsable du traitement de vos données personnelles au sens du Règlement Général sur la Protection des Données (RGPD, Règlement UE 2016/679).`,
      `Contact données personnelles : ${siteConfig.email}`,
    ],
  },
  {
    title: "2. Données collectées",
    content: [
      `Nous collectons uniquement les données nécessaires à nos services :`,
      `**Via le formulaire de contact :** nom, prénom, email professionnel, nom de l'entreprise, message.`,
      `**Via les cookies analytiques :** données de navigation anonymisées (pages visitées, durée de session).`,
      `**Lors des formations :** données d'identification, feuilles d'émargement, évaluations, nécessaires à la gestion administrative des formations.`,
    ],
  },
  {
    title: "3. Finalités et base légale",
    content: [
      `**Répondre à vos demandes de contact :** base légale : intérêt légitime (art. 6.1.f RGPD).`,
      `**Gestion commerciale et facturation :** base légale : exécution du contrat (art. 6.1.b RGPD).`,
      `**Administration des formations :** base légale : exécution du contrat (art. 6.1.b RGPD).`,
      `**Amélioration du site :** base légale : consentement aux cookies (art. 6.1.a RGPD).`,
    ],
  },
  {
    title: "4. Durée de conservation",
    content: [
      `**Prospects et contacts :** 3 ans à compter du dernier contact.`,
      `**Clients et contrats :** 10 ans (obligations comptables et fiscales).`,
      `**Dossiers de formation :** 3 ans à compter de la fin de la formation.`,
      `**Données de navigation :** 13 mois maximum.`,
    ],
  },
  {
    title: "5. Destinataires des données",
    content: [
      `Vos données sont destinées aux équipes commerciales et opérationnelles d'AI Makers. Elles peuvent être transmises à des sous-traitants techniques (hébergeur Vercel, outils CRM) dans le respect du RGPD et avec des garanties contractuelles adéquates.`,
      `Nous ne vendons jamais vos données à des tiers.`,
    ],
  },
  {
    title: "6. Vos droits",
    content: [
      `Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :`,
      `**Droit d'accès** (art. 15) · **Droit de rectification** (art. 16) · **Droit à l'effacement** (art. 17) · **Droit à la limitation** (art. 18) · **Droit à la portabilité** (art. 20) · **Droit d'opposition** (art. 21)`,
      `Pour exercer ces droits, contactez-nous à ${siteConfig.email}. Nous répondons dans un délai de 30 jours. En cas de réponse insatisfaisante, vous pouvez saisir la **CNIL** (cnil.fr).`,
    ],
  },
  {
    title: "7. Cookies",
    content: [
      `Le site aimakers.fr utilise des cookies techniques (nécessaires au fonctionnement) et des cookies analytiques (mesure d'audience, anonymisés). Les cookies publicitaires ne sont pas utilisés.`,
      `Vous pouvez gérer vos préférences de cookies à tout moment depuis votre navigateur.`,
    ],
  },
  {
    title: "8. Transferts hors UE",
    content: [
      `Certains sous-traitants (Vercel) sont basés aux États-Unis. Ces transferts sont encadrés par les clauses contractuelles types de la Commission européenne, assurant un niveau de protection adéquat.`,
    ],
  },
];

export default function ConfidentialitePage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Politique de confidentialité
        </h1>
        <p className="mt-3 text-muted-foreground">
          Dernière mise à jour : mars 2026 · Conformité RGPD
        </p>
      </div>

      <div className="space-y-10">
        {sections.map((section) => (
          <section key={section.title}>
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              {section.title}
            </h2>
            <div className="space-y-3">
              {section.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-[15px] leading-relaxed text-muted-foreground"
                  dangerouslySetInnerHTML={{
                    __html: paragraph.replace(
                      /\*\*(.*?)\*\*/g,
                      '<strong class="font-semibold text-foreground">$1</strong>',
                    ),
                  }}
                />
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-12 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6">
        <p className="text-sm text-muted-foreground">
          Pour toute question relative à la protection de vos données :{" "}
          <a
            href={siteConfig.emailHref}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary hover:underline"
          >
            {siteConfig.email}
          </a>
        </p>
      </div>
    </main>
  );
}
