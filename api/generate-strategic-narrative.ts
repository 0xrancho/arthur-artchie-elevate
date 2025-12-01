import type { VercelRequest, VercelResponse } from '@vercel/node';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

interface StrategicNarrativeRequest {
  quadrant: string;
  rrScore: number;
  rrpScore: number;
  rrBand: string;
  rrpBand: string;
  trajectory: string;
  coveragePercent: number;
  knownContacts: number;
  totalBuyers: number;
  currentFees: number;
  revenueGap: number;
  positioningContext: string;
  clientName?: string;
  criticalSolution?: string;
}

function getFallbackNarrative(input: StrategicNarrativeRequest): string {
  const unmappedPercent = 100 - input.coveragePercent;
  const trustImplied = input.currentFees + input.revenueGap;

  const feesFormatted = input.currentFees >= 1000000
    ? `$${(input.currentFees / 1000000).toFixed(1)}M`
    : `$${Math.round(input.currentFees / 1000)}K`;

  const impliedFormatted = trustImplied >= 1000000
    ? `$${(trustImplied / 1000000).toFixed(1)}M`
    : `$${Math.round(trustImplied / 1000)}K`;

  const gapFormatted = input.revenueGap >= 1000000
    ? `$${(input.revenueGap / 1000000).toFixed(1)}M`
    : `$${Math.round(input.revenueGap / 1000)}K`;

  return `You've earned ${input.quadrant} status — ${input.rrBand.toLowerCase()} relationships (RR ${input.rrScore.toFixed(1)}) with ${input.rrpBand.toLowerCase()} risk delegation (RRP ${input.rrpScore.toFixed(1)}). ` +
    `With ${input.knownContacts} of ${input.totalBuyers} decision-makers mapped, ${unmappedPercent}% of the organization doesn't know your work exists. ` +
    `At ${feesFormatted} in current fees with trust metrics suggesting ${impliedFormatted} potential, you're leaving ${gapFormatted} uncaptured. ` +
    `Priority: expand reach while protecting existing trust.`;
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
      rrBand,
      rrpBand,
      trajectory,
      coveragePercent,
      knownContacts,
      totalBuyers,
      currentFees,
      revenueGap,
      positioningContext,
      clientName,
      criticalSolution
    } = body;

    const unmappedPercent = 100 - coveragePercent;
    const trustImplied = currentFees + revenueGap;

    const feesFormatted = currentFees >= 1000000
      ? `$${(currentFees / 1000000).toFixed(1)}M`
      : `$${Math.round(currentFees / 1000)}K`;

    const impliedFormatted = trustImplied >= 1000000
      ? `$${(trustImplied / 1000000).toFixed(1)}M`
      : `$${Math.round(trustImplied / 1000)}K`;

    const gapFormatted = revenueGap >= 1000000
      ? `$${(revenueGap / 1000000).toFixed(1)}M`
      : `$${Math.round(revenueGap / 1000)}K`;

    const prompt = `
You are writing a strategic summary for a B2B professional services consultant.

TRUST METRICS:
- RR Score: ${rrScore.toFixed(1)} (${rrBand}) — measures relationship depth
- RRP Score: ${rrpScore.toFixed(1)} (${rrpBand}) — measures risk delegation relative to fees
- Quadrant: ${quadrant}
- Trajectory: ${trajectory}

COVERAGE:
- Known contacts: ${knownContacts}
- Estimated decision-makers: ${totalBuyers}
- Coverage: ${coveragePercent}%
- Unmapped: ${unmappedPercent}%

REVENUE:
- Current fees: ${feesFormatted}
- Trust-implied potential: ${impliedFormatted}
- Revenue gap: ${gapFormatted}

POSITIONING (already generated):
${positioningContext || 'Professional services engagement'}

CLIENT CONTEXT:
- Client: ${clientName || 'their client'}
- Critical work: "${criticalSolution || 'professional services'}"

YOUR TASK:
Write exactly 4-5 sentences. Each sentence must reference a specific number, metric, or user-provided term.

Sentence 1: Translate their trust position into plain language. Reference RR, RRP, and quadrant.
"You've earned [quadrant] status — [what RR means] but [what RRP means]."

Sentence 2: State the coverage reality with specific numbers.
"With [X] of [Y] decision-makers mapped, [Z%] of [client/org] doesn't know your [their work] exists."

Sentence 3: Quantify the revenue implication.
"At $[fees] with trust metrics suggesting $[implied], you're [leaving $X uncaptured / well-positioned / underpriced by $X]."

Sentence 4: State the priority action, pulling from the positioning.
"Priority: [specific action from positioning] — [why this matters given their situation]."

Sentence 5 (if trajectory is not Stable): Add timing/urgency.
"Trajectory is [positive/negative]; [act now / intervene before / maintain momentum]."

RULES:
- Every sentence must contain at least one specific number OR a term from their input.
- No generic advice. No "consider exploring" or "you might want to."
- Use their language for their work. "Storm surge calculations" not "hydrological services."
- Be direct. This is a strategic briefing, not a suggestion box.
- 4-5 sentences max.

Write the strategic narrative now.
`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: 'You write dense strategic summaries. Every sentence contains specific numbers or client details. You never pad with generic advice. You are direct and actionable.'
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
