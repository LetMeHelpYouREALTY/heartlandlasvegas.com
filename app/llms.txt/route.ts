import { SITE_URL } from "@/lib/contact";

export async function GET() {
  const body = `# heartlandlasvegas.com

> Independent buyer guidance for D.R. Horton Heartland Cottages at Tule Springs, North Las Vegas.

- Canonical: ${SITE_URL}
- Agent: Dr. Jan Duffy, Nevada REALTOR® S.0197614.LLC
- Brokerage: Berkshire Hathaway HomeServices Nevada Properties
- Office: 9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134
- Primary topic: Heartland Cottages 1550, 1700, and 1865 plans; model tours; new-construction buyer representation
- Contact: /contact (form + Calendly) — no public phone on this site yet
- MLS search: /listings (RealScout, agent id QWdlbnQtMjI1MDUw)
- Sister sites: villagestulesprings.com, homesintulesprings.com

## Key pages

- / — Heartland Cottages at Tule Springs: New-Home Tours & Buyer Guidance
- /floor-plans — 1550, 1700, 1865 plan comparisons
- /model-home-tours — tour checklist
- /new-construction — why use your own agent with D.R. Horton
- /tule-springs-area-guide — parks and commute anchors
- /schools — CCSD campuses (verify by address)
- /buyers — buyer guide
- /home-valuation — sell / value request
- /faq — FAQ with FAQPage schema
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
