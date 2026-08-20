import { constructMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/site-config";

export const metadata = constructMetadata({
  title: "Conditions générales de vente",
  description:
    "Conditions générales de vente d'AI Makers. Modalités de prestation, tarifs, paiement, annulation et propriété intellectuelle pour les services de transformation IA.",
  path: "/cgv",
});

const sections = [
  {
    title: "1. Objet et champ d'application",
    content: [
      `Les présentes Conditions Générales de Vente (CGV) régissent les relations contractuelles entre **AI Makers** (SARL, 60 rue François 1er, 75008 Paris, ci-après "le Prestataire") et tout client professionnel (ci-après "le Client") souhaitant bénéficier des services de transformation IA proposés.`,
      `Toute commande de services implique l'acceptation sans réserve des présentes CGV.`,
    ],
  },
  {
    title: "2. Services proposés",
    content: [
      `AI Makers propose les services suivants :`,
      `**AI PARTNER** : accompagnement de transformation IA en trois phases, Audit (AI Scan), Build (AI Engine) et Scale (AI Champions), comprenant un ingénieur IA référent, le déploiement de systèmes IA en production et la formation hebdomadaire des équipes. Engagement initial de 3 ou 6 mois, puis reconduction mensuelle avec préavis de 30 jours. Tarifs précisés dans la proposition commerciale ou le bon de commande.`,
      `**Formations IA** : programmes de formation IA (Formation AI Champions, Vibe Coding, Go-to-Market & Sales, Microsoft Copilot, Maîtriser Claude en entreprise). Tarifs sur devis.`,
      `**Audits IA** : audit et cartographie des opportunités IA avec roadmap priorisée. Tarif précisé au devis selon le périmètre.`,
    ],
  },
  {
    title: "3. Commande et devis",
    content: [
      `Toute prestation fait l'objet d'un devis ou d'une proposition commerciale écrite, valable 30 jours à compter de sa date d'émission.`,
      `La commande est ferme à réception du bon de commande signé ou de la proposition commerciale acceptée, accompagné(e) du versement de l'acompte prévu.`,
    ],
  },
  {
    title: "4. Tarifs et conditions de paiement",
    content: [
      `Les tarifs sont exprimés en euros hors taxes (HT). La TVA applicable est celle en vigueur au jour de la facturation (20% pour les prestations en France).`,
      `**Modalités de paiement standard :**`,
      `- Acompte de 30% à la signature du contrat`,
      `- Solde à 15 jours date de facture`,
      `**Offre mensuelle (AI PARTNER) :** facturation mensuelle le 1er de chaque mois, paiement à 15 jours.`,
      `Tout retard de paiement entraîne l'application de pénalités de retard au taux de 3 fois le taux d'intérêt légal en vigueur, ainsi qu'une indemnité forfaitaire de recouvrement de 40€ (art. L.441-10 du Code de commerce).`,
    ],
  },
  {
    title: "5. Modalités d'exécution",
    content: [
      `Le Prestataire s'engage à réaliser les prestations dans les délais convenus dans la proposition commerciale ou le contrat de service.`,
      `Les prestations peuvent être réalisées en présentiel (Paris, Casablanca, déplacements en France et au Maroc) ou à distance, selon les modalités définies à la commande.`,
      `Le Client s'engage à fournir en temps utile toutes les informations, accès et ressources nécessaires à la bonne exécution des prestations.`,
    ],
  },
  {
    title: "6. Propriété intellectuelle",
    content: [
      `Les méthodologies, frameworks, outils et contenus pédagogiques développés par AI Makers restent la propriété exclusive d'AI Makers.`,
      `Les systèmes IA déployés et configurés spécifiquement pour le Client dans le cadre de la mission deviennent propriété du Client à l'issue de la mission et après règlement complet des honoraires.`,
    ],
  },
  {
    title: "7. Confidentialité",
    content: [
      `Les parties s'engagent mutuellement à la confidentialité des informations échangées dans le cadre de la mission. Cette obligation de confidentialité est valable pendant toute la durée du contrat et 3 ans après sa fin.`,
      `AI Makers peut faire référence à la mission dans ses références commerciales (mention du nom du Client et type de prestation), sauf opposition écrite du Client.`,
    ],
  },
  {
    title: "8. Résiliation",
    content: [
      `**Offre AI PARTNER :** résiliable à tout moment avec un préavis de 30 jours, après l'engagement minimum de 3 mois.`,
      `**Contrats de mission (Audits, missions ponctuelles) :** en cas de résiliation anticipée à l'initiative du Client, les prestations réalisées sont dues intégralement. L'acompte versé n'est pas remboursable.`,
      `En cas de manquement grave d'une partie, l'autre partie peut résilier le contrat sans préavis par lettre recommandée avec accusé de réception.`,
    ],
  },
  {
    title: "9. Responsabilité",
    content: [
      `La responsabilité d'AI Makers est limitée au montant des honoraires perçus au titre de la prestation en cause au cours des 12 derniers mois.`,
      `AI Makers ne saurait être tenu responsable des dommages indirects (perte de chiffre d'affaires, manque à gagner, préjudice commercial) subis par le Client.`,
    ],
  },
  {
    title: "10. Droit applicable et litiges",
    content: [
      `Les présentes CGV sont soumises au droit français. En cas de litige, les parties s'engagent à rechercher une solution amiable avant toute action judiciaire.`,
      `À défaut d'accord amiable, le litige sera soumis à la compétence exclusive du Tribunal de Commerce de Paris.`,
    ],
  },
];

export default function CGVPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Conditions Générales de Vente
        </h1>
        <p className="mt-3 text-muted-foreground">
          Dernière mise à jour : mars 2026 · Applicable aux prestations AI
          Makers
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
          Pour toute question relative aux présentes CGV :{" "}
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
