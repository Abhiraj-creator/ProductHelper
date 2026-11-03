# ProjectPilot

ProjectPilot is a portable Markdown-based Agent Skill for evidence-based project planning, architecture decisions, repository improvement, and production-readiness review.

## Workflows

- **Pre-build:** turn a project idea into a feasible scope, stack direction, architecture outline, and roadmap.
- **Mid-build:** inspect an existing repository and recommend the smallest justified changes.
- **Post-build:** review launch readiness with prioritized, file-grounded findings.
- **Decision:** compare a technology, vendor, or architecture narrowly against real constraints.

## Install for Codex

Copy `skills/project-pilot/` to either:

- `.agents/skills/project-pilot/` in a project
- `~/.codex/skills/project-pilot/` for user-wide use

Then invoke it with:

```text
$project-pilot Review my project before launch.
```

## Install for Claude Code

Copy the same skill folder into the project's `.claude/skills/project-pilot/` or the user's Claude skills directory.

## CLI installer (Milestone 2)

From `packages/cli`, run `npm install`, then `npm run build`. The packaged command supports interactive installation or non-interactive forms such as `projectpilot install --agent codex --global`; it also provides `update`, `uninstall`, and `info --json`.

## Examples and tests

- [Pre-build example](examples/pre-build-example.md)
- [Mid-build example](examples/mid-build-caching-example.md)
- [Post-build example](examples/post-build-review-example.md)
- [Behavioral tests](tests/)
- [Evaluation cases](evals/cases.md)
- [Evaluation rubric](evals/evaluation-rubric.md)
- [Portability checklist](evals/portability.md)
- [Milestone 1 status](MILESTONE1_STATUS.md)

## Limitations

ProjectPilot provides advice; it does not guarantee correctness, certify security or compliance, install dependencies, deploy applications, or modify source code without separate authorization. Research, pricing, repository access, and runtime behavior depend on the host's available capabilities.
