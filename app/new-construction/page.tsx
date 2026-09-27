import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { heartlandSite } from "@/lib/heartland-site";
import CtaButtons from "@/components/heartland/CtaButtons";

export const metadata: Metadata = pageMetadata({
  path: "/new-construction",
  title: `New Construction Buyer Agent | Heartland Cottages | Dr. Jan Duffy`,
  description:
    "Why use your own REALTOR® when buying D.R. Horton Heartland Cottages — registration, contract review, and independent advice at no extra cost in most cases.",
  keywords: [...heartlandSite.keywords],
});

export default function NewConstructionPage() {
  return (
    <main id="main-content" className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl prose prose-slate max-w-none">
        <h1 className="text-4xl font-bold text-slate-900 mb-4 not-prose">
          Why use your own agent with a builder?
        </h1>
        <p className="text-lg text-slate-600 not-prose mb-8">
          On-site sales counselors work for D.R. Horton. Dr. Jan Duffy works for
          you — same purchase, separate fiduciary lane.
        </p>
        <h2>Register on the first visit</h2>
        <p>
          The guest registry at Heartland Cottages is not a casual sign-in. If you
          tour without your agent registered, you can limit or lose independent
          representation on that community.
        </p>
        <h2>Contract and option review</h2>
        <p>
          Purchase agreements, change orders, and closing timelines are negotiable
          within builder rules. An experienced buyer agent flags deadlines,
          deposit structure, and upgrade pricing before you initial each page.
        </p>
        <h2>Same community, resale context</h2>
        <p>
          When you later sell, MLS history and comparable resale in Tule Springs
          matter. Starting with an agent who tracks both builder and resale data
          keeps your exit strategy coherent.
        </p>
        <h2>Cost</h2>
        <p>
          Buyer agent compensation typically flows through the transaction per
          MLS and builder cooperation rules — not a separate bill at closing in
          most new-home purchases. Ask for the current compensation disclosure
          for your specific contract.
        </p>
        <div className="not-prose mt-10">
          <CtaButtons variant="onLight" />
        </div>
      </div>
    </main>
  );
}
