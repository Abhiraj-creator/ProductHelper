import type { Metadata } from "next";
import Overview from "../../content/docs/overview.mdx";

export const metadata: Metadata = { title: "Documentation", description: "Get started with Product Helper." };

export default function DocsOverview() { return <Overview />; }
