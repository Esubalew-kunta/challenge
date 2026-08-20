import { constructMetadata } from "@/lib/metadata";
import { DataPlatformPage } from "@/components/pages/data-platform-page";
import { DATA_PLATFORM } from "@/lib/offer-pages/data-platform-locale";

/**
 * /en/enterprise-data-platform — équivalent anglais de /plateforme-data-ia.
 */

export const metadata = constructMetadata({
  title: DATA_PLATFORM.en.meta.title,
  description: DATA_PLATFORM.en.meta.description,
  path: "/en/enterprise-data-platform",
});

export default function Page() {
  return <DataPlatformPage locale="en" />;
}
