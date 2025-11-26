import { useState } from 'react';
import { Button } from '@/components/ui/button';

interface EntryFormProps {
  onComplete: (name: string, email: string, company: string) => void;
}

export const EntryForm = ({ onComplete }: EntryFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [company, setCompany] = useState('');
  const [errors, setErrors] = useState<{ name?: string; email?: string; company?: string }>({});

  const validate = () => {
    const newErrors: { name?: string; email?: string; company?: string } = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Valid email is required';
    }

    if (!company.trim()) {
      newErrors.company = 'Company is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onComplete(name, email, company);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="font-mono text-3xl md:text-4xl font-bold text-white tracking-wider mb-4">
            GROWTH ASSESSMENT
          </h1>
          <p className="text-lg text-gray-300 leading-relaxed max-w-xl mx-auto">
            Answer 20 questions about one account. Get your Trust Intelligence Report.
          </p>
          <p className="text-sm text-gray-400 mt-2 font-mono">Takes about 5 minutes</p>
        </div>

        {/* Entry Form Card */}
        <div
          className="bg-[#1E293B] rounded-lg p-8 md:p-10"
          style={{ boxShadow: '0 8px 24px rgba(0, 0, 0, 0.6), 0 -1px 0 rgba(255, 255, 255, 0.05)' }}
        >
          <div className="mb-6">
            <div className="font-mono text-sm font-bold text-[#22D3EE] tracking-wider mb-2">
              START YOUR ASSESSMENT
            </div>
            <div className="border-t border-gray-700 pt-3">
              <p className="text-gray-300 text-sm leading-relaxed">
                Enter your details to begin. Your assessment will be saved and you can complete it at your own pace.
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name Input */}
            <div>
              <label htmlFor="name" className="block font-mono text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-[#0F172A] border border-gray-700 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#22D3EE] transition-colors"
                placeholder="John Smith"
              />
              {errors.name && (
                <p className="mt-2 text-xs font-mono text-[#EF4444]">{errors.name}</p>
              )}
            </div>

            {/* Email Input */}
            <div>
              <label htmlFor="email" className="block font-mono text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#0F172A] border border-gray-700 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#22D3EE] transition-colors"
                placeholder="john@company.com"
              />
              {errors.email && (
                <p className="mt-2 text-xs font-mono text-[#EF4444]">{errors.email}</p>
              )}
            </div>

            {/* Company Input */}
            <div>
              <label htmlFor="company" className="block font-mono text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                Your Company
              </label>
              <input
                type="text"
                id="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full bg-[#0F172A] border border-gray-700 rounded px-4 py-3 text-white font-mono text-sm focus:outline-none focus:border-[#22D3EE] transition-colors"
                placeholder="Your Company Inc."
              />
              {errors.company && (
                <p className="mt-2 text-xs font-mono text-[#EF4444]">{errors.company}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button
                type="submit"
                className="w-full bg-[#22D3EE] hover:bg-[#0EA5E9] text-[#0F172A] font-mono font-bold py-4 text-sm uppercase tracking-wider transition-all"
              >
                Begin Assessment →
              </Button>
            </div>
          </form>

          {/* Footer Note */}
          <div className="mt-6 pt-6 border-t border-gray-700">
            <p className="text-xs font-mono text-gray-400 text-center">
              ⏱ ~5 minutes • 📊 20 questions • 🔒 Your data is secure
            </p>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-400">
            Questions? Contact us at <span className="text-[#22D3EE] font-mono">hello@arthurandarchie.com</span>
          </p>
        </div>
      </div>
    </div>
  );
};
