/**
 * heartlandlasvegas.com — angle copy and verified community facts.
 * Title/H1/keywords/sister links are verbatim from angles_v2.
 */

export const heartlandSite = {
  domain: "heartlandlasvegas.com",
  primaryKeyword: "Heartland Cottages at Tule Springs homes",
  title: "Heartland Cottages at Tule Springs Homes | Dr. Jan Duffy",
  h1: "Heartland Cottages at Tule Springs: New-Home Tours & Buyer Guidance",
  metaDescription:
    "Compare D.R. Horton Heartland Cottages plans (1550, 1700, 1865), tour model homes in Tule Springs North Las Vegas, and get independent buyer representation with Dr. Jan Duffy.",
  heroSubheadline:
    "Focused guidance on D.R. Horton Cottages floor plans, model tours, and the new-construction contract path — not a generic valley-wide search site.",
  keywords: [
    "Heartland Cottages at Tule Springs homes",
    "Heartland Cottages 1550 plan",
    "Heartland Cottages 1700 plan",
    "Heartland Cottages 1865 plan",
    "Heartland Cottages model home tours",
    "D.R. Horton Tule Springs",
    "new construction North Las Vegas",
  ],
  builderSalesOffice:
    "358 Tiffany Springs Ave., North Las Vegas, NV 89084 (D.R. Horton Heartland Cottages sales office — confirm hours on drhorton.com before you drive)",
  realscoutAgentId: "QWdlbnQtMjI1MDUw",
} as const;

export const sisterLinks = [
  {
    href: "https://villagestulesprings.com",
    label: "Villages at Tule Springs resale homes",
  },
  {
    href: "https://homesintulesprings.com",
    label: "Living in Tule Springs North Las Vegas",
  },
] as const;

export const floorPlans = [
  {
    slug: "1550",
    name: "Heartland Cottages 1550 plan",
    beds: 3,
    baths: 2.5,
    stories: 2,
    garage: 2,
    sqFt: 1550,
    summary:
      "D.R. Horton publishes this Express Series® plan at about 1,550 sq. ft. with three bedrooms, 2.5 baths, a two-car garage, open kitchen and great room on the main level, plus a loft and laundry room (per builder materials). Smart home features are included in the builder package. Ask for current pricing and available elevations.",
    drHortonUrl:
      "https://www.drhorton.com/nevada/las-vegas/north-las-vegas/heartland-cottages-at-tule-springs/floor-plans/1550",
  },
  {
    slug: "1700",
    name: "Heartland Cottages 1700 plan",
    beds: 4,
    baths: 2.5,
    stories: 2,
    garage: 2,
    sqFt: 1700,
    summary:
      "Builder materials describe roughly 1,700 sq. ft., four bedrooms, 2.5 baths, two-car garage, and an open kitchen and great room on the main level with laundry room. Ask for current pricing, lot premiums, and model availability.",
    drHortonUrl:
      "https://www.drhorton.com/nevada/las-vegas/north-las-vegas/heartland-cottages-at-tule-springs/floor-plans/1700",
  },
  {
    slug: "1865",
    name: "Heartland Cottages 1865 plan",
    beds: 4,
    baths: 2.5,
    stories: 2,
    garage: 2,
    sqFt: 1865,
    summary:
      "D.R. Horton lists about 1,865 sq. ft. with four bedrooms, 2.5 baths, two-car garage, and the same open main-level layout pattern as the other Cottages plans. Images on builder sites are representational only. Ask for current pricing.",
    drHortonUrl:
      "https://www.drhorton.com/nevada/las-vegas/north-las-vegas/heartland-cottages-at-tule-springs/floor-plans/1865",
  },
] as const;

/** CCSD campuses D.R. Horton lists for Heartland Cottages — verify by exact address before you rely on them. */
export const drHortonListedSchools = [
  {
    name: "Vincent L. Triggs Elementary School",
    grades: "K–5",
    type: "Public (CCSD)",
  },
  {
    name: "Anthony Saville Middle School",
    grades: "6–8",
    type: "Public (CCSD)",
  },
  {
    name: "Legacy High School",
    grades: "9–12",
    type: "Public (CCSD)",
  },
] as const;

export const ccsdLocatorUrl =
  "https://trans-webinfo.ccsd.net/InfoLocator/InfoLocator/Locator.aspx?OrgGuid=ORG-CCSD";

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/listings", label: "Homes for Sale" },
  { href: "/floor-plans", label: "Cottages Floor Plans" },
  { href: "/model-home-tours", label: "Model Tours" },
  { href: "/new-construction", label: "Your Agent & the Builder" },
  { href: "/tule-springs-area-guide", label: "Tule Springs Area" },
  { href: "/schools", label: "Schools" },
  { href: "/buyers", label: "Buyer Guide" },
  { href: "/home-valuation", label: "Sell / Home Value" },
  { href: "/faq", label: "FAQ" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const sitemapPaths = navLinks.map((link) => link.href);

export const heartlandFaqs = [
  {
    question: "What is Heartland Cottages at Tule Springs?",
    answer:
      "Heartland Cottages is a D.R. Horton new-home community in the Tule Springs area of North Las Vegas. The Cottages line focuses on two-story plans roughly between 1,550 and 1,865 square feet with three or four bedrooms, 2.5 baths, and two-car garages, per builder materials.",
  },
  {
    question: "Which Heartland Cottages floor plans should I compare first?",
    answer:
      "Most buyers start with the 1550 (three-bedroom), 1700 (four-bedroom), and 1865 (four-bedroom, largest of the three) plans. Walk the models back-to-back with your own measurements and storage needs — published square footage is approximate.",
  },
  {
    question: "Do I pay Dr. Jan Duffy to represent me on a D.R. Horton purchase?",
    answer:
      "Buyer representation is typically paid from the transaction side that the builder and MLS rules allow — not an extra invoice to you at closing in most new-home cases. The important step is registering your agent on the first visit so representation stays intact.",
  },
  {
    question: "Where are the Heartland Cottages model homes?",
    answer:
      "D.R. Horton publishes the Heartland Cottages sales office at 358 Tiffany Springs Ave., North Las Vegas, NV 89084. Confirm model hours and which plans are on display on drhorton.com before you drive.",
  },
  {
    question: "How do I check schools for a specific lot?",
    answer:
      "School assignment follows the street address, not the marketing name of the community. D.R. Horton lists Vincent L. Triggs Elementary, Anthony Saville Middle, and Legacy High as nearby CCSD campuses — run your exact address through the CCSD School Information Locator before you write an offer.",
  },
  {
    question: "Can I search resale homes near Heartland Cottages?",
    answer:
      "Yes. Use the MLS search on this site for North Las Vegas and Tule Springs-area resale inventory, or visit our sister resource villagestulesprings.com for Villages at Tule Springs resale context.",
  },
] as const;
