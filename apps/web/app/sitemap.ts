import type { MetadataRoute } from "next";

const paths = ["", "/docs", "/docs/getting-started", "/docs/installation", "/docs/cli", "/docs/workflows/plan", "/docs/workflows/improve", "/docs/workflows/review", "/docs/contributing", "/examples", "/roadmap"];

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://product-helper.vercel.app";
  return paths.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date() }));
}
