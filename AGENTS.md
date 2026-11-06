# roderick-portfolio — design & code contract

Personal portfolio for Roderick Horton (AI Product Designer). Vite + React 19 + TypeScript (strict) + Tailwind 4 + framer-motion. Deployed on Vercel.

## Verify your work

- After visual changes, open the site in the browser and screenshot before claiming done.
- `npm run lint` and `npm run build` must pass before finishing any task.

## Delegation

- Use the `scout` subagent for codebase searches, file reads, and asset audits. It runs on a free model, so keep errands off the paid session model.
- `explore` also runs on a free model and may be used for deeper searching; `general` runs on free DeepSeek for multi-step research.
- For major visual or UX direction decisions (hero redesign, typography scale, layout system changes), delegate to the `designer` subagent for direction, then implement the details yourself on the session model.
- Do not bill the paid session model for routine searching or research errands.

## Design system

- Background `#050505`. Type comes from `@theme` tokens in `src/index.css` (`text-display`, `text-h1`, `text-h2`, `text-h3`, `text-metric`, `text-quote`, `text-lead`, `text-label`). Use the tokens, not ad-hoc sizes.
- Two fonts only: Plus Jakarta Sans (`font-heading`) for display/headings at weight 600; Inter (`font-sans`) for everything else. Never add fonts.
- Hierarchy comes from size and tone, not gradients. Two-tone headlines: line 1 `zinc-50`, line 2 `zinc-500`. **At most one `.text-gradient` span per page.**
- Colour: `zinc-50`/`zinc-100` headings, `zinc-300` lead, `zinc-400` body/meta. **Never `zinc-500`/`zinc-600` for text under 18px** (fails AA on `#050505`). Nothing below 12px.
- Indigo means "decision or active state" only: primary CTA, chosen option, current nav item, focus rings, one static hero glow. Primary button is `bg-indigo-400 text-zinc-950`.
- Layout: wide frame `mx-auto max-w-6xl px-6 lg:px-10` on a 12-column grid. Use the `Rail` component for the label-left / content-right section pattern. Body text never wider than `max-w-[65ch]`. Resume keeps `max-w-5xl`.
- Section rhythm varies on purpose; don't use one padding value everywhere. Separate sections with one hairline `border-t border-white/[0.06]`.
- Cards (`rounded-xl border border-zinc-800/80 bg-zinc-950/50`) are for interactive things only. Lists of work and experience are rows with rules, not tile grids.
- Borders are hairline whites: `border-white/[0.04]`–`[0.06]`.
- Career history lives in `src/data/experience.ts`; case studies in `src/data/projects.ts`. Never hardcode numbers or dates in components.

## Motion

- framer-motion only. Durations 0.3–0.5s, ease `[0.25, 0.1, 0.25, 1]`.
- `App` wraps everything in `<MotionConfig reducedMotion="user">`; `ScrollReveal` also checks `useReducedMotion()` and renders a plain `div`. Every animation must respect `prefers-reduced-motion`.
- Reveal-on-scroll goes through `ScrollReveal` (`once: true`, `y: 16`, no `blur`). Don't hand-roll new reveal logic.
- No infinite animations (no marquees, no pulsing dots, no bouncing arrows). No cursor-follow glow.
- No new animation libraries (no GSAP, no Lenis, no Spline) — they're unused deps being cleaned up.

## Accessibility

- Icon-only buttons need `aria-label`; disclosure buttons need `aria-expanded`.
- Text contrast ≥ 4.5:1 (3:1 for large text). Avoid `zinc-500`/`zinc-600` for text under 18px on the dark background.
- Interactive elements need a visible `focus-visible` ring: `focus-visible:outline-2 outline-offset-2 outline-indigo-400`.
- No auto-rotating content.

## Images

- Below-the-fold images: `loading="lazy"` + explicit `width`/`height`.
- Prefer WebP for new assets; keep files under ~300 KB.
- Every image needs meaningful `alt` text. Case-study data lives in `src/data/projects.ts` — reference images from there, never hardcode paths in components.

## House rules

- Do not add dependencies without asking. The package.json already carries unused deps being cleaned up.
- Content edits (case-study numbers, claims) must match existing data — never invent metrics.
- Keep components small and colocated styles in Tailwind classes; no CSS files beyond `src/index.css`.
- One-off scripts belong in `scripts/`, not the repo root.
