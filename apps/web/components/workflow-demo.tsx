"use client";

import { useState } from "react";

const workflows = {
  plan: {
    label: "Plan",
    prompt: "I want to build a SaaS for managing freelance projects.",
    steps: ["Clarifying constraints", "Testing feasibility", "Comparing options"],
    result: "Start with a modular monolith and a single core workflow.",
  },
  improve: {
    label: "Improve",
    prompt: "Should I add Redis caching to this application?",
    steps: ["Mapping repository boundaries", "Inspecting the slow path", "Testing the need for caching"],
    result: "Measure the query first; defer Redis until the evidence supports it.",
  },
  review: {
    label: "Review",
    prompt: "Review this project before production deployment.",
    steps: ["Checking launch assumptions", "Prioritizing risks", "Defining validation"],
    result: "Fix the authentication boundary and add a recovery check before launch.",
  },
} as const;

type WorkflowId = keyof typeof workflows;

export function WorkflowDemo() {
  const [active, setActive] = useState<WorkflowId>("plan");
  const workflow = workflows[active];

  return <section className="workflow-demo" aria-label="Product Helper workflow example">
    <div className="workflow-tabs" role="tablist" aria-label="Workflow">
      {(Object.keys(workflows) as WorkflowId[]).map((id) => <button key={id} role="tab" aria-selected={active === id} className={active === id ? "active" : ""} onClick={() => setActive(id)}>{workflows[id].label}</button>)}
    </div>
    <div className="workflow-body" role="tabpanel">
      <p className="workflow-prompt">&gt; {workflow.prompt}</p>
      <ol>{workflow.steps.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span>{step}</li>)}</ol>
      <p className="workflow-result"><span>Recommendation</span>{workflow.result}</p>
    </div>
  </section>;
}
