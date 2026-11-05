import type { Metadata } from "next";
import GettingStarted from "../../../content/docs/getting-started.mdx";

export const metadata: Metadata = { title: "Getting Started with the Product Helper Skill", description: "Install Product Helper and invoke its project planning, architecture, repository improvement, and launch review workflows in your coding agent.", alternates: { canonical: "/docs/getting-started" } };

export default function GettingStartedPage() { return <GettingStarted />; }
