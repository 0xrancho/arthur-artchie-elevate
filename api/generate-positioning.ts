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
You are a strategic advisor helping a B2B professional services consultant understand their positioning with a client.

THE CONSULTANT'S SITUATION:
- Client: ${clientName || 'Not specified'}
- Services they provide: "${solutionsDelivered || 'Not specified'}"
- Their most critical work: "${criticalSolution}"
- If this work fails, who knows: "${failureVisibility}"

THEIR GROWTH CONTEXT:
- Current position: "${growthNarrative.headline}"
- What this means: "${growthNarrative.description}"

YOUR TASK:
Read their actual work carefully. Think about what industry they're in, what domain expertise this represents, and what adjacent opportunities naturally exist.

Then write exactly 2-3 sentences that:

1. Name what they actually do in plain language — don't force it into tech jargon if it's not tech work. A civil engineer doing flood calculations is a civil engineer, not a "data infrastructure" consultant.

2. Identify 1-2 adjacent service areas where their current expertise creates natural expansion opportunities. These should make sense for THEIR industry. For an engineering firm, this might be other infrastructure work. For a law firm, related practice areas. For a tech consultant, adjacent technical domains.

3. Suggest what types of stakeholders or buyers they should target based on their specific work. Be concrete — if they're doing water infrastructure for a state DOT, who else at that DOT or in that ecosystem should know them?

4. Include a brief positioning hook — how does their critical work open doors? What's the "if you trust us with X, you should trust us with Y" logic?

CRITICAL RULES:
- Actually read their input. "Storm surge and flood calculations" is civil engineering, not cloud computing.
- Use their language. If they said "designs for storm surge," say "storm surge" not "data analytics."
- Be specific to their situation. Generic advice is useless.
- No buzzwords unless they used them first.
- No headers or bullets — write a natural paragraph.
- 2-3 sentences max. Be dense with insight, not fluffy.

Write the positioning paragraph now.
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
            content: 'You are a sharp strategic advisor. You read carefully, think clearly, and write specifically. You never give generic advice. You never shoehorn inputs into categories that don\'t fit. You use the client\'s actual language.'
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.5,
        max_tokens: 250
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
