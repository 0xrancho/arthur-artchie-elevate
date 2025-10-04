import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Solution = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <section id="solution" className="py-24 bg-card">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-4">
          <span className="font-mono text-sm text-terracotta font-semibold uppercase tracking-wider">Our Solution</span>
        </div>
        <h2 className="text-[42px] font-bold leading-[1.2] mb-6">
          Relationship Intelligence Architecture
        </h2>
        <p className="text-xl text-slate mb-12 max-w-[700px] leading-relaxed">
          We don't force your relationships into a CRM. We build intelligence systems that work how trust-based 
          businesses actually operate—then use AI to make it accessible across your organization.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-cream p-8 rounded-lg border-t-4 border-terracotta">
            <div className="font-mono text-sm text-terracotta mb-2 font-semibold">01</div>
            <h3 className="text-2xl font-bold mb-4">Conversational Interface</h3>
            <p className="text-slate leading-relaxed text-base">
              Natural, human-centered interaction that feels like working with a trusted colleague, not a database.
            </p>
          </div>
          
          <div className="bg-cream p-8 rounded-lg border-t-4 border-terracotta">
            <div className="font-mono text-sm text-terracotta mb-2 font-semibold">02</div>
            <h3 className="text-2xl font-bold mb-4">Functional Tools</h3>
            <p className="text-slate leading-relaxed text-base">
              AI handles research and analysis while humans handle judgment and relationships.
            </p>
          </div>
          
          <div className="bg-cream p-8 rounded-lg border-t-4 border-terracotta">
            <div className="font-mono text-sm text-terracotta mb-2 font-semibold">03</div>
            <h3 className="text-2xl font-bold mb-4">Vector Knowledge</h3>
            <p className="text-slate leading-relaxed text-base">
              Context-rich, relationship-informed intelligence retrieved through semantic reasoning.
            </p>
          </div>
          
          <div className="bg-cream p-8 rounded-lg border-t-4 border-terracotta">
            <div className="font-mono text-sm text-terracotta mb-2 font-semibold">04</div>
            <h3 className="text-2xl font-bold mb-4">Orchestrated Context</h3>
            <p className="text-slate leading-relaxed text-base">
              AI reasoning that serves human connection, preserving what makes your relationships valuable.
            </p>
          </div>
        </div>
        
        {/* Accordion */}
        <div className="mt-12 border-t border-navy/10 pt-0">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex justify-center items-center gap-2 text-terracotta hover:text-navy font-semibold text-[15px] transition-colors pt-8"
          >
            <span>How It Works</span>
            <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
          
          <div 
            className="overflow-hidden transition-all duration-500 ease-in-out"
            style={{ 
              maxHeight: isExpanded ? '3000px' : '0',
              opacity: isExpanded ? 1 : 0
            }}
          >
            <div className="pt-0 pb-8 space-y-10">
              <div>
                <h3 className="font-mono text-[13px] text-terracotta font-semibold uppercase tracking-[1.5px] mb-4">The Architecture</h3>
                <p className="text-slate leading-[1.8] text-base">
                  Traditional systems treat relationships as database records—fixed fields in rigid tables. Your business doesn't work that way. 
                  Trust-based services run on context, connections, and institutional memory that lives in conversations, not forms.
                </p>
              </div>
              
              <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center my-10">
                <div className="bg-cream border border-navy/15 rounded-lg p-8 transition-all hover:border-terracotta" style={{ boxShadow: '0 2px 8px rgba(212, 116, 94, 0.1)' }}>
                  <h4 className="font-mono text-[11px] text-slate font-semibold uppercase tracking-wide mb-5">Conventional Approach</h4>
                  <ul className="space-y-2">
                    {['Fixed data structures', 'Manual data entry', 'Exact keyword matching', 'Context lost between records', 'One-size-fits-all design'].map((item) => (
                      <li key={item} className="text-navy text-[15px] leading-[1.8] pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-terracotta before:font-bold">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-center text-terracotta text-4xl font-bold opacity-50">→</div>
                
                <div className="bg-cream border border-navy/15 rounded-lg p-8 transition-all hover:border-terracotta" style={{ boxShadow: '0 2px 8px rgba(212, 116, 94, 0.1)' }}>
                  <h4 className="font-mono text-[11px] text-slate font-semibold uppercase tracking-wide mb-5">Relationship Intelligence</h4>
                  <ul className="space-y-2">
                    {['Dynamic knowledge graphs', 'Natural language capture', 'Semantic understanding', 'Connected context across firm', 'Built for your business model'].map((item) => (
                      <li key={item} className="text-navy text-[15px] leading-[1.8] pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-terracotta before:font-bold">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="font-mono text-[13px] text-terracotta font-semibold uppercase tracking-[1.5px] mb-4">Our Process</h3>
                <div className="space-y-4 text-slate leading-[1.8] text-base">
                  <p>
                    This isn't off-the-shelf SaaS—it's strategic infrastructure custom-built for how your firm creates value. 
                    Every professional services firm creates value differently—your delivery model, client relationships, and 
                    decision-making processes are unique.
                  </p>
                  <p>
                    We start with deep discovery: understanding your delivery model, decision-making workflows, and competitive advantages. 
                    Then we architect systems around your actual operations, not force you into someone else's template. Implementation is 
                    phased: we prove value with a focused pilot (typically one practice area or key accounts), then expand based on what 
                    we learn about your team's workflows and data patterns.
                  </p>
                  <p>
                    Throughout, we're building institutional knowledge infrastructure that compounds in value as your firm grows. 
                    Implementation timelines and architectures vary based on firm size, existing systems, and growth objectives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
