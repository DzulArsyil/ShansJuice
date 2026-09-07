# Development Workflow — Shans Juice

## 01. Understand

Read the relevant product, architecture, design, and content documentation before making changes.

## 02. Inspect

Search the existing codebase for reusable components, state, utilities, and patterns before creating new ones.

## 03. Plan

Define the smallest implementation that satisfies the requirement. Consider responsive behavior, accessibility, and existing visual patterns.

## 04. Implement

Make focused changes. Keep business data separate from UI logic and reuse existing components where practical.

## 05. Validate

Run type checking and a production build after meaningful changes.

```bash
npm run typecheck
npm run build
```

## 06. Review

Check:

- desktop layout;
- mobile layout;
- keyboard interaction;
- focus states;
- image loading and alt text;
- links and ordering flow;
- console/runtime errors.

## 07. Document

Update the relevant `.md` file when the product, architecture, design system, or development process changes.

## 08. Ship

Commit changes with a concise message describing the actual change. Keep unrelated work out of the same commit when possible.
