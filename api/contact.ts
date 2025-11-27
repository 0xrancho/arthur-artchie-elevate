import type { VercelRequest, VercelResponse } from '@vercel/node';

const AIRTABLE_PAT = process.env.AIRTABLE_PAT;
const AIRTABLE_BASE_ID = 'appcO9EN2MWwrcs6E';
const AIRTABLE_CONTACT_TABLE_ID = 'tblCjlaZpa5jdJSad';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!AIRTABLE_PAT) {
    console.error('AIRTABLE_PAT not configured');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const { name, email, company, teamSize, industry, description, source, sourceUrl, sourceCta } = req.body;

    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_CONTACT_TABLE_ID}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_PAT}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          records: [
            {
              fields: {
                Name: name,
                Email: email,
                Company: company,
                'Team Size': teamSize,
                Industry: industry,
                Description: description,
                Source: source,
                'Source URL': sourceUrl,
                'Source CTA': sourceCta,
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Airtable error:', errorData);
      return res.status(500).json({ error: 'Failed to submit to Airtable' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Contact submission error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
