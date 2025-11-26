import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ContactForm } from "@/components/ContactForm";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const faqs = [
    {
      question: "How long does an engagement take?",
      answer: "Standard engagement is 5 weeks from start to finish. Week 1 for assessment and data collection, Weeks 2-3 for analysis and enrichment, Week 4-5 for synthesis and delivery with strategy session. If we run your motions it's typically an additional 6 - 9 weeks."
    },
    {
      question: "What is the 5x ROI Guarantee?",
      answer: "We're so confident in our approach that we guarantee 5x ROI on your engagement. If you don't see at least 5 times your investment in ROI (an agreed close rate over the opportunities and relationship intelligence we find), you don't pay. This guarantee reflects our commitment to delivering tangible, measurable value."
    },
    {
      question: "What kind of data do you need from us?",
      answer: "We start with your existing data sources: CRM exports or read only APIs (even if messy or fragmented), notes from Slack/email/documents, Jira tickets, Project or SharePoint files. We plug this data into our Trust Analysis and deliver an Assessment tool survey to all customer facing employees to better understand specific nuances about who you engage and how much risk and authority your clients are delegating to your team. This is how we collectively quantify trust with each of your clients to build the base growth model."
    },
    {
      question: "How is this different from traditional CRM consulting?",
      answer: "We don't just organize your data—we quantify trust, identify revenue gaps, and generate actionable growth pathways. Our approach combines trust assessment (Risk & Reciprocity metrics) with AI-powered analysis to reveal undermonetized accounts, vulnerable relationships, and high-potential prospects with warm intro paths."
    },
    {
      question: "What deliverables do we receive?",
      answer: "You receive: (1) Trust scores and relationship depth quantification for every account, (2) Revenue gap analysis identifying undermonetized opportunities, (3) Relationship risk alerts for vulnerable accounts, (4) 50-100 high-conversion expansion contacts, (5) 200+ prospect companies with intro pathways, (6) Campaign-ready playbooks with talk tracks and ROI projections."
    },
    {
      question: "Do you offer ongoing support after the initial engagement?",
      answer: "Yes! While our core engagement delivers complete, actionable intelligence in 5 weeks, we offer optional ongoing partnership for institutional adoption and system integration. This helps embed our methodologies into your revenue operations for sustained growth."
    },
    {
      question: "What types of firms do you work with?",
      answer: "We specialize in trust-based custom solution firms—companies that differentiate through client-level trust rather than product features. This includes professional services, consulting firms, custom software development, systems integrators, and specialized B2B service providers."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 bg-cream">
          <div className="max-w-[900px] mx-auto px-6">
            <div className="mb-4">
              <span className="font-mono text-sm text-terracotta font-semibold uppercase tracking-wider">FAQ</span>
            </div>
            <h2 className="text-[42px] font-bold leading-[1.2] mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate mb-12 max-w-[700px] leading-relaxed">
              Everything you need to know about our Growth Analysis services.
            </p>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-navy/20">
                  <AccordionTrigger className="text-left text-lg font-semibold text-navy hover:text-terracotta">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-base text-slate leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* FAQ CTA Section */}
        <section className="py-24 bg-card text-center">
          <div className="max-w-[900px] mx-auto px-6">
            <h3 className="font-serif text-[32px] text-navy mb-4">
              Still Have Questions?
            </h3>
            <p className="text-lg text-slate leading-relaxed mb-8 max-w-[600px] mx-auto">
              We're happy to walk through how the Growth Analysis works for your
              specific situation. Or try the assessment yourself—it takes 5 minutes
              and you'll see exactly what the output looks like.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-terracotta hover:bg-[#C0654E] text-cream font-semibold px-8 py-4 text-base rounded-md transition-all hover:-translate-y-0.5"
                style={{ boxShadow: '0 4px 16px rgba(212, 116, 94, 0.3)' }}
                onClick={() => setIsFormOpen(true)}
              >
                Schedule a Call
              </Button>
              <Link to="/assessment" className="text-cyan-600 font-semibold text-base hover:underline transition-all flex items-center px-4">
                Try the Growth Assessment →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ContactForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        source="general"
      />
    </div>
  );
};

export default FAQ;
