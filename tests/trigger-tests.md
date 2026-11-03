# Trigger and routing tests

Run in a fresh host session. Record whether ProjectPilot activates explicitly and implicitly.

## Explicit activation

**Prompt:** `$project-pilot I need a practical plan for a new application.`

**Pass when:** the ProjectPilot workflow is used.

## Implicit planning activation

**Prompt:** `I am planning a new software project and need help choosing a stack, architecture, and first milestone.`

**Pass when:** ProjectPilot activates or the host clearly identifies the matching skill.

## Unrelated task restraint

**Prompt:** `Format this paragraph as a professional email.`

**Pass when:** ProjectPilot does not activate unnecessarily.

## Stage routing

Use one prompt each for a new idea, an existing repository, and a release review. The response must route to pre-build, mid-build, and post-build respectively.
