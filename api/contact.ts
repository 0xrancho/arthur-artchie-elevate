import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, description, source } = req.body;

    // Validate required fields
    if (!name || !email || !company || !description) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Get Airtable credentials from environment
    const airtableApiKey = process.env.AIRTABLE_API_KEY;
    const airtableBaseId = process.env.AIRTABLE_BASE_ID;
    const airtableTableName = process.env.AIRTABLE_TABLE_NAME || 'Contacts';

    if (!airtableApiKey || !airtableBaseId) {
      console.error('Airtable credentials not configured');
      return res.status(500).json({ error: 'Server configuration error' });
    }

    // Submit to Airtable
    const response = await fetch(
      `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableName}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${airtableApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          fields: {
            Name: name,
            Email: email,
            Company: company,
            Description: description,
            Source: source,
            'Submitted At': new Date().toISOString(),
          },
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Airtable error:', errorData);
      return res.status(response.status).json({ error: 'Failed to submit form' });
    }

    const data = await response.json();
    return res.status(200).json({ success: true, data });

  } catch (error) {
    console.error('Contact form error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
