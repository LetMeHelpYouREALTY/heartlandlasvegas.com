import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { heartlandSite } from "@/lib/heartland-site";
import RealScoutEmbed from "@/components/heartland/RealScoutEmbed";
import CtaButtons from "@/components/heartland/CtaButtons";

export const metadata: Metadata = pageMetadata({
  path: "/home-valuation",
  title: `Sell or Value a Home Near Heartland Cottages | Dr. Jan Duffy`,
  description:
    "Request a home valuation for North Las Vegas and Tule Springs properties near Heartland Cottages.",
  keywords: [...heartlandSite.keywords],
});

export default function HomeValuationPage() {
  return (
    <main id="main-content" className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Sell or check home value near Heartland Cottages
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Thinking about selling a resale home near Tule Springs or converting
          a Cottages purchase to a future resale? Start with an automated
          estimate, then request a comp-driven review through the contact form.
        </p>
        <RealScoutEmbed widget="home-value" className="min-h-[420px]" />
        <p className="text-sm text-slate-500 mt-6">
          Automated estimates are a starting point only. Dr. Jan Duffy prepares
          listing pricing from MLS comps and property condition — ask for current
          market timing before you list.
        </p>
        <div className="mt-10">
          <CtaButtons variant="onLight" bookLabel="Discuss Selling" />
        </div>
      </div>
    </main>
  );
}
