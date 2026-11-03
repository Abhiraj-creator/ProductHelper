# Pre-build example: constrained appointment scheduler

This is an illustrative output shape, not verified research or a prescribed stack.

## Request

> I am a solo Python developer with six weeks and a $20/month budget. I need a scheduling tool for one local clinic: staff-managed appointment slots, patient booking and cancellation, email confirmations, and a simple weekly view. It must run on one server.

## Expected ProjectPilot approach

### Recommendation

Build a server-rendered Django application with PostgreSQL on one managed or self-managed server. Keep staff and patient workflows in the same deployable application; defer native mobile apps, multi-clinic tenancy, external calendar sync, and automated reminder campaigns.

**Constraint fit:** this uses the developer's Python experience, keeps the deployment footprint within one server, and leaves enough time to validate the booking workflow before adding integrations.

### Assumptions and evidence

- **Observed:** the supplied scope has one clinic, two user roles, and a six-week deadline.
- **Assumed:** appointment volume is modest and staff can resolve exceptional double-booking cases manually during the MVP.
- **Unverified:** hosting pricing, email provider limits, and applicable patient-data obligations need confirmation before launch.

### Main alternative

Use a hosted scheduling provider if the clinic needs calendar sync, SMS reminders, and compliance support immediately. It reduces initial build risk but adds recurring cost and less control over the booking workflow.

### First vertical slice

Deliver staff-created slots and a patient-facing page that books one open slot, persists the booking, and prevents a second booking for that slot.

- **Acceptance behavior:** a patient sees only free slots; after a successful booking, that slot is no longer bookable.
- **Focused check:** submit two competing booking requests for the same test slot and confirm the database permits only one booking.
- **Broader regression check:** run the booking and cancellation integration tests after the focused check passes.

### Roadmap

1. Build the slot, booking, and conflict-prevention slice.
2. Add cancellation, staff weekly view, and email confirmation with failure handling.
3. Validate backup, access control, deployment, and clinic-specific privacy requirements before accepting real patient data.

### Risks

| Risk | Mitigation or revisit condition |
| --- | --- |
| Double booking | Enforce the availability invariant in the database; do not rely only on the page state. |
| Email delivery failure | Record delivery status and let staff resend manually in the MVP. |
| Compliance scope | Confirm requirements before storing patient data; choose a provider or workflow appropriate to that result. |
