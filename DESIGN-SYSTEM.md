# Design System — Shans Juice

## Design Direction

The interface should feel warm, approachable, fresh, and easy to use. Visual decisions should support menu discovery and ordering rather than compete with them.

## Principles

### 01 — Clear before decorative

Information hierarchy comes first. Decorative elements should reinforce the brand without reducing readability.

### 02 — Mobile-first interaction

Buttons, cards, navigation, filters, and cart controls must remain comfortable on small screens.

### 03 — Food-first imagery

Product imagery should make the menu immediately understandable and should use meaningful alternative text.

### 04 — Motion with purpose

Use Framer Motion for transitions, feedback, and spatial continuity. Avoid animation that delays or obstructs the ordering flow.

### 05 — Consistency

Reuse established spacing, typography, button behavior, cards, and interaction patterns.

## Component Rules

Reusable components should have a clear responsibility and predictable states:

- default
- hover
- focus
- active
- disabled
- loading, when applicable
- error, when applicable

## Responsive Behavior

Design from the smallest practical viewport upward. Layouts should gracefully adapt to tablet and desktop widths without relying on fixed dimensions that cause overflow.

## Accessibility

- Use semantic HTML.
- Provide visible keyboard focus states.
- Use descriptive `alt` text for meaningful images.
- Ensure interactive controls have accessible labels.
- Do not rely on color alone to communicate state.
- Respect reduced-motion preferences where animation is non-essential.

## Content Guidelines

Keep business copy conversational and concise. Never invent reviews, prices, operating hours, awards, or other business claims that have not been verified.

## Do / Don't

| Do | Don't |
|---|---|
| Reuse existing patterns | Create duplicate UI patterns |
| Prioritize menu clarity | Hide essential product information |
| Keep CTA obvious | Add competing primary CTAs everywhere |
| Use subtle purposeful motion | Animate every element |
| Preserve mobile usability | Design only for desktop |
