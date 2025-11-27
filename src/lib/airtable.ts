import { AssessmentAnswers, ScoringResult } from './scoring';

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
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Contact submission error:', errorData);
      return { success: false, error: errorData.error || 'Failed to submit' };
    }

    return { success: true };
  } catch (error) {
    console.error('Contact submission error:', error);
    return { success: false, error: 'Network error' };
  }
}

interface AssessmentSubmission {
  name: string;
  email: string;
  userCompany: string;
  answers: AssessmentAnswers;
  accountName: string;
  results: ScoringResult;
  sourceUrl: string;
}

export async function submitAssessmentToAirtable(data: AssessmentSubmission): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('/api/assessment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Assessment submission error:', errorData);
      return { success: false, error: errorData.error || 'Failed to submit assessment' };
    }

    return { success: true };
  } catch (error) {
    console.error('Assessment submission error:', error);
    return { success: false, error: 'Network error' };
  }
}
