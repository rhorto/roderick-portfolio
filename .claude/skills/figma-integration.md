---
name: figma-integration
description: Guide for connecting Figma designs to code — extracting design tokens, converting frames to components, and maintaining design-code parity.
trigger: When the user mentions Figma, provides a Figma link, or wants to convert designs to code
---

# Figma Integration Skill

You help bridge the gap between Figma designs and production code. When working with Figma references:

## Design Token Extraction

When the user shares design details from Figma, extract and organize tokens:

### Colors
```css
:root {
  /* Extract exact color values from Figma */
  --color-primary: ;
  --color-secondary: ;
  --color-accent: ;
  --color-background: ;
  --color-surface: ;
  --color-text: ;
  --color-text-muted: ;
  --color-border: ;
  --color-error: ;
  --color-success: ;
}
```

### Typography
```css
:root {
  /* Map Figma text styles to CSS */
  --font-heading: ;
  --font-body: ;
  --font-mono: ;

  --text-xs: ;
  --text-sm: ;
  --text-base: ;
  --text-lg: ;
  --text-xl: ;
  --text-2xl: ;
  --text-3xl: ;
}
```

### Spacing
```css
:root {
  /* Map Figma auto-layout spacing to CSS */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 12px;
  --space-4: 16px;
  --space-6: 24px;
  --space-8: 32px;
  --space-12: 48px;
  --space-16: 64px;
}
```

### Effects
```css
:root {
  /* Map Figma effects to CSS */
  --shadow-sm: ;
  --shadow-md: ;
  --shadow-lg: ;
  --radius-sm: ;
  --radius-md: ;
  --radius-lg: ;
  --radius-full: 9999px;
}
```

## Design-to-Code Translation

When converting Figma frames to code:

1. **Identify the layout model**: Figma auto-layout → CSS Flexbox or Grid
   - Auto-layout vertical → flex-direction: column
   - Auto-layout horizontal → flex-direction: row
   - Auto-layout wrap → flex-wrap: wrap
   - Space between → justify-content: space-between
   - Packed → gap + alignment

2. **Map constraints to CSS**:
   - Fill container → width: 100% or flex: 1
   - Hug contents → width: fit-content
   - Fixed → explicit width/height
   - Min/max constraints → min-width, max-width

3. **Handle responsive behavior**:
   - Figma designs are typically at one breakpoint — ask which size it represents
   - Infer mobile/desktop behavior from component structure
   - Add appropriate breakpoints for layout changes

4. **Match visual fidelity**:
   - Exact padding and gap values from auto-layout
   - Border radius from Figma corner radius
   - Shadows from Figma drop shadow / inner shadow effects
   - Opacity and blend modes where used

## Figma MCP Server Setup

To enable direct Figma access, the user needs to set up the Figma MCP server:

### Option 1: Remote Server (Recommended)
Add to `.claude/settings.json`:
```json
{
  "mcpServers": {
    "figma": {
      "type": "url",
      "url": "https://mcp.figma.com/sse"
    }
  }
}
```

### Option 2: Local Server
```bash
npm install -g @anthropic-ai/figma-mcp-server
```
Add to `.claude/settings.json`:
```json
{
  "mcpServers": {
    "figma": {
      "command": "figma-mcp-server",
      "env": {
        "FIGMA_ACCESS_TOKEN": "your-figma-token"
      }
    }
  }
}
```

## Workflow Without MCP

If the user doesn't have the MCP server, they can still share:
- Screenshots of Figma frames (Claude can read images)
- Exported SVGs
- Copy-pasted CSS from Figma's inspect panel
- Design specs (colors, fonts, spacing values)

Guide them to share what they have and work from there.
