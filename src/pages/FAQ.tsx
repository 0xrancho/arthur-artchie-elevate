import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is the ROGER Framework?",
      answer: "The ROGER Framework is our four-stage process that transforms relationship data into campaign-ready revenue opportunities. It consists of: Risk & Reciprocity (trust assessment), Opportunity Intelligence (synthesis of trust and CRM data), Growth Enrichment (contact mapping and lookalike targeting), and Revenue Systems (campaign-ready playbooks with ongoing partnership options)."
    },
    {
      question: "How long does the engagement take?",
      answer: "Our standard engagement is 5 weeks from start to finish. The Audit phase takes 2-3 weeks, followed by the Build phase which takes 6-9 weeks. We deliver actionable intelligence quickly while maintaining the rigor needed for strategic decision-making."
    },
    {
      question: "What is the 5x ROI guarantee?",
      answer: "We're so confident in our approach that we guarantee 5x ROI on your engagement. If you don't see at least 5 times your investment in identified revenue opportunities and relationship intelligence, you don't pay. This guarantee reflects our commitment to delivering tangible, measurable value."
    },
    {
      question: "What kind of data do you need from us?",
      answer: "We work with your existing data sources: CRM exports (even if messy or fragmented), notes from Slack/email/documents, Jira tickets, SharePoint files, and any assessment or engagement data you have. We're designed to synthesize scattered signals into coherent intelligence—you don't need perfect data to get started."
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
              Everything you need to know about our Opportunity Intelligence services.
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
      </main>
      <Footer />
    </div>
  );
};

export default FAQ;
