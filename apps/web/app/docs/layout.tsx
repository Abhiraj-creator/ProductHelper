"use client";

import Link from "next/link";
import { useState } from "react";

const links = [["Overview", "/docs"], ["Getting started", "/docs/getting-started"], ["Installation", "/docs/installation"], ["CLI reference", "/docs/cli"], ["Plan workflow", "/docs/workflows/plan"], ["Improve workflow", "/docs/workflows/improve"], ["Review workflow", "/docs/workflows/review"], ["Contributing", "/docs/contributing"]] as const;

export default function DocsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const [menuOpen, setMenuOpen] = useState(false);
  return <div className="shell docs-layout"><div className="docs-menu"><button className="docs-menu-toggle" type="button" aria-expanded={menuOpen} aria-controls="docs-navigation" onClick={() => setMenuOpen(!menuOpen)}>Documentation menu</button><nav className={menuOpen ? "docs-nav open" : "docs-nav"} id="docs-navigation" aria-label="Documentation">{links.map(([label, href]) => <Link key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</Link>)}</nav></div><article className="doc">{children}</article></div>;
}
