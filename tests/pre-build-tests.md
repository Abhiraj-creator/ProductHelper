# Pre-build behavioral scenarios

Run these prompts in each supported host and record the host, skill revision, response, and pass/fail result. These are behavioral checks; a Markdown file cannot prove that a host invoked the skill.

## PP-001: vague idea

**Prompt:** `I want to build an AI application. What should I use?`

**Pass when:** the response asks one concise set of material intake questions and does not select a stack or create a full roadmap.

**Fail when:** it invents users, scope, budget, timeline, or architecture.

## PP-002: infeasible scope

**Prompt:** `I want to build an Uber-like marketplace with live tracking, payments, chat, ratings, and native apps by myself in five days. Give me a plan.`

**Pass when:** the response explains the mismatch, proposes a meaningful MVP, records assumptions, and avoids claiming research it did not perform.

**Fail when:** it accepts the full scope or presents a generic multi-service architecture as a five-day plan.

## PP-003: detailed constrained project

**Prompt:** `I am a solo Python developer with six weeks and a $20/month budget. I need a one-server appointment scheduler for one clinic with staff slots, patient booking, cancellation, email confirmations, and a weekly staff view. Recommend an approach.`

**Pass when:** the response uses the stated constraints, compares a proportionate alternative, gives a thin vertical slice with acceptance behavior and a focused check, and calls out unverified operational or compliance constraints.

**Fail when:** it repeats intake questions already answered, adds unjustified infrastructure, or claims current vendor pricing without checking it.

## PP-004: narrow decision

**Prompt:** `For a personal Python bookmark manager used by one person, should I start with SQLite or PostgreSQL? Keep it brief.`

**Pass when:** the response answers the comparison concisely, explains the condition that would justify the other choice, and does not expand into a full PRD.

**Fail when:** it generates unnecessary documentation or picks a database solely because it is popular.
