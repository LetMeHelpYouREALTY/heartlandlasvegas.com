import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { heartlandSite } from "@/lib/heartland-site";
import RealScoutEmbed from "@/components/heartland/RealScoutEmbed";
import MlsDisclaimer from "@/components/shared/MlsDisclaimer";
import CtaButtons from "@/components/heartland/CtaButtons";

export const metadata: Metadata = pageMetadata({
  path: "/listings",
  title: `Homes for Sale Near Heartland Cottages | Dr. Jan Duffy`,
  description:
    "Search MLS homes for sale near Heartland Cottages at Tule Springs and North Las Vegas with Dr. Jan Duffy.",
  keywords: [...heartlandSite.keywords],
});

export default function ListingsPage() {
  return (
    <main id="main-content" className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Heartland Cottages at Tule Springs homes & nearby resale
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-3xl">
          Live MLS inventory for North Las Vegas and the Tule Springs area.
          Builder inventory for new Cottages plans is separate — ask for current
          availability on the floor plans page.
        </p>
        <RealScoutEmbed widget="listings" />
        <MlsDisclaimer className="mt-6" />
        <div className="mt-12">
          <CtaButtons variant="onLight" />
        </div>
      </div>
    </main>
  );
}
