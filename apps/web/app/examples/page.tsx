import type { Metadata } from "next";

export const metadata: Metadata = { title: "AI Project Planning and Architecture Examples", description: "See prompts for planning a software project, analyzing a repository, comparing technologies, and reviewing production readiness.", alternates: { canonical: "/examples" } };

const examples = [
  ["New SaaS", "I want to build a SaaS for managing freelance projects.", "Clarify scope, compare viable options, choose a proportionate architecture, and sequence the first build slice."],
  ["Existing repository", "Analyze this MERN application and suggest how I should add caching.", "Inspect the codebase first, test whether caching is justified, identify affected paths, and define validation."],
  ["Technology decision", "Should I use PostgreSQL or MongoDB?", "Evaluate the actual data model, transactions, relationships, operations, and migration implications."],
  ["Production review", "Review this project before deployment.", "Prioritize readiness gaps, explain the evidence, and provide practical checks before launch."],
];

export default function Examples() {
  return <section className="shell page"><p className="eyebrow">Examples</p><h1>Questions worth answering before code.</h1><p className="lede">Use the host agent naturally. Product Helper supplies a decision process rather than a fixed response template.</p><div className="example-list">{examples.map(([title, prompt, outcome]) => <article className="example" key={title}><h2>{title}</h2><pre>{prompt}</pre><p>{outcome}</p></article>)}</div></section>;
}
