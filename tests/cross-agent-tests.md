# Cross-agent test record

Run the same prompts from `evals/cases.md` in Codex and Claude Code. This file records results; it does not claim parity before the runs happen.

| Area | Codex | Claude Code | Notes |
| --- | --- | --- | --- |
| Skill discovery | Not yet recorded | Not yet recorded | |
| Intake behavior | Pass for PP-001 | Not run | |
| Pre-build planning | Pass for PP-003 | Not run | |
| Mid-build safety boundary | Pass with missing-repository fallback | Not run | Real Express fixture still needed |
| Post-build review | Pass for P2P repository | Not run | |
| Reference routing | Not run after Phase 5 | Not run | |
| Template restraint | Not run after Phase 6 | Not run | |
| Security behavior | Not run | Not run | |
| Output consistency | Not established | Not established | |

## Recording rule

For each run, save the exact prompt, host and version, skill revision, response, score, failure, change, and retest response. Do not compare hosts using different prompts or silently discard failures.
