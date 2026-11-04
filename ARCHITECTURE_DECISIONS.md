# product-helper Architecture Decisions

## ADR-001: Use the Agent Skills format

**Status:** Accepted

**Decision:** Ship a folder with `SKILL.md` and optional references, assets, and host metadata.

**Reason:** Codex and Claude Code can discover the same portable runtime contract.

## ADR-002: Markdown-first implementation

**Status:** Accepted

**Decision:** Keep the first milestone in Markdown.

**Reason:** The host agent already provides reasoning, file access, and available research tools; a deterministic orchestration engine is not required yet.

## ADR-003: Host agent handles reasoning

**Status:** Accepted

**Decision:** product-helper supplies methodology, boundaries, and output contracts rather than an AI backend.

**Reason:** Avoid duplicating capabilities supplied by the host.

## ADR-004: Defer RAG and embeddings

**Status:** Accepted

**Decision:** Use curated Markdown references first.

**Reason:** Validate workflow quality before adding retrieval infrastructure.

## ADR-005: Separate the skill from a CLI

**Status:** Accepted

**Decision:** The skill must work when copied into a compatible host without an installer.

**Reason:** Portability is the first deliverable; packaging and installation automation can follow.

## ADR-006: Evidence before recommendations

**Status:** Accepted

**Decision:** Material claims must identify evidence status, uncertainty, and trade-offs.

**Reason:** Prevent generic or fabricated engineering advice.

## ADR-007: Three lifecycle modes

**Status:** Accepted

**Decision:** Support pre-build, mid-build, and post-build workflows with narrower decision and architecture-review routes.

**Reason:** The same evidence-first methodology should cover the project lifecycle without separate products.

## ADR-008: Proportionate architecture

**Status:** Accepted

**Decision:** Prefer the simplest architecture that satisfies evidenced requirements.

**Reason:** Small teams and early products should not inherit operational complexity without a measurable need.

## ADR-009: Read-only advisory boundary

**Status:** Accepted

**Decision:** product-helper may inspect and recommend, but execution, edits, installation, deployment, and destructive actions require separate authorization.

**Reason:** Advice must not silently mutate projects or cross permission boundaries.

## ADR-010: Defer automated orchestration

**Status:** Accepted

**Decision:** Do not add a TypeScript engine, website, backend, or RAG system in Milestone 1.

**Reason:** They do not improve the portable Markdown skill's core proof of value.
