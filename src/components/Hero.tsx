import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="bg-navy relative overflow-hidden py-24 md:py-32">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(248, 246, 242, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-cream">
            <span className="relative inline-block">
              <span className="relative z-10">Trust-Based Revenue Growth</span>
              <span className="absolute bottom-1 left-0 right-0 h-1 bg-terracotta opacity-50" />
            </span>
            {' '}for Professional Services
          </h1>
          
          <p className="text-lg md:text-xl text-cream/95 mb-12 max-w-3xl leading-relaxed">
            Your senior partners hold millions in relationship intelligence. When they retire, it walks out the door. 
            We architect Relationship Intelligence systems that preserve institutional knowledge and enable growth without losing what made you successful.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-terracotta hover:bg-terracotta/90 text-cream font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contact Us
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-2 border-cream text-cream hover:bg-cream hover:text-navy font-semibold px-8 py-6 text-base transition-all"
              onClick={() => document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Learn More
            </Button>
          </div>
        </div>
        
        {/* Demo Section */}
        <div className="mt-20 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          {/* Discovery Note */}
          <div className="relative">
            <div className="absolute -top-3 left-6 bg-navy px-4 py-1.5 rounded border border-terracotta/30 z-10">
              <span className="font-mono text-xs font-semibold text-terracotta tracking-wide">TURN THIS</span>
            </div>
            <div className="bg-amber-100 p-8 rounded-lg shadow-2xl border-2 border-amber-400 transform -rotate-0.5 hover:rotate-0 transition-transform h-[500px] overflow-y-auto">
              <pre className="font-mono text-xs leading-relaxed text-stone-800 whitespace-pre-wrap">
{`Sarah Chen - Dir M&A Integration, PharmaCo. $450M MedTech acquisition. First big integration = career maker for her. $600-900K budget, 18mo timeline MES migration.

Marcus Webb CTO Mfg - VETO POWER on vendors. Hates consultants post-Accenture disaster. Wait - pretty sure he was on Pfizer 2016 integration when he was junior systems guy??? Need to confirm.

TOM connection: my neighbor Tom Berkley = college roommate w/ Marcus. Still ride bikes together weekends. Warm intro through Tom BEFORE Sarah formally loops me in = game changer.

Jennifer Park VP Ops (acquired co) - protective of team, retention clause. Owns legacy MES. Won't open up without trust first.

Raj Patel already engaged - Oracle ERP consultant. Position as MES-ERP bridge not competition w/ his scope.

GAPS: zero pharma mfg portfolio. Don't know FDA 21 CFR Part 11 well enough - Jake's Boston contact from automotive does pharma regulatory, call Friday.

Risk calc: Can't win Marcus = dead. Can't speak compliance = Deloitte wins on reputation. BUT nail Marcus reconnect via Tom + partner compliance = 80% win probability.

Follow-up: LinkedIn Marcus by Fri, Tom intro convo, Jake call for Boston contact name.`}
              </pre>
              <div className="mt-6 pt-4 border-t-2 border-amber-400 flex items-center gap-2 text-xs text-amber-900 font-semibold">
                <span>⚠</span>
                <span>This intelligence walks out the door when the consultant leaves</span>
              </div>
            </div>
          </div>
          
          {/* Arrow */}
          <div className="flex justify-center py-8 lg:py-0">
            <div className="bg-terracotta rounded-full w-16 h-16 flex items-center justify-center shadow-lg animate-pulse">
              <ArrowRight className="text-cream w-8 h-8" />
            </div>
          </div>
          
          {/* Schema Panel */}
          <div className="relative">
            <div className="absolute -top-3 left-6 bg-navy px-4 py-1.5 rounded border border-green-500/30 z-10">
              <span className="font-mono text-xs font-semibold text-green-400 tracking-wide">INTO THIS</span>
            </div>
            <div className="bg-slate-900 p-8 rounded-lg shadow-2xl border-2 border-slate-700 font-mono text-xs h-[500px] overflow-y-auto">
              <div className="text-green-400 mb-4 font-semibold">// NODES EXTRACTED:</div>
              
              <div className="space-y-3">
                <div className="bg-slate-800 border border-red-500/50 rounded p-4 animate-fadeIn">
                  <div className="text-red-400">{'{'}</div>
                  <div className="ml-4">
                    <div><span className="text-blue-300">id:</span> <span className="text-yellow-300">"marcus_webb_001"</span>,</div>
                    <div><span className="text-blue-300">type:</span> <span className="text-yellow-300">"Contact"</span>,</div>
                    <div><span className="text-blue-300">veto_power:</span> <span className="text-purple-300">true</span></div>
                  </div>
                  <div className="text-red-400">{'}'}</div>
                </div>
                
                <div className="bg-slate-800 border border-blue-500/50 rounded p-4 animate-fadeIn" style={{ animationDelay: '0.1s' }}>
                  <div className="text-blue-400">{'{'}</div>
                  <div className="ml-4">
                    <div><span className="text-blue-300">id:</span> <span className="text-yellow-300">"sarah_chen_001"</span>,</div>
                    <div><span className="text-blue-300">authority_level:</span> <span className="text-yellow-300">"$600-900K"</span></div>
                  </div>
                  <div className="text-blue-400">{'}'}</div>
                </div>
                
                <div className="bg-slate-800 border border-purple-500/50 rounded p-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                  <div className="text-purple-400">{'{'}</div>
                  <div className="ml-4">
                    <div><span className="text-blue-300">type:</span> <span className="text-yellow-300">"Opportunity"</span>,</div>
                    <div><span className="text-blue-300">value:</span> <span className="text-yellow-300">"$600-900K"</span>,</div>
                    <div><span className="text-blue-300">confidence:</span> <span className="text-purple-300">0.80</span></div>
                  </div>
                  <div className="text-purple-400">{'}'}</div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-700">
                <div className="text-green-400 mb-3 font-semibold">// RELATIONSHIPS:</div>
                <div className="space-y-2 text-xs">
                  <div className="bg-slate-800 border border-slate-700 rounded p-2">
                    <span className="text-gray-400">(</span><span className="text-red-300">marcus_webb</span><span className="text-gray-400">)</span>
                    <span className="text-orange-400">-[:HAS_VETO_POWER_ON]-&gt;</span>
                    <span className="text-gray-400">(</span><span className="text-purple-300">opportunity</span><span className="text-gray-400">)</span>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 pt-4 border-t border-slate-700 flex items-center gap-2 text-green-400 font-semibold">
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
