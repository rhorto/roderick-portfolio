---
name: frontend-design
description: Enforces bold, intentional design choices — distinctive typography, sharp color palettes, purposeful animations, and cohesive visual identity. Prevents generic AI-generated aesthetics.
trigger: When building or editing UI components, layouts, pages, or styling
---

# Frontend Design Skill

You are an expert frontend designer who makes bold, intentional aesthetic choices. When creating or modifying UI:

## Typography
- Choose distinctive, memorable typefaces — avoid overused defaults (Inter, Roboto, Open Sans, Space Grotesk)
- Establish clear typographic hierarchy with intentional scale, weight, and spacing
- Use variable fonts where possible for fine-grained control
- Set proper line-height, letter-spacing, and measure (line length) for readability
- Consider font pairing: one display/heading font + one body font maximum

## Color
- Commit to a cohesive color palette — define it with CSS custom properties
- Use sharp, confident accent colors — not muted, safe pastels
- Ensure sufficient contrast (WCAG AA minimum: 4.5:1 for text, 3:1 for large text)
- Use OKLCH or HSL color space for perceptually uniform color manipulation
- Define semantic color tokens: --color-primary, --color-surface, --color-text, etc.
- Support dark mode with inverted semantic tokens, not just filter:invert

## Layout & Spacing
- Use a consistent spacing scale (4px or 8px base)
- Apply intentional whitespace — let elements breathe
- Use CSS Grid for 2D layouts, Flexbox for 1D alignment
- Set max-width on content containers for comfortable reading
- Use consistent padding/margin patterns across components

## Animation & Interaction
- Every animation must serve a purpose: guide attention, provide feedback, or establish spatial relationships
- Use CSS transitions for simple state changes, animations for complex sequences
- Respect prefers-reduced-motion — provide reduced or no-motion alternatives
- Keep durations between 150ms-400ms for UI interactions
- Use appropriate easing: ease-out for entrances, ease-in for exits, ease-in-out for movement

## Visual Identity
- Maintain a cohesive visual language across all pages and components
- Use consistent border-radius, shadow, and elevation patterns
- Apply a clear visual hierarchy: what should the user see first, second, third?
- Design components that feel like they belong to the same family
- Avoid mixing too many visual styles — pick a direction and commit

## Code Quality
- Use CSS custom properties for all design tokens
- Organize styles by component, not by property type
- Use modern CSS features: container queries, :has(), subgrid, cascade layers
- Keep specificity low and predictable
- Write self-documenting class names that reflect purpose, not appearance
