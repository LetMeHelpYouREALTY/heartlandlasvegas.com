import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { heartlandSite } from "@/lib/heartland-site";
import CtaButtons from "@/components/heartland/CtaButtons";

export const metadata: Metadata = pageMetadata({
  path: "/buyers",
  title: `Heartland Cottages Buyer Guide | Dr. Jan Duffy`,
  description:
    "Step-by-step buyer guide for D.R. Horton Heartland Cottages at Tule Springs — financing, inspections, and closing timeline.",
  keywords: [...heartlandSite.keywords],
});

const steps = [
  {
    title: "Clarify plan and lot",
    body: "Pick among the 1550, 1700, and 1865 Cottages plans, then ask which lots accept that elevation. Lot width drives side-yard and window placement.",
  },
  {
    title: "Register representation",
    body: "Tour with Dr. Jan Duffy registered on the builder guest log the first time you enter Heartland Cottages.",
  },
  {
    title: "Financing and builder incentives",
    body: "Compare lender incentives with outside loan estimates. Your loan officer and agent should review the same contract dates.",
  },
  {
    title: "Structural and design choices",
    body: "Lock structural options before design studio appointments. Change orders after slab pour get expensive fast.",
  },
  {
    title: "Inspections and walk-throughs",
    body: "New construction still warrants third-party inspections at pre-drywall and final walk-through phases.",
  },
  {
    title: "Closing and warranty",
    body: "Review builder warranty booklet at closing. Set calendar reminders for first-year service requests.",
  },
];

export default function BuyersPage() {
  return (
    <main id="main-content" className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Heartland Cottages buyer guide
        </h1>
        <p className="text-lg text-slate-600 mb-10">
          A focused checklist for new-construction buyers at D.R. Horton
          Heartland Cottages — not a generic valley-wide buyer packet.
        </p>
        <ol className="space-y-6">
          {steps.map((step, index) => (
            <li key={step.title} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-600 text-white font-bold">
                {index + 1}
              </span>
              <div>
                <h2 className="text-xl font-bold text-slate-900">
                  {step.title}
                </h2>
                <p className="text-slate-600 mt-1">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link href="/floor-plans" className="text-blue-700 font-semibold">
            Floor plans →
          </Link>
          <Link href="/new-construction" className="text-blue-700 font-semibold">
            Agent + builder FAQ →
          </Link>
        </div>
        <div className="mt-12">
          <CtaButtons variant="onLight" />
        </div>
      </div>
    </main>
  );
}
