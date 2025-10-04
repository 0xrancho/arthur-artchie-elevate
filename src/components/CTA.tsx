import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-card text-center">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Scale Trust-Based Revenue?
          </h2>
          <p className="text-xl text-slate mb-8">
            Let's discuss how Relationship Intelligence can transform your firm.
          </p>
          <Button 
            size="lg" 
            className="bg-terracotta hover:bg-terracotta/90 text-cream font-semibold px-8 py-6 text-base shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
};
