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
    signals: [
      "New buyers/approvers identified: Janet Rodriguez (CFO), Mike Chen (CIO)",
      "Budget being determined for Oracle/ERP work",
      "Technical pain confirmed: 4-hour batch window",
      "Positioning risk: Mike Chen skeptical of consultants",
      "→ Create \"Nike ERP Modernization\" opportunity"
    ]
  },
  {
    title: "🎫 Jira - January 7, 2025",
    image: jiraImage,
    signals: [
      "Budget confirmed: $5M Q2",
      "Timeline: 6-8 week approval window",
      "Decision-maker confirmed: Janet Rodriguez (CFO), buyer",
      "Urgency factor: Q2 closing soon",
      "→ Update to \"Oracle Inventory Transformation\"",
      "→ Status: Active - Qualifying"
    ]
  },
  {
    title: "💬 Slack - January 9, 2025",
    image: slackImage,
    signals: [
      "Proof point identified: Target success story (2023)",
      "Technical fit confirmed: Solved this exact problem 4x",
      "ROI available: 18-month payback model",
      "Resource allocation: Sarah has relevant expertise",
      "→ Add Target case study to opportunity",
      "→ Assign Sarah Nguyen to presales",
      "→ Next step: Jim to get intro to Janet and Mike"
    ]
  },
  {
    title: "📄 SharePoint - 2023 Success Story",
    image: sharepointImage,
    signals: [
      "Proven ROI model: 18-month payback, $12M annual savings",
      "Technical approach documented",
      "References available: Target, Macy's, Nordstrom",
      "Addresses buyer requirements: Janet needs ROI model",
      "→ Include in proposal materials",
      "→ Prep for CFO-level presentation"
    ]
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
                        <h4 className="text-lg font-bold mb-4 text-navy">Sales Signals</h4>
                        <ul className="space-y-3">
                          {card.signals.map((signal, idx) => (
                            <li
                              key={idx}
                              className={`text-lg leading-relaxed ${
                                signal.startsWith('→')
                                  ? 'font-semibold text-terracotta ml-4'
                                  : 'text-slate'
                              }`}
                            >
                              {signal.startsWith('→') ? signal : `• ${signal}`}
                            </li>
                          ))}
                        </ul>
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
            className="bg-navy hover:bg-[#1B3A5F] text-cream font-semibold px-4 py-4 md:px-8 md:py-6 text-sm md:text-lg rounded-md transition-all hover:-translate-y-0.5 w-full max-w-[90%] md:max-w-2xl text-center whitespace-normal leading-relaxed min-h-[3rem]"
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
            Ask about how Relationship Intelligence can surface invisible revenue
          </Button>
        </div>
      </div>
    </section>
  );
};
