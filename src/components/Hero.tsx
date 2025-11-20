import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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

          {/* Establishment Badge */}
          <div className="inline-block mb-6">
            <div className="bg-cream/10 backdrop-blur-sm border border-cream/20 rounded-full px-4 py-2">
              <span className="font-mono text-sm text-cream/90 tracking-wide">Est. 1828 - Present</span>
            </div>
          </div>

          <h1 className="text-5xl md:text-[56px] font-bold leading-[1.2] mb-2 text-cream">
            Your Revenue Grows on Trust.
          </h1>
          <div className="mb-6">
            <span className="h-1 bg-terracotta opacity-50 block" style={{ width: '460px' }} />
          </div>

          <p className="text-2xl text-cream/95 mb-[43px] max-w-[700px] leading-relaxed">
            Firms that sell custom solutions grow by scaling contract scope and contact depth—both leading indicators of trust.
            <br /><br />
            We help business development leaders build trust with AI-powered Opportunity Intelligence that surfaces market signal and relational context.
          </p>
        </div>
        
        {/* Demo Section */}
        <div className="mt-6 mb-12 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
          {/* Discovery Note */}
          <div className="relative">
            <div className="absolute -top-3 left-6 bg-navy px-4 py-1.5 rounded border border-terracotta/30 z-10">
              <span className="font-mono text-xs font-semibold text-terracotta tracking-wide">TURN THIS</span>
            </div>
            <div className="bg-[#FEF3C7] p-8 rounded-lg border-2 border-[#F59E0B] transform -rotate-[0.5deg] hover:rotate-0 transition-transform h-[500px] overflow-y-auto custom-scrollbar custom-scrollbar-amber" style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}>
              <pre className="font-mono text-[13px] leading-relaxed text-[#292524] whitespace-pre-wrap m-0">
{`DISCOVERY notes -- Jim Chen - Nike Supply Chain

John Williams VP Supply Chain - met for coffee today. Oracle ERP hell, 4-hour batch cycles = store managers have ZERO real-time inventory visibility. Retail vs. digital constantly out of sync. He's been pushing for modernization for 18 months.

$50M budget allocated in Q2 cycle for supply chain tech overhaul. Timeline = 6-8 week approval window. BUT his boss Janet (CFO) needs bulletproof ROI model before she signs anything. John has authority up to $500K, anything bigger needs Janet's approval. Janet is CFO = financial risk aversion, wants payback < 18mo.

Tech stack: Oracle ERP (legacy, maybe 10+ years old?), batch processing every 4hrs, no real-time sync between channels. Store managers literally calling each other to check inventory. This is our bread and butter - we've done Oracle-to-modern 4x in last 2 years (Target, Macy's, Nordstrom portfolio). Should pull those case studies for Janet's ROI deck.

John mentioned they looked at Accenture last year but "didn't go anywhere" - need to find out why. Timing? Cost? Trust issue? Could be competitive intel or could be our opening.

RELATIONSHIP GOLD: John sits next to Mike Chen (their CIO) in exec meetings. Mike is skeptical of outside consultants after "bad experience with Deloitte in 2019" (John's words). So positioning matters - can't come in as "big consulting firm," need to be "engineering partners who've solved this exact problem."

Random but important: John mentioned Andrew Kim in passing - apparently he's the new PM on some Lilly pharma project. Different opportunity? John said "you should talk to Andrew, he's dealing with integration headaches too." FOLLOW UP: Is this the Lilly MES thing Sarah mentioned 2 months ago? Could be two opportunities from one coffee.

GAPS: Don't have a Nike reference (asked, they haven't used external eng partners for supply chain). Janet's ROI requirements = need our finance team to build model. Timeline is TIGHT - Q2 budget approval is 6-8 weeks out, if we don't move NOW this goes to next fiscal year.

RISK CALC: Mike Chen (CIO) could kill this if he doesn't trust us. Need to figure out the Deloitte disaster story. Also risk that Accenture comes back - they have Nike relationships we don't. BUT we have proof (4 similar projects), they have consulting baggage. If we position right = 70% win probability.

NEXT STEPS:
• Build ROI model by end of week (loop in finance team)
• Pull Target + Nordstrom case studies (prove Oracle modernization ROI)
• Research: What happened with Accenture last year?
• Research: Deloitte 2019 disaster (Mike Chen's concern)
• John intro to Janet in next 10 days (before Q2 budget closes)
• Follow up: Who is Andrew Kim? Is this the Lilly opportunity?
• Positioning doc: "engineering partner" not "consultant"`}
              </pre>
              <div className="mt-6 pt-4 border-t-2 border-[#F59E0B] flex items-center gap-2 text-[11px] text-[#92400E] font-semibold">
                <span>⚠</span>
                <span>This intelligence walks out the door when the consultant leaves</span>
              </div>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="flex justify-center items-center px-4 py-8 lg:py-0">
            <div className="bg-terracotta rounded-full w-16 h-16 flex items-center justify-center animate-pulse-custom">
              <ArrowRight className="text-cream w-8 h-8" />
            </div>
          </div>
          
          {/* Schema Panel */}
          <div className="relative">
            <div className="absolute -top-3 left-6 bg-navy px-4 py-1.5 rounded border border-green-500/30 z-10">
              <span className="font-mono text-xs font-semibold text-green-400 tracking-wide">INTO THIS</span>
            </div>
            <div className="bg-[#0F172A] p-8 rounded-lg border-2 border-[#334155] font-mono text-[11px] h-[500px] overflow-y-auto custom-scrollbar custom-scrollbar-slate" style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)' }}>
              <div className="text-green-400 mb-4 font-semibold text-[12px]">// OPPORTUNITY EXTRACTED:</div>

              <div className="bg-[#1E293B] border border-[#3B82F6] rounded-md p-4 mb-4">
                <div className="mb-2">
                  <span className="text-orange-400">id:</span> <span className="text-yellow-300">"nike_inventory_mod_001"</span>
                </div>
                <div className="mb-2">
                  <span className="text-orange-400">type:</span> <span className="text-yellow-300">"Opportunity"</span>
                </div>
                <div className="mb-2">
                  <span className="text-orange-400">name:</span> <span className="text-yellow-300">"Nike Inventory Modernization"</span>
                </div>
                <div className="mb-2">
                  <span className="text-orange-400">value:</span> <span className="text-yellow-300">"$600k-900k"</span>
                </div>
                <div className="mb-2">
                  <span className="text-orange-400">timeline:</span> <span className="text-yellow-300">"Q2 2025 (6-8 week window)"</span>
                </div>
                <div className="mb-2">
                  <span className="text-orange-400">heat_score:</span> <span className="text-red-400 font-bold">84</span>
                </div>
                <div className="mb-2">
                  <span className="text-orange-400">stage:</span> <span className="text-yellow-300">"Discovery"</span>
                </div>
                <div>
                  <span className="text-orange-400">tech_stack:</span> <span className="text-yellow-300">"Oracle ERP, 4hr batch cycles"</span>
                </div>
              </div>

              <div className="text-green-400 mb-3 font-semibold text-[12px]">// RELATIONSHIPS EXTRACTED:</div>

              <div className="space-y-2 mb-4">
                <div className="bg-[#1E293B] border border-[#334155] rounded p-2.5 text-[10px]">
                  <span className="text-gray-400">(</span><span className="text-blue-300">john_williams</span><span className="text-gray-400">)</span>
                  <span className="text-orange-400"> --[REPORTS_TO]--&gt; </span>
                  <span className="text-gray-400">(</span><span className="text-purple-300">janet_cfo</span><span className="text-gray-400">)</span>
                </div>
                <div className="bg-[#1E293B] border border-[#334155] rounded p-2.5 text-[10px]">
                  <span className="text-gray-400">(</span><span className="text-blue-300">jim_chen</span><span className="text-gray-400">)</span>
                  <span className="text-orange-400"> --[ACTIVE_RELATIONSHIP]--&gt; </span>
                  <span className="text-gray-400">(</span><span className="text-blue-300">john_williams</span><span className="text-gray-400">)</span>
                </div>
                <div className="bg-[#1E293B] border border-[#334155] rounded p-2.5 text-[10px]">
                  <span className="text-gray-400">(</span><span className="text-green-300">tom_berkley</span><span className="text-gray-400">)</span>
                  <span className="text-orange-400"> --[COLLEGE_ROOMMATE]--&gt; </span>
                  <span className="text-gray-400">(</span><span className="text-red-300">marcus_webb</span><span className="text-gray-400">)</span>
                </div>
                <div className="bg-[#1E293B] border border-[#334155] rounded p-2.5 text-[10px]">
                  <span className="text-gray-400">(</span><span className="text-purple-300">janet_cfo</span><span className="text-gray-400">)</span>
                  <span className="text-orange-400"> --[REQUIRES]--&gt; </span>
                  <span className="text-gray-400">(</span><span className="text-yellow-300">roi_model</span><span className="text-gray-400">)</span>
                </div>
                <div className="bg-[#1E293B] border border-[#334155] rounded p-2.5 text-[10px]">
                  <span className="text-gray-400">(</span><span className="text-blue-300">john_williams</span><span className="text-gray-400">)</span>
                  <span className="text-orange-400"> --[OWNS]--&gt; </span>
                  <span className="text-gray-400">(</span><span className="text-cyan-300">nike_inventory_mod_001</span><span className="text-gray-400">)</span>
                </div>
              </div>

              <div className="text-green-400 mb-3 font-semibold text-[12px]">// KEY CONTACTS MAPPED:</div>

              <div className="grid grid-cols-3 gap-3 mb-4">
                <div className="bg-[#1E293B] border border-[#334155] rounded p-3 text-[9px]">
                  <div className="text-blue-300 font-bold mb-1">John Williams</div>
                  <div className="text-gray-400">VP Supply Chain • Nike</div>
                  <div className="text-gray-400">Budget authority: $500k+</div>
                </div>
                <div className="bg-[#1E293B] border border-[#334155] rounded p-3 text-[9px]">
                  <div className="text-purple-300 font-bold mb-1">Janet (CFO)</div>
                  <div className="text-gray-400">Chief Financial Officer • Nike</div>
                  <div className="text-gray-400">Final approver • Needs ROI</div>
                </div>
                <div className="bg-[#1E293B] border border-[#334155] rounded p-3 text-[9px]">
                  <div className="text-blue-300 font-bold mb-1">Jim Chen</div>
                  <div className="text-gray-400">Senior Engineer • SEP</div>
                  <div className="text-gray-400">Direct access to John</div>
                </div>
              </div>

              <div className="text-green-400 mb-3 font-semibold text-[12px]">// ACTIONABLE SIGNALS:</div>

              <div className="space-y-2">
                <div className="bg-[#1E293B] border border-green-500/50 rounded p-2.5">
                  <div className="text-[10px] text-gray-300">
                    <span className="text-green-400 font-bold">Heat Score: 84/100</span> — High-confidence opportunity
                  </div>
                </div>
                <div className="bg-[#1E293B] border border-blue-500/50 rounded p-2.5">
                  <div className="text-[10px] text-gray-300">
                    <span className="text-blue-400 font-bold">Budget allocated</span> ($50M pool, Q2 cycle closing in 6-8 weeks)
                  </div>
                </div>
                <div className="bg-[#1E293B] border border-pink-500/50 rounded p-2.5">
                  <div className="text-[10px] text-gray-300">
                    <span className="text-pink-400 font-bold">Warm access path confirmed</span> (Jim → John → Janet)
                  </div>
                </div>
                <div className="bg-[#1E293B] border border-yellow-500/50 rounded p-2.5">
                  <div className="text-[10px] text-gray-300">
                    <span className="text-yellow-400 font-bold">Blocker identified:</span> Janet requires ROI model before approval
                  </div>
                </div>
                <div className="bg-[#1E293B] border border-cyan-500/50 rounded p-2.5">
                  <div className="text-[10px] text-gray-300">
                    <span className="text-cyan-400 font-bold">Technical fit:</span> Oracle modernization (solved 4x previously)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex justify-center">
          <Button 
            size="lg" 
            className="bg-terracotta hover:bg-[#C0654E] text-cream font-semibold px-8 py-4 text-base rounded-md transition-all hover:-translate-y-0.5"
            style={{ boxShadow: '0 4px 16px rgba(212, 116, 94, 0.3)' }}
            onClick={() => {
              const ctaSection = document.getElementById('contact');
              if (ctaSection) {
                ctaSection.scrollIntoView({ behavior: 'smooth' });
                // Small delay to allow scroll to complete before opening form
                setTimeout(() => {
                  const contactButton = ctaSection.querySelector('button');
                  contactButton?.click();
                }, 500);
              }
            }}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};
