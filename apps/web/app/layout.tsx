import type { Metadata } from "next";
import { SiteFrame } from "../components/site-frame";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Product Helper | Evidence before advice",
    template: "%s | Product Helper",
  },
  description:
    "An open-source planning skill for coding agents. Make grounded engineering decisions before you build, improve, or ship.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body><SiteFrame>{children}</SiteFrame></body>
    </html>
  );
}
