# Trust Assessment Questions

## Q0: Setup Module (2 questions)

### Q0.1 - Account Name
**Question:** What is the name of the client account you want to assess?
**Type:** Text input
**Field:** `accountName`

### Q0.2 - Strategic Contacts
**Question:** How many strategic contacts do you currently engage with at this account?
**Type:** Number input (0-100)
**Field:** `strategicContacts`

---

## Q1-Q11: Relationship & Reciprocity Module (11 questions)

### Q1 - Referral Activity
**Question:** How often does this client refer your services to others or introduce you to new opportunities?
**Type:** Select
**Field:** `referralActivity`
**Options:**
- Never / No referrals
- Occasionally (1-2 per year)
- Frequently (3-5 per year)
- Proactively advocates (6+ per year)

### Q2 - Unsolicited Engagement
**Question:** How many times in the last 12 months has this client reached out to you unsolicited (not responding to your outreach)?
**Type:** Number input (0-100)
**Field:** `unsolicited12Mo`

### Q3 - Authority Delegated
**Question:** How much decision-making authority does this client delegate to you?
**Type:** Select
**Field:** `authorityDelegated`
**Options:**
- None - We execute to spec
- Low - Minor tactical decisions
- Moderate - Significant input on approach
- High - Trusted to define solutions and priorities

### Q4 - Executive Access
**Question:** What level of executive access do you have at this account?
**Type:** Select
**Field:** `executiveAccess`
**Options:**
- None - No direct executive contact
- Reactive - Only when they need something
- Scheduled - Regular quarterly/monthly check-ins
- Proactive - They seek our counsel on strategy

### Q5 - Stakeholder Coverage
**Question:** How many decision-makers and influencers do you have direct relationships with?
**Type:** Number input (0-50)
**Field:** `stakeholderCoverage`

### Q6 - Relationship Trend
**Question:** How would you characterize the relationship trend over the past 12 months?
**Type:** Select
**Field:** `relationshipTrend`
**Options:**
- Declining - Less engagement, narrowing scope
- Stable - Consistent engagement level
- Growing - Increasing trust and scope
- Accelerating - Rapid expansion of trust

### Q7 - Champion Strength
**Question:** Do you have an internal champion who actively advocates for you?
**Type:** Select
**Field:** `championStrength`
**Options:**
- No clear champion
- Weak - Supportive but limited influence
- Moderate - Some political capital, uses it occasionally
- Strong - High influence, actively advocates

### Q8 - Competitive Position
**Question:** What is your competitive position with this account?
**Type:** Select
**Field:** `competitivePosition`
**Options:**
- At Risk - Actively evaluating alternatives
- Preferred - First call, but not exclusive
- Exclusive - Sole provider in our domain

### Q9 - Engagement Frequency
**Question:** How often do you have meaningful interactions with this client?
**Type:** Select
**Field:** `engagementFrequency`
**Options:**
- Quarterly or less
- Monthly
- Weekly
- Daily or near-daily

### Q10 - Project Scope
**Question:** What is the typical scope of work you deliver?
**Type:** Select
**Field:** `projectScope`
**Options:**
- Narrow - Single service line, tactical
- Moderate - Multiple related services
- Broad - Cross-functional, strategic projects
- Strategic - Mission-critical, company-wide impact

### Q11 - Future Commitment
**Question:** What level of future commitment exists with this client?
**Type:** Select
**Field:** `futureCommitment`
**Options:**
- None - Project-by-project basis
- Verbal - Discussed future work
- Budgeted - Future work in their budget
- Contracted - MSA or retainer in place

---

## Q12-Q19: Risk & Revenue Potential Module (8 questions)

### Q12 - Industry
**Question:** What industry is this client in?
**Type:** Text input
**Field:** `industry`
**Placeholder:** e.g., Healthcare, Financial Services, Manufacturing

### Q13 - Employee Count
**Question:** Approximately how many employees does this client have?
**Type:** Number input (1-1,000,000)
**Field:** `employeeCount`

### Q14 - Annual Revenue
**Question:** What is their approximate annual revenue? (in dollars)
**Type:** Number input (0-100,000,000,000)
**Field:** `annualRevenue`

### Q15 - Current Annual Fees
**Question:** What are your current annual fees from this client? (in dollars)
**Type:** Number input (0-100,000,000)
**Field:** `currentAnnualFees`

### Q16 - Downtime Impact
**Question:** If your service stopped tomorrow, what would be the impact to their business?
**Type:** Select
**Field:** `downtimeImpact`
**Options:**
- Minimal - Inconvenient but manageable
- Moderate - Noticeable disruption
- Significant - Major operational impact
- Critical - Business-threatening

### Q17 - Scope of Work
**Question:** What services do you currently provide? (Select all that apply)
**Type:** Multi-select
**Field:** `scopeOfWork`
**Options:**
- Consulting / Advisory
- Implementation / Delivery
- Support / Maintenance
- Training / Education
- Strategy / Planning
- Other specialized services

### Q18 - Risk Delegation
**Question:** How much business-critical risk do they trust you with?
**Type:** Select
**Field:** `riskDelegation`
**Options:**
- Low - Non-critical functions only
- Moderate - Important but not critical
- High - Mission-critical operations
- Strategic - Core business differentiation

### Q19 - Alternatives Cost
**Question:** If they replaced you, what would it cost them (time, money, disruption)? Estimate in dollars.
**Type:** Number input (0-100,000,000)
**Field:** `alternativesCost`

---

## Total Questions: 20
- Setup: 2 questions
- RR Module: 11 questions
- RRP Module: 8 questions (note: originally spec said 7, but I count 8 here)
