# Product Helper

<table align="center"><tr><td bgcolor="#f7f6f2" align="center"><img src="https://raw.githubusercontent.com/Abhiraj-creator/ProductHelper/main/public/producthelper-logo-mono-light.svg" alt="Product Helper" width="480"></td></tr></table>

<p align="center"><strong>Evidence before advice.</strong><br>Plan a project, choose an architecture, improve a repository, or check launch readiness—with evidence and clear trade-offs.</p>

[![CLI CI](https://github.com/Abhiraj-creator/ProductHelper/actions/workflows/cli.yml/badge.svg)](https://github.com/Abhiraj-creator/ProductHelper/actions/workflows/cli.yml)
[![npm version](https://img.shields.io/npm/v/product-helper-cli?logo=npm)](https://www.npmjs.com/package/product-helper-cli)
[![npm downloads](https://img.shields.io/npm/dm/product-helper-cli?logo=npm)](https://www.npmjs.com/package/product-helper-cli)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/Abhiraj-creator/ProductHelper)

<p align="center"><a href="https://product-helper-pi.vercel.app">Website &amp; docs</a> · <a href="https://www.npmjs.com/package/product-helper-cli">CLI on npm</a> · <a href="packages/cli/README.md">CLI guide</a></p>

Product Helper is an open-source, portable Agent Skill for Codex and Claude Code. It gives your coding agent a practical process for making grounded engineering decisions. The companion CLI installs and manages the skill; no Product Helper account, backend, or telemetry is involved.

| Plan | Improve | Review |
| --- | --- | --- |
| Shape an idea into feasible scope, architecture, and milestones. | Inspect an existing repository before proposing changes. | Find launch risks and prioritize readiness work. |

**Quick start** · Requires Node.js 20 or later.

```sh
npx product-helper-cli install
```

Then ask your agent to plan a project, assess an architecture, improve a repository, or review launch readiness. See [installation options](#quick-start) and [supported agents](#supported-agents-and-paths).

```text
Idea or decision ──> evidence and constraints ──> smallest justified next step
Existing repository ─> inspect what is real ────> change, keep, or defer
Ready to ship ──────> risks and readiness gaps ─> prioritized hardening plan
```

## Contents

- [Why Product Helper](#why-product-helper)
- [Use it when](#use-it-when)
- [Quick start](#quick-start)
- [What the workflow does](#what-the-workflow-does)
- [Supported agents and paths](#supported-agents-and-paths)
- [CLI commands](#cli-commands)
- [Safety and ownership](#safety-and-ownership)
- [How it reasons](#how-it-reasons)
- [Source of truth](#source-of-truth)
- [Repository layout](#repository-layout)
- [Development and verification](#development-and-verification)
- [Limitations](#limitations)

## Why Product Helper

Most project advice fails before implementation because it starts with a fashionable stack or an imagined architecture. Product Helper starts with the actual problem, constraints, repository evidence, trade-offs, and failure conditions.

It helps an agent answer:

- What is the smallest credible thing to build?
- Which architecture fits the real constraints?
- What should be changed, preserved, or deferred in an existing repository?
- Which risks matter before launch?
- When does a recommendation stop being the right one?

It is advisory by design. The host agent remains responsible for execution, edits, credentials, deployment, and destructive actions.

## Use it when

- You have a rough idea and need a feasible build direction.
- You are choosing between stacks, vendors, databases, hosting options, or architectures.
- An existing repository is becoming difficult to change and you need course correction.
- You want a file-grounded review before shipping.
- You want the agent to explain what not to build yet.

## Quick start

### Install from npm

The CLI is published as [`product-helper-cli`](https://www.npmjs.com/package/product-helper-cli). With Node.js 20 or later, it installs the canonical skill from the immutable GitHub release tag:

```sh
npx product-helper-cli install
```

Choose non-interactive options when you already know the target:

```sh
npx product-helper-cli install --agent codex --global
npx product-helper-cli install --agent claude --local
npx product-helper-cli install --agent all --global
```

Then start a supported agent and invoke the skill:

```text
$product-helper Review my project before launch.
```

Restart or refresh the host after installation if it does not discover the skill immediately. Product Helper can also activate from a suitable planning, architecture, repository-improvement, or launch-readiness request.

### Install manually

Copy the canonical `skills/product-helper/` directory into the location your agent scans. No CLI is required:

```text
Codex project:        .agents/skills/product-helper/
Codex global:         ~/.codex/skills/product-helper/
Claude project:       .claude/skills/product-helper/
Claude global:        ~/.claude/skills/product-helper/
```

## What the workflow does

### Pre-build

Turns an idea into a feasible scope, constraints, stack direction, architecture outline, roadmap, and material risks.

### Mid-build

Inspects the existing repository before recommending changes. It prioritizes the smallest justified correction instead of prescribing a rewrite, service split, cache, queue, or framework without evidence.

### Post-build

Reviews launch readiness against the intended users, data, traffic, deployment, security, operations, and recovery expectations.

### Decision

Compares realistic options narrowly, including trade-offs, cost, maintenance, lock-in, failure modes, and conditions that would reverse the recommendation.

### Architecture review

Assesses a real architecture from inspected evidence, or clearly labels a design-only review as provisional.

## How it reasons

For material claims, Product Helper distinguishes **verified** external facts, **observed** repository evidence, **inferred** conclusions, and **assumptions**. It loads its planning, research, architecture, technology-selection, repository-analysis, feasibility, security, and output-contract references only when a request needs them.

For substantial work, it can produce a plan, comparison, architecture outline, roadmap, first implementation slice, or risk register. It does not generate a full document set merely because templates exist.

## Supported agents and paths

| Agent | Global skill path | Project skill path |
| --- | --- | --- |
| Codex | `~/.codex/skills/product-helper/` | `.agents/skills/product-helper/` |
| Claude Code | `~/.claude/skills/product-helper/` | `.claude/skills/product-helper/` |

The skill folder is portable. Host-specific metadata is additive and does not change the workflow in `SKILL.md`.

## CLI commands

```sh
# Interactive install
npx product-helper-cli install

# Explicit install targets
npx product-helper-cli install --agent codex --global
npx product-helper-cli install --agent claude --local
npx product-helper-cli install --agent all --global

# Safe management
npx product-helper-cli update --all
npx product-helper-cli info
npx product-helper-cli info --json
npx product-helper-cli uninstall --agent codex
npx product-helper-cli uninstall --agent codex --yes
```

The current CLI release is `0.1.3`. See the [CLI guide and troubleshooting notes](packages/cli/README.md) for release-source overrides, permissions, existing installations, and migration from the previous name.

## Safety and ownership

The installer:

- Downloads only from an immutable GitHub tag by default.
- Validates `SKILL.md`, frontmatter, local references, directory structure, and symlink safety.
- Stages files before replacing a managed installation.
- Writes `.product-helper-install.json` ownership metadata.
- Preserves files outside its managed file list.
- Refuses to overwrite an unmanaged directory.
- Requires confirmation before destructive uninstall operations.
- Removes only files recorded as managed by Product Helper.

Existing `project-pilot` installations are not deleted automatically after the rename. Remove those old directories separately only after confirming they are no longer needed.

`update`, `uninstall`, and `info --json` act only on directories carrying Product Helper ownership metadata. Use `--yes` only when non-interactive automation is intended.

## Source of truth

The runtime workflow lives in [`skills/product-helper/SKILL.md`](skills/product-helper/SKILL.md). The CLI only downloads, validates, installs, updates, reports, and removes that skill; it does not duplicate the skill’s reasoning or add an AI backend. You can therefore use the skill by copying its folder directly when npm is not appropriate.

## Repository layout

```text
skills/product-helper/       portable runtime skill and references
packages/cli/                TypeScript installer and manager
examples/                    user-facing workflow examples
tests/                       behavior and compatibility checks
evals/                       evaluation cases, rubric, and portability checks
.github/workflows/cli.yml    Windows, macOS, and Linux CI
```

## Development and verification

```sh
cd packages/cli
npm ci
npm run check       # TypeScript validation
npm test            # Vitest unit tests
npm run build       # Bundle the executable
npm pack --dry-run  # Inspect published contents
```

The CLI package publishes only `README.md`, `dist/`, and `package.json`. Tests and source files stay in the repository.

GitHub Actions runs the CLI checks on Ubuntu, macOS, and Windows. Local verification here is performed on Windows; cross-platform claims are based on the CI matrix rather than pretending a Windows machine is macOS or Linux.

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
- [Product specification](PRODUCT_SPEC.md)
- [Architecture decisions](ARCHITECTURE_DECISIONS.md)

## Limitations

Product Helper does not guarantee correctness, certify security or compliance, install application dependencies, deploy systems, or modify source code without separate authorization. Research quality, pricing, repository access, and runtime behavior depend on the host agent’s available capabilities.
