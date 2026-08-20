import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = constructMetadata({
  title: "Mentions légales",
  description:
    "Mentions légales d'AI Makers, cabinet de transformation IA. Informations légales, éditeur, hébergeur, propriété intellectuelle.",
  path: "/mentions-legales",
});

const legalSections = [
  {
    title: "1. Éditeur du site",
    content: [
      `Le site aimakers.fr est édité par la société **AI Makers**, société à responsabilité limitée (SARL) au capital social de 1 000 €, immatriculée au Registre du Commerce et des Sociétés de Paris.`,
      `**Siège social :** 60 rue François 1er, 75008 Paris, France`,
      `**Directeur de la publication :** Othmane Halim, Gérant`,
      `**Email :** ${siteConfig.email}`,
    ],
  },
  {
    title: "2. Hébergement",
    content: [
      `Le site aimakers.fr est hébergé par **Vercel Inc.**, société de droit américain dont le siège social est situé au 340 Pine Street, Suite 701, San Francisco, CA 94104, États-Unis.`,
      `Site : vercel.com`,
    ],
  },
  {
    title: "3. Propriété intellectuelle",
    content: [
      `L'ensemble du contenu de ce site (textes, images, logos, graphismes, structure, marques) est la propriété exclusive d'AI Makers et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.`,
      `Toute reproduction, représentation, modification, publication ou adaptation de tout ou partie des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite sans l'autorisation écrite préalable d'AI Makers.`,
      `Les marques **AI Makers**, **AI FIRST**, **AI PARTNER**, **AI WAREHOUSE** et **Méthode AI-First** sont des marques de la société AI Makers.`,
    ],
  },
  {
    title: "4. Liens hypertextes",
    content: [
      `Le site aimakers.fr peut contenir des liens vers des sites tiers. AI Makers n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu ou leur disponibilité.`,
      `La création de liens hypertextes vers le site aimakers.fr est autorisée sous réserve que ces liens ne portent pas atteinte à l'image d'AI Makers.`,
    ],
  },
  {
    title: "5. Limitation de responsabilité",
    content: [
      `Les informations publiées sur ce site sont fournies à titre informatif uniquement. AI Makers s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées, mais ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.`,
      `AI Makers ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation de ce site ou de l'impossibilité d'y accéder.`,
    ],
  },
  {
    title: "6. Droit applicable",
    content: [
      `Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.`,
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Mentions légales
        </h1>
        <p className="mt-3 text-muted-foreground">
          Dernière mise à jour : mars 2026
        </p>
      </div>

      <div className="space-y-10">
        {legalSections.map((section) => (
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
                      '<strong class="font-semibold text-foreground">$1</strong>'
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
          Pour toute question relative à ces mentions légales, vous pouvez nous contacter à{" "}
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
