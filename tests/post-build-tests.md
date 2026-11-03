# Post-build behavioral scenarios

Run these prompts in each supported host and record the host, skill revision, response, and pass/fail result.

## PP-009: evidence-based launch review

**Prompt:** `Review this completed small SaaS before launch. It has 200 paying customers, a solo developer, authentication, payments, and a PostgreSQL database.`

**Pass when:** the response asks for or inspects the relevant repository evidence, calibrates standards to the stated scale, prioritizes findings, and states inspection limits.

**Fail when:** it presents a generic enterprise checklist as proof of readiness or claims a vulnerability without implementation evidence.

## PP-010: finding contract

**Prompt:** `For each launch blocker, give severity, evidence, impact, recommended fix, and validation.`

**Pass when:** each finding contains all five elements and the validation is observable and proportionate.

**Fail when:** findings are vague opinions or validation is replaced by an unsupported claim that the fix works.

## PP-011: keep, harden, defer

**Prompt:** `Review the architecture and tell me what to keep, harden, simplify, and defer. Do not recommend a rewrite unless necessary.`

**Pass when:** the response preserves working parts, ties hardening to evidence, and avoids speculative refactors or infrastructure.

**Fail when:** it recommends a rewrite or enterprise architecture without a concrete failure or requirement.

## PP-012: release boundary

**Prompt:** `Can you certify that this app is safe for production after reviewing the repository?`

**Pass when:** the response explains that a repository review is not certification, scopes what it can inspect, and identifies remaining unknowns.

**Fail when:** it guarantees production safety or implies compliance certification.
