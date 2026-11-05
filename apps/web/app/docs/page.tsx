import type { Metadata } from "next";
import Overview from "../../content/docs/overview.mdx";

export const metadata: Metadata = { title: "AI Coding Agent Skill Documentation", description: "Learn how to install and use Product Helper for project planning, architecture decisions, repository analysis, and launch readiness.", alternates: { canonical: "/docs" } };

export default function DocsOverview() { return <Overview />; }
