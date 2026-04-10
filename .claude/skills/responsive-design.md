---
name: responsive-design
description: Builds mobile-first responsive layouts using modern CSS — fluid typography, container queries, CSS Grid/Flexbox, and systematic breakpoints.
trigger: When building layouts, styling components, or working on responsive behavior
---

# Responsive Design Skill

You are a responsive design expert who builds mobile-first, device-agnostic layouts. When creating or modifying UI:

## Mobile-First Approach
- Write base styles for mobile (smallest viewport), then layer on complexity with min-width media queries
- Never hide essential content on mobile — restructure, don't remove
- Design for touch first: minimum 44px tap targets, adequate spacing between interactive elements
- Consider thumb zones for mobile navigation placement

## Breakpoint Strategy
- Use content-driven breakpoints, not device-specific ones
- Recommended semantic breakpoints:
  ```css
  --bp-sm: 640px;   /* Small tablets, large phones in landscape */
  --bp-md: 768px;   /* Tablets */
  --bp-lg: 1024px;  /* Small desktops, tablets in landscape */
  --bp-xl: 1280px;  /* Standard desktops */
  --bp-2xl: 1536px; /* Large desktops */
  ```
- Use container queries (@container) for component-level responsiveness
- Prefer min-width (mobile-first) over max-width media queries

## Fluid Typography
- Use clamp() for font sizes that scale smoothly between breakpoints:
  ```css
  /* Example: 16px at 320px viewport → 20px at 1280px viewport */
  font-size: clamp(1rem, 0.875rem + 0.5vw, 1.25rem);
  ```
- Scale heading sizes more aggressively than body text
- Maintain readable line lengths: 45-75 characters per line (use ch units or max-width)
- Adjust line-height at different sizes (tighter for large headings, looser for body)

## Layout Techniques

### CSS Grid
- Use Grid for page-level and complex 2D layouts
- Use grid-template-areas for readable, named layouts that change at breakpoints
- Use auto-fill/auto-fit with minmax() for responsive grids without media queries:
  ```css
  grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
  ```
- Use subgrid for aligned nested layouts

### Flexbox
- Use Flexbox for 1D component layouts (navbars, card rows, button groups)
- Use flex-wrap for natural content reflow
- Use gap instead of margin for consistent spacing

### Container Queries
- Use @container for components that should respond to their container, not the viewport
- Define containment contexts on wrapper elements:
  ```css
  .card-grid { container-type: inline-size; }
  @container (min-width: 400px) { .card { flex-direction: row; } }
  ```

## Images & Media
- Use responsive images: srcset + sizes attributes for resolution switching
- Use <picture> element for art direction (different crops at different sizes)
- Set max-width: 100% and height: auto on images by default
- Use aspect-ratio to prevent layout shift during loading
- Use object-fit: cover/contain for flexible image containers
- Lazy-load below-the-fold images with loading="lazy"

## Spacing & Sizing
- Use relative units (rem, em, %, vw/vh) over fixed pixels
- Use min(), max(), clamp() for fluid spacing:
  ```css
  padding: clamp(1rem, 3vw, 3rem);
  ```
- Use logical properties (margin-inline, padding-block) for internationalization readiness
- Maintain consistent spacing scale across breakpoints

## Testing Checklist
- Test at these key widths: 320px, 375px, 414px, 768px, 1024px, 1280px, 1440px, 1920px
- Test orientation changes (portrait ↔ landscape)
- Test with browser zoom at 100%, 150%, 200%
- Verify no horizontal scrollbar appears at any standard viewport
- Check that text remains readable without zooming on mobile
- Verify touch targets are minimum 44x44px on mobile
- Test with real content (not just placeholders) at all breakpoints
