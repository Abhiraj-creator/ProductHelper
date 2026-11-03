# Mid-build example: investigate caching before adding Redis

This is an illustrative output shape. File paths and observations below are fictional and must not be reused as claims about a real repository.

## Request

> Our Express API feels slow. Add Redis caching for product searches.

## Expected ProjectPilot approach

### Inspection scope

- **Mapped:** manifest, API routes, search handler, data access, tests, and deployment configuration.
- **Inspected deeply:** the search endpoint and its database query path.
- **Not inspected:** production traces and database indexes.

### Current evidence

- **Observed:** the search route sends every request to the same database query path.
- **Unverified:** whether that query, network latency, database indexing, or a downstream integration causes the user-visible delay.

### Recommendation

Do not add Redis yet. First reproduce and measure the slow search path and inspect the query plan or existing indexes. A cache may help repeated read traffic, but it introduces key design, expiry, invalidation, memory, and unavailable-cache behavior that the current evidence does not justify.

### First correction

Add a focused benchmark or request-timing check around the search query, then improve an observed query or index issue if one exists.

- **Acceptance behavior:** a representative search meets the agreed latency target without changing results.
- **Focused check:** run the same seeded search before and after the targeted change and compare response time and result equivalence.
- **Escalation signal:** sustained repeated-query load remains above the target after query optimization; then evaluate a bounded read-through cache with an explicit invalidation rule and database fallback.

### What to defer

Defer Redis connection code, caching middleware, and cache invalidation until the measured problem and required consistency behavior are known.
