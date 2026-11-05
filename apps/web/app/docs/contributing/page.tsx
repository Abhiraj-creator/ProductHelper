import type { Metadata } from "next";
import Contributing from "../../../content/docs/contributing.mdx";

export const metadata: Metadata = { title: "Contribute to Product Helper", description: "Help improve the open-source AI coding agent skill, its workflow, compatibility, examples, tests, and documentation.", alternates: { canonical: "/docs/contributing" } };

export default function ContributingPage() { return <Contributing />; }
