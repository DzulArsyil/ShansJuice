# AGENTS.md — Shans Juice

## Purpose

Instructions for AI coding agents working in this repository.

## Before Editing

1. Inspect the existing implementation.
2. Read `PRD.md` for product intent.
3. Read `ARCHITECTURE.md` for structural constraints.
4. Read `DESIGN-SYSTEM.md` before changing UI.
5. Read `CONTENT-GUIDE.md` before changing business or menu data.
6. Keep the requested change scoped and avoid unrelated rewrites.

## Implementation Rules

- Prefer existing components and utilities.
- Preserve the React + TypeScript architecture.
- Keep business content in the data layer.
- Do not introduce duplicate state-management patterns without a clear reason.
- Do not add dependencies unless they provide meaningful value.
- Preserve responsive behavior.
- Maintain accessible labels, focus states, and semantic markup.
- Keep animations purposeful and performant.

## Data Safety

Never invent business facts such as prices, operating hours, customer reviews, awards, contact details, or service claims.

Do not commit secrets, API keys, or private credentials.

## Validation

After meaningful changes, run the relevant checks available in `package.json`, preferably:

```bash
npm run typecheck
npm run build
```

## Completion

Before finishing:

- review the changed files;
- check for broken imports or links;
- verify mobile and desktop behavior when UI was changed;
- update documentation when behavior or architecture changes;
- update `CHANGELOG.md` when a meaningful release-level change is made.
