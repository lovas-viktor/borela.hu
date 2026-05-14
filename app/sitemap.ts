import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const SITE_URL = "https://borela.eu";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const pages = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/services/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/capabilities/", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/industries/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/references/", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/about/", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/contact/", priority: 0.7, changeFrequency: "yearly" as const },
    { url: "/rfq/", priority: 0.9, changeFrequency: "monthly" as const },
  ];

  return pages.map(({ url, priority, changeFrequency }) => ({
    url: `${SITE_URL}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
