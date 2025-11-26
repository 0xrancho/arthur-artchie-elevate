import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

interface CTAProps {
  onOpenForm: (source: 'general' | 'prototype' | 'revenue') => void;
}

export const CTA = ({ onOpenForm }: CTAProps) => {
  return (
    <section id="contact" className="py-24 bg-card text-center">
      <div className="max-w-[900px] mx-auto px-6">
        <h2 className="text-[42px] font-bold leading-[1.2] mb-6">
          Ready to Unlock Hidden Revenue?
        </h2>
        <p className="text-xl text-slate mb-6 leading-relaxed">
          5 weeks. 5x ROI in 1 report, or you don't pay.
        </p>
        <p className="text-lg text-slate/80 mb-8 max-w-[700px] mx-auto leading-relaxed">
          We'll analyze your client relationships, identify undermonetized accounts, reveal vulnerable relationships, and deliver 50-100 high-conversion expansion contacts plus 200+ warm prospect pathways.
        </p>

        <div className="mb-8">
          <Button
            size="lg"
            onClick={() => onOpenForm('general')}
            className="bg-terracotta hover:bg-terracotta/90 text-cream font-semibold px-8 py-4 text-base rounded-md transition-all hover:-translate-y-0.5 shadow-terracotta-glow"
          >
            Schedule Discovery Call
          </Button>
        </div>

        {/* Alternative CTA */}
        <div className="pt-6 border-t border-slate/20">
          <p className="text-sm text-slate/60 mb-2">Not ready to talk?</p>
          <Link to="/assessment" className="text-cyan-500 font-semibold text-base hover:underline transition-all">
            Try the 5-Minute Growth Assessment →
          </Link>
        </div>
      </div>
    </section>
  );
};
