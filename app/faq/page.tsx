import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { heartlandFaqs, heartlandSite } from "@/lib/heartland-site";
import { generateHeartlandFaqSchema } from "@/lib/heartland-schema";
import SchemaScript from "@/components/SchemaScript";
import CtaButtons from "@/components/heartland/CtaButtons";

export const metadata: Metadata = pageMetadata({
  path: "/faq",
  title: `Heartland Cottages FAQ | Dr. Jan Duffy`,
  description:
    "Frequently asked questions about D.R. Horton Heartland Cottages plans, model tours, schools, and buyer representation.",
  keywords: [...heartlandSite.keywords],
});

export default function FaqPage() {
  return (
    <main id="main-content" className="py-12 md:py-16">
      <SchemaScript schema={generateHeartlandFaqSchema()} id="faq-schema" />
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Heartland Cottages FAQ
        </h1>
        <p className="text-lg text-slate-600 mb-10">
          Answers for new-construction buyers comparing Cottages plans at Tule
          Springs.
        </p>
        <div className="space-y-8">
          {heartlandFaqs.map((item) => (
            <article key={item.question}>
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                {item.question}
              </h2>
              <p className="text-slate-600">{item.answer}</p>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <CtaButtons variant="onLight" />
        </div>
      </div>
    </main>
  );
}
