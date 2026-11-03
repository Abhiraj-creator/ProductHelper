# Post-build example: small SaaS launch review

This is an illustrative output shape. The paths and observations are fictional and must be verified against the actual application.

## Release target

The application is a small SaaS for 200 paying customers, operated by a solo developer. The review targets the first public launch, not enterprise compliance certification or an exhaustive security audit.

## Inspection scope

- **Mapped:** README, application manifest, auth flow, payment webhook handler, database migrations, tests, CI, deployment configuration, and backup configuration.
- **Inspected deeply:** authorization around account-owned records, webhook idempotency, production settings, and restore documentation.
- **Not verified:** live infrastructure permissions, provider dashboards, production traffic behavior, and legal compliance obligations.

## Prioritized findings

### High — webhook retries can duplicate subscription state

- **Evidence:** the inspected webhook handler writes subscription state without an observed event-id uniqueness check.
- **Impact:** provider retries could create duplicate processing or inconsistent account access.
- **Recommendation:** persist and atomically claim the provider event ID before applying the state transition.
- **Validation:** replay the same signed fixture twice and verify one state transition and one audit record.

### Medium — restore procedure is undocumented

- **Evidence:** backups are configured, but no inspected runbook records restore steps or a recovery target.
- **Impact:** a backup may exist without a demonstrated recovery path.
- **Recommendation:** document and rehearse a disposable restore before launch.
- **Validation:** restore a recent backup into an isolated environment and verify a known account can sign in.

### Defer — service-layer refactor

No observed failure or upcoming requirement justifies a broad folder refactor before launch. Keep the current structure and revisit it when a measured maintenance problem appears.

## Launch decision

Fix the webhook idempotency issue and demonstrate a disposable restore before accepting paid traffic. The review does not certify the application; live infrastructure, production load, and compliance remain outside this inspection.
