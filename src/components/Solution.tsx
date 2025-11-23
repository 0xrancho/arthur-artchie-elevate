export const Solution = () => {

  return (
    <section id="solution" className="py-24 bg-card">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-6">
          <span className="font-mono text-sm text-terracotta font-semibold uppercase tracking-wider">Our Solution</span>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left: Text Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-[42px] font-bold leading-[1.2] mb-6">
              Growth Intelligence for Trust-Based Firms
            </h2>
            <p className="text-xl text-slate leading-relaxed mb-4">
              A data analysis service that quantifies client trust, identifies hidden revenue opportunities, and generates campaign-ready growth plans.
            </p>
            <p className="text-xl text-slate leading-relaxed mb-4">
              We assess relationship depth across your portfolio, analyze your CRM data, and enrich with strategic contact and market intelligence—delivered as high-confidence intent signals across all accounts AND contacts, authority and market gaps, high-ROI growth motions, and new acquisition targets with warm intro paths.
            </p>
          </div>

          {/* Right: Analysis Hub Visualization */}
          <div className="relative w-full h-[800px] flex items-center justify-center">
            <svg viewBox="0 0 600 800" className="w-full max-w-3xl h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Gradients */}
                <linearGradient id="terracotta-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#D4745E" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#B85C4A" stopOpacity="0.9" />
                </linearGradient>
                <radialGradient id="glow-blue" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#4A90E2" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#4A90E2" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="glow-terracotta" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#D4745E" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#D4745E" stopOpacity="0" />
                </radialGradient>

                {/* Filters for depth */}
                <filter id="soft-shadow">
                  <feGaussianBlur in="SourceAlpha" stdDeviation="4" />
                  <feOffset dx="0" dy="4" result="offsetblur" />
                  <feComponentTransfer>
                    <feFuncA type="linear" slope="0.15" />
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>

                {/* Arrow marker */}
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#5A6C7D" />
                </marker>
                <marker id="arrowhead-terracotta" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="#D4745E" />
                </marker>
              </defs>

              {/* INPUT LAYER - Top */}
              <g className="input-layer">
                {/* Assessment Node */}
                <g transform="translate(200, 100)">
                  <text x="0" y="-55" textAnchor="middle" fill="#5A6C7D" fontSize="11" fontWeight="600" fontFamily="IBM Plex Mono, monospace">Assessment</text>
                  <circle cx="0" cy="0" r="40" fill="#5A6C7D" opacity="0.9" filter="url(#soft-shadow)" />
                  <circle cx="0" cy="0" r="39" fill="none" stroke="#F8F6F2" strokeWidth="2" opacity="0.3" />
                  {/* Checklist icon */}
                  <rect x="-10" y="-12" width="20" height="24" fill="none" stroke="#F8F6F2" strokeWidth="2" rx="2" />
                  <line x1="-6" y1="-6" x2="-2" y2="-2" stroke="#F8F6F2" strokeWidth="2" />
                  <line x1="-2" y1="-2" x2="6" y2="-10" stroke="#F8F6F2" strokeWidth="2" />
                  <line x1="-6" y1="2" x2="6" y2="2" stroke="#F8F6F2" strokeWidth="1.5" opacity="0.5" />
                  <line x1="-6" y1="7" x2="6" y2="7" stroke="#F8F6F2" strokeWidth="1.5" opacity="0.5" />
                </g>

                {/* Sales Data Node */}
                <g transform="translate(400, 100)">
                  <text x="0" y="-55" textAnchor="middle" fill="#5A6C7D" fontSize="11" fontWeight="600" fontFamily="IBM Plex Mono, monospace">Sales Data</text>
                  <circle cx="0" cy="0" r="40" fill="#5A6C7D" opacity="0.9" filter="url(#soft-shadow)" />
                  <circle cx="0" cy="0" r="39" fill="none" stroke="#F8F6F2" strokeWidth="2" opacity="0.3" />
                  {/* Database icon */}
                  <ellipse cx="0" cy="-8" rx="12" ry="4" fill="none" stroke="#F8F6F2" strokeWidth="2" />
                  <path d="M -12 -8 L -12 0 C -12 2.2 -6 4 0 4 C 6 4 12 2.2 12 0 L 12 -8" fill="none" stroke="#F8F6F2" strokeWidth="2" />
                  <path d="M -12 0 L -12 8 C -12 10.2 -6 12 0 12 C 6 12 12 10.2 12 8 L 12 0" fill="none" stroke="#F8F6F2" strokeWidth="2" />
                </g>
              </g>

              {/* Dotted connection lines from INPUTS to ANALYSIS */}
              <path d="M 220 140 L 280 300" stroke="#5A6C7D" strokeWidth="2" fill="none" opacity="0.5" strokeDasharray="5,5" />
              <path d="M 380 140 L 320 300" stroke="#5A6C7D" strokeWidth="2" fill="none" opacity="0.5" strokeDasharray="5,5" />

              {/* PROCESSING LAYER - Analysis Hub */}
              <g className="processing-layer">
                <g transform="translate(300, 350)">
                  {/* Outer glow */}
                  <circle cx="0" cy="0" r="90" fill="url(#glow-terracotta)" className="animate-pulse" style={{ animationDuration: '4s' }} />

                  {/* Main hub circle */}
                  <circle cx="0" cy="0" r="70" fill="url(#terracotta-gradient)" filter="url(#soft-shadow)" />
                  <circle cx="0" cy="0" r="69" fill="none" stroke="#F8F6F2" strokeWidth="1" opacity="0.4" />

                  {/* Inner network visualization */}
                  <g opacity="0.6">
                    {/* Connection nodes */}
                    <circle cx="-30" cy="-20" r="4" fill="#F8F6F2" className="animate-pulse" style={{ animationDuration: '2s' }} />
                    <circle cx="25" cy="-25" r="4" fill="#F8F6F2" className="animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.3s' }} />
                    <circle cx="-20" cy="20" r="4" fill="#F8F6F2" className="animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.6s' }} />
                    <circle cx="30" cy="15" r="4" fill="#F8F6F2" className="animate-pulse" style={{ animationDuration: '2s', animationDelay: '0.9s' }} />
                    <circle cx="0" cy="-30" r="4" fill="#F8F6F2" className="animate-pulse" style={{ animationDuration: '2s', animationDelay: '1.2s' }} />
                    <circle cx="0" cy="25" r="4" fill="#F8F6F2" className="animate-pulse" style={{ animationDuration: '2s', animationDelay: '1.5s' }} />

                    {/* Connection lines */}
                    <line x1="-30" y1="-20" x2="25" y2="-25" stroke="#F8F6F2" strokeWidth="1" opacity="0.4" />
                    <line x1="25" y1="-25" x2="30" y2="15" stroke="#F8F6F2" strokeWidth="1" opacity="0.4" />
                    <line x1="-30" y1="-20" x2="-20" y2="20" stroke="#F8F6F2" strokeWidth="1" opacity="0.4" />
                    <line x1="-20" y1="20" x2="30" y2="15" stroke="#F8F6F2" strokeWidth="1" opacity="0.4" />
                    <line x1="0" y1="-30" x2="0" y2="25" stroke="#F8F6F2" strokeWidth="1" opacity="0.4" />
                  </g>

                  <text x="0" y="5" textAnchor="middle" fill="#F8F6F2" fontSize="16" fontWeight="700" fontFamily="IBM Plex Mono, monospace">ANALYSIS</text>
                </g>
              </g>

              {/* OUTPUT LAYER - Hub spoke pattern */}
              <g className="output-layer">
                {/* Connection lines from ANALYSIS to each OUTPUT */}
                <line x1="300" y1="350" x2="150" y2="450" stroke="#D4745E" strokeWidth="2" opacity="0.6" />
                <line x1="300" y1="350" x2="450" y2="450" stroke="#D4745E" strokeWidth="2" opacity="0.6" />
                <line x1="300" y1="350" x2="370" y2="560" stroke="#D4745E" strokeWidth="2" opacity="0.6" />
                <line x1="300" y1="350" x2="200" y2="620" stroke="#D4745E" strokeWidth="2" opacity="0.6" />

                {/* Trust Scores (Left) */}
                <g transform="translate(150, 450)">
                  <circle cx="0" cy="0" r="38" fill="#4A90E2" opacity="0.9" filter="url(#soft-shadow)" />
                  {/* Shield icon */}
                  <path d="M 0 -14 L 8 -10 L 8 -2 C 8 4 4 8 0 11 C -4 8 -8 4 -8 -2 L -8 -10 Z" fill="none" stroke="#F8F6F2" strokeWidth="2.5" />
                  <path d="M -5 -2 L -2 2 L 5 -6" stroke="#F8F6F2" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                  <text x="0" y="53" textAnchor="middle" fill="#4A90E2" fontSize="11" fontWeight="600" fontFamily="IBM Plex Mono, monospace">Trust Scores</text>
                </g>

                {/* Growth Motions (Right) */}
                <g transform="translate(450, 450)">
                  <circle cx="0" cy="0" r="38" fill="#9b87f5" opacity="0.9" filter="url(#soft-shadow)" />
                  {/* Gear icon */}
                  <circle cx="0" cy="0" r="8" fill="none" stroke="#F8F6F2" strokeWidth="2.5" />
                  <circle cx="0" cy="0" r="4" fill="none" stroke="#F8F6F2" strokeWidth="2" />
                  <rect x="-2" y="-12" width="4" height="5" fill="#F8F6F2" />
                  <rect x="-2" y="7" width="4" height="5" fill="#F8F6F2" />
                  <rect x="-12" y="-2" width="5" height="4" fill="#F8F6F2" />
                  <rect x="7" y="-2" width="5" height="4" fill="#F8F6F2" />
                  <text x="0" y="53" textAnchor="middle" fill="#9b87f5" fontSize="11" fontWeight="600" fontFamily="IBM Plex Mono, monospace">Growth Motions</text>
                </g>

                {/* New Targets (Lower right) */}
                <g transform="translate(370, 560)">
                  <circle cx="0" cy="0" r="38" fill="#C4A35A" opacity="0.9" filter="url(#soft-shadow)" />
                  {/* Target icon */}
                  <circle cx="0" cy="0" r="12" fill="none" stroke="#F8F6F2" strokeWidth="2.5" />
                  <circle cx="0" cy="0" r="7" fill="none" stroke="#F8F6F2" strokeWidth="2.5" />
                  <circle cx="0" cy="0" r="3" fill="#F8F6F2" />
                  <text x="0" y="53" textAnchor="middle" fill="#C4A35A" fontSize="11" fontWeight="600" fontFamily="IBM Plex Mono, monospace">New Targets</text>
                </g>

                {/* Revenue Gaps (Lower left) */}
                <g transform="translate(200, 620)">
                  <circle cx="0" cy="0" r="38" fill="#10b981" opacity="0.9" filter="url(#soft-shadow)" />
                  {/* Upward arrows icon */}
                  <path d="M -8 4 L -8 -5 L -11 -5 L -5 -12 L 1 -5 L -2 -5 L -2 4 Z" fill="#F8F6F2" />
                  <path d="M 3 7 L 3 0 L 1 0 L 6 -5 L 11 0 L 9 0 L 9 7 Z" fill="#F8F6F2" opacity="0.7" />
                  <text x="0" y="53" textAnchor="middle" fill="#10b981" fontSize="11" fontWeight="600" fontFamily="IBM Plex Mono, monospace">Revenue Gaps</text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>

    </section>
  );
};
