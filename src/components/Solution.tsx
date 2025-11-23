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
              Growth Intelligence for Trust-Based Firms
            </h2>
            <p className="text-xl text-slate leading-relaxed mb-4">
              A data analysis service that quantifies client trust, identifies hidden revenue opportunities, and generates campaign-ready growth plans.
            </p>
            <p className="text-xl text-slate leading-relaxed mb-4">
              We assess relationship depth across your portfolio, analyze your CRM data, and enrich with strategic market intelligence—delivered as expansion and retention playbook, relationship alerts, and a warm prospect list.
            </p>
          </div>

          {/* Right: Flow Illustration */}
          <div className="bg-[#0F172A] p-4 md:p-6 rounded-lg border-2 border-[#334155] overflow-hidden" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)' }}>
            <pre className="font-mono text-[9px] md:text-[11px] text-cyan-400 leading-relaxed overflow-x-auto">
{`┌─────────────────────────────────────────────┐
│           YOUR DATA (INPUT)                 │
├─────────────────────────────────────────────┤
│  • CRM exports (messy, fragmented)          │
│  • Notes (Slack, email, documents)          │
│  • Jira tickets                             │
│  • SharePoint files                         │
│  • Assessment data                          │
└──────────────────┬──────────────────────────┘
                   │
                   │ ⚡️ PROCESSING FLOW ⚡️
                   │
                   ▼
┌─────────────────────────────────────────────┐
│        ENRICHMENT ENGINES                   │
├─────────────────────────────────────────────┤
│                                             │
│  [Python]    Data analysis & synthesis      │
│              Trust scoring algorithms       │
│                                             │
│  [Clay]      Contact enrichment             │
│              Company intelligence           │
│                                             │
│  [Gemini]    AI analysis & insights         │
│              Pattern recognition            │
│                                             │
└──────────────────┬──────────────────────────┘
                   │
                   │ ⚡️ TRANSFORMATION ⚡️
                   │
                   ▼
┌─────────────────────────────────────────────┐
│   🔒 GROWTH ANALYSIS (PROPRIETARY)          │
├─────────────────────────────────────────────┤
│                                             │
│  [CONFIDENTIAL METHODOLOGY]                 │
│                                             │
│  • Trust quantification                     │
│  • Revenue gap identification               │
│  • Relationship mapping                     │
│  • Campaign synthesis                       │
│                                             │
│  ┌─────────────────────────────┐            │
│  │ ████████████████████████    │            │
│  │ ████████████████████████    │            │
│  │ ████████████████████████    │            │
│  └─────────────────────────────┘            │
│         [BLURRED FOR PRIVACY]               │
└─────────────────────────────────────────────┘`}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
};
