# Arthur & Archie — Proposal Template

Use this template to generate branded HTML documents. Fill in the bracketed placeholders from your notes.

---

## Document Metadata

```
DOC_LABEL: [e.g., Services Delivery Data Audit, Working Scope Document, Engagement Proposal]
CLIENT_NAME: [e.g., Baker Tilly Public Sector]
PREPARED_FOR: [e.g., Dan Hedden & Rob Bar]
```

---

## Objective (Terracotta Section)

**What are we doing and why?**

```
OBJECTIVE_MAIN: [1-2 sentences describing the engagement goal]
OBJECTIVE_OUTCOME: [The "so what" — what they get at the end]
```

Example:
- Main: "Map the data landscape across Public Sector service delivery. Identify where data is collected, how it flows, where it's duplicated, and where consultants lose time."
- Outcome: "A foundation for 'collect once, use everywhere.'"

---

## Core Questions (Slate Section)

**What questions does this engagement answer?**

```
QUESTION_1: [First core question]
QUESTION_2: [Second core question]
QUESTION_3: [Third core question]
QUESTION_4: [Fourth core question — optional]
```

Keep to 3-5 questions. These frame the scope.

---

## What We Heard (Slate Section — Optional)

**Use for discovery/working docs where you're reflecting back their pain.**

| Challenge | Translation |
|-----------|-------------|
| [Their words] | [What it really means] |
| [Their words] | [What it really means] |

---

## Opportunity Landscape (Table — Optional)

**Use when presenting multiple options before recommending one.**

| Opportunity | Effort | Risk | Success Metric |
|-------------|--------|------|----------------|
| [Option 1] | Low/Med/High | Low/Med/High | [How you'd measure] |
| [Option 2] | Low/Med/High | Low/Med/High | [How you'd measure] |

Highlight the recommended row with `class="highlight-row"`.

---

## Approach

**How will the work unfold?**

```
WEEK_1_LABEL: Week 1
WEEK_1_DESC: [What happens in week 1]

WEEK_2_LABEL: Week 2
WEEK_2_DESC: [What happens in week 2]

WEEK_3_LABEL: Week 3 (if needed)
WEEK_3_DESC: [What happens in week 3]
```

Adjust number of weeks to match scope. Keep descriptions to 1-2 sentences.

---

## Deliverables (Table)

**What do they get?**

| Deliverable | Format | Purpose |
|-------------|--------|---------|
| [Deliverable 1] | [Format] | [Why it matters] |
| [Deliverable 2] | [Format] | [Why it matters] |
| [Deliverable 3] | [Format] | [Why it matters] |

Common formats: Notion, Airtable, Spreadsheet, Password-gated HTML, PDF, Embedded in portal

---

## Investment (Params Grid)

```
RATE: [e.g., $175/hr]
SCOPE: [e.g., 60–100 hrs]
ESTIMATE: [e.g., $10.5–17.5k]
```

Or for fixed-price:

```
TIMELINE: [e.g., 2–4 weeks]
BUDGET: [e.g., $8–17k]
SCOPE: [e.g., Single-user utility]
DELIVERABLE: [e.g., Working artifact]
```

---

## Invoice Terms

```
INVOICE_TERMS: [e.g., 50% up front, 50% at completion]
```

Common options:
- "50% up front, 50% at completion" (small engagements)
- "Invoiced weekly against hours logged" (longer/variable)
- "Net 30 on completion"

---

## What This Sets Up (Terracotta Section)

**Why this matters beyond the immediate deliverable.**

```
SETS_UP_MAIN: [What this enables — the bigger picture]
SETS_UP_NEXT: [How future work would be scoped]
```

Example:
- Main: "This audit produces a standalone artifact useful regardless of next steps. But it also creates the discovery layer for AI-assisted solutions — automation, retrieval, summarization — built on real process knowledge, not guesswork."
- Next: "If opportunities emerge, we scope them separately. Same model: fast, bounded, working artifacts."

---

## Inputs Needed / Questions to Align (Slate Section — Optional)

**What do you need from them to start or proceed?**

```
INPUT_1: [First thing you need]
INPUT_2: [Second thing you need]
INPUT_3: [Third thing you need]
```

---

## Next Step

```
NEXT_STEP: [Clear, single action to move forward]
```

Examples:
- "Confirm kickoff date. I'll send a calendar link for initial intake sessions."
- "Send sample files and service catalog. Prototype kicks off on receipt."
- "Align on scope and success metric, then lock pilot timeline."

---

## Footer

```
CONTACT_NAME: Joel Austin
CONTACT_EMAIL: joelaustin.co@gmail.com
CONTACT_PHONE: 217-691-2486
COMPANY_URL: arthurandarchie.com
```

---

## Section Type Reference

| Content Type | Section Style |
|--------------|---------------|
| Assertions (Objective, Recommendations) | Terracotta |
| Collaborative (Questions, Inputs, What We Heard) | Slate |
| Data (Deliverables, Opportunities) | Table |
| Metrics (Investment, Timeline) | Params Grid |
| Plain content (Approach) | No background, just h2 + content |

---

## HTML Generation Prompt

When ready to generate, provide Claude with:

1. This template (filled in)
2. AA-STYLE-GUIDE.md
3. Instruction: "Generate a branded HTML document using the style guide and this content."

The output will be a single HTML file ready for Netlify deploy or local preview.
