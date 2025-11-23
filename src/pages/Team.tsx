import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Team = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 bg-cream">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="mb-4">
              <span className="font-mono text-sm text-terracotta font-semibold uppercase tracking-wider">Our Team</span>
            </div>
            <h2 className="text-[42px] font-bold leading-[1.2] mb-6">
              Meet the Team
            </h2>
            <p className="text-xl text-slate mb-12 max-w-[700px] leading-relaxed">
              Coming soon.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
