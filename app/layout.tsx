import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { headers } from "next/headers";
import Script from "next/script";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import SkipLink from "@/components/shared/SkipLink";
import SchemaScript from "@/components/SchemaScript";
import MobileStickyCTA from "@/components/layouts/MobileStickyCTA";
import InnerPageChrome from "@/components/layouts/InnerPageChrome";
import { absoluteUrl } from "@/lib/seo";
import { photos } from "@/lib/media";
import { nap, realscout, resolveSiteUrl } from "@/lib/contact";
import { heartlandSite } from "@/lib/heartland-site";
import {
  generateHeartlandLocalBusinessSchema,
  generateHeartlandWebSiteSchema,
} from "@/lib/heartland-schema";
import { Analytics } from "@vercel/analytics/react";

export async function generateMetadata(): Promise<Metadata> {
  const domain = headers().get("x-domain") || "";
  const pathname = headers().get("x-pathname") || "/";
  const siteUrl = resolveSiteUrl(domain);
  const canonical = absoluteUrl(pathname, domain);
  return {
    metadataBase: new URL(siteUrl),
    title: heartlandSite.title,
    description: heartlandSite.metaDescription,
    keywords: [...heartlandSite.keywords],
    authors: [{ name: nap.shortName }],
    creator: nap.shortName,
    robots: { index: true, follow: true },
    alternates: { canonical },
    openGraph: {
      type: "website",
      url: canonical,
      locale: "en_US",
      siteName: "Heartland Cottages at Tule Springs",
      title: heartlandSite.title,
      description: heartlandSite.metaDescription,
      images: [
        { url: absoluteUrl(photos.homeHero.src, domain), alt: photos.homeHero.alt },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: heartlandSite.title,
      description: heartlandSite.metaDescription,
      images: [absoluteUrl(photos.homeHero.src, domain)],
    },
  };
}

const siteSchemas = [
  generateHeartlandLocalBusinessSchema(),
  generateHeartlandWebSiteSchema(),
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <link rel="preconnect" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://em.realscout.com" />
        <link rel="dns-prefetch" href="https://www.realscout.com" />
        <link rel="dns-prefetch" href="https://assets.calendly.com" />
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
      </head>
      <body className="bg-white text-slate-900 antialiased pb-16 md:pb-0">
        <SkipLink />
        {siteSchemas.map((schema, index) => (
          <SchemaScript
            key={index}
            schema={schema}
            id={`site-schema-${index}`}
          />
        ))}
        <Navbar />
        <InnerPageChrome>{children}</InnerPageChrome>
        <Footer />
        <MobileStickyCTA />
        <Analytics />
        <Script
          src={realscout.scriptSrc}
          type="module"
          strategy="afterInteractive"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
