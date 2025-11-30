// Generate AI-enhanced positioning paragraph

interface PositioningInput {
  solutionsDelivered: string;
  criticalSolution: string;
  failureVisibility: string;
  growthNarrative: {
    headline: string;
    description: string;
  };
}

function getFallbackPositioning(criticalWork: string): string {
  return `Your ${criticalWork || 'work'} positions you as a trusted technical partner. To expand, identify stakeholders adjacent to your current scope who could benefit from similar expertise. Your existing work is the conversation opener.`;
}

export async function generatePositioning(input: PositioningInput): Promise<string> {
  try {
    const response = await fetch('/api/generate-positioning', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(input)
    });

    if (!response.ok) {
      throw new Error('Positioning generation failed');
    }

    const data = await response.json();
    return data.positioning;

  } catch (error) {
    console.error('Positioning error, using fallback:', error);
    return getFallbackPositioning(input.criticalSolution);
  }
}
