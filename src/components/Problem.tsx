export const Problem = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="mb-6">
          <span className="font-mono text-sm text-terracotta font-semibold uppercase tracking-wider">The Challenge</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-16 max-w-3xl">
          Professional Services Run on Relationships. Your Systems Don't.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-8 rounded-lg border-l-4 border-terracotta shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-4">The Knowledge Crisis</h3>
            <p className="text-slate leading-relaxed">
              $50M+ in relationship intelligence lives in your senior partners' heads—client decision patterns, 
              personal connections, years of earned trust. When they retire or leave, that institutional knowledge walks out the door.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg border-l-4 border-terracotta shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-4">The Growth Ceiling</h3>
            <p className="text-slate leading-relaxed">
              You can't scale what lives in people's heads. Revenue hits a ceiling when your processes and expertise 
              can't transfer beyond founding partners. Growth requires systems, not just more talented people.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg border-l-4 border-terracotta shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-2xl font-bold mb-4">Why CRM Fails</h3>
            <p className="text-slate leading-relaxed">
              Built for transactional widget sales, not trust-based professional services. CRMs force relationships 
              into rigid schemas designed for a completely different business model.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
