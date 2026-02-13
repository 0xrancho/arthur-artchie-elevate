# AgenticForms.io — Design Progress
**Date:** 2026-02-12

---

## Current State

**Selected Direction:** Variation 3 — "Warm Coral"
**Latest File:** `superdesign/design_iterations/agenticforms_v2_3_2.html`

---

## What's Done & Approved

- **Colors:** Darker coral accent (#D44030), darker gray bg (#F0EFEC) — APPROVED
- **Nav wordmark:** `agenticforms.io` with coral dot, gray .io — APPROVED
- **Grid backgrounds:** Subtle 48px gray grid on hero, bottom CTA, footer — APPROVED
- **Typography:** Inter (400-700) + Fira Code for technical accents, no serifs — APPROVED
- **Layout:** Clean grid, UI-component cards, process flow diagram — APPROVED
- **Full copy:** All 7 sections implemented with exact copy from brief — DONE

---

## What Needs Work

### 1. Hero Animation (HIGH PRIORITY)
**Current state:** Animation canvas was placed in outcome cards (wrong location). Should be in the HERO section.

**User direction:**
- Move animation to HERO background
- Should look like: record list icons generating, lines, dropdown relationships, lists from dropdowns
- Super simple, minimal, lighter grey
- Reference: firecrawl.dev hero (blueprint/schematic feel with subtle animated elements)
- NOT what was built (random rects/dots) — needs to feel like actual form/data schema generation

**Firecrawl reference (from earlier analysis):**
- Thin grey grid lines creating blueprint/graph-paper feel
- SVG rounded-corner treatments at grid intersections
- ASCII art patterns at low opacity (dots, colons, dashes)
- Floating bracket labels `[ 200 OK ]` `[ .JSON ]` at grid edges
- WebGL canvas with subtle dot grid and flowing data particles
- Below CTA: animated scraping demo (wireframe → JSON transformation)
- Overall feel: calm, precise, technical workspace where data quietly flows

**What user wants for agenticforms (adapted from firecrawl concept):**
- Subtle animations of form-like data schemas being generated
- Record list icons (table/list view shapes)
- Lines connecting elements
- Dropdown relationships (select/dropdown expanding)
- Lists cascading from dropdowns
- All very simple, light grey, spontaneous ASCII-like (no words, just lines/squares/dots)
- Should suggest "intelligent form generation" not "random geometric noise"

### 2. Remove Card Animations
- Remove canvas elements from outcome cards
- Cards should stay clean with just content

---

## All Design Files Created

### Round 1 (REJECTED — luxury/concierge feel, wrong direction)
- `agenticforms_io___bo_1.html` — "The Editorial" (Instrument Serif, gold, magazine layout)
- `agenticforms_io___bo_2.html` — "The Authority" (Playfair Display, dark hero, gold accents)
- `agenticforms_io___bo_3.html` — "The Modernist" (Cormorant Garamond, taupe, vertical timeline)

### Round 2 (correct direction — technical/modern)
- `agenticforms_v2_1.html` — "Precise Blue" (Inter + JetBrains Mono, #2563EB, left-aligned hero)
- `agenticforms_v2_2.html` — "Signal Teal" (Inter + IBM Plex Mono, #0D9488, one dark section)
- `agenticforms_v2_3.html` — "Warm Coral" (Inter + Fira Code, #E8553D, centered hero) ← SELECTED

### Round 3 (iteration on Warm Coral)
- `agenticforms_v2_3_1.html` — Darker coral, .io in nav, darker bg, grid backgrounds, card animations (animations broken/wrong)
- `agenticforms_v2_3_2.html` — Hero schema animation (record lists, dropdowns, connectors, checkboxes, cascade trees, brackets), removed card canvas animations, ASCII fire effect on both CTA buttons (firecrawl-style)

---

## Brand Identity (Warm Coral)

```
--bg-primary:    #FFFFFF
--bg-secondary:  #F0EFEC  (slightly darker warm gray)
--bg-warm:       #FDF8F6
--text-primary:  #18181B  (zinc-900)
--text-secondary:#52525B  (zinc-600)
--text-tertiary: #A1A1AA  (zinc-400)
--accent:        #D44030  (darker warm coral)
--accent-hover:  #BE3828
--accent-light:  #FEF2F0
--border:        #E4E4E7  (zinc-200)
--grid-color:    rgba(0, 0, 0, 0.045)

Fonts: Inter (400-700), Fira Code (400)
```

---

## Technical Notes

- MCP Playwright server configured but not running in session — needs restart
- Firecrawl screenshot available at: https://storage.googleapis.com/firecrawl-scrape-media/screenshot-16b44d50-780c-4653-8f5d-31bbc94b882c.png (temporary URL)
- Full-page screenshot saved at /tmp/firecrawl_full.png (local)
- Playwright MCP config at: ~/.claude/plugins/marketplaces/claude-plugins-official/external_plugins/playwright/.mcp.json

---

## Copy Brief

Full landing page copy is in the chat history. Key sections:
1. Hero: "Forms that Close."
2. Problem: "Your Best Thinking Is Invisible"
3. Shift: "Give Your Client a 1-1 CTA." + 3 outcome cards
4. Process: Discovery → Design → Build → Deploy
5. Why Us: "Service Design Meets AI Engineering"
6. Testimonial: placeholder client quote
7. Bottom CTA: "See What Your Expertise Looks Like as an Experience." → Trust Assessment

Bottom CTA is the most important conversion element. Everything funnels there.
