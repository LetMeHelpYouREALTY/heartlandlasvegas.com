import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { floorPlans, heartlandSite } from "@/lib/heartland-site";
import CtaButtons from "@/components/heartland/CtaButtons";

export const metadata: Metadata = pageMetadata({
  path: "/floor-plans",
  title: `Heartland Cottages Floor Plans (1550, 1700, 1865) | Dr. Jan Duffy`,
  description:
    "Compare D.R. Horton Heartland Cottages 1550, 1700, and 1865 plans at Tule Springs. Layout facts from builder materials — ask for current pricing.",
  keywords: [...heartlandSite.keywords],
});

export default function FloorPlansPage() {
  return (
    <main id="main-content" className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Heartland Cottages floor plans
        </h1>
        <p className="text-lg text-slate-600 mb-10">
          D.R. Horton publishes three core two-story Cottages plans in this
          community. Square footage is approximate. Ask for current pricing,
          lot premiums, and elevation options before you compare payments.
        </p>
        <div className="space-y-12">
          {floorPlans.map((plan) => (
            <article
              key={plan.slug}
              id={`plan-${plan.slug}`}
              className="scroll-mt-28 border border-slate-200 rounded-xl p-6 md:p-8"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-2">
                {plan.name}
              </h2>
              <p className="text-sm font-medium text-slate-700 mb-4">
                {plan.beds} bedrooms · {plan.baths} baths · {plan.stories}{" "}
                story · {plan.garage}-car garage · ~
                {plan.sqFt.toLocaleString()} sq. ft.
              </p>
              <p className="text-slate-600 mb-4">{plan.summary}</p>
              <a
                href={plan.drHortonUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 font-semibold text-sm hover:underline"
              >
                View on D.R. Horton (opens new tab)
              </a>
            </article>
          ))}
        </div>
        <p className="mt-10 text-sm text-slate-500">
          Larger multi-gen plans may also exist in the broader Heartland master
          plan. This page covers the 1550, 1700, and 1865 Cottages series only.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/model-home-tours" className="text-blue-700 font-semibold">
            Schedule model tours →
          </Link>
          <Link href="/new-construction" className="text-blue-700 font-semibold">
            Builder + buyer agent steps →
          </Link>
        </div>
        <div className="mt-12">
          <CtaButtons variant="onLight" />
        </div>
      </div>
    </main>
  );
}
