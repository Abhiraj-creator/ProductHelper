# Product Helper CLI

![Product Helper](https://raw.githubusercontent.com/Abhiraj-creator/dev-helper/main/public/producthelper-logo-mono-light.svg)

Install and manage the [Product Helper](https://github.com/Abhiraj-creator/dev-helper) Agent Skill for Codex or Claude Code. Product Helper provides evidence-based planning, architecture decisions, repository-improvement advice, and production-readiness reviews; this package installs the portable skill and does not run an AI service or collect project data.

Requires Node.js 20 or later.

## Quick start

```sh
npx product-helper-cli install
npx product-helper-cli install --agent codex --global
npx product-helper-cli install --agent claude --local
npx product-helper-cli update --all
npx product-helper-cli uninstall --agent codex --yes
npx product-helper-cli info --json
```

`update`, `uninstall`, and `info --json` manage only directories containing product-helper metadata. `uninstall` always asks before removal; use `--yes` only for non-interactive automation.

Restart or refresh your agent after installation, then invoke the skill:

```text
$product-helper Help me decide the first milestone for this project.
```

## Commands

| Command | What it does |
| --- | --- |
| `install` | Interactively chooses an agent and scope. |
| `install --agent <codex\|claude\|all> --global` | Installs globally. |
| `install --agent <codex\|claude\|all> --local` | Installs in the current project. |
| `update [--agent <agent>\|--all]` | Updates managed installations from the release tag. |
| `info [--json]` | Shows managed installations. |
| `uninstall [--agent <agent>\|--all] [--yes]` | Removes managed files after confirmation by default. |

## Installation locations

| Agent | Global | Project-level |
| --- | --- | --- |
| Codex | `~/.codex/skills/product-helper/` | `.agents/skills/product-helper/` |
| Claude Code | `~/.claude/skills/product-helper/` | `.claude/skills/product-helper/` |

Project-level installation is relative to the directory where the command is run. The CLI refuses to replace an existing directory that does not contain product-helper metadata.

## What the installer protects

The CLI downloads the configured immutable release tag, validates `SKILL.md` and its local references, rejects symlinks, stages files before replacement, and records its managed files in `.product-helper-install.json`. Updates and uninstalls preserve files that are outside that managed list.

## Troubleshooting

- **Release cannot be downloaded:** check network access and confirm the configured release tag exists. The default is the immutable `v0.1.3` tag; `PRODUCT_HELPER_REPOSITORY` can override it with another immutable `#vMAJOR.MINOR.PATCH` source.
- **Permission denied:** choose a project-level install or run the global install from a terminal with permission to write the agent’s home directory.
- **Installation already exists:** use `update`, or rerun `install` and confirm replacement. Unmanaged directories are never overwritten.
- **Agent does not see the skill:** restart or refresh the agent after installation and verify the exact path with `product-helper-cli info`.
- **Uninstall in automation:** pass `--yes`; without it, the CLI requires explicit confirmation.

The release source defaults to the product-helper repository's immutable `v0.1.3` tag. Maintainers may override it with `PRODUCT_HELPER_REPOSITORY`, but it must be an immutable `#vMAJOR.MINOR.PATCH` Giget source.

### Renaming from the previous package

Product Helper uses new `product-helper` paths and metadata. Existing `project-pilot` installations are not removed automatically; remove those old directories separately only after confirming they are no longer needed.

For the workflow, examples, and development instructions, see the [repository README](https://github.com/Abhiraj-creator/dev-helper#readme).
