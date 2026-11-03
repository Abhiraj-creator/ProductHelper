# Portability checklist

This checklist distinguishes structural portability from behavioral parity.

## Codex

- Install the skill under `.agents/skills/project-pilot/` for a project or `$USERPROFILE/.agents/skills/project-pilot/` for user-wide use.
- Test `$project-pilot` explicitly and test one prompt for implicit activation.
- Restart or refresh the host if updated metadata is not visible.

## Claude Code

- Copy the same `skills/project-pilot/` folder under the project's `.claude/skills/` or the user's Claude skills directory.
- Test explicit and implicit activation in a fresh session.

## Cross-host checks

- `SKILL.md` is the shared runtime contract; `agents/openai.yaml` is optional UI metadata.
- No instruction requires a particular model, operating system, web provider, or host-only tool.
- When browsing, repository access, or another capability is unavailable, the host must disclose the limitation and continue proportionately.
- Compare behavior, not just activation: intake, evidence labels, repository boundaries, scope control, safety, and output shape.

## Current status

Structural portability is intended by design. Codex behavior has been manually exercised for intake, pre-build, mid-build fallback, and post-build review. Claude Code parity has not yet been run.
