import { constructMetadata } from "@/lib/metadata";
import { CareersPage } from "@/components/pages/careers-page";
import { CAREERS } from "@/lib/careers/page-content";

export const metadata = constructMetadata({
  title: CAREERS.fr.meta.title,
  description: CAREERS.fr.meta.description,
  path: "/carrieres",
});

export default function Page() {
  return <CareersPage locale="fr" />;
}
