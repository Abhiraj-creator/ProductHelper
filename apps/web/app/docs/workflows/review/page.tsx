import type { Metadata } from "next";
import ReviewWorkflow from "../../../../content/docs/review-workflow.mdx";

export const metadata: Metadata = { title: "Software Launch Readiness Review", description: "Review product scope, security, deployment, operations, recovery, and testing to prioritize the risks that matter before launch.", alternates: { canonical: "/docs/workflows/review" } };

export default function ReviewPage() { return <ReviewWorkflow />; }
