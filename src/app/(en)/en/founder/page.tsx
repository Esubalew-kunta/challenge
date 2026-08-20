import { constructMetadata } from "@/lib/metadata";
import { FounderPage } from "@/components/pages/founder-page";
import { FOUNDER } from "@/lib/founder-locale";

/** /en/founder — équivalent anglais de /fondateur. */

export const metadata = constructMetadata({
  title: FOUNDER.en.meta.title,
  description: FOUNDER.en.meta.description,
  path: "/en/founder",
});

export default function Page() {
  return <FounderPage locale="en" />;
}
