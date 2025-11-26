export const Problem = () => {
  return (
    <section id="services" className="py-24 bg-terracotta relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(220, 220, 220, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 220, 220, 0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="mb-4">
          <span className="font-mono text-sm text-cream font-semibold uppercase tracking-wider">The Challenge</span>
        </div>
        <h2 className="text-[42px] font-bold leading-[1.2] mb-6 max-w-[900px] text-cream">
          Professional Services BD Is Still Playing Gut-Feel Baseball
        </h2>

        <div className="max-w-[900px] mb-12">
          <p className="text-xl text-cream/95 leading-relaxed mb-4">
            In 2002, the Oakland A's proved that empirical analysis beats scout intuition. They couldn't outspend the Yankees, so they out-analyzed them. Sabermetrics revealed who actually got on base and who just looked good in batting practice.
          </p>
          <p className="text-xl text-cream/95 leading-relaxed mb-4">
            Professional services firms are still running BD the old way: gut feel, relationship memory, and tribal knowledge. Your best rainmakers know their clients deeply. Everyone else is guessing.
          </p>
          <p className="text-xl text-cream leading-relaxed font-semibold">
            The data exists to change this. You just aren't analyzing it.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-cream p-8 rounded-lg border-l-4 border-navy transition-shadow" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)' }}>
            <h3 className="text-2xl font-bold mb-4 text-navy">Hidden Signals</h3>
            <p className="text-slate leading-relaxed text-base">
              A $200K client just raised Series B - you found out on LinkedIn. A CTO mentioned platform rebuild in a retro - your engineer forgot to pass it along. Your BD lead skipped an RFP because they didn't know a coworker had the exact case study. The signals exist. Nobody's connecting them.
            </p>
          </div>

          <div className="bg-cream p-8 rounded-lg border-l-4 border-navy transition-shadow" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)' }}>
            <h3 className="text-2xl font-bold mb-4 text-navy">Lagging Success Metrics</h3>
            <p className="text-slate leading-relaxed text-base">
              You track revenue, utilization, and project health. You don't track how much authority clients delegate to you, how proactively they engage, or how deep your relationships actually go. Which $150K client would happily spend $600K? Which $1M account is quietly leaving?
            </p>
          </div>

          <div className="bg-cream p-8 rounded-lg border-l-4 border-navy transition-shadow" style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.2)' }}>
            <h3 className="text-2xl font-bold mb-4 text-navy">Coordination Failure</h3>
            <p className="text-slate leading-relaxed text-base">
              Partners know their clients. Account managers know their book. Delivery teams spot opportunities. Sales has their pipeline. Nobody shares intelligence. Nobody has a complete view. Leadership doesn't know what opportunities exist until someone asks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
