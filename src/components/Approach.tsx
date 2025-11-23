import { Button } from "@/components/ui/button";

interface ApproachProps {
  onOpenForm: (source: 'general' | 'prototype' | 'revenue') => void;
}

export const Approach = ({ onOpenForm }: ApproachProps) => {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(248, 246, 242, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(248, 246, 242, 0.3) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-6">
          <span className="font-mono text-sm text-terracotta font-semibold uppercase tracking-wider">Our Approach</span>
        </div>

        <h2 className="text-[42px] font-bold leading-[1.2] mb-4 text-cream">
          The ROGER Framework
        </h2>

        <p className="text-xl text-cream/95 leading-relaxed mb-12 max-w-[900px]">
          Four stages that transform relationship data into campaign-ready revenue opportunities.
        </p>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left: Animated Concentric Circles */}
          <div className="flex items-center justify-center py-12">
            <svg width="400" height="400" viewBox="0 0 400 400" className="w-full max-w-md">
              {/* Outer arc - Revenue - Gold */}
              <g>
                <path
                  d="M 200 50 A 150 150 0 1 1 90 290"
                  fill="none"
                  stroke="#C4A35A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.8"
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(196, 163, 90, 0.6))',
                    animation: 'rotateRight 30s linear infinite',
                    transformOrigin: '200px 200px'
                  }}
                />
                <text x="200" y="65" textAnchor="middle" fill="#C4A35A" fontSize="16" fontWeight="bold" fontFamily="IBM Plex Mono, monospace">
                  REVENUE
                </text>
              </g>

              {/* Middle arc - Intelligence - Terracotta */}
              <g>
                <path
                  d="M 200 100 A 100 100 0 1 1 120 260"
                  fill="none"
                  stroke="#D4745E"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.9"
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(212, 116, 94, 0.6))',
                    animation: 'rotateLeft 20s linear infinite',
                    transformOrigin: '200px 200px'
                  }}
                />
                <text x="200" y="115" textAnchor="middle" fill="#D4745E" fontSize="14" fontWeight="bold" fontFamily="IBM Plex Mono, monospace">
                  INTELLIGENCE
                </text>
              </g>

              {/* Inner arc - Trust - Cream/White */}
              <g>
                <path
                  d="M 200 150 A 50 50 0 1 1 150 200"
                  fill="none"
                  stroke="#F8F6F2"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(248, 246, 242, 0.8))',
                    animation: 'rotateRight 15s linear infinite',
                    transformOrigin: '200px 200px'
                  }}
                />
                <text x="200" y="205" textAnchor="middle" fill="#F8F6F2" fontSize="14" fontWeight="bold" fontFamily="IBM Plex Mono, monospace">
                  TRUST
                </text>
              </g>
            </svg>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            {/* Risk & Reciprocity */}
            <div className="flex gap-4 items-start">
              <svg width="32" height="32" viewBox="0 0 32 32" className="flex-shrink-0 mt-1">
                <circle cx="16" cy="16" r="14" fill="none" stroke="#D4745E" strokeWidth="2" opacity="0.3" />
                <circle cx="16" cy="16" r="10" fill="none" stroke="#D4745E" strokeWidth="2" opacity="0.5" />
                <circle cx="16" cy="16" r="6" fill="#D4745E" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-cream">
                  <span className="text-terracotta">R</span>isk & Reciprocity
                </h3>
                <p className="text-lg text-cream/90 leading-relaxed">
                  Trust assessment across your portfolio—quantifies relationship depth for every account.
                </p>
              </div>
            </div>

            {/* Opportunity Intelligence */}
            <div className="flex gap-4 items-start">
              <svg width="32" height="32" viewBox="0 0 32 32" className="flex-shrink-0 mt-1">
                <circle cx="16" cy="16" r="14" fill="none" stroke="#D4745E" strokeWidth="2" opacity="0.3" />
                <circle cx="16" cy="16" r="10" fill="none" stroke="#D4745E" strokeWidth="2" opacity="0.5" />
                <circle cx="16" cy="16" r="6" fill="#D4745E" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-cream">
                  <span className="text-terracotta">O</span>pportunity Intelligence
                </h3>
                <p className="text-lg text-cream/90 leading-relaxed">
                  Synthesis of trust data with CRM analysis—reveals undermonetized accounts and vulnerable relationships.
                </p>
              </div>
            </div>

            {/* Growth Enrichment */}
            <div className="flex gap-4 items-start">
              <svg width="32" height="32" viewBox="0 0 32 32" className="flex-shrink-0 mt-1">
                <circle cx="16" cy="16" r="14" fill="none" stroke="#D4745E" strokeWidth="2" opacity="0.3" />
                <circle cx="16" cy="16" r="10" fill="none" stroke="#D4745E" strokeWidth="2" opacity="0.5" />
                <circle cx="16" cy="16" r="6" fill="#D4745E" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-cream">
                  <span className="text-terracotta">G</span>rowth <span className="text-terracotta">E</span>nrichment
                </h3>
                <p className="text-lg text-cream/90 leading-relaxed">
                  Contact mapping and lookalike targeting—delivers 50-100 high-conversion expansion contacts plus 200+ prospect companies with intro pathways.
                </p>
              </div>
            </div>

            {/* Revenue Systems */}
            <div className="flex gap-4 items-start">
              <svg width="32" height="32" viewBox="0 0 32 32" className="flex-shrink-0 mt-1">
                <circle cx="16" cy="16" r="14" fill="none" stroke="#D4745E" strokeWidth="2" opacity="0.3" />
                <circle cx="16" cy="16" r="10" fill="none" stroke="#D4745E" strokeWidth="2" opacity="0.5" />
                <circle cx="16" cy="16" r="6" fill="#D4745E" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-cream">
                  <span className="text-terracotta">R</span>evenue Systems
                </h3>
                <p className="text-lg text-cream/90 leading-relaxed">
                  Campaign-ready playbooks with talk tracks and ROI projections—optional ongoing partnership for institutional adoption and system integration.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Callout */}
        <div className="flex justify-center">
          <Button
            size="lg"
            className="bg-terracotta hover:bg-[#C0654E] text-cream font-semibold px-8 py-4 text-base rounded-md transition-all hover:-translate-y-0.5"
            style={{ boxShadow: '0 4px 16px rgba(212, 116, 94, 0.3)' }}
            onClick={() => onOpenForm('prototype')}
          >
            👋 Ask about our killer prototypes!
          </Button>
        </div>
      </div>

      <style>{`
        @keyframes rotateRight {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes rotateLeft {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 1;
          }
        }
      `}</style>
    </section>
  );
};
