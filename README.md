# ProjectPilot

ProjectPilot is a portable Agent Skill for evidence-based project planning, architecture decisions, repository improvement, and production-readiness review. It works with Codex and Claude Code without a backend, database, account, or separate AI runtime.

[![CLI CI](https://github.com/Abhiraj-creator/dev-helper/actions/workflows/cli.yml/badge.svg)](https://github.com/Abhiraj-creator/dev-helper/actions/workflows/cli.yml)

## What it helps with

- **Pre-build:** turn an idea into a feasible scope, stack direction, architecture outline, and roadmap.
- **Mid-build:** inspect an existing repository and recommend the smallest justified changes.
- **Post-build:** review launch readiness with prioritized, file-grounded findings.
- **Decision:** compare a technology, vendor, or architecture against real constraints.

The skill is read-only by design: it advises and documents decisions, while the host agent remains responsible for execution and authorization.

## Install the skill manually

For Codex, copy `skills/project-pilot/` to `.agents/skills/project-pilot/` for one project or `~/.codex/skills/project-pilot/` for user-wide use.

For Claude Code, copy the same folder to `.claude/skills/project-pilot/` for one project or `~/.claude/skills/project-pilot/` for user-wide use.

Then invoke it from the agent:

```text
$project-pilot Review my project before launch.
```

## Install with the CLI

Once the package is published to npm, the Milestone 2 CLI installs and manages the same canonical skill for both supported agents:

```sh
npx projectpilot install
npx projectpilot install --agent codex --global
npx projectpilot install --agent claude --local
```

Manage an existing installation:

```sh
npx projectpilot update --all
npx projectpilot info
npx projectpilot info --json
npx projectpilot uninstall --agent codex
```

| Agent | Global | Project-level |
| --- | --- | --- |
| Codex | `~/.codex/skills/project-pilot/` | `.agents/skills/project-pilot/` |
| Claude Code | `~/.claude/skills/project-pilot/` | `.claude/skills/project-pilot/` |

The CLI downloads an immutable GitHub release, validates `SKILL.md` and local references, stages changes before replacing files, records ownership metadata, preserves unrelated files, and removes only files it manages.

The current CLI release is `0.1.1`, distributed from the repository’s `v0.1.1` tag. See the [CLI guide](packages/cli/README.md) for troubleshooting and release-source details.

## Develop the CLI locally

```sh
cd packages/cli
npm install
npm run check
npm test
npm run build
node dist/index.js --help
```

The CLI package is separate from the skill source. Changes to `packages/cli` must not duplicate or modify `skills/project-pilot`.

## Repository map

```text
skills/project-pilot/       canonical portable skill
packages/cli/               TypeScript installer and manager
examples/                   user-facing workflow examples
tests/                      skill behavior and compatibility tests
evals/                      evaluation cases and rubric
```

## Documentation

- [CLI guide and troubleshooting](packages/cli/README.md)
- [CLI installation example](examples/cli-install.md)
- [Changelog](CHANGELOG.md)
- [Pre-build example](examples/pre-build-example.md)
- [Mid-build example](examples/mid-build-caching-example.md)
- [Post-build example](examples/post-build-review-example.md)
- [Behavioral tests](tests/)
- [Evaluation cases](evals/cases.md)
- [Evaluation rubric](evals/evaluation-rubric.md)
- [Portability checklist](evals/portability.md)
- [Milestone 1 status](MILESTONE1_STATUS.md)

## Limitations

ProjectPilot provides advice; it does not guarantee correctness, certify security or compliance, install dependencies, deploy applications, or modify source code without separate authorization. Research, pricing, repository access, and runtime behavior depend on the host agent’s available capabilities.
