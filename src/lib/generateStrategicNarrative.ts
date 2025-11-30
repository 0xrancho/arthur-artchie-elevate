// Generate AI-enhanced strategic narrative (executive summary)

interface StrategicNarrativeInput {
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

function getFallbackNarrative(input: StrategicNarrativeInput): string {
  const unmappedPercent = 100 - input.coveragePercent;
  const gapFormatted = input.revenueGap >= 1000000
    ? `$${(input.revenueGap / 1000000).toFixed(1)}M`
    : `$${Math.round(input.revenueGap / 1000)}K`;

  return `You've earned ${input.quadrant} status with ${input.coveragePercent}% org coverage — ` +
    `${unmappedPercent}% of decision-makers remain unmapped, representing ${gapFormatted} in potential revenue.\n\n` +
    `Your priority: expand reach while protecting existing trust.\n\n` +
    `Unlock enrichment to see the full picture and plan your next move.`;
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
