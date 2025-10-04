import { useState } from "react";
import { ChevronDown } from "lucide-react";

export const Solution = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <section id="solution" className="py-24 bg-card">
      <div className="container mx-auto px-6">
        <div className="mb-6">
          <span className="font-mono text-sm text-terracotta font-semibold uppercase tracking-wider">Our Solution</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Relationship Intelligence Architecture
        </h2>
        <p className="text-xl text-slate mb-16 max-w-3xl leading-relaxed">
          We don't force your relationships into a CRM. We build intelligence systems that work how trust-based 
          businesses actually operate—then use AI to make it accessible across your organization.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-cream p-8 rounded-lg border-t-4 border-terracotta">
            <div className="font-mono text-sm text-terracotta mb-2">01</div>
            <h3 className="text-2xl font-bold mb-4">Conversational Interface</h3>
            <p className="text-slate leading-relaxed">
              Natural, human-centered interaction that feels like working with a trusted colleague, not a database.
            </p>
          </div>
          
          <div className="bg-cream p-8 rounded-lg border-t-4 border-terracotta">
            <div className="font-mono text-sm text-terracotta mb-2">02</div>
            <h3 className="text-2xl font-bold mb-4">Functional Tools</h3>
            <p className="text-slate leading-relaxed">
              AI handles research and analysis while humans handle judgment and relationships.
            </p>
          </div>
          
          <div className="bg-cream p-8 rounded-lg border-t-4 border-terracotta">
            <div className="font-mono text-sm text-terracotta mb-2">03</div>
            <h3 className="text-2xl font-bold mb-4">Vector Knowledge</h3>
            <p className="text-slate leading-relaxed">
              Context-rich, relationship-informed intelligence retrieved through semantic reasoning.
            </p>
          </div>
          
          <div className="bg-cream p-8 rounded-lg border-t-4 border-terracotta">
            <div className="font-mono text-sm text-terracotta mb-2">04</div>
            <h3 className="text-2xl font-bold mb-4">Orchestrated Context</h3>
            <p className="text-slate leading-relaxed">
              AI reasoning that serves human connection, preserving what makes your relationships valuable.
            </p>
          </div>
        </div>
        
        {/* Accordion */}
        <div className="mt-16 border-t border-navy/10 pt-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex justify-center items-center gap-2 text-terracotta hover:text-navy font-semibold text-base transition-colors group"
          >
            <span>How It Works</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
          
          <div className={`overflow-hidden transition-all duration-500 ${isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            <div className="pt-8 space-y-10">
              <div>
                <h3 className="font-mono text-sm text-terracotta font-semibold uppercase tracking-wider mb-4">The Architecture</h3>
                <p className="text-slate leading-relaxed">
                  Traditional systems treat relationships as database records—fixed fields in rigid tables. Your business doesn't work that way. 
                  Trust-based services run on context, connections, and institutional memory that lives in conversations, not forms.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="bg-cream border border-navy/15 rounded-lg p-8 hover:border-terracotta transition-colors">
                  <h4 className="font-mono text-xs text-slate font-semibold uppercase tracking-wide mb-5">Conventional Approach</h4>
                  <ul className="space-y-2">
                    {['Fixed data structures', 'Manual data entry', 'Exact keyword matching', 'Context lost between records', 'One-size-fits-all design'].map((item) => (
                      <li key={item} className="text-navy text-sm leading-relaxed pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-terracotta before:font-bold" />
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-center text-terracotta text-4xl font-bold opacity-50">→</div>
                
                <div className="bg-cream border border-navy/15 rounded-lg p-8 hover:border-terracotta transition-colors">
                  <h4 className="font-mono text-xs text-slate font-semibold uppercase tracking-wide mb-5">Relationship Intelligence</h4>
                  <ul className="space-y-2">
                    {['Dynamic knowledge graphs', 'Natural language capture', 'Semantic understanding', 'Connected context across firm', 'Built for your business model'].map((item) => (
                      <li key={item} className="text-navy text-sm leading-relaxed pl-6 relative before:content-['→'] before:absolute before:left-0 before:text-terracotta before:font-bold">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="font-mono text-sm text-terracotta font-semibold uppercase tracking-wider mb-4">Our Process</h3>
                <div className="space-y-4 text-slate leading-relaxed">
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
