# Decision Log — Shans Juice

This document records meaningful product and technical decisions so future changes have context.

## Decision 001 — WhatsApp as the Ordering Handoff

**Decision:** Use WhatsApp as the final ordering destination instead of implementing a full payment/checkout backend in the current version.

**Why:** It keeps the ordering journey simple and matches a practical local-business workflow while avoiding unnecessary backend complexity.

**Implication:** The website should prepare clear order information before handing the customer to WhatsApp.

## Decision 002 — Centralized Content

**Decision:** Keep business and menu content in a centralized data layer.

**Why:** Content changes should not require editing presentation components.

**Implication:** Components consume structured content rather than duplicating business copy.

## Decision 003 — Sample Data Must Be Explicit

**Decision:** Sample products and unverified business information must remain distinguishable from verified information.

**Why:** A portfolio/demo project should not accidentally publish fabricated business claims.

**Implication:** Maintain the existing `sample` and placeholder conventions in the data layer.

## Decision 004 — Responsive First

**Decision:** Treat mobile usability as a first-class requirement.

**Why:** Menu discovery and ordering are likely to happen from mobile devices.

**Implication:** Every major UI change should be reviewed at mobile and desktop widths.

## Decision 005 — Purposeful Motion

**Decision:** Use animation to communicate state, hierarchy, and transitions rather than as decoration alone.

**Why:** The product should feel polished while keeping the ordering journey fast and readable.

**Implication:** New motion should respect accessibility and avoid unnecessary interaction delays.
