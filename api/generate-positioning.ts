import type { VercelRequest, VercelResponse } from '@vercel/node';

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;

interface PositioningRequest {
  solutionsDelivered: string;
  criticalSolution: string;
  failureVisibility: string;
  growthNarrative: {
    headline: string;
    description: string;
  };
  clientName?: string;
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

  if (!OPENAI_API_KEY) {
    console.error('OPENAI_API_KEY not configured');
    return res.status(500).json({ error: 'API not configured', positioning: null });
  }

  try {
    const body: PositioningRequest = req.body;
    const { solutionsDelivered, criticalSolution, failureVisibility, growthNarrative, clientName } = body;

    if (!criticalSolution) {
      return res.status(400).json({ error: 'Missing critical solution' });
    }

    const prompt = `
You are synthesizing a positioning statement for a B2B professional services consultant.

INPUTS (treat these as facts):
- Client: ${clientName || 'their client'}
- Their work: "${solutionsDelivered || 'professional services'}"
- Critical deliverable: "${criticalSolution}"
- If it fails, who knows: ${failureVisibility}
- Relationship status: ${growthNarrative.headline}
- Growth context: ${growthNarrative.description}

YOUR TASK:
Write exactly 2 sentences.

Sentence 1: Synthesize the facts.
"You provide [their critical work, in their words] for [client] — [one phrase describing the nature/stakes of this work] with [relationship status]."

Sentence 2: One original idea + growth action.
"Position [one specific adjacent service or conversation that naturally follows from their work] to [action that matches their growth context — expand, protect, reconnect, etc.]."

RULES:
- Use their exact language for what they do. Don't rephrase "storm surge calculations" as "hydrological analytics."
- The adjacent idea should be specific and plausible — something a smart colleague might suggest.
- Match the growth action to their situation (expand reach, deepen relationships, protect position, etc.)
- No fluff. No hedging. No "consider" or "might want to."
- 2 sentences. Period.

Write the positioning statement now.
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
            content: 'You synthesize inputs into clear positioning statements. You are concise — 2 sentences max. You add one original insight, not a paragraph of advice. You use the client\'s language, not jargon.'
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.5,
        max_tokens: 150
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      return res.status(500).json({ error: 'OpenAI API error', positioning: null });
    }

    const data = await response.json();
    const positioning = data.choices?.[0]?.message?.content?.trim();

    if (!positioning) {
      return res.status(500).json({ error: 'Empty response from OpenAI', positioning: null });
    }

    return res.status(200).json({ positioning });

  } catch (error) {
    console.error('Positioning generation error:', error);
    return res.status(500).json({ error: 'Failed to generate positioning', positioning: null });
  }
}
