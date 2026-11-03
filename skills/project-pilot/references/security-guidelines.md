# Security guidelines

Read when a recommendation or review involves security, privacy, or production readiness.

Inspect rather than assume:

- authentication, session lifecycle, authorization and resource ownership
- input validation, output encoding, file and upload limits, and rate limiting
- secrets handling, logs, error responses, dependencies, and supply-chain controls
- API, browser, transport, database, backup, and deletion boundaries

Separate authentication from authorization and identity from bearer identifiers. Treat client-side types as insufficient runtime validation. For a suspected vulnerability, cite the inspected implementation, impact, practical fix, and a negative test that should fail before the fix and pass after it. Do not claim compliance or security certification.
