import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";
import { submitToAirtable } from "@/lib/airtable";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().min(1, "Company is required").max(100, "Company must be less than 100 characters"),
  teamSize: z.string().min(1, "Team size is required"),
  industry: z.string().min(1, "Industry is required"),
  description: z.string().trim().min(1, "Description is required").max(1000, "Description must be less than 1000 characters")
});

const industries = [
  { value: "custom-tech-consulting", label: "Custom Technology Consulting" },
  { value: "it-services", label: "IT Services" },
  { value: "system-integration", label: "System Integration" },
  { value: "business-consulting", label: "Business Management Consulting" },
  { value: "ml-data-services", label: "ML and Data Services" },
  { value: "other-professional", label: "Other Professional Services" },
];

const teamSizes = [
  { value: "1-10", label: "1-10 employees" },
  { value: "11-50", label: "11-50 employees" },
  { value: "51-200", label: "51-200 employees" },
  { value: "201-500", label: "201-500 employees" },
  { value: "500+", label: "500+ employees" },
];

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    teamSize: "",
    industry: "",
    description: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      const validated = contactSchema.parse(formData);
      setIsSubmitting(true);

      // Submit to Airtable
      const result = await submitToAirtable({
        ...validated,
        source: 'contact-page',
        sourceUrl: window.location.href,
        sourceCta: 'Contact Page Form',
      });

      if (!result.success) {
        throw new Error(result.error || 'Failed to submit form');
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", company: "", teamSize: "", industry: "", description: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Error",
          description: "Failed to send message. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-24 bg-cream">
          <div className="max-w-[900px] mx-auto px-6">
            <div className="mb-4">
              <span className="font-mono text-sm text-terracotta font-semibold uppercase tracking-wider">Get in Touch</span>
            </div>
            <h2 className="text-[42px] font-bold leading-[1.2] mb-6">
              Let's Start a <span className="italic text-[#6B9BD1]">Conversation</span>
            </h2>
            <p className="text-xl text-slate mb-12 max-w-[700px] leading-relaxed">
              Tell us about your firm and what you're looking to achieve. We'll get back to you within one business day.
            </p>

            <div className="bg-card p-8 md:p-12 rounded-lg" style={{ boxShadow: '0 2px 8px rgba(27, 58, 95, 0.08)' }}>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-navy">Name</label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => handleChange("name", e.target.value)}
                      placeholder="John Smith"
                      className="w-full bg-white"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-navy">Email</label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      placeholder="john@company.com"
                      className="w-full bg-white"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold mb-2 text-navy">Company</label>
                    <Input
                      id="company"
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      placeholder="Acme Inc."
                      className="w-full bg-white"
                    />
                    {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
                  </div>

                  <div>
                    <label htmlFor="teamSize" className="block text-sm font-semibold mb-2 text-navy">Team Size</label>
                    <Select value={formData.teamSize} onValueChange={(value) => handleChange("teamSize", value)}>
                      <SelectTrigger className="w-full bg-white">
                        <SelectValue placeholder="Select team size" />
                      </SelectTrigger>
                      <SelectContent>
                        {teamSizes.map((size) => (
                          <SelectItem key={size.value} value={size.value}>
                            {size.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.teamSize && <p className="text-red-500 text-sm mt-1">{errors.teamSize}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-semibold mb-2 text-navy">Industry</label>
                  <Select value={formData.industry} onValueChange={(value) => handleChange("industry", value)}>
                    <SelectTrigger className="w-full bg-white">
                      <SelectValue placeholder="Select your industry" />
                    </SelectTrigger>
                    <SelectContent>
                      {industries.map((ind) => (
                        <SelectItem key={ind.value} value={ind.value}>
                          {ind.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.industry && <p className="text-red-500 text-sm mt-1">{errors.industry}</p>}
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-semibold mb-2 text-navy">How can we help?</label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    placeholder="Tell us about your goals and challenges..."
                    className="w-full min-h-[150px] bg-white"
                  />
                  {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                </div>

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    size="lg"
                    className="w-full md:w-auto bg-terracotta hover:bg-[#C0654E] text-cream font-semibold px-12 py-4 text-base rounded-md transition-all hover:-translate-y-0.5"
                    style={{ boxShadow: '0 4px 16px rgba(212, 116, 94, 0.3)' }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </div>

            <div className="mt-12 text-center">
              <p className="text-slate">
                Prefer email? Reach us directly at{" "}
                <a href="mailto:hello@arthurandarchie.com" className="text-terracotta font-semibold hover:underline">
                  hello@arthurandarchie.com
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
