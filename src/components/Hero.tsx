import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onOpenForm: (source: 'general' | 'prototype' | 'revenue') => void;
}

export const Hero = ({ onOpenForm }: HeroProps) => {
  return (
    <section className="bg-navy relative overflow-hidden py-8">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(248, 246, 242, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="max-w-4xl pt-[15px] pb-4">
          <span className="inline-block w-fit font-mono text-xs text-cream/80 mb-4 px-3 py-1 bg-cream/10 rounded-full border border-cream/20">
            1876 – Present
          </span>
          <h1 className="text-5xl md:text-[56px] font-bold leading-[1.2] mb-2 text-cream">
            Revenue Grows on Trust
          </h1>
          <div className="mb-6">
            <span className="h-1 bg-terracotta opacity-50 block" style={{ width: '460px' }} />
          </div>

          <p className="text-2xl text-cream/95 mb-4 max-w-[800px] leading-relaxed">
            Custom solution firms differentiate through client-level trust.
          </p>

          <p className="text-xl text-cream/90 mb-8 max-w-[800px] leading-relaxed">
            We reveal undermonetized accounts, vulnerable relationships, and high-potential prospects. <span className="font-semibold text-cream">5 weeks. 5x ROI in 1 report, or you don't pay.</span>
          </p>

          <div className="mb-12">
            <Button
              size="lg"
              className="bg-terracotta hover:bg-[#C0654E] text-cream font-semibold px-8 py-4 text-base rounded-md transition-all hover:-translate-y-0.5"
              style={{ boxShadow: '0 4px 16px rgba(212, 116, 94, 0.3)' }}
              onClick={() => onOpenForm('general')}
            >
              Schedule Discovery Call
            </Button>
          </div>
        </div>

        {/* Two-Panel Demo */}
        <div className="mt-6 mb-12 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
          {/* LEFT PANEL: YOUR DATA */}
          <div className="relative">
            <div className="absolute -top-3 left-6 bg-navy px-4 py-1.5 rounded border border-terracotta/30 z-10">
              <span className="font-mono text-xs font-semibold text-terracotta tracking-wide">YOUR DATA</span>
            </div>
            <div className="bg-[#F5F5F5] p-6 rounded-lg border-2 border-[#D1D5DB] h-[550px] overflow-y-auto custom-scrollbar" style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)' }}>

              {/* Component 1: CRM Export */}
              <div className="mb-6 bg-white p-4 rounded border border-gray-300">
                <div className="text-xs font-mono text-gray-500 mb-2">CRM_Export.csv</div>
                <div className="overflow-x-auto -mx-4 px-4">
                  <table className="w-full text-sm font-mono min-w-[500px]">
                    <thead className="border-b-2 border-gray-300">
                      <tr>
                        <th className="text-left pb-2 pr-4">Account Name</th>
                        <th className="text-left pb-2 pr-4">Annual Revenue</th>
                        <th className="text-left pb-2 pr-4">Tenure</th>
                        <th className="text-left pb-2">Contacts</th>
                      </tr>
                    </thead>
                    <tbody className="text-gray-700">
                      <tr className="border-b border-gray-200">
                        <td className="py-2 pr-4">PharmaCorp</td>
                        <td className="py-2 pr-4">$180,000</td>
                        <td className="py-2 pr-4">3 yrs</td>
                        <td className="py-2">3</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 pr-4">Cunnings Inc.</td>
                        <td className="py-2 pr-4">$450,000</td>
                        <td className="py-2 pr-4">5 yrs</td>
                        <td className="py-2">2</td>
                      </tr>
                      <tr className="border-b border-gray-200">
                        <td className="py-2 pr-4">DefenseInc</td>
                        <td className="py-2 pr-4">$820,000</td>
                        <td className="py-2 pr-4">2 yrs</td>
                        <td className="py-2">4</td>
                      </tr>
                      <tr>
                        <td className="py-2 pr-4">EnergyCo</td>
                        <td className="py-2 pr-4">$220,000</td>
                        <td className="py-2 pr-4">4 yrs</td>
                        <td className="py-2">5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Component 2: Assessment Data */}
              <div className="mb-6 bg-white p-4 rounded border border-gray-300">
                <div className="text-xs font-mono text-gray-500 mb-3">Assessment_Data.xlsx</div>
                <div className="font-mono text-sm space-y-2 text-gray-700">
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="font-semibold">ACCOUNT:</span>
                    <span>PharmaCorp</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="font-semibold">Risk Delegated:</span>
                    <span>$8M</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="font-semibold">Annual Spend:</span>
                    <span>$180K</span>
                  </div>
                  <div className="flex justify-between border-b border-gray-200 pb-1">
                    <span className="font-semibold">Strategic Contacts:</span>
                    <span>10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Avg Engagement Signals:</span>
                    <span>4.2/year</span>
                  </div>
                </div>
              </div>

              {/* Component 3: Scattered Notes */}
              <div className="bg-[#FFFBEB] p-4 rounded border border-[#FCD34D]">
                <div className="text-xs font-mono text-amber-700 mb-2">notes.txt</div>
                <div className="font-mono text-sm space-y-2 text-gray-600">
                  <p className="italic">"CTO mentioned mobile app project..."</p>
                  <p className="italic">"VP Eng refers us constantly..."</p>
                  <p className="italic">"Only working with engineering, not product..."</p>
                </div>
              </div>

              <div className="mt-4 text-center text-xs text-gray-500 font-semibold">
                Disconnected signals, no synthesis
              </div>
            </div>
          </div>

          {/* ARROW */}
          <div className="flex flex-col justify-center items-center px-4 py-8 lg:py-0">
            <div className="bg-terracotta rounded-full w-16 h-16 flex items-center justify-center animate-pulse-custom mb-2">
              <ArrowRight className="text-cream w-8 h-8" />
            </div>
            <span className="font-mono text-sm font-bold text-cream">5 weeks</span>
          </div>

          {/* RIGHT PANEL: OUR GROWTH SYSTEM */}
          <div className="relative">
            <div className="absolute -top-3 left-6 bg-navy px-4 py-1.5 rounded border border-green-500/30 z-10">
              <span className="font-mono text-xs font-semibold text-green-400 tracking-wide">OUR GROWTH SYSTEM</span>
            </div>
            <div className="bg-[#0F172A] p-6 rounded-lg border-2 border-[#334155] h-[550px] overflow-y-auto custom-scrollbar custom-scrollbar-slate" style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)' }}>

              {/* PharmaCorp Node - Cyan */}
              <div className="mb-6 bg-[#1E293B] border-2 border-[#00D9FF] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-4 h-4 bg-[#00D9FF] rounded-full"></div>
                  <div className="text-[#00D9FF] font-bold text-lg">PharmaCorp</div>
                </div>
                <div className="font-mono text-xs space-y-1 text-gray-300">
                  <div>Trust Score: <span className="text-[#00D9FF] font-bold">8.2</span></div>
                  <div>Revenue Gap: <span className="text-[#FFD700]">$320K</span></div>
                  <div>RRP: <span className="text-[#A855F7]">13.3</span> (High delegation)</div>
                  <div>RR: <span className="text-[#FF8C00]">2.8</span> (Moderate engagement)</div>
                </div>
                <div className="mt-3 pl-4 border-l-2 border-[#00D9FF]/50">
                  <div className="text-[#00D9FF] font-semibold text-sm mb-2">→ [EXPAND]</div>
                  <div className="font-mono text-xs space-y-1 text-gray-400">
                    <div>├─ 12 warm intro paths</div>
                    <div>├─ VP Product (mobile app opp)</div>
                    <div>└─ Head of Data (platform rebuild)</div>
                  </div>
                  <div className="mt-2 text-xs text-gray-400">Network: 10 strategic contacts, know 3</div>
                </div>
              </div>

              {/* Cunnings Inc. Node - Magenta */}
              <div className="mb-6 bg-[#1E293B] border-2 border-[#FF006E] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-4 h-4 bg-[#FF006E] rounded-full"></div>
                  <div className="text-[#FF006E] font-bold text-lg">Cunnings Inc.</div>
                </div>
                <div className="font-mono text-xs space-y-1 text-gray-300">
                  <div>Trust Score: <span className="text-[#FF006E] font-bold">2.1</span></div>
                  <div>Revenue at risk: <span className="text-[#FF006E]">$940,000</span></div>
                  <div>Churn Risk: <span className="text-[#FF006E] font-bold">HIGH</span></div>
                  <div>RRP: <span className="text-[#FF8C00]">3.2</span> (Low delegation)</div>
                  <div>RR: <span className="text-[#FF8C00]">0.8</span> (Transactional)</div>
                </div>
                <div className="mt-3 pl-4 border-l-2 border-[#FF006E]/50">
                  <div className="text-[#FF006E] font-semibold text-sm mb-2">→ [PROTECT]</div>
                  <div className="font-mono text-xs space-y-1 text-gray-400">
                    <div>├─ Relationship intervention</div>
                    <div>└─ Stakeholder expansion needed</div>
                  </div>
                </div>
              </div>

              {/* DefenseInc Node - Purple */}
              <div className="bg-[#1E293B] border-2 border-[#A855F7] rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-4 h-4 bg-[#A855F7] rounded-full"></div>
                  <div className="text-[#A855F7] font-bold text-lg">DefenseInc</div>
                </div>
                <div className="font-mono text-xs space-y-1 text-gray-300">
                  <div>Trust Score: <span className="text-[#A855F7] font-bold">9.1</span></div>
                  <div>Revenue Gap: <span className="text-[#FFD700]">$34,000</span></div>
                  <div>RRP: <span className="text-[#A855F7]">20</span> (High delegation)</div>
                  <div>RR: <span className="text-[#A855F7]">10</span> (High engagement)</div>
                </div>
                <div className="mt-3 pl-4 border-l-2 border-[#A855F7]/50">
                  <div className="text-[#A855F7] font-semibold text-sm mb-2">→ [ACQUIRE]</div>
                  <div className="font-mono text-xs space-y-1 text-gray-400">
                    <div>├─ 247 lookalike companies</div>
                    <div>└─ 67 warm intro paths available</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center text-xs text-[#00D9FF] font-semibold">
                Intelligence → Opportunity → Actionable pathways
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
