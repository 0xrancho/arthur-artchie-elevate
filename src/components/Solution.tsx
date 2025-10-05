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
      </div>
    </section>
  );
};
