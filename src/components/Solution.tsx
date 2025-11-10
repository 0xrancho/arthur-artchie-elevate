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
          Intelligence infrastructure that saves knowledge to a locally owned relational graph, add LLM embeddings to make it accessible, and conversational interfaces for different users across the organization.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          <div className="bg-cream p-8 rounded-lg border-t-4 border-terracotta">
            <div className="font-mono text-sm text-terracotta mb-2 font-semibold">01</div>
            <h3 className="text-2xl font-bold mb-4">Conversational Interface</h3>
            <p className="text-slate leading-relaxed text-base">
              Reporting and chat UIs with role and tool based access.
            </p>
          </div>

          <div className="bg-cream p-8 rounded-lg border-t-4 border-terracotta">
            <div className="font-mono text-sm text-terracotta mb-2 font-semibold">02</div>
            <h3 className="text-2xl font-bold mb-4">Functional Tools</h3>
            <p className="text-slate leading-relaxed text-base">
              AI tools for enrichment, research, writing, and computation so humans have more time for judgement and execution.
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
              Agency owned configuration over roles and permissions, integrations, agents, tools, and reporting logic.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
