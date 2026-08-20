import { constructMetadata } from "@/lib/metadata";
import { CareersPage } from "@/components/pages/careers-page";
import { CAREERS } from "@/lib/careers/page-content";

export const metadata = constructMetadata({
  title: CAREERS.en.meta.title,
  description: CAREERS.en.meta.description,
  path: "/en/careers",
});

export default function Page() {
  return <CareersPage locale="en" />;
}
