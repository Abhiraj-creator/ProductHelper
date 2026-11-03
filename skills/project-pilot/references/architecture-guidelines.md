# Architecture guidelines

Read when comparing or designing system boundaries.

## Default direction

Start with the simplest architecture that satisfies the evidenced requirements: a monolith for a small product, a modular monolith when boundaries improve change safety, or a serverless shape when its execution and operational model genuinely fit.

## Escalation evidence

Consider separate services or event-driven coordination only for a concrete boundary such as independent scaling, isolation, ownership, deployment cadence, or asynchronous workload that the current design cannot handle. Name the operational cost, failure modes, observability, data consistency, and local-development burden.

## Review questions

Map data flow, dependency direction, state ownership, failure handling, authentication boundaries, and deployment units. Prefer a diagram only when it clarifies a material boundary. Do not prescribe layers, queues, microservices, or Kubernetes because they are fashionable.
