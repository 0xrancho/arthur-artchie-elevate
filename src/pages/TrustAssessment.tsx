import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { calculateFullScore, AssessmentAnswers, ScoringResult } from '@/lib/scoring';
import { submitAssessmentToAirtable } from '@/lib/airtable';
import { EntryForm } from '@/components/assessment/EntryForm';
import { QuestionFlow } from '@/components/assessment/QuestionFlow';
import { ResultsDisplay } from '@/components/assessment/ResultsDisplay';

type Stage = 'entry' | 'questions' | 'results';

const TrustAssessment = () => {
  const [stage, setStage] = useState<Stage>('entry');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userCompany, setUserCompany] = useState('');
  const [accountName, setAccountName] = useState('');
  const [answers, setAnswers] = useState<Partial<AssessmentAnswers>>({});
  const [results, setResults] = useState<ScoringResult | null>(null);
  const [assessmentRecordId, setAssessmentRecordId] = useState<string | null>(null);

  // Set page title
  useEffect(() => {
    document.title = "Growth Assessment | Arthur & Archie";
  }, []);

  // Scroll to top on stage change and initial mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [stage]);

  const handleEntryComplete = (name: string, email: string, company: string) => {
    setUserName(name);
    setUserEmail(email);
    setUserCompany(company);
    setStage('questions');
  };

  const handleQuestionsComplete = async (completedAnswers: AssessmentAnswers, clientName: string) => {
    setAnswers(completedAnswers);
    setAccountName(clientName);

    // Calculate scores
    const scoringResult = calculateFullScore(completedAnswers);
    setResults(scoringResult);

    // Submit to Airtable and get record ID
    const airtableResult = await submitAssessmentToAirtable({
      name: userName,
      email: userEmail,
      userCompany: userCompany,
      answers: completedAnswers,
      accountName: clientName,
      results: scoringResult,
      sourceUrl: window.location.href,
    });

    if (airtableResult.recordId) {
      setAssessmentRecordId(airtableResult.recordId);
    }

    setStage('results');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-[#0F172A]">
        {stage === 'entry' && (
          <EntryForm onComplete={handleEntryComplete} />
        )}

        {stage === 'questions' && (
          <QuestionFlow
            onComplete={handleQuestionsComplete}
            userName={userName}
          />
        )}

        {stage === 'results' && results && (
          <ResultsDisplay
            results={results}
            accountName={accountName}
            userName={userName}
            userEmail={userEmail}
            userCompany={userCompany}
            assessmentRecordId={assessmentRecordId}
          />
        )}
      </main>
      <Footer compact />
    </div>
  );
};

export default TrustAssessment;
