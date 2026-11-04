# CLI installation example

Install ProjectPilot for Codex in the current project:

```sh
npx projectpilot install --agent codex --local
```

Install it globally for Claude Code:

```sh
npx projectpilot install --agent claude --global
```

Check both agent locations:

```sh
npx projectpilot info
```

The CLI downloads the immutable release tag, validates `SKILL.md` and its local references, stages the files, and writes `.projectpilot-install.json` metadata. Updates preserve unrelated files; uninstall removes only files recorded in that metadata.
