import { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/contact";
import { sitemapPaths } from "@/lib/heartland-site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const paths = [...sitemapPaths, "/security-policy", "/llms.txt"];

  return paths.map((path, index) => ({
    url: `${SITE_URL}${path === "/" ? "" : path}`,
    lastModified,
    changeFrequency: path === "/listings" ? "daily" : "weekly",
    priority: path === "/" ? 1 : index > 10 ? 0.6 : 0.8,
  }));
}
