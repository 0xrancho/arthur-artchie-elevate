import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Hero = () => {
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

          <div className="mb-12">
            <Link to="/assessment" className="inline-block relative">
              {/* Terracotta radient glow behind button */}
              <span
                className="absolute -inset-3 rounded-xl opacity-60 blur-xl"
                style={{ background: 'radial-gradient(ellipse at center, rgba(212, 116, 94, 0.5) 0%, rgba(212, 116, 94, 0.2) 50%, transparent 70%)' }}
              />
              <Button
                size="lg"
                className="relative bg-terracotta hover:bg-[#C0654E] text-cream font-semibold px-8 py-4 text-base rounded-md transition-all hover:-translate-y-0.5 overflow-hidden"
                style={{ boxShadow: '0 4px 16px rgba(212, 116, 94, 0.5), 0 0 40px rgba(212, 116, 94, 0.3), inset 0 1px 0 rgba(255,255,255,0.1)' }}
              >
                <span className="relative z-10">Try the Growth Assessment!</span>
                {/* Fire pixel particles - multiple layers for density */}
                <span className="absolute inset-0 overflow-hidden pointer-events-none">
                  {/* Slow, bright base particles - Layer 1 */}
                  <span className="absolute w-1.5 h-1.5 bg-white/70 bottom-0 left-[15%] animate-fire-slow" style={{ animationDelay: '0s' }} />
                  <span className="absolute w-1.5 h-1.5 bg-white/60 bottom-0 left-[35%] animate-fire-slow" style={{ animationDelay: '0.4s' }} />
                  <span className="absolute w-1.5 h-1.5 bg-white/70 bottom-0 left-[55%] animate-fire-slow" style={{ animationDelay: '0.8s' }} />
                  <span className="absolute w-1.5 h-1.5 bg-white/60 bottom-0 left-[75%] animate-fire-slow" style={{ animationDelay: '1.2s' }} />
                  <span className="absolute w-1.5 h-1.5 bg-white/70 bottom-0 left-[25%] animate-fire-slow" style={{ animationDelay: '1.6s' }} />
                  <span className="absolute w-1.5 h-1.5 bg-white/60 bottom-0 left-[65%] animate-fire-slow" style={{ animationDelay: '2s' }} />
                  {/* Slow - Layer 2 */}
                  <span className="absolute w-1.5 h-1.5 bg-white/65 bottom-0 left-[10%] animate-fire-slow" style={{ animationDelay: '0.2s' }} />
                  <span className="absolute w-1.5 h-1.5 bg-white/70 bottom-0 left-[30%] animate-fire-slow" style={{ animationDelay: '0.6s' }} />
                  <span className="absolute w-1.5 h-1.5 bg-white/65 bottom-0 left-[50%] animate-fire-slow" style={{ animationDelay: '1s' }} />
                  <span className="absolute w-1.5 h-1.5 bg-white/70 bottom-0 left-[70%] animate-fire-slow" style={{ animationDelay: '1.4s' }} />
                  <span className="absolute w-1.5 h-1.5 bg-white/65 bottom-0 left-[85%] animate-fire-slow" style={{ animationDelay: '1.8s' }} />
                  <span className="absolute w-1.5 h-1.5 bg-white/70 bottom-0 left-[45%] animate-fire-slow" style={{ animationDelay: '2.2s' }} />
                  {/* Slow - Layer 3 */}
                  <span className="absolute w-1.5 h-1.5 bg-white/60 bottom-0 left-[8%] animate-fire-slow" style={{ animationDelay: '0.3s' }} />
                  <span className="absolute w-1.5 h-1.5 bg-white/65 bottom-0 left-[22%] animate-fire-slow" style={{ animationDelay: '0.7s' }} />
                  <span className="absolute w-1.5 h-1.5 bg-white/70 bottom-0 left-[42%] animate-fire-slow" style={{ animationDelay: '1.1s' }} />
                  <span className="absolute w-1.5 h-1.5 bg-white/60 bottom-0 left-[62%] animate-fire-slow" style={{ animationDelay: '1.5s' }} />
                  <span className="absolute w-1.5 h-1.5 bg-white/65 bottom-0 left-[78%] animate-fire-slow" style={{ animationDelay: '1.9s' }} />
                  <span className="absolute w-1.5 h-1.5 bg-white/70 bottom-0 left-[92%] animate-fire-slow" style={{ animationDelay: '2.3s' }} />

                  {/* Medium speed particles - Layer 1 */}
                  <span className="absolute w-1 h-1 bg-white/50 bottom-0 left-[20%] animate-fire-medium" style={{ animationDelay: '0.2s' }} />
                  <span className="absolute w-1 h-1 bg-white/45 bottom-0 left-[45%] animate-fire-medium" style={{ animationDelay: '0.6s' }} />
                  <span className="absolute w-1 h-1 bg-white/50 bottom-0 left-[70%] animate-fire-medium" style={{ animationDelay: '1s' }} />
                  <span className="absolute w-1 h-1 bg-white/45 bottom-0 left-[30%] animate-fire-medium" style={{ animationDelay: '1.4s' }} />
                  <span className="absolute w-1 h-1 bg-white/50 bottom-0 left-[60%] animate-fire-medium" style={{ animationDelay: '1.8s' }} />
                  {/* Medium - Layer 2 */}
                  <span className="absolute w-1 h-1 bg-white/45 bottom-0 left-[12%] animate-fire-medium" style={{ animationDelay: '0.1s' }} />
                  <span className="absolute w-1 h-1 bg-white/50 bottom-0 left-[38%] animate-fire-medium" style={{ animationDelay: '0.5s' }} />
                  <span className="absolute w-1 h-1 bg-white/45 bottom-0 left-[58%] animate-fire-medium" style={{ animationDelay: '0.9s' }} />
                  <span className="absolute w-1 h-1 bg-white/50 bottom-0 left-[82%] animate-fire-medium" style={{ animationDelay: '1.3s' }} />
                  <span className="absolute w-1 h-1 bg-white/45 bottom-0 left-[48%] animate-fire-medium" style={{ animationDelay: '1.7s' }} />
                  {/* Medium - Layer 3 */}
                  <span className="absolute w-1 h-1 bg-white/50 bottom-0 left-[5%] animate-fire-medium" style={{ animationDelay: '0.3s' }} />
                  <span className="absolute w-1 h-1 bg-white/45 bottom-0 left-[28%] animate-fire-medium" style={{ animationDelay: '0.7s' }} />
                  <span className="absolute w-1 h-1 bg-white/50 bottom-0 left-[52%] animate-fire-medium" style={{ animationDelay: '1.1s' }} />
                  <span className="absolute w-1 h-1 bg-white/45 bottom-0 left-[75%] animate-fire-medium" style={{ animationDelay: '1.5s' }} />
                  <span className="absolute w-1 h-1 bg-white/50 bottom-0 left-[90%] animate-fire-medium" style={{ animationDelay: '1.9s' }} />

                  {/* Fast, faint top particles - Layer 1 */}
                  <span className="absolute w-0.5 h-0.5 bg-white/30 bottom-0 left-[10%] animate-fire-fast" style={{ animationDelay: '0.1s' }} />
                  <span className="absolute w-0.5 h-0.5 bg-white/25 bottom-0 left-[40%] animate-fire-fast" style={{ animationDelay: '0.5s' }} />
                  <span className="absolute w-0.5 h-0.5 bg-white/30 bottom-0 left-[50%] animate-fire-fast" style={{ animationDelay: '0.9s' }} />
                  <span className="absolute w-0.5 h-0.5 bg-white/25 bottom-0 left-[80%] animate-fire-fast" style={{ animationDelay: '1.3s' }} />
                  <span className="absolute w-0.5 h-0.5 bg-white/30 bottom-0 left-[85%] animate-fire-fast" style={{ animationDelay: '1.7s' }} />
                  {/* Fast - Layer 2 */}
                  <span className="absolute w-0.5 h-0.5 bg-white/25 bottom-0 left-[18%] animate-fire-fast" style={{ animationDelay: '0.2s' }} />
                  <span className="absolute w-0.5 h-0.5 bg-white/30 bottom-0 left-[32%] animate-fire-fast" style={{ animationDelay: '0.6s' }} />
                  <span className="absolute w-0.5 h-0.5 bg-white/25 bottom-0 left-[62%] animate-fire-fast" style={{ animationDelay: '1s' }} />
                  <span className="absolute w-0.5 h-0.5 bg-white/30 bottom-0 left-[72%] animate-fire-fast" style={{ animationDelay: '1.4s' }} />
                  <span className="absolute w-0.5 h-0.5 bg-white/25 bottom-0 left-[95%] animate-fire-fast" style={{ animationDelay: '1.8s' }} />
                  {/* Fast - Layer 3 */}
                  <span className="absolute w-0.5 h-0.5 bg-white/30 bottom-0 left-[5%] animate-fire-fast" style={{ animationDelay: '0.15s' }} />
                  <span className="absolute w-0.5 h-0.5 bg-white/25 bottom-0 left-[25%] animate-fire-fast" style={{ animationDelay: '0.55s' }} />
                  <span className="absolute w-0.5 h-0.5 bg-white/30 bottom-0 left-[55%] animate-fire-fast" style={{ animationDelay: '0.95s' }} />
                  <span className="absolute w-0.5 h-0.5 bg-white/25 bottom-0 left-[68%] animate-fire-fast" style={{ animationDelay: '1.35s' }} />
                  <span className="absolute w-0.5 h-0.5 bg-white/30 bottom-0 left-[88%] animate-fire-fast" style={{ animationDelay: '1.75s' }} />
                </span>
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
            <div className="bg-terracotta rounded-full w-16 h-16 flex items-center justify-center">
              <ArrowRight className="text-cream w-8 h-8" />
            </div>
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
