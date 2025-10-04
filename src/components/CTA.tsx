import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section id="contact" className="py-24 bg-card text-center">
      <div className="max-w-[800px] mx-auto px-6">
        <h2 className="text-[42px] font-bold leading-[1.2] mb-6">
          Ready to Scale Trust-Based Revenue?
        </h2>
        <p className="text-xl text-slate mb-8">
          Let's discuss how Relationship Intelligence can transform your firm.
        </p>
        <Button 
          size="lg" 
          className="bg-terracotta hover:bg-[#C0654E] text-cream font-semibold px-8 py-4 text-base rounded-md transition-all hover:-translate-y-0.5"
          style={{ boxShadow: '0 8px 16px rgba(212, 116, 94, 0.4)' }}
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};
