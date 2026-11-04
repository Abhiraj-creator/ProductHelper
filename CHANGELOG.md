# Changelog

## 0.1.3 — 2026-11-04

- Upgraded the runtime Zod dependency to remove the production audit vulnerability.

## 0.1.2 — 2026-11-04

- Renamed the product and skill to Product Helper; the npm package and CLI command are `product-helper-cli`.
- Moved the installed skill path to `product-helper`.

## 0.1.1 — 2026-11-04

- Fixed release skill path resolution for the repository layout.
- Preserved unrelated files during updates and uninstall.
- Fixed recursive cleanup of managed directories.
- Skipped updates when the installed version is already current.
- Added cross-platform path coverage and release smoke testing.

## 0.1.0

- Added the product-helper CLI installer for Codex and Claude Code.
- Added global and project-level installation, update, uninstall, and info commands.
