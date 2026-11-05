import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://product-helper-pi.vercel.app";
  const preview = process.env.VERCEL_ENV && process.env.VERCEL_ENV !== "production";
  return {
    rules: { userAgent: "*", ...(preview ? { disallow: "/" } : { allow: "/" }) },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
