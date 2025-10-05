import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { z } from "zod";
import { useToast } from "@/hooks/use-toast";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().min(1, "Company is required").max(100, "Company must be less than 100 characters"),
  description: z.string().trim().min(1, "Description is required").max(1000, "Description must be less than 1000 characters")
});

interface ContactFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactForm = ({ isOpen, onClose }: ContactFormProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
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

      // Send to Airtable
      const airtableApiKey = import.meta.env.VITE_AIRTABLE_API_KEY;
      const airtableBaseId = import.meta.env.VITE_AIRTABLE_BASE_ID;
      const airtableTableName = import.meta.env.VITE_AIRTABLE_TABLE_NAME || 'Contacts';

      if (!airtableApiKey || !airtableBaseId) {
        console.error("Airtable credentials not configured");
        toast({
          title: "Configuration Error",
          description: "Contact form is not properly configured. Please contact support.",
          variant: "destructive",
        });
        return;
      }

      const response = await fetch(
        `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableName}`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${airtableApiKey}`,
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            fields: {
              Name: validated.name,
              Email: validated.email,
              Company: validated.company,
              Description: validated.description,
              'Submitted At': new Date().toISOString(),
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      toast({
        title: "Message sent!",
        description: "We'll get back to you soon.",
      });

      setFormData({ name: "", email: "", company: "", description: "" });
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
          <p className="text-slate mb-6">Let's discuss how we can help your firm.</p>
          
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