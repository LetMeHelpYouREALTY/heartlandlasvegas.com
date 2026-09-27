import type { Metadata } from "next";
import Image from "next/image";
import { pageMetadata } from "@/lib/seo";
import { heartlandSite } from "@/lib/heartland-site";
import { nap, maps } from "@/lib/contact";
import { mediaUrl, photos } from "@/lib/media";
import CtaButtons from "@/components/heartland/CtaButtons";

export const metadata: Metadata = pageMetadata({
  path: "/about",
  title: `About Dr. Jan Duffy | Heartland Cottages Agent`,
  description:
    "Dr. Jan Duffy, Nevada REALTOR® S.0197614.LLC with Berkshire Hathaway HomeServices Nevada Properties — Heartland Cottages buyer specialist.",
  keywords: [...heartlandSite.keywords],
});

export default function AboutPage() {
  return (
    <main id="main-content" className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid md:grid-cols-[240px_1fr] gap-10 items-start">
          <div className="relative aspect-square rounded-xl overflow-hidden bg-slate-100">
            <Image
              src={mediaUrl(photos.agent.src)}
              alt={photos.agent.alt}
              fill
              className="object-cover"
              sizes="240px"
            />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-4">
              About Dr. Jan Duffy
            </h1>
            <p className="text-lg text-slate-600 mb-4">
              Dr. Jan Duffy is a Nevada REALTOR® (license {nap.license}) with{" "}
              {nap.brokerage}. She built this site for buyers comparing D.R.
              Horton Heartland Cottages plans — not as a builder sales portal.
            </p>
            <p className="text-slate-600 mb-4">
              Office: {nap.fullAddress}. Hours: Mon–Fri 9am–6pm, Sat 10am–4pm,
              Sun by appointment.
            </p>
            <p className="text-slate-600 mb-6">
              New-construction buyers get contract review, registration on the
              builder log, and resale context for the Tule Springs corridor.
            </p>
            <a
              href={maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 font-semibold hover:underline"
            >
              Directions to the office →
            </a>
          </div>
        </div>
        <div className="mt-12">
          <CtaButtons variant="onLight" />
        </div>
      </div>
    </main>
  );
}
