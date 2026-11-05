import type { Metadata } from "next";
import { SiteFrame } from "../components/site-frame";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://product-helper-pi.vercel.app"),
  title: {
    default: "AI Project Planning & Architecture Skill",
    template: "%s | Product Helper",
  },
  description:
    "A portable AI coding agent skill for project planning, software architecture decisions, repository improvement, and launch readiness. Works with Codex and Claude Code.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Product Helper",
  },
  twitter: { card: "summary" },
  icons: {
    icon: "/favicon.ico ",
    
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><SiteFrame>{children}</SiteFrame></body>
    </html>
  );
}
