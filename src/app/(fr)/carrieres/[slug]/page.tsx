import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/metadata";
import { CareersRolePage } from "@/components/pages/careers-role-page";
import { CAREERS } from "@/lib/careers/page-content";
import { jobOpenings, getJobRole } from "@/lib/careers/postes";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return jobOpenings.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobRole(slug);
  if (!job) {
    return constructMetadata({
      title: CAREERS.fr.detail.listMeta.title,
      description: CAREERS.fr.detail.listMeta.description,
      path: "/carrieres",
    });
  }
  return constructMetadata({
    title: `${job.title} : ${CAREERS.fr.detail.titleSuffix}`,
    description: job.description,
    path: `/carrieres/${job.slug}`,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobRole(slug);
  if (!job) notFound();
  return <CareersRolePage job={job} locale="fr" />;
}
