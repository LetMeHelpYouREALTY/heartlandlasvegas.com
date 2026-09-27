import { SITE_URL, nap, geo, businessHours, SITE_PHONE } from "./contact";
import { heartlandFaqs } from "./heartland-site";

function openingHoursSpecification() {
  return businessHours
    .filter((row) => row.opens && row.closes)
    .map((row) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: row.day,
      opens: row.opens,
      closes: row.closes,
    }));
}

export function generateHeartlandLocalBusinessSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "RealEstateAgent"],
    "@id": `${SITE_URL}/#organization`,
    name: nap.name,
    description:
      "Independent buyer representation for D.R. Horton Heartland Cottages at Tule Springs and North Las Vegas resale search.",
    url: SITE_URL,
    email: nap.email,
    image: `${SITE_URL}/images/dr-jan-duffy.jpg`,
    address: {
      "@type": "PostalAddress",
      streetAddress: nap.street,
      addressLocality: nap.city,
      addressRegion: nap.state,
      postalCode: nap.zip,
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude,
    },
    openingHoursSpecification: openingHoursSpecification(),
    areaServed: {
      "@type": "Place",
      name: "Heartland Cottages at Tule Springs, North Las Vegas, NV",
    },
    knowsAbout: [
      "Heartland Cottages at Tule Springs",
      "D.R. Horton new construction",
      "North Las Vegas home search",
    ],
  };

  if (SITE_PHONE) {
    schema.telephone = SITE_PHONE;
  }

  return schema;
}

export function generateHeartlandWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: "Heartland Cottages at Tule Springs — Dr. Jan Duffy",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

export function generateHeartlandFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: heartlandFaqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
