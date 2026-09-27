import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { heartlandSite } from "@/lib/heartland-site";
import CtaButtons from "@/components/heartland/CtaButtons";

export const metadata: Metadata = pageMetadata({
  path: "/model-home-tours",
  title: `Heartland Cottages Model Home Tours | Dr. Jan Duffy`,
  description:
    "How to tour Heartland Cottages model homes at Tule Springs — registration, plan comparisons, and what to measure on site.",
  keywords: [
    "Heartland Cottages model home tours",
    ...heartlandSite.keywords,
  ],
});

export default function ModelHomeToursPage() {
  return (
    <main id="main-content" className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Heartland Cottages model home tours
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          D.R. Horton lists the Heartland Cottages sales office at{" "}
          {heartlandSite.builderSalesOffice}. Confirm which plans are modeled
          and current hours on drhorton.com before you drive.
        </p>
        <ol className="list-decimal pl-6 space-y-4 text-slate-700 mb-10">
          <li>
            <strong>Register your agent first.</strong> Sign the builder guest
            registry with Dr. Jan Duffy on the first visit so buyer representation
            stays intact.
          </li>
          <li>
            <strong>Walk 1550, 1700, and 1865 back-to-back.</strong> Note
            bedroom locations, loft vs. fourth bedroom, pantry depth, and garage
            orientation — model furniture hides tight spots.
          </li>
          <li>
            <strong>Ask for the structural option sheet.</strong> Elevation,
            lot width, and structural options change price and timeline; get them
            in writing.
          </li>
          <li>
            <strong>Photograph outlet and window placements</strong> if you plan
            furniture layouts — builder marketing renders are representational.
          </li>
          <li>
            <strong>Book follow-up through Calendly or the contact form</strong>{" "}
            to debrief the same day while measurements are fresh.
          </li>
        </ol>
        <CtaButtons variant="onLight" bookLabel="Book a Tour Debrief" />
      </div>
    </main>
  );
}
