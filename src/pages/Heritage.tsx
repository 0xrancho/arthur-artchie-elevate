import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Heritage = () => {
  const timeline = [
    {
      name: "William A. Austin (1804-1875)",
      description: "Justice of the Peace for 42 years. Lent law books to young Abraham Lincoln, helping inspire his legal career in Macon County, Illinois."
    },
    {
      name: "Howard B. Austin (1886-1962)",
      description: "Illinois' first Poet Laureate and practicing accountant—proving systems thinking and creative vision belong together."
    },
    {
      name: "Archie Collins (1905-1997)",
      description: "Teacher, musician, and farmer from Nebo, Illinois who became Pike County Area Superintendent—methodical systems thinking that transforms communities."
    },
    {
      name: "Arthur Dean Austin (1929-2025)",
      description: "Pioneer of technology-enabled accounting, adopting IBM 1401 mainframe systems to transform his practice in the 1960s."
    },
    {
      name: "Roger Austin (1961-Present)",
      description: "Four decades of civil engineering consulting, building infrastructure systems that serve communities for generations."
    },
    {
      name: "Joel Austin (1986-Present)",
      description: "AI-powered Opportunity Intelligence—the same DNA that built justice systems and education frameworks now builds trust-based revenue operations."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 bg-cream">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-4">
              <span className="font-mono text-sm text-terracotta font-semibold uppercase tracking-wider">Our Legacy</span>
            </div>
            <h2 className="text-[42px] font-bold leading-[1.2] mb-6">
              Seven Generations of <span className="italic text-[#6B9BD1]">Methodical Impressionism</span>
            </h2>
            <p className="text-xl text-slate mb-12 max-w-[700px] leading-relaxed">
              Arthur & Archie honors two family lineages spanning 200 years of professional services excellence—what we call{' '}
              <strong>Methodical Impressionism</strong>: analytical rigor meets creative vision.
            </p>

            <div className="bg-card p-12 rounded-lg border-l-4 border-gold mb-12" style={{ boxShadow: '0 2px 8px rgba(27, 58, 95, 0.08)' }}>
              <p className="text-lg italic text-navy leading-[1.8]">
                "Seven generations. Two family lineages. One thread: building systems that preserve trust and scale expertise.
                From lending law books to Lincoln in 1828, to mainframe accounting in the 1960s, to AI-powered Opportunity Intelligence today."
              </p>
            </div>

            <div className="space-y-8 max-w-4xl">
              {timeline.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0 relative">
                    <div className="w-3 h-3 bg-terracotta rounded-full mt-2" />
                    {index < timeline.length - 1 && (
                      <div className="absolute top-[12px] left-[5px] w-0.5 h-[60px] bg-terracotta/30" />
                    )}
                  </div>
                  <div className="pb-8">
                    <h4 className="text-xl font-bold mb-2">{item.name}</h4>
                    <p className="text-slate leading-relaxed text-base">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Heritage;
