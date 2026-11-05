import type { NextConfig } from "next";
import createMDX from "@next/mdx";
import { resolve } from "node:path";

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  turbopack: { root: resolve(process.cwd(), "../..") },
};

export default createMDX({})(nextConfig);
