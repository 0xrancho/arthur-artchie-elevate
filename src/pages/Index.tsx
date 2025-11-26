import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Solution } from "@/components/Solution";
import { Approach } from "@/components/Approach";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { StickyFooterBar } from "@/components/StickyFooterBar";

const Index = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formSource, setFormSource] = useState<'general' | 'prototype' | 'revenue'>('general');

  const handleOpenForm = (source: 'general' | 'prototype' | 'revenue') => {
    setFormSource(source);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero onOpenForm={handleOpenForm} />
        <Problem />
        <Solution />
        <Approach onOpenForm={handleOpenForm} />
        <CTA onOpenForm={handleOpenForm} />
      </main>
      <Footer />
      <ContactForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        source={formSource}
      />
      <StickyFooterBar />
    </div>
  );
};

export default Index;
