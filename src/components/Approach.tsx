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
          We build Opportunity Intelligence systems for custom solution firms—in three phases, or start wherever makes sense for you.
        </p>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left: Animated Concentric Half-Circles */}
          <div className="flex items-center justify-center py-12">
            <svg width="400" height="400" viewBox="0 0 400 400" className="w-full max-w-md">
              {/* Outer circle (GROW) - Gold - 90% */}
              <g>
                <path
                  d="M 200 30 A 170 170 0 1 1 47 117"
                  fill="none"
                  stroke="#C4A35A"
                  strokeWidth="3"
                  strokeLinecap="round"
                  opacity="0.8"
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(196, 163, 90, 0.6))',
                    animation: 'rotateRight 26s linear infinite',
                    transformOrigin: '200px 200px'
                  }}
                />
                <text x="200" y="60" textAnchor="middle" fill="#C4A35A" fontSize="16" fontWeight="bold" fontFamily="IBM Plex Mono, monospace">
                  GROW
                </text>
              </g>

              {/* Middle circle (BUILD) - Terracotta - 85% */}
              <g>
                <path
                  d="M 200 90 A 110 110 0 1 1 109 257"
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
                <text x="200" y="125" textAnchor="middle" fill="#D4745E" fontSize="14" fontWeight="bold" fontFamily="IBM Plex Mono, monospace">
                  BUILD
                </text>
                <text x="200" y="143" textAnchor="middle" fill="#D4745E" fontSize="11" fontFamily="IBM Plex Mono, monospace" opacity="0.8">
                  6-9 weeks
                </text>
              </g>

              {/* Inner circle (AUDIT) - White - 75% (centered at 200,200) */}
              <g>
                <path
                  d="M 200 150 A 50 50 0 1 1 150 200"
                  fill="none"
                  stroke="#F8F6F2"
                  strokeWidth="3"
                  strokeLinecap="round"
                  style={{
                    filter: 'drop-shadow(0 0 8px rgba(248, 246, 242, 0.8))',
                    animation: 'rotateRight 13s linear infinite',
                    transformOrigin: '200px 200px'
                  }}
                />
                <text x="200" y="195" textAnchor="middle" fill="#F8F6F2" fontSize="12" fontWeight="bold" fontFamily="IBM Plex Mono, monospace">
                  AUDIT
                </text>
                <text x="200" y="210" textAnchor="middle" fill="#F8F6F2" fontSize="10" fontFamily="IBM Plex Mono, monospace" opacity="0.7">
                  2-3 weeks
                </text>
              </g>
            </svg>
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            {/* Revenue Operations */}
            <div className="flex gap-4 items-start">
              <svg width="32" height="32" viewBox="0 0 32 32" className="flex-shrink-0 mt-1">
                <circle cx="16" cy="16" r="14" fill="none" stroke="#D4745E" strokeWidth="2" opacity="0.3" />
                <circle cx="16" cy="16" r="10" fill="none" stroke="#D4745E" strokeWidth="2" opacity="0.5" />
                <circle cx="16" cy="16" r="6" fill="#D4745E" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-cream">
                  <span className="text-terracotta">R</span>evenue{" "}
                  <span className="text-terracotta">O</span>perations
                </h3>
                <p className="text-lg text-cream/90 leading-relaxed mb-2">
                  Understand your Risk and Reciprocity ROIs and how they project both client success and contract growth for trust-based firms.
                </p>
                <p className="text-sm font-mono text-cream/70">
                  Deliverable: Growth audit and forecasting method.
                </p>
              </div>
            </div>

            {/* Growth Enablement */}
            <div className="flex gap-4 items-start">
              <svg width="32" height="32" viewBox="0 0 32 32" className="flex-shrink-0 mt-1">
                <circle cx="16" cy="16" r="14" fill="none" stroke="#D4745E" strokeWidth="2" opacity="0.3" />
                <circle cx="16" cy="16" r="10" fill="none" stroke="#D4745E" strokeWidth="2" opacity="0.5" />
                <circle cx="16" cy="16" r="6" fill="#D4745E" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-cream">
                  <span className="text-terracotta">G</span>rowth{" "}
                  <span className="text-terracotta">E</span>nablement
                </h3>
                <p className="text-lg text-cream/90 leading-relaxed mb-2">
                  Surface buyer intent and market signals with automatic enrichment flows across the org. Never let context slip through the cracks again.
                </p>
                <p className="text-sm font-mono text-cream/70">
                  Deliverable: Your custom Opportunity Intelligence (OI) system and interface build out.
                </p>
              </div>
            </div>

            {/* Resources */}
            <div className="flex gap-4 items-start">
              <svg width="32" height="32" viewBox="0 0 32 32" className="flex-shrink-0 mt-1">
                <circle cx="16" cy="16" r="14" fill="none" stroke="#D4745E" strokeWidth="2" opacity="0.3" />
                <circle cx="16" cy="16" r="10" fill="none" stroke="#D4745E" strokeWidth="2" opacity="0.5" />
                <circle cx="16" cy="16" r="6" fill="#D4745E" />
              </svg>
              <div>
                <h3 className="text-2xl font-bold mb-2 text-cream">
                  <span className="text-terracotta">R</span>esources
                </h3>
                <p className="text-lg text-cream/90 leading-relaxed mb-2">
                  Own and customize the system. Partner with us to manage the agent orchestration infrastructure and strategic guidance.
                </p>
                <p className="text-sm font-mono text-cream/70">
                  Deliverable: Agent and knowledge base configuration module.
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
      `}</style>
    </section>
  );
};
