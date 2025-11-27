import type { VercelRequest, VercelResponse } from '@vercel/node';

const AIRTABLE_PAT = process.env.AIRTABLE_PAT;
const AIRTABLE_BASE_ID = 'appcO9EN2MWwrcs6E';
const AIRTABLE_ASSESSMENT_TABLE_ID = 'tblkiWHePdcfljGQz';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'PATCH') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!AIRTABLE_PAT) {
    console.error('AIRTABLE_PAT not configured');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const { recordId, yourRead } = req.body;

    if (!recordId) {
      return res.status(400).json({ error: 'recordId is required' });
    }

    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_ASSESSMENT_TABLE_ID}/${recordId}`,
      {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${AIRTABLE_PAT}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            'Your Read': yourRead || '',
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Airtable assessment update error:', errorData);
      return res.status(500).json({ error: 'Failed to update assessment in Airtable' });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Assessment update error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
