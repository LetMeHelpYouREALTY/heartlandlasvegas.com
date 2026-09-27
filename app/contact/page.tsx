import CalendlyWidget from "@/components/calendly/CalendlyWidget";
import { LeadCaptureForm } from "@/components/forms/LeadCaptureForm";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { heartlandSite } from "@/lib/heartland-site";
import { LEAD_SOURCE, maps, nap, hoursSummary } from "@/lib/contact";
import CtaButtons from "@/components/heartland/CtaButtons";

export const metadata: Metadata = pageMetadata({
  path: "/contact",
  title: `Contact Dr. Jan Duffy | Heartland Cottages Tours`,
  description:
    "Schedule a Heartland Cottages model tour or send a message to Dr. Jan Duffy. Calendly and secure contact form — no phone queue on this site yet.",
  keywords: [...heartlandSite.keywords],
});

export default function ContactPage() {
  return (
    <main id="main-content" className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-900 mb-4 text-center">
          Contact Dr. Jan Duffy
        </h1>
        <p className="text-lg text-slate-600 text-center mb-10 max-w-2xl mx-auto">
          Request Heartland Cottages tour times, ask about the 1550/1700/1865
          plans, or start a resale search near Tule Springs.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Send a message</h2>
            <LeadCaptureForm
              source={LEAD_SOURCE}
              formType="contact"
              defaultTags={["heartland-cottages", "heartlandlasvegas.com"]}
            />
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4" id="schedule">
              Schedule on Calendly
            </h2>
            <CalendlyWidget url="https://calendly.com/drjanduffy/showing" />
            <div className="mt-8 text-sm text-slate-600 space-y-2">
              <p>
                <strong>Office:</strong> {nap.fullAddress}
              </p>
              <p>
                <strong>Hours:</strong> {hoursSummary}
              </p>
              <p>
                <a
                  href={maps.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 font-semibold hover:underline"
                >
                  Get directions
                </a>
              </p>
              <p className="text-slate-500">
                Builder sales office (models): {heartlandSite.builderSalesOffice}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16">
          <CtaButtons variant="onLight" />
        </div>
      </div>
    </main>
  );
}
