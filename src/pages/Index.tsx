import { useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { InvisiblePipeline } from "@/components/InvisiblePipeline";
import { Solution } from "@/components/Solution";
import { Approach } from "@/components/Approach";
import { Heritage } from "@/components/Heritage";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";

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
        <InvisiblePipeline onOpenForm={handleOpenForm} />
        <Solution />
        <Approach onOpenForm={handleOpenForm} />
        <Heritage />
        <CTA onOpenForm={handleOpenForm} />
      </main>
      <Footer />
      <ContactForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        source={formSource}
      />
    </div>
  );
};

export default Index;
