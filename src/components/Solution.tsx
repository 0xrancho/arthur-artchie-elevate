import { useState } from "react";
import { ChevronDown, ArrowDown } from "lucide-react";
import pythonLogo from "@/assets/python_logo_icon_168886.png";
import clayLogo from "@/assets/clay2.png";
import openaiLogo from "@/assets/openai.png";

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

          {/* Right: Vertical S-Pattern Flow Visualization */}
          <div className="flex flex-col items-center gap-6 p-6">
            {/* Your Data - Top */}
            <div className="flex flex-col items-center">
              <div className="w-40 h-40 rounded-lg bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center border-2 border-slate-300 relative overflow-hidden" style={{
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.1)',
              }}>
                {/* Scattered data visualization */}
                <div className="absolute inset-0 p-3 font-mono text-xs text-slate-500 leading-tight opacity-70">
                  <div className="transform rotate-12">CRM.csv</div>
                  <div className="transform -rotate-6 mt-2">notes.txt</div>
                  <div className="transform rotate-3 mt-2">jira_ticket</div>
                  <div className="transform -rotate-12 mt-2">email.msg</div>
                  <div className="transform rotate-6 mt-2">slack.json</div>
                  <div className="absolute bottom-4 right-4 text-2xl">📊</div>
                  <div className="absolute top-4 left-4 text-xl">📧</div>
                  <div className="absolute top-6 right-6 text-xl">💬</div>
                </div>
              </div>
              <p className="text-xs font-mono text-slate mt-2 text-center font-semibold">Your Data</p>
            </div>

            {/* Curved Arrow Down-Right */}
            <svg width="60" height="60" viewBox="0 0 60 60" className="text-terracotta">
              <path d="M 30 5 Q 45 20, 55 35" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead)" />
              <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                </marker>
              </defs>
            </svg>

            {/* Processing Engines - Middle (shifted right) */}
            <div className="flex flex-col items-center ml-20">
              <div className="bg-gradient-to-br from-white to-gray-50 p-5 rounded-lg border-2 border-navy/20" style={{
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.05)',
              }}>
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 rounded-md overflow-hidden bg-white p-3 flex items-center justify-center" style={{
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), inset 0 -1px 2px rgba(0, 0, 0, 0.05)',
                  }}>
                    <img src={pythonLogo} alt="Python" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-20 h-20 rounded-md overflow-hidden bg-white p-3 flex items-center justify-center" style={{
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), inset 0 -1px 2px rgba(0, 0, 0, 0.05)',
                  }}>
                    <img src={clayLogo} alt="Clay" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-20 h-20 rounded-md overflow-hidden bg-white p-3 flex items-center justify-center" style={{
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15), inset 0 -1px 2px rgba(0, 0, 0, 0.05)',
                  }}>
                    <img src={openaiLogo} alt="OpenAI" className="w-full h-full object-contain" />
                  </div>
                </div>
              </div>
              <p className="text-xs font-mono text-slate mt-2 text-center font-semibold">Processing Engines</p>
            </div>

            {/* Curved Arrow Down-Left */}
            <svg width="60" height="60" viewBox="0 0 60 60" className="text-terracotta">
              <path d="M 55 5 Q 30 20, 15 35" fill="none" stroke="currentColor" strokeWidth="2" markerEnd="url(#arrowhead2)" />
              <defs>
                <marker id="arrowhead2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
                  <polygon points="0 0, 10 3, 0 6" fill="currentColor" />
                </marker>
              </defs>
            </svg>

            {/* Proprietary OI - Bottom (shifted left) */}
            <div className="flex flex-col items-center mr-20">
              <div className="w-40 h-40 rounded-lg bg-gradient-to-br from-amber-50 to-amber-100 flex items-center justify-center border-2 border-gold" style={{
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2), inset 0 -2px 4px rgba(0, 0, 0, 0.1)',
              }}>
                <div className="text-center">
                  <div className="text-6xl mb-2">📜</div>
                  <div className="text-4xl">🔒</div>
                </div>
              </div>
              <p className="text-xs font-mono text-slate mt-2 text-center font-semibold">Proprietary OI</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
