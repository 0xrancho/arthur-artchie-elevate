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
              42% of the knowledge needed to perform a job exists only in the person doing it. In professional services, that includes the client relationships that drive revenue per employee. When consultants leave or retire, they take the client context, technical decisions, and expansion signals that could have generated your next 3 deals.
            </p>
          </div>
          
          <div className="bg-card p-8 rounded-lg border-l-4 border-terracotta transition-shadow" style={{ boxShadow: '0 2px 8px rgba(27, 58, 95, 0.08)' }}>
            <h3 className="text-2xl font-bold mb-4">The Growth Ceiling</h3>
            <p className="text-slate leading-relaxed text-base">
              Revenue hits a ceiling when client knowledge is trapped in silos. It shouldn't be buried in Navigator, Slack channels, email, project notes, or messy CRMs. Growth requires access and contribution to agency-owned relationship intelligence.
            </p>
          </div>

          <div className="bg-card p-8 rounded-lg border-l-4 border-terracotta transition-shadow" style={{ boxShadow: '0 2px 8px rgba(27, 58, 95, 0.08)' }}>
            <h3 className="text-2xl font-bold mb-4">Why CRMs Fail Consultants</h3>
            <p className="text-slate leading-relaxed text-base">
              CRMs were designed for transactional widget sales, not complex trust-based professional services. Trust is what closes a 6-7 figure deal. Trust is quantified by semantic signals, not deterministic {'{budget, authority, need, timeline}'} lead values.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
