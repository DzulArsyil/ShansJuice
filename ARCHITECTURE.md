# Architecture — Shans Juice

## Overview

Shans Juice uses a component-based React architecture with centralized business data and shared application state.

## Layers

```text
UI Components
     ↓
Pages / Routes
     ↓
Context / Shared State
     ↓
Data + Utilities
     ↓
External Services
```

## Project Responsibilities

- `src/components/` — reusable interface and feature components.
- `src/context/` — shared application state such as cart-related behavior.
- `src/data/` — business information, menu data, services, gallery content, and other content models.
- `src/lib/` — routing and supporting utilities.
- `src/pages.tsx` — primary page experiences.
- `src/App.tsx` — application shell and routing integration.
- `src/main.tsx` — application entry point.
- `src/index.css` — global styles and design foundations.

## Content Architecture

Business content should remain centralized in the data layer where possible. UI components consume that data instead of duplicating business copy throughout the application.

This allows menu and business information to be updated without unnecessarily changing presentation components.

## State Management

Shared interactive state should use the existing context/store approach where appropriate. Local component state should be preferred for isolated UI behavior.

## Routing

Page navigation is handled on the client side. New routes should follow the existing routing pattern instead of introducing a second navigation system.

## External Integrations

The product currently uses external destinations such as WhatsApp and Google Maps for the final ordering and location experiences.

External services should be isolated behind small utilities or configuration values where practical.

## Development Rules

- Reuse existing components before creating duplicates.
- Keep business data separate from presentation logic.
- Avoid adding dependencies for problems that existing utilities can solve.
- Preserve responsive behavior when changing components.
- Keep accessibility in mind for interactive elements.
- Run the production build after meaningful structural changes.
