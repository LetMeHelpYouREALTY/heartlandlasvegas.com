import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { heartlandSite, floorPlans } from "@/lib/heartland-site";
import CtaButtons from "@/components/heartland/CtaButtons";
import RealScoutEmbed from "@/components/heartland/RealScoutEmbed";
import SisterLinks from "@/components/heartland/SisterLinks";
import MlsDisclaimer from "@/components/shared/MlsDisclaimer";
import { mediaUrl, photos } from "@/lib/media";

export const metadata: Metadata = pageMetadata({
  path: "/",
  title: heartlandSite.title,
  description: heartlandSite.metaDescription,
  keywords: [...heartlandSite.keywords],
});

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="relative bg-slate-900 text-white py-24 md:py-32 overflow-hidden">
        <Image
          src={mediaUrl(photos.homeHero.src)}
          alt="New construction homes in the North Las Vegas area"
          fill
          priority
          className="object-cover opacity-30"
          sizes="100vw"
        />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <span className="inline-block bg-blue-600 text-white text-sm font-semibold px-4 py-1 rounded-full mb-6">
            D.R. Horton Heartland Cottages
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            {heartlandSite.h1}
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-10 max-w-3xl mx-auto">
            {heartlandSite.heroSubheadline}
          </p>
          <div className="mb-8 flex justify-center max-w-xl mx-auto">
            <RealScoutEmbed widget="simple-search" className="w-full" />
          </div>
          <CtaButtons />
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Compare the 1550, 1700, and 1865 Cottages plans
          </h2>
          <p className="text-lg text-slate-600 mb-10 text-center">
            Heartland Cottages focuses on two-story Express Series® plans from
            about 1,550 to 1,865 sq. ft. Walk the models, then decide which
            layout fits storage, bedroom count, and garage needs.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {floorPlans.map((plan) => (
              <article
                key={plan.slug}
                className="rounded-xl border border-slate-200 p-6 flex flex-col"
              >
                <h3 className="font-bold text-lg mb-2">{plan.name}</h3>
                <p className="text-sm text-slate-600 mb-4 flex-1">
                  {plan.beds} bed · {plan.baths} bath · {plan.sqFt.toLocaleString()}{" "}
                  sq. ft. (approx.)
                </p>
                <Link
                  href={`/floor-plans#plan-${plan.slug}`}
                  className="text-blue-700 font-semibold text-sm hover:underline"
                >
                  Plan details →
                </Link>
              </article>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/model-home-tours"
              className="text-blue-700 font-semibold hover:underline"
            >
              Model home tour checklist →
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-center">
            North Las Vegas & Tule Springs resale search
          </h2>
          <p className="text-center text-slate-600 mb-8 max-w-2xl mx-auto">
            MLS listings near Heartland Cottages — independent of the builder
            inventory screen.
          </p>
          <RealScoutEmbed widget="listings" />
          <MlsDisclaimer className="mt-6" />
        </div>
      </section>

      <SisterLinks />

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="text-2xl font-bold mb-4">Why use your own agent?</h2>
          <p className="text-slate-600 mb-6">
            Builder sales teams represent the builder. Dr. Jan Duffy registers
            you on the first visit so contract review, upgrade credits, and
            timeline checkpoints stay on your side of the table.
          </p>
          <Link
            href="/new-construction"
            className="text-blue-700 font-semibold hover:underline"
          >
            New-construction buyer process →
          </Link>
        </div>
      </section>
    </main>
  );
}
