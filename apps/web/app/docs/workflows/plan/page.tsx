import type { Metadata } from "next";
import PlanWorkflow from "../../../../content/docs/plan-workflow.mdx";

export const metadata: Metadata = { title: "AI Project Planning Workflow", description: "Turn a software idea into feasible scope, requirements, architecture options, milestones, and a practical first implementation slice.", alternates: { canonical: "/docs/workflows/plan" } };

export default function PlanPage() { return <PlanWorkflow />; }
