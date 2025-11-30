import type { VercelRequest, VercelResponse } from '@vercel/node';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

interface StrategicNarrativeRequest {
  quadrant: string;
  rrScore: number;
  rrpScore: number;
  trajectory: string;
  coveragePercent: number;
  currentFees: number;
  revenueGap: number;
  positioningContext: string;
  growthHeadline: string;
}

// CTA hooks by quadrant × coverage
const CTA_HOOKS: Record<string, { high: string; low: string }> = {
  'Strategic Partner': {
    high: 'to protect this position and spot threats before they become problems.',
    low: 'to see who those unmapped stakeholders are, why they should talk to you now, and how to get introduced.'
  },
  'Embedded Utility': {
    high: 'to identify champion candidates and build the trust that protects your position.',
    low: 'to find advocates who can vouch for you and expand your visibility.'
  },
  'Trusted Specialist': {
    high: 'to find where critical work is going to someone else, and how to position for it.',
    low: 'to find bigger scope opportunities and stakeholders worth knowing.'
  },
  'Declining Vendor': {
    high: 'to assess salvageability and decide: rescue or exit.',
    low: 'to make an honest call — who is still responsive and whether this is worth saving.'
  }
};

function getFallbackNarrative(input: StrategicNarrativeRequest): string {
  const unmappedPercent = 100 - input.coveragePercent;
  const isHighCoverage = input.coveragePercent >= 50;
  const ctaHook = CTA_HOOKS[input.quadrant]?.[isHighCoverage ? 'high' : 'low'] ||
    'to see the full picture and plan your next move.';

  const gapFormatted = input.revenueGap >= 1000000
    ? `$${(input.revenueGap / 1000000).toFixed(1)}M`
    : `$${Math.round(input.revenueGap / 1000)}K`;

  return `You've earned ${input.quadrant} status with ${input.coveragePercent}% org coverage — ` +
    `${unmappedPercent}% of decision-makers remain unmapped, representing ${gapFormatted} in potential revenue.\n\n` +
    `Your priority: expand reach while protecting existing trust.\n\n` +
    `Unlock enrichment ${ctaHook}`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body: StrategicNarrativeRequest = req.body;

  if (!OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY not configured');
    return res.status(200).json({ narrative: getFallbackNarrative(body) });
  }

  try {
    const {
      quadrant,
      rrScore,
      rrpScore,
      trajectory,
      coveragePercent,
      currentFees,
      revenueGap,
      positioningContext,
      growthHeadline
    } = body;

    const unmappedPercent = 100 - coveragePercent;
    const isHighCoverage = coveragePercent >= 50;
    const ctaHookTheme = CTA_HOOKS[quadrant]?.[isHighCoverage ? 'high' : 'low'] ||
      'to see the full picture and plan your next move.';

    const feesFormatted = currentFees >= 1000000
      ? `$${(currentFees / 1000000).toFixed(1)}M`
      : `$${Math.round(currentFees / 1000)}K`;

    const gapFormatted = revenueGap >= 1000000
      ? `$${(revenueGap / 1000000).toFixed(1)}M`
      : `$${Math.round(revenueGap / 1000)}K`;

    const prompt = `
You are writing a 3-sentence executive summary for a B2B consultant reviewing their client relationship.

TRUST POSITION:
- Quadrant: ${quadrant}
- RR Score: ${rrScore} | RRP Score: ${rrpScore}
- Trajectory: ${trajectory}

COVERAGE:
- Known: ${coveragePercent}%
- Unmapped: ${unmappedPercent}%

REVENUE:
- Current fees: ${feesFormatted}
- Gap (opportunity): ${gapFormatted}

THEIR WORK:
${positioningContext || 'Professional services engagement'}

GROWTH HEADLINE:
${growthHeadline}

Write exactly 3 parts:

1. SITUATION (1-2 sentences): Summarize their trust position and the key tension or opportunity. Use plain language. Reference their specific work if relevant.

2. PRIORITY (1 sentence): State the single most important action based on their situation. Start with "Your priority:" and be direct.

3. CTA HOOK (1 sentence): End with "Unlock enrichment ${ctaHookTheme}"

RULES:
- Be direct. No fluff. Use specific numbers where impactful.
- Reference their actual work from the positioning context
- The CTA must start with "Unlock enrichment" and match the theme provided
- Use line breaks between the 3 parts
- No headers or labels — just the content

Output plain text only.
`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          {
            role: 'system',
            content: 'You write concise executive summaries for consultants. Direct, actionable, no jargon. Always end with "Unlock enrichment" CTA.'
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.4,
        max_tokens: 300
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      return res.status(200).json({ narrative: getFallbackNarrative(body) });
    }

    const data = await response.json();
    const narrative = data.choices?.[0]?.message?.content?.trim() || getFallbackNarrative(body);

    return res.status(200).json({ narrative });

  } catch (error) {
    console.error('Strategic narrative generation error:', error);
    return res.status(200).json({ narrative: getFallbackNarrative(body) });
  }
}
