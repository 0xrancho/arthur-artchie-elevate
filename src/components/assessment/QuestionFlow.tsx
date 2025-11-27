import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { AssessmentAnswers } from '@/lib/scoring';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ProgressIndicator } from './ProgressIndicator';

interface QuestionFlowProps {
  onComplete: (answers: AssessmentAnswers, accountName: string) => void;
  userName: string;
}

type Question = {
  id: keyof AssessmentAnswers | 'accountName';
  section: string;
  question: string;
  type: 'text' | 'textarea' | 'number' | 'select' | 'multiselect';
  options?: { value: string; label: string }[];
  placeholder?: string;
  min?: number;
  max?: number;
};

type QuestionGroup = {
  questions: Question[];
  section: string;
};

const questions: Question[] = [
  // Q0: Setup
  {
    id: 'accountName',
    section: 'SETUP',
    question: 'What is the name of the client account you want to assess?',
    type: 'text',
    placeholder: 'Acme Corporation',
  },
  {
    id: 'strategicContacts',
    section: 'SETUP',
    question: 'How many strategic contacts do you currently engage with at this account?',
    type: 'number',
    min: 0,
    max: 100,
  },

  // Q1-Q11: RR Module
  {
    id: 'referralCount',
    section: 'RELATIONSHIP & RECIPROCITY',
    question: 'In the past 12 months, how many referrals have you received from your strategic contacts—either internal (to other departments, stakeholders) or external (to other companies)?',
    type: 'select',
    options: [
      { value: 'none', label: 'None' },
      { value: '1-2', label: '1-2' },
      { value: '3-5', label: '3-5' },
      { value: '6+', label: '6+' },
    ],
  },
  {
    id: 'referralQuality',
    section: 'RELATIONSHIP & RECIPROCITY',
    question: "How would you characterize the referrals you've received?",
    type: 'select',
    options: [
      { value: 'casual', label: 'Casual mentions ("you should talk to them sometime")' },
      { value: 'warm', label: 'Warm intros (actual introduction made)' },
      { value: 'advocacy', label: 'Active advocacy (they sold you before you arrived)' },
    ],
  },
  {
    id: 'signalFrequency',
    section: 'RELATIONSHIP & RECIPROCITY',
    question: "Outside of active project requirements, how often do your strategic contacts voluntarily share buy signals—budget hints, upcoming needs, problems they're facing, timeline pressures?",
    type: 'select',
    options: [
      { value: 'rarely', label: 'Rarely or never' },
      { value: 'occasionally', label: 'Occasionally (once or twice per year)' },
      { value: 'regularly', label: 'Regularly (quarterly or more)' },
      { value: 'frequently', label: 'Frequently (monthly or more)' },
    ],
  },
  {
    id: 'signalTypes',
    section: 'RELATIONSHIP & RECIPROCITY',
    question: 'Which types of signals have you received from this group in the past 12 months? Check all that apply.',
    type: 'multiselect',
    options: [
      { value: 'budget', label: 'Budget or spend capacity' },
      { value: 'timeline', label: 'Timeline or urgency' },
      { value: 'problems', label: 'Problems/pain points outside current scope' },
      { value: 'competitive', label: "Competitive intel (who else they're talking to)" },
      { value: 'roadmap', label: 'Internal roadmap or strategy' },
      { value: 'org-changes', label: 'Organizational changes (reorgs, new hires, departures)' },
      { value: 'none', label: 'None of the above' },
    ],
  },
  {
    id: 'signalConcentration',
    section: 'RELATIONSHIP & RECIPROCITY',
    question: 'When you receive buy signals, are they coming from...',
    type: 'select',
    options: [
      { value: 'single', label: 'Mostly one person (single source)' },
      { value: 'few', label: 'A few people (2-3 contacts)' },
      { value: 'spread', label: 'Spread across most of your contacts' },
    ],
  },
  {
    id: 'navigationSupport',
    section: 'RELATIONSHIP & RECIPROCITY',
    question: "Do any of your contacts actively help you navigate internally—making introductions, explaining politics, or advocating for you in rooms you're not in?",
    type: 'select',
    options: [
      { value: 'none', label: 'No one does this' },
      { value: 'one-occasional', label: 'One person occasionally' },
      { value: 'one-consistent', label: 'One person consistently' },
      { value: 'multiple', label: 'Multiple people do this' },
    ],
  },
  {
    id: 'accessLevel',
    section: 'RELATIONSHIP & RECIPROCITY',
    question: "What's the highest level of internal access you've been granted by this group?",
    type: 'select',
    options: [
      { value: 'standard', label: 'Standard vendor access (meetings by request)' },
      { value: 'trusted', label: 'Trusted access (invited to internal discussions)' },
      { value: 'strategic', label: 'Strategic access (included in planning sessions, roadmap reviews)' },
    ],
  },
  {
    id: 'decisionMakerUniverse',
    section: 'RELATIONSHIP & RECIPROCITY',
    question: "Approximately how many total decision-makers (budget authority or significant influence) exist at this account across all relevant business units—including people you don't know yet?",
    type: 'select',
    options: [
      { value: 'same', label: 'About the same as who I know (1-3 more)' },
      { value: 'somewhat', label: 'Somewhat more (4-7 more)' },
      { value: 'significantly', label: 'Significantly more (8-15 more)' },
      { value: 'many', label: 'Many more (16+)' },
    ],
  },
  {
    id: 'strategicContactTrend',
    section: 'RELATIONSHIP & RECIPROCITY',
    question: 'Over the past 12 months, has the number of strategic contacts you engage with...',
    type: 'select',
    options: [
      { value: 'decreased', label: 'Decreased (lost contacts, turnover, disengagement)' },
      { value: 'same', label: 'Stayed the same' },
      { value: 'increased', label: 'Increased (new intros, expanded access)' },
    ],
  },
  {
    id: 'riskDelegationTrend',
    section: 'RELATIONSHIP & RECIPROCITY',
    question: 'Compared to 12 months ago, the criticality of what you manage at this account has...',
    type: 'select',
    options: [
      { value: 'decreased-sig', label: 'Decreased significantly (lost critical systems/scope)' },
      { value: 'decreased-some', label: 'Decreased somewhat' },
      { value: 'same', label: 'Stayed about the same' },
      { value: 'increased-some', label: 'Increased somewhat' },
      { value: 'increased-sig', label: 'Increased significantly (added critical systems/scope)' },
    ],
  },
  {
    id: 'feeTrend',
    section: 'RELATIONSHIP & RECIPROCITY',
    question: 'Compared to 12 months ago, your total fees earned from this account have...',
    type: 'select',
    options: [
      { value: 'decreased-sig', label: 'Decreased significantly (>20% down)' },
      { value: 'decreased-some', label: 'Decreased somewhat (5-20% down)' },
      { value: 'same', label: 'Stayed about the same (±5%)' },
      { value: 'increased-some', label: 'Increased somewhat (5-20% up)' },
      { value: 'increased-sig', label: 'Increased significantly (>20% up)' },
    ],
  },

  // Q12-Q18: RRP Module (Q12 removed - clientName already asked in setup as accountName)
  {
    id: 'solutionsDelivered',
    section: 'ACCOUNT CONTEXT',
    question: 'What have you built or what do you manage for this client? List the major solutions, systems, or service areas.',
    type: 'textarea',
    placeholder: 'Describe the solutions and systems you deliver...',
  },
  {
    id: 'criticalSolution',
    section: 'RISK DELEGATION',
    question: "Of everything you deliver for this client, what's the single most business-critical solution or system?",
    type: 'text',
    placeholder: 'Most critical solution or system',
  },
  {
    id: 'downtimeImpact',
    section: 'RISK DELEGATION',
    question: "If that critical solution failed completely for 2-3 business days, what's the estimated financial impact to the client?",
    type: 'select',
    options: [
      { value: 'minimal', label: 'Minimal (<$25K)' },
      { value: 'moderate', label: 'Moderate ($25K-$100K)' },
      { value: 'significant', label: 'Significant ($100K-$500K)' },
      { value: 'severe', label: 'Severe ($500K-$2M)' },
      { value: 'catastrophic', label: 'Catastrophic (>$2M)' },
    ],
  },
  {
    id: 'failureVisibility',
    section: 'RISK DELEGATION',
    question: 'If that solution failed, who at the client would know about it?',
    type: 'select',
    options: [
      { value: 'technical', label: 'Only the technical team' },
      { value: 'department', label: 'Department leadership' },
      { value: 'executive', label: 'Executive team' },
      { value: 'board', label: 'Board / external stakeholders' },
    ],
  },
  {
    id: 'annualFees',
    section: 'FEE BASELINE',
    question: 'What are your total annual fees from this account (approximate)?',
    type: 'select',
    options: [
      { value: '<50k', label: '<$50K' },
      { value: '50-150k', label: '$50K-$150K' },
      { value: '150-300k', label: '$150K-$300K' },
      { value: '300-500k', label: '$300K-$500K' },
      { value: '500-750k', label: '$500K-$750K' },
      { value: '>750k', label: '>$750K' },
    ],
  },
  {
    id: 'yourRole',
    section: 'YOUR CONTEXT',
    question: "What's your relationship to this account?",
    type: 'select',
    options: [
      { value: 'owner', label: 'Account owner / lead partner' },
      { value: 'delivery', label: 'Delivery lead' },
      { value: 'bd', label: 'BD / sales lead' },
      { value: 'executive', label: 'Executive sponsor' },
    ],
  },
  {
    id: 'yourFirmSize',
    section: 'YOUR CONTEXT',
    question: 'Approximately how many strategic accounts does your firm manage?',
    type: 'select',
    options: [
      { value: '10-25', label: '10-25' },
      { value: '25-50', label: '25-50' },
      { value: '50-100', label: '50-100' },
      { value: '100+', label: '100+' },
    ],
  },
];

// Group questions logically for desktop view (2-3 questions per group)
const questionGroups: QuestionGroup[] = [
  // Setup
  { questions: [questions[0], questions[1]], section: 'SETUP' },

  // Relationship & Reciprocity
  { questions: [questions[2], questions[3]], section: 'RELATIONSHIP & RECIPROCITY' },
  { questions: [questions[4], questions[5]], section: 'RELATIONSHIP & RECIPROCITY' },
  { questions: [questions[6], questions[7]], section: 'RELATIONSHIP & RECIPROCITY' },
  { questions: [questions[8], questions[9], questions[10]], section: 'RELATIONSHIP & RECIPROCITY' },
  { questions: [questions[11]], section: 'RELATIONSHIP & RECIPROCITY' },

  // Risk & Revenue (indices shifted after removing clientName question)
  { questions: [questions[12], questions[13]], section: 'ACCOUNT CONTEXT' },
  { questions: [questions[14], questions[15]], section: 'RISK DELEGATION' },
  { questions: [questions[16]], section: 'FEE BASELINE' },
  { questions: [questions[17], questions[18]], section: 'YOUR CONTEXT' },
];

export const QuestionFlow = ({ onComplete, userName }: QuestionFlowProps) => {
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [answers, setAnswers] = useState<Partial<AssessmentAnswers & { accountName: string }>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});

  const currentGroup = questionGroups[currentGroupIndex];

  // Calculate total questions answered for progress
  const totalQuestionsAnswered = questionGroups
    .slice(0, currentGroupIndex)
    .reduce((sum, group) => sum + group.questions.length, 0);
  const progress = (totalQuestionsAnswered / questions.length) * 100;

  // Determine current stage based on group index
  const getCurrentStage = (): 'setup' | 'relationship' | 'risk-revenue' | 'results' => {
    if (currentGroupIndex === 0) return 'setup';
    if (currentGroupIndex <= 5) return 'relationship';
    return 'risk-revenue';
  };

  const handleAnswer = (questionId: string, value: any) => {
    setAnswers({ ...answers, [questionId]: value });
    // Clear error for this specific question
    const newErrors = { ...errors };
    delete newErrors[questionId];
    setErrors(newErrors);
  };

  const validateQuestion = (question: Question): string | null => {
    const currentValue = answers[question.id];

    if (question.type === 'multiselect') {
      if (!currentValue || (Array.isArray(currentValue) && currentValue.length === 0)) {
        return 'Please select at least one option';
      }
    } else if (question.type === 'number') {
      if (currentValue === undefined || currentValue === null || currentValue === '') {
        return 'Please enter a number';
      }
      if (question.min !== undefined && Number(currentValue) < question.min) {
        return `Value must be at least ${question.min}`;
      }
      if (question.max !== undefined && Number(currentValue) > question.max) {
        return `Value must be at most ${question.max}`;
      }
    } else if (!currentValue || (typeof currentValue === 'string' && !currentValue.trim())) {
      return 'This field is required';
    }

    return null;
  };

  const validateCurrentGroup = () => {
    const newErrors: Record<string, string> = {};
    let isValid = true;

    currentGroup.questions.forEach((question) => {
      const error = validateQuestion(question);
      if (error) {
        newErrors[question.id] = error;
        isValid = false;
      }
    });

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (!validateCurrentGroup()) return;

    if (currentGroupIndex < questionGroups.length - 1) {
      setCurrentGroupIndex(currentGroupIndex + 1);
    } else {
      // Complete the assessment
      const { accountName, ...assessmentAnswers } = answers;
      // Use accountName as the primary identifier
      onComplete(assessmentAnswers as AssessmentAnswers, accountName as string);
    }
  };

  const handlePrevious = () => {
    if (currentGroupIndex > 0) {
      setCurrentGroupIndex(currentGroupIndex - 1);
      setErrors({});
    }
  };

  const renderInput = (question: Question) => {
    const currentValue = answers[question.id];

    switch (question.type) {
      case 'text':
        return (
          <input
            type="text"
            value={currentValue as string || ''}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
            className="w-full bg-[#0F172A] border border-gray-700 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#22D3EE] transition-colors"
            placeholder={question.placeholder}
          />
        );

      case 'textarea':
        return (
          <textarea
            value={currentValue as string || ''}
            onChange={(e) => handleAnswer(question.id, e.target.value)}
            className="w-full bg-[#0F172A] border border-gray-700 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#22D3EE] transition-colors min-h-[120px]"
            placeholder={question.placeholder}
          />
        );

      case 'number':
        return (
          <input
            type="number"
            value={currentValue as number || ''}
            onChange={(e) => handleAnswer(question.id, Number(e.target.value))}
            className="w-full bg-[#0F172A] border border-gray-700 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#22D3EE] transition-colors"
            min={question.min}
            max={question.max}
          />
        );

      case 'select':
        return (
          <div className="space-y-2">
            {question.options?.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(question.id, option.value)}
                className={`w-full text-left px-4 py-3 rounded border transition-all ${
                  currentValue === option.value
                    ? 'bg-[#22D3EE]/20 border-[#22D3EE] text-white'
                    : 'bg-[#0F172A] border-gray-700 text-gray-300 hover:border-gray-500'
                }`}
              >
                <span className="font-mono text-sm">{option.label}</span>
              </button>
            ))}
          </div>
        );

      case 'multiselect':
        return (
          <div className="space-y-2">
            {question.options?.map((option) => {
              const selectedValues = (currentValue as string[]) || [];
              const isSelected = selectedValues.includes(option.value);

              return (
                <button
                  key={option.value}
                  onClick={() => {
                    const newValues = isSelected
                      ? selectedValues.filter((v) => v !== option.value)
                      : [...selectedValues, option.value];
                    handleAnswer(question.id, newValues);
                  }}
                  className={`w-full text-left px-4 py-3 rounded border transition-all ${
                    isSelected
                      ? 'bg-[#22D3EE]/20 border-[#22D3EE] text-white'
                      : 'bg-[#0F172A] border-gray-700 text-gray-300 hover:border-gray-500'
                  }`}
                >
                  <span className="font-mono text-sm">
                    {isSelected ? '✓ ' : ''}
                    {option.label}
                  </span>
                </button>
              );
            })}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen px-6 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Progress Indicator */}
        <ProgressIndicator currentStage={getCurrentStage()} />

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="font-mono text-xs text-gray-400 uppercase tracking-wider">
              {currentGroup.section}
            </span>
            <span className="font-mono text-xs text-gray-400">
              Group {currentGroupIndex + 1} / {questionGroups.length}
            </span>
          </div>
          <div className="h-2 bg-[#1E293B] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#22D3EE] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card - Multiple questions per group on desktop, single on mobile */}
        <div
          className="bg-[#1E293B] rounded-lg p-8"
          style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 -1px 0 rgba(255, 255, 255, 0.05)' }}
        >
          <div className="space-y-8">
            {currentGroup.questions.map((question, index) => (
              <div key={question.id}>
                {index > 0 && <div className="border-t border-gray-700 pt-8" />}

                <div className="mb-6">
                  <h2 className="text-xl md:text-2xl font-semibold text-white leading-relaxed mb-4">
                    {question.question}
                  </h2>
                </div>

                {renderInput(question)}

                {errors[question.id] && (
                  <p className="mt-3 text-sm font-mono text-[#EF4444]">{errors[question.id]}</p>
                )}
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex gap-4 mt-8 pt-6 border-t border-gray-700">
            <Button
              onClick={handlePrevious}
              disabled={currentGroupIndex === 0}
              className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 text-white font-mono text-sm px-6 py-3 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous
            </Button>

            <Button
              onClick={handleNext}
              className="flex-1 flex items-center justify-center gap-2 bg-[#22D3EE] hover:bg-[#0EA5E9] text-[#0F172A] font-mono font-bold text-sm px-6 py-3 transition-all"
            >
              {currentGroupIndex === questionGroups.length - 1 ? 'Calculate Results' : 'Next'}
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Helper Text */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-400">
            Assessment for: <span className="text-white font-mono">{userName}</span>
          </p>
        </div>
      </div>
    </div>
  );
};
