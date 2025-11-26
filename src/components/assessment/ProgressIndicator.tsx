interface ProgressIndicatorProps {
  currentStage: 'setup' | 'relationship' | 'risk-revenue' | 'results';
}

export const ProgressIndicator = ({ currentStage }: ProgressIndicatorProps) => {
  const stages = [
    { id: 'relationship', label: 'Relationship Signals', questionRange: 'Q1-Q11' },
    { id: 'risk-revenue', label: 'Risk & Revenue', questionRange: 'Q12-Q19' },
    { id: 'results', label: 'Results', questionRange: '' },
  ];

  const getStageStatus = (stageId: string): 'completed' | 'current' | 'upcoming' => {
    const stageOrder = ['setup', 'relationship', 'risk-revenue', 'results'];
    const currentIndex = stageOrder.indexOf(currentStage);
    const stageIndex = stageOrder.indexOf(stageId);

    if (stageIndex < currentIndex) return 'completed';
    if (stageIndex === currentIndex) return 'current';
    return 'upcoming';
  };

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between max-w-3xl mx-auto">
        {stages.map((stage, index) => {
          const status = getStageStatus(stage.id);
          const isLast = index === stages.length - 1;

          return (
            <div key={stage.id} className="flex items-center flex-1">
              {/* Stage Circle */}
              <div className="flex flex-col items-center">
                <div
                  className={`
                    relative w-10 h-10 rounded-full flex items-center justify-center font-mono text-sm font-bold
                    transition-all duration-300
                    ${status === 'completed' ? 'bg-[#4ADE80] text-[#0F172A]' : ''}
                    ${status === 'current' ? 'bg-[#22D3EE] text-[#0F172A]' : ''}
                    ${status === 'upcoming' ? 'bg-[#1E293B] text-gray-500 border-2 border-gray-600' : ''}
                  `}
                >
                  {status === 'completed' && (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                  {status === 'current' && (
                    <>
                      <span>{index + 1}</span>
                      {/* Pulsing ring */}
                      <div className="absolute inset-0 rounded-full border-2 border-[#22D3EE] animate-ping opacity-75" />
                    </>
                  )}
                  {status === 'upcoming' && <span>{index + 1}</span>}
                </div>

                {/* Stage Label */}
                <div className="mt-3 text-center">
                  <div
                    className={`
                      font-mono text-xs font-bold tracking-wider uppercase
                      ${status === 'completed' ? 'text-[#4ADE80]' : ''}
                      ${status === 'current' ? 'text-[#22D3EE]' : ''}
                      ${status === 'upcoming' ? 'text-gray-500' : ''}
                    `}
                  >
                    {stage.label}
                  </div>
                  {stage.questionRange && (
                    <div className="text-[10px] text-gray-600 font-mono mt-1">
                      {stage.questionRange}
                    </div>
                  )}
                </div>
              </div>

              {/* Connector Line */}
              {!isLast && (
                <div
                  className={`
                    flex-1 h-0.5 mx-4 transition-all duration-300
                    ${status === 'completed' ? 'bg-[#4ADE80]' : 'bg-gray-600'}
                  `}
                  style={{ marginBottom: '3rem' }}
                />
              )}
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes ping {
          75%, 100% {
            transform: scale(1.5);
            opacity: 0;
          }
        }
        .animate-ping {
          animation: ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
      `}</style>
    </div>
  );
};
