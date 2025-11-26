const AIRTABLE_PAT = import.meta.env.VITE_AIRTABLE_PAT || '';
const AIRTABLE_BASE_ID = 'appcO9EN2MWwrcs6E';
const AIRTABLE_CONTACT_TABLE_ID = 'tblCjlaZpa5jdJSad';
const AIRTABLE_ASSESSMENT_TABLE_ID = 'tblkiWHePdcfljGQz';

interface ContactSubmission {
  name: string;
  email: string;
  company: string;
  teamSize: string;
  industry: string;
  description: string;
  source: string;
  sourceUrl: string;
  sourceCta: string;
}

export async function submitToAirtable(data: ContactSubmission): Promise<{ success: boolean; error?: string }> {
  try {
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
                Name: data.name,
                Email: data.email,
                Company: data.company,
                'Team Size': data.teamSize,
                Industry: data.industry,
                Description: data.description,
                Source: data.source,
                'Source URL': data.sourceUrl,
                'Source CTA': data.sourceCta,
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Airtable error:', errorData);
      return { success: false, error: errorData.error?.message || 'Failed to submit' };
    }

    return { success: true };
  } catch (error) {
    console.error('Airtable submission error:', error);
    return { success: false, error: 'Network error' };
  }
}

// Assessment submission interface
import { AssessmentAnswers, ScoringResult } from './scoring';

interface AssessmentSubmission {
  // User info
  name: string;
  email: string;
  userCompany: string;

  // Answers
  answers: AssessmentAnswers;
  accountName: string;

  // Results
  results: ScoringResult;

  // Metadata
  sourceUrl: string;
}

export async function submitAssessmentToAirtable(data: AssessmentSubmission): Promise<{ success: boolean; error?: string }> {
  try {
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
                'Name': data.name,
                'Email': data.email,
                'User Company': data.userCompany,

                // Account Setup
                'Account Name': data.accountName,
                'Strategic Contacts': data.answers.strategicContacts,

                // Relationship & Reciprocity (RR Module)
                'Referral Count': data.answers.referralCount,
                'Referral Quality': data.answers.referralQuality,
                'Signal Frequency': data.answers.signalFrequency,
                'Signal Types': data.answers.signalTypes,
                'Signal Concentration': data.answers.signalConcentration,
                'Navigation Support': data.answers.navigationSupport,
                'Access Level': data.answers.accessLevel,
                'Decision Maker Universe': data.answers.decisionMakerUniverse,
                'Strategic Contact Trend': data.answers.strategicContactTrend,
                'Risk Delegation Trend': data.answers.riskDelegationTrend,
                'Fee Trend': data.answers.feeTrend,

                // Account Context & Risk
                'Solutions Delivered': data.answers.solutionsDelivered,
                'Critical Solution': data.answers.criticalSolution,
                'Downtime Impact': data.answers.downtimeImpact,
                'Failure Visibility': data.answers.failureVisibility,

                // Fee & Role
                'Annual Fees': data.answers.annualFees,
                'Your Role': data.answers.yourRole,
                'Your Firm Size': data.answers.yourFirmSize,

                // Calculated Results
                'RR Score': data.results.rrScore,
                'RR Band': data.results.rrBand,
                'RRP Score': data.results.rrpScore,
                'RRP Band': data.results.rrpBand,
                'Coverage': data.results.coverage,
                'Total Buyers': data.results.totalBuyers,

                // Strategy Output
                'Quadrant': data.results.quadrant,
                'Trajectory': data.results.trajectory,
                'Strategy': data.results.strategy,
                'Strategy Priority': data.results.strategyPriority,
                'Current Fees': data.results.currentFees,
                'Trust Implied Revenue': data.results.trustImplied,
                'Revenue Gap': data.results.revenueGap,

                // Metadata
                'Source URL': data.sourceUrl,
              },
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Airtable assessment error:', errorData);
      return { success: false, error: errorData.error?.message || 'Failed to submit assessment' };
    }

    return { success: true };
  } catch (error) {
    console.error('Airtable assessment submission error:', error);
    return { success: false, error: 'Network error' };
  }
}
