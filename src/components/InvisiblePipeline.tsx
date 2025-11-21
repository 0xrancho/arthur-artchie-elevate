import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import outlookImage from "@/assets/outlook-card.png";
import jiraImage from "@/assets/jira-card.png";
import slackImage from "@/assets/slack-card.png";
import sharepointImage from "@/assets/sharepoint2-card.png";

const carouselData = [
  {
    title: "📧 Outlook - December 5, 2024",
    image: outlookImage,
    summary: "Jim gets notice that the inventory feature request in a current project might fall out of scope with additional pain, risk, and budget parameters.",
    signals: [
      "New buyers/approvers identified",
      "Contact mentions out of scope budget",
      "Pain point mentioned: 4-hour batch window",
      "Risk identified: Mike Chen \"skeptical of consultant\""
    ],
    miss: "This should have created \"Nike ERP Inventory\" as a buying intent signal, but it doesn't qualify as a new Opportunity yet, so it will stay in Jim's head as \"relational context\"."
  },
  {
    title: "🎫 Jira - January 7, 2025",
    image: jiraImage,
    summary: "Client sandwiches high sales signals to an engineer within a Jira task. Andrew tags the PM, and continues his work.",
    signals: [
      "New Budget identified: $5M Q2",
      "New Timeline and Urgency identified: 6-8 weeks with Q2 close",
      "New DM confirmed: Janet Rodriguez, buyer"
    ],
    miss: "This should have instantly updated the ERP Inventory signal to an Active Opportunity, with high urgency."
  },
  {
    title: "💬 Slack - January 9, 2025",
    image: slackImage,
    summary: "Jim and Sarah discuss the Target case study and solution fit for the potential Nike opportunity.",
    signals: [
      "Proof point identified: Target success story (2023)",
      "Risk mitigation identified: Solved exact problem 4x",
      "ROI defined: 18-month payback model",
      "Resource allocation: Sarah has relevant experience"
    ],
    miss: "The Opportunity should have added solution, resourcing, and proof point knowledge, but Jim thinks they don't have clear BANT yet, and Sarah likely did not read the full Jira notes."
  },
  {
    title: "📄 SharePoint - 2023 Success Story",
    image: sharepointImage,
    summary: "Surfacing this case study to the prospect depends on humans coordinating across contexts to know its relevance.",
    signals: [
      "Proven 18-month payback, $12M annual savings",
      "Other case references: Target, Macy's, Nordstrom",
      "ERP Inventory transformation approach detailed"
    ],
    miss: "There should be a red hot \"Nike ERP Inventory\" Opportunity at the top of Jim's pipeline with budget, authority, need, timeline, proof, and solutioning. By the time they figure it out, it may be too late."
  }
];

export const InvisiblePipeline = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  const onSelect = () => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  };

  useState(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  });

  return (
    <section className="py-24 bg-terracotta relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(220, 220, 220, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(220, 220, 220, 0.5) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-4">
          <span className="font-mono text-sm text-cream font-semibold uppercase tracking-wider">Case Study</span>
        </div>
        <h2 className="text-[42px] font-bold leading-[1.2] mb-6 max-w-[900px] text-cream">
          $5M Invisible Pipeline
        </h2>
        <p className="text-xl text-cream/95 leading-relaxed mb-12 max-w-[900px]">
          Scattered intel means teams must rediscover context they already have, and leadership can't forecast
          what they can't see. Small teams survive this. Growing teams hit a ceiling.
        </p>

        {/* Carousel */}
        <div className="relative mb-12">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {carouselData.map((card, index) => (
                <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                  <div className="bg-cream rounded-lg p-8 border border-navy/10" style={{ boxShadow: '0 4px 16px rgba(27, 58, 95, 0.1)' }}>
                    {/* Card Title */}
                    <h3 className="text-2xl font-bold mb-6 text-navy">{card.title}</h3>

                    {/* Card Content - Side by Side on Desktop */}
                    <div className="grid md:grid-cols-2 gap-8">
                      {/* Image */}
                      <div className="flex items-start">
                        <img
                          src={card.image}
                          alt={card.title}
                          className="w-full h-auto rounded-lg border-2 border-navy/20"
                          style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}
                        />
                      </div>

                      {/* Sales Signals */}
                      <div className="flex flex-col justify-center">
                        {/* Summary Header - prominent text */}
                        <p className="text-2xl font-semibold text-navy leading-relaxed mb-8">
                          {card.summary}
                        </p>

                        <h4 className="text-base font-bold mb-3 text-navy uppercase tracking-wide">Sales Signals</h4>
                        <ul className="space-y-2 mb-6">
                          {card.signals.map((signal, idx) => (
                            <li
                              key={idx}
                              className="text-base leading-relaxed text-slate-600 flex items-start gap-2"
                            >
                              <span className="text-green-600 font-bold flex-shrink-0">✓</span>
                              <span>{signal}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                          <p className="text-base leading-relaxed text-red-700">
                            ❌ Opportunity Miss: {card.miss}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-3 shadow-lg border border-navy/10 hover:bg-cream transition-colors"
            aria-label="Previous card"
          >
            <ChevronLeft className="w-6 h-6 text-navy" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-3 shadow-lg border border-navy/10 hover:bg-cream transition-colors"
            aria-label="Next card"
          >
            <ChevronRight className="w-6 h-6 text-navy" />
          </button>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {carouselData.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === selectedIndex
                    ? 'bg-terracotta w-8'
                    : 'bg-navy/20 hover:bg-navy/40'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Summary Text */}
        <div className="text-center mb-8">
          <p className="text-2xl font-medium text-cream leading-relaxed mb-2">
            3 people. 4 systems. 5 weeks. None of them see the complete picture.
          </p>
          <p className="text-xl text-cream/90 leading-relaxed">
            This is how expert-driven growth stalls: institutional knowledge lives in fragments, not systems.
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex flex-col items-center gap-4">
          <ArrowDown className="w-8 h-8 text-cream animate-bounce" />
          <Button
            size="lg"
            className="bg-navy hover:bg-[#1B3A5F] text-cream font-semibold px-8 py-4 text-base rounded-md transition-all hover:-translate-y-0.5"
            style={{ boxShadow: '0 4px 16px rgba(0, 0, 0, 0.3)' }}
            onClick={() => {
              const ctaSection = document.getElementById('contact');
              if (ctaSection) {
                ctaSection.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                  const contactButton = ctaSection.querySelector('button');
                  contactButton?.click();
                }, 500);
              }
            }}
          >
            👋 Help me find invisible revenue
          </Button>
        </div>
      </div>
    </section>
  );
};
