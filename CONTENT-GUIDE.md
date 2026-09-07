# Content Guide — Shans Juice

## Purpose

This document defines how business and menu content should be maintained so the website stays accurate while the UI remains unchanged.

## Source of Truth

Business and product content should be maintained in the centralized data layer rather than copied into multiple components.

## Content Status

Use the existing content-status conventions:

- **Verified** — information confirmed by the business or a trusted source.
- **Placeholder** — information that must be replaced before being presented as real business data.
- **Sample** — demonstration content used to evaluate the interface and not a claim about the real menu.

## Menu Updates

When adding a product, provide:

- unique `id`;
- product name;
- concise description;
- price;
- category;
- image URL/path;
- meaningful `imageAlt`;
- optional badge;
- optional spice level;
- correct `sample` status.

Example:

```ts
{
  id: "example-product",
  name: "Example Product",
  description: "Short and accurate description.",
  price: 15000,
  category: "makanan",
  image: "/images/example.jpg",
  imageAlt: "Example product served on a plate",
  sample: false,
}
```

## Business Information

Do not publish placeholders as real information. Before production, replace values such as:

- WhatsApp number
- email
- social media accounts
- operating hours
- unverified photos
- sample menu items

## Writing Style

- Use clear Indonesian.
- Keep descriptions short and useful.
- Avoid exaggerated claims unless they can be substantiated.
- Prefer concrete product benefits over generic marketing language.
- Keep CTA copy direct and friendly.

## Images

Use descriptive alternative text. Avoid treating generated or temporary images as authentic business photography.

## Verification Checklist

Before publishing a content change:

- [ ] Product name is correct.
- [ ] Price is confirmed.
- [ ] Category is correct.
- [ ] Image represents the intended product.
- [ ] `imageAlt` is descriptive.
- [ ] Placeholder values are removed or clearly marked.
- [ ] Sample data is not presented as verified business data.
