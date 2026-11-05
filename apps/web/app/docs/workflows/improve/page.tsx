import type { Metadata } from "next";
import ImproveWorkflow from "../../../../content/docs/improve-workflow.mdx";

export const metadata: Metadata = { title: "Repository Analysis and Improvement Workflow", description: "Inspect an existing codebase before proposing changes. Product Helper grounds repository improvement advice in its files, tests, dependencies, and deployment setup.", alternates: { canonical: "/docs/workflows/improve" } };

export default function ImprovePage() { return <ImproveWorkflow />; }
