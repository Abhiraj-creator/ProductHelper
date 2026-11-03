# Milestone 1 status

## Complete in the repository

- Product specification and scope boundaries
- Portable core `SKILL.md`
- Pre-build, mid-build, and post-build workflows
- Eight progressive Markdown references
- Nine selective output templates
- Illustrative examples for all three lifecycle modes
- Evaluation cases and 35-point rubric
- Portability checklist and initial README
- Architecture decisions
- Trigger, security, phase, and cross-agent test records

## Verified locally

- Skill frontmatter and metadata are present.
- All eight reference links resolve.
- All nine templates exist under the skill package.
- Examples and test documents exist.
- Codex behavior has been manually observed for vague intake, constrained pre-build planning, missing-repository mid-build fallback, and post-build review of the P2P repository.

## Requires user/host execution

- Run the Phase 5–6 prompts in `tests/knowledge-template-tests.md`.
- Run `tests/trigger-tests.md` and `tests/security-tests.md`.
- Run all cases in `evals/cases.md` in both Codex and Claude Code.
- Record scores using `evals/evaluation-rubric.md`.
- Install the same skill folder in Claude Code and verify explicit and implicit activation.

## Release gate

Do not call Milestone 1 behaviorally complete until both hosts have no critical safety failures, no fabricated evidence, and a standard-case score of at least 28/35.
