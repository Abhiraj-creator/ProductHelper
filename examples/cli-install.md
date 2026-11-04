# CLI installation example

Install product-helper for Codex in the current project:

```sh
npx product-helper-cli install --agent codex --local
```

Install it globally for Claude Code:

```sh
npx product-helper-cli install --agent claude --global
```

Check both agent locations:

```sh
npx product-helper-cli info
```

The CLI downloads the immutable release tag, validates `SKILL.md` and its local references, stages the files, and writes `.product-helper-install.json` metadata. Updates preserve unrelated files; uninstall removes only files recorded in that metadata.
