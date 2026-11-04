# ProjectPilot CLI

After publishing the package to npm, install the ProjectPilot skill for Codex or Claude Code:

```sh
npx projectpilot install
npx projectpilot install --agent codex --global
npx projectpilot install --agent claude --local
npx projectpilot update --all
npx projectpilot uninstall --agent codex --yes
npx projectpilot info --json
```

`update`, `uninstall`, and `info --json` manage only directories containing ProjectPilot metadata. `uninstall` always asks before removal; use `--yes` only for non-interactive automation.

## Installation locations

| Agent | Global | Project-level |
| --- | --- | --- |
| Codex | `~/.codex/skills/project-pilot/` | `.agents/skills/project-pilot/` |
| Claude Code | `~/.claude/skills/project-pilot/` | `.claude/skills/project-pilot/` |

Project-level installation is relative to the directory where the command is run. The CLI refuses to replace an existing directory that does not contain ProjectPilot metadata.

## Troubleshooting

- **Release cannot be downloaded:** check network access and confirm the configured release tag exists. The default is the immutable `v0.1.1` tag; `PROJECTPILOT_REPOSITORY` can override it with another immutable `#vMAJOR.MINOR.PATCH` source.
- **Permission denied:** choose a project-level install or run the global install from a terminal with permission to write the agent’s home directory.
- **Installation already exists:** use `update`, or rerun `install` and confirm replacement. Unmanaged directories are never overwritten.
- **Agent does not see the skill:** restart or refresh the agent after installation and verify the exact path with `projectpilot info`.
- **Uninstall in automation:** pass `--yes`; without it, the CLI requires explicit confirmation.

The release source defaults to the ProjectPilot repository's immutable `v0.1.1` tag. Maintainers may override it with `PROJECTPILOT_REPOSITORY`, but it must be an immutable `#vMAJOR.MINOR.PATCH` Giget source.
