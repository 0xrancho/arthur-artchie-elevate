export const Problem = () => {
  return (
    <section id="services" className="py-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-4">
          <span className="font-mono text-sm text-terracotta font-semibold uppercase tracking-wider">The Challenge</span>
        </div>
        <h2 className="text-[42px] font-bold leading-[1.2] mb-12 max-w-[700px]">
          Professional Services Run on Relationships. Your Systems Don't.
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-card p-8 rounded-lg border-l-4 border-terracotta transition-shadow" style={{ boxShadow: '0 2px 8px rgba(27, 58, 95, 0.08)' }}>
            <h3 className="text-2xl font-bold mb-4">The Knowledge Crisis</h3>
            <p className="text-slate leading-relaxed text-base">
              42% of the knowledge needed to perform a job exists only in the person doing it. In professional services, that includes the client relationships that drive revenue per employee. When partners retire or leave, decades of earned trust, decision patterns, and relational intelligence walk out the door.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg border-l-4 border-terracotta transition-shadow" style={{ boxShadow: '0 2px 8px rgba(27, 58, 95, 0.08)' }}>
            <h3 className="text-2xl font-bold mb-4">The Growth Ceiling</h3>
            <p className="text-slate leading-relaxed text-base">
              You can't scale what lives in people's heads. Revenue hits a ceiling when your processes and expertise can't transfer beyond siloed teams and individuals. Growth requires systems, not just more talented people.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border-l-4 border-terracotta transition-shadow" style={{ boxShadow: '0 2px 8px rgba(27, 58, 95, 0.08)' }}>
            <h3 className="text-2xl font-bold mb-4">Why CRM Fails</h3>
            <p className="text-slate leading-relaxed text-base">
              CRMs were designed for transactional widget sales, not complex trust-based professional services. CRMs force relationships into rigid schemas designed for a completely different business model.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
