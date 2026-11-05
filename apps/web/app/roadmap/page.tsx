import type { Metadata } from "next";

export const metadata: Metadata = { title: "Product Helper Roadmap", description: "See the development roadmap for the Product Helper portable agent skill, CLI, and documentation website.", alternates: { canonical: "/roadmap" } };

export default function Roadmap() {
  return <section className="shell page"><p className="eyebrow">Roadmap</p><h1>Build the useful parts first.</h1><div className="roadmap"><article><p className="step">COMPLETED</p><h2>Milestone 1 — Agent Skill</h2><p>Portable, Markdown-first methodology for coding agents.</p><h2>Milestone 2 — TypeScript CLI</h2><p>Safe installation and management for Codex and Claude Code.</p></article><article><p className="step">CURRENT</p><h2>Milestone 3 — Website & documentation</h2><p>Clear onboarding, accurate documentation, practical examples, and an open-source home.</p></article><article><p className="step">FUTURE</p><h2>Distribution & release automation</h2><p>Release improvements and broader compatibility will follow real user needs.</p></article></div><p className="lede">This roadmap is directional, not a promise of dates.</p></section>;
}
