import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import {
  ccsdLocatorUrl,
  drHortonListedSchools,
  heartlandSite,
} from "@/lib/heartland-site";

export const metadata: Metadata = pageMetadata({
  path: "/schools",
  title: `Schools Near Heartland Cottages | CCSD | Dr. Jan Duffy`,
  description:
    "CCSD campuses D.R. Horton lists for Heartland Cottages at Tule Springs — verify assignment by address, no ratings.",
  keywords: [...heartlandSite.keywords],
});

export default function SchoolsPage() {
  return (
    <main id="main-content" className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          Schools near Heartland Cottages
        </h1>
        <p className="text-lg text-slate-600 mb-6">
          School assignment in Clark County follows the street address, not the
          marketing name of the subdivision. D.R. Horton publishes the following
          CCSD campuses for Heartland Cottages — confirm your lot before you
          write an offer.
        </p>
        <ul className="space-y-4 mb-8">
          {drHortonListedSchools.map((school) => (
            <li
              key={school.name}
              className="border border-slate-200 rounded-lg p-4"
            >
              <p className="font-semibold text-slate-900">{school.name}</p>
              <p className="text-sm text-slate-600">
                {school.type} · Grades {school.grades}
              </p>
            </li>
          ))}
        </ul>
        <p className="text-slate-700">
          Run your exact address through the{" "}
          <a
            href={ccsdLocatorUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 font-semibold hover:underline"
          >
            CCSD School Information Locator
          </a>{" "}
          (opens new tab). Boundaries can change as North Las Vegas builds out.
        </p>
      </div>
    </main>
  );
}
