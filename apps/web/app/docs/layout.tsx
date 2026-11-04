import Link from "next/link";

const links = [["Overview", "/docs"], ["Getting started", "/docs/getting-started"], ["Installation", "/docs/installation"], ["CLI reference", "/docs/cli"], ["Plan workflow", "/docs/workflows/plan"], ["Improve workflow", "/docs/workflows/improve"], ["Review workflow", "/docs/workflows/review"], ["Contributing", "/docs/contributing"]] as const;

export default function DocsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <div className="shell docs-layout"><nav className="docs-nav" aria-label="Documentation">{links.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}</nav><article className="doc">{children}</article></div>;
}
