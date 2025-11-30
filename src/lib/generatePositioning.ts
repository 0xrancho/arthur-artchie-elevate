// Generate AI-enhanced positioning paragraph

interface PositioningInput {
  solutionsDelivered: string;
  criticalSolution: string;
  failureVisibility: string;
  growthNarrative: {
    headline: string;
    description: string;
  };
  clientName?: string;
}

async function attemptFetch(input: PositioningInput): Promise<string | null> {
  const response = await fetch('/api/generate-positioning', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input)
  });

  if (!response.ok) {
    throw new Error('Positioning generation failed');
  }

  const data = await response.json();
  return data.positioning || null;
}

export async function generatePositioning(input: PositioningInput): Promise<string | null> {
  // Attempt 1
  try {
    const result = await attemptFetch(input);
    if (result) return result;
  } catch (error) {
    console.error('Positioning attempt 1 failed:', error);
  }

  // Attempt 2 (retry once)
  try {
    const result = await attemptFetch(input);
    if (result) return result;
  } catch (error) {
    console.error('Positioning attempt 2 failed:', error);
  }

  // Return null instead of hardcoded fallback
  return null;
}
