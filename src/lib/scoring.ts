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
  strategyDescription: string;
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

// Strategy Determination
export function getStrategy(
  quadrant: string,
  trajectory: string,
  revenueGap: number,
  currentFees: number
): {
  strategy: string;
  priority: 'P1' | 'P2' | 'P3';
  description: string;
} {
  const gapPercentage = revenueGap / currentFees;
  const largeGap = gapPercentage > 0.3;

  // Strategy matrix
  if (quadrant === 'Strategic Partner') {
    if (trajectory === 'Strategic Growth') {
      return { strategy: 'EXPAND', priority: 'P1', description: 'Maximize momentum — high trust, growing trajectory' };
    }
    if (trajectory === 'Stable' && largeGap) {
      return { strategy: 'EXPAND', priority: 'P1', description: 'Trust is there, significant revenue gap to capture' };
    }
    if (trajectory === 'Stable') {
      return { strategy: 'PROTECT', priority: 'P2', description: "Optimize and maintain — don't over-invest" };
    }
    if (trajectory === 'Commoditization') {
      return { strategy: 'RE-ENGAGE', priority: 'P1', description: 'Relationship cooling — intervene now' };
    }
    if (trajectory === 'Decay') {
      return { strategy: 'TRIAGE', priority: 'P1', description: 'Urgent intervention or managed exit' };
    }
  }

  if (quadrant === 'Embedded Utility') {
    if (trajectory === 'Strategic Growth') {
      return { strategy: 'NURTURE', priority: 'P2', description: 'Relationship building — momentum exists, deepen trust' };
    }
    if (trajectory === 'Stable') {
      return { strategy: 'RETAIN', priority: 'P3', description: 'Cash cow — maintain with minimal investment' };
    }
    if (trajectory === 'Decay' || trajectory === 'Commoditization') {
      return { strategy: 'TRIAGE', priority: 'P2', description: 'Low relationship depth = high churn risk' };
    }
  }

  if (quadrant === 'Trusted Specialist') {
    if (largeGap) {
      return { strategy: 'EXPAND', priority: 'P1', description: 'Relationship exists — grow the scope' };
    }
    if (trajectory === 'Decay') {
      return { strategy: 'RE-ENGAGE', priority: 'P2', description: 'Lost something — reconnect and rebuild' };
    }
    return { strategy: 'EXPAND', priority: 'P2', description: 'Trusted but narrow — find adjacent opportunities' };
  }

  if (quadrant === 'Declining Vendor') {
    return { strategy: 'TRIAGE', priority: 'P3', description: 'Evaluate rescue vs. managed exit' };
  }

  // Default
  return { strategy: 'ASSESS', priority: 'P2', description: 'Gather more information' };
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
  const strategy = getStrategy(quadrant, trajectory.vector, revenueGap.gap, revenueGap.currentFees);
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
    strategyDescription: strategy.description,
    enrichmentFocus: enrichment.focus,
    enrichmentDataSources: enrichment.dataSources,
    enrichmentActions: enrichment.actions,
    valueCaptureFlag: rrp.valueCaptureFlag,
    color,
  };
}
