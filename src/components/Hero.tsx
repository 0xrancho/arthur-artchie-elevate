import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
            B2B custom solution firms differentiate through client-level trust.
          </p>

          <p className="text-xl text-cream/90 mb-8 max-w-[800px] leading-relaxed">
            We assess trust, enrich client data, and reveal undermonetized accounts, vulnerable relationships, and high-potential prospects. <span className="font-semibold text-cream">5 weeks. 5x ROI in 1 report, or you don't pay.</span>
          </p>

          <div className="mb-12 flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-terracotta hover:bg-[#C0654E] text-cream font-semibold px-8 py-4 text-base rounded-md transition-all hover:-translate-y-0.5"
              style={{ boxShadow: '0 4px 16px rgba(212, 116, 94, 0.3)' }}
              onClick={() => onOpenForm('general')}
            >
              Schedule Discovery Call
            </Button>
            <Link to="/assessment">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-cream text-cream bg-transparent hover:bg-cream hover:text-navy font-semibold px-8 py-4 text-base rounded-md transition-all w-full sm:w-auto"
              >
                Try the Growth Assessment
              </Button>
            </Link>
          </div>
        </div>

        {/* Two-Panel Demo: Before/After Trust */}
        <div className="mt-6 mb-12 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
          {/* LEFT PANEL: THE GUT FEEL */}
          <div className="relative">
            <div className="absolute -top-3 left-6 bg-navy px-4 py-1.5 rounded border border-terracotta/30 z-10">
              <span className="font-mono text-xs font-semibold text-terracotta tracking-wide">THE GUT FEEL</span>
            </div>
            <div className="bg-[#F8FAFC] p-6 rounded-lg border border-gray-200 h-[550px] overflow-y-auto custom-scrollbar" style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08), 0 1px 3px rgba(0, 0, 0, 0.06)', transform: 'rotate(-0.5deg)' }}>

              {/* Example 1: Acme Manufacturing */}
              <div className="mb-8 p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded flex items-center justify-center text-white font-bold text-lg">A</div>
                  <div className="text-lg font-semibold text-gray-900">Acme Manufacturing</div>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-3">
                  <div><span className="text-gray-500">LTV:</span> <span className="font-medium">$1.2M</span></div>
                  <div><span className="text-gray-500">Customer Since:</span> 2021</div>
                  <div><span className="text-gray-500">Active Contract:</span> <span className="font-medium">$280K/ytd</span></div>
                  <div><span className="text-gray-500">Open Deals:</span> 1</div>
                  <div><span className="text-gray-500">Contacts:</span> 5</div>
                </div>
                <div className="bg-gray-50 p-3 rounded text-sm text-gray-600 italic leading-relaxed">
                  "Good relationship" <br/>
                  "Should probably check in" <br/>
                  "Think Sarah still runs IT?" <br/>
                  "Probably room to grow?"
                </div>
              </div>

              {/* Example 2: Titan Healthcare */}
              <div className="mb-8 p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded flex items-center justify-center text-white font-bold text-lg">T</div>
                  <div className="text-lg font-semibold text-gray-900">Titan Healthcare</div>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-3">
                  <div><span className="text-gray-500">LTV:</span> <span className="font-medium">$1.8M</span></div>
                  <div><span className="text-gray-500">Customer Since:</span> 2019</div>
                  <div><span className="text-gray-500">Active Contract:</span> <span className="font-medium">$420K/yr</span></div>
                  <div><span className="text-gray-500">Open Deals:</span> 2</div>
                  <div><span className="text-gray-500">Contacts:</span> 4</div>
                </div>
                <div className="bg-gray-50 p-3 rounded text-sm text-gray-600 italic leading-relaxed">
                  "Love working with them" <br/>
                  "Marcus always takes my call" <br/>
                  "They've mentioned other projects" <br/>
                  "Should ask about Q2 budget?"
                </div>
              </div>

              {/* Example 3: Meridian Financial */}
              <div className="mb-4 p-5 bg-white rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-orange-500 rounded flex items-center justify-center text-white font-bold text-lg">M</div>
                  <div className="text-lg font-semibold text-gray-900">Meridian Financial</div>
                </div>
                <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm mb-3">
                  <div><span className="text-gray-500">LTV:</span> <span className="font-medium">$3.2M</span></div>
                  <div><span className="text-gray-500">Customer Since:</span> 2017</div>
                  <div><span className="text-gray-500">Active Contract:</span> <span className="font-medium">$650K/ytd</span></div>
                  <div><span className="text-gray-500">Open Deals:</span> 0</div>
                  <div><span className="text-gray-500">Contacts:</span> 3</div>
                </div>
                <div className="bg-gray-50 p-3 rounded text-sm text-gray-600 italic leading-relaxed">
                  "Biggest account" <br/>
                  "Been quiet lately" <br/>
                  "Renewal is... soon?" <br/>
                  "Fine, I think"
                </div>
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

          {/* RIGHT PANEL: TRUST INTELLIGENCE */}
          <div className="relative">
            <div className="absolute -top-3 left-6 bg-navy px-4 py-1.5 rounded border border-cyan-500/30 z-10">
              <span className="font-mono text-xs font-semibold text-cyan-400 tracking-wide">TRUST INTELLIGENCE</span>
            </div>
            <div className="bg-[#0F172A] p-6 rounded-lg border-2 border-[#334155] h-[550px] overflow-y-auto custom-scrollbar custom-scrollbar-slate" style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)' }}>

              {/* Example 1: Acme Manufacturing (RE-ENGAGE) */}
              <div className="mb-6 bg-[#1E293B] rounded-lg p-5" style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 -1px 0 rgba(255, 255, 255, 0.05)' }}>
                <div className="font-mono text-sm font-bold text-white tracking-wider mb-3">ACME MANUFACTURING</div>
                <div className="border-t border-gray-700 pt-3 mb-3"></div>

                <div className="font-mono text-xs space-y-2 text-gray-300 mb-3">
                  <div className="flex justify-between">
                    <span>Trust Score</span>
                    <span><span className="text-[#F472B6] font-bold">6.4</span> Embedded Utility</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trajectory</span>
                    <span className="text-[#F472B6]">↘ Commoditizing</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revenue Gap</span>
                    <span className="text-[#F59E0B]">$145K</span>
                  </div>
                </div>

                <div className="font-mono text-xs space-y-2 text-gray-300 mb-3">
                  <div className="flex justify-between">
                    <span>Coverage</span>
                    <span>34% (5 of 15 buyers known)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>New Contacts</span>
                    <span className="text-cyan-400">+10 mapped</span>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-3 mb-3"></div>

                <div className="font-mono text-xs space-y-1 text-gray-400 mb-3">
                  <div>⚠ Champion changed roles (4 mo ago)</div>
                  <div>⚠ 2 job posts mention "vendor consolidation"</div>
                </div>

                <div className="border-t border-gray-700 pt-3"></div>

                <div className="mt-3">
                  <div className="text-[#F472B6] font-mono font-semibold text-sm mb-1">→ [RE-ENGAGE]</div>
                  <div className="font-mono text-xs text-gray-400 pl-3 space-y-1">
                    <div>New VP Engineering — intro by Feb 15</div>
                    <div>Reconnect path: 3 warm intros available</div>
                  </div>
                </div>
              </div>

              {/* Example 2: Titan Healthcare (EXPAND) */}
              <div className="mb-6 bg-[#1E293B] rounded-lg p-5" style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 -1px 0 rgba(255, 255, 255, 0.05)' }}>
                <div className="font-mono text-sm font-bold text-white tracking-wider mb-3">TITAN HEALTHCARE</div>
                <div className="border-t border-gray-700 pt-3 mb-3"></div>

                <div className="font-mono text-xs space-y-2 text-gray-300 mb-3">
                  <div className="flex justify-between">
                    <span>Trust Score</span>
                    <span><span className="text-[#22D3EE] font-bold">8.1</span> Strategic Partner</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trajectory</span>
                    <span className="text-[#22D3EE]">↗ Strategic Growth</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revenue Gap</span>
                    <span className="text-[#F59E0B]">$340K</span>
                  </div>
                </div>

                <div className="font-mono text-xs space-y-2 text-gray-300 mb-3">
                  <div className="flex justify-between">
                    <span>Coverage</span>
                    <span>24% (4 of 17 buyers known)</span>
                  </div>
                  <div className="flex justify-between">
                    <span>New Contacts</span>
                    <span className="text-cyan-400">+13 mapped</span>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-3 mb-3"></div>

                <div className="font-mono text-xs space-y-1 text-gray-400 mb-3">
                  <div>✓ 3 champions actively referring</div>
                  <div>✓ Series C closed — $40M, expanding platform</div>
                  <div>✓ 4 open roles in your service area</div>
                </div>

                <div className="border-t border-gray-700 pt-3"></div>

                <div className="mt-3">
                  <div className="text-[#22D3EE] font-mono font-semibold text-sm mb-1">→ [EXPAND]</div>
                  <div className="font-mono text-xs text-gray-400 pl-3 space-y-1">
                    <div>VP Product + Head of Data — warm intro path exists</div>
                    <div>Budget cycle: Q2 planning starts in 6 weeks</div>
                  </div>
                </div>
              </div>

              {/* Example 3: Meridian Financial (PROTECT) */}
              <div className="mb-4 bg-[#1E293B] rounded-lg p-5" style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 -1px 0 rgba(255, 255, 255, 0.05)' }}>
                <div className="font-mono text-sm font-bold text-white tracking-wider mb-3">MERIDIAN FINANCIAL</div>
                <div className="border-t border-gray-700 pt-3 mb-3"></div>

                <div className="font-mono text-xs space-y-2 text-gray-300 mb-3">
                  <div className="flex justify-between">
                    <span>Trust Score</span>
                    <span><span className="text-[#EF4444] font-bold">3.2</span> Embedded Utility</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Trajectory</span>
                    <span className="text-[#EF4444]">↙ Decay</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Revenue at Risk</span>
                    <span className="text-[#EF4444]">$450K</span>
                  </div>
                </div>

                <div className="border-t border-gray-700 pt-3 mb-3"></div>

                <div className="font-mono text-xs space-y-1 text-gray-400 mb-3">
                  <div>⚠ Primary contact "Open to Work" on LinkedIn</div>
                  <div>⚠ New CTO hired from competitor's client list</div>
                  <div>⚠ Renewal in 47 days — no exec touchpoint in 6 mo</div>
                </div>

                <div className="border-t border-gray-700 pt-3"></div>

                <div className="mt-3">
                  <div className="text-[#EF4444] font-mono font-semibold text-sm mb-1">→ [PROTECT]</div>
                  <div className="font-mono text-xs text-gray-400 pl-3 space-y-1">
                    <div>Executive outreach — THIS WEEK</div>
                    <div>Competitive displacement risk: HIGH</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo CTA */}
        <div className="text-center mt-12 pt-8 border-t border-cream/10">
          <p className="text-lg text-cream/70 mb-4">That's the output. Want to see yours?</p>
          <Link to="/assessment" className="text-cyan-400 font-semibold text-base hover:underline transition-all">
            Run it on your account →
          </Link>
        </div>
      </div>
    </section>
  );
};
