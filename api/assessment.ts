import type { VercelRequest, VercelResponse } from '@vercel/node';

const AIRTABLE_PAT = process.env.AIRTABLE_PAT;
const AIRTABLE_BASE_ID = 'appcO9EN2MWwrcs6E';
const AIRTABLE_ASSESSMENT_TABLE_ID = 'tblkiWHePdcfljGQz';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!AIRTABLE_PAT) {
    console.error('AIRTABLE_PAT not configured');
    return res.status(500).json({ error: 'Server configuration error' });
  }

  try {
    const { name, email, userCompany, accountName, answers, results, sourceUrl } = req.body;

    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_ASSESSMENT_TABLE_ID}`,
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
                // User Info
                'Name': name,
                'Email': email,
                'User Company': userCompany,

                // Account Setup
                'Account Name': accountName,
                'Strategic Contacts': answers.strategicContacts,

                // Relationship & Reciprocity (RR Module)
                'Referral Count': answers.referralCount,
                'Referral Quality': answers.referralQuality,
                'Signal Frequency': answers.signalFrequency,
                'Signal Types': answers.signalTypes,
                'Signal Concentration': answers.signalConcentration,
                'Navigation Support': answers.navigationSupport,
                'Access Level': answers.accessLevel,
                'Decision Maker Universe': answers.decisionMakerUniverse,
                'Strategic Contact Trend': answers.strategicContactTrend,
                'Risk Delegation Trend': answers.riskDelegationTrend,
                'Fee Trend': answers.feeTrend,

                // Account Context & Risk
                'Solutions Delivered': answers.solutionsDelivered,
                'Critical Solution': answers.criticalSolution,
                'Downtime Impact': answers.downtimeImpact,
                'Failure Visibility': answers.failureVisibility,

                // Fee & Role
                'Annual Fees': answers.annualFees,
                'Your Role': answers.yourRole,
                'Your Firm Size': answers.yourFirmSize,

                // Calculated Results
                'RR Score': results.rrScore,
                'RR Band': results.rrBand,
                'RRP Score': results.rrpScore,
                'RRP Band': results.rrpBand,
                'Coverage': results.coverage,
                'Total Buyers': results.totalBuyers,

                // Strategy Output
                'Quadrant': results.quadrant,
                'Trajectory': results.trajectory,
                'Strategy': results.strategy,
                'Strategy Priority': results.strategyPriority,
                'Current Fees': results.currentFees,
                'Trust Implied Revenue': results.trustImplied,
                'Revenue Gap': results.revenueGap,

                // Metadata
                'Source URL': sourceUrl,
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Airtable assessment error:', errorData);
      return res.status(500).json({ error: 'Failed to submit assessment to Airtable' });
    }

    const data = await response.json();
    const recordId = data.records?.[0]?.id;

    return res.status(200).json({ success: true, recordId });
  } catch (error) {
    console.error('Assessment submission error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
