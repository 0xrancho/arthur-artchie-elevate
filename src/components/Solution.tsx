import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Solution = () => {
  const [isExpanded, setIsExpanded] = useState(false);

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
              Opportunity Intelligence Architecture
            </h2>
            <p className="text-xl text-slate leading-relaxed mb-4">
              We help you synthesize Opportunity Intelligence from enriched market data and agency-owned relationship signals, providing a data rich environment that makes the client context retrievable, actionable, and highly collaborative.
            </p>
            <p className="text-xl text-slate leading-relaxed mb-4">
              <span className="font-bold text-navy">More knowledge → Stronger pipeline → Faster growth.</span>
            </p>
            <p className="text-xl text-slate leading-relaxed mb-4">
              We believe Opportunity Intelligence will replace the modern CRM for trust-based professional services. The consulting world is changing rapidly, but the strength of your relationships—driven by service excellence, not nepotism—remains your greatest differentiator.
            </p>
            <p className="text-xl text-slate leading-relaxed font-semibold">
              How will you leverage it?
            </p>
          </div>

          {/* Right: Console Taxonomy */}
          <div className="bg-[#0F172A] p-6 rounded-lg border-2 border-[#334155]" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)' }}>
            <pre className="font-mono text-[11px] text-cyan-400 leading-relaxed overflow-x-auto pl-8">
{`┌─────────────────────────────────────────────────────────┐
│              OPPORTUNITY INTELLIGENCE (OI)              │
│                                                         │
│  Auto-generated BANT from synthesis of signals:        │
│  • Authority (who are the buyers, the champions)        │
│  • Budget (ROI indicators, est. spend, or explicit)     │
│  • Need (pain points + strategic goals)                 │
│  • Timeline (buying signals, urgency indicators, etc.)  │
└────────────────────┬────────────────────────────────────┘
                     │
                     │ SYNTHESIZED FROM:
                     │
          ┌──────────┴──────────┐
          │                     │
          ▼                     ▼
   ┌─────────────┐      ┌─────────────────┐
   │   MARKET    │      │    CONTACT      │
   │   SIGNAL    │      │     SIGNAL      │
   ├─────────────┤      ├─────────────────┤
   │ • M&A/funding│     │ • Network depth │
   │ • Hiring/    │     │   (who knows    │
   │   firing     │     │   whom)         │
   │ • Industry   │     │ • Shared history│
   │   trends     │     │ • Pain points   │
   │ • RFPs       │     │   (from convos) │
   │ • PR/media   │     │ • Motivations   │
   │ • Tech stack │     │ • Preferences   │
   │ • Case studies│    │ • Decision      │
   │ • ICP analysis│    │   patterns      │
   │ • Growth     │     │ • Trust paths   │
   │   strategy   │     │ • Expansion     │
   │              │     │   signals       │
   └─────────────┘     └─────────────────┘
        │                       │
        │                       │
   ENRICHMENT             HUMAN-TO-HUMAN
   (automated)            RELATIONSHIP
                         (agency-captured)`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
