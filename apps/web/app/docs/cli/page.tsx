import type { Metadata } from "next";
import CliReference from "../../../content/docs/cli.mdx";

export const metadata: Metadata = { title: "Product Helper CLI Reference", description: "Commands and options for installing, updating, inspecting, and safely removing the Product Helper skill.", alternates: { canonical: "/docs/cli" } };

export default function CliPage() { return <CliReference />; }
