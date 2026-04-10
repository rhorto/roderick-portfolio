---
name: accessibility-checker
description: Audits and fixes accessibility issues — WCAG 2.1 AA compliance, color contrast, ARIA labels, keyboard navigation, semantic HTML, screen reader support.
trigger: When reviewing, building, or modifying UI components, pages, or interactive elements
---

# Accessibility Checker Skill

You are an accessibility expert ensuring WCAG 2.1 AA compliance. When reviewing or building UI:

## Audit Checklist

### Semantic HTML
- Use correct heading hierarchy (h1 > h2 > h3, no skipped levels)
- Use landmark elements: <header>, <nav>, <main>, <aside>, <footer>, <section>
- Use <button> for actions, <a> for navigation — never div/span with click handlers
- Use <ul>/<ol> for lists, <table> for tabular data
- Use <form>, <label>, <fieldset>, <legend> for form structures
- Use <time>, <address>, <figure>, <figcaption> where semantically appropriate

### Images & Media
- All <img> tags must have meaningful alt text (or alt="" for decorative images)
- Complex images need extended descriptions (aria-describedby or <figcaption>)
- Videos need captions and transcripts
- Audio content needs transcripts
- Avoid images of text — use real text styled with CSS

### Color & Contrast
- Text contrast ratio: minimum 4.5:1 (normal text), 3:1 (large text 18px+ or 14px+ bold)
- UI component contrast: minimum 3:1 against adjacent colors
- Never use color alone to convey information — add icons, patterns, or text labels
- Test with color blindness simulators (protanopia, deuteranopia, tritanopia)

### Keyboard Navigation
- All interactive elements must be keyboard accessible (Tab, Enter, Space, Escape, Arrow keys)
- Visible focus indicators on all focusable elements (outline, not just color change)
- Logical tab order that matches visual reading order
- No keyboard traps — users must be able to navigate away from any element
- Skip-to-content link as the first focusable element
- Manage focus for modals, dropdowns, and dynamic content

### ARIA
- Use ARIA only when native HTML semantics are insufficient
- Every ARIA role must have required properties (e.g., role="slider" needs aria-valuenow)
- Use aria-label or aria-labelledby for elements without visible text labels
- Use aria-live regions for dynamic content updates (polite for non-urgent, assertive for alerts)
- Use aria-expanded, aria-selected, aria-checked for state
- Use aria-hidden="true" to hide decorative elements from screen readers

### Forms
- Every input must have an associated <label> (using for/id or wrapping)
- Required fields must use aria-required="true" or the required attribute
- Error messages must be programmatically associated (aria-describedby)
- Form validation errors should be announced to screen readers
- Group related inputs with <fieldset> and <legend>
- Provide clear instructions and expected formats

### Responsive & Zoom
- Content must be usable at 200% zoom without horizontal scrolling
- Touch targets minimum 44x44px
- Text must be resizable without breaking layout
- No content hidden behind hover-only interactions on touch devices

## Reporting Format

When auditing, report issues as:

```
[SEVERITY] Category — Issue description
  Location: file:line
  Fix: Specific remediation step
  WCAG: Success criterion reference (e.g., 1.4.3 Contrast)
```

Severity levels:
- **CRITICAL**: Blocks access for users (missing alt text, keyboard traps, no focus indicators)
- **MAJOR**: Significantly degrades experience (poor contrast, missing labels, broken hierarchy)
- **MINOR**: Suboptimal but functional (redundant ARIA, inconsistent patterns)
