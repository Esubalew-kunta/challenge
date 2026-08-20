import { notFound } from "next/navigation";
import { constructMetadata } from "@/lib/metadata";
import { CareersRolePage } from "@/components/pages/careers-role-page";
import { CAREERS } from "@/lib/careers/page-content";
import { jobOpeningsEn, getJobRoleEn } from "@/lib/careers/postes.en";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return jobOpeningsEn.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobRoleEn(slug);
  if (!job) {
    return constructMetadata({
      title: CAREERS.en.detail.listMeta.title,
      description: CAREERS.en.detail.listMeta.description,
      path: "/en/careers",
    });
  }
  return constructMetadata({
    title: `${job.title}: ${CAREERS.en.detail.titleSuffix}`,
    description: job.description,
    path: `/en/careers/${job.slug}`,
  });
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const job = getJobRoleEn(slug);
  if (!job) notFound();
  return <CareersRolePage job={job} locale="en" />;
}
