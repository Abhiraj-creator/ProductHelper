import type { Metadata } from "next";
import Installation from "../../../content/docs/installation.mdx";

export const metadata: Metadata = { title: "Install the AI Coding Agent Skill", description: "Install Product Helper with npm for Codex or Claude Code, or copy the portable skill into your agent's skills directory.", alternates: { canonical: "/docs/installation" } };

export default function InstallationPage() { return <Installation />; }
