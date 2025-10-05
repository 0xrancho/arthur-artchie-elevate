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
        <div className="max-w-4xl pt-[25px] pb-16">
          
          <h1 className="text-5xl md:text-[56px] font-bold leading-[1.2] mb-6 text-cream">
            <span className="relative inline-block">
              <span className="relative z-10">Trust-Based Revenue Growth</span>
              <span className="absolute -bottom-1 left-0 right-0 h-1 bg-terracotta opacity-50" />
            </span>
            {' '}for Professional Services
          </h1>
          
          <p className="text-xl text-cream/95 mb-[43px] max-w-[700px] leading-relaxed">
            Your senior partners hold millions in relationship intelligence. When they retire, it walks out the door. 
            We architect Relationship Intelligence systems that preserve institutional knowledge and enable growth without losing what made you successful.
          </p>
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
{`DISCOVERY notes -- Sarah Chen - Dir M&A Integration, PharmaCo. $450M MedTech acquisition. First big integration = career maker for her. $600-900K budget, 18mo timeline MES migration.

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
              
              <div className="bg-[#1E293B] border border-red-500/50 rounded-md p-3 mb-3">
                <div className="text-red-400">{'{'}</div>
                <div className="ml-3">
                  <div><span className="text-blue-300">id:</span> <span className="text-yellow-300">"marcus_webb_001"</span>,</div>
                  <div><span className="text-blue-300">type:</span> <span className="text-yellow-300">"Contact"</span>,</div>
                  <div><span className="text-blue-300">name:</span> <span className="text-yellow-300">"Marcus Webb"</span>,</div>
                  <div><span className="text-blue-300">title:</span> <span className="text-yellow-300">"CTO Manufacturing"</span>,</div>
                  <div><span className="text-blue-300">company:</span> <span className="text-yellow-300">"PharmaCo"</span>,</div>
                  <div><span className="text-blue-300">veto_power:</span> <span className="text-purple-300">true</span>,</div>
                  <div><span className="text-blue-300">consultant_history:</span> <span className="text-yellow-300">"Pfizer 2016"</span>,</div>
                  <div><span className="text-blue-300">sentiment:</span> <span className="text-yellow-300">"Hates consultants post-Accenture"</span>,</div>
                  <div><span className="text-blue-300">personal_interests:</span> [<span className="text-yellow-300">"Cycling"</span>],</div>
                  <div><span className="text-blue-300">vector_embedding:</span> <span className="text-gray-500">[0.234, 0.567, ...]</span></div>
                </div>
                <div className="text-red-400">{'}'}</div>
              </div>

              <div className="bg-[#1E293B] border border-blue-500/50 rounded-md p-3 mb-3">
                <div className="text-blue-400">{'{'}</div>
                <div className="ml-3">
                  <div><span className="text-blue-300">id:</span> <span className="text-yellow-300">"sarah_chen_001"</span>,</div>
                  <div><span className="text-blue-300">type:</span> <span className="text-yellow-300">"Contact"</span>,</div>
                  <div><span className="text-blue-300">name:</span> <span className="text-yellow-300">"Sarah Chen"</span>,</div>
                  <div><span className="text-blue-300">title:</span> <span className="text-yellow-300">"Director M&A Integration"</span>,</div>
                  <div><span className="text-blue-300">authority_level:</span> <span className="text-yellow-300">"$600-900K"</span>,</div>
                  <div><span className="text-blue-300">career_context:</span> <span className="text-yellow-300">"First big integration - career maker"</span>,</div>
                  <div><span className="text-blue-300">vector_embedding:</span> <span className="text-gray-500">[0.891, 0.234, ...]</span></div>
                </div>
                <div className="text-blue-400">{'}'}</div>
              </div>

              <div className="bg-[#1E293B] border border-green-500/50 rounded-md p-3 mb-3">
                <div className="text-green-400">{'{'}</div>
                <div className="ml-3">
                  <div><span className="text-blue-300">id:</span> <span className="text-yellow-300">"tom_berkley_001"</span>,</div>
                  <div><span className="text-blue-300">type:</span> <span className="text-yellow-300">"Personal_Connection"</span>,</div>
                  <div><span className="text-blue-300">name:</span> <span className="text-yellow-300">"Tom Berkley"</span>,</div>
                  <div><span className="text-blue-300">relationship_to_consultant:</span> <span className="text-yellow-300">"Neighbor"</span>,</div>
                  <div><span className="text-blue-300">shared_interest:</span> <span className="text-yellow-300">"Cycling"</span>,</div>
                  <div><span className="text-blue-300">vector_embedding:</span> <span className="text-gray-500">[0.445, 0.778, ...]</span></div>
                </div>
                <div className="text-green-400">{'}'}</div>
              </div>

              <div className="bg-[#1E293B] border border-purple-500/50 rounded-md p-3 mb-3">
                <div className="text-purple-400">{'{'}</div>
                <div className="ml-3">
                  <div><span className="text-blue-300">id:</span> <span className="text-yellow-300">"pharmaco_ma_mes_001"</span>,</div>
                  <div><span className="text-blue-300">type:</span> <span className="text-yellow-300">"Opportunity"</span>,</div>
                  <div><span className="text-blue-300">name:</span> <span className="text-yellow-300">"PharmaCo M&A MES Migration"</span>,</div>
                  <div><span className="text-blue-300">value:</span> <span className="text-yellow-300">"$600-900K"</span>,</div>
                  <div><span className="text-blue-300">timeline:</span> <span className="text-yellow-300">"18 months"</span>,</div>
                  <div><span className="text-blue-300">confidence:</span> <span className="text-purple-300">0.80</span>,</div>
                  <div><span className="text-blue-300">stage:</span> <span className="text-yellow-300">"Discovery"</span>,</div>
                  <div><span className="text-blue-300">vector_embedding:</span> <span className="text-gray-500">[0.667, 0.123, ...]</span></div>
                </div>
                <div className="text-purple-400">{'}'}</div>
              </div>

              <div className="mt-4 pt-4 border-t border-[#334155]">
                <div className="text-green-400 mb-3 font-semibold">// RELATIONSHIPS EXTRACTED:</div>
                <div className="space-y-2 text-[10px]">
                  <div className="bg-[#1E293B] border border-[#334155] rounded p-2.5">
                    <span className="text-gray-400">(</span><span style={{ color: '#FCA5A5' }}>marcus_webb</span><span className="text-gray-400">)</span>
                    <span className="text-orange-400">-[:HAS_VETO_POWER_ON]-&gt;</span>
                    <span className="text-gray-400">(</span><span style={{ color: '#C4B5FD' }}>opportunity</span><span className="text-gray-400">)</span>
                  </div>
                  <div className="bg-[#1E293B] border border-[#334155] rounded p-2.5">
                    <span className="text-gray-400">(</span><span style={{ color: '#86EFAC' }}>tom_berkley</span><span className="text-gray-400">)</span>
                    <span className="text-orange-400">-[:COLLEGE_ROOMMATE]-&gt;</span>
                    <span className="text-gray-400">(</span><span style={{ color: '#FCA5A5' }}>marcus_webb</span><span className="text-gray-400">)</span>
                  </div>
                  <div className="bg-[#1E293B] border border-[#334155] rounded p-2.5">
                    <span className="text-gray-400">(</span><span style={{ color: '#FCA5A5' }}>marcus_webb</span><span className="text-gray-400">)</span>
                    <span className="text-orange-400">-[:WORKED_WITH {'{'}year:2016{'}'}{']'}-&gt;</span>
                    <span className="text-gray-400">(</span><span style={{ color: '#67E8F9' }}>consultant</span><span className="text-gray-400">)</span>
                  </div>
                  <div className="bg-[#1E293B] border border-[#334155] rounded p-2.5">
                    <span className="text-gray-400">(</span><span style={{ color: '#93C5FD' }}>sarah_chen</span><span className="text-gray-400">)</span>
                    <span className="text-orange-400">-[:CHAMPION_OF]-&gt;</span>
                    <span className="text-gray-400">(</span><span style={{ color: '#C4B5FD' }}>opportunity</span><span className="text-gray-400">)</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-[#334155] flex items-center gap-2 text-[10px] text-green-400 font-semibold">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                <span>Queryable across firm • Survives consultant transitions • Scales institutional knowledge</span>
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
