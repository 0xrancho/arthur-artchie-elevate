# Arthur & Archie v2 — Style Guide

## Design Philosophy

**"Methodical Impressionism"** — Analytical rigor meets creative vision.

The v2 site retains A&A's core visual identity but sharpens it for the Growth Intelligence positioning. The design should feel like an engineering firm that understands aesthetics — precise, warm, and confident. Not a SaaS landing page. Not a consulting brochure. A growth partner's front door.

---

## Color System

All colors defined in HSL for consistency with Tailwind/CSS variables.

### Primary Palette

| Token | HSL | Hex | Role |
|-------|-----|-----|------|
| `--navy` | `210 52% 23%` | `#1C3654` | Primary brand, hero backgrounds, headers, text on light |
| `--terracotta` | `12 59% 60%` | `#C97B5D` | CTAs, accents, warmth, interactive elements |
| `--cream` | `40 40% 97%` | `#FAF9F7` | Light backgrounds, text on dark, breathing space |

### Secondary Palette

| Token | HSL | Hex | Role |
|-------|-----|-----|------|
| `--slate` | `210 15% 47%` | `#667085` | Body text, secondary elements, muted content |
| `--forest` | `156 15% 29%` | `#3F544A` | Success states, subtle accents |
| `--gold` | `43 39% 56%` | `#B9A065` | Highlights, premium indicators, heritage elements |

### Semantic Mapping

```css
--background: var(--cream);
--foreground: var(--navy);
--primary: var(--navy);
--primary-foreground: var(--cream);
--secondary: var(--terracotta);
--secondary-foreground: var(--cream);
--muted: var(--cream);
--muted-foreground: var(--slate);
--accent: var(--terracotta);
--accent-foreground: var(--cream);
--border: 210 15% 91%;
--ring: var(--navy);
--radius: 0.5rem;
```

### Gradients

- **Hero gradient:** Navy to deep navy (`hsl(210 52% 23%)` to `hsl(210 52% 15%)`)
- **CTA glow:** Terracotta with opacity (`hsl(12 59% 60% / 0.4)`)
- **Warm fade:** Navy to terracotta (used sparingly for section transitions)

---

## Typography

### Font Stack

| Purpose | Font | Weights | Usage |
|---------|------|---------|-------|
| **Headlines** | Crimson Pro | 600, 700 | H1-H4, hero text, section headlines |
| **Body** | Inter | 400, 500 | Paragraphs, UI text, navigation |
| **Data/Technical** | IBM Plex Mono | 400 | Numbers, metrics, technical callouts, scrolling deliverables |

### Type Scale

```
Hero H1:     48-64px / Crimson Pro 700 / tight tracking
Section H2:  32-40px / Crimson Pro 600
Subsection:  24-28px / Crimson Pro 600
Body Large:  18-20px / Inter 400 / 1.6 line height
Body:        16px    / Inter 400 / 1.6 line height
Small:       14px    / Inter 400
Caption:     12px    / Inter 500 / uppercase tracking optional
Data:        14-24px / IBM Plex Mono 400
```

### Type Rules

- Headlines: Navy on cream, cream on navy. Never slate.
- Body: Slate for secondary text. Navy for primary body on cream backgrounds.
- CTAs: Cream text on terracotta backgrounds.
- Scrolling deliverables: IBM Plex Mono — reinforces the "engineered" positioning.
- Maximum line width: 680px for body copy.

---

## Spacing & Layout

### Grid

- **Base unit:** 8px
- **Section padding:** 80-120px vertical, responsive down to 48px on mobile
- **Content max-width:** 1200px
- **Body copy max-width:** 680px (centered within content area)
- **Component spacing:** 24-48px between elements within sections

### Breakpoints

```
Mobile:  < 640px
Tablet:  640px - 1024px
Desktop: > 1024px
```

---

## Elevation & Shadows

```css
--shadow-subtle: 0 2px 8px rgba(27, 58, 95, 0.05);
--shadow-soft: 0 2px 8px rgba(27, 58, 95, 0.08);
--shadow-medium: 0 8px 16px rgba(212, 116, 94, 0.4);   /* terracotta glow */
--shadow-heavy: 0 8px 32px rgba(0, 0, 0, 0.3);
```

- Cards: `--shadow-subtle` at rest, `--shadow-soft` on hover
- CTAs: `--shadow-medium` (terracotta glow) for primary buttons
- Modals/overlays: `--shadow-heavy`

---

## Interactive Elements

### Buttons

**Primary (CTA):**
- Background: Terracotta
- Text: Cream
- Shadow: Terracotta glow
- Hover: Slight scale (1.02) + increased glow
- Border-radius: `--radius` (0.5rem)

**Secondary:**
- Background: Transparent
- Border: 1px Navy
- Text: Navy
- Hover: Navy fill, cream text

**Ghost:**
- No border, no background
- Text: Slate
- Hover: Text shifts to Navy

### Links

- Default: Terracotta, no underline
- Hover: Underline appears
- Visited: Same as default (no purple)

---

## Motion & Animation

### Principles

- Motion should feel **deliberate, not decorative**
- Entrance animations: fade + subtle translateY (not translateX — v1 used X, v2 uses Y for vertical flow)
- Duration: 300-500ms for entrances, 200ms for micro-interactions
- Easing: `cubic-bezier(0.4, 0, 0.2, 1)` (ease-out feel)

### Specific Animations

```css
--transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
--transition-fast: all 0.2s cubic-bezier(0.4, 0, 0.2, 1);
```

- **Section reveals:** Fade in + translateY(20px) on scroll into view
- **Scrolling deliverables:** Continuous horizontal scroll (CSS animation or marquee), IBM Plex Mono
- **CTA fire particles:** Retained from v1 — terracotta particles rising from button base
- **Heritage timeline:** Sequential fade-in on scroll

### Fire Particle System (from v1)

Three speed tiers retained:
- `fire-slow`: 2.5s ease-out infinite — large particles, slow rise
- `fire-medium`: 1.8s ease-out infinite — mid particles
- `fire-fast`: 1.2s ease-out infinite — small particles, quick rise

---

## Visual Elements

### Backgrounds

- **Hero:** Deep navy, optional subtle geometric grid (40px)
- **Content sections:** Alternating cream and white
- **Feature sections:** Navy background with cream text (for contrast/emphasis)
- **CTA sections:** Navy with terracotta accents

### Decorative

- **Geometric grids:** Subtle 40px grid overlay on dark sections (low opacity: 0.03-0.05)
- **Warm gradients:** Used at section transitions, never as primary backgrounds
- **No rotating arcs in v2** — SEA framework arcs are retired with the SEA positioning

### Iconography

- Line-style icons preferred
- Stroke width: 1.5-2px
- Color: Navy on light, cream on dark
- Size: 24px default, 32px for feature callouts

---

## Component Patterns

### Section Structure

```
[Section]
  [Container max-w-1200px mx-auto]
    [Headline — Crimson Pro, navy/cream]
    [Body — Inter, slate/cream, max-w-680px]
    [Content — cards, columns, scrolling elements]
  [/Container]
[/Section]
```

### Cards

- Background: White on cream sections, slight navy on navy sections
- Border: 1px `--border` color
- Border-radius: `--radius`
- Padding: 24-32px
- Shadow: `--shadow-subtle`, elevates to `--shadow-soft` on hover

### Three-Column Layout (Outcomes, Comparison)

- Equal-width columns on desktop
- Stack vertically on mobile
- 24px gap between columns
- Each column is a card with headline + body

### Scrolling Deliverables

- Horizontal continuous scroll (no pause unless hovered)
- Items separated by ` / ` or ` · ` in IBM Plex Mono
- Terracotta text on cream background, or cream text on navy
- Slight fade masks on left/right edges

---

## Photography & Imagery

- Professional but not sterile
- Warm lighting, real environments
- Avoid stock photo cliches (handshakes, sticky notes, generic office)
- If illustrations are used: geometric, minimal, brand colors only

---

## Logo

### Files

| Asset | File | Usage |
|-------|------|-------|
| Primary logo | `AAlogo42.png` | Light backgrounds |
| Alt logo | `Gemini_AAlogo2.png` | Alternate contexts |
| Header logo | `logo-header.png` | Navigation bar |
| Header (transparent) | `logo-header-transparent.png` | Over dark backgrounds |
| Full wordmark | `logo-arthur-archie.png` | Full brand contexts |

### Usage Rules

- Minimum height: 32px digital
- Clear space: Height of the "A" on all sides
- Never stretch, distort, add effects, or recolor outside palette
- On dark backgrounds: Use transparent variant or cream-on-navy lockup

---

## Brand Voice (for copy styling)

| Attribute | How it shows in design |
|-----------|----------------------|
| **Authoritative** | Crimson Pro headlines, navy weight, generous whitespace |
| **Analytical** | IBM Plex Mono for data/metrics, geometric grids |
| **Warm** | Terracotta accents, cream backgrounds, rounded corners |
| **Confident** | Bold headlines, clear hierarchy, no visual clutter |
| **Direct** | Short paragraphs, clear CTAs, no decorative noise |

---

## Anti-Patterns (Do Not)

- Do not use more than 2 colors in a single section (navy + terracotta OR navy + cream)
- Do not center-align body copy longer than 2 lines
- Do not use stock photography with watermarks or generic feel
- Do not stack more than 3 CTAs on screen simultaneously
- Do not use gradient text
- Do not animate anything on loop except the scrolling deliverables and fire particles
- Do not use the SEA rotating arcs — that visual language is retired in v2
