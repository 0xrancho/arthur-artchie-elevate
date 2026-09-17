# Firecrawl.dev Fire Animation — Reference

## Overview

The fire animation on firecrawl.dev (visible in hero and footer) is **animated ASCII art**, not a canvas particle system. Tiny monospace characters are cycled rapidly at 60-85ms intervals to create the illusion of flickering fire/data being decoded.

Source: `https://firecrawl.dev` — reverse-engineered from production JS chunks (Feb 2026).

---

## Technique

### How It Works
1. Pre-rendered ASCII art frames stored as an array of HTML strings
2. Frames are injected via `innerHTML` on a `<div>` at rapid intervals (60-85ms)
3. Styled in a tiny monospace font (8px, 10px line-height) with `white-space: pre`
4. Two color variants:
   - **Hero**: `text-black-alpha-20` (subtle gray, background texture)
   - **Footer**: `text-heat-100` (`#FA5D19` — their brand orange) — this is the "literal fire" effect
5. Uses `setIntervalOnVisible` — only animates when element is in viewport (IntersectionObserver)

### Visual Result
- Looks like flickering fire made from ASCII characters
- The small font size makes individual characters unreadable — you just see the organic movement
- The bright orange color on a dark background creates the fire illusion
- Characters include: `* = ? ! a-z A-Z 0-9` and special symbols

---

## Implementation (from source)

### React Component Structure

```jsx
// Simplified from production code
function FlameAscii({ flameVariant, ...props }) {
  const textRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    let frameIndex = 0;
    const interval = setIntervalOnVisible({
      element: containerRef.current,
      callback: () => {
        if (++frameIndex >= ASCII_FRAMES.length) frameIndex = 0;
        textRef.current.innerHTML = ASCII_FRAMES[frameIndex];
      },
      interval: flameVariant === 1 ? 60 : 85, // footer is faster
    });
    return () => interval?.();
  }, []);

  return (
    <div
      ref={containerRef}
      className={cn(
        // Hero: large, subtle
        // "cw-[1110px] ch-470 absolute pointer-events-none select-none"
        // Footer (flameVariant=1): smaller, bright
        // "cw-[308px] ch-320 absolute pointer-events-none select-none"
      )}
      {...props}
    >
      <div
        className={cn(
          "font-ascii fc-decoration",
          flameVariant === 1 ? "text-heat-100" : "text-black-alpha-20"
        )}
        ref={textRef}
        style={{ whiteSpace: "pre", fontSize: 8, lineHeight: "10px" }}
      />
    </div>
  );
}
```

### setIntervalOnVisible Helper

```js
// Only runs interval when element is visible in viewport
function setIntervalOnVisible({ element, callback, interval, immediate = true }) {
  if (!element) return () => {};

  let timer;
  const observer = new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) {
      if (immediate) callback();
      timer = setInterval(callback, interval);
    } else {
      clearInterval(timer);
    }
  }, { threshold: 0.1 });

  observer.observe(element);

  return () => {
    observer.disconnect();
    clearInterval(timer);
  };
}
```

### CSS Classes

```css
/* Firecrawl's brand orange */
.text-heat-100 { color: #FA5D19; }

/* Monospace font for ASCII art */
.font-ascii { font-family: monospace; }

/* Decoration layer — no pointer events, no selection */
.fc-decoration {
  pointer-events: none;
  user-select: none;
}
```

---

## Key Design Decisions

| Decision | Firecrawl's Choice | Notes |
|----------|-------------------|-------|
| Rendering | innerHTML swap | Not canvas — pure DOM, very lightweight |
| Frame rate | 60-85ms per frame | ~12-16 fps, enough for organic fire feel |
| Font size | 8px / 10px line-height | Characters are illegible = abstract texture |
| Color | Single solid color (`#FA5D19`) | No gradients needed — the movement creates the fire illusion |
| Performance | IntersectionObserver gated | Zero CPU when off-screen |
| Frame data | Pre-computed array | No runtime generation — stored as static data |

---

## How to Replicate for A&A

### Option A: ASCII Fire with Terracotta
Use the same technique but with A&A's terracotta (`#C97B5D`) or a gradient from terracotta to gold (`#B9A065`). Could work well as:
- Background texture on the navy hero
- CTA button hover state — fire ignites behind text
- Footer decorative element

### Option B: ASCII Fire + Canvas Hybrid
Combine ASCII frame animation with our existing CSS particle system:
1. ASCII fire as the background texture layer
2. CSS particle embers floating above
3. Creates a richer, more dimensional fire effect

### Option C: Data Decode Effect
The "bits being decoded" interpretation:
- Start with random characters (the ASCII noise)
- Gradually resolve into readable text
- Firecrawl already has this as `encryptText()`:

```js
// From Firecrawl's source — text decode/encrypt animation
function encryptText(text, progress, options = {}) {
  const { randomizeChance = 0.7 } = options;
  const chars = "a-zA-Z0-9*=?!";
  const htmlTags = ["<br class='lg-max:hidden'>", "<span>", "</span>"];
  const unresolved = Math.floor(text.length * (1 - progress));
  let result = "";
  let charIndex = 1;

  for (let i = 0; i < text.length; i++) {
    // Skip HTML tags
    let isTag = false;
    for (const tag of htmlTags) {
      if (text.substring(i, i + tag.length) === tag) {
        result += tag;
        i += tag.length - 1;
        isTag = true;
        break;
      }
    }
    if (isTag) continue;

    if (text[i] === " ") {
      result += " ";
      charIndex++;
      continue;
    }

    // Characters not yet "decoded" get randomized
    if (text.length - charIndex < unresolved) {
      if (Math.random() < randomizeChance) {
        result += text[i]; // partially decoded
      } else {
        result += chars[Math.floor(Math.random() * chars.length)];
      }
    } else {
      result += text[i]; // fully decoded
    }
    charIndex++;
  }
  return result;
}
```

### Option D: Typewriter + Decode for Hero Text
Use the `encryptText` function to animate the hero headline:
- Text starts as scrambled characters
- Progressively decodes into "Growth Intelligence"
- Creates a techy, data-processing feel that matches A&A's positioning

---

## ASCII Frame Data Format

The frames are pre-generated arrays of HTML strings. Each frame is a block of ASCII characters arranged in the shape of fire/flames. The data module exports something like:

```js
// Simplified — actual frames are much larger
export default [
  // Frame 1
  "        .  *  .    \n    * . +  . * .  \n  . * + # + * . *\n * + # @ # + * . \n* + # @ @ # + * .\n+ # @ @ @ @ # + *",
  // Frame 2 (slightly shifted)
  "      *  .  *      \n   . * . +  . *  .\n * . + # + * . * \n. * + # @ # + * .\n * + # @ @ # + * \n+ # @ @ @ @ # + *",
  // ... 20-50 more frames
];
```

The actual character set and arrangement creates a realistic fire silhouette. At 8px font size, these become abstract texture patterns.

---

## Module Map (for future chunk fetching)

The flame component loads from these Next.js chunks:
- Module ID: `281787` (component `$Laa`)
- Chunk chain: `84ae3fa9f37c2d74.js` → `b40daf6399e75773.js` → `43f77fbe05885275.js` → ... (24 total chunks)
- Frame data modules: `434443` (hero variant), `219721` (footer variant)
- Helper modules: `296809` (setIntervalOnVisible), `830829` (encryptText)

Deploy ID at time of analysis: `dpl_57aBwBJSFsCbejYdZVvtkvgiZZzA`

---

## Also Found: Animated Loading Dots Component

Firecrawl has a small canvas-based loading animation (20x20px) that's separate from the fire:

```js
// 4x4 grid of dots that pulse in a diamond pattern
// Uses Framer Motion's animate() for smooth alpha transitions
// 6-frame sequence with varying alpha levels
// Creates a "processing" feel — could be useful for A&A loading states
const frames = [
  [0,0,0,0, 0,1,1,0, 0,1,1,0, 0,0,0,0],  // center 4
  [0,1,1,0, 1,.2,.2,1, 1,.2,.2,1, 0,1,1,0],  // expand
  [1,.4,.4,1, .4,.12,.12,.4, .4,.12,.12,.4, 1,.4,.4,1],  // full
  // ... fades back out
];
```

---

*Analyzed: Feb 12, 2026*
*Source: firecrawl.dev production build*
