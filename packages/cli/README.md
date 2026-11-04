# ProjectPilot CLI

Install the ProjectPilot skill for Codex or Claude Code:

```sh
npx projectpilot install
npx projectpilot install --agent codex --global
npx projectpilot install --agent claude --local
```

`update`, `uninstall`, and `info --json` manage only directories containing ProjectPilot metadata. `uninstall` always asks before removal; use `--yes` only for non-interactive automation.

The release source defaults to the ProjectPilot repository's immutable `v0.1.1` tag. Maintainers may override it with `PROJECTPILOT_REPOSITORY`, but it must be an immutable `#vMAJOR.MINOR.PATCH` Giget source. Publish that tag before distributing the npm package.
