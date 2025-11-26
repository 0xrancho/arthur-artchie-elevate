import { useState } from "react";
import { X } from "lucide-react";
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

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  source?: 'general' | 'prototype' | 'revenue';
}

export const ContactForm = ({ isOpen, onClose, source = 'general' }: ContactFormProps) => {
  const getDescription = () => {
    switch (source) {
      case 'prototype':
        return "Let's talk about building an enrichment prototype.";
      case 'revenue':
        return "Let's talk about finding invisible revenue.";
      default:
        return "Let's discuss how we can help your firm.";
    }
  };
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

      // Map source to CTA name
      const ctaNames: Record<string, string> = {
        'general': 'Schedule Discovery Call',
        'prototype': 'Ask About Prototypes',
        'revenue': 'Find Invisible Revenue',
      };

      // Submit to Airtable
      const result = await submitToAirtable({
        name: validated.name,
        email: validated.email,
        company: validated.company,
        teamSize: validated.teamSize,
        industry: validated.industry,
        description: validated.description,
        source: source,
        sourceUrl: window.location.href,
        sourceCta: ctaNames[source] || source,
      });

      if (!result.success) {
        throw new Error(result.error || 'Failed to submit form');
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", company: "", teamSize: "", industry: "", description: "" });
      onClose();
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy/80 backdrop-blur-sm">
      <div className="bg-cream rounded-lg shadow-xl w-full max-w-md mx-4 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-slate hover:text-navy transition-colors"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="p-8">
          <h3 className="text-2xl font-bold mb-2">Contact Us</h3>
          <p className="text-slate mb-6">{getDescription()}</p>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">Name</label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email</label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div>
              <label htmlFor="company" className="block text-sm font-semibold mb-2">Company</label>
              <Input
                id="company"
                type="text"
                value={formData.company}
                onChange={(e) => handleChange("company", e.target.value)}
                className="w-full"
              />
              {errors.company && <p className="text-red-500 text-sm mt-1">{errors.company}</p>}
            </div>

            <div>
              <label htmlFor="teamSize" className="block text-sm font-semibold mb-2">Team Size</label>
              <Select value={formData.teamSize} onValueChange={(value) => handleChange("teamSize", value)}>
                <SelectTrigger className="w-full">
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

            <div>
              <label htmlFor="industry" className="block text-sm font-semibold mb-2">Industry</label>
              <Select value={formData.industry} onValueChange={(value) => handleChange("industry", value)}>
                <SelectTrigger className="w-full">
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
              <label htmlFor="description" className="block text-sm font-semibold mb-2">Description</label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                className="w-full min-h-[100px]"
              />
              {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
            </div>
            
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-terracotta hover:bg-terracotta/90 text-cream font-semibold"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};