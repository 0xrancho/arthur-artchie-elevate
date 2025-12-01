// Generate AI-enhanced strategic narrative (executive summary)

interface StrategicNarrativeInput {
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

function getFallbackNarrative(input: StrategicNarrativeInput): string {
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

export async function generateStrategicNarrative(input: StrategicNarrativeInput): Promise<string> {
  try {
    const response = await fetch('/api/generate-strategic-narrative', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input)
    });

    if (!response.ok) {
      throw new Error('Strategic narrative generation failed');
    }

    const data = await response.json();
    return data.narrative;

  } catch (error) {
    console.error('Strategic narrative error, using fallback:', error);
    return getFallbackNarrative(input);
  }
}
