import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const staticRoutes: { route: string; changeFrequency: "weekly" | "monthly"; priority: number }[] = [
  { route: "", changeFrequency: "weekly", priority: 1 },
  { route: "/practice-areas", changeFrequency: "monthly", priority: 0.8 },
  { route: "/attorneys", changeFrequency: "monthly", priority: 0.8 },
  { route: "/insights", changeFrequency: "weekly", priority: 0.7 },
  { route: "/contact", changeFrequency: "monthly", priority: 0.8 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return staticRoutes.map(({ route, changeFrequency, priority }) => ({
    url: `${SITE.url}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
