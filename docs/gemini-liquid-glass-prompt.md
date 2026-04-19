# Prompt for Gemini: Liquid-Glass Hover Lens for Tool Icons

Copy everything below the `---` into Gemini. The prompt is self-contained.

---

## Task

You are working inside a React + Vite + Tailwind landing page for an English teacher (`englishwithauris.com`). I want you to build an **Apple Liquid Glass–style magnifying-lens hover effect** on the tool icons in the "Leveraging Tech" card, similar to the glass refraction Apple introduced in iOS 26 / macOS Tahoe.

Think: when my cursor approaches an icon (Google Docs, Google Meet, Claude, Flashcards), a circular "glass lens" follows the pointer and visibly refracts / magnifies / chromatically bends what's underneath — icon + particle background. The icon should also lift and scale slightly. Playful, tactile, high-tech.

## Repo context

- **Repo:** `/Users/aurisp/repos/teacher-website`
- **Stack:** React 18, Vite 4, Tailwind CSS 3, plain JSX (no TypeScript), `lucide-react` for icons
- **Target file:** `src/components/ToolsSection.jsx` — the "Leveraging Tech" card at the bottom of the section is where the effect lives
- **Existing behaviour:** the card already has a WebGL particle background (`src/components/ParticleBackground.jsx`, Three.js), a glassy `backdrop-blur-md bg-white/55` text block, and a 4-column grid of tool icons below

## The icons (from `src/components/ToolsSection.jsx`)

```jsx
const TOOLS = [
  { type: 'lucide', Icon: Layers, name: 'Flashcards' },     // rendered in a rounded primary-100 bg tile
  { type: 'image', icon: claudeIcon, name: 'Claude' },
  { type: 'image', icon: meetsIcon, name: 'Google Meet' },
  { type: 'image', icon: docsIcon, name: 'Google Docs' },
];
```

Images render at `w-28 h-28 object-contain`. Google Docs has a pre-existing `scale-[1.75]` transform. The grid layout is `grid-cols-2 md:grid-cols-4 gap-12`.

## What "Liquid Glass" means here

Apple's Liquid Glass is a translucent material that **refracts and reflects** what's behind it, with **light bending at curved edges**, **localized distortion**, and **specular highlights** that respond to context. See Wikipedia and the Apple newsroom post for the spec.

The web implementation pattern (well-documented in 2025 blog posts):

1. **SVG `<filter>`** with `<feImage>` → `<feDisplacementMap>` → `<feBlend>` primitives.
2. A **pre-computed displacement map** encoded as an RGBA image where the **red channel = X displacement** and **green channel = Y displacement**. Formula: `r = 128 + normalizedX * 127`, `g = 128 + normalizedY * 127`.
3. Displacement magnitudes are derived from **Snell's law** along a single radius (127 samples), then rotated around centre. Apple's preferred surface is a "convex squircle": `y = ⁴√(1 − (1−x)⁴)` — softer edge than a pure sphere.
4. The filter is applied via `backdrop-filter: url(#filterId)` on the lens div, so it refracts whatever sits *behind* the lens (the icon + particle canvas).
5. A **subtle specular highlight** (a radial gradient overlay with `mix-blend-mode: overlay` or a separate `<feBlend>`) sells the glassiness.
6. Chromatic aberration (optional but nice): run the displacement twice at slightly different scales for R and B channels using `<feColorMatrix>` to split channels.

### Reference articles — READ THESE BEFORE CODING

- [kube.io — Liquid Glass in the Browser](https://kube.io/blog/liquid-glass-css-svg/) — the most technical. Has the full SVG filter structure, the surface-function math, and explains why squircle is preferred. Use this as your primary reference.
- [LogRocket — How to create Liquid Glass effects with CSS and SVG](https://blog.logrocket.com/how-create-liquid-glass-effects-css-and-svg/)
- [cssscript.com — Draggable Liquid Glass Effect with JS and SVG Filters](https://www.cssscript.com/draggable-liquid-glass/)
- [Wikipedia — Liquid Glass](https://en.wikipedia.org/wiki/Liquid_Glass)
- [Apple Newsroom — Liquid Glass announcement (June 2025)](https://www.apple.com/newsroom/2025/06/apple-introduces-a-delightful-and-elegant-new-software-design/)

## Desired behaviour

1. **Hover tracking:** cursor enters the tool grid → a circular lens (~140–180px diameter) smoothly follows the pointer with `lerp` easing (~0.15).
2. **Refraction:** content behind the lens visibly bends outward at the edges (squircle profile) — Google Docs / Meets logos should look like they're being read through real glass, with a clear magnification toward the centre.
3. **Magnification:** inside the lens, icons appear ~1.15× larger (achieved via the displacement map's inner zoom component, not a separate CSS transform).
4. **Specular highlight:** a soft top-left highlight arc and a bottom-right shadow suggest a light source.
5. **Hover affordance on the icon the lens is centred on:** that icon gets `scale(1.08)` + `translateY(-4px)` + a cyan/indigo glow that matches the `ParticleBackground` palette (`#22D3EE`, `#6366F1`, `#A855F7`).
6. **Graceful fade:** lens fades in over ~200ms on enter, fades out on leave, and scales up briefly when a new icon comes under it (iOS-style "snap-to" feel).
7. **Works on the four icons,** which are rendered as a mix of an SVG lucide icon in a tinted tile, three `<img>` tags, and one `<img>` with a 1.75× transform. The lens must refract all of them correctly.

## Constraints

- **No new heavyweight dependencies.** You can use raw SVG filters + a tiny hand-written JS module. Three.js is already in the bundle for the particle background — if a WebGL approach is meaningfully better, you can reuse it, but prefer SVG for simplicity.
- **Must not break the particle background** (`ParticleBackground.jsx`). That component attaches pointer listeners to its parent. Your lens listeners must coexist — check for event conflicts.
- **Keep it pointer-driven, desktop-first.** On touch/mobile, skip the lens entirely — fall back to the existing simple hover-scale on the tool image.
- **Respect `prefers-reduced-motion`:** disable the lens and all transforms for users who have this set.
- **Accessibility:** the lens is decorative, `aria-hidden="true"`, `pointer-events: none`.

## Deliverables

1. **New component:** `src/components/LiquidGlassLens.jsx` — a self-contained React component exposing the lens. Props: `{ targetRef, colors, lensRadius }`.
2. **One new SVG filter asset** inline in the component (the displacement map generated once via `<canvas>` → data URL on mount, cached).
3. **Edit `src/components/ToolsSection.jsx`** to wrap the tool grid with a ref'd container and mount `<LiquidGlassLens targetRef={gridRef} colors={['#22D3EE', '#6366F1', '#A855F7']} />`.
4. **Per-icon hover accent:** when the lens is within ~60% of an icon's centre, that icon lifts + glows. Use `requestAnimationFrame` and compare distances; don't use `:hover` CSS (the lens canvas blocks pointer events).

## Acceptance checks

- `npm run build` passes with no new warnings.
- `npm run dev` renders correctly in Chrome. Hovering inside the grid shows a smooth glass lens. All four icons refract visibly (Google Docs distorts at edges, text-like letters bend convincingly).
- No console errors, no broken particles, no layout shift.
- Reduced-motion setting disables the effect.
- Code is commented only where non-obvious (the shader math, the squircle function). No README or docs file needed.

## What NOT to do

- Don't add a README, CHANGELOG, or any markdown file documenting the component.
- Don't refactor `ParticleBackground.jsx` unless absolutely necessary to share pointer events.
- Don't install new npm packages without asking.
- Don't use TypeScript — the project is plain JSX.
- Don't introduce Framer Motion or GSAP. Plain `requestAnimationFrame` + CSS `transform` is enough.
- Don't comment out or delete the particle background.

## Starting points

If you want a reference skeleton before reading the blog posts: a working draggable liquid-glass implementation lives at cssscript.com's draggable-liquid-glass article — mirror its SVG filter structure, then adapt it to a cursor-following lens rather than a dragged element.

Good luck. Show me the finished files (`LiquidGlassLens.jsx` + the edited `ToolsSection.jsx`) and confirm the build passes.
