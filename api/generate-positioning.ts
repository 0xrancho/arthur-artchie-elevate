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
}

function getFallback(criticalWork: string): string {
  return `Your ${criticalWork || 'work'} positions you as a trusted technical partner. To expand, identify stakeholders adjacent to your current scope who could benefit from similar expertise. Your existing work is the conversation opener.`;
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
    // Return fallback instead of error for graceful degradation
    const { criticalSolution } = req.body as PositioningRequest;
    return res.status(200).json({ positioning: getFallback(criticalSolution) });
  }

  try {
    const body: PositioningRequest = req.body;
    const { solutionsDelivered, criticalSolution, failureVisibility, growthNarrative } = body;

    if (!criticalSolution) {
      return res.status(400).json({ error: 'Missing critical solution' });
    }

    const prompt = `
You are writing a positioning paragraph for a B2B professional services consultant analyzing a client account.

THEIR WORK:
- Services they provide: "${solutionsDelivered || 'Professional services'}"
- Most critical work: "${criticalSolution}"
- When their work fails, who knows: "${failureVisibility}"

THEIR GROWTH SITUATION:
- Position: "${growthNarrative.headline}"
- Context: "${growthNarrative.description}"

DOMAIN TAXONOMY (use these terms when naming domains):
Platform Engineering, Data Infrastructure, Analytics & BI, Cloud & DevOps, Security & Compliance, Application Development, Integration & APIs, IT Operations, AI & Machine Learning, Product Development, Digital Transformation, Enterprise Architecture

Write exactly 2-3 sentences that:
1. Name the primary domain their critical work falls into (use taxonomy above)
2. Identify 1-2 adjacent domains where they could naturally expand
3. Suggest what types of stakeholders they should target based on their work
4. Include a brief VBR theme — how their current work opens doors to new conversations

RULES:
- Use their actual language and specifics from the critical work description
- Be specific, not generic — reference their actual work
- If their input is vague (e.g., "IT Services"), make reasonable inferences from whatever specifics exist in the critical work
- No headers, bullets, or formatting — just a natural paragraph
- No caveats or hedging language
- Write as if you're a strategic advisor speaking directly to them

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
            content: 'You write concise, specific positioning paragraphs for B2B consultants. Be direct and actionable.'
          },
          { role: 'user', content: prompt }
        ],
        temperature: 0.4,
        max_tokens: 200
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('OpenAI API error:', errorData);
      return res.status(200).json({ positioning: getFallback(criticalSolution) });
    }

    const data = await response.json();
    const positioning = data.choices?.[0]?.message?.content?.trim() || getFallback(criticalSolution);

    return res.status(200).json({ positioning });

  } catch (error) {
    console.error('Positioning generation error:', error);
    const { criticalSolution } = req.body as PositioningRequest;
    return res.status(200).json({ positioning: getFallback(criticalSolution) });
  }
}
