import { MetadataRoute } from "next";

const baseUrl = "https://www.berkhamtrvl.com";

// Update these dates when the page content actually changes.
const HOME_UPDATED = new Date("2026-11-05");
const LEGAL_UPDATED = new Date("2026-01-27");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: HOME_UPDATED,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}
