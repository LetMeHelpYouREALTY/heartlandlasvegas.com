import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/seo";
import { heartlandSite } from "@/lib/heartland-site";
import SisterLinks from "@/components/heartland/SisterLinks";

export const metadata: Metadata = pageMetadata({
  path: "/tule-springs-area-guide",
  title: `Tule Springs Area Guide | Heartland Cottages | Dr. Jan Duffy`,
  description:
    "Parks, open space, and commute notes for Heartland Cottages at Tule Springs in North Las Vegas.",
  keywords: [...heartlandSite.keywords],
});

export default function TuleSpringsAreaGuidePage() {
  return (
    <main id="main-content">
      <div className="py-12 md:py-16 container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Tule Springs area guide
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          Heartland Cottages sits in the Tule Springs corridor of North Las Vegas
          — desert open space to the north and west, with quick ties to US-95 and
          the 215 Beltway for valley commutes. Times below vary by time of day;
          verify your route the week you move.
        </p>
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3">Parks & open space</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>
              <strong>Tule Springs Fossil Beds National Monument</strong> —
              federal open space and trails north of the developed corridor.
            </li>
            <li>
              <strong>Floyd Lamb Park at Tule Springs</strong> — historic ranch,
              ponds, and picnic areas off Durango Drive (City of Las Vegas).
            </li>
            <li>
              <strong>Aliante Nature Discovery Park</strong> — regional park with
              walking paths and play areas a short drive south on Aliante Parkway.
            </li>
          </ul>
        </section>
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-3">Commute anchors</h2>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>
              <strong>US-95 south</strong> toward downtown Las Vegas and the
              medical district.
            </li>
            <li>
              <strong>CC 215 Beltway</strong> east toward Henderson or west toward
              Summerlin connections.
            </li>
            <li>
              <strong>Nellis AFB &amp; Craig Road corridor</strong> — common
              employment anchors for north-valley buyers (confirm gate times
              separately).
            </li>
          </ul>
        </section>
        <p className="text-slate-600">
          For Villages at Tule Springs resale context, see{" "}
          <a
            href="https://villagestulesprings.com"
            className="text-blue-700 font-medium hover:underline"
            rel="noopener noreferrer"
          >
            villagestulesprings.com
          </a>
          . For broader North Las Vegas living notes, see{" "}
          <a
            href="https://homesintulesprings.com"
            className="text-blue-700 font-medium hover:underline"
            rel="noopener noreferrer"
          >
            homesintulesprings.com
          </a>
          .
        </p>
        <p className="mt-6">
          <Link href="/contact" className="text-blue-700 font-semibold">
            Request a tour plan →
          </Link>
        </p>
      </div>
      <SisterLinks />
    </main>
  );
}
