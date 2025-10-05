import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="bg-navy relative overflow-hidden py-24">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(248, 246, 242, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="max-w-4xl pt-24 pb-16">
          
          <div className="relative mb-10">
            <div className="absolute -top-8 left-0">
              <span className="inline-flex items-center gap-2 rounded-full bg-cream text-navy border border-gold px-4 py-1 text-sm font-semibold shadow-sm">
                <span className="w-2 h-2 rounded-full bg-terracotta" aria-hidden="true"></span>
                Est. 1828 – Present
              </span>
            </div>
            <h1 className="text-5xl md:text-[56px] font-bold leading-[1.2] mb-6 text-cream">
              <span className="relative inline-block">
                <span className="relative z-10">Trust-Based Revenue Growth</span>
                <span className="absolute -bottom-1 left-0 right-0 h-1 bg-terracotta opacity-50" />
              </span>
              {' '}for Professional Services
            </h1>
          </div>
          
          <p className="text-xl text-cream/95 mb-12 max-w-[700px] leading-relaxed">
            Your senior partners hold millions in relationship intelligence. When they retire, it walks out the door. 
            We architect Relationship Intelligence systems that preserve institutional knowledge and enable growth without losing what made you successful.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-terracotta hover:bg-[#C0654E] text-cream font-semibold px-8 py-4 text-base rounded-md transition-all hover:-translate-y-0.5"
              style={{ boxShadow: '0 4px 16px rgba(212, 116, 94, 0.3)' }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-cream text-cream hover:bg-cream hover:text-navy font-semibold px-8 py-4 text-base rounded-md transition-all bg-transparent"
              onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Demo Section */}
        <div className="mt-16 mb-12 grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-6 items-stretch">
          {/* Discovery Note */}
          <div className="relative">
            <div className="absolute -top-3 left-6 bg-navy px-4 py-1.5 rounded border border-terracotta/30 z-10">
              <span className="font-mono text-xs font-semibold text-terracotta tracking-wide">TURN THIS</span>
            </div>
            <div className="bg-[#FEF3C7] p-8 rounded-lg border-2 border-[#F59E0B] transform -rotate-[0.5deg] hover:rotate-0 transition-transform h-[500px] overflow-y-auto custom-scrollbar custom-scrollbar-amber" style={{ boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}>
              <pre className="font-mono text-[13px] leading-relaxed text-[#292524] whitespace-pre-wrap m-0">
{`Sarah Chen - Dir M&A Integration, PharmaCo. $450M MedTech acquisition. First big integration = career maker for her. $600-900K budget, 18mo timeline MES migration.

Marcus Webb CTO Mfg - VETO POWER on vendors. Hates consultants post-Accenture disaster. Wait - pretty sure he was on Pfizer 2016 integration when he was junior systems guy??? Need to confirm.

TOM connection: my neighbor Tom Berkley = college roommate w/ Marcus. Still ride bikes together weekends. Warm intro through Tom BEFORE Sarah formally loops me in = game changer.

Jennifer Park VP Ops (acquired co) - protective of team, retention clause. Owns legacy MES. Won't open up without trust first.

Raj Patel already engaged - Oracle ERP consultant. Position as MES-ERP bridge not competition w/ his scope.

GAPS: zero pharma mfg portfolio. Don't know FDA 21 CFR Part 11 well enough - Jake's Boston contact from automotive does pharma regulatory, call Friday.

Risk calc: Can't win Marcus = dead. Can't speak compliance = Deloitte wins on reputation. BUT nail Marcus reconnect via Tom + partner compliance = 80% win probability.

Follow-up: LinkedIn Marcus by Fri, Tom intro convo, Jake call for Boston contact name.`}
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
              <div className="text-green-400 mb-3 font-semibold">// NODES EXTRACTED:</div>
              
              <div className="space-y-3">
                <div className="bg-[#1E293B] border border-red-500/50 rounded-md p-4 opacity-0 animate-slideIn" style={{ animationDelay: '0s' }}>
                  <div className="text-red-400">{'{'}</div>
                  <div className="ml-4">
                    <div><span className="text-blue-300">id:</span> <span className="text-yellow-300">"marcus_webb_001"</span>,</div>
                    <div><span className="text-blue-300">type:</span> <span className="text-yellow-300">"Contact"</span>,</div>
                    <div><span className="text-blue-300">veto_power:</span> <span className="text-purple-300">true</span></div>
                  </div>
                  <div className="text-red-400">{'}'}</div>
                </div>
                
                <div className="bg-[#1E293B] border border-blue-500/50 rounded-md p-4 opacity-0 animate-slideIn" style={{ animationDelay: '0.1s' }}>
                  <div className="text-blue-400">{'{'}</div>
                  <div className="ml-4">
                    <div><span className="text-blue-300">id:</span> <span className="text-yellow-300">"sarah_chen_001"</span>,</div>
                    <div><span className="text-blue-300">authority_level:</span> <span className="text-yellow-300">"$600-900K"</span></div>
                  </div>
                  <div className="text-blue-400">{'}'}</div>
                </div>
                
                <div className="bg-[#1E293B] border border-purple-500/50 rounded-md p-4 opacity-0 animate-slideIn" style={{ animationDelay: '0.2s' }}>
                  <div className="text-purple-400">{'{'}</div>
                  <div className="ml-4">
                    <div><span className="text-blue-300">type:</span> <span className="text-yellow-300">"Opportunity"</span>,</div>
                    <div><span className="text-blue-300">value:</span> <span className="text-yellow-300">"$600-900K"</span>,</div>
                    <div><span className="text-blue-300">confidence:</span> <span className="text-purple-300">0.80</span></div>
                  </div>
                  <div className="text-purple-400">{'}'}</div>
                </div>
                
                <div className="bg-[#1E293B] border border-green-500/50 rounded-md p-4 opacity-0 animate-slideIn" style={{ animationDelay: '0.3s' }}>
                  <div className="text-green-400">{'{'}</div>
                  <div className="ml-4">
                    <div><span className="text-blue-300">id:</span> <span className="text-yellow-300">"gap_compliance"</span>,</div>
                    <div><span className="text-blue-300">type:</span> <span className="text-yellow-300">"Risk"</span>,</div>
                    <div><span className="text-blue-300">mitigation:</span> <span className="text-yellow-300">"Jake_Boston_contact"</span></div>
                  </div>
                  <div className="text-green-400">{'}'}</div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-[#334155]">
                <div className="text-green-400 mb-3 font-semibold">// RELATIONSHIPS:</div>
                <div className="space-y-2 text-[10px]">
                  <div className="bg-[#1E293B] border border-[#334155] rounded p-2.5 opacity-0 animate-slideIn" style={{ animationDelay: '0.5s' }}>
                    <span className="text-gray-400">(</span><span className="text-red-300">marcus_webb</span><span className="text-gray-400">)</span>
                    <span className="text-orange-400">-[:HAS_VETO_POWER_ON]-&gt;</span>
                    <span className="text-gray-400">(</span><span className="text-purple-300">opportunity</span><span className="text-gray-400">)</span>
                  </div>
                  <div className="bg-[#1E293B] border border-[#334155] rounded p-2.5 opacity-0 animate-slideIn" style={{ animationDelay: '0.6s' }}>
                    <span className="text-gray-400">(</span><span className="text-blue-300">sarah_chen</span><span className="text-gray-400">)</span>
                    <span className="text-orange-400">-[:OWNS_BUDGET]-&gt;</span>
                    <span className="text-gray-400">(</span><span className="text-purple-300">opportunity</span><span className="text-gray-400">)</span>
                  </div>
                  <div className="bg-[#1E293B] border border-[#334155] rounded p-2.5 opacity-0 animate-slideIn" style={{ animationDelay: '0.7s' }}>
                    <span className="text-gray-400">(</span><span className="text-red-300">marcus_webb</span><span className="text-gray-400">)</span>
                    <span className="text-orange-400">-[:WARM_INTRO_VIA]-&gt;</span>
                    <span className="text-gray-400">(</span><span className="text-green-300">tom_berkley</span><span className="text-gray-400">)</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-[#334155] flex items-center gap-2 text-[10px] text-green-400 font-semibold">
                <span>✓</span>
                <span>Queryable • Survives transitions • Scales knowledge</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
