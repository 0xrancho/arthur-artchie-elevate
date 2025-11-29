// Trust Assessment Scoring Logic
// Exact implementation per specifications

export interface AssessmentAnswers {
  // Q0: Setup
  strategicContacts: number;

  // Q1-Q11: RR Module
  referralCount: 'none' | '1-2' | '3-5' | '6+';
  referralQuality: 'casual' | 'warm' | 'advocacy';
  signalFrequency: 'rarely' | 'occasionally' | 'regularly' | 'frequently';
  signalTypes: string[];
  signalConcentration: 'single' | 'few' | 'spread';
  navigationSupport: 'none' | 'one-occasional' | 'one-consistent' | 'multiple';
  accessLevel: 'standard' | 'trusted' | 'strategic';
  decisionMakerUniverse: 'same' | 'somewhat' | 'significantly' | 'many';
  strategicContactTrend: 'decreased' | 'same' | 'increased';
  riskDelegationTrend: 'decreased-sig' | 'decreased-some' | 'same' | 'increased-some' | 'increased-sig';
  feeTrend: 'decreased-sig' | 'decreased-some' | 'same' | 'increased-some' | 'increased-sig';

  // Q12-Q19: RRP Module
  solutionsDelivered: string;
  criticalSolution: string;
  downtimeImpact: 'minimal' | 'moderate' | 'significant' | 'severe' | 'catastrophic';
  failureVisibility: 'technical' | 'department' | 'executive' | 'board';
  annualFees: '<50k' | '50-150k' | '150-300k' | '300-500k' | '500-750k' | '>750k';
  yourRole: 'owner' | 'delivery' | 'bd' | 'executive';
  yourFirmSize: '10-25' | '25-50' | '50-100' | '100+';
}

export interface ScoringResult {
  rrScore: number;
  rrBand: string;
  rrpScore: number;
  rrpBand: string;
  coverage: number;
  totalBuyers: number;
  quadrant: string;
  trajectory: string;
  trajectoryArrow: string;
  deltaRR: 'up' | 'stable' | 'down';
  deltaRRP: 'up' | 'stable' | 'down';
  currentFees: number;
  trustImplied: number;
  revenueGap: number;
  strategy: string;
  strategyPriority: 'P1' | 'P2' | 'P3';
  strategyHeadline: string;
  strategyDescription: string;
  strategyChecklist: string[];
  enrichmentFocus: string[];
  enrichmentDataSources: string[];
  enrichmentActions: string[];
  valueCaptureFlag: boolean;
  color: string;
}

// RR Score Calculation
export function calculateRRScore(answers: AssessmentAnswers): { score: number; band: string } {
  let rawScore = 0;
  const maxScore = 24;

  // Q1: Referral Volume (normalized to contact base)
  const referralRatio: Record<string, number> = {
    'none': 0,
    '1-2': answers.strategicContacts <= 3 ? 4 : 2,
    '3-5': answers.strategicContacts <= 5 ? 6 : 4,
    '6+': 6
  };
  rawScore += referralRatio[answers.referralCount];

  // Q2: Referral Quality (bonus if Q1 ≠ none)
  if (answers.referralCount !== 'none') {
    rawScore += { 'casual': 0, 'warm': 1, 'advocacy': 2 }[answers.referralQuality];
  }

  // Q3: Signal Frequency
  rawScore += {
    'rarely': 0,
    'occasionally': 1,
    'regularly': 3,
    'frequently': 5
  }[answers.signalFrequency];

  // Q4: Signal Types (0.5 per type, max 3 points)
  const signalCount = answers.signalTypes.includes('none') ? 0 : answers.signalTypes.length;
  rawScore += Math.min(signalCount * 0.5, 3);

  // Q5: Signal Concentration
  rawScore += { 'single': 0, 'few': 1, 'spread': 2 }[answers.signalConcentration];

  // Q6: Navigation Support
  rawScore += {
    'none': 0,
    'one-occasional': 1,
    'one-consistent': 2,
    'multiple': 3
  }[answers.navigationSupport];

  // Q7: Access Level
  rawScore += { 'standard': 0, 'trusted': 1, 'strategic': 2 }[answers.accessLevel];

  // Normalize to 0-5 scale
  const rr = (rawScore / maxScore) * 5;

  return { score: Math.round(rr * 10) / 10, band: getRRBand(rr) };
}

function getRRBand(rr: number): string {
  if (rr < 1) return 'Transactional';
  if (rr < 2.5) return 'Developing';
  if (rr < 4) return 'Strong';
  return 'Strategic';
}

// RRP Score Calculation
export function calculateRRPScore(answers: AssessmentAnswers): { score: number; band: string; valueCaptureFlag: boolean } {
  const downtimeValue: Record<string, number> = {
    'minimal': 12500,
    'moderate': 62500,
    'significant': 300000,
    'severe': 1250000,
    'catastrophic': 3000000
  };

  const feesValue: Record<string, number> = {
    '<50k': 30000,
    '50-150k': 100000,
    '150-300k': 225000,
    '300-500k': 400000,
    '500-750k': 625000,
    '>750k': 900000
  };

  const rrp = downtimeValue[answers.downtimeImpact] / feesValue[answers.annualFees];
  const valueCaptureFlag = rrp > 30;

  return {
    score: Math.round(rrp * 10) / 10,
    band: getRRPBand(rrp),
    valueCaptureFlag
  };
}

function getRRPBand(rrp: number): string {
  if (rrp < 3) return 'Low';
  if (rrp < 8) return 'Moderate';
  if (rrp < 15) return 'High';
  return 'Strategic';
}

// Coverage Calculation
export function calculateCoverage(answers: AssessmentAnswers): { percentage: number; total: number } {
  const multiplier: Record<string, number> = {
    'same': 1.3,
    'somewhat': 1.75,
    'significantly': 2.5,
    'many': 3.5
  };

  const estimatedTotal = Math.round(answers.strategicContacts * multiplier[answers.decisionMakerUniverse]);
  const percentage = Math.round((answers.strategicContacts / estimatedTotal) * 100);

  return { percentage, total: estimatedTotal };
}

// Quadrant Determination
export function getQuadrant(rr: number, rrp: number): string {
  const highRR = rr >= 2.5;
  const highRRP = rrp >= 8;

  if (highRR && highRRP) return 'Strategic Partner';
  if (highRR && !highRRP) return 'Trusted Specialist';
  if (!highRR && highRRP) return 'Embedded Utility';
  return 'Declining Vendor';
}

// Trajectory Determination
export function getTrajectory(answers: AssessmentAnswers): {
  vector: string;
  arrow: string;
  deltaRR: 'up' | 'stable' | 'down';
  deltaRRP: 'up' | 'stable' | 'down';
} {
  // Delta RR (based on contact trend)
  const deltaRR: 'up' | 'stable' | 'down' = {
    'decreased': 'down',
    'same': 'stable',
    'increased': 'up'
  }[answers.strategicContactTrend] as 'up' | 'stable' | 'down';

  // Delta RRP (based on risk trend vs fee trend)
  const riskScore: Record<string, number> = {
    'decreased-sig': -2,
    'decreased-some': -1,
    'same': 0,
    'increased-some': 1,
    'increased-sig': 2
  };

  const feeScore: Record<string, number> = {
    'decreased-sig': -2,
    'decreased-some': -1,
    'same': 0,
    'increased-some': 1,
    'increased-sig': 2
  };

  const rrpDelta = riskScore[answers.riskDelegationTrend] - feeScore[answers.feeTrend];
  const deltaRRP: 'up' | 'stable' | 'down' = rrpDelta > 0 ? 'up' : rrpDelta < 0 ? 'down' : 'stable';

  // Determine trajectory vector
  let vector: string;
  if (deltaRR === 'up' && deltaRRP === 'up') vector = 'Strategic Growth';
  else if (deltaRR === 'down' && deltaRRP === 'up') vector = 'Commoditization';
  else if (deltaRR === 'up' && deltaRRP === 'down') vector = 'Specialization';
  else if (deltaRR === 'down' && deltaRRP === 'down') vector = 'Decay';
  else vector = 'Stable';

  const arrow = getTrajectoryArrow(vector);

  return { vector, arrow, deltaRR, deltaRRP };
}

function getTrajectoryArrow(vector: string): string {
  return {
    'Strategic Growth': '↗',
    'Commoditization': '↘',
    'Specialization': '↖',
    'Decay': '↙',
    'Stable': '→'
  }[vector] || '→';
}

// Revenue Gap Calculation
export function calculateRevenueGap(answers: AssessmentAnswers, rr: number, rrp: number): {
  currentFees: number;
  trustImplied: number;
  gap: number;
} {
  const feesValue: Record<string, number> = {
    '<50k': 30000,
    '50-150k': 100000,
    '150-300k': 225000,
    '300-500k': 400000,
    '500-750k': 625000,
    '>750k': 900000
  };

  const currentFees = feesValue[answers.annualFees];

  // Composite trust score (0-10)
  const rrNormalized = Math.min(rr / 5, 1) * 10;
  const rrpNormalized = Math.min(rrp / 15, 1) * 10;
  const trustScore = (rrNormalized + rrpNormalized) / 2;

  // Trust-implied revenue
  const trustImplied = currentFees * (trustScore / 5);
  const gap = Math.max(trustImplied - currentFees, 0);

  return {
    currentFees,
    trustImplied: Math.round(trustImplied),
    gap: Math.round(gap)
  };
}

// Growth Narratives: Quadrant × Coverage (8 combinations)
const GROWTH_NARRATIVES: Record<string, { high: string; low: string }> = {
  'Strategic Partner': {
    high: "Deep and wide — you're embedded across the org with mission-critical scope. Protect this position and optimize.",
    low: "Deep trust in a corner — they trust you with critical work, but you're only known to a fraction of the org. Expand your reach."
  },
  'Embedded Utility': {
    high: "Critical but transactional — you run important systems but they don't engage beyond requirements. Build relationship depth before you become replaceable.",
    low: "Critical but isolated — high dependency in a small pocket, invisible to the rest of the org. Build relationships while expanding reach."
  },
  'Trusted Specialist': {
    high: "Well-connected but low stakes — everyone knows you, but you're not doing critical work. Earn their trust for bigger scope.",
    low: "Trusted but narrow — strong relationships in a small circle, but limited scope and reach. Expand both."
  },
  'Declining Vendor': {
    high: "Wide but shallow — you know a lot of people but none deeply, and the work isn't critical. Decide: invest heavily or exit.",
    low: "Marginal and fading — low trust, low stakes, limited reach. Decide: rescue or graceful exit."
  }
};

// Trajectory Modifiers: appended to base narrative
const TRAJECTORY_MODIFIERS: Record<string, string> = {
  'Strategic Growth': "Momentum is building — accelerate.",
  'Commoditization': "The relationship is cooling — act now.",
  'Specialization': "They're concentrating trust in fewer areas.",
  'Decay': "You're losing ground — urgent intervention needed.",
  'Stable': "It's holding steady — opportunity to make a move."
};

// Headlines: Quadrant × Coverage (8 combinations)
const NARRATIVE_HEADLINES: Record<string, { high: string; low: string }> = {
  'Strategic Partner': {
    high: "Embedded strategic partner",
    low: "Strategic partner, limited reach"
  },
  'Embedded Utility': {
    high: "Critical vendor, weak relationship",
    low: "Critical but isolated"
  },
  'Trusted Specialist': {
    high: "Trusted advisor, low stakes",
    low: "Trusted but narrow"
  },
  'Declining Vendor': {
    high: "Commoditized across the org",
    low: "Marginal and fading"
  }
};

// Enrichment Checklists: Quadrant × Coverage (8 combinations)
const ENRICHMENT_CHECKLISTS: Record<string, { high: string[]; low: string[] }> = {
  'Strategic Partner': {
    high: [
      'Competitive threats — who else is circling your work?',
      'Contract timing — renewal dates, expansion windows, budget cycles',
      'Champion stability — any key contacts at risk of leaving?',
      'Executive coverage — do you have air cover above your champions?',
      'Expansion signals — new initiatives you should know about?'
    ],
    low: [
      'Org chart gaps — who else owns decisions in your domain?',
      'Warm intro paths — which champions can introduce you to other departments?',
      'Adjacent stakeholders — who is downstream of your critical work?',
      'Budget owners — who controls spend outside your current scope?',
      'Hiring signals — relevant roles posted in other business units?'
    ]
  },
  'Embedded Utility': {
    high: [
      'Champion candidates — who engages beyond required project work?',
      'Relationship gaps — which contacts have you never met outside a status call?',
      'Competitive positioning — who else could do what you do?',
      'Value storytelling — does leadership know the impact of your work?',
      'Executive access — who above your contacts should know you by name?'
    ],
    low: [
      'Relationship depth — who in your small circle could become a champion?',
      'Internal visibility — who knows your critical work exists?',
      'Org chart expansion — who else should know about your work?',
      'Risk storytelling — can you articulate business impact outside your pocket?',
      'Warm intro paths — can your technical contacts introduce you to leadership?'
    ]
  },
  'Trusted Specialist': {
    high: [
      'Critical problems — what high-stakes work are they giving to someone else?',
      'Scope expansion — where could your work become mission-critical?',
      'Budget for critical work — who controls spend on their most important initiatives?',
      'Competitor mapping — who handles their high-stakes work today?',
      'Trust conversion — which relationships can you leverage for bigger scope?'
    ],
    low: [
      'Scope opportunities — where could your work become more critical?',
      'Stakeholder expansion — who else should you know beyond your current circle?',
      'Champion leverage — can your trusted contacts introduce you AND vouch for critical work?',
      'Adjacent needs — who has problems you could solve?',
      'Hiring signals — roles that suggest growing needs?'
    ]
  },
  'Declining Vendor': {
    high: [
      'Salvageable contacts — anyone still responsive or willing to advocate?',
      'Relationship reset — any new executives who might give you a fresh start?',
      'Competitive displacement — who are they already talking to?',
      'Exit cost — revenue at risk vs. effort to rescue?',
      'Reference value — if you exit gracefully, can you preserve the reference?'
    ],
    low: [
      'Last responsive contact — anyone still taking your calls?',
      'Rescue path — any new stakeholder who might reset the relationship?',
      'Revenue at risk — how much are you losing if you walk away?',
      'Recovery cost — effort required to turn this around?',
      'Graceful exit — how do you wind down without burning the bridge?'
    ]
  }
};

const COVERAGE_THRESHOLD = 50;

// Strategy Determination
export function getStrategy(
  quadrant: string,
  trajectory: string,
  revenueGap: number,
  currentFees: number,
  coveragePercent: number
): {
  strategy: string;
  priority: 'P1' | 'P2' | 'P3';
  headline: string;
  description: string;
  checklist: string[];
} {
  const gapPercentage = revenueGap / currentFees;
  const largeGap = gapPercentage > 0.3;

  // Build headline, description, and checklist from quadrant × coverage + trajectory modifier
  const isHighCoverage = coveragePercent >= COVERAGE_THRESHOLD;
  const coverageKey = isHighCoverage ? 'high' : 'low';
  const headline = NARRATIVE_HEADLINES[quadrant]?.[coverageKey] || 'Assessment complete';
  const baseNarrative = GROWTH_NARRATIVES[quadrant]?.[coverageKey] || 'Review your trust position and recommended strategy below.';
  const trajectoryModifier = TRAJECTORY_MODIFIERS[trajectory] || '';
  const description = trajectoryModifier ? `${baseNarrative} ${trajectoryModifier}` : baseNarrative;
  const checklist = ENRICHMENT_CHECKLISTS[quadrant]?.[coverageKey] || [];

  // Strategy matrix - determines strategy type and priority
  if (quadrant === 'Strategic Partner') {
    if (trajectory === 'Strategic Growth') {
      return { strategy: 'EXPAND', priority: 'P1', headline, description, checklist };
    }
    if (trajectory === 'Stable' && largeGap) {
      return { strategy: 'EXPAND', priority: 'P1', headline, description, checklist };
    }
    if (trajectory === 'Stable') {
      return { strategy: 'PROTECT', priority: 'P2', headline, description, checklist };
    }
    if (trajectory === 'Commoditization') {
      return { strategy: 'RE-ENGAGE', priority: 'P1', headline, description, checklist };
    }
    if (trajectory === 'Decay') {
      return { strategy: 'TRIAGE', priority: 'P1', headline, description, checklist };
    }
  }

  if (quadrant === 'Embedded Utility') {
    if (trajectory === 'Strategic Growth') {
      return { strategy: 'NURTURE', priority: 'P2', headline, description, checklist };
    }
    if (trajectory === 'Stable') {
      return { strategy: 'RETAIN', priority: 'P3', headline, description, checklist };
    }
    if (trajectory === 'Decay' || trajectory === 'Commoditization') {
      return { strategy: 'TRIAGE', priority: 'P2', headline, description, checklist };
    }
  }

  if (quadrant === 'Trusted Specialist') {
    if (largeGap) {
      return { strategy: 'EXPAND', priority: 'P1', headline, description, checklist };
    }
    if (trajectory === 'Decay') {
      return { strategy: 'RE-ENGAGE', priority: 'P2', headline, description, checklist };
    }
    return { strategy: 'EXPAND', priority: 'P2', headline, description, checklist };
  }

  if (quadrant === 'Declining Vendor') {
    return { strategy: 'TRIAGE', priority: 'P3', headline, description, checklist };
  }

  // Default
  return { strategy: 'ASSESS', priority: 'P2', headline, description, checklist };
}

// Enrichment Prescription
export function getEnrichmentPrescription(strategy: string): {
  focus: string[];
  dataSources: string[];
  actions: string[];
} {
  const prescriptions: Record<string, { focus: string[]; dataSources: string[]; actions: string[] }> = {
    'EXPAND': {
      focus: [
        'Org chart gaps — who else should you know?',
        'Hiring signals — are they growing teams you serve?',
        'Budget cycles — when do they plan spend?',
        'Adjacent business units — where else could you add value?'
      ],
      dataSources: ['Apollo org chart', 'LinkedIn Sales Nav', 'Clay job scrape', 'BuiltWith/HG Insights'],
      actions: [
        'Map remaining decision-makers',
        'Identify warm intro paths via existing champions',
        'Surface budget timing for outreach planning'
      ]
    },
    'RE-ENGAGE': {
      focus: [
        'Champion status — still in seat? Still engaged?',
        'New stakeholders — who joined in last 6 months?',
        'Competitor signals — are they evaluating alternatives?',
        'Org restructure — any consolidation risk?'
      ],
      dataSources: ['LinkedIn via Clay', 'Apollo org chart', 'G2 reviews', 'Job post scraping'],
      actions: [
        'Verify champion status and replacement',
        'Map new executives and their vendor relationships',
        'Identify reconnection paths'
      ]
    },
    'PROTECT': {
      focus: [
        'Contract timing — when is renewal?',
        'Churn signals — budget pressure, stakeholder turnover?',
        'Competitive threats — who else is circling?',
        'Engagement decay — are touchpoints declining?'
      ],
      dataSources: ['Internal CRM', 'LinkedIn job change alerts', 'News/earnings'],
      actions: [
        'Schedule executive touchpoint before renewal',
        'Proactive value demonstration',
        'Competitive displacement defense'
      ]
    },
    'RETAIN': {
      focus: [
        'Contract dates — basic renewal tracking',
        'Company health — growing or contracting?',
        'Key contact stability — any changes?'
      ],
      dataSources: ['Internal CRM', 'Basic company data'],
      actions: [
        'Maintain automated check-ins',
        'Flag if signals shift to PROTECT'
      ]
    },
    'NURTURE': {
      focus: [
        'Champion candidates — who could become advocates?',
        'Relationship paths — shared connections?',
        'Interest alignment — what do they care about?'
      ],
      dataSources: ['LinkedIn via Clay', 'Apollo', 'Internal engagement data'],
      actions: [
        'Multi-thread the relationship',
        'Find warm intro paths',
        'Align touchpoints to their interests'
      ]
    },
    'TRIAGE': {
      focus: [
        'Salvageability — any responsive contacts left?',
        'Exit cost — revenue at risk, contractual obligations?',
        'Rescue path — new execs who might reset things?'
      ],
      dataSources: ['Internal CRM', 'Apollo org chart', 'LinkedIn'],
      actions: [
        'Assess salvageability score',
        'If rescuable: executive intervention',
        'If not: managed wind-down, harvest remaining value'
      ]
    }
  };

  return prescriptions[strategy] || prescriptions['TRIAGE'];
}

// Color coding for UI
export function getStrategyColor(strategy: string): string {
  switch (strategy) {
    case 'EXPAND':
    case 'NURTURE':
      return '#22D3EE'; // Cyan - positive growth
    case 'RETAIN':
    case 'PROTECT':
      return '#4ADE80'; // Green - stable positive
    case 'RE-ENGAGE':
      return '#F472B6'; // Pink - needs attention
    case 'TRIAGE':
      return '#EF4444'; // Red - urgent/decline
    default:
      return '#F59E0B'; // Amber - assess
  }
}

// Main scoring function
export function calculateFullScore(answers: AssessmentAnswers): ScoringResult {
  const rr = calculateRRScore(answers);
  const rrp = calculateRRPScore(answers);
  const coverage = calculateCoverage(answers);
  const quadrant = getQuadrant(rr.score, rrp.score);
  const trajectory = getTrajectory(answers);
  const revenueGap = calculateRevenueGap(answers, rr.score, rrp.score);
  const strategy = getStrategy(quadrant, trajectory.vector, revenueGap.gap, revenueGap.currentFees, coverage.percentage);
  const enrichment = getEnrichmentPrescription(strategy.strategy);
  const color = getStrategyColor(strategy.strategy);

  return {
    rrScore: rr.score,
    rrBand: rr.band,
    rrpScore: rrp.score,
    rrpBand: rrp.band,
    coverage: coverage.percentage,
    totalBuyers: coverage.total,
    quadrant,
    trajectory: trajectory.vector,
    trajectoryArrow: trajectory.arrow,
    deltaRR: trajectory.deltaRR,
    deltaRRP: trajectory.deltaRRP,
    currentFees: revenueGap.currentFees,
    trustImplied: revenueGap.trustImplied,
    revenueGap: revenueGap.gap,
    strategy: strategy.strategy,
    strategyPriority: strategy.priority,
    strategyHeadline: strategy.headline,
    strategyDescription: strategy.description,
    strategyChecklist: strategy.checklist,
    enrichmentFocus: enrichment.focus,
    enrichmentDataSources: enrichment.dataSources,
    enrichmentActions: enrichment.actions,
    valueCaptureFlag: rrp.valueCaptureFlag,
    color,
  };
}
