# Arthur & Archie — Document Style Guide

## Color Palette

| Name | Hex | Usage |
|------|-----|-------|
| Navy | `#1C3654` | Primary brand, text, borders, page margins |
| Terracotta | `#C97B5D` | Accent, CTAs, section headers, highlights |
| Cream | `#FAF9F7` | Light text on dark backgrounds |
| Slate | `#E8E8E8` | Secondary section backgrounds |
| Text Grey | `#667085` | Muted text, labels, notes |

## Typography

| Element | Font | Weight | Size |
|---------|------|--------|------|
| Logo | IBM Plex Serif | 600 | 20px |
| H1 (Title) | IBM Plex Serif | 600 | 28px |
| H2 (Section) | Inter | 600 | 13px, uppercase, tracked |
| H3 (Callout) | IBM Plex Serif | 600 | 18px |
| Body | Inter | 400 | 15px |
| Labels | Inter | 600 | 11px, uppercase |
| Monospace | IBM Plex Mono | 400 | 16px (values), 13px (metrics) |

**Google Fonts import:**
```html
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:wght@500;600&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400&display=swap" rel="stylesheet">
```

## Layout

- **Page wrapper:** max-width 800px, centered, white background
- **Margins:** Navy background visible on sides (body background)
- **Padding:** 48px top/bottom, 56px sides
- **Section spacing:** 24px margin between sections, 36px margin-top for h2

## Component Patterns

### Header
```
[Logo] Arthur & Archie
[Doc Label] SERVICES DELIVERY DATA AUDIT (terracotta, uppercase)
[H1] Client Name
[Subtitle] Prepared for [Names]
[Border] 2px solid navy
```

### Section — Terracotta (Assertions)
Use for: Objective, Recommendations, Key Takeaways
- Background: terracotta
- Text: cream
- Emphasis (`<em>`): navy, not italic, weight 500
- Border-radius: 4px
- Padding: 24px

### Section — Slate (Collaborative)
Use for: Questions, Lists, Inputs Needed
- Background: slate (#E8E8E8)
- Text: navy
- Border-radius: 4px
- Padding: 24px

### Params Grid
Use for: Investment, Timeline, Scope metrics
- 2-4 columns depending on content
- Background: slate
- Left border: 3px terracotta
- Label: uppercase, grey, 11px
- Value: monospace, navy, 16px

### Tables
- Header: 2px navy bottom border
- Rows: 1px #ddd bottom border
- First column: weight 500
- Padding: 10px 12px

### Footer
- Top border: 1px #ddd
- Left: Logo + URL (terracotta)
- Right: Contact info (navy)

## CSS Variables Block

```css
:root {
  --navy: #1C3654;
  --terracotta: #C97B5D;
  --cream: #FAF9F7;
  --slate: #E8E8E8;
  --text-grey: #667085;
}
```

## Full CSS Template

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', sans-serif;
  font-size: 15px;
  line-height: 1.6;
  color: var(--navy);
  background: var(--navy);
  margin: 0;
  padding: 0;
}

.page-wrapper {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 48px 56px;
  min-height: 100vh;
}

.logo {
  font-family: 'IBM Plex Serif', serif;
  font-weight: 600;
  font-size: 20px;
  color: var(--navy);
  letter-spacing: -0.02em;
  margin-bottom: 8px;
}

.doc-label {
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--terracotta);
  margin-bottom: 40px;
}

.header {
  border-bottom: 2px solid var(--navy);
  padding-bottom: 32px;
  margin-bottom: 40px;
}

h1 {
  font-family: 'IBM Plex Serif', serif;
  font-size: 28px;
  font-weight: 600;
  color: var(--navy);
  margin-bottom: 8px;
  letter-spacing: -0.01em;
}

.subtitle {
  font-size: 15px;
  color: var(--navy);
}

h2 {
  font-family: 'Inter', sans-serif;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.06em;
  color: var(--terracotta);
  margin-top: 36px;
  margin-bottom: 16px;
}

p {
  margin-bottom: 16px;
  color: var(--navy);
}

/* Terracotta Section */
.section-terracotta {
  background: var(--terracotta);
  padding: 24px;
  margin: 24px 0;
  border-radius: 4px;
}

.section-terracotta h2 {
  margin-top: 0;
  color: var(--cream);
}

.section-terracotta p {
  color: var(--cream);
  margin-bottom: 12px;
}

.section-terracotta em {
  color: var(--navy);
  font-style: normal;
  font-weight: 500;
}

.section-terracotta h3 {
  font-family: 'IBM Plex Serif', serif;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 12px;
  color: var(--cream);
}

/* Slate Section */
.section-slate {
  background: var(--slate);
  padding: 24px;
  margin: 24px 0;
  border-radius: 4px;
}

.section-slate h2 {
  margin-top: 0;
  color: var(--navy);
}

.section-slate ol,
.section-slate ul {
  padding-left: 20px;
  margin: 0;
}

.section-slate li {
  margin-bottom: 10px;
  color: var(--navy);
}

/* Params Grid */
.params {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  margin-bottom: 24px;
}

.param {
  background: var(--slate);
  padding: 16px;
  border-left: 3px solid var(--terracotta);
}

.param-label {
  font-size: 11px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--text-grey);
  margin-bottom: 4px;
}

.param-value {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 16px;
  color: var(--navy);
}

/* Tables */
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 8px;
  font-size: 14px;
}

th {
  text-align: left;
  font-weight: 600;
  color: var(--navy);
  padding: 10px 12px;
  border-bottom: 2px solid var(--navy);
}

td {
  padding: 10px 12px;
  border-bottom: 1px solid #ddd;
  vertical-align: top;
  color: var(--navy);
}

td:first-child {
  font-weight: 500;
}

/* Footer */
.footer {
  margin-top: 48px;
  padding-top: 24px;
  border-top: 1px solid #ddd;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-logo {
  font-family: 'IBM Plex Serif', serif;
  font-weight: 600;
  font-size: 16px;
  color: var(--navy);
}

.footer-url {
  font-size: 14px;
  color: var(--terracotta);
}

.footer-contact {
  text-align: right;
  font-size: 14px;
  color: var(--navy);
  line-height: 1.5;
}

/* Utility */
.next-step {
  border-top: 2px solid var(--navy);
  padding-top: 24px;
  margin-top: 40px;
}

.investment-note {
  font-size: 14px;
  color: var(--text-grey);
  margin-top: 16px;
}
```
