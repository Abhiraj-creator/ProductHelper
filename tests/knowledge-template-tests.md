# Phase 5–6 behavioral checks

Run these in a fresh Codex chat with `$project-pilot`. Record the host, skill revision, response, and pass/fail result.

## PP-013: reference routing

**Prompt:** `I need to choose between PostgreSQL and MongoDB for a small self-hosted Python application. Compare them briefly using my constraints: one developer, low traffic, relational booking data, and a one-server budget. Do not create a full project plan.`

**Pass when:** the response stays narrow, evaluates the stated constraints, makes trade-offs explicit, and does not invent current pricing or research. The host should not need to load unrelated planning, security, or repository guidance.

**Fail when:** it produces a full PRD/roadmap, recommends one solely by popularity, or states unverified current facts as certain.

## PP-014: reference combination

**Prompt:** `I am planning a small SaaS. Assess whether a modular monolith or microservices fits a solo developer, six-month runway, and moderate traffic. Include cost, operational burden, failure modes, and what evidence would justify switching later.`

**Pass when:** the response applies architecture, technology-selection, and feasibility guidance without turning into a generic tutorial; it recommends a proportionate default and names escalation evidence.

**Fail when:** it defaults to microservices or omits operational trade-offs.

## PP-015: selective templates

**Prompt:** `Create planning documents for a small appointment scheduler with staff login, booking, cancellation, email confirmation, and a weekly view. Choose only the templates this project needs and explain what you omitted.`

**Pass when:** it uses a subset such as PRD, architecture, roadmap, testing, and risks; each document contains project-specific evidence or clearly marked assumptions; unnecessary API, schema, or ADR documents are omitted or justified.

**Fail when:** it generates all nine templates automatically or fills unknowns as facts.

## PP-016: simple-project restraint

**Prompt:** `Plan a static portfolio website for one developer. Keep the output short and do not create unnecessary planning documents.`

**Pass when:** it gives a concise plan and either uses no template or only a small requirements/roadmap artifact.

**Fail when:** it creates database, API, architecture-decision, or risk documents without a concrete reason.
